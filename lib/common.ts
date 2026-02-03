import defaultContentModule from "../shared/common/default-content.js";
const defaultContent = (defaultContentModule as any).default || defaultContentModule;
import type { Locale } from "@/i18n-config";

// Define the structure of common reusable translations
export interface CommonContent {
  buttons: {
    exploreMore: string;
    exploreDetails: string;
    readMore: string;
    learnMore: string;
  };
  labels: {
    keyBenefits: string;
    serviceHighlights: string;
  };
}

const contentCache: Map<Locale, CommonContent> = new Map();

export function getCommonContent(locale: Locale): CommonContent {
  if (contentCache.has(locale)) {
    return contentCache.get(locale)!;
  }

  let localizedContent: any = {};
  try {
    // Dynamically import the content for the requested locale
    localizedContent = require(`../shared/common/locales/${locale}/content.json`);
  } catch (error) {
    // If the locale-specific file doesn't exist, fall back to default
    console.warn(`[getCommonContent] No content found for locale ${locale}. Falling back to default.`);
  }

  // Merge localized content with default content
  const mergedContent = {
    buttons: {
      ...defaultContent.buttons,
      ...localizedContent.buttons,
    },
    labels: {
      ...defaultContent.labels,
      ...localizedContent.labels,
    },
  };

  contentCache.set(locale, mergedContent);
  return mergedContent;
}
