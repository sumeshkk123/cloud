import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

/** Same page key as admin /admin/services/meta-page-title – meta title/description come from backend. */
const PAGE_KEY = "mlm-consulting";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/mlm-consulting", {
    page: PAGE_KEY,
    fallbackTitle: "MLM Consulting Services: Get Results with Proven Tips | Cloud MLM Software",
    fallbackDescription:
      "Cloud MLM Software provides proper guidance and support for individuals and businesses involved in the MLM industry. Our experienced MLM consultants help you design, implement, and optimize strategies, operations, and compensation plans.",
    fallbackKeywords:
      "MLM consulting, MLM consultants, MLM strategy, compensation plan consulting, Cloud MLM Software",
  });
}

export default function MlmConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
