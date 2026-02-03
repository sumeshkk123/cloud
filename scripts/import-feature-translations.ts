/**
 * Import translated features from a JSON file.
 *
 * Default behavior is SAFE:
 * - creates missing (id, locale) rows
 * - does NOT overwrite existing rows unless --overwrite is provided
 *
 * Expected JSON shape:
 * {
 *   "sourceLocale": "en",
 *   "items": [
 *     {
 *       "id": "uuid",
 *       "base": { "slug": "...", "icon": "...", "category": "...", "hasDetailPage": true, "showOnHomePage": false },
 *       "translations": {
 *         "es": { "title": "...", "description": "...", "features": ["..."] },
 *         "zh": { "title": "...", "description": "...", "features": ["..."] }
 *       }
 *     }
 *   ]
 * }
 *
 * Usage:
 *   npx tsx scripts/import-feature-translations.ts --in=./tmp/features-translated.json --dry-run
 *   npx tsx scripts/import-feature-translations.ts --in=./tmp/features-translated.json --apply
 *   npx tsx scripts/import-feature-translations.ts --in=./tmp/features-translated.json --apply --overwrite
 */

import fs from "node:fs";
import path from "node:path";
import { prisma } from "../lib/db/prisma";

type Translation = {
  title: string;
  description: string;
  features?: any;
  slug?: string | null;
};

type Payload = {
  sourceLocale?: string;
  items: Array<{
    id: string;
    base: {
      slug?: string | null;
      icon?: string | null;
      category: string;
      hasDetailPage?: boolean;
      showOnHomePage?: boolean;
    };
    translations: Record<string, Translation>;
  }>;
};

type Args = {
  input: string;
  apply: boolean;
  overwrite: boolean;
};

function parseArgs(argv: string[]): Args {
  const args: Args = { input: "", apply: false, overwrite: false };
  for (const raw of argv) {
    if (raw.startsWith("--in=")) args.input = raw.split("=", 2)[1] || "";
    if (raw === "--apply") args.apply = true;
    if (raw === "--dry-run") args.apply = false;
    if (raw === "--overwrite") args.overwrite = true;
  }
  return args;
}

async function main() {
  const { input, apply, overwrite } = parseArgs(process.argv.slice(2));
  if (!input) {
    console.error("[import-feature-translations] Missing --in=path/to/file.json");
    process.exitCode = 1;
    return;
  }

  const absIn = path.isAbsolute(input) ? input : path.join(process.cwd(), input);
  const raw = fs.readFileSync(absIn, "utf8");
  const payload = JSON.parse(raw) as Payload;

  console.log(`[import-feature-translations] Mode: ${apply ? "APPLY" : "DRY-RUN"} (overwrite=${overwrite})`);
  console.log(`[import-feature-translations] File: ${absIn}`);
  console.log(`[import-feature-translations] Items: ${payload.items?.length ?? 0}`);

  let createCount = 0;
  let updateCount = 0;

  for (const item of payload.items) {
    const { id, base, translations } = item;
    for (const [locale, t] of Object.entries(translations || {})) {
      const existing = await prisma.features.findFirst({
        where: { id, locale },
        select: { id: true },
      });

      if (!existing) {
        createCount += 1;
        if (!apply) continue;
        await prisma.features.create({
          data: {
            id,
            locale,
            slug: t.slug ?? base.slug ?? null,
            title: t.title,
            description: t.description,
            icon: base.icon ?? null,
            category: base.category,
            hasDetailPage: base.hasDetailPage ?? false,
            showOnHomePage: base.showOnHomePage ?? false,
            features: t.features ?? null,
            updatedAt: new Date(),
          },
        });
        continue;
      }

      if (overwrite) {
        updateCount += 1;
        if (!apply) continue;
        await prisma.features.updateMany({
          where: { id, locale },
          data: {
            slug: t.slug ?? base.slug ?? null,
            title: t.title,
            description: t.description,
            features: t.features ?? null,
            updatedAt: new Date(),
          },
        });
      }
    }
  }

  console.log(`[import-feature-translations] Would create: ${createCount}`);
  console.log(`[import-feature-translations] Would update: ${updateCount}`);
  console.log("[import-feature-translations] Done.");
}

main()
  .catch((err) => {
    console.error("[import-feature-translations] Failed:", err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

