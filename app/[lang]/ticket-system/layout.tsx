import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale } }): Promise<Metadata> {
  return getPageMetadata(params, "/ticket-system", {
    page: "mlm-software-modules-ticket-system",
    fallbackTitle: "Ticket System Module for MLM Software | Cloud MLM Software",
    fallbackDescription: "Support ticket system for distributors and customers. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM ticket system, support module, Cloud MLM Software tickets",
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
