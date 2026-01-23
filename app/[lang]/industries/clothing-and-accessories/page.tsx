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
  Boxes,
  LineChart,
  Globe2,
  Layers,
  PackageSearch,
  Sparkles,
  Store
} from "lucide-react";
import {
  CoatHanger,
  Handshake,
  Lightning,
  ShoppingBag,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  value: string;
  label: string;
  detail: string;
  icon: IconType;
};

type Challenge = {
  title: string;
  description: string;
};

type Module = {
  title: string;
  description: string;
  icon: IconType;
};

type Feature = {
  title: string;
  detail: string;
  icon: IconType;
};

const HERO_METRICS: Metric[] = [
  {
    value: "+35%",
    label: "average order uplift",
    detail: "Dynamic bundle offers and trend-based recommendations grow basket size.",
    icon: ShoppingBag
  },
  {
    value: "99.9%",
    label: "inventory accuracy",
    detail: "Real-time sync keeps seasonal stock aligned with demand across every channel.",
    icon: PackageSearch
  },
  {
    value: "14 days",
    label: "global rollout",
    detail: "Launch new markets with localisation templates and automated tax handling.",
    icon: Globe2
  }
];

const CHALLENGES: Challenge[] = [
  {
    title: "Trend velocity",
    description:
      "Micro-collections and limited drops require agile forecasting to prevent overstocking or missed revenue."
  },
  {
    title: "Distributor differentiation",
    description:
      "Fashion stylists need unique assets, pricing, and customer journeys to stay ahead of competitors."
  },
  {
    title: "Network-wide transparency",
    description:
      "Commission accuracy, fulfilment updates, and compliance must stay visible across fast-moving hierarchies."
  }
];

const MODULES: Module[] = [
  {
    title: "Flexible compensation design",
    description:
      "Support binary, matrix, unilevel, or hybrid plans with style bonuses, exclusivity tiers, and loyalty rewards.",
    icon: Layers
  },
  {
    title: "Omni-channel commerce",
    description:
      "Connect ecommerce, pop-up boutiques, and social storefronts with unified inventory and fulfilment automations.",
    icon: Store
  },
  {
    title: "Affiliate & creator onboarding",
    description:
      "Recruit influencers with personalised landing pages, automated contracts, and ROI dashboards.",
    icon: Handshake
  },
  {
    title: "Visual asset management",
    description:
      "Deliver lookbooks, campaign assets, and branding guidelines via a centralised hub tailored to each rank.",
    icon: Sparkles
  }
];

const FEATURES: Feature[] = [
  {
    title: "Smart catalogue & sizing",
    detail: "Guide customers through fit finders, colourways, and limited series while auto-syncing availability.",
    icon: CoatHanger
  },
  {
    title: "Automated drop planning",
    detail: "Schedule product releases, backstage previews, and early access codes for top performers.",
    icon: Lightning
  },
  {
    title: "Network health analytics",
    detail: "Visualise team performance, churn risk, and campaign ROI with executive-ready dashboards.",
    icon: LineChart
  },
  {
    title: "Logistics orchestration",
    detail: "Connect 3PLs, warehouses, and return centres to keep fulfilment costs under control.",
    icon: Boxes
  },
  {
    title: "Global compliance vault",
    detail: "Store export rules, documentation, and localisation guidelines to launch responsibly.",
    icon: UsersThree
  },
  {
    title: "Consultant enablement app",
    detail: "Arm stylists with mobile onboarding, customer journeys, and event management tools.",
    icon: Sparkles
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Clothing and Accessories MLM Software";
  const description =
    "Scale clothing and accessories networks with Cloud MLM Software—trend-ready launches, omni-channel commerce, and precision payouts.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/industries/clothing-and-accessories", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ClothingAccessoriesPageProps = {
  params: { lang: SupportedLocale };
};

export default function ClothingAccessoriesPage({ params }: ClothingAccessoriesPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-teal-50 via-white to-amber-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-teal-950/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(45,212,191,0.22),transparent_55%),radial-gradient(circle_at_82%_24%,rgba(251,191,36,0.2),transparent_58%),radial-gradient(circle_at_50%_86%,rgba(56,189,248,0.18),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)]">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Clothing & accessories growth engine
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Clothing and Accessories MLM Software that keeps pace with every trend cycle.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                From capsule launches to evergreen collections, Cloud MLM Software helps fashion brands orchestrate distributor success, protect margins, and delight customers worldwide.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Schedule a runway session
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  View the fashion demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.label} className="flex h-full flex-col gap-2 rounded-3xl border border-border/60 bg-background/80 p-5 shadow-sm backdrop-blur dark:border-border/40 dark:bg-slate-950/60">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="text-xl font-semibold text-foreground">{metric.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{metric.label}</p>
                    <p className="text-sm text-muted-foreground">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Industry friction</p>
            <div className="space-y-5">
              {CHALLENGES.map((challenge) => (
                <article key={challenge.title} className="rounded-2xl border border-border/60 bg-muted/30 p-5 dark:border-border/40 dark:bg-slate-900/40">
                  <h2 className="text-sm font-semibold text-foreground">{challenge.title}</h2>
                  <p className="mt-2 text-xs text-muted-foreground">{challenge.description}</p>
                </article>
              ))}
            </div>
            <Button asChild variant="ghost" className="w-full justify-between">
              <Link href={pricingHref}>
                Compare solution bundles
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Build a fashion-forward network with intelligent modules</h2>
          <p className="text-sm text-muted-foreground">
            Each capability is crafted to mirror how clothing and accessory brands launch trends, nurture consultants, and serve shoppers.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {MODULES.map((module) => {
            const Icon = module.icon;
            return (
              <article key={module.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground">{module.title}</h3>
                <p className="text-sm text-muted-foreground">{module.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:border-border/30 dark:bg-slate-950/40">
        <div className="container space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Key features to uplift your clothing and accessories business</h2>
          <p className="text-sm text-muted-foreground">
            Combine trend intelligence, logistics precision, and distributor delight in one platform that adapts to every collection.
          </p>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-teal-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-teal-900/40">
          <div className="absolute -left-24 top-1/4 h-48 w-48 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-64 w-64 translate-y-1/3 rounded-full bg-amber-200/30 blur-3xl dark:bg-amber-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.75fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Dress your network for success.</h2>
              <p className="text-sm text-muted-foreground">
                Tell us about your collection cadence, consultant base, and expansion goals. We’ll prepare a roadmap covering integrations, migrations, and pilot milestones.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={contactHref}>
                    Start a consultation
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={demoHref}>
                    Tour the platform
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background/80 p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/70">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Discovery checklist</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Current compensation structures, reward tiers, and desired refinements.</li>
                <li>• Sales channels, fulfilment partners, and systems to integrate.</li>
                <li>• Launch timeline, pilot markets, and KPIs that define success.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

