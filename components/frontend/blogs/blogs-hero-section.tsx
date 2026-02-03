import { ArticleMedium } from "@phosphor-icons/react/dist/ssr";
import { HeroSection, type HeroMetric } from "@/components/frontend/common/hero-section";
import { getBlogsHeroContent } from "@/lib/blogs-content";
import type { Locale } from "@/i18n-config";

type BlogsHeroSectionProps = {
  locale: Locale;
  resourcesHref: string;
  newsletterHref: string;
  contactHref: string;
};

export function BlogsHeroSection({ locale, resourcesHref, newsletterHref, contactHref }: BlogsHeroSectionProps) {
  const t = getBlogsHeroContent(locale);
  const metrics: HeroMetric[] = t.metrics.map((m) => ({
    label: m.label,
    value: m.value,
    detail: m.detail
  }));

  return (
    <HeroSection
      badgeText={t.badgeText}
      badgeIcon={<ArticleMedium className="h-4 w-4" aria-hidden />}
      beforeText={t.beforeText}
      highlightText={t.highlightText}
      afterText={t.afterText}
      description={t.description}
      primaryCta={{
        label: t.primaryCtaLabel,
        href: resourcesHref
      }}
      secondaryCta={{
        label: t.secondaryCtaLabel,
        href: newsletterHref
      }}
      metrics={metrics}
    />
  );
}
