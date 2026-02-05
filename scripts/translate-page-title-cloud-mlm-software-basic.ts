/**
 * Translate cloud-mlm-software-basic page title, hero copy, and meta (title, description, keywords)
 * to all supported locales. Upserts both page_titles and meta_details.
 *
 * Usage:
 *   npx tsx scripts/translate-page-title-cloud-mlm-software-basic.ts
 *   npx tsx scripts/translate-page-title-cloud-mlm-software-basic.ts --overwrite
 *
 * Requires: DEEPL_API_KEY, GOOGLE_TRANSLATE_API_KEY, or MyMemory (free fallback)
 */
import { upsertPageTitle } from "../lib/api/page-titles";
import { upsertMetaDetail } from "../lib/api/meta-details";
import { i18n } from "../i18n-config";

const PAGE = "cloud-mlm-software-basic";

const EN_PAGE_TITLES = {
  title: "Cloud MLM Software Basic Pricing & Implementation",
  pagePill: "Launch-ready direct selling platform",
  sectionSubtitle:
    "Build trust with distributors and customers using a polished, automation-ready MLM platform. We combine strategy, configuration, and enablement into one fixed-fee engagement so your leadership team can focus on growth.",
};

const EN_META = {
  title: "Cloud MLM Software Basic Pricing & Implementation",
  description:
    "Understand Cloud MLM Software Basic pricing, roadmap, and deliverables. Launch a modern MLM platform with core automations, compliance, and analytics.",
  keywords:
    "Cloud MLM Software Basic pricing, MLM platform implementation, direct selling software cost",
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
  console.log("Translate page title + meta: cloud-mlm-software-basic → all locales");
  console.log("Locales:", i18n.locales.join(", "));
  console.log("");

  for (const locale of i18n.locales) {
    try {
      if (locale === "en") {
        await upsertPageTitle({
          page: PAGE,
          locale: "en",
          title: EN_PAGE_TITLES.title,
          pagePill: EN_PAGE_TITLES.pagePill,
          sectionSubtitle: EN_PAGE_TITLES.sectionSubtitle,
        });
        await upsertMetaDetail({
          page: PAGE,
          locale: "en",
          title: EN_META.title,
          description: EN_META.description,
          keywords: EN_META.keywords,
        });
        console.log(`  ✓ en (source)`);
        continue;
      }

      const t1 = await translateText(EN_PAGE_TITLES.title, locale, "en");
      await new Promise((r) => setTimeout(r, 200));
      const t2 = await translateText(EN_PAGE_TITLES.pagePill, locale, "en");
      await new Promise((r) => setTimeout(r, 200));
      const t3 = await translateText(EN_PAGE_TITLES.sectionSubtitle, locale, "en");
      await new Promise((r) => setTimeout(r, 200));
      const t4 = await translateText(EN_META.title, locale, "en");
      await new Promise((r) => setTimeout(r, 200));
      const t5 = await translateText(EN_META.description, locale, "en");
      await new Promise((r) => setTimeout(r, 200));
      const t6 = await translateText(EN_META.keywords, locale, "en");

      await upsertPageTitle({
        page: PAGE,
        locale,
        title: t1,
        pagePill: t2,
        sectionSubtitle: t3,
      });
      await upsertMetaDetail({
        page: PAGE,
        locale,
        title: t4,
        description: t5,
        keywords: t6,
      });
      console.log(`  ✓ ${locale}`);
    } catch (err) {
      console.error(`  ✗ ${locale}:`, err instanceof Error ? err.message : String(err));
    }
    await new Promise((r) => setTimeout(r, 300));
  }

  console.log("");
  console.log("Done. Page title + meta for cloud-mlm-software-basic are set for all locales.");
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
