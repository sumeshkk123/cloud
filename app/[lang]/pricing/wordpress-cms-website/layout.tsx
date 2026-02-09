import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  return getPageMetadata(params, "/pricing/wordpress-cms-website", {
    page: "wordpress-cms-website",
    fallbackTitle: "WordPress CMS Website Pricing | Cloud MLM Software",
    fallbackDescription:
      "Explore pricing, roadmap, and deliverables for Cloud MLM Software's WordPress CMS websites. Launch conversion-first marketing sites with enterprise governance.",
    fallbackKeywords:
      "WordPress CMS website pricing, MLM marketing site, Cloud MLM Software WordPress",
  });
}

export default function WordPressCmsWebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
