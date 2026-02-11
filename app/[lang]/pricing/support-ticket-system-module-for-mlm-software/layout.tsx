import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params ?? null;
  return getPageMetadata(
    params,
    "/pricing/support-ticket-system-module-for-mlm-software",
    {
      page: "support-ticket-system-module-for-mlm-software",
      fallbackTitle: "Support Ticket System Module Pricing | Cloud MLM Software",
      fallbackDescription:
        "Review pricing, packages, and roadmap for Cloud MLM Software's support ticket system module. Deliver omnichannel support with automation and analytics.",
      fallbackKeywords:
        "support ticket system MLM pricing, omnichannel support module, Cloud MLM Software support",
    }
  );
}

export default function SupportTicketSystemModuleForMlmSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
