import { HeroSection, type HeroMetric } from "@/components/frontend/common/hero-section";
import { Sparkles } from "lucide-react";
import type { Locale } from "@/i18n-config";
import type { PageTitleRecord } from "@/lib/api/page-titles";
import { getTestimonialsContent } from "@/lib/testimonials";

interface TestimonialsHeroSectionProps {
  locale: Locale;
  contactHref: string;
  pricingHref: string;
  pageTitleData?: PageTitleRecord | null;
}

export function TestimonialsHeroSection({ locale, contactHref, pricingHref, pageTitleData }: TestimonialsHeroSectionProps) {
  const t = getTestimonialsContent(locale).hero;

  // Parse title to extract highlight text
  // Expected format: "Voices from the field, finance, and technology teams we support."
  // Or we can split on common patterns
  const parseTitle = (title: string): { beforeText?: string; highlightText: string; afterText?: string } => {
    // Default: Use translated highlight words as reference
    const highlightWords = [
      t.fallbackTitle.highlightText,
      // Also check for common translations
      'Voices', 'Voces', 'Voix', 'Stimmen', 'Vozes', '声音',
      'Voci', 'Vozes'
    ];

    const words = title.split(' ');
    const highlightIndex = words.findIndex(w => highlightWords.includes(w));

    if (highlightIndex >= 0) {
      return {
        beforeText: highlightIndex > 0 ? words.slice(0, highlightIndex).join(' ') : undefined,
        highlightText: words[highlightIndex],
        afterText: highlightIndex < words.length - 1 ? words.slice(highlightIndex + 1).join(' ') : undefined,
      };
    }

    // Fallback: use first word as highlight
    return {
      highlightText: words[0] || t.fallbackTitle.highlightText,
      afterText: words.length > 1 ? words.slice(1).join(' ') : undefined,
    };
  };

  const titleParts = pageTitleData?.title
    ? parseTitle(pageTitleData.title)
    : { highlightText: t.fallbackTitle.highlightText, afterText: t.fallbackTitle.afterText };

  // Build metrics from translations
  const metrics: HeroMetric[] = [
    {
      label: t.metrics.clientsServed.label,
      value: "500+",
      detail: t.metrics.clientsServed.detail
    },
    {
      label: t.metrics.satisfactionRate.label,
      value: "4.8/5",
      detail: t.metrics.satisfactionRate.detail
    },
    {
      label: t.metrics.industriesCovered.label,
      value: "17+",
      detail: t.metrics.industriesCovered.detail
    }
  ];

  return (
    <HeroSection
      badgeText={pageTitleData?.pagePill || t.badgeText}
      badgeIcon={<Sparkles className="h-4 w-4" aria-hidden />}
      beforeText={titleParts.beforeText}
      highlightText={titleParts.highlightText}
      afterText={titleParts.afterText}
      description={pageTitleData?.sectionSubtitle || t.description}
      primaryCta={{
        label: t.primaryCta,
        href: contactHref,
      }}
      secondaryCta={{
        label: t.secondaryCta,
        href: pricingHref,
      }}
      metrics={metrics}
      centered={false}
      disableHighlight={false}
    />
  );
}
