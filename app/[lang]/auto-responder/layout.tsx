import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale } }): Promise<Metadata> {
  return getPageMetadata(params, "/auto-responder", {
    page: "mlm-software-modules-auto-responder",
    fallbackTitle: "Auto Responder Module | Cloud MLM Software",
    fallbackDescription: "Automated email and message sequences for onboarding and engagement. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM auto responder, autoresponder module, Cloud MLM Software automation",
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
