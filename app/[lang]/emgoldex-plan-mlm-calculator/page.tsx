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
  Bot,
  Calculator,
  GaugeCircle,
  ShieldCheck,
  Sparkles
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

type WorkflowStep = {
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
    label: "Emgoldex plans modelled",
    value: "140+",
    detail: "Plan variations simulated and launched across global networks."
  },
  {
    label: "Scenario accuracy",
    value: "< 3% variance",
    detail: "Difference between simulated rewards and live payouts when assumptions stay current."
  },
  {
    label: "Automation coverage",
    value: "78%",
    detail: "Workflows automated during plan design, approvals, and launch checklists."
  }
];

const BENEFITS: Benefit[] = [
  {
    title: "Fast, accurate simulations",
    description: "Model tables, cycles, and bonuses with configurable assumptions and guardrails.",
    icon: Calculator,
    bullets: [
      "Adjust table size, gold value, and payout ratios",
      "Compare incentive tweaks side-by-side",
      "Export reports for finance and leadership"
    ]
  },
  {
    title: "Compliance-ready governance",
    description: "Capture approvals, assumptions, and evidence for regulators and auditors.",
    icon: ShieldCheck,
    bullets: [
      "Approval workflows for finance, legal, and executives",
      "Immutable change history and rationale",
      "Risk indicators for payout and cash flow exposure"
    ]
  },
  {
    title: "AI-guided optimisation",
    description: "Copilots surface insights, anomalies, and actions after every simulation run.",
    icon: Bot,
    bullets: [
      "Predictive alerts for saturation or margin risk",
      "Narrative summaries for leadership reviews",
      "Suggested experiments for incentives and policies"
    ]
  }
];

const WORKFLOW: WorkflowStep[] = [
  {
    title: "Blueprint",
    description: "Define goals, data inputs, and compliance requirements with Cloud MLM strategists.",
    icon: GaugeCircle
  },
  {
    title: "Simulate",
    description: "Configure tables, payouts, and incentives with guardrails and AI validation.",
    icon: Calculator
  },
  {
    title: "Approve",
    description: "Capture stakeholder sign-offs, lock scenarios, and prepare launch plans.",
    icon: ShieldCheck
  },
  {
    title: "Optimise",
    description: "Monitor live performance with copilot guidance and quarterly reviews.",
    icon: Bot
  }
];

const FAQS: Faq[] = [
  {
    question: "Can we customise every Emgoldex parameter?",
    answer: "Yes. Table size, gold purchase value, payout ratios, incentives, and rules are all configurable."
  },
  {
    question: "Does the calculator support compliance reviews?",
    answer: "Audit trails, assumption logs, and export packs provide regulators with full transparency."
  },
  {
    question: "Can we import historical performance data?",
    answer: "Yes. Import past results so simulations reflect real-world momentum and participant behaviour."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Emgoldex Plan MLM Calculator";
  const description =
    "Simulate, validate, and optimise Emgoldex plans with Cloud MLM Software’s calculator and AI copilots.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/emgoldex-plan-mlm-calculator", locale)
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
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(56,189,248,0.18),transparent_45%),radial-gradient(circle_at_90%_-10%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Calculator className="h-4 w-4" aria-hidden />
              Emgoldex plan mastery
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Model Emgoldex tables with automation, governance, and AI insights.
            </h1>
            <p className="text-lg text-muted-foreground">
              Give finance, compliance, and field teams one calculator that accelerates simulations, protects margins, and keeps every stakeholder aligned.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Request a plan consultation
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                  Explore the calculator demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <dl className="grid gap-6 md:grid-cols-3">
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why Emgoldex teams choose Cloud MLM Software</h2>
          <p className="text-sm text-muted-foreground">
            Faster simulations, clearer governance, and smarter decisions for every plan iteration.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article key={benefit.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {benefit.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      {bullet}
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A workflow that keeps every stakeholder aligned</h2>
            <p className="text-sm text-muted-foreground">
              Move from idea to launch with structured collaboration and automation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {WORKFLOW.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">
            Answers for finance, compliance, and operations teams evaluating Emgoldex plans.
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to model your Emgoldex plan?</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Book a workshop with Cloud MLM Software analysts to configure scenarios, review guardrails, and activate AI copilots tailored to your brand.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Schedule a workshop
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                Watch the calculator demo
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
