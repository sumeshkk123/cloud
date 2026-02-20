"use client";

import { useState } from "react";
import { MlmCompaniesHeroSection } from "./mlm-companies-hero-section";
import { HeroSectionPopup } from "@/components/frontend/common/hero-section-popup";
import { useToast } from "@/components/ui/toast";
import type { Locale } from "@/i18n-config";
import type { PageTitleRecord } from "@/lib/api/page-titles";

interface MlmCompaniesHeroWithProjectBriefModalProps {
  locale: Locale;
  contactHref: string;
  pricingHref: string;
  demoHref: string;
  pageTitleData?: PageTitleRecord | null;
}

export function MlmCompaniesHeroWithProjectBriefModal({
  locale,
  contactHref,
  pricingHref,
  demoHref,
  pageTitleData,
}: MlmCompaniesHeroWithProjectBriefModalProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const { showToast, ToastComponent } = useToast();

  return (
    <>
      {ToastComponent}
      <MlmCompaniesHeroSection
        locale={locale}
        contactHref={contactHref}
        pricingHref={pricingHref}
        demoHref={demoHref}
        pageTitleData={pageTitleData}
        onPrimaryCtaClick={() => setModalOpen(true)}
      />
      <HeroSectionPopup
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source="mlm-companies"
        notes="Enquiry from MLM companies page (Talk to a specialist)"
        locale={locale}
        onSuccess={(message) => showToast(message, "success")}
      />
    </>
  );
}
