import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart,
  Clock3,
  Layers,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  Target
} from "lucide-react";
import {
  Coins,
  IdentificationBadge,
  Notepad,
  RocketLaunch,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type DemoChapter = {
  title: string;
  description: string;
  highlights: string[];
  icon: IconType;
};

type Capability = {
  title: string;
  description: string;
  icon: IconType;
};

type Control = {
  title: string;
  detail: string;
};

const HERO_STATS: Stat[] = [
  {
    label: "Portfolio coverage",
    value: "Hybrid, ROI, HYIP",
    description: "Model tiered yields, compounding schedules, and pooled investment programmes in one canvas.",
    icon: PiggyBank
  },
  {
    label: "Payout latency",
    value: "< 5 minutes",
    description: "Trigger automated settlements across fiat, crypto, and wallet-ledger mixes with guardrails.",
    icon: Clock3
  },
  {
    label: "Forecast accuracy",
    value: "±2%",
    description: "Scenario planning aligns treasury, compliance, and growth teams on projected returns.",
    icon: BarChart
  }
];

const DEMO_CHAPTERS: DemoChapter[] = [
  {
    title: "Onboarding the investor journey",
    description:
      "Capture KYC/KYB, risk profiling, and capital commitments while launching guided education sequences.",
    highlights: [
      "Dynamic questionnaires that adapt to investor tiers",
      "Automated approval workflows and audit logging",
      "Personalised dashboards with projected yields"
    ],
    icon: IdentificationBadge
  },
  {
    title: "Plan configuration and compounding",
    description:
      "Define interest accrual rules, contribution windows, and sponsor commissions in minutes.",
    highlights: [
      "Visual builder for plan tiers and vesting",
      "Bulk import of historic capital movements",
      "Automated alerts for missed commitments"
    ],
    icon: Layers
  },
  {
    title: "Performance intelligence & compliance",
    description:
      "Use AI copilots to forecast fund health, stress test payouts, and export regulator-ready statements.",
    highlights: [
      "Risk scoring dashboards with drill-down",
      "Scenario modelling for market volatility",
      "One-click export to tax, audit, and legal teams"
    ],
    icon: TrendUp
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Investor-first experiences",
    description:
      "Provide real-time balance tracking, opportunity catalogues, and guided reinvestment flows on any device.",
    icon: RocketLaunch
  },
  {
    title: "Sponsor enablement",
    description:
      "Arm mentors and advisors with compensation snapshots, override policies, and campaign orchestration.",
    icon: Sparkles
  },
  {
    title: "Treasury control",
    description:
      "Configure multi-wallet settlements, multi-currency ledgers, and automated reconciliations.",
    icon: Coins
  }
];

const CONTROLS: Control[] = [
  {
    title: "Regulatory guardrails",
    detail: "Regional disclosure templates, risk acknowledgements, and suitability attestations embedded across every step."
  },
  {
    title: "Fraud prevention",
    detail: "Device intelligence, velocity checks, and anomaly detection layered onto withdrawals and high-yield promotions."
  },
  {
    title: "Audit agility",
    detail: "Immutable change history with timestamped approvals and reconciliation evidence lowers review cycles."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Investment MLM Plan Software Demo";
  const description =
    "Explore Cloud MLM Software’s investment plan demo to see onboarding, compounding, and compliance automation in action.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/investment-mlm-plan-software-demo", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type InvestmentDemoPageProps = {
  params: { lang: SupportedLocale };
};

export default function InvestmentDemoPage({ params }: InvestmentDemoPageProps) {
  const locale = resolveLocale(params.lang);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const contactHref = buildLocalizedPath("/contact", locale);
  const calculatorHref = buildLocalizedPath("/investment-plan-mlm-calculator", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(14,165,233,0.25),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.25),transparent_55%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-200">
              <Target className="h-4 w-4" aria-hidden />
              Investment programme sandbox
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Orchestrate high-yield investment plans with confidence and clarity.
            </h1>
            <p className="text-base text-slate-200">
              “The MLM investment plan is one of the strong and impressive marketing networks. The most attractive feature of an investment plan is that it helps people generate indirect income.” Cloud MLM Software turns that ambition into a measurable programme—from investor onboarding to automated payouts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-950 hover:bg-white/90">
                <Link href={contactHref}>
                  Book the live demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10">
                <Link href={calculatorHref}>
                  Open the investment calculator
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur">
            {HERO_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <article key={stat.label} className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-cyan-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-cyan-200/80">{stat.label}</p>
                      <p className="text-lg font-semibold text-white">{stat.value}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-100/80">{stat.description}</p>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What the investment plan demo reveals</h2>
          <p className="text-sm text-muted-foreground">
            Move from spreadsheets to a resilient investment platform that balances rapid growth with disciplined governance.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-foreground">{capability.title}</h3>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Inside the guided walkthrough</h2>
            <p className="text-sm text-muted-foreground">
              Each chapter is facilitated by product strategists and solution engineers who configure the sandbox to reflect your product mixes, compliance posture, and revenue expectations.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {DEMO_CHAPTERS.map((chapter) => {
              const Icon = chapter.icon;
              return (
                <article key={chapter.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{chapter.title}</h3>
                      <p className="text-sm text-muted-foreground">{chapter.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {chapter.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
        <div className="space-y-6 rounded-3xl border border-primary/40 bg-primary/5 p-8 text-primary shadow-sm dark:border-primary/60 dark:bg-primary/10">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Controls that keep investment plans trustworthy</h2>
          <p className="text-sm text-primary/80 dark:text-primary/70">
            Your demo is preloaded with guardrails that prove how Cloud MLM Software protects investors, sponsors, and your brand.
          </p>
          <Button asChild variant="outline" className="border-primary/50 text-primary">
            <Link href={pricingHref}>
              Compare pricing tiers
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4">
          {CONTROLS.map((control) => (
            <article key={control.title} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-base font-semibold text-foreground">{control.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{control.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-gradient-to-br from-slate-50 via-white to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-900">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.85fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Demo deliverables</h2>
            <p className="text-sm text-muted-foreground">
              Walk away with a tailored readiness plan that maps technology requirements, data integrations, and rollout milestones.
            </p>
          </div>
          <div className="grid gap-4">
            <article className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-base font-semibold text-foreground">Executive briefing</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Receive a summary for leadership that captures market opportunity, projected returns, and compliance highlights.
              </p>
            </article>
            <article className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-base font-semibold text-foreground">Solution design pack</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Technical architecture, integration mappings, and automation scenarios aligned to your finance and operations teams.
              </p>
            </article>
            <article className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-base font-semibold text-foreground">Launch roadmap</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Phased rollout plan with success metrics, enablement streams, and change management checkpoints.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background p-10 shadow-sm">
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="absolute -bottom-24 right-0 h-56 w-56 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Schedule your investment blueprint workshop</h2>
              <p className="text-sm text-muted-foreground">
                Share your target markets, regulatory classifications, and projected fund sizes. Our solution team will configure the sandbox and prepare insights before the live walkthrough.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-primary/5 p-6 text-primary shadow-sm dark:border-primary/60 dark:bg-primary/10">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Bring your stakeholders</h3>
                <p className="text-sm text-primary/80 dark:text-primary/70">
                  Finance, compliance, and growth leaders gain tailored views and action items during the session.
                </p>
              </div>
              <Button asChild>
                <Link href={contactHref}>
                  Reserve the session
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

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
