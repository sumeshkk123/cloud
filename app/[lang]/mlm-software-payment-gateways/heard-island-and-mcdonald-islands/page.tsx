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
  Layers,
  Map,
  Radar,
  Sparkles
} from "lucide-react";
import {
  Bank,
  CurrencyCircleDollar,
  GlobeHemisphereEast,
  Handshake,
  MapTrifold,
  PlugsConnected,
  ShieldCheck,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Heard Island & McDonald Islands MLM Payment Gateways | Cloud MLM Software",
  description:
    "Ways to accept payments from MLM Software in Heard Island and McDonald Islands (HM). Cloud MLM Software orchestrates remote science operations, logistics, and environmental programmes with resilient banking and PSP governance.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/heard-island-and-mcdonald-islands"
  },
  openGraph: {
    title: "Heard Island & McDonald Islands MLM Payment Gateways",
    description:
      "Unify settlements, telemetry, and wellbeing for remote operations linked to the Australian Antarctic Territory.",
    url: "/mlm-software-payment-gateways/heard-island-and-mcdonald-islands"
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
  copy: string;
  icon: IconType;
};

type Capability = {
  title: string;
  description: string;
  connectors: string[];
  icon: IconType;
};

type Phase = {
  label: string;
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
    title: "Settlement cadence",
    metric: "T+1 Australia-linked",
    detail:
      "ANZ, Commonwealth Bank, Westpac, and NAB ledgers synchronised with automated FX and environmental grant reporting.",
    icon: BarChart3
  },
  {
    title: "Connector ecosystem",
    metric: "8 integrations",
    detail:
      "Stripe, PayPal, Amazon Pay, Adyen, Braintree, Authorize.Net, 2Checkout, and PayPal Commerce Platform governed as one.",
    icon: Layers
  },
  {
    title: "Compliance artefacts",
    metric: "15 deliverables",
    detail:
      "Australian Antarctic Division policies, AML/CTF, environmental grant governance, and OFAC screening documented for board reviews.",
    icon: ShieldCheck
  }
];

const OPPORTUNITIES: Opportunity[] = [
  {
    name: "Scientific programmes",
    copy:
      "Research expeditions, environmental monitoring, and logistics partners rely on transparent funding, milestone-based payouts, and wellbeing analytics.",
    icon: GlobeHemisphereEast
  },
  {
    name: "Supply chain & logistics",
    copy:
      "Remote operations require procurement orchestration, escrowed settlements, and telemetry for transport providers and scientific teams.",
    icon: Radar
  },
  {
    name: "Education & outreach",
    copy:
      "Educational partnerships and digital experiences need subscription billing, grant reconciliation, and cross-border support.",
    icon: Globe2
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Banking & treasury",
    description:
      "Integrate Australian banks and treasury partners to track funding, FX exposure, and grant compliance without manual spreadsheets.",
    connectors: ["ANZ", "Commonwealth Bank", "Westpac", "NAB"],
    icon: Bank
  },
  {
    title: "PSP & card orchestration",
    description:
      "Stripe, PayPal, Amazon Pay, Adyen, Braintree, Authorize.Net, and 2Checkout share credential vaulting, observability, and dispute workflows.",
    connectors: ["Stripe", "PayPal", "Adyen", "Braintree", "Authorize.Net"],
    icon: PlugsConnected
  },
  {
    title: "Wallets & grant rails",
    description:
      "Platform wallets, procurement credits, and grant disbursement channels inherit policy-driven onboarding and offline-first operation.",
    connectors: ["PayPal Commerce Platform", "Platform wallets", "Procurement credits"],
    icon: CurrencyCircleDollar
  }
];

const PHASES: Phase[] = [
  {
    label: "Phase 01",
    headline: "Mission blueprint & compliance alignment",
    description:
      "Translate Australian Antarctic Division governance, grant obligations, and AML/CTF policies into a unified operating charter.",
    artefacts: [
      "Compliance blueprint covering AML/CTF, environmental grant governance, and data residency.",
      "Stakeholder RACI linking expedition leadership, procurement, and finance councils.",
      "Solution architecture mapping data flows, monitoring, and incident response."
    ],
    icon: Compass
  },
  {
    label: "Phase 02",
    headline: "Connector implementation & telemetry",
    description:
      "Integrate banks, PSPs, wallets, and procurement systems with credential vaults, redundancy, and chargeback workflows tuned for remote operations.",
    artefacts: [
      "Connector runbooks with heartbeat thresholds, alert routing, and failover guidance.",
      "Unified dispute centre for card, grant, and procurement transactions.",
      "Load tests for expedition funding cycles, emergency logistics, and educational peaks."
    ],
    icon: Map
  },
  {
    label: "Phase 03",
    headline: "Pilot, optimise, and scale",
    description:
      "Pilots with expedition teams, logistics partners, and education stakeholders ensure transparency, wellbeing analytics, and donor reporting before scaling.",
    artefacts: [
      "Executive dashboards covering settlement tempo, budget adherence, and wellbeing signals.",
      "Partner enablement kit with operational runbooks, wellbeing cadences, and emergency procedures.",
      "Optimisation backlog prioritised by mission impact, risk, and stakeholder experience."
    ],
    icon: Sparkles
  }
];

const CONFIDENCE_POINTS: Confidence[] = [
  {
    title: "Operational clarity",
    copy:
      "Finance and mission directors track funding, FX, and compliance in real time across expedition stages and partner engagements.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Stakeholder confidence",
    copy:
      "Wellbeing dashboards, recognition cadences, and transparent reporting keep researchers, logistics teams, and donors aligned.",
    icon: UsersThree
  },
  {
    title: "Board narratives",
    copy:
      "Dashboards translate compliance, operational telemetry, and mission impact into decisive boardroom conversations.",
    icon: MapTrifold
  }
];

const FAQS: FAQ[] = [
  {
    question: "Which payment partners do you integrate for Heard Island & McDonald Islands operations?",
    answer:
      "We orchestrate ANZ, Commonwealth Bank, Westpac, NAB, Stripe, PayPal, Amazon Pay, Adyen, Braintree, Authorize.Net, 2Checkout, PayPal Commerce Platform, and mission wallets with one governance framework."
  },
  {
    question: "How do you support Australian Antarctic Division governance?",
    answer:
      "We provide artefacts covering AML/CTF, grant compliance, environmental reporting, data residency, and incident response. Documentation is packaged for Australian authorities and expedition leadership."
  },
  {
    question: "Can the platform operate in offline or low-connectivity environments?",
    answer:
      "Yes. Offline-first workflows cache approvals, sync telemetry when connections resume, and keep wellbeing alerts active during remote missions."
  }
];

type PageProps = {
  params: { lang: string };
};

export default async function HeardIslandAndMcDonaldIslandsPaymentGatewaysPage({ params }: PageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale as SupportedLocale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale as SupportedLocale);
  const pricingHref = buildLocalizedPath("/pricing", locale as SupportedLocale);

  return (
    <div className="space-y-20 pb-24 pt-24 md:space-y-24 md:pt-28">
      <section className="container">
        <div className="rounded-[40px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-sky-50 px-10 py-14 shadow-sm dark:border-slate-800 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:px-14">
          <div className="space-y-8">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Heard Island & McDonald Islands • Payment gateways
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Ways to accept payments from MLM Software in Heard Island and McDonald Islands (HM)
              </h1>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Cloud MLM Software has already built great systems for the greatest companies. We adapt those frameworks to remote Southern Ocean missions so settlement, compliance, and wellbeing remain disciplined regardless of distance.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                The availability of the payment gateways supported for Heard Island and McDonald Islands includes PayPal, Amazon Pay, Stripe, Adyen, Braintree, Authorize.Net, 2Checkout, PayPal Commerce Platform, and Australian banking partners.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  <Link href={contactHref}>
                    Plan your remote rollout
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
            <div className="grid gap-4 md:grid-cols-3">
              {METRICS.map((metric) => (
                <article
                  key={metric.title}
                  className="rounded-3xl border border-slate-200/70 bg-white/95 p-6 shadow-sm backdrop-blur-sm dark:border-slate-700/70 dark:bg-slate-900/80"
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
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)]">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Expedition focus
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Payment strategy for remote science and logistics programmes
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                We co-design journeys with finance, compliance, mission leaders, and procurement teams so technology mirrors the realities of remote deployments, grant funding, and partner engagements.
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
            Payment capabilities connected for Heard Island missions
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Banks, PSPs, and wallets feed the same telemetry so PayPal, Amazon Pay, Stripe, Adyen, Braintree, Authorize.Net, 2Checkout, and mission wallets operate with one compliance posture.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {CAPABILITIES.map((capability) => (
            <article
              key={capability.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="flex items-center gap-3">
                <capability.icon className="h-7 w-7 text-sky-600 dark:text-sky-300" aria-hidden />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{capability.title}</h3>
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
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
              Delivery cadence
            </span>
            <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Implementation roadmap for remote mission leadership
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {PHASES.map((phase) => (
                <article
                  key={phase.label}
                  className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50/70 p-6 dark:border-slate-700 dark:bg-slate-900/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                      {phase.label}
                    </span>
                    <phase.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{phase.headline}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{phase.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {phase.artefacts.map((artefact) => (
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
            Confidence signals for mission directors and boards
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Finance, compliance, expedition leads, and wellbeing teams share the same live telemetry, ensuring fast decisions.
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
                Guidance for mission directors, finance leaders, and logistics partners preparing payments for Heard Island and McDonald Islands operations.
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
              Deliver remote-ready MLM payment excellence
            </h2>
            <p className="text-base text-white/90">
              Cloud MLM Software unites banks, PSPs, wallets, procurement credits, and wellbeing analytics so every mission partner feels supported from the Southern Ocean to decision rooms back home.
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
