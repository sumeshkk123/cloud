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
  Anchor,
  ArrowUpRight,
  BarChart3,
  Compass,
  Landmark,
  Radar,
  Sparkles,
  Waves
} from "lucide-react";
import {
  Bank,
  CurrencyCircleDollar,
  GlobeHemisphereWest,
  Handshake,
  ShieldCheck,
  TreePalm
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Signal = {
  label: string;
  metric: string;
  description: string;
  icon: IconType;
};

type Insight = {
  title: string;
  summary: string;
  detail: string;
  icon: IconType;
};

type Stack = {
  name: string;
  focus: string;
  highlights: string[];
  icon: IconType;
};

type Stage = {
  phase: string;
  headline: string;
  description: string;
  deliverables: string[];
  icon: IconType;
};

type Guard = {
  title: string;
  description: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const SIGNALS: Signal[] = [
  {
    label: "Gateway coverage",
    metric: "11 integrations",
    description: "Adapters for CIBC FirstCaribbean, National Commercial Bank of Anguilla, PayPal, and Stripe with settlement orchestration.",
    icon: Anchor
  },
  {
    label: "Regulator response",
    metric: "48 hrs",
    description: "Average turnaround for Eastern Caribbean Central Bank compliance updates once audit packs are shared.",
    icon: Radar
  },
  {
    label: "Distributor mobility",
    metric: "92%",
    description: "Leaders accessing payouts through Cloud MLM Software’s mobile console with offline-ready notifications.",
    icon: Waves
  }
];

const INSIGHTS: Insight[] = [
  {
    title: "Eastern Caribbean currency stewardship",
    summary: "ECCB oversight across eight islands demands precision reporting.",
    detail:
      "We map ECS, USD, and GBP flows so treasury leaders can reconcile cross-border commissions without losing track of FX exposure.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Tourism-driven seasonality",
    summary: "Sales spikes follow Anguilla’s tourism calendar.",
    detail:
      "Dynamic buffers adjust credit limits and payout cycles when visitor-led demand surges, keeping liquidity smooth for local teams.",
    icon: TreePalm
  },
  {
    title: "Diaspora-led leadership",
    summary: "Executives often manage from Miami, Toronto, and London.",
    detail:
      "Role-based dashboards unify compliance alerts, settlement status, and distributor health so remote leaders stay in sync with island operations.",
    icon: GlobeHemisphereWest
  }
];

const STACKS: Stack[] = [
  {
    name: "ECCB banking rail",
    focus: "Secure settlements through local banks",
    highlights: [
      "Automated XML files for CIBC FirstCaribbean and National Commercial Bank",
      "NIS, passport, and utility KYC checklists embedded in enrolment",
      "Daily reconciliation exports matched to ECCB reporting templates"
    ],
    icon: Bank
  },
  {
    name: "Island commerce PSP mix",
    focus: "Card and digital wallets for global shoppers",
    highlights: [
      "Stripe, Adyen, and regional PSP connectors tuned for tourism demand",
      "Chargeback intelligence that learns from booking windows and resort partnerships",
      "Dynamic FX guardrails to protect margins when ECS shifts"
    ],
    icon: Compass
  },
  {
    name: "Field enablement suite",
    focus: "Support island leaders with modern tools",
    highlights: [
      "Mobile-first wallet payouts with WhatsApp and SMS confirmations",
      "Localized incentive boosters for Shoal Bay, Sandy Ground, and The Valley",
      "AI support agent trained on Anguilla compensation policies"
    ],
    icon: Handshake
  }
];

const STAGES: Stage[] = [
  {
    phase: "01",
    headline: "Discovery sail",
    description: "Chart policies and partners before code is committed.",
    deliverables: [
      "Stakeholder maps across finance, compliance, and field leadership",
      "Process audit covering onboarding, payouts, and customer refunds",
      "Risk register highlighting FX swings and travel-season surges"
    ],
    icon: Landmark
  },
  {
    phase: "02",
    headline: "Connector rigging",
    description: "Configure banking, PSP, and wallet flows with guardrails.",
    deliverables: [
      "Credential vault with rotation reminders and approval chain",
      "Routing logic that prioritises local banks while maintaining PSP fallbacks",
      "QA scripts to validate commissions, bonuses, and clawbacks"
    ],
    icon: Sparkles
  },
  {
    phase: "03",
    headline: "Pilot voyage",
    description: "Activate test cohorts with real-time telemetry dashboards.",
    deliverables: [
      "Dual-run reconciliation against legacy spreadsheets",
      "Executive command centre for island and diaspora leadership",
      "Enablement assets for coastal, inland, and offshore distributor teams"
    ],
    icon: BarChart3
  },
  {
    phase: "04",
    headline: "Full fleet scale",
    description: "Expand to new corridors with continuous optimisation.",
    deliverables: [
      "Automation backlog prioritised with revenue leaders",
      "Regulatory update cadence aligned to ECCB circulars",
      "Quarterly business reviews with AI-authored insight packs"
    ],
    icon: Waves
  }
];

const GUARDS: Guard[] = [
  {
    title: "Compliance lighthouse",
    description:
      "AML screening, sanction refreshes, and data retention for Anguilla’s Financial Intelligence Unit are automated with full audit trails.",
    icon: ShieldCheck
  },
  {
    title: "Revenue assurance radar",
    description:
      "Variance detection surfaces mismatched commissions before they hit statements, protecting trust across fast-moving travel seasons.",
    icon: Radar
  },
  {
    title: "Leadership storytelling",
    description:
      "Weekly digests translate payment telemetry into board-ready summaries so you can steer strategy with confidence.",
    icon: Sparkles
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "Can we manage ECS, USD, and GBP wallets together?",
    answer:
      "Yes. Cloud MLM Software supports multi-currency wallets with configurable hedging buffers and consolidated or split reporting by executive preference."
  },
  {
    question: "How quickly can Anguilla compliance teams access audit data?",
    answer:
      "Compliance workspaces store every consent, sanction check, and approval signature, so regulators receive complete artefact packs in minutes."
  },
  {
    question: "What happens when connectivity drops during storms?",
    answer:
      "Offline-first caching queues transactions and distributor updates until connections resume. SMS backup ensures no critical alert is lost."
  },
  {
    question: "Do you integrate with Caribbean accounting systems?",
    answer:
      "Yes. We offer connectors for QuickBooks, Sage, and custom regional ERPs with webhook events to keep ledgers perfectly synced."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Anguilla MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Engineer a compliant, tourism-ready payment ecosystem for Anguilla. Cloud MLM Software orchestrates ECCB banking partners, PSPs, and mobile-first field enablement.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/anguilla", locale)
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

type AnguillaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function AnguillaPaymentGatewaysPage({ params }: AnguillaPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3rem] border border-teal-100/70 bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-6 py-20 text-slate-900 shadow-lg dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(45,212,191,0.25),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(20,184,166,0.2),transparent_60%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(45,212,191,0.35),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(20,184,166,0.25),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200/70 bg-white/70 px-5 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-teal-700 dark:border-teal-500/40 dark:bg-slate-900/70 dark:text-teal-200">
              <Anchor className="h-4 w-4" />
              Anguilla payments blueprint
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Navigate Anguilla’s MLM payouts with coastal precision
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-200">
                Cloud MLM Software unifies ECCB-compliant bank rails, global PSPs, and mobile-ready leader tools. Deliver fast commissions, protect brand trust, and keep every coastal and diaspora team aligned.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-teal-600 text-white hover:bg-teal-500 dark:bg-teal-500 dark:hover:bg-teal-400">
                <Link href={contactHref}>
                  Chart your payout voyage
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-teal-200 bg-white/80 text-teal-800 hover:bg-teal-50 dark:border-teal-500/30 dark:bg-transparent dark:text-teal-100 dark:hover:bg-teal-500/10"
              >
                <Link href={demoHref}>See orchestration in action</Link>
              </Button>
            </div>
          </div>
          <div className="relative isolate overflow-hidden rounded-[2.75rem] border border-teal-100/70 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.2),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.25),transparent_55%)]" aria-hidden />
            <div className="space-y-7">
              {SIGNALS.map((signal) => (
                <div key={signal.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-700 dark:bg-teal-400/20 dark:text-teal-200">
                    <signal.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">
                      {signal.label}
                    </p>
                    <p className="text-2xl font-semibold text-slate-900 dark:text-white">{signal.metric}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{signal.description}</p>
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
            Market intelligence engineered for Anguilla’s economy
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Every recommendation is grounded in local regulation, seasonality, and the leadership structure that drives your network marketing success across the island and diaspora cities.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {INSIGHTS.map((insight) => (
            <article
              key={insight.title}
              className="group relative flex h-full flex-col gap-4 rounded-3xl border border-teal-100/70 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/70"
            >
              <div className="absolute inset-0 -z-10 rounded-3xl bg-[conic-gradient(at_top_left,var(--tw-gradient-stops))] from-teal-200 via-transparent to-sky-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-teal-500/25 dark:to-sky-500/25" aria-hidden />
              <insight.icon className="h-8 w-8 text-teal-600 dark:text-teal-300" />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{insight.title}</h3>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-300">{insight.summary}</p>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{insight.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-start">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Select the gateway stack that elevates every distributor tier
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Combine ECCB-ready banking connectors, global PSPs, and field enablement features. Cloud MLM Software keeps them orchestrated through a single control plane.
            </p>
          </div>
          <div className="rounded-[2.75rem] border border-teal-100/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-xl dark:border-slate-700">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Executive snapshot
            </p>
            <p className="mt-4 text-base text-slate-100">
              Scenario planners model commission demand across tourism seasons, set FX buffers, and publish policy updates instantly to every field leader.
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
          {STACKS.map((stack) => (
            <article
              key={stack.name}
              className="flex h-full flex-col gap-5 rounded-3xl border border-teal-100/70 bg-white/85 p-7 shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/70"
            >
              <stack.icon className="h-8 w-8 text-teal-600 dark:text-teal-300" />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{stack.name}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stack.focus}</p>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {stack.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-teal-400 to-sky-400" aria-hidden />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-teal-100/70 bg-teal-50/60 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Rollout cadence tuned for island realities
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Structured programme management keeps regulators satisfied, finance confident, and distributors energised as we expand from pilot crews to full fleet operations.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-4">
            {STAGES.map((stage) => (
              <article
                key={stage.headline}
                className="flex h-full flex-col gap-4 rounded-3xl border border-white/80 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-700 dark:bg-teal-500/20 dark:text-teal-200">
                    <stage.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-300">
                    {stage.phase}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stage.headline}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{stage.description}</p>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {stage.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-to-r from-teal-400 to-sky-400" aria-hidden />
                      <span>{deliverable}</span>
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
            Governance that inspires regulator and leader confidence
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Built-in controls automate compliance, align finance and operations, and deliver executive storytelling without pulling teams into manual work.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {GUARDS.map((guard) => (
              <div
                key={guard.title}
                className="rounded-3xl border border-teal-100/70 bg-white/85 p-5 text-sm shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70"
              >
                <guard.icon className="h-6 w-6 text-teal-600 dark:text-teal-300" />
                <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{guard.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{guard.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative isolate overflow-hidden rounded-[2.75rem] border border-teal-100/70 bg-gradient-to-br from-sky-100 via-white to-teal-50 p-8 text-slate-900 shadow-xl dark:border-slate-700/60 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_25%,rgba(56,189,248,0.2),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.18),transparent_55%)]" aria-hidden />
          <h3 className="text-lg font-semibold">Anguilla leadership narrative</h3>
          <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
            Weekly digests summarise liquidity, compliance, and distributor sentiment for island offices and diaspora executives.
          </p>
          <dl className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-300">Channels</dt>
              <dd className="mt-2 leading-6">Email, Teams, and Slack-ready summaries with exportable board decks.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-300">Cadence</dt>
              <dd className="mt-2 leading-6">Daily through pilot, then weekly once parity is achieved, with instant alerts for regulatory change.</dd>
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
            Anguilla’s market presents unique governance, liquidity, and connectivity questions. These answers set expectations before you launch.
          </p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-teal-100/70 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[2.75rem] border border-teal-100/70 bg-gradient-to-r from-teal-600 via-sky-500 to-emerald-500 px-6 py-16 text-white shadow-xl dark:border-slate-700/60">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(255,255,255,0.28),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(255,255,255,0.2),transparent_55%)]" aria-hidden />
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Lead Anguilla’s conversation on secure MLM payments
          </h2>
          <p className="text-base text-teal-50/90">
            Partner with Cloud MLM Software to deliver ECCB-aligned payouts, tourism-ready customer journeys, and analytics your executives can act on instantly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-teal-700 hover:bg-slate-100">
              <Link href={contactHref}>
                Start your Anguilla deployment
                <ArrowUpRight className="h-4 w-4 text-teal-600" aria-hidden />
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
