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
  BarChart3,
  Building,
  CalendarClock,
  Globe,
  Layers,
  LineChart,
  Megaphone,
  PlugZap,
  Sparkles
} from "lucide-react";
import {
  Bank,
  CurrencyCircleDollar,
  Factory,
  Handshake,
  ShieldCheck
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Insight = {
  title: string;
  description: string;
  icon: IconType;
};

type Playbook = {
  name: string;
  subtitle: string;
  bullets: string[];
  icon: IconType;
};

type Stage = {
  phase: string;
  label: string;
  detail: string;
};

type Assurance = {
  title: string;
  detail: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const MARKET_INSIGHTS: Insight[] = [
  {
    title: "Mobile-first commerce",
    description:
      "With bKash, Nagad, and Rocket wallets dominating Bangladesh, your payout experience must feel instant, localised, and trustworthy in Bengali and English.",
    icon: PlugZap
  },
  {
    title: "Industrial network hubs",
    description:
      "Distributor clusters span Dhaka, Chattogram, and Khulna’s industrial belts. Logistics-linked payouts keep supply chains synchronized with sales incentives.",
    icon: Factory
  },
  {
    title: "Regulator collaboration",
    description:
      "Bangladesh Bank and the Financial Intelligence Unit expect auditable AML controls. Automated workflows keep your compliance posture inspection-ready.",
    icon: ShieldCheck
  }
];

const PAYMENT_PLAYBOOKS: Playbook[] = [
  {
    name: "Domestic settlement spine",
    subtitle: "Stabilise payouts with Bangladesh Bank-aligned processes.",
    bullets: [
      "API adapters for BRAC Bank, Dutch-Bangla Bank, City Bank, and Sonali Bank",
      "Maker-checker flows for leadership bonuses and high-value withdrawals",
      "Daily recon exports formatted for Bangladesh Bank and FIU reporting"
    ],
    icon: Bank
  },
  {
    name: "Wallet & PSP mesh",
    subtitle: "Blend mobile money with card acquiring for omni-channel growth.",
    bullets: [
      "bKash, Nagad, Rocket, Tap, and Stripe routed with risk-weighted policies",
      "Dynamic currency conversion for BDT, USD, GBP, and SGD corridors",
      "Chargeback prevention tied to AI-powered anomaly detection"
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Field enablement studio",
    subtitle: "Empower leaders with guidance, insights, and fast support.",
    bullets: [
      "Bengali-first playbooks with AI summaries for every rank and cohort",
      "Live dashboards showing team momentum, churn risk, and cash velocity",
      "Concierge escalation integrated with WhatsApp, Freshdesk, or Zendesk"
    ],
    icon: Megaphone
  }
];

const EXECUTION_STAGES: Stage[] = [
  {
    phase: "01",
    label: "Diagnostic sprint",
    detail: "Workshops with finance, compliance, and sales leadership to map today’s payout journey and uncover quick wins."
  },
  {
    phase: "02",
    label: "Integration runway",
    detail: "Connect banks, wallets, and PSPs with hardened APIs, credential vaults, and data residency controls for Bangladesh."
  },
  {
    phase: "03",
    label: "Telemetry go-live",
    detail: "Pilot cohorts launch with observational dashboards, alerts, and bilingual enablement assets to support adoption."
  },
  {
    phase: "04",
    label: "Optimize & expand",
    detail: "Automation sprints, AI-assisted forecasting, and GCC expansion playbooks keep growth momentum compounding."
  }
];

const PLATFORM_ASSURANCES: Assurance[] = [
  {
    title: "Compliance on autopilot",
    detail:
      "AML, CDD, and suspicious activity detection align with Bangladesh Bank directives, while audit logs remain immutable.",
    icon: ShieldCheck
  },
  {
    title: "Treasury clarity",
    detail:
      "Liquidity dashboards consolidate bank, wallet, and PSP balances so CFOs can plan hedging and replenishment confidently.",
    icon: BarChart3
  },
  {
    title: "Leadership certainty",
    detail:
      "Analytics stories translate millions of rows into narratives for your CEO, COO, and field generals every week.",
    icon: LineChart
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "Can we reconcile bank and mobile wallet payouts in one ledger?",
    answer:
      "Yes. Cloud MLM Software harmonises settlements from banks and mobile wallets into a single ledger with drill-down views by region, product line, and distributor rank."
  },
  {
    question: "Do you support Bengali localisation for portals and notifications?",
    answer:
      "Portals, alerts, training flows, and knowledge base content ship in Bengali and English. Governance ensures translations stay aligned with policy updates."
  },
  {
    question: "How are Bangladesh Bank compliance requirements handled?",
    answer:
      "We embed regulatory requirements into workflows: automated KYC tiers, sanction screening, suspicious activity queues, and ready-to-submit FIU reports."
  },
  {
    question: "What treasury insights are available for executive teams?",
    answer:
      "Executives see cash velocity, churn risk, promo performance, and AI-generated variance explanations in real time, so board reviews stay strategic."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Bangladesh MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Scale your Bangladesh MLM network with compliant, mobile-first payment gateways. Cloud MLM Software unifies banks, mobile wallets, and PSPs with automation, analytics, and bilingual enablement.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/bangladesh", locale)
    },
    openGraph: {
      title,
      description
    },
    twitter: {
      title,
      description
    }
  };
}

type BangladeshPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function BangladeshPaymentGatewaysPage({
  params
}: BangladeshPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden px-6 pb-20 pt-24 sm:px-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.25),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(56,189,248,0.2),transparent_55%),radial-gradient(circle_at_40%_85%,rgba(59,130,246,0.25),transparent_55%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(45,212,191,0.2),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_40%_85%,rgba(37,99,235,0.2),transparent_55%)]" aria-hidden />
        <div className="container relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)] lg:items-center">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 shadow-sm dark:border-emerald-400/40 dark:bg-slate-900/60 dark:text-emerald-300">
              <Globe className="h-4 w-4" aria-hidden />
              Bangladesh payout intelligence
            </span>
            <div className="space-y-6 text-slate-900 dark:text-slate-100">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Launch Bangladesh MLM payment gateways with mobile money at the core
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Cloud MLM Software synchronises local banks, mobile wallets, and cross-border PSPs so your distributors experience
                instant, compliant payouts wherever they drive growth.
              </p>
            </div>
            <div className="grid gap-4 text-slate-600 dark:text-slate-300 sm:grid-cols-3">
              {MARKET_INSIGHTS.map((insight) => (
                <div
                  key={insight.title}
                  className="rounded-3xl border border-emerald-200/60 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60"
                >
                  <insight.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                  <h2 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">{insight.title}</h2>
                  <p className="mt-2 text-sm">{insight.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-emerald-600 text-white hover:bg-emerald-500">
                <Link href={contactHref}>
                  Architect your rollout
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/70"
              >
                <Link href={demoHref}>Request a guided demo</Link>
              </Button>
            </div>
          </div>
          <aside className="relative isolate flex flex-col gap-6 rounded-[2.75rem] border border-emerald-200/70 bg-white/80 p-8 shadow-2xl backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="absolute inset-x-8 top-6 -z-10 h-[240px] rounded-[2.5rem] bg-gradient-to-br from-emerald-500/20 via-transparent to-sky-500/20 blur-2xl" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
              Executive highlights
            </p>
            <div className="grid gap-5">
              <div className="rounded-2xl border border-emerald-200/70 bg-white/90 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50">
                <LineChart className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />
                <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">Instant visibility</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  AI narratives explain distributor momentum, liquidity, and churn signals in plain language.
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-200/70 bg-white/90 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50">
                <Building className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />
                <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">Enterprise control</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Structured controls align with Bangladesh Bank, FIU, and corporate governance directives.
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-200/70 bg-white/90 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50">
                <Handshake className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />
                <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">Field advocacy</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Success pods and bilingual training keep distributor trust high during every expansion wave.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-200/70 bg-emerald-50/80 p-5 text-sm text-emerald-900 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50 dark:text-slate-100">
              <p className="font-semibold">Explore additional regions</p>
              <p className="mt-1 text-xs">
                Visit the full payment gateway catalogue to benchmark coverage across Asia and beyond.
              </p>
              <Button
                asChild
                size="sm"
                variant="ghost"
                className="mt-4 h-10 justify-start gap-2 rounded-xl border border-transparent px-3 text-emerald-700 hover:bg-white dark:text-slate-200 dark:hover:bg-slate-800/60"
              >
                <Link href={gatewaysHref}>
                  View all gateways
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6 sm:px-12">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Payment playbooks tailored for Bangladesh growth
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Each playbook blends compliance, automation, and human expertise so your payouts become a strategic growth lever.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {PAYMENT_PLAYBOOKS.map((play) => (
              <article
                key={play.name}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-slate-200/70 bg-white/80 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <play.icon className="h-8 w-8 text-emerald-600 dark:text-emerald-300" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{play.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{play.subtitle}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {play.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-xl border border-transparent bg-slate-50/70 p-3 leading-relaxed shadow-sm dark:bg-slate-950/40"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-slate-50/60 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container mx-auto max-w-5xl space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Execution runway designed for velocity
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Stay transparent with executives, regulators, and field leaders through each milestone of your rollout.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {EXECUTION_STAGES.map((stage) => (
              <div
                key={stage.phase}
                className="flex h-full flex-col gap-3 rounded-3xl border border-slate-200/70 bg-white/80 p-6 text-left shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-300">
                  Phase {stage.phase}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stage.label}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{stage.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-12">
        <div className="container mx-auto max-w-5xl space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Guard rails that keep your brand trusted
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              We layer automation, analytics, and human expertise so every payout cycle strengthens credibility.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PLATFORM_ASSURANCES.map((item) => (
              <div
                key={item.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <item.icon className="h-7 w-7 text-emerald-600 dark:text-emerald-300" aria-hidden />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200/80 bg-slate-50/60 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container mx-auto max-w-5xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Strategic answers for finance, compliance, and field leaders planning Bangladesh expansion.
            </p>
          </div>
          <div className="space-y-6">
            {FAQ_ITEMS.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/50"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 pb-24 pt-20 sm:px-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-700 via-emerald-600 to-sky-700 dark:from-emerald-800 dark:via-emerald-700 dark:to-sky-800" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.15),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(255,255,255,0.18),transparent_55%)]" aria-hidden />
        <div className="container mx-auto max-w-4xl space-y-6 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">Bangladesh momentum</p>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
            Turn Bangladesh&apos;s mobile-first economy into your competitive edge
          </h2>
          <p className="text-base text-white/80">
            Bring every bank, wallet, and PSP into a single, AI-ready payout fabric. Cloud MLM Software keeps your field leaders
            inspired, your regulators confident, and your executives informed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-emerald-700 hover:bg-slate-100">
              <Link href={contactHref}>
                Book a strategy session
                <ArrowUpRight className="h-4 w-4 text-emerald-500" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/70 bg-transparent text-white hover:bg-white/10"
            >
              <Link href={pricingHref}>Review commercial options</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  if (!isSupportedLocale(lang)) {
    return i18n.defaultLocale as Locale;
  }

  return lang as Locale;
}
