import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "mlm-software-modules-ecommerce-module";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/ecommerce-module", {
    page: PAGE_KEY,
    fallbackTitle: "E-Commerce Module | Cloud MLM Software",
    fallbackDescription:
      "E-commerce and order management module for direct selling. Catalogs, carts, and fulfilment within Cloud MLM Software.",
    fallbackKeywords: "MLM ecommerce module, order management, Cloud MLM Software ecommerce",
  });
}

export default function EcommerceModuleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
