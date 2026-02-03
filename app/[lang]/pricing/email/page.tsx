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
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  LineChart,
  CheckCircle,
  Shield
} from "lucide-react";
import {
  Broadcast,
  ChatsCircle,
  EnvelopeSimple,
  FunnelSimple,
  Lightning,
  Robot,
  SlidersHorizontal,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Feature = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Package = {
  name: string;
  price: string;
  outcomes: string[];
  bestFor: string;
  icon: IconType;
};

type JourneyStage = {
  title: string;
  description: string;
  duration: string;
  icon: IconType;
};

type Insight = {
  title: string;
  value: string;
  description: string;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Messages orchestrated",
    value: "1.8M+/month",
    detail: "Email, SMS, WhatsApp, and in-app notifications across global MLM networks.",
    icon: Broadcast
  },
  {
    label: "Deliverability rate",
    value: "99.1%",
    detail: "Sender reputation and compliance continuously monitored by Cloud MLM Software.",
    icon: Shield
  },
  {
    label: "Engagement uplift",
    value: "37%",
    detail: "Average boost in click-through and activation in the first 60 days.",
    icon: LineChart
  },
  {
    label: "Compliance response time",
    value: "12 hours",
    detail: "With automated alerts and legal review workflows in place.",
    icon: Bell
  }
];

const FEATURES: Feature[] = [
  {
    title: "Audience intelligence",
    description:
      "Segment distributors and customers based on lifecycle triggers, compensation milestones, and behavioural signals.",
    bullets: [
      "Predictive engagement scoring tied to incentives",
      "Consent-aware segmentation across regions",
      "Real-time sync with Cloud MLM Software data models"
    ],
    icon: FunnelSimple
  },
  {
    title: "Content automation",
    description:
      "Dynamic templates and modular blocks make personalisation effortless while keeping compliance front and centre.",
    bullets: [
      "Token-based personalisation with fallbacks",
      "Legal-approved snippets and disclaimers",
      "AI-assisted copy with on-brand guardrails"
    ],
    icon: Robot
  },
  {
    title: "Performance visibility",
    description:
      "Command centre dashboards keep marketing, compliance, and leadership aligned on impact and actions.",
    bullets: [
      "Revenue and retention attribution",
      "Insight feeds for underperforming sequences",
      "Executive snapshots for board reporting"
    ],
    icon: BarChart3
  }
];

const PACKAGES: Package[] = [
  {
    name: "Catalyst",
    price: "$9k fixed",
    outcomes: [
      "Foundational nurture and onboarding series",
      "Deliverability audit with remediation plan",
      "Playbooks for message, design, and frequency"
    ],
    bestFor: "Brands initiating automated communications",
    icon: EnvelopeSimple
  },
  {
    name: "Momentum",
    price: "$17k fixed",
    outcomes: [
      "Multi-channel journeys with behavioural triggers",
      "Analytics workspace with cohort benchmarking",
      "Cross-team workflow automations and approvals"
    ],
    bestFor: "Rapidly scaling field organisations",
    icon: Lightning
  },
  {
    name: "Command Center",
    price: "Custom",
    outcomes: [
      "Global governance, translations, and localisation",
      "Predictive insights using AI-assisted models",
      "Embedded optimisation sprints and A/B testing"
    ],
    bestFor: "Enterprises managing complex portfolios",
    icon: SlidersHorizontal
  }
];

const JOURNEY: JourneyStage[] = [
  {
    title: "Discovery & alignment",
    description: "We map your lifecycle touchpoints, data sources, and compliance requirements.",
    duration: "Week 1",
    icon: UsersThree
  },
  {
    title: "Design & configuration",
    description: "Audience logic, templates, and automations built in collaboration with your teams.",
    duration: "Weeks 2-4",
    icon: ChatsCircle
  },
  {
    title: "Launch & optimisation",
    description: "Pilot launch with analytics instrumentation and rapid iteration support.",
    duration: "Weeks 5-6",
    icon: BarChart3
  }
];

const INSIGHTS: Insight[] = [
  {
    title: "Inactive rep reactivation",
    value: "42%",
    description: "Dormant distributors returning to active status within campaign quarter."
  },
  {
    title: "Cross-sell conversion",
    value: "27%",
    description: "Increase in multi-product orders when nurture journeys go live."
  },
  {
    title: "Support deflection",
    value: "55%",
    description: "Reduction in repetitive tickets thanks to proactive messaging."
  }
];

const FAQS: Faq[] = [
  {
    question: "How does the email pricing model work?",
    answer:
      "Each package is a fixed-fee engagement covering strategy, configuration, and enablement. We can extend into managed optimisation or co-managed operations once the initial programme is live."
  },
  {
    question: "Do you support SMS, WhatsApp, or push notifications?",
    answer:
      "Yes. Cloud MLM Software orchestrates multi-channel journeys. Email is often the anchor, but we align your messaging strategy with SMS, WhatsApp, and in-app channels when needed."
  },
  {
    question: "What data sources are required?",
    answer:
      "We typically connect enrolment, order, commission, and support data. If those systems live outside Cloud MLM Software, we design connectors or imports to keep audiences current."
  },
  {
    question: "How do you ensure legal compliance?",
    answer:
      "Consent management, regional suppression, and legal review workflows are embedded in every build. We align messaging with FTC, GDPR, CASL, and other jurisdictional requirements."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Email Automation Pricing for Cloud MLM Software";
  const description =
    "Review Cloud MLM Software’s email automation pricing, packages, and roadmap. Launch compliant, high-performing communications for distributors and customers.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/pricing/email", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type EmailPricingPageProps = {
  params: { lang: SupportedLocale };
};

export default function EmailPricingPage({ params }: EmailPricingPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-indigo-50 via-white to-amber-50 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-amber-950/40">
        <div className="absolute -left-16 top-10 h-60 w-60 rounded-full bg-indigo-200/50 blur-3xl dark:bg-indigo-900/40" aria-hidden />
        <div className="absolute -right-12 bottom-0 h-72 w-72 translate-y-1/3 rounded-full bg-amber-200/50 blur-3xl dark:bg-amber-900/40" aria-hidden />

        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.6fr)]">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Communications engineered for momentum
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Email automation pricing built for Cloud MLM Software clients.
            </h1>
            <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
              Align brand storytelling, field enablement, and compliance. Our email engagements combine data orchestration, copy strategy, and optimisation so every message compounds growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Request pricing consult
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  View automation demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {HERO_METRICS.map((metric) => {
              const Icon = metric.icon;
              return (
                <article key={metric.label} className="flex flex-col gap-3 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur dark:bg-slate-950/70">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">{metric.label}</p>
                    <p className="mt-1 text-2xl font-semibold text-foreground">{metric.value}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Capabilities that elevate every send</h2>
          <p className="text-sm text-muted-foreground">
            Cloud MLM Software blends marketing automation expertise with compensation science. We design programmes that honour brand voice, convert prospective distributors, and retain customers for the long term.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:bg-slate-950/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-950/40">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Packages designed for your momentum</h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
              Each package bundles strategy, setup, and enablement with clear outcomes. Select the level that aligns with your channel maturity and growth plan.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {PACKAGES.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <article key={pkg.name} className="flex h-full flex-col gap-5 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="text-sm font-semibold text-primary">{pkg.price}</span>
                  </div>
                  <div className="rounded-2xl border border-border/40 bg-muted/40 p-3 text-xs font-semibold uppercase tracking-wide text-primary/80 dark:bg-slate-900/60">
                    {pkg.bestFor}
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {pkg.outcomes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline">
                    <Link href={contactHref}>
                      Discuss this package
                      <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                    </Link>
                  </Button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.7fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Implementation journey</h2>
            <p className="text-sm text-muted-foreground">
              A transparent delivery cadence keeps marketing, compliance, and IT aligned. Every stage concludes with artefacts your teams can validate quickly.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {JOURNEY.map((stage) => {
              const Icon = stage.icon;
              return (
                <article key={stage.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary/80">{stage.duration}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{stage.title}</h3>
                  <p className="text-sm text-muted-foreground">{stage.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/40 py-20 dark:bg-slate-950/50">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Impact benchmarks to watch</h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              These indicators help leadership measure the value of disciplined email automation inside Cloud MLM Software.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {INSIGHTS.map((insight) => (
              <article key={insight.title} className="rounded-3xl border border-border/60 bg-background p-6 text-center shadow-sm dark:bg-slate-950/70">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-primary/80">{insight.title}</h3>
                <p className="mt-3 text-3xl font-semibold text-foreground">{insight.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{insight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">Answers to common questions from marketing, compliance, and operations leaders.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {FAQS.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
              <h3 className="text-base font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/15 via-background to-pink-50 p-10 shadow-sm dark:border-primary/50 dark:from-primary/20 dark:via-slate-950 dark:to-pink-950/40">
          <div className="absolute -left-12 top-8 h-44 w-44 rounded-full bg-primary/15 blur-3xl dark:bg-primary/25" aria-hidden />
          <div className="absolute bottom-0 right-0 h-48 w-48 translate-y-1/3 rounded-full bg-amber-200/30 blur-3xl dark:bg-amber-900/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl	font-semibold tracking-tight text-foreground sm:text-4xl">Let’s architect email that earns attention.</h2>
              <p className="text-sm text-muted-foreground">
                Share your communication priorities and growth targets. We’ll prepare a pricing proposal, timeline, and measurement plan aligned to your field reality.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/45 dark:bg-slate-950/70">
              <p className="text-sm text-muted-foreground">
                Expect a tailored agenda within one business day. We collaborate with your stakeholders to accelerate approvals and deliver measurable outcomes.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={contactHref}>
                    Schedule consultation
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={demoHref}>
                    Explore live demo
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
