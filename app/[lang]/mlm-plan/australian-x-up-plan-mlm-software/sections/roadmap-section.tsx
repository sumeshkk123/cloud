"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { roadmap } from "../content";
import { cn } from "@/lib/utils";

function StepContent({
  step,
  align,
}: {
  step: (typeof roadmap)[number];
  align: "left" | "right";
}) {
  const isRight = align === "right";
  return (
    <div
      className={cn(
        "min-w-0 pt-0.5",
        isRight ? "text-left" : "text-right"
      )}
    >
      <div className={cn("flex flex-wrap items-baseline gap-2", isRight ? "flex-row" : "flex-row-reverse")}>
        <Typography variant="p" className="font-semibold text-foreground">
          {step.phase}
        </Typography>
        <Typography variant="small" className="font-medium uppercase tracking-wide text-primary">
          {step.duration}
        </Typography>
      </div>
      <ul className={cn("mt-3 space-y-1.5", isRight ? "text-left" : "text-right")}>
        {step.activities.map((activity, i) => (
          <li
            key={i}
            className={cn(
              "flex gap-2 text-sm text-muted-foreground",
              isRight ? "flex-row" : "flex-row-reverse"
            )}
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" aria-hidden />
            <span>{activity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function RoadmapSection() {
  return (
    <Section padding="lg" variant="gradient" containerClassName="space-y-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />
      <div className="absolute top-0 inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
    
      <SectionTitle
        badge="Roadmap"
        heading="Implementation roadmap with guided support"
        description="Launch faster with a consultative playbook that blends configuration, testing, and enablement into measurable sprints."
        centered={true}
        maxWidth="3xl"
      />
      <div className="relative mx-auto max-w-4xl">
        {/* Vertical line: left on small, center on md+ */}
        <div
          className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-primary/40 via-primary/30 to-primary/20 md:left-1/2 md:-translate-x-px"
          aria-hidden
        />
        <ul className="space-y-0">
          {roadmap.map((step, index) => {
            const Icon = step.icon;
            const isLeft = index % 2 === 0;
            return (
              <li
                key={step.phase}
                className="grid grid-cols-[40px_1fr] gap-4 items-start pb-10 last:pb-0 md:grid-cols-[1fr_40px_1fr]"
              >
                {/* Left slot – content when even (md+ only); hidden on small */}
                <div className="hidden min-w-0 pr-4 md:block">
                  {isLeft ? <StepContent step={step} align="left" /> : null}
                </div>
                {/* Node */}
                <div className="relative z-10 col-start-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary/20 bg-primary/5 shadow-sm md:col-start-2 md:mx-auto">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                {/* Right slot – content when odd on md; always on small */}
                <div
                  className={cn(
                    "col-start-2 min-w-0 pl-4 md:col-start-3",
                    isLeft && "md:hidden"
                  )}
                >
                  <StepContent step={step} align="right" />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
