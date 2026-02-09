import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "mlm-software-modules-multi-lingual-system";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/multi-lingual-system", {
    page: PAGE_KEY,
    fallbackTitle: "Multi-Lingual System | Cloud MLM Software",
    fallbackDescription:
      "Multi-language and localization for your MLM platform. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM multi-lingual, localization module, Cloud MLM Software languages",
  });
}

export default function MultiLingualSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
