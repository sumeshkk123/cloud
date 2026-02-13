/**
 * Backfill image and icon for demo_items by matching title (English).
 * Use after seed when demos have title but missing image/icon.
 * Also removes duplicate demo rows created by restore-english-demos-direct when it created instead of updated.
 *
 * Usage: npx tsx scripts/backfill-demo-images-icons.ts
 */

import { prisma } from "../lib/db/prisma";

// Map title -> { image, icon }. Include both restore-direct and seed-demo-items title variants.
const TITLE_TO_IMAGE_ICON: Array<{ titles: string[]; image: string; icon: string }> = [
  { titles: ["Australian MLM Binary Software Demo", "Australian Binary MLM Software Demo"], image: "/uploads/upload-1769689506493-143jvr7blosm.webp", icon: "remix:RiGitBranchFill" },
  { titles: ["Auto-fill Plan MLM Software Demo", "Auto-fill MLM Software Demo"], image: "/uploads/upload-1769689120454-ydresa63ach.webp", icon: "remix:RiFlashlightLine" },
  { titles: ["Binary MLM Software Demo"], image: "/uploads/upload-1769689063154-8nap8lfdzj2.webp", icon: "remix:RiGitBranchLine" },
  { titles: ["Click Plan MLM Software Demo"], image: "/uploads/upload-1769689265662-hafdmw6587u.webp", icon: "remix:RiCursorLine" },
  { titles: ["Crowd Funding MLM Software Demo"], image: "/uploads/upload-1769685489477-tiv0kkjv7er.webp", icon: "remix:RiCoinsLine" },
  { titles: ["Emgoldex MLM Plan Software Demo", "Emgoldex MLM Software Demo"], image: "/uploads/upload-1769745211183-4lcv1dtduv2.webp", icon: "remix:RiRefreshLine" },
  { titles: ["Help Plan MLM Software Demo"], image: "/uploads/upload-1769685500512-2vpzqad83lf.webp", icon: "remix:RiHeartAddFill" },
  { titles: ["Hybrid Plan MLM Software Demo", "Hybrid MLM Software Demo"], image: "/uploads/upload-1769689136187-n81bq49rc5.webp", icon: "remix:RiStickyNoteFill" },
  { titles: ["Investment MLM Plan Software Demo", "Investment Plan MLM Software Demo"], image: "/uploads/upload-1769689076229-dwt635hrjj.webp", icon: "remix:RiHourglassFill" },
  { titles: ["Matrix MLM Software Demo"], image: "/uploads/upload-1769685356693-76bwwi7doca.webp", icon: "remix:RiGridLine" },
  { titles: ["MLM Board Plan Software Demo", "Board MLM Software Demo"], image: "/uploads/upload-1769689294290-ro2da7wj9di.webp", icon: "remix:RiLayoutGridLine" },
  { titles: ["MLM Forced Matrix Plan", "Forced Matrix MLM Software Demo"], image: "/uploads/upload-1769745344014-ipd9p9d8x4c.webp", icon: "fontawesome:faBoxesAlt" },
  { titles: ["MLM Generation Plan Software Demo", "MLM Generation Software Demo"], image: "/uploads/upload-1769689148128-hhc25h0k9os.webp", icon: "remix:RiStackLine" },
  { titles: ["MLM Gift Plan Software Demo", "Gift MLM Software Demo"], image: "/uploads/upload-1769689158481-3v8gh4uocwm.webp", icon: "remix:RiGiftLine" },
  { titles: ["MLM Party Plan Software Demo", "Party MLM Software Demo"], image: "/uploads/upload-1769689280263-84fa9itsvti.webp", icon: "remix:RiCakeLine" },
  { titles: ["MLM Stair Step Plan Software Demo", "Stair Step MLM Software Demo"], image: "/uploads/upload-1769689255436-cvy3zyolv4m.webp", icon: "remix:RiStairsLine" },
  { titles: ["MMM Global MLM Plan Software Demo"], image: "", icon: "remix:RiQuestionLine" },
  { titles: ["Monoline MLM Plan Software Demo", "Monoline MLM Software Demo"], image: "/uploads/upload-1769689091044-0l3iidsy7d.webp", icon: "remix:RiSubtractLine" },
  { titles: ["Repurchase MLM Plan Software Demo", "Repurchase MLM Software Demo"], image: "/uploads/upload-1769689244605-7d35sijipfr.webp", icon: "remix:RiRepeatLine" },
  { titles: ["Spillover Binary MLM Software Demo"], image: "/uploads/upload-1769685469361-acywbsf59qf.webp", icon: "remix:RiGitMergeLine" },
  { titles: ["Unilevel MLM Software Demo"], image: "/uploads/upload-1769685376073-3dd7jwbmb5s.webp", icon: "remix:RiTeamLine" },
  { titles: ["X-UP Plan MLM Software Demo", "Australian X-UP MLM Software Demo"], image: "/uploads/upload-1769689433069-kxf4z8jto7n.webp", icon: "remix:RiArrowUpLine" },
];

const DUPLICATE_IDS_TO_REMOVE = [
  "7728e261-f865-42af-ab6b-33fb72ed0da4", "47af82b5-7eb8-4417-96ef-927649398c56", "5b11e24c-7abd-4e70-bbd6-8816f2ec16f8",
  "b87785f6-d4b4-4e40-ad82-555130d2ee35", "3a46c0f4-c72d-46f6-9d99-5827e8ab0300", "4febff9c-8e2f-41ea-b729-2210d1ba8b6d",
  "0fe07581-c40f-48bd-9073-8be38d7f0876", "9cbc510b-961d-44ec-ab18-c20b25088708", "d1709778-87bf-4e9d-bdf8-ca532c443922",
  "dd3c408e-e3d3-4d8b-82ab-9e43513fac7f", "49b3bf35-c3c9-4f7d-91a6-b137593bced6", "597f839f-67db-4579-aeb6-716078c34428",
  "ee2c7e2b-4094-4e80-85e7-9a2a602bcc39", "cf960feb-3807-41aa-bd83-e58582aad2f2", "c7668c54-ea97-4b88-9239-c9e48d06a280",
  "1ad76e94-60f6-44fc-a074-76961f581b7a", "c5c33632-11e8-44b8-bfa1-04b01c15a546", "1a3b1cdd-daf6-4223-8e7c-ba7848784a47",
  "d1635ea3-1431-4c34-8f7f-b208d5488ac8", "627a66c7-17a0-4fc5-9f64-5da1343a3957", "3162c8a3-2f57-4b5a-8fef-85a9ba16c38b",
  "6ab60837-a510-481a-9176-fb6c075b7280",
];

async function main() {
  console.log("Backfilling demo_items image and icon by title...\n");

  const toRemove = await prisma.demo_items.findMany({
    where: { id: { in: DUPLICATE_IDS_TO_REMOVE } },
    select: { id: true, title: true },
  });
  if (toRemove.length > 0) {
    await prisma.demo_items.deleteMany({ where: { id: { in: DUPLICATE_IDS_TO_REMOVE } } });
    console.log(`Removed ${toRemove.length} duplicate demo row(s).\n`);
  }

  let updated = 0;
  for (const { titles, image, icon } of TITLE_TO_IMAGE_ICON) {
    let existing: { id: string; icon: string | null } | null = null;
    let matchedTitle = "";
    for (const title of titles) {
      const row = await prisma.demo_items.findFirst({
        where: { title, locale: "en" },
        select: { id: true, icon: true },
      });
      if (row) {
        existing = row;
        matchedTitle = title;
        break;
      }
    }
    if (!existing) continue;
    await prisma.demo_items.update({
      where: { id: existing.id },
      data: { image: image || undefined, icon, updatedAt: new Date() },
    });
    // All translations share the same icon; give them the image too
    await prisma.demo_items.updateMany({
      where: { icon },
      data: { image: image || "", updatedAt: new Date() },
    });
    updated++;
    console.log(`  ✓ ${matchedTitle}`);
  }
  console.log(`\nUpdated ${updated} demo(s) with image and icon.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
