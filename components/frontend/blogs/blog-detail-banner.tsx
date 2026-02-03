import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BlogShareBar } from "./blog-share-bar";
import { ArrowLeft } from "lucide-react";

/** Splits title into first word and the rest (for highlight). */
function splitTitleForHighlight(title: string): { firstWord: string; rest: string } {
  const trimmed = title.trim();
  const spaceIndex = trimmed.indexOf(" ");
  if (spaceIndex <= 0) return { firstWord: trimmed, rest: "" };
  return {
    firstWord: trimmed.slice(0, spaceIndex),
    rest: trimmed.slice(spaceIndex + 1)
  };
}

type BlogDetailBannerProps = {
  title: string;
  /** Shown above the h1 (e.g. date · author). */
  dateText?: string;
  description?: string;
  shareUrl: string;
  shareTitle: string;
  imageSrc: string;
  imageAlt: string;
  backHref: string;
  backLabel?: string;
  className?: string;
  /** When true, show the image column (e.g. when post has an image). Default true */
  showImage?: boolean;
  /** Set true for external image URLs so Next/Image does not optimize. Default false */
  imageUnoptimized?: boolean;
};

export function BlogDetailBanner({
  title,
  dateText,
  description,
  shareUrl,
  shareTitle,
  imageSrc,
  imageAlt,
  backHref,
  backLabel = "Back to blogs",
  className,
  showImage = true,
  imageUnoptimized = false
}: BlogDetailBannerProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-b border-border/60 bg-background",
        className
      )}
    >
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />
      </div>
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse" />
      <div
        className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container relative py-16 lg:py-20">
        <div
          className={cn(
            "grid gap-12 lg:items-center",
            showImage ? "lg:grid-cols-2" : "max-w-3xl"
          )}
        >
          {/* Left: back link, date, h1 (first word highlighted), description, share icons */}
          <div className="space-y-6 text-left">
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              {backLabel}
            </Link>
            {dateText && (
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {dateText}
              </p>
            )}
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {(() => {
                const { firstWord, rest } = splitTitleForHighlight(title);
                return (
                  <>
                    <span className="relative inline-block">
                      <span
                        className="relative z-10 bg-gradient-to-r from-primary via-blue-500 via-purple-500 to-primary bg-clip-text"
                        style={{ color: "transparent", WebkitTextFillColor: "transparent" }}
                      >
                        {firstWord}
                      </span>
                      <span className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/20 -rotate-0.5" />
                    </span>
                    {rest ? ` ${rest}` : null}
                  </>
                );
              })()}
            </h1>
            {description && (
              <p className="line-clamp-4 text-lg text-muted-foreground">{description}</p>
            )}
            <BlogShareBar
              shareUrl={shareUrl}
              title={shareTitle}
              showLabel={false}
            />
          </div>

          {/* Right: image */}
          {showImage && (
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted lg:aspect-[4/3]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={960}
                height={720}
                className="h-full w-full object-cover"
                priority
                unoptimized={imageUnoptimized}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
