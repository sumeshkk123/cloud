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
  BadgeCheck,
  BarChart4,
  Coins,
  Layers,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import {
  ChatText,
  CirclesThreePlus,
  Gauge,
  Lightning,
  PaperPlaneTilt,
  Planet,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  delta: string;
  icon: IconType;
};

type Layer = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Package = {
  label: string;
  price: string;
  description: string;
  suits: string;
  inclusions: string[];
  icon: IconType;
};

type RoadmapPhase = {
  title: string;
  duration: string;
  description: string;
  checklist: string[];
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
    label: "Average go-live",
    value: "45 days",
    delta: "Launch-ready portal with core automations",
    icon: Lightning
  },
  {
    label: "Implementation CSAT",
    value: "96%",
    delta: "Leader and field satisfaction with onboarding",
    icon: BadgeCheck
  },
  {
    label: "Markets launched",
    value: "28+",
    delta: "Cloud MLM Software Basic deployed globally",
    icon: Planet
  },
  {
    label: "Adoption uplift",
    value: "31%",
    delta: "Distributor productivity within first quarter",
    icon: BarChart4
  }
];

const LAYERS: Layer[] = [
  {
    title: "Engagement-ready experience",
    description:
      "Deliver a polished portal with the fundamentals distributors expect from a modern direct selling brand.",
    bullets: [
      "Responsive onboarding experience for desktop and mobile",
      "Product catalogue with dynamic pricing and inventory visibility",
      "Announcement widgets and personalised dashboards"
    ],
    icon: UsersThree
  },
  {
    title: "Sales operations foundation",
    description:
      "Automate payments, commissions, and support flows so small teams can operate with enterprise discipline.",
    bullets: [
      "Core commission engine with fast-start and rank rules",
      "Wallet, payouts, and tax documentation automation",
      "Ticketing integration to handle distributor support"
    ],
    icon: Workflow
  },
  {
    title: "Governance and visibility",
    description:
      "Gain clarity on performance with executive scorecards, compliance guardrails, and structured data pipelines.",
    bullets: [
      "Leadership dashboards with KPI tracking",
      "Audit-ready change logs and permissioning",
      "Data connectors for analytics and CRM ecosystems"
    ],
    icon: ShieldCheck
  }
];

const PACKAGES: Package[] = [
  {
    label: "Starter Blueprint",
    price: "$18k one-time",
    description: "Ideal for pre-launch teams preparing to enrol first distributors in one to two markets.",
    suits: "Growth-focused direct selling founders",
    inclusions: [
      "Portal branding and UX tailored to storyline",
      "Single compensation plan configuration with validation",
      "Launch playbook with training and support assets"
    ],
    icon: PaperPlaneTilt
  },
  {
    label: "Scaling Suite",
    price: "$26k one-time",
    description: "Best for brands expanding into additional regions with hybrid product lines.",
    suits: "Regional expansion leaders",
    inclusions: [
      "Multi-market pricing and tax scenarios",
      "Automated onboarding journeys and nurture campaigns",
      "Data warehouse extracts with KPI guardrails"
    ],
    icon: CirclesThreePlus
  },
  {
    label: "Assurance Plus",
    price: "Custom engagement",
    description: "For enterprises seeking deeper integrations, governance, and AI-ready operations.",
    suits: "Transformation and compliance teams",
    inclusions: [
      "ERP, CRM, and payment gateway orchestration",
      "Regulatory modelling with legal-ready artefacts",
      "Quarterly optimisation and innovation workshops"
    ],
    icon: Gauge
  }
];

const ROADMAP: RoadmapPhase[] = [
  {
    title: "Plan alignment",
    duration: "Weeks 1-2",
    description: "Blueprinting workshops capture compensation, operations, and brand direction.",
    checklist: [
      "Readiness assessment & KPI baselines",
      "Solution architecture with risk register",
      "Project plan with approvals and guardrails"
    ],
    icon: Layers
  },
  {
    title: "Configuration & integration",
    duration: "Weeks 3-5",
    description: "System configuration, data preparation, and integration mapping executed in lockstep.",
    checklist: [
      "Compensation modelling and scenario validation",
      "Branding, content, and product catalogue build",
      "Payments, tax, and communication setup"
    ],
    icon: Coins
  },
  {
    title: "Enablement & optimisation",
    duration: "Weeks 6-7",
    description: "Training, launch rehearsals, and launch-day monitoring put teams in control.",
    checklist: [
      "Leader and field playbooks delivered",
      "Hypercare dashboards and escalation routines",
      "Optimisation backlog with revenue experiments"
    ],
    icon: ChatText
  }
];

const INSIGHTS: Insight[] = [
  {
    title: "Gross margin protection",
    value: "12%",
    description: "Typical improvement after realigning Fast Start incentives with forecast accuracy."
  },
  {
    title: "Launch efficiency",
    value: "3x",
    description: "Time saved by founders when onboarding journeys and support automation go live together."
  },
  {
    title: "Support deflection",
    value: "47%",
    description: "Reduction in tier-one tickets when knowledge and automation assets launch in tandem."
  }
];

const FAQS: Faq[] = [
  {
    question: "What defines the Cloud MLM Software Basic package?",
    answer:
      "It delivers a branded distributor and customer experience, core commission logic, and essential integrations in a single fixed-fee implementation. The focus is speed-to-launch with enterprise-grade guardrails."
  },
  {
    question: "Can we upgrade from Basic to more advanced plans later?",
    answer:
      "Absolutely. The Basic blueprint uses the same architecture as our enterprise deployments, so you can add modules, markets, or data extensions without re-platforming."
  },
  {
    question: "How do we prepare before kickoff?",
    answer:
      "We recommend aligning leadership on compensation priorities, gathering product and pricing data, and nominating stakeholders from marketing, finance, and operations to accelerate approvals."
  },
  {
    question: "What ongoing support is included?",
    answer:
      "Six months of concierge assistance covers optimisation, enhancements, and advisory. You can later extend support with managed services or internal training packages."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Cloud MLM Software Basic Pricing & Implementation";
  const description =
    "Understand Cloud MLM Software Basic pricing, roadmap, and deliverables. Launch a modern MLM platform with core automations, compliance, and analytics.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/pricing/cloud-mlm-software-basic", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type CloudMlmSoftwareBasicPageProps = {
  params: { lang: SupportedLocale };
};

export default function CloudMlmSoftwareBasicPage({ params }: CloudMlmSoftwareBasicPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950">
        <div className="absolute -left-20 top-12 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-900/40" aria-hidden />
        <div className="absolute -right-16 bottom-0 h-72 w-72 translate-y-1/3 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-900/40" aria-hidden />

        <div className="container relative grid gap-12 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.55fr)]">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-primary/40 dark:bg-primary/15">
              Launch-ready direct selling platform
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Cloud MLM Software Basic pricing and roadmap.
            </h1>
            <p className="text-base text-muted-foreground sm:text-lg">
              Build trust with distributors and customers using a polished, automation-ready MLM platform. We combine strategy, configuration, and enablement into one fixed-fee engagement so your leadership team can focus on growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Talk to an advisor
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  Explore live demo
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
                  <p className="text-sm text-muted-foreground">{metric.delta}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What’s inside the Basic blueprint</h2>
          <p className="text-sm text-muted-foreground">
            Each layer is built on decades of direct selling experience. We make sure the essentials are production-ready from day one—no patchwork integrations or manual workarounds required.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {LAYERS.map((layer) => {
            const Icon = layer.icon;
            return (
              <article key={layer.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:bg-slate-950/70">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{layer.title}</h3>
                  <p className="text-sm text-muted-foreground">{layer.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {layer.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
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
        <div className="container space-y-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.65fr)]">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Choose the package that fits your launch stage</h2>
              <p className="text-sm text-muted-foreground">
                Cloud MLM Software Basic adapts to where you are in your journey. Whether you are validating a model or scaling into new markets, each package combines strategy, technology, and enablement.
              </p>
              <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-sky-50 p-6 shadow-sm dark:border-primary/40 dark:from-primary/15 dark:via-slate-950 dark:to-sky-950/60">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-1 h-5 w-5 text-primary" aria-hidden />
                  <p className="text-sm text-muted-foreground">
                    Unsure which tier fits? Our advisors model compensation, financial projections, and operational readiness before you commit.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {PACKAGES.map((pkg) => {
                const Icon = pkg.icon;
                return (
                  <article key={pkg.label} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <span className="text-sm font-semibold text-primary">{pkg.price}</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{pkg.label}</h3>
                      <p className="text-sm text-muted-foreground">{pkg.description}</p>
                    </div>
                    <div className="rounded-2xl border border-border/50 bg-muted/30 p-3 text-xs font-medium uppercase tracking-wide text-primary/80 dark:bg-slate-900/60">
                      {pkg.suits}
                    </div>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {pkg.inclusions.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <ArrowUpRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="outline">
                      <Link href={contactHref}>
                        Discuss package
                        <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                      </Link>
                    </Button>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Implementation roadmap</h2>
          <p className="text-sm text-muted-foreground">
            Structured delivery keeps momentum high. We balance rapid configuration with rigorous validation so your teams can launch confidently.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.7fr)]">
          <div className="space-y-5 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
            <h3 className="text-lg font-semibold text-foreground">Executive view of outcomes</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ArrowUpRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                <span>Unified data model across enrolment, orders, payouts, and compliance.</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowUpRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                <span>Field-ready enablement including onboarding, playbooks, and support workflows.</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowUpRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                <span>Operational guardrails with audit trails, alerts, and hypercare command center.</span>
              </li>
            </ul>
          </div>

          <ol className="relative space-y-10 border-l border-dashed border-border/60 pl-8">
            {ROADMAP.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <li key={phase.title} className="relative">
                  <div className="absolute -left-[43px] flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-background text-primary shadow-sm dark:bg-slate-950">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm dark:bg-slate-950/70">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold text-foreground">{phase.title}</h3>
                      <span className="text-xs font-medium uppercase tracking-wide text-primary/70">{phase.duration}</span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{phase.description}</p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {phase.checklist.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <ArrowUpRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="mt-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary/90">
                      Phase {index + 1}
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/40 py-20 dark:bg-slate-950/60">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.7fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Impact benchmarks</h2>
            <p className="text-sm text-muted-foreground">
              Organisations use these signals to measure the success of their Basic deployment and to justify scale-up roadmaps.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {INSIGHTS.map((insight) => (
              <article key={insight.title} className="rounded-3xl border border-border/60 bg-background p-6 text-center shadow-sm dark:bg-slate-950/70">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-primary/70">{insight.title}</h3>
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
          <p className="text-sm text-muted-foreground">
            These answers help leadership teams align on readiness, involvement, and investment before kick-off.
          </p>
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
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/15 via-background to-emerald-50 p-10 shadow-sm dark:border-primary/50 dark:from-primary/20 dark:via-slate-950 dark:to-emerald-950/40">
          <div className="absolute -left-10 top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl dark:bg-primary/20" aria-hidden />
          <div className="absolute bottom-0 right-0 h-48 w-48 translate-y-1/3 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.45fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to launch with confidence?</h2>
              <p className="text-sm text-muted-foreground">
                Schedule a pricing consultation to map your go-live timeline, resource plan, and investment model tailored to Cloud MLM Software Basic.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-3xl border border-primary/40 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-slate-950/70">
              <p className="text-sm text-muted-foreground">
                Expect a follow-up agenda within one business day. We help you align stakeholders, estimate ROI, and de-risk implementation.
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
                    View product tour
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
