import defaultContentModule from "../shared/contact/default-content.js";
const defaultContent = (defaultContentModule as any).default || defaultContentModule;
import type { Locale } from "@/i18n-config";

// Define the structure of contact translations
export interface ContactContent {
  heroSection: {
    badgeText: string;
    fallbackTitle: {
      beforeText: string;
      highlightText: string;
      afterText: string;
    };
    description: string;
    primaryCta: string;
    secondaryCta: string;
    metrics: {
      averageResponse: { label: string; value: string; detail: string };
      dedicatedExperts: { label: string; value: string; detail: string };
      customerSatisfaction: { label: string; value: string; detail: string };
      copilotAssistance: { label: string; value: string; detail: string };
    };
  };
  channelsSection: {
    heading: string;
    description: string;
    noAddressesMessage: string;
  };
  tabsSection: {
    addressTab: string;
    faqTab: string;
    noAddressesMessage: string;
    noFaqsMessage: string;
  };
  faqSection: {
    badge?: string;
    heading: string;
    description: string;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
  };
  businessInfoSection: {
    badge: string;
    heading: string;
    description: string;
    workingHours: { label: string; value: string; detail: string };
    timeZones: { label: string; value: string; detail: string };
    responseTime: { label: string; value: string; detail: string };
    supportTeam: { label: string; value: string; detail: string };
    emailSupport: { label: string; value: string; detail: string };
    phoneSupport: { label: string; value: string; detail: string };
  };
}

const contentCache: Map<Locale, ContactContent> = new Map();

export function getContactContent(locale: Locale): ContactContent {
  if (contentCache.has(locale)) {
    return contentCache.get(locale)!;
  }

  let localizedContent: any = {};
  try {
    // Dynamically import the content for the requested locale
    localizedContent = require(`../shared/contact/locales/${locale}/content.json`);
  } catch (error) {
    // If the locale-specific file doesn't exist, fall back to default
    console.warn(`[getContactContent] No content found for locale ${locale}. Falling back to default.`);
  }

  // Merge localized content with default content
  const mergedContent = {
    heroSection: {
      ...defaultContent.heroSection,
      ...localizedContent.heroSection,
      metrics: {
        ...defaultContent.heroSection.metrics,
        ...localizedContent.heroSection?.metrics,
      },
      fallbackTitle: {
        ...defaultContent.heroSection.fallbackTitle,
        ...localizedContent.heroSection?.fallbackTitle,
      },
    },
    channelsSection: {
      ...defaultContent.channelsSection,
      ...localizedContent.channelsSection,
    },
    tabsSection: {
      ...defaultContent.tabsSection,
      ...localizedContent.tabsSection,
    },
    faqSection: {
      ...defaultContent.faqSection,
      ...localizedContent.faqSection,
      faqs: localizedContent.faqSection?.faqs || defaultContent.faqSection.faqs,
    },
    businessInfoSection: {
      ...defaultContent.businessInfoSection,
      ...localizedContent.businessInfoSection,
    },
  };

  contentCache.set(locale, mergedContent);
  return mergedContent;
}
