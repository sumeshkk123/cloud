import defaultContentModule from "../shared/testimonials/default-content.js";
const defaultContent = (defaultContentModule as any).default || defaultContentModule;
import type { Locale } from "@/i18n-config";

// Define the structure of your testimonials content
export interface TestimonialsContent {
  hero: {
    badgeText: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    metrics: {
      clientsServed: { label: string; detail: string };
      satisfactionRate: { label: string; detail: string };
      industriesCovered: { label: string; detail: string };
    };
    fallbackTitle: {
      highlightText: string;
      afterText: string;
    };
  };
  homeSection: {
    noTestimonials: string;
    infoBoxText: string;
    exploreButton: string;
    previousAriaLabel: string;
    nextAriaLabel: string;
  };
  listSection: {
    noTestimonials: string;
  };
  highlightsSection: {
    heading: string;
    description: string;
    highlights: Array<{
      title: string;
      detail: string;
    }>;
    noHighlights: string;
    snapshotLabel: string;
    averageRating: string;
    averageRatingLabel: string;
    industriesServed: string;
    industriesServedLabel: string;
    callToAction: string;
    ctaButton: string;
  };
}

const contentCache: Map<Locale, TestimonialsContent> = new Map();

export function getTestimonialsContent(locale: Locale): TestimonialsContent {
  if (contentCache.has(locale)) {
    return contentCache.get(locale)!;
  }

  let localizedContent: any = {};
  try {
    // Dynamically import the content for the requested locale
    localizedContent = require(`../shared/testimonials/locales/${locale}/content.json`);
  } catch (error) {
    // If the locale-specific file doesn't exist, fall back to default
    console.warn(`[getTestimonialsContent] No content found for locale ${locale}. Falling back to default.`);
  }

  // Merge localized content with default content
  // This ensures that any missing fields in the localized file are filled from the default
  const mergedContent = {
    hero: {
      ...defaultContent.hero,
      ...localizedContent.hero,
      metrics: {
        ...defaultContent.hero.metrics,
        clientsServed: {
          ...defaultContent.hero.metrics.clientsServed,
          ...localizedContent.hero?.metrics?.clientsServed,
        },
        satisfactionRate: {
          ...defaultContent.hero.metrics.satisfactionRate,
          ...localizedContent.hero?.metrics?.satisfactionRate,
        },
        industriesCovered: {
          ...defaultContent.hero.metrics.industriesCovered,
          ...localizedContent.hero?.metrics?.industriesCovered,
        },
      },
      fallbackTitle: {
        ...defaultContent.hero.fallbackTitle,
        ...localizedContent.hero?.fallbackTitle,
      },
    },
    homeSection: {
      ...defaultContent.homeSection,
      ...localizedContent.homeSection,
    },
    listSection: {
      ...defaultContent.listSection,
      ...localizedContent.listSection,
    },
    highlightsSection: {
      ...defaultContent.highlightsSection,
      ...localizedContent.highlightsSection,
      highlights: defaultContent.highlightsSection.highlights.map((defaultHighlight, index) => ({
        ...defaultHighlight,
        ...localizedContent.highlightsSection?.highlights?.[index],
      })),
    },
  };

  contentCache.set(locale, mergedContent);
  return mergedContent;
}
