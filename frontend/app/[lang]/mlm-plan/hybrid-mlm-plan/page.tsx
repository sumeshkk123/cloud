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
  ArrowUpRight,
  BarChart3,
  CalendarRange,
  ClipboardCheck,
  Compass,
  GaugeCircle,
  HelpCircle,
  Layers,
  Network,
  Rocket,
  Settings2,
  ShieldCheck,
  Shuffle,
  Sparkles,
  Target,
  TrendingUp,
  Users
} from "lucide-react";
import HybridPlanSimulator from "@/components/plan/hybrid-plan-simulator";

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
    label: "Hybrid deployments live",
    value: "100+ markets",
    detail: "Operators running binary, unilevel, and matrix hybrids on Cloud MLM Software across APAC, EMEA, and the Americas."
  },
  {
    label: "Commission reconciliation",
    value: "99.6% accuracy",
    detail: "Nightly ledgers tie binary legs, matrix spillover, and unilevel overrides without manual spreadsheets."
  },
  {
    label: "Qualification setup time",
    value: "72-hour go-live",
    detail: "Average window to configure PV/GV thresholds, kit bundles, and leadership pools after discovery."
  },
  {
    label: "Rank velocity lift",
    value: "+21% faster",
    detail: "Field teams using hybrid scorecards and AI nudges advance to builder and leader ranks sooner."
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Hybrid architecture clarity",
    description:
      "Show every stakeholder how binary, unilevel, and matrix mechanics reinforce a single growth agenda.",
    bullets: [
      "Document each compensation strand inside a living governance board with version history.",
      "Map PV, GV, and enrolment gates so finance can forecast hybrid pools without guesswork.",
      "Visualize cross-plan flows in org maps field leaders can access on desktop or mobile."
    ],
    icon: Shuffle
  },
  {
    title: "Governance and compliance readiness",
    description: "Bake regional policy decisions into the plan before launch and keep them auditable for regulators.",
    bullets: [
      "Apply FTC, DSA, SEBI, and ANVISA guardrails with templated workflows by jurisdiction.",
      "Route high-value payouts through KYC, tax, and AML reviews with automatic holds and alerts.",
      "Capture four-eye approvals for every rule edit and expose an inspector-friendly audit trail."
    ],
    icon: ShieldCheck
  },
  {
    title: "Field enablement alignment",
    description: "Equip promoters with context, calculators, and coaching that demystify hybrid earnings.",
    bullets: [
      "Publish journey-based onboarding tracks for sellers, influencers, and corporate teams.",
      "Embed the hybrid calculator, smart scripts, and compliance prompts in replicated apps.",
      "Trigger coaching alerts whenever rank progress, breakaway depth, or reorder cadence softens."
    ],
    icon: Users
  }
];

const EXAMPLES: Example[] = [
  {
    title: "Binary + unilevel replatform",
    baseline: "North American wellness brand migrating 18k sellers; 2-leg binary base with level 1-5 overrides.",
    insight:
      "Cloud MLM Software highlights leg imbalance, pre-reserves matching bonuses, and warns finance before breakaways strain cash.",
    icon: Rocket
  },
  {
    title: "Matrix spillover promo season",
    baseline: "APAC skincare launch running a 3x10 forced matrix overlay for a 90-day bundle campaign.",
    insight:
      "Simulator projections show when seats saturate, queue matrix overflow, and prompt corporate to open new branches or rotate incentives.",
    icon: GaugeCircle
  },
  {
    title: "Cross-border compliance rehearsal",
    baseline: "EU + LATAM expansion with mixed currencies, VAT/GST reporting, and capped referral bonuses.",
    insight:
      "Cloud MLM Software maps documentation requirements by region, syncs FX rates, and flags jurisdictions needing legal sign-off before launch.",
    icon: ShieldCheck
  }
];

const MECHANICS: Mechanic[] = [
  {
    title: "Binary spine orchestration",
    summary: "Balance left/right volume while syncing rollover credits into hybrid ledgers automatically.",
    outcomes: [
      "Auto-balance legs and carryover credits into unilevel payout calculations without spreadsheets.",
      "Set flush thresholds and grace windows tailored to emerging markets or product packs.",
      "Snapshot binary ratios for audit teams, banking partners, and compensation committees."
    ],
    icon: Network
  },
  {
    title: "Unilevel leadership overrides",
    summary: "Stack depth-based overrides tied to PV, GV, and behaviour-driven leadership milestones.",
    outcomes: [
      "Blend personal enrolment, customer order, and subscription markers into override eligibility.",
      "Simulate breakaway scenarios before activating them in the live environment.",
      "Expose override status in field dashboards so leaders coach teams in real time."
    ],
    icon: Target
  },
  {
    title: "Matrix spillover experience",
    summary: "Control fixed-width placement, reserved seats, and promo campaigns inside one governed canvas.",
    outcomes: [
      "Automate forced placements while preserving corporate seats for incentives or founders.",
      "Trigger residual bonuses only after binary and unilevel qualifiers remain satisfied.",
      "Audit overflow patterns to prevent cross-border bottlenecks or sponsor collusion."
    ],
    icon: Layers
  }
];

const JOURNEYS: Journey[] = [
  {
    stage: "Enroll & orientation",
    description: "New distributors choose starter packs, confirm sponsor pairing, and preview hybrid earnings paths.",
    focus: "Mobile onboarding clarifies binary placement, matrix seats, and early override requirements from day one.",
    icon: Compass
  },
  {
    stage: "Hybrid activation",
    description: "Personal volume, customer orders, and compliance docs unlock binary credits and unilevel overrides.",
    focus: "Dashboards guide sellers through KYC, training, and auto-order commitments to stay qualified.",
    icon: ClipboardCheck
  },
  {
    stage: "Leadership acceleration",
    description: "Rank goals blend team volume, balanced legs, and breakaway leadership criteria.",
    focus: "AI nudges highlight priority legs, matrix overflow, and coaching moments for emerging leaders.",
    icon: TrendingUp
  },
  {
    stage: "Sustain & safeguard",
    description: "Established leaders manage retention, payout audits, and succession planning.",
    focus: "Audit trails, support workflows, and predictive churn alerts protect the network and regulator confidence.",
    icon: ShieldCheck
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: "Discovery & modelling",
    duration: "Week 1",
    activities: [
      "Capture product, compensation, and market expansion goals driving the hybrid model.",
      "Review historic payout files, tax rules, and compliance obligations to shape constraints.",
      "Prototype binary, matrix, and unilevel blends in the hybrid calculator workshop."
    ],
    icon: CalendarRange
  },
  {
    phase: "Hybrid configuration sprints",
    duration: "Weeks 2-4",
    activities: [
      "Build automated rules for PV/GV, spillover, fast-start, and leadership pools inside staging.",
      "Run scenario tests with finance, legal, and field councils while the simulator validates flows.",
      "Wire integrations to payment gateways, ERPs, and analytics before completing sandbox sign-offs."
    ],
    icon: Settings2
  },
  {
    phase: "Enablement & scale",
    duration: "Weeks 5-6",
    activities: [
      "Publish hybrid playbooks, calculator embeds, and compliance microlearning to the field portal.",
      "Activate dashboards, predictive alerts, and AI briefings tuned for executives and coaches.",
      "Plan phased go-live by region with contingency responses and support SLAs."
    ],
    icon: Rocket
  }
];

const REGULATORY_GUARDRAILS: Pattern[] = [
  {
    title: "Global compliance presets",
    description:
      "Pre-built policy packs cover FTC (US), DSA (EU), SEBI (India), and LATAM direct selling regulations with auto-updating reminders.",
    icon: ShieldCheck
  },
  {
    title: "Audit-ready payouts",
    description:
      "Immutable ledgers link binary credits, unilevel overrides, and matrix spillover to invoices, contracts, and tax receipts.",
    icon: ClipboardCheck
  },
  {
    title: "Risk intelligence",
    description:
      "Anomaly detection monitors cross-sponsor collusion, refund spikes, and payout velocity so legal teams can intervene early.",
    icon: GaugeCircle
  }
];

const BLUEPRINT: Pattern[] = [
  {
    title: "Automation control tower",
    description:
      "Centralize hybrid payout rules, spillover queues, and adjustments inside one governed studio shared by ops and finance.",
    icon: Settings2
  },
  {
    title: "Hybrid analytics spine",
    description:
      "Dashboards trend binary ratios, unilevel depth, matrix occupancy, and customer sales velocity in real time.",
    icon: BarChart3
  },
  {
    title: "Field enablement OS",
    description:
      "Replicated apps deliver calculators, scripts, and compliance prompts synced to each hybrid milestone.",
    icon: Sparkles
  }
];

const CTA_POINTS: string[] = [
  "Design binary, unilevel, and matrix blends with instant validation across every market.",
  "Automate hybrid payouts, withholding, and ledger reconciliation without manual spreadsheets.",
  "Arm executives and field leaders with real-time hybrid scorecards, alerts, and AI summaries.",
  "Launch with regulator-ready audit trails and adoption programmes tuned to your playbook."
];

const FAQS: Faq[] = [
  {
    question: "Can we mix multiple binary legs and matrix overlays inside one plan?",
    answer:
      "Yes. Cloud MLM Software supports parallel binaries, forced matrices, and unilevel overrides inside a single governed blueprint with rule-level audit trails."
  },
  {
    question: "How do you keep hybrid payouts compliant across regions?",
    answer:
      "Policy packs enforce regional caps, documentation, and withholding. Automated holds route payouts through KYC, tax, and AML workflows before release."
  },
  {
    question: "Which systems integrate with the hybrid plan deployment?",
    answer:
      "We connect to ERPs, CRMs, data warehouses, and regional payment gateways. Webhooks and APIs keep finance, support, and analytics teams synced in real time."
  },
  {
    question: "How do you help the field understand hybrid earnings?",
    answer:
      "Guided onboarding, embedded calculators, AI coaching nudges, and replicated content ensure promoters understand qualifications, overrides, and retention plays."
  },
  {
    question: "Can we simulate plan adjustments after launch?",
    answer:
      "Absolutely. Sandbox environments let you A/B test new qualifiers, promos, or rank adjustments before publishing updates to production teams."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Hybrid MLM Plan Compensation Strategy";
  const description =
    "Explore the hybrid MLM plan with Cloud MLM Software—binary, unilevel, and matrix mechanics governed by data, compliance, and field enablement.";

  return {
    title,
    description,
    keywords: [
      "Hybrid MLM plan",
      "hybrid compensation software",
      "Cloud MLM Software",
      "binary unilevel matrix plan",
      "hybrid MLM automation",
      "MLM compliance platform"
    ],
    alternates: {
      canonical: buildLocalizedPath("/mlm-plan/hybrid-mlm-plan", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type HybridPlanPageProps = {
  params: { lang: SupportedLocale };
};

export default function HybridPlanPage({ params }: HybridPlanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const calculatorHref = buildLocalizedPath("/hybrid-plan-mlm-calculator", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-50 via-white to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(16,185,129,0.18),transparent_60%),radial-gradient(circle_at_30%_85%,rgba(244,114,182,0.16),transparent_65%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,620px)] lg:items-stretch">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              MLM plan deep dive
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Hybrid MLM Plan blueprint by Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Combine binary stability, unilevel depth, and matrix spillover without losing control. Cloud MLM Software governs hybrid compensation structures with auditable logic, predictive analytics, and field-ready enablement so your teams move faster than legacy platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={contactHref}>
                  Talk to a hybrid strategist
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
                  Model hybrid payouts
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-primary hover:text-primary">
                <Link href={demoHref}>
                  Launch the live demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
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
            <HybridPlanSimulator className="h-full lg:w-[clamp(420px,48vw,660px)] lg:translate-x-12 xl:translate-x-16 lg:rounded-[34px] lg:shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How hybrid compensation mechanics stay balanced
          </h2>
          <p className="text-sm text-muted-foreground">
            Control binary structures, unilevel overrides, and matrix spillover from one governed workspace—complete with auditable outcomes.
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
            Foundations that keep product, compliance, and field teams aligned
          </h2>
          <p className="text-sm text-muted-foreground">
            Align leadership on the plan narrative, regulatory guardrails, and enablement steps before the first payout leaves the door.
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Scenario planning with Cloud MLM Software
            </h2>
            <p className="text-sm text-muted-foreground">
              Stress-test hybrid scenarios before launch so leadership sees revenue, compliance, and retention impact in real time.
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
            Member and leader journey through the hybrid plan
          </h2>
          <p className="text-sm text-muted-foreground">
            Every milestone—from enrolment to leadership legacy—stays transparent with guided workflows and predictive alerts.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {JOURNEYS.map((journey) => {
            const Icon = journey.icon;
            return (
              <article
                key={journey.stage}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{journey.stage}</h3>
                  <p className="text-sm text-muted-foreground">{journey.description}</p>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Cloud MLM focus</p>
                  <p className="text-sm text-muted-foreground">{journey.focus}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Implementation roadmap tuned for hybrid agility
          </h2>
          <p className="text-sm text-muted-foreground">
            Structured sprints keep compensation, compliance, and field enablement teams marching in lockstep.
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
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{step.phase}</h3>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{step.duration}</p>
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

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Regulatory guardrails that scale</h2>
            <p className="text-sm text-muted-foreground">
              Compliance teams get the visibility, documentation, and controls they need to approve hybrid innovations fast.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {REGULATORY_GUARDRAILS.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Operational blueprint for hybrid excellence
          </h2>
          <p className="text-sm text-muted-foreground">
            From configuration to enablement, Cloud MLM Software provides a backbone that keeps teams aligned with growth goals.
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
            Key answers that founders, finance leaders, and compliance officers raise when evaluating a hybrid MLM rollout.
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
              Partner with Cloud MLM Software to launch a hybrid plan that excites the field, satisfies finance, and protects your brand.
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
                  Schedule a hybrid blueprint
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
              Want to compare additional models? Visit our{" "}
              <Link href={plansHref} className="text-primary underline underline-offset-4">
                MLM plan library
              </Link>{" "}
              for companion calculators and design guidance.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-foreground">Launch readiness checklist</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Compliance tests cover hybrid payouts, documentation, and jurisdictional limits.</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Dashboards benchmark binary ratios, unilevel depth, and matrix occupancy trends.</span>
              </li>
              <li className="flex items-start gap-2">
                <GaugeCircle className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Field alerts keep leaders on pace to maintain qualification across all plan strands.</span>
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
