import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "industry-solutions/beauty-cosmetics";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/industries/beauty-cosmetics", {
    page: PAGE_KEY,
    fallbackTitle: "Beauty and Cosmetics MLM Software",
    fallbackDescription:
      "Deliver luxurious customer journeys with Cloud MLM Software-personalised beauty experiences, flexible compensation, and compliant global operations.",
    fallbackKeywords: "beauty mlm software, cosmetics network marketing, skincare direct selling system",
  });
}

export default function BeautyCosmeticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
