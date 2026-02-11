import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata(props: { params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale } }): Promise<Metadata> {
  const params = props?.params ?? null;
  return getPageMetadata(params, "/email-module", {
    page: "mlm-software-modules-email-module",
    fallbackTitle: "Email Module | Cloud MLM Software",
    fallbackDescription: "Email and communications module for MLM: templates, tracking, and automation. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM email module, email communications, Cloud MLM Software email",
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
