import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "mlm-software-modules-kyc-documentation";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/kyc-documentation", {
    page: PAGE_KEY,
    fallbackTitle: "Secure KYC Documentation Module | Simplify Verification",
    fallbackDescription:
      "KYC documentation for new joinings and account refresh. Prevent fraud, verify members with identity proof, and keep your MLM business compliant. Cloud MLM Software.",
    fallbackKeywords:
      "MLM KYC, KYC documentation, Cloud MLM Software compliance, KYC verification, identity verification MLM",
  });
}

export default function KycDocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
