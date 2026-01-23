import type { ComponentType } from "react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";

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
    <Section variant="primary" padding="lg" containerClassName="space-y-12">
      <div className="space-y-4">
        <SectionTitle
          heading="Industry portfolios in focus"
          description="Every industry blueprint draws from AI insights, automation guardrails, and experience design that reflect the expectations of distributors, customers, regulators, and partners."
          maxWidth="3xl"
          badge="Industries"
        />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {clusters.map((cluster) => {
          const Icon = cluster.icon;
          return (
            <article key={cluster.title} className="group flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-hover:[transform:rotateY(180deg)]" aria-hidden />
              </div>
              <div className="space-y-2">
                <Typography as="h3" variant="h5" className="font-semibold">
                  {cluster.title}
                </Typography>
                <Typography variant="p" textColor="muted" className="text-sm">
                  {cluster.blurb}
                </Typography>
              </div>
              <BulletList items={cluster.bullets} />
            </article>
          );
        })}
      </div>
    </Section>
  );
}
