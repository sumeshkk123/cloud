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
  Activity,
  ArrowUpRight,
  BarChart3,
  CalendarRange,
  ClipboardCheck,
  Compass,
  GaugeCircle,
  HelpCircle,
  Layers,
  LineChart,
  Megaphone,
  Network,
  Rocket,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  Users
} from "lucide-react";
import PassUpFlowSimulator from "@/components/frontend/plans/all-plans/pass-up-flow-simulator";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
};

type Pillar = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Example = {
  title: string;
  baseline: string;
  insight: string;
  icon: IconType;
};

type Pattern = {
  title: string;
  description: string;
  icon: IconType;
};

type Mechanic = {
  title: string;
  summary: string;
  outcomes: string[];
  icon: IconType;
};

type Journey = {
  stage: string;
  description: string;
  focus: string;
  icon: IconType;
};

type RoadmapStep = {
  phase: string;
  duration: string;
  activities: string[];
  icon: IconType;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Board completion accuracy",
    value: "99.1%",
    detail: "Automated Emgoldex table progression validated across 11 enterprise launches in 2024."
  },
  {
    label: "Reinvestment compliance",
    value: "94%",
    detail: "Average adherence to re-entry rules once automated reserves and audits activate."
  },
  {
    label: "Average gold payout",
    value: "$4,800",
    detail: "Median member payout after reserves and leadership bonuses across Cloud MLM Software installs."
  },
  {
    label: "Payout release time",
    value: "9 days",
    detail: "Time from board completion to compliant disbursement with AML and proof-of-purchase checks."
  }
];

const MECHANICS: Mechanic[] = [
  {
    title: "Board progression engine",
    summary: "Automate slot allocation, cycling logic, and spillover controls across all Emgoldex tables.",
    outcomes: [
      "Place members using sponsor lineage, geographic rules, or compliance-driven locks.",
      "Forecast board closures and table splits with scenario planning dashboards.",
      "Trigger alerts when velocity dips or overfills threaten the next payout window."
    ],
    icon: Network
  },
  {
    title: "Reinvestment & reserve governance",
    summary: "Enforce re-entry, matching reserves, and leadership bonus logic without spreadsheets.",
    outcomes: [
      "Automate reserve percentages for re-entry, tax, and compliance purposes.",
      "Release leadership bonuses only when proof-of-sale and documentation are confirmed.",
      "Support multiple buy-in packs, upgrade paths, and loyalty rewards in one engine."
    ],
    icon: GaugeCircle
  },
  {
    title: "Cross-border compliance",
    summary: "Keep gold-backed compensation aligned with financial, tax, and consumer regulations.",
    outcomes: [
      "Capture Know Your Customer (KYC) and proof-of-purchase documents before payouts.",
      "Log every board change, reserve edit, and payout approval for auditors.",
      "Generate receipts, invoices, and statements that reconcile to bullion or voucher releases."
    ],
    icon: ShieldCheck
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Transparent gold economics",
    description: "Offer founders, finance, and field leaders a single source of truth for board health.",
    bullets: [
      "Visualise active boards, closing tables, and reinvestment pipelines in real time.",
      "Tie gold inventory or digital vouchers to each payout and leadership bonus.",
      "Model profitability by pack type, geography, or leadership cohort before rollout."
    ],
    icon: Megaphone
  },
  {
    title: "Regulated operations",
    description: "Align Emgoldex-style plans with global AML, tax, and consumer protection requirements.",
    bullets: [
      "Embed document verification, sanctions screening, and disclosure workflows.",
      "Automate VAT/GST-ready invoicing and payment file generation per market.",
      "Provide immutable audit logs covering table edits, payouts, and reserve movements."
    ],
    icon: ClipboardCheck
  },
  {
    title: "Field clarity & enablement",
    description: "Equip promoters with dashboards, recognition, and coaching to sustain board momentum.",
    bullets: [
      "Show position status, re-entry countdowns, and payout forecasts in the field portal.",
      "Deliver recognition feeds and rewards as members close boards or support their team.",
      "Push enablement paths, compliance reminders, and multi-language assets exactly when needed."
    ],
    icon: Users
  }
];

const EXAMPLES: Example[] = [
  {
    title: "Global premium board rollout",
    baseline: "$700 buy-in, 16-slot boards, reinvestment reserve at 35%, leadership bonus at 10%.",
    insight:
      "Cloud MLM Software predicts board closure cadence, automates reserves, and synchronises gold inventory releases with payouts.",
    icon: Rocket
  },
  {
    title: "EU compliance uplift",
    baseline: "Multi-country operations with proof-of-gold delivery, VAT receipts, and AML obligations.",
    insight:
      "AML workflows, document uploads, and tax-ready statements keep regulators and banking partners satisfied while payouts stay on schedule.",
    icon: ShieldCheck
  },
  {
    title: "Leadership accelerator",
    baseline: "Fast-track boards for top sponsors, dynamic re-entry qualifiers, and promotional bonuses.",
    insight:
      "Dynamic dashboards show when leaders qualify for bonuses, while automation prevents double-dipping or reserve shortfalls.",
    icon: Activity
  }
];

const BLUEPRINT: Pattern[] = [
  {
    title: "Configuration studio",
    description: "Design board templates, reserve percentages, and leadership bonuses with full version control.",
    icon: Settings2
  },
  {
    title: "Analytics command centre",
    description: "Monitor board velocity, reserve balances, compliance holds, and payout forecasts in real time.",
    icon: BarChart3
  },
  {
    title: "Enablement hub",
    description: "Serve coaching paths, compliance briefings, and gold product storytelling to the field.",
    icon: Layers
  }
];

const JOURNEYS: Journey[] = [
  {
    stage: "Enrollment & positioning",
    description: "Members join, complete KYC, and enter the correct gold board with sponsor oversight.",
    focus: "Leaders preview placement impact, re-entry commitments, and inventory requirements.",
    icon: Compass
  },
  {
    stage: "Board advancement",
    description: "Slots fill, reserves accrue, and compliance checks run in the background.",
    focus: "Dashboards highlight who is near payout, which reserves are ready, and where coaching is required.",
    icon: Activity
  },
  {
    stage: "Payout & reinvest",
    description: "Payouts release, leadership bonuses trigger, and re-entry rules recycle members onto the next board.",
    focus: "Finance, compliance, and field leaders see receipts, reinvestment, and recognition in one view.",
    icon: Target
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: "Discovery & modelling",
    duration: "Week 1",
    activities: [
      "Document board templates, reserve policies, and market-specific compliance requirements.",
      "Import historical spreadsheets to benchmark board velocity and payout exposure.",
      "Define KPI scorecards for founders, finance, and leadership councils."
    ],
    icon: CalendarRange
  },
  {
    phase: "Configuration & simulation",
    duration: "Weeks 2-3",
    activities: [
      "Build board rules, reserve logic, and leadership bonuses in staging.",
      "Run simulations for split scenarios, velocity surges, and compliance holds with stakeholders.",
      "Validate gold inventory, payment, and invoicing integrations before go-live."
    ],
    icon: Settings2
  },
  {
    phase: "Enablement & launch",
    duration: "Weeks 4-5",
    activities: [
      "Publish dashboards, recognition cadences, and compliance briefings to the field portal.",
      "Activate monitoring packs for board bottlenecks, reserve shortfalls, and compliance escalations.",
      "Coordinate go-live war rooms with support SLAs and escalation playbooks."
    ],
    icon: Rocket
  }
];

const CTA_POINTS: string[] = [
  "Automate Emgoldex-style board progression without manual spreadsheets.",
  "Keep reserves, reinvestment, and leadership bonuses compliant across regions.",
  "Deliver transparent dashboards so leaders and members trust every payout.",
  "Integrate CRM, payment, tax, and inventory systems to support gold-backed programs."
];

const FAQS: Faq[] = [
  {
    question: "How does Cloud MLM Software manage Emgoldex reserves?",
    answer:
      "Reserve percentages are configurable per board. Funds are earmarked for re-entry, tax, and compliance before payouts release, ensuring the next table always has capital."
  },
  {
    question: "Can we support multiple buy-in packs and promotions?",
    answer:
      "Yes. Configure gold packs, upgrade paths, and promotional bonuses inside one governed engine. Simulations show how each change impacts velocity and reserves before launch."
  },
  {
    question: "What compliance safeguards are built in?",
    answer:
      "KYC/KYB, AML screening, document uploads, tax receipts, and payout approvals run inside the platform. Every action is timestamped and exportable for auditors."
  },
  {
    question: "How are leadership bonuses triggered and audited?",
    answer:
      "Leadership bonuses fire when board milestones and compliance checkpoints are verified. Dashboards show approvers, time stamps, and payout receipts to keep regulators confident."
  },
  {
    question: "Can we migrate historical boards into Cloud MLM Software?",
    answer:
      "Our migration kits ingest existing tables, placements, and payout history. Dry-run simulations highlight discrepancies so you go live with clean, trusted data."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Emgoldex MLM Plan";
  const description =
    "Cloud MLM Software's Emgoldex MLM plan blueprint—automated board progression, reinvestment governance, and compliant gold-backed payouts.";

  return {
    title,
    description,
    keywords: [
      "Emgoldex MLM plan",
      "gold board compensation",
      "Cloud MLM Software",
      "Emgoldex software automation",
      "MLM gold payouts",
      "reinvestment compliance",
      "board progression analytics"
    ],
    alternates: {
      canonical: buildLocalizedPath("/mlm-plan/emgoldex-mlm-plan-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type EmgoldexPlanPageProps = {
  params: { lang: SupportedLocale };
};

export default function EmgoldexPlanPage({ params }: EmgoldexPlanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const calculatorHref = buildLocalizedPath("/mlm-calculator", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.16),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(16,185,129,0.18),transparent_60%),radial-gradient(circle_at_30%_85%,rgba(244,114,182,0.14),transparent_65%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,620px)] lg:items-stretch">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Cloud MLM Software expert deep dive
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Emgoldex MLM plan blueprint engineered for compliant, repeatable board growth.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Emgoldex-style plans thrive when board progression, reinvestment, and compliance move in sync. Cloud MLM Software automates table placement, protects reserves, and equips leaders with the insights to scale. Explore additional plan models in our{" "}
              <Link href={plansHref} className="text-primary underline underline-offset-4">
                MLM plan library
              </Link>
              {" "}and simulate scenarios below.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={contactHref}>
                  Talk to a gold board architect
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary/10 dark:border-white/40 dark:text-white dark:hover:bg-white/10"
              >
                <Link href={calculatorHref}>
                  Explore plan calculators
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-primary dark:text-primary">
                <Link href={demoHref}>
                  Watch live demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {HERO_METRICS.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-3xl border border-border/60 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/10"
                >
                  <p className="text-sm uppercase tracking-wide text-muted-foreground dark:text-white/70">{metric.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-foreground dark:text-white">{metric.value}</p>
                  <p className="mt-3 text-sm text-muted-foreground dark:text-white/70">{metric.detail}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="relative">
            <PassUpFlowSimulator
              variant="emgoldex"
              className="h-full lg:w-[clamp(420px,48vw,660px)] lg:translate-x-12 xl:translate-x-16 lg:rounded-[34px] lg:shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How the Emgoldex mechanics work in Cloud MLM Software
          </h2>
          <p className="text-sm text-muted-foreground">
            Model boards, reinvestment, and compliance in a single governed workspace.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {MECHANICS.map((mechanic) => {
            const Icon = mechanic.icon;
            return (
              <article
                key={mechanic.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{mechanic.title}</h3>
                <p className="text-sm text-muted-foreground">{mechanic.summary}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {mechanic.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Pillars that keep Emgoldex programmes resilient
          </h2>
          <p className="text-sm text-muted-foreground">
            Align gold-backed payouts with growth, compliance, and field enablement requirements.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Interactive Emgoldex plan examples</h2>
            <p className="text-sm text-muted-foreground">
              Stress-test boards, reserves, and leadership bonuses before putting changes into production.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {EXAMPLES.map((example) => {
              const Icon = example.icon;
              return (
                <article
                  key={example.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{example.title}</h3>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Baseline</p>
                  <p className="text-sm text-muted-foreground">{example.baseline}</p>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">What Cloud MLM Software reveals</p>
                  <p className="text-sm text-muted-foreground">{example.insight}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Member and leader journey across gold boards
          </h2>
          <p className="text-sm text-muted-foreground">
            Ensure every stakeholder—from new members to compliance teams—has clarity at each step.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {JOURNEYS.map((journey) => {
            const Icon = journey.icon;
            return (
              <article
                key={journey.stage}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{journey.stage}</h3>
                <p className="text-sm text-muted-foreground">{journey.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Focus</p>
                <p className="text-sm text-muted-foreground">{journey.focus}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Implementation roadmap you can trust
          </h2>
          <p className="text-sm text-muted-foreground">
            Move from discovery to gold-backed payouts with reliable milestones and accountable owners.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {ROADMAP.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.phase}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{step.phase}</h3>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{step.duration}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {step.activities.map((activity) => (
                    <li key={activity} className="flex items-start gap-2">
                      <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Operational blueprint
          </h2>
          <p className="text-sm text-muted-foreground">
            Build the analytics, enablement, and automation spine that keeps Emgoldex programmes resilient.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {BLUEPRINT.map((pattern) => {
            const Icon = pattern.icon;
            return (
              <article
                key={pattern.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{pattern.title}</h3>
                <p className="text-sm text-muted-foreground">{pattern.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">
            Give founders, finance teams, compliance officers, and leaders clarity on how the Emgoldex plan operates.
          </p>
        </div>
        <div className="grid gap-4">
          {FAQS.map((faq) => (
            <article
              key={faq.question}
              className="flex flex-col gap-2 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                  <HelpCircle className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-gradient-to-br from-primary/10 via-background to-background py-20 dark:from-primary/10">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              How Cloud MLM Software helps
            </h2>
            <p className="text-sm text-muted-foreground">
              Launch an Emgoldex-style compensation engine that satisfies regulators, delights the field, and scales globally.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {CTA_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Schedule a gold board workshop
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={pricingHref}>
                  Review pricing options
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Want to compare other models? Visit our{" "}
              <Link href={plansHref} className="text-primary underline underline-offset-4">
                MLM plan hub
              </Link>
              {" "}for calculators, pricing intel, and optimisation guides.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-foreground">Launch readiness checklist</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Compliance approvals cover KYC/KYB, reserves, and cross-border gold delivery.</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Dashboards monitor board velocity, reserve balances, and payout exposure.</span>
              </li>
              <li className="flex items-start gap-2">
                <GaugeCircle className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Field alerts keep leaders informed before boards stall or reserves run low.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
