/**
 * Script to normalize icon values in the database
 * Adds proper prefixes (lucide:, remix:, fontawesome:) to icon values that don't have them
 */

import { prisma } from '@/lib/db/prisma';

/**
 * Normalizes an icon value by adding the appropriate prefix
 * Format: "type:iconName" (e.g., "lucide:Home", "remix:RiHomeLine", "fontawesome:faHome")
 */
function normalizeIconValue(iconValue: string | null | undefined): string | null {
  if (!iconValue) return null;

  const trimmed = String(iconValue).trim();
  if (!trimmed) return null;

  // If it already has a prefix, return as-is
  if (trimmed.includes(':')) {
    return trimmed;
  }

  // Check if it's a Remix icon (starts with Ri)
  if (trimmed.startsWith('Ri')) {
    return `remix:${trimmed}`;
  }

  // Check if it's a FontAwesome icon (starts with fa)
  if (trimmed.startsWith('fa') || trimmed.toLowerCase().startsWith('fa')) {
    return `fontawesome:${trimmed}`;
  }

  // Default to lucide
  return `lucide:${trimmed}`;
}

/**
 * Normalize icons in modules table (image field)
 */
async function normalizeModulesIcons() {
  console.log('Normalizing icons in modules table...');
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

    let updated = 0;
    for (const module of modules) {
      if (module.image) {
        const normalized = normalizeIconValue(module.image);
        if (normalized && normalized !== module.image) {
          await prisma.modules.update({
            where: { id: module.id },
            data: { image: normalized },
          });
          updated++;
          console.log(`  Updated module ${module.id}: "${module.image}" -> "${normalized}"`);
        }
      }
    }
    console.log(`✓ Updated ${updated} modules\n`);
    return updated;
  } catch (error) {
    console.error('Error normalizing modules icons:', error);
    return 0;
  }
}

/**
 * Normalize icons in demo_items table (icon field)
 */
async function normalizeDemoItemsIcons() {
  console.log('Normalizing icons in demo_items table...');
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

    let updated = 0;
    for (const item of demoItems) {
      if (item.icon) {
        const normalized = normalizeIconValue(item.icon);
        if (normalized && normalized !== item.icon) {
          await prisma.demo_items.update({
            where: { id: item.id },
            data: { icon: normalized },
          });
          updated++;
          console.log(`  Updated demo_item ${item.id}: "${item.icon}" -> "${normalized}"`);
        }
      }
    }
    console.log(`✓ Updated ${updated} demo_items\n`);
    return updated;
  } catch (error) {
    console.error('Error normalizing demo_items icons:', error);
    return 0;
  }
}

/**
 * Normalize icons in features table (icon field)
 */
async function normalizeFeaturesIcons() {
  console.log('Normalizing icons in features table...');
  try {
    const features = await prisma.features.findMany({
      where: {
        icon: {
          not: null,
        },
      },
      select: {
        id: true,
        locale: true,
        icon: true,
      },
    });

    let updated = 0;
    for (const feature of features) {
      if (feature.icon) {
        const normalized = normalizeIconValue(feature.icon);
        if (normalized && normalized !== feature.icon) {
          await prisma.features.update({
            where: { id_locale: { id: feature.id, locale: feature.locale } },
            data: { icon: normalized },
          });
          updated++;
          console.log(`  Updated feature ${feature.id}: "${feature.icon}" -> "${normalized}"`);
        }
      }
    }
    console.log(`✓ Updated ${updated} features\n`);
    return updated;
  } catch (error) {
    console.error('Error normalizing features icons:', error);
    return 0;
  }
}

/**
 * Normalize icons in services table (icon field)
 */
async function normalizeServicesIcons() {
  console.log('Normalizing icons in services table...');
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

    let updated = 0;
    for (const service of services) {
      if (service.icon) {
        const normalized = normalizeIconValue(service.icon);
        if (normalized && normalized !== service.icon) {
          await prisma.services.update({
            where: { id: service.id },
            data: { icon: normalized },
          });
          updated++;
          console.log(`  Updated service ${service.id}: "${service.icon}" -> "${normalized}"`);
        }
      }
    }
    console.log(`✓ Updated ${updated} services\n`);
    return updated;
  } catch (error) {
    console.error('Error normalizing services icons:', error);
    return 0;
  }
}

/**
 * Normalize icons in ai_copilots table (icon field)
 */
async function normalizeAICopilotsIcons() {
  console.log('Normalizing icons in ai_copilots table...');
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

    let updated = 0;
    for (const copilot of copilots) {
      if (copilot.icon) {
        const normalized = normalizeIconValue(copilot.icon);
        if (normalized && normalized !== copilot.icon) {
          await prisma.ai_copilots.update({
            where: { id: copilot.id },
            data: { icon: normalized },
          });
          updated++;
          console.log(`  Updated ai_copilot ${copilot.id}: "${copilot.icon}" -> "${normalized}"`);
        }
      }
    }
    console.log(`✓ Updated ${updated} ai_copilots\n`);
    return updated;
  } catch (error) {
    console.error('Error normalizing ai_copilots icons:', error);
    return 0;
  }
}

/**
 * Normalize icons in industry_solutions table (icon field)
 */
async function normalizeIndustrySolutionsIcons() {
  console.log('Normalizing icons in industry_solutions table...');
  try {
    const solutions = await prisma.industry_solutions.findMany({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      where: { icon: { not: null } } as any,
      select: {
        id: true,
        icon: true,
      },
    });

    let updated = 0;
    for (const solution of solutions) {
      if (solution.icon) {
        const normalized = normalizeIconValue(solution.icon);
        if (normalized && normalized !== solution.icon) {
          await prisma.industry_solutions.update({
            where: { id: solution.id },
            data: { icon: normalized },
          });
          updated++;
          console.log(`  Updated industry_solution ${solution.id}: "${solution.icon}" -> "${normalized}"`);
        }
      }
    }
    console.log(`✓ Updated ${updated} industry_solutions\n`);
    return updated;
  } catch (error) {
    console.error('Error normalizing industry_solutions icons:', error);
    return 0;
  }
}

/**
 * Main function to normalize all icons
 */
async function normalizeAllIcons() {
  console.log('Starting icon normalization...\n');

  const results = {
    modules: 0,
    demoItems: 0,
    features: 0,
    services: 0,
    aiCopilots: 0,
    industrySolutions: 0,
  };

  try {
    results.modules = await normalizeModulesIcons();
    results.demoItems = await normalizeDemoItemsIcons();
    results.features = await normalizeFeaturesIcons();
    results.services = await normalizeServicesIcons();
    results.aiCopilots = await normalizeAICopilotsIcons();
    results.industrySolutions = await normalizeIndustrySolutionsIcons();

    const total = Object.values(results).reduce((sum, count) => sum + count, 0);

    console.log('='.repeat(50));
    console.log('Icon normalization complete!');
    console.log('='.repeat(50));
    console.log(`Total records updated: ${total}`);
    console.log(`  - Modules: ${results.modules}`);
    console.log(`  - Demo Items: ${results.demoItems}`);
    console.log(`  - Features: ${results.features}`);
    console.log(`  - Services: ${results.services}`);
    console.log(`  - AI Copilots: ${results.aiCopilots}`);
    console.log(`  - Industry Solutions: ${results.industrySolutions}`);
    console.log('='.repeat(50));

    return results;
  } catch (error) {
    console.error('Fatal error during icon normalization:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run if executed directly
if (require.main === module) {
  normalizeAllIcons()
    .then(() => {
      process.exit(0);
    })
    .catch((error) => {
      console.error('Script failed:', error);
      process.exit(1);
    });
}

export { normalizeAllIcons, normalizeIconValue };
