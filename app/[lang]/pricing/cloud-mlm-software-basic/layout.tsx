import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  return getPageMetadata(params, "/pricing/cloud-mlm-software-basic", {
    page: "cloud-mlm-software-basic",
    fallbackTitle: "Cloud MLM Software Basic Pricing & Implementation",
    fallbackDescription:
      "Understand Cloud MLM Software Basic pricing, roadmap, and deliverables. Launch a modern MLM platform with core automations, compliance, and analytics.",
    fallbackKeywords:
      "Cloud MLM Software Basic pricing, MLM platform implementation, direct selling software cost",
  });
}

export default function CloudMlmSoftwareBasicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
