/**
 * Seed the services table with default English rows.
 * Use after data loss to restore services that match the site's service pages.
 *
 * Usage: npx tsx scripts/seed-services.ts
 */

import { prisma } from "../lib/db/prisma";

const now = new Date();

const DEFAULT_SERVICES_EN: Array<{
  title: string;
  description: string;
  content: string | null;
  image: string | null;
  icon: string | null;
  showOnHomePage: boolean;
  keyBenefits: unknown;
}> = [
  {
    title: "MLM Software Development",
    description: "Custom MLM software development tailored to your compensation plans and business rules.",
    content: null,
    image: null,
    icon: "remix:RiCodeLine",
    showOnHomePage: true,
    keyBenefits: null,
  },
  {
    title: "Compensation Plan Audit",
    description: "Expert review of your compensation plan for compliance, clarity, and scalability.",
    content: null,
    image: null,
    icon: "remix:RiFileList3Line",
    showOnHomePage: true,
    keyBenefits: null,
  },
  {
    title: "E-commerce Integration",
    description: "Integrate your MLM platform with e-commerce systems for seamless order and commission flow.",
    content: null,
    image: null,
    icon: "remix:RiShoppingCartLine",
    showOnHomePage: true,
    keyBenefits: null,
  },
  {
    title: "Magento Development",
    description: "Magento development and integration with Cloud MLM Software for unified commerce.",
    content: null,
    image: null,
    icon: "remix:RiStoreLine",
    showOnHomePage: false,
    keyBenefits: null,
  },
  {
    title: "OpenCart Development",
    description: "OpenCart development and integration with your MLM and direct selling business.",
    content: null,
    image: null,
    icon: "remix:RiStoreLine",
    showOnHomePage: false,
    keyBenefits: null,
  },
  {
    title: "Shopify Integration",
    description: "Connect Cloud MLM Software with Shopify for orders, inventory, and commissions.",
    content: null,
    image: null,
    icon: "remix:RiLinksLine",
    showOnHomePage: true,
    keyBenefits: null,
  },
  {
    title: "Web Development",
    description: "Professional web development for your MLM or direct selling company.",
    content: null,
    image: null,
    icon: "remix:RiCodeSSlashLine",
    showOnHomePage: false,
    keyBenefits: null,
  },
  {
    title: "Website Designing",
    description: "Modern website design and UX for MLM and direct selling brands.",
    content: null,
    image: null,
    icon: "remix:RiLayoutLine",
    showOnHomePage: false,
    keyBenefits: null,
  },
  {
    title: "WooCommerce Integration",
    description: "WooCommerce integration with Cloud MLM Software for WordPress-based stores.",
    content: null,
    image: null,
    icon: "remix:RiLinksLine",
    showOnHomePage: false,
    keyBenefits: null,
  },
];

async function main() {
  console.log("Seeding services table (locale: en)...\n");

  const existing = await prisma.services.count({ where: { locale: "en" } });
  if (existing > 0) {
    console.log(`Found ${existing} existing English service(s). Skipping seed to avoid duplicates.`);
    console.log("To re-seed, delete existing services first (e.g. from admin or DB).\n");
    return;
  }

  const data = DEFAULT_SERVICES_EN.map((s) => ({
    title: s.title,
    description: s.description,
    content: s.content,
    image: s.image,
    icon: s.icon,
    showOnHomePage: s.showOnHomePage,
    locale: "en",
    updatedAt: now,
    keyBenefits: s.keyBenefits,
  }));

  await prisma.services.createMany({ data });
  console.log(`Created ${data.length} service(s).`);
  DEFAULT_SERVICES_EN.forEach((s) => console.log(`  - ${s.title}`));
  console.log("\nDone. You can add more locales via: npx tsx scripts/backfill-services-locales.ts --apply");
}

main()
  .catch((err) => {
    console.error("Seed failed:", err);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());
