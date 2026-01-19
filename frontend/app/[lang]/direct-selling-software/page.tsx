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
  Bot,
  Globe2,
  Layers,
  MessageSquare,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users2,
  Workflow
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

type Capability = {
  title: string;
  description: string;
  icon: IconType;
  bullets: string[];
};

type WorkflowStep = {
  title: string;
  description: string;
  icon: IconType;
};

type AiUpgrade = {
  year: string;
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_STATS: Stat[] = [
  {
    label: "Direct selling launches",
    value: "320+",
    detail: "Programmes modernised or launched with Cloud MLM Software since 2015.",
    icon: Rocket
  },
  {
    label: "Automation coverage",
    value: "82%",
    detail: "Average reduction in manual tasks across operations and field enablement.",
    icon: Workflow
  },
  {
    label: "Time-to-rollout",
    value: "12 weeks",
    detail: "Typical go-live for direct selling brands adopting our platform.",
    icon: Activity
  },
  {
    label: "Copilot launch",
    value: "2025",
    detail: "AI copilots now brief leadership, success, and field teams every day.",
    icon: Sparkles
  }
];

const BENEFITS: Benefit[] = [
  {
    title: "Field-first engagement",
    description:
      "Equip distributors with mobile tools, recognition, and training that drive momentum in every market.",
    icon: Users2,
    bullets: [
      "Role-aware dashboards with KPIs and guided actions",
      "Gamified recognition and rewards tied to plan metrics",
      "Localized content libraries ready for instant launch"
    ]
  },
  {
    title: "Enterprise governance",
    description:
      "Meet direct selling regulations, privacy rules, and financial controls without slowing growth.",
    icon: ShieldCheck,
    bullets: [
      "Regulatory presets for mature and emerging markets",
      "Audit logs, consent vault, and retention policies",
      "Approval flows for promotions, pricing, and communications"
    ]
  },
  {
    title: "Insight that drives action",
    description:
      "Dashboards and copilots keep leadership, success, and corporate teams aligned on performance.",
    icon: Bot,
    bullets: [
      "Daily briefings highlight wins and risks",
      "Anomaly detection flags churn or inventory challenges",
      "Natural language queries with cited data sources"
    ]
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Compensation & promotions",
    description: "Design and launch plans, incentives, and limited-run offers with confidence.",
    icon: Layers,
    bullets: [
      "Plan studio for binary, hybrid, and custom structures",
      "Real-time margin guardrails before a promotion launches",
      "Segmented offers for leaders, rising ranks, and customers"
    ]
  },
  {
    title: "Commerce & fulfilment",
    description: "Manage DTC, affiliate, and retail orders with connected inventory and logistics.",
    icon: Globe2,
    bullets: [
      "Regional pricing, taxation, and gateway integrations",
      "Inventory forecasting and allocation tied to campaigns",
      "Order orchestration across warehouses and drop-ship partners"
    ]
  },
  {
    title: "Service & retention",
    description: "Deliver consistent service with AI-assisted support and customer journey analytics.",
    icon: MessageSquare,
    bullets: [
      "Unified case management across chat, email, and voice",
      "AI triage and recommended responses",
      "Journey dashboards linking service to retention and NPS"
    ]
  }
];

const WORKFLOW: WorkflowStep[] = [
  {
    title: "Discover",
    description: "Align goals, compliance needs, and integrations with Cloud MLM strategists.",
    icon: Layers
  },
  {
    title: "Design",
    description: "Configure experiences, automations, and data flows ready for pilot markets.",
    icon: Workflow
  },
  {
    title: "Launch",
    description: "Activate markets with enablement, change management, and hypercare support.",
    icon: Globe2
  },
  {
    title: "Optimise",
    description: "Iterate with copilot guidance, experimentation, and quarterly business reviews.",
    icon: Bot
  }
];

const AI_UPGRADES: AiUpgrade[] = [
  {
    year: "2025",
    title: "Copilot-powered direct selling",
    description:
      "Copilots summarise performance, draft communications, and recommend next-best actions across the programme.",
    icon: Sparkles,
    bullets: [
      "Daily alerts for churn, inventory, and incentive anomalies",
      "Drafted messaging for distributors, leaders, and customers",
      "Actionable recommendations linked to CRM and LMS"
    ]
  },
  {
    year: "2024",
    title: "Telemetry foundation",
    description:
      "Experimentation, data pipelines, and governance prepared the platform for AI-native operations.",
    icon: Activity,
    bullets: [
      "Journey testing isolated to pilot cohorts",
      "Real-time dashboards across sales, service, and finance",
      "Quality controls ensure trusted data for automation"
    ]
  }
];

const FAQS: Faq[] = [
  {
    question: "How quickly can we launch?",
    answer:
      "Most direct selling programmes launch in 10–14 weeks depending on integrations, data migration, and change management scope."
  },
  {
    question: "Do you support hybrid retail or affiliate models?",
    answer:
      "Yes. Cloud MLM Software handles DTC, retail, partner, and affiliate channels with shared data and governance."
  },
  {
    question: "How do you handle global compliance?",
    answer:
      "Regulatory presets cover income disclosures, taxation, privacy, and product approvals for major markets."
  },
  {
    question: "What support do we receive post-launch?",
    answer:
      "Dedicated success teams, copilot onboarding, quarterly reviews, and 24/7 support keep your programme evolving."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Direct Selling Software";
  const description =
    "Modernise direct selling with Cloud MLM Software: automation, governance, and AI copilots for distributors and corporate teams.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/direct-selling-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type DirectSellingSoftwarePageProps = {
  params: { lang: SupportedLocale };
};

export default function DirectSellingSoftwarePage({ params }: DirectSellingSoftwarePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";
  const resourcesHref = buildLocalizedPath("/resources", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_18%,rgba(56,189,248,0.18),transparent_45%),radial-gradient(circle_at_88%_-10%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Users2 className="h-4 w-4" aria-hidden />
              Direct selling excellence
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Unite your field, operations, and customers with an AI-ready direct selling platform.
            </h1>
            <p className="text-lg text-muted-foreground">
              Cloud MLM Software modernises every step of the direct selling lifecycle—so you launch faster, stay compliant, and empower every team with data-backed guidance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Request a consultation
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                  Explore platform capabilities
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href={resourcesHref}>
                  Review resources
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <dl className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HERO_STATS.map((stat) => {
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why direct selling brands choose Cloud MLM Software</h2>
          <p className="text-sm text-muted-foreground">
            Deliver inspiring experiences without sacrificing compliance or profitability.
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Capabilities showcased in the demo</h2>
            <p className="text-sm text-muted-foreground">
              Experience compensation, commerce, and service modules built for direct selling organisations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {CAPABILITIES.map((capability) => {
              const Icon = capability.icon;
              return (
                <article key={capability.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {capability.bullets.map((bullet) => (
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
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A workflow proven across enterprise launches</h2>
          <p className="text-sm text-muted-foreground">
            Keep every stakeholder aligned from discovery to optimisation.
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
      </section>

      <section className="border-y border-border/60 bg-background py-20">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">From telemetry to copilot excellence</h2>
            <p className="text-sm text-muted-foreground">
              See how 2024 foundations enabled 2025 AI copilots that keep your programme agile.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {AI_UPGRADES.map((entry) => {
              const Icon = entry.icon;
              return (
                <article key={entry.year} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">{entry.year}</p>
                      <h3 className="text-lg font-semibold text-foreground">{entry.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{entry.description}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {entry.bullets.map((bullet) => (
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
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">
            Quick answers for teams planning their next direct selling milestone.
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to modernise direct selling?</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Schedule a working session with Cloud MLM Software analysts to review objectives, configure a sandbox, and activate AI copilots tailored to your network.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Book a strategy workshop
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                Watch the platform demo
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
