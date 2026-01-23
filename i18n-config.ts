export const i18n = {
  defaultLocale: "en",
  locales: ["en", "es", "it", "de", "pt", "zh"] as const
};

export type Locale = (typeof i18n)["locales"][number];

// Language display names
export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  it: "Italiano",
  de: "Deutsch",
  pt: "Português",
  zh: "中文"
};
