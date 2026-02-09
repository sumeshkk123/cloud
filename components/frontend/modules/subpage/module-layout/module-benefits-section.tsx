"use client";

import { Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import type { ModuleBenefitsSection } from "./types";

interface ModuleBenefitsSectionProps {
  content: ModuleBenefitsSection;
}

export function ModuleBenefitsSection({ content }: ModuleBenefitsSectionProps) {
  const { badge, heading, description, items } = content;

  if (!items?.length) return null;

  return (
    <Section variant="gradient" padding="lg">
      <div className="space-y-10">
        <SectionTitle
          badge={badge ?? undefined}
          heading={heading}
          description={description ?? undefined}
          centered={false}
          maxWidth="2xl"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title} className="flex h-full flex-col">
              <CardHeader className="space-y-4">
                <CardIcon icon={Check} aria-hidden />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <Typography as="p" variant="small" textColor="muted" className="leading-relaxed">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
