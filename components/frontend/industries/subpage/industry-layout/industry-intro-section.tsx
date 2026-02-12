"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import type { IndustryIntroSection as IndustryIntroSectionType } from "../types";

interface IndustryIntroSectionProps {
  content: IndustryIntroSectionType;
}

function formatNumber(index: number): string {
  return String(index + 1).padStart(2, "0");
}

export function IndustryIntroSection({ content }: IndustryIntroSectionProps) {
  const { whyBlock, heading = "Pressing realities", challenges, sidebarCtaLabel, sidebarCtaHref } = content;

  if (whyBlock) {
    const { heading: whyHeading, paragraph, numberedItems, bottomImage, bottomImageAlt, bottomImageOverlayText } = whyBlock;
    const image = bottomImage;
    return (
      <Section padding="lg" variant="primary">
        <div className="space-y-6">
          <div className="absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl"></div>
          <div className="container relative grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-12 xl:gap-16">
            <div className="absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl"></div>
            <div className="space-y-6">
              <SectionTitle
                heading={whyHeading}
                centered={false}
                maxWidth="full"
                headingClassName="text-left normal-case"
              />

              <Typography variant="p" className="text-muted-foreground leading-relaxed">
                {paragraph}
              </Typography>
              <div className="relative flex flex-col">
                {/* Vertical line connecting the numbered circles */}
                <span
                  className="absolute left-4 top-[1.125rem] bottom-[1.125rem] w-px bg-border border-primary/20"
                  aria-hidden
                />
                {numberedItems.map((item, index) => (
                  <div key={index} className="relative flex gap-4 pb-6 last:pb-0">
                    <div className="relative z-10 flex shrink-0">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary/20 bg-primary/5 text-sm font-semibold text-primary">
                        {formatNumber(index)}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <Typography as="h3" variant="h5" className="font-semibold text-foreground">
                        {item.title}
                      </Typography>
                      <Typography variant="small" className="mt-1 text-muted-foreground leading-relaxed">
                        {item.description}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="min-w-0 w-full">
              {image ? (
                <div className="relative w-full rounded-xl mt-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={bottomImageAlt ?? "MLM software for your industry"}
                    className="w-full h-auto block rounded-xl"
                  />
                  {bottomImageOverlayText ? (
                    <div className="absolute bottom-4 right-4 max-w-[88%] rounded-lg bg-primary/95 px-4 py-3 text-sm font-medium text-primary-foreground shadow-lg">
                      {bottomImageOverlayText}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Section>
    );
  }

  if (!challenges?.length) return null;

  return (
    <Section padding="lg" variant="default" containerClassName="max-w-2xl">
      <div className="space-y-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
        <Typography variant="small" className="font-semibold uppercase tracking-wide text-primary/80">
          {heading}
        </Typography>
        <div className="space-y-5">
          {challenges.map((challenge) => (
            <article
              key={challenge.title}
              className="rounded-2xl border border-border/60 bg-muted/30 p-5 dark:border-border/40 dark:bg-slate-900/40"
            >
              <Typography as="h2" variant="h6" className="text-sm font-semibold text-foreground">
                {challenge.title}
              </Typography>
              <Typography variant="muted" className="mt-2 text-xs">
                {challenge.description}
              </Typography>
            </article>
          ))}
        </div>
        {sidebarCtaLabel && sidebarCtaHref && (
          <Button asChild variant="ghost" className="w-full justify-between">
            <Link href={sidebarCtaHref}>
              {sidebarCtaLabel}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        )}
      </div>
    </Section>
  );
}
