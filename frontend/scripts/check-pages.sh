#!/usr/bin/env bash

set -uo pipefail

NUM_PAGES="${1:-10}"
PORT="${PORT:-3100}"
HOST="${HOST:-127.0.0.1}"
SKIP_RUNTIME="${SKIP_RUNTIME:-0}"

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PAGES_FILE="${PAGES_FILE:-"$ROOT_DIR/../pages-all-paths.txt"}"
REMOVE_LOG_ON_CLEANUP=0
if [[ -n ${LOG_FILE+x} && -n "$LOG_FILE" ]]; then
  LOG_FILE="${LOG_FILE}"
else
  tmp_log="$(mktemp "${TMPDIR:-/tmp}/next-dev-check.XXXXXX")"
  LOG_FILE="${tmp_log}.log"
  : > "$LOG_FILE"
  REMOVE_LOG_ON_CLEANUP=1
fi

IFS=' ' read -r -a NEXT_BIN_ARR <<< "${NEXT_BIN:-npx next}"

if [[ ! -f "$PAGES_FILE" ]]; then
  echo "Pages list not found: $PAGES_FILE" >&2
  exit 1
fi

declare -a PAGES=()
while IFS= read -r raw_line; do
  line="$(printf '%s' "$raw_line" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')"
  [[ -z "$line" ]] && continue
  case "$line" in
    frontend/app/\[lang]/*)
      lint_path="${line#frontend/}"
      if [[ -f "$ROOT_DIR/$lint_path" ]]; then
        PAGES+=("$lint_path")
      fi
      ;;
    *)
      continue
      ;;
  esac
  if (( ${#PAGES[@]} >= NUM_PAGES )); then
    break
  fi
done < "$PAGES_FILE"

if (( ${#PAGES[@]} == 0 )); then
  echo "No eligible pages found in $PAGES_FILE" >&2
  exit 1
fi

DEV_PID=0

cleanup() {
  local exit_code="${1:-0}"
  if (( DEV_PID > 0 )); then
    if kill -0 "$DEV_PID" >/dev/null 2>&1; then
      kill "$DEV_PID" >/dev/null 2>&1 || true
      wait "$DEV_PID" 2>/dev/null || true
    fi
  fi
  if (( REMOVE_LOG_ON_CLEANUP == 1 )); then
    if (( exit_code == 0 )); then
      rm -f "$LOG_FILE"
    else
      echo "Dev server log preserved at $LOG_FILE" >&2
    fi
  fi
}

trap 'cleanup $?' EXIT

start_dev_server() {
  if [[ "$SKIP_RUNTIME" == "1" ]]; then
    return
  fi

  "${NEXT_BIN_ARR[@]}" dev -p "$PORT" --hostname "$HOST" >"$LOG_FILE" 2>&1 &
  DEV_PID=$!

  for attempt in {1..45}; do
    if curl -s "http://$HOST:$PORT" >/dev/null 2>&1; then
      return
    fi
    if ! kill -0 "$DEV_PID" >/dev/null 2>&1; then
      echo "Dev server exited early; see $LOG_FILE" >&2
      exit 1
    fi
    sleep 1
  done
  echo "Timed out waiting for dev server on $HOST:$PORT" >&2
  exit 1
}

lint_failures=0
runtime_failures=0
runtime_skipped=0

start_dev_server

printf "Checking %d page(s)\n" "${#PAGES[@]}"

for lint_path in "${PAGES[@]}"; do
  route="/$(printf '%s' "$lint_path" | sed -E 's#^app/\[lang\]/##; s#/page\.tsx$##')"
  route="${route%/}"
  [[ -z "$route" ]] && route="/"

  safe_name="${lint_path//\//_}"
  lint_log="$(mktemp "${TMPDIR:-/tmp}/lint-${safe_name}.XXXXXX.log")"

  if "${NEXT_BIN_ARR[@]}" lint --file "$lint_path" >"$lint_log" 2>&1; then
    printf "[lint]   OK  %s\n" "$lint_path"
    rm -f "$lint_log"
  else
    printf "[lint]   FAIL %s (see %s)\n" "$lint_path" "$lint_log"
    (( lint_failures++ ))
  fi

  if [[ "$SKIP_RUNTIME" == "1" ]]; then
    (( runtime_skipped++ ))
    continue
  fi

  if [[ "$route" == *"["* ]]; then
    printf "[curl]   SKIP %s (dynamic segment)\n" "$route"
    (( runtime_skipped++ ))
    continue
  fi

  http_code="$(curl -s -o /dev/null -w '%{http_code}' "http://$HOST:$PORT$route" || echo "000")"
  if [[ "$http_code" == "200" ]]; then
    printf "[curl]   200 %s\n" "$route"
  else
    printf "[curl]   %s %s\n" "$http_code" "$route"
    (( runtime_failures++ ))
  fi
done

printf "\nSummary:\n"
printf "  Lint failures: %d\n" "$lint_failures"
printf "  Runtime failures: %d\n" "$runtime_failures"
printf "  Runtime skipped: %d\n" "$runtime_skipped"

if (( lint_failures == 0 && runtime_failures == 0 )); then
  exit 0
else
  exit 1
fi
