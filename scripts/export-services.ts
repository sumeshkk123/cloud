/**
 * Export services from DB to a JSON file (for translation workflows).
 *
 * Usage:
 *   npx tsx scripts/export-services.ts --locale=en --out=./tmp/services-en.json
 */

import fs from "node:fs";
import path from "node:path";
import { prisma } from "../lib/db/prisma";

type Args = {
  locale: string;
  out: string;
};

function parseArgs(argv: string[]): Args {
  const args: Args = { locale: "en", out: "./tmp/services-en.json" };
  for (const raw of argv) {
    if (raw.startsWith("--locale=")) args.locale = raw.split("=", 2)[1] || "en";
    if (raw.startsWith("--out=")) args.out = raw.split("=", 2)[1] || "./tmp/services-en.json";
  }
  return args;
}

async function main() {
  const { locale, out } = parseArgs(process.argv.slice(2));

  const rows = await prisma.services.findMany({
    where: { locale },
    orderBy: [{ createdAt: "desc" }],
    select: {
      id: true,
      locale: true,
      title: true,
      description: true,
      content: true,
      image: true,
      icon: true,
      keyBenefits: true,
      serviceHighlights: true,
      showOnHomePage: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  const payload = {
    exportedAt: new Date().toISOString(),
    locale,
    count: rows.length,
    items: rows.map((r) => ({
      id: r.id,
      locale: r.locale,
      title: r.title,
      description: r.description,
      content: r.content ?? null,
      image: r.image ?? null,
      icon: r.icon ?? null,
      keyBenefits: r.keyBenefits ?? null,
      serviceHighlights: r.serviceHighlights ?? null,
      showOnHomePage: r.showOnHomePage,
    })),
  };

  const absOut = path.isAbsolute(out) ? out : path.join(process.cwd(), out);
  fs.mkdirSync(path.dirname(absOut), { recursive: true });
  fs.writeFileSync(absOut, JSON.stringify(payload, null, 2), "utf8");

  console.log(`[export-services] Wrote ${rows.length} rows to ${absOut}`);
}

main()
  .catch((err) => {
    console.error("[export-services] Failed:", err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

