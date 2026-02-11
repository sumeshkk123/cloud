import type { Locale } from "@/i18n-config";
import { getCrmMlmSoftwareContent } from "@/lib/crm-mlm-software";
import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";

interface CrmMlmCtaSectionProps {
  locale: Locale;
  contactHref: string;
  demoHref: string;
  resourcesHref: string;
}

export function CrmMlmCtaSection({
  locale,
  contactHref,
  demoHref,
}: CrmMlmCtaSectionProps) {
  const c = getCrmMlmSoftwareContent(locale).finalCta;

  return (
    <GradientCtaSection
      title={c.heading}
      description={c.description}
      primaryButton={{ text: c.primaryCta, href: contactHref }}
      primaryButtonOpensDemoModal={{ source: "cta-section", subheading: "From: CTA section", locale }}
      secondaryButton={{ text: c.secondaryCta, href: demoHref, openInNewTab: true }}
      trustIndicators={[
        "10–14 weeks typical deployment",
        "REST APIs & prebuilt connectors",
        "24/7 global support",
      ]}
    />
  );
}
