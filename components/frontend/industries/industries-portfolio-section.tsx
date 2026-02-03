import type { ComponentType } from "react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

type IconType = ComponentType<{ className?: string }>;

export type PortfolioCluster = {
  title: string;
  blurb: string;
  bullets: string[];
  icon: IconType;
};

interface IndustriesPortfolioSectionProps {
  clusters: PortfolioCluster[];
}

export function IndustriesPortfolioSection({
  clusters,
}: IndustriesPortfolioSectionProps) {
  return (
    <Section variant="primary" padding="xl" className="relative isolate !overflow-visible">
      {/* Floating orbs */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse -z-10" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-pulse -z-10" style={{ animationDelay: '1s' }} />

      <div className="relative container z-10 space-y-16">
        {/* Header */}
        <SectionTitle
          badge="Industries"
          heading="Industry portfolios in focus"
          description="Every industry blueprint draws from AI insights, automation guardrails, and experience design that reflect the expectations of distributors, customers, regulators, and partners."
          centered={true}
          maxWidth="3xl"
        />

        {/* Portfolio Clusters */}
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-3">
          {clusters.map((cluster) => {
            const Icon = cluster.icon;
            return (
              <Card key={cluster.title} className="p-4">
                <CardHeader>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-7 w-7" aria-hidden />
                      </span>
                      <div className="flex-1">
                        <Typography as="h5" variant="h5">
                          {cluster.title}
                        </Typography>
                        <Typography as="p" variant="p" textColor="muted" className="mt-2">
                          {cluster.blurb}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <BulletList items={cluster.bullets} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
