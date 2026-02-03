import defaultContentFeatures from "../shared/features/default-content.js";
const defaultContent = (defaultContentFeatures as any).default || defaultContentFeatures;
import type { Locale } from "@/i18n-config";
import contentEn from "../shared/features/locales/en/content.json";
import contentEs from "../shared/features/locales/es/content.json";
import contentIt from "../shared/features/locales/it/content.json";
import contentDe from "../shared/features/locales/de/content.json";
import contentPt from "../shared/features/locales/pt/content.json";
import contentZh from "../shared/features/locales/zh/content.json";

const localeContent: Record<Locale, any> = {
  en: contentEn,
  es: contentEs,
  it: contentIt,
  de: contentDe,
  pt: contentPt,
  zh: contentZh,
};

// Define the structure of features content
export interface FeaturesContent {
  hero: {
    badgeText: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    beforeText: string;
    highlightText: string;
    afterText: string;
    metrics: {
      modulesShipped: {
        label: string;
        detail: string;
      };
      launchVelocity: {
        label: string;
        detail: string;
      };
      aiCopilots: {
        label: string;
        detail: string;
      };
    };
  };
  categories: {
    [key: string]: {
      badge: string;
      heading: string;
      description: string;
      columns: string;
    };
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
  common: {
    loadingText: string;
    learnMore: string;
  };
  faq?: {
    badge: string;
    heading: string;
    description: string;
    loadingText: string;
    emptyText: string;
  };
  cta?: {
    title: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    trust: {
      quickImplementation: string;
      expertConsultation: string;
      provenResults: string;
    };
  };
}

const contentCache: Map<Locale, FeaturesContent> = new Map();

export function getFeaturesContent(locale: Locale): FeaturesContent {
  if (contentCache.has(locale)) {
    return contentCache.get(locale)!;
  }

  const localizedContent: any = localeContent[locale] ?? {};

  // Ensure defaultContent has all required properties
  const safeDefaultContent = {
    hero: defaultContent.hero || {
      badgeText: "Platform overview",
      primaryCta: "Request a platform walkthrough",
      secondaryCta: "Explore the live demo",
      description: "Cloud MLM Software unifies compensation, commerce, enablement, compliance, and AI copilots so every team—from executives to distributors—works from the same truth.",
      beforeText: "Build, automate, and scale",
      highlightText: "modern direct selling",
      afterText: "experiences from one platform.",
      metrics: {
        modulesShipped: {
          label: "Modules shipped",
          detail: "Compensation, commerce, analytics, and enablement out of the box."
        },
        launchVelocity: {
          label: "Launch velocity",
          detail: "Average time from blueprint to production go-live."
        },
        aiCopilots: {
          label: "AI copilots in production",
          detail: "Copilots now brief leadership, field, and success teams."
        }
      }
    },
    categories: defaultContent.categories || {},
    navigation: defaultContent.navigation || [],
    common: defaultContent.common || {
      loadingText: "Loading features...",
      learnMore: "Learn more"
    },
    faq: defaultContent.faq || {
      badge: "FAQs",
      heading: "Frequently asked questions",
      description:
        "Answers to the most common questions from evaluating teams, finance leaders, and field organisations considering Cloud MLM Software.",
      loadingText: "Loading FAQs...",
      emptyText: "No FAQs available at the moment."
    },
    cta: defaultContent.cta || {
      title: "See Cloud MLM Software in action",
      description:
        "Share your objectives and we'll craft a tailored demo—covering modules, integrations, automations, and copilots ready for your brand.",
      primaryButtonText: "Plan a strategy session",
      secondaryButtonText: "Explore the live platform",
      trust: {
        quickImplementation: "Quick implementation",
        expertConsultation: "Expert consultation",
        provenResults: "Proven results"
      }
    }
  };

  // Merge localized content with default content
  const mergedContent: FeaturesContent = {
    hero: {
      ...safeDefaultContent.hero,
      ...localizedContent.hero,
      metrics: {
        ...safeDefaultContent.hero.metrics,
        ...localizedContent.hero?.metrics,
        modulesShipped: {
          ...safeDefaultContent.hero.metrics.modulesShipped,
          ...localizedContent.hero?.metrics?.modulesShipped,
        },
        launchVelocity: {
          ...safeDefaultContent.hero.metrics.launchVelocity,
          ...localizedContent.hero?.metrics?.launchVelocity,
        },
        aiCopilots: {
          ...safeDefaultContent.hero.metrics.aiCopilots,
          ...localizedContent.hero?.metrics?.aiCopilots,
        },
      },
    },
    categories: {
      ...safeDefaultContent.categories,
      ...localizedContent.categories,
    },
    navigation: localizedContent.navigation || safeDefaultContent.navigation || [],
    common: {
      ...safeDefaultContent.common,
      ...localizedContent.common,
    },
    faq: {
      ...safeDefaultContent.faq,
      ...localizedContent.faq,
    },
    cta: {
      ...safeDefaultContent.cta,
      ...localizedContent.cta,
      trust: {
        ...(safeDefaultContent.cta?.trust || {}),
        ...(localizedContent.cta?.trust || {}),
      },
    },
  };

  contentCache.set(locale, mergedContent);
  return mergedContent;
}
