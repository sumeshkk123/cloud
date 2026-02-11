"use client";

import type { Locale } from "@/i18n-config";
import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";

export interface CountryCtaProps {
  countryName: string;
  contactHref: string;
  locale: Locale;
  /** Translated CTA content (title, description, buttons, trust indicators, subheading). */
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  subheading: string;
  trustIndicators: [string, string, string];
}

export function CountryCta({
  countryName: _countryName,
  contactHref,
  locale,
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  subheading,
  trustIndicators,
}: CountryCtaProps) {
  return (
    <GradientCtaSection
      title={title}
      description={description}
      primaryButton={{ text: primaryButtonText, href: contactHref }}
      primaryButtonOpensDemoModal={{
        source: "cta-section",
        subheading,
        locale,
      }}
      secondaryButton={{ text: secondaryButtonText, href: contactHref }}
      trustIndicators={trustIndicators}
    />
  );
}
