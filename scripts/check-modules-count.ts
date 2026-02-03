import { prisma } from '../lib/db/prisma';

async function checkModulesCount() {
  try {
    const englishCount = await prisma.modules.count({ where: { locale: 'en' } });
    const totalCount = await prisma.modules.count();
    const byLocale = await prisma.modules.groupBy({
      by: ['locale'],
      _count: true,
    });

    console.log('\nModules Count:');
    console.log('─'.repeat(50));
    console.log(`English modules: ${englishCount}`);
    console.log(`Total modules: ${totalCount}`);
    console.log('\nBy locale:');
    byLocale.forEach((item) => {
      console.log(`  ${item.locale}: ${item._count}`);
    });

    // Check unique image+showOnHomePage combinations (how listModulesWithLocales groups them)
    const allModules = await prisma.modules.findMany({
      select: { image: true, showOnHomePage: true },
    });
    const uniqueGroups = new Set(
      allModules.map((m) => `${m.image || 'null'}_${m.showOnHomePage}`)
    );
    console.log(`\nUnique image+showOnHomePage groups: ${uniqueGroups.size}`);
    console.log('(This is what listModulesWithLocales returns)');
  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

checkModulesCount()
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
