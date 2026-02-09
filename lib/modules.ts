import defaultContentModule from "../shared/modules/default-content.js";
const defaultContent = (defaultContentModule as any).default || defaultContentModule;
import type { Locale } from "@/i18n-config";

// Define the structure of your modules content
export interface ModulesContent {
  hero: {
    badgeText: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    metrics: {
      configurableModules: { label: string; detail: string };
      integrationPartners: { label: string; detail: string };
      marketsServed: { label: string; detail: string };
    };
    fallbackTitle: {
      highlightText: string;
      afterText: string;
    };
  };
  primarySection: {
    heading: string;
    description: string;
    modules: Array<{
      title: string;
      description: string;
      bullets: string[];
    }>;
  };
  ctaSection: {
    title: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
    trustIndicators: {
      quickImplementation: string;
      expertConsultation: string;
      provenResults: string;
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
  listSection: {
    badge: string;
    heading: string;
    description: string;
    noModulesText: string;
    exploreMore: string;
  };
  homeSection: {
    sandboxText: string;
    sandboxHours: string;
    exploreAllModules: string;
    noModulesText: string;
  };
}

const contentCache: Map<Locale, ModulesContent> = new Map();

export function getModulesContent(locale: Locale): ModulesContent {
  if (contentCache.has(locale)) {
    return contentCache.get(locale)!;
  }

  let localizedContent: any = {};
  try {
    // Dynamically import the content for the requested locale
    localizedContent = require(`../shared/modules/locales/${locale}/content.json`);
  } catch (error) {
    // If the locale-specific file doesn't exist, fall back to default
    console.warn(`[getModulesContent] No content found for locale ${locale}. Falling back to default.`);
  }

  // Merge localized content with default content
  // This ensures that any missing fields in the localized file are filled from the default
  const mergedContent = {
    hero: {
      ...defaultContent.hero,
      ...localizedContent.hero,
      metrics: {
        ...defaultContent.hero.metrics,
        configurableModules: {
          ...defaultContent.hero.metrics.configurableModules,
          ...localizedContent.hero?.metrics?.configurableModules,
        },
        integrationPartners: {
          ...defaultContent.hero.metrics.integrationPartners,
          ...localizedContent.hero?.metrics?.integrationPartners,
        },
        marketsServed: {
          ...defaultContent.hero.metrics.marketsServed,
          ...localizedContent.hero?.metrics?.marketsServed,
        },
      },
      fallbackTitle: {
        ...defaultContent.hero.fallbackTitle,
        ...localizedContent.hero?.fallbackTitle,
      },
    },
    primarySection: {
      ...defaultContent.primarySection,
      ...localizedContent.primarySection,
      modules: defaultContent.primarySection.modules.map((defaultModule: { bullets?: string[] }, index: number) => ({
        ...defaultModule,
        ...localizedContent.primarySection?.modules?.[index],
        bullets: localizedContent.primarySection?.modules?.[index]?.bullets || defaultModule.bullets,
      })),
    },
    ctaSection: {
      ...defaultContent.ctaSection,
      ...localizedContent.ctaSection,
      trustIndicators: {
        ...defaultContent.ctaSection?.trustIndicators,
        ...localizedContent.ctaSection?.trustIndicators,
      },
    },
    faqSection: {
      ...defaultContent.faqSection,
      ...localizedContent.faqSection,
    },
    listSection: {
      ...defaultContent.listSection,
      ...localizedContent.listSection,
    },
    homeSection: {
      ...defaultContent.homeSection,
      ...localizedContent.homeSection,
    },
  };

  contentCache.set(locale, mergedContent);
  return mergedContent;
}
