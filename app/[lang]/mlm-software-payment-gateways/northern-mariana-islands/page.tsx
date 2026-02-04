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
  Compass,
  GaugeCircle,
  Layers3,
  LineChart,
  MapPin,
  ServerCog,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import {
  AirplaneTilt,
  Bank,
  ChartLineUp,
  CurrencyCircleDollar,
  GlobeHemisphereWest,
  Handshake,
  Lifebuoy
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type GatewayPillar = {
  title: string;
  narrative: string;
  highlights: string[];
  icon: IconType;
};

type StrategyInsight = {
  title: string;
  summary: string;
  detail: string;
  icon: IconType;
};

type TimelineStage = {
  phase: string;
  heading: string;
  description: string;
  deliverables: string[];
  icon: IconType;
};

type AssurancePoint = {
  title: string;
  description: string;
  icon: IconType;
};

type FAQItem = {
  question: string;
  answer: string;
};

const HERO_METRICS: HeroMetric[] = [
  {
    label: "Settlement currency",
    value: "USD native",
    description:
      "Cloud MLM Software reconciles U.S. dollar inflows across Saipan acquiring banks and mainland payment partners without manual spreadsheets.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Tourism-driven volume",
    value: "78% card-ready",
    description:
      "Travel and retail sellers rely on omnichannel card acceptance—our orchestration layer maintains uptime even during seasonal surges.",
    icon: Compass
  },
  {
    label: "Realtime visibility",
    value: "Live treasury lens",
    description:
      "Finance leaders visualise payouts, chargebacks, and settlement windows across the Commonwealth and neighbouring island corridors.",
    icon: GaugeCircle
  }
];

const GATEWAY_PILLARS: GatewayPillar[] = [
  {
    title: "Digital wallets & card rails",
    narrative:
      "Deliver a frictionless checkout for residents and visitors by pairing trusted wallets with card processors that understand CNMI travel patterns.",
    highlights: [
      "PayPal and Stripe connectors tuned for tourism promos and multi-currency quotes",
      "Adaptive 3DS routing that respects U.S. compliance rules while keeping conversions high",
      "Device fingerprinting to keep repeat distributors and retailers compliant without friction"
    ],
    icon: Sparkles
  },
  {
    title: "Marketplace & subscription flows",
    narrative:
      "Let field sellers manage recurring memberships and product bundles with transparent invoicing managed in one console.",
    highlights: [
      "Amazon Pay and 2Checkout integrations for cross-border shoppers and corporate buyers",
      "Automated VAT/GST tagging for shipments routed through Guam and Honolulu",
      "Built-in retry logic to rescue failed renewals before support teams get involved"
    ],
    icon: Layers3
  },
  {
    title: "Bank-direct settlements",
    narrative:
      "Consolidate commissions from Bank of Guam, First Hawaiian, and U.S. partner banks with guardrails that auditors trust.",
    highlights: [
      "Daily reconciliation feeds structured for mainland accounting policies",
      "Dual-approval treasury workflows and tamper-proof audit logs",
      "ACH and wire cut-off reminders synchronised to Pacific Standard Time"
    ],
    icon: Bank
  },
  {
    title: "In-person collection & events",
    narrative:
      "Roadshows across Saipan, Tinian, and Rota require dependable offline contingencies to keep orders moving.",
    highlights: [
      "Tablet-ready POS scripts that cache payments when connectivity dips",
      "Braintree tokenisation so repeat purchases stay PCI compliant",
      "SMS confirmations for distributor orders captured at pop-up kiosks"
    ],
    icon: Handshake
  }
];

const STRATEGY_INSIGHTS: StrategyInsight[] = [
  {
    title: "Island-to-mainland orchestration",
    summary: "Bridge Pacific Islands infrastructure with U.S. mainland processors.",
    detail:
      "Our gateway mesh keeps CNMI-origin transactions aligned with U.S. regulatory expectations while routing international cardholders through the optimal acquiring partner.",
    icon: AirplaneTilt
  },
  {
    title: "Data residency without silos",
    summary: "Keep sensitive payout data resilient and compliant.",
    detail:
      "We encrypt distributor wallets with U.S.-based key management, replicate ledgers to disaster recovery regions, and expose read-only views for partner audits.",
    icon: ServerCog
  },
  {
    title: "AI-ready performance telemetry",
    summary: "Every gateway signal enriches forecasting accuracy.",
    detail:
      "Predictive dashboards surface spend trends from tourism spikes, seasonal campaigns, and diaspora promotions so leadership can adjust incentives in hours, not weeks.",
    icon: LineChart
  }
];

const TIMELINE: TimelineStage[] = [
  {
    phase: "01",
    heading: "Foundational assessment",
    description:
      "Map the Commonwealth’s regulatory obligations, distributor footprint, and existing payment contracts before the first integration call.",
    deliverables: [
      "Stakeholder interviews with finance, compliance, and island leadership teams",
      "Gateway performance audit covering PayPal, Stripe, Amazon Pay, and Authorize.Net",
      "Regulatory readiness checklist for US federal and CNMI territorial requirements"
    ],
    icon: MapPin
  },
  {
    phase: "02",
    heading: "Experience design & sandboxing",
    description:
      "Prototype enrolment, checkout, and payout flows in parallel so onboarding, product, and treasury stakeholders stay aligned.",
    deliverables: [
      "White-labeled enrolment journeys with AI copy suggestions for local dialects",
      "Sandbox credentials and data contracts for each payment partner",
      "Customer experience simulations for tourism events and distributor pop-ups"
    ],
    icon: ArrowRight
  },
  {
    phase: "03",
    heading: "Coordinated launch",
    description:
      "Roll out to priority teams across Saipan and Guam corridors with analytics guardrails and hypercare support.",
    deliverables: [
      "Dual-run reconciliations between legacy spreadsheets and Cloud MLM Software",
      "Alerting scenarios for chargeback spikes or card authorisation declines",
      "Hypercare office hours for field leaders during the first two settlement cycles"
    ],
    icon: GlobeHemisphereWest
  },
  {
    phase: "04",
    heading: "Optimise & expand",
    description:
      "Scale the blueprint to Tinian, Rota, and mainland teams with continuous AI insights that spotlight new growth corridors.",
    deliverables: [
      "Quarterly performance retros with KPI tracking and incentive recommendations",
      "Automation backlog prioritised with finance and operations leadership",
      "Continuous enablement content packaged for multilingual support teams"
    ],
    icon: ChartLineUp
  }
];

const ASSURANCE_POINTS: AssurancePoint[] = [
  {
    title: "Always-on compliance telemetry",
    description:
      "Automated sanction screening, chargeback analytics, and card network alerts keep leadership confident that every payout is defensible.",
    icon: ShieldCheck
  },
  {
    title: "Business continuity playbooks",
    description:
      "Weather disruptions or fibre outages with offline collection scripts, cloud backups, and pre-approved manual processes.",
    icon: Lifebuoy
  },
  {
    title: "Human + AI expertise",
    description:
      "CNMI-dedicated success partners pair with AI copilots to answer distributor queries, prep board reports, and flag emerging risks ahead of time.",
    icon: Sparkles
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which payment gateways are most effective for Northern Mariana Islands MLM programmes?",
    answer:
      "PayPal, Stripe, Amazon Pay, 2Checkout, Authorize.Net, Braintree, and Adyen remain the most reliable mix for CNMI. Cloud MLM Software unifies them so you configure tiers, currencies, and fallbacks from a single console."
  },
  {
    question: "Can we reconcile mainland U.S. settlements and island banking within one ledger?",
    answer:
      "Yes. We connect Bank of Guam, First Hawaiian Bank, and U.S. mainland partners to shared reconciliation dashboards. Treasury teams receive automated exports aligned to your ERP and audit cadence."
  },
  {
    question: "How does Cloud MLM Software protect card data during island events with limited connectivity?",
    answer:
      "Tokenisation, device fingerprinting, and offline caching keep card data secure until connections resume. Dual approvals and audit trails ensure every delayed sync stays compliant with U.S. standards."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Northern Mariana Islands MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Deploy an enterprise-grade payment gateway stack for the Commonwealth of the Northern Mariana Islands. Align tourism-led demand, U.S. regulations, and AI-ready analytics with Cloud MLM Software.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/northern-mariana-islands", locale)
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

type NorthernMarianaIslandsPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function NorthernMarianaIslandsPaymentGatewaysPage({ params }: NorthernMarianaIslandsPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-slate-200/70 bg-gradient-to-br from-blue-50 via-sky-50 to-emerald-50 px-6 py-20 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 sm:px-10">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(14,165,233,0.25),transparent_55%),radial-gradient(circle_at_85%_18%,rgba(16,185,129,0.25),transparent_55%),radial-gradient(circle_at_40%_85%,rgba(2,132,199,0.35),transparent_60%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(14,165,233,0.45),transparent_55%),radial-gradient(circle_at_85%_18%,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_40%_85%,rgba(14,116,144,0.45),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.75fr)] lg:items-start">
          <div className="space-y-10 text-slate-900 dark:text-slate-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:border-blue-500/40 dark:bg-slate-900/60 dark:text-blue-200">
              <GlobeHemisphereWest className="h-4 w-4" aria-hidden />
              Northern Mariana Islands gateways
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Northern Mariana Islands MLM payment gateways engineered for tourism-scale growth
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-200">
                Cloud MLM Software equips Commonwealth distributors with an integrated payment stack that respects U.S. regulations, delights visiting shoppers, and feeds AI-ready analytics back to leadership in real time.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-blue-600 text-white hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                <Link href={contactHref}>
                  Talk to a payment strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-200 bg-white/80 text-blue-800 hover:bg-blue-50 dark:border-blue-500/30 dark:bg-transparent dark:text-blue-100 dark:hover:bg-blue-500/10"
              >
                <Link href={demoHref}>Launch an AI-assisted demo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-slate-700 hover:bg-white/70 dark:text-slate-200 dark:hover:bg-slate-800/60"
              >
                <Link href={gatewaysHref}>View all payment regions</Link>
              </Button>
            </div>
            <dl className="grid gap-6 sm:grid-cols-3">
              {HERO_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="relative rounded-3xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-900/60"
                >
                  <metric.icon className="h-6 w-6 text-blue-600 dark:text-blue-300" aria-hidden />
                  <dt className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                    {metric.label}
                  </dt>
                  <dd className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{metric.value}</dd>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{metric.description}</p>
                </div>
              ))}
            </dl>
          </div>

          <aside className="relative isolate overflow-hidden rounded-[2.5rem] border border-slate-200/70 bg-white/80 p-8 shadow-lg backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_25%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(16,185,129,0.2),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_25%,rgba(96,165,250,0.35),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(45,212,191,0.25),transparent_50%)]" aria-hidden />
            <div className="space-y-4 text-slate-900 dark:text-slate-100">
              <h2 className="text-2xl font-semibold leading-tight">CNMI payment intelligence highlights</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                From duty-free boutiques to wellness memberships, the Commonwealth of the Northern Mariana Islands thrives on predictable, cross-border payment experiences.
              </p>
              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 text-blue-600 dark:text-blue-300" aria-hidden />
                  <span>Saipan is the operational hub with Guam and Honolulu acting as settlement corridors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <AirplaneTilt className="mt-1 h-4 w-4 text-blue-600 dark:text-blue-300" aria-hidden />
                  <span>Tourism peaks demand AI-driven forecasting for inventory and distributor incentives.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CurrencyCircleDollar className="mt-1 h-4 w-4 text-blue-600 dark:text-blue-300" aria-hidden />
                  <span>Unified USD-ledgering keeps treasury compliant with U.S. oversight while reducing manual reconciliation.</span>
                </li>
              </ul>
              <Button
                asChild
                className="mt-6 w-full gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500"
              >
                <Link href={pricingHref}>
                  Explore implementation packages
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
            <ServerCog className="h-4 w-4" aria-hidden />
            Gateway strategy
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A curated payment stack tailored for Northern Mariana Islands field operations
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Blend digital wallets, card processors, and bank settlements referenced in the original legacy site into a single AI-enabled operating model. Each pillar below references the providers most in demand across the Commonwealth.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-sm transition dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.15),transparent_55%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.2),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(45,212,191,0.18),transparent_55%)]" aria-hidden />
              </div>
              <pillar.icon className="h-6 w-6 text-blue-600 transition group-hover:scale-110 dark:text-blue-300" aria-hidden />
              <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{pillar.narrative}</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {pillar.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-3 w-3 text-blue-500 dark:text-blue-300" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-slate-200/70 bg-white/80 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-blue-100/60 via-transparent to-transparent dark:from-blue-500/10" aria-hidden />
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Strategic signals informing every payment decision
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              AI insights fuse local tourism data, U.S. regulatory updates, and distributor behaviour. These signals keep your Northern Mariana Islands expansion resilient and ready for scale.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {STRATEGY_INSIGHTS.map((insight) => (
              <article
                key={insight.title}
                className="flex flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <insight.icon className="h-6 w-6 text-blue-600 dark:text-blue-300" aria-hidden />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{insight.title}</h3>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    {insight.summary}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{insight.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
            <Layers3 className="h-4 w-4" aria-hidden />
            Delivery blueprint
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Implementation motion designed for Commonwealth leadership teams
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Each phase blends human expertise with automation so finance, compliance, and field leaders stay aligned from discovery through optimisation.
          </p>
        </div>
        <div className="relative grid gap-8 lg:grid-cols-4">
          <div className="absolute inset-y-0 left-[12.5%] hidden w-px bg-gradient-to-b from-blue-500/25 via-transparent to-transparent lg:block" aria-hidden />
          <div className="absolute inset-y-0 left-[37.5%] hidden w-px bg-gradient-to-b from-blue-500/25 via-transparent to-transparent lg:block" aria-hidden />
          <div className="absolute inset-y-0 left-[62.5%] hidden w-px bg-gradient-to-b from-blue-500/25 via-transparent to-transparent lg:block" aria-hidden />

          {TIMELINE.map((stage) => (
            <article
              key={stage.phase}
              className="relative flex h-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                <span>{stage.phase}</span>
                <stage.icon className="h-4 w-4 text-blue-600 dark:text-blue-300" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stage.heading}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{stage.description}</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {stage.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-4 rounded-full bg-blue-500/70" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
            <ShieldCheck className="h-4 w-4" aria-hidden />
            Risk & assurance
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Control frameworks that satisfy auditors and reassure distributor councils
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Governance flows through every integration. Logs, approvals, and AI summarisation keep leadership informed while frontline teams stay productive.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {ASSURANCE_POINTS.map((point) => (
              <div
                key={point.title}
                className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <point.icon className="h-6 w-6 text-blue-600 dark:text-blue-300" aria-hidden />
                <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{point.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-slate-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-xl dark:border-slate-700">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.35),transparent_55%)]" aria-hidden />
          <h3 className="text-lg font-semibold">CNMI assurance playbook</h3>
          <p className="mt-3 text-sm text-slate-200">
            Legal and finance teams receive editable policy kits, regulator briefings, and AI-generated summaries so everyone shares the same single source of truth.
          </p>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Included artefacts</dt>
              <dd className="mt-2 leading-6 text-slate-100">
                AML matrices, sanction watchlist procedures, payout escalation ladders, and distributor disclosure templates prepared for Commonwealth compliance.
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Update cadence</dt>
              <dd className="mt-2 leading-6 text-slate-100">
                Quarterly refreshes plus rapid advisories when U.S. federal or CNMI territorial notices are issued.
              </dd>
            </div>
          </dl>
          <Button asChild size="lg" className="mt-6 w-full gap-2 bg-white text-slate-900 hover:bg-slate-200">
            <Link href={contactHref}>
              Request compliance walkthrough
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Northern Mariana Islands payment FAQs
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Answers to the questions finance leaders, compliance officers, and distributor success teams ask before launching Cloud MLM Software in the Commonwealth.
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

      <section className="relative overflow-hidden rounded-[2.75rem] border border-slate-200/70 bg-gradient-to-br from-blue-600 via-sky-500 to-emerald-500 px-6 py-16 text-white shadow-lg dark:border-slate-700/60">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.25),transparent_55%),radial-gradient(circle_at_90%_80%,rgba(255,255,255,0.25),transparent_55%)]" aria-hidden />
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Lead Northern Mariana Islands MLM growth with future-ready payments
          </h2>
          <p className="text-base text-sky-50/90">
            Consolidate PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, and 2Checkout into one trusted platform. Cloud MLM Software gives your teams clarity, compliance, and AI-assisted speed from day one.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-blue-700 hover:bg-slate-100 dark:text-blue-600">
              <Link href={contactHref}>
                Build your CNMI rollout plan
                <ArrowUpRight className="h-4 w-4 text-blue-600" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/70 text-white hover:bg-white/10"
            >
              <Link href={demoHref}>See Cloud MLM Software in action</Link>
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

