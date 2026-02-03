import { listModules, createModule, getAllModuleTranslations } from '../lib/api/modules';
import { i18n } from '../i18n-config';

async function translateText(text: string, sourceLocale: string, targetLocale: string): Promise<string> {
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
      throw new Error(errorData.error || 'Translation failed');
    }

    const data = await response.json();
    return data.translatedText || text;
  } catch (error) {
    console.error(`Error translating text to ${targetLocale}:`, error);
    return text; // Return original text on error
  }
}

async function translateModules() {
  console.log('🌍 Starting Module translations...\n');

  try {
    // Get all English modules
    const englishModules = await listModules('en');
    
    if (englishModules.length === 0) {
      console.log('⚠️  No English modules found.');
      return;
    }

    console.log(`Found ${englishModules.length} English modules to translate.\n`);

    let created = 0;
    let skipped = 0;
    let errors = 0;

    for (const module of englishModules) {
      console.log(`\n📦 Processing: "${module.title}"`);

      // Get existing translations
      const existingTranslations = await getAllModuleTranslations(module.id);
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
          
          // Translate title and description
          const translatedTitle = await translateText(module.title, 'en', locale);
          const translatedDescription = await translateText(module.description, 'en', locale);

          // Create the translation
          await createModule({
            slug: null, // Slug is typically auto-generated or null for translations
            title: translatedTitle,
            description: translatedDescription,
            image: module.image, // Use same image as English
            hasDetailPage: module.hasDetailPage,
            showOnHomePage: module.showOnHomePage,
            locale: locale,
          });

          console.log(`  ✅ ${locale.toUpperCase()}: Created successfully`);
          created++;

          // Small delay to avoid rate limiting
          await new Promise(resolve => setTimeout(resolve, 500));
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
translateModules()
  .then(() => {
    console.log('\n🎉 All translations done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
