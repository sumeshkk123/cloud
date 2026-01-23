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
  Palette,
  ServerCog,
  ShoppingCart,
  SlidersHorizontal,
  Sparkles
} from "lucide-react";
import { GlobeHemisphereEast, RocketLaunch } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  label: string;
  value: string;
};

type Capability = {
  title: string;
  description: string;
  icon: IconType;
};

type Offering = {
  title: string;
  points: string[];
};

type TimelineStage = {
  name: string;
  description: string;
  leader: string;
};

const HERO_METRICS: HeroMetric[] = [
  { label: "OpenCart implementations", value: "110+" },
  { label: "Average load speed improvement", value: "38%" },
  { label: "Integrations orchestrated", value: "65" }
];

const KEY_CAPABILITIES: Capability[] = [
  {
    title: "Commerce performance engineering",
    description:
      "Optimise OpenCart stores for search, conversion, and resilience with caching, CDN, and telemetry baked in.",
    icon: Sparkles
  },
  {
    title: "MLM-aligned storefront UX",
    description:
      "Design experience systems that reflect your compensation journeys, replicating sites, and distributor persona needs.",
    icon: Palette
  },
  {
    title: "Secure integration fabric",
    description:
      "Connect OpenCart to Cloud MLM Software, ERPs, tax engines, and fulfilment partners with well-documented APIs.",
    icon: ServerCog
  },
  {
    title: "Governed change cadence",
    description:
      "Release cycles, rollback plans, and regression suites protect revenue streams during promotions and launches.",
    icon: BadgeCheck
  }
];

const SERVICE_OFFERINGS: Offering[] = [
  {
    title: "OpenCart experience design",
    points: [
      "Brand-led theme creation with responsive layouts and accessibility checkpoints.",
      "Personalised catalogues and landing pages mapped to field incentives and promotions.",
      "Micro-interactions and guided flows to improve onboarding and repeat purchases."
    ]
  },
  {
    title: "Custom module engineering",
    points: [
      "Commission-aware checkout automation and subscription management.",
      "Inventory, pricing, and loyalty modules tuned for multi-market programmes.",
      "Upgrade-safe extensions with documentation and knowledge transfer kits."
    ]
  },
  {
    title: "Operations & analytics",
    points: [
      "Order-to-payout automation that feeds Cloud MLM Software in real time.",
      "Executive dashboards and alerts covering sales velocity, churn, and CSAT.",
      "Proactive monitoring with SLOs covering uptime, response time, and error budgets."
    ]
  }
];

const DELIVERY_TIMELINE: TimelineStage[] = [
  {
    name: "Discovery + growth canvas",
    description:
      "We map opportunities across catalogue, customer journeys, and compensation rules to scope a measurable OpenCart roadmap.",
    leader: "Product strategist"
  },
  {
    name: "Design + engineering sprint",
    description:
      "Themes, extensions, and data pipelines are built in parallel with peer reviews, QA automation, and security checks.",
    leader: "OpenCart engineering lead"
  },
  {
    name: "Launch + optimise",
    description:
      "Staged releases with observability dashboards, UAT sign-offs, and handover playbooks keep growth on track.",
    leader: "Commerce success manager"
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "OpenCart Development Services for MLM Brands | Cloud MLM Software";
  const description =
    "Transform OpenCart into a revenue engine. Cloud MLM Software delivers UX, module development, and integrations purpose-built for direct selling companies.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/services/opencart-development", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type OpencartDevelopmentPageProps = {
  params: { lang: SupportedLocale };
};

export default function OpencartDevelopmentPage({ params }: OpencartDevelopmentPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-indigo-50 via-white to-amber-50 px-6 py-20 shadow-sm dark:from-slate-950 dark:via-slate-950 dark:to-amber-950 sm:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.18),transparent_45%),radial-gradient(circle_at_80%_15%,rgba(251,191,36,0.18),transparent_40%),radial-gradient(circle_at_50%_85%,rgba(14,165,233,0.16),transparent_55%)]" />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              OpenCart acceleration squad
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Reimagine your OpenCart storefront for direct selling growth.
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground">
              Cloud MLM Software’s OpenCart specialists craft high-performance commerce experiences that connect directly
              with your compensation engine, analytics stack, and global launch calendar. Every build is engineered for
              speed, stability, and scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Plan my OpenCart upgrade
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={servicesHref}>
                  See full services portfolio
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="grid gap-4 rounded-3xl border border-border/50 bg-white/80 p-6 shadow-lg backdrop-blur dark:bg-slate-950/70 sm:grid-cols-3 lg:grid-cols-1">
            {HERO_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col items-start justify-center rounded-2xl border border-border/40 bg-muted/40 p-5 dark:border-slate-800 dark:bg-slate-900/70"
              >
                <span className="text-3xl font-semibold text-foreground">{metric.value}</span>
                <span className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {metric.label}
                </span>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Capabilities engineered for OpenCart excellence
          </h2>
          <p className="text-sm text-muted-foreground">
            Our multidisciplinary teams modernise OpenCart deployments with future-proof code, measurable operations, and
            unforgettable customer experiences.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {KEY_CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article
                key={capability.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/40 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:bg-slate-950/75"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
          <div className="space-y-4 rounded-3xl border border-primary/30 bg-primary/10 p-8 shadow-sm dark:border-primary/40 dark:bg-primary/10">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Services tailored to your growth ambitions
            </h2>
            <p className="text-sm text-muted-foreground">
              Whether you need a fresh launch or to stabilise an existing implementation, we bring the right mix of
              designers, engineers, and data specialists to deliver results that leaders notice.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Link href={contactHref}>
                Request a scoped proposal
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="space-y-6">
            {SERVICE_OFFERINGS.map((offering) => (
              <article key={offering.title} className="rounded-3xl border border-border/40 bg-white/90 p-8 shadow-sm dark:bg-slate-950/75">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-foreground">{offering.title}</h3>
                  <ShoppingCart className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {offering.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <SlidersHorizontal className="mt-1 h-4 w-4 text-primary" aria-hidden />
                      <span>{point}</span>
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
            A launch sequence you can rely on
          </h2>
          <p className="text-sm text-muted-foreground">
            We choreograph people, process, and platforms so every OpenCart deployment goes live with confidence.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-slate-900 text-white shadow-sm dark:border-slate-800">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.28),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.28),transparent_50%)]" />
          <div className="grid gap-6 p-8 md:grid-cols-3">
            {DELIVERY_TIMELINE.map((stage) => (
              <div key={stage.name} className="flex flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white">
                  <GlobeHemisphereEast className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold">{stage.name}</h3>
                <p className="text-sm text-slate-100">{stage.description}</p>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-200">
                  Lead: {stage.leader}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container overflow-hidden rounded-3xl border border-border/50 bg-white shadow-sm dark:bg-slate-950">
        <div className="grid gap-10 px-6 py-16 sm:px-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Ready to accelerate your OpenCart roadmap?
            </h2>
            <p className="text-sm text-muted-foreground">
              You bring the vision; we bring the design, automation, and analytics muscle to support it. Let’s co-create a
              launch plan tailored to your growth targets.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Talk to our OpenCart experts
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={servicesHref}>
                  Explore additional services
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-4 rounded-3xl border border-primary/30 bg-primary/10 p-6 dark:border-primary/40 dark:bg-primary/10">
            <div className="flex items-center gap-3">
              <RocketLaunch className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="text-lg font-semibold text-foreground">Launch support included</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Our team stays on deck through go-live with observability dashboards, incident playbooks, and executive
              status updates. When the first order hits, we are ready.
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}
