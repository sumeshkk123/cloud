"use client";

import type { PageTitleRecord } from "@/lib/api/page-titles";
import { PricingSubPageLayout } from "@/components/frontend/pricing/sub-page";
import type { PricingSubPageContent } from "@/components/frontend/pricing/sub-page";
import { nativeAndroidAppWithMlmSoftwareContent } from "./content";

type NativeAndroidAppWithMlmSoftwareClientProps = {
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

export function NativeAndroidAppWithMlmSoftwareClient({
  pageTitleData,
  contactHref,
  secondaryHref,
}: NativeAndroidAppWithMlmSoftwareClientProps) {
  const content = mergeContentWithPageTitle(
    nativeAndroidAppWithMlmSoftwareContent,
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
