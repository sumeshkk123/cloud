import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import type { PricingSubRoadmapSection } from "./types";
import { cn } from "@/lib/utils";

export function PricingSubPageRoadmap({ section }: { section: PricingSubRoadmapSection }) {
  return (
    <Section
      padding="lg"
      variant="gradient"
      className="relative overflow-hidden"
      containerClassName="space-y-10 md:space-y-0"
    >
      {/* Very subtle background glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(ellipse 70% 50% at 50% 30%, var(--primary) 0%, transparent 60%)`,
        }}
        aria-hidden
      />

      {/* Left: pill + heading + description + outcomes — Right: timeline */}
      <div className="grid gap-10 md:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)] md:gap-12 lg:gap-16">
        <div className="space-y-8">
          <SectionTitle
            badge={section.sectionTitle ?? "Roadmap"}
            heading={section.heading}
            description={section.description ?? undefined}
            centered={false}
            maxWidth="full"
          />
          {section.outcomes && (
            <div className="relative rounded-xl border border-primary/15 bg-primary/5 py-5 pe-5 ps-4 shadow-sm dark:border-primary/25 dark:bg-primary/10">
              <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-primary/40 to-primary/20" aria-hidden />
              <Typography as="h3" variant="h5" className="mb-3 ps-2 text-foreground">
                {section.outcomes.title}
              </Typography>
              <BulletList items={section.outcomes.points} variant="compact" />
            </div>
          )}
        </div>

        {/* Compact vertical timeline: line + nodes */}
        <div className="relative min-w-0">
          <ol className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-5 top-2 bottom-2 w-0.5 rounded-full bg-gradient-to-b from-primary/20 via-primary/60 to-primary/20"
              aria-hidden
            />
            {section.stages.map((stage, index) => {
              const Icon = stage.icon;
              const isLast = index === section.stages.length - 1;
              return (
                <li
                  key={stage.title}
                  className={cn(
                    "group relative flex gap-5 pb-12",
                    isLast && "pb-0"
                  )}
                >
                  {/* Node on the line */}
                  <div
                    className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-primary/40 bg-background text-primary shadow-md ring-4 ring-background transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20 dark:ring-muted/80"
                    aria-hidden
                  >
                    <Icon
                      className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:[transform:rotateY(180deg)]"
                      aria-hidden
                    />
                  </div>
                  {/* Content */}
                <div className="min-w-0 flex-1 rounded-lg  transition-colors duration-200 bg-background p-6">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <Typography as="h3" variant="h5" className="text-foreground">
                        {stage.title}
                      </Typography>
                      <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-primary dark:bg-primary/25">
                        {stage.duration}
                      </span>
                    </div>
                    <Typography variant="muted" as="p" className="mt-2 leading-relaxed">
                      {stage.description}
                    </Typography>
                    <span className="mt-3 inline-flex items-center rounded-full border border-primary/25 bg-primary/5 px-2.5 py-1 text-xs font-semibold text-primary dark:bg-primary/15">
                      Phase {index + 1}
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </Section>
  );
}
