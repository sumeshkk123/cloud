import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { Anchor, ArrowUpRight, Globe2, Sparkles } from "lucide-react";
import {
  CurrencyCircleDollar,
  Circuitry,
  ShieldCheck,
  Handshake,
  ChatsCircle,
  GlobeHemisphereWest,
  Pulse,
  MapTrifold,
  PresentationChart,
  SealCheck,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Grenada MLM Payment Gateways | Cloud MLM Software",
  description:
    "Ways to accept payments from MLM Software in Grenada (GD). Cloud MLM Software aligns Eastern Caribbean clearing, tourism inflows, and diaspora commerce with resilient settlement controls.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/grenada"
  },
  openGraph: {
    title: "Grenada MLM Payment Gateways",
    description:
      "Coordinate ECCB-compliant settlements, PSP orchestration, and distributor confidence for Grenada’s MLM leaders.",
    url: "/mlm-software-payment-gateways/grenada"
  }
};

type IconType = ComponentType<{ className?: string }>;

type HeroCard = {
  label: string;
  metric: string;
  description: string;
  icon: IconType;
};

type Opportunity = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayCluster = {
  title: string;
  providers: string[];
  narrative: string;
  icon: IconType;
};

type RolloutStep = {
  phase: string;
  headline: string;
  description: string;
  deliverables: string[];
  icon: IconType;
};

type TrustProof = {
  title: string;
  copy: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_CARDS: HeroCard[] = [
  {
    label: "Settlement clarity",
    metric: "T+1 across ECCU",
    description:
      "Automated reconciliation for Republic Bank Grenada, Grenada Co-operative Bank, and CIBC FirstCaribbean ledgers with FX exposure dashboards.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Gateway coverage",
    metric: "8+ PSPs",
    description:
      "Stripe, Braintree, Authorize.Net, Adyen, 2Checkout, PayPal, Amazon Pay, and First Atlantic Commerce aligned behind shared controls.",
    icon: Circuitry
  },
  {
    label: "Compliance evidence",
    metric: "15 artefacts",
    description:
      "AML/CFT registers, FIU filings, DCash readiness, and tax documentation packaged for Eastern Caribbean Central Bank reviews.",
    icon: ShieldCheck
  }
];

const MARKET_OPPORTUNITIES: Opportunity[] = [
  {
    title: "Blue economy & tourism loops",
    description:
      "Cruise excursions, marine charters, and boutique resorts rely on deposits, refunds, and loyalty payouts that stay coordinated across islands.",
    icon: Anchor
  },
  {
    title: "Diaspora-led ecommerce",
    description:
      "Entrepreneurs selling to North America and the UK need multi-currency PSPs, transparent FX fees, and fast commission settlements.",
    icon: Globe2
  },
  {
    title: "Wellness & knowledge services",
    description:
      "Coaching, wellness, and professional networks in the tri-island state require subscription billing, digital onboarding, and policy governance.",
    icon: Sparkles
  }
];

const GATEWAY_CLUSTERS: GatewayCluster[] = [
  {
    title: "Caribbean merchant services",
    providers: ["Republic Bank Grenada", "Grenada Co-operative Bank", "First Atlantic Commerce"],
    narrative:
      "Keep settlements domestic to safeguard distributor liquidity while syncing with ECCB reserve requirements and local taxation windows.",
    icon: Handshake
  },
  {
    title: "Global PSP & card networks",
    providers: ["Stripe", "Braintree", "Authorize.Net", "Adyen"],
    narrative:
      "Route card transactions through resilient PSPs with unified risk scoring, 3DS optimisation, and dispute evidence automation.",
    icon: Circuitry
  },
  {
    title: "Digital wallets & alternative payouts",
    providers: ["PayPal", "Amazon Pay", "2Checkout"],
    narrative:
      "Offer trusted wallets for the Grenadian diaspora, capturing rapid conversions while maintaining KYC and chargeback alignment.",
    icon: ChatsCircle
  },
  {
    title: "Emerging rails & FX harmonisation",
    providers: ["DCash", "WiPay Caribbean", "PayU cross-border"],
    narrative:
      "Experiment with ECCB’s DCash, regional wallets, and aggregator corridors without losing auditability or treasury control.",
    icon: GlobeHemisphereWest
  }
];

const ROLLOUT_STEPS: RolloutStep[] = [
  {
    phase: "Phase 01 — Strategy & compliance charter",
    headline: "Align ECCB, FIU, and board expectations from day one",
    description:
      "Discovery workshops translate Grenada’s regulatory landscape into clear operating guardrails, data retention, and escalation paths.",
    deliverables: [
      "Compliance control matrix covering AML/CFT, tax, and data sovereignty obligations.",
      "Stakeholder RACI spanning finance, legal, distributor councils, and banking partners.",
      "Solution blueprint showing data flows, observability, and redundancy posture."
    ],
    icon: MapTrifold
  },
  {
    phase: "Phase 02 — Integration & telemetry build-out",
    headline: "Connect gateways with observability and resilience baked in",
    description:
      "Implement connectors, credential vaulting, and health monitoring so PSPs, banks, and wallets behave like one orchestrated fabric.",
    deliverables: [
      "Connector runbooks with heartbeat thresholds, failover logic, and alert routing.",
      "Unified risk and chargeback workflow for cards, wallets, and DCash pilots.",
      "Performance tests for seasonal tourism peaks, diaspora campaigns, and flash sales."
    ],
    icon: Pulse
  },
  {
    phase: "Phase 03 — Pilot, iterate, and scale",
    headline: "Validate confidence with cross-island and diaspora cohorts",
    description:
      "Pilot programmes gather qualitative insights and quantitative telemetry before scaling settlements across every leadership tier.",
    deliverables: [
      "Executive dashboards tracking settlement tempo, dispute velocity, and FX exposure.",
      "Playbooks for distributor onboarding, recognition, and wellbeing analytics.",
      "Backlog of optimisation initiatives prioritised by revenue, risk, and experience impact."
    ],
    icon: PresentationChart
  }
];

const TRUST_PROOFS: TrustProof[] = [
  {
    title: "Board-ready transparency",
    copy:
      "Audit trails, reconciliation packs, and leadership narratives translate settlement data into the language of directors and investors.",
    icon: SealCheck
  },
  {
    title: "Distributor confidence loops",
    copy:
      "Self-service insights, wellbeing alerts, and recognition cadences keep field leaders informed before issues surface.",
    icon: UsersThree
  },
  {
    title: "Cross-border parity",
    copy:
      "North American and European corridors experience the same SLA, pricing clarity, and compliance assurance as domestic teams.",
    icon: CurrencyCircleDollar
  }
];

const FAQS: FAQ[] = [
  {
    question: "Which payment partners do you integrate in Grenada?",
    answer:
      "We orchestrate Republic Bank Grenada, Grenada Co-operative Bank, First Atlantic Commerce, Stripe, Braintree, Authorize.Net, Adyen, 2Checkout, PayPal, Amazon Pay, PayU, WiPay Caribbean, and ECCB’s DCash pilots. Every connector inherits shared security, logging, and approval policies."
  },
  {
    question: "How do you ensure ECCB and FIU compliance?",
    answer:
      "The programme includes AML/CFT registers, sanction screening, tax remittance schedules, and DCash readiness documentation. Governance reviews are packaged for the Eastern Caribbean Central Bank, the Grenada Financial Intelligence Unit, and banking partners so audits remain straightforward."
  },
  {
    question: "Can we test the experience with diaspora leaders before launch?",
    answer:
      "Yes. Pilot cohorts across the tri-island state and diaspora hubs validate onboarding, payouts, and communications. Feedback loops flow directly into product, support, and finance teams with telemetry to prove readiness for wider rollout."
  }
];

type PageProps = {
  params: { lang: string };
};

export default function GrenadaPaymentGatewaysPage({ params }: PageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale as SupportedLocale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale as SupportedLocale);
  const pricingHref = buildLocalizedPath("/pricing", locale as SupportedLocale);

  return (
    <div className="space-y-20 pb-24 pt-24 md:space-y-24 md:pt-28">
      <section className="container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)] lg:items-start">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
              Grenada • Payment gateways
            </span>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Ways to accept payments from MLM Software in Grenada (GD)
            </h1>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Cloud MLM Software has already built great systems for the greatest companies. We adapt those disciplined patterns to Grenada so settlements remain clear across Republic Bank, Grenada Co-operative Bank, and FirstCaribbean corridors.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              The availability of the payment gateways supported for Grenada (GD) is summarised below—from Stripe, PayPal, Authorize.Net, Amazon Pay, Adyen, Braintree, PayU, 2Checkout to regional partners like First Atlantic Commerce and WiPay Caribbean.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                <Link href={contactHref}>
                  Design your Grenada rollout
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900/50"
              >
                <Link href={pricingHref}>
                  See pricing strategies
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
                  Explore the guided demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative isolate overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-6 shadow-sm dark:border-slate-700 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <div
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.28),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.23),transparent_55%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.12),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.12),transparent_50%)]"
              aria-hidden
            />
            <div className="grid gap-4">
              {HERO_CARDS.map((card) => (
                <article
                  key={card.label}
                  className="rounded-2xl border border-slate-200/70 bg-white/90 p-5 shadow-sm backdrop-blur-sm dark:border-slate-700/70 dark:bg-slate-900/80"
                >
                  <card.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                    {card.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{card.metric}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-[36px] border border-slate-200 bg-slate-50/60 p-10 shadow-inner dark:border-slate-800 dark:bg-slate-900/40 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-start">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Market context
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Grenada’s payment moment for modern MLM leaders
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Tourism, agriculture, and services companies in the tri-island state demand payouts that respect ECCB policy, data governance, and distributor wellbeing. Diaspora communities extend every campaign beyond the Eastern Caribbean.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                We map customer journeys, payment friction, and leadership expectations before configuring the stack. The result is a payment fabric that is fast for members and transparent for directors.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {MARKET_OPPORTUNITIES.map((opportunity) => (
                <article
                  key={opportunity.title}
                  className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70"
                >
                  <opportunity.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{opportunity.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{opportunity.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Payment gateways, banks, and rails we activate for Grenada
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            We combine domestic merchant services with global PSPs such as PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout. Each integration inherits one compliance posture, unified telemetry, and shared incident response.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_CLUSTERS.map((cluster) => (
            <article
              key={cluster.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="flex items-center gap-3">
                <cluster.icon className="h-7 w-7 text-sky-600 dark:text-sky-300" aria-hidden />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{cluster.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{cluster.narrative}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {cluster.providers.map((provider) => (
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
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)]">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Delivery path
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Implementation path to production confidence
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Every sprint delivers artefacts that finance, legal, and distributor leaders can audit. The aim is a single payment narrative that holds during board reviews and field conversations alike.
              </p>
            </div>
            <div className="space-y-6">
              {ROLLOUT_STEPS.map((step) => (
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
            Proof points for Grenada’s executive leadership
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Governance, treasury, customer care, and distributor operations see the same source of truth. Decisions become faster because every metric connects to documented action.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_PROOFS.map((proof) => (
            <article
              key={proof.title}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
            >
              <proof.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{proof.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{proof.copy}</p>
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
                Guidance for finance directors, compliance leaders, and distributor councils preparing to launch or expand in Grenada.
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
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.22),transparent_55%)]"
            aria-hidden
          />
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Deliver a Grenada-ready MLM payment experience
            </h2>
            <p className="text-base text-white/90">
              Unite banks, PSPs, wallets, and distributor enablement under one disciplined operating model. Cloud MLM Software keeps every stakeholder confident before, during, and after launch.
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
