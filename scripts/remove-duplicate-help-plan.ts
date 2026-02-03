/**
 * Script to find and remove duplicate "Help Plan MLM Software Demo" entries
 */

import { prisma } from '@/lib/db/prisma';

async function removeDuplicateHelpPlan() {
  console.log('='.repeat(50));
  console.log('Finding duplicate Help Plan MLM Software Demo entries...');
  console.log('='.repeat(50));
  console.log('');

  try {
    // Find all "Help Plan" related entries (including variations)
    const helpPlanDemos = await prisma.demo_items.findMany({
      where: {
        OR: [
          { title: { contains: 'Help Plan', mode: 'insensitive' } },
          { title: { contains: 'help plan', mode: 'insensitive' } },
        ],
      },
      select: {
        id: true,
        title: true,
        locale: true,
        icon: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'asc', // Keep the oldest one
      },
    });

    console.log(`Found ${helpPlanDemos.length} Help Plan entries:\n`);
    helpPlanDemos.forEach((demo, idx) => {
      console.log(`  ${idx + 1}. ID: ${demo.id}`);
      console.log(`     Title: ${demo.title}`);
      console.log(`     Locale: ${demo.locale}`);
      console.log(`     Icon: ${demo.icon || 'none'}`);
      console.log(`     Created: ${demo.createdAt}`);
      console.log('');
    });

    if (helpPlanDemos.length <= 1) {
      console.log('No duplicates found. Only one Help Plan entry exists.');
      return;
    }

    // Check for exact duplicates: same title AND same locale
    const byKey = new Map<string, typeof helpPlanDemos>();
    for (const demo of helpPlanDemos) {
      // Create a key from locale and exact title (case-sensitive for exact match)
      const key = `${demo.locale}:${demo.title}`;
      if (!byKey.has(key)) {
        byKey.set(key, []);
      }
      byKey.get(key)!.push(demo);
    }

    const duplicatesToDelete: string[] = [];

    // For each unique locale+title combination, keep the first (oldest) and mark others for deletion
    for (const [key, demos] of byKey.entries()) {
      if (demos.length > 1) {
        const [locale, ...titleParts] = key.split(':');
        const title = titleParts.join(':'); // Handle titles that might contain ':'
        console.log(`\n⚠️  DUPLICATE FOUND - Locale "${locale}", Title "${title}" has ${demos.length} entries:`);
        // Keep the first one (oldest)
        const keep = demos[0];
        console.log(`  ✓ Keeping: ${keep.id} (created: ${keep.createdAt})`);

        // Mark others for deletion
        for (let i = 1; i < demos.length; i++) {
          duplicatesToDelete.push(demos[i].id);
          console.log(`  ✗ Deleting: ${demos[i].id} (created: ${demos[i].createdAt})`);
        }
      }
    }

    // Also check for duplicates across all demos (not just Help Plan) to see if there are other issues
    console.log('\n\nChecking for any other duplicates in the database...');
    const allDemos = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      select: { id: true, title: true },
    });

    const titleCounts = new Map<string, number>();
    for (const demo of allDemos) {
      const normalizedTitle = demo.title.toLowerCase().trim();
      titleCounts.set(normalizedTitle, (titleCounts.get(normalizedTitle) || 0) + 1);
    }

    const duplicateTitles: string[] = [];
    for (const [title, count] of titleCounts.entries()) {
      if (count > 1) {
        duplicateTitles.push(title);
        console.log(`  ⚠️  "${title}" appears ${count} times`);
      }
    }

    if (duplicateTitles.length === 0) {
      console.log('  ✓ No other duplicate titles found');
    }

    if (duplicatesToDelete.length === 0) {
      console.log('\nNo duplicates found. Each locale has only one entry.');
      return;
    }

    console.log(`\n\nTotal duplicates to delete: ${duplicatesToDelete.length}`);
    console.log('\nDeleting duplicates...\n');

    // Delete duplicates
    let deletedCount = 0;
    for (const id of duplicatesToDelete) {
      try {
        await prisma.demo_items.delete({
          where: { id },
        });
        deletedCount++;
        console.log(`✓ Deleted: ${id}`);
      } catch (error) {
        console.error(`✗ Error deleting ${id}:`, error);
      }
    }

    console.log(`\n✓ Successfully deleted ${deletedCount} duplicate entries`);

    // Show remaining entries
    const remaining = await prisma.demo_items.findMany({
      where: {
        title: {
          contains: 'Help Plan',
          mode: 'insensitive',
        },
      },
      select: {
        id: true,
        title: true,
        locale: true,
      },
      orderBy: {
        locale: 'asc',
      },
    });

    console.log(`\nRemaining Help Plan entries: ${remaining.length}`);
    remaining.forEach((demo, idx) => {
      console.log(`  ${idx + 1}. ${demo.locale}: ${demo.title} (ID: ${demo.id})`);
    });

  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run if executed directly
if (require.main === module) {
  removeDuplicateHelpPlan()
    .then(() => {
      process.exit(0);
    })
    .catch((error) => {
      console.error('Script failed:', error);
      process.exit(1);
    });
}

export { removeDuplicateHelpPlan };
