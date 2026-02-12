"use client";

import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";
import type { MigrationCta as MigrationCtaType } from "./types";

const DEFAULT_TRUST_INDICATORS: [string, string, string] = [
  "Structured playbook",
  "Rollback options",
  "Hypercare support",
];

interface MigrationCtaProps {
  cta: MigrationCtaType;
  contactHref: string;
  servicesHref?: string;
  /** When set, first (primary) button opens this popup instead of linking to contact. */
  onPrimaryCtaClick?: () => void;
}

export function MigrationCta({ cta, contactHref, servicesHref, onPrimaryCtaClick }: MigrationCtaProps) {
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
