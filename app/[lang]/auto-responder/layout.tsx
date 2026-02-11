import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "mlm-software-modules-auto-responder";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/auto-responder", {
    page: PAGE_KEY,
    fallbackTitle: "Auto Responder Module | Cloud MLM Software",
    fallbackDescription:
      "Automated email and message sequences for onboarding and engagement. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM auto responder, autoresponder module, Cloud MLM Software automation",
  });
}

export default function AutoResponderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
