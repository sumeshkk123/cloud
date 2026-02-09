import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  return getPageMetadata(params, "/pricing/privileged-user-system-module", {
    page: "privileged-user-system-module",
    fallbackTitle: "Privileged User System Module Pricing | Cloud MLM Software",
    fallbackDescription:
      "Discover pricing, roadmap, and deliverables for Cloud MLM Software's privileged user system. Govern sensitive roles with automation, monitoring, and compliance guardrails.",
    fallbackKeywords:
      "privileged user system pricing, MLM access governance, Cloud MLM Software privileged module",
  });
}

export default function PrivilegedUserSystemModuleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
