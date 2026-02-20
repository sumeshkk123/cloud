import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "industry-solutions/ecommerce";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/industries/ecommerce", {
    page: PAGE_KEY,
    fallbackTitle: "Ecommerce MLM Software",
    fallbackDescription:
      "Scale ecommerce direct selling with Cloud MLM Software using affiliate automation, secure integrations, and transparent distributor management.",
    fallbackKeywords:
      "ecommerce mlm software, ecommerce direct selling software, affiliate network marketing platform",
  });
}

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
