import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: { params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale } }): Promise<Metadata> {
  return getPageMetadata(params, "/mass-email-sending-module", {
    page: "mlm-software-modules-mass-email-sending-module",
    fallbackTitle: "Mass Email Sending Module | Cloud MLM Software",
    fallbackDescription: "Send bulk emails, campaigns, and automated sequences to your network. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM mass email, bulk email module, Cloud MLM Software email campaigns",
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
