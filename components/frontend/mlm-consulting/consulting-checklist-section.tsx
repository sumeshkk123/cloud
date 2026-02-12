"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";

interface ConsultingChecklistSectionProps {
  badge?: string;
  heading: string;
  description?: string;
  items: string[];
}

export function ConsultingChecklistSection({
  badge,
  heading,
  description,
  items,
}: ConsultingChecklistSectionProps) {
  if (!items?.length) return null;

  return (
    <Section padding="lg" variant="gradient" className="bg-muted/20 dark:bg-slate-900/30">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          {/* Left: title + description + image */}
          <div className="space-y-6 mt-4">
            <Image
              src="/images/moduleIntro.webp"
              alt="MLM consulting"
              width={1200}
              height={675}
              className="h-auto w-full block"
              priority={false}
            />
          </div>
          {/* Right: 2 cards per row */}
          <div className="space-y-6">
            <div className="space-y-3">
              <SectionTitle
                badge={badge}
                heading={heading}
                description={description}
                centered={false}
                maxWidth="full"
                headingClassName="normal-case"
              />
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
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
        </div>
      </div>
    </Section>
  );
}
