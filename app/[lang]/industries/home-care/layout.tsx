import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "industry-solutions/home-care";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/industries/home-care", {
    page: PAGE_KEY,
    fallbackTitle: "Home Care MLM Software",
    fallbackDescription:
      "Scale home care direct selling operations with Cloud MLM Software using transparent commissions, strong distributor management, and secure workflows.",
    fallbackKeywords:
      "home care mlm software, homecare direct selling software, caregiver network marketing system",
  });
}

export default function HomeCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
