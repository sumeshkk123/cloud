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
  Building,
  Compass,
  Cpu,
  Factory,
  Layers3,
  MapPin,
  Shield,
  Sparkles,
  TimerReset
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  Circuitry,
  CurrencyCircleDollar,
  Handshake,
  LineSegments,
  LockKey,
  PresentationChart
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  title: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Insight = {
  title: string;
  summary: string;
  description: string;
  icon: IconType;
};

type Capability = {
  name: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type Phase = {
  label: string;
  headline: string;
  description: string;
  outputs: string[];
  icon: IconType;
};

type Assurance = {
  title: string;
  description: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const STATS: Stat[] = [
  {
    title: "Bank & PSP connectors",
    value: "15",
    detail: "Integrations covering Ameriabank, Inecobank, HSBC Armenia, Idram, and global PSPs with redundancy.",
    icon: Bank
  },
  {
    title: "Policy refresh window",
    value: "48 hrs",
    detail: "Average turnaround for Central Bank of Armenia directives and tax code updates once artefacts are reviewed.",
    icon: Shield
  },
  {
    title: "Data residency coverage",
    value: "3 regions",
    detail: "Armenia, EU, and US hosting options with encryption, localisation, and audit-ready trails.",
    icon: LockKey
  }
];

const INSIGHTS: Insight[] = [
  {
    title: "Dual currency stability",
    summary: "AMD and foreign currency orchestration",
    description:
      "We manage dram inflows alongside USD and EUR settlements, applying hedging buffers and compliance rules in one treasury cockpit.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Tech-forward distributor base",
    summary: "Digital-first engagement",
    description:
      "Armenia’s tech talent expects modern experiences. Automated onboarding, e-signatures, and intelligent nudges keep adoption high across Yerevan and the regions.",
    icon: Circuitry
  },
  {
    title: "Regional expansion vision",
    summary: "Gateway to Eurasia",
    description:
      "Multilingual, multi-entity capabilities let you extend to Georgia, Kazakhstan, and diaspora markets while preserving compliance clarity.",
    icon: MapPin
  }
];

const CAPABILITIES: Capability[] = [
  {
    name: "Regulated banking mesh",
    focus: "Central Bank alignment",
    bullets: [
      "ISO-ready file exchange for Ameriabank, Inecobank, HSBC, and ACBA",
      "Tax withholding and reporting automation synced with the State Revenue Committee",
      "Approval hierarchies with biometric-ready e-signatures and audit trails"
    ],
    icon: ChartLineUp
  },
  {
    name: "Commerce orchestration",
    focus: "Wallets, cards, and alternative rails",
    bullets: [
      "Idram, Telcell, PayX, and Stripe connectors managed from a single rules engine",
      "Instalment plan and BNPL logic tuned for Armenian consumer behaviour",
      "Chargeback intelligence with AI-generated response playbooks"
    ],
    icon: Compass
  },
  {
    name: "Intelligence & enablement",
    focus: "Analytics for leaders and field",
    bullets: [
      "Executive dashboards highlighting regional performance, FX exposure, and compliance posture",
      "AI copilots delivering Armenian and English guidance for distributors",
      "Productivity heatmaps that track onboarding velocity and support demand"
    ],
    icon: Sparkles
  }
];

const PHASES: Phase[] = [
  {
    label: "01",
    headline: "Discovery alignment",
    description: "Translate governance, finance, and field expectations into a shared blueprint.",
    outputs: [
      "Stakeholder interviews across finance, compliance, product, and field leadership",
      "Process map for onboarding, payouts, and exception handling",
      "Risk intelligence on FX, cash usage, and cross-border ambitions"
    ],
    icon: Building
  },
  {
    label: "02",
    headline: "Connector engineering",
    description: "Configure secure integrations with monitoring and approvals built in.",
    outputs: [
      "Credential vault with rotation alerts and dual-control workflows",
      "Routing table balancing local banks, wallets, and global PSP fallbacks",
      "QA suites validating commissions, promotions, and clawbacks"
    ],
    icon: Layers3
  },
  {
    label: "03",
    headline: "Pilot activation",
    description: "Launch curated cohorts with telemetry, training, and support.",
    outputs: [
      "Command centre aggregating liquidity, settlement, and compliance signals",
      "Localized enablement pack for Yerevan HQ and regional leaders",
      "Variance detection aligning forecasts with live payout performance"
    ],
    icon: TimerReset
  },
  {
    label: "04",
    headline: "Scale & optimise",
    description: "Extend automation, analytics, and expansion initiatives.",
    outputs: [
      "Quarterly optimisation rituals with AI-authored recommendations",
      "Automation backlog prioritised with executives and field councils",
      "Expansion kits for Georgia, Kazakhstan, and diaspora partner launches"
    ],
    icon: Factory
  }
];

const ASSURANCES: Assurance[] = [
  {
    title: "Regulator-ready governance",
    description:
      "Evidence bundles for the Central Bank of Armenia, State Revenue Committee, and banks are collated automatically for rapid submission.",
    icon: Shield
  },
  {
    title: "Revenue assurance foresight",
    description:
      "Predictive analytics surface anomalies across card, wallet, and bank settlements before they impact trust.",
    icon: BarChart3
  },
  {
    title: "Leadership narrative engine",
    description:
      "AI-authored digests translate metrics into strategy, arming executives, investors, and field councils with clarity.",
    icon: PresentationChart
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "How do you manage AMD, USD, and EUR wallets together?",
    answer:
      "Multi-currency wallets apply hedging buffers, track exposure, and deliver consolidated or segmented reporting per stakeholder requirements."
  },
  {
    question: "Can we integrate local wallets like Idram and Telcell?",
    answer:
      "Yes. Native connectors orchestrate wallet, card, and bank flows with reconciliation and dispute workflows included."
  },
  {
    question: "How are compliance updates handled?",
    answer:
      "A dedicated compliance cockpit monitors regulatory bulletins, triggers policy updates, and archives evidence for auditors in minutes."
  },
  {
    question: "What enablement exists for regional distributors?",
    answer:
      "Localized dashboards, nudges, and AI coaching keep regional teams aligned on incentives, compliance, and support SLAs."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Armenia MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Deploy a Central Bank compliant payment ecosystem for Armenia. Cloud MLM Software unites banks, wallets, and analytics to elevate your MLM enterprise.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/armenia", locale)
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

type ArmeniaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function ArmeniaPaymentGatewaysPage({ params }: ArmeniaPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.25rem] border border-amber-100/70 bg-gradient-to-br from-orange-50 via-white to-amber-50 px-6 py-20 text-slate-900 shadow-lg dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-16">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.25),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(252,211,77,0.25),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(249,115,22,0.22),transparent_60%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.35),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(252,211,77,0.35),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(249,115,22,0.28),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-white/70 px-5 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-amber-700 dark:border-amber-500/40 dark:bg-slate-900/70 dark:text-amber-200">
              <LineSegments className="h-4 w-4" />
              Armenia payment acceleration
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Power Armenia’s MLM payments with compliant, insight-rich execution
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-200">
                Cloud MLM Software synchronises Armenian bank partners, wallets, and analytics into one command centre. Deliver dependable payouts, meet regulatory expectations, and empower leaders with actionable intelligence.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-amber-600 text-white hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400">
                <Link href={contactHref}>
                  Architect your Armenia rollout
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-amber-200 bg-white/80 text-amber-800 hover:bg-amber-50 dark:border-amber-500/30 dark:bg-transparent dark:text-amber-100 dark:hover:bg-amber-500/10"
              >
                <Link href={demoHref}>View orchestration demo</Link>
              </Button>
            </div>
          </div>
          <div className="relative isolate grid gap-6 rounded-[2.75rem] border border-amber-100/70 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.2),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(249,115,22,0.25),transparent_60%)]" aria-hidden />
            {STATS.map((stat) => (
              <article key={stat.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-700 dark:bg-amber-400/20 dark:text-amber-200">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">{stat.title}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{stat.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Insights guided by Armenia’s innovation economy
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            From tech-savvy distributors to cross-border expansions, your payment strategy must adapt quickly. These insights inform every decision we make together.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {INSIGHTS.map((insight) => (
            <article
              key={insight.title}
              className="group relative flex h-full flex-col gap-4 rounded-3xl border border-amber-100/70 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/70"
            >
              <div className="absolute inset-0 -z-10 rounded-3xl bg-[conic-gradient(at_top_left,var(--tw-gradient-stops))] from-amber-200 via-transparent to-orange-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-amber-500/25 dark:to-orange-500/25" aria-hidden />
              <insight.icon className="h-8 w-8 text-amber-600 dark:text-amber-300" />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{insight.title}</h3>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-300">{insight.summary}</p>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{insight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-amber-100/70 bg-amber-50/60 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container space-y-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Capabilities tailored for Armenia’s fintech momentum
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Combine regulated banking, digital commerce, and insight-driven enablement with modular building blocks that scale.
              </p>
            </div>
            <div className="rounded-[2.75rem] border border-amber-100/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-xl dark:border-slate-700">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                Executive simulator
              </p>
              <p className="mt-4 text-base text-slate-100">
                Model FX exposure, automation ROI, and field adoption before rolling changes out, then share insight decks with stakeholders instantly.
              </p>
              <Button asChild size="lg" className="mt-6 w-full gap-2 bg-white text-slate-900 hover:bg-slate-100">
                <Link href={pricingHref}>
                  Review deployment options
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {CAPABILITIES.map((capability) => (
              <article
                key={capability.name}
                className="flex h-full flex-col gap-5 rounded-3xl border border-amber-100/70 bg-white/85 p-7 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/70"
              >
                <capability.icon className="h-8 w-8 text-amber-600 dark:text-amber-300" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{capability.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{capability.focus}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {capability.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400" aria-hidden />
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
            Programme cadence tuned for Armenia’s leadership tempo
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Each phase delivers artefacts, telemetry, and enablement so finance, compliance, and field teams stay in sync.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-4">
          {PHASES.map((phase) => (
            <article
              key={phase.label}
              className="flex h-full flex-col gap-4 rounded-3xl border border-amber-100/70 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-700 dark:bg-amber-500/20 dark:text-amber-200">
                  <phase.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-300">
                  {phase.label}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{phase.headline}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{phase.description}</p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {phase.outputs.map((output) => (
                  <li key={output} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-to-r from-amber-400 to-orange-400" aria-hidden />
                    <span>{output}</span>
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
            Assurance engines that safeguard compliance and trust
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Governance, analytics, and communication layers align leadership, regulators, and the field around a shared truth.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {ASSURANCES.map((assurance) => (
              <div
                key={assurance.title}
                className="rounded-3xl border border-amber-100/70 bg-white/85 p-5 text-sm shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70"
              >
                <assurance.icon className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{assurance.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{assurance.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative isolate overflow-hidden rounded-[2.75rem] border border-amber-100/70 bg-gradient-to-br from-orange-100 via-white to-amber-50 p-8 text-slate-900 shadow-xl dark:border-slate-700/60 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_25%,rgba(249,115,22,0.2),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(252,211,77,0.2),transparent_55%)]" aria-hidden />
          <h3 className="text-lg font-semibold">Armenia executive narratives</h3>
          <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
            Weekly digests summarise compliance posture, liquidity, and field sentiment for boards, investors, and diaspora leadership teams.
          </p>
          <dl className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-300">Channels</dt>
              <dd className="mt-2 leading-6">Email, Slack, Teams, and investor-ready PDF decks with annotated insights.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-300">Cadence</dt>
              <dd className="mt-2 leading-6">Daily during launch, weekly during steady state, plus instant alerts for regulatory or FX events.</dd>
            </div>
          </dl>
          <Button asChild size="lg" className="mt-6 w-full gap-2 bg-amber-600 text-white hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400">
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
            Get clarity on the most common questions Armenian executives, compliance leads, and distributor councils raise.
          </p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-amber-100/70 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[3rem] border border-amber-100/70 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 px-6 py-16 text-white shadow-xl dark:border-slate-700/60">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(255,255,255,0.25),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(255,255,255,0.2),transparent_55%)]" aria-hidden />
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Lead Armenia’s modern payment conversation
          </h2>
          <p className="text-base text-amber-50/90">
            Cloud MLM Software helps your organisation deploy compliant, intelligent, and future-ready payouts with Armenia at the centre.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-amber-700 hover:bg-slate-100">
              <Link href={contactHref}>
                Start your Armenia deployment
                <ArrowUpRight className="h-4 w-4 text-amber-600" aria-hidden />
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
