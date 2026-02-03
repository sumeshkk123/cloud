import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Plan names extracted from images
// Format: { adminDemoTitle: title }
const titleMappings: Record<string, string> = {
  'Investment MLM Plan Software Demo': 'Investment MLM Plan',
  'Help Plan MLM Software Demo': 'Help Plan',
  'Australian MLM Binary Software Demo': 'Australian MLM Binary',
  'MLM Stair Step Plan Software Demo': 'MLM Stair Step Plan',
  'Spillover Binary Plan Software Demo': 'Spillover Binary Plan',
  'MLM Party Plan Software Demo': 'MLM Party Plan',
  'Repurchase MLM Plan Software Demo': 'Repurchase MLM Plan',
  'Emgoldex MLM Plan Software Demo': 'Emgoldex MLM Plan',
  'Matrix MLM Software Demo': 'Matrix Plan',
  'Binary MLM Software Demo': 'Binary Plan',
  'Crowd Funding MLM Software Demo': 'Crowd Funding MLM Plan',
  'Hybrid Plan MLM Software Demo': 'Hybrid Plan',
  'MMM Global MLM Plan Software Demo': 'MMM Global MLM Plan',
  'Click Plan MLM Software Demo': 'Click Plan',
  'Auto-fill Plan MLM Software Demo': 'Auto-fill Plan',
  'X-UP Plan MLM Software Demo': 'X-UP Plan',
  'Monoline MLM Plan Software Demo': 'Monoline Plan',
  'MLM Forced Matrix Plan': 'MLM Forced Matrix Plan',
  'MLM Board Plan Software Demo': 'MLM Board Plan',
  'MLM Gift Plan Software Demo': 'MLM Gift Plan',
  'MLM Generation Plan Software Demo': 'MLM Generation Plan',
  'Unilevel MLM Software Demo': 'Unilevel Plan',
};

async function updatePlanNames() {
  try {
    console.log('Starting plan name updates...\n');

    // Get all demo items (English locale)
    const demoItems = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      select: {
        id: true,
        adminDemoTitle: true,
        title: true,
      },
    });

    console.log(`Found ${demoItems.length} demo items\n`);

    let updatedCount = 0;
    let notFoundCount = 0;
    const notFound: string[] = [];

    for (const item of demoItems) {
      const adminTitle = item.adminDemoTitle?.trim() ?? '';
      const mappedTitle = titleMappings[adminTitle];

      if (mappedTitle) {
        // Update all translations of this demo item (by matching icon)
        const englishItem = await prisma.demo_items.findFirst({
          where: { id: item.id, locale: 'en' },
        });

        if (englishItem) {
          // Find all translations by icon
          const allTranslations = await prisma.demo_items.findMany({
            where: { icon: englishItem.icon },
          });

          // Update title for all translations
          await prisma.demo_items.updateMany({
            where: { icon: englishItem.icon },
            data: { title: mappedTitle },
          });

          console.log(`✓ Updated "${adminTitle}" -> "${mappedTitle}" (${allTranslations.length} translations)`);
          updatedCount++;
        }
      } else {
        console.log(`✗ Not found in mapping: "${adminTitle}"`);
        notFound.push(adminTitle);
        notFoundCount++;
      }
    }

    console.log(`\n=== Summary ===`);
    console.log(`Updated: ${updatedCount} items`);
    console.log(`Not found: ${notFoundCount} items`);

    if (notFound.length > 0) {
      console.log(`\nItems not found in mapping:`);
      notFound.forEach((title) => console.log(`  - ${title}`));
    }

    console.log('\nPlan name updates completed!');
  } catch (error) {
    console.error('Error updating plan names:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

updatePlanNames()
  .then(() => {
    console.log('Script completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Script failed:', error);
    process.exit(1);
  });
