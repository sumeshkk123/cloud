import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

/** Same page key as admin /admin/services/meta-page-title – meta title/description come from backend. */
const PAGE_KEY = "services/website-designing";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/services/website-designing", {
    page: PAGE_KEY,
    fallbackTitle: "Website Designing Services | Creative and Professional Solutions | Cloud MLM Software",
    fallbackDescription:
      "Your website is your identity. Cloud MLM Software designs stunning, responsive, and user-friendly websites that capture your brand and enhance user experience.",
    fallbackKeywords:
      "Website designing, web design, MLM website design, responsive design, Cloud MLM Software",
  });
}

export default function WebsiteDesigningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
