import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";
import type { MlmCompanyContent } from "./types";

interface MlmCompanyCtaSectionProps {
  content: MlmCompanyContent;
}

export function MlmCompanyCtaSection({ content }: MlmCompanyCtaSectionProps) {
  return (
    <GradientCtaSection
      title={content.cta.title}
      description={content.cta.description}
      primaryButton={{ text: content.cta.primaryCtaLabel, href: "/contact" }}
      primaryButtonOpensDemoModal={{ source: "mlm-company-subpage", subheading: content.cta.subheading || "From: MLM Company subpage" }}
      secondaryButton={{ text: content.cta.secondaryCtaLabel, href: "/free-mlm-software-demo/", openInNewTab: true }}
      trustIndicators={content.cta.trustIndicators || ["Expert Support", "Proven Results", "Quick Setup"]}
    />
  );
}
