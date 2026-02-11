"use client";

import type { Locale } from "@/i18n-config";
import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";
import type { AvailabilityListContent } from "@/lib/availability-list-content";

export interface AvailabilityCtaSectionProps {
  contactHref: string;
  locale: Locale;
  content: AvailabilityListContent["cta"];
}

export function AvailabilityCtaSection({ contactHref, locale, content }: AvailabilityCtaSectionProps) {
  return (
    <GradientCtaSection
      title={content.title}
      description={content.description}
      primaryButton={{ text: content.primaryButtonText, href: contactHref }}
      primaryButtonOpensDemoModal={{
        source: "cta-section",
        subheading: content.subheading,
        locale,
      }}
      secondaryButton={{ text: content.secondaryButtonText, href: contactHref }}
      trustIndicators={content.trustIndicators}
    />
  );
}
