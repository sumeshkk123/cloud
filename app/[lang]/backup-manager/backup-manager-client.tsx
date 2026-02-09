"use client";

import type { PageTitleRecord } from "@/lib/api/page-titles";
import { ModuleSubpageLayout } from "@/components/frontend/modules/subpage";
import type { ModuleFeatureContent } from "@/components/frontend/modules/subpage";
import { backupManagerContent } from "./content";

type BackupManagerClientProps = {
  pageTitleData: PageTitleRecord | null;
  contactHref: string;
  secondaryHref: string;
};

function mergeContentWithPageTitle(
  content: ModuleFeatureContent,
  pageTitleData: PageTitleRecord | null
): ModuleFeatureContent {
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

export function BackupManagerClient({
  pageTitleData,
  contactHref,
  secondaryHref,
}: BackupManagerClientProps) {
  const content = mergeContentWithPageTitle(backupManagerContent, pageTitleData);
  return (
    <ModuleSubpageLayout
      content={content}
      contactHref={contactHref}
      demoHref={secondaryHref}
    />
  );
}
