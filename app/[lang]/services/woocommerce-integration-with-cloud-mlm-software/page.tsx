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
  GaugeCircle,
  Infinity,
  Layers,
  LineChart,
  Package,
  ShoppingCart,
  Workflow
} from "lucide-react";
import { PlugsConnected, Storefront } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
};

type Benefit = {
  title: string;
  description: string;
  icon: IconType;
};

type Capability = {
  title: string;
  detail: string;
  bullets: string[];
};

type Step = {
  phase: string;
  description: string;
  milestone: string;
};

const HERO_STATS: Stat[] = [
  { label: "WooCommerce stores powered", value: "95+" },
  { label: "Integration turnaround", value: "4-6 weeks" },
  { label: "Automation coverage", value: "88%" }
];

const INTEGRATION_BENEFITS: Benefit[] = [
  {
    title: "Unified order-to-payout automation",
    description:
      "Every WooCommerce transaction updates your Cloud MLM Software genealogy, wallets, and commissions instantly.",
    icon: Workflow
  },
  {
    title: "Scalable product orchestration",
    description:
      "Sync catalogues, pricing, and inventory in real time across markets and replicated sites without manual rework.",
    icon: Package
  },
  {
    title: "Insight-rich customer journeys",
    description:
      "Tap into consolidated analytics that reveal customer, promoter, and product performance in a single dashboard.",
    icon: LineChart
  }
];

const CAPABILITY_BLOCKS: Capability[] = [
  {
    title: "Experience engineering",
    detail:
      "Craft branded WooCommerce storefronts that map to compensation plans and encourage distributor-led sales.",
    bullets: [
      "Custom themes with performance budgets and accessibility baked in.",
      "Landing pages optimised for promotions, events, and onboarding campaigns.",
      "Seamless single sign-on linking storefronts to distributor portals."
    ]
  },
  {
    title: "Automation fabric",
    detail:
      "API middleware and event-driven services keep WooCommerce, Cloud MLM Software, and third-party systems aligned.",
    bullets: [
      "Order, refund, and subscription events tied to real-time payouts.",
      "Inventory, tax, and shipping integrations tailored to each market.",
      "Compliance monitoring and audit trails covering every transaction."
    ]
  },
  {
    title: "Growth enablement",
    detail:
      "Provide teams with knowledge, insights, and tooling to launch new offers and markets with confidence.",
    bullets: [
      "Analytics dashboards with cohort, LTV, and promotion tracking.",
      "Training resources for marketing, finance, and customer success teams.",
      "Hypercare support and performance tuning post-launch."
    ]
  }
];

const IMPLEMENTATION_STEPS: Step[] = [
  {
    phase: "Blueprint & architecture",
    description:
      "Assess current WooCommerce setup, data flows, and future roadmap to define integration requirements and governance.",
    milestone: "Integration charter & technical specification"
  },
  {
    phase: "Build & configure",
    description:
      "Deploy connectors, map data, and configure automation with a mix of engineering sprints and QA test suites.",
    milestone: "Sandbox validation & security review"
  },
  {
    phase: "Launch & optimise",
    description:
      "Execute staged go-live, monitor performance, and iterate on campaigns and workflows with embedded analysts.",
    milestone: "Go-live runbook & performance dashboard"
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "WooCommerce Integration With Cloud MLM Software | Cloud MLM Software";
  const description =
    "Unify WooCommerce storefronts with Cloud MLM Software. Automate orders, commissions, and analytics while delivering branded experiences for customers and distributors.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/services/woocommerce-integration-with-cloud-mlm-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type WoocommerceIntegrationPageProps = {
  params: { lang: SupportedLocale };
};

export default function WoocommerceIntegrationPage({ params }: WoocommerceIntegrationPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-violet-50 via-white to-emerald-50 px-6 py-20 shadow-sm dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950 sm:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_15%,rgba(139,92,246,0.18),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(16,185,129,0.18),transparent_45%),radial-gradient(circle_at_50%_85%,rgba(59,130,246,0.14),transparent_60%)]" />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              WooCommerce integration experts
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Build a WooCommerce storefront that fuels your MLM growth strategy.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground">
              Cloud MLM Software connects WooCommerce and your compensation engine into one seamless ecosystem. Deliver
              consistent brand experiences, streamline operations, and unlock analytics that move the needle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Start my integration
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={servicesHref}>
                  Explore more services
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="grid gap-4 rounded-3xl border border-border/40 bg-white/80 p-6 shadow-lg dark:bg-slate-950/70">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border/40 bg-muted/40 p-5 text-left dark:border-slate-800 dark:bg-slate-900/70"
              >
                <div className="text-3xl font-semibold text-foreground">{stat.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Why pair WooCommerce with Cloud MLM Software?
          </h2>
          <p className="text-sm text-muted-foreground">
            Integrate two world-class platforms to deliver personalised experiences, reduce manual work, and give leaders
            the visibility they need to scale responsibly.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {INTEGRATION_BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/40 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:bg-slate-950/75"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
          <aside className="space-y-6 rounded-3xl border border-border/40 bg-white/80 p-6 shadow-sm dark:bg-slate-950/75">
            <div className="flex items-center gap-3">
              <Storefront className="h-6 w-6 text-primary" aria-hidden />
              <h2 className="text-xl font-semibold text-foreground">Integration capabilities</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Choose from modular engagement tracks or combine them for an end-to-end programme. Each block is delivered
              by specialists who understand both WooCommerce and the MLM landscape.
            </p>
          </aside>
          <div className="grid gap-6">
            {CAPABILITY_BLOCKS.map((capability) => (
              <article key={capability.title} className="rounded-3xl border border-border/40 bg-white/90 p-8 shadow-sm dark:bg-slate-950/75">
                <div className="flex items-center gap-3">
                  <PlugsConnected className="h-6 w-6 text-primary" aria-hidden />
                  <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{capability.detail}</p>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {capability.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <BadgeCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A delivery cadence you can trust
          </h2>
          <p className="text-sm text-muted-foreground">
            From architecture to adoption, we keep cross-functional teams aligned and projects measurable.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-slate-900 text-white shadow-sm dark:border-slate-800">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.28),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.3),transparent_50%)]" />
          <div className="grid gap-6 p-8 md:grid-cols-3">
            {IMPLEMENTATION_STEPS.map((step) => (
              <article key={step.phase} className="flex flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xl text-white">
                  <Layers className="h-6 w-6" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{step.phase}</h3>
                  <p className="text-sm text-slate-100">{step.description}</p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-200">
                  Milestone: {step.milestone}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Outcomes our customers report
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
            The combination of WooCommerce and Cloud MLM Software delivers measurable impact across revenue, efficiency,
            and customer satisfaction.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-border/40 bg-white/90 p-6 shadow-sm dark:bg-slate-950/75">
            <div className="text-3xl font-semibold text-foreground">+34%</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Increase in average order value through personalised product bundles and upsell automation.
            </p>
          </article>
          <article className="rounded-3xl border border-border/40 bg-white/90 p-6 shadow-sm dark:bg-slate-950/75">
            <div className="text-3xl font-semibold text-foreground">40 hrs</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Manual reconciliation hours saved per week thanks to live payouts and reporting.
            </p>
          </article>
          <article className="rounded-3xl border border-border/40 bg-white/90 p-6 shadow-sm dark:bg-slate-950/75">
            <div className="text-3xl font-semibold text-foreground">98%</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Customer satisfaction during launch windows with proactive support and observability dashboards.
            </p>
          </article>
        </div>
      </section>

      <section className="container overflow-hidden rounded-3xl border border-border/50 bg-white shadow-sm dark:bg-slate-950">
        <div className="grid gap-10 px-6 py-16 sm:px-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Ready to connect WooCommerce with Cloud MLM Software?
            </h2>
            <p className="text-sm text-muted-foreground">
              Partner with our specialists to plan, build, and launch an integration that keeps your business agile and
              compliant.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Talk to integration specialists
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={servicesHref}>
                  Browse more capabilities
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-4 rounded-3xl border border-primary/30 bg-primary/10 p-6 dark:border-primary/40 dark:bg-primary/10">
            <div className="flex items-center gap-3">
              <GaugeCircle className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="text-lg font-semibold text-foreground">Continuous optimisation</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              We continually monitor KPIs, run experiments, and fine-tune automation so your WooCommerce deployment keeps
              outperforming expectations.
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}
