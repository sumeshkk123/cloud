"use client";

import type { PageTitleRecord } from "@/lib/api/page-titles";
import { ModuleSubpageLayout } from "@/components/frontend/modules/subpage";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";
import { massEmailSendingModuleContent } from "./content";

type Props = { pageTitleData: PageTitleRecord | null; contactHref: string; secondaryHref: string };

function merge(content: ModuleFeatureContent, pageTitleData: PageTitleRecord | null): ModuleFeatureContent {
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

export function MassEmailSendingModuleClient({ pageTitleData, contactHref, secondaryHref }: Props) {
  const content = merge(massEmailSendingModuleContent, pageTitleData);
  return <ModuleSubpageLayout content={content} contactHref={contactHref} demoHref={secondaryHref} />;
}
