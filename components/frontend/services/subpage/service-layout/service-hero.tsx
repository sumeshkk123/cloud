"use client";

import { HeroSection } from "@/components/frontend/common/hero-section";
import type { ServiceFeatureHero } from "./types";

/**
 * Service inner page hero. Title, badge, and description are intended to come from the backend:
 * - page_titles (same key as admin /admin/services/meta-page-title, e.g. "services/mlm-software-development"), or
 * - fallback: services table (same title/description as the card on /services).
 * The parent page fetches via getServicePageTitleData() and passes serverTitle/serverBadge/serverDescription.
 * When onPrimaryCtaClick is set, the primary CTA opens the callback (e.g. Request a demo modal) instead of linking to contact.
 */
interface ServiceHeroProps {
  hero: ServiceFeatureHero;
  contactHref: string;
  demoHref: string;
  /** From backend: getPageTitle(services/<slug>) or services list fallback */
  title?: string;
  /** From backend: pagePill from page_titles */
  badge?: string;
  /** From backend: sectionSubtitle from page_titles or service.description */
  description?: string;
  /** When set, primary CTA runs this (e.g. open Request a demo modal) instead of linking to contactHref */
  onPrimaryCtaClick?: () => void;
}

export function ServiceHero({
  hero,
  contactHref,
  demoHref,
  title = hero.title,
  badge = hero.badge,
  description = hero.description,
  onPrimaryCtaClick,
}: ServiceHeroProps) {
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
      secondaryCta={{ label: hero.secondaryCta, href: demoHref, external: false }}
      metrics={hero.metrics ?? []}
      centered={false}
    />
  );
}
