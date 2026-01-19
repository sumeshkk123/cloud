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
  Bot,
  Brain,
  Clock,
  GaugeCircle,
  Layers3,
  LineChart,
  MessageSquare,
  MousePointerClick,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  CheckCircle2
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
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

type DemoHighlight = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type AiUpdate = {
  year: string;
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type UseCase = {
  title: string;
  outcome: string;
  metric: string;
  icon: IconType;
};

type Faq = {
  question: string;
  answer: string;
};

const STATS: Stat[] = [
  {
    label: "Qualified click accuracy",
    value: "98%",
    detail: "Clickstream enrichment ensures only policy-compliant traffic triggers payouts.",
    icon: MousePointerClick
  },
  {
    label: "Attribution latency",
    value: "< 30 sec",
    detail: "Real-time webhooks post validated clicks to compensation queues.",
    icon: Activity
  },
  {
    label: "Optimised campaigns",
    value: "180+",
    detail: "Tested CTA and landing journeys ready for click-plan marketers.",
    icon: BarChart3
  },
  {
    label: "AI insights shipped",
    value: "2025",
    detail: "Copilots now summarise anomalies and recommend payout adjustments instantly.",
    icon: Sparkles
  }
];

const BENEFITS: Benefit[] = [
  {
    title: "Transparent click governance",
    description:
      "Every click is scored, deduplicated, and linked back to enrolment funnels so finance and compliance teams approve payouts confidently.",
    icon: ShieldCheck,
    bullets: [
      "Define click sources, referrers, and geo policies with granular rules",
      "Detect bot or repeat click activity using velocity and fingerprinting",
      "Surface dispute-ready evidence for auditors and distributors"
    ]
  },
  {
    title: "Revenue-grade analytics",
    description:
      "Tie click performance to conversions, product mix, and margins with dashboards ready for leadership reviews.",
    icon: LineChart,
    bullets: [
      "Attribution models compare influencer, paid, and partner channels",
      "Forecast payouts against contribution margin guardrails",
      "Share AI summaries highlighting weekly uplifts or risks"
    ]
  },
  {
    title: "Automation-first payouts",
    description:
      "Automate validations, approvals, and settlement so your teams focus on optimisation—not spreadsheets.",
    icon: Workflow,
    bullets: [
      "Trigger tiered payouts once quality thresholds are met",
      "Route exceptions to finance, compliance, or success desks",
      "Sync results with ERP, CRM, and incentive wallets in minutes"
    ]
  }
];

const DEMO_HIGHLIGHTS: DemoHighlight[] = [
  {
    title: "Real-time click canvas",
    description:
      "Map every impression, click, and conversion path with filters by campaign, partner, device, and geography.",
    icon: GaugeCircle,
    bullets: [
      "Heatmaps show which CTAs drive the highest downstream orders",
      "Journey explorer connects anonymous clicks to enrolled distributors",
      "Scenario switcher replays performance with adjusted payout rules"
    ]
  },
  {
    title: "Compliance workstation",
    description:
      "Automated policies keep programmes safe while offering full traceability for regulators.",
    icon: ShieldCheck,
    bullets: [
      "Reconcile IP, device, and consent data before releasing commissions",
      "Archive immutable click logs with retention by market",
      "Export regulator-ready reports with supporting evidence links"
    ]
  },
  {
    title: "Revenue operations hub",
    description:
      "Align marketing, finance, and field enablement on the same facts to invest in the right campaigns.",
    icon: Layers3,
    bullets: [
      "Unified scorecards show cost-to-comp, ROI, and churn impact",
      "AI-generated briefs recap weekly momentum and anomalies",
      "What-if planner simulates spend shifts before you roll them out"
    ]
  }
];

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    title: "Instrument",
    description:
      "Embed tracking across landing pages, short links, and referral tools with instant validation in the sandbox.",
    icon: Network
  },
  {
    title: "Optimise",
    description:
      "Use AI insights to refine creatives, adjust bid strategies, and rebalance incentives by partner tier.",
    icon: Brain
  },
  {
    title: "Approve",
    description:
      "Route exceptions for review, lock approved statements, and publish payout notifications to the field.",
    icon: ShieldCheck
  },
  {
    title: "Scale",
    description:
      "Clone proven programmes across countries with localisation, taxation, and consent packs baked in.",
    icon: Target
  }
];

const AI_UPDATES: AiUpdate[] = [
  {
    year: "2025",
    title: "Click intelligence copilots",
    description:
      "Conversational copilots summarise performance, surface anomalies, and recommend adjustments before payouts are approved.",
    icon: Bot,
    bullets: [
      "Ask natural language questions about campaign ROI or compliance status",
      "Receive auto-drafted leadership updates with charts and next steps",
      "Trigger remediation workflows directly from AI recommendations"
    ]
  },
  {
    year: "2024",
    title: "Observability & experimentation",
    description:
      "Feature flags, synthetic data, and expanded telemetry prepared the platform for AI-native decisioning.",
    icon: Activity,
    bullets: [
      "Shadow deployments validate new payout logic before go-live",
      "Streaming click logs feed anomaly detectors and forecasting models",
      "Experiment manager compares creatives, funnels, and incentive mixes"
    ]
  }
];

const USE_CASES: UseCase[] = [
  {
    title: "Influencer-driven launches",
    outcome: "Boosted qualified traffic by 37% while keeping cost-to-comp under 48% margin thresholds.",
    metric: "Global wellness client, 12-week rollout",
    icon: MessageSquare
  },
  {
    title: "Partner marketplace governance",
    outcome: "Eliminated fraudulent clicks across 18 countries within two release cycles.",
    metric: "Fintech direct selling brand",
    icon: ShieldCheck
  },
  {
    title: "AI-assisted campaign planning",
    outcome: "Copilot guidance reprioritised spend and drove 2.4x conversion uplift quarter-over-quarter.",
    metric: "Digital goods launch in LATAM",
    icon: Sparkles
  }
];

const FAQS: Faq[] = [
  {
    question: "How does the platform validate click quality?",
    answer:
      "We correlate clickstream, device fingerprinting, consent data, and downstream purchase events. Rules and machine learning filters block duplicates or suspicious traffic before payouts are calculated."
  },
  {
    question: "Can I tailor the payout rules for different partners?",
    answer:
      "Yes. Configure partner tiers, geo restrictions, payout caps, and approval workflows. Feature flags let you test new incentives with limited cohorts before launching globally."
  },
  {
    question: "Do AI copilots replace manual reviews?",
    answer:
      "Copilots accelerate reviews by highlighting anomalies and drafting recommendations, but final approvals remain with your finance and compliance teams using documented guardrails."
  },
  {
    question: "How fast can I deploy the click plan demo?",
    answer:
      "Most teams launch the sandbox demo within days. Our analysts help map data sources, import historical click logs, and configure payout logic so you can validate the experience quickly."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Click Plan MLM Software Demo";
  const description =
    "Explore Cloud MLM Software’s click plan demo: govern traffic quality, automate payouts, and unlock AI copilots for click-based compensation.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/click-plan-mlm-software-demo", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ClickPlanDemoPageProps = {
  params: { lang: SupportedLocale };
};

export default function ClickPlanDemoPage({ params }: ClickPlanDemoPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";
  const plansHref = buildLocalizedPath("/mlm-plans", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_90%_-10%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <MousePointerClick className="h-4 w-4" aria-hidden />
              Click plan innovation
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Automate every click-to-commission moment with AI-ready governance.
            </h1>
            <p className="text-lg text-muted-foreground">
              Give marketing, finance, and compliance leaders a shared command centre for click-based programmes. From attribution to payout, Cloud MLM Software keeps quality high, risk low, and growth measurable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Request a guided demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                  Explore the live workspace
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href={plansHref}>
                  Review compensation services
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <dl className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <dt className="mt-4 text-sm font-medium text-muted-foreground">{stat.label}</dt>
                  <dd className="mt-1 text-2xl font-semibold text-foreground">{stat.value}</dd>
                  <p className="mt-2 text-xs text-muted-foreground">{stat.detail}</p>
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why click plan teams choose Cloud MLM Software</h2>
          <p className="text-sm text-muted-foreground">
            Replace fragmented tooling with a governed, automation-first workspace that keeps campaigns profitable and compliant.
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
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Inside the click plan demo</h2>
            <p className="text-sm text-muted-foreground">
              Experience the end-to-end storyline—from the moment a prospect clicks to the instant their reward is approved.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {DEMO_HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article key={highlight.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {highlight.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A workflow every stakeholder trusts</h2>
          <p className="text-sm text-muted-foreground">
            From instrumentation to scale, each phase keeps leadership informed and distributors rewarded accurately.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {WORKFLOW_STEPS.map((step) => {
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
      </section>

      <section className="border-y border-border/60 bg-background py-20">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">From preparation to AI-native execution</h2>
            <p className="text-sm text-muted-foreground">
              See how the platform evolved from experimentation foundations in 2024 to copilots handling insights in 2025.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {AI_UPDATES.map((update) => {
              const Icon = update.icon;
              return (
                <article key={update.year} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">{update.year}</p>
                      <h3 className="text-lg font-semibold text-foreground">{update.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{update.description}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {update.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Where the click plan demo delivers impact</h2>
          <p className="text-sm text-muted-foreground">
            Tailored scenarios for marketing leaders, finance controllers, and partner managers running click-first programmes.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {USE_CASES.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <article key={useCase.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground">{useCase.outcome}</p>
                <p className="text-xs uppercase tracking-wide text-primary">{useCase.metric}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
            <p className="text-sm text-muted-foreground">
              Answers for marketers, finance teams, and compliance leads evaluating the click plan approach.
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
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-10 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to model your click plan?</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Partner with Cloud MLM Software analysts to configure tracking, validate payouts, and activate AI copilots tailored to your brand.
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
                Watch the click plan demo
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
