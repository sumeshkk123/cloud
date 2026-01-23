import defaultContentModule from "../shared/services/default-content.js";
const defaultContent = (defaultContentModule as any).default || defaultContentModule;
import type { Locale } from "@/i18n-config";

// Define the structure of services translations
export interface ServicesContent {
  ctaSection: {
    title: string;
    description: string;
    scheduleButton: string;
    caseStudiesButton: string;
    quickImplementation: string;
    expertConsultation: string;
    provenResults: string;
  };
}

const contentCache: Map<Locale, ServicesContent> = new Map();

export function getServicesContent(locale: Locale): ServicesContent {
  if (contentCache.has(locale)) {
    return contentCache.get(locale)!;
  }

  let localizedContent: any = {};
  try {
    // Dynamically import the content for the requested locale
    localizedContent = require(`../shared/services/locales/${locale}/content.json`);
  } catch (error) {
    // If the locale-specific file doesn't exist, fall back to default
    console.warn(`[getServicesContent] No content found for locale ${locale}. Falling back to default.`);
  }

  // Merge localized content with default content
  const mergedContent = {
    ctaSection: {
      ...defaultContent.ctaSection,
      ...localizedContent.ctaSection,
    },
  };

  contentCache.set(locale, mergedContent);
  return mergedContent;
}
