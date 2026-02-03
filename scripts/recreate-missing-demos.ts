/**
 * Script to recreate missing demo items
 */

import { prisma } from '@/lib/db/prisma';
import { createDemoItem } from '@/lib/api/demo-items';

// Missing demos to recreate - matching the 22 items the user wants
const missingDemos = [
  {
    title: 'MLM Stair Step Plan Software Demo',
    icon: 'remix:RiStairsLine',
    adminDemoTitle: 'Basic Stair Step',
    adminDemoFeatures: [
      'Stair Step Level Configuration: Set up and manage the levels and criteria for the Stair Step plan.',
      'User Progress Tracking: Monitor and track user advancement through stair step levels.',
      'Commission Distribution Oversight: Manage and oversee the distribution of commissions based on user progress.'
    ],
    distributorsDemoTitle: 'Basic Stair Step',
    distributorsDemoFeatures: [
      'Progress Tracking: Monitor your advancement through the stair step levels.',
      'Earnings Monitoring: Keep track of your earnings based on your current level.',
      'Account Management: Update personal details and manage account settings within the plan.'
    ]
  },
  {
    title: 'MLM Party Plan Software Demo',
    icon: 'remix:RiGiftLine',
    adminDemoTitle: 'Basic Party Plan',
    adminDemoFeatures: [
      'Party Event Setup: Configure and manage party events, including schedules and hosts.',
      'Sales Tracking: Monitor and track sales generated from party events.',
      'Participant Oversight: Oversee participant engagement and activities during parties.'
    ],
    distributorsDemoTitle: 'Basic Party Plan',
    distributorsDemoFeatures: [
      'Earnings Tracking: Monitor your earnings from party events in real-time.',
      'Account Management: Update your personal information and manage account settings.',
      'Event Participation: Easily join and engage in party events within the system.'
    ]
  },
  {
    title: 'Repurchase MLM Plan Software Demo',
    icon: 'remix:RiRepeatLine',
    adminDemoTitle: 'Basic Repurchase Plan',
    adminDemoFeatures: [
      'Repurchase Rules Setup: Define and configure the rules for member repurchases.',
      'Purchase Tracking: Monitor and track member purchases within the plan.',
      'Commission Calculation: Oversee and manage commission calculations based on repurchases.'
    ],
    distributorsDemoTitle: 'Basic Repurchase Plan',
    distributorsDemoFeatures: [
      'Making Purchases: Easily make repurchases within the plan.',
      'Earnings Tracking: Monitor your earnings from repurchase activities.',
      'Account Management: Manage your personal account settings and preferences'
    ]
  },
  {
    title: 'Emgoldex MLM Plan Software Demo',
    icon: 'remix:RiRefreshLine',
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
    title: 'MLM Board Plan Software Demo',
    icon: 'remix:RiLayoutGridLine',
    adminDemoTitle: 'Basic Board Plan',
    adminDemoFeatures: [
      'Board Configuration: Set up and manage board structures, including levels and entry criteria.',
      'Member Progress Tracking: Monitor the progress of members across different boards.',
      'Board Splits and Cycles: Oversee and manage board splits, cycles, and transitions.'
    ],
    distributorsDemoTitle: 'Basic Board Plan',
    distributorsDemoFeatures: [
      'Board Progress Tracking: Easily follow your advancement through various boards.',
      'Earnings Monitoring: Keep track of your earnings and rewards from board completions.',
      'Account Management: Update personal details and manage your account settings within the board plan.'
    ]
  },
  {
    title: 'MLM Gift Plan Software Demo',
    icon: 'remix:RiGiftLine',
    adminDemoTitle: 'Basic Gift Plan',
    adminDemoFeatures: [
      'Gifting Rules Setup: Define and configure the rules for gifting and contributions.',
      'Contribution Tracking: Monitor and manage user contributions within the gifting plan.',
      'User Participation Oversight: Oversee and track user involvement and progress in the gifting structure.'
    ],
    distributorsDemoTitle: 'Basic Gift Plan',
    distributorsDemoFeatures: [
      'Sending/Receiving Gifts: Easily participate in gifting by sending and receiving contributions.',
      'Involvement Tracking: Monitor your participation and progress within the gifting plan.',
      'System Interaction: Manage your account and gifting activities within the system'
    ]
  },
  {
    title: 'MLM Generation Plan Software Demo',
    icon: 'remix:RiStackLine',
    adminDemoTitle: 'Basic Generation',
    adminDemoFeatures: [
      'Generational Setup: Configure and manage multiple generational levels within the plan.',
      'Commission Configuration: Customize commission rules for each generational level.',
      'Member Oversight: Monitor and track member activities and performance across generations.'
    ],
    distributorsDemoTitle: 'Basic Generation',
    distributorsDemoFeatures: [
      'Generational Earnings: Monitor earnings across different generational levels.',
      'Downline Management: Manage and support your downlines within the generational structure.',
      'Account Control: Update and maintain your personal account settings easily.'
    ]
  },
  {
    title: 'Hybrid Plan MLM Software Demo',
    icon: 'remix:RiNetworksLine',
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
  },
  {
    title: 'MMM Global MLM Plan Software Demo',
    icon: 'remix:RiQuestionLine', // Need to find appropriate icon
    adminDemoTitle: 'Basic MMM Global Plan',
    adminDemoFeatures: [
      'MMM Global Structure Setup: Configure and manage the MMM Global plan structure.',
      'User Progress Tracking: Monitor and track user advancement within the MMM Global system.',
      'Commission Distribution: Oversee and manage commission distribution based on user progress.'
    ],
    distributorsDemoTitle: 'Basic MMM Global Plan',
    distributorsDemoFeatures: [
      'Progress Tracking: Monitor your advancement within the MMM Global structure.',
      'Earnings Monitoring: Keep track of your earnings as you progress through the plan.',
      'Account Management: Update personal details and manage your account settings.'
    ]
  },
  {
    title: 'Auto-fill Plan MLM Software Demo',
    icon: 'remix:RiFlashLine',
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
    title: 'X-UP Plan MLM Software Demo',
    icon: 'remix:RiArrowUpLine',
    adminDemoTitle: 'Basic X-UP Plan',
    adminDemoFeatures: [
      'X-UP Level Setup: Configure and manage the different levels within the X-UP plan.',
      'User Progress Tracking: Monitor and track user advancement through the X-UP levels.',
      'Commission Distribution: Oversee and manage the distribution of commissions based on user progress and X-UP qualifications.'
    ],
    distributorsDemoTitle: 'Basic X-UP Plan',
    distributorsDemoFeatures: [
      'Progress Tracking: Monitor your advancement through the X-UP levels.',
      'Earnings Monitoring: Keep track of your earnings as you qualify for X-UP commissions.',
      'Account Management: Update personal details and manage your account settings within the X-UP plan.'
    ]
  },
  {
    title: 'Monoline MLM Plan Software Demo',
    icon: 'remix:RiSubtractLine',
    adminDemoTitle: 'Basic Monoline Plan',
    adminDemoFeatures: [
      'Monoline Structure Setup: Configure and manage the linear structure of the Monoline plan.',
      'User Progress Tracking: Monitor and track user advancement along the monoline.',
      'Commission Calculations: Oversee and manage commission distribution based on user positions within the monoline.'
    ],
    distributorsDemoTitle: 'Basic Monoline Plan',
    distributorsDemoFeatures: [
      'Progress Tracking: Easily monitor your position and progress within the monoline structure.',
      'Earnings Monitoring: Keep track of your earnings based on your position in the line.',
      'Account Management: Update personal details and manage your account settings within the monoline plan.'
    ]
  },
  {
    title: 'MLM Forced Matrix Plan',
    icon: 'remix:RiBoxesLine',
    adminDemoTitle: 'Basic Forced Matrix Plan',
    adminDemoFeatures: [
      'Matrix Configuration: Set up and manage forced matrix structures with predefined width and depth levels.',
      'Placement Management: Control and monitor automatic member placements within the forced matrix structure.',
      'Commission Calculations: Oversee and manage commission distribution based on matrix positions and levels.'
    ],
    distributorsDemoTitle: 'Basic Forced Matrix Plan',
    distributorsDemoFeatures: [
      'Matrix Position View: Track your position and progress within the forced matrix structure.',
      'Earnings Overview: Monitor your earnings based on your level and position in the matrix.',
      'Account Management: Update personal details and manage your account settings within the forced matrix plan.'
    ]
  },
  {
    title: 'Investment MLM Plan Software Demo',
    icon: 'remix:RiTrendingUpLine',
    adminDemoTitle: 'Basic Investment Plan',
    adminDemoFeatures: [
      'Investment Rules Setup: Define and configure the rules and criteria for member investments.',
      'Investment Tracking: Monitor and manage member investments across different levels.',
      'Return Oversight: Oversee and manage the distribution of returns based on investments.'
    ],
    distributorsDemoTitle: 'Basic Investment Plan',
    distributorsDemoFeatures: [
      'Investment Tracking: Easily monitor your investments and their status within the plan.',
      'Return Monitoring: Keep track of your returns and earnings from investments.',
      'Account Management: Update personal details and manage your investment account settings.'
    ]
  },
  {
    title: 'Australian MLM Binary Software Demo',
    icon: 'remix:RiGitBranchLine',
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
];

async function recreateMissingDemos() {
  console.log('='.repeat(50));
  console.log('Recreating missing demo items...');
  console.log('='.repeat(50));
  console.log('');

  try {
    // Check which demos already exist
    const existingDemos = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      select: { title: true },
    });

    const existingTitles = new Set(existingDemos.map(d => d.title.toLowerCase().trim()));

    let created = 0;
    let skipped = 0;

    for (const demo of missingDemos) {
      const normalizedTitle = demo.title.toLowerCase().trim();
      const exists = Array.from(existingTitles).some(existing => {
        const normalizedExisting = existing.toLowerCase().trim();
        return normalizedExisting === normalizedTitle ||
          normalizedExisting.includes(normalizedTitle) ||
          normalizedTitle.includes(normalizedExisting);
      });

      if (exists) {
        skipped++;
        console.log(`⏭ Skipping (already exists): ${demo.title}`);
        continue;
      }

      try {
        await createDemoItem({
          icon: demo.icon,
          image: '',
          title: demo.title,
          adminDemoTitle: demo.adminDemoTitle,
          adminDemoFeatures: demo.adminDemoFeatures,
          distributorsDemoTitle: demo.distributorsDemoTitle,
          distributorsDemoFeatures: demo.distributorsDemoFeatures,
          showOnHomePage: false,
          locale: 'en',
        });
        created++;
        console.log(`✓ Created: ${demo.title}`);
      } catch (error) {
        console.error(`✗ Failed to create "${demo.title}":`, error instanceof Error ? error.message : error);
      }
    }

    console.log(`\n${'='.repeat(50)}`);
    console.log(`Created: ${created} demos`);
    console.log(`Skipped: ${skipped} demos (already exist)`);
    console.log(`${'='.repeat(50)}\n`);

    // Show final count
    const finalCount = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      select: { title: true },
    });

    console.log(`Total demos now: ${finalCount.length}`);
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

// Run if executed directly
if (require.main === module) {
  recreateMissingDemos()
    .then(() => {
      process.exit(0);
    })
    .catch((error) => {
      console.error('Script failed:', error);
      process.exit(1);
    });
}

export { recreateMissingDemos };
