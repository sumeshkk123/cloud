/**
 * Import translated services using the map file produced by `backfill-services-locales.ts`.
 *
 * Safe by default:
 * - updates only rows referenced in the map file
 * - does NOT touch any other services
 *
 * Expected JSON shape:
 * {
 *   "sourceLocale": "en",
 *   "items": [
 *     {
 *       "sourceId": "en-service-id",
 *       "translations": {
 *         "es": { "title": "...", "description": "...", "content": "...", "keyBenefits": [...], "serviceHighlights": [...] },
 *         "zh": { "title": "...", "description": "...", "content": "...", "keyBenefits": [...], "serviceHighlights": [...] }
 *       }
 *     }
 *   ]
 * }
 *
 * Usage:
 *   npx tsx scripts/import-service-translations.ts --in=./tmp/services-translated.json --map=./tmp/services-translation-map.json --dry-run
 *   npx tsx scripts/import-service-translations.ts --in=./tmp/services-translated.json --map=./tmp/services-translation-map.json --apply
 */

import fs from "node:fs";
import path from "node:path";
import { prisma } from "../lib/db/prisma";

type Translation = {
  title: string;
  description: string;
  content?: string | null;
  keyBenefits?: any;
  serviceHighlights?: any;
};

type Payload = {
  sourceLocale?: string;
  items: Array<{
    sourceId: string;
    translations: Record<string, Translation>;
  }>;
};

type MapFile = {
  sourceLocale: string;
  createdAt: string;
  map: Record<string, Record<string, string>>;
};

type Args = {
  input: string;
  map: string;
  apply: boolean;
};

function parseArgs(argv: string[]): Args {
  const args: Args = { input: "", map: "./tmp/services-translation-map.json", apply: false };
  for (const raw of argv) {
    if (raw.startsWith("--in=")) args.input = raw.split("=", 2)[1] || "";
    if (raw.startsWith("--map=")) args.map = raw.split("=", 2)[1] || args.map;
    if (raw === "--apply") args.apply = true;
    if (raw === "--dry-run") args.apply = false;
  }
  return args;
}

async function main() {
  const { input, map, apply } = parseArgs(process.argv.slice(2));
  if (!input) {
    console.error("[import-service-translations] Missing --in=path/to/file.json");
    process.exitCode = 1;
    return;
  }

  const absIn = path.isAbsolute(input) ? input : path.join(process.cwd(), input);
  const absMap = path.isAbsolute(map) ? map : path.join(process.cwd(), map);

  const payload = JSON.parse(fs.readFileSync(absIn, "utf8")) as Payload;
  const mapFile = JSON.parse(fs.readFileSync(absMap, "utf8")) as MapFile;

  console.log(`[import-service-translations] Mode: ${apply ? "APPLY" : "DRY-RUN"}`);
  console.log(`[import-service-translations] Input: ${absIn}`);
  console.log(`[import-service-translations] Map: ${absMap}`);
  console.log(`[import-service-translations] Items: ${payload.items?.length ?? 0}`);

  let updateCount = 0;
  let skippedMissingMap = 0;

  for (const item of payload.items) {
    const sourceId = item.sourceId;
    const mapped = mapFile.map[sourceId];
    if (!mapped) {
      skippedMissingMap += 1;
      continue;
    }

    for (const [locale, t] of Object.entries(item.translations || {})) {
      const targetId = mapped[locale];
      if (!targetId) continue;

      updateCount += 1;
      if (!apply) continue;

      await prisma.services.update({
        where: { id: targetId },
        data: {
          title: t.title,
          description: t.description,
          content: t.content ?? null,
          keyBenefits: (t.keyBenefits as any) ?? null,
          serviceHighlights: (t.serviceHighlights as any) ?? null,
          updatedAt: new Date(),
        },
      });
    }
  }

  console.log(`[import-service-translations] Would update: ${updateCount}`);
  console.log(`[import-service-translations] Skipped (missing map for sourceId): ${skippedMissingMap}`);
  console.log("[import-service-translations] Done.");
}

main()
  .catch((err) => {
    console.error("[import-service-translations] Failed:", err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

