import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";
import { getModulesSubpageMeta, isModulesSubpageSlug } from "@/lib/modules-subpage-slugs";
import { getPageFromSlug } from "@/lib/page-slugs";
import { i18n } from "@/i18n-config";

export const dynamic = "force-dynamic";

const FALLBACK_TITLE = "Module | Cloud MLM Software";

type LayoutProps = {
  params?: Promise<{ lang: SupportedLocale; slug: string }> | { lang: SupportedLocale; slug: string };
  children: React.ReactNode;
};

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
  const pageId = getPageFromSlug(urlSlug, locale) ?? (isModulesSubpageSlug(urlSlug) ? urlSlug : null);
  if (!pageId || !isModulesSubpageSlug(pageId)) return { title: FALLBACK_TITLE };
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
