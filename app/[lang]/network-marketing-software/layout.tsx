import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params ?? null;
  return getPageMetadata(params, "/network-marketing-software", {
    page: "network-marketing-software",
    fallbackTitle: "Network Marketing Software",
    fallbackDescription:
      "Elevate your network marketing operations with Cloud MLM Software—automation, analytics, and mobile experiences designed for global scale.",
    fallbackKeywords:
      "network marketing software, MLM platform, Cloud MLM Software",
  });
}

export default function NetworkMarketingSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
