"use client";

import { Rocket } from "lucide-react";
import { DemoCard } from "@/components/frontend/common/demo-card";
import { resolveIcon } from "./utils";
import { useDemoItems } from "@/lib/hooks/use-demo-items";

type MlmSoftwareDemoCardsProps = {
  locale: string;
};

export function MlmSoftwareDemoCards({ locale }: MlmSoftwareDemoCardsProps) {
  const { items, loading } = useDemoItems(locale);

  const homePageDemos = items.filter((item) => item.showOnHomePage === true);
  const demosToShow = (homePageDemos.length > 0 ? homePageDemos : items.slice(0, 4)).slice(0, 4);

  if (loading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="animate-pulse rounded-3xl border border-border/60 bg-background p-8">
            <div className="flex flex-col gap-4">
              <div className="h-12 w-12 rounded-full bg-muted shrink-0" />
              <div className="h-6 bg-muted rounded w-3/4" />
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-5/6" />
              <div className="h-4 bg-muted rounded w-32 mt-2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (demosToShow.length === 0) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {demosToShow.map((item, index) => {
        const Icon = resolveIcon(item.icon, Rocket);
        const adminFeatures = Array.isArray(item.adminDemoFeatures)
          ? item.adminDemoFeatures.slice(0, 1).map(String)
          : item.adminDemoFeatures
            ? [String(item.adminDemoFeatures)].slice(0, 1)
            : [];
        return (
          <DemoCard
            key={`${item.id}-${index}`}
            className="h-full"
            icon={Icon}
            title={item.title ?? ""}
            description={item.adminDemoTitle || ""}
            points={adminFeatures}
          />
        );
      })}
    </div>
  );
}
