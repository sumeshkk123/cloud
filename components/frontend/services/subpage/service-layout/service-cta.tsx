"use client";

import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";
import type { ServiceFeatureCta } from "./types";

const DEFAULT_TRUST_INDICATORS: [string, string, string] = [
  "Fast implementation",
  "Expert support",
  "Proven results",
];

interface ServiceCtaProps {
  cta: ServiceFeatureCta;
  contactHref: string;
  demoHref?: string;
  /** When set, primary button opens Request Demo modal with source "cta-section" instead of linking to contact */
  openDemoModalOnPrimary?: boolean;
  /** Service page slug (e.g. "magento-development"); when set, submissions show "Page: services-{serviceSlug}" in admin */
  serviceSlug?: string;
  locale?: string;
}

export function ServiceCta({
  cta,
  contactHref,
  demoHref,
  openDemoModalOnPrimary = true,
  serviceSlug,
  locale = "en",
}: ServiceCtaProps) {
  return (
    <GradientCtaSection
      title={cta.heading}
      description={cta.description}
      primaryButton={{ text: cta.buttonText, href: contactHref }}
      primaryButtonOpensDemoModal={
        openDemoModalOnPrimary
          ? { source: "cta-section", subheading: "From: CTA section", locale, sourcePage: serviceSlug ? `services-${serviceSlug}` : undefined }
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
