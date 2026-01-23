#!/usr/bin/env bash

set -uo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PAGES_FILE="${PAGES_FILE:-"$ROOT_DIR/../pages-all-paths.txt"}"
FIX_MODE="${FIX_MODE:-1}"

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
    app/*|frontend/app/*)
      clean="$line"
      while [[ "$clean" == frontend/* ]]; do
        clean="${clean#frontend/}"
      done
      if [[ -f "$ROOT_DIR/$clean" ]]; then
        PAGES+=("$clean")
      fi
      ;;
    *)
      continue
      ;;
  esac
done < "$PAGES_FILE"

if (( ${#PAGES[@]} == 0 )); then
  echo "No matching pages found in $PAGES_FILE" >&2
  exit 1
fi

lint_failures=0
lint_success=0
declare -a FAILURE_LOGS=()

printf "Linting %d page(s)%s\n" "${#PAGES[@]}" "$( [[ "$FIX_MODE" == "1" ]] && printf " with --fix" )"

for lint_path in "${PAGES[@]}"; do
  safe_name="$(printf '%s' "$lint_path" | tr -c 'A-Za-z0-9._-' '_')"
  tmp_log="$(mktemp "${TMPDIR:-/tmp}/lint-${safe_name}.XXXXXX")"
  log_file="${tmp_log}.log"
  mv "$tmp_log" "$log_file"
  args=(lint --file "$lint_path")
  if [[ "$FIX_MODE" == "1" ]]; then
    args+=(--fix)
  fi

  if "${NEXT_BIN_ARR[@]}" "${args[@]}" >"$log_file" 2>&1; then
    printf "[lint]   OK   %s\n" "$lint_path"
    (( lint_success++ ))
    rm -f "$log_file"
  else
    printf "[lint]   FAIL %s (see %s)\n" "$lint_path" "$log_file"
    FAILURE_LOGS+=("$lint_path -> $log_file")
    (( lint_failures++ ))
  fi
done

printf "\nSummary:\n"
printf "  Lint passed:   %d\n" "$lint_success"
printf "  Lint failed:   %d\n" "$lint_failures"

if (( lint_failures > 0 )); then
  printf "\nFailure logs:\n"
  for entry in "${FAILURE_LOGS[@]}"; do
    printf "  %s\n" "$entry"
  done
  exit 1
fi

exit 0
