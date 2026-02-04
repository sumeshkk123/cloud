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
  Landmark,
  Map,
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
  title: "Haiti MLM Payment Gateways | Cloud MLM Software",
  description:
    "Ways to accept payments from MLM Software in Haiti (HT). Cloud MLM Software aligns bank, PSP, wallet, and distributor experience to support resilient growth across Haiti and its diaspora.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/haiti"
  },
  openGraph: {
    title: "Haiti MLM Payment Gateways",
    description:
      "Unify banking, PSP, aid, and diaspora commerce in Haiti with Cloud MLM Software’s governance playbooks.",
    url: "/mlm-software-payment-gateways/haiti"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Opportunity = {
  title: string;
  copy: string;
  icon: IconType;
};

type Capability = {
  name: string;
  description: string;
  connectors: string[];
  icon: IconType;
};

type Step = {
  phase: string;
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
    label: "Settlement rhythm",
    value: "T+1.3 days",
    detail:
      "Automated reconciliation for Sogebank, Unibank, Capital Bank, Banque Nationale de Crédit, and Citibank partners with FX dashboards.",
    icon: BarChart3
  },
  {
    label: "Connector ecosystem",
    value: "10 providers",
    detail:
      "Stripe, PayPal, Amazon Pay, PayU, 2Checkout, Flutterwave, First Atlantic Commerce, WiPay, MonCash, and Digicel MyCash governed as one.",
    icon: PlugsConnected
  },
  {
    label: "Compliance artefacts",
    value: "17 deliverables",
    detail:
      "BNC/BID compliance, AML/CFT, data residency, OFAC screening, and NGO compatibility packaged for leadership and regulator reviews.",
    icon: ShieldCheck
  }
];

const OPPORTUNITIES: Opportunity[] = [
  {
    title: "Healthcare & social impact",
    copy:
      "Clinics, wellness programmes, and aid-backed initiatives need subsidy tracking, grant alignment, and wellbeing analytics for staff and distributors.",
    icon: Landmark
  },
  {
    title: "Retail & services",
    copy:
      "Retailers, logistics, and mobile services demand recurring billing, cash agent orchestration, and multilingual support across Port-au-Prince and Cap-Haïtien.",
    icon: Map
  },
  {
    title: "Diaspora commerce",
    copy:
      "Haitian diaspora in the US, Canada, France, and the Dominican Republic expect multi-currency PSPs, digital wallets, and transparent remittance flows.",
    icon: Globe2
  }
];

const CAPABILITIES: Capability[] = [
  {
    name: "Banking & treasury",
    description:
      "Integrate Sogebank, Unibank, Capital Bank, Banque Nationale de Crédit, and Citibank to manage liquidity, FX, and tax obligations with confidence.",
    connectors: ["Sogebank", "Unibank", "Capital Bank", "Banque Nationale de Crédit", "Citibank"],
    icon: Bank
  },
  {
    name: "PSP & card mesh",
    description:
      "Stripe, PayPal, Amazon Pay, PayU, 2Checkout, Flutterwave, First Atlantic Commerce, and WiPay operate with shared credential vaults, observability, and chargeback automation.",
    connectors: ["Stripe", "PayPal", "First Atlantic Commerce", "WiPay", "PayU"],
    icon: PlugsConnected
  },
  {
    name: "Wallets & cash agents",
    description:
      "MonCash, Digicel MyCash, agent networks, and aid disbursement rails are integrated with policy-driven onboarding, offline-first capabilities, and wellbeing monitoring.",
    connectors: ["MonCash", "Digicel MyCash", "WiPay", "2Checkout"],
    icon: CurrencyCircleDollar
  }
];

const STEPS: Step[] = [
  {
    phase: "Sprint 01",
    headline: "Strategy, compliance, and stakeholder charter",
    description:
      "Translate Haitian banking, NGO, and international compliance expectations into a shared operating blueprint before any integration begins.",
    artefacts: [
      "Compliance blueprint covering AML/CFT, tax, data governance, and OFAC screening.",
      "Stakeholder RACI spanning Haitian leadership, NGO partners, and diaspora councils.",
      "Solution architecture mapping data flows, observability, and incident response."
    ],
    icon: Target
  },
  {
    phase: "Sprint 02",
    headline: "Connector implementation & telemetry",
    description:
      "Integrate banks, PSPs, wallets, and cash agents with credential vaults, redundancy, and dispute workflows tuned for mixed cash and digital journeys.",
    artefacts: [
      "Connector runbooks with heartbeat thresholds, communication scripts, and failover plans.",
      "Unified dispute centre for card, wallet, and aid-funded transactions.",
      "Performance tests for diaspora surges, national campaigns, and seasonal peaks."
    ],
    icon: Waveform
  },
  {
    phase: "Sprint 03",
    headline: "Pilot, refine, and expand",
    description:
      "Pilots with healthcare, retail, and service cohorts validate transparency, wellbeing analytics, and bilingual communications before scaling.",
    artefacts: [
      "Executive dashboards covering settlement tempo, FX exposure, and wellbeing signals.",
      "Distributor enablement kit with Haitian Creole, French, and English narratives.",
      "Optimisation backlog prioritised by revenue impact, risk, and community value."
    ],
    icon: Sparkles
  }
];

const CONFIDENCE_POINTS: Confidence[] = [
  {
    title: "Treasury foresight",
    copy:
      "Liquidity, FX, and receivables dashboards give CFOs a live view across Port-au-Prince, Cap-Haïtien, diaspora hubs, and NGO partners.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Distributor trust",
    copy:
      "Wellbeing alerts, recognition cadences, and self-service statements keep field leaders confident their commissions are timely and accurate.",
    icon: UsersThree
  },
  {
    title: "Board-ready narratives",
    copy:
      "Dashboards translate compliance, impact, and growth metrics for boards, donors, investors, and regulators.",
    icon: MapTrifold
  }
];

const FAQS: FAQ[] = [
  {
    question: "Which payment partners do you integrate in Haiti?",
    answer:
      "We orchestrate Sogebank, Unibank, Capital Bank, Banque Nationale de Crédit, Citibank, Stripe, PayPal, Amazon Pay, PayU, 2Checkout, Flutterwave, First Atlantic Commerce, WiPay, MonCash, and Digicel MyCash in a unified governance model."
  },
  {
    question: "How do you keep us compliant with Haitian and international regulations?",
    answer:
      "We supply artefacts covering AML/CFT, tax, data governance, PCI-DSS, OFAC screening, and NGO partnership requirements. Compliance dashboards make reporting straightforward."
  },
  {
    question: "Can we serve diaspora communities effectively?",
    answer:
      "Yes. Multi-currency PSPs, wallets, bilingual communications, and wellbeing analytics ensure diaspora leaders in the US, Canada, France, and the Dominican Republic experience consistent service."
  }
];

type PageProps = {
  params: { lang: string };
};

export default async function HaitiPaymentGatewaysPage({ params }: PageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale as SupportedLocale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale as SupportedLocale);
  const pricingHref = buildLocalizedPath("/pricing", locale as SupportedLocale);

  return (
    <div className="space-y-20 pb-24 pt-24 md:space-y-24 md:pt-28">
      <section className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
              Haiti • Payment gateways
            </span>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Ways to accept payments from MLM Software in Haiti (HT)
            </h1>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Cloud MLM Software has already built great systems for the greatest companies. We bring that resilience to Haiti so every transaction—from local cash agents to diaspora PSPs—stays transparent, compliant, and inspiring.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              The availability of the payment gateways supported for Haiti includes PayPal, Amazon Pay, PayU, 2Checkout, Stripe, Flutterwave, First Atlantic Commerce, WiPay, MonCash, Digicel MyCash, and domestic banking partners.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                <Link href={contactHref}>
                  Launch in Haiti
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
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)]">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Opportunity map
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Haiti’s payment priorities for resilient MLM growth
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                We collaborate with finance, compliance, aid partners, and distributor leadership to design journeys that respect Haiti’s cash realities and diaspora expectations.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {OPPORTUNITIES.map((opportunity) => (
                <article
                  key={opportunity.title}
                  className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70"
                >
                  <opportunity.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{opportunity.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{opportunity.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Payment stack orchestrated for Haiti
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Banks, PSPs, wallets, and aid channels share telemetry so PayPal, Amazon Pay, PayU, 2Checkout, Stripe, Flutterwave, First Atlantic Commerce, WiPay, MonCash, and Digicel MyCash deliver one cohesive experience.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {CAPABILITIES.map((capability) => (
            <article
              key={capability.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="flex items-center gap-3">
                <capability.icon className="h-7 w-7 text-sky-600 dark:text-sky-300" aria-hidden />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{capability.name}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{capability.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {capability.connectors.map((connector) => (
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
                Implementation roadmap tailored for Haiti
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Each sprint supplies artefacts, dashboards, and communications that satisfy donors, regulators, and distributor councils.
              </p>
            </div>
            <div className="space-y-6">
              {STEPS.map((step) => (
                <article
                  key={step.phase}
                  className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 dark:border-slate-700 dark:bg-slate-900/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                      {step.phase}
                    </span>
                    <step.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{step.headline}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {step.artefacts.map((artefact) => (
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
            Confidence signals for Haiti’s leadership
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Finance, compliance, distributor wellbeing, and aid partners see the same live telemetry and action plans.
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
                Guidance for Haiti-based finance, compliance, and distributor leaders planning their next chapter.
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
              Deliver Haiti-ready MLM payment excellence
            </h2>
            <p className="text-base text-white/90">
              Cloud MLM Software unites banks, PSPs, wallets, cash agents, and wellbeing analytics so every Haitian and diaspora stakeholder experiences one disciplined system.
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
