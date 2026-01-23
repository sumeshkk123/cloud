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
  BadgeDollarSign,
  BarChart3,
  Cpu,
  Globe2,
  ShieldAlert,
  Sparkles,
  Waves
} from "lucide-react";
import {
  CurrencyBtc,
  Graph,
  Infinity as InfinityIcon,
  Keyhole,
  Lightning,
  Planet,
  ShieldCheck
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type Primer = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Highlight = {
  title: string;
  description: string;
  icon: IconType;
};

type Outlook = {
  title: string;
  insight: string;
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    label: "Total BTC planned supply",
    value: "21 million",
    description: "Finite issuance hard-coded into the Bitcoin protocol, reinforcing scarcity.",
    icon: InfinityIcon
  },
  {
    label: "Average daily transactions",
    value: "200K+",
    description: "Transfers verified across the network each day without a central authority.",
    icon: Waves
  },
  {
    label: "Mining difficulty growth",
    value: "▶ Rising",
    description: "Computational puzzles become harder as more miners join, securing the network.",
    icon: Cpu
  }
];

const PRIMER: Primer[] = [
  {
    title: "What is Bitcoin?",
    summary:
      "Bitcoin is a decentralised digital currency formed entirely from data—no physical bills, no central bank. Ownership lives in cryptographic keys held by individuals.",
    bullets: [
      "Created in 2009 by the pseudonymous Satoshi Nakamoto.",
      "Supply is algorithmically limited and new coins enter circulation via mining rewards.",
      "Transfers settle globally within minutes for a fraction of traditional fees."
    ],
    icon: CurrencyBtc
  },
  {
    title: "How does it work?",
    summary:
      "A peer-to-peer network of miners validates transactions by solving cryptographic puzzles. Successful miners append blocks to the blockchain and earn BTC.",
    bullets: [
      "Every node maintains a ledger copy to prevent double spending.",
      "Difficulty adjusts roughly every two weeks to keep block production steady.",
      "Security depends on distributed computing power rather than a central authority."
    ],
    icon: Lightning
  },
  {
    title: "Why the hype?",
    summary:
      "Bitcoin’s borderless design, low settlement fees, and resistance to inflation attract investors and innovators searching for alternatives to traditional currencies.",
    bullets: [
      "No gatekeepers: anyone with internet access can participate.",
      "Useful as a digital store of value or payment rail for high-trust peers.",
      "Catalyst for broader Web3 experiments, from remittances to programmable finance."
    ],
    icon: Sparkles
  }
];

const BENEFITS: Highlight[] = [
  {
    title: "Borderless and programmable",
    description:
      "Send value across continents without intermediaries. Integrate BTC into apps, smart contracts, or e-commerce experiences with open APIs.",
    icon: Globe2
  },
  {
    title: "Predictable monetary policy",
    description:
      "No central bank can mint unlimited coins. A halving cycle reduces issuance roughly every four years, which historically tightened supply.",
    icon: BadgeDollarSign
  },
  {
    title: "Transparent security model",
    description:
      "Transactions and supply are verifiable on-chain. Consensus rests on mathematics and energy expenditure, not political negotiations.",
    icon: ShieldCheck
  }
];

const RISKS: Highlight[] = [
  {
    title: "Volatility and speculation",
    description:
      "Price swings remain steep as markets react to macro news, regulatory updates, or leverage imbalances. Not all businesses can absorb that risk.",
    icon: BarChart3
  },
  {
    title: "Security responsibilities",
    description:
      "Self-custody requires safeguarding private keys. Hacks at custodial exchanges have led to historic losses, reminding users to choose tools wisely.",
    icon: ShieldAlert
  },
  {
    title: "Regulatory uncertainty",
    description:
      "Nations debate how to classify or tax cryptocurrencies. Shifts in policy can influence adoption, liquidity, and corporate sentiment overnight.",
    icon: Keyhole
  }
];

const OUTLOOK: Outlook[] = [
  {
    title: "Store of value contender",
    insight:
      "As inflation erodes fiat purchasing power, investors explore Bitcoin as “digital gold.” For dominance, volatility must stabilise and custody must become mainstream-ready.",
    icon: Planet
  },
  {
    title: "Payment rail possibilities",
    insight:
      "Layer-two networks and stablecoin bridges could make BTC-denominated commerce more practical, especially for cross-border or micro transactions.",
    icon: Graph
  },
  {
    title: "Hybrid monetary future",
    insight:
      "Bitcoin may coexist with fiat, central bank digital currencies, and tokenised assets. Dominance might not mean replacement but integration into broader financial stacks.",
    icon: Globe2
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Could Bitcoin Be the World’s Dominant Currency?";
  const description =
    "Explore the fundamentals, opportunities, and hurdles that shape Bitcoin’s path toward global currency relevance with Cloud MLM Software’s analysis.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/could-bitcoin-be-the-worlds-dominant-currency", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BitcoinDominancePageProps = {
  params: { lang: SupportedLocale };
};

export default function BitcoinDominancePage({ params }: BitcoinDominancePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-slate-100 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(251,191,36,0.32),transparent_60%),radial-gradient(circle_at_82%_22%,rgba(30,64,175,0.22),transparent_60%),radial-gradient(circle_at_70%_78%,rgba(20,184,166,0.2),transparent_60%)]" />
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
                Crypto insight · Monetary innovation
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Could Bitcoin be the world’s dominant currency?
              </h1>
              <p className="text-lg text-slate-700">
                Bitcoin’s popularity surge ignited debates from network marketing communities to global economists. We revisit the original
                Cloud MLM Software article with updated context, outlining the fundamentals, promise, and hurdles ahead.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="bg-amber-500 text-white hover:bg-amber-400">
                  <Link href={demoHref}>
                    Explore crypto-ready modules
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100">
                  <Link href={contactHref}>
                    Discuss fintech strategy
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-amber-100">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200"
                >
                  <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-amber-600">
                    <metric.icon className="h-5 w-5 text-amber-500" aria-hidden />
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
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Bitcoin basics in minutes</h2>
          <p className="mt-4 text-lg text-slate-600">
            Refresh the essentials before diving into broader economic implications. These insights reframe the legacy article’s definitions for
            today’s readers.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PRIMER.map((card) => (
            <article
              key={card.title}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-100"
            >
              <card.icon className="h-10 w-10 text-amber-500" aria-hidden />
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.summary}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 text-emerald-400" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-100 to-amber-50 p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900">Why enthusiasts see dominance potential</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                The benefits highlighted in the original article—low fees, global reach, tamper resistance—still drive adoption. Here they are,
                tuned for today’s crypto landscape.
              </p>
              <Button asChild variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100">
                <Link href={pricingHref}>
                  Review crypto integration options
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {BENEFITS.map((benefit) => (
                <div key={benefit.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <benefit.icon className="h-8 w-8 text-amber-500" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                Reality check
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">Barriers that temper the narrative</h2>
              <p className="text-sm text-slate-600">
                Volatility, security, and regulation can slow or divert Bitcoin’s path to dominance. Understand these constraints before shaping
                a strategy.
              </p>
            </div>
            <div className="grid gap-4">
              {RISKS.map((risk) => (
                <div key={risk.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <div className="flex items-center gap-3">
                    <risk.icon className="h-6 w-6 text-amber-500" aria-hidden />
                    <h3 className="text-lg font-semibold text-slate-900">{risk.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{risk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-50 via-white to-slate-100 p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,300px),minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">Where the story could go next</h2>
              <p className="text-sm text-slate-600">
                Will Bitcoin replace fiat? Perhaps co-exist? These scenarios summarise current expert debates and help guide technology choices.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {OUTLOOK.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <item.icon className="h-7 w-7 text-amber-500" aria-hidden />
                  <h3 className="mt-3 text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.insight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-100 via-white to-slate-100 p-10 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Chart your crypto-enabled future</h2>
            <p className="text-lg text-slate-600">
              Cloud MLM Software helps enterprises model compensation, payments, and compliance for digital assets—whether you adopt Bitcoin,
              stablecoins, or hybrid strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-amber-500 text-white hover:bg-amber-400">
                <Link href={demoHref}>
                  Schedule a digital currency session
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100">
                <Link href={contactHref}>
                  Speak with a strategist
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
