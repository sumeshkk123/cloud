import defaultContentPlans from "../shared/plans/default-content.js";
const defaultContent = (defaultContentPlans as any).default || defaultContentPlans;
import type { Locale } from "@/i18n-config";

// Define the structure of your plans content
export interface PlansContent {
  hero: {
    badgeText: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    metrics: {
      planTemplates: { label: string; detail: string };
      simulations: { label: string; detail: string };
      regulatedMarkets: { label: string; detail: string };
    };
    fallbackTitle: {
      highlightText: string;
      afterText: string;
    };
  };
  faqSection: {
    badge: string;
    heading: string;
    description: string;
    loadingText: string;
    noFaqsText: string;
    infoBoxText: string;
    infoBoxButtonText: string;
  };
}

const contentCache: Map<Locale, PlansContent> = new Map();

export function getPlansContent(locale: Locale): PlansContent {
  if (contentCache.has(locale)) {
    return contentCache.get(locale)!;
  }

  let localizedContent: any = {};
  try {
    // Dynamically import the content for the requested locale
    localizedContent = require(`../shared/plans/locales/${locale}/content.json`);
  } catch (error) {
    // If the locale-specific file doesn't exist, fall back to default
    console.warn(`[getPlansContent] No content found for locale ${locale}. Falling back to default.`);
  }

  // Merge localized content with default content
  const mergedContent = {
    hero: {
      ...defaultContent.hero,
      ...localizedContent.hero,
      metrics: {
        ...defaultContent.hero.metrics,
        planTemplates: {
          ...defaultContent.hero.metrics.planTemplates,
          ...localizedContent.hero?.metrics?.planTemplates,
        },
        simulations: {
          ...defaultContent.hero.metrics.simulations,
          ...localizedContent.hero?.metrics?.simulations,
        },
        regulatedMarkets: {
          ...defaultContent.hero.metrics.regulatedMarkets,
          ...localizedContent.hero?.metrics?.regulatedMarkets,
        },
      },
      fallbackTitle: {
        ...defaultContent.hero.fallbackTitle,
        ...localizedContent.hero?.fallbackTitle,
      },
    },
    faqSection: {
      ...defaultContent.faqSection,
      ...localizedContent.faqSection,
    },
  };

  contentCache.set(locale, mergedContent);
  return mergedContent;
}
