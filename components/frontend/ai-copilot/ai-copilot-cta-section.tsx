import type { Locale } from "@/i18n-config";
import { getAICopilotContent } from "@/lib/ai-copilot-content";
import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";

interface AICopilotCtaSectionProps {
  contactHref: string;
  demoHref: string;
  locale: Locale;
}

export function AICopilotCtaSection({ contactHref, demoHref, locale }: AICopilotCtaSectionProps) {
  const content = getAICopilotContent(locale);
  const t = content.ctaSection;
  return (
    <GradientCtaSection
      title={t.title}
      description={t.description}
      primaryButton={{ text: t.primaryButton, href: contactHref }}
      primaryButtonOpensDemoModal={{ source: "cta-section", subheading: "From: CTA section", locale }}
      secondaryButton={{ text: t.secondaryButton, href: demoHref }}
      trustIndicators={[
        t.trustIndicators.quickImplementation,
        t.trustIndicators.expertConsultation,
        t.trustIndicators.provenResults,
      ]}
    />
  );
}
