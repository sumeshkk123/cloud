"use client";

import type { PageTitleRecord } from "@/lib/api/page-titles";
import { PricingSubPageLayout } from "@/components/frontend/pricing/sub-page";
import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";
import { compensationContent } from "./content";

const DEMO_URL = "https://demo.cloudmlmsoftware.com";

type Props = { pageTitleData: PageTitleRecord | null; contactHref: string; secondaryHref: string };

function merge(content: PricingSubPageContent, pageTitleData: PageTitleRecord | null): PricingSubPageContent {
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

export function CompensationClient({ pageTitleData, contactHref, secondaryHref }: Props) {
  return (
    <PricingSubPageLayout
      content={merge(compensationContent, pageTitleData)}
      contactHref={contactHref}
      secondaryHref={secondaryHref}
    />
  );
}
