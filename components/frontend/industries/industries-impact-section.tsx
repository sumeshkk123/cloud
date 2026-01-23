import type { ComponentType } from "react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";

type IconType = ComponentType<{ className?: string }>;

export type ImpactStory = {
  title: string;
  metric: string;
  summary: string;
  icon: IconType;
};

interface IndustriesImpactSectionProps {
  stories: ImpactStory[];
}

export function IndustriesImpactSection({
  stories,
}: IndustriesImpactSectionProps) {
  return (
    <Section variant="gradient" padding="lg" className="border-y border-border/60" containerClassName="space-y-12">
      <div className="space-y-4">
        <SectionTitle
          heading="What leadership teams achieve with Cloud MLM Software"
          description="Success stories span wellness, finance, and lifestyle organisations that paired resilient operations with measurable experience gains."
          maxWidth="2xl"
          badge="Impact"
        />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {stories.map((story) => {
          const Icon = story.icon;
          return (
            <article key={story.title} className="group flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm backdrop-blur">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-hover:[transform:rotateY(180deg)]" aria-hidden />
              </div>
              <div className="space-y-2">
                <Typography as="h3" variant="h6" className="font-semibold">
                  {story.title}
                </Typography>
                <Typography variant="p" className="text-sm font-semibold text-primary">
                  {story.metric}
                </Typography>
                <Typography variant="p" className="text-sm text-muted-foreground">
                  {story.summary}
                </Typography>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
