import type { Locale } from "@/i18n-config";
import { getFeaturesContent } from "@/lib/features";
import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";

interface FeaturesCtaSectionProps {
  contactHref: string;
  demoHref: string;
  locale: Locale;
}

export function FeaturesCtaSection({ contactHref, demoHref, locale }: FeaturesCtaSectionProps) {
  const t = getFeaturesContent(locale);
  const cta = t.cta;
  if (!cta) return null;
  return (
    <GradientCtaSection
      title={cta.title ?? ""}
      description={cta.description ?? ""}
      primaryButton={{ text: cta.primaryButtonText ?? "", href: contactHref }}
      primaryButtonOpensDemoModal={{ source: "cta-section", subheading: "From: CTA section", locale }}
      secondaryButton={{ text: cta.secondaryButtonText ?? "", href: demoHref, openInNewTab: true }}
      trustIndicators={[
        cta.trust?.quickImplementation ?? "",
        cta.trust?.expertConsultation ?? "",
        cta.trust?.provenResults ?? "",
      ]}
    />
  );
}
