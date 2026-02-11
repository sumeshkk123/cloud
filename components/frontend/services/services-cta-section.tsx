import type { Locale } from "@/i18n-config";
import { getServicesContent } from "@/lib/services";
import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";

interface ServicesCtaSectionProps {
  contactHref: string;
  demoHref: string;
  locale: Locale;
}

export function ServicesCtaSection({ contactHref, demoHref, locale }: ServicesCtaSectionProps) {
  const content = getServicesContent(locale);
  const t = content.ctaSection;
  return (
    <GradientCtaSection
      title={t.title}
      description={t.description}
      primaryButton={{ text: t.scheduleButton, href: contactHref }}
      primaryButtonOpensDemoModal={{ source: "cta-section", subheading: "From: CTA section", locale }}
      secondaryButton={{ text: t.caseStudiesButton, href: demoHref, openInNewTab: true }}
      trustIndicators={[t.quickImplementation, t.expertConsultation, t.provenResults]}
    />
  );
}
