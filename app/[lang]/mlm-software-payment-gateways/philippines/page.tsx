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
  BarChart3,
  Building2,
  Cpu,
  GlobeAsiaAustralia,
  LayoutDashboard,
  LifeBuoy,
  ShieldCheck,
  Sparkles,
  Wifi
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  CurrencyCircleDollar,
  Lightning,
  Receipt,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type GatewayMove = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type StrategicEdge = {
  title: string;
  detail: string;
  icon: IconType;
};

type TimelineStage = {
  phase: string;
  headline: string;
  description: string;
  deliverables: string[];
  icon: IconType;
};

type FAQItem = {
  question: string;
  answer: string;
};

const HERO_METRICS: HeroMetric[] = [
  {
    label: "Gateway orchestration",
    value: "Global + PH native",
    description:
      "PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, GCash, Maya, Dragonpay, and BancNet converge in one ledger.",
    icon: CurrencyCircleDollar
  },
  {
    label: "AI-first operations",
    value: "Realtime insight",
    description:
      "Copilots surface conversion trends, chargebacks, and support priorities across Manila, Cebu, and Davao.",
    icon: Cpu
  },
  {
    label: "BSP-ready governance",
    value: "Compliance assured",
    description:
      "Audit trails, dual approvals, AML analytics, and consent logs satisfy Bangko Sentral ng Pilipinas requirements.",
    icon: ShieldCheck
  }
];

const GATEWAY_MOVES: GatewayMove[] = [
  {
    title: "Digital commerce ecosystem",
    description:
      "Combine the global gateways from the legacy content with the Philippines’ dominant digital payment rails.",
    bullets: [
      "PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, and 2Checkout orchestrated inside Cloud MLM Software",
      "GCash, Maya, and Dragonpay connectors with smart routing and failover logic",
      "AI anomaly detection that flags risky transactions and bot-driven activity"
    ],
    icon: Sparkles
  },
  {
    title: "Bank-direct settlement suite",
    description:
      "Automate payouts through BDO, BPI, Metrobank, Landbank, and other BSP supervised institutions.",
    bullets: [
      "ACH, PESONet, and InstaPay reconciliation with variance alerts and approvals",
      "Multi-currency support for PHP, USD, SGD, and HKD corridors",
      "Treasury dashboards with IFRS-aligned exports and digital audit packs"
    ],
    icon: Bank
  },
  {
    title: "Subscription & recurring programmes",
    description:
      "Support memberships, e-learning bundles, and wellness plans with clear billing.",
    bullets: [
      "Stripe Billing and Authorize.Net ARB integrated with multi-currency compensation models",
      "Automated VAT, percentage tax, and withholding tagging for each purchase",
      "Dunning automation recovers failed renewals before they interrupt revenue"
    ],
    icon: Receipt
  },
  {
    title: "Field & experiential deployments",
    description:
      "Equip pop-up events, logistics hubs, and provincial teams with offline resilience.",
    bullets: [
      "Offline caching with Braintree tokenisation and queue-based sync",
      "QR and NFC-ready checkout for marketplaces, malls, and festivals",
      "AI-generated shift recaps highlighting upsells, compliance events, and inventory needs"
    ],
    icon: Lightning
  }
];

const STRATEGIC_EDGES: StrategicEdge[] = [
  {
    title: "Nationwide connectivity insight",
    detail:
      "Monitor network quality across Luzon, Visayas, and Mindanao so field teams always know when offline scripts are required.",
    icon: Wifi
  },
  {
    title: "Bilingual enablement",
    detail:
      "English and Filipino content packs plus AI translations keep distributors, support, and compliance teams aligned.",
    icon: UsersThree
  },
  {
    title: "Innovation and ESG reporting",
    detail:
      "Track digital transformation KPIs, sustainability programmes, and social impact tied to each region.",
    icon: ChartLineUp
  }
];

const TIMELINE: TimelineStage[] = [
  {
    phase: "01",
    headline: "Philippines readiness audit",
    description:
      "Collaborate with finance, compliance, and field teams to inventory gateway contracts, risk controls, and compensation nuances.",
    deliverables: [
      "Gateway review covering PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, GCash, Maya, Dragonpay, and BancNet",
      "Regulatory checklist aligned with BSP, AMLC, and BIR requirements",
      "Connectivity and offline strategy for provincial and island activations"
    ],
    icon: LayoutDashboard
  },
  {
    phase: "02",
    headline: "Experience prototyping",
    description:
      "Design enrolment, checkout, payout, and support journeys with bilingual flows and AI instrumentation built in.",
    deliverables: [
      "Onboarding UX with Filipino and English microcopy plus compliance guardrails",
      "Sandbox credentials, webhook catalogues, and automated testing harnesses",
      "Support playbooks where AI copilots summarise cases and propose resolutions"
    ],
    icon: Building2
  },
  {
    phase: "03",
    headline: "Command-centre launch",
    description:
      "Roll out with live dashboards, anomaly detection, and hypercare assistance to ensure smooth adoption.",
    deliverables: [
      "Parallel reconciliation vs. legacy spreadsheets for two commission cycles",
      "Alerting for authorisation drops, settlement delays, and AML escalations",
      "Executive briefs highlighting KPIs, risk posture, and regional insights"
    ],
    icon: BarChart3
  },
  {
    phase: "04",
    headline: "Optimise & expand",
    description:
      "Extend the blueprint to franchise partners, new verticals, and OFW corridors.",
    deliverables: [
      "Quarterly optimisation sprints with automation backlog management",
      "Expansion playbooks for Singapore, Hong Kong, and Middle East remittance routes",
      "AI forecasting for promotions, inventory, and incentive planning"
    ],
    icon: LifeBuoy
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which payment gateways do you support for the Philippines?",
    answer:
      "Cloud MLM Software connects PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, GCash, Maya, Dragonpay, BancNet, and direct bank settlements in one platform."
  },
  {
    question: "How do you maintain compliance with BSP and AMLC?",
    answer:
      "We embed AML screening, dual approvals, evidence packs, and consent logs. Compliance teams access real-time dashboards that align with BSP circulars and AMLC guidelines."
  },
  {
    question: "Can AI support bilingual customer service teams?",
    answer:
      "Yes. AI copilots translate, summarise, and recommend responses in English and Filipino so support teams resolve issues quickly."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Philippines MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Deploy the Philippines’ leading MLM payment stack. Cloud MLM Software unifies PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, GCash, Maya, Dragonpay, and BancNet with AI automation.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/philippines", locale)
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

type PhilippinesPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function PhilippinesPaymentGatewaysPage({
  params
}: PhilippinesPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-sky-200/70 bg-gradient-to-br from-sky-50 via-white to-blue-100 px-6 py-20 shadow-sm dark:border-sky-500/40 dark:from-slate-950 dark:via-slate-920 dark:to-slate-900 sm:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.35),transparent_60%),radial-gradient(circle_at_82%_22%,rgba(14,165,233,0.3),transparent_55%),radial-gradient(circle_at_45%_88%,rgba(168,85,247,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.4),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(14,165,233,0.35),transparent_50%),radial-gradient(circle_at_45%_88%,rgba(168,85,247,0.3),transparent_60%)]" aria-hidden />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.8fr)] lg:items-start">
          <div className="space-y-8 text-slate-900 dark:text-slate-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:border-sky-500/40 dark:bg-slate-900/60 dark:text-sky-200">
              <GlobeAsiaAustralia className="h-4 w-4" aria-hidden />
              Philippines payment gateways
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Build a future-proof MLM payment fabric for the Philippines
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Cloud MLM Software unifies PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, GCash, Maya, Dragonpay, and BancNet into a single platform. Deliver regulator-trusted operations, AI-guided insight, and distributor journeys that feel unmistakably Filipino.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-sky-600 text-white hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400"
              >
                <Link href={contactHref}>
                  Talk to a Philippines payment strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-sky-200 bg-white/80 text-sky-700 hover:bg-sky-50 dark:border-sky-500/40 dark:bg-transparent dark:text-sky-200 dark:hover:bg-sky-500/10"
              >
                <Link href={demoHref}>Experience the AI-guided demo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-slate-700 hover:bg-white/70 dark:text-slate-200 dark:hover:bg-slate-800/60"
              >
                <Link href={gatewaysHref}>Browse every payment region</Link>
              </Button>
            </div>
          </div>
          <aside className="rounded-[2.5rem] border border-sky-200/70 bg-white/85 p-8 shadow-lg backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="grid gap-6">
              {HERO_METRICS.map((metric) => (
                <div key={metric.label} className="rounded-3xl border border-sky-100/80 bg-white/90 p-6 dark:border-slate-700/60 dark:bg-slate-900/60">
                  <metric.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  <div className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 dark:text-sky-300">
                    {metric.label}
                  </div>
                  <h2 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{metric.value}</h2>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{metric.description}</p>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-6 w-full gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-sky-500 dark:hover:bg-sky-400">
              <Link href={pricingHref}>
                Review Philippines implementation packs
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:border-sky-500/40 dark:text-sky-200">
            <Sparkles className="h-4 w-4" aria-hidden />
            Gateway moves
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Payment moves designed for the Philippines’ omnichannel distributors
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Each move merges the global gateways from the original site with Filipino payment favourites, layering in AI automation and compliance guardrails.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_MOVES.map((move) => (
            <article
              key={move.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-sky-100/80 bg-white/85 p-8 shadow-sm transition dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <move.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{move.title}</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{move.description}</p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {move.bullets.map((bullet) => (
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

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:border-sky-500/40 dark:text-sky-200">
            <LayoutDashboard className="h-4 w-4" aria-hidden />
            Strategic edges
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Keep leadership, compliance, and field teams aligned with AI insights
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            From connectivity to bilingual enablement, AI copilots keep everyone focused on the same mission.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {STRATEGIC_EDGES.map((edge) => (
              <div
                key={edge.title}
                className="rounded-3xl border border-sky-100/80 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <edge.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{edge.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{edge.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="relative isolate overflow-hidden rounded-[2.5rem] border border-sky-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-lg dark:border-slate-700">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.3),transparent_55%)]" aria-hidden />
          <h3 className="text-lg font-semibold">Philippines AI control centre</h3>
          <p className="mt-3 text-sm text-slate-200">
            Monitor conversion, support workloads, and regional performance in one place. AI-generated summaries keep the C-suite informed and proactive.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-slate-200">
            <li className="flex items-start gap-2">
              <Sparkles className="mt-1 h-4 w-4" aria-hidden />
              <span>Daily executive digests summarising KPIs, risks, and opportunities.</span>
            </li>
            <li className="flex items-start gap-2">
              <UsersThree className="mt-1 h-4 w-4" aria-hidden />
              <span>Support copilots produce English/Filipino responses with historical context.</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowUpRight className="mt-1 h-4 w-4" aria-hidden />
              <span>Automation triggers update CRM, ticketing, and collaboration tools instantly.</span>
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
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:border-sky-500/40 dark:text-sky-200">
            <LifeBuoy className="h-4 w-4" aria-hidden />
            Delivery timeline
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A delivery journey tuned for the Philippines’ distributed leadership
          </h2>
        </div>
        <div className="relative grid gap-8 lg:grid-cols-4">
          {TIMELINE.map((stage) => (
            <article
              key={stage.phase}
              className="relative flex h-full flex-col gap-4 rounded-3xl border border-sky-100/80 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 dark:text-sky-200">
                <span>{stage.phase}</span>
                <stage.icon className="h-4 w-4 text-sky-600 dark:text-sky-300" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stage.headline}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{stage.description}</p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {stage.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-4 rounded-full bg-sky-500/80" aria-hidden />
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
            Philippines payment gateway FAQs
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Finance directors, compliance leads, and distributor councils usually ask the following before launching Cloud MLM Software in the Philippines.
          </p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              className="rounded-3xl border border-sky-100/80 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.question}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2.75rem] border border-sky-200/70 bg-gradient-to-br from-sky-600 via-indigo-500 to-emerald-500 px-6 py-16 text-white shadow-lg dark:border-sky-500/40">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_22%,rgba(255,255,255,0.3),transparent_55%),radial-gradient(circle_at_88%_78%,rgba(255,255,255,0.28),transparent_55%)]" aria-hidden />
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Lead the Philippines’ MLM market with unified, AI-ready payments
          </h2>
          <p className="text-base text-white/90">
            Cloud MLM Software connects PayPal, Amazon Pay, Authorize.Net, Stripe, Braintree, Adyen, 2Checkout, GCash, Maya, Dragonpay, and BancNet. Empower your teams with visibility, automation, and compliance from launch day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-sky-700 hover:bg-slate-100 dark:text-sky-600">
              <Link href={contactHref}>
                Build your Philippines launch plan
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

