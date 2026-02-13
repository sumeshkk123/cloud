import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";
import { getServicePageKey } from "@/lib/services-subpage-slugs";

export const dynamic = "force-dynamic";

/** Same page key as admin services/meta-page-title (meta_details) and page_titles – meta title/description from backend. */
const SERVICE_SLUG = "cryptocurrency-mlm-software";
const PAGE_KEY = getServicePageKey(SERVICE_SLUG);

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/cryptocurrency-mlm-software", {
    page: PAGE_KEY,
    fallbackTitle: "Cryptocurrency MLM Software | Cloud MLM Software",
    fallbackDescription:
      "Launch token-ready MLM programmes with secure custody, automated compliance, and AI copilots from Cloud MLM Software.",
    fallbackKeywords:
      "Cryptocurrency MLM software, crypto MLM, token rewards, AI copilots, Cloud MLM Software",
  });
}

export default function CryptocurrencyMlmSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
