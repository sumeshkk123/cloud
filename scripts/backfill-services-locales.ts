/**
 * Backfill `services` translations for missing locales.
 *
 * IMPORTANT: `services` does NOT use (id, locale) as a compound key in Prisma.
 * Your code links translations by `icon + showOnHomePage` (see `getAllServiceTranslations`),
 * so this script copies EN rows into other locales as separate rows (new IDs).
 *
 * Safe by default:
 * - creates missing rows only
 * - does NOT overwrite existing locale rows
 * - does NOT delete anything
 *
 * It also writes a map file (sourceId -> created targetId) when applying,
 * which you can use later to import real translated text safely.
 *
 * Usage:
 *   npx tsx scripts/backfill-services-locales.ts --dry-run
 *   npx tsx scripts/backfill-services-locales.ts --apply
 *
 * Options:
 *   --source=en
 *   --locales=es,it,de,pt,zh
 *   --map=./tmp/services-translation-map.json
 */

import fs from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { prisma } from "../lib/db/prisma";

type Args = {
  source: string;
  locales: string[];
  apply: boolean;
  mapPath: string;
};

function parseArgs(argv: string[]): Args {
  const args: Args = {
    source: "en",
    locales: ["es", "it", "de", "pt", "zh"],
    apply: false,
    mapPath: "./tmp/services-translation-map.json",
  };

  for (const raw of argv) {
    if (raw === "--apply") args.apply = true;
    if (raw === "--dry-run") args.apply = false;
    if (raw.startsWith("--source=")) args.source = raw.split("=", 2)[1] || "en";
    if (raw.startsWith("--locales=")) {
      const list = (raw.split("=", 2)[1] || "").split(",").map(s => s.trim()).filter(Boolean);
      if (list.length) args.locales = list;
    }
    if (raw.startsWith("--map=")) args.mapPath = raw.split("=", 2)[1] || args.mapPath;
  }
  return args;
}

function serviceKey(s: { icon: string | null; showOnHomePage: boolean; title: string }) {
  // Use title as extra safety to reduce collisions.
  return `${s.icon ?? "no-icon"}__${s.showOnHomePage ? "home" : "no-home"}__${s.title}`;
}

async function main() {
  const { source, locales, apply, mapPath } = parseArgs(process.argv.slice(2));

  const sourceRows = await prisma.services.findMany({
    where: { locale: source },
    select: {
      id: true,
      title: true,
      description: true,
      content: true,
      image: true,
      icon: true,
      keyBenefits: true,
      serviceHighlights: true,
      showOnHomePage: true,
      locale: true,
    },
  });

  console.log(`[backfill-services-locales] Source locale: ${source}`);
  console.log(`[backfill-services-locales] Target locales: ${locales.join(", ")}`);
  console.log(`[backfill-services-locales] Mode: ${apply ? "APPLY" : "DRY-RUN"}`);
  console.log(`[backfill-services-locales] Source rows: ${sourceRows.length}`);

  if (sourceRows.length === 0) return;

  const createdMap: Record<string, Record<string, string>> = {};

  for (const locale of locales) {
    const existing = await prisma.services.findMany({
      where: { locale },
      select: { id: true, title: true, icon: true, showOnHomePage: true },
    });
    const existingKeys = new Set(existing.map((s) => serviceKey({ title: s.title, icon: s.icon ?? null, showOnHomePage: s.showOnHomePage })));

    const toCreate = sourceRows
      .filter((s) => !existingKeys.has(serviceKey({ title: s.title, icon: s.icon ?? null, showOnHomePage: s.showOnHomePage })))
      .map((s) => {
        const newId = randomUUID();
        createdMap[s.id] = createdMap[s.id] || {};
        createdMap[s.id][locale] = newId;
        return {
          id: newId,
          title: s.title,
          description: s.description,
          content: s.content ?? null,
          image: s.image ?? null,
          icon: s.icon ?? null,
          keyBenefits: (s.keyBenefits as any) ?? null,
          serviceHighlights: (s.serviceHighlights as any) ?? null,
          showOnHomePage: s.showOnHomePage,
          locale,
          updatedAt: new Date(),
        };
      });

    console.log(`[backfill-services-locales] ${locale}: existing=${existing.length}, missing=${toCreate.length}`);

    if (!apply || toCreate.length === 0) continue;

    await prisma.services.createMany({ data: toCreate });
    console.log(`[backfill-services-locales] ${locale}: created=${toCreate.length}`);
  }

  if (apply) {
    const abs = path.isAbsolute(mapPath) ? mapPath : path.join(process.cwd(), mapPath);
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, JSON.stringify({ sourceLocale: source, createdAt: new Date().toISOString(), map: createdMap }, null, 2), "utf8");
    console.log(`[backfill-services-locales] Wrote map file: ${abs}`);
  }
}

main()
  .catch((err) => {
    console.error("[backfill-services-locales] Failed:", err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

