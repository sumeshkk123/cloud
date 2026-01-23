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
  ChartLine,
  ChatCenteredText,
  ChatCircle,
  CheckCircle,
  ClipboardText,
  EnvelopeSimple,
  Gauge,
  Gear,
  Robot,
  ShieldCheck,
  Sparkle,
  SquaresFour,
  Target,
  Users,
  Network
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
  detail: string;
};

type Feature = {
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

type UseCase = {
  title: string;
  audience: string;
  outcome: string;
  icon: IconType;
};

type Integration = {
  title: string;
  description: string;
};

type Insight = {
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
    label: "Automated journeys deployed",
    value: "1.4M+",
    detail: "Messages orchestrated monthly through Cloud MLM Software auto responders."
  },
  {
    label: "Average engagement lift",
    value: "42%",
    detail: "Increase in distributor and customer interaction within 90 days of launch."
  },
  {
    label: "Campaign templates",
    value: "85+",
    detail: "Ready-to-go nurture, onboarding, and reactivation sequences for MLM and direct selling teams."
  },
  {
    label: "AI ready data points",
    value: "120+",
    detail: "Structured fields for analytics, compliance, and conversational copilots."
  }
];

const FEATURES: Feature[] = [
  {
    title: "Journey orchestration",
    description:
      "Design multi-channel sequences that blend email, SMS, push, and in-app prompts without code.",
    bullets: [
      "Drag and drop workflow builder",
      "Real-time audience segmentation",
      "Conditional logic with testing and rollback"
    ],
    icon: SquaresFour
  },
  {
    title: "Compliance and deliverability",
    description:
      "Protect your brand with automated consent capture, regional suppression, and detailed audit logs.",
    bullets: [
      "Country-specific opt-in management",
      "Automated bounce and complaint handling",
      "Integrated content review workflows"
    ],
    icon: ShieldCheck
  },
  {
    title: "Actionable analytics",
    description:
      "Give marketing, sales, and customer success teams insight into conversion, retention, and revenue impact.",
    bullets: [
      "Dashboard views for each stakeholder",
      "Attribution to enrolments and repeat orders",
      "Campaign benchmarking across regions"
    ],
    icon: ChartLine
  }
];

const STEPS: Step[] = [
  {
    title: "Align on goals",
    description:
      "Clarify onboarding, activation, and retention objectives while mapping data sources and consent flows.",
    icon: ClipboardText
  },
  {
    title: "Build and simulate",
    description:
      "Configure journeys, content, and triggers, then test timing, volume, and outcomes in a sandbox environment.",
    icon: Gauge
  },
  {
    title: "Launch and optimise",
    description:
      "Publish with governance controls, monitor performance dashboards, and iterate using AI assisted insights.",
    icon: Gear
  }
];

const USE_CASES: UseCase[] = [
  {
    title: "Onboarding acceleration",
    audience: "New distributors",
    outcome: "Boosts day-one activity with guided training, product education, and compliance reminders.",
    icon: EnvelopeSimple
  },
  {
    title: "Dormant reactivation",
    audience: "At-risk distributors",
    outcome: "Deploys targeted offers and support touchpoints to revive teams before churn spreads.",
    icon: ChatCircle
  },
  {
    title: "Customer loyalty",
    audience: "Retail buyers",
    outcome: "Delivers replenishment prompts, personalised bundles, and community-driven updates.",
    icon: Network
  }
];


const INSIGHTS_LEFT: Insight[] = [
  { description: "Optimise onboarding, retention, and loyalty journeys with automated touchpoints." },
  { description: "Balance personalisation with compliance by leveraging consent-aware segmentation." },
  { description: "Measure the revenue, retention, and support impact of every campaign." },
  { description: "Maintain audit-ready documentation of content, approvals, and runbooks." }
];

const INSIGHTS_RIGHT: Insight[] = [
  { description: "Align messaging with marketing, training, and compliance assets." },
  { description: "Share AI assisted recommendations that keep leadership informed." },
  { description: "Benchmark automation experiments across regions and cohorts." },
  { description: "Keep support teams ready with searchable playbooks and quick answers." }
];
const INTEGRATIONS: Integration[] = [
  {
    title: "Communication channels",
    description: "Native email, SMS, push, and WhatsApp connectors plus API support for regional providers."
  },
  {
    title: "CRM and ecommerce",
    description: "Sync contact, order, and event data from Shopify, WooCommerce, Magento, Salesforce, HubSpot, and more."
  },
  {
    title: "Compliance and consent",
    description: "Integrate with consent vaults, GDPR management tools, and regional preference centers."
  },
  {
    title: "Analytics and BI",
    description: "Publish engagement and revenue impact to Power BI, Tableau, or Snowflake for deeper modelling."
  }
];

const AIO_CAPABILITIES: AioCapability[] = [
  {
    title: "AI copy assistance",
    description:
      "Generate and refine content drafts tuned to tone, compliance rules, and trigger-based personalisation.",
    icon: Robot
  },
  {
    title: "Insight summarisation",
    description:
      "Automatically translate campaign performance into ready-to-share briefs for leadership and field teams.",
    icon: Sparkle
  },
  {
    title: "Knowledge base sync",
    description:
      "Push journey details into knowledge hubs so support teams and chatbots deliver accurate answers fast.",
    icon: ChatCenteredText
  }
];

const FAQS: Faq[] = [
  {
    question: "Can the auto responder personalise by market?",
    answer:
      "Yes. Use localisation rules to adapt language, offers, and compliance preferences for each region."
  },
  {
    question: "How does consent management work?",
    answer:
      "Capture opt-in status from enrolment forms, replicate it across channels, and document every update for audits."
  },
  {
    question: "What kind of analytics are available?",
    answer:
      "Access dashboards covering opens, clicks, conversions, order value, and retention by audience segment."
  },
  {
    question: "Can it trigger journeys from external systems?",
    answer:
      "Webhooks and integrations allow external CRMs, support tools, or ecommerce events to launch relevant sequences."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Auto Responder for MLM";
  const description =
    "Automate onboarding, retention, and customer journeys with Cloud MLM Software auto responder platform.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/auto-responder", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AutoResponderPageProps = {
  params: { lang: SupportedLocale };
};

export default function AutoResponderPage({ params }: AutoResponderPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";
  const plansHref = buildLocalizedPath("/mlm-plans", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_16%,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_88%_-6%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6 text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Sparkle className="h-4 w-4" aria-hidden />
              Intelligent nurture at scale
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Automate communication flows that keep distributors and customers engaged.
            </h1>
            <p className="text-lg text-muted-foreground">
              Cloud MLM Software auto responder platform turns manual follow ups into measurable journeys across email, SMS, push, and chat so your teams can focus on relationships.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Request a tailored demo
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
                  Review automation services
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <dl className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-border/60 bg-background p-6 text-center shadow-sm">
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Design journeys that convert</h2>
          <p className="text-sm text-muted-foreground">
            Empower teams with automation that respects compliance, personalisation, and global scalability.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {feature.bullets.map((bullet) => (
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

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A workflow everyone trusts</h2>
          <p className="text-sm text-muted-foreground">
            Clarify process, governance, and iteration so marketing, compliance, and field teams stay aligned.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Use cases proven to drive growth</h2>
            <p className="text-sm text-muted-foreground">
              Deliver targeted journeys for every stage of the distributor and customer lifecycle.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {USE_CASES.map((useCase) => (
              <article key={useCase.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <useCase.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{useCase.title}</h3>
                <p className="text-xs uppercase tracking-wide text-primary">Audience</p>
                <p className="text-sm text-muted-foreground">{useCase.audience}</p>
                <p className="text-xs uppercase tracking-wide text-primary">Outcome</p>
                <p className="text-sm text-muted-foreground">{useCase.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Insights that protect engagement</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Stay ahead with recommendations covering deliverability, conversion, and distributor satisfaction.
            </p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Target className="h-4 w-4" aria-hidden />
              Strategic support
            </span>
            <p className="mt-4 text-sm text-muted-foreground">
              Analysts deliver prioritised actions, testing ideas, and governance checklists so campaigns launch with confidence.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <ul className="space-y-3 text-sm text-muted-foreground">
            {INSIGHTS_LEFT.map((item) => (
              <li key={item.description} className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                {item.description}
              </li>
            ))}
          </ul>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {INSIGHTS_RIGHT.map((item) => (
              <li key={item.description} className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                {item.description}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Artificial Intelligence Optimisation</h2>
            <p className="text-sm text-muted-foreground">
              Make every journey accessible to conversational agents, support teams, and leadership dashboards.
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

      <section className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">
            Get quick answers before you reserve your tailored demo.
          </p>
        </div>
        <div className="grid gap-4">
          {FAQS.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container rounded-3xl border border-border/60 bg-gradient-to-br from-primary/15 via-background to-emerald-200/20 p-10 shadow-sm dark:from-primary/20 dark:to-emerald-500/10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Switch on intelligent communication</h2>
            <p className="text-sm text-muted-foreground">
              Partner with Cloud MLM Software to automate campaigns, boost engagement, and maintain compliance across every market.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 lg:justify-end">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Talk with our specialists
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                Preview the automation demo
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
