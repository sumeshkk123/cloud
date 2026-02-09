import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale } }): Promise<Metadata> {
  return getPageMetadata(params, "/e-wallet", {
    page: "mlm-software-modules-e-wallet",
    fallbackTitle: "E-Wallet Module for MLM Software | Cloud MLM Software",
    fallbackDescription: "Digital wallet for commissions, payouts, and in-network transactions. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM e-wallet, digital wallet module, Cloud MLM Software wallet",
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
