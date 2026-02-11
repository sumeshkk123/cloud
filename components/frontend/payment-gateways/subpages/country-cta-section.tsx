"use client";

import type { Locale } from "@/i18n-config";
import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";

const DEFAULT_TRUST_INDICATORS: [string, string, string] = [
  "Fast response",
  "Expert review",
  "No commitment",
];

const DEFAULT_CTA_SUBHEADING = "From: Payment gateways page";

export interface PaymentGatewayCountryCtaSectionProps {
  title: string;
  description: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  contactHref: string;
  demoHref: string;
  locale: Locale;
  /** Modal subheading when primary opens Request Demo popup. Optional. */
  subheading?: string;
  /** Exactly 3 strings. Optional; default used if omitted. */
  trustIndicators?: [string, string, string];
}

export function PaymentGatewayCountryCtaSection({
  title,
  description,
  primaryCtaLabel,
  secondaryCtaLabel,
  contactHref,
  demoHref: _demoHref,
  locale,
  subheading = DEFAULT_CTA_SUBHEADING,
  trustIndicators = DEFAULT_TRUST_INDICATORS,
}: PaymentGatewayCountryCtaSectionProps) {
  return (
    <GradientCtaSection
      title={title}
      description={description}
      primaryButton={{ text: primaryCtaLabel, href: contactHref }}
      primaryButtonOpensDemoModal={{
        source: "cta-section",
        subheading,
        locale,
      }}
      secondaryButton={{ text: secondaryCtaLabel, href: contactHref }}
      trustIndicators={trustIndicators}
    />
  );
}
