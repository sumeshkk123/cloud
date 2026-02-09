import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale } }): Promise<Metadata> {
  return getPageMetadata(params, "/e-voucher", {
    page: "mlm-software-modules-e-voucher",
    fallbackTitle: "E-Voucher For MLM Software | Cloud MLM Software",
    fallbackDescription: "Digital vouchers and gift cards for rewards, incentives, and promotions. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM e-voucher, digital voucher module, Cloud MLM Software vouchers",
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
