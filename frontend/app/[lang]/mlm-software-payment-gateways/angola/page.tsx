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
  BarChart3,
  Globe2,
  Layers3,
  LineChart,
  Shield,
  Sparkles,
  Workflow
} from "lucide-react";
import {
  Bank,
  CurrencyCircleDollar,
  DeviceMobile,
  Handshake,
  MapTrifold,
  ShieldCheck
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  title: string;
  value: string;
  description: string;
  icon: IconType;
};

type MarketInsight = {
  title: string;
  summary: string;
  detail: string;
  icon: IconType;
};

type GatewayStack = {
  name: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type RolloutPhase = {
  phase: string;
  headline: string;
  description: string;
  artifacts: string[];
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
    title: "Regulator alignment",
    value: "< 72 hrs",
    description: "Average onboarding time once Banco Nacional de Angola compliance files are signed off.",
    icon: Shield
  },
  {
    title: "Gateway depth",
    value: "12+ rails",
    description: "Certified connectors spanning BNA RTGS, EMIS, and trusted PSP corridors to Portugal and South Africa.",
    icon: Globe2
  },
  {
    title: "Provincial coverage",
    value: "9 provinces",
    description: "Distributor-ready settlement workflows for Luanda, Benguela, Huambo, and emerging coastal hubs.",
    icon: MapTrifold
  },
  {
    title: "Digital adoption",
    value: "94%",
    description: "Leaders using cloud statements and automated commission alerts inside Cloud MLM Software dashboards.",
    icon: Sparkles
  }
];

const MARKET_INSIGHTS: MarketInsight[] = [
  {
    title: "Kwanza liquidity management",
    summary: "Treasury teams balance AKZ and USD flows.",
    detail:
      "We map float requirements and FX hedging rules so leadership sees the working capital impact of every payout cycle in real time.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Mobile-first field culture",
    summary: "Distributors expect WhatsApp-grade experiences.",
    detail:
      "Cloud MLM Software delivers low-bandwidth notifications, biometric-ready KYC, and quick dispute workflows that work on the devices your field already uses.",
    icon: DeviceMobile
  },
  {
    title: "Cross-border leadership",
    summary: "Regional directors operate from Lisbon and Johannesburg.",
    detail:
      "Localized dashboards keep overseas stakeholders compliant with Angolan reporting while enabling multi-currency intelligence at group level.",
    icon: Handshake
  }
];

const GATEWAY_STACKS: GatewayStack[] = [
  {
    name: "Domestic clearing mesh",
    focus: "Secure RTGS and multibanco settlement",
    bullets: [
      "ISO 20022 ready files for Banco Nacional de Angola and EMIS",
      "Automated account validation with NIF cross-checks and sanction refreshes",
      "Reconciliation studio that ties branch settlements to distributor wallets"
    ],
    icon: Bank
  },
  {
    name: "Regional growth corridors",
    focus: "FX controlled expansions",
    bullets: [
      "Connected PSPs in Portugal, South Africa, and the SADC trade bloc",
      "Real-time FX buffers that protect margins when AKZ fluctuates",
      "Treasury approvals orchestrated through maker-checker policies"
    ],
    icon: Globe2
  },
  {
    name: "Experience innovation",
    focus: "Digital onboarding and incentives",
    bullets: [
      "Card vaulting, instant payouts, and wallets tailored for executive ranks",
      "Behaviour-based incentives surfaced inside analytics boards",
      "AI support layer trained on Angola-specific compensation playbooks"
    ],
    icon: Sparkles
  }
];

const ROLLOUT_PHASES: RolloutPhase[] = [
  {
    phase: "01",
    headline: "Policy discovery",
    description: "Immersive workshops translate your governance rules into API-ready processes.",
    artifacts: [
      "Stakeholder map across treasury, compliance, and distributor leadership",
      "Risk heatmap covering FX exposure, cash handling, and data residency",
      "Regulatory briefing deck aligned to BNA circulars"
    ],
    icon: Workflow
  },
  {
    phase: "02",
    headline: "Connector blueprint",
    description: "Credentials, routing logic, and approval chains are codified in the platform.",
    artifacts: [
      "Gateway sequencing with intelligent failover",
      "Credential vault with rotation reminders and audit logs",
      "Joint QA scripts covering enrolment, payout, and clawback cases"
    ],
    icon: Layers3
  },
  {
    phase: "03",
    headline: "Controlled launch",
    description: "Pilot cells activate with observability tuned to Angola’s market rhythm.",
    artifacts: [
      "Live telemetry board with queue health and settlement timelines",
      "Field playbooks for digital onboarding inside urban and rural zones",
      "Executive war room bridging Luanda HQ and diaspora leaders"
    ],
    icon: LineChart
  },
  {
    phase: "04",
    headline: "Scale & optimise",
    description: "Automation backlog items and new corridors go live on a predictable cadence.",
    artifacts: [
      "Quarterly optimisation sprints with adoption KPIs",
      "Machine learning prompts for exception triage",
      "Expansion readiness kit for Congo, Namibia, and beyond"
    ],
    icon: BarChart3
  }
];

const CONTROLS: Control[] = [
  {
    title: "Compliance command centre",
    description:
      "Real-time AML screening, dual approval chains, and secure retention rules keep your regulators ahead of the narrative.",
    icon: ShieldCheck
  },
  {
    title: "Revenue assurance intelligence",
    description:
      "Variance detectors compare commission forecasts against actuals so finance leaders can intervene before distributor trust erodes.",
    icon: LineChart
  },
  {
    title: "Stakeholder confidence",
    description:
      "AI-generated briefing notes summarise payment health for executives, investors, and top field ranks in plain language.",
    icon: Sparkles
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "Can Cloud MLM Software handle AKZ and USD wallets in one payout cycle?",
    answer:
      "Yes. Dual-currency wallets let treasury teams set hedging buffers, define conversion triggers, and view consolidated or split statements from the same console."
  },
  {
    question: "How do you keep Banco Nacional de Angola reporting updated?",
    answer:
      "Regulation packs sync with the latest BNA circulars. Compliance teams receive change alerts and downloadable audit artefacts without leaving the platform."
  },
  {
    question: "What about distributors working with limited connectivity?",
    answer:
      "Offline-first mobile flows queue data until devices reconnect. SMS, email, and WhatsApp notifications keep leaders informed regardless of bandwidth." 
  },
  {
    question: "Do you integrate with our existing treasury or ERP stack?",
    answer:
      "Pre-built adapters connect to SAP, Microsoft Dynamics, and custom ERPs. Events propagate via webhooks so finance teams preserve their core systems of record."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Angola MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Design a resilient Angola payment gateway network for your MLM enterprise. Cloud MLM Software unifies BNA compliance, FX governance, and field-ready digital payouts.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/angola", locale)
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

type AngolaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function AngolaPaymentGatewaysPage({
  params
}: AngolaPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3rem] border border-teal-200/70 bg-gradient-to-br from-emerald-50 via-white to-sky-50 px-6 py-20 text-slate-900 shadow-lg dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(45,212,191,0.22),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(59,130,246,0.25),transparent_60%),radial-gradient(circle_at_50%_90%,rgba(56,189,248,0.22),transparent_60%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(20,184,166,0.35),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(59,130,246,0.35),transparent_60%),radial-gradient(circle_at_50%_90%,rgba(14,165,233,0.28),transparent_65%)]"
          aria-hidden
        />
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:items-start">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-300/70 bg-white/70 px-5 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-teal-700 dark:border-teal-500/40 dark:bg-slate-900/70 dark:text-teal-200">
              <Shield className="h-4 w-4" />
              Angola payments blueprint
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Modern payment gateways for MLM growth across Angola
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-200">
                Cloud MLM Software connects Angola’s banking rails, FX controls, and mobile-first field expectations. Deliver commissions faster, protect compliance, and equip executives with real-time intelligence from Luanda to diaspora headquarters.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-teal-600 text-white hover:bg-teal-500 dark:bg-teal-500 dark:hover:bg-teal-400">
                <Link href={contactHref}>
                  Design your payout model
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-teal-200 bg-white/80 text-teal-800 hover:bg-teal-50 dark:border-teal-500/30 dark:bg-transparent dark:text-teal-100 dark:hover:bg-teal-500/10"
              >
                <Link href={demoHref}>Explore orchestration demo</Link>
              </Button>
            </div>
          </div>
          <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-teal-200/70 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.2),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.25),transparent_60%)]" aria-hidden />
            <div className="space-y-7">
              {METRICS.map((metric) => (
                <div key={metric.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-700 dark:bg-teal-400/20 dark:text-teal-200">
                    <metric.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                      {metric.title}
                    </p>
                    <p className="text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{metric.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Angola market intelligence built into every workflow
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            We translate Angola’s economic signals into actionable payment policies. Each recommendation keeps your organisation compliant, cashflow efficient, and field-ready.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {MARKET_INSIGHTS.map((insight) => (
            <article
              key={insight.title}
              className="group relative flex h-full flex-col gap-4 rounded-3xl border border-teal-200/70 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/70"
            >
              <div className="absolute inset-0 -z-10 rounded-3xl bg-[conic-gradient(at_top_left,var(--tw-gradient-stops))] from-teal-200 via-transparent to-sky-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-teal-500/20 dark:to-sky-500/20" aria-hidden />
              <insight.icon className="h-8 w-8 text-teal-600 dark:text-teal-300" />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{insight.title}</h3>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-300">
                  {insight.summary}
                </p>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{insight.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Configure the gateway stack that fits your expansion plan
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Cloud MLM Software already powers multi-rail settlements for category-leading brands. Choose the deployment tracks that match your vision and we’ll orchestrate the rest.
            </p>
          </div>
          <div className="rounded-[2.5rem] border border-teal-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-xl dark:border-slate-700">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Executive snapshot
            </p>
            <p className="mt-4 text-base text-slate-100">
              Scenario planners compare gateway mixes, FX buffers, and commission schedules before making a strategic call. You decide once, then monitor every metric from the same control panel.
            </p>
            <Button asChild size="lg" className="mt-6 w-full gap-2 bg-white text-slate-900 hover:bg-slate-100">
              <Link href={pricingHref}>
                Review licensing options
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {GATEWAY_STACKS.map((stack) => (
            <article
              key={stack.name}
              className="flex h-full flex-col gap-5 rounded-3xl border border-teal-200/70 bg-white/85 p-7 shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/70"
            >
              <stack.icon className="h-8 w-8 text-teal-600 dark:text-teal-300" />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{stack.name}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stack.focus}</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {stack.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-teal-500" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-teal-200/70 bg-teal-50/70 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Roll out with confidence on a cadence designed for Angola
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Each phase ships with audit-ready artefacts, leadership enablement, and telemetry dashboards so every stakeholder sees the same truth.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-4">
            {ROLLOUT_PHASES.map((phase) => (
              <article
                key={phase.headline}
                className="flex h-full flex-col gap-4 rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-700 dark:bg-teal-500/20 dark:text-teal-200">
                    <phase.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-300">
                    {phase.phase}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{phase.headline}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{phase.description}</p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {phase.artifacts.map((artifact) => (
                    <li key={artifact} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-to-r from-teal-400 to-sky-400" aria-hidden />
                      <span>{artifact}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start">
        <div className="space-y-6">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Controls that keep regulators, executives, and the field aligned
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Angola-specific governance, analytics, and storytelling tools come standard with every Cloud MLM Software deployment.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {CONTROLS.map((control) => (
              <div
                key={control.title}
                className="rounded-3xl border border-teal-200/70 bg-white/80 p-5 text-sm shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70"
              >
                <control.icon className="h-6 w-6 text-teal-600 dark:text-teal-300" />
                <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{control.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{control.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-teal-200/70 bg-gradient-to-br from-sky-100 via-white to-teal-50 p-8 text-slate-900 shadow-xl dark:border-slate-700/60 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_25%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.18),transparent_55%)]" aria-hidden />
          <h3 className="text-lg font-semibold">Angola command narrative</h3>
          <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
            Weekly executive digests summarise risk posture, liquidity movements, and distributor sentiment so decisions move faster.
          </p>
          <dl className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-300">Channels</dt>
              <dd className="mt-2 leading-6">Email, Slack, Teams, and board-ready export packs with annotated talking points.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-300">Cadence</dt>
              <dd className="mt-2 leading-6">Dynamic—daily during launch, weekly once stabilised, with ad-hoc alerts for regulatory or FX changes.</dd>
            </div>
          </dl>
          <Button asChild size="lg" className="mt-6 w-full gap-2 bg-teal-600 text-white hover:bg-teal-500 dark:bg-teal-500 dark:hover:bg-teal-400">
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
            The questions below capture what Angola-focused executives, compliance leads, and sales directors ask when planning a modern payout engine.
          </p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-teal-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2.75rem] border border-teal-200/70 bg-gradient-to-r from-teal-600 via-sky-500 to-emerald-500 px-6 py-16 text-white shadow-xl dark:border-slate-700/60">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(255,255,255,0.25),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(255,255,255,0.2),transparent_55%)]" aria-hidden />
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Lead the conversation on secure MLM payments in Angola
          </h2>
          <p className="text-base text-teal-50/90">
            Cloud MLM Software helps you deploy compliant, data-rich payment experiences that scale from Luanda to your global leadership hubs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-teal-700 hover:bg-slate-100">
              <Link href={contactHref}>
                Start your Angola rollout
                <ArrowUpRight className="h-4 w-4 text-teal-600" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
              <Link href={demoHref}>Request live product tour</Link>
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
