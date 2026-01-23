import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Building2, Star } from "lucide-react";
import {
  ChartLineUp,
  ChatsTeardrop,
  GlobeHemisphereEast,
  ThumbsUp
} from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/i18n-config";
import { getTestimonialsContent } from "@/lib/testimonials";

interface TestimonialsHighlightsSectionProps {
  contactHref: string;
  locale: Locale;
}

export function TestimonialsHighlightsSection({ contactHref, locale }: TestimonialsHighlightsSectionProps) {
  const t = getTestimonialsContent(locale);

  // Icons array in order matching the highlights array
  const icons = [GlobeHemisphereEast, ChartLineUp, ChatsTeardrop, ThumbsUp];

  return (
    <section className="border-y border-border/60 bg-muted/30 dark:border-border/30 dark:bg-slate-950/40 py-24 relative">
      <div className="absolute inset-0 -z-20" aria-hidden="true"></div>
      <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.highlightsSection.heading}
          </h2>
          <p className="text-sm text-muted-foreground">
            {t.highlightsSection.description}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.highlightsSection.highlights.map((item, index) => {
              const Icon = icons[index] || GlobeHemisphereEast;
              return (
                <article key={item.title} className="flex gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="space-y-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">
            {t.highlightsSection.snapshotLabel}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-background p-5 text-center shadow-sm">
              <Star className="mx-auto h-6 w-6 text-primary" aria-hidden />
              <p className="mt-2 text-3xl font-semibold text-foreground">{t.highlightsSection.averageRating}</p>
              <p className="text-xs text-muted-foreground">{t.highlightsSection.averageRatingLabel}</p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background p-5 text-center shadow-sm">
              <Building2 className="mx-auto h-6 w-6 text-primary" aria-hidden />
              <p className="mt-2 text-3xl font-semibold text-foreground">{t.highlightsSection.industriesServed}</p>
              <p className="text-xs text-muted-foreground">{t.highlightsSection.industriesServedLabel}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            {t.highlightsSection.callToAction}
          </p>
          <Button asChild>
            <Link href={contactHref}>
              {t.highlightsSection.ctaButton}
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
