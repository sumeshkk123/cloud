import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  return getPageMetadata(params, "/pricing/lcp-page-development", {
    page: "lcp-page-development",
    fallbackTitle: "LCP Page Development Pricing | Cloud MLM Software",
    fallbackDescription:
      "Review Cloud MLM Software's LCP page development pricing, packages, and launch roadmap. Build landing capture experiences that convert and integrate with automation.",
    fallbackKeywords:
      "LCP page development pricing, landing capture page pricing, Cloud MLM Software LCP",
  });
}

export default function LcpPageDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
