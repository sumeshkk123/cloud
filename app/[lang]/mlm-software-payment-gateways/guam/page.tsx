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
  Map,
  Radar,
  Sparkles,
  Target
} from "lucide-react";
import {
  AirplaneTilt,
  Compass,
  CurrencyCircleDollar,
  GlobeSimple,
  PlugsConnected,
  SealCheck,
  StackSimple,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Guam MLM Payment Gateways | Cloud MLM Software",
  description:
    "Ways to accept payments from MLM Software in Guam (GU). Cloud MLM Software connects US territories governance, tourism demand, and Pacific diaspora commerce with resilient payment orchestration.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/guam"
  },
  openGraph: {
    title: "Guam MLM Payment Gateways",
    description:
      "Modernise card, wallet, and banking experiences for Guam-based MLM brands with Cloud MLM Software’s treasury and compliance playbooks.",
    url: "/mlm-software-payment-gateways/guam"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  title: string;
  metric: string;
  caption: string;
  icon: IconType;
};

type Focus = {
  name: string;
  description: string;
  icon: IconType;
};

type StackLayer = {
  title: string;
  description: string;
  connectors: string[];
  icon: IconType;
};

type TimelineStep = {
  label: string;
  headline: string;
  detail: string;
  deliverables: string[];
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

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Settlement window",
    metric: "Same-day US",
    caption:
      "Bank of Guam, BankPacific, and Navy Federal credit union ledgers sync with unified reconciliation packs and ACH reporting.",
    icon: Target
  },
  {
    title: "Gateway coverage",
    metric: "11 integrations",
    caption:
      "Stripe, PayPal, Amazon Pay, Braintree, Authorize.Net, Adyen, 2Checkout, PayU, First Data, Square, and First Atlantic Commerce under one policy.",
    icon: BarChart3
  },
  {
    title: "Compliance artefacts",
    metric: "20 playbooks",
    caption:
      "OFAC, FinCEN, Guam Department of Revenue & Taxation, and PCI-DSS documentation ready for board and regulator reviews.",
    icon: SealCheck
  }
];

const FOCUSES: Focus[] = [
  {
    name: "Tourism & hospitality",
    description:
      "Resorts, diving tours, and wellness retreats require pre-arrival deposits, refunds, and loyalty payouts with multiple currencies and languages.",
    icon: AirplaneTilt
  },
  {
    name: "Retail & omnichannel",
    description:
      "Global brands and local entrepreneurs need inventory-aware subscription billing, curbside fulfilment, and PSP routing optimised for military hubs.",
    icon: StackSimple
  },
  {
    name: "Professional services & health",
    description:
      "Advisory, healthcare, and education networks expect HIPAA-aligned data handling, invoice automation, and diaspora payment options.",
    icon: Globe2
  }
];

const STACK_LAYERS: StackLayer[] = [
  {
    title: "Banking & treasury",
    description:
      "Reconcile Bank of Guam, BankPacific, First Hawaiian Bank, JP Morgan, and Navy Federal flows with unified approvals and liquidity dashboards.",
    connectors: ["Bank of Guam", "BankPacific", "First Hawaiian Bank", "Navy Federal Credit Union"],
    icon: CurrencyCircleDollar
  },
  {
    title: "Card & PSP mesh",
    description:
      "Stripe, PayPal, Adyen, Braintree, Authorize.Net, 2Checkout, PayU, Square, and First Data run with one credential vault and dispute centre.",
    connectors: ["Stripe", "PayPal", "Adyen", "Braintree", "Authorize.Net", "First Data", "Square"],
    icon: PlugsConnected
  },
  {
    title: "Wallets & alternative rails",
    description:
      "Amazon Pay, Apple Pay, Google Pay, and military base payment programmes integrate with policy-driven onboarding and telemetry.",
    connectors: ["Amazon Pay", "Apple Pay", "Google Pay", "Base payment programmes"],
    icon: GlobeSimple
  }
];

const TIMELINE: TimelineStep[] = [
  {
    label: "Phase 01",
    headline: "Strategy, compliance, and readiness",
    detail:
      "Translate US territory regulations, OFAC expectations, and Guam-specific tax rules into a shared operating blueprint for finance, legal, and distributor councils.",
    deliverables: [
      "Compliance matrix covering OFAC, FinCEN, Guam Department of Revenue & Taxation, and PCI-DSS.",
      "Stakeholder RACI for Guam HQ, US mainland partners, and Asia-Pacific ambassadors.",
      "Solution architecture mapping payment flows, monitoring, and escalation."
    ],
    icon: Map
  },
  {
    label: "Phase 02",
    headline: "Connector implementation & telemetry",
    detail:
      "Integrate bank, card, and wallet providers with credential vaulting, heartbeat monitoring, and chargeback automation for high-volume tourism and retail cycles.",
    deliverables: [
      "Connector runbooks with failover playbooks and communications templates.",
      "Unified dispute and refund centre for ACH, card, and wallet rails.",
      "Load tests for holiday peaks, military rotations, and promotional drops."
    ],
    icon: Radar
  },
  {
    label: "Phase 03",
    headline: "Pilot, optimise, and expand",
    detail:
      "Pilot across resort, retail, and service cohorts to validate transparency, FX clarity, and wellbeing analytics before scaling to the entire field.",
    deliverables: [
      "Executive dashboards tracking settlement pace, exception volume, and NPS signals.",
      "Distributor enablement kit with multilingual content and wellbeing alerts.",
      "Optimisation backlog prioritised for tour operators, PX outlets, and digital services."
    ],
    icon: Sparkles
  }
];

const CONFIDENCE_POINTS: Confidence[] = [
  {
    title: "Treasury in sync",
    copy:
      "Liquidity, FX, and receivables dashboards show Guam HQ and mainland partners identical views so cash decisions stay coordinated.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Distributor trust loops",
    copy:
      "Self-service statements, recognition cadences, and wellbeing triggers keep field leaders confident—even across time zones.",
    icon: UsersThree
  },
  {
    title: "Board-ready narratives",
    copy:
      "Executive briefings connect settlement telemetry, risk posture, and growth ambitions in language that CFOs, COOs, and directors expect.",
    icon: Compass
  }
];

const FAQS: FAQ[] = [
  {
    question: "Which payment partners do you integrate in Guam?",
    answer:
      "We orchestrate Bank of Guam, BankPacific, First Hawaiian Bank, JP Morgan, Stripe, PayPal, Amazon Pay, Adyen, Braintree, Authorize.Net, 2Checkout, PayU, Square, First Data, Apple Pay, Google Pay, and more. Each connector inherits unified security, logging, and approval workflows."
  },
  {
    question: "How do you keep us compliant with US territory regulations?",
    answer:
      "We supply artefacts for OFAC, FinCEN, PCI-DSS, Guam Department of Revenue & Taxation, and consumer protection statutes. Compliance dashboards make it simple to brief executives and auditors."
  },
  {
    question: "Can we balance mainland and Asia-Pacific customer expectations?",
    answer:
      "Yes. We orchestrate multi-currency pricing, language packs, shipping, and support flows so mainland US, Japan, Korea, and Australia members experience the same high standard."
  }
];

type PageProps = {
  params: { lang: string };
};

export default function GuamPaymentGatewaysPage({ params }: PageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale as SupportedLocale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale as SupportedLocale);
  const pricingHref = buildLocalizedPath("/pricing", locale as SupportedLocale);

  return (
    <div className="space-y-20 pb-24 pt-24 md:space-y-24 md:pt-28">
      <section className="container">
        <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-sky-50 p-10 shadow-sm dark:border-slate-800 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-14">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.28),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.22),transparent_55%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.16),transparent_50%)]"
            aria-hidden
          />
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Guam • Payment gateways
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Ways to accept payments from MLM Software in Guam (GU)
              </h1>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Cloud MLM Software has already built great systems for the greatest companies. We extend those playbooks to Guam so tourism, PX retail, and Pacific diaspora commerce operate with US-grade compliance and island-speed settlement.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                The availability of the payment gateways supported for Guam is listed below. We coordinate PayPal, Amazon Pay, Stripe, Adyen, Braintree, Authorize.Net, Square, First Data, PayU, 2Checkout, and regional bank partners with one source of truth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  <Link href={contactHref}>
                    Start Guam rollout
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
                    Explore demo
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              {HIGHLIGHTS.map((highlight) => (
                <article
                  key={highlight.title}
                  className="rounded-3xl border border-slate-200/70 bg-white/95 p-5 shadow-sm backdrop-blur-sm dark:border-slate-700/70 dark:bg-slate-900/80"
                >
                  <highlight.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                    {highlight.title}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{highlight.metric}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{highlight.caption}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-[36px] border border-slate-200 bg-slate-50/70 p-10 shadow-inner dark:border-slate-800 dark:bg-slate-900/50 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)]">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Opportunity lenses
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Guam’s payment priorities for modern MLM leaders
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Tourism, retail, wellness, and military communities expect seamless onboarding, rapid payouts, and always-on support. We make the technology look effortless while governance stays strict.
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
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{focus.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Payment stack connected for Guam
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            We pair domestic banking rails with global PSPs and wallets so PayPal, Amazon Pay, Stripe, Adyen, Braintree, Authorize.Net, 2Checkout, PayU, Square, and First Data feed the same telemetry and policy engine.
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
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
              Delivery timeline
            </span>
            <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Implementation path to Guam-grade confidence
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {TIMELINE.map((step) => (
                <article
                  key={step.label}
                  className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50/70 p-6 dark:border-slate-700 dark:bg-slate-900/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                      {step.label}
                    </span>
                    <step.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{step.headline}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{step.detail}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {step.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-4 rounded-full bg-sky-500/80 dark:bg-sky-400" aria-hidden />
                        <span>{deliverable}</span>
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
            Confidence signals for Guam executives
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Finance, compliance, distributor success, and customer care teams receive the same live view of commitments, cash, and wellbeing.
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
                Guidance for Guam-based finance leaders, compliance officers, and distributor councils planning their next transformation.
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
        <div className="relative overflow-hidden rounded-[44px] border border-slate-200 bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-600 px-8 py-16 text-white shadow-lg dark:border-slate-700 sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.22),transparent_55%)]"
            aria-hidden
          />
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Deliver Guam-ready MLM payments with Cloud MLM Software
            </h2>
            <p className="text-base text-white/90">
              Unite banks, PSPs, wallets, and distributor experience in one disciplined platform. We keep tourism, military, and diaspora communities engaged every step of the way.
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
