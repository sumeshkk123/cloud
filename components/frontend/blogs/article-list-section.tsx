"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import type { HomepageBlogPost } from "@/types/homepage";
import type { BlogsArticleListContent } from "@/lib/blogs-content";
import { Section } from "@/components/ui/section";
import { CompactArticleCard } from "@/components/frontend/common/article-cards";
import { BlogListSkeleton } from "@/components/frontend/blogs/blog-list-skeleton";
import { BlogPagination } from "@/components/frontend/blogs/blog-pagination";
import { Typography } from "@/components/ui/typography";

const POSTS_PER_PAGE = 12;
const SEARCH_DEBOUNCE_MS = 300;

function BlogSearchInput({
  basePath,
  initialQuery,
  placeholder,
  clearSearchLabel,
  onNavigateStart
}: {
  basePath: string;
  initialQuery: string;
  placeholder: string;
  clearSearchLabel: string;
  onNavigateStart?: () => void;
}) {
  const router = useRouter();
  const [value, setValue] = useState(initialQuery);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setValue(initialQuery);
  }, [initialQuery]);

  const applySearch = useCallback(
    (q: string) => {
      onNavigateStart?.();
      const trimmed = q.trim();
      const params = new URLSearchParams();
      if (trimmed) params.set("q", trimmed);
      params.set("page", "1");
      const qs = params.toString();
      const url = qs ? `${basePath}?${qs}` : basePath;
      router.push(url, { scroll: false });
      router.refresh();
    },
    [basePath, router, onNavigateStart]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = e.target.value;
      setValue(next);
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => applySearch(next), SEARCH_DEBOUNCE_MS);
    },
    [applySearch]
  );

  const handleReset = useCallback(() => {
    onNavigateStart?.();
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }
    setValue("");
    router.push(basePath, { scroll: false });
    router.refresh();
  }, [basePath, router, onNavigateStart]);

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  return (
    <div className="flex w-full max-w-sm items-center gap-2 rounded-lg border border-border/60 bg-card px-3 py-3 dark:bg-muted/80 dark:border-border/50">
      <Search className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden />
      <input
        type="text"
        role="search"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        aria-label={placeholder}
      />
      {value ? (
        <button
          type="button"
          onClick={handleReset}
          className="shrink-0 rounded p-1 text-muted-foreground hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          aria-label={clearSearchLabel}
        >
          <X className="h-4 w-4" aria-hidden />
        </button>
      ) : null}
    </div>
  );
}

type ArticleListSectionProps = {
  posts: HomepageBlogPost[];
  total: number;
  currentPage: number;
  totalPages: number;
  searchQuery?: string;
  basePath: string;
  articleListContent: BlogsArticleListContent;
};

export function ArticleListSection({
  posts,
  total,
  currentPage,
  totalPages,
  searchQuery = "",
  basePath,
  articleListContent
}: ArticleListSectionProps) {
  const t = articleListContent;
  const [isNavigating, setIsNavigating] = useState(false);
  const searchParams = new URLSearchParams();
  if (searchQuery) searchParams.set("q", searchQuery);

  useEffect(() => {
    setIsNavigating(false);
  }, [searchQuery, currentPage]);

  const hrefForPage = (page: number) => {
    const p = new URLSearchParams(searchParams);
    if (page > 1) p.set("page", String(page));
    const qs = p.toString();
    return qs ? `${basePath}?${qs}` : basePath;
  };

  return (
    <Section id="article-list" variant="primary" padding="xl">



      <div className="space-y-8 container">
        {/* Header: title + post count (left), search (right) */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Typography as="h3" variant="h3" className="font-bold tracking-tight text-foreground">
              {t.titleLabel}
            </Typography>
            <Typography variant="small" textColor="muted" className="mt-1">
              ({total} {total === 1 ? t.postFound : t.postsFound})
            </Typography>
          </div>
          <BlogSearchInput
            basePath={basePath}
            initialQuery={searchQuery}
            placeholder={t.searchPlaceholder}
            clearSearchLabel={t.clearSearchLabel}
            onNavigateStart={() => setIsNavigating(true)}
          />
        </div>

        {/* Tiles or skeleton when loading/searching */}
        {isNavigating ? (
          <BlogListSkeleton count={POSTS_PER_PAGE} />
        ) : posts.length > 0 ? (
          <>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post) => (
                <CompactArticleCard key={post.href + post.title} post={post} />
              ))}
            </div>

            {/* Pagination - same design as businessmlmsoftware-com-next blog page */}
            {totalPages > 1 && (
              <div className="mt-8">
                <BlogPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  itemsPerPage={POSTS_PER_PAGE}
                  totalItems={total}
                  getHrefForPage={hrefForPage}
                  showingResultsLabel={t.showingResultsLabel}
                  className="bg-card dark:bg-card/80 border-border/60 dark:border-border/50"
                />
              </div>
            )}
          </>
        ) : (
          <Typography variant="p" textColor="muted" className="py-12 text-center">
            {t.noResultsMessage}
          </Typography>
        )}
      </div>
    </Section>
  );
}

export { POSTS_PER_PAGE };
