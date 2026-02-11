import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

/** Same page key as admin /admin/services/meta-page-title – meta title/description come from backend. */
const PAGE_KEY = "services/opencart-development";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/services/opencart-development", {
    page: PAGE_KEY,
    fallbackTitle: "Opencart Development Services | Cloud MLM Software",
    fallbackDescription:
      "Cloud MLM provides smart Opencart Development Services to accomplish business tasks easily, improve store performance, and better satisfy your clients' requirements.",
    fallbackKeywords:
      "Opencart development, e-commerce OpenCart, MLM OpenCart integration, Cloud MLM Software",
  });
}

export default function OpencartDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
