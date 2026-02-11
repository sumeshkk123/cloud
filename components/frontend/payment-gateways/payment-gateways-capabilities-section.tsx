"use client";

import type { ComponentType } from "react";
import { CreditCard, Lock, Wallet } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardHeader, CardTitle, CardContent, CardIcon } from "@/components/ui/card";

type IconType = ComponentType<{ className?: string }>;

const HIGHLIGHTS: { title: string; description: string; icon: IconType }[] = [
  {
    title: "Global gateway library",
    description:
      "Connect 60+ payment providers across cards, wallets, bank transfers, and alternative methods tailored to each market.",
    icon: CreditCard,
  },
  {
    title: "Risk & compliance automation",
    description:
      "Handle KYC, AML, and chargeback mitigation with configurable thresholds and alerts.",
    icon: Lock,
  },
  {
    title: "Real-time payouts",
    description:
      "Orchestrate instant, scheduled, or split settlements via e-wallet, direct deposit, or commission cards.",
    icon: Wallet,
  },
];

export function PaymentGatewaysCapabilitiesSection() {
  return (
    <Section padding="lg" variant="gradient">
      <div className="container space-y-12">
        <div className="max-w-3xl">
          <SectionTitle
            badge="Capabilities"
            heading="Gateway capabilities at a glance"
            description="Combine multiple payment methods, risk controls, and reconciliation tools in one platform."
            centered={false}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <Card key={highlight.title} className="flex h-full flex-col">
                <CardHeader className="space-y-4">
                  <CardIcon icon={Icon} aria-hidden />
                  <CardTitle className="text-lg">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
