import type { Locale } from "@/i18n-config";
import { getNetworkMarketingSoftwareContent } from "@/lib/network-marketing-software";
import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";

interface NetworkMarketingCtaSectionProps {
  locale: Locale;
  contactHref: string;
}

export function NetworkMarketingCtaSection({
  locale,
  contactHref,
}: NetworkMarketingCtaSectionProps) {
  const c = getNetworkMarketingSoftwareContent(locale).finalCta;
  const items = c.card.items;

  return (
    <GradientCtaSection
      title={c.heading}
      description={c.description}
      primaryButton={{ text: c.card.ctaLabel, href: contactHref }}
      primaryButtonOpensDemoModal={{ source: "cta-section", subheading: "From: CTA section", locale }}
      trustIndicators={[
        items[0] ? `${items[0].label}: ${items[0].value}` : "",
        items[1] ? `${items[1].label}: ${items[1].value}` : "",
        items[2] ? `${items[2].label}: ${items[2].value}` : "",
      ]}
    />
  );
}
