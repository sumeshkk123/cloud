import { prisma } from '../lib/db/prisma';

async function checkBinaryDemo() {
  try {
    console.log('Checking for Binary MLM Software Demo...\n');

    // Check for exact match
    const exactMatch = await prisma.demo_items.findFirst({
      where: {
        title: 'Binary MLM Software Demo',
        locale: 'en',
      },
    });

    if (exactMatch) {
      console.log('✓ Found "Binary MLM Software Demo"');
      console.log(`  ID: ${exactMatch.id}`);
      console.log(`  Icon: ${exactMatch.icon}`);
      console.log(`  Title: ${exactMatch.title}`);
      console.log(`  Locale: ${exactMatch.locale}`);
    } else {
      console.log('✗ "Binary MLM Software Demo" NOT FOUND');
    }

    // Check for similar titles
    console.log('\nChecking for similar titles...');
    const allDemos = await prisma.demo_items.findMany({
      where: {
        locale: 'en',
      },
      select: {
        title: true,
        icon: true,
      },
      orderBy: {
        title: 'asc',
      },
    });

    console.log(`\nTotal demos in database: ${allDemos.length}\n`);
    console.log('All demo titles:');
    allDemos.forEach((demo, idx) => {
      const marker = demo.title.toLowerCase().includes('binary') ? ' ⭐' : '';
      console.log(`  ${idx + 1}. ${demo.title} (icon: ${demo.icon})${marker}`);
    });

    // Check for demos with GitBranch icon (Binary should use this)
    console.log('\n\nDemos with GitBranch icon (Binary should use this):');
    const gitBranchDemos = allDemos.filter(d => d.icon === 'GitBranch' || d.icon === 'lucide:GitBranch' || d.icon?.includes('GitBranch'));
    if (gitBranchDemos.length > 0) {
      gitBranchDemos.forEach(demo => {
        console.log(`  - ${demo.title} (icon: ${demo.icon})`);
      });
    } else {
      console.log('  None found');
    }

  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

checkBinaryDemo()
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
