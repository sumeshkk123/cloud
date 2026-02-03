import { prisma } from '@/lib/db/prisma';

async function removeDuplicateAustralianBinary() {
  try {
    console.log('Removing duplicate Australian Binary demo...\n');

    // Find "Australian Binary MLM Software Demo" (the one to remove)
    const duplicate = await prisma.demo_items.findFirst({
      where: {
        locale: 'en',
        title: 'Australian Binary MLM Software Demo',
      },
      select: {
        id: true,
        title: true,
        icon: true,
      },
    });

    if (!duplicate) {
      console.log('Duplicate not found. Checking all Australian Binary demos...');
      const allAustralian = await prisma.demo_items.findMany({
        where: {
          locale: 'en',
          title: {
            contains: 'Australian',
          },
        },
        select: {
          id: true,
          title: true,
        },
      });
      allAustralian.forEach(demo => {
        console.log(`  - ${demo.title} (ID: ${demo.id})`);
      });
      return;
    }

    console.log(`Found duplicate: "${duplicate.title}" (ID: ${duplicate.id})`);

    // Find all translations of this demo (by icon)
    const allTranslations = await prisma.demo_items.findMany({
      where: {
        icon: duplicate.icon,
      },
      select: {
        id: true,
        title: true,
        locale: true,
      },
    });

    console.log(`\nFound ${allTranslations.length} translations to delete:`);
    allTranslations.forEach(t => {
      console.log(`  - ${t.title} (${t.locale})`);
    });

    // Delete all translations
    let deleted = 0;
    for (const translation of allTranslations) {
      try {
        await prisma.demo_items.delete({
          where: { id: translation.id },
        });
        deleted++;
        console.log(`✓ Deleted: ${translation.title} (${translation.locale})`);
      } catch (error) {
        console.error(`✗ Failed to delete ${translation.id}:`, error);
      }
    }

    console.log(`\n✓ Successfully deleted ${deleted} demo items`);

    // Show final count
    const finalCount = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      select: { title: true },
      orderBy: { title: 'asc' },
    });

    console.log(`\nTotal demos now: ${finalCount.length}`);
    console.log('\nAll demos:');
    finalCount.forEach((demo, idx) => {
      console.log(`  ${idx + 1}. ${demo.title}`);
    });

  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

if (require.main === module) {
  removeDuplicateAustralianBinary()
    .then(() => {
      process.exit(0);
    })
    .catch((error) => {
      console.error('Script failed:', error);
      process.exit(1);
    });
}

export { removeDuplicateAustralianBinary };
