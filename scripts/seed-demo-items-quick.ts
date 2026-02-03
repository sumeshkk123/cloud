import { prisma } from '../lib/db/prisma';
import { randomUUID } from 'crypto';

interface DemoData {
  title: string;
  icon: string;
  image?: string;
  adminDemoTitle: string;
  adminDemoFeatures: string[];
  distributorsDemoTitle: string;
  distributorsDemoFeatures: string[];
}

const newDemos: DemoData[] = [
  {
    title: 'Cyclone MLM Software Demo',
    icon: 'Wind',
    adminDemoTitle: 'Basic Cyclone Plan',
    adminDemoFeatures: [
      'Cyclone Structure Setup: Configure and manage the unique rotating structure of the Cyclone plan.',
      'Rotation Tracking: Monitor and track member rotations and positions within the cyclone structure.',
      'Commission Distribution: Oversee and manage commission calculations based on cyclone rotations and member positions.'
    ],
    distributorsDemoTitle: 'Basic Cyclone Plan',
    distributorsDemoFeatures: [
      'Rotation Monitoring: Track your position and rotations within the cyclone structure.',
      'Earnings Tracking: Monitor your earnings as you rotate through different positions.',
      'Account Management: Update personal details and manage your account settings within the cyclone plan.'
    ]
  },
  {
    title: 'Donation MLM Software Demo',
    icon: 'HeartHandshake',
    adminDemoTitle: 'Basic Donation Plan',
    adminDemoFeatures: [
      'Donation Rules Setup: Define and configure the rules for donations and contributions within the plan.',
      'Contribution Tracking: Monitor and manage member donations and contributions across the system.',
      'Distribution Oversight: Oversee and manage the distribution of funds based on donation activities.'
    ],
    distributorsDemoTitle: 'Basic Donation Plan',
    distributorsDemoFeatures: [
      'Donation Management: Easily make donations and track your contribution history.',
      'Earnings Monitoring: Keep track of your earnings and rewards from donation activities.',
      'Account Management: Update personal details and manage your donation account settings.'
    ]
  },
  {
    title: 'Forced Matrix MLM Software Demo',
    icon: 'Boxes',
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
    title: 'Breakaway MLM Software Demo',
    icon: 'Split',
    adminDemoTitle: 'Basic Breakaway Plan',
    adminDemoFeatures: [
      'Breakaway Rules Setup: Configure and manage the rules for when distributors break away from their upline.',
      'Group Tracking: Monitor and track distributor groups and their breakaway status.',
      'Commission Management: Oversee and manage commission calculations for both upline and breakaway groups.'
    ],
    distributorsDemoTitle: 'Basic Breakaway Plan',
    distributorsDemoFeatures: [
      'Group Progress Tracking: Monitor your group progress and breakaway qualifications.',
      'Earnings Monitoring: Keep track of your earnings from both group and breakaway commissions.',
      'Account Management: Update personal details and manage your account settings within the breakaway plan.'
    ]
  },
  {
    title: 'One Up MLM Software Demo',
    icon: 'ArrowUpCircle',
    adminDemoTitle: 'Basic One Up Plan',
    adminDemoFeatures: [
      'One Up Structure Setup: Configure and manage the one-up structure where members move up when they recruit.',
      'Promotion Tracking: Monitor and track member promotions and movements within the one-up structure.',
      'Commission Distribution: Oversee and manage commission calculations based on one-up positions and promotions.'
    ],
    distributorsDemoTitle: 'Basic One Up Plan',
    distributorsDemoFeatures: [
      'Position Tracking: Monitor your current position and progress within the one-up structure.',
      'Earnings Overview: Track your earnings as you move up through the one-up levels.',
      'Account Management: Update personal details and manage your account settings within the one-up plan.'
    ]
  },
  {
    title: 'Reverse Binary MLM Software Demo',
    icon: 'GitMerge',
    adminDemoTitle: 'Basic Reverse Binary Plan',
    adminDemoFeatures: [
      'Reverse Binary Setup: Configure and manage the reverse binary structure with opposite commission flow.',
      'Tree Management: Monitor and control the reverse binary tree structure and member placements.',
      'Commission Calculations: Oversee and manage reverse commission distribution based on the binary structure.'
    ],
    distributorsDemoTitle: 'Basic Reverse Binary Plan',
    distributorsDemoFeatures: [
      'Tree Visualization: View and understand your position in the reverse binary structure.',
      'Earnings Tracking: Monitor your earnings from the reverse binary commission system.',
      'Account Management: Update personal details and manage your account settings within the reverse binary plan.'
    ]
  },
  {
    title: 'Level MLM Software Demo',
    icon: 'Layers',
    adminDemoTitle: 'Basic Level Plan',
    adminDemoFeatures: [
      'Level Configuration: Set up and manage multiple levels with specific criteria and requirements.',
      'Progress Monitoring: Track member progress and advancement through different levels.',
      'Commission Management: Oversee and manage commission distribution based on member levels and achievements.'
    ],
    distributorsDemoTitle: 'Basic Level Plan',
    distributorsDemoFeatures: [
      'Level Progress: Track your advancement through different levels of the plan.',
      'Earnings Monitoring: Monitor your earnings based on your current level and achievements.',
      'Account Management: Update personal details and manage your account settings within the level plan.'
    ]
  },
  {
    title: 'ROI MLM Software Demo',
    icon: 'DollarSign',
    adminDemoTitle: 'Basic ROI Plan',
    adminDemoFeatures: [
      'ROI Rules Setup: Define and configure return on investment rules and calculation methods.',
      'Investment Tracking: Monitor and manage member investments and their ROI calculations.',
      'Return Distribution: Oversee and manage the distribution of returns based on investment levels and ROI rules.'
    ],
    distributorsDemoTitle: 'Basic ROI Plan',
    distributorsDemoFeatures: [
      'Investment Tracking: Easily monitor your investments and their status within the plan.',
      'Returns Overview: Keep track of your returns and earnings from ROI calculations.',
      'Account Management: Update personal details and manage your investment account settings.'
    ]
  },
  {
    title: '2-Up MLM Software Demo',
    icon: 'ArrowUp',
    adminDemoTitle: 'Basic 2-Up Plan',
    adminDemoFeatures: [
      '2-Up Structure Setup: Configure and manage the 2-up structure where members move up two positions.',
      'Promotion Tracking: Monitor and track member promotions and movements within the 2-up structure.',
      'Commission Distribution: Oversee and manage commission calculations based on 2-up positions and promotions.'
    ],
    distributorsDemoTitle: 'Basic 2-Up Plan',
    distributorsDemoFeatures: [
      'Position Monitoring: Track your current position and progress within the 2-up structure.',
      'Earnings Overview: Monitor your earnings as you advance through the 2-up levels.',
      'Account Management: Update personal details and manage your account settings within the 2-up plan.'
    ]
  },
  {
    title: '3-Up MLM Software Demo',
    icon: 'ArrowUp',
    adminDemoTitle: 'Basic 3-Up Plan',
    adminDemoFeatures: [
      '3-Up Structure Setup: Configure and manage the 3-up structure where members move up three positions.',
      'Promotion Management: Monitor and track member promotions and movements within the 3-up structure.',
      'Commission Calculations: Oversee and manage commission distribution based on 3-up positions and promotions.'
    ],
    distributorsDemoTitle: 'Basic 3-Up Plan',
    distributorsDemoFeatures: [
      'Progress Tracking: Monitor your advancement through the 3-up structure.',
      'Earnings Monitoring: Keep track of your earnings as you move up through 3-up levels.',
      'Account Management: Update personal details and manage your account settings within the 3-up plan.'
    ]
  },
  {
    title: 'Diamond MLM Software Demo',
    icon: 'Gem',
    adminDemoTitle: 'Basic Diamond Plan',
    adminDemoFeatures: [
      'Diamond Structure Setup: Configure and manage the diamond-shaped structure with multiple levels.',
      'Member Placement: Control and monitor member placements within the diamond structure.',
      'Commission Management: Oversee and manage commission distribution based on diamond positions and levels.'
    ],
    distributorsDemoTitle: 'Basic Diamond Plan',
    distributorsDemoFeatures: [
      'Structure Visualization: View and understand your position within the diamond structure.',
      'Earnings Tracking: Monitor your earnings based on your diamond level and position.',
      'Account Management: Update personal details and manage your account settings within the diamond plan.'
    ]
  },
  {
    title: 'Leadership MLM Software Demo',
    icon: 'Crown',
    adminDemoTitle: 'Basic Leadership Plan',
    adminDemoFeatures: [
      'Leadership Level Setup: Configure and manage leadership levels and qualification criteria.',
      'Performance Tracking: Monitor and track member performance and leadership achievements.',
      'Reward Distribution: Oversee and manage rewards and commissions based on leadership levels and performance.'
    ],
    distributorsDemoTitle: 'Basic Leadership Plan',
    distributorsDemoFeatures: [
      'Leadership Progress: Track your advancement through leadership levels.',
      'Earnings Overview: Monitor your earnings and rewards as you achieve leadership status.',
      'Account Management: Update personal details and manage your leadership account settings.'
    ]
  },
  {
    title: 'Compression MLM Software Demo',
    icon: 'Compress',
    adminDemoTitle: 'Basic Compression Plan',
    adminDemoFeatures: [
      'Compression Rules Setup: Define and configure compression rules to optimize commission calculations.',
      'Volume Tracking: Monitor and track member volumes and compression calculations.',
      'Commission Optimization: Oversee and manage compressed commission distributions efficiently.'
    ],
    distributorsDemoTitle: 'Basic Compression Plan',
    distributorsDemoFeatures: [
      'Volume Monitoring: Track your volume and see how compression affects your earnings.',
      'Earnings Overview: Monitor your compressed earnings and commission calculations.',
      'Account Management: Update personal details and manage your account settings within the compression plan.'
    ]
  },
  {
    title: 'Matching Bonus MLM Software Demo',
    icon: 'Handshake',
    adminDemoTitle: 'Basic Matching Bonus Plan',
    adminDemoFeatures: [
      'Matching Rules Setup: Configure and manage matching bonus rules and percentage calculations.',
      'Bonus Tracking: Monitor and track matching bonuses across different levels and generations.',
      'Bonus Distribution: Oversee and manage matching bonus distributions based on downline performance.'
    ],
    distributorsDemoTitle: 'Basic Matching Bonus Plan',
    distributorsDemoFeatures: [
      'Bonus Tracking: Monitor your matching bonuses from your downline performance.',
      'Earnings Overview: Keep track of your total earnings including matching bonuses.',
      'Account Management: Update personal details and manage your account settings within the matching bonus plan.'
    ]
  }
];

async function addDemo(demo: DemoData) {
  try {
    // Check if demo already exists (by icon/title)
    const existing = await prisma.demo_items.findFirst({
      where: {
        icon: demo.icon,
        locale: 'en',
      },
    });

    if (existing) {
      console.log(`Demo "${demo.title}" already exists, skipping...`);
      return;
    }

    // Create English version only
    console.log(`Creating demo: "${demo.title}"...`);

    await prisma.demo_items.create({
      data: {
        id: randomUUID(),
        icon: demo.icon,
        image: demo.image || '',
        title: demo.title,
        adminDemoTitle: demo.adminDemoTitle,
        adminDemoFeatures: demo.adminDemoFeatures,
        distributorsDemoTitle: demo.distributorsDemoTitle,
        distributorsDemoFeatures: demo.distributorsDemoFeatures,
        locale: 'en',
        updatedAt: new Date(),
      },
    });

    console.log(`  ✓ Created "${demo.title}"`);
  } catch (error) {
    console.error(`Error adding demo "${demo.title}":`, error);
  }
}

async function main() {
  console.log('Starting quick demo items seeding (English only)...\n');

  for (const demo of newDemos) {
    await addDemo(demo);
  }

  console.log('\n✓ All demos seeded successfully!');
}

main()
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
