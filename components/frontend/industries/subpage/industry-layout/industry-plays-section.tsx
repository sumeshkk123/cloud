"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import {
  Card,
  CardContent,
  CardHeader,
  CardIcon,
  CardTitle,
} from "@/components/ui/card";
import type { IndustryPlaysSection as IndustryPlaysSectionType } from "../types";

interface IndustryPlaysSectionProps {
  content: IndustryPlaysSectionType;
  /** Optional pill/badge text above the heading (e.g. "Plays"). */
  badge?: string | null;
}

export function IndustryPlaysSection({ content, badge = "Plays" }: IndustryPlaysSectionProps) {
  const { heading, description, plays } = content;
  return (
    <Section padding="lg" variant="gradient">
      <div className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <SectionTitle
            badge={badge}
            heading={heading}
            description={description ?? undefined}
            centered={false}
            maxWidth="full"
            headingClassName="normal-case"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plays.map((play) => {
            const Icon = play.icon;
            return (
              <Card key={play.title} className="flex h-full flex-col">
                <CardHeader className="flex flex-col gap-3">
                  <CardIcon icon={Icon} />
                  <CardTitle>
                    <Typography as="h3" variant="h5" className="text-foreground">
                      {play.title}
                    </Typography>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <Typography variant="p" className="text-sm leading-relaxed text-muted-foreground">
                    {play.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
