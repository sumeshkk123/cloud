import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getPageFromSlug, modulesSubpageToSlugMap } from "@/lib/page-slugs";
import { getModuleSubpageHeroDataBySlug } from "@/lib/module-subpage-hero";
import { ModuleSubpageClient } from "./module-subpage-client";
import { getModuleSlugFromTitleOrId, isModulesSubpageSlug, MODULES_SUBPAGE_SLUGS } from "@/lib/modules-subpage-slugs";
import { listModules } from "@/lib/api/modules";
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

async function resolveCanonicalSlugForModule(
  locale: SupportedLocale,
  moduleRow: {
    id: string;
    title: string;
    slug?: string | null;
    image?: string | null;
    showOnHomePage?: boolean;
  },
  englishModules?: Awaited<ReturnType<typeof listModules>>
): Promise<string | null> {
  const explicit = String(moduleRow.slug || "").trim().toLowerCase();
  if (explicit && isModulesSubpageSlug(explicit)) return explicit;
  if (explicit) {
    const explicitBase = explicit.replace(/[-_]?(\d+)$/, "");
    const fromExplicitText = getModuleSlugFromTitleOrId(explicitBase, null);
    if (fromExplicitText && isModulesSubpageSlug(fromExplicitText)) return fromExplicitText;
    const mappedFromExplicit =
      getPageFromSlug(explicitBase, locale) ??
      getPageFromSlug(explicitBase, i18n.defaultLocale);
    if (mappedFromExplicit && isModulesSubpageSlug(mappedFromExplicit)) return mappedFromExplicit;
  }

  const direct = getModuleSlugFromTitleOrId(moduleRow.title, moduleRow.id);
  if (direct && isModulesSubpageSlug(direct)) return direct;

  if (locale !== "en") {
    const enRows = englishModules ?? (await listModules("en"));
    const image = String(moduleRow.image || "");
    const showOnHomePage = Boolean(moduleRow.showOnHomePage ?? false);
    const enMatch = enRows.find(
      (m) =>
        String(m.image || "") === image &&
        Boolean(m.showOnHomePage ?? false) === showOnHomePage
    );
    if (enMatch) {
      const enDerived = getModuleSlugFromTitleOrId(enMatch.title, enMatch.id);
      if (enDerived && isModulesSubpageSlug(enDerived)) return enDerived;
      const enExplicit = String(enMatch.slug || "").trim();
      if (enExplicit && isModulesSubpageSlug(enExplicit)) return enExplicit;
    }
  }

  return null;
}

async function resolveModulePageFromUrlSlug(
  urlSlug: string,
  locale: SupportedLocale,
  moduleIdHint?: string
): Promise<{ pageId: string; moduleId?: string } | null> {
  // 1) Prefer backend-admin slug first
  let modules = await listModules(locale);
  if (locale !== "en" && modules.length === 0) {
    modules = await listModules("en");
  }
  const englishModules = locale === "en" ? modules : await listModules("en");

  const exactSlugMatch = modules.find(
    (m) => String(m.slug || "").trim().toLowerCase() === urlSlug
  );
  if (exactSlugMatch) {
    const derivedPageId = await resolveCanonicalSlugForModule(locale, exactSlugMatch, englishModules);
    if (derivedPageId && isModulesSubpageSlug(derivedPageId)) {
      return { pageId: derivedPageId, moduleId: exactSlugMatch.id };
    }
  }

  // 2) Fall back to static/mapped slugs
  const mappedPageId =
    getPageFromSlug(urlSlug, locale) ?? (isModulesSubpageSlug(urlSlug) ? urlSlug : null);
  if (mappedPageId && isModulesSubpageSlug(mappedPageId)) {
    // Strict backend-first: if locale has an explicit slug for this module, old/static slugs are invalid.
    const match = modules.find((m) => {
      const derived = getModuleSlugFromTitleOrId(m.title, m.id);
      if (derived && derived === mappedPageId) return true;
      const explicit = String(m.slug || "").trim();
      return explicit && explicit === mappedPageId;
    });
    const preferredSlug = String(match?.slug || "").trim() || null;
    const requestedModuleId = String(moduleIdHint || "").trim();
    if (preferredSlug && preferredSlug.toLowerCase() !== urlSlug.toLowerCase()) {
      if (!requestedModuleId || String(match?.id || "") !== requestedModuleId) return null;
    }
    return { pageId: mappedPageId, moduleId: requestedModuleId || undefined };
  }

  return null;
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
  const searchResolved = props?.searchParams != null ? (props.searchParams instanceof Promise ? await props.searchParams : props.searchParams) : undefined;

  if (!resolved) notFound();

  // Resolve URL slug to page id (e.g. e-voucher-for-mlm-software -> e-voucher) so translated slugs work.
  // Also support admin-defined custom slugs (e.g. /email2) by resolving through module records.
  const resolvedPage = await resolveModulePageFromUrlSlug(urlSlug, locale as SupportedLocale, searchResolved?.mid);
  if (!resolvedPage) notFound();
  const { pageId, moduleId: moduleIdFromUrl } = resolvedPage;

  const pageTitleData = await getModuleSubpageHeroDataBySlug(
    pageId,
    locale,
    searchResolved?.mid || moduleIdFromUrl
  );

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
