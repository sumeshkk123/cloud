"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { getPaymentGatewayCountryIcon } from "./icon-map";
import type { PaymentGatewayCountryStage } from "./types";

export interface PaymentGatewayCountryStagesSectionProps {
  /** Optional pill label above the heading (default: "Delivery"). */
  badge?: string;
  heading: string;
  description: string;
  items: PaymentGatewayCountryStage[];
}

export function PaymentGatewayCountryStagesSection({ badge = "Delivery", heading, description, items }: PaymentGatewayCountryStagesSectionProps) {
  return (
    <Section padding="lg" variant="gradient">
      <div className="container space-y-12">
        <SectionTitle
          badge={badge}
          heading={heading}
          description={description}
          centered={false}
          maxWidth="3xl"
        />
        <div className="grid gap-8 lg:grid-cols-4">
          {items.map((stage) => {
            const Icon = getPaymentGatewayCountryIcon(stage.icon);
            return (
              <Card key={stage.name} className="flex h-full flex-col">
                <CardHeader className="flex flex-col gap-4">
                  <CardIcon icon={Icon} />
                  <div className="space-y-2">
                    <CardTitle>{stage.name}</CardTitle>
                    <Typography variant="p" className="text-sm text-muted-foreground">
                      {stage.detail}
                    </Typography>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
