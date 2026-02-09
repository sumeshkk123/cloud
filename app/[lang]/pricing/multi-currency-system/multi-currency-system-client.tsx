"use client";

import type { PageTitleRecord } from "@/lib/api/page-titles";
import { PricingSubPageLayout } from "@/components/frontend/pricing/sub-page";
import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";
import { multiCurrencySystemContent } from "./content";

type MultiCurrencySystemClientProps = {
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

export function MultiCurrencySystemClient({
  pageTitleData,
  contactHref,
  secondaryHref,
}: MultiCurrencySystemClientProps) {
  const content = mergeContentWithPageTitle(
    multiCurrencySystemContent,
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
