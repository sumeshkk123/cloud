import { HeroSection, type HeroMetric } from "@/components/frontend/common/hero-section";
import { Headset } from "lucide-react";
import type { Locale } from "@/i18n-config";
import type { PageTitleRecord } from "@/lib/api/page-titles";
import { getContactContent } from "@/lib/contact";

interface ContactHeroSectionProps {
  locale: Locale;
  contactHref: string;
  supportHref: string;
  pageTitleData?: PageTitleRecord | null;
}

export function ContactHeroSection({ locale, contactHref, supportHref, pageTitleData }: ContactHeroSectionProps) {
  const content = getContactContent(locale);
  const t = content.heroSection;

  // Parse title to extract highlight text
  const parseTitle = (title: string): { beforeText?: string; highlightText: string; afterText?: string } => {
    const highlightWords = [
      t.fallbackTitle.highlightText,
      "Let's", "Let", "plan", "next", "milestone",
      "Plan", "Next", "Milestone", "MLM", "programme", "together"
    ];

    const words = title.split(' ');
    const highlightIndex = words.findIndex(w =>
      highlightWords.some(hw => w.toLowerCase().includes(hw.toLowerCase()))
    );

    if (highlightIndex >= 0) {
      return {
        beforeText: highlightIndex > 0 ? words.slice(0, highlightIndex).join(' ') : undefined,
        highlightText: words[highlightIndex],
        afterText: highlightIndex < words.length - 1 ? words.slice(highlightIndex + 1).join(' ') : undefined,
      };
    }

    // Default: highlight first word
    return {
      highlightText: words[0] || t.fallbackTitle.highlightText,
      afterText: words.length > 1 ? words.slice(1).join(' ') : undefined,
    };
  };

  const titleParts = pageTitleData?.title
    ? parseTitle(pageTitleData.title)
    : {
      beforeText: t.fallbackTitle.beforeText,
      highlightText: t.fallbackTitle.highlightText,
      afterText: t.fallbackTitle.afterText
    };

  // Build metrics from translations
  const metrics: HeroMetric[] = [
    {
      label: t.metrics.averageResponse.label,
      value: t.metrics.averageResponse.value,
      detail: t.metrics.averageResponse.detail
    },
    {
      label: t.metrics.dedicatedExperts.label,
      value: t.metrics.dedicatedExperts.value,
      detail: t.metrics.dedicatedExperts.detail
    },
    {
      label: t.metrics.customerSatisfaction.label,
      value: t.metrics.customerSatisfaction.value,
      detail: t.metrics.customerSatisfaction.detail
    },
    {
      label: t.metrics.copilotAssistance.label,
      value: t.metrics.copilotAssistance.value,
      detail: t.metrics.copilotAssistance.detail
    }
  ];

  return (
    <div className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-sky-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.18),transparent_45%),radial-gradient(circle_at_88%_-6%,rgba(16,185,129,0.18),transparent_55%)]" />
      <HeroSection
        badgeText={pageTitleData?.pagePill || t.badgeText}
        badgeIcon={<Headset className="h-4 w-4" aria-hidden />}
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
          href: supportHref,
          external: true,
        }}
        metrics={metrics}
        centered={false}
        disableHighlight={false}
        className="bg-transparent border-0 py-0"
      />
    </div>
  );
}
