import { prisma } from '../lib/db/prisma';

// Map of demo titles to better icons
const iconUpdates: Record<string, string> = {
  'Binary MLM Software Demo': 'GitBranch',
  'Matrix MLM Software Demo': 'Grid3x3',
  'Unilevel MLM Software Demo': 'Users',
  'MLM Generation Software Demo': 'Layers',
  'Gift MLM Software Demo': 'Gift',
  'Board MLM Software Demo': 'LayoutGrid',
  'Party MLM Software Demo': 'PartyPopper',
  'Repurchase MLM Software Demo': 'Repeat',
  'Spillover Binary MLM Software Demo': 'GitMerge',
  'Stair Step MLM Software Demo': 'Stairs',
  'Australian Binary MLM Software Demo': 'GitBranch', // Keep same as Binary
  'Crowd Funding MLM Software Demo': 'Coins',
  'Help Plan MLM Software Demo': 'HandHeart',
  'Investment Plan MLM Software Demo': 'TrendingUp',
  'Growth Plan MLM Software Demo': 'LineChart', // Changed to differentiate from Investment
  'Monoline MLM Software Demo': 'ArrowRight', // Changed to ArrowRight for linear structure
  'Australian X-UP MLM Software Demo': 'ArrowUp',
  'Auto-fill MLM Software Demo': 'Zap',
  'Click Plan MLM Software Demo': 'MousePointerClick',
  'Emgoldex MLM Software Demo': 'RotateCcw',
  'Hybrid MLM Software Demo': 'Network',
  'Cyclone MLM Software Demo': 'Wind',
  'Donation MLM Software Demo': 'HeartHandshake',
  'Forced Matrix MLM Software Demo': 'Boxes',
  'Breakaway MLM Software Demo': 'Split',
  'One Up MLM Software Demo': 'ArrowUpCircle',
  'Reverse Binary MLM Software Demo': 'ArrowDown', // Changed to ArrowDown for reverse
  'Level MLM Software Demo': 'BarChart3', // Changed to differentiate from Generation
  'ROI MLM Software Demo': 'DollarSign',
  '2-Up MLM Software Demo': 'ArrowUpRight', // Changed to differentiate
  '3-Up MLM Software Demo': 'ArrowUpLeft', // Changed to differentiate
  'Australian Binary MLM Software Demo': 'GitBranch', // Same as Binary
  'Diamond MLM Software Demo': 'Gem',
  'Leadership MLM Software Demo': 'Crown',
  'Compression MLM Software Demo': 'Compress',
  'Matching Bonus MLM Software Demo': 'Handshake',
};

async function updateDemoIcons() {
  try {
    console.log('Updating demo icons...\n');

    // Get all demo items grouped by icon (to find translations)
    const allDemos = await prisma.demo_items.findMany({
      where: {
        locale: 'en', // Only update English versions, icons are shared
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    console.log(`Found ${allDemos.length} demo items in database.\n`);

    // Check for items without icons
    const itemsWithoutIcons = allDemos.filter(d => !d.icon || d.icon.trim() === '');
    if (itemsWithoutIcons.length > 0) {
      console.log(`⚠ Found ${itemsWithoutIcons.length} items without icons:`);
      itemsWithoutIcons.forEach(item => console.log(`  - ${item.title}`));
      console.log('');
    }

    let updatedCount = 0;
    const missingIcons: string[] = [];
    const correctIcons: string[] = [];

    for (const demo of allDemos) {
      const newIcon = iconUpdates[demo.title];

      if (newIcon) {
        if (demo.icon !== newIcon) {
          // Find all translations by matching icon (icons are shared across translations)
          const allTranslations = await prisma.demo_items.findMany({
            where: {
              icon: demo.icon,
            },
          });

          for (const translation of allTranslations) {
            await prisma.demo_items.update({
              where: { id: translation.id },
              data: {
                icon: newIcon,
                updatedAt: new Date(),
              },
            });
          }

          console.log(`✓ Updated "${demo.title}" icon: ${demo.icon} → ${newIcon} (${allTranslations.length} translation(s))`);
          updatedCount++;
        } else {
          correctIcons.push(`${demo.title}: ${demo.icon}`);
        }
      } else {
        missingIcons.push(`${demo.title} (current: ${demo.icon})`);
      }
    }

    if (correctIcons.length > 0) {
      console.log(`\n✓ ${correctIcons.length} items already have correct icons:`);
      correctIcons.forEach(item => console.log(`  - ${item}`));
    }

    console.log(`\n✓ ${correctIcons.length} items already have correct icons`);
    if (missingIcons.length > 0) {
      console.log(`\n⚠ Items without icon mapping (${missingIcons.length}):`);
      missingIcons.forEach(item => console.log(`  - ${item}`));
    }

    console.log(`\n✓ Updated ${updatedCount} demo icon(s) successfully!`);
  } catch (error) {
    console.error('Error updating demo icons:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

updateDemoIcons()
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
