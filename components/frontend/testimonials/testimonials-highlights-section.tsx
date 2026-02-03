'use client';

import { useState, useEffect } from "react";
import { ArrowUpRight, Building2, Star } from "lucide-react";
import { InfoCtaBox } from "@/components/ui/info-cta-box";
import type { Locale } from "@/i18n-config";
import { getTestimonialsContent } from "@/lib/testimonials";
import { ClientMetricCard } from "@/components/frontend/common/client-metric-card";

interface Story {
  id: string;
  title: string;
  content: string;
  count?: string | null;
}

interface TestimonialsHighlightsSectionProps {
  contactHref: string;
  locale: Locale;
}

export function TestimonialsHighlightsSection({ contactHref, locale }: TestimonialsHighlightsSectionProps) {
  const t = getTestimonialsContent(locale);
  const [stories, setStories] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch stories from API
  useEffect(() => {
    const fetchStories = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/stories?locale=${encodeURIComponent(locale)}`, {
          cache: 'no-store',
        });
        if (response.ok) {
          const fetchedData = await response.json();
          const fetchedStories = Array.isArray(fetchedData) ? fetchedData : [];
          setStories(fetchedStories);
        } else {
          setStories([]);
        }
      } catch (error) {
        setStories([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStories();
  }, [locale]);

  // Map stories to metrics format
  const metrics = stories.length > 0
    ? stories.map((story) => ({
      id: story.id,
      value: story.count || '',
      label: story.title,
      description: story.content,
    }))
    : [];

  return (
    <section className="border-y border-border/60 bg-muted/30 dark:border-border/30 dark:bg-slate-950/40 py-24 relative !overflow-visible">
      <div className="absolute inset-0 -z-20" aria-hidden="true"></div>
      <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-start">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.highlightsSection.heading}
          </h2>
          <p className="text-sm text-muted-foreground">
            {t.highlightsSection.description}
          </p>
          {isLoading ? (
            <div className="grid gap-6 sm:grid-cols-1 xl:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse rounded-3xl border border-border/60 bg-background p-6">
                  <div className="h-8 bg-muted rounded w-1/3 mb-4" />
                  <div className="h-5 bg-muted rounded w-2/3 mb-3" />
                  <div className="h-4 bg-muted rounded w-full mb-2" />
                  <div className="h-4 bg-muted rounded w-5/6" />
                </div>
              ))}
            </div>
          ) : metrics.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-1 xl:grid-cols-2">
              {metrics.map((metric) => (
                <ClientMetricCard
                  key={metric.id || metric.label}
                  value={metric.value}
                  label={metric.label}
                  description={metric.description}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              {t.highlightsSection.noHighlights}
            </div>
          )}
        </div>
        <div className="lg:sticky lg:top-24 lg:self-start lg:h-fit space-y-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
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
          <InfoCtaBox
            icon={ArrowUpRight}
            text={t.highlightsSection.callToAction}
            buttonText={t.highlightsSection.ctaButton}
            buttonHref={contactHref}
          />
        </div>
      </div>
    </section>
  );
}
