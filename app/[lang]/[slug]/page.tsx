import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getPageFromSlug, modulesSubpageToSlugMap } from "@/lib/page-slugs";
import { getModuleSubpageHeroDataBySlug } from "@/lib/module-subpage-hero";
import { ModuleSubpageClient } from "./module-subpage-client";
import { isModulesSubpageSlug, MODULES_SUBPAGE_SLUGS } from "@/lib/modules-subpage-slugs";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

/** All URL slugs that resolve to a module subpage (for static params). */
function getModuleSubpageUrlSlugs(): string[] {
  const slugs = new Set<string>(MODULES_SUBPAGE_SLUGS.slice());
  for (const localeSlugs of Object.values(modulesSubpageToSlugMap)) {
    for (const s of Object.values(localeSlugs)) {
      slugs.add(s);
    }
  }
  return Array.from(slugs);
}

export function generateStaticParams(): { slug: string }[] {
  return getModuleSubpageUrlSlugs().map((slug) => ({ slug }));
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

type ModuleSubpagePageProps = {
  params?: Promise<{ lang: SupportedLocale; slug: string }> | { lang: SupportedLocale; slug: string };
  searchParams?: Promise<{ mid?: string }> | { mid?: string };
};

export default async function ModuleSubpagePage(props: ModuleSubpagePageProps) {
  let resolved: { lang: SupportedLocale; slug: string } | null = null;
  try {
    const params = props?.params;
    resolved =
      params != null ? (params instanceof Promise ? await params : params) : null;
  } catch {
    notFound();
  }
  const locale = resolveLocale(resolved?.lang ?? i18n.defaultLocale);
  const urlSlug = decodeURIComponent(resolved?.slug ?? "").toLowerCase();

  if (!resolved) notFound();

  // Resolve URL slug to page id (e.g. e-voucher-for-mlm-software -> e-voucher) so translated slugs work
  const pageId = getPageFromSlug(urlSlug, locale as SupportedLocale) ?? (isModulesSubpageSlug(urlSlug) ? urlSlug : null);
  if (!pageId || !isModulesSubpageSlug(pageId)) notFound();

  const searchResolved = props?.searchParams != null ? (props.searchParams instanceof Promise ? await props.searchParams : props.searchParams) : undefined;
  const pageTitleData = await getModuleSubpageHeroDataBySlug(pageId, locale, searchResolved?.mid);

  return (
    <ModuleSubpageClient
      slug={pageId}
      locale={locale}
      serverTitle={pageTitleData?.title ?? undefined}
      serverBadge={pageTitleData?.pagePill ?? undefined}
      serverDescription={pageTitleData?.sectionSubtitle ?? undefined}
    />
  );
}
