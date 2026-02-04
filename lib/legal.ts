import defaultContentModule from "../shared/legal/default-content.js";
import type { Locale } from "@/i18n-config";

const defaultContent =
  (defaultContentModule as { default?: LegalContent }).default ?? (defaultContentModule as LegalContent);

export interface LegalContent {
  title: string;
  intro: {
    heading: string;
    companyName: string;
    address: string;
    acceptance: string;
    terminology: string;
  };
  cookies: {
    heading: string;
    paragraph: string;
    details: string;
  };
  license: {
    heading: string;
    paragraph: string;
    restrictions: {
      heading: string;
      items: string[];
    };
  };
  userComments: {
    heading: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    warranties: {
      heading: string;
      items: string[];
    };
  };
  hyperlinking: {
    heading: string;
    approvedOrganizations: {
      heading: string;
      items: string[];
      conditions: string;
    };
    consideration: {
      heading: string;
      items: string[];
      paragraph: string;
      paragraph2: string;
      contact: string;
    };
    approvedMethods: {
      heading: string;
      items: string[];
      note: string;
    };
  };
  iframes: {
    heading: string;
    paragraph: string;
  };
  reservationOfRights: {
    heading: string;
    paragraph: string;
  };
  removalOfLinks: {
    heading: string;
    paragraph: string;
  };
  contentLiability: {
    heading: string;
    paragraph: string;
  };
  unauthenticatedAccess: {
    heading: string;
    paragraph: string;
  };
  disclaimer: {
    heading: string;
    paragraph: string;
    exclusions: string[];
    paragraph2: string;
    paragraph3: string;
  };
}

const contentCache = new Map<Locale, LegalContent>();

export function getLegalContent(locale: Locale): LegalContent {
  if (contentCache.has(locale)) {
    return contentCache.get(locale)!;
  }

  let localizedContent: Partial<LegalContent> = {};
  try {
    localizedContent = require(`../shared/legal/locales/${locale}/content.json`);
  } catch {
    // Fallback to English if locale file doesn't exist
    if (locale !== "en") {
      try {
        localizedContent = require(`../shared/legal/locales/en/content.json`);
      } catch {
        // Use default content if no locale file exists
      }
    }
  }

  const merged: LegalContent = {
    ...defaultContent,
    ...localizedContent,
    intro: { ...defaultContent.intro, ...localizedContent.intro },
    cookies: { ...defaultContent.cookies, ...localizedContent.cookies },
    license: { ...defaultContent.license, ...localizedContent.license },
    userComments: { ...defaultContent.userComments, ...localizedContent.userComments },
    hyperlinking: { ...defaultContent.hyperlinking, ...localizedContent.hyperlinking },
    iframes: { ...defaultContent.iframes, ...localizedContent.iframes },
    reservationOfRights: { ...defaultContent.reservationOfRights, ...localizedContent.reservationOfRights },
    removalOfLinks: { ...defaultContent.removalOfLinks, ...localizedContent.removalOfLinks },
    contentLiability: { ...defaultContent.contentLiability, ...localizedContent.contentLiability },
    unauthenticatedAccess: { ...defaultContent.unauthenticatedAccess, ...localizedContent.unauthenticatedAccess },
    disclaimer: { ...defaultContent.disclaimer, ...localizedContent.disclaimer },
  };

  contentCache.set(locale, merged);
  return merged;
}
