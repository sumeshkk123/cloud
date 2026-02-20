import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "industry-solutions/finance";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/industries/finance", {
    page: PAGE_KEY,
    fallbackTitle: "Finance Industry MLM Software",
    fallbackDescription:
      "Scale finance direct selling with Cloud MLM Software using secure operations, compliance automation, and data-driven distributor management.",
    fallbackKeywords:
      "finance mlm software, financial services direct selling software, finance affiliate marketing platform",
  });
}

export default function FinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
