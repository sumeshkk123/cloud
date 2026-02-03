import { prisma } from '../lib/db/prisma';

async function checkDemoIcons() {
  try {
    const demos = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      select: {
        title: true,
        icon: true
      },
      orderBy: { title: 'asc' }
    });

    console.log('\nDemo Icons in Database:');
    console.log('─'.repeat(80));
    demos.forEach((d, idx) => {
      console.log(`${(idx + 1).toString().padStart(2)}. ${d.title.padEnd(50)} icon: "${d.icon}"`);
    });

    const withoutIcon = demos.filter(d => !d.icon || d.icon.trim() === '');
    console.log(`\n✓ Total: ${demos.length} demos`);
    console.log(`⚠ Without icon: ${withoutIcon.length}`);
    if (withoutIcon.length > 0) {
      withoutIcon.forEach(d => console.log(`  - ${d.title}`));
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

checkDemoIcons()
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
