import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

/** Page key for meta title / meta description / keywords (admin Module Meta Details at /admin/modules/meta-page-title). */
const PAGE_KEY = "mlm-software-modules-emails";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/emails", {
    page: PAGE_KEY,
    fallbackTitle: "Email & Communications Module | Cloud MLM Software",
    fallbackDescription:
      "Email automation and communications module for MLM: lifecycle journeys, governance, and performance visibility. Part of Cloud MLM Software modules.",
    fallbackKeywords:
      "MLM email module, marketing automation module, Cloud MLM Software emails",
  });
}

export default function EmailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
