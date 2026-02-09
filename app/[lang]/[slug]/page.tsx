import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getPageTitle } from "@/lib/api/page-titles";
import { ModuleSubpageClient } from "./module-subpage-client";
import { isModulesSubpageSlug, MODULES_SUBPAGE_SLUGS } from "@/lib/modules-subpage-slugs";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export function generateStaticParams(): { slug: string }[] {
  return MODULES_SUBPAGE_SLUGS.map((slug) => ({ slug }));
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

type ModuleSubpagePageProps = {
  params?: Promise<{ lang: SupportedLocale; slug: string }> | { lang: SupportedLocale; slug: string };
};

export default async function ModuleSubpagePage(props: ModuleSubpagePageProps) {
  const params = props?.params;
  const resolved =
    params != null ? (params instanceof Promise ? await params : params) : null;
  const locale = resolveLocale(resolved?.lang ?? i18n.defaultLocale);
  const slug = decodeURIComponent(resolved?.slug ?? "").toLowerCase();

  if (!resolved || !isModulesSubpageSlug(slug)) notFound();

  const pageTitleData = await getPageTitle(`mlm-software-modules-${slug}`, locale);

  return (
    <ModuleSubpageClient
      slug={slug}
      locale={locale}
      serverTitle={pageTitleData?.title ?? undefined}
      serverBadge={pageTitleData?.pagePill ?? undefined}
      serverDescription={pageTitleData?.sectionSubtitle ?? undefined}
    />
  );
}
