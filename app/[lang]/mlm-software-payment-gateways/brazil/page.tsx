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
  Building,
  CreditCard,
  LineChart,
  Landmark,
  ShieldAlert,
  Sparkles,
  Users
} from "lucide-react";
import {
  Bank,
  ChartPieSlice,
  Circuitry,
  CurrencyCircleDollar,
  HandCoins,
  SealCheck,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Brazil MLM Payment Gateways | Cloud MLM Software",
  description:
    "Ways to accept payments from MLM Software in Brazil (BR). Cloud MLM Software aligns PIX, boleto, and card acquiring with compliant, insight-driven operations.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/brazil"
  },
  openGraph: {
    title: "Brazil MLM Payment Gateways",
    description:
      "See how Cloud MLM Software orchestrates Brazilian banks, PSPs, and distributor enablement to deliver reliable MLM payouts.",
    url: "/mlm-software-payment-gateways/brazil"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  label: string;
  metric: string;
  description: string;
  icon: IconType;
};

type MarketTheme = {
  title: string;
  copy: string;
  icon: IconType;
};

type Stack = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Stage = {
  phase: string;
  title: string;
  detail: string;
  artefacts: string[];
  icon: IconType;
};

type Assurance = {
  title: string;
  copy: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_HIGHLIGHTS: Highlight[] = [
  {
    label: "PIX settlement speed",
    metric: "T+0.3 average",
    description:
      "PIX instant payments settle in minutes with automated reconciliation and auditing for Banco Central do Brasil.",
    icon: Sparkles
  },
  {
    label: "Gateway ecosystem",
    metric: "14 integrations",
    description:
      "Stone, PagSeguro, Cielo, Rede, Mercado Pago, Stripe, and PayPal unify with domestic bank clearing.",
    icon: CreditCard
  },
  {
    label: "Compliance artefacts",
    metric: "45+ templates",
    description:
      "AML, LGPD, and fiscal reporting packs accelerate approvals from legal, accounting, and regulator stakeholders.",
    icon: Landmark
  }
];

const MARKET_THEMES: MarketTheme[] = [
  {
    title: "PIX-first consumer expectations",
    copy:
      "Distributors and retail shoppers expect real-time PIX confirmations. We orchestrate QR journeys, dynamic PSP routing, and automated ledger updates.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Boleto lifecycle governance",
    copy:
      "Boleto issuance, extensions, and cancellations tie directly into Cloud MLM Software so finance and operations manage risk proactively.",
    icon: ChartPieSlice
  },
  {
    title: "Tax transparency",
    copy:
      "Brazil’s multi-layer fiscal requirements—ICMS, ISS, PIS/COFINS—are tracked against every payout with audit trails ready for scrutiny.",
    icon: ShieldAlert
  }
];

const PAYMENT_STACKS: Stack[] = [
  {
    name: "Domestic banking core",
    summary: "Automate clearing with Brazil’s leading banks and cooperatives.",
    bullets: [
      "Integrations for Itaú, Bradesco, Banco do Brasil, Santander, Sicredi, and Sicoob.",
      "Automated CNAB file generation, ingestion, and reconciliation for overnight batches.",
      "Multi-entity governance to separate PJ, MEI, and international subsidiaries."
    ],
    icon: Bank
  },
  {
    name: "PIX, boleto, and card mesh",
    summary: "Deliver the payment mix Brazil trusts across online and in-person experiences.",
    bullets: [
      "Stone, PagSeguro, Cielo, Rede, Mercado Pago, Stripe, and PayPal connectors managed in one risk engine.",
      "Dynamic routing with PIX vs. card optimisation to protect contribution margins.",
      "Boleto lifecycle automation with status webhooks, reminders, and cancellation controls."
    ],
    icon: Circuitry
  },
  {
    name: "Distributor intelligence studio",
    summary: "Fuel high-performing leadership teams with contextual insights.",
    bullets: [
      "Portals and reporting in Portuguese, Spanish, and English with governed permissions.",
      "Recognition and incentive data tied to payout accuracy, inventory, and compliance posture.",
      "Ticketing and auto-responder modules orchestrated for proactive support."
    ],
    icon: HandCoins
  }
];

const DELIVERY_STAGES: Stage[] = [
  {
    phase: "Sprint 1",
    title: "Blueprint & compliance choreography",
    detail:
      "Run discovery with finance, legal, and operations to map PIX, boleto, card, and bank requirements.",
    artefacts: [
      "Regulatory heat map covering Banco Central, Receita Federal, and LGPD obligations.",
      "Current state vs. future state architecture diagrams with approved data flows.",
      "Stakeholder RACI for approvals, escalations, and communication cadences."
    ],
    icon: LineChart
  },
  {
    phase: "Sprint 2",
    title: "Integration factory",
    detail:
      "Deploy secured connectors, observability, and data pipelines linking banks, PSPs, ERP, and Cloud MLM Software modules.",
    artefacts: [
      "Connector playbook with monitoring thresholds, alert routing, and fallback logic.",
      "Credential vaulting, maker-checker approvals, and segregation of duties configuration.",
      "Performance tests covering PIX spikes, boleto reconciliations, and high-volume payouts."
    ],
    icon: Circuitry
  },
  {
    phase: "Sprint 3",
    title: "Pilot & optimisation wave",
    detail:
      "Launch a cross-regional pilot across São Paulo, Rio de Janeiro, and Northeast leaders to validate experience and compliance.",
    artefacts: [
      "Executive dashboards covering settlement tempo, exception handling, and tax exposure.",
      "Feedback loops with distributor councils and customer care to inform change backlog.",
      "Automation roadmap prioritised by revenue impact, risk reduction, and complexity."
    ],
    icon: BarChart3
  }
];

const ASSURANCE_PILLARS: Assurance[] = [
  {
    title: "Regulator-grade compliance",
    copy:
      "AML, sanction screening, and LGPD controls provide full visibility into approvals, evidence, and data lineage for every payout.",
    icon: SealCheck
  },
  {
    title: "Treasury foresight",
    copy:
      "FX exposure, liquidity, and receivables forecasting tools keep CFOs ahead of rapid market shifts across Brazil’s regions.",
    icon: LineChart
  },
  {
    title: "Distributor trust",
    copy:
      "Transparent communications, recognition workflows, and ticketing integrations keep teams confident and engaged.",
    icon: UsersThree
  }
];

const FAQS: FAQ[] = [
  {
    question: "Which payment partners do you integrate for Brazil?",
    answer:
      "We orchestrate domestic banks including Itaú, Bradesco, Banco do Brasil, Santander, Sicredi, and Sicoob alongside PSPs like Stone, PagSeguro, Cielo, Rede, Mercado Pago, Stripe, and PayPal. PIX and boleto flows inherit the same governance as card acquiring."
  },
  {
    question: "How do you handle PIX, boleto, and card reconciliation?",
    answer:
      "Connector playbooks automate CNAB batches, PIX instant confirmations, boleto lifecycle statuses, and card settlement files. Finance teams view a unified ledger with variance alerts and audit trails."
  },
  {
    question: "What documentation supports legal and compliance reviews?",
    answer:
      "We provide AML programmes, PIX and boleto SOPs, LGPD data maps, contract templates, and tax reporting guides. These packs accelerate sign-off from legal, compliance, and banking partners."
  }
];

type PageProps = {
  params: { lang: string };
};

export default async function BrazilPaymentGatewaysPage({ params }: PageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale as SupportedLocale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale as SupportedLocale);
  const pricingHref = buildLocalizedPath("/pricing", locale as SupportedLocale);

  return (
    <div className="space-y-20 pb-24 pt-24 md:space-y-24 md:pt-28">
      <section className="container">
        <div className="relative isolate overflow-hidden rounded-[3.5rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-emerald-50 px-8 py-14 shadow-sm dark:border-slate-800 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.25),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.25),transparent_55%)]"
            aria-hidden
          />
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,0.48fr)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Brazil • Payment innovation
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Ways to accept payments from MLM Software in Brazil (BR)
              </h1>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Cloud MLM Software has already built great systems for the greatest companies. We extend that expertise to Brazil’s PIX-first economy so you launch fast, stay compliant, and delight distributors.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                The availability of the payment gateways supported for Brazil is showcased below together with the governance layers that keep them resilient.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
                  <Link href={contactHref}>
                    Start your Brazil rollout
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900/40">
                  <Link href={demoHref}>
                    Explore interactive demo
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {HERO_HIGHLIGHTS.map((highlight) => (
                <div
                  key={highlight.label}
                  className="flex flex-col rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70"
                >
                  <div className="flex items-center gap-3">
                    <highlight.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                        {highlight.label}
                      </p>
                      <p className="text-lg font-semibold text-slate-900 dark:text-white">{highlight.metric}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-8 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:items-center">
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
            Market intelligence
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Brazil’s payment landscape demands orchestration
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Instant transfers, boleto workflows, and rigorous tax reporting converge. We convert that complexity into a single, governable operating model.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {MARKET_THEMES.map((theme) => (
            <div
              key={theme.title}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70"
            >
              <theme.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{theme.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{theme.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-[36px] border border-slate-200 bg-slate-50/80 p-10 shadow-inner dark:border-slate-800 dark:bg-slate-900/40 sm:p-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Gateway stack engineered for Brazil’s scale
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Unify banks, PIX, boleto, and cards under one operating rhythm. Every integration inherits governance, monitoring, and automation.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PAYMENT_STACKS.map((stack) => (
              <article
                key={stack.name}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
              >
                <div className="flex items-center gap-3">
                  <stack.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stack.name}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{stack.summary}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {stack.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-4 rounded-full bg-emerald-500/80" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
            Delivery cadence
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Proven sprints that align governance and growth
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            We keep legal, finance, and distributor councils aligned throughout implementation, with artefacts built for rapid decisions.
          </p>
        </div>
        <div className="space-y-8">
          {DELIVERY_STAGES.map((stage) => (
            <div
              key={stage.phase}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                  {stage.phase}
                </span>
                <stage.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{stage.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stage.detail}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {stage.artefacts.map((artefact) => (
                  <li key={artefact} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-4 rounded-full bg-slate-400/70 dark:bg-slate-600" aria-hidden />
                    <span>{artefact}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Assurance pillars for Brazilian leadership teams
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Compliance, treasury, and distributor success all feed one set of dashboards—making executive sessions faster and more decisive.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ASSURANCE_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
            >
              <pillar.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{pillar.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-[36px] border border-slate-200 bg-white/95 p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                FAQs
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Key considerations finance directors, compliance leaders, and distributor councils raise before launching in Brazil.
              </p>
            </div>
            <div className="space-y-6">
              {FAQS.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 dark:border-slate-700 dark:bg-slate-900/70"
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
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.28),transparent_55%)]"
            aria-hidden
          />
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Lead Brazil’s MLM payment experience with confidence
            </h2>
            <p className="text-base text-slate-100/90">
              Cloud MLM Software aligns the payment rails Brazil trusts with the governance your stakeholders demand. Let’s design your launch blueprint together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Book a Brazil strategy call
                  <ArrowUpRight className="h-4 w-4 text-slate-600" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
                <Link href={pricingHref}>Review pricing options</Link>
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
