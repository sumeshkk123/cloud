"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { WHY_PREFERRED_PARAGRAPH } from "../content";

const MODULE_INTRO_IMAGE_SRC = "/images/moduleIntro.webp";

export function WhyPreferredSection() {
  return (
    <Section padding="lg" variant="gradient" containerClassName="space-y-8">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:items-center">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-pulse -z-10" />
        <div className="relative flex justify-center lg:justify-end">
          <Image
            src={MODULE_INTRO_IMAGE_SRC}
            alt="MLM module – why Auto Fill plan is preferred"
            width={840}
            height={560}
            className="max-w-full h-auto object-contain"
            sizes="(max-width: 1024px) 100vw, 420px"
          />
        </div>
        <div className="space-y-6">
          <SectionTitle
            badge="Why choose"
            heading="Why Auto Fill Plan is preferred in MLM business?"
            centered={false}
            maxWidth="3xl"
          />
          <Typography variant="p" className="max-w-3xl text-muted-foreground">
            {WHY_PREFERRED_PARAGRAPH}
          </Typography>
        </div>
      </div>
    </Section>
  );
}
