"use client";

import { useState } from "react";
import { ServicesHeroSection } from "./services-hero-section";
import { HeroSectionPopup } from "@/components/frontend/common/hero-section-popup";
import { useToast } from "@/components/ui/toast";
import type { Locale } from "@/i18n-config";
import type { PageTitleRecord } from "@/lib/api/page-titles";

interface ServicesHeroWithProjectBriefModalProps {
  locale: Locale;
  contactHref: string;
  demoHref: string;
  supportHref: string;
  pageTitleData?: PageTitleRecord | null;
}

export function ServicesHeroWithProjectBriefModal({
  locale,
  contactHref,
  demoHref,
  supportHref,
  pageTitleData,
}: ServicesHeroWithProjectBriefModalProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const { showToast, ToastComponent } = useToast();

  return (
    <>
      {ToastComponent}
      <ServicesHeroSection
        locale={locale}
        contactHref={contactHref}
        demoHref={demoHref}
        supportHref={supportHref}
        pageTitleData={pageTitleData}
        onPrimaryCtaClick={() => setModalOpen(true)}
      />
      <HeroSectionPopup
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source="services"
        notes="Enquiry from services page (Talk to a services lead)"
        locale={locale}
        onSuccess={(message) => showToast(message, "success")}
      />
    </>
  );
}
