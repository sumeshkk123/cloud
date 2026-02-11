"use client";

import { useState } from "react";
import type { Locale } from "@/i18n-config";
import { getModulesContent } from "@/lib/modules";
import { getContactContent } from "@/lib/contact";
import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";
import { HeroSectionPopup } from "@/components/frontend/common/hero-section-popup";
import { useToast } from "@/components/ui/toast";

interface ModulesCtaSectionProps {
  contactHref: string;
  demoHref: string;
  locale: Locale;
}

export function ModulesCtaSection({ contactHref, demoHref, locale }: ModulesCtaSectionProps) {
  const [projectBriefOpen, setProjectBriefOpen] = useState(false);
  const { showToast, ToastComponent } = useToast();
  const content = getModulesContent(locale);
  const contactContent = getContactContent(locale);
  const t = content.ctaSection;
  const projectBriefLabel = contactContent.heroSection.primaryCta;

  return (
    <>
      {ToastComponent}
      <GradientCtaSection
        title={t.title}
        description={t.description}
        primaryButton={{ text: t.primaryButton, href: contactHref }}
        primaryButtonOpensDemoModal={{ source: "cta-section", subheading: "From: CTA section", locale }}
        secondaryButton={{ text: t.secondaryButton, href: demoHref }}
        tertiaryButton={{
          text: projectBriefLabel,
          onClick: () => setProjectBriefOpen(true),
        }}
        trustIndicators={[
          t.trustIndicators.quickImplementation,
          t.trustIndicators.expertConsultation,
          t.trustIndicators.provenResults,
        ]}
      />
      <HeroSectionPopup
        isOpen={projectBriefOpen}
        onClose={() => setProjectBriefOpen(false)}
        source="mlm-software-modules"
        notes="Enquiry from MLM software modules page (Submit a project brief)"
        locale={locale}
        onSuccess={(message) => showToast(message, "success")}
      />
    </>
  );
}
