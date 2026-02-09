"use client";

import type { PageTitleRecord } from "@/lib/api/page-titles";
import { ModuleSubpageLayout } from "@/components/frontend/modules/subpage";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";
import { emailModuleContent } from "./content";

type Props = { pageTitleData: PageTitleRecord | null; contactHref: string; secondaryHref: string };

function merge(content: ModuleFeatureContent, pageTitleData: PageTitleRecord | null): ModuleFeatureContent {
  if (!pageTitleData) return content;
  return { ...content, hero: { ...content.hero, title: pageTitleData.title, badge: pageTitleData.pagePill ?? content.hero.badge, description: pageTitleData.sectionSubtitle ?? content.hero.description } };
}

export function EmailModuleClient({ pageTitleData, contactHref, secondaryHref }: Props) {
  return <ModuleSubpageLayout content={merge(emailModuleContent, pageTitleData)} contactHref={contactHref} demoHref={secondaryHref} />;
}
