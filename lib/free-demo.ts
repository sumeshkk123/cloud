import defaultFreeDemoContent from "../shared/free-demo/default-content.js";
import type { Locale } from "@/i18n-config";

export interface FreeDemoContent {
  heroSection: {
    badgeText: string;
    fallbackTitle: string;
    fallbackDescription: string;
    primaryCta: string;
    secondaryCta: string;
    includedValue: string;
    metrics: {
      tailoredSandbox: { label: string; value: string; detail: string };
      guidedWalkthroughs: { label: string; value: string; detail: string };
      accessWindow: { label: string; value: string; detail: string };
      securityBriefing: { label: string; value: string; detail: string };
    };
  };
  planDemosSection: {
    adminViewpoint: string;
    distributorViewpoint: string;
    exploreDemo: string;
    bookYourDemo: string;
    /** Form title for the Book Your Demo modal (distinct from contact/home "GET IN TOUCH" / "Drop Us a Line.") */
    formBadge: string;
    formHeading: string;
    formHeadingHighlight: string;
  };
  faqSection: {
    badge: string;
    heading: string;
    description: string;
    noFaqsText: string;
  };
}

const defaultContent = (defaultFreeDemoContent as any).default || defaultFreeDemoContent;
const contentCache: Map<Locale, FreeDemoContent> = new Map();

export function getFreeDemoContent(locale: Locale): FreeDemoContent {
  if (contentCache.has(locale)) {
    return contentCache.get(locale)!;
  }

  let localizedContent: Partial<FreeDemoContent> = {};
  try {
    localizedContent = require(`../shared/free-demo/locales/${locale}/content.json`);
  } catch (error) {
    console.warn(`[getFreeDemoContent] No content found for locale ${locale}. Falling back to default.`);
  }

  const merged: FreeDemoContent = {
    heroSection: {
      ...defaultContent.heroSection,
      ...(localizedContent as any).heroSection,
      metrics: {
        ...defaultContent.heroSection.metrics,
        ...((localizedContent as any).heroSection?.metrics ?? {}),
      },
    },
    planDemosSection: {
      ...defaultContent.planDemosSection,
      ...(localizedContent as any).planDemosSection,
    },
    faqSection: {
      ...defaultContent.faqSection,
      ...(localizedContent as any).faqSection,
    },
  };

  contentCache.set(locale, merged);
  return merged;
}

