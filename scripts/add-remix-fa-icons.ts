/**
 * Script to add Remix/FontAwesome icons to the database
 * Assigns appropriate icons based on item titles/types
 */

import { prisma } from '@/lib/db/prisma';
import * as RemixIcon from '@remixicon/react';

// Mapping of item titles/patterns to Remix icons
const iconMappings: Record<string, string> = {
  // Demo Items
  'Binary MLM Software Demo': 'remix:RiGitBranchLine',
  'Spillover Binary MLM Software Demo': 'remix:RiGitMergeLine',
  'Matrix MLM Software Demo': 'remix:RiGridLine',
  'Unilevel MLM Software Demo': 'remix:RiTeamLine',
  'MLM Generation Software Demo': 'remix:RiStackLine',
  'Gift MLM Software Demo': 'remix:RiGiftLine',
  'Board MLM Software Demo': 'remix:RiLayoutGridLine',
  'Party MLM Software Demo': 'remix:RiGiftLine',
  'Repurchase MLM Software Demo': 'remix:RiRepeatLine',
  'Stair Step MLM Software Demo': 'remix:RiStairsLine',
  'Australian Binary MLM Software Demo': 'remix:RiGitBranchLine',
  'Crowd Funding MLM Software Demo': 'remix:RiCoinsLine',
  'Help Plan MLM Software Demo': 'remix:RiHeartHandshakeLine',
  'Investment Plan MLM Software Demo': 'remix:RiTrendingUpLine',
  'Growth Plan MLM Software Demo': 'remix:RiLineChartLine',
  'Monoline MLM Software Demo': 'remix:RiSubtractLine',
  'Australian X-UP MLM Software Demo': 'remix:RiArrowUpLine',
  'Auto-fill MLM Software Demo': 'remix:RiFlashLine',
  'Click Plan MLM Software Demo': 'remix:RiCursorLine',
  'Emgoldex MLM Software Demo': 'remix:RiRefreshLine',
  'Hybrid MLM Software Demo': 'remix:RiNetworksLine',
  'Cyclone MLM Software Demo': 'remix:RiWindyLine',
  'Donation MLM Software Demo': 'remix:RiHeartHandshakeLine',
  'Forced Matrix MLM Software Demo': 'remix:RiBoxesLine',
  'Breakaway MLM Software Demo': 'remix:RiSplitCellsLine',
  'One Up MLM Software Demo': 'remix:RiArrowUpCircleLine',
  'Reverse Binary MLM Software Demo': 'remix:RiGitMergeLine',
  'Level MLM Software Demo': 'remix:RiStackLine',
  'ROI MLM Software Demo': 'remix:RiMoneyDollarCircleLine',
  '2-Up MLM Software Demo': 'remix:RiArrowUpLine',
  '3-Up MLM Software Demo': 'remix:RiArrowUpLine',
  'Diamond MLM Software Demo': 'remix:RiGemLine',
  'Leadership MLM Software Demo': 'remix:RiVipCrownLine',
  'Compression MLM Software Demo': 'remix:RiCompressLine',
  'Matching Bonus MLM Software Demo': 'remix:RiHandshakeLine',
};

// Generic mappings based on keywords
const keywordMappings: Array<{ keywords: string[]; icon: string }> = [
  { keywords: ['binary'], icon: 'remix:RiGitBranchLine' },
  { keywords: ['matrix', 'forced'], icon: 'remix:RiGridLine' },
  { keywords: ['unilevel', 'team'], icon: 'remix:RiTeamLine' },
  { keywords: ['generation', 'stack', 'level'], icon: 'remix:RiStackLine' },
  { keywords: ['gift', 'donation', 'help'], icon: 'remix:RiGiftLine' },
  { keywords: ['board', 'layout'], icon: 'remix:RiLayoutGridLine' },
  { keywords: ['party', 'celebration'], icon: 'remix:RiGiftLine' },
  { keywords: ['repeat', 'repurchase'], icon: 'remix:RiRepeatLine' },
  { keywords: ['stair', 'step'], icon: 'remix:RiStairsLine' },
  { keywords: ['coin', 'funding', 'crowd'], icon: 'remix:RiCoinsLine' },
  { keywords: ['investment', 'trending', 'growth'], icon: 'remix:RiTrendingUpLine' },
  { keywords: ['arrow', 'up', 'x-up'], icon: 'remix:RiArrowUpLine' },
  { keywords: ['flash', 'zap', 'auto'], icon: 'remix:RiFlashLine' },
  { keywords: ['cursor', 'click'], icon: 'remix:RiCursorLine' },
  { keywords: ['refresh', 'rotate'], icon: 'remix:RiRefreshLine' },
  { keywords: ['network', 'hybrid'], icon: 'remix:RiNetworksLine' },
  { keywords: ['wind', 'cyclone'], icon: 'remix:RiWindyLine' },
  { keywords: ['box', 'forced'], icon: 'remix:RiBoxesLine' },
  { keywords: ['split', 'breakaway'], icon: 'remix:RiSplitCellsLine' },
  { keywords: ['circle', 'one up'], icon: 'remix:RiArrowUpCircleLine' },
  { keywords: ['merge', 'spillover'], icon: 'remix:RiGitMergeLine' },
  { keywords: ['dollar', 'roi', 'money'], icon: 'remix:RiMoneyDollarCircleLine' },
  { keywords: ['gem', 'diamond'], icon: 'remix:RiGemLine' },
  { keywords: ['crown', 'leadership', 'vip'], icon: 'remix:RiVipCrownLine' },
  { keywords: ['compress'], icon: 'remix:RiCompressLine' },
  { keywords: ['handshake', 'matching', 'bonus'], icon: 'remix:RiHandshakeLine' },
];

/**
 * Find icon for a given title
 */
function findIconForTitle(title: string): string {
  // Check exact match first
  if (iconMappings[title]) {
    return iconMappings[title];
  }

  // Check keyword matches
  const titleLower = title.toLowerCase();
  for (const mapping of keywordMappings) {
    if (mapping.keywords.some(keyword => titleLower.includes(keyword))) {
      return mapping.icon;
    }
  }

  // Default icon
  return 'remix:RiQuestionLine';
}

/**
 * Verify Remix icon exists
 */
function verifyRemixIcon(iconValue: string): boolean {
  if (!iconValue.startsWith('remix:')) return false;
  const iconName = iconValue.replace('remix:', '');
  try {
    const IconComponent = (RemixIcon as any)[iconName];
    return IconComponent !== undefined && typeof IconComponent === 'function';
  } catch {
    return false;
  }
}

/**
 * Add icons to demo_items table
 */
async function addDemoItemsIcons() {
  console.log('Adding Remix icons to demo_items table...');
  try {
    const demoItems = await prisma.demo_items.findMany({
      select: {
        id: true,
        title: true,
        icon: true,
      },
    });

    let added = 0;
    let skipped = 0;

    for (const item of demoItems) {
      // Skip if already has an icon
      if (item.icon && item.icon.trim() !== '') {
        skipped++;
        continue;
      }

      const iconValue = findIconForTitle(item.title);
      if (verifyRemixIcon(iconValue)) {
        await prisma.demo_items.update({
          where: { id: item.id },
          data: { icon: iconValue },
        });
        added++;
        console.log(`  ✓ ${item.title}: ${iconValue}`);
      } else {
        skipped++;
        console.log(`  ⚠ ${item.title}: Invalid icon ${iconValue}`);
      }
    }

    console.log(`✓ Added ${added} icons, skipped ${skipped}\n`);
    return { added, skipped };
  } catch (error) {
    console.error('Error adding demo_items icons:', error);
    return { added: 0, skipped: 0 };
  }
}

/**
 * Add icons to modules table (based on title or use default)
 */
async function addModulesIcons() {
  console.log('Adding Remix icons to modules table...');
  try {
    const modules = await prisma.modules.findMany({
      select: {
        id: true,
        title: true,
        image: true,
      },
    });

    let added = 0;
    let skipped = 0;

    for (const module of modules) {
      // Skip if already has an icon
      if (module.image && module.image.trim() !== '') {
        skipped++;
        continue;
      }

      const iconValue = findIconForTitle(module.title);
      if (verifyRemixIcon(iconValue)) {
        await prisma.modules.update({
          where: { id: module.id },
          data: { image: iconValue },
        });
        added++;
        console.log(`  ✓ ${module.title}: ${iconValue}`);
      } else {
        skipped++;
        console.log(`  ⚠ ${module.title}: Invalid icon ${iconValue}`);
      }
    }

    console.log(`✓ Added ${added} icons, skipped ${skipped}\n`);
    return { added, skipped };
  } catch (error) {
    console.error('Error adding modules icons:', error);
    return { added: 0, skipped: 0 };
  }
}

/**
 * Add icons to features table
 */
async function addFeaturesIcons() {
  console.log('Adding Remix icons to features table...');
  try {
    const features = await prisma.features.findMany({
      select: {
        id: true,
        title: true,
        icon: true,
      },
    });

    let added = 0;
    let skipped = 0;

    for (const feature of features) {
      // Skip if already has an icon
      if (feature.icon && feature.icon.trim() !== '') {
        skipped++;
        continue;
      }

      const iconValue = findIconForTitle(feature.title);
      if (verifyRemixIcon(iconValue)) {
        await prisma.features.update({
          where: { id: feature.id },
          data: { icon: iconValue },
        });
        added++;
        console.log(`  ✓ ${feature.title}: ${iconValue}`);
      } else {
        skipped++;
        console.log(`  ⚠ ${feature.title}: Invalid icon ${iconValue}`);
      }
    }

    console.log(`✓ Added ${added} icons, skipped ${skipped}\n`);
    return { added, skipped };
  } catch (error) {
    console.error('Error adding features icons:', error);
    return { added: 0, skipped: 0 };
  }
}

/**
 * Add icons to services table
 */
async function addServicesIcons() {
  console.log('Adding Remix icons to services table...');
  try {
    const services = await prisma.services.findMany({
      select: {
        id: true,
        title: true,
        icon: true,
      },
    });

    let added = 0;
    let skipped = 0;

    for (const service of services) {
      // Skip if already has an icon
      if (service.icon && service.icon.trim() !== '') {
        skipped++;
        continue;
      }

      const iconValue = findIconForTitle(service.title);
      if (verifyRemixIcon(iconValue)) {
        await prisma.services.update({
          where: { id: service.id },
          data: { icon: iconValue },
        });
        added++;
        console.log(`  ✓ ${service.title}: ${iconValue}`);
      } else {
        skipped++;
        console.log(`  ⚠ ${service.title}: Invalid icon ${iconValue}`);
      }
    }

    console.log(`✓ Added ${added} icons, skipped ${skipped}\n`);
    return { added, skipped };
  } catch (error) {
    console.error('Error adding services icons:', error);
    return { added: 0, skipped: 0 };
  }
}

/**
 * Add icons to ai_copilots table
 */
async function addAICopilotsIcons() {
  console.log('Adding Remix icons to ai_copilots table...');
  try {
    const copilots = await prisma.ai_copilots.findMany({
      select: {
        id: true,
        title: true,
        icon: true,
      },
    });

    let added = 0;
    let skipped = 0;

    for (const copilot of copilots) {
      // Skip if already has an icon
      if (copilot.icon && copilot.icon.trim() !== '') {
        skipped++;
        continue;
      }

      // Default icon for AI Copilot
      const iconValue = 'remix:RiRobotLine';
      if (verifyRemixIcon(iconValue)) {
        await prisma.ai_copilots.update({
          where: { id: copilot.id },
          data: { icon: iconValue },
        });
        added++;
        console.log(`  ✓ ${copilot.title}: ${iconValue}`);
      } else {
        skipped++;
        console.log(`  ⚠ ${copilot.title}: Invalid icon ${iconValue}`);
      }
    }

    console.log(`✓ Added ${added} icons, skipped ${skipped}\n`);
    return { added, skipped };
  } catch (error) {
    console.error('Error adding ai_copilots icons:', error);
    return { added: 0, skipped: 0 };
  }
}

/**
 * Add icons to industry_solutions table
 */
async function addIndustrySolutionsIcons() {
  console.log('Adding Remix icons to industry_solutions table...');
  try {
    const solutions = await prisma.industry_solutions.findMany({
      select: { id: true, title: true, icon: true },
    });
    let added = 0;
    let skipped = 0;
    for (const solution of solutions) {
      if (solution.icon && solution.icon.trim() !== '') {
        skipped++;
        continue;
      }
      const iconValue = findIconForTitle(solution.title);
      if (verifyRemixIcon(iconValue)) {
        await prisma.industry_solutions.update({
          where: { id: solution.id },
          data: { icon: iconValue },
        });
        added++;
        console.log(`  ✓ ${solution.title}: ${iconValue}`);
      } else {
        skipped++;
      }
    }
    console.log(`✓ Added ${added} icons, skipped ${skipped}\n`);
    return { added, skipped };
  } catch (error) {
    console.error('Error adding industry_solutions icons:', error);
    return { added: 0, skipped: 0 };
  }
}

/**
 * Main function
 */
async function addAllRemixIcons() {
  console.log('='.repeat(50));
  console.log('Adding Remix/FontAwesome icons to database...');
  console.log('='.repeat(50));
  console.log('');

  const results = {
    demoItems: { added: 0, skipped: 0 },
    modules: { added: 0, skipped: 0 },
    features: { added: 0, skipped: 0 },
    services: { added: 0, skipped: 0 },
    aiCopilots: { added: 0, skipped: 0 },
    industrySolutions: { added: 0, skipped: 0 },
  };

  try {
    results.demoItems = await addDemoItemsIcons();
    results.modules = await addModulesIcons();
    results.features = await addFeaturesIcons();
    results.services = await addServicesIcons();
    results.aiCopilots = await addAICopilotsIcons();
    results.industrySolutions = await addIndustrySolutionsIcons();

    const totalAdded = Object.values(results).reduce((sum, r) => sum + r.added, 0);
    const totalSkipped = Object.values(results).reduce((sum, r) => sum + r.skipped, 0);

    console.log('='.repeat(50));
    console.log('Icon addition complete!');
    console.log('='.repeat(50));
    console.log(`Total icons added: ${totalAdded}`);
    console.log(`Total skipped (already had icons): ${totalSkipped}`);
    console.log('\nBreakdown:');
    console.log(`  - Demo Items: ${results.demoItems.added} added, ${results.demoItems.skipped} skipped`);
    console.log(`  - Modules: ${results.modules.added} added, ${results.modules.skipped} skipped`);
    console.log(`  - Features: ${results.features.added} added, ${results.features.skipped} skipped`);
    console.log(`  - Services: ${results.services.added} added, ${results.services.skipped} skipped`);
    console.log(`  - AI Copilots: ${results.aiCopilots.added} added, ${results.aiCopilots.skipped} skipped`);
    console.log(`  - Industry Solutions: ${results.industrySolutions.added} added, ${results.industrySolutions.skipped} skipped`);
    console.log('='.repeat(50));

    return results;
  } catch (error) {
    console.error('Fatal error during icon addition:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run if executed directly
if (require.main === module) {
  addAllRemixIcons()
    .then(() => {
      process.exit(0);
    })
    .catch((error) => {
      console.error('Script failed:', error);
      process.exit(1);
    });
}

export { addAllRemixIcons };
