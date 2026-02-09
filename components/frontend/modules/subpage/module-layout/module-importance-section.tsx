"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import type { ModuleImportanceSection } from "./types";

interface ModuleImportanceSectionProps {
  content: ModuleImportanceSection;
}

export function ModuleImportanceSection({ content }: ModuleImportanceSectionProps) {
  const { badge, heading, paragraphs, imageSrc, imageAlt } = content;

  return (
    <Section variant="default" padding="lg" className="bg-muted/20">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="space-y-6">
          <SectionTitle
            badge={badge ?? undefined}
            heading={heading}
            centered={false}
            maxWidth="2xl"
          />
          <div className="space-y-4">
            {paragraphs.map((p, i) => (
              <Typography key={i} as="p" variant="p" textColor="muted" className="leading-relaxed">
                {p}
              </Typography>
            ))}
          </div>
        </div>

        <div className="group relative">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/20 via-emerald-500/10 to-primary/20 opacity-60 blur-sm transition-opacity group-hover:opacity-80" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card shadow-xl ring-1 ring-black/5 dark:ring-white/5 p-6">
            <Image
              src="/images/dashboard-deign-dark.webp"
              alt={imageAlt ?? heading}
              width={800}
              height={500}
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
            <div className="absolute inset-0 rounded-3xl ring-inset ring-1 ring-black/5 dark:ring-white/5" aria-hidden />
          </div>
        </div>
      </div>
    </Section>
  );
}
