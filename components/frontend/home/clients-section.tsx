'use client';

import type { Locale } from "@/i18n-config";
import type { HomepageContent } from "@/types/homepage";
import { Users } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { ClientMetricCard } from "@/components/frontend/common/client-metric-card";
import { ClientLogoDisplay } from "@/components/frontend/common/client-logo-display";
import { InfoCtaBox } from "@/components/ui/info-cta-box";
import { localizedHref } from "./utils";
import { Section } from "@/components/ui/section";
import { useState, useEffect } from "react";

interface Story {
  id: string;
  title: string;
  content: string;
  count?: string | null;
}

export function ClientsSection({
  locale,
  logos,
  data
}: { locale: Locale; logos: HomepageContent["hero"]["logos"]; data: HomepageContent["clients"] }) {
  const [stories, setStories] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const fallbackMetrics = data?.metrics ?? [];
  const clientLogos = logos ?? [];

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
          // Show all stories
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

  // Map stories to metrics format, or use fallback metrics
  const metrics = stories.length > 0
    ? stories.map((story) => ({
      id: story.id,
      value: story.count || '',
      label: story.title,
      description: story.content,
    }))
    : fallbackMetrics.map((metric, index) => ({
      id: `fallback-${index}`,
      ...metric,
    }));
  return (
    <Section variant="gradient" padding="xl" containerClassName="" className="!overflow-visible">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-start">

        <div className="space-y-12">
          <SectionTitle
            badge={data?.badgeLabel ?? "Customer stories"}
            heading={data?.heading}
            description={data?.description}
            centered={false}
            maxWidth="full"
          />

          <div className="grid gap-6 sm:grid-cols-1 xl:grid-cols-2">
            {isLoading ? (
              // Loading skeleton
              [1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse rounded-3xl border border-border/60 bg-background p-6">
                  <div className="h-8 bg-muted rounded w-1/3 mb-4" />
                  <div className="h-5 bg-muted rounded w-2/3 mb-3" />
                  <div className="h-4 bg-muted rounded w-full mb-2" />
                  <div className="h-4 bg-muted rounded w-5/6" />
                </div>
              ))
            ) : metrics.length > 0 ? (
              metrics.map((metric) => (
                <ClientMetricCard
                  key={metric.id || metric.label}
                  value={metric.value}
                  label={metric.label}
                  description={metric.description}
                />
              ))
            ) : (
              // Empty state
              <div className="col-span-2 text-center py-8 text-muted-foreground">
                No stories available yet.
              </div>
            )}
          </div>

          {data?.primaryCta ? (
            <InfoCtaBox
              icon={Users}
              text={
                <>
                  {data?.footnote || "Trusted by 500+ MLM companies and 120K+ distributors worldwide."}
                </>
              }
              buttonText={data.primaryCta.label}
              buttonHref={localizedHref(locale, data.primaryCta.href)}
            />
          ) : null}
        </div>

        {/* Right Column: Sticky Logo Display */}
        <div className="lg:sticky lg:top-24 lg:self-start lg:h-fit lg:z-10">
          <ClientLogoDisplay logos={clientLogos} />
        </div>
      </div>
    </Section>
  );
}
