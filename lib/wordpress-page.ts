import type { SupportedLocale } from "@/config/site";
import { i18n } from "@/i18n-config";
import type { WordpressPageContent } from "@/types/wordpress";

export async function getWordpressPage(_slug: string, locale: SupportedLocale, allowFallback = true): Promise<WordpressPageContent | null> {
  if (allowFallback && locale !== i18n.defaultLocale) {
    return getWordpressPage(_slug, i18n.defaultLocale as SupportedLocale, false);
  }
  return null;
}
