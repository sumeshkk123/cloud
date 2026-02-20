import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import type { PageTitleRecord } from "@/lib/api/page-titles";
import { getPlanSubpageHeroDataBySlug } from "@/lib/plan-subpage-hero";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";
import { AustralianXUpClient } from "./australian-x-up-client";

export const dynamic = "force-dynamic";

const PLAN_SLUG = "australian-x-up-plan-mlm-software";
const META_PAGE = `mlm-plan/${PLAN_SLUG}`;

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

const FALLBACK_TITLE = "Australian X-UP MLM Plan – Maximize Your Network Success";
const FALLBACK_DESCRIPTION =
  "The MLM Australian X-Up Plan is a modified version of the traditional multi-level marketing plan, designed to enhance earnings and incentivize member recruitment. Cloud MLM Software offers tailored Australian X-UP Plan MLM Software with powerful features.";
const FALLBACK_KEYWORDS =
  "Australian X-UP MLM plan, MLM pass-up compensation, Cloud MLM Software plan design, Australian MLM plan software, X-UP plan automation";

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

export default async function AustralianXUpPlanPage({ params }: PageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";
  const plansHref = buildLocalizedPath("/mlm-plans", locale);

  // Hero from plans list only (same source as /mlm-plans cards), like module/service inner pages
  const pageTitleData: PageTitleRecord | null = await getPlanSubpageHeroDataBySlug(PLAN_SLUG, locale);

  return (
    <AustralianXUpClient
      pageTitleData={pageTitleData}
      contactHref={contactHref}
      demoHref={demoHref}
      plansHref={plansHref}
      locale={locale}
    />
  );
}
