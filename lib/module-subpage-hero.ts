import type { PageTitleRecord } from "@/lib/api/page-titles";
import { getModuleBySubpageSlug } from "@/lib/api/modules";

const MODULE_PAGE_PREFIX = "mlm-software-modules";

/**
 * Single source for module subpage hero data (page title + description in hero section).
 * Fetches from admin/modules (Edit Module — modules table) only.
 * Use this for all 17 module subpages; pass the canonical slug (e.g. "emails", "backup-manager").
 * Meta title/description come from admin/modules/meta-page-title via layout generateMetadata.
 */
export async function getModuleSubpageHeroDataBySlug(
  slug: string,
  locale: string
): Promise<PageTitleRecord | null> {
  return getModuleSubpageHeroData(`${MODULE_PAGE_PREFIX}-${slug}`, locale);
}

/**
 * Fetches hero section data (visible page title and description) from admin/modules
 * (Edit Module — modules table). Prefer getModuleSubpageHeroDataBySlug(slug, locale) for module subpages.
 */
export async function getModuleSubpageHeroData(
  pageKey: string,
  locale: string
): Promise<PageTitleRecord | null> {
  const subpageSlug = pageKey.startsWith(`${MODULE_PAGE_PREFIX}-`)
    ? pageKey.slice(MODULE_PAGE_PREFIX.length + 1)
    : pageKey;
  const moduleRecord = await getModuleBySubpageSlug(subpageSlug, locale);
  if (!moduleRecord) return null;
  return {
    page: pageKey,
    locale: moduleRecord.locale,
    title: moduleRecord.title,
    sectionSubtitle: moduleRecord.description || undefined,
  };
}
