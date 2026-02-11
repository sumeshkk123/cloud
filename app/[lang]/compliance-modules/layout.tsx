import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

/** Primary key for compliance-modules route; fallback to legacy in getPageMetadata. */
const PAGE_KEY = "mlm-software-modules-compliance-modules";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/compliance-modules", {
    page: PAGE_KEY,
    fallbackTitle: "Compliance Module | Cloud MLM Software",
    fallbackDescription:
      "Compliance and governance module for MLM: consent, audit trails, and regional rules. Part of Cloud MLM Software modules.",
    fallbackKeywords:
      "MLM compliance module, governance module, Cloud MLM Software compliance",
  });
}

export default function ComplianceModuleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
