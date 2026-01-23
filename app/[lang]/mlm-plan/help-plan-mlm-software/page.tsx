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
import PassUpFlowSimulator from "@/components/frontend/plan/pass-up-flow-simulator";

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

type Mechanic = {
  title: string;
  summary: string;
  outcomes: string[];
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
    label: "Verified donations",
    value: "98.6%",
    detail: "Contributions cleared by Cloud MLM Software's AML and proof-of-help workflows."
  },
  {
    label: "Cycle completion",
    value: "7.8 days",
    detail: "Average loop time from pledge to balanced reciprocation across 2024 launches."
  },
  {
    label: "Impact transparency",
    value: "4.9 / 5",
    detail: "Field rating for live dashboards that show where each donation lands."
  },
  {
    label: "Operational overhead",
    value: "-37%",
    detail: "Median reduction in manual reconciliations after automating help-plan rules."
  }
];

const MECHANICS: Mechanic[] = [
  {
    title: "Mutual aid orchestration",
    summary: "Automate who helps whom, when reserves unlock, and how reciprocation is tracked.",
    outcomes: [
      "Design contribution tiers, sponsor escalation, and time-bound reciprocation windows.",
      "Balance inflow and outflow automatically so every member knows their next action.",
      "Trigger nudges when pledges are overdue or when help slots are ready to receive."
    ],
    icon: Network
  },
  {
    title: "Governed compliance layers",
    summary: "Keep donations auditable with embedded AML, KYC/KYB, and beneficiary validation steps.",
    outcomes: [
      "Collect proof-of-help, receipts, and IDs before funds are released.",
      "Route suspicious activity to compliance queues with full event history.",
      "Publish tax-ready statements and acknowledgement letters automatically."
    ],
    icon: ShieldCheck
  },
  {
    title: "Impact analytics",
    summary: "Illuminate the story behind every contribution for founders, finance, and the field.",
    outcomes: [
      "See velocity, participation depth, and reciprocation health in live dashboards.",
      "Highlight top contributors, vulnerable legs, and campaigns that need storytelling support.",
      "Feed recognition streams and coaching prompts as soon as milestones are achieved."
    ],
    icon: BarChart3
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Mission clarity",
    description: "Connect the cause, contributors, and beneficiaries with shared context in every step.",
    bullets: [
      "Bundle campaign narratives, approved creative, and social proof for the field.",
      "Segment messaging by donor tier, geography, or help category.",
      "Surface real-time impact dashboards for founders and executive sponsors."
    ],
    icon: Megaphone
  },
  {
    title: "Financial trust",
    description: "Operate mutual-help flows with banking-grade controls and transparent reconciliation.",
    bullets: [
      "Automate escrow, reserve ratios, and payout approvals in one workspace.",
      "Generate receipts, invoices, and ledgers that map donations to beneficiaries.",
      "Capture immutable audit trails showing who approved each release and why."
    ],
    icon: ClipboardCheck
  },
  {
    title: "Field empowerment",
    description: "Equip contributors and coordinators with the tools to keep generosity moving.",
    bullets: [
      "Show personal queues, reciprocation countdowns, and next-best actions in the portal.",
      "Deliver multilingual playbooks, compliance reminders, and recognition moments.",
      "Give campaign captains health scores so they intervene before energy dips."
    ],
    icon: Users
  }
];

const EXAMPLES: Example[] = [
  {
    title: "Emergency relief drive",
    baseline: "$160 average pledge, 12-hour reciprocation SLA, 25% reserve for escalations.",
    insight:
      "Cloud MLM Software balances urgent requests with reserve logic, keeping help flowing while compliance validates beneficiaries.",
    icon: Activity
  },
  {
    title: "Community uplift cycle",
    baseline: "Monthly help windows, multilingual storytelling, staggered tiers across three regions.",
    insight:
      "Dashboards track impact per region and automatically rotate recognition to sustain morale.",
    icon: Rocket
  },
  {
    title: "Scholarship reciprocity",
    baseline: "$220 pledges with proof-of-impact submissions and progressive reciprocation thresholds.",
    insight:
      "Automated documentation requests and reserve releases keep donors, recipients, and auditors aligned.",
    icon: LineChart
  }
];

const BLUEPRINT: Pattern[] = [
  {
    title: "Configuration studio",
    description: "Draft help tiers, reserve ratios, documentation rules, and storytelling assets with approvals baked in.",
    icon: Settings2
  },
  {
    title: "Impact analytics hub",
    description: "Monitor velocity, reciprocation compliance, and sentiment across cohorts in real time.",
    icon: BarChart3
  },
  {
    title: "Enablement spine",
    description: "Provide step-by-step coaching, recognition, and multilingual resources so the field never stalls.",
    icon: Layers
  }
];

const JOURNEYS: Journey[] = [
  {
    stage: "Pledge initiation",
    description: "Members register interest, complete compliance checks, and choose impact categories.",
    focus: "Sponsors preview matching requirements, reserves, and storytelling assignments.",
    icon: Compass
  },
  {
    stage: "Help in motion",
    description: "Donations transmit, documentation uploads complete, and reciprocation windows open.",
    focus: "Finance and campaign captains track fulfilment health and step in where support is needed.",
    icon: Activity
  },
  {
    stage: "Recognition & reinvest",
    description: "Proof-of-impact publishes, recognition fires, and members rotate into the next help cycle.",
    focus: "Leaders celebrate outcomes while compliance, finance, and field ops sign off on the next wave.",
    icon: Target
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: "Discovery & mission mapping",
    duration: "Week 1",
    activities: [
      "Document campaign objectives, compliance requirements, and beneficiary validation steps.",
      "Import historical spreadsheets to benchmark contribution velocity and reciprocation rates.",
      "Define KPI scorecards that align founders, finance, and campaign captains."
    ],
    icon: CalendarRange
  },
  {
    phase: "Configuration & simulation",
    duration: "Weeks 2-3",
    activities: [
      "Build help tiers, reserve logic, and storytelling workflows in staging.",
      "Simulate surge scenarios, compliance holds, and multi-region campaigns with stakeholders.",
      "Validate payment, documentation, and recognition integrations before go-live."
    ],
    icon: Settings2
  },
  {
    phase: "Enablement & launch",
    duration: "Weeks 4-5",
    activities: [
      "Publish dashboards, enablement kits, and recognition cadences to the field portal.",
      "Activate monitoring packs for overdue help loops, compliance escalations, and sentiment shifts.",
      "Set up go-live command centres with support SLAs and escalation playbooks."
    ],
    icon: Rocket
  }
];

const CTA_POINTS: string[] = [
  "Automate mutual-help flows while keeping regulators and banking partners confident.",
  "Give contributors and beneficiaries transparent dashboards that celebrate impact.",
  "Blend storytelling, compliance, and finance workflows without spreadsheets.",
  "Integrate CRM, PSP, tax, and analytics stacks to scale the Help MLM plan securely."
];

const FAQS: Faq[] = [
  {
    question: "How does Cloud MLM Software prevent donation misuse?",
    answer:
      "Built-in AML/KYC, proof-of-impact uploads, and reserve logic stop funds from releasing until every checkpoint clears. Suspicious activity routes to compliance with full event history."
  },
  {
    question: "Can we run multiple help campaigns at once?",
    answer:
      "Yes. Create templates for emergency aid, scholarships, or community projects—each with unique tiers, messaging, and reserve rules—managed from one control centre."
  },
  {
    question: "How are contributors and beneficiaries kept informed?",
    answer:
      "Dashboards show pledge status, impact stories, and recognition updates in real time. Contributors receive receipts and acknowledgements, while beneficiaries upload proof-of-help through guided flows."
  },
  {
    question: "Do you support regional compliance requirements?",
    answer:
      "Cloud MLM Software manages tax receipts, data privacy, and banking rules per market. Integrations sync with accounting and analytics stacks to keep every regulator satisfied."
  },
  {
    question: "What happens if help loops stall?",
    answer:
      "Health scores, escalation alerts, and reserve logic intervene automatically. Campaign captains receive coaching prompts and alternative pathways to keep contributions moving."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Help MLM Plan";
  const description =
    "Cloud MLM Software's help MLM plan deep dive—automated mutual-aid cycles, compliant donation flows, and transparency for every contributor.";

  return {
    title,
    description,
    keywords: [
      "Help MLM plan",
      "donation MLM software",
      "Cloud MLM Software",
      "mutual aid automation",
      "help plan compliance",
      "contribution dashboards",
      "reciprocation analytics"
    ],
    alternates: {
      canonical: buildLocalizedPath("/mlm-plan/help-plan-mlm-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type HelpPlanPageProps = {
  params: { lang: SupportedLocale };
};

export default function HelpPlanPage({ params }: HelpPlanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const calculatorHref = buildLocalizedPath("/mlm-calculator", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-rose-50 via-white to-sky-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl dark:bg-primary/20" />
        <div className="absolute -right-24 top-40 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/20" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(244,114,182,0.25),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.25),transparent_60%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.22),transparent_65%)] dark:bg-none" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(380px,600px)] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Mutual aid playbook
            </span>
            <h1 className="relative max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Help MLM plan blueprint for transparent, reciprocated generosity.
              <span className="absolute -left-10 top-6 hidden h-14 w-14 rounded-full bg-gradient-to-br from-primary/60 via-primary/10 to-transparent blur-md sm:block" aria-hidden />
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Donation-driven plans thrive when empathy, operations, and compliance move in harmony. Cloud MLM Software choreographs pledges, reserves, and recognition so your teams uplift each other with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={contactHref}>
                  Talk to a help plan architect
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
                  Model contribution cycles
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
                  className="group relative overflow-hidden rounded-3xl border border-border/60 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/10"
                >
                  <div className="absolute -top-16 right-3 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
                  <p className="text-sm uppercase tracking-wide text-muted-foreground dark:text-white/70">{metric.label}</p>
                  <p className="mt-3 text-3xl font-semibold text-foreground dark:text-white">{metric.value}</p>
                  <p className="mt-3 text-sm text-muted-foreground dark:text-white/70">{metric.detail}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-8 rounded-[48px] bg-gradient-to-br from-primary/20 via-white/30 to-emerald-200/30 blur-3xl dark:from-primary/40 dark:via-white/10 dark:to-emerald-400/20" aria-hidden />
            <PassUpFlowSimulator
              variant="crowd"
              className="relative h-full rounded-[40px] border border-white/50 bg-white/95 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-white/10"
            />
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How the Help plan mechanics operate
          </h2>
          <p className="text-sm text-muted-foreground">
            Compose every help loop with auditable automation—from pledge triggers to reciprocation cues.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {MECHANICS.map((mechanic) => {
            const Icon = mechanic.icon;
            return (
              <article
                key={mechanic.title}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <div className="absolute h-14 w-14 rounded-full bg-primary/20 blur-lg transition-opacity duration-300 group-hover:opacity-80" aria-hidden />
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
            Pillars that keep generosity transparent
          </h2>
          <p className="text-sm text-muted-foreground">
            Align mission, financial trust, and field empowerment so every contribution feels meaningful.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
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

      <section className="relative border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-900/40">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Interactive help plan examples</h2>
            <p className="text-sm text-muted-foreground">
              See how Cloud MLM Software sustains mutual-aid loops under different campaign scenarios.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {EXAMPLES.map((example) => {
              const Icon = example.icon;
              return (
                <article
                  key={example.title}
                  className="relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
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
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Member and leader journey across the help cycle
            </h2>
            <p className="text-sm text-muted-foreground">
              Everyone knows their responsibility—from the moment a pledge is born to the celebration of impact.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {JOURNEYS.map((journey) => {
                const Icon = journey.icon;
                return (
                  <article
                    key={journey.stage}
                    className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
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
          </div>
          <aside className="w-full max-w-md overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-white to-emerald-100/60 p-8 shadow-lg dark:border-white/10 dark:from-primary/20 dark:via-white/10 dark:to-primary/10">
            <h3 className="text-lg font-semibold text-foreground">Design highlights</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Floating gradients and glassmorphism panels emphasize transparency and care.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Interactive cards lift with subtle motion, mirroring the plan&apos;s uplifting nature.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Color transitions guide contributors from pledge to impact across every section.</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Implementation roadmap
          </h2>
          <p className="text-sm text-muted-foreground">
            A guided path from discovery through launch keeps stakeholders aligned and confident.
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
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
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
            Build the analytics, storytelling, and automation backbone that keeps generosity flowing.
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
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
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
            Give every stakeholder—from finance to campaign captains—the clarity they need to trust the plan.
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
              Launch a help MLM programme that delights contributors, satisfies regulators, and scales sustainably.
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
                  Schedule a mutual-aid workshop
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
              Explore more plan models in our{' '}
              <Link href={plansHref} className="text-primary underline underline-offset-4">
                MLM plan library
              </Link>{' '}
              for calculators, pricing intel, and launch guides.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-foreground">Launch readiness checklist</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Compliance approvals cover AML/KYC, documentation workflows, and refund policies.</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Dashboards monitor contribution velocity, reciprocation health, and impact scores.</span>
              </li>
              <li className="flex items-start gap-2">
                <GaugeCircle className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Field alerts keep teams on pace to reciprocate before deadlines slip.</span>
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
