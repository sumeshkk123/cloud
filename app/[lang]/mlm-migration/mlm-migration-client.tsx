"use client";

import { MigrationLayout } from "@/components/frontend/mlm-migration";
import { migrationContent } from "./content";

type MlmMigrationClientProps = {
  contactHref: string;
  servicesHref: string;
  featuresHref: string;
  locale?: string;
};

export function MlmMigrationClient({
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
      locale={locale}
    />
  );
}
