"use client";

import { useState, useEffect } from "react";
import type { Locale } from "@/i18n-config";
import type { HomepageContent, HomepageBlogPost } from "@/types/homepage";
import { localizedHref } from "./utils";
import { CompactArticleCard } from "@/components/frontend/common/article-cards";
import { SectionTitle } from "@/components/ui/section-title";
import { InfoCtaBox } from "@/components/ui/info-cta-box";
import { BookOpen } from "lucide-react";
import { Section } from "@/components/ui/section";
import { getBlogSectionContent } from "@/lib/blog-section";

export function BlogSection({ locale, data }: { locale: Locale; data: HomepageContent["blogPosts"] }) {
  const initialPosts = data?.posts ?? [];
  const [fetchedPosts, setFetchedPosts] = useState<HomepageBlogPost[]>([]);

  useEffect(() => {
    if (initialPosts.length > 0) return;
    let cancelled = false;
    fetch(`/api/blog?locale=${encodeURIComponent(locale)}&limit=3`)
      .then((res) => res.json())
      .then((fetched: HomepageBlogPost[]) => {
        if (!cancelled && Array.isArray(fetched) && fetched.length > 0) {
          setFetchedPosts(fetched);
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [locale, initialPosts.length]);

  const posts = initialPosts.length > 0 ? initialPosts : fetchedPosts;
  const t = getBlogSectionContent(locale);
  if (posts.length === 0) {
    return null;
  }

  const normalizedPosts = posts.map((post) => ({
    ...post,
    href: localizedHref(locale, post.href)
  }));

  const displayPosts = normalizedPosts.slice(0, 3); // Show up to 3 posts on home page

  return (
    <Section variant="gradient" padding="md" className="relative overflow-hidden" containerClassName="space-y-12">
      <SectionTitle
        badge={data?.badgeLabel ?? t.badgeLabel}
        heading={data?.heading ?? t.heading}
        description={data?.description ?? t.description}
        maxWidth="3xl"
      />

      {data?.tags?.length ? (
        <div className="mx-auto flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
          {data.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 uppercase tracking-[0.3em]">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {displayPosts.map((post) => (
          <CompactArticleCard key={post.title} post={post} />
        ))}
      </div>
      <InfoCtaBox
        icon={BookOpen}
        text={<>{t.ctaText}</>}
        buttonText={t.ctaButtonText}
        buttonHref={localizedHref(locale, "/blog/")}
      />
    </Section>
  );
}
