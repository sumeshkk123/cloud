"use client";

import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";
import type { PlanFeatureCta } from "./types";

const DEFAULT_TRUST_INDICATORS: [string, string, string] = [
  "Fast implementation",
  "Expert support",
  "Proven results",
];

interface PlanCtaProps {
  cta: PlanFeatureCta;
  contactHref: string;
  demoHref?: string;
  /** When set, primary button opens Request Demo modal with source "cta-section" instead of linking to contact */
  openDemoModalOnPrimary?: boolean;
  /** Plan page slug (e.g. "mlm-binary-plan"); when set, submissions show "Page: mlm-plan-{planSlug}" in admin */
  planSlug?: string;
  locale?: string;
}

export function PlanCta({
  cta,
  contactHref,
  demoHref,
  openDemoModalOnPrimary = true,
  planSlug,
  locale = "en",
}: PlanCtaProps) {
  return (
    <GradientCtaSection
      title={cta.heading}
      description={cta.description}
      primaryButton={{ text: cta.buttonText, href: contactHref }}
      primaryButtonOpensDemoModal={
        openDemoModalOnPrimary
          ? {
              source: "cta-section",
              subheading: "From: CTA section",
              locale,
              sourcePage: planSlug ? `mlm-plan-${planSlug}` : undefined,
            }
          : undefined
      }
      secondaryButton={
        cta.secondaryCta && demoHref
          ? { text: cta.secondaryCta, href: demoHref, openInNewTab: true }
          : undefined
      }
      trustIndicators={cta.trustIndicators ?? DEFAULT_TRUST_INDICATORS}
    />
  );
}
