"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { WHAT_IS_PARAGRAPHS } from "../content";

const X_UP_ANIMATE_SRC = "/images/mlm-plans/x-up_animate.gif";

export function WhatIsSection() {
  return (
    <Section padding="lg" variant="primary" containerClassName="space-y-12">
      <div className="absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />
      <SectionTitle
        badge="Overview"
        heading="What is MLM Australian X-up Plan?"
        centered={false}
        maxWidth="3xl"
      />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center">
        <div className="space-y-6">
          {WHAT_IS_PARAGRAPHS.map((paragraph, i) => (
            <Typography key={i} variant="p" className="text-muted-foreground">
              {paragraph}
            </Typography>
          ))}
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative h-[340px] w-full p-6 max-w-[420px] overflow-hidden rounded-2xl border border-border/60 bg-black/5 dark:bg-white/5">
            <Image
              src={X_UP_ANIMATE_SRC}
              alt="Australian X-UP plan – pass-up flow animation"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 420px"
              unoptimized
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
