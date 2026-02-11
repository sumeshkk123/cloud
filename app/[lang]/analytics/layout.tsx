import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "mlm-software-modules-analytics";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/analytics", {
    page: PAGE_KEY,
    fallbackTitle: "Analytics & Reporting Module | Cloud MLM Software",
    fallbackDescription:
      "Analytics and reporting module for MLM: dashboards, KPIs, and exports. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM analytics module, reporting module, Cloud MLM Software analytics",
  });
}

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
