import defaultContentHomeFeatures from "../shared/home-features/default-content.js";
import type { Locale } from "@/i18n-config";

export interface HomeFeaturesContent {
  section: {
    badge: string;
    heading: string;
    description: string;
  };
  trustCard: {
    text: string;
    buttonText: string;
  };
  common: {
    exploreMore: string;
    emptyState: string;
  };
}

const defaultContent =
  (defaultContentHomeFeatures as any).default || defaultContentHomeFeatures;

const contentCache: Map<Locale, HomeFeaturesContent> = new Map();

export function getHomeFeaturesContent(locale: Locale): HomeFeaturesContent {
  if (contentCache.has(locale)) {
    return contentCache.get(locale)!;
  }

  let localizedContent: Partial<HomeFeaturesContent> = {};
  try {
    localizedContent = require(`../shared/home-features/locales/${locale}/content.json`);
  } catch (error) {
    console.warn(
      `[getHomeFeaturesContent] No content found for locale ${locale}. Falling back to default.`
    );
  }

  const merged: HomeFeaturesContent = {
    section: {
      ...defaultContent.section,
      ...localizedContent.section,
    },
    trustCard: {
      ...defaultContent.trustCard,
      ...localizedContent.trustCard,
    },
    common: {
      ...defaultContent.common,
      ...localizedContent.common,
    },
  };

  contentCache.set(locale, merged);
  return merged;
}

