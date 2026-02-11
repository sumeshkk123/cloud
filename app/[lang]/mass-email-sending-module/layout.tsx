import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "mlm-software-modules-mass-email-sending-module";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/mass-email-sending-module", {
    page: PAGE_KEY,
    fallbackTitle: "Mass Email Sending Module | Cloud MLM Software",
    fallbackDescription:
      "Send bulk emails, campaigns, and automated sequences to your network. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM mass email, bulk email module, Cloud MLM Software email campaigns",
  });
}

export default function MassEmailSendingModuleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
