"use client";

import type { PageTitleRecord } from "@/lib/api/page-titles";
import { MigrationLayout } from "@/components/frontend/mlm-migration";
import { migrationContent } from "./content";

type MlmMigrationClientProps = {
  pageTitleData: PageTitleRecord | null;
  contactHref: string;
  servicesHref: string;
  featuresHref: string;
  locale?: string;
};

export function MlmMigrationClient({
  pageTitleData,
  contactHref,
  servicesHref,
  featuresHref,
  locale = "en",
}: MlmMigrationClientProps) {
  return (
    <MigrationLayout
      content={migrationContent}
      contactHref={contactHref}
      servicesHref={servicesHref}
      featuresHref={featuresHref}
      serverTitle={pageTitleData?.title ?? undefined}
      serverBadge={pageTitleData?.pagePill ?? undefined}
      serverDescription={pageTitleData?.sectionSubtitle ?? undefined}
      locale={locale}
    />
  );
}
