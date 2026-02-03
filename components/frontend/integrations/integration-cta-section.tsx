import type { Locale } from "@/i18n-config";
import { getIntegrationsContent } from "@/lib/integrations";
import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";

interface IntegrationCtaSectionProps {
  contactHref: string;
  demoHref: string;
  locale: Locale;
}

export function IntegrationCtaSection({ contactHref, demoHref, locale }: IntegrationCtaSectionProps) {
  const content = getIntegrationsContent(locale);
  const t = content.ctaSection;
  return (
    <GradientCtaSection
      title={t.title}
      description={t.description}
      primaryButton={{ text: t.primaryButton, href: contactHref }}
      secondaryButton={{ text: t.secondaryButton, href: demoHref }}
      trustIndicators={[
        t.trustIndicators.quickImplementation,
        t.trustIndicators.expertConsultation,
        t.trustIndicators.provenResults,
      ]}
    />
  );
}
