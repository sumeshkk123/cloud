import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  return getPageMetadata(params, "/pricing/multi-currency-system", {
    page: "multi-currency-system",
    fallbackTitle: "Multi-Currency System Pricing | Cloud MLM Software",
    fallbackDescription:
      "Discover pricing, roadmap, and outcomes for Cloud MLM Software's multi-currency system. Automate FX, payouts, and compliance across global markets.",
    fallbackKeywords:
      "multi-currency system pricing, FX automation MLM, Cloud MLM Software multi-currency",
  });
}

export default function MultiCurrencySystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
