"use client";

import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";

interface MigrationChecklistSectionProps {
  badge?: string;
  heading: string;
  description?: string;
  items: string[];
}

export function MigrationChecklistSection({
  badge,
  heading,
  description,
  items,
}: MigrationChecklistSectionProps) {
  if (!items?.length) return null;

  return (
    <Section padding="lg" variant="primary" className="bg-muted/20 dark:bg-slate-900/30">
      <div className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <SectionTitle
            badge={badge}
            heading={heading}
            description={description}
            centered={false}
            maxWidth="full"
            headingClassName="normal-case"
          />
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background p-5 shadow-sm"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle2 className="h-4 w-4" aria-hidden />
              </span>
              <Typography variant="p" className="text-sm text-foreground leading-relaxed">
                {item}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
