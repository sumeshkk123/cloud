"use client";

import { HeroSection } from "@/components/frontend/common/hero-section";
import type { ModuleFeatureHero } from "./types";

interface ModuleHeroProps {
  hero: ModuleFeatureHero;
  contactHref: string;
  demoHref: string;
  title?: string;
  badge?: string;
  description?: string;
  /** When set, primary CTA opens this callback (e.g. demo modal) instead of linking to contactHref */
  onPrimaryCtaClick?: () => void;
}

export function ModuleHero({
  hero,
  contactHref,
  demoHref,
  title = hero.title,
  badge = hero.badge,
  description = hero.description,
  onPrimaryCtaClick,
}: ModuleHeroProps) {
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
      secondaryCta={{ label: hero.secondaryCta, href: demoHref, external: true }}
      metrics={hero.metrics ?? []}
      centered={false}
    />
  );
}
