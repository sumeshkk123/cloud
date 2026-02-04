import defaultContentModule from "../shared/privacy/default-content.js";
import type { Locale } from "@/i18n-config";

const defaultContent =
  (defaultContentModule as { default?: PrivacyContent }).default ?? (defaultContentModule as PrivacyContent);

export interface PrivacyContent {
  title: string;
  intro: {
    heading: string;
    companyName: string;
    address: string;
    overview: string;
    termsNote: string;
  };
  websiteVisitors: {
    heading: string;
    paragraph1: string;
    paragraph2: string;
  };
  gatheringInfo: {
    heading: string;
    paragraph: string;
  };
  security: {
    heading: string;
    paragraph: string;
  };
  advertisements: {
    heading: string;
    paragraph: string;
  };
  externalLinks: {
    heading: string;
    paragraph: string;
  };
  protection: {
    heading: string;
    paragraph1: string;
    paragraph2: string;
  };
  aggregatedStats: {
    heading: string;
    paragraph: string;
  };
  affiliateDisclosure: {
    heading: string;
    paragraph: string;
  };
  cookies: {
    heading: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  ecommerce: {
    heading: string;
    paragraph: string;
  };
  businessTransfers: {
    heading: string;
    paragraph: string;
  };
  policyChanges: {
    heading: string;
    paragraph: string;
  };
}

const contentCache = new Map<Locale, PrivacyContent>();

export function getPrivacyContent(locale: Locale): PrivacyContent {
  if (contentCache.has(locale)) {
    return contentCache.get(locale)!;
  }

  let localizedContent: Partial<PrivacyContent> = {};
  try {
    localizedContent = require(`../shared/privacy/locales/${locale}/content.json`);
  } catch {
    // Fallback to English if locale file doesn't exist
    if (locale !== "en") {
      try {
        localizedContent = require(`../shared/privacy/locales/en/content.json`);
      } catch {
        // Use default content if no locale file exists
      }
    }
  }

  const merged: PrivacyContent = {
    ...defaultContent,
    ...localizedContent,
    intro: { ...defaultContent.intro, ...localizedContent.intro },
    websiteVisitors: { ...defaultContent.websiteVisitors, ...localizedContent.websiteVisitors },
    gatheringInfo: { ...defaultContent.gatheringInfo, ...localizedContent.gatheringInfo },
    security: { ...defaultContent.security, ...localizedContent.security },
    advertisements: { ...defaultContent.advertisements, ...localizedContent.advertisements },
    externalLinks: { ...defaultContent.externalLinks, ...localizedContent.externalLinks },
    protection: { ...defaultContent.protection, ...localizedContent.protection },
    aggregatedStats: { ...defaultContent.aggregatedStats, ...localizedContent.aggregatedStats },
    affiliateDisclosure: { ...defaultContent.affiliateDisclosure, ...localizedContent.affiliateDisclosure },
    cookies: { ...defaultContent.cookies, ...localizedContent.cookies },
    ecommerce: { ...defaultContent.ecommerce, ...localizedContent.ecommerce },
    businessTransfers: { ...defaultContent.businessTransfers, ...localizedContent.businessTransfers },
    policyChanges: { ...defaultContent.policyChanges, ...localizedContent.policyChanges },
  };

  contentCache.set(locale, merged);
  return merged;
}
