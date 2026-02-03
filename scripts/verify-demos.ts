import { prisma } from '../lib/db/prisma';

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

async function verifyDemos() {
  try {
    const allDemos = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      orderBy: { createdAt: 'desc' },
    });

    console.log(`\nDatabase has ${allDemos.length} demo items:\n`);
    allDemos.forEach(demo => {
      const isValid = validDemos.includes(demo.title);
      console.log(`${isValid ? '✓' : '✗'} ${demo.title}`);
    });

    const dbTitles = allDemos.map(d => d.title);
    const missingFromDb = validDemos.filter(title => !dbTitles.includes(title));
    const extraInDb = dbTitles.filter(title => !validDemos.includes(title));

    console.log(`\n✓ ${allDemos.length} items in database`);
    if (missingFromDb.length > 0) {
      console.log(`\n⚠ Missing from database (${missingFromDb.length}):`);
      missingFromDb.forEach(title => console.log(`  - ${title}`));
    }
    if (extraInDb.length > 0) {
      console.log(`\n⚠ Extra in database (${extraInDb.length}):`);
      extraInDb.forEach(title => console.log(`  - ${title}`));
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

verifyDemos()
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
