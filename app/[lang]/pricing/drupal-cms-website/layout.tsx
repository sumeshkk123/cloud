import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  return getPageMetadata(params, "/pricing/drupal-cms-website", {
    page: "drupal-cms-website",
    fallbackTitle: "Drupal CMS Website Pricing for Cloud MLM Software",
    fallbackDescription:
      "Explore Cloud MLM Software's Drupal CMS Website pricing, packages, and roadmap. Launch a conversion-first site with direct selling integrations and enterprise governance.",
    fallbackKeywords:
      "Drupal CMS website pricing, Drupal direct selling, Cloud MLM Software Drupal",
  });
}

export default function DrupalCmsWebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
