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
  Layers3,
  LineChart,
  Plug,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import { GlobeHemisphereEast, ShoppingCartSimple } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
};

type HeroPoint = {
  title: string;
  description: string;
  icon: IconType;
};

type PlatformCard = {
  title: string;
  description: string;
  icon: IconType;
  bullets: string[];
};

type DeliveryStep = {
  title: string;
  detail: string;
  duration: string;
};

type Upgrade = {
  title: string;
  description: string;
  metric: string;
  icon: IconType;
};

const HERO_STATS: Stat[] = [
  { label: "Commerce systems unified", value: "60+" },
  { label: "Automation coverage achieved", value: "92%" },
  { label: "Markets launched post-integration", value: "45" }
];

const HERO_POINTS: HeroPoint[] = [
  {
    title: "API-first architecture",
    description: "Connect WooCommerce, Shopify, Magento, and custom storefronts without disrupting live orders.",
    icon: Plug
  },
  {
    title: "Code review checklist",
    description: "Structured development playbooks keep integrations fast, secure, and regression-free.",
    icon: ServerCog
  },
  {
    title: "Conversion-centric UX",
    description: "Align customer journeys and distributor incentives with seamless, multi-device storefronts.",
    icon: Sparkles
  }
];

const PLATFORM_CARDS: PlatformCard[] = [
  {
    title: "WooCommerce & WordPress engineering",
    description:
      "Modernise legacy themes, optimise performance, and extend WordPress with Cloud MLM Software APIs.",
    icon: GlobeHemisphereEast,
    bullets: [
      "Custom theme creation that mirrors brand guidelines and direct selling compliance rules.",
      "Checkout, wallet, and rank synchronisation across WordPress plugins and MLM modules.",
      "Structured QA checklist that keeps deployments stable long after launch."
    ]
  },
  {
    title: "Shopify premium integration",
    description:
      "Blend Shopify storefront agility with advanced MLM compensation, inventory, and fulfilment logic.",
    icon: ShoppingCartSimple,
    bullets: [
      "GraphQL and REST connectors for products, promotions, and customer cohorts.",
      "Real-time payout triggers tied to orders, refunds, and subscription renewals.",
      "Device-responsive experiences engineered for mobile-first field teams."
    ]
  },
  {
    title: "Magento & Adobe Commerce extensions",
    description:
      "Bring enterprise-grade catalogue management and B2B tooling into your MLM growth strategy.",
    icon: Layers3,
    bullets: [
      "Module refactoring to keep Magento clean, fast, and upgrade-ready.",
      "Tiered pricing, loyalty, and bundle logic mapped to your compensation plan.",
      "Secure data orchestration between ERP, finance, and customer portals."
    ]
  },
  {
    title: "OpenCart & custom commerce builds",
    description:
      "Use flexible open-source stacks or bespoke platforms while maintaining Cloud MLM Software governance.",
    icon: Workflow,
    bullets: [
      "Template creation from scratch with multilingual and multicurrency support.",
      "API gateways to sync catalogues, automation, and support ticketing in real time.",
      "Post-launch monitoring and support that keeps new markets stable."
    ]
  }
];

const DELIVERY_STEPS: DeliveryStep[] = [
  {
    title: "Discovery & solution mapping",
    detail: "Audit product catalogues, payout rules, and customer journeys to define integration boundaries.",
    duration: "Week 1"
  },
  {
    title: "Architecture & build sprint",
    detail:
      "Configure connectors, middleware, and UI components with automated quality gates and security reviews.",
    duration: "Weeks 2-3"
  },
  {
    title: "Validation & launch readiness",
    detail:
      "Run sandbox-to-live rehearsals, performance benchmarking, and training to align ops, finance, and field teams.",
    duration: "Week 4"
  }
];

const OPERATIONAL_UPGRADES: Upgrade[] = [
  {
    title: "Unified commerce intelligence",
    description:
      "Consolidate order data, payouts, and field analytics so leadership can act on one trusted source of truth.",
    metric: "38% faster executive reporting",
    icon: LineChart
  },
  {
    title: "Revenue-safe automation",
    description: "Prevent fulfilment errors and duplicate incentives with automated reconciliation workflows.",
    metric: "12K+ payouts reconciled weekly",
    icon: ShieldCheck
  },
  {
    title: "Always-on support model",
    description:
      "Embedded specialists provide hypercare, performance tuning, and knowledge transfer long after go-live.",
    metric: "24/5 multilingual support desk",
    icon: ArrowRight
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "E-Commerce Integration Services for MLM Enterprises | Cloud MLM Software";
  const description =
    "Unify Shopify, WooCommerce, Magento, and custom stores with Cloud MLM Software. Deliver secure, automated commerce integrations built for direct selling growth.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/services/e-commerce-integration", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type EcommerceIntegrationPageProps = {
  params: { lang: SupportedLocale };
};

export default function EcommerceIntegrationPage({ params }: EcommerceIntegrationPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const servicesHref = buildLocalizedPath("/services", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-br from-sky-50 via-white to-fuchsia-50 px-6 py-20 shadow-sm dark:from-slate-950 dark:via-slate-950 dark:to-fuchsia-950 sm:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(14,165,233,0.15),transparent_45%),radial-gradient(circle_at_85%_25%,rgba(236,72,153,0.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(12,74,110,0.18),transparent_55%)]" />
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Enterprise commerce integrations
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                E-Commerce Integration Services for MLM market expansion.
              </h1>
              <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300">
                Cloud MLM Software pairs expert engineers with proven integration checklists so your storefronts,
                compensation engine, and back-office automation stay perfectly in sync across every market.
                Streamline operations today while paving the way for new product launches tomorrow.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Plan my integration
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={servicesHref}>
                  Explore other services
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-primary hover:text-primary">
                <Link href={demoHref}>
                  See live demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <dl className="grid gap-6 sm:grid-cols-3">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border/60 bg-white/70 p-4 text-center shadow-sm dark:bg-slate-900/40"
                >
                  <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="space-y-4 rounded-3xl border border-border/50 bg-white/80 p-6 shadow-lg dark:bg-slate-950/70">
            {HERO_POINTS.map((point) => {
              const Icon = point.icon;
              return (
                <article
                  key={point.title}
                  className="flex gap-4 rounded-2xl border border-border/40 bg-muted/40 p-5 dark:border-slate-800 dark:bg-slate-900/70"
                >
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1.5">
                    <h2 className="text-sm font-semibold text-slate-900 dark:text-white">{point.title}</h2>
                    <p className="text-xs text-slate-600 dark:text-slate-300">{point.description}</p>
                  </div>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Commerce ecosystems we integrate and optimise
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            From open-source storefronts to enterprise marketplaces, we engineer integrations that respect your brand,
            compliance posture, and field compensation strategy.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {PLATFORM_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="relative overflow-hidden rounded-3xl border border-border/50 bg-white/70 p-8 shadow-sm transition hover:shadow-lg dark:bg-slate-950/70"
              >
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_55%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.15),transparent_55%)]" />
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{card.title}</h3>
                </div>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{card.description}</p>
                <ul className="mt-6 space-y-3">
                  {card.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <ArrowRight className="mt-1 h-4 w-4 text-primary" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Integration blueprint led by Cloud MLM Software specialists
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Your integration squad blends solution architects, commerce engineers, QA analysts, and support managers.
              The result: a single team accountable for your go-live checklist, documentation, and long-term governance.
            </p>
            <div className="space-y-3 rounded-2xl border border-primary/30 bg-primary/5 p-5 text-sm text-primary dark:border-primary/40 dark:bg-primary/10">
              <p>
                “Our e-commerce integrations are guided by the same standards we apply to Cloud MLM Software’s core
                platform—structured code reviews, airtight documentation, and measurable outcomes for every sprint.”
              </p>
              <span className="font-semibold uppercase tracking-widest">Cloud MLM Software delivery playbook</span>
            </div>
          </div>
          <ol className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {DELIVERY_STEPS.map((step, index) => (
              <li
                key={step.title}
                className="relative flex flex-col gap-4 rounded-3xl border border-border/50 bg-white/70 p-6 shadow-sm dark:bg-slate-950/70"
              >
                <span className="absolute -left-4 -top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-white text-lg font-semibold text-primary shadow-sm dark:bg-slate-950">
                  {index + 1}
                </span>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                    <Workflow className="h-5 w-5 text-primary" aria-hidden />
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{step.detail}</p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  {step.duration}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Operational upgrades that follow every integration launch
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              We stay embedded after go-live to monitor conversion, ensure payouts land on time, and keep support teams
              confident. When you activate a new country or product, your commerce stack is already ready.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {OPERATIONAL_UPGRADES.map((upgrade) => {
                const Icon = upgrade.icon;
                return (
                  <article
                    key={upgrade.title}
                    className="flex h-full flex-col justify-between rounded-3xl border border-border/50 bg-white/80 p-6 shadow-sm dark:bg-slate-950/70"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <h3 className="text-base font-semibold text-slate-900 dark:text-white">{upgrade.title}</h3>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{upgrade.description}</p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                      {upgrade.metric}
                    </span>
                  </article>
                );
              })}
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-primary/30 bg-primary/5 p-8 shadow-sm dark:border-primary/40 dark:bg-primary/10">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Launch faster with confidence</h3>
              <p className="text-sm text-slate-600 dark:text-slate-200">
                Dedicated integration squads, multi-environment testing, and proactive monitoring give your leadership
                the confidence to scale globally. We align with finance, marketing, and support stakeholders so every
                product release feels effortless.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-200">
              <li className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Compliance-ready data handling with encryption, audit logs, and jurisdictional guardrails.</span>
              </li>
              <li className="flex items-start gap-3">
                <LineChart className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Unified analytics dashboards tracking orders, incentives, and customer lifetime value.</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-4 w-4 text-primary" aria-hidden />
                <span>Structured escalation process with named contacts across engineering, QA, and support.</span>
              </li>
            </ul>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 dark:bg-slate-950">
              <Link href={contactHref}>
                Book an integration workshop
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container overflow-hidden rounded-3xl border border-border/50 bg-slate-900 text-white shadow-sm dark:border-slate-800">
        <div className="relative isolate px-6 py-16 sm:px-12">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.35),transparent_60%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.32),transparent_55%)]" />
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to unify your e-commerce and MLM operations?
              </h2>
              <p className="text-sm text-slate-100">
                Let’s design an integration roadmap that keeps your brand, promoters, and customers delighted. We bring
                the technology, governance, and day-two support so you can focus on growth.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="default" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Talk to Cloud MLM Software
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10">
                <Link href={demoHref}>
                  Explore the product demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
