import { prisma } from '../lib/db/prisma';

async function updateBinaryDemoTitles() {
  try {
    console.log('Updating Binary MLM Software Demo titles...\n');

    // Find the Binary MLM Software Demo (by icon GitBranch)
    const binaryDemos = await prisma.demo_items.findMany({
      where: {
        icon: 'GitBranch',
      },
    });

    if (binaryDemos.length === 0) {
      console.log('No Binary MLM Software Demo found. Please create it first.');
      return;
    }

    const adminDemoTitle = 'Administrators configure binary structures, carryover, and spillover while distributors manage power legs, cycles, and bonuses.';
    const distributorsDemoTitle = 'Distributors manage power legs, cycles, and bonuses while administrators configure binary structures, carryover, and spillover.';

    // Update all translations of Binary MLM Software Demo
    for (const demo of binaryDemos) {
      await prisma.demo_items.update({
        where: { id: demo.id },
        data: {
          adminDemoTitle: adminDemoTitle,
          distributorsDemoTitle: distributorsDemoTitle,
          updatedAt: new Date(),
        },
      });
      console.log(`✓ Updated ${demo.locale} translation`);
    }

    console.log('\n✓ All Binary MLM Software Demo titles updated successfully!');
  } catch (error) {
    console.error('Error updating Binary MLM Software Demo titles:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

updateBinaryDemoTitles()
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
