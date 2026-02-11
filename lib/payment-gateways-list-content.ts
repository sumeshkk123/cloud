import type { Locale } from "@/i18n-config";

const defaultContentModule = require("../shared/countries-availability/payment-gateways-list/default-content.js");
const defaultContent = defaultContentModule.default ?? defaultContentModule;

export type PaymentGatewaysListContent = typeof defaultContent;

const cache = new Map<string, PaymentGatewaysListContent>();

export function getPaymentGatewaysListContent(locale: Locale): PaymentGatewaysListContent {
  if (cache.has(locale)) {
    return cache.get(locale)!;
  }
  let localized: Partial<PaymentGatewaysListContent> = {};
  try {
    localized = require(`../shared/countries-availability/payment-gateways-list/locales/${locale}/content.json`);
  } catch {
    // use default only
  }

  const result: PaymentGatewaysListContent = {
    hero: {
      badgeText: (localized.hero?.badgeText as string) ?? defaultContent.hero.badgeText,
      highlightText: (localized.hero?.highlightText as string) ?? defaultContent.hero.highlightText,
      description: (localized.hero?.description as string) ?? defaultContent.hero.description,
      primaryCtaLabel: (localized.hero?.primaryCtaLabel as string) ?? defaultContent.hero.primaryCtaLabel,
      secondaryCtaLabel: (localized.hero?.secondaryCtaLabel as string) ?? defaultContent.hero.secondaryCtaLabel,
      highlights:
        (localized.hero?.highlights as PaymentGatewaysListContent["hero"]["highlights"]) ?? defaultContent.hero.highlights,
    },
    countriesSection: {
      sectionTitle:
        (localized.countriesSection?.sectionTitle as string) ?? defaultContent.countriesSection.sectionTitle,
      sectionDescription:
        (localized.countriesSection?.sectionDescription as string) ?? defaultContent.countriesSection.sectionDescription,
      badge: (localized.countriesSection?.badge as string) ?? defaultContent.countriesSection.badge,
      countriesCountLabel:
        (localized.countriesSection?.countriesCountLabel as string) ?? defaultContent.countriesSection.countriesCountLabel,
    },
    continentNames:
      (localized.continentNames as Record<string, string>) ?? defaultContent.continentNames,
    cta: {
      title: (localized.cta?.title as string) ?? defaultContent.cta.title,
      description: (localized.cta?.description as string) ?? defaultContent.cta.description,
      primaryButtonText: (localized.cta?.primaryButtonText as string) ?? defaultContent.cta.primaryButtonText,
      secondaryButtonText: (localized.cta?.secondaryButtonText as string) ?? defaultContent.cta.secondaryButtonText,
      subheading: (localized.cta?.subheading as string) ?? defaultContent.cta.subheading,
      trustIndicators:
        (localized.cta?.trustIndicators as [string, string, string]) ?? defaultContent.cta.trustIndicators,
    },
  };

  cache.set(locale, result);
  return result;
}
