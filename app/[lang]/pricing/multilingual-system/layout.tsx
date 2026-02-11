import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params ?? null;
  return getPageMetadata(params, "/pricing/multilingual-system", {
    page: "multilingual-system",
    fallbackTitle: "Multilingual System Pricing | Cloud MLM Software",
    fallbackDescription:
      "Review pricing and roadmap for Cloud MLM Software's multilingual system. Launch compliant, AI-assisted localisation across web, mobile, and support channels.",
    fallbackKeywords:
      "multilingual system pricing, localisation MLM, Cloud MLM Software multilingual",
  });
}

export default function MultilingualSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
