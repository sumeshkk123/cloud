import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "mlm-software-modules-e-voucher";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/e-voucher-for-mlm-software", {
    page: PAGE_KEY,
    fallbackTitle: "E-Voucher For MLM Software | Cloud MLM Software",
    fallbackDescription:
      "Digital vouchers and gift cards for rewards, incentives, and promotions. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM e-voucher, digital voucher module, Cloud MLM Software vouchers",
  });
}

export default function EVoucherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
