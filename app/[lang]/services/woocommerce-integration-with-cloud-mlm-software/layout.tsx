import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

/** Same page key as admin /admin/services/meta-page-title – meta title/description come from backend. */
const PAGE_KEY = "services/woocommerce-integration-with-cloud-mlm-software";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/services/woocommerce-integration-with-cloud-mlm-software", {
    page: PAGE_KEY,
    fallbackTitle: "WooCommerce integration with Cloud MLM Software",
    fallbackDescription:
      "Cloud MLM Software offers seamless integration with WordPress and WooCommerce. Combine MLM management with the flexibility of WordPress. Automated commissions, real-time sync, and 24/7 support.",
    fallbackKeywords:
      "WooCommerce MLM integration, WordPress MLM software, WooCommerce Cloud MLM, WordPress integration, Cloud MLM Software",
  });
}

export default function WooCommerceIntegrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
