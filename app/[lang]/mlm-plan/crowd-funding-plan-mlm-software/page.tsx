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
    label: "Campaign transparency score",
    value: "4.8 / 5",
    detail: "Average field rating after introducing live crowd funding dashboards in 2024 launches."
  },
  {
    label: "Safeguarded funds",
    value: "$92M",
    detail: "Capital processed with AML, KYB, and escrow controls managed by Cloud MLM Software."
  },
  {
    label: "Time to first disbursement",
    value: "15 days",
    detail: "Median speed from campaign approval to verified payout with automated compliance holds."
  },
  {
    label: "Audit-ready automations",
    value: "18 checkpoints",
    detail: "Tax, disclosure, and refund workflows executed automatically across global launches."
  }
];

const MECHANICS: Mechanic[] = [
  {
    title: "Contribution orchestration",
    summary: "Govern pledges, matching pools, and milestone releases in one rules engine.",
    outcomes: [
      "Define campaign goals, tiers, and eligibility windows with full version history.",
      "Auto-balance matching funds with limits per leader, cohort, or geography.",
      "Schedule disbursements once compliance checks, receipts, and milestones are cleared."
    ],
    icon: Network
  },
  {
    title: "Trust & compliance guardrails",
    summary: "Protect contributors, beneficiaries, and the brand with embedded oversight.",
    outcomes: [
      "Run AML, KYC/KYB, and sanctions scans before releasing capital.",
      "Collect disclosures, tax certificates, and documentary proof within guided workflows.",
      "Activate refund or clawback policies automatically when milestones stall."
    ],
    icon: ShieldCheck
  },
  {
    title: "Data-backed momentum",
    summary: "Surface the insights marketing, finance, and field leaders need to scale impact.",
    outcomes: [
      "Highlight funding velocity, participation depth, and conversion per cohort.",
      "Route alerts when campaigns near caps or require new messaging and creative.",
      "Feed success stories and recognition streams to sustain engagement."
    ],
    icon: BarChart3
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Aligned mission storytelling",
    description: "Keep contributors, leaders, and beneficiaries aligned on why the campaign matters.",
    bullets: [
      "Bundle campaign stories, compliance-approved media, and recognition journeys.",
      "Segment messaging by contributor tier, geography, or cause focus.",
      "Share real-time impact dashboards with founders and executive sponsors."
    ],
    icon: Megaphone
  },
  {
    title: "Governed financial operations",
    description: "Operate every dollar under banking, tax, and consumer protection requirements.",
    bullets: [
      "Automate escrow, reserve, and reconciliation policies inside Cloud MLM Software.",
      "Generate beneficiary statements, tax receipts, and payout notices in one click.",
      "Deliver audit logs showing who approved what, when, and why."
    ],
    icon: ClipboardCheck
  },
  {
    title: "Field empowerment",
    description: "Equip promoters and campaign captains with tools to drive transparent growth.",
    bullets: [
      "Expose campaign health scores, contributor heatmaps, and coaching prompts.",
      "Trigger nudges when teams approach matching thresholds or milestone gates.",
      "Provide multilingual playbooks, FAQs, and compliance reminders inside the portal."
    ],
    icon: Users
  }
];

const EXAMPLES: Example[] = [
  {
    title: "Disaster recovery campaign",
    baseline: "$100K goal, emergency relief packs, 320 contributors, 20% corporate match.",
    insight:
      "Cloud MLM Software forecasts disbursement readiness, tracks proof-of-impact uploads, and ensures funds only release once compliance verifies beneficiaries.",
    icon: ShieldCheck
  },
  {
    title: "Product innovation fund",
    baseline: "$150K goal for R&D pods, staged milestones tied to prototype delivery.",
    insight:
      "Milestones, legal checkpoints, and ROI dashboards keep founders and finance confident while the field sees exactly how contributions accelerate development.",
    icon: Rocket
  },
  {
    title: "Community scholarship drive",
    baseline: "$80K goal, scholarships across four regions, blended contributor tiers.",
    insight:
      "Automated receipting, transparent matching pools, and recognition feeds maintain trust with contributors and regulatory bodies alike.",
    icon: LineChart
  }
];

const BLUEPRINT: Pattern[] = [
  {
    title: "Configuration studio",
    description: "Design campaign templates, tiered rewards, and milestone logic with approvals baked in.",
    icon: Settings2
  },
  {
    title: "Analytics command centre",
    description: "Monitor funding velocity, contributor retention, and compliance holds in real time.",
    icon: BarChart3
  },
  {
    title: "Enablement hub",
    description: "Deliver storytelling assets, compliance briefings, and recognition scripts to the field.",
    icon: Layers
  }
];

const JOURNEYS: Journey[] = [
  {
    stage: "Campaign kickoff",
    description: "Leaders configure goals, tiers, documentation, and matching rules inside the platform.",
    focus: "Founders preview target coverage, compliance tasks, and storytelling briefs before launch.",
    icon: Compass
  },
  {
    stage: "Funding in motion",
    description: "Contributors pledge, matching pools activate, and compliance monitors proof-of-impact uploads.",
    focus: "Marketing and finance see the same dashboards to coach teams and approve spend.",
    icon: Activity
  },
  {
    stage: "Milestone release",
    description: "Funds disburse once documentation, beneficiary verification, and impact stories are confirmed.",
    focus: "Auditors, finance, and field champions track every release with real-time receipts and alerts.",
    icon: Target
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: "Discovery & campaign architecture",
    duration: "Week 1",
    activities: [
      "Document mission objectives, compliance requirements, and beneficiary vetting steps.",
      "Ingest historic donations or spreadsheets to benchmark funding velocity.",
      "Define KPI scorecards for founders, finance, and campaign owners."
    ],
    icon: CalendarRange
  },
  {
    phase: "Configuration & simulation",
    duration: "Weeks 2-3",
    activities: [
      "Build campaign templates, matching pools, and reserve rules in staging.",
      "Simulate funding scenarios, compliance escalations, and matching triggers with stakeholders.",
      "Validate payouts, tax receipts, and beneficiary onboarding flows before go-live."
    ],
    icon: Settings2
  },
  {
    phase: "Enablement & go-live",
    duration: "Weeks 4-5",
    activities: [
      "Publish dashboards, impact storytelling kits, and coaching cadences to the field portal.",
      "Launch monitoring packs for contribution spikes, compliance holds, and sentiment shifts.",
      "Stand up go-live command centres with support SLAs and escalation paths."
    ],
    icon: Rocket
  }
];

const CTA_POINTS: string[] = [
  "Automate campaign setup, matching pools, and milestone releases without spreadsheets.",
  "Protect every contribution with AML, tax, and audit-ready workflows.",
  "Empower leaders and contributors with transparent dashboards and recognition feeds.",
  "Connect CRM, PSP, tax, and storytelling tools to scale impact with confidence."
];

const FAQS: Faq[] = [
  {
    question: "How does Cloud MLM Software keep crowd funding compliant?",
    answer:
      "We embed AML, KYC/KYB, document verification, and disclosure workflows into each campaign. Funds only disburse once every checkpoint is cleared and logged for auditors."
  },
  {
    question: "Can we run multiple campaigns with different rules?",
    answer:
      "Yes. Create templates for disaster relief, product innovation, or scholarships—each with unique goals, tiers, and matching logic—all managed from a single control centre."
  },
  {
    question: "How are contributors and beneficiaries kept informed?",
    answer:
      "Dashboards share progress, impact stories, and upcoming milestones. Contributors receive receipts and recognition, while beneficiaries upload proof-of-impact through guided forms."
  },
  {
    question: "What payment and tax integrations are available?",
    answer:
      "Cloud MLM Software supports global PSPs, multi-currency wallets, and tax receipt generation. Integrations sync with accounting and analytics stacks for real-time reconciliation."
  },
  {
    question: "How quickly can we launch our next campaign?",
    answer:
      "Most organisations launch within a 4–5 week window. Our migration kits import historic data, while configuration sprints and enablement streams prepare every stakeholder for go-live."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Crowd Funding MLM Plan";
  const description =
    "Cloud MLM Software's crowd funding MLM plan blueprint—compliant campaign automation, contributor analytics, and milestone-based payouts for mission-driven growth.";

  return {
    title,
    description,
    keywords: [
      "crowd funding MLM plan",
      "crowdfunding compensation software",
      "Cloud MLM Software",
      "MLM fundraising automation",
      "crowd funding compliance",
      "network marketing campaigns",
      "crowd funding dashboards"
    ],
    alternates: {
      canonical: buildLocalizedPath("/mlm-plan/crowd-funding-plan-mlm-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type CrowdFundingPlanPageProps = {
  params: { lang: SupportedLocale };
};

export default function CrowdFundingPlanPage({ params }: CrowdFundingPlanPageProps) {
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
              Crowd Funding MLM plan blueprint engineered for transparent, mission-led growth.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Crowd funding succeeds when storytelling, compliance, and payouts stay perfectly aligned. Cloud MLM Software automates campaign setup, protects every contribution, and keeps leaders and contributors in lockstep. Explore additional plan models in our{" "}
              <Link href={plansHref} className="text-primary underline underline-offset-4">
                MLM plan library
              </Link>
              {" "}and model scenarios below.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={contactHref}>
                  Talk to a campaign architect
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
              variant="crowd"
              className="h-full lg:w-[clamp(420px,48vw,660px)] lg:translate-x-12 xl:translate-x-16 lg:rounded-[34px] lg:shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Master the crowd funding mechanics
          </h2>
          <p className="text-sm text-muted-foreground">
            Configure campaigns, matching pools, and milestone-based payouts without losing governance or momentum.
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
            Alignment pillars that keep campaigns trustworthy
          </h2>
          <p className="text-sm text-muted-foreground">
            Unite mission, compliance, and field execution so funding campaigns stay credible at every stage.
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Interactive crowd funding plan examples</h2>
            <p className="text-sm text-muted-foreground">
              Stress-test your next campaign before it launches and show leaders how Cloud MLM Software safeguards every pledge.
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
            Contributor and leader journey across campaigns
          </h2>
          <p className="text-sm text-muted-foreground">
            Map every step from campaign ideation to payout so teams stay empowered and contributors remain confident.
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
            Deliver a governed launch with clear milestones, owners, and handoffs from discovery to impact stories.
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
            Build the analytics, enablement, and automation spine that keeps every campaign resilient and transparent.
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
            Provide founders, finance leaders, compliance teams, and campaign captains with clear answers while evaluating the crowd funding plan.
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
              Launch a compliant, data-backed crowd funding programme that inspires contributors and protects your brand.
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
                  Schedule a campaign workshop
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
              Need inspiration from other compensation models? Visit our{" "}
              <Link href={plansHref} className="text-primary underline underline-offset-4">
                MLM plan hub
              </Link>
              {" "}for calculators, pricing intel, and launch roadmaps.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-foreground">Launch readiness checklist</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Compliance sign-offs cover AML, disclosures, and beneficiary verification.</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Dashboards track funding velocity, contributor depth, and milestone status.</span>
              </li>
              <li className="flex items-start gap-2">
                <GaugeCircle className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Field alerts keep campaign captains informed before momentum slows.</span>
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
