import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

/** Same page key as admin /admin/services/meta-page-title – meta title/description come from backend. */
const PAGE_KEY = "services/web-development";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/services/web-development", {
    page: PAGE_KEY,
    fallbackTitle: "Web Development Services | Build Modern and Scalable Websites | Cloud MLM Software",
    fallbackDescription:
      "Improve your online presence with Cloud MLM Software Solutions' web development services. We develop responsive, dynamic, and user-friendly websites that suit your business goals.",
    fallbackKeywords:
      "Web development, MLM website development, responsive websites, Cloud MLM Software",
  });
}

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
