/**
 * Script to translate all English demos to all supported languages
 * Runs standalone - no dev server required.
 *
 * Usage:
 *   npm run translate-demos-all
 *   npm run translate-demos-all -- --overwrite  # Overwrite existing translations
 *
 * Requires: DEEPL_API_KEY, GOOGLE_TRANSLATE_API_KEY, or MyMemory (free fallback)
 * Load .env from project root before running if needed.
 */
import { listDemoItems, createDemoItem, getAllDemoItemTranslations, updateDemoItem } from '../lib/api/demo-items';
import { i18n } from '../i18n-config';
import { prisma } from '../lib/db/prisma';

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

async function translateText(text: string, targetLocale: string, sourceLocale: string = 'en'): Promise<string> {
  if (sourceLocale === targetLocale || !text?.trim()) return text;

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
          Authorization: `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          text,
          target_lang: targetLangUpper,
          source_lang: sourceLangUpper,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.translations?.[0]?.text) return data.translations[0].text;
      }
    } catch (e) {
      console.warn('  [DeepL failed, trying fallback]');
    }
  }

  // Try Google Translate
  if (process.env.GOOGLE_TRANSLATE_API_KEY) {
    try {
      const googleSource = (sourceLang === 'zh' || sourceLang === 'zh-CN') ? 'zh-CN' : sourceLang;
      const googleTarget = (targetLang === 'zh' || targetLang === 'zh-CN') ? 'zh-CN' : targetLang;

      const response = await fetch(
        `https://translation.googleapis.com/language/translate/v2?key=${process.env.GOOGLE_TRANSLATE_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ q: text, source: googleSource, target: googleTarget, format: 'text' }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.data?.translations?.[0]?.translatedText) {
          return data.data.translations[0].translatedText;
        }
      }
    } catch (e) {
      console.warn('  [Google Translate failed, trying MyMemory]');
    }
  }

  // Fallback: MyMemory
  const mySource = (sourceLang === 'zh' || sourceLang === 'zh-CN') ? 'zh-CN' : sourceLang;
  const myTarget = (targetLang === 'zh' || targetLang === 'zh-CN') ? 'zh-CN' : targetLang;
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${mySource}|${myTarget}`;
  if (url.length > 2000) throw new Error('Text too long for MyMemory API');

  const response = await fetch(url, { headers: { 'User-Agent': 'Cloud MLM Software' } });
  const data = await response.json();
  if (data.responseStatus === 200 && data.responseData?.translatedText) {
    return data.responseData.translatedText;
  }
  throw new Error(data.responseData?.errorMessage || 'Translation failed');
}

async function main() {
  const overwrite = process.argv.includes('--overwrite');

  console.log('='.repeat(50));
  console.log('Translate demos to all languages');
  console.log('='.repeat(50));
  console.log(`Mode: ${overwrite ? 'Overwrite existing' : 'Skip existing'}`);
  console.log('');

  const englishDemos = await listDemoItems('en');
  if (englishDemos.length === 0) {
    console.log('No English demos found. Exiting.');
    await prisma.$disconnect();
    return;
  }

  const targetLocales = i18n.locales.filter((l) => l !== 'en');
  let translated = 0;
  let skipped = 0;
  const errors: Array<{ demoId: string; locale: string; error: string }> = [];

  for (const demo of englishDemos) {
    const existingTranslations = await getAllDemoItemTranslations(demo.id);

    for (const targetLocale of targetLocales) {
      const existing = existingTranslations.find((t) => t.locale === targetLocale);
      if (existing && !overwrite) {
        skipped++;
        continue;
      }

      try {
        const translatedAdminTitle = await translateText(demo.adminDemoTitle, targetLocale, 'en');
        await new Promise((r) => setTimeout(r, 150));

        const translatedDistributorsTitle = await translateText(demo.distributorsDemoTitle, targetLocale, 'en');
        await new Promise((r) => setTimeout(r, 150));

        let translatedAdminFeatures: string[] | null = null;
        if (demo.adminDemoFeatures && Array.isArray(demo.adminDemoFeatures)) {
          translatedAdminFeatures = [];
          for (const item of demo.adminDemoFeatures) {
            translatedAdminFeatures.push(await translateText(String(item), targetLocale, 'en'));
            await new Promise((r) => setTimeout(r, 150));
          }
        }

        let translatedDistributorsFeatures: string[] | null = null;
        if (demo.distributorsDemoFeatures && Array.isArray(demo.distributorsDemoFeatures)) {
          translatedDistributorsFeatures = [];
          for (const item of demo.distributorsDemoFeatures) {
            translatedDistributorsFeatures.push(await translateText(String(item), targetLocale, 'en'));
            await new Promise((r) => setTimeout(r, 150));
          }
        }

        if (existing && overwrite) {
          await updateDemoItem(existing.id, {
            icon: demo.icon,
            image: demo.image,
            title: demo.title,
            adminDemoTitle: translatedAdminTitle,
            adminDemoFeatures: translatedAdminFeatures,
            distributorsDemoTitle: translatedDistributorsTitle,
            distributorsDemoFeatures: translatedDistributorsFeatures,
            locale: targetLocale,
            showOnHomePage: demo.showOnHomePage,
          });
        } else {
          await createDemoItem({
            icon: demo.icon,
            image: demo.image,
            title: demo.title,
            adminDemoTitle: translatedAdminTitle,
            adminDemoFeatures: translatedAdminFeatures,
            distributorsDemoTitle: translatedDistributorsTitle,
            distributorsDemoFeatures: translatedDistributorsFeatures,
            locale: targetLocale,
            showOnHomePage: demo.showOnHomePage,
          });
        }

        translated++;
        console.log(`  ✓ ${demo.adminDemoTitle?.substring(0, 40)}... → ${targetLocale}`);
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        errors.push({ demoId: demo.id, locale: targetLocale, error: msg });
        console.error(`  ✗ ${demo.adminDemoTitle?.substring(0, 40)}... → ${targetLocale}: ${msg}`);
      }

      await new Promise((r) => setTimeout(r, 200));
    }
  }

  console.log('');
  console.log('='.repeat(50));
  console.log('Summary');
  console.log('='.repeat(50));
  console.log(`Translations created/updated: ${translated}`);
  console.log(`Skipped (already exist): ${skipped}`);
  if (errors.length) {
    console.log(`Errors: ${errors.length}`);
    errors.slice(0, 5).forEach((e) => console.log(`  - ${e.demoId} / ${e.locale}: ${e.error}`));
    if (errors.length > 5) console.log(`  ... and ${errors.length - 5} more`);
  }
  console.log('='.repeat(50));

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
