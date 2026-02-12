"use client";

import { useState } from "react";
import { IndustryHero } from "./industry-hero";
import { IndustryIntroSection } from "./industry-intro-section";
import { IndustryPlaysSection } from "./industry-plays-section";
import { IndustryProgrammesSection } from "./industry-programmes-section";
import { IndustryProofPointsSection } from "./industry-proof-points-section";
import { IndustryCtaSection } from "./industry-cta-section";
import { HeroSectionPopup } from "@/components/frontend/common/hero-section-popup";
import { useToast } from "@/components/ui/toast";
import type { IndustryPageContent } from "../types";
import { Section } from "@/components/ui/section";

const DEMO_HREF = "https://demo.cloudmlmsoftware.com";

export interface IndustryPageLayoutProps {
  content: IndustryPageContent;
  contactHref: string;
  demoHref?: string;
  pricingHref?: string;
  /** Industry slug for popup source (e.g. "insurance") → source "Hero section - industry/insurance" */
  industrySlug?: string | null;
  /** Override hero title (e.g. from getPageTitle). */
  serverTitle?: string | null;
  /** Override hero badge. */
  serverBadge?: string | null;
  /** Override hero description. */
  serverDescription?: string | null;
  locale?: string;
}

export function IndustryPageLayout({
  content,
  contactHref,
  demoHref = DEMO_HREF,
  pricingHref,
  industrySlug,
  serverTitle,
  serverBadge,
  serverDescription,
  locale = "en",
}: IndustryPageLayoutProps) {
  const [popupOpen, setPopupOpen] = useState(false);
  const { showToast, ToastComponent } = useToast();
  const hero = {
    ...content.hero,
    title: serverTitle ?? content.hero.title,
    badge: serverBadge ?? content.hero.badge,
    description: serverDescription ?? content.hero.description,
  };

  const sourceForPopup = industrySlug ? `Hero section - industry/${industrySlug}` : "Hero section - industry";

  return (
    <div>
      {ToastComponent}
      <IndustryHero
        hero={content.hero}
        contactHref={contactHref}
        demoHref={demoHref}
        pricingHref={pricingHref}
        title={hero.title}
        badge={hero.badge}
        description={hero.description}
        onPrimaryCtaClick={industrySlug != null ? () => setPopupOpen(true) : undefined}
      />

      {industrySlug != null && (
        <HeroSectionPopup
          isOpen={popupOpen}
          onClose={() => setPopupOpen(false)}
          source={sourceForPopup}
          notes={`Enquiry from industry page: ${industrySlug}`}
          locale={locale}
          onSuccess={(message) => showToast(message, "success")}
        />
      )}

      {content.introSection && <IndustryIntroSection content={content.introSection} />}

      {content.playsSection && <IndustryPlaysSection content={content.playsSection} />}

      {content.programmesSection && <IndustryProgrammesSection content={content.programmesSection} />}

      {content.customSections}

      {content.proofPointsSection && (
        <Section padding="lg" variant="gradient">
          <div className="container grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <IndustryProofPointsSection content={content.proofPointsSection} />
            <IndustryCtaSection
              content={content.cta}
              contactHref={contactHref}
              demoHref={demoHref}
              pricingHref={pricingHref}
              industrySlug={industrySlug}
              locale={locale}
            />
          </div>
        </Section>
      )}
    </div>
  );
}
