import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "industry-solutions/gaming";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/industries/gaming", {
    page: PAGE_KEY,
    fallbackTitle: "Gaming Industry MLM Software",
    fallbackDescription:
      "Scale gaming affiliate and community growth with Cloud MLM Software using automated commissions, secure workflows, and real-time analytics.",
    fallbackKeywords:
      "gaming industry mlm software, gaming affiliate marketing software, cloud mlm gaming platform",
  });
}

export default function GamingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
