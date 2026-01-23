import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { Button } from "@/components/ui/button";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ArrowUpRight,
  BadgeDollarSign,
  BarChart4,
  Building2,
  ChartSpline,
  Compass,
  Factory,
  Globe,
  Kanban,
  Layers,
  Shield,
  Sparkles,
  Waypoints
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  Cpu,
  CurrencyCircleDollar,
  Handshake,
  LineSegments,
  LockKey,
  MapTrifold
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type Insight = {
  title: string;
  subtitle: string;
  description: string;
  icon: IconType;
};

type Track = {
  name: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type Phase = {
  stage: string;
  title: string;
  description: string;
  artefacts: string[];
  icon: IconType;
};

type Control = {
  title: string;
  description: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const METRICS: Metric[] = [
  {
    label: "Gateway connectors",
    value: "18 integrations",
    description: "Banco Nación, Galicia, BBVA, Mercado Pago, Stripe, Adyen, and more with redundancy built in.",
    icon: Bank
  },
  {
    label: "Regulatory agility",
    value: "72 hr SLA",
    description: "Average time to ship UIF, AFIP, and BCRA compliance updates with documented evidence.",
    icon: Shield
  },
  {
    label: "FX governance",
    value: "6 hedging models",
    description: "Treasury teams simulate peso volatility, USD controls, and stablecoin corridors in one console.",
    icon: CurrencyCircleDollar
  }
];

const INSIGHTS: Insight[] = [
  {
    title: "Peso volatility management",
    subtitle: "Protect margins, ensure liquidity",
    description:
      "Cloud MLM Software embeds hedging rules, blended FX rates, and compliance workflows so you can sell in ARS and settle globally without guesswork.",
    icon: ChartLineUp
  },
  {
    title: "Omnichannel commerce",
    subtitle: "Card, QR, wallets, and cashless",
    description:
      "Unified adapters bring together Mercado Pago, Payway, Naranja X, and card acquirers with reconciliation that speaks your finance team’s language.",
    icon: Cpu
  },
  {
    title: "Field enablement at scale",
    subtitle: "From Córdoba to diaspora hubs",
    description:
      "Role-based experiences serve metropolitan, provincial, and diaspora leaders with Spanish and English automation playbooks.",
    icon: MapTrifold
  }
];

const TRACKS: Track[] = [
  {
    name: "Regulated bank rail",
    focus: "BCRA aligned core",
    bullets: [
      "Automated SEPA/ISO files for Banco Nación, Galicia, and Santander",
      "Dynamic tax withholding for earnings and reimbursements with AFIP-ready exports",
      "Approved signatory workflows with digital signatures and audit logs"
    ],
    icon: LockKey
  },
  {
    name: "Commerce acceleration",
    focus: "QR, wallet, and card orchestration",
    bullets: [
      "Mercado Pago, Ualá Bis, Payway, and world PSP connectors",
      "Chargeback intelligence using AI narratives for rapid response",
      "Subscription and instalment engines tuned for Argentine consumer behaviour"
    ],
    icon: Compass
  },
  {
    name: "Analytics & enablement fabric",
    focus: "Insights for executives and distributors",
    bullets: [
      "Interactive dashboards for Buenos Aires HQ and provincial branches",
      "AI copilot to coach leaders on compliance, promotions, and retention",
      "Experience scorecards benchmarking sentiment, payout speed, and escalation volume"
    ],
    icon: Sparkles
  }
];

const PHASES: Phase[] = [
  {
    stage: "01",
    title: "Strategic mapping",
    description: "Capture commercial policy, regulatory scope, and distributor personas.",
    artefacts: [
      "Stakeholder blueprint spanning finance, compliance, and commercial leaders",
      "Process audit covering onboarding, payouts, and tax treatments",
      "Risk matrix flagging FX controls, cash usage, and data residency"
    ],
    icon: Building2
  },
  {
    stage: "02",
    title: "Connector engineering",
    description: "Configure secured integrations, routing, and monitoring.",
    artefacts: [
      "Credential vault with rotation schedules and alerting",
      "Routing logic that optimises for ARS availability and USD backflow",
      "QA suite validating compensation, incentives, and refunds"
    ],
    icon: Layers
  },
  {
    stage: "03",
    title: "Guided launch",
    description: "Activate pilot cohorts with telemetry, training, and support.",
    artefacts: [
      "Command centre aggregating liquidity, adoption, and compliance signals",
      "Leadership enablement kit for Buenos Aires, Rosario, and Mendoza",
      "Variance detection to reconcile forecasts against live data"
    ],
    icon: Waypoints
  },
  {
    stage: "04",
    title: "Optimise & expand",
    description: "Extend automation, analytics, and new product offerings.",
    artefacts: [
      "Quarterly OKR reviews with AI-authored actions",
      "Automation backlog prioritised with executive sponsors",
      "Expansion playbooks for cross-border corridors and new categories"
    ],
    icon: Kanban
  }
];

const CONTROLS: Control[] = [
  {
    title: "Compliance cockpit",
    description:
      "BCRA, UIF, and AFIP obligations surface in a single workspace with evidence capture and submission-ready exports.",
    icon: Shield
  },
  {
    title: "Revenue assurance",
    description:
      "Predictive analytics highlight anomalies across commissions, QR collections, and instalment plans before they impact trust.",
    icon: BarChart4
  },
  {
    title: "Executive storytelling",
    description:
      "Narrative briefings synthesise payout telemetry, FX posture, and field sentiment for boards and investors.",
    icon: Handshake
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "Can we settle in ARS and USD simultaneously?",
    answer:
      "Yes. Dual-currency wallets allow treasury teams to enforce hedging rules, segregate funds, and publish consolidated or split ledgers on demand."
  },
  {
    question: "How do you handle Argentine tax and compliance reporting?",
    answer:
      "We automate AFIP tax file generation, maintain UIF/KYC records, and store BCRA evidence with drill-down audits for regulators."
  },
  {
    question: "Do you integrate with Mercado Pago and QR ecosystems?",
    answer:
      "Cloud MLM Software offers native connectors for Mercado Pago, Ualá Bis, Payway, and card acquirers, all reconciling into a single finance console."
  },
  {
    question: "What support is available for distributed field teams?",
    answer:
      "AI-powered assistants and localisation keep provincial and diaspora leaders informed with contextual nudges, training, and sentiment tracking."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Argentina MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Deploy an Argentina-specific payment stack for your MLM network. Cloud MLM Software aligns BCRA compliance, FX governance, and multi-rail commerce orchestration.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/argentina", locale)
    },
    openGraph: {
      title,
      description
    },
    twitter: {
      title,
      description
    }
  };
}

type ArgentinaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function ArgentinaPaymentGatewaysPage({
  params
}: ArgentinaPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.25rem] border border-indigo-100/70 bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6 py-20 text-slate-900 shadow-lg dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-16">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(129,140,248,0.25),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(165,180,252,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(99,102,241,0.35),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(129,140,248,0.3),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/70 px-5 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-indigo-700 dark:border-indigo-500/40 dark:bg-slate-900/70 dark:text-indigo-200">
              <Globe className="h-4 w-4" />
              Argentina payment transformation
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Run Argentina’s MLM payments with regulatory confidence and data clarity
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-200">
                Cloud MLM Software orchestrates banking partners, PSPs, and FX governance in a single command centre. Delight distributors, satisfy regulators, and empower executives with always-on intelligence.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-indigo-600 text-white hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400">
                <Link href={contactHref}>
                  Map your Argentina rollout
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-indigo-200 bg-white/80 text-indigo-800 hover:bg-indigo-50 dark:border-indigo-500/30 dark:bg-transparent dark:text-indigo-100 dark:hover:bg-indigo-500/10"
              >
                <Link href={demoHref}>See the orchestration demo</Link>
              </Button>
            </div>
          </div>
          <div className="relative isolate grid gap-6 rounded-[2.75rem] border border-indigo-100/70 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(129,140,248,0.2),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.25),transparent_60%)]" aria-hidden />
            {METRICS.map((metric) => (
              <article key={metric.label} className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-700 dark:bg-indigo-400/20 dark:text-indigo-200">
                  <metric.icon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">{metric.label}</p>
                  <p className="text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{metric.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Insights grounded in Argentina’s economic reality
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Your payment strategy must navigate volatility, regulation, and omnichannel customer expectations. These insights shape every configuration decision.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {INSIGHTS.map((insight) => (
            <article
              key={insight.title}
              className="group relative flex h-full flex-col gap-4 rounded-3xl border border-indigo-100/70 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/70"
            >
              <div className="absolute inset-0 -z-10 rounded-3xl bg-[conic-gradient(at_top_left,var(--tw-gradient-stops))] from-indigo-200 via-transparent to-blue-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-indigo-500/25 dark:to-blue-500/25" aria-hidden />
              <insight.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-300" />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{insight.title}</h3>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">{insight.subtitle}</p>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{insight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-indigo-100/70 bg-indigo-50/60 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container space-y-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Build the payment track that matches your growth ambition
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Combine regulated banking integrations, omnichannel commerce, and analytics frameworks to deliver Argentine excellence.
              </p>
            </div>
            <div className="rounded-[2.75rem] border border-indigo-100/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-xl dark:border-slate-700">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                Executive simulator
              </p>
              <p className="mt-4 text-base text-slate-100">
                Model cash flow, FX sensitivity, and automation payoff before launching changes, then share scenarios across leadership instantly.
              </p>
              <Button asChild size="lg" className="mt-6 w-full gap-2 bg-white text-slate-900 hover:bg-slate-100">
                <Link href={pricingHref}>
                  Review deployment bundles
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {TRACKS.map((track) => (
              <article
                key={track.name}
                className="flex h-full flex-col gap-5 rounded-3xl border border-indigo-100/70 bg-white/85 p-7 shadow-sm transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/70"
              >
                <track.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-300" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{track.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{track.focus}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {track.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-indigo-400 to-blue-400" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Implementation cadence for Argentina’s fast-moving market
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Structured delivery keeps finance, compliance, and field operations in sync across every milestone.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-4">
          {PHASES.map((phase) => (
            <article
              key={phase.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-indigo-100/70 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200">
                  <phase.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300">
                  {phase.stage}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{phase.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{phase.description}</p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {phase.artefacts.map((artefact) => (
                  <li key={artefact} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-to-r from-indigo-400 to-blue-400" aria-hidden />
                    <span>{artefact}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start">
        <div className="space-y-6">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Controls that protect brand trust and regulatory standing
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Governance, assurance, and executive reporting keep your enterprise in proactive command of Argentina’s market shifts.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {CONTROLS.map((control) => (
              <div
                key={control.title}
                className="rounded-3xl border border-indigo-100/70 bg-white/85 p-5 text-sm shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70"
              >
                <control.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
                <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{control.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{control.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative isolate overflow-hidden rounded-[2.75rem] border border-indigo-100/70 bg-gradient-to-br from-blue-100 via-white to-indigo-50 p-8 text-slate-900 shadow-xl dark:border-slate-700/60 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_25%,rgba(129,140,248,0.2),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.2),transparent_55%)]" aria-hidden />
          <h3 className="text-lg font-semibold">Argentina executive briefings</h3>
          <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
            Weekly, monthly, and ad-hoc digests summarise regulatory posture, FX risk, and distributor momentum with board-ready clarity.
          </p>
          <dl className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300">Channels</dt>
              <dd className="mt-2 leading-6">Email, Slack, Teams, and investor-ready PDF decks with annotated talking points.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300">Cadence</dt>
              <dd className="mt-2 leading-6">Daily during launch, weekly for steady state, with instant FX or compliance alerts.</dd>
            </div>
          </dl>
          <Button asChild size="lg" className="mt-6 w-full gap-2 bg-indigo-600 text-white hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400">
            <Link href={contactHref}>
              Request a leadership briefing
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked questions</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Answers to the most common questions from Argentine executives, compliance leads, and distributor councils.
          </p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-indigo-100/70 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[3rem] border border-indigo-100/70 bg-gradient-to-r from-indigo-600 via-blue-500 to-sky-500 px-6 py-16 text-white shadow-xl dark:border-slate-700/60">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(255,255,255,0.25),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(255,255,255,0.2),transparent_55%)]" aria-hidden />
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Lead Argentina’s conversation on modern MLM payouts
          </h2>
          <p className="text-base text-indigo-50/90">
            Partner with Cloud MLM Software to deploy compliant, intelligent, and future-proof payment experiences across Argentina.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-indigo-700 hover:bg-slate-100">
              <Link href={contactHref}>
                Start your Argentina deployment
                <ArrowUpRight className="h-4 w-4 text-indigo-600" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
              <Link href={demoHref}>Request live walkthrough</Link>
            </Button>
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
