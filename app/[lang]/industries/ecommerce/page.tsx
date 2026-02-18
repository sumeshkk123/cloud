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
  Blocks,
  LineChart,
  Globe2,
  Layers3,
  Sparkles,
  ShoppingCart,
  Workflow
} from "lucide-react";
import {
  ChartLineUp,
  MegaphoneSimple,
  ShieldCheck,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

import { getMetaDetail } from "@/lib/api/meta-details";
import { getIndustryPageTitleKey } from "@/lib/industries-subpage";

export const dynamic = "force-dynamic";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  value: string;
  label: string;
  description: string;
  icon: IconType;
};

type Challenge = {
  title: string;
  description: string;
};

type Capability = {
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
    value: "+48%",
    label: "repeat purchase rate",
    description: "Personalised journeys and loyalty mechanics convert one-time shoppers into subscribers.",
    icon: ShoppingCart
  },
  {
    value: "4x",
    label: "affiliate-driven growth",
    description: "Creator programmes and MLM overlays expand reach without ballooning ad spend.",
    icon: MegaphoneSimple
  },
  {
    value: "< 15 min",
    label: "launch new markets",
    description: "Use localisation templates to deploy currencies, taxes, and languages in minutes.",
    icon: Globe2
  }
];

const CHALLENGES: Challenge[] = [
  {
    title: "Intense competition",
    description:
      "Direct-to-consumer brands fight for attention across search, social, and marketplaces—differentiation is crucial."
  },
  {
    title: "Customer retention",
    description:
      "High acquisition costs make it essential to nurture loyalty and referrals beyond first purchase incentives."
  },
  {
    title: "Operational scalability",
    description:
      "Coordinating inventory, fulfilment, and commissions across regions demands a platform built for growth."
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Unified ecommerce & MLM engine",
    description:
      "Blend traditional ecommerce with binary, matrix, or unilevel plans to mobilise customers, affiliates, and influencers.",
    icon: Layers3
  },
  {
    title: "Affiliate automation",
    description:
      "Launch campaigns with dynamic commission rules, deep-link tracking, promo codes, and real-time attribution.",
    icon: Workflow
  },
  {
    title: "Global-ready commerce stack",
    description:
      "Integrate Shopify, WooCommerce, Magento, and custom stores while handling currencies, taxes, and duties.",
    icon: Globe2
  },
  {
    title: "Customer lifecycle orchestration",
    description:
      "Trigger replenishment journeys, subscription offers, and upsell pathways using behavioural insights.",
    icon: LineChart
  }
];

const FEATURES: Feature[] = [
  {
    title: "Advanced MLM tools",
    detail: "Automate enrolment, downline management, and commission payouts with audit-ready transparency.",
    icon: ChartLineUp
  },
  {
    title: "Affiliate marketing suite",
    detail: "Recruit, manage, and reward affiliates with custom campaigns, dashboards, and payout schedules.",
    icon: Sparkles
  },
  {
    title: "Seamless integrations",
    detail: "Connect payment gateways, ERPs, and marketing automation platforms to create a unified growth stack.",
    icon: Blocks
  },
  {
    title: "Security & compliance",
    detail: "Protect customer data and financial flows with encryption, MFA, and role-based governance.",
    icon: ShieldCheck
  },
  {
    title: "Scalable infrastructure",
    detail: "Deploy on cloud architecture designed to support peak trading periods and international expansion.",
    icon: Layers3
  },
  {
    title: "Insightful dashboards",
    detail: "Monitor conversions, cohort health, and ROI with real-time analytics tailored to ecommerce leaders.",
    icon: UsersThree
  }
];

const FALLBACK_TITLE = "Ecommerce MLM Software";
const FALLBACK_DESCRIPTION =
  "Power ecommerce expansion with Cloud MLM Software—affiliate automation, direct selling capabilities, and data-driven customer journeys.";
const FALLBACK_KEYWORDS = "ecommerce mlm software, retail network marketing, online store mlm";

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const pageKey = getIndustryPageTitleKey("ecommerce");
  const metaData = await getMetaDetail(pageKey, locale);
  const title = metaData?.title ?? FALLBACK_TITLE;
  const description = metaData?.description ?? FALLBACK_DESCRIPTION;
  const keywords = metaData?.keywords ?? FALLBACK_KEYWORDS;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/industries/ecommerce", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type EcommercePageProps = {
  params: { lang: SupportedLocale };
};

export default function EcommercePage({ params }: EcommercePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-950/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.24),transparent_55%),radial-gradient(circle_at_82%_24%,rgba(129,140,248,0.24),transparent_58%),radial-gradient(circle_at_50%_88%,rgba(56,189,248,0.2),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)]">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Ecommerce acceleration platform
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Ecommerce MLM Software that unites direct selling, affiliates, and brand storytelling.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                Cloud MLM Software equips ecommerce leaders with automation, analytics, and partner experiences that convert loyalty into sustained growth.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Craft your growth roadmap
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref}>
                  Tour the ecommerce demo
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
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Industry pressures</p>
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
                Explore solution tiers
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Capabilities engineered for digital commerce pioneers</h2>
          <p className="text-sm text-muted-foreground">
            Bridge ecommerce, influencer marketing, and direct selling through a single operating system that adapts to your strategy.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground">{capability.title}</h3>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:border-border/30 dark:bg-slate-950/40">
        <div className="container space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Key features to uplift your ecommerce business</h2>
          <p className="text-sm text-muted-foreground">
            Handle growth with confidence—automate operations, empower partners, and protect every transaction from cart to commission.
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
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-blue-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-blue-900/40">
          <div className="absolute -left-24 top-1/4 h-48 w-48 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-64 w-64 translate-y-1/3 rounded-full bg-indigo-200/30 blur-3xl dark:bg-indigo-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.75fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to redefine online retail?</h2>
              <p className="text-sm text-muted-foreground">
                Share your catalogue strategy, partner ecosystem, and revenue targets. We will deliver a phased transformation plan and pilot programme for Cloud MLM Software.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={contactHref}>
                    Speak with our ecommerce team
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
                <li>• Current ecommerce stack, OMS, and fulfilment partners.</li>
                <li>• Compensation plans, affiliate tiers, and loyalty programmes.</li>
                <li>• Target launch timelines, KPIs, and international markets.</li>
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

