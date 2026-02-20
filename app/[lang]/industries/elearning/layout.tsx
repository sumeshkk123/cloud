import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "industry-solutions/elearning";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/industries/elearning", {
    page: PAGE_KEY,
    fallbackTitle: "eLearning MLM Software",
    fallbackDescription:
      "Scale eLearning direct selling and affiliate growth with Cloud MLM Software using automated commissions, LMS integration, and real-time analytics.",
    fallbackKeywords:
      "elearning mlm software, online course direct selling software, elearning affiliate marketing platform",
  });
}

export default function ElearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
