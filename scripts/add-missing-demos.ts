import { prisma } from '../lib/db/prisma';
import { createDemoItem } from '../lib/api/demo-items';

// Missing demo items that need to be added
const missingDemos = [
  {
    title: 'Australian Binary MLM Software Demo',
    icon: 'GitBranch',
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
    ]
  },
  {
    title: 'Growth Plan MLM Software Demo',
    icon: 'LineChart',
    adminDemoTitle: 'Basic Growth Plan',
    adminDemoFeatures: [
      'Growth Level Setup: Configure and manage the different levels within the Growth plan.',
      'User Progress Tracking: Monitor and track user advancement through the growth levels.',
      'Commission Distribution: Oversee and manage the distribution of commissions based on user growth and performance.'
    ],
    distributorsDemoTitle: 'Basic Growth Plan',
    distributorsDemoFeatures: [
      'Progress Tracking: Monitor your advancement through the growth levels.',
      'Earnings Monitoring: Keep track of your earnings as you progress in the plan.',
      'Account Management: Update personal details and manage your account settings within the growth plan.'
    ]
  },
  {
    title: 'Auto-fill MLM Software Demo',
    icon: 'Zap',
    adminDemoTitle: 'Basic Auto-fill Plan',
    adminDemoFeatures: [
      'Auto-fill Structure Setup: Configure and manage the automatic placement of members within the structure.',
      'User Progress Tracking: Monitor and track user advancement within the auto-fill system.',
      'Commission Calculations: Oversee and manage commission distribution based on auto-fill placements and progress.'
    ],
    distributorsDemoTitle: 'Basic Auto-fill Plan',
    distributorsDemoFeatures: [
      'Progress Tracking: Easily monitor your advancement within the auto-fill structure.',
      'Earnings Monitoring: Keep track of your earnings generated through the auto-fill placements.',
      'Account Management: Update personal details and manage your account settings within the auto-fill plan.'
    ]
  },
  {
    title: 'Click Plan MLM Software Demo',
    icon: 'MousePointerClick',
    adminDemoTitle: 'Basic Click Plan',
    adminDemoFeatures: [
      'Click Level Setup: Configure and manage the different levels within the Click plan.',
      'User Progress Tracking: Monitor and track user advancement through click levels.',
      'Commission Distribution: Oversee and manage the distribution of commissions based on user clicks and progress.'
    ],
    distributorsDemoTitle: 'Basic Click Plan',
    distributorsDemoFeatures: [
      'Progress Tracking: Monitor your advancement through the click levels.',
      'Earnings Monitoring: Keep track of your earnings generated from clicks.',
      'Account Management: Update personal details and manage your account settings within the click plan'
    ]
  },
  {
    title: 'Emgoldex MLM Software Demo',
    icon: 'RotateCcw',
    adminDemoTitle: 'Basic Emgoldex Plan',
    adminDemoFeatures: [
      'Emgoldex Structure Setup: Configure and manage the unique structure of the Emgoldex plan.',
      'User Progress Tracking: Monitor and track user advancement within the Emgoldex system.',
      'Commission Distribution: Oversee and manage the distribution of commissions based on user progress and placements in the Emgoldex plan.'
    ],
    distributorsDemoTitle: 'Basic Emgoldex Plan',
    distributorsDemoFeatures: [
      'Progress Tracking: Monitor your advancement within the Emgoldex structure.',
      'Earnings Monitoring: Keep track of your earnings as you progress through the plan.',
      'Account Management: Update personal details and manage your account settings within the Emgoldex plan.'
    ]
  },
  {
    title: 'Hybrid MLM Software Demo',
    icon: 'Network',
    adminDemoTitle: 'Basic Hybrid Plan',
    adminDemoFeatures: [
      'User Plan Structure Setup: Administrators can create a customized plan structure by mixing elements like binary, matrix, or unilevel to fit the business needs.',
      'User Progress Tracking: Track user progress with tools that show performance, achievements, and real-time updates within the plan.',
      'Commission Distribution: Manage and distribute commissions accurately based on user performance and placements, ensuring fair rewards in line with the customized plan rules.'
    ],
    distributorsDemoTitle: 'Basic Hybrid Plan',
    distributorsDemoFeatures: [
      'Track Your Progress: Follow your journey and see your progress as you advance within the Basic Hybrid Plan.',
      'Monitor Your Earnings: View and keep up-to-date with your earnings as you move through different levels of the plan.',
      'Manage Your Account: Easily update your personal information and adjust your account settings to suit your preferences within the Basic Hybrid Plan.'
    ]
  }
];

async function addMissingDemos() {
  try {
    console.log('Adding missing demo items to database...\n');

    // Check which items already exist
    const existingDemos = await prisma.demo_items.findMany({
      where: {
        locale: 'en',
      },
      select: {
        title: true,
      },
    });

    const existingTitles = new Set(existingDemos.map(d => d.title));
    const toAdd = missingDemos.filter(demo => !existingTitles.has(demo.title));

    if (toAdd.length === 0) {
      console.log('All demo items already exist in database.');
      return;
    }

    console.log(`Found ${toAdd.length} missing demo item(s) to add:\n`);
    toAdd.forEach(demo => console.log(`  - ${demo.title}`));
    console.log('');

    let addedCount = 0;

    for (const demo of toAdd) {
      try {
        // Create English version using the API function
        const created = await createDemoItem({
          icon: demo.icon,
          image: '', // Will need to be uploaded via admin panel
          title: demo.title,
          adminDemoTitle: demo.adminDemoTitle,
          adminDemoFeatures: demo.adminDemoFeatures,
          distributorsDemoTitle: demo.distributorsDemoTitle,
          distributorsDemoFeatures: demo.distributorsDemoFeatures,
          showOnHomePage: false,
          locale: 'en',
        });

        console.log(`✓ Added "${demo.title}" (ID: ${created.id})`);
        addedCount++;
      } catch (error) {
        console.error(`✗ Failed to add "${demo.title}":`, error instanceof Error ? error.message : error);
      }
    }

    console.log(`\n✓ Successfully added ${addedCount} demo item(s) to database.`);
    console.log(`⚠ Note: Images need to be uploaded via the admin panel.`);
  } catch (error) {
    console.error('Error adding missing demos:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

addMissingDemos()
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
