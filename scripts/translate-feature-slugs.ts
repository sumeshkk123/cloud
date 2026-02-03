import { prisma } from '@/lib/db/prisma';
import { i18n } from '@/i18n-config';

// Helper function to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .normalize('NFD') // Normalize to decomposed form for handling accents
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritical marks
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

async function translateFeatureSlugs() {
  console.log('🚀 Starting feature slug translation...\n');

  try {
    // Get all English features
    const englishFeatures = await prisma.features.findMany({
      where: {
        locale: 'en',
        slug: { not: null }, // Only features that have slugs
      },
      select: {
        id: true,
        slug: true,
        title: true,
      },
    });

    console.log(`Found ${englishFeatures.length} English features with slugs\n`);

    const supportedLocales = i18n.locales.filter(locale => locale !== 'en');
    let totalUpdated = 0;
    let totalSkipped = 0;
    let totalErrors = 0;

    for (const feature of englishFeatures) {
      console.log(`Processing: ${feature.title} (ID: ${feature.id})`);

      // Get all translations for this feature
      const translations = await prisma.features.findMany({
        where: {
          id: feature.id,
          locale: { in: supportedLocales },
        },
        select: {
          id: true,
          locale: true,
          title: true,
          slug: true,
        },
      });

      for (const translation of translations) {
        try {
          // Generate slug from translated title
          const newSlug = generateSlug(translation.title);

          if (!newSlug) {
            console.log(`  ⚠️  ${translation.locale}: Skipped - empty slug generated`);
            totalSkipped++;
            continue;
          }

          // Check if slug already exists for this locale (excluding current feature)
          const existingSlug = await prisma.features.findFirst({
            where: {
              slug: newSlug,
              locale: translation.locale,
              id: { not: feature.id },
            },
          });

          if (existingSlug) {
            console.log(`  ⚠️  ${translation.locale}: Slug "${newSlug}" already exists, skipping`);
            totalSkipped++;
            continue;
          }

          // Update the translation with the new slug
          await prisma.features.updateMany({
            where: {
              id: feature.id,
              locale: translation.locale,
            },
            data: {
              slug: newSlug,
            },
          });

          const oldSlug = translation.slug || '(none)';
          console.log(`  ✅ ${translation.locale}: "${oldSlug}" → "${newSlug}"`);
          totalUpdated++;
        } catch (error) {
          console.error(`  ❌ ${translation.locale}: Error - ${error instanceof Error ? error.message : 'Unknown error'}`);
          totalErrors++;
        }
      }

      console.log(''); // Empty line for readability
    }

    console.log('\n📊 Summary:');
    console.log(`  ✅ Updated: ${totalUpdated}`);
    console.log(`  ⚠️  Skipped: ${totalSkipped}`);
    console.log(`  ❌ Errors: ${totalErrors}`);
    console.log('\n✨ Feature slug translation completed!');
  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the script
translateFeatureSlugs();
