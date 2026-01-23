import type { Metadata } from "next";
import { getMetaDetail } from "@/lib/api/meta-details";
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

/**
 * Generates metadata with canonical URLs and meta tags from database
 * 
 * @param params - Next.js params (can be Promise or direct object)
 * @param path - The page path (e.g., "/features", "/faqs", "/home")
 * @param config - Page metadata configuration
 * @returns Metadata object with title, description, keywords, and canonical URL
 */
export async function getPageMetadata(
    params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale },
    path: string,
    config: PageMetadataConfig
): Promise<Metadata> {
    try {
        // Handle both Promise and direct params (Next.js 15 compatibility)
        const resolvedParams = params instanceof Promise ? await params : params;
        const locale = resolvedParams.lang;

        const { page, fallbackTitle, fallbackDescription, fallbackKeywords, slug } = config;

        let title = fallbackTitle;
        let description = fallbackDescription;
        let keywords = fallbackKeywords;

        // Skip database query during build if DATABASE_URL is dummy (Docker build scenario)
        const databaseUrl = process.env.DATABASE_URL || '';
        const isBuildTime = databaseUrl.includes('dummy@localhost') || databaseUrl.includes('dummy:dummy');
        
        if (!isBuildTime) {
            try {
                const meta = await getMetaDetail(page, locale);
                if (meta) {
                    title = meta.title || title;
                    description = meta.description || description;
                    keywords = meta.keywords || keywords;
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
        
        // Resolve params for fallback
        const resolvedParams = params instanceof Promise ? await params : params;
        const locale = resolvedParams.lang;
        
        // Generate basic canonical URL
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
            alternates: {
                canonical: absoluteCanonicalUrl,
            },
            openGraph: {
                title: fallbackTitle,
                description: fallbackDescription,
                type: 'website',
                url: absoluteCanonicalUrl,
            },
        };
    }
}
