import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  return getPageMetadata(params, "/pricing/email", {
    page: "email",
    fallbackTitle: "Email Automation Pricing for Cloud MLM Software",
    fallbackDescription:
      "Review Cloud MLM Software's email automation pricing, packages, and roadmap. Launch compliant, high-performing communications for distributors and customers.",
    fallbackKeywords:
      "email automation pricing, MLM email pricing, Cloud MLM Software email",
  });
}

export default function EmailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
