import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params ?? null;
  return getPageMetadata(params, "/pricing/auto-responder-module", {
    page: "auto-responder-module",
    fallbackTitle: "Auto Responder Module Pricing & Implementation",
    fallbackDescription:
      "Explore Cloud MLM Software's Auto Responder Module pricing, deliverables, and deployment roadmap to automate distributor and customer engagement.",
    fallbackKeywords:
      "auto responder module pricing, MLM automation pricing, Cloud MLM Software auto responder",
  });
}

export default function AutoResponderModuleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
