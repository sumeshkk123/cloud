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
  Compass,
  Globe2,
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
  title: "Guinea-Bissau MLM Payment Gateways | Cloud MLM Software",
  description:
    "Ways to accept payments from MLM Software in Guinea-Bissau (GW). Cloud MLM Software unites regional banking, PSPs, and distributor enablement to support growth across West Africa and diaspora corridors.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/guinea-bissau"
  },
  openGraph: {
    title: "Guinea-Bissau MLM Payment Gateways",
    description:
      "Coordinate Guinea-Bissau’s banking partners, global PSPs, and diaspora expectations with Cloud MLM Software’s governance engine.",
    url: "/mlm-software-payment-gateways/guinea-bissau"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  title: string;
  value: string;
  description: string;
  icon: IconType;
};

type Focus = {
  name: string;
  copy: string;
  icon: IconType;
};

type Stack = {
  label: string;
  description: string;
  providers: string[];
  icon: IconType;
};

type Stage = {
  heading: string;
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
    title: "Settlement clarity",
    value: "T+1.5 days",
    description:
      "Banco da África Ocidental, Ecobank, Orabank, and Banco Comercial Atlântico ledgers synchronised with automated FX governance.",
    icon: BarChart3
  },
  {
    title: "Connector coverage",
    value: "9 integrations",
    description:
      "Stripe, PayPal, Amazon Pay, PayU, 2Checkout, Flutterwave, Interswitch, First Atlantic Commerce, and Ecobank Collect orchestrated as one.",
    icon: PlugsConnected
  },
  {
    title: "Compliance artefacts",
    value: "15 playbooks",
    description:
      "BCEAO AML/CFT, WAEMU directives, OFAC screening, data residency, and tax evidence ready for regulator and board reviews.",
    icon: ShieldCheck
  }
];

const FOCUSES: Focus[] = [
  {
    name: "Agriculture & commodities",
    copy:
      "Cashew cooperatives, agro-processing, and export distributors need transparent remittances, FX clarity, and inventory-linked payouts.",
    icon: Map
  },
  {
    name: "Healthcare & wellness",
    copy:
      "Clinics, wellness collectives, and aid-driven programmes rely on recurring billing, subsidy tracking, and wellbeing analytics.",
    icon: Target
  },
  {
    name: "Diaspora-driven commerce",
    copy:
      "Entrepreneurs selling into Portugal, Senegal, Cabo Verde, and the United States expect e-wallets, card payments, and bank transfers with consistent governance.",
    icon: Globe2
  }
];

const STACKS: Stack[] = [
  {
    label: "Banking & treasury",
    description:
      "Integrate domestic and regional banks to secure liquidity, FX, and reconciliation discipline without manual spreadsheets.",
    providers: ["Banco da África Ocidental", "Ecobank", "Orabank", "Banco Comercial Atlântico", "UBA"],
    icon: Bank
  },
  {
    label: "Card & PSP mesh",
    description:
      "Stripe, PayPal, Amazon Pay, PayU, 2Checkout, Flutterwave, Interswitch, and First Atlantic Commerce inherit unified credential vaulting and dispute workflows.",
    providers: ["Stripe", "PayPal", "Flutterwave", "Interswitch", "First Atlantic Commerce"],
    icon: PlugsConnected
  },
  {
    label: "Collections & wallets",
    description:
      "Support Ecobank Collect, MTN MoMo, Orange Money, and emerging fintech wallets with policy-driven onboarding and telemetry.",
    providers: ["Ecobank Collect", "Orange Money", "MTN MoMo", "PayU", "2Checkout"],
    icon: CurrencyCircleDollar
  }
];

const STAGES: Stage[] = [
  {
    heading: "Blueprint & compliance alignment",
    detail:
      "We map BCEAO directives, WAEMU regulation, data residency commitments, and diaspora expectations into one operating charter.",
    artefacts: [
      "Compliance blueprint covering AML/CFT, OFAC screening, data governance, and taxation.",
      "Stakeholder RACI spanning Bissau HQ, regional offices, and diaspora councils.",
      "Solution architecture diagrams showing data flow, monitoring, and escalation."
    ],
    icon: Compass
  },
  {
    heading: "Connector implementation & telemetry",
    detail:
      "Integrate banks, PSPs, and wallets with credential vaults, redundancy, and chargeback workflows tuned for cash-heavy and digital journeys.",
    artefacts: [
      "Connector playbooks with heartbeat thresholds, incident communications, and fallback paths.",
      "Dispute centre covering card, mobile money, and bank transfer channels.",
      "Load tests for harvest seasons, aid disbursements, and diaspora campaigns."
    ],
    icon: Waveform
  },
  {
    heading: "Pilot, optimise, and scale",
    detail:
      "Pilot across agriculture, healthcare, and services cohorts to validate transparency, distributor wellbeing, and experience design before scaling.",
    artefacts: [
      "Executive dashboards highlighting settlement tempo, FX exposure, and wellbeing metrics.",
      "Distributor enablement kit with Portuguese and French communications.",
      "Optimisation backlog prioritised by revenue, risk, and community impact."
    ],
    icon: Sparkles
  }
];

const CONFIDENCE_POINTS: Confidence[] = [
  {
    title: "Treasury foresight",
    copy:
      "Finance councils monitor liquidity, FX, and receivables in real time, with automated alerts across Bissau, Dakar, Lisbon, and diaspora corridors.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Distributor trust loops",
    copy:
      "Wellbeing alerts, recognition cadences, and self-service statements make leaders confident their commissions are accurate and timely.",
    icon: UsersThree
  },
  {
    title: "Board-ready storytelling",
    copy:
      "Narratives combine regulatory compliance, customer experience, and growth metrics in Portuguese, French, and English for every board session.",
    icon: MapTrifold
  }
];

const FAQS: FAQ[] = [
  {
    question: "Which payment partners do you integrate in Guinea-Bissau?",
    answer:
      "We orchestrate Banco da África Ocidental, Ecobank, Orabank, Banco Comercial Atlântico, UBA, Stripe, PayPal, Amazon Pay, PayU, 2Checkout, Flutterwave, Interswitch, First Atlantic Commerce, Ecobank Collect, Orange Money, MTN MoMo, and more within one operating model."
  },
  {
    question: "How do you manage compliance for BCEAO and WAEMU jurisdictions?",
    answer:
      "We deliver artefacts covering AML/CFT, WAEMU directives, data residency, taxation, and OFAC screening. Compliance dashboards and documentation simplify regulator submissions and executive updates."
  },
  {
    question: "Can we support diaspora communities effectively?",
    answer:
      "Yes. Multi-currency pricing, Portuguese/French communications, and wellbeing analytics ensure diaspora leaders in Portugal, France, the US, and Cabo Verde experience consistent service."
  }
];

type PageProps = {
  params: { lang: string };
};

export default function GuineaBissauPaymentGatewaysPage({ params }: PageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale as SupportedLocale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale as SupportedLocale);
  const pricingHref = buildLocalizedPath("/pricing", locale as SupportedLocale);

  return (
    <div className="space-y-20 pb-24 pt-24 md:space-y-24 md:pt-28">
      <section className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
              Guinea-Bissau • Payment gateways
            </span>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Ways to accept payments from MLM Software in Guinea-Bissau (GW)
            </h1>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Cloud MLM Software has already built great systems for the greatest companies. We adapt those disciplined patterns to Guinea-Bissau so settlements, subsidies, and diaspora commerce stay transparent, fast, and compliant.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              The availability of the payment gateways supported for Guinea-Bissau includes PayPal, Amazon Pay, PayU, 2Checkout, Stripe, Flutterwave, Interswitch, First Atlantic Commerce, Ecobank Collect, and domestic banking partners.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                <Link href={contactHref}>
                  Launch in Guinea-Bissau
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
                key={metric.title}
                className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-6 shadow-sm dark:border-slate-700 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
              >
                <metric.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                  {metric.title}
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{metric.description}</p>
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
                Opportunity map
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Guinea-Bissau’s payment landscape for modern MLM brands
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                We co-design journeys with finance, compliance, field leadership, and community partners to ensure technology mirrors the realities of agriculture, wellness, and diaspora commerce.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {FOCUSES.map((focus) => (
                <article
                  key={focus.name}
                  className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70"
                >
                  <focus.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{focus.name}</h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{focus.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Payment stack orchestrated for Guinea-Bissau
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Banks, PSPs, and wallets feed a single telemetry source so PayPal, Amazon Pay, PayU, 2Checkout, Stripe, Flutterwave, Interswitch, and First Atlantic Commerce share one governance framework.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {STACKS.map((stack) => (
            <article
              key={stack.label}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="flex items-center gap-3">
                <stack.icon className="h-7 w-7 text-sky-600 dark:text-sky-300" aria-hidden />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stack.label}</h3>
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
                Implementation roadmap tailored for Guinea-Bissau
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Each stage delivers artefacts, dashboards, and communications so finance, compliance, and field leadership remain aligned.
              </p>
            </div>
            <div className="space-y-6">
              {STAGES.map((stage) => (
                <article
                  key={stage.heading}
                  className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 dark:border-slate-700 dark:bg-slate-900/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                      {stage.heading}
                    </span>
                    <stage.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  </div>
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
            Proof points for Guinea-Bissau’s executive leadership
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Finance, compliance, customer care, and distributor wellbeing teams rely on the same telemetry and narratives.
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
                Answers for Guinea-Bissau finance directors, compliance leaders, and distributor councils preparing their rollout.
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
              Deliver Guinea-Bissau-ready MLM payment excellence
            </h2>
            <p className="text-base text-white/90">
              Cloud MLM Software unifies banks, PSPs, wallets, and distributor enablement into one disciplined platform so every stakeholder—local and diaspora—feels confident.
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
