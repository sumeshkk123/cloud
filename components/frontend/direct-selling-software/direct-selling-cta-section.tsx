import type { Locale } from "@/i18n-config";
import { getDirectSellingSoftwareContent } from "@/lib/direct-selling-software";
import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";

interface DirectSellingCtaSectionProps {
  locale: Locale;
  contactHref: string;
  demoHref: string;
}

export function DirectSellingCtaSection({
  locale,
  contactHref,
  demoHref,
}: DirectSellingCtaSectionProps) {
  const c = getDirectSellingSoftwareContent(locale).finalCta;

  return (
    <GradientCtaSection
      title={c.heading}
      description={c.description}
      primaryButton={{ text: c.primaryCta, href: contactHref }}
      primaryButtonOpensDemoModal={{ source: "cta-section", subheading: "From: CTA section", locale }}
      secondaryButton={{ text: c.secondaryCta, href: demoHref, openInNewTab: true }}
      trustIndicators={[
        "10–14 weeks typical launch",
        "Hybrid retail & affiliate support",
        "24/7 post-launch support",
      ]}
    />
  );
}
