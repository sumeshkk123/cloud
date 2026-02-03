/**
 * Backfill `features` translations for missing locales.
 *
 * - Reads source locale rows (default: en)
 * - Creates missing rows for target locales (default: es,it,de,pt,zh)
 * - Does NOT overwrite existing rows
 * - Does NOT delete anything
 *
 * Usage:
 *   node --loader ts-node/esm scripts/backfill-features-locales.ts --dry-run
 *   node --loader ts-node/esm scripts/backfill-features-locales.ts --apply
 *
 * If your project doesn't use ts-node, run via:
 *   npx tsx scripts/backfill-features-locales.ts --dry-run
 *   npx tsx scripts/backfill-features-locales.ts --apply
 */

import { prisma } from "../lib/db/prisma";

type Args = {
  source: string;
  locales: string[];
  apply: boolean;
};

function parseArgs(argv: string[]): Args {
  const args: Args = {
    source: "en",
    locales: ["es", "it", "de", "pt", "zh"],
    apply: false,
  };

  for (const raw of argv) {
    if (raw === "--apply") args.apply = true;
    if (raw === "--dry-run") args.apply = false;
    if (raw.startsWith("--source=")) args.source = raw.split("=", 2)[1] || "en";
    if (raw.startsWith("--locales=")) {
      const list = (raw.split("=", 2)[1] || "").split(",").map(s => s.trim()).filter(Boolean);
      if (list.length) args.locales = list;
    }
  }

  return args;
}

async function main() {
  const { source, locales, apply } = parseArgs(process.argv.slice(2));

  if (!locales.length) {
    console.error("[backfill-features-locales] No target locales provided.");
    process.exitCode = 1;
    return;
  }

  const sourceFeatures = await prisma.features.findMany({
    where: { locale: source },
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      icon: true,
      category: true,
      hasDetailPage: true,
      showOnHomePage: true,
      locale: true,
      features: true,
    },
  });

  if (sourceFeatures.length === 0) {
    console.warn(`[backfill-features-locales] No features found for source locale "${source}". Nothing to do.`);
    return;
  }

  console.log(`[backfill-features-locales] Source locale: ${source}`);
  console.log(`[backfill-features-locales] Target locales: ${locales.join(", ")}`);
  console.log(`[backfill-features-locales] Mode: ${apply ? "APPLY" : "DRY-RUN"}`);
  console.log(`[backfill-features-locales] Source rows: ${sourceFeatures.length}`);

  const sourceById = new Map(sourceFeatures.map((f) => [f.id, f]));

  for (const locale of locales) {
    const existing = await prisma.features.findMany({
      where: { locale, id: { in: [...sourceById.keys()] } },
      select: { id: true },
    });
    const existingIds = new Set(existing.map((e) => e.id));

    const toCreate = sourceFeatures
      .filter((f) => !existingIds.has(f.id))
      .map((f) => ({
        id: f.id,
        locale,
        slug: f.slug,
        title: f.title,
        description: f.description,
        icon: f.icon,
        category: f.category,
        hasDetailPage: f.hasDetailPage,
        showOnHomePage: f.showOnHomePage,
        features: f.features ?? null,
        updatedAt: new Date(),
      }));

    console.log(
      `[backfill-features-locales] ${locale}: existing=${existingIds.size}, missing=${toCreate.length}`
    );

    if (!apply || toCreate.length === 0) continue;

    // createMany + skipDuplicates ensures we never overwrite existing translations
    await prisma.features.createMany({
      data: toCreate,
      skipDuplicates: true,
    });

    console.log(`[backfill-features-locales] ${locale}: created=${toCreate.length}`);
  }

  console.log("[backfill-features-locales] Done.");
}

main()
  .catch((err) => {
    console.error("[backfill-features-locales] Failed:", err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

