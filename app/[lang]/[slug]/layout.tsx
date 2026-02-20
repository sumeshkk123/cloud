import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";
import { getModuleSlugFromTitleOrId, getModulesSubpageMeta, isModulesSubpageSlug } from "@/lib/modules-subpage-slugs";
import { getPageFromSlug } from "@/lib/page-slugs";
import { i18n } from "@/i18n-config";
import { listModules } from "@/lib/api/modules";

export const dynamic = "force-dynamic";

const FALLBACK_TITLE = "Module | Cloud MLM Software";

type LayoutProps = {
  params?: Promise<{ lang: SupportedLocale; slug: string }> | { lang: SupportedLocale; slug: string };
  children: React.ReactNode;
};

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
  locale: SupportedLocale
): Promise<string | null> {
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
    if (derivedPageId && isModulesSubpageSlug(derivedPageId)) return derivedPageId;
  }

  // 2) Fall back to static/mapped slugs
  const mappedPageId =
    getPageFromSlug(urlSlug, locale) ?? (isModulesSubpageSlug(urlSlug) ? urlSlug : null);
  if (mappedPageId && isModulesSubpageSlug(mappedPageId)) return mappedPageId;

  return null;
}

export async function generateMetadata(props: LayoutProps): Promise<Metadata> {
  let resolved: { lang: SupportedLocale; slug: string } | null = null;
  try {
    const params = props?.params;
    resolved =
      params != null ? (params instanceof Promise ? await params : params) : null;
  } catch {
    return { title: FALLBACK_TITLE };
  }
  const lang = resolved?.lang;
  if (!lang) return { title: FALLBACK_TITLE };
  const urlSlug = decodeURIComponent(resolved?.slug ?? "").toLowerCase();
  const locale = lang ?? i18n.defaultLocale;
  const pageId = await resolveModulePageFromUrlSlug(urlSlug, locale);
  if (!pageId) return { title: FALLBACK_TITLE };
  const meta = getModulesSubpageMeta(pageId);
  if (!meta) return { title: FALLBACK_TITLE };
  return getPageMetadata({ lang }, `/${urlSlug}`, {
    page: `mlm-software-modules-${pageId}`,
    fallbackTitle: meta.fallbackTitle,
    fallbackDescription: meta.fallbackDescription,
    fallbackKeywords: meta.fallbackKeywords,
  });
}

export default function ModuleSubpageLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
