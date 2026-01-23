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
  CircuitBoard,
  Cpu,
  Globe,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import {
  ArrowsClockwise,
  GearSix,
  Lightning,
  PuzzlePiece,
  ShoppingBagOpen,
  Stack,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  title: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Connector = {
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

type RoadmapStep = {
  title: string;
  duration: string;
  summary: string;
  dependencies: string[];
  icon: IconType;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_METRICS: Metric[] = [
  {
    title: "Catalog sync velocity",
    value: "15M items/day",
    detail: "Magento → Cloud MLM Software inventory and pricing updates processed without throttling.",
    icon: Lightning
  },
  {
    title: "Implementation CSAT",
    value: "98%",
    detail: "Stakeholders rate launch experience across merchandising, IT, and finance teams.",
    icon: BadgeCheck
  },
  {
    title: "Markets orchestrated",
    value: "33",
    detail: "Global tax, currency, and language models delivered in unified integration blueprints.",
    icon: Globe
  },
  {
    title: "Automation savings",
    value: "420+ hrs/qtr",
    detail: "Manual order reconciliation and commission adjustments eliminated for clients.",
    icon: TrendUp
  }
];

const CONNECTORS: Connector[] = [
  {
    title: "Commerce operations core",
    description:
      "Stabilise orders, fulfilment, and returns with bi-directional data pipelines purpose-built for Magento environments.",
    bullets: [
      "Real-time order ingestion with error handling and retries",
      "Warehouse, shipping, and tax data normalised to MLM rules",
      "Refund and adjustment workflows that respect compensation policies"
    ],
    icon: ShoppingBagOpen
  },
  {
    title: "Experience orchestration",
    description:
      "Keep shoppers, promoters, and finance in sync with personalised content and analytics surfaces across both platforms.",
    bullets: [
      "Unified customer profiles across Magento storefronts and distributor portals",
      "Trigger-based communications for backorders, loyalty rewards, and subscriptions",
      "Dashboards aligning merchandising insights with rank and bonus performance"
    ],
    icon: MonitorSmartphone
  },
  {
    title: "Governance and scale",
    description:
      "Mitigate risk with compliance, observability, and security guardrails that scale with your assortment and geography footprint.",
    bullets: [
      "Audit-ready change logs and deployment workflows",
      "PII and payment token protections aligned to regional standards",
      "Performance monitoring with proactive anomaly detection"
    ],
    icon: ShieldCheck
  }
];

const PACKAGES: Package[] = [
  {
    name: "Launch-ready connector",
    price: "$19k fixed",
    description: "Everything required to synchronise a single Magento storefront with Cloud MLM Software.",
    bestFor: "Brands introducing their first integrated commerce experience.",
    outcomes: [
      "Core catalog, pricing, and order synchronisation live",
      "Commission-ready product taxonomy mapping",
      "Operational runbook and training for support teams"
    ],
    icon: Stack
  },
  {
    name: "Growth accelerator",
    price: "$32k fixed",
    description: "Multi-storefront orchestration with automation, analytics, and compliance layers included.",
    bestFor: "Organisations scaling to new markets or product lines.",
    outcomes: [
      "Localized pricing, tax, and fulfilment automation",
      "Marketing automation hooks and loyalty programme sync",
      "Observability dashboards with SLA-backed alerting"
    ],
    icon: GearSix
  },
  {
    name: "Enterprise fabric",
    price: "Custom engagement",
    description: "Custom architecture for complex catalogues, marketplaces, or hybrid B2B2C models.",
    bestFor: "Enterprises balancing high-volume commerce with intricate compensation structures.",
    outcomes: [
      "Composable integration services with governance controls",
      "Advanced promotion, bundle, and subscription logic",
      "Quarterly innovation sprints and optimisation office"
    ],
    icon: PuzzlePiece
  }
];

const ROADMAP: RoadmapStep[] = [
  {
    title: "Alignment & architecture",
    duration: "Weeks 1-2",
    summary:
      "Discovery workshops covering catalog design, fulfilment, payments, and compensation dependencies. We translate insights into an integration blueprint.",
    dependencies: [
      "Solution architecture & integration map",
      "Security and compliance checklist",
      "Success metrics with baseline reporting"
    ],
    icon: Cpu
  },
  {
    title: "Build & validation",
    duration: "Weeks 3-6",
    summary:
      "Connector configuration, sandbox testing, and data reconciliation. Commerce, finance, and operations stakeholders validate parity.",
    dependencies: [
      "Automated data pipelines with monitoring",
      "Commission + tax scenario stress tests",
      "Go-live playbook with hypercare steps"
    ],
    icon: CircuitBoard
  },
  {
    title: "Launch & optimisation",
    duration: "Weeks 7-8",
    summary:
      "Production rollout with hypercare, analytics instrumentation, and iteration backlog creation to keep teams improving momentum.",
    dependencies: [
      "On-call command centre with response protocols",
      "Executive dashboards for revenue + margin tracking",
      "Roadmap of enhancements and experimentation ideas"
    ],
    icon: Sparkles
  }
];

const FAQS: Faq[] = [
  {
    question: "Do we need to re-platform our Magento instance?",
    answer:
      "No. We integrate with your current Magento version—Adobe Commerce or Open Source—by deploying cloud connectors, middleware, or headless APIs that respect your existing architecture."
  },
  {
    question: "How are promotions and bundles handled?",
    answer:
      "Promotion, bundle, and subscription logic is mapped to Cloud MLM Software’s commission engine. We validate each scenario with finance and operations to ensure payouts remain accurate."
  },
  {
    question: "What about performance and monitoring?",
    answer:
      "Each package includes observability dashboards, alerting thresholds, and runbooks. We track throughput, error rates, and business KPIs so teams can respond before customers notice issues."
  },
  {
    question: "Can we extend connectors after launch?",
    answer:
      "Yes. We deliver modular services and documentation so future storefronts, regions, or product lines can be added quickly. Many clients retain Cloud MLM Software for ongoing optimisation."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Magento Integration Pricing for Cloud MLM Software";
  const description =
    "Align Magento storefronts with Cloud MLM Software. Review pricing packages, roadmap, and deliverables for commerce, automation, and compliance integration.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/pricing/magento-integration", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MagentoIntegrationPageProps = {
  params: { lang: SupportedLocale };
};

export default function MagentoIntegrationPage({ params }: MagentoIntegrationPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(56,189,248,0.18),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.16),transparent_55%),linear-gradient(120deg,rgba(10,21,36,1) 20%,rgba(15,32,55,1) 70%)]" aria-hidden />
        <div className="container relative grid gap-16 py-24 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.58fr)]">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-cyan-200">
              Magento + Cloud MLM Software without friction
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Magento integration pricing that delivers unified commerce and compensation.
            </h1>
            <p className="max-w-xl text-base text-slate-100/80">
              Launch storefront experiences that synchronise with distributor operations, finance, and analytics. Cloud MLM Software packages strategy, integration, and optimisation into one engagement so your teams can scale momentum globally.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Schedule pricing consultation
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                <Link href={demoHref}>
                  Explore commerce demo
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
                    <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200/80">{metric.title}</p>
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Connector capabilities that keep revenue flowing</h2>
          <p className="text-sm text-muted-foreground">
            We translate Magento’s flexibility into operational strength for direct selling brands. From catalog orchestration to compliance-ready automation, every layer is tuned to maximise conversions and protect payouts.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {CONNECTORS.map((connector) => {
            const Icon = connector.icon;
            return (
              <article key={connector.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:bg-slate-950/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{connector.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{connector.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {connector.bullets.map((bullet) => (
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

      <section className="border-y border-border/60 bg-muted/40 py-20 dark:bg-slate-950/50">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Packages that match your integration maturity</h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
              Move from proof-of-concept to enterprise-wide orchestration with clarity. Each tier includes the strategy, engineering, and enablement your teams need to keep pace with market expansion.
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Eight-week integration roadmap</h2>
          <p className="text-sm text-muted-foreground">
            Confidence comes from visibility. Our roadmap keeps leadership, IT, and commerce teams aligned from the first workshop to post-launch optimisation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {ROADMAP.map((step) => {
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
                  {step.dependencies.map((dependency) => (
                    <li key={dependency} className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{dependency}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">Answers for technology, operations, and executive stakeholders preparing for integration.</p>
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
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-background to-cyan-50 p-10 shadow-sm dark:border-primary/50 dark:from-primary/25 dark:via-slate-950 dark:to-cyan-950/40">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="absolute bottom-0 right-0 h-48 w-48 translate-y-1/3 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-900/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to unify Magento and Cloud MLM Software?</h2>
              <p className="text-sm text-muted-foreground">
                Share your architecture, catalog complexity, and launch goals. We’ll craft a pricing proposal, timeline, and measurement plan that keeps leadership aligned.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/45 dark:bg-slate-950/70">
              <p className="text-sm text-muted-foreground">
                Expect a discovery agenda and stakeholder checklist within one business day. We partner with your teams through launch and beyond.
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
