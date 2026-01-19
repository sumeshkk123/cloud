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
  Globe2,
  Layers,
  MapPinned,
  Sparkles,
  Target
} from "lucide-react";
import {
  Bank,
  CurrencyCircleDollar,
  Handshake,
  MapTrifold,
  PlugsConnected,
  ShieldCheck,
  UsersThree,
  Waveform
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Guatemala MLM Payment Gateways | Cloud MLM Software",
  description:
    "Ways to accept payments from MLM Software in Guatemala (GT). Cloud MLM Software synchronises banking rails, PSPs, and compliance requirements to support fast-growing MLM brands across Central America.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/guatemala"
  },
  openGraph: {
    title: "Guatemala MLM Payment Gateways",
    description:
      "Unify Guatemala’s banking partners, global PSPs, and distributor experience with the governance Cloud MLM Software is known for.",
    url: "/mlm-software-payment-gateways/guatemala"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Insight = {
  title: string;
  copy: string;
  icon: IconType;
};

type Stack = {
  name: string;
  description: string;
  providers: string[];
  icon: IconType;
};

type Stage = {
  step: string;
  headline: string;
  description: string;
  artefacts: string[];
  icon: IconType;
};

type Confidence = {
  title: string;
  copy: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const METRICS: Metric[] = [
  {
    label: "Settlement cadence",
    value: "T+1 across BAC & Banco Industrial",
    detail:
      "Automated reconciliation and FX dashboards connect BAC Credomatic, Banco Industrial, Banrural, and Banco G&T Continental with one approval flow.",
    icon: BarChart3
  },
  {
    label: "Connector coverage",
    value: "12 providers",
    detail:
      "Stripe, PayPal, Amazon Pay, PayU Latam, 2Checkout, Mercado Pago, Authorize.Net, Adyen, Braintree, First Atlantic Commerce, Banco Industrial POS, and ePagos orchestrated together.",
    icon: Layers
  },
  {
    label: "Compliance readiness",
    value: "17 artefacts",
    detail:
      "AML/CFT, SAT fiscal controls, PCI-DSS, OFAC screening, and Habeas Data documentation ready for regulator and executive review.",
    icon: ShieldCheck
  }
];

const INSIGHTS: Insight[] = [
  {
    title: "Retail & wellness growth",
    copy:
      "Cosmetics, wellness, and wellness-tourism segments demand recurring billing, dynamic inventory, and loyalty orchestration for Guatemala City, Antigua, and Quetzaltenango.",
    icon: Globe2
  },
  {
    title: "Agrifood & artisans",
    copy:
      "Coffee, cacao, and artisan collectives rely on export-friendly PSPs and transparent payouts for distributor families across Central America and North America.",
    icon: Handshake
  },
  {
    title: "Cross-border achievers",
    copy:
      "Leaders working between Guatemala, Mexico, and the United States expect multi-currency pricing, compliant remittances, and wellbeing analytics.",
    icon: Target
  }
];

const STACKS: Stack[] = [
  {
    name: "Banking & treasury",
    description:
      "Integrate core banks for settlement certainty and currency control without manual spreadsheet work.",
    providers: ["BAC Credomatic", "Banco Industrial", "Banrural", "Banco G&T Continental", "Citibank"],
    icon: Bank
  },
  {
    name: "Card & PSP mesh",
    description:
      "Unify Stripe, PayPal, Amazon Pay, Adyen, Braintree, Authorize.Net, PayU Latam, Mercado Pago, 2Checkout, and First Atlantic Commerce under one security and observability layer.",
    providers: ["Stripe", "PayPal", "Adyen", "PayU Latam", "Mercado Pago", "2Checkout"],
    icon: PlugsConnected
  },
  {
    name: "Wallets & alternative rails",
    description:
      "Support wallet adoption, QR payments, and cash collection with ePagos, BAC Transfer365, VisaNet, and local fintech partners.",
    providers: ["ePagos", "VisaNet Guatemala", "Transfer365", "PayPal Commerce Platform"],
    icon: CurrencyCircleDollar
  }
];

const STAGES: Stage[] = [
  {
    step: "Sprint 01",
    headline: "Discovery, compliance, and architecture",
    description:
      "Workshops map Guatemala’s legal, tax, and data realities so leadership is aligned before the first integration begins.",
    artefacts: [
      "Compliance blueprint covering AML/CFT, SAT, OFAC, PCI-DSS, and Habeas Data.",
      "Stakeholder RACI joining Guatemala HQ, Mexico, and US leadership councils.",
      "Solution architecture describing connectors, monitoring, and escalation paths."
    ],
    icon: MapPinned
  },
  {
    step: "Sprint 02",
    headline: "Connector implementation & telemetry",
    description:
      "Integrate bank, card, wallet, and cash collection partners with credential vaults, redundancy, and chargeback workflows.",
    artefacts: [
      "Connector runbooks with failover plans for PSP, POS, and bank channels.",
      "Unified dispute centre for chargebacks, refunds, and cashback programmes.",
      "Load tests for campaign launches, retail peaks, and cross-border promotions."
    ],
    icon: Waveform
  },
  {
    step: "Sprint 03",
    headline: "Pilot, optimise, and scale",
    description:
      "Pilot across retail, agrifood, and service cohorts to validate transparency, experience design, and wellbeing analytics before scaling.",
    artefacts: [
      "Executive dashboards showing settlement tempo, FX exposure, and wellbeing indicators.",
      "Distributor enablement kit with Spanish-first communications and recognition cadences.",
      "Optimisation backlog prioritised by revenue impact, risk, and distributor sentiment."
    ],
    icon: Sparkles
  }
];

const CONFIDENCE_POINTS: Confidence[] = [
  {
    title: "Treasury foresight",
    copy:
      "Liquidity, FX, and tax dashboards give CFOs and finance councils a live view of Guatemala’s performance alongside Mexico and US corridors.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Distributor trust systems",
    copy:
      "Self-service statements, wellbeing alerts, and recognition cadences ensure leaders feel heard long before escalation is needed.",
    icon: UsersThree
  },
  {
    title: "Board-ready storytelling",
    copy:
      "Narratives blend data, compliance, and customer experience in Spanish and English so directors and investors understand the path forward.",
    icon: MapTrifold
  }
];

const FAQS: FAQ[] = [
  {
    question: "Which payment partners do you integrate in Guatemala?",
    answer:
      "We orchestrate BAC Credomatic, Banco Industrial, Banrural, Banco G&T Continental, Citibank, Stripe, PayPal, Amazon Pay, PayU Latam, 2Checkout, Mercado Pago, Adyen, Braintree, Authorize.Net, First Atlantic Commerce, ePagos, VisaNet Guatemala, and Transfer365 within one operating model."
  },
  {
    question: "How do you handle Guatemalan compliance and tax requirements?",
    answer:
      "We deliver artefacts for AML/CFT, SAT tax reporting, PCI-DSS, OFAC screening, Habeas Data, and data residency commitments. Everything is packaged for regulators, auditors, and executive reviews."
  },
  {
    question: "Can we support cross-border distributors effectively?",
    answer:
      "Yes. Multi-currency pricing, Spanish-first communications, and wellbeing analytics keep Guatemala, Mexico, and US leaders aligned with identical service levels."
  }
];

type PageProps = {
  params: { lang: string };
};

export default function GuatemalaPaymentGatewaysPage({ params }: PageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale as SupportedLocale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale as SupportedLocale);
  const pricingHref = buildLocalizedPath("/pricing", locale as SupportedLocale);

  return (
    <div className="space-y-20 pb-24 pt-24 md:space-y-24 md:pt-28">
      <section className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)] lg:items-start">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
              Guatemala • Payment gateways
            </span>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Ways to accept payments from MLM Software in Guatemala (GT)
            </h1>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Cloud MLM Software has already built great systems for the greatest companies. We adapt those battle-tested frameworks to Guatemala so every transaction across retail, agrifood, and diaspora communities remains fast, transparent, and compliant.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              The availability of the payment gateways supported for Guatemala includes PayPal, Amazon Pay, PayU Latam, Stripe, Authorize.Net, Braintree, Adyen, Mercado Pago, 2Checkout, First Atlantic Commerce, and local banking partners such as BAC Credomatic and Banco Industrial.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                <Link href={contactHref}>
                  Launch in Guatemala
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900/60"
              >
                <Link href={pricingHref}>
                  Review pricing
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="gap-2 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900/60"
              >
                <Link href={demoHref}>
                  Explore the demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            {METRICS.map((metric) => (
              <article
                key={metric.label}
                className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-6 shadow-sm dark:border-slate-700 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
              >
                <metric.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                  {metric.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{metric.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-[36px] border border-slate-200 bg-slate-50/70 p-10 shadow-inner dark:border-slate-800 dark:bg-slate-900/50 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Market insights
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Guatemala’s payment landscape for thought-leading MLM brands
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                We conduct immersion sessions with finance, compliance, product, and distributor leaders to map the journeys that matter most—from coffee cooperatives to wellness communities.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {INSIGHTS.map((insight) => (
                <article
                  key={insight.title}
                  className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70"
                >
                  <insight.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{insight.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{insight.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Payment stack orchestrated for Guatemala
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Banks, PSPs, wallets, and cash partners share telemetry so PayPal, Amazon Pay, PayU Latam, Stripe, Mercado Pago, 2Checkout, Adyen, Braintree, Authorize.Net, and First Atlantic Commerce deliver one consistent experience.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {STACKS.map((stack) => (
            <article
              key={stack.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="flex items-center gap-3">
                <stack.icon className="h-7 w-7 text-sky-600 dark:text-sky-300" aria-hidden />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stack.name}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{stack.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {stack.providers.map((provider) => (
                  <span
                    key={provider}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  >
                    {provider}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-[36px] border border-slate-200 bg-white/95 p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:items-start">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Delivery cadence
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Implementation stages tuned for Guatemala’s business reality
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Each sprint supplies artefacts and dashboards that regulators, auditors, and executives can review without friction.
              </p>
            </div>
            <div className="space-y-6">
              {STAGES.map((stage) => (
                <article
                  key={stage.step}
                  className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 dark:border-slate-700 dark:bg-slate-900/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                      {stage.step}
                    </span>
                    <stage.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{stage.headline}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stage.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {stage.artefacts.map((artefact) => (
                      <li key={artefact} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-4 rounded-full bg-sky-500/80 dark:bg-sky-400" aria-hidden />
                        <span>{artefact}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Assurance for Guatemala’s executives and distributor councils
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Finance, compliance, customer success, and distributor wellbeing share one command centre and a common narrative.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CONFIDENCE_POINTS.map((point) => (
            <article
              key={point.title}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
            >
              <point.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{point.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{point.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-[32px] border border-slate-200 bg-slate-50/80 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)]">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                FAQs
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Guidance for Guatemala-based finance, compliance, and distributor leaders planning their transformation.
              </p>
            </div>
            <div className="space-y-6">
              {FAQS.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-3xl border border-slate-200 bg-white/95 p-6 dark:border-slate-700 dark:bg-slate-900/70"
                >
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-[44px] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-8 py-16 text-white shadow-lg dark:border-slate-700 sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.28),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.24),transparent_55%)]"
            aria-hidden
          />
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Deliver Guatemala-ready MLM payment excellence
            </h2>
            <p className="text-base text-white/90">
              Bank, PSP, wallet, and distributor enablement channels operate as one system. Cloud MLM Software keeps every stakeholder confident—at headquarters and in the field.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Schedule a strategy session
                  <ArrowUpRight className="h-4 w-4 text-slate-600" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/70 text-white hover:bg-white/10"
              >
                <Link href={demoHref}>Preview the platform</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <Link href={pricingHref}>Download pricing blueprint</Link>
              </Button>
            </div>
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
