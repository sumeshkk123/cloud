import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "industry-solutions/clothing-and-accessories";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/industries/clothing-and-accessories", {
    page: PAGE_KEY,
    fallbackTitle: "Clothing and Accessories MLM Software",
    fallbackDescription:
      "Scale your fashion direct selling network with Cloud MLM Software using smart compensation, distributor growth tools, and streamlined operations.",
    fallbackKeywords:
      "clothing mlm software, fashion network marketing software, accessories direct selling software",
  });
}

export default function ClothingAccessoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
