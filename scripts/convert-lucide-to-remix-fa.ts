/**
 * Script to convert Lucide icons in database to Remix/FontAwesome icons
 * Option 1: Change lucide icons in DB to remix and fontawesome icons that are available in icon picker
 */

import { prisma } from '@/lib/db/prisma';
import * as RemixIcon from '@remixicon/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Register FontAwesome icons
library.add(fas);

// Comprehensive mapping of Lucide icons to Remix/FontAwesome equivalents
const iconMappings: Record<string, { type: 'remix' | 'fontawesome'; name: string }> = {
  // Common Lucide to Remix mappings
  'GitBranch': { type: 'remix', name: 'RiGitBranchLine' },
  'GitMerge': { type: 'remix', name: 'RiGitMergeLine' },
  'Users': { type: 'remix', name: 'RiTeamLine' },
  'User': { type: 'remix', name: 'RiUserLine' },
  'Grid3x3': { type: 'remix', name: 'RiGridLine' },
  'Layers': { type: 'remix', name: 'RiStackLine' },
  'Gift': { type: 'remix', name: 'RiGiftLine' },
  'LayoutGrid': { type: 'remix', name: 'RiLayoutGridLine' },
  'PartyPopper': { type: 'remix', name: 'RiBalloonLine' },
  'Repeat': { type: 'remix', name: 'RiRepeatLine' },
  'Stairs': { type: 'remix', name: 'RiStairsLine' },
  'Coins': { type: 'remix', name: 'RiCoinsLine' },
  'HandHeart': { type: 'remix', name: 'RiHeartHandshakeLine' },
  'TrendingUp': { type: 'remix', name: 'RiTrendingUpLine' },
  'Minus': { type: 'remix', name: 'RiSubtractLine' },
  'ArrowUp': { type: 'remix', name: 'RiArrowUpLine' },
  'Zap': { type: 'remix', name: 'RiFlashLine' },
  'MousePointerClick': { type: 'remix', name: 'RiCursorLine' },
  'RotateCcw': { type: 'remix', name: 'RiRefreshLine' },
  'Network': { type: 'remix', name: 'RiNetworksLine' },
  'Wind': { type: 'remix', name: 'RiWindyLine' },
  'HeartHandshake': { type: 'remix', name: 'RiHeartHandshakeLine' },
  'Boxes': { type: 'remix', name: 'RiBoxesLine' },
  'Split': { type: 'remix', name: 'RiSplitCellsLine' },
  'ArrowUpCircle': { type: 'remix', name: 'RiArrowUpCircleLine' },
  'DollarSign': { type: 'remix', name: 'RiMoneyDollarCircleLine' },
  'Gem': { type: 'remix', name: 'RiGemLine' },
  'Crown': { type: 'remix', name: 'RiVipCrownLine' },
  'Compress': { type: 'remix', name: 'RiCompressLine' },
  'Handshake': { type: 'remix', name: 'RiHandshakeLine' },
  'Package': { type: 'remix', name: 'RiBoxLine' },
  'Store': { type: 'remix', name: 'RiStoreLine' },
  'Server': { type: 'remix', name: 'RiServerLine' },
  'Sparkles': { type: 'remix', name: 'RiSparklingLine' },
  'ShieldCheck': { type: 'remix', name: 'RiShieldCheckLine' },
  'Rocket': { type: 'remix', name: 'RiRocketLine' },
  'Star': { type: 'remix', name: 'RiStarLine' },
  'Quote': { type: 'remix', name: 'RiDoubleQuotesL' },
  'ArrowRight': { type: 'remix', name: 'RiArrowRightLine' },
  'Plus': { type: 'remix', name: 'RiAddLine' },
  'Workflow': { type: 'remix', name: 'RiFlowChart' },
  'Timer': { type: 'remix', name: 'RiTimerLine' },
  'Globe2': { type: 'remix', name: 'RiGlobalLine' },
  'Headset': { type: 'remix', name: 'RiHeadphoneLine' },
  'HeartPulse': { type: 'remix', name: 'RiHeartPulseLine' },
  'Compass': { type: 'remix', name: 'RiCompassLine' },
  'CircleDollarSign': { type: 'remix', name: 'RiMoneyDollarCircleLine' },
  'CheckCircle': { type: 'remix', name: 'RiCheckboxCircleLine' },
  'CheckCircle2': { type: 'remix', name: 'RiCheckboxCircleLine' },
  'Building2': { type: 'remix', name: 'RiBuildingLine' },
  'CalendarCheck': { type: 'remix', name: 'RiCalendarCheckLine' },
  'Gauge': { type: 'remix', name: 'RiDashboardLine' },
  'Bitcoin': { type: 'remix', name: 'RiBitCoinLine' },
  'ArrowUpRight': { type: 'remix', name: 'RiArrowUpRightLine' },
  'Play': { type: 'remix', name: 'RiPlayLine' },
  'MessageSquare': { type: 'remix', name: 'RiMessageLine' },
  'LineChart': { type: 'remix', name: 'RiLineChartLine' },
};

/**
 * Check if a Remix icon exists
 */
function remixIconExists(name: string): boolean {
  try {
    const IconComponent = (RemixIcon as any)[name];
    return IconComponent !== undefined && typeof IconComponent === 'function';
  } catch {
    return false;
  }
}

/**
 * Check if a FontAwesome icon exists
 */
function fontAwesomeIconExists(name: string): boolean {
  try {
    // FontAwesome icons need 'fa' prefix
    const iconName = name.startsWith('fa') ? name : `fa${name}`;
    return fas[iconName as keyof typeof fas] !== undefined;
  } catch {
    return false;
  }
}

/**
 * Find a suitable replacement for a Lucide icon
 * Returns a Remix icon by default, falls back to FontAwesome if needed
 */
function findReplacement(lucideIconName: string): { type: 'remix' | 'fontawesome'; name: string } | null {
  // Check if we have a direct mapping
  if (iconMappings[lucideIconName]) {
    const mapping = iconMappings[lucideIconName];
    if (mapping.type === 'remix' && remixIconExists(mapping.name)) {
      return mapping;
    }
    if (mapping.type === 'fontawesome' && fontAwesomeIconExists(mapping.name)) {
      return mapping;
    }
  }

  // Try to find a similar Remix icon by name patterns
  const remixKeys = Object.keys(RemixIcon);
  const searchName = lucideIconName.toLowerCase();

  // Common Remix naming patterns
  const variations = [
    `Ri${lucideIconName}Line`,
    `Ri${lucideIconName}Fill`,
    `Ri${lucideIconName}`,
    // Try with common word replacements
    `Ri${lucideIconName.replace(/Icon$/, '')}Line`,
    `Ri${lucideIconName.replace(/2$/, '')}Line`,
  ];

  for (const variant of variations) {
    if (remixIconExists(variant)) {
      return { type: 'remix', name: variant };
    }
  }

  // Try partial match in Remix icons
  const partialMatch = remixKeys.find(key => {
    const keyLower = key.toLowerCase();
    const cleanKey = keyLower.replace(/^ri/, '').replace(/line$|fill$/, '');
    return cleanKey === searchName ||
      keyLower.includes(searchName) ||
      searchName.includes(cleanKey);
  });

  if (partialMatch && remixIconExists(partialMatch)) {
    return { type: 'remix', name: partialMatch };
  }

  // Fallback: Try FontAwesome
  // Common FontAwesome mappings
  const faMappings: Record<string, string> = {
    'User': 'faUser',
    'Users': 'faUsers',
    'Settings': 'faCog',
    'Home': 'faHome',
    'Mail': 'faEnvelope',
    'Phone': 'faPhone',
    'Search': 'faSearch',
    'Menu': 'faBars',
    'X': 'faTimes',
    'Check': 'faCheck',
    'Plus': 'faPlus',
    'Minus': 'faMinus',
  };

  if (faMappings[lucideIconName] && fontAwesomeIconExists(faMappings[lucideIconName])) {
    return { type: 'fontawesome', name: faMappings[lucideIconName] };
  }

  // Last resort: Use a default icon (RiQuestionLine for unknown)
  if (remixIconExists('RiQuestionLine')) {
    console.warn(`  No replacement found for "${lucideIconName}", using default RiQuestionLine`);
    return { type: 'remix', name: 'RiQuestionLine' };
  }

  return null;
}

/**
 * Normalize icon value - remove prefix if exists
 */
function getIconName(iconValue: string): string {
  if (iconValue.includes(':')) {
    return iconValue.split(':')[1];
  }
  return iconValue;
}

/**
 * Convert Lucide icons to Remix/FontAwesome in modules table
 */
async function convertModulesIcons() {
  console.log('Converting Lucide icons in modules table...');
  try {
    const modules = await prisma.modules.findMany({
      where: {
        image: {
          not: null,
        },
      },
      select: {
        id: true,
        image: true,
      },
    });

    let converted = 0;
    let skipped = 0;

    for (const module of modules) {
      if (!module.image) continue;

      const iconName = getIconName(module.image);
      // Check if it's a Lucide icon (has lucide: prefix OR no prefix and doesn't start with Ri/fa)
      const isLucide = module.image.startsWith('lucide:') ||
        (!module.image.includes(':') &&
          !iconName.startsWith('Ri') &&
          !iconName.startsWith('ri') &&
          !iconName.startsWith('fa') &&
          !iconName.startsWith('Fa'));

      if (isLucide) {
        const replacement = findReplacement(iconName);
        if (replacement) {
          const newIconValue = `${replacement.type}:${replacement.name}`;
          await prisma.modules.update({
            where: { id: module.id },
            data: { image: newIconValue },
          });
          converted++;
          console.log(`  ✓ ${module.id}: "${module.image}" -> "${newIconValue}"`);
        } else {
          // Use default icon if no replacement found
          const defaultIcon = 'remix:RiQuestionLine';
          await prisma.modules.update({
            where: { id: module.id },
            data: { image: defaultIcon },
          });
          skipped++;
          console.log(`  ⚠ ${module.id}: No replacement found for "${module.image}", set to "${defaultIcon}"`);
        }
      }
    }

    console.log(`✓ Converted ${converted} modules, skipped ${skipped}\n`);
    return { converted, skipped };
  } catch (error) {
    console.error('Error converting modules icons:', error);
    return { converted: 0, skipped: 0 };
  }
}

/**
 * Convert Lucide icons to Remix/FontAwesome in demo_items table
 */
async function convertDemoItemsIcons() {
  console.log('Converting Lucide icons in demo_items table...');
  try {
    const demoItems = await prisma.demo_items.findMany({
      where: {
        icon: {
          not: null,
        },
      },
      select: {
        id: true,
        icon: true,
      },
    });

    let converted = 0;
    let skipped = 0;

    for (const item of demoItems) {
      if (!item.icon) continue;

      const iconName = getIconName(item.icon);
      const isLucide = item.icon.startsWith('lucide:') ||
        (!item.icon.includes(':') &&
          !iconName.startsWith('Ri') &&
          !iconName.startsWith('ri') &&
          !iconName.startsWith('fa') &&
          !iconName.startsWith('Fa'));

      if (isLucide) {
        const replacement = findReplacement(iconName);
        if (replacement) {
          const newIconValue = `${replacement.type}:${replacement.name}`;
          await prisma.demo_items.update({
            where: { id: item.id },
            data: { icon: newIconValue },
          });
          converted++;
          console.log(`  ✓ ${item.id}: "${item.icon}" -> "${newIconValue}"`);
        } else {
          const defaultIcon = 'remix:RiQuestionLine';
          await prisma.demo_items.update({
            where: { id: item.id },
            data: { icon: defaultIcon },
          });
          skipped++;
          console.log(`  ⚠ ${item.id}: No replacement found for "${item.icon}", set to "${defaultIcon}"`);
        }
      }
    }

    console.log(`✓ Converted ${converted} demo_items, skipped ${skipped}\n`);
    return { converted, skipped };
  } catch (error) {
    console.error('Error converting demo_items icons:', error);
    return { converted: 0, skipped: 0 };
  }
}

/**
 * Convert Lucide icons to Remix/FontAwesome in features table
 */
async function convertFeaturesIcons() {
  console.log('Converting Lucide icons in features table...');
  try {
    const features = await prisma.features.findMany({
      where: {
        icon: {
          not: null,
        },
      },
      select: {
        id: true,
        icon: true,
      },
    });

    let converted = 0;
    let skipped = 0;

    for (const feature of features) {
      if (!feature.icon) continue;

      const iconName = getIconName(feature.icon);
      const isLucide = feature.icon.startsWith('lucide:') ||
        (!feature.icon.includes(':') &&
          !iconName.startsWith('Ri') &&
          !iconName.startsWith('ri') &&
          !iconName.startsWith('fa') &&
          !iconName.startsWith('Fa'));

      if (isLucide) {
        const replacement = findReplacement(iconName);
        if (replacement) {
          const newIconValue = `${replacement.type}:${replacement.name}`;
          await prisma.features.update({
            where: { id: feature.id },
            data: { icon: newIconValue },
          });
          converted++;
          console.log(`  ✓ ${feature.id}: "${feature.icon}" -> "${newIconValue}"`);
        } else {
          const defaultIcon = 'remix:RiQuestionLine';
          await prisma.features.update({
            where: { id: feature.id },
            data: { icon: defaultIcon },
          });
          skipped++;
          console.log(`  ⚠ ${feature.id}: No replacement found for "${feature.icon}", set to "${defaultIcon}"`);
        }
      }
    }

    console.log(`✓ Converted ${features.length} features, skipped ${skipped}\n`);
    return { converted, skipped };
  } catch (error) {
    console.error('Error converting features icons:', error);
    return { converted: 0, skipped: 0 };
  }
}

/**
 * Convert Lucide icons to Remix/FontAwesome in services table
 */
async function convertServicesIcons() {
  console.log('Converting Lucide icons in services table...');
  try {
    const services = await prisma.services.findMany({
      where: {
        icon: {
          not: null,
        },
      },
      select: {
        id: true,
        icon: true,
      },
    });

    let converted = 0;
    let skipped = 0;

    for (const service of services) {
      if (!service.icon) continue;

      const iconName = getIconName(service.icon);
      const isLucide = service.icon.startsWith('lucide:') ||
        (!service.icon.includes(':') &&
          !iconName.startsWith('Ri') &&
          !iconName.startsWith('ri') &&
          !iconName.startsWith('fa') &&
          !iconName.startsWith('Fa'));

      if (isLucide) {
        const replacement = findReplacement(iconName);
        if (replacement) {
          const newIconValue = `${replacement.type}:${replacement.name}`;
          await prisma.services.update({
            where: { id: service.id },
            data: { icon: newIconValue },
          });
          converted++;
          console.log(`  ✓ ${service.id}: "${service.icon}" -> "${newIconValue}"`);
        } else {
          const defaultIcon = 'remix:RiQuestionLine';
          await prisma.services.update({
            where: { id: service.id },
            data: { icon: defaultIcon },
          });
          skipped++;
          console.log(`  ⚠ ${service.id}: No replacement found for "${service.icon}", set to "${defaultIcon}"`);
        }
      }
    }

    console.log(`✓ Converted ${converted} services, skipped ${skipped}\n`);
    return { converted, skipped };
  } catch (error) {
    console.error('Error converting services icons:', error);
    return { converted: 0, skipped: 0 };
  }
}

/**
 * Convert Lucide icons to Remix/FontAwesome in ai_copilots table
 */
async function convertAICopilotsIcons() {
  console.log('Converting Lucide icons in ai_copilots table...');
  try {
    const copilots = await prisma.ai_copilots.findMany({
      where: {
        icon: {
          not: null,
        },
      },
      select: {
        id: true,
        icon: true,
      },
    });

    let converted = 0;
    let skipped = 0;

    for (const copilot of copilots) {
      if (!copilot.icon) continue;

      const iconName = getIconName(copilot.icon);
      const isLucide = copilot.icon.startsWith('lucide:') ||
        (!copilot.icon.includes(':') &&
          !iconName.startsWith('Ri') &&
          !iconName.startsWith('ri') &&
          !iconName.startsWith('fa') &&
          !iconName.startsWith('Fa'));

      if (isLucide) {
        const replacement = findReplacement(iconName);
        if (replacement) {
          const newIconValue = `${replacement.type}:${replacement.name}`;
          await prisma.ai_copilots.update({
            where: { id: copilot.id },
            data: { icon: newIconValue },
          });
          converted++;
          console.log(`  ✓ ${copilot.id}: "${copilot.icon}" -> "${newIconValue}"`);
        } else {
          const defaultIcon = 'remix:RiQuestionLine';
          await prisma.ai_copilots.update({
            where: { id: copilot.id },
            data: { icon: defaultIcon },
          });
          skipped++;
          console.log(`  ⚠ ${copilot.id}: No replacement found for "${copilot.icon}", set to "${defaultIcon}"`);
        }
      }
    }

    console.log(`✓ Converted ${converted} ai_copilots, skipped ${skipped}\n`);
    return { converted, skipped };
  } catch (error) {
    console.error('Error converting ai_copilots icons:', error);
    return { converted: 0, skipped: 0 };
  }
}

/**
 * Convert Lucide icons to Remix/FontAwesome in industry_solutions table
 */
async function convertIndustrySolutionsIcons() {
  console.log('Converting Lucide icons in industry_solutions table...');
  try {
    const solutions = await prisma.industry_solutions.findMany({
      where: { icon: { not: null } },
      select: { id: true, icon: true },
    });
    let converted = 0;
    let skipped = 0;
    for (const solution of solutions) {
      if (!solution.icon) continue;
      const iconName = getIconName(solution.icon);
      const isLucide =
        solution.icon.startsWith('lucide:') ||
        (!solution.icon.includes(':') && !iconName.startsWith('Ri') && !iconName.startsWith('ri') && !iconName.startsWith('fa') && !iconName.startsWith('Fa'));
      if (isLucide) {
        const replacement = findReplacement(iconName);
        if (replacement) {
          const newIconValue = `${replacement.type}:${replacement.name}`;
          await prisma.industry_solutions.update({ where: { id: solution.id }, data: { icon: newIconValue } });
          converted++;
        } else {
          await prisma.industry_solutions.update({ where: { id: solution.id }, data: { icon: 'remix:RiQuestionLine' } });
          skipped++;
        }
      }
    }
    console.log(`✓ Converted ${converted} industry_solutions, skipped ${skipped}\n`);
    return { converted, skipped };
  } catch (error) {
    console.error('Error converting industry_solutions icons:', error);
    return { converted: 0, skipped: 0 };
  }
}

/**
 * Main function
 */
async function convertAllLucideIcons() {
  console.log('Starting Lucide to Remix/FontAwesome conversion...\n');

  const results = {
    modules: { converted: 0, skipped: 0 },
    demoItems: { converted: 0, skipped: 0 },
    features: { converted: 0, skipped: 0 },
    services: { converted: 0, skipped: 0 },
    aiCopilots: { converted: 0, skipped: 0 },
    industrySolutions: { converted: 0, skipped: 0 },
  };

  try {
    results.modules = await convertModulesIcons();
    results.demoItems = await convertDemoItemsIcons();
    results.features = await convertFeaturesIcons();
    results.services = await convertServicesIcons();
    results.aiCopilots = await convertAICopilotsIcons();
    results.industrySolutions = await convertIndustrySolutionsIcons();

    const totalConverted = Object.values(results).reduce((sum, r) => sum + r.converted, 0);
    const totalSkipped = Object.values(results).reduce((sum, r) => sum + r.skipped, 0);

    console.log('='.repeat(50));
    console.log('Conversion complete!');
    console.log('='.repeat(50));
    console.log(`Total converted: ${totalConverted}`);
    console.log(`Total skipped (no replacement found): ${totalSkipped}`);
    console.log('\nBreakdown:');
    console.log(`  - Modules: ${results.modules.converted} converted, ${results.modules.skipped} skipped`);
    console.log(`  - Demo Items: ${results.demoItems.converted} converted, ${results.demoItems.skipped} skipped`);
    console.log(`  - Features: ${results.features.converted} converted, ${results.features.skipped} skipped`);
    console.log(`  - Services: ${results.services.converted} converted, ${results.services.skipped} skipped`);
    console.log(`  - AI Copilots: ${results.aiCopilots.converted} converted, ${results.aiCopilots.skipped} skipped`);
    console.log(`  - Industry Solutions: ${results.industrySolutions.converted} converted, ${results.industrySolutions.skipped} skipped`);
    console.log('='.repeat(50));

    return results;
  } catch (error) {
    console.error('Fatal error during conversion:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run if executed directly
if (require.main === module) {
  convertAllLucideIcons()
    .then(() => {
      process.exit(0);
    })
    .catch((error) => {
      console.error('Script failed:', error);
      process.exit(1);
    });
}

export { convertAllLucideIcons };
