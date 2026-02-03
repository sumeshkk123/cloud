import defaultContentModule from "../shared/changelog/default-content.js";
const defaultContent = (defaultContentModule as any).default || defaultContentModule;
import type { Locale } from "@/i18n-config";

// Define the structure of changelog content
export interface ChangelogContent {
  hero: {
    badgeText: string;
    fallbackTitle: {
      highlightText: string;
      afterText: string;
    };
    metrics: {
      yearsOfIteration: { label: string; value: string; detail: string };
      majorReleases: { label: string; value: string; detail: string };
      automationCoverage: { label: string; value: string; detail: string };
    };
    primaryCta: string;
    secondaryCta: string;
  };
  listSection: {
    badge: string;
    heading: string;
    description: string;
    keyFeatures: string;
    noEntries: string;
  };
  ctaSection: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
}

const contentCache: Map<Locale, ChangelogContent> = new Map();

export function getChangelogContent(locale: Locale): ChangelogContent {
  if (contentCache.has(locale)) {
    return contentCache.get(locale)!;
  }

  let localizedContent: any = {};
  try {
    // Dynamically import the content for the requested locale
    localizedContent = require(`../shared/changelog/locales/${locale}/content.json`);
  } catch (error) {
    // If the locale-specific file doesn't exist, fall back to default
    console.warn(`[getChangelogContent] No content found for locale ${locale}. Falling back to default.`);
  }

  // Merge localized content with default content
  const mergedContent = {
    hero: {
      ...defaultContent.hero,
      ...localizedContent.hero,
      fallbackTitle: {
        ...defaultContent.hero.fallbackTitle,
        ...localizedContent.hero?.fallbackTitle,
      },
      metrics: {
        ...defaultContent.hero.metrics,
        yearsOfIteration: {
          ...defaultContent.hero.metrics.yearsOfIteration,
          ...localizedContent.hero?.metrics?.yearsOfIteration,
        },
        majorReleases: {
          ...defaultContent.hero.metrics.majorReleases,
          ...localizedContent.hero?.metrics?.majorReleases,
        },
        automationCoverage: {
          ...defaultContent.hero.metrics.automationCoverage,
          ...localizedContent.hero?.metrics?.automationCoverage,
        },
      },
    },
    listSection: {
      ...defaultContent.listSection,
      ...localizedContent.listSection,
    },
    ctaSection: {
      ...defaultContent.ctaSection,
      ...localizedContent.ctaSection,
    },
  };

  contentCache.set(locale, mergedContent);
  return mergedContent;
}
