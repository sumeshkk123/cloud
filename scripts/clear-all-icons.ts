/**
 * Script to clear/remove all icons from the database
 * This will set all icon/image fields to null or empty string
 */

import { prisma } from '@/lib/db/prisma';

/**
 * Clear icons in modules table (image field)
 */
async function clearModulesIcons() {
  console.log('Clearing icons in modules table...');
  try {
    const result = await prisma.modules.updateMany({
      where: {
        image: {
          not: null,
        },
      },
      data: {
        image: null,
      },
    });
    console.log(`✓ Cleared ${result.count} modules\n`);
    return result.count;
  } catch (error) {
    console.error('Error clearing modules icons:', error);
    return 0;
  }
}

/**
 * Clear icons in demo_items table (icon field)
 */
async function clearDemoItemsIcons() {
  console.log('Clearing icons in demo_items table...');
  try {
    // Update all records where icon is not null and not empty
    const result = await prisma.demo_items.updateMany({
      where: {
        AND: [
          { icon: { not: null } },
          { icon: { not: '' } },
        ],
      },
      data: {
        icon: '',
      },
    });
    console.log(`✓ Cleared ${result.count} demo_items\n`);
    return result.count;
  } catch (error) {
    console.error('Error clearing demo_items icons:', error);
    // Try alternative approach - update all records
    try {
      const allItems = await prisma.demo_items.findMany({
        select: { id: true },
      });
      let count = 0;
      for (const item of allItems) {
        await prisma.demo_items.update({
          where: { id: item.id },
          data: { icon: '' },
        });
        count++;
      }
      console.log(`✓ Cleared ${count} demo_items (alternative method)\n`);
      return count;
    } catch (err) {
      return 0;
    }
  }
}

/**
 * Clear icons in features table (icon field)
 */
async function clearFeaturesIcons() {
  console.log('Clearing icons in features table...');
  try {
    const result = await prisma.features.updateMany({
      where: {
        icon: {
          not: null,
        },
      },
      data: {
        icon: null,
      },
    });
    console.log(`✓ Cleared ${result.count} features\n`);
    return result.count;
  } catch (error) {
    console.error('Error clearing features icons:', error);
    return 0;
  }
}

/**
 * Clear icons in services table (icon field)
 */
async function clearServicesIcons() {
  console.log('Clearing icons in services table...');
  try {
    const result = await prisma.services.updateMany({
      where: {
        icon: {
          not: null,
        },
      },
      data: {
        icon: null,
      },
    });
    console.log(`✓ Cleared ${result.count} services\n`);
    return result.count;
  } catch (error) {
    console.error('Error clearing services icons:', error);
    return 0;
  }
}

/**
 * Clear icons in ai_copilots table (icon field)
 */
async function clearAICopilotsIcons() {
  console.log('Clearing icons in ai_copilots table...');
  try {
    const result = await prisma.ai_copilots.updateMany({
      where: {
        icon: {
          not: null,
        },
      },
      data: {
        icon: null,
      },
    });
    console.log(`✓ Cleared ${result.count} ai_copilots\n`);
    return result.count;
  } catch (error) {
    console.error('Error clearing ai_copilots icons:', error);
    return 0;
  }
}

/**
 * Clear icons in industry_solutions table (icon field)
 */
async function clearIndustrySolutionsIcons() {
  console.log('Clearing icons in industry_solutions table...');
  try {
    const result = await prisma.industry_solutions.updateMany({
      where: { AND: [{ icon: { not: null } }, { icon: { not: '' } }] },
      data: { icon: '' },
    });
    console.log(`✓ Cleared ${result.count} industry_solutions\n`);
    return result.count;
  } catch (error) {
    console.error('Error clearing industry_solutions icons:', error);
    return 0;
  }
}

/**
 * Main function to clear all icons
 */
async function clearAllIcons() {
  console.log('='.repeat(50));
  console.log('Clearing ALL icons from database...');
  console.log('='.repeat(50));
  console.log('');

  const results = {
    modules: 0,
    demoItems: 0,
    features: 0,
    services: 0,
    aiCopilots: 0,
    industrySolutions: 0,
  };

  try {
    results.modules = await clearModulesIcons();
    results.demoItems = await clearDemoItemsIcons();
    results.features = await clearFeaturesIcons();
    results.services = await clearServicesIcons();
    results.aiCopilots = await clearAICopilotsIcons();
    results.industrySolutions = await clearIndustrySolutionsIcons();

    const total = Object.values(results).reduce((sum, count) => sum + count, 0);

    console.log('='.repeat(50));
    console.log('Icon clearing complete!');
    console.log('='.repeat(50));
    console.log(`Total records cleared: ${total}`);
    console.log(`  - Modules: ${results.modules}`);
    console.log(`  - Demo Items: ${results.demoItems}`);
    console.log(`  - Features: ${results.features}`);
    console.log(`  - Services: ${results.services}`);
    console.log(`  - AI Copilots: ${results.aiCopilots}`);
    console.log(`  - Industry Solutions: ${results.industrySolutions}`);
    console.log('='.repeat(50));
    console.log('\n⚠ All icons have been cleared. You can now add Remix/FontAwesome icons.');
    console.log('Run: npm run convert-lucide-to-remix-fa (but it will have nothing to convert)');
    console.log('Or manually add icons through the admin panel.');

    return results;
  } catch (error) {
    console.error('Fatal error during icon clearing:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run if executed directly
if (require.main === module) {
  clearAllIcons()
    .then(() => {
      process.exit(0);
    })
    .catch((error) => {
      console.error('Script failed:', error);
      process.exit(1);
    });
}

export { clearAllIcons };
