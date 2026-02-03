/**
 * Script to check for all Help Plan entries, including variations
 */

import { prisma } from '@/lib/db/prisma';

async function checkHelpPlanDuplicates() {
  console.log('Checking for all Help Plan entries...\n');

  try {
    // Get ALL demo items
    const allDemos = await prisma.demo_items.findMany({
      select: {
        id: true,
        title: true,
        locale: true,
        icon: true,
      },
      orderBy: [
        { locale: 'asc' },
        { title: 'asc' },
      ],
    });

    // Find all entries containing "help plan" (case insensitive)
    const helpPlanEntries = allDemos.filter(demo =>
      demo.title?.toLowerCase().includes('help plan')
    );

    console.log(`Found ${helpPlanEntries.length} entries containing "Help Plan":\n`);

    // Group by locale
    const byLocale = new Map<string, typeof helpPlanEntries>();
    for (const entry of helpPlanEntries) {
      if (!byLocale.has(entry.locale)) {
        byLocale.set(entry.locale, []);
      }
      byLocale.get(entry.locale)!.push(entry);
    }

    for (const [locale, entries] of Array.from(byLocale.entries()).sort()) {
      console.log(`Locale: ${locale} (${entries.length} entries)`);
      entries.forEach((entry, idx) => {
        console.log(`  ${idx + 1}. ID: ${entry.id}`);
        console.log(`     Title: "${entry.title}"`);
        console.log(`     Icon: ${entry.icon || 'none'}`);
        console.log('');
      });
    }

    // Check for exact duplicates (same title + same locale)
    const duplicates: Array<{ locale: string; title: string; ids: string[] }> = [];
    for (const [locale, entries] of byLocale.entries()) {
      const byTitle = new Map<string, typeof entries>();
      for (const entry of entries) {
        const titleKey = entry.title?.toLowerCase().trim() || '';
        if (!byTitle.has(titleKey)) {
          byTitle.set(titleKey, []);
        }
        byTitle.get(titleKey)!.push(entry);
      }

      for (const [title, entriesWithSameTitle] of byTitle.entries()) {
        if (entriesWithSameTitle.length > 1) {
          duplicates.push({
            locale,
            title,
            ids: entriesWithSameTitle.map(e => e.id),
          });
        }
      }
    }

    if (duplicates.length > 0) {
      console.log('\n⚠️  EXACT DUPLICATES FOUND:\n');
      duplicates.forEach((dup, idx) => {
        console.log(`  ${idx + 1}. Locale: ${dup.locale}, Title: "${dup.title}"`);
        console.log(`     IDs: ${dup.ids.join(', ')}`);
        console.log('');
      });
    } else {
      console.log('\n✓ No exact duplicates found (same title + same locale)');
    }

    // Check English entries specifically
    const englishEntries = helpPlanEntries.filter(e => e.locale === 'en');
    console.log(`\nEnglish entries: ${englishEntries.length}`);
    englishEntries.forEach((entry, idx) => {
      console.log(`  ${idx + 1}. "${entry.title}" (ID: ${entry.id})`);
    });

  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

checkHelpPlanDuplicates();
