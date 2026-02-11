import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

/** Same page key as admin /admin/services/meta-page-title – meta title/description come from backend. */
const PAGE_KEY = "services/e-commerce-integration";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/services/e-commerce-integration", {
    page: PAGE_KEY,
    fallbackTitle: "E-Commerce Integration Services | Seamless Online Solutions | Cloud MLM Software",
    fallbackDescription:
      "Cloud MLM Software is bundled with core modules to integrate with various e-commerce solutions. Expert team for WordPress, WooCommerce, OpenCart, Magento, and Shopify integration with MLM software.",
    fallbackKeywords:
      "e-commerce integration, MLM software integration, WooCommerce MLM, Shopify MLM, Magento MLM, OpenCart MLM, Cloud MLM Software",
  });
}

export default function ECommerceIntegrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
