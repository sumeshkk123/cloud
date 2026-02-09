/**
 * Translate the auto-responder-module page title (and pill, subtitle) to all supported locales.
 * Creates or updates page_titles rows for page "auto-responder-module" in en, es, it, de, pt, zh.
 *
 * Usage:
 *   npx tsx scripts/translate-page-title-auto-responder.ts
 *   npx tsx scripts/translate-page-title-auto-responder.ts --overwrite
 *
 * Requires: DEEPL_API_KEY, GOOGLE_TRANSLATE_API_KEY, or MyMemory (free fallback)
 */
import { upsertPageTitle } from "../lib/api/page-titles";
import { i18n } from "../i18n-config";

const PAGE = "auto-responder-module";

const EN_SOURCE = {
  title: "Auto Responder Module Pricing & Implementation",
  pagePill: "Pricing intelligence for modern MLM automation",
  sectionSubtitle:
    "Activate intelligent nurture journeys that keep distributors productive and customers loyal. Our pricing packages bundle strategy, configuration, and optimisation so your teams realise value from day one and keep momentum in every market.",
};

const LOCALE_MAP: Record<string, string> = {
  en: "en",
  es: "es",
  it: "it",
  de: "de",
  pt: "pt",
  zh: "zh",
};

const DEEPL_LOCALE_MAP: Record<string, string> = {
  en: "EN",
  es: "ES",
  it: "IT",
  de: "DE",
  pt: "PT",
  zh: "ZH",
};

async function translateText(
  text: string,
  targetLocale: string,
  sourceLocale: string = "en"
): Promise<string> {
  if (sourceLocale === targetLocale || !text?.trim()) return text;

  const targetLang = LOCALE_MAP[targetLocale] || targetLocale;
  const sourceLang = LOCALE_MAP[sourceLocale] || sourceLocale;

  if (process.env.DEEPL_API_KEY) {
    try {
      const targetLangUpper = DEEPL_LOCALE_MAP[targetLang] || targetLang.toUpperCase();
      const sourceLangUpper = DEEPL_LOCALE_MAP[sourceLang] || sourceLang.toUpperCase();
      const response = await fetch("https://api-free.deepl.com/v2/translate", {
        method: "POST",
        headers: {
          Authorization: `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,
          "Content-Type": "application/x-www-form-urlencoded",
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
      console.warn("  [DeepL failed, trying fallback]");
    }
  }

  if (process.env.GOOGLE_TRANSLATE_API_KEY) {
    try {
      const googleSource = sourceLang === "zh" || sourceLang === "zh-CN" ? "zh-CN" : sourceLang;
      const googleTarget = targetLang === "zh" || targetLang === "zh-CN" ? "zh-CN" : targetLang;
      const response = await fetch(
        `https://translation.googleapis.com/language/translate/v2?key=${process.env.GOOGLE_TRANSLATE_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            q: text,
            source: googleSource,
            target: googleTarget,
            format: "text",
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        if (data.data?.translations?.[0]?.translatedText) {
          return data.data.translations[0].translatedText;
        }
      }
    } catch (e) {
      console.warn("  [Google Translate failed, trying MyMemory]");
    }
  }

  const mySource = sourceLang === "zh" || sourceLang === "zh-CN" ? "zh-CN" : sourceLang;
  const myTarget = targetLang === "zh" || targetLang === "zh-CN" ? "zh-CN" : targetLang;
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${mySource}|${myTarget}`;
  if (url.length > 2000) throw new Error("Text too long for MyMemory API");
  const response = await fetch(url, { headers: { "User-Agent": "Cloud MLM Software" } });
  const data = await response.json();
  if (data.responseStatus === 200 && data.responseData?.translatedText) {
    return data.responseData.translatedText;
  }
  throw new Error(data.responseData?.errorMessage || "Translation failed");
}

async function main() {
  const overwrite = process.argv.includes("--overwrite");
  console.log("Translate page title: auto-responder-module → all locales");
  console.log("Locales:", i18n.locales.join(", "));
  console.log("Mode:", overwrite ? "Overwrite existing" : "Skip existing");
  console.log("");

  for (const locale of i18n.locales) {
    try {
      if (locale === "en") {
        await upsertPageTitle({
          page: PAGE,
          locale: "en",
          title: EN_SOURCE.title,
          pagePill: EN_SOURCE.pagePill,
          sectionSubtitle: EN_SOURCE.sectionSubtitle,
        });
        console.log(`  ✓ en (source)`);
        continue;
      }

      const title = await translateText(EN_SOURCE.title, locale, "en");
      await new Promise((r) => setTimeout(r, 200));
      const pagePill = await translateText(EN_SOURCE.pagePill, locale, "en");
      await new Promise((r) => setTimeout(r, 200));
      const sectionSubtitle = await translateText(EN_SOURCE.sectionSubtitle, locale, "en");

      await upsertPageTitle({
        page: PAGE,
        locale,
        title,
        pagePill,
        sectionSubtitle,
      });
      console.log(`  ✓ ${locale}`);
    } catch (err) {
      console.error(`  ✗ ${locale}:`, err instanceof Error ? err.message : String(err));
    }
    await new Promise((r) => setTimeout(r, 300));
  }

  console.log("");
  console.log("Done. Page title for auto-responder-module is set for all locales.");
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
