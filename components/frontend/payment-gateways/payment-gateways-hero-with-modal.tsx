"use client";

import { useState } from "react";
import { PaymentGatewaysHeroSection } from "./payment-gateways-hero-section";
import { HeroSectionPopup } from "@/components/frontend/common/hero-section-popup";
import { useToast } from "@/components/ui/toast";
import type { Locale } from "@/i18n-config";
import type { PaymentGatewaysListContent } from "@/lib/payment-gateways-list-content";

export interface PaymentGatewaysHeroWithModalProps {
  locale: Locale;
  contactHref: string;
  demoHref: string;
  content: PaymentGatewaysListContent;
}

export function PaymentGatewaysHeroWithModal({
  locale,
  contactHref,
  demoHref,
  content,
}: PaymentGatewaysHeroWithModalProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const { showToast, ToastComponent } = useToast();

  return (
    <>
      {ToastComponent}
      <PaymentGatewaysHeroSection
        contactHref={contactHref}
        demoHref={demoHref}
        content={content.hero}
        onPrimaryCtaClick={() => setModalOpen(true)}
      />
      <HeroSectionPopup
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source="hero-section-payment-gateways"
        notes="Enquiry from MLM software payment gateways page"
        locale={locale}
        onSuccess={(message) => showToast(message, "success")}
      />
    </>
  );
}
