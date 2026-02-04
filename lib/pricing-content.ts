import defaultContentModule from "../shared/pricing/default-content.js";
import type { Locale } from "@/i18n-config";

const defaultContent =
  (defaultContentModule as { default?: PricingContent }).default ?? (defaultContentModule as PricingContent);

export interface PricingContent {
  hero: {
    badgeText: string;
    highlightText: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    advisorNote: string;
    engagementIncludesLabel: string;
  };
  valueProofs: {
    badge: string;
    heading: string;
    description: string;
    items: Array<{
      title: string;
      detail: string;
      iconKey: string;
    }>;
  };
  plans: {
    heading: string;
    description: string;
    outcomeLabel: string;
  };
  matrix: {
    heading: string;
    description: string;
    columns: {
      deliverable: string;
      launchLab: string;
      growthEngine: string;
      enterpriseBlueprint: string;
    };
  };
  estimator: {
    heading: string;
    description: string;
  };
  timeline: {
    heading: string;
    description: string;
    cta: {
      heading: string;
      description: string;
      buttonText: string;
    };
  };
  faq: {
    badge: string;
    heading: string;
    description: string;
  };
}

const contentCache = new Map<Locale, PricingContent>();

export function getPricingContent(locale: Locale): PricingContent {
  if (contentCache.has(locale)) {
    return contentCache.get(locale)!;
  }

  let localizedContent: Partial<PricingContent> = {};
  try {
    localizedContent = require(`../shared/pricing/locales/${locale}/content.json`);
  } catch {
    // Fallback to English if locale file doesn't exist
    if (locale !== "en") {
      try {
        localizedContent = require(`../shared/pricing/locales/en/content.json`);
      } catch {
        // Use default content if no locale file exists
      }
    }
  }

  const merged: PricingContent = {
    ...defaultContent,
    ...localizedContent,
    hero: { ...defaultContent.hero, ...localizedContent.hero },
    valueProofs: { ...defaultContent.valueProofs, ...localizedContent.valueProofs },
    plans: { ...defaultContent.plans, ...localizedContent.plans },
    matrix: { ...defaultContent.matrix, ...localizedContent.matrix },
    estimator: { ...defaultContent.estimator, ...localizedContent.estimator },
    timeline: { ...defaultContent.timeline, ...localizedContent.timeline },
    faq: { ...defaultContent.faq, ...localizedContent.faq },
  };

  contentCache.set(locale, merged);
  return merged;
}
