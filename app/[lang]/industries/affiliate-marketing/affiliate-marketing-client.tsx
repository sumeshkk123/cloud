"use client";

import type { PageTitleRecord } from "@/lib/api/page-titles";
import { IndustryPageLayout } from "@/components/frontend/industries/subpage";
import type { IndustryPageContent } from "@/components/frontend/industries/subpage";
import { affiliateMarketingContent } from "./content";

const DEMO_HREF = "https://demo.cloudmlmsoftware.com";

type AffiliateMarketingClientProps = {
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

export function AffiliateMarketingClient({
  pageTitleData,
  contactHref,
  demoHref = DEMO_HREF,
  pricingHref,
  locale = "en",
}: AffiliateMarketingClientProps) {
  const content = mergeContentWithPageTitle(affiliateMarketingContent, pageTitleData);
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
      industrySlug="affiliate-marketing"
      serverTitle={pageTitleData?.title ?? null}
      serverBadge={pageTitleData?.pagePill ?? null}
      serverDescription={pageTitleData?.sectionSubtitle ?? null}
      locale={locale}
    />
  );
}
