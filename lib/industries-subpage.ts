/**
 * Helpers for industry inner pages (e.g. /industries/insurance).
 * Page title key for getPageTitle: "industry-solutions-<slug>".
 */

export const INDUSTRY_PAGE_TITLE_PREFIX = "industry-solutions";

export function getIndustryPageTitleKey(slug: string): string {
  return `${INDUSTRY_PAGE_TITLE_PREFIX}-${slug}`;
}

/**
 * Map title-derived slugs to canonical path slugs for industry URLs.
 * Use so links from /industries and home industry section go to the correct inner page (e.g. /industries/insurance).
 */
export const INDUSTRY_PATH_SLUG_OVERRIDES: Record<string, string> = {
  "mlm-software-for-insurance-industry": "insurance",
  "mlm-software-for-affiliate-marketing-industry": "affiliate-marketing",
  "affiliate-marketing": "affiliate-marketing",
};

export function getIndustryPathSlug(titleDerivedSlug: string): string {
  return INDUSTRY_PATH_SLUG_OVERRIDES[titleDerivedSlug] ?? titleDerivedSlug;
}
