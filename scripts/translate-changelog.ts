import { listChangelogEntries, createChangelogEntry, getAllChangelogTranslations } from '../lib/api/changelog';
import { i18n } from '../i18n-config';

async function translateText(text: string, sourceLocale: string, targetLocale: string, retries = 3): Promise<string> {
  for (let attempt = 1; attempt <= retries; attempt++) {
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

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.error || 'Translation failed';
        
        // If rate limited, wait longer before retrying
        if (errorMessage.includes('Rate limit') || response.status === 429) {
          if (attempt < retries) {
            const waitTime = Math.min(60000 * attempt, 300000); // Wait 1-5 minutes
            console.log(`  ⏳ Rate limited. Waiting ${waitTime / 1000}s before retry ${attempt + 1}/${retries}...`);
            await new Promise(resolve => setTimeout(resolve, waitTime));
            continue;
          }
        }
        
        throw new Error(errorMessage);
      }

      const data = await response.json();
      return data.translatedText || text;
    } catch (error: any) {
      if (attempt === retries) {
        console.error(`  ❌ Error translating text to ${targetLocale} after ${retries} attempts:`, error.message);
        return text; // Return original text on final failure
      }
      // Wait before retry
      await new Promise(resolve => setTimeout(resolve, 2000 * attempt));
    }
  }
  return text;
}

async function translateChangelog() {
  console.log('🌍 Starting Changelog translations...\n');

  try {
    // Get all English changelog entries
    const englishEntries = await listChangelogEntries('en');
    
    if (englishEntries.length === 0) {
      console.log('⚠️  No English changelog entries found.');
      return;
    }

    console.log(`Found ${englishEntries.length} English changelog entries to translate.\n`);

    let created = 0;
    let skipped = 0;
    let errors = 0;

    for (const entry of englishEntries) {
      console.log(`\n📦 Processing: Version "${entry.version}"${entry.title ? ` - ${entry.title}` : ''}`);

      // Get existing translations by version
      const existingTranslations = await getAllChangelogTranslations(entry.version);
      const existingLocales = new Set(existingTranslations.map(t => t.locale));

      // Create translations for each locale
      for (const locale of i18n.locales) {
        if (locale === 'en') continue; // Skip English

        // Check if translation already exists
        if (existingLocales.has(locale)) {
          console.log(`  ⏭️  ${locale.toUpperCase()}: Already exists`);
          skipped++;
          continue;
        }

        try {
          console.log(`  🌐 Translating to ${locale.toUpperCase()}...`);
          
          // Translate title (if exists), description, and features
          const translatedTitle = entry.title ? await translateText(entry.title, 'en', locale) : null;
          const translatedDescription = await translateText(entry.description, 'en', locale);
          
          // Translate features array
          const translatedFeatures: string[] = [];
          for (const feature of entry.features) {
            const translatedFeature = await translateText(feature, 'en', locale);
            translatedFeatures.push(translatedFeature);
            // Longer delay between feature translations to avoid rate limits
            await new Promise(resolve => setTimeout(resolve, 500));
          }

          // Create the translation
          await createChangelogEntry({
            version: entry.version, // Keep same version
            title: translatedTitle,
            description: translatedDescription,
            features: translatedFeatures,
            locale: locale,
            order: entry.order, // Keep same order
          });

          console.log(`  ✅ ${locale.toUpperCase()}: Created successfully`);
          created++;

          // Longer delay to avoid rate limiting (especially after many translations)
          await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error: any) {
          console.error(`  ❌ Error creating ${locale} translation:`, error.message);
          errors++;
        }
      }
    }

    console.log(`\n✨ Translation completed!`);
    console.log(`   Created: ${created}`);
    console.log(`   Skipped: ${skipped}`);
    console.log(`   Errors: ${errors}`);
  } catch (error: any) {
    console.error('❌ Translation failed:', error.message);
    process.exit(1);
  }
}

// Run the translation
translateChangelog()
  .then(() => {
    console.log('\n🎉 All translations done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
