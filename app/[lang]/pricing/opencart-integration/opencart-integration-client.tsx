"use client";

import type { PageTitleRecord } from "@/lib/api/page-titles";
import { PricingSubPageLayout } from "@/components/frontend/pricing/sub-page";
import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";
import { opencartIntegrationContent } from "./content";

type OpencartIntegrationClientProps = {
  pageTitleData: PageTitleRecord | null;
  contactHref: string;
  secondaryHref: string;
};

function mergeContentWithPageTitle(
  content: PricingSubPageContent,
  pageTitleData: PageTitleRecord | null
): PricingSubPageContent {
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

export function OpencartIntegrationClient({
  pageTitleData,
  contactHref,
  secondaryHref,
}: OpencartIntegrationClientProps) {
  const content = mergeContentWithPageTitle(
    opencartIntegrationContent,
    pageTitleData
  );
  return (
    <PricingSubPageLayout
      content={content}
      contactHref={contactHref}
      secondaryHref={secondaryHref}
    />
  );
}
