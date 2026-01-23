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
  CircleDollarSign,
  ClipboardCheck,
  Compass,
  GaugeCircle,
  HelpCircle,
  Layers,
  Network,
  RefreshCcw,
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
    label: "Donation traceability",
    value: "97.8%",
    detail: "Gifts reconciled automatically with Cloud MLM Software's immutable ledger across 18 pilots."
  },
  {
    label: "Average payout release",
    value: "48 hrs",
    detail: "Median time to move cleared funds to receivers after AML and document checks."
  },
  {
    label: "Re-entry activation",
    value: "+23%",
    detail: "Increase in members re-gifting within 30 days once guided prompts and reminders are enabled."
  },
  {
    label: "Compliance coverage",
    value: "11 markets",
    detail: "Pre-built KYC, GST/VAT, and contribution caps for donation-based plans in key regions."
  }
];

const MECHANICS: Mechanic[] = [
  {
    title: "Stage-based gifting orchestration",
    summary:
      "Model two- through four-stage circles with precise donation thresholds, receiver queues, and auto re-entries.",
    outcomes: [
      "Design how gifts cascade across each stage with configurable minimums and maximums.",
      "Surface live queue status so promoters know when they rotate to the receiver seat.",
      "Trigger optional re-gift placements that keep circles funded without manual spreadsheets."
    ],
    icon: CircleDollarSign
  },
  {
    title: "Liquidity pacing & reserves",
    summary:
      "Balance inflow and outflow with hold-backs, hardship funds, and smart nudges to protect every donor event.",
    outcomes: [
      "Automate compliance or tax holds before funds are released to the receiver wallet.",
      "Ring-fence reserves for operational costs or community funds while staying transparent to members.",
      "Alert finance teams when cycle velocity slows so additional campaigns or messaging can be deployed."
    ],
    icon: GaugeCircle
  },
  {
    title: "Governance-first controls",
    summary:
      "Embed audit logs, document proof, and bank verification into each gifting milestone from day zero.",
    outcomes: [
      "Capture identity and bank documents with reviewer workflows for higher-value donations.",
      "Feed suspicious activity reports directly to compliance teams for rapid intervention.",
      "Provide founders with downloadable ledgers covering every movement in or out of the gifting pool."
    ],
    icon: ShieldCheck
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Product & value alignment",
    description:
      "Position gift circles alongside education, coaching, or community programs so the offer remains sustainable and trusted.",
    bullets: [
      "Bundle content modules, ticketing, or events with each circle stage for added value.",
      "Sync gifting milestones with membership renewals or subscription tiers.",
      "Highlight success stories via dynamic content blocks tied to live plan data."
    ],
    icon: Layers
  },
  {
    title: "Field empowerment",
    description:
      "Give ambassadors and circle hosts precise visibility into queue status, upcoming reviews, and talk tracks.",
    bullets: [
      "Mobile dashboards show where every invitee sits in the donation journey.",
      "Guided scripts help leaders explain compliance guardrails without fear.",
      "Alerts coach hosts to remind contributors when a pledge or document is pending."
    ],
    icon: Network
  },
  {
    title: "Compliance collaboration",
    description:
      "Workflows keep legal, finance, and banking partners looped in on every donation before it clears.",
    bullets: [
      "Route escalations automatically when large gifts trigger enhanced due diligence.",
      "Grant regulators or auditors read-only access to immutable event histories.",
      "Generate jurisdiction-specific reports with GST/VAT summaries in a single click."
    ],
    icon: Target
  }
];

const EXAMPLES: Example[] = [
  {
    title: "Launch circle – 3 stage",
    baseline: "120 members, USD 150 entry gift, 18% reserve, 48-hour review window.",
    insight:
      "Simulator outputs show liquidity sufficiency by stage, alerting operations when reserves dip below stress-tested thresholds.",
    icon: Rocket
  },
  {
    title: "Re-entry acceleration",
    baseline: "Re-gift required within 14 days after receiving, tiered reminder cadence, multilingual members.",
    insight:
      "Automation nudges and localized messaging increase re-entry participation by 22% while slashing manual outreach time.",
    icon: RefreshCcw
  },
  {
    title: "Regulatory spot audit",
    baseline: "Cross-border contributors, mixed fiat wallets, $2,000 cap per cycle, bank partner review every quarter.",
    insight:
      "Audit-trail exports bundle gift receipts, approvals, and communications, cutting regulator response times to under 2 hours.",
    icon: ShieldCheck
  }
];

const JOURNEYS: Journey[] = [
  {
    stage: "Join & pledge",
    description: "A prospect selects a circle, confirms onboarding, and submits their first gift via compliant payment rails.",
    focus: "Platform validates KYC, collects consent, and surfaces the next steps in the gifting timeline.",
    icon: Compass
  },
  {
    stage: "Progress through stages",
    description: "Members advance as subsequent donors join, completing education checkpoints and proof uploads when prompted.",
    focus: "Leaders monitor queue velocity while automated alerts keep contributions flowing evenly.",
    icon: ClipboardCheck
  },
  {
    stage: "Receive & re-gift",
    description: "The receiver wallet unlocks once compliance review clears, triggering thank-you messaging and optional re-entry offers.",
    focus: "Finance tracks reserves and return gifts while field teams celebrate success stories across the community.",
    icon: ShieldCheck
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: "Discovery & compliance mapping",
    duration: "Weeks 1-2",
    activities: [
      "Document gifting objectives, reserve policies, and jurisdictional rules.",
      "Audit legacy spreadsheets or wallets to calibrate circle pacing assumptions.",
      "Design risk tiers, contributor caps, and exception workflows with legal partners."
    ],
    icon: CalendarRange
  },
  {
    phase: "Configuration & sandbox launch",
    duration: "Weeks 3-4",
    activities: [
      "Build donation stages, queue logic, and reserve allocations in staging.",
      "Integrate payment gateways, wallets, and automated communications.",
      "Run AML/KYC test cases and dry runs with finance and compliance observers."
    ],
    icon: Settings2
  },
  {
    phase: "Enablement & live monitoring",
    duration: "Weeks 5-6",
    activities: [
      "Train hosts and ambassadors with bilingual playbooks and simulator walk-throughs.",
      "Activate dashboards for liquidity, re-entry rates, and compliance exceptions.",
      "Schedule post-launch retros to tweak stage thresholds or messaging cadence."
    ],
    icon: Rocket
  }
];

const BLUEPRINT: Pattern[] = [
  {
    title: "Donation intelligence hub",
    description:
      "Real-time analytics forecast cash flow, reserve sufficiency, and queue health so leadership can steer gifting velocity with confidence.",
    icon: Settings2
  },
  {
    title: "Risk & compliance cockpit",
    description:
      "Role-based workspaces track identity checks, suspicious activity alerts, and bank approvals without leaving the platform.",
    icon: BarChart3
  },
  {
    title: "Field enablement workspace",
    description:
      "Content, scripts, and multilingual notifications align hosts and contributors around shared gifting milestones.",
    icon: Users
  }
];

const CTA_POINTS: string[] = [
  "Model multi-stage gift flows with live liquidity and reserve forecasting.",
  "Automate AML/KYC checkpoints, documentation, and payouts without spreadsheets.",
  "Deliver dashboards and nudges that keep every circle compliant and energized.",
  "Scale donation programs globally with localized payments and reporting."
];

const FAQS: Faq[] = [
  {
    question: "Can Cloud MLM Software handle both donations and product bundles?",
    answer:
      "Yes. You can pair each gifting stage with digital products, coaching sessions, or events while tracking fulfilment alongside the donation ledger."
  },
  {
    question: "How do we stay compliant with anti-pyramid regulations?",
    answer:
      "The platform enforces contribution caps, value-backed bundles, and regulator-ready reporting while documenting every review step for auditors."
  },
  {
    question: "What about cross-border contributors and currencies?",
    answer:
      "We support multi-currency wallets, FX conversion, and jurisdiction-aware tax handling so gifts can move compliantly across regions."
  },
  {
    question: "How quickly can we launch a donation circle?",
    answer:
      "Most teams move from discovery to live launch in six weeks with our guided implementation sprints and simulator-driven validation."
  },
  {
    question: "Do hosts get coaching on sensitive conversations?",
    answer:
      "Absolutely. Enablement modules, AI-assisted scripts, and compliance-approved messaging help hosts navigate gifting talks with empathy and accuracy."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Gift Plan Blueprint | Cloud MLM Software";
  const description =
    "Explore the MLM Gift Plan with Cloud MLM Software—configure donation stages, automate compliance checks, and empower communities with transparent giving.";

  return {
    title,
    description,
    keywords: [
      "MLM Gift Plan",
      "donation MLM plan software",
      "gift plan compliance",
      "Cloud MLM Software",
      "peer gifting automation",
      "MLM plan simulator"
    ],
    alternates: {
      canonical: buildLocalizedPath("/mlm-plan/mlm-gift-plan", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type GiftPlanPageProps = {
  params: { lang: SupportedLocale };
};

export default function GiftPlanPage({ params }: GiftPlanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const calculatorHref = buildLocalizedPath("/mlm-calculator", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-rose-50 via-white to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(244,114,182,0.18),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(78,205,196,0.2),transparent_60%),radial-gradient(circle_at_25%_80%,rgba(59,130,246,0.16),transparent_65%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,620px)] lg:items-stretch">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Cloud MLM Software expert analysis
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Gift Plan MLM Plan blueprint for transparent peer-to-peer generosity.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Align donation circles with compliance, communication, and cash-flow visibility from the first gift. Cloud MLM Software structures multi-stage gifting, automates reviews, and keeps every contributor confident in how funds circulate.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={contactHref}>
                  Talk to a gifting architect
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
            <PassUpFlowSimulator
              variant="gift"
              className="h-full lg:w-[clamp(420px,48vw,660px)] lg:translate-x-12 xl:translate-x-16 lg:rounded-[34px] lg:shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Gift plan mechanics that sustain trust and liquidity
          </h2>
          <p className="text-sm text-muted-foreground">
            Configure every stage, donation threshold, and compliance checkpoint so peer-to-peer generosity delivers real outcomes.
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
            Foundations that align value, field energy, and compliance
          </h2>
          <p className="text-sm text-muted-foreground">
            Unite product, ambassadors, and oversight teams with shared visibility into what every donation unlocks.
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Interactive gifting scenarios</h2>
            <p className="text-sm text-muted-foreground">
              Stress-test liquidity, queue velocity, and reserve policies before inviting your community to participate.
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
            Member journey from pledge to re-gift
          </h2>
          <p className="text-sm text-muted-foreground">
            Guide every contributor with clarity on timelines, reviews, and the value they receive at each stage.
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
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{journey.stage}</h3>
                  <p className="text-sm text-muted-foreground">{journey.description}</p>
                  <p className="text-sm font-semibold text-foreground">Cloud MLM focus</p>
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
            Implementation roadmap for compliant gifting
          </h2>
          <p className="text-sm text-muted-foreground">
            Move from concept to a compliant, data-backed donation circle with guided sprints and simulator insights.
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
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{step.phase}</h3>
                  <span className="text-xs font-medium uppercase tracking-wide text-primary">{step.duration}</span>
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
            Operational blueprint built for donation programs
          </h2>
          <p className="text-sm text-muted-foreground">
            Combine analytics, controls, and enablement in a single platform that keeps donors, receivers, and regulators aligned.
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
            Answers to the top questions founders, finance leads, and compliance officers raise about the MLM Gift Plan.
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
              How Cloud MLM Software accelerates donation programs
            </h2>
            <p className="text-sm text-muted-foreground">
              Partner with Cloud MLM Software to launch a compliant, data-backed gift plan that energises your community and satisfies regulators.
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
                  Schedule a blueprint workshop
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
              Want to compare additional plans? Visit our{" "}
              <Link href={plansHref} className="text-primary underline underline-offset-4">
                MLM plan library
              </Link>{" "}
              for calculators, launch roadmaps, and expert guidance.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-foreground">Launch readiness checklist</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>AML/KYC checkpoints approved and automated for each gifting stage.</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Liquidity dashboards monitor inflow, reserves, and payout readiness in real time.</span>
              </li>
              <li className="flex items-start gap-2">
                <GaugeCircle className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Field alerts keep hosts on track to re-engage donors and maintain circle velocity.</span>
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
