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
  Rocket,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target
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
    label: "Verified click fidelity",
    value: "98.7%",
    detail: "Fraud, duplication, and VPN detection tuned across 12 PPC launches in 2024."
  },
  {
    label: "Launch playbook",
    value: "12-day sprint",
    detail: "Average time to deploy rules, creatives, and billing in Cloud MLM Software."
  },
  {
    label: "ROI uplift",
    value: "+32%",
    detail: "Median margin lift after applying rule-based payouts and compliance holds."
  },
  {
    label: "Fraud signals monitored",
    value: "14 real-time checks",
    detail: "Device, geo, velocity, and AML triggers inspect every click before payout."
  }
];

const MECHANICS: Mechanic[] = [
  {
    title: "Attribution & validation",
    summary: "Track every click from source to conversion with anti-fraud automation.",
    outcomes: [
      "Fingerprint devices, VPN usage, and geography before crediting a click.",
      "Deduplicate traffic across affiliates, campaigns, and mirrored creatives.",
      "Surface anomaly alerts for velocity spikes or mismatched landing pages."
    ],
    icon: Target
  },
  {
    title: "Dynamic payout orchestration",
    summary: "Automate pay-per-click, tiered bonuses, and compliance holds in one engine.",
    outcomes: [
      "Apply tiered click rates based on pack, region, or verified quality scores.",
      "Blend CPC payouts with CPA or residual overlays without breaking caps.",
      "Hold or fast-track payments when legal, tax, or banking rules change."
    ],
    icon: Settings2
  },
  {
    title: "Insights for growth teams",
    summary: "Give founders, finance, and field leaders the same view of click economics.",
    outcomes: [
      "Highlight ROI-positive campaigns and segments ready for more budget.",
      "Predict when promoters hit payout thresholds or require coaching support.",
      "Distribute creative refresh queues, compliance notices, and ROI reports automatically."
    ],
    icon: BarChart3
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Growth intelligence",
    description: "Base every optimisation on live click, conversion, and ROI telemetry.",
    bullets: [
      "Compare affiliate, ad network, and product landing performance in one canvas.",
      "Forecast payout exposure before launching new creatives or markets.",
      "Correlate spend, conversions, and retention to adjust pack strategy."
    ],
    icon: GaugeCircle
  },
  {
    title: "Regulation-ready operations",
    description: "Operate PPC campaigns under global consumer protection and AML mandates.",
    bullets: [
      "Apply brand and advertising disclosures automatically by market.",
      "Capture consent, KYC, and tax documentation before releasing payouts.",
      "Log edits to rates, creatives, or caps with timestamps for audit teams."
    ],
    icon: ClipboardCheck
  },
  {
    title: "Field clarity & enablement",
    description: "Keep promoters confident with transparent dashboards and guided actions.",
    bullets: [
      "Show queue position, click quality, and projected earnings in the field portal.",
      "Deliver creative playbooks and compliance reminders when performance dips.",
      "Automate recognition when affiliates sustain profitable click campaigns."
    ],
    icon: Megaphone
  }
];

const EXAMPLES: Example[] = [
  {
    title: "North America launch blitz",
    baseline: "8,500 affiliates, blended CPC tiers ($0.45/$0.65), $120 average order value.",
    insight:
      "Cloud MLM Software validates traffic in real time, pauses risky segments, and highlights which creatives deliver profitable ROI by state and device.",
    icon: Rocket
  },
  {
    title: "EU compliance acceleration",
    baseline: "France, Germany, Spain PPC rollout requiring e-invoicing, GDPR consent, and VAT reporting.",
    insight:
      "Automated disclosures, consent management, and tax-ready statements keep payouts flowing while satisfying regulators and banking partners.",
    icon: ShieldCheck
  },
  {
    title: "LATAM creator activation",
    baseline: "Influencer-led click funnels with multilingual creatives and mobile-heavy traffic mix.",
    insight:
      "Quality scoring and automatic link rotation protect ROI while CRM nudges prompt coaching on low-converting segments.",
    icon: LineChart
  }
];

const BLUEPRINT: Pattern[] = [
  {
    title: "Configuration studio",
    description: "Craft click-rate tiers, anti-fraud rules, and payout workflows with version control.",
    icon: Settings2
  },
  {
    title: "Analytics command centre",
    description: "Dashboards monitor spend, conversions, ROI, and compliance exceptions in real time.",
    icon: BarChart3
  },
  {
    title: "Enablement hub",
    description: "Serve creatives, scripts, and click optimisation playbooks aligned to campaign goals.",
    icon: Layers
  }
];

const JOURNEYS: Journey[] = [
  {
    stage: "Affiliate onboarding",
    description: "Promoters register, clear compliance, and receive approved links and creatives.",
    focus: "Leaders preview projected ROI, compliance tasks, and funnel checklists from day one.",
    icon: Compass
  },
  {
    stage: "Campaign optimisation",
    description: "Clicks stream in, quality scores adjust, and payouts update against live metrics.",
    focus: "Finance and marketing see the same dashboards to reallocate budget and coach affiliates.",
    icon: Activity
  },
  {
    stage: "Payout & reinvest",
    description: "Verified clicks trigger payouts, taxes, and recognition while new creatives queue up.",
    focus: "Compliance sign-off, analytics summaries, and coaching prompts fire automatically.",
    icon: Target
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: "Discovery & modelling",
    duration: "Week 1",
    activities: [
      "Document CPC objectives, fraud tolerances, and regional compliance requirements.",
      "Ingest historic traffic data to benchmark click-to-conversion baselines.",
      "Outline KPI scorecards for founders, finance, and marketing leadership."
    ],
    icon: CalendarRange
  },
  {
    phase: "Configuration & simulation",
    duration: "Weeks 2-4",
    activities: [
      "Build click validation, rate tiers, and payout rulesets in staging.",
      "Run what-if simulations for traffic surges, new regions, and promo overlays.",
      "Validate banking, tax, and invoicing integrations before go-live."
    ],
    icon: Settings2
  },
  {
    phase: "Enablement & go-live",
    duration: "Weeks 5-6",
    activities: [
      "Launch field dashboards, creative libraries, and ROI coaching pathways.",
      "Activate monitoring packs for fraud anomalies, compliance holds, and churn signals.",
      "Stand up go-live war rooms with defined SLAs and escalation playbooks."
    ],
    icon: Rocket
  }
];

const CTA_POINTS: string[] = [
  "Automate click validation, payouts, and regional compliance in one platform.",
  "Expose ROI, fraud, and conversion dashboards tailored to each executive.",
  "Enable affiliates with certified creatives, alerts, and on-demand coaching.",
  "Integrate CRM, PSP, tax, and analytics stacks to strengthen every campaign."
];

const FAQS: Faq[] = [
  {
    question: "How does Cloud MLM Software prevent click fraud?",
    answer:
      "We inspect IP, device, geolocation, and behavioural velocity before crediting a click. Suspicious traffic routes to manual review, and payouts pause automatically until cleared."
  },
  {
    question: "Can we run multiple click tiers for different affiliates?",
    answer:
      "Yes. Create tiered pay-per-click rates based on pack, performance, geography, or compliance standing. Changes are versioned and auditable for finance and legal teams."
  },
  {
    question: "How are conversions and ROI tracked?",
    answer:
      "Dashboards connect clicks to orders, subscription renewals, and retention metrics. You can compare campaign ROI and trigger automated coaching when trends dip below thresholds."
  },
  {
    question: "Do payouts support regional tax and invoicing rules?",
    answer:
      "Payouts include VAT/GST-ready documentation, currency conversions, and AML/KYC checks. Statements, invoices, and payment files adapt to each market automatically."
  },
  {
    question: "Can we integrate our existing ad platforms?",
    answer:
      "Our integration team connects major ad networks, CRM, and analytics stacks via API. Sandboxes help you validate traffic tagging and attribution before moving to production."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Click MLM Plan";
  const description =
    "Cloud MLM Software's click MLM plan blueprint—anti-fraud automation, ROI analytics, and compliant pay-per-click payouts for network marketing teams.";

  return {
    title,
    description,
    keywords: [
      "click MLM plan",
      "pay per click MLM software",
      "Cloud MLM Software",
      "MLM click tracking",
      "click marketing compliance",
      "MLM ROI analytics",
      "affiliate click payouts"
    ],
    alternates: {
      canonical: buildLocalizedPath("/mlm-plan/click-plan-mlm-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ClickPlanPageProps = {
  params: { lang: SupportedLocale };
};

export default function ClickPlanPage({ params }: ClickPlanPageProps) {
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
              Click MLM plan blueprint engineered for transparent, profitable traffic.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Pay-per-click programmes demand airtight attribution, compliance, and ROI analytics. Cloud MLM Software validates every click, harmonises payouts, and arms leaders with insights so campaigns scale without guesswork. Explore additional plan models in our{" "}
              <Link href={plansHref} className="text-primary underline underline-offset-4">
                MLM plan library
              </Link>
              {" "}and simulate scenarios below.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href={contactHref}>
                  Talk to a PPC architect
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
              variant="click"
              className="h-full lg:w-[clamp(420px,48vw,660px)] lg:translate-x-12 xl:translate-x-16 lg:rounded-[34px] lg:shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Master the click plan mechanics
          </h2>
          <p className="text-sm text-muted-foreground">
            From attribution to payout, every rule lives in one governed workspace so marketing and finance stay aligned.
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
            Alignment pillars that keep click plans resilient
          </h2>
          <p className="text-sm text-muted-foreground">
            Connect strategy, compliance, and the field so campaigns stay trustworthy and profitable at scale.
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Interactive click plan examples</h2>
            <p className="text-sm text-muted-foreground">
              Pressure-test campaign mixes before going live and show stakeholders how Cloud MLM Software sustains ROI.
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
            Member and leader journey through click campaigns
          </h2>
          <p className="text-sm text-muted-foreground">
            Map every step from onboarding to payout so field teams stay focused on high-quality traffic.
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
            Make every stakeholder comfortable with a structured path from discovery to compliant go-live.
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
            Build the analytics, enablement, and automation spine that keeps click plans compliant and profitable.
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
            Equip founders, finance leaders, compliance officers, and affiliates with clear answers while evaluating a click plan rollout.
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
              Launch a compliant, insights-driven click plan that delights affiliates and protects your brand.
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
              Need more inspiration? Visit our{" "}
              <Link href={plansHref} className="text-primary underline underline-offset-4">
                MLM plan hub
              </Link>
              {" "}for calculators, pricing intel, and roadmap guidance.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-foreground">Launch readiness checklist</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Fraud, AML, and disclosure controls reviewed and tested per market.</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Dashboards benchmark clicks, conversions, and ROI by campaign.</span>
              </li>
              <li className="flex items-start gap-2">
                <GaugeCircle className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Field alerts and coaching cadences aligned to performance thresholds.</span>
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
