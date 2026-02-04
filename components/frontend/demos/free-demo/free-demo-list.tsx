"use client";

import { useEffect, useState } from "react";
import { useDemoItems } from "@/lib/hooks/use-demo-items";
import type { DemoItemFromApi } from "@/lib/hooks/use-demo-items";
import type { PlanDemo } from "./free-demo-content";
import { FreeDemoPlanDemosSection } from "./free-demo-plan-demos-section";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

const DEFAULT_IMAGE = "/wp-content/uploads/2024/08/Binary_tree.webp";

type PlanDemosSectionContent = {
  adminViewpoint: string;
  distributorViewpoint: string;
  exploreDemo: string;
  bookYourDemo: string;
  formBadge: string;
  formHeading: string;
  formHeadingHighlight: string;
};

function mapItemsToPlanDemos(
  items: DemoItemFromApi[],
  planDemosSection: PlanDemosSectionContent
): PlanDemo[] {
  return items.map((item) => ({
    title: item.title || item.adminDemoTitle || "Plan Demo",
    summary: item.adminDemoTitle || "Plan demo description",
    image: item.image || DEFAULT_IMAGE,
    imageAlt: `${item.adminDemoTitle || "Plan"} visual`,
    width: 509,
    height: 348,
    admin: {
      title: planDemosSection.adminViewpoint,
      description:
        item.adminDemoTitle ||
        "Manage your MLM plan with comprehensive admin controls, real-time tracking, and automated commission calculations.",
      bullets: Array.isArray(item.adminDemoFeatures)
        ? item.adminDemoFeatures.map(String)
        : item.adminDemoFeatures
          ? [String(item.adminDemoFeatures)]
          : ["Advanced admin controls", "Real-time tracking", "Comprehensive reporting"],
    },
    user: {
      title: planDemosSection.distributorViewpoint,
      description:
        item.distributorsDemoTitle ||
        "Build your team and track your progress with our intuitive distributor dashboard. Monitor earnings and grow your network.",
      bullets: Array.isArray(item.distributorsDemoFeatures)
        ? item.distributorsDemoFeatures.map(String)
        : item.distributorsDemoFeatures
          ? [String(item.distributorsDemoFeatures)]
          : ["Team tracking", "Earnings dashboard", "Network growth tools"],
    },
  }));
}

export function FreeDemoList({
  locale,
  planDemosSection,
}: {
  locale: string;
  planDemosSection: PlanDemosSectionContent;
}) {
  const { items, loading, error, retry } = useDemoItems(locale);
  const [fallbackItems, setFallbackItems] = useState<DemoItemFromApi[]>([]);
  const [fallbackLoading, setFallbackLoading] = useState(false);

  // When primary locale returns no items, try English once (client-side fallback)
  useEffect(() => {
    if (loading || items.length > 0 || locale === "en" || fallbackItems.length > 0) return;
    let cancelled = false;
    setFallbackLoading(true);
    const url = `${typeof window !== "undefined" ? window.location.origin : ""}/api/demo-items?locale=en`;
    fetch(url)
      .then((res) => (res.ok ? res.json() : []))
      .then((data: unknown) => {
        if (!cancelled && Array.isArray(data) && data.length > 0) setFallbackItems(data);
      })
      .finally(() => {
        if (!cancelled) setFallbackLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [loading, items.length, locale, fallbackItems.length]);

  const displayItems = items.length > 0 ? items : fallbackItems;
  const planDemos: PlanDemo[] = mapItemsToPlanDemos(displayItems, planDemosSection);
  const showLoading = loading || (items.length === 0 && fallbackLoading && fallbackItems.length === 0);

  if (error && !loading && displayItems.length === 0) {
    return (
      <Section variant="primary" padding="lg" className="relative isolate !overflow-visible" containerClassName="space-y-6">
        <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />
        </div>
        <div className="rounded-2xl border border-border/60 bg-background/80 p-8 text-center">
          <Typography variant="p" className="text-muted-foreground mb-4">
            Unable to load demos. Please try again.
          </Typography>
          <Button onClick={retry} variant="outline">
            Retry
          </Button>
        </div>
      </Section>
    );
  }

  if (showLoading) {
    return (
      <Section variant="primary" padding="lg" className="relative isolate !overflow-visible" containerClassName="space-y-6">
        <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />
        </div>
        <div className="mx-auto h-10 w-48 animate-pulse rounded bg-muted" />
        <div className="mx-auto h-6 max-w-2xl animate-pulse rounded bg-muted" />
        <div className="divide-y divide-border/60 pt-4 space-y-0">
          {[1, 2, 3].map((i) => (
            <div key={i} className="grid gap-8 py-10 md:grid-cols-[1fr_500px]">
              <div className="animate-pulse rounded-3xl border border-border/60 bg-background p-8 space-y-4">
                <div className="h-8 bg-muted rounded w-1/3" />
                <div className="space-y-3">
                  <div className="h-12 bg-muted rounded-2xl w-full" />
                  <div className="h-12 bg-muted rounded-2xl w-full" />
                </div>
                <div className="h-6 bg-muted rounded w-3/4 mt-4" />
                <div className="h-4 bg-muted rounded w-full" />
                <div className="h-4 bg-muted rounded w-5/6" />
              </div>
              <div className="flex items-center justify-center">
                <div className="h-48 w-full animate-pulse rounded-2xl border border-border/60 bg-background" />
              </div>
            </div>
          ))}
        </div>
      </Section>
    );
  }

  return (
    <FreeDemoPlanDemosSection
      planDemos={planDemos}
      exploreDemoLabel={planDemosSection.exploreDemo}
      bookYourDemoLabel={planDemosSection.bookYourDemo}
      demoFormBadge={planDemosSection.formBadge}
      demoFormHeading={planDemosSection.formHeading}
      demoFormHeadingHighlight={planDemosSection.formHeadingHighlight}
      locale={locale}
    />
  );
}
