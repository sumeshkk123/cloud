"use client";

import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";
import type { ConsultingCta as ConsultingCtaType } from "./types";

const DEFAULT_TRUST_INDICATORS: [string, string, string] = [
  "Strategic guidance",
  "Expert consultants",
  "24/7 support",
];

interface ConsultingCtaProps {
  cta: ConsultingCtaType;
  contactHref: string;
  servicesHref?: string;
  onPrimaryCtaClick?: () => void;
}

export function ConsultingCta({ cta, contactHref, servicesHref, onPrimaryCtaClick }: ConsultingCtaProps) {
  return (
    <GradientCtaSection
      title={cta.heading}
      description={cta.description}
      primaryButton={
        onPrimaryCtaClick
          ? { text: cta.buttonText, onClick: onPrimaryCtaClick }
          : { text: cta.buttonText, href: contactHref }
      }
      secondaryButton={
        cta.secondaryButtonText && (cta.secondaryHref ?? servicesHref)
          ? { text: cta.secondaryButtonText, href: cta.secondaryHref ?? servicesHref!, openInNewTab: false }
          : undefined
      }
      trustIndicators={cta.trustIndicators ?? DEFAULT_TRUST_INDICATORS}
    />
  );
}
