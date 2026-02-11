import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "mlm-software-modules-e-wallet";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/e-wallet", {
    page: PAGE_KEY,
    fallbackTitle: "E-Wallet Module for MLM Software | Cloud MLM Software",
    fallbackDescription:
      "Digital wallet for commissions, payouts, and in-network transactions. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM e-wallet, digital wallet module, Cloud MLM Software wallet",
  });
}

export default function EWalletLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
