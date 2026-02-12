"use client";

import { ConsultingLayout } from "@/components/frontend/mlm-consulting";
import { consultingContent } from "./content";

type MlmConsultingClientProps = {
  contactHref: string;
  servicesHref: string;
  featuresHref: string;
  locale?: string;
};

export function MlmConsultingClient({
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
      locale={locale}
    />
  );
}
