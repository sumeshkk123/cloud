import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params ?? null;
  return getPageMetadata(params, "/pricing/magento-integration", {
    page: "magento-integration",
    fallbackTitle: "Magento Integration Pricing for Cloud MLM Software",
    fallbackDescription:
      "Align Magento storefronts with Cloud MLM Software. Review pricing packages, roadmap, and deliverables for commerce, automation, and compliance integration.",
    fallbackKeywords:
      "Magento integration pricing, Magento MLM, Cloud MLM Software Magento",
  });
}

export default function MagentoIntegrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
