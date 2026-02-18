import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "mlm-software-modules-ticket-system";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  let resolved: { lang: SupportedLocale } | null = null;
  try {
    const params = props?.params;
    resolved =
      params != null ? (params instanceof Promise ? await params : params) : null;
  } catch {
    resolved = null;
  }
  const lang = resolved?.lang;
  return getPageMetadata(lang != null ? { lang } : null, "/ticket-system", {
    page: PAGE_KEY,
    fallbackTitle: "Ticket System Module for MLM Software | Cloud MLM Software",
    fallbackDescription:
      "Support ticket system for distributors and customers. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM ticket system, support module, Cloud MLM Software tickets",
  });
}

export default function TicketSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
