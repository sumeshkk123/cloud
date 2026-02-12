"use client";

import Link from "next/link";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import { CountryFlag } from "@/components/frontend/countries-availability/subpages/country-flag";
import { getPaymentGatewayCountryIcon } from "./icon-map";
import type { PaymentGatewayCountryGuard, PaymentGatewayCountryBriefcase } from "./types";

export interface PaymentGatewayCountryGuardsSectionProps {
  /** Optional pill label above the heading (default: "Safeguards"). */
  badge?: string;
  heading: string;
  description: string;
  items: PaymentGatewayCountryGuard[];
  briefcase: PaymentGatewayCountryBriefcase;
  pricingHref: string;
  /** When provided, a country flag is shown next to the section title. */
  countrySlug?: string;
  countryName?: string;
}

export function PaymentGatewayCountryGuardsSection({
  badge = "Safeguards",
  heading,
  description,
  items,
  briefcase,
  pricingHref,
  countrySlug,
  countryName,
}: PaymentGatewayCountryGuardsSectionProps) {
  return (
    <Section padding="lg" variant="gradient">
      <div className="container space-y-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <SectionTitle
            badge={badge}
            heading={heading}
            description={description}
            centered={false}
            maxWidth="3xl"
          />
          {countrySlug && countryName && (
            <CountryFlag
              countrySlug={countrySlug}
              countryName={countryName}
              size="sm"
              className="shrink-0"
            />
          )}
        </div>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-end">
          <div className="grid gap-6 sm:grid-cols-3">
            {items.map((guard) => {
              const Icon = getPaymentGatewayCountryIcon(guard.icon);
              return (
                <Card key={guard.title} className="flex h-full flex-col">
                  <CardHeader className="flex flex-col gap-3">
                    <CardIcon icon={Icon} />
                    <div className="space-y-2">
                      <CardTitle className="text-base">{guard.title}</CardTitle>
                      <Typography variant="p" className="text-sm text-muted-foreground">
                        {guard.description}
                      </Typography>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
          <Card className="overflow-hidden border-primary/30 bg-gradient-to-br from-primary via-blue-500 via-purple-500 to-pink-500">
            <div className="relative isolate p-6">
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-20" aria-hidden>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />
              </div>
              <Typography as="h3" variant="h3" className="text-lg font-semibold text-white">
                {briefcase.title}
              </Typography>
              <Typography variant="p" className="mt-3 text-sm text-white/90">
                {briefcase.description}
              </Typography>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-white/80">{briefcase.artefactsLabel}</dt>
                  <dd className="mt-2 leading-6 text-white/95">{briefcase.artefactsDetail}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-white/80">{briefcase.refreshLabel}</dt>
                  <dd className="mt-2 leading-6 text-white/95">{briefcase.refreshDetail}</dd>
                </div>
              </dl>
              <Button asChild size="lg" className="mt-6 w-full gap-2 bg-white text-primary hover:bg-white/95">
                <Link href={pricingHref}>
                  {briefcase.ctaLabel}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
