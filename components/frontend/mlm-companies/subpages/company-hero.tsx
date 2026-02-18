"use client";

import { useState } from "react";
import { HeroSection, type HeroMetric } from "@/components/frontend/common/hero-section";
import { HeroSectionPopup } from "@/components/frontend/common/hero-section-popup";
import { useToast } from "@/components/ui/toast";
import type { Locale } from "@/i18n-config";
import type { MlmCompanyContent } from "./types";

interface MlmCompanyHeroProps {
  content: MlmCompanyContent;
  locale: Locale;
}

export function MlmCompanyHero({ content, locale }: MlmCompanyHeroProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const { showToast, ToastComponent } = useToast();

  const demoHref = "/free-mlm-software-demo/";

  // Build metrics from content
  const metrics: HeroMetric[] = content.hero.metrics.map((metric) => ({
    label: metric.label,
    value: metric.value,
    detail: metric.description,
  }));

  return (
    <>
      {ToastComponent}
      <HeroSection
        badgeText={content.hero.badge}
        highlightText={content.hero.title}
        description={content.hero.description}
        primaryCta={{
          label: content.hero.primaryCtaLabel,
          onClick: () => setModalOpen(true),
        }}
        secondaryCta={{
          label: content.hero.secondaryCtaLabel,
          href: demoHref,
        }}
        metrics={metrics}
        centered={false}
        disableHighlight={true}
      />

      <HeroSectionPopup
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source="mlm-company-subpage"
        notes={`Enquiry from ${content.hero.title} company page`}
        locale={locale}
        onSuccess={(message) => showToast(message, "success")}
      />
    </>
  );
}
