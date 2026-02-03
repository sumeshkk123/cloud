const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function updateDemoTitles() {
  try {
    console.log('Starting title updates...\n');

    // Get all demo items (English locale)
    const demoItems = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      select: {
        id: true,
        adminDemoTitle: true,
        title: true,
        icon: true,
      },
    });

    console.log(`Found ${demoItems.length} demo items\n`);

    let updatedCount = 0;

    for (const item of demoItems) {
      const adminTitle = item.adminDemoTitle.trim();
      
      // Set title to adminDemoTitle if title is empty or different
      if (!item.title || item.title !== adminTitle) {
        // Find all translations by icon
        const allTranslations = await prisma.demo_items.findMany({
          where: { icon: item.icon },
        });

        // Update title for all translations to match adminDemoTitle
        const updateResult = await prisma.demo_items.updateMany({
          where: { icon: item.icon },
          data: { title: adminTitle },
        });

        console.log(`✓ Updated title: "${adminTitle}" (${updateResult.count} translations)`);
        updatedCount++;
      } else {
        console.log(`- Already set: "${adminTitle}"`);
      }
    }

    console.log(`\n=== Summary ===`);
    console.log(`Updated: ${updatedCount} items`);
    console.log(`Total: ${demoItems.length} items`);

    console.log('\nTitle updates completed!');
  } catch (error) {
    console.error('Error updating titles:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

updateDemoTitles()
  .then(() => {
    console.log('Script completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Script failed:', error);
    process.exit(1);
  });
