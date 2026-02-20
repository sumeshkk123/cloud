import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

/** Same page key as admin meta-page-title – meta title/description come from backend. */
const PAGE_KEY = "industry-solutions/affiliate-marketing";

export async function generateMetadata(props: {
    params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
    const params = props?.params;
    return getPageMetadata(params ?? null, "/industries/affiliate-marketing", {
        page: PAGE_KEY,
        fallbackTitle: "Affiliate Marketing MLM Software",
        fallbackDescription:
            "Power affiliate marketing growth with Cloud MLM Software—automated tracking, multi-tier commissions, mobile enablement, and enterprise-grade compliance.",
        fallbackKeywords:
            "affiliate marketing mlm, affiliate tracking software, mlm affiliate system",
    });
}

export default function AffiliateMarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
