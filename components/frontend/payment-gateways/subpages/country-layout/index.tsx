"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n-config";
import { HeroSectionPopup } from "@/components/frontend/common/hero-section-popup";
import { useToast } from "@/components/ui/toast";
import type { PaymentGatewayCountryContent } from "../types";
import { PaymentGatewayCountryHero } from "../country-hero";
import { PaymentGatewayCountryClustersSection } from "../country-clusters-section";
import { PaymentGatewayCountryStagesSection } from "../country-stages-section";
import { PaymentGatewayCountryGuardsSection } from "../country-guards-section";
import { PaymentGatewayCountryFaqSection } from "../country-faq-section";
import { PaymentGatewayCountryCtaSection } from "../country-cta-section";

export interface PaymentGatewayCountryLayoutProps {
  content: PaymentGatewayCountryContent;
  contactHref: string;
  demoHref: string;
  pricingHref: string;
  locale: Locale;
}

export function PaymentGatewayCountryLayout({
  content,
  contactHref,
  demoHref,
  pricingHref,
  locale,
}: PaymentGatewayCountryLayoutProps) {
  const [heroModalOpen, setHeroModalOpen] = useState(false);
  const { showToast, ToastComponent } = useToast();
  const { hero, clusters, stages, guards, faq, cta } = content;
  const pathname = usePathname() ?? "";
  const sourcePage = pathname.replace(/^\/[^/]+/, "") || undefined;

  return (
    <div>
      {ToastComponent}
      <PaymentGatewayCountryHero
        badge={hero.badge}
        title={hero.title}
        description={hero.description}
        pricingHref={pricingHref}
        demoHref={demoHref}
        primaryCtaLabel={hero.primaryCtaLabel}
        secondaryCtaLabel={hero.secondaryCtaLabel}
        reserveDemoCtaLabel={hero.reserveDemoCtaLabel}
        quote={hero.quote}
        quoteAttribution={hero.quoteAttribution}
        metrics={hero.metrics}
        snapshotCtaLabel={hero.snapshotCtaLabel}
        onReserveDemoClick={() => setHeroModalOpen(true)}
      />
      <HeroSectionPopup
        isOpen={heroModalOpen}
        onClose={() => setHeroModalOpen(false)}
        source="hero-section-payment-gateways"
        notes="Enquiry from payment gateways country page"
        sourcePage={sourcePage}
        locale={locale}
        onSuccess={(message) => showToast(message, "success")}
      />
      <PaymentGatewayCountryClustersSection heading={clusters.heading} description={clusters.description} items={clusters.items} />
      <PaymentGatewayCountryStagesSection heading={stages.heading} description={stages.description} items={stages.items} />
      <PaymentGatewayCountryGuardsSection
        heading={guards.heading}
        description={guards.description}
        items={guards.items}
        briefcase={guards.briefcase}
        pricingHref={pricingHref}
      />
      <PaymentGatewayCountryFaqSection heading={faq.heading} description={faq.description} items={faq.items} />
      <PaymentGatewayCountryCtaSection
        title={cta.title}
        description={cta.description}
        primaryCtaLabel={cta.primaryCtaLabel}
        secondaryCtaLabel={cta.secondaryCtaLabel}
        contactHref={contactHref}
        demoHref={demoHref}
        locale={locale}
        subheading={cta.subheading}
        trustIndicators={cta.trustIndicators}
      />
    </div>
  );
}
