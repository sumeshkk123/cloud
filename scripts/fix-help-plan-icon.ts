/**
 * Script to assign proper icon to Help Plan MLM Software Demo
 */

import { prisma } from '@/lib/db/prisma';

async function fixHelpPlanIcon() {
  console.log('Assigning icon to Help Plan MLM Software Demo...\n');

  try {
    // Find all Help Plan entries
    const helpPlanDemos = await prisma.demo_items.findMany({
      where: {
        title: {
          contains: 'Help Plan',
          mode: 'insensitive',
        },
      },
    });

    console.log(`Found ${helpPlanDemos.length} Help Plan entries\n`);

    // Assign icon to all translations
    const icon = 'remix:RiHeartHandshakeLine'; // From add-remix-fa-icons.ts mapping

    let updatedCount = 0;
    for (const demo of helpPlanDemos) {
      await prisma.demo_items.update({
        where: { id: demo.id },
        data: { icon },
      });
      updatedCount++;
      console.log(`✓ Updated: ${demo.locale} - "${demo.title}" (ID: ${demo.id})`);
    }

    console.log(`\n✓ Successfully updated ${updatedCount} entries with icon: ${icon}`);

    // Verify
    const updated = await prisma.demo_items.findMany({
      where: {
        title: {
          contains: 'Help Plan',
          mode: 'insensitive',
        },
        icon,
      },
    });

    console.log(`\n✓ Verified: ${updated.length} entries now have the icon`);

  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

fixHelpPlanIcon();
