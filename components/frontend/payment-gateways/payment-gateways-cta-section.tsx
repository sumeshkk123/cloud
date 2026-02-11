"use client";

import type { Locale } from "@/i18n-config";
import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";

export interface PaymentGatewaysCtaSectionProps {
  contactHref: string;
  locale: Locale;
  content: {
    title: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    subheading: string;
    trustIndicators: [string, string, string];
  };
}

export function PaymentGatewaysCtaSection({ contactHref, locale, content }: PaymentGatewaysCtaSectionProps) {
  return (
    <GradientCtaSection
      title={content.title}
      description={content.description}
      primaryButton={{ text: content.primaryButtonText, href: contactHref }}
      primaryButtonOpensDemoModal={{
        source: "payment-gateways-cta",
        subheading: content.subheading,
        locale,
      }}
      secondaryButton={{ text: content.secondaryButtonText, href: contactHref }}
      trustIndicators={content.trustIndicators}
    />
  );
}
