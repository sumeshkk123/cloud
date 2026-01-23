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
  BadgeCheck,
  ChartColumn,
  Compass,
  Layers3,
  Map,
  RadioTower,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  CurrencyCircleDollar,
  GlobeHemisphereEast,
  Lightning,
  Tree,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroBlock = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayModule = {
  name: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Insight = {
  title: string;
  detail: string;
  icon: IconType;
};

type TimelineStage = {
  phase: string;
  headline: string;
  summary: string;
  deliverables: string[];
  icon: IconType;
};

type FAQItem = {
  question: string;
  answer: string;
};

const HERO_BLOCKS: HeroBlock[] = [
  {
    title: "Unified gateway stack",
    description:
      "PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, BSP, Kina Bank, and Digicel CellMoni converge into one ledger.",
    icon: CurrencyCircleDollar
  },
  {
    title: "AI resilience",
    description:
      "AI copilots watch conversion, connectivity, and fleet logistics across Port Moresby, Lae, and provincial routes.",
    icon: RadioTower
  },
  {
    title: "Compliance guardrails",
    description:
      "KYC refresh cycles, AML analytics, and audit histories align with Bank of Papua New Guinea expectations.",
    icon: ShieldCheck
  }
];

const GATEWAY_MODULES: GatewayModule[] = [
  {
    name: "Digital and wallet orchestration",
    description:
      "Bridge global gateways from the source content with PNG’s mobile wallets and regional payment rails.",
    bullets: [
      "PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, and 2Checkout orchestrated via a single control plane",
      "Digicel CellMoni and BSP Pay integrations for mobile-first distributors",
      "AI risk scoring accounts for intermittent connectivity and device reuse"
    ],
    icon: Lightning
  },
  {
    name: "Bank settlement hub",
    description:
      "Automate payouts through BSP, Kina Bank, ANZ, and Westpac with treasury-level visibility.",
    bullets: [
      "Automated reconciliation for ACH, RTGS, and cash deposits with variance alerts",
      "Maker-checker approvals, role-based access, and immutable evidence logs",
      "Exports that map to local tax formats and IFRS reporting"
    ],
    icon: Bank
  },
  {
    name: "Field collection toolkit",
    description:
      "Keep remote distributors productive even when infrastructure is limited.",
    bullets: [
      "Offline caching with Braintree tokenisation and queue-based sync",
      "QR codes, USSD prompts, and SMS confirmations for low-bandwidth areas",
      "AI-generated shift recaps highlight risk, sales trends, and stock gaps"
    ],
    icon: Map
  },
  {
    name: "Subscription & partner programmes",
    description:
      "Run recurring coaching, nutrition, or utility programmes with transparent billing.",
    bullets: [
      "Stripe Billing and Authorize.Net ARB aligned to multi-currency compensation",
      "Automated tax tagging for GST, provincial levies, and customs duties",
      "Dunning flows rescue failed renewals before they impact run-rate"
    ],
    icon: Layers3
  }
];

const INSIGHTS: Insight[] = [
  {
    title: "Provincial connectivity intelligence",
    detail:
      "AI compares performance across highland provinces, island communities, and urban centres to inform logistics decisions.",
    icon: ChartLineUp
  },
  {
    title: "Community-first enablement",
    detail:
      "Bilingual materials in English and Tok Pisin, with AI translating SOPs and support prompts for local teams.",
    icon: UsersThree
  },
  {
    title: "Sustainability tracking",
    detail:
      "Monitor green initiatives, carbon offsets, and community investment tied to each distributor hub.",
    icon: Tree
  }
];

const TIMELINE: TimelineStage[] = [
  {
    phase: "01",
    headline: "PNG readiness audit",
    summary:
      "Align on compensation, regulatory, and infrastructure realities before integration work begins.",
    deliverables: [
      "Stakeholder interviews across finance, compliance, and field leadership",
      "Gateway assessment for PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, BSP, Kina Bank, and Digicel CellMoni",
      "Connectivity and offline readiness plan for highland and island regions"
    ],
    icon: Compass
  },
  {
    phase: "02",
    headline: "Experience design",
    summary:
      "Prototype enrolment, checkout, payout, and support journeys with automation built in.",
    deliverables: [
      "Enrolment flows with English/Tok Pisin microcopy and device-aware UX",
      "Data contracts, sandbox credentials, and automated tests for each gateway",
      "Support playbooks with AI copilots generating case summaries and translations"
    ],
    icon: ChartColumn
  },
  {
    phase: "03",
    headline: "Command-centre launch",
    summary:
      "Roll out with live dashboards, anomaly detection, and hypercare support to maintain trust.",
    deliverables: [
      "Parallel reconciliation vs. legacy spreadsheets for two pay cycles",
      "Alerting for authorisation dips, settlement delays, and connectivity outages",
      "Daily executive briefings summarising KPIs, risks, and logistics impact"
    ],
    icon: GlobeHemisphereEast
  },
  {
    phase: "04",
    headline: "Optimise & expand",
    summary:
      "Extend the blueprint to franchise partners, neighbouring Pacific islands, and corporate alliances.",
    deliverables: [
      "Quarterly optimisation sprints with automation backlog prioritisation",
      "Expansion playbooks for Solomon Islands, Fiji, and Vanuatu corridors",
      "AI forecasting for inventory, promotions, and incentive planning"
    ],
    icon: BadgeCheck
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which payment gateways does Cloud MLM Software support for Papua New Guinea?",
    answer:
      "We orchestrate PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, BSP, Kina Bank, Digicel CellMoni, and additional local partners from one platform."
  },
  {
    question: "How do you handle limited internet connectivity in remote provinces?",
    answer:
      "Offline caching stores transactions securely until connectivity returns. AI monitors sync status and alerts teams to potential risks so nothing slips through."
  },
  {
    question: "Can AI help our bilingual support team stay informed?",
    answer:
      "Yes. AI copilots translate, summarise, and suggest responses in English and Tok Pisin, keeping every support interaction on-brand and compliant."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Papua New Guinea MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Deploy a resilient payment stack in Papua New Guinea. Cloud MLM Software unifies PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, BSP, Kina Bank, and Digicel CellMoni with AI oversight.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/papua-new-guinea", locale)
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

type PapuaNewGuineaPageProps = {
  params: { lang: SupportedLocale };
};

export default function PapuaNewGuineaPaymentGatewaysPage({
  params
}: PapuaNewGuineaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-emerald-200/70 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-6 py-20 shadow-sm dark:border-emerald-500/40 dark:from-slate-950 dark:via-slate-920 dark:to-slate-900 sm:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(16,185,129,0.35),transparent_60%),radial-gradient(circle_at_82%_22%,rgba(59,130,246,0.3),transparent_55%),radial-gradient(circle_at_45%_88%,rgba(245,158,11,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(16,185,129,0.4),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(56,189,248,0.35),transparent_50%),radial-gradient(circle_at_45%_88%,rgba(245,158,11,0.3),transparent_60%)]" aria-hidden />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.8fr)] lg:items-start">
          <div className="space-y-8 text-slate-900 dark:text-slate-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800 dark:border-emerald-500/40 dark:bg-slate-900/60 dark:text-emerald-200">
              <Compass className="h-4 w-4" aria-hidden />
              Papua New Guinea payment gateways
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Power Papua New Guinea’s MLM growth with resilient, AI-ready payments
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Cloud MLM Software brings PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, BSP, Kina Bank, and Digicel CellMoni into one platform. Launch in PNG with offline-first resilience, multilingual enablement, and compliance workflows tuned to local regulators.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
              >
                <Link href={contactHref}>
                  Talk to a PNG payment strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-emerald-200 bg-white/80 text-emerald-800 hover:bg-emerald-50 dark:border-emerald-500/40 dark:bg-transparent dark:text-emerald-200 dark:hover:bg-emerald-500/10"
              >
                <Link href={demoHref}>See the AI-guided demo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-slate-700 hover:bg-white/70 dark:text-slate-200 dark:hover:bg-slate-800/60"
              >
                <Link href={gatewaysHref}>View every payment region</Link>
              </Button>
            </div>
          </div>
          <aside className="rounded-[2.5rem] border border-emerald-200/70 bg-white/85 p-8 shadow-lg backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="grid gap-6">
              {HERO_BLOCKS.map((block) => (
                <div key={block.title} className="rounded-3xl border border-emerald-100/80 bg-white/90 p-6 dark:border-slate-700/60 dark:bg-slate-900/60">
                  <block.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                  <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{block.title}</h2>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{block.description}</p>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-6 w-full gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-emerald-500 dark:hover:bg-emerald-400">
              <Link href={pricingHref}>
                Review PNG implementation packs
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:border-emerald-500/40 dark:text-emerald-200">
            <Layers3 className="h-4 w-4" aria-hidden />
            Gateway modules
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Payment modules tuned for PNG’s diverse terrain and customer segments
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Each module merges the global gateways from the legacy site with Papua New Guinea’s trusted payment rails and offline-ready operations.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_MODULES.map((module) => (
            <article
              key={module.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-100/80 bg-white/85 p-8 shadow-sm transition dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <module.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{module.name}</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{module.description}</p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {module.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-3.5 w-3.5 text-emerald-500" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:border-emerald-500/40 dark:text-emerald-200">
            <ChartColumn className="h-4 w-4" aria-hidden />
            Operational insights
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            AI insights designed for PNG’s field ops, compliance, and sustainability goals
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Give leadership, operations, and field teams a shared source of truth—from connectivity health to sustainability commitments.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {INSIGHTS.map((insight) => (
              <div
                key={insight.title}
                className="rounded-3xl border border-emerald-100/80 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <insight.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{insight.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{insight.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="relative isolate overflow-hidden rounded-[2.5rem] border border-emerald-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-lg dark:border-slate-700">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.25),transparent_55%)]" aria-hidden />
          <h3 className="text-lg font-semibold">PNG AI command centre</h3>
          <p className="mt-3 text-sm text-slate-200">
            Monitor payment conversion, offline sync queues, and operations health across the islands. AI-generated summaries keep leadership proactive every morning.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-slate-200">
            <li className="flex items-start gap-2">
              <Sparkles className="mt-1 h-4 w-4" aria-hidden />
              <span>Executive digests summarising KPIs, risks, and regional hotspots.</span>
            </li>
            <li className="flex items-start gap-2">
              <RadioTower className="mt-1 h-4 w-4" aria-hidden />
              <span>Connectivity dashboards forecasting where offline queues need support.</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowUpRight className="mt-1 h-4 w-4" aria-hidden />
              <span>Automation hooks for Slack, Teams, email, and ticketing systems.</span>
            </li>
          </ul>
          <Button asChild size="lg" className="mt-6 w-full gap-2 bg-white text-slate-900 hover:bg-slate-200">
            <Link href={demoHref}>
              Experience the live dashboard
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </aside>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:border-emerald-500/40 dark:text-emerald-200">
            <BadgeCheck className="h-4 w-4" aria-hidden />
            Delivery timeline
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A measured delivery plan built for PNG’s distributed leadership landscape
          </h2>
        </div>
        <div className="relative grid gap-8 lg:grid-cols-4">
          {TIMELINE.map((stage) => (
            <article
              key={stage.phase}
              className="relative flex h-full flex-col gap-4 rounded-3xl border border-emerald-100/80 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-200">
                <span>{stage.phase}</span>
                <stage.icon className="h-4 w-4 text-emerald-600 dark:text-emerald-300" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stage.headline}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{stage.summary}</p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {stage.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-4 rounded-full bg-emerald-500/80" aria-hidden />
                    <span>{item}</span>
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
            Papua New Guinea payment gateway FAQs
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Finance heads, compliance officers, and distributor councils typically raise the following questions when planning a PNG launch with Cloud MLM Software.
          </p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              className="rounded-3xl border border-emerald-100/80 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.question}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2.75rem] border border-emerald-200/70 bg-gradient-to-br from-emerald-600 via-emerald-500 to-sky-500 px-6 py-16 text-white shadow-lg dark:border-emerald-500/40">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_22%,rgba(255,255,255,0.3),transparent_55%),radial-gradient(circle_at_88%_78%,rgba(255,255,255,0.28),transparent_55%)]" aria-hidden />
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Lead Papua New Guinea’s MLM market with unified, offline-ready payments
          </h2>
          <p className="text-base text-emerald-50/90">
            Cloud MLM Software harmonises PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, BSP, Kina Bank, Digicel CellMoni, and more. Deliver certainty to every distributor, regardless of location or connectivity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-emerald-700 hover:bg-slate-100 dark:text-emerald-600">
              <Link href={contactHref}>
                Build your PNG launch plan
                <ArrowUpRight className="h-4 w-4" aria-hidden />
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

