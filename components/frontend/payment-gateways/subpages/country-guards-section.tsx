"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { getPaymentGatewayCountryIcon } from "./icon-map";
import type { PaymentGatewayCountryGuard } from "./types";
import type { PaymentGatewayCountryBriefcase } from "./types";

export interface PaymentGatewayCountryGuardsSectionProps {
  heading: string;
  description: string;
  items: PaymentGatewayCountryGuard[];
  briefcase: PaymentGatewayCountryBriefcase;
  pricingHref: string;
}

export function PaymentGatewayCountryGuardsSection({
  heading,
  description,
  items,
  briefcase,
  pricingHref,
}: PaymentGatewayCountryGuardsSectionProps) {
  return (
    <section className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
      <div className="space-y-6">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{heading}</h2>
        <p className="text-base text-slate-600 dark:text-slate-300">{description}</p>
        <div className="grid gap-6 sm:grid-cols-3">
          {items.map((guard) => {
            const Icon = getPaymentGatewayCountryIcon(guard.icon);
            return (
              <div
                key={guard.title}
                className="rounded-3xl border border-emerald-200/70 bg-white/80 p-5 text-sm shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />
                <h3 className="mt-3 text-base font-semibold text-emerald-900 dark:text-white">{guard.title}</h3>
                <p className="mt-2 text-sm text-emerald-800/80 dark:text-slate-300">{guard.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative isolate overflow-hidden rounded-[2.25rem] border border-emerald-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-xl dark:border-slate-700">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_25%,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(101,163,13,0.35),transparent_55%)]" aria-hidden />
        <h3 className="text-lg font-semibold">{briefcase.title}</h3>
        <p className="mt-3 text-sm text-slate-200">{briefcase.description}</p>
        <dl className="mt-6 space-y-4 text-sm">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{briefcase.artefactsLabel}</dt>
            <dd className="mt-2 leading-6 text-slate-100">{briefcase.artefactsDetail}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{briefcase.refreshLabel}</dt>
            <dd className="mt-2 leading-6 text-slate-100">{briefcase.refreshDetail}</dd>
          </div>
        </dl>
        <Button asChild size="lg" className="mt-6 w-full gap-2 bg-white text-emerald-900 hover:bg-emerald-100">
          <Link href={pricingHref}>
            {briefcase.ctaLabel}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
