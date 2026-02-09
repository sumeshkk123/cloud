import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";
import { getModulesSubpageMeta, isModulesSubpageSlug } from "@/lib/modules-subpage-slugs";

export const dynamic = "force-dynamic";

type LayoutProps = {
  params?: Promise<{ lang: SupportedLocale; slug: string }> | { lang: SupportedLocale; slug: string };
  children: React.ReactNode;
};

export async function generateMetadata(props: LayoutProps): Promise<Metadata> {
  const params = props?.params;
  const resolved =
    params != null ? (params instanceof Promise ? await params : params) : null;
  if (!resolved?.lang) return { title: "Module | Cloud MLM Software" };
  const slug = decodeURIComponent(resolved.slug ?? "").toLowerCase();
  if (!isModulesSubpageSlug(slug)) return { title: "Module | Cloud MLM Software" };
  const meta = getModulesSubpageMeta(slug);
  if (!meta) return { title: "Module | Cloud MLM Software" };
  return getPageMetadata(resolved, `/${slug}`, {
    page: `mlm-software-modules-${slug}`,
    fallbackTitle: meta.fallbackTitle,
    fallbackDescription: meta.fallbackDescription,
    fallbackKeywords: meta.fallbackKeywords,
  });
}

export default function ModuleSubpageLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
