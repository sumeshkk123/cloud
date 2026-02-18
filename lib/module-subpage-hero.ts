import type { PageTitleRecord } from "@/lib/api/page-titles";
import { getModuleForSubpageFromList } from "@/lib/api/modules";

const MODULE_PAGE_PREFIX = "mlm-software-modules";

/**
 * Hero data for module subpages. Uses the SAME API data as the main page (listModules = GET /api/modules).
 * Fetches the same list as mlm-software-modules, then picks the module by ?mid= or by slug.
 * So inner page hero always shows the same title/description as the module card.
 */
export async function getModuleSubpageHeroDataBySlug(
  slug: string,
  locale: string,
  moduleId?: string | null
): Promise<PageTitleRecord | null> {
  const pageKey = `${MODULE_PAGE_PREFIX}-${slug}`;
  const moduleRecord = await getModuleForSubpageFromList(locale, slug, moduleId);
  if (!moduleRecord) return null;
  return {
    page: pageKey,
    locale: moduleRecord.locale,
    title: moduleRecord.title,
    sectionSubtitle: moduleRecord.description || undefined,
  };
}

/**
 * Legacy: fetches hero by page key (strips prefix to get slug). Prefer getModuleSubpageHeroDataBySlug(slug, locale).
 */
export async function getModuleSubpageHeroData(
  pageKey: string,
  locale: string
): Promise<PageTitleRecord | null> {
  const slug = pageKey.startsWith(`${MODULE_PAGE_PREFIX}-`)
    ? pageKey.slice(MODULE_PAGE_PREFIX.length + 1)
    : pageKey;
  return getModuleSubpageHeroDataBySlug(slug, locale, undefined);
}
