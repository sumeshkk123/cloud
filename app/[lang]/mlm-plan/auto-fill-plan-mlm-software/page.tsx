import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import type { PageTitleRecord } from "@/lib/api/page-titles";
import { getPlanSubpageHeroDataBySlug } from "@/lib/plan-subpage-hero";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";
import { AutoFillClient } from "./auto-fill-client";

export const dynamic = "force-dynamic";

const PLAN_SLUG = "auto-fill-plan-mlm-software";
const META_PAGE = `mlm-plan/${PLAN_SLUG}`;

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

const FALLBACK_TITLE = "Auto Fill MLM Plan – Maximize Your Network Success";
const FALLBACK_DESCRIPTION =
  "Explore Cloud MLM Software's auto fill MLM plan—automated matrix placements, queue visibility, and compliance-ready payouts. Tailored Auto Fill Plan MLM Software with powerful features.";
const FALLBACK_KEYWORDS =
  "auto fill MLM plan, forced matrix compensation, Cloud MLM Software, auto fill MLM software, matrix queue automation, MLM compensation compliance, MLM plan analytics";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}) {
  return getPageMetadata(params, `/mlm-plan/${PLAN_SLUG}`, {
    page: META_PAGE,
    fallbackTitle: FALLBACK_TITLE,
    fallbackDescription: FALLBACK_DESCRIPTION,
    fallbackKeywords: FALLBACK_KEYWORDS,
  });
}

type PageProps = {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
};

export default async function AutoFillPlanPage({ params }: PageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";
  const plansHref = buildLocalizedPath("/mlm-plans", locale);

  // Hero from plans list only (same source as /mlm-plans cards), like module/service inner pages
  const pageTitleData: PageTitleRecord | null = await getPlanSubpageHeroDataBySlug(PLAN_SLUG, locale);

  return (
    <AutoFillClient
      pageTitleData={pageTitleData}
      contactHref={contactHref}
      demoHref={demoHref}
      plansHref={plansHref}
      locale={locale}
    />
  );
}
