import Image from "next/image";
import Link from "next/link";
import type { HomepageContent } from "@/types/homepage";
import { toAbsoluteUrl } from "@/lib/media";
import { Typography } from "../../ui/typography";

type HomepageBlogPostItem = HomepageContent["blogPosts"]["posts"][number];

type ArticleCardLabels = {
  spotlightLabel?: string;
};

export function FeatureArticleCard({
  post,
  spotlightLabel = "Spotlight",
}: { post: HomepageBlogPostItem } & ArticleCardLabels) {
  const imageUrl = post.image ? (toAbsoluteUrl(post.image) ?? post.image) : null;
  const image = imageUrl || "/images/dummy-blog.avif";

  return (
    <Link
      href={post.href}
      className="group relative flex h-full flex-col overflow-hidden rounded-[36px] border border-primary/30 bg-card shadow-[0_45px_120px_-80px_rgba(37,99,235,0.35)] transition hover:border-primary/50"
    >
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={post.title}
          width={820}
          height={460}
          className="h-60 w-full object-cover transition group-hover:scale-[1.03]"
          unoptimized={imageUrl ? true : false}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 820px"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-60" />
        <div className="absolute bottom-4 left-4 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          {spotlightLabel}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-8">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">{post.date}</p>
          <h3 className="text-2xl font-semibold leading-tight text-foreground group-hover:text-primary">{post.title}</h3>
        </div>
        <p className="text-sm leading-6 text-muted-foreground">{post.excerpt ?? "Dive into expert strategies that keep global network marketing teams ahead."}</p>
      </div>
    </Link>
  );
}

export function CompactArticleCard({
  post,
}: { post: HomepageBlogPostItem }) {
  const imageUrl = post.image ? (toAbsoluteUrl(post.image) ?? post.image) : null;
  const image = imageUrl || "/images/dummy-blog.avif";

  return (
    <Link
      href={post.href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/90 shadow-sm transition hover:shadow-[0_30px_80px_-60px_rgba(37,99,235,0.25)]"
    >
      <Image
        src={image}
        alt={post.title}
        width={440}
        height={360}
        className="h-48 object-cover transition group-hover:scale-[1.03]"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 440px"
        quality={75}
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <Typography className="text-xs font-semibold uppercase  text-muted-foreground">{post.date}</Typography>
        <Typography variant="h3" className="!text-lg font-semibold text-foreground group-hover:text-primary">{post.title}</Typography>
      </div>
    </Link>
  );
}
