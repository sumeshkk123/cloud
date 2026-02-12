"use client";

import type { PageTitleRecord } from "@/lib/api/page-titles";
import { IndustryPageLayout } from "@/components/frontend/industries/subpage";
import type { IndustryPageContent } from "@/components/frontend/industries/subpage";
import { insuranceContent } from "./content";

const DEMO_HREF = "https://demo.cloudmlmsoftware.com";

type InsuranceClientProps = {
  pageTitleData: PageTitleRecord | null;
  contactHref: string;
  demoHref: string;
  pricingHref: string;
  locale?: string;
};

function mergeContentWithPageTitle(
  content: IndustryPageContent,
  pageTitleData: PageTitleRecord | null
): IndustryPageContent {
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

export function InsuranceClient({
  pageTitleData,
  contactHref,
  demoHref = DEMO_HREF,
  pricingHref,
  locale = "en",
}: InsuranceClientProps) {
  const content = mergeContentWithPageTitle(insuranceContent, pageTitleData);
  const contentWithIntroHref = content.introSection
    ? {
        ...content,
        introSection: {
          ...content.introSection,
          sidebarCtaHref: content.introSection.sidebarCtaHref ?? pricingHref,
        },
      }
    : content;

  return (
    <IndustryPageLayout
      content={contentWithIntroHref}
      contactHref={contactHref}
      demoHref={demoHref}
      pricingHref={pricingHref}
      industrySlug="insurance"
      serverTitle={pageTitleData?.title ?? null}
      serverBadge={pageTitleData?.pagePill ?? null}
      serverDescription={pageTitleData?.sectionSubtitle ?? null}
      locale={locale}
    />
  );
}
