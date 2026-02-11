"use client";

import { useState } from "react";
import { AvailabilityHeroSection } from "./availability-hero-section";
import { HeroSectionPopup } from "@/components/frontend/common/hero-section-popup";
import { useToast } from "@/components/ui/toast";
import type { Locale } from "@/i18n-config";
import type { AvailabilityListContent } from "@/lib/availability-list-content";

export interface AvailabilityHeroWithModalProps {
  locale: Locale;
  contactHref: string;
  demoHref: string;
  content: AvailabilityListContent;
}

export function AvailabilityHeroWithModal({
  locale,
  contactHref,
  demoHref,
  content,
}: AvailabilityHeroWithModalProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const { showToast, ToastComponent } = useToast();

  return (
    <>
      {ToastComponent}
      <AvailabilityHeroSection
        contactHref={contactHref}
        demoHref={demoHref}
        onPrimaryCtaClick={() => setModalOpen(true)}
        content={content.hero}
      />
      <HeroSectionPopup
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source="hero-section-country"
        notes="Enquiry from MLM software availability across countries page"
        locale={locale}
        onSuccess={(message) => showToast(message, "success")}
      />
    </>
  );
}
