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
  Brain,
  CheckCircle2,
  ClipboardList,
  GaugeCircle,
  Layers3,
  LineChart,
  Radar,
  Sparkles,
  Target,
  Users2,
  Smartphone,
  Globe
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
  detail: string;
};

type Benefit = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Step = {
  title: string;
  description: string;
  icon: IconType;
};

type BoardTier = {
  title: string;
  focus: string;
  detail: string;
  indicator: string;
};

type Insight = {
  description: string;
};

type AioEnabler = {
  title: string;
  description: string;
  icon: IconType;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_STATS: Stat[] = [
  {
    label: "Board progressions tracked",
    value: "250+",
    detail: "Live programs modelled to monitor cycling velocity and earnings distribution."
  },
  {
    label: "Variance to live payouts",
    value: "< 3%",
    detail: "Accuracy maintained when entry fees, bonuses, and re-entry logic stay aligned."
  },
  {
    label: "Scenario templates",
    value: "60+",
    detail: "Launch, retention, and leadership board simulations ready for rapid deployment."
  },
  {
    label: "AI tagged data points",
    value: "120+",
    detail: "Structured metadata powering dashboards, copilots, and compliance reviews."
  }
];

const BENEFITS: Benefit[] = [
  {
    title: "Accurate earning projections",
    description:
      "Model commissions, bonuses, and re-entry logic with guardrails that keep finance and leadership aligned.",
    bullets: [
      "Forecast board closures across 3, 5, or 9 seat structures",
      "Balance sponsor incentives with loyalty and referral bonuses",
      "Expose margin impact before policy changes go live"
    ],
    icon: BarChart3
  },
  {
    title: "Dynamic progression analysis",
    description:
      "Understand how each enrolment shifts the board, triggers splits, and redistributes positions in real-time.",
    bullets: [
      "Visualise member flow during split, recycle, and re-entry",
      "Compare launch forecasts against historical velocity",
      "Highlight stalled boards and recommend interventions"
    ],
    icon: Radar
  },
  {
    title: "Configurable to your network",
    description:
      "Adjust entry fees, leadership qualifications, and cross-board promotions to mirror your exact rules without code.",
    bullets: [
      "Clone regional or product-specific board variants",
      "Capture tax, compliance, and payout caps in one model",
      "Publish change logs for governance and audits"
    ],
    icon: Layers3
  }
];

const WORKFLOW: Step[] = [
  {
    title: "Define the board logic",
    description:
      "Set board size, spill rules, commission triggers, and leadership paths with analyst-reviewed templates.",
    icon: ClipboardList
  },
  {
    title: "Simulate live momentum",
    description:
      "Blend enrolment velocity, conversion funnels, and re-entry ratios to see how revenue and payouts evolve.",
    icon: LineChart
  },
  {
    title: "Review with stakeholders",
    description:
      "Auto-generate commentary, financial summaries, and compliance notes ready for executive approval.",
    icon: Sparkles
  },
  {
    title: "Launch with confidence",
    description:
      "Sync approved assumptions into Cloud MLM Software so operations, finance, and support act in sync from day one.",
    icon: Target
  }
];

const BOARD_TIERS: BoardTier[] = [
  {
    title: "Starter Board",
    focus: "Acquisition",
    detail: "Guide new distributors through fast-fill boards with transparent entry fees and onboarding bonuses.",
    indicator: "3x3 or 2x3 layouts"
  },
  {
    title: "Leadership Board",
    focus: "Momentum",
    detail: "Track when senior leaders recycle, fund incentives, and unlock recognition milestones without losing balance.",
    indicator: "5 or 9 seat matrices"
  },
  {
    title: "Infinity Board",
    focus: "Sustainability",
    detail: "Model re-entries, profit-sharing pools, and long-term retention so scaling markets stay profitable.",
    indicator: "Adaptive placement rules"
  }
];

const INSIGHTS_LEFT: Insight[] = [
  { description: "Monitor board health with alerts for stalled cycles and inactive positions." },
  { description: "Link board performance to regional growth targets and marketing campaigns." },
  { description: "Document compensation decisions with audit trails ready for regulators." }
];

const INSIGHTS_RIGHT: Insight[] = [
  { description: "Blend e-wallet, voucher, and loyalty data to predict member lifetime value." },
  { description: "Benchmark board plans against matrix or binary alternatives before launch." },
  { description: "Feed structured data into dashboards so leadership can interrogate trends instantly." }
];

const AIO_ENABLERS: AioEnabler[] = [
  {
    title: "Conversational-ready data",
    description:
      "Tagged assumptions make it easy for copilots to answer how payouts change when board sizes or fees shift.",
    icon: Brain
  },
  {
    title: "Narratives for every audience",
    description:
      "Instantly produce executive digests, field-ready explainers, and compliance summaries from one scenario run.",
    icon: GaugeCircle
  },
  {
    title: "Mobile-first decisioning",
    description:
      "Pair calculator results with Cloud MLM mobile apps so leaders respond to board activity anywhere.",
    icon: Smartphone
  }
];

const FAQS: Faq[] = [
  {
    question: "Can I model multiple board variations at once?",
    answer:
      "Yes. Clone templates for different geographies or product lines, adjust entry rules, and compare profitability side by side."
  },
  {
    question: "How often can I refresh assumptions?",
    answer:
      "Update enrolment data, bonuses, or tax guidance whenever required—version history keeps every change traceable."
  },
  {
    question: "Does the calculator integrate with compliance workflows?",
    answer:
      "Export approval-ready packs with rationale, guardrails, and audit evidence ready for legal, tax, and finance teams."
  },
  {
    question: "What support do I receive after launch?",
    answer:
      "Cloud MLM analysts provide onboarding, calibration checkpoints, and proactive recommendations as your network scales."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Board Plan MLM Calculator";
  const description =
    "Model board plan cycling, payouts, and leadership promotions with Cloud MLM Software's calculator.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/board-plan-mlm-calculator", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BoardPlanCalculatorPageProps = {
  params: { lang: SupportedLocale };
};

export default function BoardPlanCalculatorPage({ params }: BoardPlanCalculatorPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const boardPlanHref = buildLocalizedPath("/mlm-plan/mlm-board-plan", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_16%,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_88%_-6%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" aria-hidden />
              Board planning without blind spots
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Simulate every board cycle before the field experiences it.
            </h1>
            <p className="text-lg text-muted-foreground">
              Keep sponsors, finance, and compliance aligned with a calculator that mirrors your board plan rules, projects earnings, and recommends the next best action for each leadership tier.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Speak with an analyst
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                  Explore the live demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href={boardPlanHref}>
                  Review the board plan
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <dl className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <dt className="text-sm font-medium text-muted-foreground">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-foreground">{stat.value}</dd>
                <p className="mt-2 text-xs text-muted-foreground">{stat.detail}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Key benefits for modern board plans</h2>
          <p className="text-sm text-muted-foreground">
            Replace spreadsheets with a governed workspace that highlights profitability, compliance, and distributor experience.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <article key={benefit.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <benefit.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {benefit.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How the board plan calculator works</h2>
          <p className="text-sm text-muted-foreground">
            A guided workflow keeps every team in sync—from plan design to launch day and every iteration beyond.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {WORKFLOW.map((step) => (
            <article key={step.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <step.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Board journey blueprint</h2>
            <p className="text-sm text-muted-foreground">
              Map every board tier with the clarity leadership needs to balance growth, recognition, and profitability.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {BOARD_TIERS.map((tier) => (
              <article key={tier.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <div>
                  <span className="text-xs font-medium uppercase tracking-wide text-primary">{tier.focus}</span>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{tier.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{tier.detail}</p>
                <p className="text-xs uppercase tracking-wide text-primary">Signature signal</p>
                <p className="text-sm text-muted-foreground">{tier.indicator}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Operational intelligence for every stakeholder</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Cloud MLM Software combines calculator outputs with real-time programme data so teams make confident decisions and stay regulation-ready.
              </p>
            </div>
            <div className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Users2 className="h-4 w-4" aria-hidden />
                Cross-functional alignment
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Keep leadership briefed without scrambling for context</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Share curated dashboards that show cycling velocity, payout exposure, and retention signals for international markets in minutes.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <ul className="space-y-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              {INSIGHTS_LEFT.map((insight) => (
                <li key={insight.description} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                  {insight.description}
                </li>
              ))}
            </ul>
            <ul className="space-y-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              {INSIGHTS_RIGHT.map((insight) => (
                <li key={insight.description} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                  {insight.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-background py-20">
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Globe className="h-4 w-4" aria-hidden />
              Mobile and global ready
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Deliver insights on mobile the moment a board shifts</h2>
            <p className="text-sm text-muted-foreground">
              Extend the calculator into Cloud MLM mobile apps so sponsors receive push notifications when positions advance, boards split, or loyalty rewards unlock—anywhere in the world.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                Sync payouts, vouchers, and KYC tasks for fast field responses.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                Give regional leaders offline snapshots that update once they reconnect.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                Maintain brand consistency with localisation across currencies and languages.
              </li>
            </ul>
          </div>
          <div className="grid gap-6">
            {AIO_ENABLERS.map((enabler) => (
              <article key={enabler.title} className="flex items-start gap-4 rounded-3xl border border-border/60 bg-muted/50 p-6 shadow-sm dark:bg-slate-900/60">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <enabler.icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-foreground">{enabler.title}</h3>
                  <p className="text-sm text-muted-foreground">{enabler.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">
            Clarity for operations, finance, and field teams rolling out the next generation of board plans.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {FAQS.map((faq) => (
            <article key={faq.question} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
              <p className="text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-10 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to elevate your board plan launch?</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Partner with Cloud MLM Software analysts to configure, test, and deploy a board calculator that keeps your network thriving.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Book a working session
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                See calculator insights in action
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
