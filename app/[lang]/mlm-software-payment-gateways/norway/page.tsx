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
  BarChart4,
  Compass,
  Layers,
  LineChart,
  Network,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import {
  Bank,
  ChartPieSlice,
  CurrencyCircleDollar,
  Globe,
  Lightning,
  LockKey,
  Planet,
  RocketLaunch
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  eyebrow: string;
  title: string;
  description: string;
  icon: IconType;
};

type GatewayPlay = {
  name: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type MarketSignal = {
  label: string;
  detail: string;
  icon: IconType;
};

type TimelineStage = {
  phase: string;
  headline: string;
  summary: string;
  artifacts: string[];
  icon: IconType;
};

type FAQItem = {
  question: string;
  answer: string;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    eyebrow: "Card-first economy",
    title: "98% digital payment penetration",
    description:
      "Norway’s consumers prefer cashless experiences. We normalise BankAxept, Visa, Mastercard, and Vipps data so your finance team sees one ledger.",
    icon: CurrencyCircleDollar
  },
  {
    eyebrow: "AI observability",
    title: "Forecasting in real time",
    description:
      "Sales, commissions, and chargeback telemetry feed AI copilots that surface anomalies before they affect your field leaders.",
    icon: LineChart
  },
  {
    eyebrow: "Regulatory confidence",
    title: "PSD2-ready governance",
    description:
      "Multi-factor approvals, audit trails, and consent tracking satisfy Norway’s financial supervisors and pan-European directives.",
    icon: ShieldCheck
  }
];

const GATEWAY_PLAYS: GatewayPlay[] = [
  {
    name: "Vipps & domestic wallets",
    description:
      "Give Norwegian distributors the experience they already trust while keeping transactions aligned with PSD2 requirements.",
    bullets: [
      "Vipps APIs orchestrated beside PayPal, Stripe, and Amazon Pay for unified reporting",
      "Dynamic SCA handling with exemptions surfaced to compliance reviewers",
      "Distributor onboarding validated against Norwegian BankID data"
    ],
    icon: Lightning
  },
  {
    name: "Nordic acquiring bundle",
    description:
      "Optimise authorisation rates through local acquirers while maintaining your global treasury policies.",
    bullets: [
      "BankAxept, Nets, and Adyen acquiring connectors with cascading failover logic",
      "Currency buffers for NOK, EUR, and USD settlements managed in one console",
      "Dispute automation workflows so customer care reacts within EU timelines"
    ],
    icon: Bank
  },
  {
    name: "Subscription & marketplace flows",
    description:
      "Support Norway’s recurring memberships and digital product catalogue with enterprise-grade reliability.",
    bullets: [
      "Stripe Billing and 2Checkout plans synced to Cloud MLM Software compensation models",
      "Automated tax tagging for VOEC, EU VAT OSS, and cross-border sales into the Nordics",
      "Revenue recognition exports that align with IFRS compliance requirements"
    ],
    icon: ChartPieSlice
  },
  {
    name: "Retail & experiential rollouts",
    description:
      "Equip pop-up events from Oslo to Tromsø with offline resilience that keeps orders flowing even in remote areas.",
    bullets: [
      "Braintree tokenisation with device fingerprinting for ruggedised field tablets",
      "Offline caching that syncs orders, payouts, and AML checks once connectivity returns",
      "AI-generated shift summaries, highlighting inventory gaps and upsell opportunities"
    ],
    icon: RocketLaunch
  }
];

const MARKET_SIGNALS: MarketSignal[] = [
  {
    label: "Nordic interoperability",
    detail:
      "Cloud MLM Software harmonises data from Norway, Sweden, Denmark, and Finland to keep multi-country leaders aligned.",
    icon: Globe
  },
  {
    label: "ESG-conscious operations",
    detail:
      "We track energy optimisation, carbon offsetting for shipments, and sustainability KPIs so your reports match stakeholder expectations.",
    icon: Planet
  },
  {
    label: "AI-enabled service desk",
    detail:
      "Support workflows integrate AI copilots that summarise ticket history, recommend next actions, and escalate in-flight AML alerts.",
    icon: Network
  }
];

const TIMELINE: TimelineStage[] = [
  {
    phase: "01",
    headline: "Compliance blueprinting",
    summary:
      "Map Norway’s regulatory expectations, licensing needs, and partner agreements before touching a single API.",
    artifacts: [
      "Stakeholder workshops with finance, compliance, and field leadership",
      "Gateway scorecard for Vipps, BankAxept, PayPal, Amazon Pay, Stripe, Adyen, 2Checkout, and Braintree",
      "PSD2 consent model documented with retention schedules"
    ],
    icon: Compass
  },
  {
    phase: "02",
    headline: "Experience orchestration",
    summary:
      "Prototype enrolment, checkout, and payout flows with your Nordic teams to secure early adoption.",
    artifacts: [
      "White-labeled onboarding journeys with Norwegian UX copy and BankID hooks",
      "Sandbox credentials and data-contract playbooks for every gateway",
      "Automated testing harness covering cash flow, commissions, and chargebacks"
    ],
    icon: Layers
  },
  {
    phase: "03",
    headline: "Controlled launch sprint",
    summary:
      "Roll out with live observability dashboards so executives see NOK cash flow, sales velocity, and treasury exposure immediately.",
    artifacts: [
      "Dual-run reconciliation against legacy spreadsheets for three compensation cycles",
      "Real-time anomaly alerts for authorisation dips or unexpected settlement delays",
      "AI-generated executive briefs summarising performance and risk posture"
    ],
    icon: BarChart4
  },
  {
    phase: "04",
    headline: "Iterate & expand",
    summary:
      "Extend the Norwegian blueprint to additional Nordic markets with localisation packs and AI insights built in.",
    artifacts: [
      "Post-launch retrospectives aligned to OKRs and compensation KPIs",
      "Automation backlog prioritised with finance and operations leadership",
      "Playbooks for cross-border payouts, including Sweden, Denmark, and Iceland"
    ],
    icon: Sparkles
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which payment gateways does Cloud MLM Software recommend for Norway?",
    answer:
      "We typically combine Vipps, BankAxept-connected acquirers, Stripe, PayPal, Amazon Pay, Adyen, Braintree, Authorize.Net, and 2Checkout. This mix balances domestic conversion strength with global reach."
  },
  {
    question: "How do you handle PSD2 and SCA requirements across gateways?",
    answer:
      "We orchestrate strong customer authentication using contextual exemptions, biometric flows, and delegated authentication. Compliance teams receive live evidence packs for each transaction."
  },
  {
    question: "Can Cloud MLM Software reconcile NOK, EUR, and USD in one ledger?",
    answer:
      "Yes. Treasury teams access consolidated dashboards with currency buffers, AI-driven hedging recommendations, and audit-ready exports mapped to your ERP."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Norway MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Design a PSD2-compliant payment stack for Norway. Cloud MLM Software unifies Vipps, BankAxept, Stripe, PayPal, Amazon Pay, Adyen, and other gateways for AI-ready MLM growth.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/norway", locale)
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

type NorwayPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function NorwayPaymentGatewaysPage({ params }: NorwayPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative isolate overflow-hidden rounded-[3rem] border border-slate-200/70 bg-gradient-to-br from-sky-50 via-white to-slate-100 px-6 py-20 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 sm:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.35),transparent_60%),radial-gradient(circle_at_80%_25%,rgba(14,116,144,0.25),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(5,150,105,0.2),transparent_55%)] dark:bg-[radial-gradient(circle_at_20%_25%,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(5,150,105,0.4),transparent_50%),radial-gradient(circle_at_45%_85%,rgba(12,74,110,0.45),transparent_60%)]" aria-hidden />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.8fr)] lg:items-start">
          <div className="space-y-10 text-slate-900 dark:text-slate-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
              <Globe className="h-4 w-4" aria-hidden />
              Norway payment gateways
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Orchestrate Norway’s MLM payments with AI-ready precision
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Cloud MLM Software synchronises Vipps, BankAxept, PayPal, Stripe, Amazon Pay, Adyen, 2Checkout, Authorize.Net, and Braintree into a single experience. Launch in Norway with PSD2-compliant oversight, AI-native analytics, and distributor journeys that feel unmistakably Nordic.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-sky-500 dark:hover:bg-sky-400"
              >
                <Link href={contactHref}>
                  Speak with a payment strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-200 bg-white/80 text-slate-800 hover:bg-slate-100 dark:border-sky-500/40 dark:bg-transparent dark:text-slate-200 dark:hover:bg-sky-500/10"
              >
                <Link href={demoHref}>Explore the guided demo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-slate-700 hover:bg-white/60 dark:text-slate-200 dark:hover:bg-slate-800/60"
              >
                <Link href={gatewaysHref}>Browse all payment regions</Link>
              </Button>
            </div>
          </div>
          <aside className="rounded-[2.5rem] border border-slate-200/70 bg-white/80 p-8 shadow-lg backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="space-y-6">
              {HERO_HIGHLIGHTS.map((item) => (
                <div key={item.title} className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <item.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                      {item.eyebrow}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                  <div className="h-px bg-gradient-to-r from-slate-200/70 via-transparent to-transparent dark:from-slate-700/60" aria-hidden />
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-6 w-full gap-2 bg-sky-600 text-white hover:bg-sky-500">
              <Link href={pricingHref}>
                Review Norway implementation packs
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
              <Network className="h-4 w-4" aria-hidden />
              Gateway playbook
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment architecture calibrated for Norway’s omnichannel distributors
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Every gateway referenced in the original site—including PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, and 2Checkout—sits alongside Nordic leaders like Vipps and BankAxept. We orchestrate them with AI telemetry, compliance guardrails, and automation-ready workflows.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="border-slate-200 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/60">
            <Link href={contactHref}>Schedule a technical scoping session</Link>
          </Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_PLAYS.map((play) => (
            <article
              key={play.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-sm transition dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <play.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{play.name}</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{play.description}</p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {play.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-3.5 w-3.5 text-sky-500" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-slate-200/70 bg-white py-20 dark:border-slate-800 dark:bg-slate-950">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-sky-100/60 via-transparent to-transparent dark:from-sky-500/15" aria-hidden />
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Strategic signals powering Norway’s payment decisions
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              AI copilots keep leadership informed, combining distributor behaviour, regulatory updates, and treasury performance into one narrative tailored to Norway.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {MARKET_SIGNALS.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
                >
                  <signal.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{signal.label}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{signal.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-slate-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-lg dark:border-slate-700">
            <h3 className="text-lg font-semibold">AI-powered operations hub</h3>
            <p className="mt-3 text-sm text-slate-200">
              Bring treasury, compliance, and field teams together with automated summaries, anomaly detection, and predictive revenue signals. Every insight is export-ready for board decks or regulator conversations.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <Sparkles className="mt-1 h-4 w-4" aria-hidden />
                <span>Executive-ready briefs summarising Norwegian performance each morning.</span>
              </li>
              <li className="flex items-start gap-2">
                <LockKey className="mt-1 h-4 w-4" aria-hidden />
                <span>SCA, consent, and audit logs rendered in human-readable formats.</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="mt-1 h-4 w-4" aria-hidden />
                <span>Automation triggers that open tickets, notify Slack channels, or update CRM records.</span>
              </li>
            </ul>
            <Button asChild size="lg" className="mt-6 w-full gap-2 bg-white text-slate-900 hover:bg-slate-200">
              <Link href={demoHref}>
                Try the AI command centre
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
            <Layers className="h-4 w-4" aria-hidden />
            Delivery blueprint
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A delivery sequence tailored to Norway’s distributed leadership
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Each phase blends human expertise with automation so finance, compliance, and field leaders stay aligned from discovery through optimisation.
          </p>
        </div>
        <div className="relative grid gap-8 lg:grid-cols-4">
          <div className="absolute inset-y-0 left-[12.5%] hidden w-px bg-gradient-to-b from-sky-500/30 via-transparent to-transparent lg:block" aria-hidden />
          <div className="absolute inset-y-0 left-[37.5%] hidden w-px bg-gradient-to-b from-sky-500/30 via-transparent to-transparent lg:block" aria-hidden />
          <div className="absolute inset-y-0 left-[62.5%] hidden w-px bg-gradient-to-b from-sky-500/30 via-transparent to-transparent lg:block" aria-hidden />
          {TIMELINE.map((stage) => (
            <article
              key={stage.phase}
              className="relative flex h-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                <span>{stage.phase}</span>
                <stage.icon className="h-4 w-4 text-sky-600 dark:text-sky-300" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stage.headline}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{stage.summary}</p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {stage.artifacts.map((artifact) => (
                  <li key={artifact} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-4 rounded-full bg-sky-500/80" aria-hidden />
                    <span>{artifact}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Norway payment gateway FAQs
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Finance leaders, compliance teams, and distributor councils usually ask the following questions when planning their Norway rollout.
          </p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.question}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[3rem] border border-slate-200/70 bg-gradient-to-br from-sky-600 via-sky-500 to-emerald-500 px-6 py-16 text-white shadow-lg dark:border-slate-700/60">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.25),transparent_55%),radial-gradient(circle_at_90%_80%,rgba(255,255,255,0.25),transparent_50%)]" aria-hidden />
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Lead Norway’s MLM market with resilient, AI-optimised payments
          </h2>
          <p className="text-base text-sky-50/90">
            Cloud MLM Software connects PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, Vipps, and BankAxept in one platform. Empower your teams to scale with certainty from day one.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-sky-700 hover:bg-slate-100 dark:text-sky-600">
              <Link href={contactHref}>
                Build your Norway launch plan
                <ArrowUpRight className="h-4 w-4 text-sky-600" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/70 text-white hover:bg-white/10"
            >
              <Link href={demoHref}>Experience Cloud MLM Software</Link>
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

