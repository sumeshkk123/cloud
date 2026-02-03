import { prisma } from '../lib/db/prisma';

// All demos from the website
const websiteDemos = [
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

async function findMissingDemo() {
  try {
    console.log('Comparing website demos with database...\n');

    // Get all English demo items
    const dbDemos = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      select: { title: true },
    });

    const dbTitles = dbDemos.map(d => d.title);
    const websiteSet = new Set(websiteDemos);
    const dbSet = new Set(dbTitles);

    console.log(`Website has: ${websiteDemos.length} demos`);
    console.log(`Database has: ${dbDemos.length} demos\n`);

    // Find missing in database
    const missingInDb = websiteDemos.filter(title => !dbSet.has(title));

    // Find extra in database
    const extraInDb = dbTitles.filter(title => !websiteSet.has(title));

    if (missingInDb.length > 0) {
      console.log(`⚠ Missing in database (${missingInDb.length}):`);
      missingInDb.forEach(title => console.log(`  - ${title}`));
      console.log('');
    }

    if (extraInDb.length > 0) {
      console.log(`⚠ Extra in database (${extraInDb.length}):`);
      extraInDb.forEach(title => console.log(`  - ${title}`));
      console.log('');
    }

    if (missingInDb.length === 0 && extraInDb.length === 0) {
      console.log('✓ All demos match!');
      console.log('\nAll database titles:');
      dbTitles.sort().forEach((title, idx) => {
        console.log(`  ${idx + 1}. ${title}`);
      });
    }

    // Check for similar titles (case-insensitive, partial matches)
    console.log('\n\nChecking for similar titles (case-insensitive)...');
    const dbTitlesLower = dbTitles.map(t => t.toLowerCase());
    websiteDemos.forEach(websiteTitle => {
      const websiteLower = websiteTitle.toLowerCase();
      if (!dbTitlesLower.includes(websiteLower)) {
        // Try to find partial matches
        const partialMatches = dbTitles.filter(dbTitle =>
          dbTitle.toLowerCase().includes(websiteLower) ||
          websiteLower.includes(dbTitle.toLowerCase())
        );
        if (partialMatches.length > 0) {
          console.log(`\n"${websiteTitle}" not found, but similar titles exist:`);
          partialMatches.forEach(match => console.log(`  - ${match}`));
        }
      }
    });

  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

findMissingDemo()
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
