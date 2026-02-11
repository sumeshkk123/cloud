import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "mlm-software-modules-customer-engagement-module";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/customer-engagement-module", {
    page: PAGE_KEY,
    fallbackTitle: "Customer Engagement Module | Cloud MLM Software",
    fallbackDescription:
      "Customer and distributor engagement module: support, loyalty, and journeys. Part of Cloud MLM Software modules.",
    fallbackKeywords:
      "MLM customer engagement, support module, Cloud MLM Software engagement",
  });
}

export default function CustomerEngagementModuleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
