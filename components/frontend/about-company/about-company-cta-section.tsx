import { GradientCtaSection } from "@/components/frontend/common/gradient-cta-section";
import { getAboutCompanyContent } from "@/lib/about-company";
import type { Locale } from "@/i18n-config";

interface AboutCompanyCtaSectionProps {
  locale: Locale;
  contactHref: string;
  demoHref: string;
}

export function AboutCompanyCtaSection({ locale, contactHref, demoHref }: AboutCompanyCtaSectionProps) {
  const content = getAboutCompanyContent(locale).cta;
  const [a, b, c] = content.trustIndicators;
  return (
    <GradientCtaSection
      title={content.title}
      description={content.description}
      primaryButton={{ text: content.primaryButtonText, href: contactHref }}
      secondaryButton={{
        text: content.secondaryButtonText,
        href: demoHref,
        openInNewTab: true,
      }}
      trustIndicators={[a ?? "", b ?? "", c ?? ""]}
    />
  );
}
