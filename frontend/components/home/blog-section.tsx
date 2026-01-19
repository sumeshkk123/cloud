import Link from "next/link";
import type { Locale } from "@/i18n-config";
import type { HomepageContent } from "@/types/homepage";
import { localizedHref } from "./utils";
import { FeatureArticleCard, CompactArticleCard } from "@/components/common/article-cards";
import { SectionTitle } from "@/components/ui/section-title";
import { InfoCtaBox } from "@/components/ui/info-cta-box";
import { BookOpen } from "lucide-react";

export function BlogSection({ locale, data }: { locale: Locale; data: HomepageContent["blogPosts"] }) {
  const posts = data?.posts ?? [];
  if (posts.length === 0) {
    return null;
  }

  const normalizedPosts = posts.map((post) => ({
    ...post,
    href: localizedHref(locale, post.href)
  }));

  const displayPosts = normalizedPosts.slice(0, 6); // Show up to 6 posts in 3x2 grid

  return (
    <section className="relative overflow-hidden py-20 ">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-sky-50/40 to-white dark:from-slate-950 dark:via-slate-900/60 dark:to-slate-950" aria-hidden />
      <div className="absolute -top-16 right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-24 left-12 h-52 w-52 rounded-full bg-blue-200/20 blur-3xl" aria-hidden />
      <div className="container space-y-12">
        <SectionTitle
          badge={data?.badgeLabel ?? "Knowledge vault"}
          heading={data?.heading ?? "Resources to move faster"}
          description={data?.description ?? "Practical guides on compensation design, distributor enablement, and AI-powered growth curated by Cloud MLM Software strategists."}
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
          text={
            <>
              Need a curated reading list? Tell us your growth goals and we&apos;ll send a tailored set of guides within 24 hours.
            </>
          }
          buttonText="Explore All Article"
          buttonHref="/blog/"
        />
      </div>
    </section>
  );
}
