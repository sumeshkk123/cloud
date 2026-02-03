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
  Boxes,
  LineChart,
  LayoutGrid,
  Monitor,
  Scale,
  ShieldCheck
} from "lucide-react";
import {
  ArrowsClockwise,
  Circuitry,
  CloudArrowUp,
  Database,
  PuzzlePiece,
  ShoppingBag,
  Truck
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  title: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Pillar = {
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
  outcomes: string[];
  icon: IconType;
};

type Step = {
  title: string;
  duration: string;
  summary: string;
  deliverables: string[];
  icon: IconType;
};

type Assurance = {
  title: string;
  detail: string;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_METRICS: Metric[] = [
  {
    title: "Integration timeline",
    value: "6-8 weeks",
    detail: "Discovery to production go-live for a single OpenCart storefront.",
    icon: CloudArrowUp
  },
  {
    title: "Automated reconciliation",
    value: "95%",
    detail: "Orders, refunds, and commissions matched without manual effort.",
    icon: Database
  },
  {
    title: "Channel expansion",
    value: "4x",
    detail: "Increase in product launch cadence after integration mandate.",
    icon: ShoppingBag
  },
  {
    title: "Operational escalations",
    value: "-63%",
    detail: "Reduction in finance and support tickets tied to commerce sync.",
    icon: LineChart
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Commerce synchronisation",
    description:
      "We connect catalogues, pricing, and inventory across OpenCart and Cloud MLM Software so teams can launch products in minutes, not days.",
    bullets: [
      "Automated product and variant mapping with version control",
      "Stock and fulfilment status mirrored across warehouses",
      "Promotion, bundle, and kit logic aligned to compensation"
    ],
    icon: Boxes
  },
  {
    title: "Revenue operations",
    description:
      "Orders, payments, and refunds flow through governed pipelines with the reporting clarity finance and compliance expect.",
    bullets: [
      "Real-time order ingestion with error handling dashboards",
      "Tax, shipping, and fee data reconciled for accurate payouts",
      "Audit-ready logs for regulators and enterprise stakeholders"
    ],
    icon: Scale
  },
  {
    title: "Experience orchestration",
    description:
      "Give distributors and customers cohesive experiences with personalisation, automation, and analytics that span both platforms.",
    bullets: [
      "Personalised storefronts aligned to rank, territory, or cohort",
      "Automation triggers for abandoned carts, restocks, and loyalty",
      "Executive scorecards tying commerce signals to compensation KPIs"
    ],
    icon: Monitor
  }
];

const PACKAGES: Package[] = [
  {
    name: "Accelerator",
    price: "$16k fixed",
    description: "Essential integration services for a single OpenCart storefront.",
    bestFor: "Emerging brands launching digital commerce for the first time.",
    outcomes: [
      "Catalog, pricing, and order sync live with monitoring",
      "Commission-ready product taxonomy and tagging",
      "Go-live runbook and support enablement toolkit"
    ],
    icon: Circuitry
  },
  {
    name: "Growth fabric",
    price: "$27k fixed",
    description: "Multi-storefront integration with automation and analytics layers.",
    bestFor: "Organisations expanding into multiple regions or product channels.",
    outcomes: [
      "Localization, tax, and logistics orchestration",
      "Marketing automation hooks for funnels and retention",
      "Finance dashboards with variance and margin tracking"
    ],
    icon: ArrowsClockwise
  },
  {
    name: "Enterprise blueprint",
    price: "Custom engagement",
    description: "Composable services for complex catalogues, marketplaces, and hybrid fulfilment models.",
    bestFor: "Enterprises balancing multiple brands, B2B, or marketplace strategies.",
    outcomes: [
      "Service mesh supporting custom data flows and governance",
      "Advanced warehouse and dropship automation",
      "Joint optimisation office with continuous innovation sprints"
    ],
    icon: PuzzlePiece
  }
];

const STEPS: Step[] = [
  {
    title: "Blueprint & readiness",
    duration: "Week 1",
    summary:
      "Align stakeholders on product, finance, and fulfilment objectives. Document data sources and success metrics to guide build-out.",
    deliverables: [
      "Integration architecture diagram",
      "Risk register with mitigation plan",
      "Project charter and milestone plan"
    ],
    icon: LayoutGrid
  },
  {
    title: "Build & validation",
    duration: "Weeks 2-5",
    summary:
      "Configure connectors, data pipelines, and automation. Run reconciliation and performance tests with operations and finance teams.",
    deliverables: [
      "Automated sync jobs with monitoring",
      "Commission and tax scenario validation",
      "Training for operational stakeholders"
    ],
    icon: Truck
  },
  {
    title: "Launch & optimisation",
    duration: "Weeks 6-8",
    summary:
      "Deploy to production with hypercare, track KPIs, and prioritise enhancements that accelerate adoption and revenue.",
    deliverables: [
      "Command centre dashboards and SLAs",
      "Go-live communications and support scripts",
      "Optimisation backlog with ROI projections"
    ],
    icon: ShieldCheck
  }
];

const ASSURANCES: Assurance[] = [
  {
    title: "Zero-downtime deployment",
    detail: "We cutover integrations without disrupting live storefronts or commission cycles."
  },
  {
    title: "Observability baked in",
    detail: "Dashboards and alerts surface risks before they impact customers or payouts."
  },
  {
    title: "Joint success review",
    detail: "Post-launch analytics session ensures leadership sees the impact clearly."
  }
];

const FAQS: Faq[] = [
  {
    question: "Which OpenCart versions do you support?",
    answer:
      "We support OpenCart 3.x and 4.x, including customised themes and extensions. Integration layers adapt to your hosting environment."
  },
  {
    question: "Can we keep our existing payment and shipping integrations?",
    answer:
      "Yes. We connect to your existing providers while ensuring transaction data is normalised for Cloud MLM Software’s commission engine."
  },
  {
    question: "How are promotions handled?",
    answer:
      "Promotions, bundles, and loyalty programs are mapped to compensation logic so distributors and customers see consistent incentives everywhere."
  },
  {
    question: "What happens if we add another storefront?",
    answer:
      "Packages include documentation and modular services so additional storefronts can be onboarded quickly without rework."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "OpenCart Integration Pricing | Cloud MLM Software";
  const description =
    "Explore pricing, roadmap, and deliverables for OpenCart integration with Cloud MLM Software. Automate catalog, order, and payout workflows with enterprise guardrails.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/pricing/opencart-integration", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type OpencartIntegrationPageProps = {
  params: { lang: SupportedLocale };
};

export default function OpencartIntegrationPage({ params }: OpencartIntegrationPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.24),transparent_45%),radial-gradient(circle_at_80%_25%,rgba(129,140,248,0.18),transparent_50%),linear-gradient(130deg,rgba(15,23,42,1) 15%,rgba(24,24,37,1) 70%)]" aria-hidden />
        <div className="container relative grid gap-16 py-24 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.58fr)]">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-indigo-200">
              OpenCart + Cloud MLM Software, unified
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              OpenCart integration pricing tailored to your omnichannel growth.
            </h1>
            <p className="max-w-xl text-base text-slate-100/80">
              We combine commerce expertise with compensation science so every order, promotion, and payout stays in lockstep. Choose the integration package that matches your roadmap and compliance requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Schedule integration consult
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                <Link href={pricingHref}>
                  Compare pricing catalogue
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {HERO_METRICS.map((metric) => {
              const Icon = metric.icon;
              return (
                <article key={metric.title} className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-indigo-200/80">{metric.title}</p>
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Integration pillars that keep revenue flowing</h2>
          <p className="text-sm text-muted-foreground">
            Each engagement focuses on commerce, operations, and experience excellence. We ensure every order feeds accurate payouts, automation, and analytics.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:bg-slate-950/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {pillar.bullets.map((bullet) => (
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Packages aligned to your scale</h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
              Every package covers strategy, engineering, and enablement. Upgrade as your product catalogue, markets, and automation needs expand.
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
                    {pkg.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <BadgeCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                        <span>{outcome}</span>
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Six to eight week delivery cadence</h2>
          <p className="text-sm text-muted-foreground">
            Our structured approach keeps technology, finance, and customer teams aligned from kickoff to optimisation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary/80">{step.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.summary}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {step.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{deliverable}</span>
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Assurances with every engagement</h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              We eliminate integration guesswork with disciplined processes and transparency.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {ASSURANCES.map((assurance) => (
              <article key={assurance.title} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                <h3 className="text-base font-semibold text-foreground">{assurance.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{assurance.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">Technology, operations, and finance leaders ask these before kickoff.</p>
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
          <div className="absolute bottom-0 right-0 h-48 w-48 translate-y-1/3 rounded-full bg-indigo-200/30 blur-3xl dark:bg-indigo-900/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to connect OpenCart with Cloud MLM Software?</h2>
              <p className="text-sm text-muted-foreground">
                Share your storefront roadmap, integrations, and timelines. We’ll craft a pricing proposal, delivery plan, and success metrics tailored to your growth goals.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/45 dark:bg-slate-950/70">
              <p className="text-sm text-muted-foreground">
                Expect a discovery agenda and stakeholder checklist within one business day. We stay embedded through launch and optimisation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={contactHref}>
                    Schedule consultation
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={pricingHref}>
                    Explore pricing hub
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
