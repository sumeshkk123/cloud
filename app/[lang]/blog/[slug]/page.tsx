/**
 * Blog details page: single post view from DB.
 * Meta details aligned with https://cloudmlmsoftware.com/ blog detail pages:
 * title "{Post Title} - Cloud MLM Software", full OG/Twitter, Article JSON-LD.
 */
import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import type { SupportedLocale } from "@/config/site";
import { siteBaseConfig } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import { toAbsoluteUrl } from "@/lib/media";
import {
  getPublishedBlogPostBySlug,
  getBlogContentHtml,
  getBlogExcerpt,
} from "@/lib/api/blog";
import { getBlogsAuthorBioContent } from "@/lib/blogs-content";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { AuthorBioSection, BlogDetailBanner } from "@/components/frontend/blogs";
import { Section } from "@/components/ui/section";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

type PageParams = Promise<{ lang: SupportedLocale; slug: string }> | { lang: SupportedLocale; slug: string };

export async function generateMetadata({
  params
}: {
  params: PageParams;
}): Promise<Metadata> {
  const resolved = await Promise.resolve(params);
  const locale = resolveLocale(resolved.lang);
  const slug = typeof resolved.slug === "string" ? resolved.slug.trim() : "";
  if (!slug) {
    return { title: "Blog - Cloud MLM Software" };
  }
  const post = await getPublishedBlogPostBySlug(locale, slug);
  if (!post) {
    return { title: "Blog - Cloud MLM Software" };
  }
  const title = post.metaTitle || post.title;
  const descriptionRaw =
    post.metaDescription ||
    post.description ||
    getBlogExcerpt(post.content, 200);
  const description = descriptionRaw ? descriptionRaw.slice(0, 160).trim() + (descriptionRaw.length > 160 ? "…" : "") : undefined;
  const canonicalPath = buildLocalizedPath(`/blog/${post.slug}`, locale as SupportedLocale);
  const pageUrl = `${siteBaseConfig.url.replace(/\/$/, "")}${canonicalPath}`;
  const baseUrl = siteBaseConfig.url.replace(/\/$/, "");
  const ogImageHref = post.image
    ? post.image.startsWith("http")
      ? post.image
      : baseUrl + (post.image.startsWith("/") ? post.image : `/${post.image}`)
    : `${baseUrl}${siteBaseConfig.ogImage}`;
  // Match live site format: "{Post Title} - Cloud MLM Software"
  const pageTitle = title ? `${title} - Cloud MLM Software` : "Blog - Cloud MLM Software";

  return {
    title: pageTitle,
    description: description ?? undefined,
    keywords: post.metaKeywords || undefined,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: pageTitle,
      description: description ?? undefined,
      url: pageUrl,
      siteName: "Cloud MLM Software",
      type: "article",
      publishedTime: post.date ? new Date(post.date).toISOString() : undefined,
      modifiedTime: post.updatedAt ? new Date(post.updatedAt).toISOString() : undefined,
      authors: post.author ? [post.author] : undefined,
      locale: locale === "en" ? "en_US" : locale,
      images: [
        {
          url: ogImageHref,
          width: 1200,
          height: 630,
          alt: post.title || "Blog post"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: description ?? undefined,
      images: [ogImageHref]
    },
    robots: { index: true, follow: true },
    other: {
      "article:section": "Blog",
      ...(post.date && { "article:published_time": new Date(post.date).toISOString() }),
      ...(post.updatedAt && { "article:modified_time": new Date(post.updatedAt).toISOString() }),
      ...(post.author && { "article:author": post.author })
    }
  };
}

type BlogDetailPageProps = {
  params: PageParams;
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const resolved = await Promise.resolve(params);
  const locale = resolveLocale(resolved.lang);
  const slug = typeof resolved.slug === "string" ? resolved.slug.trim() : "";
  if (!slug) notFound();

  const post = await getPublishedBlogPostBySlug(locale, slug);
  if (!post) notFound();

  const blogsHref = buildLocalizedPath("/blogs", locale as SupportedLocale);
  const blogPath = buildLocalizedPath(`/blog/${post.slug}`, locale as SupportedLocale);
  const shareUrl = `${siteBaseConfig.url.replace(/\/$/, "")}${blogPath}`;
  const dateFormatted = post.date
    ? new Date(post.date).toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric"
    })
    : "";
  const dateText = [dateFormatted, post.author].filter(Boolean).join(" · ") || undefined;
  const imageUrl = post.image ? (toAbsoluteUrl(post.image) ?? post.image) : null;
  const imageSrc = imageUrl || "/images/dummy-blog.avif";
  const authorBio = getBlogsAuthorBioContent(locale);
  const description =
    post.description?.trim() || getBlogExcerpt(post.content, 200) || undefined;

  const baseUrl = siteBaseConfig.url.replace(/\/$/, "");
  const articleUrl = `${baseUrl}${blogPath}`;
  const articleImage = post.image
    ? post.image.startsWith("http")
      ? post.image
      : baseUrl + (post.image.startsWith("/") ? post.image : `/${post.image}`)
    : `${baseUrl}${siteBaseConfig.ogImage}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: description ?? undefined,
    image: articleImage,
    datePublished: post.date ? new Date(post.date).toISOString() : undefined,
    dateModified: post.updatedAt ? new Date(post.updatedAt).toISOString() : undefined,
    author: post.author ? { "@type": "Person", name: post.author } : undefined,
    publisher: {
      "@type": "Organization",
      name: "Cloud MLM Software",
      url: baseUrl
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl }
  };

  return (
    <article className="min-h-screen bg-background blogInnerPage">
      <Script
        id="article-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* Blog details page: banner with title, date, description, share, image */}
      <BlogDetailBanner
        title={post.title}
        dateText={dateText}
        description={description}
        shareUrl={shareUrl}
        shareTitle={post.title}
        imageSrc={imageSrc}
        imageAlt={post.title}
        backHref={blogsHref}
        backLabel="Back to blogs"
        showImage={true}
        imageUnoptimized={!!imageUrl}
      />
      {/* Main content: sanitized HTML from DB; boxes only on specific elements (e.g. blockquotes) via prose, not the whole section */}
      <Section
        id="blog-content"
        variant="primary"
        padding="md"
        className="relative isolate !overflow-visible blog-details-content"
      >
        <div
          className="container prose prose-slate dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-primary prose-img:rounded-xl prose-blockquote:rounded-r-lg prose-blockquote:border-l-4 prose-blockquote:border-primary/30 prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-800/40 prose-blockquote:py-2 prose-blockquote:pl-4 prose-blockquote:pr-4"
          dangerouslySetInnerHTML={{ __html: getBlogContentHtml(post.content) }}
        />
      </Section>
      <AuthorBioSection
        heading={authorBio.heading}
        name={post.author ?? ""}
        role={authorBio.role}
        biography={authorBio.biography}
        linkedInUrl={authorBio.linkedInUrl ?? undefined}
        imageSrc="/images/auther.webp"
        imageAlt={post.author ?? authorBio.imageAlt}
      />
    </article>
  );
}
