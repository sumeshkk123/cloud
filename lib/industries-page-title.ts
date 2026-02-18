import { getPageTitle } from "@/lib/api/page-titles";
import { getMetaDetail } from "@/lib/api/meta-details";
import type { PageTitleRecord } from "@/lib/api/page-titles";
import type { Locale } from "@/i18n-config";
import { prisma } from "@/lib/db/prisma";

/**
 * Generate page key for industry solution inner page.
 * Matches the format used in admin: "industry-solutions/{slug}"
 */
export function getIndustryPageKey(slug: string): string {
    return `industry-solutions/${slug}`;
}

/**
 * Fetches hero title and description from Admin → Industry Solutions Meta Page Title.
 * Tries `page_titles` table first (preferred), then falls back to `meta_details` table (legacy/admin list source).
 * This ensures data shows up regardless of which table it was saved to.
 * Also includes fallback to 'en' locale if the requested locale is missing (like analytics module).
 */
// Define return type with optional keywords
export type IndustryPageData = PageTitleRecord & { keywords?: string };

export async function getIndustryPageTitleData(
    slug: string,
    locale: Locale
): Promise<IndustryPageData | null> {
    const pageKeyPart = "industry-solutions";
    const slashKey = `${pageKeyPart}/${slug}`;
    const dashKey = `${pageKeyPart}-${slug}`;

    try {
        // 1. Fetch ALL relevant page_titles records
        const allPageTitles = await prisma.page_titles.findMany({
            where: {
                page: { contains: pageKeyPart },
                locale: locale
            }
        });

        // Try exact matches (both slash and dash)
        let match = allPageTitles.find(p => p.page === slashKey || p.page === dashKey);

        // Fallback to 'en' for page_titles
        if (!match && locale !== 'en') {
            const enPageTitles = await prisma.page_titles.findMany({
                where: {
                    page: { contains: pageKeyPart },
                    locale: 'en'
                }
            });
            match = enPageTitles.find(p => p.page === slashKey || p.page === dashKey);
        }

        // 2. Fetch ALL meta_details records (we need this for keywords even if page_titles found match)
        const allMetaDetails = await prisma.meta_details.findMany({
            where: {
                page: { contains: pageKeyPart },
                locale: locale
            }
        });

        let metaMatch = allMetaDetails.find(p => p.page === slashKey || p.page === dashKey);

        // Fallback to 'en' for meta_details
        if (!metaMatch && locale !== 'en') {
            const enMetaDetails = await prisma.meta_details.findMany({
                where: {
                    page: { contains: pageKeyPart },
                    locale: 'en'
                }
            });
            metaMatch = enMetaDetails.find(p => p.page === slashKey || p.page === dashKey);
        }

        // 3. Construct result
        if (match) {
            // Found in page_titles (preferred source for Hero content)
            return {
                ...match,
                pagePill: match.pagePill ?? undefined,
                sectionSubtitle: match.sectionSubtitle ?? undefined,
                keywords: metaMatch?.keywords ?? undefined // Attach keywords from meta_details if available
            };
        } else if (metaMatch) {
            // Not in page_titles, but found in meta_details (legacy source)
            return {
                page: metaMatch.page,
                locale: metaMatch.locale,
                title: metaMatch.title,
                pagePill: undefined,
                sectionSubtitle: metaMatch.description,
                keywords: metaMatch.keywords ?? undefined
            };
        }

        return null;
    } catch (error) {
        console.error(`[getIndustryPageTitleData] Failed to fetch page title for ${slug}:`, error);
        return null;
    }
}
