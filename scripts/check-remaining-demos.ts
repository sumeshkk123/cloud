import { prisma } from '@/lib/db/prisma';

async function checkRemainingDemos() {
  try {
    const demos = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      select: { title: true },
      orderBy: { title: 'asc' },
    });

    console.log(`Total remaining demos: ${demos.length}\n`);
    demos.forEach((demo, idx) => {
      console.log(`${idx + 1}. ${demo.title}`);
    });
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkRemainingDemos();
