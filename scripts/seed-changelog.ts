/**
 * Script to seed changelog entries from cloudmlmsoftware.com/changelog/
 * Run with: npx tsx scripts/seed-changelog.ts
 */

import { prisma } from '@/lib/db/prisma';
import { createChangelogEntry } from '@/lib/api/changelog';

const changelogEntries = [
  {
    version: '15.0',
    title: 'Cloud MLM software version 15.0',
    description: "We're excited to introduce Cloud MLM Software Version 15.0, a powerful update that significantly advances the user experience, automation capabilities, and international adaptability. This version is designed to support fast-growing MLM businesses with more flexibility, intelligent features, and enterprise-grade scalability.",
    features: [
      'Multi-Language AI Translation',
      'Multi-Plan Configuration',
      'Progressive Mobile Experience',
      'Performance Optimization',
      'Enhanced Communication Tools'
    ],
    date: '2025-06-23',
    order: 15
  },
  {
    version: '13.0',
    title: 'Cloud MLM software version 13.0',
    description: 'The latest version of Cloud MLM software is enriched with unique features including multi-plans and google translate module options. The updated version enhances communication, mobile compatibility, scalability, and performance.',
    features: [
      'Increased efficiency and user friendliness',
      'Increased speed',
      'Better user experience',
      'UI improvements',
      'Enhanced performance'
    ],
    date: '2024-01-18',
    order: 13
  },
  {
    version: '12.0',
    title: 'Cloud MLM software version 12.0',
    description: 'This new and updated version of CloudMLM Software adopted React JS on the user side with attractive dashboard. Integrating React into Cloud MLM software offered several benefits including cross-platform compatibility, flexibility, and increased efficiency in performance.',
    features: [
      'Dashboard UI is improved that enhanced the user experience',
      'Implemented better caching of resources',
      'Easy maintenance and better results',
      'Added activity history for every user',
      'Better speed'
    ],
    date: '2023-08-03',
    order: 12
  },
  {
    version: '11.0',
    title: 'Cloud MLM software version 11.0',
    description: 'This version marks the entry to the new modern world which encompasses Updated technology such as PHP-Laravel-Lumen framework, ReactJs 17.0.2, NodeJS v16.13.2, PHP v8.1.11, Lumen,v9.0.2, Laravel Components v9.0. Cloud MLM software developers have made several significant changes that made it easier to use. It has 99% capacity to performance.',
    features: [
      'Updated technology stack',
      'Improved performance (99% capacity)',
      'Better user experience',
      'Enhanced security',
      'Modern framework integration'
    ],
    date: '2022-11-15',
    order: 11
  },
  {
    version: '10.0',
    title: 'Cloud MLM software version 10.0',
    description: 'Version 10.0 brings significant improvements to the platform with enhanced features and better performance.',
    features: [
      'Enhanced platform features',
      'Improved performance',
      'Better user interface',
      'Updated security measures'
    ],
    date: '2022-06-15',
    order: 10
  },
  {
    version: '9.0',
    title: 'Cloud MLM software version 9.0',
    description: 'Version 9.0 introduces new capabilities and improvements to the MLM software platform.',
    features: [
      'New platform capabilities',
      'Performance enhancements',
      'User experience improvements'
    ],
    date: '2021-11-15',
    order: 9
  },
  {
    version: '8.0',
    title: 'Cloud MLM software version 8.0',
    description: 'Version 8.0 includes major updates and new features for better MLM management.',
    features: [
      'Major platform updates',
      'New management features',
      'Enhanced functionality'
    ],
    date: '2021-06-15',
    order: 8
  },
  {
    version: '7.0',
    title: 'Cloud MLM software version 7.0',
    description: 'Version 7.0 brings improvements and new features to enhance the MLM software experience.',
    features: [
      'Platform improvements',
      'New features',
      'Better performance'
    ],
    date: '2020-11-15',
    order: 7
  },
  {
    version: '6.0',
    title: 'Cloud MLM software version 6.0',
    description: 'Here users can find changes in tickets, which change status and priority from the panel itself. Ajax used. The default status is opened, resolved, closed, archived, deleted, unverified, and requested approval. Default priorities are also added, such as low, usual, high, and emergency. V.6.0 comes with profile photo features and cover photo features. They have implemented an ajax mechanism for cover and profile changing. There will be an information area with a flag and possible information about the user. Ajax-based notes features were also added. It also added rank, referrals, and balance widgets in profile pages—designed a timeline for activities with human-readable data.',
    features: [
      'Added Activity tab in profile',
      "Added' Scroll Top' button for lengthy pages",
      'Ticket system – Added Canned responses option',
      'Ticket system – Added change color option with color picker for ticket types',
      'Changed colors for all statuses and priorities to understand quick',
      'Email – Fixed a jQuery bug where users won\'t be able to click on the latest messages',
      'Email – Added a count label on the Email inbox navigation',
      'New genealogy tree with Pan and Zoom, Facebook-like Hover Card, Fast loading, Drag tree',
      'New Registration wizard with Zip Code validation, Password strength meter, Random password generator',
      'Main navigation – Shrink switch added'
    ],
    date: '2017-04-08',
    order: 6
  },
  {
    version: '5.0',
    title: 'Cloud MLM software version 5.0',
    description: 'This version of cloud MLM software is built with new features that meet clients\' requirements, such as the core framework being upgraded with laravel 5.4. Design changes occurred, and users can switch their currency. Also, you can find a status button that showcases whether you are offline or online for downline members inside the system. Added 3 phases above the graph \'Users Joined over time\' for quick information, including weekly, monthly, and yearly. It encompasses an email system that looks like Gmail, with fast loading, read and unread status of messages, and a bulk delete option.',
    features: [
      'Unlimited currencies with dynamic or static values',
      'Added Date and Time bar in Software',
      'Quick link to support',
      'Added new graph – Package purchase',
      'The ticket overview graph includes open, closed, and reopened',
      'Added top recruiters list in the dashboard',
      'Added Arabic and turkish',
      'Ticket system – Total replacement – Helpdesk',
      'Separate dashboard for Ticket system in full-page view',
      'Toggle Software\'s main navigation by clicking on the toggle',
      'Gmail-like email system with check all option, pagination, full-width design, multiple users in composer',
      'Manage helpdesk departments, ticket categories, priorities, and types',
      'Manage Knowledgebase with article categories and scheduling'
    ],
    date: '2016-02-12',
    order: 5
  },
  {
    version: '4.0',
    title: 'Cloud MLM software version 4.0',
    description: 'This version embraces the features such as multi-languages, including Espanol, Deutsch, Portuguese, Francis, and Italian.',
    features: [
      'Added a new landing page that the admin can manage',
      'Redesigned the Software with bootstrap 3',
      'Added more currencies',
      'Added dynamic currency retrieval from external providers',
      'Added WordPress integration built into the core',
      'Added Open-cart integration built into the core',
      'Added Drupal integration built into the core',
      'Register by clicking on a vacant tree'
    ],
    date: '2016-01-30',
    order: 4
  },
  {
    version: '3.0',
    title: 'Cloud MLM software version 3.0',
    description: 'The keystones of this version are a multi-Currency system, and values can be added by admin and Design Bug resolved, that is, Multi-Currency Switch overlapped by header. It also added third-party Email server settings and integrated built-In emails with the same. It also added three default plans, bronze, gold, and silver.',
    features: [
      'Feature request – Added – Admin can change fav-icon now',
      'Added Quick Email notification in header',
      'Added referral link in users dashboard',
      'Added activity history for every user',
      'Change plan form – redesigned the wizard',
      'Removed the last change incompatible with PHP 5.1.x and lower',
      'Fixed performance issues related to configuration',
      'Added Documents Upload option',
      'Voucher generation – Code Change',
      'Profile – Added status tabs in the profile area',
      'Users can now see the referred users in their profiles',
      'Admin can change user\'s passwords now',
      'Added Service Charge – Binary commission settings',
      'Added Tax – Binary commission setting'
    ],
    date: '2016-01-05',
    order: 3
  },
  {
    version: '2.0',
    title: 'Cloud MLM software version 2.0',
    description: 'This version is entirely different from version1.0. This version embraced so many features such as a ticket system in software, a package in the registration form, and added Added National Identification Number in the registration form. Also, in this registration form, we added a We-chat id. In registration validation, we added client-side validations and password validation that made input more strong validation. The registration form added Added Cheque as one payment method and Integrated paypal as one payment method. Also made a change in the E-wallet payment method for more security. It also attached the credit fund option in the admin panel,Added the in-built Email. This email system encompasses integrated Ajax functions for faster browsing and added summer, not the editor, for better email messages .In this ticket system includes priority, tag, status, and category forms.',
    features: [
      'Integrated MLM Software leads with ticket system',
      'Ticket system – Changed design to suit Cloud MLM Software',
      'Fixed design bugs',
      'Ticket System – Added Ticket FAQ management',
      'Added Auto-responder – Admin can set auto-responder emails to be sent automatically',
      'Fixed design bugs: Auto-responder design',
      'Added Multi-Language System in Cloud MLM Software',
      'Translation languages such as Spanish and french',
      'Added National Identification Number in registration',
      'Added We-chat id in registration',
      'Added client-side validations and password validation',
      'Added Cheque as payment method',
      'Integrated paypal as payment method',
      'Enhanced E-wallet payment method for more security',
      'Added credit fund option in admin panel',
      'Added in-built Email with Ajax functions and Summernote editor'
    ],
    date: '2015-12-30',
    order: 2
  },
  {
    version: '1.0',
    title: 'Cloud MLM Software 1.0',
    description: 'The first release of Cloud MLM Software only provides basic features. It has reorganized menus that look easy for navigation. It also improves the theme, such as W3C validation on a best-effort basis, and adds skin "dark ." Cloud MLM software revised the documentation and added the graph of Members joining Analytics and income Vs. Payout.',
    features: [
      'Attached genealogy tree design',
      'Genealogy tree – Added popups on hover',
      'Genealogy tree – Added per-person navigation',
      'Added Recent Plan Top-Up in the admin panel',
      'Added New Registered users panel',
      'Assembled and designed the sponsor tree for a better view',
      'Fixed bug – Popover stays after per-person tree navigation',
      'Tree view genealogy – Redesigned to meet the software design',
      'Reorganized menus for easy navigation',
      'Improved theme with W3C validation',
      'Added dark skin option',
      'Revised documentation',
      'Added graph of Members joining Analytics',
      'Added income Vs. Payout graph'
    ],
    date: '2015-11-22',
    order: 1
  }
];

async function seedChangelog() {
  console.log('Starting changelog seeding...');

  try {
    for (const entry of changelogEntries) {
      try {
        // Check if entry already exists
        const existing = await (prisma as any).changelog_entries.findFirst({
          where: {
            version: entry.version,
            locale: 'en',
          },
        });

        if (existing) {
          console.log(`Version ${entry.version} already exists, skipping...`);
          continue;
        }

        // Create the entry
        await createChangelogEntry({
          version: entry.version,
          title: entry.title,
          description: entry.description,
          features: entry.features,
          locale: 'en',
          order: entry.order,
        });

        console.log(`✓ Created changelog entry for version ${entry.version}`);
      } catch (error: any) {
        if (error.code === 'P2002') {
          console.log(`Version ${entry.version} already exists (unique constraint), skipping...`);
        } else {
          console.error(`Error creating version ${entry.version}:`, error.message);
        }
      }
    }

    console.log('Changelog seeding completed!');
  } catch (error) {
    console.error('Fatal error during seeding:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seeding
if (require.main === module) {
  seedChangelog();
}

export { seedChangelog };
