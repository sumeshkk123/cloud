import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Gauge, Layers3, Sparkles } from "lucide-react";
import {
  ArrowsClockwise,
  HandCoins,
  Package as PackageIcon,
  SealCheck,
  ShoppingCartSimple,
  UsersThree,
  ChartBar,
  Lightbulb,
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Pillar = {
  title: string;
  copy: string;
  icon: IconType;
};

type StatBlock = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type DemoTrack = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type GovernancePoint = {
  title: string;
  detail: string;
};

type EnablementStream = {
  title: string;
  detail: string;
  icon: IconType;
};

const VALUE_PILLARS: Pillar[] = [
  {
    title: "Direct-to-customer focus",
    copy: "Connect catalog, inventory, and fulfilment so members can market products without friction across every channel.",
    icon: ShoppingCartSimple
  },
  {
    title: "Rewarded reorders",
    copy: "Demonstrate how introductory shoppers keep full product margins while uplines receive targeted loyalty bonuses.",
    icon: HandCoins
  },
  {
    title: "Hybrid plan ready",
    copy: "Blend repurchase rules with matrix, binary, or stair-step structures inside one automated ledger.",
    icon: ArrowsClockwise
  }
];

const HERO_STATS: StatBlock[] = [
  {
    label: "Average reorder latency",
    value: "12 days",
    description: "Predict the ideal follow-up window with telemetry that spots dips in product consumption early.",
    icon: Gauge
  },
  {
    label: "Plan combos tested",
    value: "Binary • Matrix • Stair-step",
    description: "Model layered incentives without duplicating compensation logic or reports.",
    icon: Layers3
  },
  {
    label: "Commerce coverage",
    value: "Physical & digital catalogues",
    description: "Track bundles, subscriptions, and sampling kits under one compliance-approved storefront.",
    icon: PackageIcon
  }
];

const DEMO_TRACKS: DemoTrack[] = [
  {
    title: "Merchandising the repurchase journey",
    description:
      "Design direct-to-customer storytelling, sampling bundles, and reorder prompts that keep customers engaged beyond the first purchase.",
    bullets: [
      "Curate launch kits, replenishment sets, and loyalty bundles with dynamic pricing tiers.",
      "Trigger replenishment reminders based on consumption signals, inventory, and regional demand.",
      "Surface education assets that equip distributors to pitch quality, sourcing, and compliance.",
    ],
    icon: ShoppingCartSimple
  },
  {
    title: "Commission clarity for every reorder",
    description:
      "Show how profits flow from new customers to leadership teams while ensuring every override remains audit-ready.",
    bullets: [
      "Simulate full customer profit retention during introductory cycles and track loyalty lift.",
      "Blend binary, matrix, or stair-step overrides without disrupting existing wallet structures.",
      "Send predictive payout alerts so finance teams and leaders stay aligned.",
    ],
    icon: HandCoins
  },
  {
    title: "Operations and analytics command",
    description:
      "Coordinate supply chain, service teams, and executives with dashboards tuned to repurchase velocity.",
    bullets: [
      "Monitor SKU health, auto-restock thresholds, and supplier readiness in one workspace.",
      "Surface coaching prompts when teams fall behind expected reorder cadence.",
      "Export board-ready intelligence for the next product wave and promotional cycle.",
    ],
    icon: UsersThree
  }
];

const GOVERNANCE_POINTS: GovernancePoint[] = [
  {
    title: "Lifecycle guardrails",
    detail: "Define reorder frequency, cooling periods, and regional disclaimers for regulated products before they ever reach the storefront."
  },
  {
    title: "Margin transparency",
    detail: "Visualise how profits split between customers, uplines, and corporate with every cycle to keep trust durable."
  },
  {
    title: "Inventory assurance",
    detail: "Synchronise warehouse, 3PL, and drop-ship partners so promises made during demos match what ships."
  }
];

const ENABLEMENT_STREAMS: EnablementStream[] = [
  {
    title: "Smart inventory sync",
    detail: "Automate stock reservations, expiry monitoring, and back-order notifications across regions.",
    icon: PackageIcon
  },
  {
    title: "Compliance intelligence",
    detail: "Embed legal disclosures, quality certificates, and controlled product workflows into every reorder path.",
    icon: SealCheck
  },
  {
    title: "Insights co-pilot",
    detail: "Use AI-assisted forecasting to recommend promotions, bundles, and education tracks per cohort.",
    icon: Sparkles
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Repurchase MLM Plan Software Demo | Cloud MLM Software";
  const description =
    "Explore how Cloud MLM Software powers direct-to-customer repurchase plans with blended compensation, inventory intelligence, and AI-powered analytics. Book a demo to see our platform in action.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/repurchase-mlm-plan-software-demo", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type RepurchaseDemoPageProps = {
  params: { lang: SupportedLocale };
};

export default function RepurchaseDemoPage({ params }: RepurchaseDemoPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const planHref = buildLocalizedPath("/mlm-plan/repurchase-mlm-plan", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(14,165,233,0.2),transparent_45%),radial-gradient(circle_at_88%_24%,rgba(59,130,246,0.18),transparent_52%),radial-gradient(circle_at_42%_88%,rgba(45,212,191,0.2),transparent_55%)]"
          aria-hidden
        />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Repurchase plan demo
              </span>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Experience repurchase automations that put customers and leaders on the same profitable path.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                The repurchase model thrives on relationship-driven commerce. Cloud MLM Software unifies product storytelling, reorder incentives, and hybrid plan accounting so consumer brands move from the first sale to recurring loyalty without friction.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={contactHref}>
                    Book a repurchase walkthrough
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={planHref}>
                    Review the plan fundamentals
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {VALUE_PILLARS.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <article
                    key={pillar.title}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/90 p-5 shadow-sm backdrop-blur dark:border-border/40 dark:bg-slate-950/60"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-base font-semibold text-foreground">{pillar.title}</h2>
                    <p className="text-sm text-muted-foreground">{pillar.copy}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <aside className="relative h-fit space-y-6 rounded-3xl border border-border/80 bg-background/80 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Demo insights</p>
              <p className="text-sm text-muted-foreground">
                Built for consumer goods teams that expect customers to enjoy full first-cycle margins without losing organisational oversight.
              </p>
            </div>
            <div className="space-y-5">
              {HERO_STATS.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div key={stat.label} className="flex gap-4 rounded-2xl border border-border/60 bg-muted/40 p-4 shadow-inner dark:border-border/40 dark:bg-slate-900/60">
                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{stat.label}</p>
                      <p className="text-base font-semibold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What you will explore in the demo</h2>
          <p className="text-sm text-muted-foreground">
            Every session is crafted to translate direct marketing momentum into operational excellence, combining customer joy with sustainable payouts.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {DEMO_TRACKS.map((track) => {
            const Icon = track.icon;

            return (
              <article key={track.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{track.title}</h3>
                <p className="text-sm text-muted-foreground">{track.description}</p>
                <ul className="space-y-2 mt-4">
                  {track.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:border-border/40 dark:bg-slate-950/40">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Govern your repurchase ecosystem with confidence</h2>
            <p className="text-sm text-muted-foreground">
              The repurchase plan thrives when operations, finance, and distributors share a single source of truth. We embed the guardrails that protect margins, brand standards, and customer delight.
            </p>
            <ul className="space-y-4 mt-6">
              {GOVERNANCE_POINTS.map((point) => (
                <li key={point.title} className="rounded-3xl border border-border/60 bg-background p-5 shadow-sm">
                  <h3 className="text-base font-semibold text-foreground">{point.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{point.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5 rounded-3xl border border-border/60 bg-background/90 p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">AI-Driven Insights</p>
              <p className="text-sm text-muted-foreground">
                Our platform integrates predictive AI to help you make smarter, faster decisions based on real-time data.
              </p>
            </div>
            <div className="space-y-4">
              {ENABLEMENT_STREAMS.map((stream) => {
                const Icon = stream.icon;

                return (
                  <div key={stream.title} className="flex gap-4 rounded-2xl border border-border/60 bg-muted/40 p-4 shadow-inner dark:border-border/40 dark:bg-slate-900/60">
                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-foreground">{stream.title}</h3>
                      <p className="text-xs text-muted-foreground">{stream.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-cyan-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-slate-900">
          <div className="absolute -left-20 top-1/4 h-48 w-48 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-64 w-64 translate-y-1/3 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-900/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,280px)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Plan your repurchase launch with our specialists</h2>
              <p className="text-sm text-muted-foreground">
                Share your product mix, average reorder window, and compensation goals. We will prepare a tailored readiness roadmap and highlight automations that accelerate time-to-value.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href={contactHref}>
                    Schedule strategy call
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={planHref}>
                    Explore repurchase resources
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative space-y-4 rounded-3xl border border-border/60 bg-background/90 p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/70">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Ready to discuss</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>SKU prioritisation for repurchase-ready catalogues</li>
                <li>Revenue forecasts that showcase new customer profit share</li>
                <li>Migration pathways from legacy commerce stacks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}