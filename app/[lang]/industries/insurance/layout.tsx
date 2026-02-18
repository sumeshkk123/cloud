import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

/** Same page key as admin meta-page-title – meta title/description come from backend. */
const PAGE_KEY = "industry-solutions/insurance";

export async function generateMetadata(props: {
    params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
    const params = props?.params;
    return getPageMetadata(params ?? null, "/industries/insurance", {
        page: PAGE_KEY,
        fallbackTitle: "Insurance Industry MLM Software",
        fallbackDescription:
            "Modernise insurance distribution with Cloud MLM Software—compliance-first compensation, advisor enablement, and policyholder engagement built for growth.",
        fallbackKeywords:
            "insurance mlm software, insurance agency software, mlm for insurance agents",
    });
}

export default function InsuranceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
