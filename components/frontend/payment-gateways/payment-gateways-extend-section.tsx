"use client";

import type { ComponentType } from "react";
import { Zap, Coins, Receipt } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardHeader, CardTitle, CardContent, CardIcon } from "@/components/ui/card";

type IconType = ComponentType<{ className?: string }>;

const CAPABILITIES: { title: string; detail: string; icon: IconType }[] = [
  {
    title: "Smart routing",
    detail:
      "Automatically route transactions to the best-performing gateway based on geography, payment type, or uptime.",
    icon: Zap,
  },
  {
    title: "Currency intelligence",
    detail: "Present multi-currency pricing, FX conversions, and tax handling without manual spreadsheets.",
    icon: Coins,
  },
  {
    title: "Audit-ready reporting",
    detail: "Reconcile fees, refunds, and reserves with finance exports designed for ERP and accounting tools.",
    icon: Receipt,
  },
];

export function PaymentGatewaysExtendSection() {
  return (
    <Section padding="lg" variant="gradient">
      <div className="container space-y-12">
        <div className="max-w-3xl">
          <SectionTitle
            badge="Extend"
            heading="Extend your payment stack"
            description="Mix in these capabilities to deliver a frictionless payment experience for customers and distributors alike."
            centered={false}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <Card key={capability.title} className="flex h-full flex-col">
                <CardHeader className="space-y-4">
                  <CardIcon icon={Icon} />
                  <CardTitle className="text-lg">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">{capability.detail}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
