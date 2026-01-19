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
  Layers,
  Sparkles,
  Target
} from "lucide-react";
import {
  BriefcaseMetal,
  CurrencyCircleDollar,
  GlobeHemisphereNorth,
  MapTrifold,
  PlugsConnected,
  ShieldCheck,
  UsersThree,
  Vault
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Guernsey MLM Payment Gateways | Cloud MLM Software",
  description:
    "Ways to accept payments from MLM Software in Guernsey (GG). Cloud MLM Software harmonises island financial governance, UK/EU PSPs, and distributor experience with resilient orchestration.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/guernsey"
  },
  openGraph: {
    title: "Guernsey MLM Payment Gateways",
    description:
      "Modernise settlement, compliance, and field operations across Guernsey’s financial ecosystem with Cloud MLM Software.",
    url: "/mlm-software-payment-gateways/guernsey"
  }
};

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  name: string;
  value: string;
  description: string;
  icon: IconType;
};

type Opportunity = {
  title: string;
  copy: string;
  icon: IconType;
};

type Layer = {
  caption: string;
  description: string;
  providers: string[];
  icon: IconType;
};

type Programme = {
  phase: string;
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

const HERO_METRICS: HeroMetric[] = [
  {
    name: "Settlement tempo",
    value: "T+1 with islands banks",
    description:
      "Automated reconciliation and FX dashboards for Butterfield Bank, HSBC Channel Islands, NatWest International, and Lloyds Bank.",
    icon: BarChart3
  },
  {
    name: "Connector coverage",
    value: "12+ PSPs",
    description:
      "Stripe, PayPal, Amazon Pay, Adyen, Braintree, Authorize.Net, Checkout.com, Worldpay, 2Checkout, PayU, and First Atlantic Commerce governed as one.",
    icon: Layers
  },
  {
    name: "Compliance toolkit",
    value: "21 artefacts",
    description:
      "GFSC AML/CFT, UK FCA, EU AMLD directives, PCI-DSS, and GDPR documentation packaged for board, regulator, and partner reviews.",
    icon: ShieldCheck
  }
];

const OPPORTUNITIES: Opportunity[] = [
  {
    title: "Financial and professional services",
    copy:
      "We support advisory, fund administration, and fiduciary groups with secure onboarding, recurring billing, and cross-border payouts.",
    icon: BriefcaseMetal
  },
  {
    title: "Luxury retail and lifestyle",
    copy:
      "Guernsey’s boutiques, wellness collectives, and lifestyle brands rely on premium checkout, loyalty orchestration, and multi-currency insights.",
    icon: Target
  },
  {
    title: "International diaspora",
    copy:
      "Residents and diaspora networks expect card, wallet, and bank experiences consistent with the UK, France, and global hubs.",
    icon: Globe2
  }
];

const LAYERS: Layer[] = [
  {
    caption: "Banking & treasury",
    description:
      "Consolidate Channel Islands banking partners with liquidity dashboards, approval workflows, and audit-ready reporting.",
    providers: ["Butterfield Bank", "HSBC Channel Islands", "NatWest International", "Lloyds Bank International"],
    icon: Vault
  },
  {
    caption: "Card & PSP orchestration",
    description:
      "Stripe, PayPal, Amazon Pay, Adyen, Braintree, Authorize.Net, Worldpay, Checkout.com, and 2Checkout inherit unified credential vaulting and chargeback response.",
    providers: ["Stripe", "Adyen", "PayPal", "Worldpay", "Checkout.com", "2Checkout"],
    icon: PlugsConnected
  },
  {
    caption: "Wallets & alternative rails",
    description:
      "Apple Pay, Google Pay, Revolut, Wise, PayU, and First Atlantic Commerce integrate with policy-driven onboarding and telemetry.",
    providers: ["Apple Pay", "Google Pay", "Revolut", "Wise", "First Atlantic Commerce"],
    icon: CurrencyCircleDollar
  }
];

const PROGRAMME: Programme[] = [
  {
    phase: "Phase 01",
    headline: "Strategy, compliance, and stakeholder alignment",
    detail:
      "Translate GFSC, UK FCA, EU AMLD, and data residency commitments into a pragmatic operating charter for finance, legal, and distributor councils.",
    artefacts: [
      "Compliance blueprint covering AML/CFT, GDPR, PCI-DSS, and sanction screening.",
      "Stakeholder RACI for Guernsey HQ, UK leadership, and EU distributor ambassadors.",
      "Solution architecture depicting data flows, monitoring, and escalation paths."
    ],
    icon: Landmark
  },
  {
    phase: "Phase 02",
    headline: "Connector implementation & telemetry deployment",
    detail:
      "Integrate bank, PSP, and wallet partners with credential vaults, redundancy, and chargeback automation tuned for high-net-worth clientele.",
    artefacts: [
      "Connector runbooks with heartbeat thresholds, alert routing, and failover guidance.",
      "Unified dispute centre across card networks, wallets, and bank transfers.",
      "Performance tests for seasonal tourism, retail launches, and marketing pushes."
    ],
    icon: GlobeHemisphereNorth
  },
  {
    phase: "Phase 03",
    headline: "Pilot, optimise, and scale",
    detail:
      "Pilot with wealth management, luxury retail, and lifestyle cohorts to validate experience design, transparency, and wellbeing analytics.",
    artefacts: [
      "Executive dashboards on settlement tempo, exception rate, and CX signals.",
      "Distributor enablement kit with multilingual communications and wellbeing alerts.",
      "Optimisation roadmap prioritised by revenue, risk, and experience impact."
    ],
    icon: Sparkles
  }
];

const CONFIDENCE_POINTS: Confidence[] = [
  {
    title: "Treasury precision",
    copy:
      "Liquidity, FX, and receivables dashboards keep CFOs and trustees aligned with Channel Islands governance and global partners.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Distributor confidence loops",
    copy:
      "High-touch communications, recognition cadences, and wellbeing analytics make trusted advisors out of every Guernsey leader.",
    icon: UsersThree
  },
  {
    title: "Board-ready narratives",
    copy:
      "Dashboards and reports translate data into decisions for boards, investors, and regulators simultaneously.",
    icon: MapTrifold
  }
];

const FAQS: FAQ[] = [
  {
    question: "Which payment partners do you integrate in Guernsey?",
    answer:
      "We orchestrate Butterfield Bank, HSBC Channel Islands, NatWest International, Lloyds Bank International, Stripe, PayPal, Amazon Pay, Adyen, Braintree, Authorize.Net, Worldpay, Checkout.com, 2Checkout, PayU, First Atlantic Commerce, Apple Pay, Google Pay, Revolut, and Wise."
  },
  {
    question: "How do you keep the programme compliant with GFSC expectations?",
    answer:
      "We deliver artefacts covering GFSC AML/CFT, UK FCA, EU AMLD, PCI-DSS, GDPR, sanction screening, and data residency. Documentation is packaged for regulator submissions and board packs."
  },
  {
    question: "Can we match UK and EU customer experience standards?",
    answer:
      "Yes. Cloud MLM Software coordinates pricing, support, and fulfilment policies so Guernsey, UK, EU, and global distributors experience identical service levels and transparency."
  }
];

type PageProps = {
  params: { lang: string };
};

export default function GuernseyPaymentGatewaysPage({ params }: PageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale as SupportedLocale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale as SupportedLocale);
  const pricingHref = buildLocalizedPath("/pricing", locale as SupportedLocale);

  return (
    <div className="space-y-20 pb-24 pt-24 md:space-y-24 md:pt-28">
      <section className="container">
        <div className="relative overflow-hidden rounded-[44px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-indigo-50 px-10 py-14 shadow-sm dark:border-slate-800 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:px-14">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.28),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(165,180,252,0.24),transparent_55%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.14),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.14),transparent_50%)]"
            aria-hidden
          />
          <div className="space-y-8">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Guernsey • Payment gateways
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Ways to accept payments from MLM Software in Guernsey (GG)
              </h1>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Cloud MLM Software has already built great systems for the greatest companies. We extend those proven playbooks to Guernsey so every settlement—from high-value advisory packages to lifestyle commerce—remains transparent, compliant, and inspiring.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                The availability of the payment gateways supported for Guernsey includes PayPal, Amazon Pay, Stripe, Adyen, Braintree, Authorize.Net, Worldpay, Checkout.com, PayU, 2Checkout, First Atlantic Commerce, and local banking partners across the Channel Islands.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  <Link href={contactHref}>
                    Design your Guernsey rollout
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
              {HERO_METRICS.map((metric) => (
                <article
                  key={metric.name}
                  className="rounded-3xl border border-slate-200/70 bg-white/95 p-6 shadow-sm backdrop-blur-sm dark:border-slate-700/70 dark:bg-slate-900/80"
                >
                  <metric.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" aria-hidden />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                    {metric.name}
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
                Market focus
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Guernsey’s payment heartbeat across sectors
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                We partner with finance, compliance, marketing, and distributor councils to map customer journeys across wealth, lifestyle, and diaspora networks before we implement a single connector.
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
            Payment stack connected for Guernsey
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Banks, PSPs, and wallets feed the same telemetry so PayPal, Amazon Pay, Stripe, Adyen, Braintree, Authorize.Net, Worldpay, Checkout.com, 2Checkout, and PayU deliver consistent experiences with audit-ready evidence.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {LAYERS.map((layer) => (
            <article
              key={layer.caption}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="flex items-center gap-3">
                <layer.icon className="h-7 w-7 text-sky-600 dark:text-sky-300" aria-hidden />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{layer.caption}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{layer.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {layer.providers.map((provider) => (
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
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
              Programme cadence
            </span>
            <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Implementation roadmap for Guernsey’s leadership
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {PROGRAMME.map((stage) => (
                <article
                  key={stage.phase}
                  className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50/70 p-6 dark:border-slate-700 dark:bg-slate-900/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                      {stage.phase}
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
            Confidence signals for Guernsey executives & councils
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Finance, compliance, distributor success, and wellbeing teams monitor the same live telemetry and policy trail.
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
                Guidance for Guernsey-based finance, compliance, and distributor teams planning their transformation journey.
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
              Deliver Guernsey-ready MLM payment excellence
            </h2>
            <p className="text-base text-white/90">
              Cloud MLM Software unifies banks, PSPs, wallets, and distributor enablement under one disciplined operating model that inspires confidence at every board meeting and field gathering.
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
