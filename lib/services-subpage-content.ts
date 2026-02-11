import type { ServiceFeatureContent } from "@/components/frontend/services/subpage";
import { isServicesSubpageSlug } from "./services-subpage-slugs";

/** Content for dynamic [slug] under /services/. Bitcoin is a top-level page at /bitcoin-cryptocurrency-mlm-software. */
const CONTENT_MAP: Record<string, ServiceFeatureContent> = {};

/**
 * Returns ServiceFeatureContent for a given service slug, or null if not found.
 * Used by the dynamic route app/[lang]/services/[slug].
 */
export function getServicesSubpageContent(slug: string): ServiceFeatureContent | null {
  if (!isServicesSubpageSlug(slug)) return null;
  return CONTENT_MAP[slug] ?? null;
}
