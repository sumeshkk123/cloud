"use client";

import type { PageTitleRecord } from "@/lib/api/page-titles";
import { ConsultingLayout } from "@/components/frontend/mlm-consulting";
import { consultingContent } from "./content";

type MlmConsultingClientProps = {
  pageTitleData: PageTitleRecord | null;
  contactHref: string;
  servicesHref: string;
  featuresHref: string;
  locale?: string;
};

export function MlmConsultingClient({
  pageTitleData,
  contactHref,
  servicesHref,
  featuresHref,
  locale = "en",
}: MlmConsultingClientProps) {
  return (
    <ConsultingLayout
      content={consultingContent}
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
