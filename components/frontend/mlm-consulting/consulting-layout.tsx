"use client";

import { useState } from "react";
import { ConsultingHero } from "./consulting-hero";
import { ConsultingIntro } from "./consulting-intro";
import { ConsultingWhySection } from "./consulting-why-section";
import { ConsultingChecklistSection } from "./consulting-checklist-section";
import { ConsultingOfferSection } from "./consulting-offer-section";
import { ConsultingProcessSection } from "./consulting-process-section";
import { ConsultingTrustSection } from "./consulting-trust-section";
import { ConsultingCta } from "./consulting-cta";
import { HeroSectionPopup } from "@/components/frontend/common/hero-section-popup";
import { useToast } from "@/components/ui/toast";
import type { ConsultingPageContent } from "./types";

export interface ConsultingLayoutProps {
  content: ConsultingPageContent;
  contactHref: string;
  servicesHref: string;
  featuresHref: string;
  serverTitle?: string | null;
  serverBadge?: string | null;
  serverDescription?: string | null;
  /** Hero image from backend (Admin → Services). */
  serverImageUrl?: string | null;
  locale?: string;
}

export function ConsultingLayout({
  content,
  contactHref,
  servicesHref,
  featuresHref,
  serverTitle,
  serverBadge,
  serverDescription,
  serverImageUrl,
  locale = "en",
}: ConsultingLayoutProps) {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupSource, setPopupSource] = useState<"hero" | "cta">("hero");
  const { showToast, ToastComponent } = useToast();
  const hero = {
    ...content.hero,
    title: (serverTitle != null && String(serverTitle).trim() !== "" ? serverTitle : content.hero.title) as string,
    badge: (serverBadge != null && String(serverBadge).trim() !== "" ? serverBadge : content.hero.badge) as string,
    description: (serverDescription != null && String(serverDescription).trim() !== "" ? serverDescription : content.hero.description) as string,
  };

  return (
    <div>
      {ToastComponent}
      <ConsultingHero
        hero={content.hero}
        contactHref={contactHref}
        featuresHref={featuresHref}
        title={hero.title}
        badge={hero.badge}
        description={hero.description}
        serverImageUrl={serverImageUrl ?? undefined}
        onPrimaryCtaClick={() => {
          setPopupSource("hero");
          setPopupOpen(true);
        }}
      />
      <HeroSectionPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        source={popupSource === "cta" ? "CTA - mlm-consulting" : "Hero section - mlm-consulting"}
        notes="Enquiry from MLM consulting page"
        locale={locale}
        onSuccess={(message) => showToast(message, "success")}
      />
      {content.intro && (
        <ConsultingIntro
          intro={content.intro}
          features={content.introFeatures ?? []}
        />
      )}
      <ConsultingWhySection
        heading={content.whySection.heading}
        description={content.whySection.description}
        reasons={content.whySection.reasons}
      />
      {content.checklistSection && (
        <ConsultingChecklistSection
          badge={content.checklistSection.badge}
          heading={content.checklistSection.heading}
          description={content.checklistSection.description}
          items={content.checklistSection.items}
          imageUrl={serverImageUrl ?? undefined}
        />
      )}
      {content.offerSection && (
        <ConsultingOfferSection
          badge={content.offerSection.badge}
          heading={content.offerSection.heading}
          description={content.offerSection.description}
          items={content.offerSection.items}
        />
      )}
      <ConsultingProcessSection
        heading={content.processSection.heading}
        description={content.processSection.description}
        steps={content.processSection.steps}
      />
      {content.trustSection && (
        <ConsultingTrustSection
          heading={content.trustSection.heading}
          paragraphs={content.trustSection.paragraphs}
          pointsTitle={content.trustSection.pointsTitle}
          points={content.trustSection.points}
        />
      )}
      <ConsultingCta
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
