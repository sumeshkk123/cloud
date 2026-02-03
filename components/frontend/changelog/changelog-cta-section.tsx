import type { Locale } from "@/i18n-config";
import { getChangelogContent } from "@/lib/changelog-content";
import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";

interface ChangelogCtaSectionProps {
  contactHref: string;
  locale: Locale;
}

export function ChangelogCtaSection({ contactHref, locale }: ChangelogCtaSectionProps) {
  const t = getChangelogContent(locale);
  const cta = t.ctaSection;
  return (
    <GradientCtaSection
      title={cta.title}
      description={cta.description}
      primaryButton={{ text: cta.primaryCta, href: contactHref }}
      secondaryButton={{ text: cta.secondaryCta, href: contactHref }}
      trustIndicators={["Quick response", "Expert team", "Proven updates"]}
    />
  );
}
