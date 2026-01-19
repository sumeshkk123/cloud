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
  Globe2,
  Map,
  Radar,
  Sparkles,
  LineChart,
  Layers,
  ShieldCheck
} from "lucide-react";
import {
  Bank,
  CurrencyCircleDollar,
  Factory,
  GlobeHemisphereWest,
  HandWaving,
  MapTrifold,
  PlugsConnected,
  SealCheck,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Guadeloupe MLM Payment Gateways | Cloud MLM Software",
  description:
    "Ways to accept payments from MLM Software in Guadeloupe (GP). Cloud MLM Software choreographs ECCU clearing, tourism demand, and diaspora commerce with resilient payment governance.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/guadeloupe"
  },
  openGraph: {
    title: "Guadeloupe MLM Payment Gateways",
    description:
      "Unify banks, PSPs, and distributor experience across Basse-Terre, Grande-Terre, and diaspora channels with Cloud MLM Software.",
    url: "/mlm-software-payment-gateways/guadeloupe"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  title: string;
  value: string;
  description: string;
  icon: IconType;
};

type Opportunity = {
  name: string;
  summary: string;
  icon: IconType;
};

type GatewayPillar = {
  heading: string;
  body: string;
  sources: string[];
  icon: IconType;
};

type Step = {
  phase: string;
  headline: string;
  detail: string;
  artefacts: string[];
  icon: IconType;
};

type Proof = {
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
    title: "Settlement tempo",
    value: "T+1.2 days",
    description:
      "Republic Bank Guadeloupe, Banque des Îles de Guadeloupe, and Caisse d’Épargne ledgers sync nightly with ECCU reporting packs.",
    icon: LineChart
  },
  {
    title: "Gateway ecosystem",
    value: "10 providers",
    description:
      "Stripe, PayPal, Amazon Pay, Adyen, Braintree, First Atlantic Commerce, 2Checkout, PayU, PayPal Commerce Platform, and WiPay Caribbean orchestrated under one policy.",
    icon: Layers
  },
  {
    title: "Compliance readiness",
    value: "18 artefacts",
    description:
      "AML/CFT controls aligned to TRACFIN and ECCB guidelines, plus VAT, GDPR, and OFAC screening documentation.",
    icon: ShieldCheck
  }
];

const OPPORTUNITIES: Opportunity[] = [
  {
    name: "Tourism and hospitality flow",
    summary:
      "Cruise excursions, villa rentals, and wellness retreats need deposit orchestration, refunds, and loyalty payouts that match both Euro and EC dollar corridors.",
    icon: Map
  },
  {
    name: "Agrifood and cosmetics exports",
    summary:
      "Rum, cacao, and beauty collectives sell into France, Canada, and the US. They require FX clarity, subscription billing, and distributor transparency.",
    icon: Factory
  },
  {
    name: "Diaspora services",
    summary:
      "Professional services and digital membership platforms rely on PayPal, Amazon Pay, and card-on-file experiences that respect GDPR and ECCU AML expectations.",
    icon: Globe2
  }
];

const PILLARS: GatewayPillar[] = [
  {
    heading: "Domestic banking rails",
    body:
      "Keep cashflow resilient by integrating Republic Bank Guadeloupe, Banque des Îles de Guadeloupe, Crédit Agricole, and Banque Postale for local settlement.",
    sources: ["Republic Bank Guadeloupe", "Banque des Îles de Guadeloupe", "Crédit Agricole Guadeloupe"],
    icon: Bank
  },
  {
    heading: "Global PSP orchestration",
    body:
      "Stripe, Braintree, Adyen, Authorize.Net, PayPal, and First Atlantic Commerce inherit unified credential vaulting, dispute workflows, and observability.",
    sources: ["Stripe", "Adyen", "Braintree", "Authorize.Net", "First Atlantic Commerce"],
    icon: PlugsConnected
  },
  {
    heading: "Wallets & alternative payouts",
    body:
      "Amazon Pay, 2Checkout, PayU, WiPay Caribbean, and mobile wallet pilots cover diaspora expectations without breaking compliance posture.",
    sources: ["Amazon Pay", "2Checkout", "PayU", "WiPay Caribbean"],
    icon: CurrencyCircleDollar
  }
];

const STEPS: Step[] = [
  {
    phase: "Sprint 01",
    headline: "Blueprint & policy alignment",
    detail:
      "We translate ECCU, TRACFIN, and CNIL obligations into a pragmatic operating charter across finance, legal, and distributor councils.",
    artefacts: [
      "Compliance blueprint with AML/CFT, VAT, and data residency requirements.",
      "Stakeholder RACI covering Guadeloupe, Paris HQ, and diaspora ambassadors.",
      "Solution diagrams mapping payment flows, monitoring, and alert routing."
    ],
    icon: MapTrifold
  },
  {
    phase: "Sprint 02",
    headline: "Connector implementation & telemetry",
    detail:
      "Integrate banks, PSPs, and wallets with credential vaulting, redundancy, and chargeback automation built in from day one.",
    artefacts: [
      "Connector playbooks with heartbeat thresholds and incident communication scripts.",
      "Unified dispute centre across card networks, PayPal, and DCash pilots.",
      "Performance tests simulating cruise season, carnival, and ecommerce peaks."
    ],
    icon: Radar
  },
  {
    phase: "Sprint 03",
    headline: "Pilot, optimise, and scale",
    detail:
      "Pilot with hospitality, wellness, and diaspora cohorts to validate transparency, FX clarity, and wellbeing analytics before wider launch.",
    artefacts: [
      "Executive dashboards on settlement pace, exception rate, and FX exposure.",
      "Distributor enablement kit with knowledge base, wellbeing alerts, and recognition cadences.",
      "Optimisation backlog prioritised by revenue, risk, and member experience."
    ],
    icon: Sparkles
  }
];

const PROOFS: Proof[] = [
  {
    title: "Board-grade transparency",
    copy:
      "Audit trails, reconciliation packs, and narrative dashboards keep Paris HQ, local directors, and investors aligned on every Euro and EC dollar movement.",
    icon: SealCheck
  },
  {
    title: "Distributor confidence",
    copy:
      "Self-service insights, gamified recognition, and wellbeing monitors make every communicator confident their commissions are accurate and on time.",
    icon: UsersThree
  },
  {
    title: "Cross-border parity",
    copy:
      "Guadeloupe, Martinique, France, and diaspora corridors share the same SLA, compliance coverage, and customer support escalation playbooks.",
    icon: GlobeHemisphereWest
  }
];

const FAQS: FAQ[] = [
  {
    question: "Which payment partners do you integrate in Guadeloupe?",
    answer:
      "We orchestrate Republic Bank Guadeloupe, Banque des Îles de Guadeloupe, Crédit Agricole, Stripe, PayPal, Adyen, Authorize.Net, Braintree, First Atlantic Commerce, 2Checkout, PayU, Amazon Pay, and WiPay Caribbean. Every connector inherits unified security, logging, and approval policies."
  },
  {
    question: "How do you align with ECCU and French regulations?",
    answer:
      "We codify AML/CFT controls for the Eastern Caribbean Central Bank, TRACFIN suspicious activity reporting, GDPR, and OFAC screening. Dashboards and documentation make it easy for compliance teams to pass audits."
  },
  {
    question: "Can we pilot new rails like DCash?",
    answer:
      "Yes. We run controlled pilots with DCash or regional wallets while maintaining observability, rollback paths, and regulator-ready artefacts so innovation never compromises governance."
  }
];

type PageProps = {
  params: { lang: string };
};

export default function GuadeloupePaymentGatewaysPage({ params }: PageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale as SupportedLocale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale as SupportedLocale);
  const pricingHref = buildLocalizedPath("/pricing", locale as SupportedLocale);

  return (
    <div className="space-y-20 pb-24 pt-24 md:space-y-24 md:pt-28">
      <section className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:items-start">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
              Guadeloupe • Payment gateways
            </span>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Ways to accept payments from MLM Software in Guadeloupe (GP)
            </h1>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Cloud MLM Software has already built great systems for the greatest companies. We adapt those proven frameworks to Guadeloupe so every payment—from local EC dollar purchases to Euro-based subscriptions—stays transparent, fast, and compliant.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              The availability of the payment gateways supported for Guadeloupe is summarised below. We combine domestic banks, global PSPs such as PayPal, Stripe, Adyen, Braintree, Authorize.Net, Amazon Pay, PayU, and 2Checkout with regional innovators like First Atlantic Commerce and WiPay Caribbean.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                <Link href={contactHref}>
                  Launch in Guadeloupe
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
          <div className="relative isolate overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-7 shadow-sm dark:border-slate-700 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <div
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.3),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(94,234,212,0.25),transparent_55%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.12),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(94,234,212,0.12),transparent_50%)]"
              aria-hidden
            />
            <div className="grid gap-4">
              {METRICS.map((metric) => (
                <article
                  key={metric.title}
                  className="rounded-2xl border border-slate-200/70 bg-white/90 p-5 shadow-sm backdrop-blur-sm dark:border-slate-700/70 dark:bg-slate-900/80"
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
        </div>
      </section>

      <section className="container">
        <div className="rounded-[36px] border border-slate-200 bg-slate-50/70 p-10 shadow-inner dark:border-slate-800 dark:bg-slate-900/50 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Market lenses
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Guadeloupe’s payment landscape for forward-looking MLM brands
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Tourism, agrifood, digital wellness, and diaspora communities create multi-currency flows. We help teams orchestrate these journeys while safeguarding compliance and wellbeing.
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
            Gateways, banks, and wallets connected for Guadeloupe
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Every integration inherits one source of truth. Reporting spans PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, 2Checkout, First Atlantic Commerce, and regional banks without manual reconciliation.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.heading}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="flex items-center gap-3">
                <pillar.icon className="h-7 w-7 text-sky-600 dark:text-sky-300" aria-hidden />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{pillar.heading}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{pillar.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {pillar.sources.map((source) => (
                  <span
                    key={source}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  >
                    {source}
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
                Delivery approach
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                How we take Guadeloupe payment operations live
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Each sprint fuses governance, technology, and human enablement so finance, compliance, and distributor leadership share one modern narrative.
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
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{step.detail}</p>
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
            Proof points for Guadeloupe’s executive leadership
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Finance, compliance, support, and distributor councils experience one command centre—from reporting to incident response.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROOFS.map((proof) => (
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
                Answers for finance directors, compliance leaders, and distributor councils preparing their Guadeloupe launch.
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
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.25),transparent_55%)]"
            aria-hidden
          />
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Deliver Guadeloupe-ready MLM payments with confidence
            </h2>
            <p className="text-base text-white/90">
              Unite banks, PSPs, and distributor enablement into one disciplined engine. We make sure every stakeholder—from Basse-Terre to Paris—is informed, compliant, and inspired.
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
