/**
 * Script to check icon grouping and see if items are being hidden
 */

import { prisma } from '@/lib/db/prisma';

async function checkIconGrouping() {
  try {
    const allDemos = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      select: { id: true, title: true, icon: true },
      orderBy: { title: 'asc' },
    });

    console.log(`Total English demos: ${allDemos.length}\n`);

    // Group by icon (like listDemoItemsWithLocales does)
    const byIcon = new Map<string, typeof allDemos>();
    for (const demo of allDemos) {
      const iconKey = demo.icon || `no-icon-${demo.id}`;
      if (!byIcon.has(iconKey)) {
        byIcon.set(iconKey, []);
      }
      byIcon.get(iconKey)!.push(demo);
    }

    console.log(`Total icon groups: ${byIcon.size}\n`);

    // Check for icons shared by multiple items
    const sharedIcons: Array<{ icon: string; items: typeof allDemos }> = [];
    for (const [icon, items] of byIcon.entries()) {
      if (items.length > 1) {
        sharedIcons.push({ icon, items });
      }
    }

    if (sharedIcons.length > 0) {
      console.log('⚠️  ICONS SHARED BY MULTIPLE ITEMS (this could cause grouping issues):\n');
      sharedIcons.forEach(({ icon, items }) => {
        console.log(`Icon: ${icon || 'null'} (${items.length} items)`);
        items.forEach(item => {
          console.log(`  - "${item.title}" (ID: ${item.id})`);
        });
        console.log('');
      });
    } else {
      console.log('✓ No shared icons - each item has a unique icon\n');
    }

    // Simulate what listDemoItemsWithLocales returns
    const result: typeof allDemos = [];
    for (const [, group] of byIcon) {
      const primary = group.find((r) => r.locale === 'en') ?? group[0];
      result.push(primary);
    }

    console.log(`\nItems that would be returned by listDemoItemsWithLocales: ${result.length}`);
    result.forEach((item, idx) => {
      console.log(`  ${idx + 1}. ${item.title}`);
    });

    if (result.length !== allDemos.length) {
      console.log(`\n⚠️  WARNING: ${allDemos.length - result.length} items would be hidden due to icon grouping!`);
      const hiddenItems = allDemos.filter(d => !result.find(r => r.id === d.id));
      console.log('\nHidden items:');
      hiddenItems.forEach(item => {
        console.log(`  - "${item.title}" (ID: ${item.id}, icon: ${item.icon || 'none'})`);
      });
    } else {
      console.log('\n✓ All items would be visible');
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkIconGrouping();
