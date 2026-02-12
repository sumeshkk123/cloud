"use client";

import { HeroSection } from "@/components/frontend/common/hero-section";
import type { IndustryHero as IndustryHeroType } from "../types";

const DEMO_HREF = "https://demo.cloudmlmsoftware.com";

interface IndustryHeroProps {
  hero: IndustryHeroType;
  contactHref: string;
  demoHref: string;
  pricingHref?: string;
  /** Override title from server (e.g. page title from CMS). */
  title?: string;
  /** Override badge. */
  badge?: string;
  /** Override description. */
  description?: string;
  /** When set, primary CTA opens this popup instead of linking to contactHref. */
  onPrimaryCtaClick?: () => void;
}

export function IndustryHero({
  hero,
  contactHref,
  demoHref = DEMO_HREF,
  pricingHref,
  title = hero.title,
  badge = hero.badge,
  description = hero.description,
  onPrimaryCtaClick,
}: IndustryHeroProps) {
  const primaryCta = onPrimaryCtaClick
    ? { label: hero.primaryCta, onClick: onPrimaryCtaClick }
    : { label: hero.primaryCta, href: contactHref };
  const secondaryCta = { label: hero.secondaryCta, href: demoHref, external: true };

  const metricsForHero =
    hero.metrics && hero.metrics.length > 0
      ? hero.metrics.map((m) => ({ label: m.label, value: m.value, detail: m.detail }))
      : [];

  return (
    <HeroSection
      badgeText={badge}
      highlightText={title}
      description={description}
      primaryCta={primaryCta}
      secondaryCta={secondaryCta}
      metrics={metricsForHero.length > 0 ? metricsForHero : undefined}
      centered={false}
      className="border border-border/60 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950/20"
    />
  );
}
