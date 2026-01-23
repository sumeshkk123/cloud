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
  Building,
  Euro,
  Globe,
  Layers,
  ShieldCheck,
  Table2,
  TrendingUp,
  Workflow
} from "lucide-react";
import {
  Bank,
  ChartPieSlice,
  Circuitry,
  CurrencyCircleDollar,
  Handshake,
  Notebook,
  SealCheck
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Bulgaria MLM Payment Gateways | Cloud MLM Software",
  description:
    "Ways to accept payments from MLM Software in Bulgaria (BG). Cloud MLM Software unites SEPA banking, card acquiring, and distributor enablement under EU-compliant governance.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/bulgaria"
  },
  openGraph: {
    title: "Bulgaria MLM Payment Gateways",
    description:
      "Launch Bulgarian MLM payment operations with Cloud MLM Software’s SEPA, card, and compliance orchestration.",
    url: "/mlm-software-payment-gateways/bulgaria"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  label: string;
  value: string;
  copy: string;
  icon: IconType;
};

type Insight = {
  title: string;
  description: string;
  icon: IconType;
};

type Stack = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Phase = {
  stage: string;
  headline: string;
  detail: string;
  deliverables: string[];
  icon: IconType;
};

type Assurance = {
  title: string;
  detail: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_HIGHLIGHTS: Highlight[] = [
  {
    label: "SEPA settlement speed",
    value: "T+0.4 days",
    copy:
      "SEPA Instant and SEPA Credit Transfer flows orchestrated with automated reconciliation and Bank of Bulgaria oversight.",
    icon: Euro
  },
  {
    label: "Gateway coverage",
    value: "12 integrations",
    copy:
      "UniCredit Bulbank, DSK, First Investment Bank, Stripe, PayPal, myPOS, and Borica card acquiring under one risk policy.",
    icon: Layers
  },
  {
    label: "Compliance artefacts",
    value: "38 templates",
    copy:
      "AML, GDPR, PSD2, and fiscal reporting documentation accelerate approvals from legal, banks, and regulators.",
    icon: Notebook
  }
];

const MARKET_INSIGHTS: Insight[] = [
  {
    title: "EU regulatory alignment",
    description:
      "PSD2, GDPR, and Bulgarian National Bank guidelines require transparent audit trails and role-based approvals across every payout.",
    icon: ShieldCheck
  },
  {
    title: "Cross-border commerce",
    description:
      "Distributors often sell into Romania, Greece, Serbia, and the EU. Multi currency and VAT visibility keep margins protected.",
    icon: Globe
  },
  {
    title: "High-growth sectors",
    description:
      "Wellness, fintech, and agri-tech MLMs expect data-driven dashboards to steer growth across Sofia, Plovdiv, Varna, and Burgas.",
    icon: TrendingUp
  }
];

const PAYMENT_STACKS: Stack[] = [
  {
    name: "SEPA & domestic bank core",
    summary: "Automate clearing with Bulgarian banks while satisfying BNB oversight.",
    bullets: [
      "Integrations for UniCredit Bulbank, DSK, First Investment Bank, Postbank, and UBB.",
      "SEPA Instant and batch file orchestration with exception dashboards for finance controllers.",
      "Multi-entity governance separating BG, EU, and global subsidiaries with audit-ready exports."
    ],
    icon: Bank
  },
  {
    name: "Card and wallet acceleration",
    summary: "Combine Borica networks, Stripe, PayPal, Revolut, and myPOS in one policy.",
    bullets: [
      "Dynamic routing by card scheme, risk score, and product profitability.",
      "Chargeback automation linked to legal and customer care workflows.",
      "Wallet and instalment payment support with PSD2 strong customer authentication controls."
    ],
    icon: Circuitry
  },
  {
    name: "Distributor growth studio",
    summary: "Give leaders the intelligence needed to sustain EU-wide momentum.",
    bullets: [
      "Narratives and dashboards in Bulgarian and English with permission-aware access.",
      "Recognition, incentive, and wellbeing analytics tied to payout accuracy.",
      "Ticketing, auto-responder, and backup modules orchestrated for proactive engagement."
    ],
    icon: Handshake
  }
];

const DELIVERY_PHASES: Phase[] = [
  {
    stage: "Step 1",
    headline: "Blueprint & regulatory alignment",
    detail:
      "Workshops with finance, legal, and operations map PSD2, GDPR, tax, and AML requirements before development begins.",
    deliverables: [
      "Risk heat map covering regulator expectations, bank obligations, and data residency.",
      "RACI matrix across HQ, finance control, and distributor leadership.",
      "Solution architecture diagrams with approved data flows and integration touchpoints."
    ],
    icon: Workflow
  },
  {
    stage: "Step 2",
    headline: "Integration & observability",
    detail:
      "Deploy secure connectors, monitoring, and maker-checker approvals across banks, PSPs, and internal modules.",
    deliverables: [
      "Connector catalogue with heartbeat thresholds, alert routing, and failover playbooks.",
      "Credential vaulting, PSD2-compliant strong customer authentication, and segregation of duties.",
      "Performance tests for SEPA peaks, card spikes, and distributor payout loads."
    ],
    icon: Circuitry
  },
  {
    stage: "Step 3",
    headline: "Pilot & optimisation",
    detail:
      "Launch with Sofia and Varna leadership cohorts to validate speed, transparency, and experience before scaling EU-wide.",
    deliverables: [
      "Executive dashboards covering settlement tempo, VAT exposure, and exception volumes.",
      "Feedback loops with distributor councils and customer care for rapid iteration.",
      "Continuous improvement backlog prioritised by compliance impact and revenue growth."
    ],
    icon: Building
  }
];

const ASSURANCE_PILLARS: Assurance[] = [
  {
    title: "Regulator-ready compliance",
    detail:
      "AML, PSD2, GDPR, and tax evidence packs provide full transparency for auditors, banking partners, and investors.",
    icon: SealCheck
  },
  {
    title: "Treasury & FX visibility",
    detail:
      "Liquidity, FX exposure, and profitability dashboards support decision-making across multi-country leadership teams.",
    icon: ChartPieSlice
  },
  {
    title: "Distributor confidence",
    detail:
      "Real-time notifications, incentive analytics, and ticketing integrations keep field leaders engaged and informed.",
    icon: CurrencyCircleDollar
  }
];

const FAQS: FAQ[] = [
  {
    question: "Which banks and PSPs do you integrate for Bulgaria?",
    answer:
      "We orchestrate UniCredit Bulbank, DSK, First Investment Bank, Postbank, UBB, and other Bulgarian institutions alongside Stripe, PayPal, Revolut, myPOS, Borica acquiring, and trusted PSPs. All connectors inherit governance, telemetry, and approval controls."
  },
  {
    question: "How do you handle SEPA Instant, SEPA Credit Transfer, and domestic clearing?",
    answer:
      "Our connector playbooks manage SEPA Instant confirmations, batch file exchanges, domestic clearing, and reconciliation. Finance teams see unified ledgers with variance alerts and regulatory filing outputs."
  },
  {
    question: "What documentation and tooling support compliance?",
    answer:
      "We deliver AML policies, PSD2 SCA workflows, GDPR data maps, VAT reporting templates, and bank onboarding packs—reducing time-to-approval with regulators and financial partners."
  }
];

type PageProps = {
  params: { lang: string };
};

export default function BulgariaPaymentGatewaysPage({ params }: PageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale as SupportedLocale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale as SupportedLocale);
  const pricingHref = buildLocalizedPath("/pricing", locale as SupportedLocale);

  return (
    <div className="space-y-20 pb-24 pt-24 md:space-y-24 md:pt-28">
      <section className="container">
        <div className="relative isolate overflow-hidden rounded-[3.5rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-sky-50 px-8 py-14 shadow-sm dark:border-slate-800 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.25),transparent_55%)]"
            aria-hidden
          />
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,0.48fr)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
                Bulgaria • SEPA innovation
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Ways to accept payments from MLM Software in Bulgaria (BG)
              </h1>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Cloud MLM Software has already built great systems for the greatest companies. We tailor that playbook to Bulgaria’s EU-regulated market so you scale responsibly from day one.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                The availability of the payment gateways supported for Bulgaria is presented below, together with the governance pillars that keep them resilient.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
                  <Link href={contactHref}>
                    Plan your Bulgaria rollout
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
                    <highlight.icon className="h-6 w-6 text-indigo-500 dark:text-indigo-300" aria-hidden />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                        {highlight.label}
                      </p>
                      <p className="text-lg font-semibold text-slate-900 dark:text-white">{highlight.value}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{highlight.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-8 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:items-center">
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
            Market insights
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Navigate Bulgaria’s payment landscape with clarity
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            EU regulation, cross-border commerce, and data-driven leadership demand a unified payment operations strategy. We deliver it end to end.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {MARKET_INSIGHTS.map((insight) => (
            <div
              key={insight.title}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70"
            >
              <insight.icon className="h-6 w-6 text-indigo-500 dark:text-indigo-300" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{insight.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{insight.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-[36px] border border-slate-200 bg-slate-50/80 p-10 shadow-inner dark:border-slate-800 dark:bg-slate-900/40 sm:p-12">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Payment stack built for Bulgaria’s growth trajectory
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Connect banks, card schemes, wallets, and distributor experience in one governed operating model.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {PAYMENT_STACKS.map((stack) => (
              <article
                key={stack.name}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
              >
                <div className="flex items-center gap-3">
                  <stack.icon className="h-6 w-6 text-indigo-500 dark:text-indigo-300" aria-hidden />
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stack.name}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{stack.summary}</p>
                <ul className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {stack.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 h-1.5 w-4 rounded-full bg-indigo-500/80" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,0.54fr)]">
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-slate-700 dark:text-slate-200">
            Delivery phases
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Implementation cadence aligned with EU governance
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            We move from blueprint to scale with artefacts built for regulators, banks, and distributor councils alike.
          </p>
        </div>
        <div className="space-y-8">
          {DELIVERY_PHASES.map((phase) => (
            <div
              key={phase.stage}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                  {phase.stage}
                </span>
                <phase.icon className="h-6 w-6 text-indigo-500 dark:text-indigo-300" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{phase.headline}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{phase.detail}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {phase.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-4 rounded-full bg-slate-400/70 dark:bg-slate-600" aria-hidden />
                    <span>{deliverable}</span>
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
            Assurance pillars for leadership confidence
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Compliance, treasury, and distributor success share one command centre—making executive decisions faster and better informed.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ASSURANCE_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70"
            >
              <pillar.icon className="h-6 w-6 text-indigo-500 dark:text-indigo-300" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{pillar.detail}</p>
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
                The answers finance directors, compliance leaders, and distributor councils raise when planning Bulgarian growth.
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
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(129,140,248,0.35),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.28),transparent_55%)]"
            aria-hidden
          />
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Build Bulgaria’s most trusted MLM payment experience
            </h2>
            <p className="text-base text-slate-100/90">
              Cloud MLM Software unites SEPA banking, card acquiring, and distributor intelligence under one disciplined operation. Let’s architect your next phase together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Schedule a strategy session
                  <ArrowUpRight className="h-4 w-4 text-slate-600" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
                <Link href={pricingHref}>Review pricing guidance</Link>
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
