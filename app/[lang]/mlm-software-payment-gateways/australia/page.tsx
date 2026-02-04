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
  BarChartBig,
  Building,
  Compass,
  Factory,
  Gauge,
  Globe,
  Layers,
  Network,
  Radar,
  ShieldCheck,
  Sparkles,
  Lightbulb,
  Waypoints
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  Cpu,
  CurrencyCircleDollar,
  Handshake,
  MapTrifold,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
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

type Stage = {
  step: string;
  headline: string;
  description: string;
  outputs: string[];
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
    label: "Gateway adapters",
    value: "20+",
    detail: "Commonwealth Bank, NAB, ANZ, Westpac, Tyro, Stripe, Adyen, and Australian PSPs with redundancy.",
    icon: Bank
  },
  {
    label: "Compliance cadence",
    value: "24 hrs",
    detail: "Average turnaround for APRA, AUSTRAC, and ASIC updates with automated evidence capture.",
    icon: ShieldCheck
  },
  {
    label: "Operational coverage",
    value: "8 regions",
    detail: "Tailored workflows for metro, regional, and remote distributors across Australia and New Zealand.",
    icon: MapTrifold
  }
];

const INSIGHTS: Insight[] = [
  {
    title: "APRA & AUSTRAC governance",
    subtitle: "Embed regulatory confidence",
    description:
      "Cloud MLM Software harmonises AUSTRAC reporting, APRA guidance, and ASIC obligations in one compliance cockpit with automated artefacts.",
    icon: Lightbulb
  },
  {
    title: "Omnichannel commerce",
    subtitle: "Card, PayID, wallet, and BNPL",
    description:
      "Integrate banking rails, PayID, Afterpay, Zip, and world PSPs with reconciliation that keeps finance teams ahead of exceptions.",
    icon: Cpu
  },
  {
    title: "Distributed leadership",
    subtitle: "From Sydney HQ to field councils",
    description:
      "Role-based dashboards give executives, state leaders, and remote distributors shared visibility on payouts, compliance, and sentiment.",
    icon: UsersThree
  }
];

const TRACKS: Track[] = [
  {
    name: "Regulated bank cloud",
    focus: "APRA-ready settlement",
    bullets: [
      "ISO 20022 file exchange for CBA, NAB, Westpac, and ANZ",
      "Automated withholding and superannuation exports for Australian payroll alignment",
      "Dual-approval credential management with audit logs and rotation reminders"
    ],
    icon: ChartLineUp
  },
  {
    name: "Commerce innovation",
    focus: "PSP, PayID, and BNPL orchestration",
    bullets: [
      "Stripe, Adyen, Tyro, and local PSP connectors with smart routing",
      "PayID and real-time account-to-account flows for fast payouts",
      "BNPL, loyalty, and subscription engines tuned for Australian consumer behaviour"
    ],
    icon: Compass
  },
  {
    name: "Insight & enablement fabric",
    focus: "Analytics that drive action",
    bullets: [
      "Command centre analytics surfacing liquidity, adoption, and compliance posture",
      "AI copilot delivering contextual coaching for field leaders",
      "Sentiment radar blending support data with distributor surveys"
    ],
    icon: Radar
  }
];

const STAGES: Stage[] = [
  {
    step: "01",
    headline: "Strategy calibration",
    description: "Map finance, compliance, and field priorities before configuring tech.",
    outputs: [
      "Stakeholder interviews across finance, compliance, operations, and top distributors",
      "Process mapping for onboarding, payouts, returns, and exception handling",
      "Risk register covering AUSTRAC reporting, PayID adoption, and BNPL exposure"
    ],
    icon: Building
  },
  {
    step: "02",
    headline: "Connector engineering",
    description: "Configure secure integrations, routing rules, and monitoring.",
    outputs: [
      "Credential vault with access policies and rotation alerts",
      "Routing table balancing merchant fees, risk, and uptime",
      "QA automation covering compensation, incentives, and refunds"
    ],
    icon: Layers
  },
  {
    step: "03",
    headline: "Pilot activation",
    description: "Launch guided cohorts with telemetry and change enablement.",
    outputs: [
      "Executive command centre aggregating liquidity, adoption, and compliance",
      "Field enablement pack for metro, regional, and remote councils",
      "Variance detection reconciling forecasted and actual performance"
    ],
    icon: Waypoints
  },
  {
    step: "04",
    headline: "Optimise & scale",
    description: "Expand automation and unlock new channels with confidence.",
    outputs: [
      "Quarterly optimisation sprints with AI-authored narratives",
      "Automation backlog co-prioritised with leadership",
      "Expansion playbooks covering New Zealand, Pacific Islands, and corporate alliances"
    ],
    icon: Factory
  }
];

const CONTROLS: Control[] = [
  {
    title: "Compliance cockpit",
    description:
      "AUSTRAC reporting, APRA guidance, ASIC obligations, and privacy controls unify into one evidence-rich workspace.",
    icon: ShieldCheck
  },
  {
    title: "Revenue assurance",
    description:
      "Predictive analytics surface anomalies across card, PayID, and BNPL settlements before they escalate.",
    icon: BarChartBig
  },
  {
    title: "Leadership storytelling",
    description:
      "AI-authored briefings translate telemetry into strategy for executives, investors, and field councils.",
    icon: Handshake
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "Can we support simultaneous AUD and NZD settlement?",
    answer:
      "Yes. Multi-currency wallets manage cross-Tasman payouts with hedging buffers, consolidated reporting, and APRA-aligned governance."
  },
  {
    question: "Do you integrate PayID and BNPL providers?",
    answer:
      "Cloud MLM Software orchestrates PayID, Afterpay, Zip, and other BNPL flows alongside card and bank rails with unified reconciliation."
  },
  {
    question: "How do compliance teams stay ahead of obligations?",
    answer:
      "Compliance dashboards track AUSTRAC, APRA, and ASIC updates with automated evidence bundling and submission workflows."
  },
  {
    question: "What enablement exists for remote and regional leaders?",
    answer:
      "Offline-first mobile experiences, AI nudges, and telemetry dashboards keep regional and remote leaders informed despite connectivity gaps."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Australia MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Launch an APRA-aligned payment ecosystem for Australia. Cloud MLM Software unites banks, PayID, BNPL, and analytics for high-trust MLM operations.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/australia", locale)
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

type AustraliaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function AustraliaPaymentGatewaysPage({ params }: AustraliaPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.25rem] border border-blue-100/70 bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6 py-20 text-slate-900 shadow-lg dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-16">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(29,161,242,0.25),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(96,165,250,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(29,161,242,0.35),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(96,165,250,0.3),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 px-5 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blue-700 dark:border-blue-500/40 dark:bg-slate-900/70 dark:text-blue-200">
              <Globe className="h-4 w-4" />
              Australia payment orchestration
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Deliver compliant, data-rich MLM payments across Australia
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-200">
                Cloud MLM Software merges banking, PayID, BNPL, and analytics in one command centre. Give your distributors faster payouts while keeping regulators and executives in sync.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-blue-600 text-white hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400">
                <Link href={contactHref}>
                  Plan your Australia rollout
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-200 bg-white/80 text-blue-800 hover:bg-blue-50 dark:border-blue-500/30 dark:bg-transparent dark:text-blue-100 dark:hover:bg-blue-500/10"
              >
                <Link href={demoHref}>Preview orchestration demo</Link>
              </Button>
            </div>
          </div>
          <div className="relative isolate grid gap-6 rounded-[2.75rem] border border-blue-100/70 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.2),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(29,161,242,0.25),transparent_60%)]" aria-hidden />
            {METRICS.map((metric) => (
              <article key={metric.label} className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-700 dark:bg-blue-400/20 dark:text-blue-200">
                  <metric.icon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">{metric.label}</p>
                  <p className="text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{metric.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Insights grounded in Australia’s regulatory and customer landscape
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Navigate compliance complexity, omnichannel expectations, and distributed leadership with a data-backed strategy.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {INSIGHTS.map((insight) => (
            <article
              key={insight.title}
              className="group relative flex h-full flex-col gap-4 rounded-3xl border border-blue-100/70 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/70"
            >
              <div className="absolute inset-0 -z-10 rounded-3xl bg-[conic-gradient(at_top_left,var(--tw-gradient-stops))] from-blue-200 via-transparent to-sky-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-blue-500/25 dark:to-sky-500/25" aria-hidden />
              <insight.icon className="h-8 w-8 text-blue-600 dark:text-blue-300" />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{insight.title}</h3>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">{insight.subtitle}</p>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{insight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-blue-100/70 bg-blue-50/60 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container space-y-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Build the payment track that fits your Australian growth plan
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Combine regulated banking, omnichannel commerce, and insight-driven enablement to deliver resilient payouts.
              </p>
            </div>
            <div className="rounded-[2.75rem] border border-blue-100/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-xl dark:border-slate-700">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                Executive simulator
              </p>
              <p className="mt-4 text-base text-slate-100">
                Model liquidity, compliance risk, and automation ROI before rollout. Share scenarios with stakeholders instantly.
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
                className="flex h-full flex-col gap-5 rounded-3xl border border-blue-100/70 bg-white/85 p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/70"
              >
                <track.icon className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{track.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{track.focus}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {track.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-sky-400" aria-hidden />
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
            Implementation stages keeping finance, compliance, and field aligned
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Disciplined programme management ensures every milestone ships with artefacts, telemetry, and enablement.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-4">
          {STAGES.map((stage) => (
            <article
              key={stage.step}
              className="flex h-full flex-col gap-4 rounded-3xl border border-blue-100/70 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-700 dark:bg-blue-500/20 dark:text-blue-200">
                  <stage.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">
                  {stage.step}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stage.headline}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{stage.description}</p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {stage.outputs.map((output) => (
                  <li key={output} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-to-r from-blue-400 to-sky-400" aria-hidden />
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
            Controls ensuring trust, transparency, and pace
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Governance, analytics, and communications stay in sync with Australia’s fast-moving market.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {CONTROLS.map((control) => (
              <div
                key={control.title}
                className="rounded-3xl border border-blue-100/70 bg-white/85 p-5 text-sm shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70"
              >
                <control.icon className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{control.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{control.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative isolate overflow-hidden rounded-[2.75rem] border border-blue-100/70 bg-gradient-to-br from-sky-100 via-white to-blue-50 p-8 text-slate-900 shadow-xl dark:border-slate-700/60 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.2),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(29,161,242,0.2),transparent_55%)]" aria-hidden />
          <h3 className="text-lg font-semibold">Australia executive briefings</h3>
          <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
            Weekly narratives summarise compliance, liquidity, and distributor sentiment for boards, investors, and leadership councils.
          </p>
          <dl className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">Channels</dt>
              <dd className="mt-2 leading-6">Email, Slack, Teams, and board-ready PDF packs with AI-authored insights.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">Cadence</dt>
              <dd className="mt-2 leading-6">Daily during launch, weekly for steady state, with instant alerts for regulatory or market changes.</dd>
            </div>
          </dl>
          <Button asChild size="lg" className="mt-6 w-full gap-2 bg-blue-600 text-white hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400">
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
            Address the questions Australian executives, compliance leaders, and field councils ask most often.
          </p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-blue-100/70 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[3rem] border border-blue-100/70 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 px-6 py-16 text-white shadow-xl dark:border-slate-700/60">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(255,255,255,0.25),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(255,255,255,0.2),transparent_55%)]" aria-hidden />
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Set the benchmark for MLM payments in Australia
          </h2>
          <p className="text-base text-blue-50/90">
            Partner with Cloud MLM Software to deliver compliant, intelligent, and empowering payment experiences from Sydney to Darwin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-blue-700 hover:bg-slate-100">
              <Link href={contactHref}>
                Start your Australia deployment
                <ArrowUpRight className="h-4 w-4 text-blue-600" aria-hidden />
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
