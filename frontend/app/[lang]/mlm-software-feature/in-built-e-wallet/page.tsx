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
  Coins,
  Globe2,
  Layers,
  Lock,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroSignal = {
  label: string;
  detail: string;
  icon: IconType;
};

type BenefitCard = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type UseCase = {
  title: string;
  headline: string;
  detail: string;
  icon: IconType;
};

type Safeguard = {
  title: string;
  detail: string;
  icon: IconType;
};

const HERO_SIGNALS: HeroSignal[] = [
  {
    label: "Commission-ready in minutes",
    detail: "Cloud MLM payouts land inside the wallet automatically so distributors reinvest earnings without bank delays.",
    icon: Coins
  },
  {
    label: "Spend without friction",
    detail: "The pre-loaded balance replaces card swipes for everyday purchases—from vouchers to inventory restocks.",
    icon: Wallet
  },
  {
    label: "Fit for global teams",
    detail: "Supports multilingual rollouts and multiple currencies so international networks transact with confidence.",
    icon: Globe2
  }
];

const BENEFITS: BenefitCard[] = [
  {
    title: "Always-on revenue access",
    description:
      "The in-built e-wallet acts as a secure online prepaid account. Members keep funds ready for every opportunity without depending on external gateways.",
    bullets: [
      "Balances are topped up automatically as commissions are approved.",
      "Virtual funds mirror real purchasing power across services and products.",
      "Distributors trigger orders instantly instead of waiting on bank settlements."
    ],
    icon: TrendingUp
  },
  {
    title: "Operational agility",
    description:
      "E-money streamlines critical MLM actions so teams stay in motion, whether onboarding, restocking, or collaborating with uplines.",
    bullets: [
      "Use wallet credits for buying e-pins and digital vouchers when you need them.",
      "Pay new registration or account upgrade fees directly from the balance.",
      "Cover product repurchases and day-to-day orders without leaving the platform."
    ],
    icon: Layers
  },
  {
    title: "Secure global infrastructure",
    description:
      "Enterprise-grade protections and smart fee structures keep every transaction safe, compliant, and cost-effective.",
    bullets: [
      "Advanced security controls defend every wallet movement.",
      "Low transaction fees preserve earnings for reinvestment.",
      "Language and currency support extend the experience to every market."
    ],
    icon: ShieldCheck
  }
];

const USE_CASES: UseCase[] = [
  {
    title: "Onboard a new distributor",
    headline: "Fund registrations instantly",
    detail: "Apply wallet balance to registration packages and membership upgrades the moment a prospect is ready to join.",
    icon: BadgeCheck
  },
  {
    title: "Unlock essential tools",
    headline: "Keep e-pins and vouchers stocked",
    detail: "Purchase e-pins, coupons, and resources with e-money so the network never pauses for procurement.",
    icon: Send
  },
  {
    title: "Manage repurchase cycles",
    headline: "Route deductions with clarity",
    detail: "Repurchase amounts deducted from payouts flow back into e-wallets for quick redistribution and ordering.",
    icon: Coins
  },
  {
    title: "Transfer within the network",
    headline: "Peer-to-peer collaboration",
    detail: "Move funds between users securely, supporting field incentives, shared campaigns, or emergency assistance.",
    icon: Sparkles
  }
];

const SAFEGUARDS: Safeguard[] = [
  {
    title: "Prepaid certainty",
    detail: "Store income safely for future use—mirroring a trusted online prepaid account that is always available when required.",
    icon: Wallet
  },
  {
    title: "Security by design",
    detail: "Layered protections, encryption, and role-aware controls keep every transaction compliant and auditable.",
    icon: Lock
  },
  {
    title: "Optimised for growth",
    detail: "Lower fees and instant availability let distributors focus on scaling volume instead of covering transaction overhead.",
    icon: TrendingUp
  }
];

const WALLET_TASKS = [
  "Purchase e-pins the moment a campaign kicks off.",
  "Transfer funds between distributors or downlines when support is needed.",
  "Settle new registrations and account upgrades directly through the wallet.",
  "Route repurchase deductions into e-money for transparent reconciliation.",
  "Order products or services without leaving the MLM workspace."
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "In-built E-Wallet Feature | Cloud MLM Software";
  const description =
    "Modernise your MLM payouts with Cloud MLM Software’s in-built e-wallet. Automate commission deposits, enable instant purchases, and secure every transaction.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/in-built-e-wallet", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type InBuiltEWalletPageProps = {
  params: { lang: SupportedLocale };
};

export default function InBuiltEWalletPage({ params }: InBuiltEWalletPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const featuresHref = buildLocalizedPath("/features", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-24 text-slate-100">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(147,197,253,0.35),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(125,211,252,0.25),transparent_60%),radial-gradient(circle_at_30%_85%,rgba(59,130,246,0.25),transparent_55%)]"
          aria-hidden
        />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.55fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/60 bg-sky-400/10 px-4 py-1 text-sm font-semibold text-sky-100">
              <Sparkles className="h-4 w-4" aria-hidden />
              In-built E-Wallet
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Keep commissions circulating with a secure, built-in wallet.
              </h1>
              <p className="text-base text-slate-200/85">
                The e-wallet inside Cloud MLM Software operates as a preloadable account for every distributor. Funds arrive the moment payouts clear, so teams can buy products, share resources, and fuel promotions without waiting on banks.
              </p>
              <p className="text-sm text-slate-200/75">
                This experience is rebuilt from our legacy WordPress content—refined for modern compliance, multilingual expansion, and field productivity.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Talk to an MLM wallet specialist
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-sky-200/60 text-sky-100 hover:bg-sky-400/10">
                <Link href={demoHref}>
                  Experience the live demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 shadow-xl backdrop-blur">
            {HERO_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article key={signal.label} className="flex gap-4 rounded-2xl border border-white/10 bg-black/30 p-5">
                  <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-400/20 text-sky-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h2 className="text-sm font-semibold text-slate-100">{signal.label}</h2>
                    <p className="text-sm text-slate-200/80">{signal.detail}</p>
                  </div>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Why leaders rely on Cloud MLM’s wallet
          </h2>
          <p className="text-sm text-muted-foreground">
            Directly adapted from the legacy WordPress insights, these benefits explain how the wallet shortens the distance between commission and action.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="flex h-full flex-col justify-between rounded-3xl border border-border/70 bg-gradient-to-br from-background via-background to-primary/10 p-8 shadow-sm"
              >
                <div className="space-y-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {benefit.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-background to-background" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Everyday scenarios the e-wallet accelerates
            </h2>
            <p className="text-sm text-muted-foreground">
              Drawn straight from the original page copy, these flows show how virtual funds keep distributors, mentors, and back-office teams aligned.
            </p>
            <div className="rounded-3xl border border-primary/20 bg-background/80 p-6 shadow-sm dark:bg-slate-950/70">
              <h3 className="text-base font-semibold text-foreground">Wallet task checklist</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {WALLET_TASKS.map((task) => (
                  <li key={task} className="flex gap-2">
                    <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            {USE_CASES.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <article
                  key={useCase.title}
                  className="relative rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm transition hover:border-primary/60 hover:shadow-md dark:bg-slate-950/60"
                >
                  <div className="absolute -left-10 top-8 hidden h-[calc(100%+1.5rem)] w-px bg-gradient-to-b from-primary/70 via-primary/40 to-transparent lg:block" aria-hidden />
                  <div className="flex items-center gap-3 text-primary">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/70">Step {index + 1}</p>
                      <p className="text-sm font-semibold text-foreground">{useCase.title}</p>
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{useCase.headline}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{useCase.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
        <div className="space-y-5">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Confidence engineered into every transaction
          </h2>
          <p className="text-sm text-muted-foreground">
            The WordPress source emphasised trust, safety, and efficiency. We have translated that direction into a hardened wallet architecture for today’s compliance landscape.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {SAFEGUARDS.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-3xl border border-border/70 bg-muted/40 p-5 shadow-sm dark:bg-slate-900/60">
                  <Icon className="h-5 w-5 text-primary" aria-hidden />
                  <h3 className="mt-3 text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-background p-8 shadow-sm dark:via-slate-950">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Field insight</h3>
            <p className="text-sm text-muted-foreground">
              &quot;In total, the e-wallet ensures a smooth and safe MLM business with no risks. Make sure that you choose the best MLM software with an efficient e-wallet system for your organisation.&quot;
            </p>
            <p className="text-xs text-muted-foreground">
              Guidance retained from the historic Cloud MLM Software article and reframed for today’s audience.
            </p>
          </div>
          <div className="mt-8 space-y-3">
            <p className="text-sm font-semibold text-foreground">Need a broader feature tour?</p>
            <Button asChild variant="secondary" className="w-full justify-between">
              <Link href={featuresHref}>
                Explore all platform capabilities
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border/60 bg-gradient-to-b from-background to-primary/5 py-20">
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" aria-hidden />
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Ready to modernise your payout experience?
            </h2>
            <p className="text-sm text-muted-foreground">
              We tailor the in-built e-wallet to your compensation rules, tax obligations, and regional regulations so distributors stay focused on growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Schedule a strategy session
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={demoHref}>
                  See payouts in motion
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <aside className="rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm dark:bg-slate-950/70">
            <h3 className="text-base font-semibold text-foreground">Deployment essentials</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" aria-hidden />
                <span>Confirm wallet policies for commissions, repurchases, and withdrawals.</span>
              </li>
              <li className="flex gap-2">
                <Layers className="h-4 w-4 text-primary" aria-hidden />
                <span>Map multilingual and multi-currency requirements ahead of launch.</span>
              </li>
              <li className="flex gap-2">
                <Send className="h-4 w-4 text-primary" aria-hidden />
                <span>Define peer-to-peer transfer rules to keep governance strong.</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
