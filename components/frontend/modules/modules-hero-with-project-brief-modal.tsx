"use client";

import { useState } from "react";
import { ModulesHeroSection } from "./modules-hero-section";
import { HeroSectionPopup } from "@/components/frontend/common/hero-section-popup";
import { useToast } from "@/components/ui/toast";
import type { Locale } from "@/i18n-config";
import type { PageTitleRecord } from "@/lib/api/page-titles";

interface ModulesHeroWithProjectBriefModalProps {
  locale: Locale;
  contactHref: string;
  pricingHref: string;
  demoHref: string;
  pageTitleData?: PageTitleRecord | null;
}

export function ModulesHeroWithProjectBriefModal({
  locale,
  contactHref,
  pricingHref,
  demoHref,
  pageTitleData,
}: ModulesHeroWithProjectBriefModalProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const { showToast, ToastComponent } = useToast();

  return (
    <>
      {ToastComponent}
      <ModulesHeroSection
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
        source="mlm-software-modules"
        notes="Enquiry from MLM software modules page (Talk to a module specialist)"
        locale={locale}
        onSuccess={(message) => showToast(message, "success")}
      />
    </>
  );
}
