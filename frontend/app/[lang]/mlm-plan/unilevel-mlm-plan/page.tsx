import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import UnilevelGrowthSimulator from "@/components/plan/unilevel-growth-simulator";
import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ArrowUpRight,
  BarChart3,
  CalendarRange,
  ClipboardCheck,
  Compass,
  GaugeCircle,
  Globe,
  HelpCircle,
  Layers,
  LineChart,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  Users
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
};

type Highlight = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type UseCase = {
  title: string;
  metric: string;
  lift: string;
  description: string;
  icon: IconType;
};

type Play = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type JourneyStage = {
  stage: string;
  description: string;
  focus: string;
  icon: IconType;
};

type RoadmapStep = {
  phase: string;
  timeline: string;
  activities: string[];
  icon: IconType;
};

type FaqItem = {
  question: string;
  answer: string;
};

type ResourceLink = {
  title: string;
  description: string;
  href: string;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Activation uplift",
    value: "+21%",
    detail: "Median improvement in active front-line distributors after automating onboarding and coaching nudges."
  },
  {
    label: "Depth payout accuracy",
    value: "99.3%",
    detail: "Weekly commission reconciliations completed without manual overrides across unilevel programs."
  },
  {
    label: "Retention strength",
    value: "88%",
    detail: "Average rolling 90-day retention once loyalty triggers and recognition streams go live."
  },
  {
    label: "Launch velocity",
    value: "6 weeks",
    detail: "Typical time to configure policy-aware unilevel rules across three markets in Cloud MLM Software."
  }
];

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Unlimited width, governed depth",
    description:
      "Empower field builders to recruit without caps while finance, legal, and operations retain full control of depth payouts.",
    bullets: [
      "Set per-market depth pay rules, compression logic, and leadership bonuses without code.",
      "Visualise width distribution, average order value, and activity trends on one screen.",
      "Schedule scenario tests so executives see how width growth affects inventory and cash."],
    icon: GaugeCircle
  },
  {
    title: "Compliance as a guardrail",
    description:
      "Every payout level is backed by tax receipts, policy acknowledgements, and auditable documentation ready for regulators.",
    bullets: [
      "Attach KYC/AML checkpoints to payout triggers before commissions leave the wallet.",
      "Log sponsor approvals and change history for every rule adjustment.",
      "Generate regulator-ready exports in seconds for DSA, FTC, or country-specific audits."],
    icon: ShieldCheck
  },
  {
    title: "AI-assisted coaching",
    description:
      "Field leaders receive predictive alerts showing which legs need attention, what scripts to use, and which incentives to deploy.",
    bullets: [
      "Trigger mobile nudges when activation dips below thresholds per cohort.",
      "Recommend sampling, loyalty credits, or micro-events to revive inactive legs.",
      "Benchmark leaders on depth health and celebrate wins directly in their dashboards."],
    icon: Sparkles
  }
];

const USE_CASES: UseCase[] = [
  {
    title: "Wellness subscription powerhouse",
    metric: "Activation to 86%",
    lift: "+18 pts",
    description:
      "North American wellness brand digitised onboarding with Cloud MLM Software, boosting active first-level promoters and reducing churn by 24%.",
    icon: Users
  },
  {
    title: "Global beauty expansion",
    metric: "Commission audit time",
    lift: "-72%",
    description:
      "APAC beauty company automated tax receipts, creating auditable unilevel payouts compliant with Singapore, Malaysia, and Philippines rules.",
    icon: ShieldCheck
  },
  {
    title: "Digital services collective",
    metric: "Average order value",
    lift: "+$42",
    description:
      "E-learning cooperative layered loyalty incentives and AI nudges to raise monthly average order value while protecting margins.",
    icon: LineChart
  }
];

const STRATEGIC_PLAYS: Play[] = [
  {
    title: "Front-line accelerator",
    summary: "Warm prospect journeys that convert invites into active first-level promoters.",
    bullets: [
      "Dynamic onboarding sequences personalised by market, language, and enrollment kit.",
      "Predictive scoring to surface prospects who need leader support inside 48 hours.",
      "Event and webinar integrations to move prospects through evaluation quickly."],
    icon: Network
  },
  {
    title: "Depth health monitor",
    summary: "Maintain consistent earnings across levels while avoiding cannibalisation or overpayment.",
    bullets: [
      "Depth compression rules and blocked-leg alerts keep payouts policy aligned.",
      "Live dashboards track contribution per level and flag anomalies before payroll.",
      "Compliance queue prioritises escalations for finance and legal to review."],
    icon: Layers
  },
  {
    title: "Global-ready governance",
    summary: "Manage unilevel rules across currencies, languages, and regulatory environments.",
    bullets: [
      "Jurisdiction templates for VAT/GST, consumer protection, and direct selling requirements.",
      "Multi-currency wallets with FX tracking and automated statements.",
      "Role-based access so regional leaders view their data while HQ retains control."],
    icon: Globe
  }
];

const JOURNEY: JourneyStage[] = [
  {
    stage: "Recruit & activate",
    description: "Prospects receive personalised education, compliance disclosures, and success plans to become active promoters quickly.",
    focus: "Conversion journeys, digital agreements, and product sampling ensure readiness on day one.",
    icon: Compass
  },
  {
    stage: "Coach & scale",
    description: "Leaders monitor depth health, support underperforming legs, and celebrate wins with automated recognition.",
    focus: "AI recommendations, micro-learning content, and recognition feeds keep momentum high.",
    icon: Sparkles
  },
  {
    stage: "Optimise & expand",
    description: "Executives model incentive changes, test new markets, and fine-tune cash flow as the organisation grows.",
    focus: "Scenario planning, integration dashboards, and compliance reporting maintain confidence.",
    icon: BarChart3
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: "Discovery & blueprinting",
    timeline: "Weeks 1-2",
    activities: [
      "Audit existing compensation logic, incentives, and compliance obligations.",
      "Map data sources for enrollment, volume, and payouts to sync with Cloud MLM Software.",
      "Prototype unilevel depth, compression, and bonus rules in the configuration studio."],
    icon: CalendarRange
  },
  {
    phase: "Configuration & enablement",
    timeline: "Weeks 3-5",
    activities: [
      "Implement automation workflows, documentation requirements, and payout approvals.",
      "Integrate ERP, payment, and CRM systems with test scripts for each market.",
      "Roll out leader enablement portal with targeted playbooks and analytics."],
    icon: ClipboardCheck
  },
  {
    phase: "Launch & optimisation",
    timeline: "Weeks 6-8",
    activities: [
      "Run soft launch simulations, reconcile commissions, and capture feedback.",
      "Activate listening posts—support tickets, sentiment widgets, community forums—for continuous improvement.",
      "Schedule quarterly optimisation sprints to adjust incentives and content."],
    icon: Target
  }
];

const FAQS: FaqItem[] = [
  {
    question: "Can Cloud MLM Software handle unlimited first-level enrollees without performance issues?",
    answer:
      "Yes. The platform is engineered for high-volume enrollment events with real-time calculations, autoscaling infrastructure, and caching tuned specifically for unilevel compensation."
  },
  {
    question: "How do you prevent payout disputes across deep levels?",
    answer:
      "Each commission run stores depth, compression, and qualification evidence. Leaders see exactly why a payout triggered or paused, and finance has one-click proof for audits or appeals."
  },
  {
    question: "Can we vary unilevel depth and bonuses by market?",
    answer:
      "Absolutely. Configure depth, bonus pools, and leadership incentives per jurisdiction or brand. Policy updates propagate instantly while preserving historical audit trails."
  },
  {
    question: "What integrations are available for ecommerce or CRM platforms?",
    answer:
      "Out-of-the-box connectors support Shopify, Salesforce, HubSpot, Magento, and more. Webhooks and APIs let you orchestrate enrolments, orders, and payouts in near real time."
  }
];

const RESOURCE_LINKS: ResourceLink[] = [
  {
    title: "Unilevel plan launch checklist",
    description: "Download the 40-point readiness checklist covering compensation, compliance, and enablement tasks.",
    href: "/documents/unilevel-launch-checklist.pdf"
  },
  {
    title: "ROI calculator",
    description: "Model activation, retention, and profit scenarios for your unilevel organisation.",
    href: "/mlm-calculator"
  },
  {
    title: "Schedule a strategy workshop",
    description: "Partner with Cloud MLM Software architects to tailor the plan for your brand, markets, and growth goals.",
    href: "/contact"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Unilevel MLM Plan";
  const description =
    "Design the ultimate unilevel MLM plan with Cloud MLM Software—automation, compliance guardrails, predictive analytics, and enablement built for unlimited width.";

  return {
    title,
    description,
    keywords: [
      "Unilevel MLM plan",
      "Unilevel compensation software",
      "Cloud MLM Software",
      "Direct selling automation",
      "Network marketing analytics"
    ],
    alternates: {
      canonical: buildLocalizedPath("/mlm-plan/unilevel-mlm-plan", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type UnilevelPlanPageProps = {
  params: { lang: SupportedLocale };
};

export default function UnilevelPlanPage({ params }: UnilevelPlanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/unilevel-mlm-plan-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_78%_25%,rgba(59,130,246,0.22),transparent_60%),radial-gradient(circle_at_35%_85%,rgba(236,72,153,0.12),transparent_65%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)] lg:items-stretch">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
              Unilevel plan deep dive
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Build a high-performing unilevel MLM plan backed by data, automation, and compliance.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/80">
              Cloud MLM Software eliminates guesswork. Manage unlimited-width organisations, automate depth payouts, and give leaders the analytics they need to support every leg.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Talk to a unilevel strategist
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={demoHref}>
                  Launch guided demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 dark:border-white/40 dark:text-white dark:hover:bg-white/10">
                <Link href="/mlm-calculator" target="_blank" rel="noopener">
                  Download ROI calculator
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
          <div className="space-y-6">
            <UnilevelGrowthSimulator className="h-full rounded-[32px] border border-border/60 bg-background/85 shadow-2xl" />
            <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground">Unilevel at a glance</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                  <span>Unlimited first-level recruits, depth payouts controlled by policy templates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                  <span>Predictive analytics for volume, retention, and incentive modelling across markets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                  <span>Compliance guardrails keep regulators, banking partners, and distributors aligned.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Why modern brands choose Cloud MLM Software for unilevel plans
          </h2>
          <p className="text-sm text-muted-foreground">
            A unilevel plan succeeds when width, depth, and compliance stay in sync. These platform capabilities make it happen.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {item.bullets.map((bullet) => (
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

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Playbooks that keep unilevel organisations thriving
          </h2>
          <p className="text-sm text-muted-foreground">
            Deploy proven strategies—each backed by automation, analytics, and enablement content.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {STRATEGIC_PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                <p className="text-sm text-muted-foreground">{play.summary}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {play.bullets.map((bullet) => (
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

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Unilevel success stories
            </h2>
            <p className="text-sm text-muted-foreground">
              Real brands using Cloud MLM Software to modernise their unilevel compensation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {USE_CASES.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <article
                  key={useCase.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm"
                >
                  <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <header>
                    <h3 className="text-lg font-semibold text-foreground">{useCase.title}</h3>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{useCase.metric}</p>
                    <p className="text-2xl font-semibold text-foreground">{useCase.lift}</p>
                  </header>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Leader and member journeys mapped in detail
          </h2>
          <p className="text-sm text-muted-foreground">
            Every stage is orchestrated—recruiting, coaching, and scaling stay aligned with business strategy.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {JOURNEY.map((stage) => {
            const Icon = stage.icon;
            return (
              <article
                key={stage.stage}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{stage.stage}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{stage.description}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Focus</p>
                  <p className="text-sm text-muted-foreground">{stage.focus}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Implementation roadmap and enablement plan
          </h2>
          <p className="text-sm text-muted-foreground">
            Move from blueprint to optimisation with a proven plan backed by Cloud MLM Software specialists.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {ROADMAP.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.phase}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{step.phase}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.timeline}</p>
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
            Frequently asked questions
          </h2>
          <p className="text-sm text-muted-foreground">
            The answers decision-makers, compliance teams, and field leaders need when evaluating unilevel software.
          </p>
        </div>
        <div className="grid gap-4">
          {FAQS.map((faq) => (
            <article
              key={faq.question}
              className="flex flex-col gap-2 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm"
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

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Essential unilevel resources
          </h2>
          <p className="text-sm text-muted-foreground">
            Dive deeper—each resource is curated for strategists, operators, and executive sponsors.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {RESOURCE_LINKS.map((resource) => (
            <article
              key={resource.title}
              className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold text-foreground">{resource.title}</h3>
              <p className="text-sm text-muted-foreground">{resource.description}</p>
              <Button asChild size="sm" variant="outline" className="mt-auto border-primary/40 text-primary hover:bg-primary/10">
                <Link href={resource.href} target="_blank" rel="noopener">
                  View resource
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-gradient-to-br from-primary/10 via-background to-background py-20 dark:from-primary/10">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              How Cloud MLM Software accelerates unilevel growth
            </h2>
            <p className="text-sm text-muted-foreground">
              Partner with Cloud MLM Software to launch a compliant, insight-driven unilevel plan that keeps the field motivated and finance confident.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Automation from enrollment to payout means fewer spreadsheets and faster insights.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Compliance tooling keeps every jurisdiction comfortable and audit-ready.</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Enablement hubs support leaders with real-time data, scripts, and recognition programs.</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Schedule a blueprint workshop
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={pricingHref}>
                  Review pricing options
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={demoHref}>
                  Start interactive demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-foreground">Launch readiness highlights</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Audit-ready commission history with level-by-level documentation.</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart3 className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Dashboards for executives, finance, and field teams to track health in real time.</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Enablement programs that keep promoters engaged, trained, and celebrated.</span>
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
