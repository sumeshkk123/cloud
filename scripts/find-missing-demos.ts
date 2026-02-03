/**
 * Script to find missing demo items
 */

import { prisma } from '@/lib/db/prisma';

async function findMissingDemos() {
  try {
    const englishDemos = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      select: { id: true, title: true, icon: true },
      orderBy: { title: 'asc' },
    });

    console.log(`Total English demos: ${englishDemos.length}\n`);
    console.log('Current demos in database:');
    englishDemos.forEach((demo, idx) => {
      console.log(`  ${idx + 1}. ${demo.title} (icon: ${demo.icon || 'none'})`);
    });

    // Expected 22 items from screenshots
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
      console.log('⚠️  MISSING DEMOS:');
      missing.forEach((demo, idx) => {
        console.log(`  ${idx + 1}. ${demo}`);
      });
    } else {
      console.log('✓ All expected demos are present');
    }

    // Check for duplicates
    const titleCounts = new Map<string, number>();
    englishDemos.forEach(demo => {
      const normalizedTitle = demo.title.toLowerCase().trim();
      titleCounts.set(normalizedTitle, (titleCounts.get(normalizedTitle) || 0) + 1);
    });

    const duplicates: string[] = [];
    for (const [title, count] of titleCounts.entries()) {
      if (count > 1) {
        duplicates.push(title);
      }
    }

    if (duplicates.length > 0) {
      console.log('\n⚠️  DUPLICATE TITLES FOUND:');
      duplicates.forEach(title => {
        const count = titleCounts.get(title);
        console.log(`  "${title}" appears ${count} times`);
        const demos = englishDemos.filter(d => d.title.toLowerCase().trim() === title);
        demos.forEach(d => {
          console.log(`    - ID: ${d.id}, Title: "${d.title}"`);
        });
      });
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

findMissingDemos();
