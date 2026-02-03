import { prisma } from '../lib/db/prisma';
import { randomUUID } from 'crypto';

// English demo data from JSON backup
const englishDemos = [
  {
    id: "7728e261-f865-42af-ab6b-33fb72ed0da4",
    icon: "remix:RiGitBranchFill",
    image: "/uploads/upload-1769689506493-143jvr7blosm.webp",
    title: "Australian MLM Binary Software Demo",
    adminDemoTitle: "Manage Australian Binary MLM structures with specialized admin controls. Handle team balancing, track Australian market compliance, and ensure proper commission distribution.",
    adminDemoFeatures: ["Binary Tree Setup: Configure and manage the binary structure specific to the Australian Binary plan.", "Australian Rules Management: Implement and control unique rules and criteria for the Australian Binary system.", "User Activity Oversight: Monitor and track user performance and activities within the plan."],
    distributorsDemoTitle: "Build your Australian Binary MLM team with our localized platform. Track your left and right legs, monitor your earnings, and grow your network with tools designed for Australian distributors.",
    distributorsDemoFeatures: ["Downline Tracking: View and manage your downlines within the Australian Binary structure.", "Earnings Monitoring: Keep track of your earnings from the unique binary system.", "Account Management: Easily update and manage your account details and preferences."],
    showOnHomePage: true,
  },
  {
    id: "47af82b5-7eb8-4417-96ef-927649398c56",
    icon: "remix:RiFlashlightLine",
    image: "/uploads/upload-1769689120454-ydresa63ach.webp",
    title: "Auto-fill Plan MLM Software Demo",
    adminDemoTitle: "Manage auto-fill MLM structures with our advanced admin controls. Set auto-placement rules, monitor team balancing, and ensure optimal distributor placement across your network.",
    adminDemoFeatures: ["Auto-fill Structure Setup: Configure and manage the automatic placement of members within the structure.", "User Progress Tracking: Monitor and track user advancement within the auto-fill system.", "Commission Calculations: Oversee and manage commission distribution based on auto-fill placements and progress."],
    distributorsDemoTitle: "Benefit from automatic team placement in our Auto-fill MLM plan. Get placed automatically in the best positions, watch your team grow, and maximize your earning potential effortlessly.",
    distributorsDemoFeatures: ["Progress Tracking: Easily monitor your advancement within the auto-fill structure.", "Earnings Monitoring: Keep track of your earnings generated through the auto-fill placements.", "Account Management: Update personal details and manage your account settings within the auto-fill plan."],
    showOnHomePage: false,
  },
  {
    id: "5b11e24c-7abd-4e70-bbd6-8816f2ec16f8",
    icon: "remix:RiGitBranchLine",
    image: "/uploads/upload-1769689063154-8nap8lfdzj2.webp",
    title: "Binary MLM Software Demo",
    adminDemoTitle: "Manage your Binary MLM business efficiently with our robust admin panel featuring team balancing tools, spillover management, and comprehensive reporting. Control every aspect of your binary plan.",
    adminDemoFeatures: ["Binary Tree Setup: Simplified configuration and management of binary trees.", "Commission Control: Customizable commission rules and payout settings.", "User Tracking: Real-time monitoring of user activity and earnings."],
    distributorsDemoTitle: "Build your Binary MLM team with our user-friendly platform. Track your left and right legs, monitor your earnings, and grow your network with powerful tools designed for distributors.",
    distributorsDemoFeatures: ["Downline View: Easily access and visualize your binary structure and downline members", "Earnings Tracking: Monitor real-time earnings and commission progress.", "Account Management: Manage personal details and preferences within the Binary MLM system."],
    showOnHomePage: true,
  },
  {
    id: "b87785f6-d4b4-4e40-ad82-555130d2ee35",
    icon: "remix:RiCursorLine",
    image: "/uploads/upload-1769689265662-hafdmw6587u.webp",
    title: "Click Plan MLM Software Demo",
    adminDemoTitle: "Administer click-based MLM activities with our specialized admin tools. Track clicks, manage point systems, and control reward distributions based on user engagement and activity.",
    adminDemoFeatures: ["Click Level Setup: Configure and manage the different levels within the Click plan.", "User Progress Tracking: Monitor and track user advancement through click levels.", "Commission Distribution: Oversee and manage the distribution of commissions based on user clicks and progress."],
    distributorsDemoTitle: "Earn rewards through simple clicks and activities. Track your daily clicks, accumulate points, and convert your activity into real earnings with our easy-to-use click plan system.",
    distributorsDemoFeatures: ["Progress Tracking: Monitor your advancement through the click levels.", "Earnings Monitoring: Keep track of your earnings generated from clicks.", "Account Management: Update personal details and manage your account settings within the click plan"],
    showOnHomePage: false,
  },
  {
    id: "3a46c0f4-c72d-46f6-9d99-5827e8ab0300",
    icon: "remix:RiCoinsLine",
    image: "/uploads/upload-1769685489477-tiv0kkjv7er.webp",
    title: "Crowd Funding MLM Software Demo",
    adminDemoTitle: "Administer crowd funding campaigns with our specialized MLM admin tools. Track contributions, manage fund distribution, and monitor campaign progress across all your funding activities.",
    adminDemoFeatures: ["Funding Level Setup: Configure and manage different crowdfunding levels and goals.", "Contribution Tracking: Monitor and track user contributions across various funding levels.", "User Participation Oversight: Oversee and manage user involvement and progress within the crowdfunding plan."],
    distributorsDemoTitle: "Participate in exciting crowd funding opportunities through our MLM platform. Contribute to campaigns, track your investments, and earn rewards as you support various funding projects.",
    distributorsDemoFeatures: ["Contribution Tracking: Easily monitor your contributions and progress toward funding goals.", "Earnings Monitoring: Keep track of earnings and rewards from your crowdfunding activities.", "Account Management: Update personal details and manage your account within the crowdfunding system."],
    showOnHomePage: false,
  },
  {
    id: "4febff9c-8e2f-41ea-b729-2210d1ba8b6d",
    icon: "remix:RiRefreshLine",
    image: "/uploads/upload-1769745211183-4lcv1dtduv2.webp",
    title: "Emgoldex MLM Plan Software Demo",
    adminDemoTitle: "Manage your Emgoldex-style MLM plan with specialized admin tools for investment tracking, maturity calculations, and payout management. Control all aspects of your investment MLM business.",
    adminDemoFeatures: ["Emgoldex Structure Setup: Configure and manage the unique structure of the Emgoldex plan.", "User Progress Tracking: Monitor and track user advancement within the Emgoldex system.", "Commission Distribution: Oversee and manage the distribution of commissions based on user progress and placements in the Emgoldex plan."],
    distributorsDemoTitle: "Participate in our Emgoldex MLM investment plan. Track your investments, monitor maturity dates, and watch your returns grow as you build your network and investment portfolio.",
    distributorsDemoFeatures: ["Progress Tracking: Monitor your advancement within the Emgoldex structure.", "Earnings Monitoring: Keep track of your earnings as you progress through the plan.", "Account Management: Update personal details and manage your account settings within the Emgoldex plan."],
    showOnHomePage: false,
  },
  {
    id: "0fe07581-c40f-48bd-9073-8be38d7f0876",
    icon: "remix:RiHeartAddFill",
    image: "/uploads/upload-1769685500512-2vpzqad83lf.webp",
    title: "Help Plan MLM Software Demo",
    adminDemoTitle: "Administer help-based MLM activities with our comprehensive admin tools. Track help requests, manage matching systems, and ensure fair distribution of help across your network.",
    adminDemoFeatures: ["Help Rules Setup: Define and configure the rules for offering and receiving help within the plan.", "Contribution Tracking: Monitor and manage user contributions and support activities.", "User Participation Oversight: Oversee and track user involvement and progress in the help plan."],
    distributorsDemoTitle: "Give and receive help in our Help Plan MLM system. Request help when needed, provide help to others, and earn rewards as you participate in our community-based help network.",
    distributorsDemoFeatures: ["Sending/Receiving Help: Easily offer and receive help within the plan.", "Involvement Tracking: Monitor your participation and progress in the help system.", "Account Management: Update and manage your personal account settings and activities."],
    showOnHomePage: false,
  },
  {
    id: "9cbc510b-961d-44ec-ab18-c20b25088708",
    icon: "remix:RiStickyNoteFill",
    image: "/uploads/upload-1769689136187-n81bq49rc5.webp",
    title: "Hybrid Plan MLM Software Demo",
    adminDemoTitle: "Manage complex hybrid MLM plans combining multiple compensation structures. Control various plan types, set commission rules, and monitor performance across all hybrid plan components.",
    adminDemoFeatures: ["User Plan Structure Setup: Administrators can create a customized plan structure by mixing elements like binary, matrix, or unilevel to fit the business needs.", "User Progress Tracking: Track user progress with tools that show performance, achievements, and real-time updates within the plan.", "Commission Distribution: Manage and distribute commissions accurately based on user performance and placements, ensuring fair rewards in line with the customized plan rules."],
    distributorsDemoTitle: "Experience the best of multiple MLM plans combined into one powerful system. Benefit from hybrid compensation structures, maximize your earning potential, and enjoy flexible plan options.",
    distributorsDemoFeatures: ["Track Your Progress: Follow your journey and see your progress as you advance within the Basic Hybrid Plan.", "Monitor Your Earnings: View and keep up-to-date with your earnings as you move through different levels of the plan.", "Manage Your Account: Easily update your personal information and adjust your account settings to suit your preferences within the Basic Hybrid Plan."],
    showOnHomePage: false,
  },
  {
    id: "d1709778-87bf-4e9d-bdf8-ca532c443922",
    icon: "remix:RiHourglassFill",
    image: "/uploads/upload-1769689076229-dwt635hrjj.webp",
    title: "Investment MLM Plan Software Demo",
    adminDemoTitle: "Control investment-based MLM operations with our advanced admin system. Track investments, manage maturity cycles, calculate returns, and ensure proper payout distribution.",
    adminDemoFeatures: ["Investment Rules Setup: Define and configure the rules and criteria for member investments.", "Investment Tracking: Monitor and manage member investments across different levels.", "Return Oversight: Oversee and manage the distribution of returns based on investments."],
    distributorsDemoTitle: "Invest and earn with our Investment MLM plan. Make investments, track maturity dates, watch your returns grow, and build wealth through our structured investment MLM system.",
    distributorsDemoFeatures: ["Investment Tracking: Easily monitor your investments and their status within the plan.", "Return Monitoring: Keep track of your returns and earnings from investments.", "Account Management: Update personal details and manage your investment account settings."],
    showOnHomePage: false,
  },
  {
    id: "dd3c408e-e3d3-4d8b-82ab-9e43513fac7f",
    icon: "remix:RiGridLine",
    image: "/uploads/upload-1769685356693-76bwwi7doca.webp",
    title: "Matrix MLM Software Demo",
    adminDemoTitle: "Experience comprehensive Matrix MLM plan management with advanced admin controls, real-time tracking, and automated commission calculations. Perfect for managing multi-level matrix structures with ease.",
    adminDemoFeatures: ["Matrix Management: Configure and adjust matrix levels and member placements", "Commission Settings: Define and control commission rules specific to the matrix plan.", "Activity Monitoring: Track member activities and performance across the matrix structure."],
    distributorsDemoTitle: "Join a powerful Matrix MLM network where you can build your team, track your progress, and earn commissions through our intuitive distributor dashboard. Start your journey today.",
    distributorsDemoFeatures: ["Matrix Level View: Track your position and progress within the matrix structure.", "Earnings Overview: Monitor your earnings and commission status in real-time.", "Downline Management: Manage and support your personal downlines and account settings."],
    showOnHomePage: true,
  },
  {
    id: "49b3bf35-c3c9-4f7d-91a6-b137593bced6",
    icon: "remix:RiLayoutGridLine",
    image: "/uploads/upload-1769689294290-ro2da7wj9di.webp",
    title: "MLM Board Plan Software Demo",
    adminDemoTitle: "Administer board-based MLM plans with complete control over board positions, cycling management, and commission distribution. Monitor board activity and manage your entire board structure.",
    adminDemoFeatures: ["Board Configuration: Set up and manage board structures, including levels and entry criteria.", "Member Progress Tracking: Monitor the progress of members across different boards.", "Board Splits and Cycles: Oversee and manage board splits, cycles, and transitions."],
    distributorsDemoTitle: "Join our Board Plan MLM system and advance through board positions. Track your board status, cycle through boards, and earn commissions as you progress in your MLM journey.",
    distributorsDemoFeatures: ["Board Progress Tracking: Easily follow your advancement through various boards.", "Earnings Monitoring: Keep track of your earnings and rewards from board completions.", "Account Management: Update personal details and manage your account settings within the board plan."],
    showOnHomePage: false,
  },
  {
    id: "597f839f-67db-4579-aeb6-716078c34428",
    icon: "fontawesome:faBoxesAlt",
    image: "/uploads/upload-1769745344014-ipd9p9d8x4c.webp",
    title: "MLM Forced Matrix Plan",
    adminDemoTitle: "Manage forced matrix structures with complete admin control. Set matrix dimensions, track placements, and ensure proper team distribution across your predefined matrix structure.",
    adminDemoFeatures: ["Matrix Configuration: Set up and manage forced matrix structures with predefined width and depth levels.", "Placement Management: Control and monitor automatic member placements within the forced matrix structure.", "Commission Calculations: Oversee and manage commission distribution based on matrix positions and levels."],
    distributorsDemoTitle: "Join our Forced Matrix MLM plan with guaranteed positions. Get placed automatically in the matrix, track your position, and earn commissions as your matrix fills and cycles.",
    distributorsDemoFeatures: ["Matrix Position View: Track your position and progress within the forced matrix structure.", "Earnings Overview: Monitor your earnings based on your level and position in the matrix.", "Account Management: Update personal details and manage your account settings within the forced matrix plan."],
    showOnHomePage: false,
  },
  {
    id: "ee2c7e2b-4094-4e80-85e7-9a2a602bcc39",
    icon: "remix:RiStackLine",
    image: "/uploads/upload-1769689148128-hhc25h0k9os.webp",
    title: "MLM Generation Plan Software Demo",
    adminDemoTitle: "Control generation-based commission structures with our advanced admin tools. Set generation levels, track depth, and manage multi-generational payouts with precision and ease.",
    adminDemoFeatures: ["Generational Setup: Configure and manage multiple generational levels within the plan.", "Commission Configuration: Customize commission rules for each generational level.", "Member Oversight: Monitor and track member activities and performance across generations."],
    distributorsDemoTitle: "Build deep networks and earn generation-based commissions. Track your team depth, monitor multiple generations, and maximize your earning potential through our generation plan system.",
    distributorsDemoFeatures: ["Generational Earnings: Monitor earnings across different generational levels.", "Downline Management: Manage and support your downlines within the generational structure.", "Account Control: Update and maintain your personal account settings easily."],
    showOnHomePage: false,
  },
  {
    id: "cf960feb-3807-41aa-bd83-e58582aad2f2",
    icon: "remix:RiGiftLine",
    image: "/uploads/upload-1769689158481-3v8gh4uocwm.webp",
    title: "MLM Gift Plan Software Demo",
    adminDemoTitle: "Manage gift-based MLM rewards with our comprehensive admin panel. Track gift distributions, manage qualification criteria, and ensure fair reward allocation across your network.",
    adminDemoFeatures: ["Gifting Rules Setup: Define and configure the rules for gifting and contributions.", "Contribution Tracking: Monitor and manage user contributions within the gifting plan.", "User Participation Oversight: Oversee and track user involvement and progress in the gifting structure."],
    distributorsDemoTitle: "Earn exciting gifts and rewards as you build your MLM business. Track your progress toward gift milestones, see available rewards, and celebrate your achievements with our gift plan.",
    distributorsDemoFeatures: ["Sending/Receiving Gifts: Easily participate in gifting by sending and receiving contributions.", "Involvement Tracking: Monitor your participation and progress within the gifting plan.", "System Interaction: Manage your account and gifting activities within the system"],
    showOnHomePage: false,
  },
  {
    id: "c7668c54-ea97-4b88-9239-c9e48d06a280",
    icon: "remix:RiCakeLine",
    image: "/uploads/upload-1769689280263-84fa9itsvti.webp",
    title: "MLM Party Plan Software Demo",
    adminDemoTitle: "Organize and manage party plan events with our comprehensive admin system. Track party bookings, manage host rewards, and monitor sales performance across all your party plan activities.",
    adminDemoFeatures: ["Party Event Setup: Configure and manage party events, including schedules and hosts.", "Sales Tracking: Monitor and track sales generated from party events.", "Participant Oversight: Oversee participant engagement and activities during parties."],
    distributorsDemoTitle: "Host successful MLM parties with our easy-to-use platform. Book parties, invite guests, track sales, and earn rewards as you grow your business through fun and engaging events.",
    distributorsDemoFeatures: ["Earnings Tracking: Monitor your earnings from party events in real-time.", "Account Management: Update your personal information and manage account settings.", "Event Participation: Easily join and engage in party events within the system."],
    showOnHomePage: false,
  },
  {
    id: "1ad76e94-60f6-44fc-a074-76961f581b7a",
    icon: "remix:RiStairsLine",
    image: "/uploads/upload-1769689255436-cvy3zyolv4m.webp",
    title: "MLM Stair Step Plan Software Demo",
    adminDemoTitle: "Administer your Stair Step MLM plan with complete control over rank advancement, qualification tracking, and commission payouts. Monitor distributor progress and manage your entire network.",
    adminDemoFeatures: ["Stair Step Level Configuration: Set up and manage the levels and criteria for the Stair Step plan.", "User Progress Tracking: Monitor and track user advancement through stair step levels.", "Commission Distribution Oversight: Manage and oversee the distribution of commissions based on user progress."],
    distributorsDemoTitle: "Climb the ranks in our Stair Step MLM plan. Track your progress, achieve new levels, and unlock greater earning potential as you build your team and reach new milestones.",
    distributorsDemoFeatures: ["Progress Tracking: Monitor your advancement through the stair step levels.", "Earnings Monitoring: Keep track of your earnings based on your current level.", "Account Management: Update personal details and manage account settings within the plan."],
    showOnHomePage: false,
  },
  {
    id: "c5c33632-11e8-44b8-bfa1-04b01c15a546",
    icon: "remix:RiQuestionLine",
    image: "",
    title: "MMM Global MLM Plan Software Demo",
    adminDemoTitle: "Control MMM Global-style MLM operations with our comprehensive admin system. Manage contributions, track maturity cycles, and ensure proper payout distribution across your entire network.",
    adminDemoFeatures: ["MMM Global Structure Setup: Configure and manage the MMM Global plan structure.", "User Progress Tracking: Monitor and track user advancement within the MMM Global system.", "Commission Distribution: Oversee and manage commission distribution based on user progress."],
    distributorsDemoTitle: "Participate in our MMM Global MLM plan and watch your contributions grow. Track your maturity dates, monitor your returns, and build wealth through our structured investment system.",
    distributorsDemoFeatures: ["Progress Tracking: Monitor your advancement within the MMM Global structure.", "Earnings Monitoring: Keep track of your earnings as you progress through the plan.", "Account Management: Update personal details and manage your account settings."],
    showOnHomePage: false,
  },
  {
    id: "1a3b1cdd-daf6-4223-8e7c-ba7848784a47",
    icon: "remix:RiSubtractLine",
    image: "/uploads/upload-1769689091044-0l3iidsy7d.webp",
    title: "Monoline MLM Plan Software Demo",
    adminDemoTitle: "Administer single-line MLM structures with our specialized admin tools. Track linear team growth, manage depth-based commissions, and control distributor placement in your monoline structure.",
    adminDemoFeatures: ["Monoline Structure Setup: Configure and manage the linear structure of the Monoline plan.", "User Progress Tracking: Monitor and track user advancement along the monoline.", "Commission Calculations: Oversee and manage commission distribution based on user positions within the monoline."],
    distributorsDemoTitle: "Build a powerful single-line team with our Monoline MLM plan. Focus on depth over width, track your team growth, and earn commissions from every level of your linear organization.",
    distributorsDemoFeatures: ["Progress Tracking: Easily monitor your position and progress within the monoline structure.", "Earnings Monitoring: Keep track of your earnings based on your position in the line.", "Account Management: Update personal details and manage your account settings within the monoline plan."],
    showOnHomePage: false,
  },
  {
    id: "d1635ea3-1431-4c34-8f7f-b208d5488ac8",
    icon: "remix:RiRepeatLine",
    image: "/uploads/upload-1769689244605-7d35sijipfr.webp",
    title: "Repurchase MLM Plan Software Demo",
    adminDemoTitle: "Track and manage repurchase volumes with our advanced admin dashboard. Monitor distributor buying patterns, calculate repurchase commissions, and ensure consistent revenue streams.",
    adminDemoFeatures: ["Repurchase Rules Setup: Define and configure the rules for member repurchases.", "Purchase Tracking: Monitor and track member purchases within the plan.", "Commission Calculation: Oversee and manage commission calculations based on repurchases."],
    distributorsDemoTitle: "Earn ongoing commissions through regular product repurchases. Track your purchase history, build loyalty points, and unlock additional rewards as you maintain your buying activity.",
    distributorsDemoFeatures: ["Making Purchases: Easily make repurchases within the plan.", "Earnings Tracking: Monitor your earnings from repurchase activities.", "Account Management: Manage your personal account settings and preferences"],
    showOnHomePage: false,
  },
  {
    id: "627a66c7-17a0-4fc5-9f64-5da1343a3957",
    icon: "remix:RiGitMergeLine",
    image: "/uploads/upload-1769685469361-acywbsf59qf.webp",
    title: "Spillover Binary MLM Software Demo",
    adminDemoTitle: "Control spillover distribution and team balancing with our advanced Binary MLM admin tools. Monitor team growth, manage placements, and ensure fair distribution across your network.",
    adminDemoFeatures: ["Binary Tree Configuration: Set up and manage the binary structure, including spillover settings.", "Spillover Rules Management: Define and control spillover rules to ensure balanced network growth.", "User Activity Oversight: Monitor and track user performance and activities within the plan."],
    distributorsDemoTitle: "Benefit from spillover placement in our Binary MLM system. Watch your team grow automatically as new members join, maximizing your earning potential with minimal effort.",
    distributorsDemoFeatures: ["Spillover Visualization: See how spillover affects your downline and overall structure.", "Earnings Overview: Monitor earnings from both direct referrals and spillover contributions.", "Account Management: Easily update and manage your account details and preferences."],
    showOnHomePage: false,
  },
  {
    id: "3162c8a3-2f57-4b5a-8fef-85a9ba16c38b",
    icon: "remix:RiTeamLine",
    image: "/uploads/upload-1769685376073-3dd7jwbmb5s.webp",
    title: "Unilevel MLM Software Demo",
    adminDemoTitle: "Manage unlimited width unilevel structures with our powerful admin dashboard. Track distributor placement, monitor depth, and control commission calculations across unlimited levels.",
    adminDemoFeatures: ["Unilevel Setup: Configure and manage unlimited levels within the Unilevel plan.", "Commission Configuration: Set and customize commission structures for all levels.", "User Management: Oversee and monitor user activity and performance across the network."],
    distributorsDemoTitle: "Build unlimited width teams with our Unilevel MLM plan. Recruit as many direct members as you want, track your team depth, and earn commissions from multiple levels below you.",
    distributorsDemoFeatures: ["Referral Tracking: Easily view and manage your direct referrals.", "Earnings Monitoring: Keep track of your earnings and commissions in real-time.", "Account Management: Update personal information and manage account settings efficiently."],
    showOnHomePage: true,
  },
  {
    id: "6ab60837-a510-481a-9176-fb6c075b7280",
    icon: "remix:RiArrowUpLine",
    image: "/uploads/upload-1769689433069-kxf4z8jto7n.webp",
    title: "X-UP Plan MLM Software Demo",
    adminDemoTitle: "Control X-UP MLM plan operations with our comprehensive admin dashboard. Manage up-line advancement, track qualification requirements, and monitor distributor progress through ranks.",
    adminDemoFeatures: ["X-UP Level Setup: Configure and manage the different levels within the X-UP plan.", "User Progress Tracking: Monitor and track user advancement through the X-UP levels.", "Commission Distribution: Oversee and manage the distribution of commissions based on user progress and X-UP qualifications."],
    distributorsDemoTitle: "Advance up the ranks with our X-UP MLM plan. Move up when your downline advances, earn from multiple levels, and build a sustainable income stream through our unique advancement system.",
    distributorsDemoFeatures: ["Progress Tracking: Monitor your advancement through the X-UP levels.", "Earnings Monitoring: Keep track of your earnings as you qualify for X-UP commissions.", "Account Management: Update personal details and manage your account settings within the X-UP plan."],
    showOnHomePage: false,
  },
];

async function restoreEnglishDemos() {
  try {
    console.log('='.repeat(50));
    console.log('Restoring English Demo Data');
    console.log('='.repeat(50));
    console.log(`\nRestoring ${englishDemos.length} English demos...\n`);

    let restored = 0;
    let updated = 0;
    let errors = 0;

    for (const demo of englishDemos) {
      try {
        const existing = await prisma.demo_items.findFirst({
          where: { icon: demo.icon, locale: 'en' },
        });

        const data = {
          adminDemoTitle: demo.adminDemoTitle,
          adminDemoFeatures: demo.adminDemoFeatures ? JSON.stringify(demo.adminDemoFeatures) : null,
          distributorsDemoTitle: demo.distributorsDemoTitle,
          distributorsDemoFeatures: demo.distributorsDemoFeatures ? JSON.stringify(demo.distributorsDemoFeatures) : null,
          image: demo.image || '',
          updatedAt: new Date(),
        };

        if (existing) {
          await prisma.demo_items.update({
            where: { id_locale: { id: existing.id, locale: 'en' } },
            data,
          });
          updated++;
          console.log(`✓ Updated: ${demo.title || demo.adminDemoTitle}`);
        } else {
          await prisma.demo_items.create({
            data: {
              id: demo.id || randomUUID(),
              icon: demo.icon,
              locale: 'en',
              ...data,
            },
          });
          restored++;
          console.log(`✓ Created: ${demo.title || demo.adminDemoTitle}`);
        }
      } catch (error) {
        console.error(`✗ Error: ${demo.title}`, error);
        errors++;
      }
    }

    console.log('\n' + '='.repeat(50));
    console.log('Summary:');
    console.log(`  Created: ${restored}`);
    console.log(`  Updated: ${updated}`);
    console.log(`  Errors: ${errors}`);
    console.log('='.repeat(50));
  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

restoreEnglishDemos();
