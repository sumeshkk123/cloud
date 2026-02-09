import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "mlm-software-modules-multi-currency";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/multi-currency-module", {
    page: PAGE_KEY,
    fallbackTitle: "Multi Currency Module | Cloud MLM Software",
    fallbackDescription:
      "Multi-currency support for orders, commissions, and payouts. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM multi currency, currency module, Cloud MLM Software multi-currency",
  });
}

export default function MultiCurrencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
