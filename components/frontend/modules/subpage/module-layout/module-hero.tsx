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
}

export function ModuleHero({
  hero,
  contactHref,
  demoHref,
  title = hero.title,
  badge = hero.badge,
  description = hero.description,
}: ModuleHeroProps) {
  return (
    <HeroSection
      badgeText={badge}
      highlightText={title}
      description={description}
      primaryCta={{ label: hero.primaryCta, href: contactHref }}
      secondaryCta={{ label: hero.secondaryCta, href: demoHref, external: true }}
      metrics={hero.metrics ?? []}
      centered={false}
    />
  );
}
