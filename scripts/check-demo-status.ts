import { prisma } from '../lib/db/prisma';

async function checkDemoStatus() {
  try {
    const demos = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      select: {
        title: true,
        showOnHomePage: true,
        image: true,
        icon: true
      },
      orderBy: { title: 'asc' }
    });

    console.log(`\nTotal demos: ${demos.length}\n`);
    console.log('Demo Status:');
    console.log('─'.repeat(80));

    demos.forEach((d, idx) => {
      const hasImage = !!d.image && d.image.trim() !== '';
      const hasIcon = !!d.icon && d.icon.trim() !== '';
      const status = [
        hasImage ? '✓' : '✗ IMAGE',
        hasIcon ? '✓' : '✗ ICON',
        d.showOnHomePage ? 'HOME' : ''
      ].filter(Boolean).join(' ');

      console.log(`${(idx + 1).toString().padStart(2)}. ${d.title.padEnd(50)} ${status}`);
    });

    const withoutImage = demos.filter(d => !d.image || d.image.trim() === '');
    const withoutIcon = demos.filter(d => !d.icon || d.icon.trim() === '');
    const onHomePage = demos.filter(d => d.showOnHomePage);

    console.log('\n─'.repeat(80));
    console.log(`\nSummary:`);
    console.log(`  - Without image: ${withoutImage.length}`);
    if (withoutImage.length > 0) {
      withoutImage.forEach(d => console.log(`    • ${d.title}`));
    }
    console.log(`  - Without icon: ${withoutIcon.length}`);
    if (withoutIcon.length > 0) {
      withoutIcon.forEach(d => console.log(`    • ${d.title}`));
    }
    console.log(`  - Show on home page: ${onHomePage.length}`);

  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

checkDemoStatus()
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
