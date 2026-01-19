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
  BarChart3,
  CircuitBoard,
  Compass,
  Database,
  Headset,
  LineChart,
  Package,
  ShieldCheck,
  Workflow
} from "lucide-react";
import {
  Devices,
  Handshake,
  PlugsConnected,
  RocketLaunch
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  value: string;
  label: string;
  detail: string;
};

type ValueStream = {
  title: string;
  description: string;
  focus: string;
  icon: IconType;
};

type IntegrationTier = {
  stage: string;
  title: string;
  summary: string;
  icon: IconType;
  outcomes: string[];
};

type OperationsPlay = {
  title: string;
  description: string;
  icon: IconType;
  signals: string[];
};

type ConnectorCategory = {
  title: string;
  icon: IconType;
  capabilities: string[];
};

const HERO_METRICS: HeroMetric[] = [
  {
    value: "45+",
    label: "Magento data touchpoints",
    detail: "Catalog rules, price tiers, customer groups, and inventory feeds sync into Cloud MLM in real time."
  },
  {
    value: "<60s",
    label: "Average order sync latency",
    detail: "Orders, invoices, returns, and fulfilment statuses surface inside your dashboards within a minute."
  },
  {
    value: "99.9%",
    label: "Commerce API uptime target",
    detail: "Monitored connectors with retries and alerting keep cross-channel experiences reliable."
  }
];

const VALUE_STREAMS: ValueStream[] = [
  {
    title: "Commerce intelligence for the field",
    description:
      "Empower distributors with accurate pricing, promotions, and availability sourced directly from Magento storefronts without manual exports.",
    focus: "Align Magento storefronts and Cloud MLM journeys.",
    icon: BarChart3
  },
  {
    title: "Unified customer operations",
    description:
      "Merge customer profiles, addresses, and purchase history so support teams and back-office analysts operate from one reliable record of truth.",
    focus: "Fewer escalations, faster resolutions.",
    icon: Handshake
  },
  {
    title: "Secure, extensible integration",
    description:
      "Extend Magento APIs through governed Cloud MLM connectors with audit trails, granular permissions, and regional data residency controls.",
    focus: "Compliance and innovation in balance.",
    icon: ShieldCheck
  }
];

const INTEGRATION_TIERS: IntegrationTier[] = [
  {
    stage: "01",
    title: "Discovery & architecture map",
    summary:
      "We unpack your Magento modules, custom extensions, and MLM workflows to define the integration surface and success metrics.",
    icon: Compass,
    outcomes: [
      "Commerce and MLM system blueprint",
      "Prioritised API catalogue",
      "Integration risk and dependency register"
    ]
  },
  {
    stage: "02",
    title: "API harmonisation",
    summary:
      "Magento REST and SOAP endpoints are normalised, secured, and versioned for high-volume automation across regions.",
    icon: PlugsConnected,
    outcomes: [
      "Authentication and throttling strategy",
      "Data model alignment for products, customers, and orders",
      "Error handling and retry policies"
    ]
  },
  {
    stage: "03",
    title: "Commerce orchestration",
    summary:
      "Event-driven services keep orders, payouts, and inventory aligned while surfacing insight cards inside Cloud MLM dashboards.",
    icon: Workflow,
    outcomes: [
      "Event bus wiring with observability",
      "Operational dashboards for sync health",
      "Automation playbooks for fulfilment partners"
    ]
  },
  {
    stage: "04",
    title: "Growth optimisation",
    summary:
      "We iterate with your team on conversion levers—advanced promotions, upsell logic, and market expansion powered by Magento data.",
    icon: LineChart,
    outcomes: [
      "Expansion roadmap by market",
      "Continuous testing and analytics cadence",
      "Rollout kit for field enablement"
    ]
  }
];

const OPERATIONS_PLAYS: OperationsPlay[] = [
  {
    title: "Intelligent order distribution",
    description:
      "Automatically route orders to warehouses, drop-ship partners, or pickup counters based on Magento rules and distributor priorities.",
    icon: Package,
    signals: [
      "Smart allocations reduce split shipments",
      "Inventory buffers protect fast movers",
      "Logistics partners receive API-native updates"
    ]
  },
  {
    title: "Customer advocacy at scale",
    description:
      "Consolidated profiles merge tickets, purchase history, and loyalty signals so support teams deliver proactive, high-touch experiences.",
    icon: Headset,
    signals: [
      "360° context plugged into every ticket",
      "Automated nurture campaigns for repeat buyers",
      "Service-level alerts when orders stall"
    ]
  },
  {
    title: "Commerce governance & trust",
    description:
      "Role-based access, encryption, and continuous monitoring ensure compliance for finance, legal, and country leaders.",
    icon: ShieldCheck,
    signals: [
      "Approval trails for catalog and pricing updates",
      "Immutable audit logs accessible per region",
      "Alerting tied to security operations centres"
    ]
  }
];

const CONNECTOR_MATRIX: ConnectorCategory[] = [
  {
    title: "Commerce data backbone",
    icon: Database,
    capabilities: [
      "Products, variants, and bundles synchronised with multilingual metadata",
      "Inventory buffers with per-location thresholds",
      "Promotions and catalog rules surfaced to field teams"
    ]
  },
  {
    title: "Experience orchestration",
    icon: Devices,
    capabilities: [
      "Responsive storefront widgets embedded in distributor portals",
      "Contextual cross-sell prompts within back-office workflows",
      "Mobile-ready product stories matched to enrolment stages"
    ]
  },
  {
    title: "Revenue intelligence",
    icon: BarChart3,
    capabilities: [
      "Contribution margin dashboards across ecommerce and MLM",
      "Tax, compliance, and settlement automation",
      "Predictive insights on product adoption curves"
    ]
  }
];

const FEATURE_BADGES: string[] = [
  "Highly Extensible",
  "In-built E-Wallet",
  "Multilingual Translational System",
  "Multi Currency System",
  "Support Ticket System Module",
  "SMS Integration (International/National)",
  "White Label MLM Software",
  "Mobile Friendly & Super Responsive",
  "Improved Page Speed",
  "Dynamic Compression System",
  "Backend Caching Technology",
  "Web Based Management from Anywhere",
  "Flexible Platform Integrations",
  "Secure Authentication System",
  "Strong Backup System",
  "Payment Gateway Automation",
  "Replicating Website",
  "LCP Pages Management"
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Magento Integration with API for MLM Commerce";
  const description =
    "Modernise Magento integration with Cloud MLM Software. Synchronise products, orders, and customer journeys with secure APIs built for global MLM operations.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/magento-integration-with-api", locale)
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
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const featuresHref = buildLocalizedPath("/features", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 text-slate-100">
        <div
          className="absolute inset-0 -z-10 opacity-80"
          style={{
            backgroundImage:
              "radial-gradient(circle at 0% 0%, rgba(56,189,248,0.25), transparent 55%), radial-gradient(circle at 80% 20%, rgba(99,102,241,0.35), transparent 60%), radial-gradient(circle at 20% 80%, rgba(14,165,233,0.25), transparent 58%)"
          }}
          aria-hidden
        />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/50 bg-sky-400/10 px-4 py-1 text-sm font-semibold text-sky-100">
              <CircuitBoard className="h-4 w-4" aria-hidden />
              Magento Integration with API
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Magento integration with API engineered for enterprise MLM commerce.
              </h1>
              <p className="text-base text-slate-200/85">
                Cloud MLM Software orchestrates Magento data, fulfilment, and customer operations so distributors, finance leaders, and service teams act on the same source of truth. No brittle scripts—just resilient APIs with observability baked in.
              </p>
              <p className="text-sm text-slate-200/70">
                Launch in focused sprints: discovery, harmonisation, orchestration, and optimisation. Each phase is led by our senior integration architects with playbooks tailored to your markets.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Schedule an integration workshop
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-sky-200/60 bg-transparent text-sky-100 hover:bg-sky-400/10"
              >
                <Link href={demoHref}>
                  Explore the live product experience
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 shadow-xl backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-200/70">Integration scorecard</p>
            {HERO_METRICS.map((metric) => (
              <article key={metric.label} className="rounded-2xl border border-white/20 bg-black/30 p-5">
                <p className="text-3xl font-semibold text-sky-100">{metric.value}</p>
                <p className="mt-1 text-sm font-semibold text-slate-100">{metric.label}</p>
                <p className="mt-2 text-xs text-slate-300/75">{metric.detail}</p>
              </article>
            ))}
            <p className="text-xs text-slate-200/70">
              Numbers shown reflect typical Magento engagements backed by dedicated Cloud MLM monitoring teams.
            </p>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Why market leaders trust our Magento integration practice
          </h2>
          <p className="text-sm text-muted-foreground">
            Drawn from the legacy WordPress content and expanded for today’s omni-channel expectations—these value streams show how Cloud MLM Software keeps ecommerce and network marketing in lockstep.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {VALUE_STREAMS.map((stream) => {
            const Icon = stream.icon;
            return (
              <article
                key={stream.title}
                className="flex h-full flex-col justify-between rounded-3xl border border-border/70 bg-gradient-to-br from-background via-background to-primary/5 p-8 shadow-sm"
              >
                <div className="space-y-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{stream.title}</h3>
                    <p className="text-sm text-muted-foreground">{stream.description}</p>
                  </div>
                </div>
                <p className="mt-6 text-xs font-medium uppercase tracking-[0.25em] text-primary/80">
                  {stream.focus}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative border-y border-border/70 bg-muted/40 py-20 dark:bg-slate-950/75">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
              <RocketLaunch className="h-4 w-4" aria-hidden />
              Delivery blueprint
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Four-phase integration blueprint designed for momentum
            </h2>
            <p className="text-sm text-muted-foreground">
              Each phase is outcome-driven, timeboxed, and supported by integration accelerators that keep your team shipping value while we harden the commerce backbone.
            </p>
            <div className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <p className="text-sm font-semibold text-foreground">Key deliverables</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span aria-hidden>•</span>
                  Rolling status dashboard and executive readouts each sprint.
                </li>
                <li className="flex gap-2">
                  <span aria-hidden>•</span>
                  Shared knowledge base covering API contracts, security, and testing playbooks.
                </li>
                <li className="flex gap-2">
                  <span aria-hidden>•</span>
                  Hand-off enablement for internal teams to own enhancements.</li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border/60 to-primary/40" aria-hidden />
            <div className="space-y-8">
              {INTEGRATION_TIERS.map((tier) => {
                const Icon = tier.icon;
                return (
                  <article
                    key={tier.stage}
                    className="group relative rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm transition hover:border-primary/50 hover:shadow-lg"
                  >
                    <div className="absolute -left-9 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-background text-sm font-semibold text-primary">
                      {tier.stage}
                    </div>
                    <div className="flex items-center gap-3 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                      <h3 className="text-base font-semibold text-foreground">{tier.title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{tier.summary}</p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {tier.outcomes.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-primary" aria-hidden>●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Operational plays that keep Magento and MLM in sync every day
            </h2>
            <p className="text-sm text-muted-foreground">
              These execution plays translate technical integration into measurable outcomes—from distribution speed to customer loyalty and governance.
            </p>
          </div>
          <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 text-sm text-muted-foreground shadow-sm dark:bg-primary/10">
            <p>
              Our integration nerve centre monitors queue depth, API health, and business KPIs round-the-clock. When signals drift, automation steps in before distributors notice.
            </p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {OPERATIONS_PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.title}
                className="flex h-full flex-col justify-between rounded-3xl border border-border/70 bg-gradient-to-br from-background via-background to-secondary/10 p-8 shadow-sm"
              >
                <div className="space-y-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary/20 text-secondary-foreground">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                    <p className="text-sm text-muted-foreground">{play.description}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {play.signals.map((signal) => (
                    <li key={signal} className="flex gap-2">
                      <span aria-hidden>▹</span>
                      <span>{signal}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/70 bg-background py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" aria-hidden />
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Connector matrix built for resilience and future growth
            </h2>
            <p className="text-sm text-muted-foreground">
              Cloud MLM Software unifies Magento APIs with the rest of your stack—analytics, finance, and fulfilment—so every stakeholder sees the same reality.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {CONNECTOR_MATRIX.map((category) => {
              const Icon = category.icon;
              return (
                <article
                  key={category.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-background/90 p-7 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {category.capabilities.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span aria-hidden>–</span>
                        <span>{item}</span>
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
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Magento integration pairs with our broader Cloud MLM feature stack
          </h2>
          <p className="text-sm text-muted-foreground">
            Pair the integration with proven Cloud MLM accelerators—from multilingual experiences to secure payments—so every market launch feels native from day one.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {FEATURE_BADGES.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center rounded-full border border-border/60 bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
            >
              {badge}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <Button asChild variant="secondary" size="lg">
            <Link href={featuresHref}>
              Review the full platform
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-border/70">
            <Link href={pricingHref}>
              Discuss Magento integration pricing
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
