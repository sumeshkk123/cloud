import { Sparkles } from "lucide-react";
import { HeroSection, type HeroMetric } from "@/components/frontend/common/hero-section";
import type { Locale } from "@/i18n-config";
import { getPageTitle } from "@/lib/api/page-titles";
import { getAICopilotContent } from "@/lib/ai-copilot-content";

interface AICopilotHeroSectionProps {
  locale: Locale;
  contactHref: string;
  pricingHref: string;
  demoHref: string;
  pageTitleData?: Awaited<ReturnType<typeof getPageTitle>> | null;
}

export async function AICopilotHeroSection({
  locale,
  contactHref,
  pricingHref,
  demoHref,
  pageTitleData: propPageTitleData
}: AICopilotHeroSectionProps) {
  // Fetch page title data if not provided
  const pageTitleData = propPageTitleData ?? await getPageTitle("ai-copilot", locale);

  const t = getAICopilotContent(locale).hero;

  // Parse title to extract highlight text
  const parseTitle = (title: string): { beforeText?: string; highlightText: string; afterText?: string } => {
    const highlightWords = [
      t.fallbackTitle.highlightText,
      'AI Co-pilot', 'AI', 'Co-pilot', 'Copiloto', 'Co-pilota', 'Co-Pilot', 'KI', 'IA'
    ];

    const words = title.split(' ');
    const highlightIndex = words.findIndex(w => highlightWords.some(hw => w.includes(hw)));

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
      label: t.metrics.aiFeatures.label,
      value: "3+",
      detail: t.metrics.aiFeatures.detail
    },
    {
      label: t.metrics.implementationSpeed.label,
      value: "Fast",
      detail: t.metrics.implementationSpeed.detail
    },
    {
      label: t.metrics.globalSupport.label,
      value: "24/7",
      detail: t.metrics.globalSupport.detail
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
