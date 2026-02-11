import type { Locale } from "@/i18n-config";
import { slugToCountryName } from "@/lib/countries-by-continent";

type CountryNamesByLocale = Partial<Record<Locale, Record<string, string>>>;

let cached: CountryNamesByLocale | null = null;

function getCountryNamesByLocale(): CountryNamesByLocale {
  if (cached) return cached;
  try {
    cached = require("../shared/countries-availability/country-names-by-locale.json") as CountryNamesByLocale;
  } catch {
    cached = {};
  }
  return cached;
}

/**
 * Returns the country display name for a given slug and locale.
 * Falls back to English (slugToCountryName) when no translation exists.
 */
export function getLocalizedCountryName(slug: string, locale: Locale): string {
  if (locale === "en") {
    return slugToCountryName(slug);
  }
  const byLocale = getCountryNamesByLocale();
  const names = byLocale[locale];
  if (names && names[slug]) {
    return names[slug];
  }
  return slugToCountryName(slug);
}
