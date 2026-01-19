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
  BadgeCheck,
  Bell,
  ClipboardList,
  Headphones,
  MessagesSquare,
  Radar,
  Users
} from "lucide-react";
import {
  ChartLineUp,
  ClockCountdown,
  GearSix,
  Lightning,
  Robot,
  Stack
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Capability = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Package = {
  name: string;
  price: string;
  description: string;
  bestFor: string;
  deliverables: string[];
  icon: IconType;
};

type Stage = {
  title: string;
  duration: string;
  summary: string;
  outputs: string[];
  icon: IconType;
};

type Insight = {
  title: string;
  detail: string;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Tickets resolved monthly",
    value: "210k+",
    detail: "Support teams operate without losing context or SLA visibility.",
    icon: Headphones
  },
  {
    label: "First response improvement",
    value: "48%",
    detail: "Average reduction in time-to-first-response after rollout.",
    icon: ClockCountdown
  },
  {
    label: "Automated routing accuracy",
    value: "92%",
    detail: "AI-assisted triage places tickets with the right queue instantly.",
    icon: Robot
  },
  {
    label: "Deployment timeline",
    value: "4 weeks",
    detail: "Blueprint, configure, pilot, and launch support module.",
    icon: Lightning
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Omnichannel intake",
    description:
      "Consolidate email, chat, portal, and WhatsApp support requests while maintaining distributor context.",
    bullets: [
      "Unified inbox with Cloud MLM Software customer profile data",
      "Self-service and chatbot deflection with compliance safeguards",
      "Localized knowledge base and macro management"
    ],
    icon: MessagesSquare
  },
  {
    title: "Smart routing & SLAs",
    description:
      "Automate triage, prioritisation, and escalations so high-impact issues receive immediate attention.",
    bullets: [
      "Queue assignment based on topic, language, or distributor tier",
      "Dynamic SLAs tied to rank, region, or campaign",
      "Escalation workflows with notifications and approval loops"
    ],
    icon: Radar
  },
  {
    title: "Analytics and coaching",
    description:
      "Give leaders dashboards linking service performance to retention, revenue, and compliance metrics.",
    bullets: [
      "Agent productivity and satisfaction dashboards",
      "Sentiment and trend analysis for field intelligence",
      "Quality assurance scoring with coaching feedback loops"
    ],
    icon: ChartLineUp
  }
];

const PACKAGES: Package[] = [
  {
    name: "Support ignite",
    price: "$12k fixed",
    description: "Core ticketing infrastructure with automated routing and knowledge base integration.",
    bestFor: "Support teams formalising SLAs and seeking rapid impact.",
    deliverables: [
      "Ticket queues, macros, and automation rules configured",
      "Knowledge base, chatbot, and portal intake enabled",
      "SLA dashboard with real-time notifications"
    ],
    icon: Stack
  },
  {
    name: "Support intelligence",
    price: "$20k fixed",
    description: "AI-assisted triage, coaching analytics, and regionalised experiences.",
    bestFor: "Scaling organisations operating across languages and time zones.",
    deliverables: [
      "AI classification and sentiment analysis",
      "Agent scorecards with coaching workflows",
      "Localization toolkit with translations and templates"
    ],
    icon: GearSix
  },
  {
    name: "Support enterprise",
    price: "Custom engagement",
    description: "Advanced integrations, automation, and optimisation office for global service teams.",
    bestFor: "Enterprises requiring deep CRM, ERP, or telephony integration.",
    deliverables: [
      "Telephony, CRM, and logistics integration suite",
      "WFM, QA, and compliance automation roadmap",
      "Dedicated optimisation squad with experimentation backlog"
    ],
    icon: Bell
  }
];

const STAGES: Stage[] = [
  {
    title: "Discovery & design",
    duration: "Week 1",
    summary: "Map contact channels, processes, and KPIs to shape support architecture.",
    outputs: [
      "Service blueprint and queue taxonomy",
      "SLA and escalation matrix",
      "Enablement plan for agents and leaders"
    ],
    icon: ClipboardList
  },
  {
    title: "Configuration & training",
    duration: "Weeks 2-3",
    summary: "Configure ticketing automation, knowledge base, and analytics. Train pilot teams.",
    outputs: [
      "Automations, templates, and integrations validated",
      "Knowledge base and chatbot content published",
      "Pilot readiness checklist with stakeholder sign-off"
    ],
    icon: Users
  },
  {
    title: "Launch & optimisation",
    duration: "Week 4",
    summary: "Roll out to production, monitor performance, and prioritise continual improvements.",
    outputs: [
      "Hypercare dashboards and alert thresholds",
      "Agent coaching and QA cadence",
      "Optimisation backlog aligned to service KPIs"
    ],
    icon: BadgeCheck
  }
];

const INSIGHTS: Insight[] = [
  {
    title: "Retention impact",
    detail: "Accounts receiving proactive support show 18% lower churn."
  },
  {
    title: "Cost efficiency",
    detail: "Automated triage reduces manual categorisation by 62%."
  },
  {
    title: "Field sentiment",
    detail: "NPS increases by 12 points after knowledge base and automation go live."
  }
];

const FAQS: Faq[] = [
  {
    question: "Can we integrate with our existing help desk?",
    answer:
      "Yes. We can extend Zendesk, Freshdesk, or other platforms with Cloud MLM Software context, or deploy the native module if you prefer full consolidation."
  },
  {
    question: "How do you handle multilingual support?",
    answer:
      "Routing and templates adapt to language and region. We integrate translation workflows and knowledge base localisation."
  },
  {
    question: "Do agents get mobile access?",
    answer:
      "Agents and leaders can manage tickets via responsive portals and mobile apps with push notifications for escalations."
  },
  {
    question: "What reporting is available?",
    answer:
      "Dashboards highlight SLA performance, trend analysis, sentiment, and link support outcomes to retention and revenue metrics."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Support Ticket System Module Pricing | Cloud MLM Software";
  const description =
    "Review pricing, packages, and roadmap for Cloud MLM Software’s support ticket system module. Deliver omnichannel support with automation and analytics.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/pricing/support-ticket-system-module-for-mlm-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type SupportTicketModulePageProps = {
  params: { lang: SupportedLocale };
};

export default function SupportTicketModulePage({ params }: SupportTicketModulePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(129,140,248,0.22),transparent_45%),radial-gradient(circle_at_80%_28%,rgba(59,130,246,0.18),transparent_50%),linear-gradient(140deg,rgba(15,23,42,1) 15%,rgba(30,64,175,0.85) 70%)]" aria-hidden />
        <div className="container relative grid gap-16 py-24 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.58fr)]">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-blue-200">
              Service excellence engineered for MLM
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Support ticket system pricing that elevates every interaction.
            </h1>
            <p className="max-w-xl text-base text-slate-100/80">
              Cloud MLM Software connects distributors, customers, and agents with automation, analytics, and thoughtful UX. Choose the module tier that matches your service ambitions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Book a support strategy call
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                <Link href={servicesHref}>
                  Explore services hub
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {HERO_METRICS.map((metric) => {
              const Icon = metric.icon;
              return (
                <article key={metric.label} className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-200/80">{metric.label}</p>
                    <p className="mt-1 text-2xl font-semibold">{metric.value}</p>
                  </div>
                  <p className="text-sm text-slate-100/70">{metric.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Module capabilities designed for support velocity</h2>
          <p className="text-sm text-muted-foreground">
            Every deployment combines omnichannel intake, automation, and analytics so your teams spend more time solving—not searching for context.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:bg-slate-950/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {capability.bullets.map((bullet) => (
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Packages that scale with your service ambitions</h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
              Start with essentials or jump straight to AI-assisted support. Each package includes strategy, configuration, and enablement assets.
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
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                  </div>
                  <div className="rounded-2xl border border-border/40 bg-muted/40 p-3 text-xs font-semibold uppercase tracking-wide text-primary/80 dark:bg-slate-900/60">
                    {pkg.bestFor}
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {pkg.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-start gap-2">
                        <BadgeCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                        <span>{deliverable}</span>
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
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Four-week launch cadence</h2>
          <p className="text-sm text-muted-foreground">
            Rapid value without sacrificing governance. Stakeholders stay aligned via weekly checkpoints and clear artefacts.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {STAGES.map((stage) => {
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
                <p className="text-sm text-muted-foreground">{stage.summary}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {stage.outputs.map((output) => (
                    <li key={output} className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{output}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/40 py-20 dark:bg-slate-950/50">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Service insights you can act on</h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              The module turns support into a strategic advantage with metrics that tie to retention and revenue.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {INSIGHTS.map((insight) => (
              <article key={insight.title} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                <h3 className="text-base font-semibold text-foreground">{insight.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{insight.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-2xl space_y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">Operations, support, and compliance leaders typically raise these topics.</p>
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
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-background to-indigo-100 p-10 shadow-sm dark:border-primary/50 dark:from-primary/25 dark:via-slate-950 dark:to-indigo-950/40">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="absolute bottom-0 right-0 h-48 w-48 translate-y-1/3 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to transform support into a growth lever?</h2>
              <p className="text-sm text-muted-foreground">
                Share your service goals, channels, and integration needs. We’ll design a pricing proposal and delivery plan tailored to your teams.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/45 dark:bg-slate-950/70">
              <p className="text-sm text-muted-foreground">
                Expect a discovery agenda and support operations checklist within one business day. We stay engaged through launch and continuous improvement.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={contactHref}>
                    Schedule consultation
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={servicesHref}>
                    Explore services hub
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
