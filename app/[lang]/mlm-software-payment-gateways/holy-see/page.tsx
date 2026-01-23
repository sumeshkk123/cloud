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
  Building2,
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
  title: "Holy See (Vatican City) MLM Payment Gateways | Cloud MLM Software",
  description:
    "Ways to accept payments from MLM Software in the Holy See (VA). Cloud MLM Software harmonises Vatican governance, EU PSPs, and global donor communities with disciplined payment orchestration.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/holy-see"
  },
  openGraph: {
    title: "Holy See MLM Payment Gateways",
    description:
      "Unify Vatican administrative requirements, EU payment partners, and global parish networks with Cloud MLM Software.",
    url: "/mlm-software-payment-gateways/holy-see"
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
    label: "Settlement cadence",
    value: "T+1.1 days",
    detail:
      "Istituto per le Opere di Religione (IOR), UniCredit, Intesa Sanpaolo, and Vatican partnership banks reconciled with FX dashboards.",
    icon: BarChart3
  },
  {
    label: "Connector ecosystem",
    value: "12 PSPs & wallets",
    detail:
      "Stripe, PayPal, Amazon Pay, Adyen, Braintree, Authorize.Net, Worldpay, Checkout.com, 2Checkout, PayU, PayPal Giving Fund, and Vatican donation platforms governed together.",
    icon: Layers
  },
  {
    label: "Compliance artefacts",
    value: "20 documents",
    detail:
      "AIF/ASIF AML directives, Vatican financial transparency, EU AMLD, GDPR, and OFAC screening packaged for Curia leadership and auditors.",
    icon: ShieldCheck
  }
];

const OPPORTUNITIES: Opportunity[] = [
  {
    title: "Global parish networks",
    copy:
      "Religious communities worldwide expect transparent tithing, donor engagement, and wellbeing analytics that tie to Vatican reporting.",
    icon: Building2
  },
  {
    title: "Philanthropy & cultural programmes",
    copy:
      "Museums, cultural projects, and humanitarian outreach require grant governance, recurring donations, and multi-language storytelling.",
    icon: MapPinned
  },
  {
    title: "Education & health missions",
    copy:
      "Schools, hospitals, and social programmes need installment billing, subsidy tracking, and data governance aligned with Vatican standards.",
    icon: Globe2
  }
];

const CAPABILITIES: Capability[] = [
  {
    name: "Banking & treasury",
    description:
      "Integrate IOR, UniCredit, Intesa Sanpaolo, and Vatican-aligned banks to maintain liquidity, FX, and audit transparency across global missions.",
    connectors: ["IOR", "UniCredit", "Intesa Sanpaolo", "BNP Paribas", "Deutsche Bank"],
    icon: Bank
  },
  {
    name: "PSP & donation orchestration",
    description:
      "Stripe, PayPal, Amazon Pay, Adyen, Braintree, Authorize.Net, Worldpay, Checkout.com, 2Checkout, and PayPal Giving Fund operate with shared credential vaulting, observability, and dispute workflows.",
    connectors: ["Stripe", "PayPal", "Worldpay", "Checkout.com", "PayPal Giving Fund"],
    icon: PlugsConnected
  },
  {
    name: "Wallets & pledge platforms",
    description:
      "Donor wallets, recurring pledge systems, and Vatican donation platforms inherit policy-driven onboarding, multi-currency support, and wellbeing analytics.",
    connectors: ["Vatican donation portal", "Recurring pledge wallets", "PayU"],
    icon: CurrencyCircleDollar
  }
];

const STEPS: Step[] = [
  {
    phase: "Sprint 01",
    headline: "Governance blueprint & alignment",
    description:
      "We interpret Vatican financial directives, EU AMLD, GDPR, and philanthropic governance into an operating charter covering finance, Curia leadership, and global dioceses.",
    artefacts: [
      "Compliance blueprint covering AIF/ASIF directives, EU AMLD, GDPR, and OFAC.",
      "Stakeholder RACI connecting Vatican departments, regional dioceses, and donor councils.",
      "Solution architecture detailing data flows, monitoring, and escalation paths."
    ],
    icon: Target
  },
  {
    phase: "Sprint 02",
    headline: "Connector implementation & telemetry",
    description:
      "Integrate banks, PSPs, donation platforms, and wallets with credential vaults, redundancy, and chargeback automation tuned for donor trust.",
    artefacts: [
      "Connector runbooks with heartbeat thresholds, audit logs, and escalation scripts.",
      "Unified dispute centre covering card, SEPA, recurring pledge, and wallet transactions.",
      "Performance tests for major feast days, global campaigns, and cultural events."
    ],
    icon: Waveform
  },
  {
    phase: "Sprint 03",
    headline: "Pilot, optimise, and expand",
    description:
      "Pilots with representative dioceses, donor networks, and cultural programmes validate transparency, wellbeing analytics, and experience design before global rollout.",
    artefacts: [
      "Executive dashboards covering settlement tempo, donor engagement, and wellbeing signals.",
      "Parish enablement kit with multilingual communications and recognition cadences.",
      "Optimisation backlog prioritised by mission impact, risk, and supporter sentiment."
    ],
    icon: Sparkles
  }
];

const CONFIDENCE_POINTS: Confidence[] = [
  {
    title: "Treasury foresight",
    copy:
      "Liquidity, FX, and donor analytics dashboards keep the Prefecture for the Economic Affairs, Secretariat for the Economy, and diocesan finance councils aligned.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Donor trust",
    copy:
      "Transparency dashboards, storytelling, and wellbeing alerts ensure donors and parishes feel heard and confident in every settlement.",
    icon: UsersThree
  },
  {
    title: "Curia-ready narratives",
    copy:
      "Dashboards translate governance, donor impact, and experience design into reports suitable for Curia, auditors, and global partners.",
    icon: MapTrifold
  }
];

const FAQS: FAQ[] = [
  {
    question: "Which payment partners do you integrate for the Holy See?",
    answer:
      "We orchestrate IOR, UniCredit, Intesa Sanpaolo, BNP Paribas, Deutsche Bank, Stripe, PayPal, Amazon Pay, Adyen, Braintree, Authorize.Net, Worldpay, Checkout.com, 2Checkout, PayU, PayPal Giving Fund, and Vatican donation platforms within one policy framework."
  },
  {
    question: "How do you ensure compliance with Vatican and EU regulations?",
    answer:
      "We deliver artefacts covering AIF/ASIF AML directives, EU AMLD, GDPR, OFAC, PCI-DSS, and philanthropic governance. Compliance dashboards accelerate Curia reviews and audits."
  },
  {
    question: "Can we unify global parishes and donor programmes on one platform?",
    answer:
      "Yes. Multi-currency PSPs, multilingual experiences, wellbeing analytics, and recognition cadences keep parishes, donors, and cultural programmes aligned across continents."
  }
];

type PageProps = {
  params: { lang: string };
};

export default function HolySeePaymentGatewaysPage({ params }: PageProps) {
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
              Holy See • Payment gateways
            </span>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Ways to accept payments from MLM Software in the Holy See (VA)
            </h1>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Cloud MLM Software has already built great systems for the greatest companies. We align those frameworks with Vatican governance so every donation, tuition payment, and programme settlement remains transparent and compliant.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              The availability of the payment gateways supported for the Holy See includes PayPal, Amazon Pay, PayU, 2Checkout, Stripe, Adyen, Braintree, Authorize.Net, Worldpay, Checkout.com, PayPal Giving Fund, and Vatican donation platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                <Link href={contactHref}>
                  Design Vatican rollout
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
                Payment strategy for Vatican missions and global communities
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                We collaborate with finance, Curia leadership, dioceses, and donor councils to create journeys that honour Vatican governance, EU regulation, and global parish expectations.
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
            Payment stack orchestrated for the Holy See
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Banks, PSPs, pledge platforms, and donor wallets share one telemetry source so PayPal, Amazon Pay, PayU, 2Checkout, Stripe, Adyen, Braintree, Authorize.Net, Worldpay, Checkout.com, and PayPal Giving Fund deliver consistent experiences.
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
                Implementation roadmap tailored for Vatican leadership
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Each sprint packages artefacts, dashboards, and communications so Curia departments, dioceses, and partner organisations remain aligned.
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
            Confidence for Vatican executives and diocesan leaders
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Finance, compliance, donor relations, and wellbeing teams rely on the same live telemetry, ensuring swift action and consistent storytelling.
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
                Guidance for Vatican departments, dioceses, and donor councils planning their transformation.
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
              Deliver Vatican-ready MLM payment excellence
            </h2>
            <p className="text-base text-white/90">
              Cloud MLM Software unites banks, PSPs, donation platforms, and wellbeing analytics so every parish, donor, and Curia department experiences the same disciplined platform.
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
