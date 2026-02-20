"use client";

import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { IndustryProgrammesSection as IndustryProgrammesSectionType } from "../types";

interface IndustryProgrammesSectionProps {
  content: IndustryProgrammesSectionType;
}

export function IndustryProgrammesSection({ content }: IndustryProgrammesSectionProps) {
  const {
    heading,
    description,
    implementationArtefacts,
    programmes,
    imageUrl,
    imageOverlay,
    badge,
  } = content;

  return (
    <Section
      padding="lg"
      variant="gradient"
      className="overflow-visible"
      containerClassName="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12"
    >
      <div className="relative min-w-0 w-full self-start lg:sticky lg:top-24">
        <div className="relative w-full rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt=""
            className="w-full h-auto block rounded-xl"
          />
          {imageOverlay ? (
            <div className="absolute bottom-4 left-4 rounded-xl bg-primary/95 px-4 py-3 text-primary-foreground shadow-lg">
              <div className="text-2xl font-bold leading-tight">{imageOverlay.value}</div>
              <div className="text-sm font-medium">{imageOverlay.line2}</div>
              <div className="text-sm font-medium">{imageOverlay.line3}</div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="min-w-0 space-y-6">
        <SectionTitle
          heading={heading}
          description={undefined}
          centered={false}
          maxWidth="full"
          headingClassName="normal-case"
        />
        {description ? (
          <Typography variant="p" className="text-muted-foreground">
            {description}
          </Typography>
        ) : null}
        {implementationArtefacts && implementationArtefacts.length > 0 && (
          <div className="space-y-4 rounded-3xl border border-border/60 bg-background p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/60">
            <Typography variant="small" className="font-semibold uppercase tracking-wide text-primary/80">
              Implementation artefacts
            </Typography>
            <ul className="space-y-2 text-muted-foreground">
              {implementationArtefacts.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="grid gap-5 sm:grid-cols-2">
          {programmes.map((programme) => (
            <Card key={programme.name} className="flex h-full flex-col">
              <CardHeader className="flex flex-row items-start gap-3 space-y-0">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <CheckCircle2 className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:[transform:rotateY(180deg)]" aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <CardTitle>
                    <Typography as="h3" variant="h5" className="text-foreground">
                      {programme.name}
                    </Typography>
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                {programme.description ? (
                  <Typography variant="small" className="text-muted-foreground">
                    {programme.description}
                  </Typography>
                ) : (
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {programme.outcomes.map((outcome) => (
                      <li key={outcome}>• {outcome}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
