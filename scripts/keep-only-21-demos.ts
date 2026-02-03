/**
 * Script to keep only 22 specific demo items and remove the rest
 * Based on the 3 screenshots provided
 */

import { prisma } from '@/lib/db/prisma';

// Exact titles from the 3 screenshots - 22 items to KEEP
const exactTitlesToKeep = [
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

// Normalize titles for comparison (handle variations)
function normalizeTitle(title: string): string {
  return title
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

async function keepOnly21Demos() {
  console.log('='.repeat(50));
  console.log('Keeping only 22 specified demo items...');
  console.log('='.repeat(50));
  console.log('');

  try {
    // Get all demo items
    const allDemos = await prisma.demo_items.findMany({
      select: {
        id: true,
        title: true,
        locale: true,
      },
    });

    console.log(`Total demo items found: ${allDemos.length}`);
    console.log(`Exact titles to keep: ${exactTitlesToKeep.length}\n`);

    // Group by icon (translations share the same icon)
    const demosByIcon = new Map<string, typeof allDemos>();
    for (const demo of allDemos) {
      // Find the English version to get the icon
      const englishDemo = allDemos.find(d =>
        d.locale === 'en' &&
        normalizeTitle(d.title) === normalizeTitle(demo.title)
      );

      if (englishDemo) {
        const icon = englishDemo.title; // Use title as identifier for grouping
        if (!demosByIcon.has(icon)) {
          demosByIcon.set(icon, []);
        }
        demosByIcon.get(icon)!.push(demo);
      }
    }

    // Find which demos to keep (by exact title match)
    const englishDemos = allDemos.filter(d => d.locale === 'en');

    const demosToDelete: string[] = [];
    const demosToKeepIds: string[] = [];

    // Create normalized set of titles to keep
    const normalizedKeepSet = new Set(exactTitlesToKeep.map(normalizeTitle));

    for (const demo of englishDemos) {
      const normalizedTitle = normalizeTitle(demo.title);

      // Check if this title matches any of the keep titles (exact or flexible match)
      let shouldKeep = false;
      let matchedTitle = '';

      for (const keepTitle of exactTitlesToKeep) {
        const normalizedKeep = normalizeTitle(keepTitle);
        // Exact match or flexible match (handles "Plan" variations)
        if (normalizedTitle === normalizedKeep ||
          normalizedTitle.includes(normalizedKeep) ||
          normalizedKeep.includes(normalizedTitle) ||
          // Handle variations like "Stair Step" vs "Stair Step Plan"
          normalizedTitle.replace(/\s*plan\s*/gi, ' ') === normalizedKeep.replace(/\s*plan\s*/gi, ' ') ||
          normalizedKeep.replace(/\s*plan\s*/gi, ' ') === normalizedTitle.replace(/\s*plan\s*/gi, ' ')) {
          shouldKeep = true;
          matchedTitle = keepTitle;
          break;
        }
      }

      // Find all translations of this demo (by matching normalized title)
      const translations = allDemos.filter(d =>
        normalizeTitle(d.title) === normalizedTitle
      );

      if (shouldKeep) {
        demosToKeepIds.push(...translations.map(t => t.id));
        console.log(`✓ Keeping: ${demo.title} (matched: ${matchedTitle}) (${translations.length} translations)`);
      } else {
        demosToDelete.push(...translations.map(t => t.id));
        console.log(`✗ Deleting: ${demo.title} (${translations.length} translations)`);
      }
    }

    console.log(`\nTotal to keep: ${demosToKeepIds.length}`);
    console.log(`Total to delete: ${demosToDelete.length}\n`);

    if (demosToDelete.length === 0) {
      console.log('No demos to delete. All demos match the keep list.');
      return;
    }

    // Delete demos
    console.log('Deleting demos...');
    let deletedCount = 0;
    for (const id of demosToDelete) {
      try {
        await prisma.demo_items.delete({
          where: { id },
        });
        deletedCount++;
      } catch (error) {
        console.error(`Error deleting demo ${id}:`, error);
      }
    }

    console.log(`\n✓ Successfully deleted ${deletedCount} demo items`);
    console.log(`✓ Kept ${demosToKeepIds.length} demo items`);
    console.log('\nRemaining demos:');

    const remainingDemos = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      select: { title: true },
      orderBy: { title: 'asc' },
    });

    remainingDemos.forEach((demo, idx) => {
      console.log(`  ${idx + 1}. ${demo.title}`);
    });

    console.log(`\nTotal remaining: ${remainingDemos.length} demo items (English)`);
    console.log(`\nExpected ${exactTitlesToKeep.length} demos. Missing demos:`);

    const remainingTitles = remainingDemos.map(d => normalizeTitle(d.title));
    const missingDemos: string[] = [];

    for (const expectedTitle of exactTitlesToKeep) {
      const normalizedExpected = normalizeTitle(expectedTitle);
      const found = remainingDemos.some(demo => {
        const normalizedTitle = normalizeTitle(demo.title);
        return normalizedTitle === normalizedExpected ||
          normalizedTitle.includes(normalizedExpected) ||
          normalizedExpected.includes(normalizedTitle);
      });
      if (!found) {
        missingDemos.push(expectedTitle);
      }
    }

    if (missingDemos.length > 0) {
      missingDemos.forEach(title => {
        console.log(`  - ${title}`);
      });
      console.log(`\n⚠ ${missingDemos.length} demos are missing. They may have been deleted earlier.`);
      console.log(`You may need to recreate them or they were already removed.`);
    } else {
      console.log(`  All ${exactTitlesToKeep.length} expected demos are present!`);
    }

  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run if executed directly
if (require.main === module) {
  keepOnly21Demos()
    .then(() => {
      process.exit(0);
    })
    .catch((error) => {
      console.error('Script failed:', error);
      process.exit(1);
    });
}

export { keepOnly21Demos };
