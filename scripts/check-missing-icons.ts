/**
 * Script to check which demo items are missing icons
 */

import { prisma } from '@/lib/db/prisma';

async function checkMissingIcons() {
  try {
    // Check all locales
    const allDemos = await prisma.demo_items.findMany({
      select: { id: true, title: true, icon: true, locale: true },
      orderBy: [{ locale: 'asc' }, { title: 'asc' }],
    });

    console.log(`Total demo items (all locales): ${allDemos.length}\n`);

    const missingIcons = allDemos.filter(demo => !demo.icon || demo.icon.trim() === '');

    if (missingIcons.length > 0) {
      console.log(`⚠️  ${missingIcons.length} items missing icons:\n`);

      // Group by locale
      const byLocale = new Map<string, typeof missingIcons>();
      for (const demo of missingIcons) {
        if (!byLocale.has(demo.locale)) {
          byLocale.set(demo.locale, []);
        }
        byLocale.get(demo.locale)!.push(demo);
      }

      for (const [locale, demos] of Array.from(byLocale.entries()).sort()) {
        console.log(`\nLocale: ${locale} (${demos.length} items missing icons)`);
        demos.forEach((demo, idx) => {
          console.log(`  ${idx + 1}. "${demo.title}" (ID: ${demo.id})`);
        });
      }
    } else {
      console.log('✓ All items have icons assigned');
    }

    // Check English specifically
    const englishDemos = allDemos.filter(d => d.locale === 'en');
    console.log(`\n\nEnglish demos (${englishDemos.length}):`);
    englishDemos.forEach((demo, idx) => {
      const iconStatus = demo.icon ? `✓ ${demo.icon}` : '✗ MISSING';
      console.log(`  ${idx + 1}. ${demo.title}: ${iconStatus}`);
    });

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkMissingIcons();
