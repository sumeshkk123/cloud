import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function listDemoItems() {
  try {
    const items = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      select: {
        id: true,
        adminDemoTitle: true,
        title: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    console.log(`Found ${items.length} demo items:\n`);
    items.forEach((item, index) => {
      console.log(`${index + 1}. "${item.adminDemoTitle}"`);
      if (item.title) {
        console.log(`   Current title: "${item.title}"`);
      }
      console.log('');
    });
  } catch (error) {
    console.error('Error listing demo items:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

listDemoItems()
  .then(() => {
    console.log('Script completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Script failed:', error);
    process.exit(1);
  });
