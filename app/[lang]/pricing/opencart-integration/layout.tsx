import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  return getPageMetadata(params, "/pricing/opencart-integration", {
    page: "opencart-integration",
    fallbackTitle: "OpenCart Integration Pricing | Cloud MLM Software",
    fallbackDescription:
      "Explore pricing, roadmap, and deliverables for OpenCart integration with Cloud MLM Software. Automate catalog, order, and payout workflows with enterprise guardrails.",
    fallbackKeywords:
      "OpenCart integration pricing, OpenCart MLM, Cloud MLM Software OpenCart",
  });
}

export default function OpencartIntegrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
