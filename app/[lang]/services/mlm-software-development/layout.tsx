import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

/** Same page key as admin /admin/services/meta-page-title – meta title/description come from backend. */
const PAGE_KEY = "services/mlm-software-development";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/services/mlm-software-development", {
    page: PAGE_KEY,
    fallbackTitle: "MLM Software Development Services | Cloud MLM Software",
    fallbackDescription:
      "Design, build, and scale enterprise MLM platforms with Cloud MLM Software. Strategy-led engineering, modular architecture, and automation-first delivery for modern direct selling brands.",
    fallbackKeywords:
      "MLM software development, enterprise MLM platform, direct selling software, Cloud MLM Software",
  });
}

export default function MlmSoftwareDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
