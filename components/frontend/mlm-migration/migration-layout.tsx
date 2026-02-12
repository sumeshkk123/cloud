"use client";

import { useState } from "react";
import { MigrationHero } from "./migration-hero";
import { MigrationIntro } from "./migration-intro";
import { MigrationWhySection } from "./migration-why-section";
import { MigrationChecklistSection } from "./migration-checklist-section";
import { MigrationOfferSection } from "./migration-offer-section";
import { MigrationProcessSection } from "./migration-process-section";
import { MigrationTrustSection } from "./migration-trust-section";
import { MigrationCta } from "./migration-cta";
import { HeroSectionPopup } from "@/components/frontend/common/hero-section-popup";
import { useToast } from "@/components/ui/toast";
import type { MigrationPageContent } from "./types";

export interface MigrationLayoutProps {
  content: MigrationPageContent;
  contactHref: string;
  servicesHref: string;
  featuresHref: string;
  /** Override hero title (e.g. from CMS). */
  serverTitle?: string | null;
  /** Override hero badge. */
  serverBadge?: string | null;
  /** Override hero description. */
  serverDescription?: string | null;
  locale?: string;
}

export function MigrationLayout({
  content,
  contactHref,
  servicesHref,
  featuresHref,
  serverTitle,
  serverBadge,
  serverDescription,
  locale = "en",
}: MigrationLayoutProps) {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupSource, setPopupSource] = useState<"hero" | "cta">("hero");
  const { showToast, ToastComponent } = useToast();
  const hero = {
    ...content.hero,
    title: serverTitle ?? content.hero.title,
    badge: serverBadge ?? content.hero.badge,
    description: serverDescription ?? content.hero.description,
  };

  return (
    <div>
      {ToastComponent}
      <MigrationHero
        hero={content.hero}
        contactHref={contactHref}
        featuresHref={featuresHref}
        title={hero.title}
        badge={hero.badge}
        description={hero.description}
        onPrimaryCtaClick={() => {
          setPopupSource("hero");
          setPopupOpen(true);
        }}
      />
      <HeroSectionPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        source={popupSource === "cta" ? "CTA - mlm-migration" : "Hero section - mlm-migration"}
        notes="Enquiry from MLM migration page"
        locale={locale}
        onSuccess={(message) => showToast(message, "success")}
      />
      {content.intro && (
        <MigrationIntro
          intro={content.intro}
          features={content.introFeatures ?? []}
        />
      )}
      <MigrationWhySection
        heading={content.whySection.heading}
        description={content.whySection.description}
        reasons={content.whySection.reasons}
      />
      {content.checklistSection && (
        <MigrationChecklistSection
          badge={content.checklistSection.badge}
          heading={content.checklistSection.heading}
          description={content.checklistSection.description}
          items={content.checklistSection.items}
        />
      )}
      {content.offerSection && (
        <MigrationOfferSection
          badge={content.offerSection.badge}
          heading={content.offerSection.heading}
          description={content.offerSection.description}
          items={content.offerSection.items}
        />
      )}
      <MigrationProcessSection
        heading={content.processSection.heading}
        description={content.processSection.description}
        steps={content.processSection.steps}
      />
      {content.trustSection && (
        <MigrationTrustSection
          heading={content.trustSection.heading}
          paragraphs={content.trustSection.paragraphs}
          pointsTitle={content.trustSection.pointsTitle}
          points={content.trustSection.points}
        />
      )}
      <MigrationCta
        cta={content.cta}
        contactHref={contactHref}
        servicesHref={servicesHref}
        onPrimaryCtaClick={() => {
          setPopupSource("cta");
          setPopupOpen(true);
        }}
      />
    </div>
  );
}
