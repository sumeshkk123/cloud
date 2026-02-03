import defaultContentModule from "../shared/integrations/default-content.js";
const defaultContent = (defaultContentModule as any).default || defaultContentModule;
import type { Locale } from "@/i18n-config";

// Define the structure of integrations content
export interface IntegrationsContent {
  hero: {
    badgeText: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    metrics: {
      integrationPartners: { label: string; detail: string };
      connectorsAvailable: { label: string; detail: string };
      setupTime: { label: string; detail: string };
    };
    fallbackTitle: {
      highlightText: string;
      afterText: string;
    };
  };
  primarySection: {
    heading: string;
    description: string;
  };
  listSection: {
    badge: string;
    heading: string;
    description: string;
    noIntegrationsText: string;
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
}

const contentCache: Map<Locale, IntegrationsContent> = new Map();

export function getIntegrationsContent(locale: Locale): IntegrationsContent {
  if (contentCache.has(locale)) {
    return contentCache.get(locale)!;
  }

  let localizedContent: any = {};
  try {
    // Dynamically import the content for the requested locale
    localizedContent = require(`../shared/integrations/locales/${locale}/content.json`);
  } catch (error) {
    // If the locale-specific file doesn't exist, fall back to default
    console.warn(`[getIntegrationsContent] No content found for locale ${locale}. Falling back to default.`);
  }

  // Merge localized content with default content
  const mergedContent = {
    hero: {
      ...defaultContent.hero,
      ...localizedContent.hero,
      metrics: {
        ...defaultContent.hero.metrics,
        integrationPartners: {
          ...defaultContent.hero.metrics.integrationPartners,
          ...localizedContent.hero?.metrics?.integrationPartners,
        },
        connectorsAvailable: {
          ...defaultContent.hero.metrics.connectorsAvailable,
          ...localizedContent.hero?.metrics?.connectorsAvailable,
        },
        setupTime: {
          ...defaultContent.hero.metrics.setupTime,
          ...localizedContent.hero?.metrics?.setupTime,
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
    },
    listSection: {
      ...defaultContent.listSection,
      ...localizedContent.listSection,
    },
    ctaSection: {
      ...defaultContent.ctaSection,
      ...localizedContent.ctaSection,
      trustIndicators: {
        ...defaultContent.ctaSection?.trustIndicators,
        ...localizedContent.ctaSection?.trustIndicators,
      },
    },
  };

  contentCache.set(locale, mergedContent);
  return mergedContent;
}
