import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "mlm-software-modules-genealogy";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/genealogy", {
    page: PAGE_KEY,
    fallbackTitle: "Genealogy Tree Module | Cloud MLM Software",
    fallbackDescription:
      "Genealogy and network tree module for MLM. Visualise and manage distributor networks. Part of Cloud MLM Software modules.",
    fallbackKeywords:
      "MLM genealogy module, network tree, Cloud MLM Software genealogy",
  });
}

export default function GenealogyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
