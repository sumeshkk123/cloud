import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { listDemoItems, createDemoItem, getAllDemoItemTranslations, updateDemoItem } from '@/lib/api/demo-items';
import { i18n } from '@/i18n-config';

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

/**
 * API endpoint to translate all English demos to all supported languages
 * POST /api/admin/demo-items/translate-all
 */
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { overwrite = false } = body || {};

    // Get all English demo items
    const englishDemos = await listDemoItems('en');
    
    if (englishDemos.length === 0) {
      return NextResponse.json({ 
        message: 'No English demos found to translate.',
        translated: 0,
        skipped: 0
      });
    }

    // Get all supported locales except English
    const targetLocales = i18n.locales.filter(locale => locale !== 'en');
    
    let translatedCount = 0;
    let skippedCount = 0;
    const errors: Array<{ demoId: string; locale: string; error: string }> = [];

    // Process each demo
    for (const demo of englishDemos) {
      // Get all existing translations for this demo (grouped by icon)
      const existingTranslations = await getAllDemoItemTranslations(demo.id);
      const existingLocales = new Set(existingTranslations.map(t => t.locale));

      // Process each target locale
      for (const targetLocale of targetLocales) {
        try {
          // Check if translation already exists
          const existing = existingTranslations.find(t => t.locale === targetLocale);
          
          if (existing && !overwrite) {
            skippedCount++;
            continue;
          }

          // Translate translatable fields
          const translatedAdminDemoTitle = await translateText(demo.adminDemoTitle, targetLocale, 'en');
          const translatedDistributorsDemoTitle = await translateText(demo.distributorsDemoTitle, targetLocale, 'en');

          // Translate adminDemoFeatures array if it exists
          let translatedAdminDemoFeatures = null;
          if (demo.adminDemoFeatures && Array.isArray(demo.adminDemoFeatures)) {
            translatedAdminDemoFeatures = await Promise.all(
              demo.adminDemoFeatures.map(async (item: string) => {
                try {
                  return await translateText(item, targetLocale, 'en');
                } catch {
                  return item;
                }
              })
            );
          }

          // Translate distributorsDemoFeatures array if it exists
          let translatedDistributorsDemoFeatures = null;
          if (demo.distributorsDemoFeatures && Array.isArray(demo.distributorsDemoFeatures)) {
            translatedDistributorsDemoFeatures = await Promise.all(
              demo.distributorsDemoFeatures.map(async (item: string) => {
                try {
                  return await translateText(item, targetLocale, 'en');
                } catch {
                  return item;
                }
              })
            );
          }

          // Create or update translation
          if (existing && overwrite) {
            // Update existing translation
            await updateDemoItem(existing.id, {
              icon: demo.icon,
              image: demo.image,
              title: demo.title, // Shared title
              adminDemoTitle: translatedAdminDemoTitle,
              adminDemoFeatures: translatedAdminDemoFeatures,
              distributorsDemoTitle: translatedDistributorsDemoTitle,
              distributorsDemoFeatures: translatedDistributorsDemoFeatures,
              locale: targetLocale,
              showOnHomePage: demo.showOnHomePage, // Shared showOnHomePage
            });
          } else {
            // Create new translation with same icon/image/title/showOnHomePage as English
            // Use the same icon to group translations together
            await createDemoItem({
              icon: demo.icon,
              image: demo.image,
              title: demo.title, // Shared title
              adminDemoTitle: translatedAdminDemoTitle,
              adminDemoFeatures: translatedAdminDemoFeatures,
              distributorsDemoTitle: translatedDistributorsDemoTitle,
              distributorsDemoFeatures: translatedDistributorsDemoFeatures,
              locale: targetLocale,
              showOnHomePage: demo.showOnHomePage, // Shared showOnHomePage
            });
          }

          translatedCount++;
          
          // Add a small delay to avoid rate limiting
          await new Promise(resolve => setTimeout(resolve, 100));
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error';
          errors.push({
            demoId: demo.id,
            locale: targetLocale,
            error: errorMessage,
          });
          console.error(`[Translate All] Error translating demo ${demo.id} to ${targetLocale}:`, errorMessage);
        }
      }
    }

    return NextResponse.json({
      message: `Translation completed. ${translatedCount} translations created, ${skippedCount} skipped.`,
      translated: translatedCount,
      skipped: skippedCount,
      totalDemos: englishDemos.length,
      targetLocales: targetLocales,
      errors: errors.length > 0 ? errors : undefined,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to translate demos.';
    console.error('[Translate All] Error:', error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
