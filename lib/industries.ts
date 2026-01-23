import defaultContentModule from "../shared/industries/default-content.js";
const defaultContent = (defaultContentModule as any).default || defaultContentModule;
import type { Locale } from "@/i18n-config";

// Define the structure of industries translations
export interface IndustriesContent {
  heroSection: {
    badgeText: string;
    fallbackTitle: {
      highlightText: string;
      afterText?: string;
    };
    description: string;
    primaryCta: string;
    secondaryCta: string;
    metrics: {
      discoveryLabs: { label: string; detail: string };
      advisoryCouncils: { label: string; detail: string };
      programmeOffices: { label: string; detail: string };
    };
  };
  listSection: {
    badge: string;
    heading: string;
    description: string;
    exploreButton: string;
    readMoreButton: string;
  };
}

const contentCache: Map<Locale, IndustriesContent> = new Map();

export function getIndustriesContent(locale: Locale): IndustriesContent {
  if (contentCache.has(locale)) {
    return contentCache.get(locale)!;
  }

  let localizedContent: any = {};
  try {
    // Dynamically import the content for the requested locale
    localizedContent = require(`../shared/industries/locales/${locale}/content.json`);
  } catch (error) {
    // If the locale-specific file doesn't exist, fall back to default
    console.warn(`[getIndustriesContent] No content found for locale ${locale}. Falling back to default.`);
  }

  // Merge localized content with default content
  const mergedContent = {
    heroSection: {
      ...defaultContent.heroSection,
      ...localizedContent.heroSection,
    },
    listSection: {
      ...defaultContent.listSection,
      ...localizedContent.listSection,
    },
  };

  contentCache.set(locale, mergedContent);
  return mergedContent;
}
