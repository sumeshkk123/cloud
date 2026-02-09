import type { Locale } from "@/i18n-config";
import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";
import { isModulesSubpageSlug } from "./modules-subpage-slugs";

/**
 * Registry of module sub-page content by slug (for dynamic route app/[lang]/[slug]/).
 * All 18 module sub-pages now have dedicated app/[lang]/<slug>/ folders with their own content.ts,
 * so this registry is empty. Kept for backwards compatibility if [slug] is hit directly.
 */
const CONTENT_BY_SLUG: Partial<Record<string, PricingSubPageContent>> = {};

/**
 * Returns content for a module sub-page slug, or null if no dedicated content.
 * Module sub-pages are served by app/[lang]/<slug>/; this is only used by the dynamic [slug] fallback.
 */
export function getModulesSubpageContent(
  slug: string,
  _locale: Locale
): PricingSubPageContent | null {
  if (!isModulesSubpageSlug(slug)) return null;
  return CONTENT_BY_SLUG[slug] ?? null;
}
