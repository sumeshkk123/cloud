import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "mlm-software-modules-marketing-automation";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/marketing-automation", {
    page: PAGE_KEY,
    fallbackTitle: "Marketing Automation Module | Cloud MLM Software",
    fallbackDescription:
      "Marketing automation module for MLM: campaigns, segments, and analytics. Part of Cloud MLM Software modules.",
    fallbackKeywords:
      "MLM marketing automation, campaign module, Cloud MLM Software marketing",
  });
}

export default function MarketingAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
