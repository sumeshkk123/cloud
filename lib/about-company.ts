import defaultContentModule from "../shared/about-company/default-content.js";
import type { Locale } from "@/i18n-config";

const defaultContent =
  (defaultContentModule as { default?: AboutCompanyContent }).default ?? (defaultContentModule as AboutCompanyContent);

export interface AboutCompanyHeroMetric {
  label: string;
  value: string;
  detail: string;
}

export interface AboutCompanyGoalItem {
  order: string;
  title: string;
  description: string;
  points: string[];
}

export interface AboutCompanyContent {
  hero: {
    badgeText: string;
    highlightText: string;
    afterText: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    metrics: AboutCompanyHeroMetric[];
  };
  goals: {
    badge: string;
    heading: string;
    description: string;
    goalsGridLabel: string;
    whatYouGetLabel: string;
    goals: AboutCompanyGoalItem[];
  };
  partnersReliedOn: {
    badge: string;
    heading: string;
    points: string[];
  };
  deliver: {
    badge: string;
    title: string;
    points: string[];
  };
  technologyMeetPeople: {
    heading: string;
    description: string;
    discoverServicesText: string;
    scheduleCallText: string;
  };
  ai: {
    badge: string;
    heading: string;
    initiatives: { iconKey: string; title: string; description: string }[];
    footerText: string;
  };
  mission: {
    badge: string;
    heading: string;
    paragraphs: string[];
    valuePillars: { iconKey: string; title: string; description: string }[];
    partnerCard: { badge: string; heading: string; points: string[] };
  };
  collaboration: {
    badge: string;
    heading: string;
    description: string;
    channels: { iconKey: string; title: string; description: string }[];
  };
  trust: {
    badge: string;
    heading: string;
    description: string;
    whatYouGetLabel: string;
    leftPoints: string[];
    rightPoints: string[];
  };
  cta: {
    title: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    trustIndicators: string[];
  };
}

const contentCache = new Map<Locale, AboutCompanyContent>();

export function getAboutCompanyContent(locale: Locale): AboutCompanyContent {
  if (contentCache.has(locale)) {
    return contentCache.get(locale)!;
  }

  let localizedContent: Partial<AboutCompanyContent> = {};
  try {
    localizedContent = require(`../shared/about-company/locales/${locale}/content.json`);
  } catch {
    // Fall back to default if locale file missing
  }

  const defaultMetrics = defaultContent.hero.metrics;
  const localeMetrics = localizedContent.hero?.metrics;
  const metrics =
    localeMetrics?.length === defaultMetrics.length
      ? localeMetrics
      : defaultMetrics.map((def, i) => ({
          label: localeMetrics?.[i]?.label ?? def.label,
          value: localeMetrics?.[i]?.value ?? def.value,
          detail: localeMetrics?.[i]?.detail ?? def.detail,
        }));

  const defaultGoals = defaultContent.goals?.goals ?? [];
  const localeGoals = localizedContent.goals?.goals;
  const goals =
    localeGoals?.length === defaultGoals.length
      ? localeGoals
      : defaultGoals.map((def, i) => ({
          order: localeGoals?.[i]?.order ?? def.order,
          title: localeGoals?.[i]?.title ?? def.title,
          description: localeGoals?.[i]?.description ?? def.description,
          points: localeGoals?.[i]?.points ?? def.points,
        }));

  const merged: AboutCompanyContent = {
    hero: {
      ...defaultContent.hero,
      ...localizedContent.hero,
      metrics,
    },
    goals: {
      ...defaultContent.goals,
      ...localizedContent.goals,
      whatYouGetLabel: localizedContent.goals?.whatYouGetLabel ?? defaultContent.goals?.whatYouGetLabel ?? "What you get",
      goals,
    },
    partnersReliedOn: {
      ...defaultContent.partnersReliedOn,
      ...localizedContent.partnersReliedOn,
    },
    deliver: { ...defaultContent.deliver, ...localizedContent.deliver },
    technologyMeetPeople: { ...defaultContent.technologyMeetPeople, ...localizedContent.technologyMeetPeople },
    ai: { ...defaultContent.ai, ...localizedContent.ai },
    mission: { ...defaultContent.mission, ...localizedContent.mission },
    collaboration: { ...defaultContent.collaboration, ...localizedContent.collaboration },
    trust: { ...defaultContent.trust, ...localizedContent.trust },
    cta: { ...defaultContent.cta, ...localizedContent.cta },
  };

  contentCache.set(locale, merged);
  return merged;
}
