"use client";

import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import { BulletList } from "@/components/ui/bullet-list";
import { Typography } from "@/components/ui/typography";
import { getPaymentGatewayCountryIcon } from "./icon-map";
import type { PaymentGatewayCountryCluster } from "./types";

export interface PaymentGatewayCountryClustersSectionProps {
  /** Optional pill label above the heading (default: "Gateway clusters"). */
  badge?: string;
  heading: string;
  description: string;
  items: PaymentGatewayCountryCluster[];
}

export function PaymentGatewayCountryClustersSection({ badge = "Gateway clusters", heading, description, items }: PaymentGatewayCountryClustersSectionProps) {
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
        <div className="grid gap-8 lg:grid-cols-3">
          {items.map((cluster) => {
            const Icon = getPaymentGatewayCountryIcon(cluster.icon);
            return (
              <Card key={cluster.title} className="flex h-full flex-col">
                <CardHeader className="flex flex-col gap-4">
                  <CardIcon icon={Icon} />
                  <div className="space-y-2">
                    <CardTitle>{cluster.title}</CardTitle>
                    <Typography variant="p" className="text-sm text-muted-foreground">
                      {cluster.description}
                    </Typography>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 pt-0">
                  <BulletList items={cluster.bullets} />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
