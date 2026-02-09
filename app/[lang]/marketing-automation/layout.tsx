import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";
import { getModulesSubpageMeta } from "@/lib/modules-subpage-slugs";

export const dynamic = "force-dynamic";

const SLUG = "marketing-automation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const meta = getModulesSubpageMeta(SLUG);
  return getPageMetadata(params, `/${SLUG}`, {
    page: `mlm-software-modules-${SLUG}`,
    fallbackTitle: meta?.fallbackTitle ?? "Marketing Automation Module | Cloud MLM Software",
    fallbackDescription: meta?.fallbackDescription ?? "",
    fallbackKeywords: meta?.fallbackKeywords ?? "",
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
