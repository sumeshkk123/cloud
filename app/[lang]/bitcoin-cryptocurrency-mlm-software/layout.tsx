import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "bitcoin-cryptocurrency-mlm-software";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/bitcoin-cryptocurrency-mlm-software", {
    page: PAGE_KEY,
    fallbackTitle: "Bitcoin & Cryptocurrency MLM Software | Cloud MLM Software",
    fallbackDescription:
      "Run your MLM or direct selling business with crypto payouts and multi-currency support. Bitcoin and cryptocurrency integration for commissions, e-wallets, and compliant reporting.",
    fallbackKeywords:
      "Bitcoin MLM software, cryptocurrency MLM, crypto payouts, multi-currency MLM, Cloud MLM Software",
  });
}

export default function BitcoinCryptocurrencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
