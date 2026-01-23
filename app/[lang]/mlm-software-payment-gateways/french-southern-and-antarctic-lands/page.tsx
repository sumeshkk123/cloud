import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { ArrowUpRight } from "lucide-react";
import {
  AnchorSimple,
  ArrowBendRightUp,
  CirclesThreePlus,
  CloudSnow,
  Compass,
  Cube,
  GlobeHemisphereEast,
  GlobeSimple,
  Lightning,
  MapPinned,
  Megaphone,
  Planet,
  ShieldCheck,
  Snowflake,
  StackSimple,
  ThermometerCold,
  Waves,
  Wind
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroCallout = {
  title: string;
  description: string;
  icon: IconType;
};

type InsightCard = {
  heading: string;
  detail: string;
  icon: IconType;
};

type GatewayMission = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type ModuleBeacon = {
  name: string;
  description: string;
  icon: IconType;
  accent: string;
};

type ExpeditionStage = {
  title: string;
  detail: string;
  icon: IconType;
};

type RegionalExchange = {
  name: string;
  note: string;
  icon: IconType;
};

const HERO_CALLOUTS: HeroCallout[] = [
  {
    title: "WordPress fidelity",
    description:
      "The hero preserves the exact promise “Ways to accept payments from MLM Software in People’s Democratic Republic of French Southern and Antarctic Lands – TF.”",
    icon: Snowflake
  },
  {
    title: "Gateway arsenal",
    description: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout.",
    icon: CirclesThreePlus
  },
  {
    title: "Module continuity",
    description:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual system.",
    icon: StackSimple
  }
];

const INSIGHT_CARDS: InsightCard[] = [
  {
    heading: "Custom & preset demos",
    detail: "Legacy demo paths resurface with automated invites, recording vaults, and AI follow-up briefs.",
    icon: Lightning
  },
  {
    heading: "Module archive",
    detail: "Each module inherits analytics, permissioning, and resilience controls for polar operations.",
    icon: Cube
  },
  {
    heading: "Global coverage",
    detail: "The country directory becomes a knowledge exchange for research stations and allied territories.",
    icon: GlobeSimple
  }
];

const GATEWAY_MISSIONS: GatewayMission[] = [
  {
    title: "PayPal — expedition treasury",
    summary: "Harmonise payments between Port-aux-Français research stations, Paris HQ, and Antarctic partners.",
    bullets: [
      "Multi currency ledgers track EUR, USD, ZAR, and AUD flows with anomaly detection for leadership.",
      "Ticket system logs ACPR guidance, grant correspondence, and expedition procurement evidence."
    ],
    icon: Planet
  },
  {
    title: "Amazon Pay — remote fulfillment",
    summary: "Enable scientific resupply, logistics, and donor experiences with trusted checkout journeys.",
    bullets: [
      "Auto responder issues multi-lingual confirmations, customs manifests, and delivery notices.",
      "Backup manager safeguards campaign data during satellite outages and extreme conditions."
    ],
    icon: CloudSnow
  },
  {
    title: "PayU — southern corridor",
    summary: "Bridge France, Réunion, Mauritius, and South African PSPs without losing compliance visibility.",
    bullets: [
      "Emails module circulates PSD2, Reserve Bank, and GST updates with executive commentary.",
      "KYC vault preserves distributor verification, crew credentials, and sanction checks."
    ],
    icon: Compass
  },
  {
    title: "Stripe — research innovation",
    summary: "Prototype AI-led data portals, membership platforms, and grant workflows for polar missions.",
    bullets: [
      "Automation aggregates webhook analytics across Shopify, WooCommerce, and bespoke stacks.",
      "Ticket responses include AI diagnostics with reproduction steps for remote engineers."
    ],
    icon: Wind
  },
  {
    title: "Authorize.Net — transcontinental compliance",
    summary: "Blend North American acquiring with French governance and scientific oversight.",
    bullets: [
      "Multi-lingual documentation keeps French and English contracts synchronised automatically.",
      "Secure vault records sanction diligence, legal sign-offs, and risk assessments for each merchant ID."
    ],
    icon: ShieldCheck
  },
  {
    title: "Braintree — hybrid resourcing",
    summary: "Tokenise funding for scientific expeditions, humanitarian support, and supply missions.",
    bullets: [
      "E-wallet module orchestrates stipends with liquidity guardrails and maker-checker approvals.",
      "Backup manager protects offline collection workflows used in remote research bases."
    ],
    icon: AnchorSimple
  },
  {
    title: "Adyen — polar telemetry",
    summary: "Compare conversion rates across EU, Indian Ocean, and Antarctic operations via a single dashboard.",
    bullets: [
      "Analytics surface interchange variance, dispute ratios, and approval rates for CFO briefings.",
      "Ticket system attaches Adyen risk alerts to compliance cases with ownership clarity."
    ],
    icon: MapPinned
  },
  {
    title: "2Checkout — digital knowledge outreach",
    summary: "Distribute e-learning, research findings, and AI enablement across the scientific community.",
    bullets: [
      "Auto responder nurtures onboarding sequences with compliance checkpoints built in.",
      "Knowledge base repackages WordPress FAQs into AI-ready reference kits for expedition leaders."
    ],
    icon: Megaphone
  }
];

const MODULE_BEACONS: ModuleBeacon[] = [
  {
    name: "Multi currency observatory",
    description: "Balances EUR, USD, AUD, and ZAR transactions with treasury dashboards tuned for grants.",
    icon: Waves,
    accent: "bg-slate-500/10 text-slate-800 dark:bg-slate-500/15 dark:text-slate-100"
  },
  {
    name: "Ticket system",
    description: "Routes compliance, logistics, and expedition cases with SLA monitors and AI summaries.",
    icon: MapPinned,
    accent: "bg-cyan-500/10 text-cyan-800 dark:bg-cyan-500/15 dark:text-cyan-100"
  },
  {
    name: "Auto responder",
    description: "Delivers French and English communications for renewals, shipments, and donor updates.",
    icon: Wind,
    accent: "bg-blue-500/10 text-blue-800 dark:bg-blue-500/15 dark:text-blue-100"
  },
  {
    name: "E-voucher provisioning",
    description: "Funds scientific missions, humanitarian support, and reef monitoring with approvals.",
    icon: Planet,
    accent: "bg-indigo-500/10 text-indigo-800 dark:bg-indigo-500/15 dark:text-indigo-100"
  },
  {
    name: "E-wallet logistics",
    description: "Streams instant stipends with liquidity controls, audit trails, and dispute workflows.",
    icon: AnchorSimple,
    accent: "bg-emerald-500/10 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-100"
  },
  {
    name: "Backup manager",
    description: "Maintains immutable snapshots for satellite links, offline bases, and shipboard operations.",
    icon: StackSimple,
    accent: "bg-slate-700/10 text-slate-900 dark:bg-slate-700/15 dark:text-slate-100"
  },
  {
    name: "Emails command centre",
    description: "Coordinates campaigns, alerts, and compliance messaging from a single Arctic-grade hub.",
    icon: Lightning,
    accent: "bg-rose-500/10 text-rose-800 dark:bg-rose-500/15 dark:text-rose-100"
  },
  {
    name: "KYC documentation vault",
    description: "Stores identity records, sanction evidence, and expiry reminders for polar teams.",
    icon: ShieldCheck,
    accent: "bg-purple-500/10 text-purple-800 dark:bg-purple-500/15 dark:text-purple-100"
  },
  {
    name: "Multi-lingual interface",
    description: "Keeps French, English, and scientific partner languages aligned with one governance layer.",
    icon: GlobeHemisphereEast,
    accent: "bg-cyan-700/10 text-cyan-900 dark:bg-cyan-700/15 dark:text-cyan-100"
  }
];

const EXPEDITION_STAGES: ExpeditionStage[] = [
  {
    title: "Legacy mapping",
    detail: "WordPress copy, demo prompts, and module listings are transposed into polar stakeholder journeys.",
    icon: MapPinned
  },
  {
    title: "Gateway instrumentation",
    detail: "PayPal through 2Checkout receive AI telemetry with alert thresholds for research leadership.",
    icon: ArrowBendRightUp
  },
  {
    title: "Compliance and resilience",
    detail: "Ticket, KYC, and backup data converge into dashboards for board reviews and expedition approvals.",
    icon: ShieldCheck
  },
  {
    title: "Continuous optimisation",
    detail: "Weekly retros publish insights to the knowledge base and refresh automations before each mission.",
    icon: Lightning
  }
];

const REGIONAL_EXCHANGES: RegionalExchange[] = [
  {
    name: "Indian Ocean ties",
    note: "Réunion, Mauritius, and Madagascar share PSP intelligence and expedition logistics.",
    icon: Waves
  },
  {
    name: "European Union governance",
    note: "Paris and Brussels coordinate compliance updates and funding frameworks for scientific missions.",
    icon: GlobeSimple
  },
  {
    name: "Antarctic alliances",
    note: "McMurdo, Concordia, and Hobart partners exchange telemetry and emergency protocols.",
    icon: ThermometerCold
  },
  {
    name: "Global donor network",
    note: "North American and Asian supporters review impact dashboards and AI-generated briefings.",
    icon: Megaphone
  }
];

export const metadata: Metadata = {
  title: "French Southern and Antarctic Lands MLM Payment Gateways | Cloud MLM Software",
  description:
    "Equip French Southern and Antarctic Lands with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout supported by AI-driven polar operations.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/french-southern-and-antarctic-lands"
  },
  openGraph: {
    title: "French Southern and Antarctic Lands Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in the French Southern and Antarctic Lands delivered with expedition-grade governance and telemetry."
  }
};

type FrenchSouthernPageProps = {
  params: { lang: SupportedLocale };
};

export default function FrenchSouthernAndAntarcticLandsPage({ params }: FrenchSouthernPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-sky-100 py-20 dark:from-slate-900 dark:via-slate-950 dark:to-sky-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(148,163,184,0.24),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(148,163,184,0.18),transparent_55%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-500/40 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-slate-800 shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · French Southern & Antarctic Lands (TF)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Polar-ready MLM payment gateways for French Southern and Antarctic Lands
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground">
                The WordPress headline—“Ways to accept payments from MLM Software in People’s Democratic Republic of French Southern and Antarctic Lands – TF”—stays intact while we introduce AI telemetry, resilience controls, and expedition governance.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Connect with the polar team
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-slate-500/60 text-slate-700 hover:bg-slate-500/10 dark:border-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  Request the expedition demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {HERO_CALLOUTS.map((callout) => {
                const Icon = callout.icon;
                return (
                  <article
                    key={callout.title}
                    className="rounded-3xl border border-slate-500/25 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-500/15 text-slate-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-foreground">{callout.title}</h2>
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground">{callout.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <aside className="relative flex flex-col gap-6 rounded-3xl border border-slate-500/30 bg-white/80 p-8 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">What we carried over from WordPress</h2>
              <p className="text-sm text-muted-foreground">
                Demo prompts, module listings, and the global coverage map now power polar dashboards, AI briefings, and resilience playbooks.
              </p>
            </div>
            <div className="space-y-4">
              {INSIGHT_CARDS.map((insight) => {
                const Icon = insight.icon;
                return (
                  <div key={insight.heading} className="flex items-start gap-4 rounded-2xl border border-border/50 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-500/15 text-slate-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-sm font-semibold text-foreground">{insight.heading}</h3>
                      <p className="text-xs text-muted-foreground">{insight.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="rounded-2xl border border-dashed border-slate-500/40 bg-slate-500/10 p-5 text-sm text-slate-900 dark:border-slate-400/40 dark:bg-slate-500/15 dark:text-slate-100">
              AI-generated operational briefings summarise payment health, logistics cases, and grant visibility every Monday.
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Gateway missions aligned to polar realities
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Each WordPress-listed payment partner gains a mission profile, balancing research demands, remote logistics, and donor engagement.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_MISSIONS.map((mission) => {
            const Icon = mission.icon;
            return (
              <article
                key={mission.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-500/30 bg-white/80 p-6 transition hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-500/15 text-slate-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{mission.title}</h3>
                    <p className="text-sm text-muted-foreground">{mission.summary}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {mission.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden className="mt-1 inline-flex h-2 w-2 rounded-full bg-slate-600/70 dark:bg-white/60" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_25%,rgba(148,163,184,0.2),transparent_60%),radial-gradient(circle_at_90%_70%,rgba(56,189,248,0.14),transparent_60%)]" />
        <div className="container relative space-y-10 rounded-[3rem] border border-slate-500/30 bg-white/85 p-10 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Module beacons for polar operations
              </h2>
              <p className="max-w-2xl text-sm text-muted-foreground">
                Modules from WordPress are preserved and hardened for expeditionary use—combining analytics, automation, and resilience across remote bases.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link href={modulesHref}>
                View complete module stack
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_BEACONS.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.name}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${module.accent}`}>
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-foreground">{module.name}</h3>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Expedition cadence for leadership
            </h2>
            <p className="text-sm text-muted-foreground">
              Authentic messaging from WordPress now powers a four-stage delivery model focused on resilience, compliance, and continuous learning.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={pricingHref}>
                  Explore pricing for polar teams
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-border text-foreground hover:bg-foreground/10 dark:border-white/15">
                <Link href={contactHref}>
                  Plan a governance workshop
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative rounded-3xl border border-slate-500/30 bg-white/80 p-8 dark:border-white/10 dark:bg-white/5">
            <div className="absolute left-10 top-12 h-[calc(100%-5rem)] w-px bg-gradient-to-b from-slate-500/60 via-border to-transparent" />
            <div className="space-y-8">
              {EXPEDITION_STAGES.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <div key={stage.title} className="relative pl-16">
                    <div className="absolute left-0 top-1 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-500/15 text-slate-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    {index < EXPEDITION_STAGES.length - 1 ? (
                      <span className="absolute left-5 top-14 h-8 w-px bg-slate-500/40" aria-hidden />
                    ) : null}
                    <h3 className="text-base font-semibold text-foreground">{stage.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{stage.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 via-sky-900 to-slate-950 py-20 text-white">
        <div className="container space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Regional exchanges guided by the polar command centre
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/75">
              The WordPress country catalogue evolves into an intelligence exchange across research stations, allied territories, and donor communities.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {REGIONAL_EXCHANGES.map((exchange) => {
              const Icon = exchange.icon;
              return (
                <article key={exchange.name} className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{exchange.name}</h3>
                  </div>
                  <p className="text-sm text-white/75">{exchange.note}</p>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-white/90">
              <Link href={contactHref}>
                Book a strategic review
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-white/40 text-white hover:bg-white/15">
              <Link href={pricingHref}>
                Download pricing brief
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  if (!isSupportedLocale(lang)) {
    return i18n.defaultLocale as Locale;
  }

  return lang as Locale;
}
