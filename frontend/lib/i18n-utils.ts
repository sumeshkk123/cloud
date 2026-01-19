import { supportedLocales, type SupportedLocale } from "@/config/site";

export function isSupportedLocale(value: string): value is SupportedLocale {
  return supportedLocales.includes(value as SupportedLocale);
}
