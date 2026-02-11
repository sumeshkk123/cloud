import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "services/compensation-plan-audit";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(
    params ?? null,
    "/services/compensation-plan-audit",
    {
      page: PAGE_KEY,
      fallbackTitle: "MLM Compensation Plan Audit Services | Cloud MLM Software",
      fallbackDescription:
        "Partner with the leading MLM software provider to audit, optimise, and future-proof your compensation plan with strategic, financial, and compliance intelligence.",
      fallbackKeywords:
        "compensation plan audit, MLM plan audit, compensation strategy, Cloud MLM Software",
    }
  );
}

export default function CompensationPlanAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
