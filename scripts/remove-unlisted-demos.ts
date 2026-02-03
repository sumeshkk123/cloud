import { prisma } from '../lib/db/prisma';

// Demos that ARE on the website (should keep these)
const validDemos = [
  'Binary MLM Software Demo',
  'Matrix MLM Software Demo',
  'Unilevel MLM Software Demo',
  'MLM Generation Software Demo',
  'Gift MLM Software Demo',
  'Board MLM Software Demo',
  'Party MLM Software Demo',
  'Repurchase MLM Software Demo',
  'Spillover Binary MLM Software Demo',
  'Stair Step MLM Software Demo',
  'Australian Binary MLM Software Demo',
  'Crowd Funding MLM Software Demo',
  'Help Plan MLM Software Demo',
  'Investment Plan MLM Software Demo',
  'Growth Plan MLM Software Demo',
  'Monoline MLM Software Demo',
  'Australian X-UP MLM Software Demo',
  'Auto-fill MLM Software Demo',
  'Click Plan MLM Software Demo',
  'Emgoldex MLM Software Demo',
  'Hybrid MLM Software Demo',
];

async function removeUnlistedDemos() {
  try {
    console.log('Checking for demo items not listed on the website...\n');

    // Get all English demo items
    const allDemos = await prisma.demo_items.findMany({
      where: {
        locale: 'en',
      },
    });

    const demosToDelete: string[] = [];
    const demosToKeep: string[] = [];

    for (const demo of allDemos) {
      if (validDemos.includes(demo.title)) {
        demosToKeep.push(demo.title);
      } else {
        demosToDelete.push(demo.title);
      }
    }

    console.log(`Found ${allDemos.length} demo items in database.`);
    console.log(`✓ ${demosToKeep.length} items match the website (will keep)`);
    console.log(`⚠ ${demosToDelete.length} items NOT on website (will delete)\n`);

    if (demosToDelete.length === 0) {
      console.log('All demo items are valid. Nothing to delete.');
      return;
    }

    console.log('Items to be deleted:');
    demosToDelete.forEach(title => console.log(`  - ${title}`));
    console.log('');

    let deletedCount = 0;

    for (const demoTitle of demosToDelete) {
      // Find all translations of this demo (by icon, since icons are shared)
      const demoToDelete = await prisma.demo_items.findFirst({
        where: {
          title: demoTitle,
          locale: 'en',
        },
      });

      if (demoToDelete) {
        // Find all translations by icon
        const allTranslations = await prisma.demo_items.findMany({
          where: {
            icon: demoToDelete.icon,
          },
        });

        // Delete all translations
        for (const translation of allTranslations) {
          await prisma.demo_items.delete({
            where: { id: translation.id },
          });
        }

        console.log(`✓ Deleted "${demoTitle}" (${allTranslations.length} translation(s))`);
        deletedCount += allTranslations.length;
      }
    }

    console.log(`\n✓ Successfully deleted ${deletedCount} demo item(s) (including translations)`);
    console.log(`✓ Kept ${demosToKeep.length} valid demo item(s)`);
  } catch (error) {
    console.error('Error removing unlisted demos:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

removeUnlistedDemos()
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
