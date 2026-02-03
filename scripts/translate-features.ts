/**
 * Script to translate all English features to all supported languages
 * Run with: npx tsx scripts/translate-features.ts
 */

import { listFeatures, createFeature, getFeatureById, updateFeature } from '../lib/api/features';
import { i18n } from '../i18n-config';

// Translation helper function (reusing logic from translate API)
async function translateText(text: string, targetLocale: string, sourceLocale: string = 'en'): Promise<string> {
  const LOCALE_MAP: Record<string, string> = {
    en: 'en',
    es: 'es',
    it: 'it',
    de: 'de',
    pt: 'pt',
    zh: 'zh',
  };

  const DEEPL_LOCALE_MAP: Record<string, string> = {
    en: 'EN',
    es: 'ES',
    it: 'IT',
    de: 'DE',
    pt: 'PT',
    zh: 'ZH',
  };

  if (sourceLocale === targetLocale) {
    return text;
  }

  const targetLang = LOCALE_MAP[targetLocale] || targetLocale;
  const sourceLang = LOCALE_MAP[sourceLocale] || sourceLocale;

  // Try DeepL first
  if (process.env.DEEPL_API_KEY) {
    try {
      const targetLangUpper = DEEPL_LOCALE_MAP[targetLang] || targetLang.toUpperCase();
      const sourceLangUpper = DEEPL_LOCALE_MAP[sourceLang] || sourceLang.toUpperCase();
      
      const response = await fetch('https://api-free.deepl.com/v2/translate', {
        method: 'POST',
        headers: {
          'Authorization': `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          text: text,
          target_lang: targetLangUpper,
          source_lang: sourceLangUpper,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.translations?.[0]?.text) {
          return data.translations[0].text;
        }
      }
    } catch (error) {
      console.warn('[Translate] DeepL failed, trying Google Translate:', error);
    }
  }

  // Try Google Translate
  if (process.env.GOOGLE_TRANSLATE_API_KEY) {
    try {
      const googleSourceLang = (sourceLang === 'zh' || sourceLang === 'zh-CN') ? 'zh-CN' : sourceLang;
      const googleTargetLang = (targetLang === 'zh' || targetLang === 'zh-CN') ? 'zh-CN' : targetLang;
      
      const response = await fetch(
        `https://translation.googleapis.com/language/translate/v2?key=${process.env.GOOGLE_TRANSLATE_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            q: text,
            source: googleSourceLang,
            target: googleTargetLang,
            format: 'text',
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.data?.translations?.[0]?.translatedText) {
          return data.data.translations[0].translatedText;
        }
      }
    } catch (error) {
      console.warn('[Translate] Google Translate failed, trying MyMemory:', error);
    }
  }

  // Fallback to MyMemory
  try {
    const myMemorySourceLang = (sourceLang === 'zh' || sourceLang === 'zh-CN') ? 'zh-CN' : sourceLang;
    const myMemoryTargetLang = (targetLang === 'zh' || targetLang === 'zh-CN') ? 'zh-CN' : targetLang;
    
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${myMemorySourceLang}|${myMemoryTargetLang}`;
    
    if (url.length > 2000) {
      throw new Error(`Text too long for MyMemory API`);
    }
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Cloud MLM Software',
      },
    });

    const data = await response.json();
    
    if (data.responseStatus === 200 && data.responseData?.translatedText) {
      return data.responseData.translatedText;
    }
    
    throw new Error(data.responseData?.errorMessage || 'Translation failed');
  } catch (error) {
    throw new Error(`Translation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

async function translateAllFeatures(overwrite: boolean = false) {
  console.log('🚀 Starting feature translation process...\n');

  // Get all English features
  const englishFeatures = await listFeatures('en');
  
  if (englishFeatures.length === 0) {
    console.log('❌ No English features found to translate.');
    return;
  }

  console.log(`📋 Found ${englishFeatures.length} English features to translate.\n`);

  // Get all supported locales except English
  const targetLocales = i18n.locales.filter(locale => locale !== 'en');
  console.log(`🌍 Target languages: ${targetLocales.join(', ')}\n`);

  let translatedCount = 0;
  let skippedCount = 0;
  const errors: Array<{ featureId: string; locale: string; error: string }> = [];

  // Process each feature
  for (let i = 0; i < englishFeatures.length; i++) {
    const feature = englishFeatures[i];
    console.log(`\n[${i + 1}/${englishFeatures.length}] Processing feature: ${feature.title}`);

    // Process each target locale
    for (const targetLocale of targetLocales) {
      try {
        // Check if translation already exists
        const existing = await getFeatureById(feature.id, targetLocale);
        
        if (existing && !overwrite) {
          console.log(`  ⏭️  ${targetLocale}: Already exists, skipping...`);
          skippedCount++;
          continue;
        }

        console.log(`  🔄 ${targetLocale}: Translating...`);

        // Translate title and description
        const translatedTitle = await translateText(feature.title, targetLocale, 'en');
        const translatedDescription = await translateText(feature.description, targetLocale, 'en');

        // Translate features array if it exists
        let translatedFeatures = null;
        if (feature.features && Array.isArray(feature.features)) {
          translatedFeatures = await Promise.all(
            feature.features.map(async (item: any) => {
              if (typeof item === 'string') {
                try {
                  return await translateText(item, targetLocale, 'en');
                } catch {
                  return item;
                }
              } else if (typeof item === 'object' && item !== null) {
                const translatedItem: any = { ...item };
                
                if (item.title) {
                  try {
                    translatedItem.title = await translateText(item.title, targetLocale, 'en');
                  } catch {
                    translatedItem.title = item.title;
                  }
                }
                
                if (item.description) {
                  try {
                    translatedItem.description = await translateText(item.description, targetLocale, 'en');
                  } catch {
                    translatedItem.description = item.description;
                  }
                }
                
                return translatedItem;
              }
              return item;
            })
          );
        }

        // Create or update the translation
        if (existing && overwrite) {
          await updateFeature(feature.id, targetLocale, {
            slug: feature.slug,
            title: translatedTitle,
            description: translatedDescription,
            icon: feature.icon,
            category: feature.category,
            hasDetailPage: feature.hasDetailPage,
            showOnHomePage: feature.showOnHomePage,
            features: translatedFeatures,
          });
          console.log(`  ✅ ${targetLocale}: Updated`);
        } else {
          await createFeature({
            id: feature.id,
            slug: feature.slug,
            title: translatedTitle,
            description: translatedDescription,
            icon: feature.icon,
            category: feature.category,
            hasDetailPage: feature.hasDetailPage,
            showOnHomePage: feature.showOnHomePage,
            locale: targetLocale,
            features: translatedFeatures,
          });
          console.log(`  ✅ ${targetLocale}: Created`);
        }

        translatedCount++;
        
        // Add a small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        errors.push({
          featureId: feature.id,
          locale: targetLocale,
          error: errorMessage,
        });
        console.log(`  ❌ ${targetLocale}: Error - ${errorMessage}`);
      }
    }
  }

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('📊 Translation Summary');
  console.log('='.repeat(50));
  console.log(`✅ Translated: ${translatedCount}`);
  console.log(`⏭️  Skipped: ${skippedCount}`);
  console.log(`❌ Errors: ${errors.length}`);
  
  if (errors.length > 0) {
    console.log('\n⚠️  Errors:');
    errors.forEach(({ featureId, locale, error }) => {
      console.log(`  - Feature ${featureId} (${locale}): ${error}`);
    });
  }
  
  console.log('\n✨ Translation process completed!');
}

// Run the script
const overwrite = process.argv.includes('--overwrite');
translateAllFeatures(overwrite)
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
