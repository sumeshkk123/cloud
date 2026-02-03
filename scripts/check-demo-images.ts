import { prisma } from '../lib/db/prisma';

async function checkDemoImages() {
  try {
    const demos = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      select: {
        title: true,
        image: true
      },
      orderBy: { title: 'asc' }
    });

    console.log('\nDemo Images in Database:');
    console.log('─'.repeat(80));
    demos.forEach((d, idx) => {
      const imageStatus = d.image && d.image.trim() ? d.image : 'MISSING';
      console.log(`${(idx + 1).toString().padStart(2)}. ${d.title.padEnd(50)} image: "${imageStatus}"`);
    });

    const withoutImage = demos.filter(d => !d.image || d.image.trim() === '');
    console.log(`\n✓ Total: ${demos.length} demos`);
    console.log(`⚠ Without image: ${withoutImage.length}`);
    if (withoutImage.length > 0) {
      withoutImage.forEach(d => console.log(`  - ${d.title}`));
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

checkDemoImages()
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
