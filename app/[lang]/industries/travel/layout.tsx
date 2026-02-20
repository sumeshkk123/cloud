import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "industry-solutions/travel";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/industries/travel", {
    page: PAGE_KEY,
    fallbackTitle: "Travel Industry MLM Software",
    fallbackDescription:
      "Scale travel affiliate and direct selling growth with Cloud MLM Software using integrated workflows, flexible commissions, and real-time insights.",
    fallbackKeywords:
      "travel industry mlm software, travel affiliate marketing software, mlm software for travel business",
  });
}

export default function TravelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
