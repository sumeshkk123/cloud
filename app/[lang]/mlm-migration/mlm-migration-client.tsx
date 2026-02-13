"use client";

import type { ServicePageTitleData } from "@/lib/services-page-title";
import { MigrationLayout } from "@/components/frontend/mlm-migration";
import type { MigrationPageContent } from "@/components/frontend/mlm-migration";
import { migrationContent } from "./content";

type MlmMigrationClientProps = {
  pageTitleData: ServicePageTitleData | null;
  contactHref: string;
  servicesHref: string;
  featuresHref: string;
  locale?: string;
};

function mergeContentWithPageTitle(
  content: MigrationPageContent,
  pageTitleData: ServicePageTitleData | null
): MigrationPageContent {
  if (!pageTitleData) return content;
  return {
    ...content,
    hero: {
      ...content.hero,
      title: pageTitleData.title ?? content.hero.title,
      badge: pageTitleData.pagePill ?? content.hero.badge,
      description: pageTitleData.sectionSubtitle ?? content.hero.description,
    },
  };
}

export function MlmMigrationClient({
  pageTitleData,
  contactHref,
  servicesHref,
  featuresHref,
  locale = "en",
}: MlmMigrationClientProps) {
  const content = mergeContentWithPageTitle(migrationContent, pageTitleData);
  return (
    <MigrationLayout
      content={content}
      contactHref={contactHref}
      servicesHref={servicesHref}
      featuresHref={featuresHref}
      serverTitle={pageTitleData?.title ?? undefined}
      serverBadge={pageTitleData?.pagePill ?? undefined}
      serverDescription={pageTitleData?.sectionSubtitle ?? undefined}
      serverImageUrl={pageTitleData?.image ?? undefined}
      locale={locale}
    />
  );
}
