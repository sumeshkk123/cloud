import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { SupportedLocale } from "@/config/site";
import { siteBaseConfig } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import { toAbsoluteUrl } from "@/lib/media";
import { getPublishedBlogPostBySlug, getBlogContentHtml } from "@/lib/api/blog";
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
  const description = post.metaDescription || post.description;
  const canonicalPath = buildLocalizedPath(`/blog/${post.slug}`, locale as SupportedLocale);
  return {
    title: title ? `${title} - Cloud MLM Software` : "Blog - Cloud MLM Software",
    description: description || undefined,
    keywords: post.metaKeywords || undefined,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: title || undefined,
      description: description || undefined,
      type: "article",
      publishedTime: post.date ? new Date(post.date).toISOString() : undefined,
      authors: post.author ? [post.author] : undefined,
      images: post.image ? [toAbsoluteUrl(post.image) || post.image].filter(Boolean) : undefined
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

  return (
    <article className="min-h-screen bg-background">
      <BlogDetailBanner
        title={post.title}
        dateText={dateText}
        description={post.description || undefined}
        shareUrl={shareUrl}
        shareTitle={post.title}
        imageSrc={imageSrc}
        imageAlt={post.title}
        backHref={blogsHref}
        backLabel="Back to blogs"
        showImage={true}
        imageUnoptimized={!!imageUrl}
      />
      <Section
        id="blog-pillars"
        variant="primary"
        padding="lg"
        className="relative isolate !overflow-visible blogdetails page"
      >
        {/* HTML is sanitized in getBlogContentHtml (lib/api/blog.ts) to prevent XSS */}
        <div
          className="container prose prose-slate dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-primary prose-img:rounded-xl"
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
