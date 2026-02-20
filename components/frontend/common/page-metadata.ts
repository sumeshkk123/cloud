import type { Metadata } from "next";
import { getMetaDetail } from "@/lib/api/meta-details";
import { getPageTitle } from "@/lib/api/page-titles";
import { buildLocalizedPath } from "@/lib/locale-links";
import { siteBaseConfig } from "@/config/site";
import type { SupportedLocale } from "@/config/site";

interface PageMetadataConfig {
    page: string;
    fallbackTitle: string;
    fallbackDescription: string;
    fallbackKeywords: string;
    slug?: string; // Optional slug for dynamic pages (e.g., blog posts, product pages)
}

function buildFallbackMetadata(config: PageMetadataConfig): Metadata {
    const { fallbackTitle, fallbackDescription, fallbackKeywords } = config;
    const baseUrl = siteBaseConfig.url.replace(/\/$/, '');
    return {
        title: fallbackTitle,
        description: fallbackDescription,
        keywords: fallbackKeywords,
        openGraph: {
            title: fallbackTitle,
            description: fallbackDescription,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: fallbackTitle,
            description: fallbackDescription,
        },
    };
}

/**
 * Generates metadata with canonical URLs and meta tags from database
 * 
 * @param params - Next.js params (can be Promise or direct object)
 * @param path - The page path (e.g., "/features", "/faqs", "/home")
 * @param config - Page metadata configuration
 * @returns Metadata object with title, description, keywords, and canonical URL
 */
export async function getPageMetadata(
    params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale } | null | undefined,
    path: string,
    config: PageMetadataConfig
): Promise<Metadata> {
    try {
        // Handle both Promise and direct params (Next.js 15 compatibility)
        const resolvedParams =
            params == null ? undefined : (params instanceof Promise ? await params : params);
        const locale = resolvedParams != null ? resolvedParams.lang : undefined;
        if (locale == null) return buildFallbackMetadata(config);

        const { page, fallbackTitle, fallbackDescription, fallbackKeywords, slug } = config;

        let title = fallbackTitle;
        let description = fallbackDescription;
        let keywords = fallbackKeywords;

        // Skip database query during build if DATABASE_URL is dummy (Docker build scenario)
        const databaseUrl = process.env.DATABASE_URL || '';
        const isBuildTime = databaseUrl.includes('dummy@localhost') || databaseUrl.includes('dummy:dummy');

        if (!isBuildTime) {
            try {
                let meta = await getMetaDetail(page, locale);
                // Fallback: try alternate page key for about-company (e.g. if saved as "About company" in admin)
                if (!meta && page === 'about-company') {
                    meta = await getMetaDetail('About company', locale);
                }
                // Fallback: compliance-modules route loads data saved under legacy "compliance" key
                if (!meta && page === 'mlm-software-modules-compliance-modules') {
                    meta = await getMetaDetail('mlm-software-modules-compliance', locale);
                }
                // Fallback: module pages may be stored with or without prefix (e.g. "emails" vs "mlm-software-modules-emails")
                if (!meta && page.startsWith('mlm-software-modules-')) {
                    const shortKey = page.replace(/^mlm-software-modules-/, '');
                    meta = await getMetaDetail(shortKey, locale);
                }
                // Fallback: service pages (e.g. services/web-development) – try slug only in case meta was saved under legacy key
                if (!meta && page.startsWith('services/')) {
                    const serviceSlug = page.replace(/^services\//, '');
                    if (serviceSlug) meta = await getMetaDetail(serviceSlug, locale);
                }
                // Fallback: industry solutions (e.g. industry-solutions/insurance) – try dash variant too
                if (!meta && page.startsWith('industry-solutions/')) {
                    const slug = page.replace(/^industry-solutions\//, '');
                    if (slug) meta = await getMetaDetail(`industry-solutions-${slug}`, locale);
                }
                // Fallback: industry solutions (e.g. industry-solutions-insurance) – try slash variant too
                if (!meta && page.startsWith('industry-solutions-')) {
                    const slug = page.replace(/^industry-solutions-/, '');
                    if (slug) meta = await getMetaDetail(`industry-solutions/${slug}`, locale);
                }
                if (meta) {
                    title = meta.title || title;
                    description = meta.description || description;
                    keywords = meta.keywords || keywords;
                }
                // When meta_details has no row or missing title/description, fall back to page_titles
                let pageTitleRecord = await getPageTitle(page, locale);
                if (!pageTitleRecord && page === 'mlm-software-modules-compliance-modules') {
                    pageTitleRecord = await getPageTitle('mlm-software-modules-compliance', locale);
                }
                if (!pageTitleRecord && page.startsWith('mlm-software-modules-')) {
                    const shortKey = page.replace(/^mlm-software-modules-/, '');
                    pageTitleRecord = await getPageTitle(shortKey, locale);
                }
                // Fallback: industry solutions – try dash variant
                if (!pageTitleRecord && page.startsWith('industry-solutions/')) {
                    const slug = page.replace(/^industry-solutions\//, '');
                    if (slug) pageTitleRecord = await getPageTitle(`industry-solutions-${slug}`, locale);
                }
                // Fallback: industry solutions – try slash variant
                if (!pageTitleRecord && page.startsWith('industry-solutions-')) {
                    const slug = page.replace(/^industry-solutions-/, '');
                    if (slug) pageTitleRecord = await getPageTitle(`industry-solutions/${slug}`, locale);
                }
                if (pageTitleRecord) {
                    if (!meta?.title) title = pageTitleRecord.title;
                    if (!meta?.description && pageTitleRecord.sectionSubtitle) description = pageTitleRecord.sectionSubtitle;
                }
            } catch (error) {
                // Continue with fallback values if database query fails
                console.error(`[getPageMetadata] Error fetching meta for ${page}/${locale}:`, error);
            }
        }

        // Generate canonical URL using buildLocalizedPath
        const canonicalPath = slug ? `${path}/${slug}` : path;
        const canonicalUrl = buildLocalizedPath(canonicalPath, locale);

        // Ensure canonical URL is absolute
        const baseUrl = siteBaseConfig.url.replace(/\/$/, '');
        const absoluteCanonicalUrl = canonicalUrl.startsWith('http')
            ? canonicalUrl
            : `${baseUrl}${canonicalUrl}`;

        return {
            title,
            description,
            keywords,
            alternates: {
                canonical: absoluteCanonicalUrl,
            },
            openGraph: {
                title,
                description,
                type: 'website',
                url: absoluteCanonicalUrl,
            },
            twitter: {
                card: 'summary_large_image',
                title,
                description,
            },
        };
    } catch (error) {
        // Return fallback metadata if anything fails
        console.error('[getPageMetadata] Error generating metadata:', error);
        const { fallbackTitle, fallbackDescription, fallbackKeywords } = config;

        // Resolve params for fallback (guard so we never read .lang on undefined)
        let resolvedParams: { lang?: SupportedLocale } | undefined;
        try {
            resolvedParams = params == null ? undefined : (params instanceof Promise ? await params : params);
        } catch {
            resolvedParams = undefined;
        }
        const locale = resolvedParams?.lang;
        if (locale != null) {
            const canonicalPath = config.slug ? `${path}/${config.slug}` : path;
            const canonicalUrl = buildLocalizedPath(canonicalPath, locale);
            const baseUrl = siteBaseConfig.url.replace(/\/$/, '');
            const absoluteCanonicalUrl = canonicalUrl.startsWith('http')
                ? canonicalUrl
                : `${baseUrl}${canonicalUrl}`;
            return {
                title: fallbackTitle,
                description: fallbackDescription,
                keywords: fallbackKeywords,
                alternates: { canonical: absoluteCanonicalUrl },
                openGraph: {
                    title: fallbackTitle,
                    description: fallbackDescription,
                    type: 'website',
                    url: absoluteCanonicalUrl,
                },
            };
        }
        return buildFallbackMetadata(config);
    }
}
