import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import {
  ChartLine,
  ChatCenteredText,
  CheckCircle,
  ClipboardText,
  Gauge,
  Network,
  Robot,
  ShieldCheck,
  Sparkle,
  SquaresFour,
  Target,
  Users
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
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

type Scenario = {
  title: string;
  inputs: string;
  outcome: string;
  icon: IconType;
};

type WorkflowStep = {
  title: string;
  focus: string;
  deliverable: string;
  icon: IconType;
};

type ChecklistItem = {
  title: string;
  description: string;
};

type AioCapability = {
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
    label: "Hybrid compensation models analysed",
    value: "180+",
    detail: "Binary, unilevel, matrix, and generation rollups mapped in the last twelve months."
  },
  {
    label: "Median modelling cycle",
    value: "3.5 hours",
    detail: "From intake to stakeholder-ready dashboards with finance and compliance sign-off."
  },
  {
    label: "AI-ready data points",
    value: "95 fields",
    detail: "Structured inputs tagged for copilots, bots, and multilingual knowledge bases."
  }
];

const STRATEGIC_PILLARS: Pillar[] = [
  {
    title: "Model multi-structure growth",
    description:
      "Blend binary power legs with unilevel depth and matrix collaboration without losing clarity or agility.",
    bullets: [
      "Compare payout curves across rank mixes and matching bonuses",
      "Visualise breakage, carryover, and flush logic in one narrative",
      "Highlight distributor experience impacts before launch"
    ],
    icon: SquaresFour
  },
  {
    title: "Govern finance with confidence",
    description:
      "Give CFOs, compliance, and legal teams the visibility they need to approve hybrid innovations fast.",
    bullets: [
      "Stress test cost-to-comp against surges or slowdowns",
      "Audit adjustments with timestamped scenario notes",
      "Export regulator-ready statements in seconds"
    ],
    icon: Gauge
  },
  {
    title: "Coach the field with clarity",
    description:
      "Translate complex mechanics into stories that leaders, influencers, and onboarding teams can use immediately.",
    bullets: [
      "Publish onboarding scripts and webinar blueprints",
      "Show examples for power legs, mid-line, and rising leaders",
      "Connect outputs to recognition and rewards journeys"
    ],
    icon: ChatCenteredText
  }
];

const SCENARIOS: Scenario[] = [
  {
    title: "Launch week acceleration",
    inputs: "Binary foundation, matrix spillover boosters, rank fast-start bonuses",
    outcome: "Projects 28% faster volume stacking while holding cost-to-comp below 48% for the first quarter.",
    icon: ChartLine
  },
  {
    title: "Global expansion readiness",
    inputs: "Localized ranks, dual currency wallets, generational leadership pools",
    outcome: "Confirms payout stability across APAC and Americas regions with a single source of truth.",
    icon: Network
  },
  {
    title: "Retention reinforcement",
    inputs: "Activity scorecards, loyalty vouchers, mobile push prompts",
    outcome: "Forecasts a 17% lift in month-four active distributors while staying audit ready.",
    icon: Users
  }
];

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    title: "Frame the hybrid thesis",
    focus: "Document the growth bets driving hybrid design across product, region, and channel priorities.",
    deliverable: "Stakeholder alignment brief ready for finance, legal, and field leadership review.",
    icon: Target
  },
  {
    title: "Configure the engine",
    focus: "Map ranks, carryover, bonus pools, and jurisdictional rules into a controlled digital twin.",
    deliverable: "Version-controlled configuration library with approver sign-off and notes.",
    icon: ClipboardText
  },
  {
    title: "Simulate and stress test",
    focus: "Run launch, seasonal, and compliance guardrail scenarios with real-time recalculation.",
    deliverable: "Dashboards highlighting risk flags, sensitivity, and executive-ready talking points.",
    icon: ShieldCheck
  },
  {
    title: "Amplify the narrative",
    focus: "Translate outputs into AI-ready briefs, FAQs, and mobile coaching scripts for every segment.",
    deliverable: "Enablement package for executives, field educators, and support chatbots.",
    icon: Sparkle
  }
];

const ALIGNMENT_CHECKLIST: ChecklistItem[] = [
  {
    title: "Finance and legal alignment",
    description: "Shared scorecards track margin, compliance thresholds, and jurisdictional caps with zero ambiguity."
  },
  {
    title: "Field readiness",
    description: "Segmented insights equip leaders to explain promotion paths, bonuses, and leadership pools clearly."
  },
  {
    title: "Technology orchestration",
    description: "Keep CRM, ecommerce, and payout automation in sync with calculator assumptions and approvals."
  },
  {
    title: "Leadership telemetry",
    description: "Executive dashboards benchmark growth, churn, and incentive ROI week-over-week."
  }
];

const AIO_CAPABILITIES: AioCapability[] = [
  {
    title: "Copilot-grade context",
    description:
      "Structured metadata lets AI agents answer nuanced hybrid plan questions without human escalation or drift.",
    icon: Robot
  },
  {
    title: "Conversational playbooks",
    description:
      "Generate multilingual scripts so support teams and chatbots stay consistent across channels and markets.",
    icon: ChatCenteredText
  },
  {
    title: "Continuous intelligence loop",
    description:
      "Surface anomalies, replicate winning scenarios, and sync guidance back into knowledge bases automatically.",
    icon: ChartLine
  }
];

const FAQS: Faq[] = [
  {
    question: "What defines a hybrid plan in this calculator?",
    answer:
      "Hybrid plans combine binary, unilevel, matrix, or generational mechanics. The calculator lets you weight each structure, set caps and bonuses, and observe how revenue and payouts respond instantly."
  },
  {
    question: "Can I iterate scenarios in real time during leadership reviews?",
    answer:
      "Yes. Inputs adjust on the fly, so you can test fast-start promotions, carryover tweaks, and global rollouts live with executives while maintaining an audit trail."
  },
  {
    question: "How does the calculator support compliance teams?",
    answer:
      "Every run is logged with assumptions, approvals, and guardrails. Compliance receives export-ready documentation and visibility into breakage, flush rules, and jurisdictional limits."
  },
  {
    question: "Does the experience extend to mobile and field tools?",
    answer:
      "Outputs feed mobile-ready scorecards, push notifications, and shareable briefings so leaders can coach teams from any device."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Hybrid MLM Plan Calculator";
  const description =
    "Model binary, unilevel, and matrix combinations with Cloud MLM Software hybrid calculator built for finance, compliance, and field leadership.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/hybrid-plan-mlm-calculator", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type HybridCalculatorPageProps = {
  params: { lang: SupportedLocale };
};

export default function HybridCalculatorPage({ params }: HybridCalculatorPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-sky-100 via-indigo-50 to-slate-100 py-24 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(14,116,144,0.18),transparent_55%),radial-gradient(circle_at_88%_12%,rgba(99,102,241,0.18),transparent_48%)] dark:bg-[radial-gradient(circle_at_12%_20%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_88%_12%,rgba(14,116,144,0.35),transparent_50%)]" />
        <div className="container relative z-10 grid gap-16 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/70 px-4 py-1 text-sm font-medium text-slate-900 shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/10 dark:text-white">
              <Sparkle className="h-4 w-4 text-primary dark:text-white" aria-hidden />
              Hybrid clarity engineered for decision makers
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Forecast hybrid compensation with precision, speed, and credibility.</h1>
              <p className="text-lg text-slate-700/80 dark:text-white/80">
                Cloud MLM Software translates complex hybrid plan logic into transparent models, dashboards, and AI-ready narratives so your leadership team, distributors, and regulators move in lockstep.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href={contactHref}>
                  Talk to a strategist
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-900 hover:bg-white/50 dark:border-white/40 dark:text-white dark:hover:bg-white/10"
              >
                <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                  Explore the live demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-slate-900 hover:bg-white/50 dark:text-white dark:hover:bg-white/10"
              >
                <Link href={plansHref}>
                  Review plan options
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground dark:text-white">Immediate value for your hybrid roadmap</h2>
              <p className="text-sm text-slate-700 dark:text-white/80">
                Bring binary, unilevel, and matrix logic together in one command centre. Align teams with visuals, scorecards, and actionable next steps tuned for AI assistants.
              </p>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-white/80">
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 text-primary dark:text-sky-300" aria-hidden />
                Real-time scenario toggles for ranks, caps, currencies, and leadership pools.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 text-primary dark:text-sky-300" aria-hidden />
                Visual statements crafted for board packs, regulator submissions, and investor updates.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 text-primary dark:text-sky-300" aria-hidden />
                AI-optimised storytelling that powers knowledge bases, copilots, and field enablement.
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                variant="secondary"
                size="sm"
                className="bg-primary/10 text-primary hover:bg-primary/15 dark:bg-white/15 dark:text-white dark:hover:bg-white/20"
              >
                <Link href={pricingHref}>
                  View pricing
                  <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="sm"
                className="bg-primary/10 text-primary hover:bg-primary/15 dark:bg-white/15 dark:text-white dark:hover:bg-white/20"
              >
                <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                  Run a guided simulation
                  <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <dl className="container mt-16 grid gap-6 md:grid-cols-3">
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-slate-200/80 bg-white/70 p-6 shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5"
            >
              <dt className="text-sm uppercase tracking-wide text-slate-700/80 dark:text-white/70">{stat.label}</dt>
              <dd className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">{stat.value}</dd>
              <p className="mt-3 text-sm text-slate-700/80 dark:text-white/80">{stat.detail}</p>
            </div>
          ))}
        </dl>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why leaders choose the Cloud MLM hybrid calculator</h2>
          <p className="text-sm text-muted-foreground">
            Build a resilient compensation strategy that blends innovation with governance, and keep every stakeholder informed with purpose-built insights.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {STRATEGIC_PILLARS.map((pillar) => (
            <article key={pillar.title} className="flex h-full flex-col gap-5 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <pillar.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold text-foreground">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground">{pillar.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {pillar.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/40 py-20 dark:bg-slate-900/40">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Gauge className="h-4 w-4" aria-hidden />
              Scenario insight desk
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">See every scenario before the market does</h2>
            <p className="text-sm text-muted-foreground">
              Confidently launch, expand, and retain by observing how each decision reshapes margins, behaviour, and compliance. Your teams can co-create in a single live workspace with instant recalculation.
            </p>
            <div className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">Alignment checklist</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {ALIGNMENT_CHECKLIST.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <Sparkle className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid gap-6">
            {SCENARIOS.map((scenario) => (
              <article key={scenario.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <scenario.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{scenario.title}</h3>
                <p className="text-xs uppercase tracking-wide text-primary">Inputs</p>
                <p className="text-sm text-muted-foreground">{scenario.inputs}</p>
                <p className="text-xs uppercase tracking-wide text-primary">Outcome</p>
                <p className="text-sm text-muted-foreground">{scenario.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[0.95fr,1.05fr]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Our hybrid calculator delivery blueprint</h2>
          <p className="text-sm text-muted-foreground">
            A guided engagement keeps product, finance, compliance, and field leaders aligned from the first whiteboard session to post-launch optimisation.
          </p>
          <Button asChild size="lg">
            <Link href={contactHref}>
              Schedule a working session
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
        <ol className="relative space-y-8 border-l border-border/60 pl-8">
          {WORKFLOW_STEPS.map((step) => (
            <li key={step.title} className="relative">
              <span className="absolute -left-[39px] flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background text-primary shadow-sm">
                <step.icon className="h-5 w-5" aria-hidden />
              </span>
              <div className="space-y-3 rounded-3xl border border-border/50 bg-muted/20 p-6 dark:bg-slate-900/40">
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.focus}</p>
                <p className="text-xs uppercase tracking-wide text-primary">Deliverable</p>
                <p className="text-sm text-muted-foreground">{step.deliverable}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y border-border/60 bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">AIO capabilities built into every model</h2>
            <p className="text-sm text-muted-foreground">
              Empower your human teams and AI copilots with structured data, context, and messaging that reinforces your hybrid plan vision.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {AIO_CAPABILITIES.map((capability) => (
              <article key={capability.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <capability.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">Everything you need to know before launching your hybrid compensation experiences.</p>
        </div>
        <dl className="grid gap-6 md:grid-cols-2">
          {FAQS.map((faq) => (
            <div key={faq.question} className="space-y-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <dt className="text-lg font-semibold text-foreground">{faq.question}</dt>
              <dd className="text-sm text-muted-foreground">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-sky-600 via-primary to-indigo-500 p-10 text-white shadow-lg">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight">Ready to operationalise your hybrid strategy?</h2>
            <p className="text-sm text-white/80">
              Partner with Cloud MLM Software to model every incentive, prepare your teams, and deliver a hybrid experience that sets the benchmark for the industry.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
              <Link href={contactHref}>
                Connect with Cloud MLM Software
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/60 text-white hover:bg-white/20">
              <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                Request a calculator walk-through
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
