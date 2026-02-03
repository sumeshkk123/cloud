import type { Locale } from "@/i18n-config";
import { getModulesContent } from "@/lib/modules";
import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";

interface ModulesCtaSectionProps {
  contactHref: string;
  demoHref: string;
  locale: Locale;
}

export function ModulesCtaSection({ contactHref, demoHref, locale }: ModulesCtaSectionProps) {
  const content = getModulesContent(locale);
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
