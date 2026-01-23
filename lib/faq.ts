import defaultContentModule from "../shared/faq/default-content.js";
const defaultContent = (defaultContentModule as any).default || defaultContentModule;
import type { Locale } from "@/i18n-config";

// Define the structure of your FAQ content
export interface FaqContent {
  hero: {
    badgeText: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    metrics: {
      faqsAnswered: { label: string; detail: string };
      responseTime: { label: string; detail: string };
      languagesSupported: { label: string; detail: string };
    };
    fallbackTitle: {
      highlightText: string;
      afterText: string;
    };
  };
  // Add other FAQ sections here if they exist
}

const contentCache: Map<Locale, FaqContent> = new Map();

export function getFaqContent(locale: Locale): FaqContent {
  if (contentCache.has(locale)) {
    return contentCache.get(locale)!;
  }

  let localizedContent: any = {};
  try {
    // Dynamically import the content for the requested locale
    localizedContent = require(`../shared/faq/locales/${locale}/content.json`);
  } catch (error) {
    // If the locale-specific file doesn't exist, fall back to default
    console.warn(`[getFaqContent] No content found for locale ${locale}. Falling back to default.`);
  }

  // Merge localized content with default content
  // This ensures that any missing fields in the localized file are filled from the default
  const mergedContent = {
    hero: {
      ...defaultContent.hero,
      ...localizedContent.hero,
      metrics: {
        ...defaultContent.hero.metrics,
        faqsAnswered: {
          ...defaultContent.hero.metrics.faqsAnswered,
          ...localizedContent.hero?.metrics?.faqsAnswered,
        },
        responseTime: {
          ...defaultContent.hero.metrics.responseTime,
          ...localizedContent.hero?.metrics?.responseTime,
        },
        languagesSupported: {
          ...defaultContent.hero.metrics.languagesSupported,
          ...localizedContent.hero?.metrics?.languagesSupported,
        },
      },
      fallbackTitle: {
        ...defaultContent.hero.fallbackTitle,
        ...localizedContent.hero?.fallbackTitle,
      },
    },
  };

  contentCache.set(locale, mergedContent);
  return mergedContent;
}
