import { prisma } from '@/lib/db/prisma';

async function checkDemoCount() {
  try {
    const englishDemos = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      select: { title: true, icon: true },
      orderBy: { title: 'asc' },
    });

    console.log(`Total English demos: ${englishDemos.length}\n`);
    console.log('Current demos in database:');
    englishDemos.forEach((demo, idx) => {
      console.log(`  ${idx + 1}. ${demo.title} (icon: ${demo.icon || 'none'})`);
    });

    // Expected 22 items
    const expectedDemos = [
      'Matrix MLM Software Demo',
      'Binary MLM Software Demo',
      'MLM Stair Step Plan Software Demo',
      'Spillover Binary Plan Software Demo',
      'MLM Party Plan Software Demo',
      'Repurchase MLM Plan Software Demo',
      'Emgoldex MLM Plan Software Demo',
      'MLM Board Plan Software Demo',
      'MLM Gift Plan Software Demo',
      'MLM Generation Plan Software Demo',
      'Unilevel MLM Software Demo',
      'Crowd Funding MLM Software Demo',
      'Hybrid Plan MLM Software Demo',
      'MMM Global MLM Plan Software Demo',
      'Click Plan MLM Software Demo',
      'Auto-fill Plan MLM Software Demo',
      'X-UP Plan MLM Software Demo',
      'Monoline MLM Plan Software Demo',
      'MLM Forced Matrix Plan',
      'Investment MLM Plan Software Demo',
      'Help Plan MLM Software Demo',
      'Australian MLM Binary Software Demo',
    ];

    console.log(`\n\nExpected: ${expectedDemos.length} demos`);
    console.log(`Current: ${englishDemos.length} demos`);
    console.log(`Missing: ${expectedDemos.length - englishDemos.length} demos\n`);

    const currentTitles = englishDemos.map(d => d.title.toLowerCase().trim());
    const missing: string[] = [];
    const found: string[] = [];

    for (const expected of expectedDemos) {
      const normalizedExpected = expected.toLowerCase().trim();
      const foundDemo = englishDemos.find(d => {
        const normalizedTitle = d.title.toLowerCase().trim();
        return normalizedTitle === normalizedExpected ||
          normalizedTitle.includes(normalizedExpected) ||
          normalizedExpected.includes(normalizedTitle);
      });

      if (foundDemo) {
        found.push(expected);
      } else {
        missing.push(expected);
      }
    }

    if (missing.length > 0) {
      console.log('Missing demos:');
      missing.forEach((demo, idx) => {
        console.log(`  ${idx + 1}. ${demo}`);
      });
    }

    if (found.length > 0) {
      console.log(`\nFound ${found.length} demos:`);
      found.forEach((demo, idx) => {
        const dbDemo = englishDemos.find(d => {
          const normalizedTitle = d.title.toLowerCase().trim();
          const normalizedExpected = demo.toLowerCase().trim();
          return normalizedTitle === normalizedExpected ||
            normalizedTitle.includes(normalizedExpected) ||
            normalizedExpected.includes(normalizedTitle);
        });
        console.log(`  ${idx + 1}. ${demo} → ${dbDemo?.title || 'NOT FOUND'}`);
      });
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkDemoCount();
