import { prisma } from '../lib/db/prisma';
import { randomUUID } from 'crypto';

const locales = ['en', 'es', 'it', 'de', 'pt', 'zh'];

interface DemoData {
  title: string;
  icon: string;
  image?: string;
  adminDemoTitle: string;
  adminDemoFeatures: string[];
  distributorsDemoTitle: string;
  distributorsDemoFeatures: string[];
}

const demos: DemoData[] = [
  {
    title: 'Binary MLM Software Demo',
    icon: 'GitBranch',
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
    ]
  },
  {
    title: 'Matrix MLM Software Demo',
    icon: 'Grid3x3',
    adminDemoTitle: 'Basic Matrix',
    adminDemoFeatures: [
      'Matrix Management: Configure and adjust matrix levels and member placements',
      'Commission Settings: Define and control commission rules specific to the matrix plan.',
      'Activity Monitoring: Track member activities and performance across the matrix structure.'
    ],
    distributorsDemoTitle: 'Basic Matrix',
    distributorsDemoFeatures: [
      'Matrix Level View: Track your position and progress within the matrix structure.',
      'Earnings Overview: Monitor your earnings and commission status in real-time.',
      'Downline Management: Manage and support your personal downlines and account settings.'
    ]
  },
  {
    title: 'Unilevel MLM Software Demo',
    icon: 'Users',
    adminDemoTitle: 'Basic Unilevel',
    adminDemoFeatures: [
      'Unilevel Setup: Configure and manage unlimited levels within the Unilevel plan.',
      'Commission Configuration: Set and customize commission structures for all levels.',
      'User Management: Oversee and monitor user activity and performance across the network.'
    ],
    distributorsDemoTitle: 'Basic Unilevel',
    distributorsDemoFeatures: [
      'Referral Tracking: Easily view and manage your direct referrals.',
      'Earnings Monitoring: Keep track of your earnings and commissions in real-time.',
      'Account Management: Update personal information and manage account settings efficiently.'
    ]
  },
  {
    title: 'MLM Generation Software Demo',
    icon: 'Layers',
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
    title: 'Gift MLM Software Demo',
    icon: 'Gift',
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
    title: 'Board MLM Software Demo',
    icon: 'LayoutGrid',
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
    title: 'Party MLM Software Demo',
    icon: 'PartyPopper',
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
    title: 'Repurchase MLM Software Demo',
    icon: 'Repeat',
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
    title: 'Spillover Binary MLM Software Demo',
    icon: 'GitMerge',
    adminDemoTitle: 'Basic Spillover Binary Plan',
    adminDemoFeatures: [
      'Binary Tree Configuration: Set up and manage the binary structure, including spillover settings.',
      'Spillover Rules Management: Define and control spillover rules to ensure balanced network growth.',
      'User Activity Oversight: Monitor and track user performance and activities within the plan.'
    ],
    distributorsDemoTitle: 'Basic Spillover Binary Plan',
    distributorsDemoFeatures: [
      'Spillover Visualization: See how spillover affects your downline and overall structure.',
      'Earnings Overview: Monitor earnings from both direct referrals and spillover contributions.',
      'Account Management: Easily update and manage your account details and preferences.'
    ]
  },
  {
    title: 'Stair Step MLM Software Demo',
    icon: 'Stairs',
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
    title: 'Crowd Funding MLM Software Demo',
    icon: 'Coins',
    adminDemoTitle: 'Basic Crowdfunding',
    adminDemoFeatures: [
      'Funding Level Setup: Configure and manage different crowdfunding levels and goals.',
      'Contribution Tracking: Monitor and track user contributions across various funding levels.',
      'User Participation Oversight: Oversee and manage user involvement and progress within the crowdfunding plan.'
    ],
    distributorsDemoTitle: 'Basic Crowdfunding',
    distributorsDemoFeatures: [
      'Contribution Tracking: Easily monitor your contributions and progress toward funding goals.',
      'Earnings Monitoring: Keep track of earnings and rewards from your crowdfunding activities.',
      'Account Management: Update personal details and manage your account within the crowdfunding system.'
    ]
  },
  {
    title: 'Help Plan MLM Software Demo',
    icon: 'HandHeart',
    adminDemoTitle: 'Basic Help Plan',
    adminDemoFeatures: [
      'Help Rules Setup: Define and configure the rules for offering and receiving help within the plan.',
      'Contribution Tracking: Monitor and manage user contributions and support activities.',
      'User Participation Oversight: Oversee and track user involvement and progress in the help plan.'
    ],
    distributorsDemoTitle: 'Basic Help Plan',
    distributorsDemoFeatures: [
      'Sending/Receiving Help: Easily offer and receive help within the plan.',
      'Involvement Tracking: Monitor your participation and progress in the help system.',
      'Account Management: Update and manage your personal account settings and activities.'
    ]
  },
  {
    title: 'Investment Plan MLM Software Demo',
    icon: 'TrendingUp',
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
    title: 'Growth Plan MLM Software Demo',
    icon: 'TrendingUp',
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
    title: 'Monoline MLM Software Demo',
    icon: 'Minus',
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
    title: 'Australian X-UP MLM Software Demo',
    icon: 'ArrowUp',
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
  },
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
      'Investment Tracking: Monitor your investments and track their ROI performance.',
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

async function translateText(text: string, sourceLocale: string, targetLocale: string, retries = 3): Promise<string> {
  if (sourceLocale === targetLocale) return text;

  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch('http://localhost:3000/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          sourceLocale,
          targetLocale,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        return data.translatedText || text;
      } else if (response.status === 429) {
        // Rate limited, wait longer
        const waitTime = (i + 1) * 2000;
        console.log(`Rate limited, waiting ${waitTime}ms before retry...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
        continue;
      }
    } catch (error) {
      if (i === retries - 1) {
        console.error(`Translation error for ${targetLocale} after ${retries} retries:`, error);
      } else {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }

  return text;
}

async function translateFeatures(features: string[], sourceLocale: string, targetLocale: string): Promise<string[]> {
  if (sourceLocale === targetLocale) return features;

  const translated: string[] = [];
  for (const feature of features) {
    const translatedFeature = await translateText(feature, sourceLocale, targetLocale);
    translated.push(translatedFeature);
    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  return translated;
}

async function addDemoWithTranslations(demo: DemoData) {
  try {
    // Check if demo already exists (by icon/title)
    const existing = await prisma.demo_items.findFirst({
      where: {
        icon: demo.icon,
        locale: 'en',
      },
    });

    if (existing) {
      console.log(`Demo "${demo.title}" already exists, checking translations...`);

      // Check which translations exist
      const allTranslations = await prisma.demo_items.findMany({
        where: {
          icon: demo.icon,
        },
      });

      const existingLocales = new Set(allTranslations.map(t => t.locale));

      // Create missing translations
      for (const locale of locales) {
        if (locale === 'en' || existingLocales.has(locale)) {
          continue;
        }

        console.log(`  Creating ${locale} translation for "${demo.title}"...`);

        const translatedTitle = await translateText(demo.title, 'en', locale);
        const translatedAdminTitle = await translateText(demo.adminDemoTitle, 'en', locale);
        const translatedDistributorsTitle = await translateText(demo.distributorsDemoTitle, 'en', locale);
        const translatedAdminFeatures = await translateFeatures(demo.adminDemoFeatures, 'en', locale);
        const translatedDistributorsFeatures = await translateFeatures(demo.distributorsDemoFeatures, 'en', locale);

        await prisma.demo_items.create({
          data: {
            id: randomUUID(),
            icon: demo.icon,
            image: demo.image || '',
            title: translatedTitle,
            adminDemoTitle: translatedAdminTitle,
            adminDemoFeatures: translatedAdminFeatures,
            distributorsDemoTitle: translatedDistributorsTitle,
            distributorsDemoFeatures: translatedDistributorsFeatures,
            locale,
            updatedAt: new Date(),
          },
        });

        console.log(`  ✓ Created ${locale} translation`);
      }

      return;
    }

    // Create English version first
    console.log(`Creating demo: "${demo.title}"...`);

    const englishItem = await prisma.demo_items.create({
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

    console.log(`  ✓ Created English version`);

    // Create translations for other locales
    for (const locale of locales) {
      if (locale === 'en') continue;

      console.log(`  Creating ${locale} translation...`);

      const translatedTitle = await translateText(demo.title, 'en', locale);
      const translatedAdminTitle = await translateText(demo.adminDemoTitle, 'en', locale);
      const translatedDistributorsTitle = await translateText(demo.distributorsDemoTitle, 'en', locale);
      const translatedAdminFeatures = await translateFeatures(demo.adminDemoFeatures, 'en', locale);
      const translatedDistributorsFeatures = await translateFeatures(demo.distributorsDemoFeatures, 'en', locale);

      await prisma.demo_items.create({
        data: {
          id: randomUUID(),
          icon: demo.icon,
          image: demo.image || '',
          title: translatedTitle,
          adminDemoTitle: translatedAdminTitle,
          adminDemoFeatures: translatedAdminFeatures,
          distributorsDemoTitle: translatedDistributorsTitle,
          distributorsDemoFeatures: translatedDistributorsFeatures,
          locale,
          updatedAt: new Date(),
        },
      });

      console.log(`  ✓ Created ${locale} translation`);
    }

    console.log(`✓ Completed "${demo.title}"\n`);
  } catch (error) {
    console.error(`Error adding demo "${demo.title}":`, error);
  }
}

async function main() {
  console.log('Starting demo items seeding...\n');

  for (const demo of demos) {
    await addDemoWithTranslations(demo);
    // Rate limiting between demos
    await new Promise(resolve => setTimeout(resolve, 1000));
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
