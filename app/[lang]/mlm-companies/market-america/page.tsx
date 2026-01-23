import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Building2, CalendarClock, Globe2, HeartHandshake, LineChart, ShieldCheck, ShoppingCart, Sparkles, Users } from "lucide-react";
import { ChartLineUp, GlobeHemisphereWest, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type Journey = {
  stage: string;
  detail: string;
};

type CloudPlay = {
  title: string;
  description: string;
  highlight: string;
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    label: "Revenue",
    value: "$837M",
    detail: "Market America / Shop.com continues to shape one-to-one commerce worldwide.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "1992",
    detail: "Greensboro, North Carolina origin with global product brokerage ambitions.",
    icon: CalendarClock
  },
  {
    label: "Employees",
    value: "842",
    detail: "Commerce strategists, technologists, and field mentors supporting a hybrid shopping ecosystem.",
    icon: Users
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Product brokerage model",
    description: "Market America curates third-party brands and proprietary lines, giving entrepreneurs a wide SKU mix.",
    proof: "Shop.com integrates apparel, beauty, wellness, and partner stores under one loyalty program.",
    icon: ShoppingCart
  },
  {
    title: "Shopping Annuity mindset",
    description: "Customers redirect everyday spend into cashback, residual commissions, and intelligent recommendations.",
    proof: "Data-driven personalization turns routine purchases into predictable entrepreneurship.",
    icon: LineChart
  },
  {
    title: "Community-first entrepreneurship",
    description: "Independent business owners receive coaching, events, and digital playbooks to grow sustainably.",
    proof: "International conventions, mentorship, and compliance guardrails keep opportunity grounded.",
    icon: HeartHandshake
  }
];

const JOURNEYS: Journey[] = [
  {
    stage: "Discover",
    detail: "Map spending habits, preferred categories, and partner store opportunities to personalize the Shopping Annuity."
  },
  {
    stage: "Engineer savings",
    detail: "Bundle Market America exclusives with partner offers, cashback, and auto-ship to maximize value."
  },
  {
    stage: "Scale influence",
    detail: "Launch content hubs, referral campaigns, and community events to keep customers returning."
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Commerce intelligence graph",
    description: "Blend product brokerage data, partner feeds, and customer behavior to surface next-best offers.",
    highlight: "Cloud MLM Software turns data into guidance for every entrepreneur dashboard.",
    icon: Globe2
  },
  {
    title: "Cashback & loyalty engine",
    description: "Track annuity payouts, partner incentives, and customer milestones in real time.",
    highlight: "Transparency builds trust with consumers, IBPs, and auditors alike.",
    icon: ShieldCheck
  },
  {
    title: "Influencer enablement studio",
    description: "Centralize assets, scripts, and AI-personalized campaigns for social commerce teams.",
    highlight: "Rapid localization keeps messaging sharp across global markets.",
    icon: Sparkles
  },
  {
    title: "Partnership governance hub",
    description: "Manage contracts, compliance, and partner store performance within one secure workspace.",
    highlight: "Automated alerts protect margins and reputation before issues escalate.",
    icon: Building2
  },
  {
    title: "Entrepreneur performance console",
    description: "Surface KPIs for retail volume, repeat purchase rate, and customer retention per business owner.",
    highlight: "Goal-based dashboards keep independent consultants focused on sustainable metrics.",
    icon: UsersThree
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Market America / Shop.com Opportunity Map";
  const description =
    "Analyse Market America’s $837M Shopping Annuity engine and learn how Cloud MLM Software powers data-driven product brokerage and loyalty ecosystems.";
  const keywords = [
    "Market America analysis",
    "Shopping Annuity strategy",
    "Product brokerage MLM software",
    "Shop.com entrepreneurship insights",
    "Cloud MLM Software commerce platform"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/market-america", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MarketAmericaPageProps = {
  params: { lang: SupportedLocale };
};

export default function MarketAmericaPage({ params }: MarketAmericaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-purple-300/40 bg-gradient-to-br from-[#080415] via-[#1c1530] to-[#102033] py-20 text-white dark:border-purple-300/30">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(192,132,252,0.3),transparent_55%),radial-gradient(circle_at_82%_26%,rgba(59,130,246,0.25),transparent_60%),radial-gradient(circle_at_50%_92%,rgba(34,197,94,0.2),transparent_60%)]"
          aria-hidden
        />
        <div className="container grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-purple-100">
              Market America • Greensboro, North Carolina
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Transforming everyday spend into annuity-style entrepreneurship.
              </h1>
              <p className="text-base text-white/80">
                Market America empowers independent business owners to turn shopping into long-term income. Learn the mechanics behind the
                Shopping Annuity® plan and mirror its sophistication with Cloud MLM Software.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  See the AI commerce cockpit
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-white/15 text-purple-100 hover:bg-white/25">
                <Link href={pricingHref}>
                  Review solution tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <Link href={contactHref}>
                  Architect your brokerage model
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/70">Growth signals</span>
              <p className="text-lg font-semibold text-white">
                Benchmarks that maintain Market America’s leadership.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.label} className="flex h-full flex-col gap-2 rounded-2xl border border-white/15 bg-black/40 p-4">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <p className="text-xs uppercase tracking-widest text-white/60">{metric.label}</p>
                    <p className="text-2xl font-semibold text-white">{metric.value}</p>
                    <p className="text-xs text-white/70">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Commerce pillars</h2>
          <p className="text-sm text-muted-foreground">
            Product brokerage, data-intelligent incentives, and mentorship keep Market America competitive. Use these to guide your own build.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-purple-50 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-purple-950/40"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{pillar.proof}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-muted/50 py-20 dark:border-border/40 dark:bg-slate-900/60">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(192,132,252,0.2),transparent_55%),radial-gradient(circle_at_80%_24%,rgba(59,130,246,0.18),transparent_60%)]" aria-hidden />
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-300/60 bg-purple-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-purple-700 dark:border-white/30 dark:bg-white/10 dark:text-white">
              Customer journey
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Engineer annuity experiences.</h2>
            <p className="text-sm text-muted-foreground">
              Guide consultants through discovery, savings design, and influence loops for durable growth.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {JOURNEYS.map((journey) => (
              <article
                key={journey.stage}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <h3 className="text-lg font-semibold text-foreground">{journey.stage}</h3>
                <p className="text-sm text-muted-foreground">{journey.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Cloud MLM Software for product brokerage pioneers
          </h2>
          <p className="text-sm text-muted-foreground">
            Replicate Market America’s intelligence, loyalty, and governance with enterprise-ready automation.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {CLOUD_PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{play.description}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{play.highlight}</span>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href={pricingHref}>
              Review pricing
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href={contactHref}>
              Book a product brokerage workshop
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
