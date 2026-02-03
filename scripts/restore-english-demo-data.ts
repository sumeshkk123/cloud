/**
 * Script to restore English demo data that may have been lost
 * This script finds demos with translations but missing English data
 * and restores the English version from the first available translation
 */

import { prisma } from '../lib/db/prisma';

async function restoreEnglishDemoData() {
  try {
    console.log('='.repeat(50));
    console.log('Restoring English Demo Data');
    console.log('='.repeat(50));
    console.log('');

    // Get all demo items grouped by icon (shared identifier)
    const allDemos = await prisma.demo_items.findMany({
      orderBy: { createdAt: 'asc' },
    });

    // Group by icon
    const byIcon = new Map<string, typeof allDemos>();
    for (const demo of allDemos) {
      const iconKey = demo.icon || `no-icon-${demo.id}`;
      if (!byIcon.has(iconKey)) {
        byIcon.set(iconKey, []);
      }
      byIcon.get(iconKey)!.push(demo);
    }

    let restoredCount = 0;
    let skippedCount = 0;
    let errorCount = 0;

    for (const [iconKey, group] of byIcon) {
      const englishVersion = group.find((d) => d.locale === 'en');
      const otherTranslations = group.filter((d) => d.locale !== 'en');

      // If no English version but there are other translations, restore English
      if (!englishVersion && otherTranslations.length > 0) {
        console.log(`\n⚠ Missing English for icon: ${iconKey || 'no-icon'}`);
        console.log(`   Found ${otherTranslations.length} translation(s): ${otherTranslations.map(t => t.locale).join(', ')}`);

        // Use the first translation as a template (prefer one with more complete data)
        const template = otherTranslations.sort((a, b) => {
          // Prefer translations with more complete data
          const aScore = (a.title ? 1 : 0) + (a.adminDemoTitle ? 1 : 0) + (a.distributorsDemoTitle ? 1 : 0);
          const bScore = (b.title ? 1 : 0) + (b.adminDemoTitle ? 1 : 0) + (b.distributorsDemoTitle ? 1 : 0);
          return bScore - aScore;
        })[0];

        if (!template.title || !template.adminDemoTitle || !template.distributorsDemoTitle) {
          console.log(`   ⚠ Template translation (${template.locale}) is incomplete, skipping...`);
          skippedCount++;
          continue;
        }

        try {
          // Create English version using template data
          // Note: We'll use the template's text as-is, but ideally should translate back to English
          // For now, we'll use the template text and mark it for manual review
          const { randomUUID } = require('crypto');
          await prisma.demo_items.create({
            data: {
              id: randomUUID(),
              icon: template.icon,
              image: template.image || '',
              title: `[${template.locale}] ${template.title}`, // Mark as needing translation
              adminDemoTitle: template.adminDemoTitle,
              adminDemoFeatures: template.adminDemoFeatures,
              distributorsDemoTitle: template.distributorsDemoTitle,
              distributorsDemoFeatures: template.distributorsDemoFeatures,
              showOnHomePage: template.showOnHomePage ?? false,
              locale: 'en',
              updatedAt: new Date(),
            },
          });

          console.log(`   ✓ Restored English version from ${template.locale} translation`);
          console.log(`     Title: "${template.title}"`);
          restoredCount++;
        } catch (error) {
          console.error(`   ✗ Error restoring:`, error);
          errorCount++;
        }
      } else if (englishVersion) {
        // Check if English version has empty/missing data
        const hasEmptyData =
          !englishVersion.title ||
          !englishVersion.title.trim() ||
          !englishVersion.adminDemoTitle ||
          !englishVersion.adminDemoTitle.trim() ||
          !englishVersion.distributorsDemoTitle ||
          !englishVersion.distributorsDemoTitle.trim();

        if (hasEmptyData && otherTranslations.length > 0) {
          console.log(`\n⚠ English version exists but has empty data for icon: ${iconKey || 'no-icon'}`);

          // Find a translation with complete data
          const completeTranslation = otherTranslations.find(
            (t) =>
              t.title &&
              t.title.trim() &&
              t.adminDemoTitle &&
              t.adminDemoTitle.trim() &&
              t.distributorsDemoTitle &&
              t.distributorsDemoTitle.trim()
          );

          if (completeTranslation) {
            try {
              // Update English version with data from complete translation
              await prisma.demo_items.update({
                where: {
                  id_locale: {
                    id: englishVersion.id,
                    locale: 'en',
                  },
                },
                data: {
                  title: englishVersion.title && englishVersion.title.trim() ? englishVersion.title : `[${completeTranslation.locale}] ${completeTranslation.title}`,
                  adminDemoTitle: englishVersion.adminDemoTitle && englishVersion.adminDemoTitle.trim() ? englishVersion.adminDemoTitle : completeTranslation.adminDemoTitle,
                  adminDemoFeatures: englishVersion.adminDemoFeatures || completeTranslation.adminDemoFeatures,
                  distributorsDemoTitle: englishVersion.distributorsDemoTitle && englishVersion.distributorsDemoTitle.trim() ? englishVersion.distributorsDemoTitle : completeTranslation.distributorsDemoTitle,
                  distributorsDemoFeatures: englishVersion.distributorsDemoFeatures || completeTranslation.distributorsDemoFeatures,
                  updatedAt: new Date(),
                },
              });

              console.log(`   ✓ Restored English data from ${completeTranslation.locale} translation`);
              restoredCount++;
            } catch (error) {
              console.error(`   ✗ Error restoring:`, error);
              errorCount++;
            }
          } else {
            console.log(`   ⚠ No complete translation found to restore from`);
            skippedCount++;
          }
        }
      }
    }

    console.log('\n' + '='.repeat(50));
    console.log('Restoration Summary:');
    console.log('='.repeat(50));
    console.log(`✓ Restored: ${restoredCount}`);
    console.log(`⚠ Skipped: ${skippedCount}`);
    console.log(`✗ Errors: ${errorCount}`);
    console.log('='.repeat(50));

    if (restoredCount > 0) {
      console.log('\n⚠ Note: Some restored English titles are marked with [locale] prefix.');
      console.log('   Please review and translate them properly to English.');
    }

  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

restoreEnglishDemoData()
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
