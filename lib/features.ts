import defaultContentModule from "../shared/features/default-content.js";
const defaultContent = (defaultContentModule as any).default || defaultContentModule;
import type { Locale } from "@/i18n-config";

export interface FeaturesContent {
  hero: {
    badgeText: string;
    primaryCta: string;
    secondaryCta: string;
    description: string;
    beforeText: string;
    highlightText: string;
    afterText: string;
    metrics: {
      modulesShipped: { label: string; detail: string };
      launchVelocity: { label: string; detail: string };
      aiCopilots: { label: string; detail: string };
    };
  };
}

const contentCache: Map<Locale, FeaturesContent> = new Map();

export function getFeaturesContent(locale: Locale): FeaturesContent {
  if (contentCache.has(locale)) {
    return contentCache.get(locale)!;
  }

  let localizedContent: any = {};
  try {
    localizedContent = require(`../shared/features/locales/${locale}/content.json`);
  } catch (error) {
    console.warn(`[getFeaturesContent] No content found for locale ${locale}. Falling back to default.`);
  }

  const mergedContent = {
    hero: {
      ...defaultContent.hero,
      ...localizedContent.hero,
      metrics: {
        ...defaultContent.hero.metrics,
        modulesShipped: {
          ...defaultContent.hero.metrics.modulesShipped,
          ...localizedContent.hero?.metrics?.modulesShipped,
        },
        launchVelocity: {
          ...defaultContent.hero.metrics.launchVelocity,
          ...localizedContent.hero?.metrics?.launchVelocity,
        },
        aiCopilots: {
          ...defaultContent.hero.metrics.aiCopilots,
          ...localizedContent.hero?.metrics?.aiCopilots,
        },
      },
      beforeText: defaultContent.hero.beforeText || localizedContent.hero?.beforeText || '',
      highlightText: defaultContent.hero.highlightText || localizedContent.hero?.highlightText || '',
      afterText: defaultContent.hero.afterText || localizedContent.hero?.afterText || '',
    },
  };

  contentCache.set(locale, mergedContent);
  return mergedContent;
}
