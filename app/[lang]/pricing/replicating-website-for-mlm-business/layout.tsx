import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params ?? null;
  return getPageMetadata(params, "/pricing/replicating-website-for-mlm-business", {
    page: "replicating-website-for-mlm-business",
    fallbackTitle: "Replicating Website for MLM Business Pricing",
    fallbackDescription:
      "Review pricing, packages, and roadmap for Cloud MLM Software's replicating websites. Launch compliant, on-brand distributor microsites fast.",
    fallbackKeywords:
      "replicating website MLM pricing, distributor microsites, Cloud MLM Software replicated sites",
  });
}

export default function ReplicatingWebsiteForMlmBusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
