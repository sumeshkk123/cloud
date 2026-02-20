import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "industry-solutions/training";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/industries/training", {
    page: PAGE_KEY,
    fallbackTitle: "Training Industry MLM Software",
    fallbackDescription:
      "Scale training affiliate and enrollment growth with Cloud MLM Software using automation, real-time analytics, and secure workflows.",
    fallbackKeywords:
      "training industry mlm software, training affiliate marketing software, cloud mlm software training",
  });
}

export default function TrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
