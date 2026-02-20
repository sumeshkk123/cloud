import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "industry-solutions/health-wellness";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/industries/health-wellness", {
    page: PAGE_KEY,
    fallbackTitle: "Health and Wellness MLM Software",
    fallbackDescription:
      "Grow your health and wellness network with Cloud MLM Software using secure operations, flexible compensation, and data-driven distributor management.",
    fallbackKeywords:
      "health wellness mlm software, wellness direct selling software, health products network marketing system",
  });
}

export default function HealthWellnessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
