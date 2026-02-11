import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "mlm-software-modules-compensation-module";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/compensation-module", {
    page: PAGE_KEY,
    fallbackTitle: "Compensation Plan Module | Cloud MLM Software",
    fallbackDescription:
      "Design and run compensation plans with the Cloud MLM Software compensation module. Binary, unilevel, matrix, and custom structures.",
    fallbackKeywords:
      "MLM compensation module, commission module, Cloud MLM Software compensation",
  });
}

export default function CompensationModuleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
