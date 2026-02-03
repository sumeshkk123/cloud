/**
 * Script to fix duplicate icons that cause items to be hidden
 */

import { prisma } from '@/lib/db/prisma';

async function fixDuplicateIcons() {
  console.log('Fixing duplicate icons...\n');

  try {
    // Assign unique icons to items that share icons
    const iconFixes = [
      {
        title: 'Binary MLM Software Demo',
        newIcon: 'remix:RiGitBranchLine', // Keep this one
        note: 'Keeping original icon',
      },
      {
        title: 'Australian MLM Binary Software Demo',
        newIcon: 'remix:RiGitBranchFill', // Filled version to differentiate
        note: 'Changing to filled branch icon to differentiate from Binary and Spillover',
      },
      {
        title: 'Spillover Binary MLM Software Demo',
        newIcon: 'remix:RiGitMergeLine', // Should already have this, but ensure it's set
        note: 'Ensuring merge icon (spillover = merge)',
      },
      {
        title: 'MLM Gift Plan Software Demo',
        newIcon: 'remix:RiGiftLine', // Keep this one
        note: 'Keeping original icon',
      },
      {
        title: 'MLM Party Plan Software Demo',
        newIcon: 'remix:RiCakeLine', // Different icon for party/celebration
        note: 'Changing to celebration icon to differentiate from gift',
      },
    ];

    for (const fix of iconFixes) {
      // Find all translations of this demo
      const demos = await prisma.demo_items.findMany({
        where: {
          title: {
            contains: fix.title,
            mode: 'insensitive',
          },
        },
      });

      if (demos.length === 0) {
        console.log(`⚠️  Not found: ${fix.title}`);
        continue;
      }

      // Update all translations
      for (const demo of demos) {
        await prisma.demo_items.update({
          where: { id: demo.id },
          data: { icon: fix.newIcon },
        });
      }

      console.log(`✓ Updated "${fix.title}" (${demos.length} translations)`);
      console.log(`  Icon: ${fix.newIcon}`);
      console.log(`  Note: ${fix.note}\n`);
    }

    // Verify no duplicates remain
    console.log('\nVerifying icon uniqueness...\n');
    const englishDemos = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      select: { id: true, title: true, icon: true },
    });

    const iconGroups = new Map<string, typeof englishDemos>();
    for (const demo of englishDemos) {
      const iconKey = demo.icon || 'null';
      if (!iconGroups.has(iconKey)) {
        iconGroups.set(iconKey, []);
      }
      iconGroups.get(iconKey)!.push(demo);
    }

    const duplicates = Array.from(iconGroups.entries()).filter(([_, items]) => items.length > 1);
    if (duplicates.length > 0) {
      console.log('⚠️  Still have duplicate icons:');
      duplicates.forEach(([icon, items]) => {
        console.log(`  Icon "${icon}": ${items.length} items`);
        items.forEach(item => console.log(`    - ${item.title}`));
      });
    } else {
      console.log('✓ All icons are now unique!');
    }

  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

fixDuplicateIcons();
