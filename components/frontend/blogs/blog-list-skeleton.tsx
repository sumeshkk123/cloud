"use client";

const SKELETON_COUNT = 12;

export function BlogListSkeleton({ count = SKELETON_COUNT }: { count?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 bg-card/90 shadow-sm"
        >
          <div className="h-48 w-full animate-pulse rounded-t-3xl bg-muted" />
          <div className="flex flex-1 flex-col gap-3 p-6">
            <div className="h-3 w-24 animate-pulse rounded bg-muted" />
            <div className="h-5 w-full animate-pulse rounded bg-muted" style={{ animationDelay: `${i * 50}ms` }} />
            <div className="h-5 w-[80%] animate-pulse rounded bg-muted" style={{ animationDelay: `${i * 50 + 30}ms` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
