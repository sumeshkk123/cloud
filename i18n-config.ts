export const i18n = {
  defaultLocale: "en",
  locales: ["en", "es", "fr", "it", "de", "pt", "zh"] as const
};

export type Locale = (typeof i18n)["locales"][number];

// Language display names
export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  de: "Deutsch",
  pt: "Português",
  zh: "中文"
};

/** Label for locale tabs/dropdowns: code + name (e.g. "fr Français") */
export function getLocaleLabel(loc: string): string {
  const name = localeNames[loc as Locale] ?? loc.toUpperCase();
  return `${loc} ${name}`;
}
