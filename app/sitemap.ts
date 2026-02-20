import type { MetadataRoute } from "next";
import { siteBaseConfig, supportedLocales, type SupportedLocale } from "@/config/site";

/** Refresh sitemap periodically so it uses current slugs. */
export const revalidate = 3600;

import { i18n } from "@/i18n-config";
import {
  getSlugForPricingSubpage,
  getSlugFromPage,
  pageToSlugMap,
  pricingSubpageToSlugMap,
} from "@/lib/page-slugs";
import { ALL_SERVICES_SUBPAGE_SLUGS, getSlugForServiceSubpage } from "@/lib/services-subpage-slugs";
import { ALL_MLM_PLAN_SUBPAGE_SLUGS, getSlugForPlanSubpage, MLM_PLAN_SEGMENT } from "@/lib/mlm-plan-subpage-slugs";

const BASE = (siteBaseConfig.url || "").replace(/\/$/, "");
const DEFAULT_LOCALE = i18n.defaultLocale as SupportedLocale;

function buildPath(segments: string[], locale: SupportedLocale): string {
  const path = "/" + segments.filter(Boolean).join("/");
  if (locale === DEFAULT_LOCALE) return path;
  return `/${locale}${path}`;
}

function toEntry(path: string, changeFrequency: "weekly" | "monthly" | "yearly" = "weekly", priority = 0.8): MetadataRoute.Sitemap[number] {
  return {
    url: path.startsWith("http") ? path : `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const seen = new Set<string>();

  for (const locale of supportedLocales) {
    // Homepage
    const homePath = buildPath([], locale);
    if (!seen.has(homePath)) {
      seen.add(homePath);
      entries.push(toEntry(homePath, "weekly", 1));
    }

    // All top-level and module pages (pageToSlugMap includes merged module subpages)
    for (const pageId of Object.keys(pageToSlugMap)) {
      const slug = getSlugFromPage(pageId, locale);
      if (!slug) continue;
      const path = buildPath([slug], locale);
      if (seen.has(path)) continue;
      seen.add(path);
      entries.push(toEntry(path));
    }

    // Services subpages (first segment translated, second segment translated when mapped)
    const servicesSlug = getSlugFromPage("services", locale);
    if (servicesSlug) {
      for (const canonicalKey of ALL_SERVICES_SUBPAGE_SLUGS) {
        const subSlug = getSlugForServiceSubpage(canonicalKey, locale);
        const path = buildPath([servicesSlug, subSlug], locale);
        if (seen.has(path)) continue;
        seen.add(path);
        entries.push(toEntry(path));
      }
    }

    // Pricing subpages (both segments translated)
    const pricingSlug = getSlugFromPage("pricing", locale);
    if (pricingSlug) {
      for (const subpageKey of Object.keys(pricingSubpageToSlugMap)) {
        const subSlug = getSlugForPricingSubpage(subpageKey, locale);
        if (!subSlug) continue;
        const path = buildPath([pricingSlug, subSlug], locale);
        if (seen.has(path)) continue;
        seen.add(path);
        entries.push(toEntry(path));
      }
    }

    // MLM plan subpages (/mlm-plan/<translated-slug>) – one entry per plan per locale
    for (const planSlug of ALL_MLM_PLAN_SUBPAGE_SLUGS) {
      const translatedSlug = getSlugForPlanSubpage(planSlug, locale);
      const path = buildPath([MLM_PLAN_SEGMENT, translatedSlug], locale);
      if (seen.has(path)) continue;
      seen.add(path);
      entries.push(toEntry(path));
    }
  }

  return entries;
}
