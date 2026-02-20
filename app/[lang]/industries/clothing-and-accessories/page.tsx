import { notFound } from "next/navigation";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getIndustrySolutionBySlug } from "@/lib/api/industry-solutions";
import { ClothingAccessoriesClient } from "./clothing-and-accessories-client";

export const dynamic = "force-dynamic";

type ClothingAccessoriesPageProps = {
  params: { lang: SupportedLocale };
};

export default async function ClothingAccessoriesPage({ params }: ClothingAccessoriesPageProps) {
  const locale = resolveLocale(params.lang);
  const industryData = await getIndustrySolutionBySlug("clothing-and-accessories", locale);

  if (!industryData) {
    notFound();
  }

  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <ClothingAccessoriesClient
      heroTitle={industryData.title}
      heroDescription={industryData.description}
      contactHref={contactHref}
      demoHref={demoHref}
      pricingHref={pricingHref}
    />
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
