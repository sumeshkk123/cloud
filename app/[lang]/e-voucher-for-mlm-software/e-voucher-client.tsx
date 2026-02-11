"use client";

import type { PageTitleRecord } from "@/lib/api/page-titles";
import { ModuleSubpageLayout } from "@/components/frontend/modules/subpage";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";
import { eVoucherContent } from "./content";

type Props = { pageTitleData: PageTitleRecord | null; contactHref: string; secondaryHref: string; locale?: string };

function merge(content: ModuleFeatureContent, pageTitleData: PageTitleRecord | null): ModuleFeatureContent {
  if (!pageTitleData) return content;
  return { ...content, hero: { ...content.hero, title: pageTitleData.title, badge: pageTitleData.pagePill ?? content.hero.badge, description: pageTitleData.sectionSubtitle ?? content.hero.description } };
}

export function EVoucherClient({ pageTitleData, contactHref, secondaryHref, locale = "en" }: Props) {
  return <ModuleSubpageLayout content={merge(eVoucherContent, pageTitleData)} contactHref={contactHref} demoHref={secondaryHref} moduleSlug="e-voucher" locale={locale} />;
}
