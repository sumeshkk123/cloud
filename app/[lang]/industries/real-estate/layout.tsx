import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "industry-solutions/real-estate";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/industries/real-estate", {
    page: PAGE_KEY,
    fallbackTitle: "Real Estate MLM Software",
    fallbackDescription:
      "Grow your property network with Cloud MLM Software using smart commissions, lead handling, and partner management for real estate teams.",
    fallbackKeywords:
      "real estate mlm software, property network marketing software, direct selling software for real estate",
  });
}

export default function RealEstateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
