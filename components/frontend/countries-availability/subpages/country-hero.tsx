"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Globe, ShieldCheck, Headphones, Check } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { PageTitle } from "@/components/frontend/common/page-title";

/** Metric card for the right column (modules-hero style). */
export interface CountryHeroMetric {
  label: string;
  value: string;
  detail: string;
}

export interface CountryHeroProps {
  badge?: string;
  title: string;
  highlightInTitle?: string;
  description: string;
  /** First CTA: pricing page. */
  pricingHref: string;
  /** Second CTA: try free demo (e.g. external demo login URL). */
  demoHref: string;
  metrics?: CountryHeroMetric[];
  rightSlot?: React.ReactNode;
  /** First button label (e.g. "Pricing"). */
  primaryCtaLabel?: string;
  /** Second button label (e.g. "Try free demo"). */
  secondaryCtaLabel?: string;
  /** Third button label: scroll to contact form (e.g. "Reserve your demo"). */
  reserveDemoCtaLabel?: string;
  /** Id of the contact form section for smooth scroll target. */
  contactFormSectionId?: string;
  /** Trust pill labels (translated), length 3. */
  trustPills?: [string, string, string];
}

const TRUST_PILL_ICONS = [Globe, ShieldCheck, Headphones];

export function CountryHero({
  badge = "MLM Software availability",
  title,
  highlightInTitle,
  description,
  pricingHref,
  demoHref,
  metrics,
  rightSlot,
  primaryCtaLabel = "Pricing",
  secondaryCtaLabel = "Try free demo",
  reserveDemoCtaLabel = "Reserve your demo",
  contactFormSectionId = "country-contact-form",
  trustPills,
}: CountryHeroProps) {
  const isExternalDemo = demoHref.startsWith("http");

  const scrollToContactForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(contactFormSectionId);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const titleParts = highlightInTitle
    ? (() => {
        const idx = title.indexOf(highlightInTitle);
        if (idx === -1) return { beforeText: undefined, highlightText: title, afterText: undefined };
        return {
          beforeText: idx === 0 ? undefined : title.slice(0, idx).trimEnd(),
          highlightText: highlightInTitle,
          afterText: idx + highlightInTitle.length >= title.length ? undefined : title.slice(idx + highlightInTitle.length).trimStart(),
        };
      })()
    : null;

  return (
    <section className="relative isolate overflow-hidden rounded-b-3xl">
      {/* Layered background */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(160deg, hsl(var(--primary)) 0%, #0c4a6e 25%, #0e7490 50%, #4f46e5 75%, #6d28d9 100%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-transparent to-black/20" aria-hidden />
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 45%),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 40%)`,
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 opacity-100"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      {/* Floating orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-80 w-80 rounded-full bg-white/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute right-1/4 bottom-1/3 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" aria-hidden />

      <div className="container relative py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="space-y-8">
            {titleParts ? (
              <PageTitle
                badgeText={badge}
                beforeText={titleParts.beforeText}
                highlightText={titleParts.highlightText}
                afterText={titleParts.afterText}
                description={description}
                as="h1"
                headingClassName="text-white [&_span]:bg-white/90 [&_span]:bg-clip-text [&_span]:text-transparent"
                className="[&_p]:text-white/90 [&_span]:text-white [&>div:first-child]:text-white [&>div:first-child_svg]:text-white"
              />
            ) : (
              <div className="space-y-4">
                {badge && (
                  <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                    {badge}
                  </Badge>
                )}
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] leading-tight">
                  {title}
                </h1>
                <Typography variant="p" className="text-lg text-white/90 max-w-xl">
                  {description}
                </Typography>
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="group rounded-xl px-6 py-6 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Link href={pricingHref}>
                  {primaryCtaLabel}
                  <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group rounded-xl border-2 px-6 py-6 text-base font-semibold transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/40 hover:text-white"
              >
                {isExternalDemo ? (
                  <a href={demoHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                    {secondaryCtaLabel}
                    <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                  </a>
                ) : (
                  <Link href={demoHref}>
                    {secondaryCtaLabel}
                    <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                  </Link>
                )}
              </Button>
              {reserveDemoCtaLabel && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group rounded-xl border-2 border-white/50 px-6 py-6 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-white bg-transparent hover:bg-white/20 hover:text-white"
                >
                  <a href={`#${contactFormSectionId}`} className="inline-flex items-center" onClick={scrollToContactForm}>
                    {reserveDemoCtaLabel}
                    <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                  </a>
                </Button>
              )}
            </div>

            {(trustPills?.length ?? 0) >= 3 && (
              <div className="flex flex-wrap gap-6 pt-4">
                {trustPills!.map((label, i) => {
                  const Icon = TRUST_PILL_ICONS[i] ?? Globe;
                  return (
                    <span
                      key={label}
                      className="group flex items-center gap-2 text-sm font-medium text-white/90"
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition-all duration-300 group-hover:bg-white/25">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      {label}
                    </span>
                  );
                })}
              </div>
            )}
          </div>

          {((metrics && metrics.length > 0) || rightSlot) && (
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md space-y-4">
                {metrics && metrics.length > 0 ? (
                  metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-white/30 hover:bg-white/15"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="relative flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <dt className="text-xs font-semibold uppercase tracking-wider text-white/70">
                            {metric.label}
                          </dt>
                          <dd className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                            {metric.value}
                          </dd>
                          <p className="mt-2 text-sm text-white/80">{metric.detail}</p>
                        </div>
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white transition-colors group-hover:bg-white/30">
                          <Check className="h-6 w-6" aria-hidden />
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  rightSlot
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
