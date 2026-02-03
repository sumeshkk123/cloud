import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getPublishedBlogPostsSearch, BLOGS_LIST_PAGE_SIZE } from "@/lib/api/blog";
import { getBlogsArticleListContent } from "@/lib/blogs-content";
import {
  BlogsHeroSection,
  BlogsPillarsSection,
  ArticleListSection,
  BlogsAioSignalsSection,
  BlogsFaqSection,
  BlogsCtaSection
} from "@/components/frontend/blogs";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const resolved = await Promise.resolve(params);
  const locale = resolveLocale(resolved.lang);
  const title = "MLM Blogs for Network Marketers";
  const description =
    "Explore Cloud MLM Software articles covering technology, compliance, and growth strategies for modern network marketing leaders.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blogs", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BlogsPageProps = {
  params: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
  searchParams: Promise<{ q?: string; page?: string }> | { q?: string; page?: string };
};

export default async function BlogsPage({ params, searchParams }: BlogsPageProps) {
  const resolvedParams = await Promise.resolve(params);
  const resolvedSearchParams = await Promise.resolve(searchParams);
  const locale = resolveLocale(resolvedParams.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const servicesHref = buildLocalizedPath("/services", locale);
  const resourcesHref = buildLocalizedPath("/resources", locale);
  const newsletterHref = buildLocalizedPath("/resources/newsletter", locale);
  const searchQuery = resolvedSearchParams.q ?? "";
  const page = Math.max(1, parseInt(resolvedSearchParams.page ?? "1", 10) || 1);

  const basePath = buildLocalizedPath("/blogs", locale as SupportedLocale);
  const { posts: rawPosts, total, page: currentPage, totalPages } = await getPublishedBlogPostsSearch(locale, {
    query: searchQuery || undefined,
    page,
    limit: BLOGS_LIST_PAGE_SIZE
  });
  const posts = rawPosts.map((p) => ({
    title: String(p.title),
    date: String(p.date),
    href: buildLocalizedPath(p.href, locale as SupportedLocale),
    image: String(p.image ?? ""),
    excerpt: p.excerpt != null ? String(p.excerpt) : undefined
  }));

  const serializedPosts = JSON.parse(JSON.stringify(posts)) as typeof posts;
  const articleListContent = getBlogsArticleListContent(locale);

  return (
    <div>
      <BlogsHeroSection
        locale={locale}
        resourcesHref={resourcesHref}
        newsletterHref={newsletterHref}
        contactHref={contactHref}
      />
      <ArticleListSection
        posts={serializedPosts}
        total={Number(total)}
        currentPage={Number(currentPage)}
        totalPages={Number(totalPages)}
        searchQuery={String(searchQuery)}
        basePath={String(basePath)}
        articleListContent={articleListContent}
      />
      <BlogsPillarsSection />

      <BlogsAioSignalsSection />
      <BlogsFaqSection locale={locale} />
      <BlogsCtaSection contactHref={contactHref} servicesHref={servicesHref} locale={locale} />
    </div>
  );
}
