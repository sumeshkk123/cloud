import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "industry-solutions/it-services";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/industries/it-services", {
    page: PAGE_KEY,
    fallbackTitle: "IT Services MLM Software",
    fallbackDescription:
      "Scale IT industry growth with Cloud MLM Software using automated workflows, secure infrastructure, and real-time analytics.",
    fallbackKeywords:
      "it services mlm software, it industry direct selling software, cloud mlm software it industry",
  });
}

export default function ITServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
