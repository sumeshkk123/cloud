"use client";

import { useState } from "react";
import { HeroSection, type HeroMetric } from "@/components/frontend/common/hero-section";
import { RequestDemoModal } from "@/components/frontend/common/request-demo-modal";
import { useToast } from "@/components/ui/toast";

export interface PlansHeroWithDemoProps {
  badgeText?: string | null;
  badgeIcon?: React.ReactNode;
  beforeText?: string;
  highlightText: string;
  afterText?: string;
  description?: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  compareHref: string;
  metrics: HeroMetric[];
  /** Page name for enquiry (e.g. "mlm-plans"). Enquiry is sent as "Hero section - {pageName}". */
  pageName: string;
  locale?: string;
}

/**
 * Plans hero with primary CTA opening Request Demo modal. Enquiry is sent with notes "Hero section - {pageName}".
 */
export function PlansHeroWithDemo({
  badgeText,
  badgeIcon,
  beforeText,
  highlightText,
  afterText,
  description,
  primaryCtaLabel,
  secondaryCtaLabel,
  compareHref,
  metrics,
  pageName,
  locale = "en",
}: PlansHeroWithDemoProps) {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const { showToast, ToastComponent } = useToast();
  const heroNotes = `Hero section - ${pageName}`;
  const source = `hero-${pageName.replace(/\//g, "-")}`;

  return (
    <>
      {ToastComponent}
      <HeroSection
        badgeText={badgeText || undefined}
        badgeIcon={badgeIcon}
        beforeText={beforeText}
        highlightText={highlightText}
        afterText={afterText}
        description={description}
        primaryCta={{
          label: primaryCtaLabel,
          onClick: () => setDemoModalOpen(true),
        }}
        secondaryCta={{
          label: secondaryCtaLabel,
          href: compareHref,
        }}
        metrics={metrics}
        centered={false}
        disableHighlight={false}
      />
      <RequestDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        heading="Request a Demo"
        subheading={`From: ${heroNotes}`}
        source={source}
        notes={heroNotes}
        sourcePage={pageName}
        locale={locale}
        onSuccess={(message) => showToast(message, "success")}
        onError={(message) => showToast(message, "error")}
      />
    </>
  );
}
