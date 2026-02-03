import defaultContentModule from "../shared/ai-copilot/default-content.js";
const defaultContent = (defaultContentModule as any).default || defaultContentModule;
import type { Locale } from "@/i18n-config";

// Define the structure of your AI Copilot content
export interface AICopilotContent {
  hero: {
    badgeText: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    metrics: {
      aiFeatures: { label: string; detail: string };
      implementationSpeed: { label: string; detail: string };
      globalSupport: { label: string; detail: string };
    };
    fallbackTitle: {
      highlightText: string;
      afterText: string;
    };
  };
  listSection: {
    badge: string;
    heading: string;
    description: string;
    noCopilotsText: string;
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

const contentCache: Map<Locale, AICopilotContent> = new Map();

export function getAICopilotContent(locale: Locale): AICopilotContent {
  if (contentCache.has(locale)) {
    return contentCache.get(locale)!;
  }

  let localizedContent: any = {};
  try {
    // Dynamically import the content for the requested locale
    localizedContent = require(`../shared/ai-copilot/locales/${locale}/content.json`);
  } catch (error) {
    // If the locale-specific file doesn't exist, fall back to default
    console.warn(`[getAICopilotContent] No content found for locale ${locale}. Falling back to default.`);
  }

  // Merge localized content with default content
  const mergedContent = {
    hero: {
      ...defaultContent.hero,
      ...localizedContent.hero,
      metrics: {
        ...defaultContent.hero.metrics,
        aiFeatures: {
          ...defaultContent.hero.metrics.aiFeatures,
          ...localizedContent.hero?.metrics?.aiFeatures,
        },
        implementationSpeed: {
          ...defaultContent.hero.metrics.implementationSpeed,
          ...localizedContent.hero?.metrics?.implementationSpeed,
        },
        globalSupport: {
          ...defaultContent.hero.metrics.globalSupport,
          ...localizedContent.hero?.metrics?.globalSupport,
        },
      },
      fallbackTitle: {
        ...defaultContent.hero.fallbackTitle,
        ...localizedContent.hero?.fallbackTitle,
      },
    },
    listSection: {
      ...defaultContent.listSection,
      ...localizedContent.listSection,
    },
    ctaSection: {
      ...defaultContent.ctaSection,
      ...localizedContent.ctaSection,
      trustIndicators: {
        ...defaultContent.ctaSection.trustIndicators,
        ...localizedContent.ctaSection?.trustIndicators,
      },
    },
  };

  contentCache.set(locale, mergedContent);
  return mergedContent;
}
