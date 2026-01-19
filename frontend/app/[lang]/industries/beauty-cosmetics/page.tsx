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
  Beaker,
  Droplet,
  FlaskConical,
  Palette,
  Sparkles,
  Star,
  Store,
  LineChart
} from "lucide-react";
import {
  Heartbeat,
  ShoppingBagOpen,
  ShieldCheck,
  Sparkle as SparkleIcon,
  UsersFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Challenge = {
  title: string;
  description: string;
};

type Solution = {
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
    label: "Regulatory coverage",
    value: "30+ regions",
    detail: "Built-in compliance workflows keep ingredient disclosures and labelling approvals on track.",
    icon: ShieldCheck
  },
  {
    label: "Product launches",
    value: "50% faster",
    detail: "Template-driven onboarding and asset hubs cut launch prep time in half.",
    icon: SparkleIcon
  },
  {
    label: "Repeat purchases",
    value: "+28%",
    detail: "AI-driven offers and beauty journeys increase loyalty across markets.",
    icon: Star
  }
];

const CHALLENGES: Challenge[] = [
  {
    title: "Evolving compliance landscape",
    description:
      "Ingredient restrictions, labelling laws, and product testing requirements vary by country and change without warning."
  },
  {
    title: "Demand for personalisation",
    description:
      "Beauty customers expect curated experiences, yet manual processes make personalised journeys hard to scale."
  },
  {
    title: "Inventory orchestration",
    description:
      "Trending shades and limited editions create spikes that legacy systems struggle to anticipate and fulfil."
  }
];

const SOLUTIONS: Solution[] = [
  {
    title: "Customisable compensation plans",
    description:
      "Launch binary, matrix, or unilevel plans with wellness bundles, influencer tiers, and sampling rewards tailored to your brand.",
    icon: Palette
  },
  {
    title: "Beauty-grade ecommerce integrations",
    description:
      "Connect Shopify, WooCommerce, or custom stores to sync catalogues, inventory, subscriptions, and loyalty credits in real time.",
    icon: Store
  },
  {
    title: "Global-ready partner hubs",
    description:
      "Deliver multilingual, multi-currency experiences with region-specific pricing, taxes, and content governance.",
    icon: UsersFour
  },
  {
    title: "Mobile artistry on demand",
    description:
      "Field artists access lookbooks, tutorials, and prospecting tools through the Cloud MLM mobile app.",
    icon: ShoppingBagOpen
  }
];

const FEATURES: Feature[] = [
  {
    title: "Product catalogue storytelling",
    detail: "Launch immersive product pages with ingredient education, shade finders, and cross-sell journeys.",
    icon: Beaker
  },
  {
    title: "Order lifecycle automation",
    detail: "Manage replenishment, sampling, and subscription flows while notifying consultants of customer milestones.",
    icon: Droplet
  },
  {
    title: "Clinical-grade reporting",
    detail: "Track campaign ROI, consultant performance, and inventory velocity with dashboards built for executive reviews.",
    icon: FlaskConical
  },
  {
    title: "Personalised selling playbooks",
    detail: "Use AI insights to recommend regimens, bundle offers, and education paths per customer persona.",
    icon: Sparkles
  },
  {
    title: "Wellness compliance vault",
    detail: "Centralise certifications, ingredient sheets, and audit logs to accelerate product approvals.",
    icon: Heartbeat
  },
  {
    title: "Omni-channel promotions",
    detail: "Deploy campaigns across social commerce, live events, and pop-up boutiques with unified tracking.",
    icon: LineChart
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Beauty and Cosmetics MLM Software";
  const description =
    "Deliver luxurious customer journeys with Cloud MLM Software—personalised beauty experiences, flexible compensation, and compliant global operations.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/industries/beauty-cosmetics", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BeautyCosmeticsPageProps = {
  params: { lang: SupportedLocale };
};

export default function BeautyCosmeticsPage({ params }: BeautyCosmeticsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-rose-50 via-white to-sky-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-rose-950/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(244,114,182,0.22),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(96,165,250,0.22),transparent_58%),radial-gradient(circle_at_50%_86%,rgba(249,168,212,0.18),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)]">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Beauty & cosmetics innovation lab
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Beauty and Cosmetics MLM Software that elevates every product reveal.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                Launch personalised experiences, scale consultant success, and keep compliance airtight. Cloud MLM Software turns beauty brand strategy into intelligent workflows and memorable customer journeys.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Design your launch plan
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  Try the beauty demo
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
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{metric.label}</p>
                    <p className="text-xl font-semibold text-foreground">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Pressing challenges</p>
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
                Explore investment options
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Solutions designed for beauty innovators</h2>
          <p className="text-sm text-muted-foreground">
            Bring together product storytelling, consultant enablement, and operational control in one adaptive platform.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {SOLUTIONS.map((solution) => {
            const Icon = solution.icon;
            return (
              <article key={solution.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground">{solution.title}</h3>
                <p className="text-sm text-muted-foreground">{solution.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:border-border/30 dark:bg-slate-950/40">
        <div className="container space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Key features to uplift your beauty and cosmetics business</h2>
          <p className="text-sm text-muted-foreground">
            Equip consultants, customers, and corporate teams with unified tools that celebrate beauty while protecting margins.
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
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-rose-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-rose-900/40">
          <div className="absolute -left-24 top-1/4 h-48 w-48 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-64 w-64 translate-y-1/3 rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.75fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to enchant your market?</h2>
              <p className="text-sm text-muted-foreground">
                Share your portfolio, consultant mix, and expansion goals. We will craft a phased roadmap that aligns your beauty vision with Cloud MLM Software capabilities.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={contactHref}>
                    Speak with a beauty specialist
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={demoHref}>
                    Preview customer journeys
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background/80 p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/70">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Discovery essentials</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Core product lines, compliance requirements, and certifications.</li>
                <li>• Consultant tiers, incentives, and enablement programmes.</li>
                <li>• Preferred integrations, fulfilment partners, and launch timelines.</li>
              </ul>
              <p className="text-xs text-muted-foreground">Expect a tailored blueprint and success metrics within one business day.</p>
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

