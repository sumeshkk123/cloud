import type { Locale } from "@/i18n-config";
import type { CountrySubpageContent, CountryHeroMetric } from "@/components/frontend/countries-availability/subpages/types";

const defaultContentModule = require("../shared/countries-availability/default-content.js");
const defaultContent = defaultContentModule.default || defaultContentModule;

const contentCache = new Map<string, CountrySubpageContent>();

function interpolate(str: string, countryName: string): string {
  return str.replace(/\{\{countryName\}\}/g, countryName);
}

function mergeIntro(localeContent: Record<string, unknown>, countryName: string): CountrySubpageContent["intro"] {
  const intro = (localeContent.intro as Record<string, string>) || defaultContent.intro;
  return {
    badge: interpolate(intro.badge ?? defaultContent.intro.badge, countryName),
    heading: interpolate(intro.heading ?? defaultContent.intro.heading, countryName),
    paragraphs: [
      interpolate(intro.paragraph1 ?? defaultContent.intro.paragraph1, countryName),
      interpolate(intro.paragraph2 ?? defaultContent.intro.paragraph2, countryName),
    ],
  };
}

function mergeHero(localeContent: Record<string, unknown>, countryName: string): CountrySubpageContent["hero"] {
  const hero = (localeContent.hero as Record<string, unknown>) || defaultContent.hero;
  const def = defaultContent.hero;
  const trustPills = (hero.trustPills as string[] | undefined) ?? def.trustPills;
  const metricsRaw = (hero.metrics as CountryHeroMetric[] | undefined) ?? def.metrics;
  const metrics: CountryHeroMetric[] = metricsRaw.map((m: CountryHeroMetric) => ({
    label: interpolate(m.label, countryName),
    value: m.value,
    detail: interpolate(m.detail, countryName),
  }));
  return {
    badge: interpolate((hero.badge as string) ?? def.badge, countryName),
    title: interpolate((hero.title as string) ?? def.title, countryName),
    description: interpolate((hero.description as string) ?? def.description, countryName),
    primaryCtaLabel: (hero.primaryCtaLabel as string) ?? def.primaryCtaLabel,
    secondaryCtaLabel: (hero.secondaryCtaLabel as string) ?? def.secondaryCtaLabel,
    reserveDemoCtaLabel: (hero.reserveDemoCtaLabel as string) ?? def.reserveDemoCtaLabel,
    trustPills: Array.isArray(trustPills) && trustPills.length >= 3 ? (trustPills.slice(0, 3) as [string, string, string]) : def.trustPills,
    metrics,
  };
}

function mergeCta(localeContent: Record<string, unknown>, countryName: string): CountrySubpageContent["cta"] {
  const cta = (localeContent.cta as Record<string, unknown>) || defaultContent.cta;
  const def = defaultContent.cta;
  const trustIndicators = (cta.trustIndicators as string[] | undefined) ?? def.trustIndicators;
  return {
    title: interpolate((cta.title as string) ?? def.title, countryName),
    description: interpolate((cta.description as string) ?? def.description, countryName),
    primaryButtonText: (cta.primaryButtonText as string) ?? def.primaryButtonText,
    secondaryButtonText: (cta.secondaryButtonText as string) ?? def.secondaryButtonText,
    subheading: interpolate((cta.subheading as string) ?? def.subheading, countryName),
    trustIndicators: Array.isArray(trustIndicators) && trustIndicators.length >= 3 ? (trustIndicators.slice(0, 3) as [string, string, string]) : def.trustIndicators,
  };
}

function mergeApplyPlan(localeContent: Record<string, unknown>, countryName: string): CountrySubpageContent["applyPlan"] {
  const applyPlan = (localeContent.applyPlan as Record<string, string>) || defaultContent.applyPlan;
  const def = defaultContent.applyPlan;
  return {
    badge: (applyPlan.badge as string) ?? def.badge,
    heading: (applyPlan.heading as string) ?? def.heading,
    description: interpolate(applyPlan.description ?? def.description, countryName),
    imageAlt: (applyPlan.imageAlt as string) ?? def.imageAlt,
    linkText: (applyPlan.linkText as string) ?? def.linkText,
  };
}

export function getCountryAvailabilityContent(
  locale: Locale,
  countryName: string
): CountrySubpageContent {
  const cacheKey = `${locale}:${countryName}`;
  if (contentCache.has(cacheKey)) {
    return contentCache.get(cacheKey)!;
  }

  let localized: Record<string, unknown> = {};
  try {
    localized = require(`../shared/countries-availability/locales/${locale}/content.json`);
  } catch {
    // use default only
  }

  const result: CountrySubpageContent = {
    hero: mergeHero(localized, countryName),
    intro: mergeIntro(localized, countryName),
    cta: mergeCta(localized, countryName),
    applyPlan: mergeApplyPlan(localized, countryName),
  };

  contentCache.set(cacheKey, result);
  return result;
}
