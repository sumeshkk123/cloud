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
  BatteryCharging,
  Beaker,
  CandlestickChart,
  Cpu,
  LockKeyhole,
  Rocket,
  WalletCards
} from "lucide-react";
import {
  CirclesThreePlus,
  GlobeHemisphereEast,
  ShieldCheckered,
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

type PainPoint = {
  title: string;
  description: string;
};

type Advantage = {
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
    value: "< 30s",
    label: "crypto payouts",
    detail: "Automated wallet settlements keep affiliates rewarded instantly in the token of their choice.",
    icon: WalletCards
  },
  {
    value: "+42%",
    label: "network retention",
    detail: "Gamified journeys and personalised alerts nurture trust in high-volatility markets.",
    icon: Rocket
  },
  {
    value: "120+",
    label: "jurisdiction rules",
    detail: "Regulatory playbooks and audits help teams stay compliant across continents.",
    icon: ShieldCheckered
  }
];

const PAIN_POINTS: PainPoint[] = [
  {
    title: "Regulatory turbulence",
    description:
      "Crypto regulations evolve fast. Without a compliance partner, launching and scaling across markets is risky."
  },
  {
    title: "Security expectations",
    description:
      "Affiliates and investors require bulletproof protection for wallets, KYC data, and transaction flows."
  },
  {
    title: "Network credibility",
    description:
      "In a decentralised world, transparent analytics and timely payouts are essential to build lasting trust."
  }
];

const ADVANTAGES: Advantage[] = [
  {
    title: "Hybrid compensation engine",
    description:
      "Model token-based bonuses, staking rewards, and fiat commissions side by side with automated calculations.",
    icon: CirclesThreePlus
  },
  {
    title: "Blockchain-ready integrations",
    description:
      "Connect exchanges, custodial wallets, DeFi protocols, and on/off-ramps to orchestrate crypto activity securely.",
    icon: Cpu
  },
  {
    title: "Compliance intelligence",
    description:
      "Track AML, KYC, and travel-rule obligations with regional workflows and alerting to keep auditors confident.",
    icon: Beaker
  },
  {
    title: "Global community enablement",
    description:
      "Deliver multilingual education hubs, referral campaigns, and community dashboards that scale worldwide.",
    icon: GlobeHemisphereEast
  }
];

const FEATURES: Feature[] = [
  {
    title: "Secure wallet orchestration",
    detail: "Manage internal, custodial, and cold wallets with role-based permissions and real-time monitoring.",
    icon: LockKeyhole
  },
  {
    title: "Token launch workflows",
    detail: "Coordinate token releases, vesting schedules, and liquidity events with automated communications.",
    icon: BatteryCharging
  },
  {
    title: "On-chain analytics",
    detail: "Visualise staking, mining, and trading performance through dashboards tailored to crypto economics.",
    icon: CandlestickChart
  },
  {
    title: "Multi-currency support",
    detail: "Accept and disburse in major cryptocurrencies and fiat currencies with real-time FX conversions.",
    icon: WalletCards
  },
  {
    title: "Fraud detection & alerts",
    detail: "AI-driven rules detect suspicious velocity, wallet reuse, and cross-border anomalies before damage occurs.",
    icon: ShieldCheckered
  },
  {
    title: "Affiliate intelligence",
    detail: "Empower leaders with performance heatmaps, conversion funnels, and cohort comparisons.",
    icon: UsersThree
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Cryptocurrency MLM Software";
  const description =
    "Scale crypto MLM networks with Cloud MLM Software—secure wallet management, regulatory intelligence, and hybrid compensation automation.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/industries/cryptocurrency", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type CryptocurrencyPageProps = {
  params: { lang: SupportedLocale };
};

export default function CryptocurrencyPage({ params }: CryptocurrencyPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 py-20 text-white dark:border-border/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_82%_26%,rgba(59,130,246,0.3),transparent_58%),radial-gradient(circle_at_50%_88%,rgba(168,85,247,0.25),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)]">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-sm font-semibold text-emerald-200">
                Crypto-ready MLM platform
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Cryptocurrency MLM Software engineered for trust, compliance, and velocity.
              </h1>
              <p className="max-w-2xl text-base text-slate-200">
                Launch token-based compensation, automate global payouts, and secure every transaction. Cloud MLM Software keeps your crypto ecosystem transparent, resilient, and primed for hypergrowth.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-emerald-500 text-white hover:bg-emerald-400">
                <Link href={contactHref}>
                  Map your crypto rollout
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-400 text-white hover:bg-white/10">
                <Link href={demoHref}>
                  Experience the crypto demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.label} className="flex h-full flex-col gap-2 rounded-3xl border border-slate-700/60 bg-slate-900/70 p-5 shadow-lg backdrop-blur">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="text-2xl font-semibold">{metric.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">{metric.label}</p>
                    <p className="text-sm text-slate-200/80">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl border border-slate-700/60 bg-slate-900/80 p-8 shadow-xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200">Crypto industry hurdles</p>
            <div className="space-y-5">
              {PAIN_POINTS.map((pain) => (
                <article key={pain.title} className="rounded-2xl border border-slate-700/60 bg-slate-950/60 p-5">
                  <h2 className="text-sm font-semibold text-white">{pain.title}</h2>
                  <p className="mt-2 text-xs text-slate-300">{pain.description}</p>
                </article>
              ))}
            </div>
            <Button asChild variant="ghost" className="w-full justify-between border border-slate-700/60 text-slate-100 hover:bg-white/10">
              <Link href={pricingHref}>
                Review crypto packages
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Built to keep crypto organisations resilient</h2>
          <p className="text-sm text-muted-foreground">
            These core advantages align directly with the needs of token economies, mining collectives, and digital asset platforms.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {ADVANTAGES.map((advantage) => {
            const Icon = advantage.icon;
            return (
              <article key={advantage.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:border-border/30 dark:bg-slate-950/40">
        <div className="container space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Key features to elevate your crypto MLM business</h2>
          <p className="text-sm text-muted-foreground">
            Blend blockchain-grade security with enterprise automation to delight affiliates, regulators, and customers alike.
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
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-slate-900 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-slate-950">
          <div className="absolute -left-24 top-1/4 h-48 w-48 rounded-full bg-emerald-400/30 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-64 w-64 translate-y-1/3 rounded-full bg-indigo-400/25 blur-3xl" aria-hidden />
          <div className="relative grid gap-10 text-white lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.75fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to deploy a crypto-native MLM experience?</h2>
              <p className="text-sm text-slate-200">
                Share your token strategy, compliance landscape, and growth targets. We will assemble a launch team to configure, migrate, and operationalise Cloud MLM Software for your ecosystem.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-emerald-500 text-white hover:bg-emerald-400">
                  <Link href={contactHref}>
                    Connect with crypto experts
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-400 text-white hover:bg-white/10">
                  <Link href={demoHref}>
                    Explore crypto workflows
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-700/60 bg-slate-950/80 p-6 text-sm shadow-xl backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200">Discovery briefing</p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li>• Compensation structures, tokenomics, and liquidity plans.</li>
                <li>• Required integrations (exchanges, wallets, KYC, ERP).</li>
                <li>• Regulatory jurisdictions, reporting obligations, and risk controls.</li>
              </ul>
              <p className="text-xs text-slate-400">Receive a tailored roadmap within one business day.</p>
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

