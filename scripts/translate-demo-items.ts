/**
 * Script to translate existing demo items in the database
 * Translates English demo items to other locales (es, it, de, pt, zh)
 */

import { prisma } from '@/lib/db/prisma';
import { randomUUID } from 'crypto';

const locales = ['en', 'es', 'it', 'de', 'pt', 'zh'];

/**
 * Translate text using the translation API
 */
async function translateText(text: string, sourceLocale: string, targetLocale: string, retries = 3): Promise<string> {
  if (sourceLocale === targetLocale || !text) return text;

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

/**
 * Translate features array
 */
async function translateFeatures(features: string[] | null, sourceLocale: string, targetLocale: string): Promise<string[] | null> {
  if (sourceLocale === targetLocale) return features;
  if (!features || !Array.isArray(features) || features.length === 0) return features;

  const translated: string[] = [];
  for (const feature of features) {
    const translatedFeature = await translateText(String(feature), sourceLocale, targetLocale);
    translated.push(translatedFeature);
    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  return translated;
}

async function translateDemoItems() {
  try {
    console.log('='.repeat(50));
    console.log('Translating demo items...');
    console.log('='.repeat(50));
    console.log('');

    // Get all English demo items
    const englishDemos = await prisma.demo_items.findMany({
      where: { locale: 'en' },
      orderBy: { title: 'asc' },
    });

    console.log(`Found ${englishDemos.length} English demo items\n`);

    let totalCreated = 0;
    let totalSkipped = 0;

    for (const englishDemo of englishDemos) {
      console.log(`\nProcessing: "${englishDemo.title}"`);
      console.log(`Icon: ${englishDemo.icon || 'none'}`);

      // Find all existing translations for this demo (by icon)
      const existingTranslations = await prisma.demo_items.findMany({
        where: {
          icon: englishDemo.icon,
        },
      });

      const existingLocales = new Set(existingTranslations.map(t => t.locale));
      console.log(`  Existing locales: ${Array.from(existingLocales).sort().join(', ')}`);

      // Create missing translations
      for (const locale of locales) {
        if (locale === 'en' || existingLocales.has(locale)) {
          if (locale !== 'en') {
            console.log(`  ✓ ${locale} translation already exists`);
          }
          continue;
        }

        console.log(`  Creating ${locale} translation...`);

        try {
          // Translate all fields
          const translatedTitle = await translateText(englishDemo.title, 'en', locale);
          await new Promise(resolve => setTimeout(resolve, 500));

          const translatedAdminTitle = await translateText(englishDemo.adminDemoTitle || '', 'en', locale);
          await new Promise(resolve => setTimeout(resolve, 500));

          const translatedDistributorsTitle = await translateText(englishDemo.distributorsDemoTitle || '', 'en', locale);
          await new Promise(resolve => setTimeout(resolve, 500));

          // Parse and translate admin features
          let adminFeatures = englishDemo.adminDemoFeatures;
          if (typeof adminFeatures === 'string') {
            try {
              adminFeatures = JSON.parse(adminFeatures);
            } catch {
              adminFeatures = null;
            }
          }
          const translatedAdminFeatures = await translateFeatures(
            Array.isArray(adminFeatures) ? adminFeatures : null,
            'en',
            locale
          );
          await new Promise(resolve => setTimeout(resolve, 500));

          // Parse and translate distributor features
          let distributorsFeatures = englishDemo.distributorsDemoFeatures;
          if (typeof distributorsFeatures === 'string') {
            try {
              distributorsFeatures = JSON.parse(distributorsFeatures);
            } catch {
              distributorsFeatures = null;
            }
          }
          const translatedDistributorsFeatures = await translateFeatures(
            Array.isArray(distributorsFeatures) ? distributorsFeatures : null,
            'en',
            locale
          );
          await new Promise(resolve => setTimeout(resolve, 500));

          // Create translation record
          await prisma.demo_items.create({
            data: {
              id: randomUUID(),
              icon: englishDemo.icon,
              image: englishDemo.image || '',
              title: translatedTitle,
              adminDemoTitle: translatedAdminTitle,
              adminDemoFeatures: translatedAdminFeatures ? JSON.stringify(translatedAdminFeatures) : null,
              distributorsDemoTitle: translatedDistributorsTitle,
              distributorsDemoFeatures: translatedDistributorsFeatures ? JSON.stringify(translatedDistributorsFeatures) : null,
              showOnHomePage: englishDemo.showOnHomePage ?? false,
              locale,
              updatedAt: new Date(),
            },
          });

          console.log(`  ✓ Created ${locale} translation`);
          totalCreated++;
        } catch (error) {
          console.error(`  ✗ Error creating ${locale} translation:`, error);
          totalSkipped++;
        }

        // Rate limiting between translations
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    console.log('\n' + '='.repeat(50));
    console.log('Translation Summary:');
    console.log('='.repeat(50));
    console.log(`Total translations created: ${totalCreated}`);
    console.log(`Total translations skipped: ${totalSkipped}`);
    console.log('='.repeat(50));

    // Verify translations
    console.log('\nVerifying translations...\n');
    const allDemos = await prisma.demo_items.findMany({
      select: { locale: true },
    });

    const byLocale = new Map<string, number>();
    for (const demo of allDemos) {
      byLocale.set(demo.locale, (byLocale.get(demo.locale) || 0) + 1);
    }

    console.log('Demo items by locale:');
    for (const locale of locales) {
      const count = byLocale.get(locale) || 0;
      console.log(`  ${locale}: ${count} items`);
    }

  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

translateDemoItems();
