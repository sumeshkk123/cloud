import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "industry-solutions/cryptocurrency";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/industries/cryptocurrency", {
    page: PAGE_KEY,
    fallbackTitle: "Cryptocurrency MLM Software",
    fallbackDescription:
      "Scale crypto MLM networks with Cloud MLM Software using secure wallet workflows, compliance automation, and flexible compensation plans.",
    fallbackKeywords:
      "crypto mlm software, blockchain network marketing software, cryptocurrency direct selling software",
  });
}

export default function CryptocurrencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
