import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  return getPageMetadata(params, "/pricing/native-android-app-with-mlm-software", {
    page: "native-android-app-with-mlm-software",
    fallbackTitle: "Native Android App with Cloud MLM Software Pricing",
    fallbackDescription:
      "Review pricing, roadmap, and features for Cloud MLM Software's native Android app. Launch mobile experiences that drive distributor productivity and compliance.",
    fallbackKeywords:
      "native Android app MLM pricing, Android MLM app, Cloud MLM Software Android",
  });
}

export default function NativeAndroidAppWithMlmSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
