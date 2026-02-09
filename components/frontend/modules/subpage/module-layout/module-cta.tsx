"use client";

import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";
import type { ModuleFeatureCta } from "./types";

const DEFAULT_TRUST_INDICATORS: [string, string, string] = [
  "Fast implementation",
  "Expert support",
  "Proven results",
];

interface ModuleCtaProps {
  cta: ModuleFeatureCta;
  contactHref: string;
  demoHref?: string;
}

export function ModuleCta({ cta, contactHref, demoHref }: ModuleCtaProps) {
  return (
    <GradientCtaSection
      title={cta.heading}
      description={cta.description}
      primaryButton={{ text: cta.buttonText, href: contactHref }}
      secondaryButton={
        cta.secondaryCta && demoHref
          ? { text: cta.secondaryCta, href: demoHref, openInNewTab: true }
          : undefined
      }
      trustIndicators={cta.trustIndicators ?? DEFAULT_TRUST_INDICATORS}
    />
  );
}
