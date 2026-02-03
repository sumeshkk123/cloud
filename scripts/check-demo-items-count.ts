import { prisma } from '../lib/db/prisma';

async function checkDemoItems() {
  try {
    const total = await prisma.demo_items.count();
    console.log(`Total demo_items: ${total}`);

    const byLocale = await prisma.demo_items.groupBy({
      by: ['locale'],
      _count: true,
    });

    console.log('\nBy locale:');
    byLocale.forEach((item) => {
      console.log(`  ${item.locale}: ${item._count}`);
    });

    const englishItems = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      take: 5,
      select: {
        id: true,
        icon: true,
        adminDemoTitle: true,
        locale: true,
      },
    });

    console.log('\nSample English items:');
    englishItems.forEach((item) => {
      console.log(`  - ${item.adminDemoTitle || 'No title'} (icon: ${item.icon || 'none'})`);
    });

    // Test the listDemoItemsWithLocales function
    const { listDemoItemsWithLocales } = await import('../lib/api/demo-items');
    const itemsWithLocales = await listDemoItemsWithLocales('en');
    console.log(`\nlistDemoItemsWithLocales returned: ${itemsWithLocales.length} items`);

    if (itemsWithLocales.length > 0) {
      console.log('\nFirst item:');
      console.log(JSON.stringify({
        id: itemsWithLocales[0].id,
        icon: itemsWithLocales[0].icon,
        adminDemoTitle: itemsWithLocales[0].adminDemoTitle,
        availableLocales: itemsWithLocales[0].availableLocales,
      }, null, 2));
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkDemoItems();
