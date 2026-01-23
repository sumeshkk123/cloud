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
  LayoutGrid,
  Map,
  Radar,
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
  title: "Guyana MLM Payment Gateways | Cloud MLM Software",
  description:
    "Ways to accept payments from MLM Software in Guyana (GY). Cloud MLM Software synchronises energy, agrifood, and services commerce with unified banking, PSP, and wellbeing governance.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/guyana"
  },
  openGraph: {
    title: "Guyana MLM Payment Gateways",
    description:
      "Modernise settlement, compliance, and distributor experience across Guyana’s growth economy with Cloud MLM Software.",
    url: "/mlm-software-payment-gateways/guyana"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  title: string;
  metric: string;
  detail: string;
  icon: IconType;
};

type Opportunity = {
  name: string;
  summary: string;
  icon: IconType;
};

type Layer = {
  title: string;
  description: string;
  connectors: string[];
  icon: IconType;
};

type Stage = {
  label: string;
  headline: string;
  detail: string;
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
    title: "Settlement performance",
    metric: "T+1 across Guyanese banks",
    detail:
      "Republic Bank Guyana, Demerara Bank, GBTI, and ScotiaBank ledgers sync with automated FX and tax reporting packs.",
    icon: BarChart3
  },
  {
    title: "Connector ecosystem",
    metric: "11 integrations",
    detail:
      "Stripe, PayPal, Amazon Pay, Adyen, Braintree, Authorize.Net, 2Checkout, PayU, First Atlantic Commerce, WiPay, and Pay360 orchestrated together.",
    icon: LayoutGrid
  },
  {
    title: "Compliance artefacts",
    metric: "18 deliverables",
    detail:
      "AML/CFT, Bank of Guyana directives, PCI-DSS, OFAC screening, and data governance assembled for board and regulator reviews.",
    icon: ShieldCheck
  }
];

const OPPORTUNITIES: Opportunity[] = [
  {
    name: "Energy & infrastructure",
    summary:
      "Oil & gas supply chains, energy services, and infrastructure contractors require FX management, vendor payouts, and wellbeing analytics for rotating crews.",
    icon: Radar
  },
  {
    name: "Agrifood & manufacturing",
    summary:
      "Rice, sugar, forestry, and food processing collectives need transparent payouts, inventory-aware billing, and diaspora e-commerce orchestration.",
    icon: Map
  },
  {
    name: "Health, wellness & education",
    summary:
      "Clinics, wellness programmes, and learning platforms rely on subscription billing, bilingual messaging, and secure data handling across the Caribbean.",
    icon: Globe2
  }
];

const STACK_LAYERS: Layer[] = [
  {
    title: "Banking & treasury",
    description:
      "Integrate Republic Bank Guyana, Demerara Bank, Guyana Bank for Trade and Industry, ScotiaBank, and Citibank for liquidity clarity and regulatory reporting.",
    connectors: ["Republic Bank Guyana", "Demerara Bank", "GBTI", "ScotiaBank", "Citibank"],
    icon: Bank
  },
  {
    title: "Card & PSP mesh",
    description:
      "Stripe, PayPal, Amazon Pay, Adyen, Braintree, Authorize.Net, PayU, 2Checkout, First Atlantic Commerce, and WiPay operate with shared credential vaulting, observability, and chargeback automation.",
    connectors: ["Stripe", "Adyen", "PayPal", "Braintree", "Authorize.Net", "First Atlantic Commerce"],
    icon: PlugsConnected
  },
  {
    title: "Wallets & alternative rails",
    description:
      "WiPay, Pay360, SurePay, mobile wallets, and cash collection channels inherit policy-driven onboarding, offline-first processes, and wellbeing monitoring.",
    connectors: ["WiPay", "Pay360", "SurePay", "Mobile wallets"],
    icon: CurrencyCircleDollar
  }
];

const STAGES: Stage[] = [
  {
    label: "Sprint 01",
    headline: "Strategy and compliance charter",
    detail:
      "We translate Bank of Guyana directives, AML/CFT expectations, tax requirements, and data governance into one operating blueprint.",
    artefacts: [
      "Compliance playbook covering AML/CFT, taxation, PCI-DSS, OFAC, and data residency.",
      "Stakeholder RACI across Guyana HQ, Caribbean partners, and North American leadership.",
      "Solution architecture for connectors, observability, and incident response."
    ],
    icon: Compass
  },
  {
    label: "Sprint 02",
    headline: "Connector build & telemetry",
    detail:
      "Integrate bank, PSP, and wallet partners with credential vaulting, redundancy, and chargeback automation suited for energy peaks and retail seasons.",
    artefacts: [
      "Connector runbooks with heartbeat metrics, alert routing, and failover sequences.",
      "Dispute centre covering card, ACH, wallet, and cash agent workflows.",
      "Load tests for oil & gas cycles, retail promotions, and diaspora campaigns."
    ],
    icon: Waveform
  },
  {
    label: "Sprint 03",
    headline: "Pilot, optimise, and scale",
    detail:
      "Pilot with energy, agrifood, and service cohorts to validate transparency, wellbeing analytics, and distributor sentiment before national rollout.",
    artefacts: [
      "Executive dashboards tracking settlement tempo, exception rate, and wellbeing signals.",
      "Distributor enablement kit with English and Guyanese Creole communications.",
      "Optimisation backlog prioritised by revenue, risk, and distributor experience."
    ],
    icon: Sparkles
  }
];

const CONFIDENCE_POINTS: Confidence[] = [
  {
    title: "Treasury foresight",
    copy:
      "Liquidity, FX, and receivables dashboards give CFOs and finance councils a real-time lens across Georgetown, New Amsterdam, and diaspora hubs.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Distributor trust engines",
    copy:
      "Wellbeing alerts, recognition cadences, and self-service statements keep leaders confident their commissions and support requests matter.",
    icon: UsersThree
  },
  {
    title: "Board-ready storytelling",
    copy:
      "Narratives connect compliance, customer experience, and growth metrics so directors, investors, and regulators stay aligned.",
    icon: MapTrifold
  }
];

const FAQS: FAQ[] = [
  {
    question: "Which payment partners do you integrate in Guyana?",
    answer:
      "We orchestrate Republic Bank Guyana, Demerara Bank, GBTI, ScotiaBank, Citibank, Stripe, PayPal, Amazon Pay, Adyen, Braintree, Authorize.Net, PayU, 2Checkout, First Atlantic Commerce, WiPay, Pay360, and SurePay in one governed operating model."
  },
  {
    question: "How do you manage compliance with Bank of Guyana directives?",
    answer:
      "We provide artefacts for AML/CFT, taxation, PCI-DSS, OFAC screening, data residency, and consumer protection. Compliance dashboards make it simple to brief regulators and boards."
  },
  {
    question: "Can we support energy and agrifood stakeholders effectively?",
    answer:
      "Yes. We supply payroll-style payouts, FX planning, wellbeing monitoring, and offline-first workflows designed for field operations and diaspora commerce."
  }
];

type PageProps = {
  params: { lang: string };
};

export default function GuyanaPaymentGatewaysPage({ params }: PageProps) {
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
              Guyana • Payment gateways
            </span>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Ways to accept payments from MLM Software in Guyana (GY)
            </h1>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Cloud MLM Software has already built great systems for the greatest companies. We extend that discipline to Guyana so energy, agrifood, wellness, and diaspora communities share one transparent payment experience.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              The availability of the payment gateways supported for Guyana includes PayPal, Amazon Pay, PayU, 2Checkout, Stripe, Adyen, Braintree, Authorize.Net, First Atlantic Commerce, WiPay, Pay360, and local banking partners.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                <Link href={contactHref}>
                  Launch in Guyana
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
          <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-6 shadow-sm dark:border-slate-700 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
            <div className="grid gap-4">
              {METRICS.map((metric) => (
                <article
                  key={metric.title}
                  className="rounded-2xl border border-slate-200/70 bg-white/95 p-5 shadow-sm backdrop-blur-sm dark:border-slate-700/70 dark:bg-slate-900/80"
                >
                  <metric.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                    {metric.title}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{metric.metric}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{metric.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-[36px] border border-slate-200 bg-slate-50/70 p-10 shadow-inner dark:border-slate-800 dark:bg-slate-900/50 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)]">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Market realities
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Guyana’s payment landscape for modern MLM operations
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                We blend energy-sector expectations with agrifood, retail, and wellness journeys to design a payment fabric that supports island, mainland, and diaspora leaders equally.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {OPPORTUNITIES.map((opportunity) => (
                <article
                  key={opportunity.name}
                  className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70"
                >
                  <opportunity.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{opportunity.name}</h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{opportunity.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Payment stack orchestrated for Guyana
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Banks, PSPs, and wallets feed the same telemetry so PayPal, Amazon Pay, PayU, 2Checkout, Stripe, Adyen, Braintree, Authorize.Net, First Atlantic Commerce, WiPay, and Pay360 run with unified policies.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {STACK_LAYERS.map((layer) => (
            <article
              key={layer.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="flex items-center gap-3">
                <layer.icon className="h-7 w-7 text-sky-600 dark:text-sky-300" aria-hidden />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{layer.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{layer.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {layer.connectors.map((connector) => (
                  <span
                    key={connector}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  >
                    {connector}
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
                Implementation roadmap tuned for Guyana’s leadership
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Each sprint produces artefacts, dashboards, and communications that boards, regulators, and distributor councils can trust.
              </p>
            </div>
            <div className="space-y-6">
              {STAGES.map((stage) => (
                <article
                  key={stage.label}
                  className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 dark:border-slate-700 dark:bg-slate-900/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                      {stage.label}
                    </span>
                    <stage.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{stage.headline}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stage.detail}</p>
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
            Proof points for Guyana’s executive leadership
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Finance, compliance, customer success, and distributor wellbeing read from the same live data, guiding action before friction surfaces.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CONFIDENCE_POINTS.map((confidence) => (
            <article
              key={confidence.title}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
            >
              <confidence.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{confidence.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{confidence.copy}</p>
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
                Guidance for Guyana-based finance, compliance, and distributor leaders preparing their rollout.
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
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.24),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.22),transparent_55%)]"
            aria-hidden
          />
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Deliver Guyana-ready MLM payment excellence
            </h2>
            <p className="text-base text-white/90">
              Cloud MLM Software unites banks, PSPs, wallets, and distributor wellbeing into one disciplined platform so every stakeholder—from Georgetown to diaspora hubs—feels confident.
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
