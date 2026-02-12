"use client";

import { Typography } from "@/components/ui/typography";
import type { IndustryProofPointsSection as IndustryProofPointsSectionType } from "../types";

interface IndustryProofPointsSectionProps {
  content: IndustryProofPointsSectionType;
}

export function IndustryProofPointsSection({ content }: IndustryProofPointsSectionProps) {
  const { heading, description, proofPoints } = content;
  return (
    <div className="relative overflow-hidden 0 bg-primary/5 rounded-3xl p-10 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-900">
      <div className="relative space-y-6">
        <Typography as="h2" variant="h2" className="text-foreground">
          {heading}
        </Typography>
        {description ? (
          <Typography variant="p" className="text-muted-foreground">
            {description}
          </Typography>
        ) : null}
        <div className="grid gap-4 sm:grid-cols-2">
          {proofPoints.slice(0, 2).map((proof) => (
            <article
              key={proof.title}
              className="rounded-2xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/60"
            >
              <Typography as="h3" variant="h5" className="text-foreground">
                {proof.title}
              </Typography>
              <Typography variant="p" className="mt-2 text-sm text-muted-foreground">
                {proof.description}
              </Typography>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
