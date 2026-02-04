import defaultContentModule from "../shared/about-company/default-content.js";
import type { Locale } from "@/i18n-config";

const defaultContent =
  (defaultContentModule as { default?: AboutCompanyContent }).default ?? (defaultContentModule as AboutCompanyContent);

export interface AboutCompanyHeroMetric {
  label: string;
  value: string;
  detail: string;
}

export interface AboutCompanyContent {
  hero: {
    badgeText: string;
    highlightText: string;
    afterText: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    metrics: AboutCompanyHeroMetric[];
  };
}

const contentCache = new Map<Locale, AboutCompanyContent>();

export function getAboutCompanyContent(locale: Locale): AboutCompanyContent {
  if (contentCache.has(locale)) {
    return contentCache.get(locale)!;
  }

  let localizedContent: Partial<AboutCompanyContent> = {};
  try {
    localizedContent = require(`../shared/about-company/locales/${locale}/content.json`);
  } catch {
    // Fall back to default if locale file missing
  }

  const defaultMetrics = defaultContent.hero.metrics;
  const localeMetrics = localizedContent.hero?.metrics;
  const metrics =
    localeMetrics?.length === defaultMetrics.length
      ? localeMetrics
      : defaultMetrics.map((def, i) => ({
          label: localeMetrics?.[i]?.label ?? def.label,
          value: localeMetrics?.[i]?.value ?? def.value,
          detail: localeMetrics?.[i]?.detail ?? def.detail,
        }));

  const merged: AboutCompanyContent = {
    hero: {
      ...defaultContent.hero,
      ...localizedContent.hero,
      metrics,
    },
  };

  contentCache.set(locale, merged);
  return merged;
}
