"use client";

import { Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import type { ServiceBenefitsSection } from "./types";

interface ServiceBenefitsSectionProps {
  content: ServiceBenefitsSection;
}

export function ServiceBenefitsSection({ content }: ServiceBenefitsSectionProps) {
  const { badge, heading, description, items } = content;

  if (!items?.length) return null;

  return (
    <Section
      variant="gradient"
      padding="lg"
      className="overflow-visible bg-muted/10"
      containerClassName="overflow-visible"
    >
      <div className="grid gap-12 lg:grid-cols-[.6fr_1.2fr] lg:items-stretch lg:gap-16">
        {/* Left: sticky title block — self-start so it doesn't stretch; overflow-visible on section so sticky sticks to viewport */}
        <div className="lg:sticky lg:top-24 lg:self-start space-y-4">
          {badge && (
            <Badge variant="secondary" className="text-xs font-medium">
              {badge}
            </Badge>
          )}
          <Typography variant="h2" className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {heading}
          </Typography>
          {description && (
            <Typography
              as="p"
              variant="p"
              textColor="muted"
              className="max-w-md leading-relaxed"
            >
              {description}
            </Typography>
          )}
        </div>

        {/* Right: card grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <Card key={item.title} className="flex h-full flex-col">
              <CardHeader className="space-y-4">
                <CardIcon icon={Check} aria-hidden />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <Typography
                  as="p"
                  variant="small"
                  textColor="muted"
                  className="leading-relaxed"
                >
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
