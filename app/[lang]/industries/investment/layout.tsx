import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "industry-solutions/investment";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/industries/investment", {
    page: PAGE_KEY,
    fallbackTitle: "Investment Industry MLM Software",
    fallbackDescription:
      "Scale investment affiliate and advisor growth with Cloud MLM Software using automation, analytics, and secure operations.",
    fallbackKeywords:
      "investment industry mlm software, investment affiliate marketing software, cloud mlm investment platform",
  });
}

export default function InvestmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
