import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";
import { getPricingSubpageFromSlug } from "@/lib/page-slugs";

export const dynamic = "force-dynamic";

const PAGE_CONFIG: Record<
  string,
  { path: string; fallbackTitle: string; fallbackDescription: string; fallbackKeywords: string }
> = {
  "cloud-mlm-software-basic": {
    path: "/pricing/cloud-mlm-software-basic",
    fallbackTitle: "Cloud MLM Software Basic Pricing & Implementation",
    fallbackDescription:
      "Understand Cloud MLM Software Basic pricing, roadmap, and deliverables. Launch a modern MLM platform with core automations, compliance, and analytics.",
    fallbackKeywords:
      "Cloud MLM Software Basic pricing, MLM platform implementation, direct selling software cost",
  },
  "auto-responder-module": {
    path: "/pricing/auto-responder-module",
    fallbackTitle: "Auto Responder Module Pricing & Implementation",
    fallbackDescription:
      "Explore Cloud MLM Software's Auto Responder Module pricing, deliverables, and deployment roadmap to automate distributor and customer engagement.",
    fallbackKeywords:
      "auto responder module pricing, MLM automation pricing, Cloud MLM Software auto responder",
  },
};

type LayoutProps = {
  params: Promise<{ lang: SupportedLocale; slug: string }> | { lang: SupportedLocale; slug: string };
  children: React.ReactNode;
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const resolved = params != null ? await Promise.resolve(params) : undefined;
  if (!resolved?.lang) {
    return { title: "Pricing | Cloud MLM Software" };
  }
  const locale = resolved.lang as SupportedLocale;
  const slug = decodeURIComponent(resolved.slug ?? "");
  const pageKey =
    getPricingSubpageFromSlug(slug, locale) ??
    (slug === "cloud-mlm-software-basic" || slug === "auto-responder-module" ? slug : null);

  if (!pageKey || !PAGE_CONFIG[pageKey]) {
    return { title: "Pricing | Cloud MLM Software" };
  }

  const config = PAGE_CONFIG[pageKey];
  return getPageMetadata(resolved, config.path, {
    page: pageKey,
    fallbackTitle: config.fallbackTitle,
    fallbackDescription: config.fallbackDescription,
    fallbackKeywords: config.fallbackKeywords,
  });
}

export default function PricingSlugLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
