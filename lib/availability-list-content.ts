import type { Locale } from "@/i18n-config";

const defaultContentModule = require("../shared/countries-availability/availability-list/default-content.js");
const defaultContent = defaultContentModule.default ?? defaultContentModule;

export type AvailabilityListContent = typeof defaultContent;

const cache = new Map<string, AvailabilityListContent>();

export function getAvailabilityListContent(locale: Locale): AvailabilityListContent {
  if (cache.has(locale)) {
    return cache.get(locale)!;
  }
  let localized: Partial<AvailabilityListContent> = {};
  try {
    localized = require(`../shared/countries-availability/availability-list/locales/${locale}/content.json`);
  } catch {
    // use default only
  }

  const result: AvailabilityListContent = {
    meta: {
      title: (localized.meta?.title as string) ?? defaultContent.meta.title,
      description: (localized.meta?.description as string) ?? defaultContent.meta.description,
    },
    hero: {
      badgeText: (localized.hero?.badgeText as string) ?? defaultContent.hero.badgeText,
      highlightText: (localized.hero?.highlightText as string) ?? defaultContent.hero.highlightText,
      description: (localized.hero?.description as string) ?? defaultContent.hero.description,
      primaryCtaLabel: (localized.hero?.primaryCtaLabel as string) ?? defaultContent.hero.primaryCtaLabel,
      secondaryCtaLabel: (localized.hero?.secondaryCtaLabel as string) ?? defaultContent.hero.secondaryCtaLabel,
      highlights:
        (localized.hero?.highlights as AvailabilityListContent["hero"]["highlights"]) ?? defaultContent.hero.highlights,
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
    steps: {
      badge: (localized.steps?.badge as string) ?? defaultContent.steps.badge,
      heading: (localized.steps?.heading as string) ?? defaultContent.steps.heading,
      description: (localized.steps?.description as string) ?? defaultContent.steps.description,
      steps: (localized.steps?.steps as AvailabilityListContent["steps"]["steps"]) ?? defaultContent.steps.steps,
    },
    cta: {
      title: (localized.cta?.title as string) ?? defaultContent.cta.title,
      description: (localized.cta?.description as string) ?? defaultContent.cta.description,
      primaryButtonText: (localized.cta?.primaryButtonText as string) ?? defaultContent.cta.primaryButtonText,
      secondaryButtonText: (localized.cta?.secondaryButtonText as string) ?? defaultContent.cta.secondaryButtonText,
      subheading: (localized.cta?.subheading as string) ?? defaultContent.cta.subheading,
      trustIndicators:
        (localized.cta?.trustIndicators as string[]) ?? defaultContent.cta.trustIndicators,
    },
    continentNames:
      (localized.continentNames as Record<string, string>) ?? defaultContent.continentNames,
  };

  cache.set(locale, result);
  return result;
}
