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
  Cable,
  Globe,
  PanelsLeftRight,
  PlugZap,
  ServerCog,
  Shield,
  Workflow
} from "lucide-react";
import { ShareNetwork, Stack, Steps } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type IntegrationPillar = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type RolloutPhase = {
  phase: string;
  focus: string;
  outcome: string;
  icon: IconType;
};

type ConnectorCluster = {
  heading: string;
  items: string[];
};

const HERO_METRICS: HeroMetric[] = [
  {
    label: "API endpoints",
    value: "120+",
    description: "Connect storefronts, CRMs, and logistics partners through resilient REST and webhook layers.",
    icon: Workflow
  },
  {
    label: "Deployment freedom",
    value: "Cloud or VPS",
    description: "Launch on managed hosting or self-hosted infrastructure without rework or downtime.",
    icon: ServerCog
  },
  {
    label: "Social reach",
    value: "10 networks",
    description: "Extend campaigns across Facebook, WhatsApp, Twitter, and more with secure connectors.",
    icon: ShareNetwork
  }
];

const INTEGRATION_PILLARS: IntegrationPillar[] = [
  {
    title: "Composable by design",
    description:
      "Add commerce, communications, and analytics systems through a modular integration layer built for MLM scale.",
    bullets: [
      "SDKs and swagger docs to accelerate partner onboarding.",
      "Queue-backed syncs keep inventory and payouts in lockstep.",
      "Role-aware permissions govern who can modify integrations."
    ],
    icon: PanelsLeftRight
  },
  {
    title: "Omnichannel engagement",
    description:
      "Blend marketing and member communications with social, SMS, and email gateways engineered for resiliency.",
    bullets: [
      "Broadcast announcements or drip journeys across regions.",
      "Two-way messaging with secure authentication tokens.",
      "Prebuilt templates aligned to compliance requirements."
    ],
    icon: ShareNetwork
  },
  {
    title: "Infrastructure without borders",
    description:
      "Deploy Cloud MLM Software on Windows, Linux, or macOS environments and connect to any payment or identity stack.",
    bullets: [
      "Container-friendly architecture for hybrid clouds.",
      "Supports multi-currency, multi-language storefronts.",
      "Encryption and audit logs keep regulators confident."
    ],
    icon: Shield
  }
];

const ROLLOUT_PHASES: RolloutPhase[] = [
  {
    phase: "Discovery",
    focus: "Map existing commerce, fulfilment, and communication systems to integration pathways.",
    outcome: "Shared blueprint covering APIs, data cadence, and security requirements.",
    icon: Globe
  },
  {
    phase: "Implementation",
    focus: "Connect APIs, configure webhooks, and align inventory, voucher, and wallet flows.",
    outcome: "Automated data syncs with fallbacks and monitoring dashboards.",
    icon: PlugZap
  },
  {
    phase: "Scaling",
    focus: "Extend connectors to new markets, social channels, and payment gateways without downtime.",
    outcome: "Global-ready infrastructure that adapts to every launch roadmap.",
    icon: Cable
  }
];

const CONNECTOR_CLUSTERS: ConnectorCluster[] = [
  {
    heading: "Commerce & fulfilment",
    items: [
      "WooCommerce, Shopify, Magento, and OpenCart storefronts",
      "Inventory management with automated stock reconciliation",
      "Prepaid voucher and smart card payment journeys"
    ]
  },
  {
    heading: "Communications & growth",
    items: [
      "SMS gateways for instant credential reminders",
      "Social network sharing across Facebook, Twitter, and WhatsApp",
      "Email autoresponders tuned for onboarding and retention"
    ]
  },
  {
    heading: "Operations & compliance",
    items: [
      "Self-hosted deployments on VPS or managed cloud",
      "Role-based access, audit logging, and KYC workflows",
      "Multi-currency accounting and taxation feeds"
    ]
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Flexible Integration with Various Platforms";
  const description =
    "Connect Cloud MLM Software with ecommerce, communications, and operational platforms through secure APIs, webhooks, and self-hosted options.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/flexible-integration-with-various-platforms", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type FlexibleIntegrationPageProps = {
  params: { lang: SupportedLocale };
};

export default function FlexibleIntegrationPage({ params }: FlexibleIntegrationPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/features", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 text-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(52,211,153,0.25),transparent_50%),radial-gradient(circle_at_30%_88%,rgba(192,132,252,0.2),transparent_52%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.55fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-300/10 px-4 py-1 text-sm font-semibold text-emerald-700 dark:text-emerald-200">
              <PlugZap className="h-4 w-4" aria-hidden />
              Flexible integrations without compromise
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Plug Cloud MLM Software into every platform that powers your growth.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/85">
                From ecommerce storefronts and voucher systems to social and SMS connectors, our integration framework keeps data moving safely between every system you rely on.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-200/70">
                Deploy on the infrastructure you prefer, bring your existing tools, and expand globally with APIs, webhooks, and modular services tuned for MLM enterprises.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Plan your integration blueprint
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-emerald-500/50 text-emerald-700 hover:bg-emerald-300/10 dark:text-emerald-200">
                <Link href={demoHref}>
                  Watch the connectors live
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-emerald-200/60 bg-white/80 p-6 shadow-xl backdrop-blur dark:border-emerald-500/40 dark:bg-slate-950/60">
            {HERO_METRICS.map((metric) => {
              const Icon = metric.icon;
              return (
                <article key={metric.label} className="flex gap-4 rounded-2xl border border-emerald-200/70 bg-emerald-50/70 p-5 text-slate-800 dark:border-emerald-500/40 dark:bg-emerald-950/60 dark:text-slate-100">
                  <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600/80 dark:text-emerald-200/80">
                      {metric.label}
                    </p>
                    <p className="text-lg font-semibold">{metric.value}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-200/80">{metric.description}</p>
                  </div>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Built for the integrations leaders asked for</h2>
          <p className="text-sm text-muted-foreground">
            The legacy WordPress copy highlighted ecommerce, social, SMS, vouchers, and smart card capabilities. We reimagined them into strategic pillars that keep your ecosystem future-ready.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {INTEGRATION_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="flex h-full flex-col rounded-3xl border border-border/60 bg-background/90 p-8 shadow-sm">
                <div className="flex items-center gap-3 text-primary">
                  <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{pillar.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden>•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-100/60 via-transparent to-transparent dark:from-emerald-900/40" aria-hidden />
        <div className="container space-y-12 py-20">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Three-phase rollout for every integration stack</h2>
            <p className="text-sm text-muted-foreground">
              Move from discovery to scale with clarity. Each phase is backed by technical documentation, change logs, and training packets.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {ROLLOUT_PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <article key={phase.phase} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-300">
                    <Icon className="h-6 w-6" aria-hidden />
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500/80 dark:text-emerald-200/80">
                      {phase.phase}
                    </span>
                  </div>
                  <p className="text-base font-semibold text-foreground">{phase.focus}</p>
                  <p className="text-sm text-muted-foreground">{phase.outcome}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Your connector library, organised for action</h2>
          <p className="text-sm text-muted-foreground">
            Choose the integrations your teams rely on today and extend into new channels tomorrow without rewriting code.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {CONNECTOR_CLUSTERS.map((cluster) => (
            <article key={cluster.heading} className="rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{cluster.heading}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {cluster.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Stack className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-background to-primary/5 p-10 shadow-sm dark:via-slate-950">
          <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute -right-12 bottom-0 h-48 w-48 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-900/40" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.45fr)]">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to orchestrate every integration?</h2>
              <p className="text-sm text-muted-foreground">
                Share your current stack and expansion goals. We will connect the systems that run your MLM organisation and deliver adoption guides for your teams.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href={contactHref}>
                    Book a working session
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                  <Link href={modulesHref}>
                    Explore more modules
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-primary/30 bg-background/80 p-6 shadow-sm dark:border-primary/40 dark:bg-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">Integration checklist</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <Steps className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden />
                  <span>Document each platform and data set that must stay in sync.</span>
                </li>
                <li className="flex gap-3">
                  <Steps className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden />
                  <span>Assign owners for social, SMS, ecommerce, and inventory connectors.</span>
                </li>
                <li className="flex gap-3">
                  <Steps className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden />
                  <span>Schedule launch milestones across discovery, implementation, and scaling.</span>
                </li>
              </ul>
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

