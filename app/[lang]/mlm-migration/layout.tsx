import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

/** Same page key as admin /admin/services/meta-page-title – meta title/description come from backend. */
const PAGE_KEY = "mlm-migration";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/mlm-migration", {
    page: PAGE_KEY,
    fallbackTitle: "MLM Migration | Cloud MLM Software",
    fallbackDescription:
      "Upgrade your MLM platform with Cloud MLM Software's expert migration services—secure, compliant, and low-risk.",
    fallbackKeywords:
      "MLM migration, MLM software migration, migrate MLM platform, Cloud MLM Software",
  });
}

export default function MlmMigrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
