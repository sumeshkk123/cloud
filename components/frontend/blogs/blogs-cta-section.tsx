import type { Locale } from "@/i18n-config";
import { getBlogsCtaContent } from "@/lib/blogs-content";
import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";

type BlogsCtaSectionProps = {
  contactHref: string;
  servicesHref: string;
  locale: Locale;
};

export function BlogsCtaSection({ contactHref, servicesHref, locale }: BlogsCtaSectionProps) {
  const cta = getBlogsCtaContent(locale);
  return (
    <GradientCtaSection
      title={cta.title}
      description={cta.description}
      primaryButton={{ text: cta.primaryButtonText, href: contactHref }}
      primaryButtonOpensDemoModal={{ source: "cta-section", subheading: "From: CTA section", locale }}
      secondaryButton={{ text: cta.secondaryButtonText, href: servicesHref }}
      trustIndicators={cta.trustIndicators}
    />
  );
}
