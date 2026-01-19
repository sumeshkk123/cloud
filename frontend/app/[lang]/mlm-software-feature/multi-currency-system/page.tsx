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
  Coins,
  Globe2,
  LineChart,
  Receipt,
  Scale,
  ShieldCheck,
  Sparkles,
  Wallet
} from "lucide-react";
import {
  ArrowsLeftRight,
  ChartLineUp,
  CurrencyCircleDollar,
  GlobeHemisphereEast,
  HandCoins,
  SealCheck,
  Vault
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroCallout = {
  title: string;
  description: string;
  icon: IconType;
};

type CapabilityColumn = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type OperationMoment = {
  label: string;
  headline: string;
  detail: string;
  icon: IconType;
};

type RolloutStep = {
  stage: string;
  summary: string;
  result: string;
  icon: IconType;
};

const HERO_CALLOUTS: HeroCallout[] = [
  {
    title: "Localized conversions",
    description:
      "Let every distributor quote, checkout, and settle commissions in their preferred currency without leaving the workspace.",
    icon: ArrowsLeftRight
  },
  {
    title: "Audit-ready exchange rates",
    description:
      "Automated rate sourcing and historic tracking make currency impacts transparent for finance and compliance teams.",
    icon: LineChart
  },
  {
    title: "Instant currency switcher",
    description:
      "Place a branded selector front-and-centre so international members understand pricing the moment they log in.",
    icon: Globe2
  }
];

const CAPABILITY_COLUMNS: CapabilityColumn[] = [
  {
    title: "Why leaders choose multi-currency",
    description:
      "Operate a truly borderless MLM programme with pricing logic that respects every market segment you target.",
    bullets: [
      "Surface payouts and pay-ins in the currency each profile prefers, with logic configured per role or geography.",
      "Maintain documentation-ready ledgers that record gains or losses created by foreign exchange movements.",
      "Embed the module as an add-on, keeping starter packages lean while scaling global-ready clients with ease."
    ],
    icon: ShieldCheck
  },
  {
    title: "Experience for the field",
    description:
      "Keep distributors focused on growth instead of manual conversions or external calculators.",
    bullets: [
      "Real-time switches updated by trusted APIs remove the guesswork from quoting across regions.",
      "Currency toggles can live in the top navigation, making the option discoverable without extra training.",
      "Mobile-friendly layouts mean the feature works seamlessly in presentations, pop-up stores, or roadshows."
    ],
    icon: Wallet
  },
  {
    title: "Finance-grade safeguards",
    description:
      "Bring enterprise rigour to cross-border operations without slowing down the sales engine.",
    bullets: [
      "Exchange-rate sources, rounding rules, and settlement batches are versioned for internal audits.",
      "Permissions ensure only privileged roles adjust conversion policies or override settlement currencies.",
      "Support for layered tax, fees, and promotional pricing while keeping billing statements consistent."
    ],
    icon: Scale
  }
];

const OPERATION_MOMENTS: OperationMoment[] = [
  {
    label: "Recurring payouts",
    headline: "Commissions arrive ready for reinvestment",
    detail:
      "Route weekly and monthly earnings through the multi-currency ledger so leaders can decide when to hold, convert, or spend.",
    icon: Coins
  },
  {
    label: "E-commerce orders",
    headline: "Checkout that mirrors local storefronts",
    detail:
      "Dynamic pricing ensures carts, invoices, and digital receipts stay aligned from entry to confirmation.",
    icon: Receipt
  },
  {
    label: "Corporate finance",
    headline: "Close books without manual reconciliations",
    detail:
      "Finance teams view multi-currency snapshots, variance alerts, and export-ready ledgers on demand.",
    icon: ChartLineUp
  }
];

const ROLLOUT_STEPS: RolloutStep[] = [
  {
    stage: "01",
    summary: "Scope currencies & touchpoints",
    result: "We map the member journeys—registrations, shop, wallets, and loyalty earnings—to understand conversion needs.",
    icon: GlobeHemisphereEast
  },
  {
    stage: "02",
    summary: "Configure rate governance",
    result: "Define API sources, refresh cadence, rounding behaviour, and approval workflows for overrides.",
    icon: SealCheck
  },
  {
    stage: "03",
    summary: "Launch with guided adoption",
    result: "Training content, in-app walkthroughs, and role-specific dashboards ensure every team uses the feature confidently.",
    icon: HandCoins
  },
  {
    stage: "04",
    summary: "Monitor & optimise",
    result: "Finance dashboards surface currency trends so you can adjust pricing, promotions, or hedging strategies fast.",
    icon: Vault
  }
];

const CURRENCY_CODES = ["USD", "EUR", "GBP", "AED", "SGD", "JPY", "AUD", "INR", "CAD", "ZAR"];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Multi Currency System | Cloud MLM Software";
  const description =
    "Deliver a seamless multi-currency experience across your MLM software. Localise payouts, pricing, and ledgers with automated exchange-rate governance.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/multi-currency-system", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MultiCurrencySystemPageProps = {
  params: { lang: SupportedLocale };
};

export default function MultiCurrencySystemPage({ params }: MultiCurrencySystemPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 text-slate-100">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(165,243,252,0.2),transparent_50%),radial-gradient(circle_at_50%_90%,rgba(14,165,233,0.25),transparent_55%)]" aria-hidden />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,0.6fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100">
              Multi currency system
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Multi Currency System engineered for international MLM growth
            </h1>
            <p className="max-w-2xl text-base text-slate-200">
              Cloud MLM Software embeds a native multi-currency engine so your organisation can expand across borders with confidence. Pricing, payouts, and ledgers stay synchronized—no third-party calculators, no duplicated spreadsheets.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-cyan-500 text-slate-950 hover:bg-cyan-400">
                <Link href={contactHref}>
                  Talk with a rollout specialist
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-cyan-400/60 text-cyan-100 hover:bg-cyan-400/10">
                <Link href={demoHref}>
                  See the feature in action
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid content-start gap-6">
            {HERO_CALLOUTS.map((callout) => {
              const Icon = callout.icon;
              return (
                <article
                  key={callout.title}
                  className="group relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-slate-900/60 p-6 shadow-lg backdrop-blur transition hover:border-cyan-300/60 hover:bg-slate-900/80"
                >
                  <div className="absolute -right-24 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl transition group-hover:bg-cyan-300/30" aria-hidden />
                  <div className="relative flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-cyan-400/20 text-cyan-100">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-lg font-semibold text-white">{callout.title}</h2>
                      <p className="text-sm text-slate-200/90">{callout.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-16">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Build trust with instant, accurate conversions
          </h2>
          <p className="text-sm text-muted-foreground">
            International expansion demands precision. Our multi-currency system combines UX clarity with back-office governance so stakeholders in every timezone see consistent numbers.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {CAPABILITY_COLUMNS.map((capability) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title} className="relative flex h-full flex-col rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-cyan-100/10 p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">{capability.title}</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{capability.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {capability.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.65fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Operations we unlock
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Where multi-currency elevates performance</h2>
            <p className="text-sm text-muted-foreground">
              From commissions to retail checkouts, every critical workflow benefits from having the right denomination at the right moment. Use the feature to deliver clarity, speed, and trust.
            </p>
            <div className="grid gap-4">
              {OPERATION_MOMENTS.map((moment) => {
                const Icon = moment.icon;
                return (
                  <article key={moment.label} className="relative overflow-hidden rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                    <div className="absolute -right-16 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-primary/15 blur-2xl" aria-hidden />
                    <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start">
                      <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">{moment.label}</p>
                        <h3 className="text-lg font-semibold text-foreground">{moment.headline}</h3>
                        <p className="text-sm text-muted-foreground">{moment.detail}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="relative isolate overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-primary/5 p-8 shadow-sm">
            <div className="absolute -left-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" aria-hidden />
            <div className="absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-900/30" aria-hidden />
            <div className="relative space-y-5">
              <h3 className="text-2xl font-semibold text-foreground">Currency governance playbook</h3>
              <p className="text-sm text-muted-foreground">
                Combine user experience excellence with the controls your finance team expects. Our consultants configure policy guardrails to match regulatory requirements and your operating model.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <CurrencyCircleDollar className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden />
                  <span>Define default currencies per market while allowing role-based overrides when required.</span>
                </li>
                <li className="flex gap-3">
                  <SealCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden />
                  <span>Automate rate approvals and receive alerts when fluctuations exceed tolerance thresholds.</span>
                </li>
                <li className="flex gap-3">
                  <Vault className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden />
                  <span>Keep a complete audit trail for auditors and governance committees with export-ready records.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Structured rollout, faster adoption</h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            A clear blueprint helps everyone—from corporate finance to field leaders—understand how the multi-currency system fits into daily operations. We stay close through launch and optimisation.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {ROLLOUT_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.stage} className="relative flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-semibold text-primary">{step.stage}</span>
                  <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{step.summary}</h3>
                <p className="text-sm text-muted-foreground">{step.result}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Global currencies we configure most often</h2>
          <p className="text-sm text-muted-foreground">
            The multi-currency engine adapts to any combination of fiat currencies. Here are popular choices for Cloud MLM Software clients. Add or remove markets whenever you expand.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {CURRENCY_CODES.map((code) => (
            <span
              key={code}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-4 py-2 text-sm font-medium text-foreground"
            >
              <GlobeHemisphereEast className="h-4 w-4 text-primary" aria-hidden />
              {code}
            </span>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/15 via-background to-primary/10 p-12 shadow-sm">
          <div className="absolute -left-24 top-10 h-48 w-48 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-cyan-200/25 blur-3xl dark:bg-cyan-900/40" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.45fr)]">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to make every market feel local?
              </h2>
              <p className="text-sm text-muted-foreground">
                Share your expansion plans and we will configure the multi-currency system so pricing, payouts, and compliance stay perfectly aligned. Cloud MLM Software positions you as a global leader from the very first launch.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href={contactHref}>
                    Book an exploratory call
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                  <Link href={pricingHref}>
                    Explore deployment packages
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-primary/40 bg-background/80 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">Multi-currency quick facts</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <HandCoins className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden />
                  <span>Supports hybrid payouts—wallet, bank transfer, or prepaid card—while preserving currency preferences.</span>
                </li>
                <li className="flex gap-3">
                  <ArrowsLeftRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden />
                  <span>Handles live conversions, schedule-based rates, or manual controls depending on your regulatory needs.</span>
                </li>
                <li className="flex gap-3">
                  <CurrencyCircleDollar className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden />
                  <span>Integrates with pricing catalogs so promotions, bundles, and taxes stay aligned across channels.</span>
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
