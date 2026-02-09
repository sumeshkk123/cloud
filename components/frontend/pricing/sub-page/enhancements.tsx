import { Sparkles } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import type { PricingSubEnhancementsSection } from "./types";

export function PricingSubPageEnhancements({
  section,
}: {
  section: PricingSubEnhancementsSection;
}) {
  return (
    <Section padding="lg" variant="secondary" containerClassName="space-y-10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,0.6fr)]">
        <SectionTitle
          heading={section.heading}
          description={section.description ?? undefined}
          centered={false}
          maxWidth="full"
        />
        {section.callout && (
          <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-background to-slate-50 p-6 shadow-sm dark:from-primary/15 dark:via-slate-950 dark:to-slate-950/70 flex items-center">
            <div className="flex items-start  gap-3">
              <Sparkles className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <Typography variant="muted" as="p">
                {section.callout}
              </Typography>
            </div>
          </div>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {section.items.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.title}
              className="group flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-hover:[transform:rotateY(180deg)]" aria-hidden />
              </span>
              <div className="space-y-2">
                <Typography as="h3" variant="h5">
                  {item.title}
                </Typography>
                <Typography variant="muted" as="p">
                  {item.description}
                </Typography>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
