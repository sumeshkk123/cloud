import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

/** Same page key as admin /admin/services/meta-page-title – meta title/description come from backend. */
const PAGE_KEY = "services/magento-development";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/services/magento-development", {
    page: PAGE_KEY,
    fallbackTitle: "Magento Development Services | Cloud MLM Software",
    fallbackDescription:
      "Cloud MLM Software Solutions is a leading Magento Development Company. We deliver scalable high-performance Magento websites for your business.",
    fallbackKeywords:
      "Magento development, Magento ecommerce, MLM Magento integration, Cloud MLM Software",
  });
}

export default function MagentoDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
