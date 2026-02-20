"use client";

import * as React from "react";
import { HeroSection } from "@/components/frontend/common/hero-section";
import type { PlanFeatureHero } from "./types";

/**
 * Plan inner page hero. Title, badge, and description can come from the backend
 * (page_titles or plans list). Parent page fetches and passes serverTitle/serverBadge/serverDescription.
 * When onPrimaryCtaClick is set, the primary CTA runs the callback (e.g. Request a demo modal).
 */
interface PlanHeroProps {
  hero: PlanFeatureHero;
  contactHref: string;
  demoHref: string;
  /** From backend: getPageTitle(mlm-plan/<slug>) or plans list fallback */
  title?: string;
  /** From backend: pagePill from page_titles */
  badge?: string;
  /** From backend: sectionSubtitle or plan description */
  description?: string;
  /** When set, primary CTA runs this (e.g. open Request a demo modal) instead of linking to contactHref */
  onPrimaryCtaClick?: () => void;
  /** Optional right column (e.g. plan simulator); when set, hero uses two-column layout */
  rightSlot?: React.ReactNode;
  /** Override for secondary CTA href (e.g. calculator page); defaults to demoHref */
  secondaryHref?: string;
  /** When set, secondary CTA runs this (e.g. open flow simulator modal) instead of linking */
  onSecondaryCtaClick?: () => void;
}

export function PlanHero({
  hero,
  contactHref,
  demoHref,
  title = hero.title,
  badge = hero.badge,
  description = hero.description,
  onPrimaryCtaClick,
  rightSlot,
  secondaryHref = demoHref,
  onSecondaryCtaClick,
}: PlanHeroProps) {
  return (
    <HeroSection
      badgeText={badge}
      highlightText={title}
      description={description}
      primaryCta={
        onPrimaryCtaClick
          ? { label: hero.primaryCta, onClick: onPrimaryCtaClick }
          : { label: hero.primaryCta, href: contactHref }
      }
      secondaryCta={
        onSecondaryCtaClick
          ? { label: hero.secondaryCta, onClick: onSecondaryCtaClick }
          : { label: hero.secondaryCta, href: secondaryHref, external: false }
      }
      metrics={hero.metrics ?? []}
      rightSlot={rightSlot}
      centered={false}
    />
  );
}
