import { PlayCircle } from "lucide-react";
import { HeroSection, type HeroMetric } from "@/components/frontend/common/hero-section";
import type { Locale } from "@/i18n-config";
import { getPageTitle, type PageTitleRecord } from "@/lib/api/page-titles";
import { getMetaDetail, type MetaDetailRecord } from "@/lib/api/meta-details";
import { getFreeDemoContent } from "@/lib/free-demo";

interface FreeDemoHeroSectionProps {
  locale: Locale;
  contactHref: string;
  plansHref: string;
  pageTitleData?: PageTitleRecord | null;
  metaDetails?: MetaDetailRecord | null;
}

export async function FreeDemoHeroSection({
  locale,
  contactHref,
  plansHref,
  pageTitleData: propPageTitleData,
  metaDetails: propMetaDetails,
}: FreeDemoHeroSectionProps) {
  const pageTitleData = propPageTitleData ?? (await getPageTitle("free-mlm-software-demo", locale));
  const metaDetails = propMetaDetails ?? (await getMetaDetail("free-mlm-software-demo", locale));

  const t = getFreeDemoContent(locale).heroSection;

  const metrics: HeroMetric[] = [
    {
      label: t.metrics.tailoredSandbox.label,
      // value: t.metrics.tailoredSandbox.value ?? t.includedValue,
      value: "",
      detail: t.metrics.tailoredSandbox.detail,
    },
    {
      label: t.metrics.guidedWalkthroughs.label,
      // value: t.metrics.guidedWalkthroughs.value ?? t.includedValue,
      value: "",
      detail: t.metrics.guidedWalkthroughs.detail,
    },
    {
      label: t.metrics.accessWindow.label,
      value: t.metrics.accessWindow.value ?? t.includedValue,
      detail: t.metrics.accessWindow.detail,
    },
    {
      label: t.metrics.securityBriefing.label,
      // value: t.metrics.securityBriefing.value ?? t.includedValue,
      value: "",
      detail: t.metrics.securityBriefing.detail,
    },
  ];

  const parseTitle = (title: string): { beforeText?: string; highlightText: string; afterText?: string } => {
    const words = title.split(" ").filter(Boolean);
    if (words.length <= 1) {
      return { highlightText: title || "Experience" };
    }
    return {
      highlightText: words[0] || "Experience",
      afterText: words.slice(1).join(" "),
    };
  };

  const titleParts = pageTitleData?.title ? parseTitle(pageTitleData.title) : parseTitle(t.fallbackTitle);

  return (
    <HeroSection
      className="bg-gradient-to-br from-emerald-50 via-white to-sky-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
      badgeText={pageTitleData?.pagePill || t.badgeText}
      badgeIcon={<PlayCircle className="h-4 w-4" aria-hidden />}
      beforeText={titleParts.beforeText}
      highlightText={titleParts.highlightText}
      afterText={titleParts.afterText}
      description={pageTitleData?.sectionSubtitle || metaDetails?.description || t.fallbackDescription}
      primaryCta={{
        label: t.primaryCta,
        href: contactHref,
      }}
      secondaryCta={{
        label: t.secondaryCta,
        href: plansHref,
      }}
      metrics={metrics}
    />
  );
}

