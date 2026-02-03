import { prisma } from '../lib/db/prisma';

async function checkModuleIcons() {
  try {
    const modules = await prisma.modules.findMany({
      where: { locale: 'en' },
      select: {
        title: true,
        image: true
      },
      orderBy: { title: 'asc' }
    });

    console.log('\nModule Icons in Database:');
    console.log('─'.repeat(80));
    modules.forEach((m, idx) => {
      console.log(`${(idx + 1).toString().padStart(2)}. ${m.title.padEnd(50)} icon: "${m.image}"`);
    });

    const withoutIcon = modules.filter(m => !m.image || m.image.trim() === '');
    console.log(`\n✓ Total: ${modules.length} modules`);
    console.log(`⚠ Without icon: ${withoutIcon.length}`);
    if (withoutIcon.length > 0) {
      withoutIcon.forEach(m => console.log(`  - ${m.title}`));
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

checkModuleIcons()
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
