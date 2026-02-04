import Link from "next/link";
import { ArrowUpRight, CalendarDays, Filter, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ARCHIVE, FILTERS } from "./constants";

interface PressReleaseMainSectionProps {
  resourcesHref: string;
}

export function PressReleaseMainSection({ resourcesHref }: PressReleaseMainSectionProps) {
  return (
    <section className="container grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)]">
      <aside className="space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground dark:bg-slate-950/50">
            <Filter className="h-3.5 w-3.5" aria-hidden />
            Curated filters
          </div>
          <p className="text-sm text-muted-foreground">
            Quickly surface coverage that matches your beat—whether you track technology, payments, or corporate milestones.
          </p>
        </div>
        <div className="space-y-4">
          {FILTERS.map((item) => (
            <article
              key={item.label}
              className="rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition duration-200 hover:border-primary/40"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                <span>{item.label}</span>
                <span>{item.count}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-purple-50 p-6 shadow-sm dark:from-primary/10 dark:via-slate-950 dark:to-purple-900/30">
          <h3 className="text-lg font-semibold text-foreground">Media kit on demand</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Request executive bios, brand guidelines, platform overviews, and analyst briefings in one bundle.
          </p>
          <Button asChild className="mt-4">
            <Link href={resourcesHref}>
              Access resources
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </aside>

      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Latest announcements</h2>
          <p className="text-sm text-muted-foreground">
            Timestamped releases curated by data journalists and corporate communications for clarity and speed.
          </p>
        </div>
        <div className="space-y-6">
          {ARCHIVE.map((release) => (
            <article
              key={`${release.title}-${release.date}`}
              className="relative overflow-hidden rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition duration-200 hover:border-primary/40"
            >
              <div className="absolute -left-16 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden />
              <div className="relative space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                    {release.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" aria-hidden />
                    {release.location}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{release.title}</h3>
                  <p className="text-sm text-muted-foreground">{release.summary}</p>
                </div>
                <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.3em] text-primary/80">
                  {release.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-primary/10 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button asChild variant="link" className="px-0 text-primary">
                  <Link href={release.href}>
                    Read full story
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
