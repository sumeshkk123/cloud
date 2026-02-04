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
  Bot,
  Globe2,
  Key,
  Layers,
  Link2,
  Lock,
  MessageCircle,
  RadioTower,
  Shield,
  Wallet
} from "lucide-react";
import {
  Brain,
  ChatText,
  CurrencyBtc,
  Lightning,
  MagnetStraight,
  PaperPlaneTilt,
  Rocket,
  SealCheck,
  TrendUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type Step = {
  title: string;
  description: string;
  icon: IconType;
};

type Opportunity = {
  title: string;
  detail: string;
  icon: IconType;
};

type SafetyTip = {
  title: string;
  points: string[];
};

const METRICS: Metric[] = [
  {
    label: "Telegram crypto communities",
    value: "20K+",
    description: "Active public channels and groups discussing trading signals, bot automations, and affiliate offers.",
    icon: MessageCircle
  },
  {
    label: "Bitcoin daily transactions",
    value: "200K+",
    description: "Transfers verified on-chain every day, making BTC one of the most liquid digital assets.",
    icon: CurrencyBtc
  },
  {
    label: "Average bot response time",
    value: "< 1s",
    description: "Automated Telegram bots trigger payouts, updates, and alerts almost instantly.",
    icon: Bot
  }
];

const GET_STARTED: Step[] = [
  {
    title: "1. Secure your wallet",
    description:
      "Choose a reputable Bitcoin wallet (hardware, mobile, or custodial) and back up seed phrases offline so your earnings stay protected.",
    icon: Wallet
  },
  {
    title: "2. Set up Telegram safely",
    description:
      "Enable two-factor authentication, review privacy settings, and organise crypto chats into folders for clarity.",
    icon: PaperPlaneTilt
  },
  {
    title: "3. Evaluate earning channels",
    description:
      "Join vetted communities, affiliate programmes, or automation bots. Verify legitimacy before sharing funds or personal data.",
    icon: RadioTower
  }
];

const OPPORTUNITIES: Opportunity[] = [
  {
    title: "Trading signals & education",
    detail:
      "Telegram channels provide market analysis, sentiment alerts, and algorithmic signals that help you time trades responsibly.",
    icon: TrendUp
  },
  {
    title: "Affiliate & referral programmes",
    detail:
      "Promote exchanges, wallets, or fintech tools. Earn BTC when referrals complete KYC, trade, or subscribe to premium plans.",
    icon: MagnetStraight
  },
  {
    title: "Automation & bots",
    detail:
      "Deploy DCA bots, arbitrage tools, or MLM compensation bots to handle repetitive workflows while you monitor outcomes.",
    icon: Lightning
  },
  {
    title: "Community marketplaces",
    detail:
      "Peer-to-peer channels enable micro-gigs, NFT drops, or digital product sales with Bitcoin as the settlement currency.",
    icon: Link2
  }
];

const SAFETY_TIPS: SafetyTip[] = [
  {
    title: "Evaluate every opportunity",
    points: [
      "Confirm the team, roadmap, and revenue model before depositing funds.",
      "Look for third-party audits or long-term track records.",
      "Avoid offers that guarantee outsized returns with minimal timelines."
    ]
  },
  {
    title: "Protect access credentials",
    points: [
      "Store seed phrases offline and never share them in chats.",
      "Use unique passwords and hardware keys for wallets and exchanges.",
      "Segment funds across hot wallets (for trading) and cold storage (for savings)."
    ]
  },
  {
    title: "Automate compliance",
    points: [
      "Track taxable events and maintain exportable transaction logs.",
      "Comply with AML/KYC when engaging in large or commercial trades.",
      "Regularly review local regulations around digital assets and promotions."
    ]
  }
];

const TRUST_CHECKS: Step[] = [
  {
    title: "Look for reputation signals",
    description:
      "Legitimate bots and channels share verifiable testimonials, audited smart contracts, and transparent payout logic.",
    icon: SealCheck
  },
  {
    title: "Test with micro-transactions",
    description:
      "Start small to validate deposit, trade, and withdrawal flows before scaling volume. Monitor latency and fees.",
    icon: Layers
  },
  {
    title: "Use AI for due diligence",
    description:
      "Let copilots summarise group histories, sentiment, and risk flags so you stay informed without sifting through thousands of messages.",
    icon: Brain
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Earn Money Using Telegram and Bitcoin";
  const description =
    "Discover practical, safe strategies to monetise Telegram channels with Bitcoin—covering wallets, bots, affiliate programmes, and risk controls.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/earn-money-using-telegram-and-bitcoin", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type TelegramBitcoinPageProps = {
  params: { lang: SupportedLocale };
};

export default function TelegramBitcoinPage({ params }: TelegramBitcoinPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(67,56,202,0.28),transparent_60%),radial-gradient(circle_at_82%_22%,rgba(147,51,234,0.22),transparent_60%),radial-gradient(circle_at_68%_78%,rgba(14,165,233,0.2),transparent_60%)]" />
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
                Crypto enablement · Telegram playbook
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Earn money using Telegram and Bitcoin
              </h1>
              <p className="text-lg text-slate-700">
                Telegram communities and BTC micropayments unlock fresh revenue paths—from automation bots to affiliate offers. Build them responsibly with the
                safety, compliance, and coaching insights outlined here.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="bg-indigo-600 text-white hover:bg-indigo-500">
                  <Link href={demoHref}>
                    Explore crypto automation demos
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100">
                  <Link href={contactHref}>
                    Connect with fintech strategists
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-indigo-100">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100"
                >
                  <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-indigo-600">
                    <metric.icon className="h-5 w-5 text-indigo-500" aria-hidden />
                    {metric.label}
                  </div>
                  <p className="text-3xl font-semibold text-slate-900">{metric.value}</p>
                  <p className="mt-2 text-sm text-slate-600">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900">Bitcoin fundamentals in plain language</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Bitcoin is decentralised, secure through cryptography, and measured in satoshis. Understanding the mechanics keeps your Telegram play compliant and
              sustainable.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <Globe2 className="h-8 w-8 text-indigo-600" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Decentralised value</h3>
              <p className="mt-2 text-sm text-slate-600">
                No central bank controls issuance. Blocks mined every ~10 minutes add transactions to the blockchain ledger.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <Key className="h-8 w-8 text-indigo-600" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Keys and wallets</h3>
              <p className="mt-2 text-sm text-slate-600">
                Public keys receive funds; private keys unlock them. Store private keys offline to avoid theft or loss.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <Rocket className="h-8 w-8 text-indigo-600" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Fast, borderless payouts</h3>
              <p className="mt-2 text-sm text-slate-600">
                Send BTC anywhere in minutes with minimal fees—perfect for rewarding affiliates or automating Telegram bot commissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-indigo-50 to-purple-50 p-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Three steps to start earning responsibly</h2>
            <p className="mt-4 text-lg text-slate-600">
              Revisit the basics from the original article: wallet, platform, and opportunity. Execute each step with today’s best practices.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {GET_STARTED.map((step) => (
              <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <step.icon className="h-8 w-8 text-indigo-600" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                Monetisation ideas
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">Legitimate Telegram + Bitcoin opportunities</h2>
              <p className="text-sm text-slate-600">
                Combine education, affiliate strategies, and automation to earn ethically—no get-rich-quick hype required.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {OPPORTUNITIES.map((opportunity) => (
                <div key={opportunity.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <div className="flex items-center gap-3">
                    <opportunity.icon className="h-6 w-6 text-indigo-600" aria-hidden />
                    <h3 className="text-base font-semibold text-slate-900">{opportunity.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{opportunity.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-purple-200 bg-gradient-to-r from-purple-100 via-white to-indigo-100 p-10">
          <div className="grid gap-6 md:grid-cols-3">
            {TRUST_CHECKS.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <item.icon className="h-8 w-8 text-indigo-600" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                Security checklist
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">Stay safe while you scale</h2>
              <p className="text-sm text-slate-600">
                Telegram and Bitcoin unlock endless opportunities—paired with disciplined security, you can compound gains without exposing yourself to unnecessary risk.
              </p>
            </div>
            <div className="grid gap-4">
              {SAFETY_TIPS.map((tip) => (
                <div key={tip.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <h3 className="text-base font-semibold text-slate-900">{tip.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {tip.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <ArrowRight className="mt-1 h-4 w-4 text-indigo-400" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-10 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Build sustainable crypto income channels</h2>
            <p className="text-lg text-slate-600">
              Cloud MLM Software guides fintech innovators, MLM brands, and influencers as they blend Telegram engagement with Bitcoin monetisation—responsibly and at scale.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-indigo-600 text-white hover:bg-indigo-500">
                <Link href={demoHref}>
                  Request a crypto strategy session
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-indigo-300 text-indigo-700 hover:bg-indigo-100">
                <Link href={contactHref}>
                  Partner with our experts
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="ghost" className="text-slate-700 hover:bg-slate-100">
                <Link href={pricingHref}>
                  Explore solution tiers
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
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
