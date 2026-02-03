import { HeroSection, type HeroMetric } from "@/components/frontend/common/hero-section";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import type { PageTitleRecord } from "@/lib/api/page-titles";
import { getFeaturesContent } from "@/lib/features";

interface FeaturesHeroSectionProps {
  locale: Locale;
  pageTitleData?: PageTitleRecord | null;
}

export async function FeaturesHeroSection({
  locale,
  pageTitleData
}: FeaturesHeroSectionProps) {
  const t = getFeaturesContent(locale as any).hero;

  // Static hrefs for this page
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  // Parse title to extract highlight text
  // Expected format: "Build, automate, and scale modern direct selling experiences from one platform."
  const parseTitle = (title: string): { beforeText?: string; highlightText: string; afterText?: string } => {
    const words = title.split(' ');
    // Look for translated highlight phrases from the content
    const highlightPhrases = [
      t.highlightText,
      // Also check for common translations
      'modern direct selling',
      'moderno venta directa',
      'venta directa moderna',
      'vente directe moderne',
      'moderner Direktverkauf',
      'vendita diretta moderna',
      'venda direta moderna',
      '现代直销'
    ];

    // Try to find multi-word phrases first (check for 3-word, then 2-word)
    for (let i = 0; i < words.length - 1; i++) {
      const twoWords = `${words[i]} ${words[i + 1]}`;
      const threeWords = i < words.length - 2 ? `${words[i]} ${words[i + 1]} ${words[i + 2]}` : '';

      if (highlightPhrases.includes(threeWords)) {
        return {
          beforeText: i > 0 ? words.slice(0, i).join(' ') : undefined,
          highlightText: threeWords,
          afterText: i + 3 < words.length ? words.slice(i + 3).join(' ') : undefined,
        };
      }
      if (highlightPhrases.includes(twoWords)) {
        return {
          beforeText: i > 0 ? words.slice(0, i).join(' ') : undefined,
          highlightText: twoWords,
          afterText: i + 2 < words.length ? words.slice(i + 2).join(' ') : undefined,
        };
      }
    }

    // Fallback: use first word as highlight
    return {
      highlightText: words[0] || t.highlightText,
      afterText: words.length > 1 ? words.slice(1).join(' ') : undefined,
    };
  };

  const titleParts = pageTitleData?.title
    ? parseTitle(pageTitleData.title)
    : { beforeText: t.beforeText, highlightText: t.highlightText, afterText: t.afterText };

  // Build metrics from translations
  const metrics: HeroMetric[] = [
    {
      label: t.metrics.modulesShipped.label,
      value: "56",
      detail: t.metrics.modulesShipped.detail
    },
    {
      label: t.metrics.launchVelocity.label,
      value: "12 weeks",
      detail: t.metrics.launchVelocity.detail
    },
    {
      label: t.metrics.aiCopilots.label,
      value: "2025",
      detail: t.metrics.aiCopilots.detail
    }
  ];

  return (
    <HeroSection
      badgeText={pageTitleData?.pagePill || t.badgeText}
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
        href: demoHref,
        external: true,
      }}
      metrics={metrics}
      centered={false}
    />
  );
}
