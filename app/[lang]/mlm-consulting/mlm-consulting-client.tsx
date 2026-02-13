"use client";

import type { ServicePageTitleData } from "@/lib/services-page-title";
import { ConsultingLayout } from "@/components/frontend/mlm-consulting";
import type { ConsultingPageContent } from "@/components/frontend/mlm-consulting";
import { consultingContent } from "./content";

type MlmConsultingClientProps = {
  pageTitleData: ServicePageTitleData | null;
  contactHref: string;
  servicesHref: string;
  featuresHref: string;
  locale?: string;
};

function mergeContentWithPageTitle(
  content: ConsultingPageContent,
  pageTitleData: ServicePageTitleData | null
): ConsultingPageContent {
  if (!pageTitleData) return content;
  return {
    ...content,
    hero: {
      ...content.hero,
      title: pageTitleData.title ?? content.hero.title,
      badge: pageTitleData.pagePill ?? content.hero.badge,
      description: pageTitleData.sectionSubtitle ?? content.hero.description,
    },
  };
}

export function MlmConsultingClient({
  pageTitleData,
  contactHref,
  servicesHref,
  featuresHref,
  locale = "en",
}: MlmConsultingClientProps) {
  const content = mergeContentWithPageTitle(consultingContent, pageTitleData);
  return (
    <ConsultingLayout
      content={content}
      contactHref={contactHref}
      servicesHref={servicesHref}
      featuresHref={featuresHref}
      serverTitle={pageTitleData?.title ?? undefined}
      serverBadge={pageTitleData?.pagePill ?? undefined}
      serverDescription={pageTitleData?.sectionSubtitle ?? undefined}
      serverImageUrl={pageTitleData?.image ?? undefined}
      locale={locale}
    />
  );
}
