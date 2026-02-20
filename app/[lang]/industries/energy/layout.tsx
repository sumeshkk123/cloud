import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "industry-solutions/energy";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/industries/energy", {
    page: PAGE_KEY,
    fallbackTitle: "Energy Industry MLM Software",
    fallbackDescription:
      "Scale energy direct selling and affiliate operations with Cloud MLM Software using network automation, sustainability tracking, and secure global workflows.",
    fallbackKeywords:
      "energy mlm software, renewable energy direct selling software, energy affiliate marketing platform",
  });
}

export default function EnergyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
