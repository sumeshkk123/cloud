import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";
import { getServicesSubpageMeta, isServicesSubpageSlug, getServicePageKey } from "@/lib/services-subpage-slugs";

export const dynamic = "force-dynamic";

const FALLBACK_TITLE = "Service | Cloud MLM Software";

type LayoutProps = {
  params?: Promise<{ lang: SupportedLocale; slug: string }> | { lang: SupportedLocale; slug: string };
  children: React.ReactNode;
};

export async function generateMetadata(props: LayoutProps): Promise<Metadata> {
  let resolved: { lang: SupportedLocale; slug: string } | null = null;
  try {
    const params = props?.params;
    resolved = params != null ? (params instanceof Promise ? await params : params) : null;
  } catch {
    return { title: FALLBACK_TITLE };
  }
  if (!resolved) return { title: FALLBACK_TITLE };
  const lang = resolved?.lang ?? "en";
  const slug = decodeURIComponent(resolved.slug ?? "").toLowerCase();
  if (!isServicesSubpageSlug(slug)) return { title: FALLBACK_TITLE };
  const meta = getServicesSubpageMeta(slug);
  if (!meta) return { title: FALLBACK_TITLE };
  const path = `/services/${slug}`;
  return getPageMetadata({ lang }, path, {
    page: getServicePageKey(slug),
    fallbackTitle: meta.fallbackTitle,
    fallbackDescription: meta.fallbackDescription,
    fallbackKeywords: meta.fallbackKeywords,
  });
}

export default function ServiceSubpageLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
