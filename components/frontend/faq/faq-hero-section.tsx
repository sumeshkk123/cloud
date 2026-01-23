import { HeroSection, type HeroMetric } from "@/components/frontend/common/hero-section";
import { Sparkles } from "lucide-react";
import type { Locale } from "@/i18n-config";
import type { PageTitleRecord } from "@/lib/api/page-titles";
import { getFaqContent } from "@/lib/faq";

interface FaqHeroSectionProps {
  locale: Locale;
  contactHref: string;
  resourcesHref: string;
  pageTitleData?: PageTitleRecord | null;
}

export function FaqHeroSection({ locale, contactHref, resourcesHref, pageTitleData }: FaqHeroSectionProps) {
  const t = getFaqContent(locale).hero;

  // Parse title to extract highlight text
  // Expected format: "Answers for every stage of your Cloud MLM Software journey."
  // Or we can split on common patterns
  const parseTitle = (title: string): { beforeText?: string; highlightText: string; afterText?: string } => {
    // Default: Use translated highlight words as reference
    const highlightWords = [
      t.fallbackTitle.highlightText,
      // Also check for common translations
      'Answers', 'Respuestas', 'Réponses', 'Antworten', 'Respostas', '答案',
      'Risposte', 'Respostas'
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
      label: t.metrics.faqsAnswered.label,
      value: "200+",
      detail: t.metrics.faqsAnswered.detail
    },
    {
      label: t.metrics.responseTime.label,
      value: "< 24 hours",
      detail: t.metrics.responseTime.detail
    },
    {
      label: t.metrics.languagesSupported.label,
      value: "6",
      detail: t.metrics.languagesSupported.detail
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
        href: resourcesHref,
      }}
      metrics={metrics}
      centered={false}
      disableHighlight={false}
    />
  );
}
