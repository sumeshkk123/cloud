import { prisma } from '@/lib/db/prisma';
import { createDemoItem } from '@/lib/api/demo-items';

async function addBinaryDemos() {
  try {
    console.log('Adding Binary MLM Software Demo and Australian MLM Binary Software Demo...\n');

    // Check if they already exist
    const existing = await prisma.demo_items.findMany({
      where: {
        locale: 'en',
        title: {
          in: ['Binary MLM Software Demo', 'Australian MLM Binary Software Demo'],
        },
      },
      select: { title: true },
    });

    const existingTitles = new Set(existing.map(d => d.title));

    // Binary MLM Software Demo
    if (!existingTitles.has('Binary MLM Software Demo')) {
      console.log('Creating Binary MLM Software Demo...');
      await createDemoItem({
        icon: 'remix:RiGitBranchLine',
        image: '',
        title: 'Binary MLM Software Demo',
        adminDemoTitle: 'Basic Binary',
        adminDemoFeatures: [
          'Binary Tree Setup: Simplified configuration and management of binary trees.',
          'Commission Control: Customizable commission rules and payout settings.',
          'User Tracking: Real-time monitoring of user activity and earnings.'
        ],
        distributorsDemoTitle: 'Basic Binary',
        distributorsDemoFeatures: [
          'Downline View: Easily access and visualize your binary structure and downline members',
          'Earnings Tracking: Monitor real-time earnings and commission progress.',
          'Account Management: Manage personal details and preferences within the Binary MLM system.'
        ],
        showOnHomePage: false,
        locale: 'en',
      });
      console.log('✓ Created Binary MLM Software Demo');
    } else {
      console.log('⏭ Binary MLM Software Demo already exists');
    }

    // Australian MLM Binary Software Demo
    if (!existingTitles.has('Australian MLM Binary Software Demo')) {
      console.log('Creating Australian MLM Binary Software Demo...');
      await createDemoItem({
        icon: 'remix:RiGitBranchLine',
        image: '',
        title: 'Australian MLM Binary Software Demo',
        adminDemoTitle: 'Basic Australian Binary',
        adminDemoFeatures: [
          'Binary Tree Setup: Configure and manage the binary structure specific to the Australian Binary plan.',
          'Australian Rules Management: Implement and control unique rules and criteria for the Australian Binary system.',
          'User Activity Oversight: Monitor and track user performance and activities within the plan.'
        ],
        distributorsDemoTitle: 'Basic Australian Binary',
        distributorsDemoFeatures: [
          'Downline Tracking: View and manage your downlines within the Australian Binary structure.',
          'Earnings Monitoring: Keep track of your earnings from the unique binary system.',
          'Account Management: Easily update and manage your account details and preferences.'
        ],
        showOnHomePage: false,
        locale: 'en',
      });
      console.log('✓ Created Australian MLM Binary Software Demo');
    } else {
      console.log('⏭ Australian MLM Binary Software Demo already exists');
    }

    // Show final count
    const finalCount = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      select: { title: true },
      orderBy: { title: 'asc' },
    });

    console.log(`\n✓ Total demos now: ${finalCount.length}`);
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
  addBinaryDemos()
    .then(() => {
      process.exit(0);
    })
    .catch((error) => {
      console.error('Script failed:', error);
      process.exit(1);
    });
}

export { addBinaryDemos };
