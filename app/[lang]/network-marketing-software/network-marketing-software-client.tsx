"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Users } from "@phosphor-icons/react";
import { networkMarketingSoftwareContent } from "./content";

type NetworkMarketingSoftwareClientProps = {
  demoHref: string;
  contactHref: string;
  consultingHref: string;
};

export function NetworkMarketingSoftwareClient({
  demoHref,
  contactHref,
  consultingHref,
}: NetworkMarketingSoftwareClientProps) {
  const c = networkMarketingSoftwareContent;

  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(37,99,235,0.3),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(124,58,237,0.28),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.25),transparent_65%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/60 bg-indigo-400/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-indigo-100">
              {c.hero.badge}
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              {c.hero.title}
            </h1>
            <p className="max-w-2xl text-base text-slate-100/85">
              {c.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  {c.hero.primaryCta}
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-indigo-200/60 text-indigo-100 hover:bg-indigo-400/10"
              >
                <Link href={consultingHref}>
                  {c.hero.secondaryCta}
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative space-y-6 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
            <div className="absolute -right-12 -top-10 h-40 w-40 rounded-full bg-indigo-400/40 blur-3xl" aria-hidden />
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/80">
              <span>{c.hero.statsCard.title}</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold">
                <Users className="h-3.5 w-3.5" aria-hidden />
                {c.hero.statsCard.subtitle}
              </span>
            </div>
            <div className="grid gap-4 rounded-2xl border border-white/20 bg-slate-950/40 p-4 text-sm text-slate-100/80">
              {c.hero.statsCard.stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center justify-between">
                    <span className="flex items-center gap-2 font-semibold text-white">
                      <Icon className="h-4 w-4" aria-hidden />
                      {stat.label}
                    </span>
                    <span>{stat.value}</span>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-slate-100/75">{c.hero.statsCard.footer}</p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {c.pillars.heading}
          </h2>
          <p className="text-sm text-muted-foreground">{c.pillars.description}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {c.pillars.items.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Framework */}
      <section className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-950/40">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {c.framework.heading}
            </h2>
            <p className="text-sm text-muted-foreground">{c.framework.description}</p>
          </div>
          <div className="grid gap-6">
            {c.framework.items.map((item) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <div className="absolute -left-12 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden />
                <div className="relative space-y-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                    {item.label}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Platform features */}
      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {c.platformFeatures.badge}
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {c.platformFeatures.heading}
          </h2>
          <p className="text-sm text-muted-foreground">
            {c.platformFeatures.description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.platformFeatures.items.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Advantages + aside CTA */}
      <section className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-950/40">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {c.advantages.heading}
            </h2>
            <p className="text-sm text-muted-foreground">
              {c.advantages.description}
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {c.advantages.items.map((advantage) => {
                const Icon = advantage.icon;
                return (
                  <article
                    key={advantage.title}
                    className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-center shadow-sm"
                  >
                    <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">
                      {advantage.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {advantage.detail}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
          <aside className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-background to-indigo-50 p-8 shadow-sm dark:from-primary/15 dark:via-slate-950 dark:to-indigo-900/30">
            <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-primary/20 blur-3xl" aria-hidden />
            <div className="absolute bottom-0 right-0 h-52 w-52 translate-y-1/3 rounded-full bg-sky-200/30 blur-3xl dark:bg-indigo-900/30" aria-hidden />
            <div className="relative space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/40 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm dark:bg-slate-950/50">
                <Users className="h-4 w-4" aria-hidden />
                {c.advantages.asideCta.badge}
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                {c.advantages.asideCta.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {c.advantages.asideCta.description}
              </p>
              <Button asChild size="lg">
                <Link href={contactHref}>
                  {c.advantages.asideCta.ctaLabel}
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-background to-slate-100 p-10 shadow-sm dark:from-primary/15 dark:via-slate-950 dark:to-slate-900">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-200/30 blur-3xl dark:bg-indigo-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {c.finalCta.heading}
              </h2>
              <p className="text-sm text-muted-foreground">
                {c.finalCta.description}
              </p>
            </div>
            <div className="grid gap-3 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm dark:border-primary/30 dark:bg-slate-950/70">
              {c.finalCta.card.items.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center justify-between text-xs text-muted-foreground"
                  >
                    <span>{item.label}</span>
                    {Icon ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-primary">
                        <Icon className="h-3.5 w-3.5" aria-hidden />
                        {item.value}
                      </span>
                    ) : (
                      <span className="font-semibold text-foreground">{item.value}</span>
                    )}
                  </div>
                );
              })}
              <Button asChild>
                <Link href={contactHref}>
                  {c.finalCta.card.ctaLabel}
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
