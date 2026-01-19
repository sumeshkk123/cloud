import type { Locale } from "@/i18n-config";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { SupportedLocale } from "@/config/site";

export function localizedHref(locale: Locale, path: string): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return buildLocalizedPath(normalized, locale as SupportedLocale);
}
