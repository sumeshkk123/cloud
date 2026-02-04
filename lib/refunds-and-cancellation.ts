import defaultContentModule from "../shared/refunds-and-cancellation/default-content.js";
import type { Locale } from "@/i18n-config";

const defaultContent =
  (defaultContentModule as { default?: RefundsAndCancellationContent }).default ?? (defaultContentModule as RefundsAndCancellationContent);

export interface RefundsAndCancellationContent {
  title: string;
  intro: {
    heading: string;
    paragraph1: string;
    paragraph2: string;
  };
  guarantee: {
    heading: string;
    paragraph: string;
    conditions: string[];
  };
  procedure: {
    heading: string;
    subheading: string;
    requirements: string[];
    note: string;
    followUp: string;
  };
}

const contentCache = new Map<Locale, RefundsAndCancellationContent>();

export function getRefundsAndCancellationContent(locale: Locale): RefundsAndCancellationContent {
  if (contentCache.has(locale)) {
    return contentCache.get(locale)!;
  }

  let localizedContent: Partial<RefundsAndCancellationContent> = {};
  try {
    localizedContent = require(`../shared/refunds-and-cancellation/locales/${locale}/content.json`);
  } catch {
    // Fallback to English if locale file doesn't exist
    if (locale !== "en") {
      try {
        localizedContent = require(`../shared/refunds-and-cancellation/locales/en/content.json`);
      } catch {
        // Use default content if no locale file exists
      }
    }
  }

  const merged: RefundsAndCancellationContent = {
    ...defaultContent,
    ...localizedContent,
    intro: { ...defaultContent.intro, ...localizedContent.intro },
    guarantee: { ...defaultContent.guarantee, ...localizedContent.guarantee },
    procedure: { ...defaultContent.procedure, ...localizedContent.procedure },
  };

  contentCache.set(locale, merged);
  return merged;
}
