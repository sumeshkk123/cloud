import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "services/shopify-integration-in-cloud-mlm-software";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(
    params ?? null,
    "/services/shopify-integration-in-cloud-mlm-software",
    {
      page: PAGE_KEY,
      fallbackTitle: "Shopify Integration in MLM Software | Cloud MLM Software",
      fallbackDescription:
        "Explore seamless Shopify integration with MLM Software. Increase sales effortlessly. Product sync, order processing, commission calculation, and real-time reporting.",
      fallbackKeywords:
        "Shopify integration, MLM software Shopify, e-commerce MLM, Cloud MLM Software",
    }
  );
}

export default function ShopifyIntegrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
