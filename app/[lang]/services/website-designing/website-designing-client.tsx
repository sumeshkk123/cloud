"use client";

import type { ServicePageTitleData } from "@/lib/services-page-title";
import { ServiceSubpageLayout } from "@/components/frontend/services/subpage";
import type { ServiceFeatureContent } from "@/components/frontend/services/subpage";
import { websiteDesigningContent } from "./content";

type WebsiteDesigningClientProps = {
  pageTitleData: ServicePageTitleData | null;
  contactHref: string;
  secondaryHref: string;
  locale?: string;
};

function mergeContentWithPageTitle(
  content: ServiceFeatureContent,
  pageTitleData: ServicePageTitleData | null
): ServiceFeatureContent {
  if (!pageTitleData) return content;
  return {
    ...content,
    hero: {
      ...content.hero,
      title: pageTitleData.title,
      badge: pageTitleData.pagePill ?? content.hero.badge,
      description: pageTitleData.sectionSubtitle ?? content.hero.description,
    },
  };
}

export function WebsiteDesigningClient({
  pageTitleData,
  contactHref,
  secondaryHref,
  locale = "en",
}: WebsiteDesigningClientProps) {
  const content = mergeContentWithPageTitle(websiteDesigningContent, pageTitleData);
  return (
    <ServiceSubpageLayout
      content={content}
      contactHref={contactHref}
      demoHref={secondaryHref}
      serverTitle={pageTitleData?.title ?? undefined}
      serverBadge={pageTitleData?.pagePill ?? undefined}
      serverDescription={pageTitleData?.sectionSubtitle ?? undefined}
      serverImageUrl={pageTitleData?.image ?? undefined}
      serverKeyFeatures={pageTitleData?.keyFeatures ?? undefined}
      serviceSlug="website-designing"
      locale={locale}
    />
  );
}
