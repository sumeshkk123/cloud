import { Sparkles } from "lucide-react";
import { type HeroMetric } from "@/components/frontend/common/hero-section";
import { PlansHeroWithDemo } from "@/components/frontend/plans/plans-hero-with-demo";
import type { Locale } from "@/i18n-config";
import { getPageTitle } from "@/lib/api/page-titles";
import { getPlansContent } from "@/lib/plans";

interface PlansHeroSectionProps {
  locale: Locale;
  contactHref: string;
  compareHref: string;
  /** Page name for hero enquiry (e.g. "mlm-plans"). Enquiry sent as "Hero section - {pageName}". */
  pageName?: string;
  pageTitleData?: Awaited<ReturnType<typeof getPageTitle>> | null;
}

export async function PlansHeroSection({
  locale,
  contactHref,
  compareHref,
  pageName = "mlm-plans",
  pageTitleData: propPageTitleData
}: PlansHeroSectionProps) {
  // Fetch page title data if not provided
  const pageTitleData = propPageTitleData ?? await getPageTitle("mlm-plans", locale);

  const t = getPlansContent(locale).hero;

  // Parse title to extract highlight text
  // Expected format: "Build a compensation plan your field understands and finance trusts."
  const parseTitle = (title: string): { beforeText?: string; highlightText: string; afterText?: string } => {
    // Default: Use translated highlight words as reference
    const highlightWords = [
      t.fallbackTitle.highlightText,
      // Also check for common translations
      'Build', 'Construir', 'Construire', 'Costruire', 'Bauen', '构建'
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
      label: t.metrics.planTemplates.label,
      value: "12",
      detail: t.metrics.planTemplates.detail
    },
    {
      label: t.metrics.simulations.label,
      value: "4,800+",
      detail: t.metrics.simulations.detail
    },
    {
      label: t.metrics.regulatedMarkets.label,
      value: "45",
      detail: t.metrics.regulatedMarkets.detail
    }
  ];

  return (
    <PlansHeroWithDemo
      badgeText={pageTitleData?.pagePill || t.badgeText}
      badgeIcon={<Sparkles className="h-4 w-4" aria-hidden />}
      beforeText={titleParts.beforeText}
      highlightText={titleParts.highlightText}
      afterText={titleParts.afterText}
      description={pageTitleData?.sectionSubtitle || t.description}
      primaryCtaLabel={t.primaryCta}
      secondaryCtaLabel={t.secondaryCta}
      compareHref={compareHref}
      metrics={metrics}
      pageName={pageName}
      locale={locale}
    />
  );
}
