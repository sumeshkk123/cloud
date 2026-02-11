"use client";

import { Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import type { ServiceExtraListSection as ServiceExtraListSectionType } from "./types";

interface ServiceExtraListSectionProps {
  content: ServiceExtraListSectionType;
}

export function ServiceExtraListSection({ content }: ServiceExtraListSectionProps) {
  const { badge, heading, description, items } = content;

  if (!items?.length) return null;

  return (
    <Section padding="lg" variant="gradient">
      <div className="container space-y-8">
        <SectionTitle
          badge={badge ?? undefined}
          heading={heading}
          description={description ?? undefined}
          centered={false}
          maxWidth="3xl"
        />
        <ul className="grid gap-4 sm:grid-cols-3 lg:gap-3">
          {items.map((item, index) => (
            <li key={index} className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white/80 p-4 dark:border-border dark:bg-card/80">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Check className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:[transform:rotateY(180deg)]" aria-hidden />
              </span>
              <span className="pt-1.5 text-sm leading-relaxed text-foreground/90">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
