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
  Compass,
  Flame,
  Globe2,
  Layers3,
  Radar,
  Snowflake,
  Sparkles,
  Waypoints
} from "lucide-react";
import {
  Broadcast,
  ChartLineUp,
  Circuitry,
  Cloud,
  LockKey,
  Planet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroFact = {
  title: string;
  metric: string;
  detail: string;
  icon: IconType;
};

type Insight = {
  title: string;
  subtitle: string;
  description: string;
  icon: IconType;
};

type Mode = {
  name: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type Phase = {
  name: string;
  detail: string;
  checklist: string[];
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

const HERO_FACTS: HeroFact[] = [
  {
    title: "Research network nodes",
    metric: "12 stations",
    detail: "McMurdo, Palmer, and private expeditions rely on unified payment visibility and offline-first reporting.",
    icon: Broadcast
  },
  {
    title: "Gateway adapters",
    metric: "14 integrations",
    detail: "Bank and PSP connectors cover logistics partners in New Zealand, Chile, Australia, and South Africa.",
    icon: Circuitry
  },
  {
    title: "Offline resilience",
    metric: "99.98%",
    detail: "Transactions queue safely during satellite downtime and sync instantly when links return.",
    icon: Cloud
  }
];

const INSIGHTS: Insight[] = [
  {
    title: "Polar compliance",
    subtitle: "Treaty-aligned governance",
    description:
      "Cloud MLM Software packages legal, tax, and environmental reporting obligations into a single compliance cockpit, respecting the Antarctic Treaty System.",
    icon: Planet
  },
  {
    title: "Multinational leadership",
    subtitle: "Distributed oversight",
    description:
      "Executives coordinate from Christchurch, Punta Arenas, and Hobart. Role-based dashboards synchronise policy changes in real time across time zones.",
    icon: Globe2
  },
  {
    title: "Expedition supply chains",
    subtitle: "Seasonal logistics",
    description:
      "Treasury teams manage inventory, fuel, and scientific grant payouts. Automated workflows balance currencies across staging hubs and ice operations.",
    icon: Layers3
  }
];

const MODES: Mode[] = [
  {
    name: "Polar command rail",
    focus: "Hardened banking and escrow",
    bullets: [
      "ISO 20022 file exchange with ANZ, Santander, and Standard Bank",
      "Dual control approvals tuned for remote directors and field commanders",
      "Treasury snapshots tracking FX exposure for NZD, USD, CLP, and AUD"
    ],
    icon: LockKey
  },
  {
    name: "Expedition commerce mix",
    focus: "PSP orchestration for grants and sponsorship",
    bullets: [
      "Stripe, Adyen, and PayPal connectors with custom routing by donor region",
      "Chargeback and dispute workflows aligned to scientific grant agreements",
      "Dynamic FX hedging to protect inflows when currency swings spike"
    ],
    icon: Compass
  },
  {
    name: "Field resilience fabric",
    focus: "Offline-first operator experience",
    bullets: [
      "Satellite-aware caching for commissions, reimbursements, and stipends",
      "SMS and radio relay alerts for urgent approvals when data links fall back",
      "AI copilots trained on expedition SOPs for rapid support in extreme scenarios"
    ],
    icon: Radar
  }
];

const PHASES: Phase[] = [
  {
    name: "Polar blueprint",
    detail: "Align multinational governance before deployment.",
    checklist: [
      "Stakeholder matrix across research institutes and logistical partners",
      "Regulation mapping for treaty, tax, and grant obligations",
      "Risk register covering connectivity gaps and weather-driven delays"
    ],
    icon: Snowflake
  },
  {
    name: "Connector hardening",
    detail: "Configure secure, redundant payment flows.",
    checklist: [
      "Credential vault with geo-redundant backups",
      "Routing table prioritising local settlement hubs with PSP fallbacks",
      "Automated QA packs covering stipend, grant, and procurement events"
    ],
    icon: Flame
  },
  {
    name: "Pilot expedition",
    detail: "Launch with analytics and alerts tailored to polar missions.",
    checklist: [
      "Command dashboards surfacing cash position and queue health",
      "Variance detection for grant utilisation and expense claims",
      "Enablement toolkit for station finance leads and expedition chiefs"
    ],
    icon: Waypoints
  },
  {
    name: "Seasonal optimisation",
    detail: "Evolve automation and expand to new partners.",
    checklist: [
      "Quarterly performance reviews with AI-authored insights",
      "Automation backlog for customs, logistics, and scientific reporting",
      "Expansion kits for new national programmes and private expeditions"
    ],
    icon: Sparkles
  }
];

const CONTROLS: Control[] = [
  {
    title: "Audit-ready telemetry",
    description:
      "Every approval, exception, and adjustment is logged with geotags so treaty nations and auditors share one immutable trail.",
    icon: ChartLineUp
  },
  {
    title: "Scenario intelligence",
    description:
      "Predictive analytics model resupply timing, weather windows, and grant burn rate to keep missions fully funded.",
    icon: Radar
  },
  {
    title: "Leadership storytelling",
    description:
      "Narrative briefings synthesise operations into plain-language updates for boards, scientists, and government sponsors.",
    icon: Sparkles
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "Can Cloud MLM Software operate without uninterrupted internet?",
    answer:
      "Yes. Offline-first architecture queues transactions locally, leverages satellite burst transmissions, and reconciles automatically once connectivity stabilises."
  },
  {
    question: "How do you manage compliance across multiple countries?",
    answer:
      "Compliance packs combine treaty requirements, national regulations, and grant conditions into one workspace with alerts for every stakeholder."
  },
  {
    question: "Do you support custom approval hierarchies for expeditions?",
    answer:
      "Approval flows adapt to seasonal staffing. You can assign interim leaders, require dual signatures, or trigger emergency overrides based on location."
  },
  {
    question: "What analytics are available for sponsors and boards?",
    answer:
      "Executive dashboards present cash burn, supply-chain status, and compliance posture with exportable packets for board or sponsor updates."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Antarctica MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Deploy polar-ready payment gateways for Antarctic expeditions. Cloud MLM Software orchestrates multinational compliance, offline resilience, and mission-grade analytics.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/antarctica", locale)
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

type AntarcticaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function AntarcticaPaymentGatewaysPage({
  params
}: AntarcticaPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.5rem] border border-sky-100/60 bg-gradient-to-br from-slate-50 via-white to-cyan-50 px-6 py-20 text-slate-900 shadow-lg dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-16">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(125,211,252,0.25),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(165,243,252,0.25),transparent_55%),radial-gradient(circle_at_50%_85%,rgba(191,219,254,0.25),transparent_65%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.35),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(103,232,249,0.35),transparent_55%),radial-gradient(circle_at_50%_85%,rgba(191,219,254,0.3),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-start">
          <div className="space-y-8 lg:w-3/5">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-white/70 px-5 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-700 dark:border-sky-500/40 dark:bg-slate-900/70 dark:text-sky-200">
              <Snowflake className="h-4 w-4" />
              Antarctic payment orchestration
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Deliver mission-grade payments for Antarctica’s research economy
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-200">
                Cloud MLM Software brings banking partners, PSPs, and offline-ready workflows together so your polar programmes stay compliant, funded, and connected—even when the continent is offline.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-sky-600 text-white hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400">
                <Link href={contactHref}>
                  Architect your polar rollout
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-sky-200 bg-white/80 text-sky-800 hover:bg-sky-50 dark:border-sky-500/30 dark:bg-transparent dark:text-sky-100 dark:hover:bg-sky-500/10"
              >
                <Link href={demoHref}>Explore mission control demo</Link>
              </Button>
            </div>
          </div>
          <div className="relative isolate grid gap-6 rounded-[2.75rem] border border-sky-100/60 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70 lg:w-2/5">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(165,243,252,0.2),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(191,219,254,0.25),transparent_60%)]" aria-hidden />
            {HERO_FACTS.map((fact) => (
              <article key={fact.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-700 dark:bg-sky-400/20 dark:text-sky-200">
                  <fact.icon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">{fact.title}</p>
                  <p className="text-2xl font-semibold text-slate-900 dark:text-white">{fact.metric}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{fact.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Why polar missions trust Cloud MLM Software
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Antarctica’s payments strategy spans continents. We harmonise regulations, logistics, and seasonality so every scientific mission has the funds and governance to succeed.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {INSIGHTS.map((insight) => (
            <article
              key={insight.title}
              className="group relative flex h-full flex-col gap-4 rounded-3xl border border-sky-100/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/70"
            >
              <div className="absolute inset-0 -z-10 rounded-3xl bg-[conic-gradient(at_top_left,var(--tw-gradient-stops))] from-sky-200 via-transparent to-cyan-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-sky-500/25 dark:to-cyan-500/25" aria-hidden />
              <insight.icon className="h-8 w-8 text-sky-600 dark:text-sky-300" />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{insight.title}</h3>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-300">{insight.subtitle}</p>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{insight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-sky-100/60 bg-sky-50/60 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container space-y-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Choose the deployment mode that fits your expedition footprint
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Blend hardened banking rails, PSP orchestration, and field resilience. Every mode inherits Cloud MLM Software’s analytics, compliance, and automation engine.
              </p>
            </div>
            <div className="rounded-[2.75rem] border border-sky-100/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-xl dark:border-slate-700">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                Executive spotlight
              </p>
              <p className="mt-4 text-base text-slate-100">
                Scenario planning highlights cash runway, FX sensitivity, and backlog tasks, arming expedition directors with insight before each season opens.
              </p>
              <Button asChild size="lg" className="mt-6 w-full gap-2 bg-white text-slate-900 hover:bg-slate-100">
                <Link href={pricingHref}>
                  Review licence pathways
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {MODES.map((mode) => (
              <article
                key={mode.name}
                className="flex h-full flex-col gap-5 rounded-3xl border border-sky-100/60 bg-white/85 p-7 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/70"
              >
                <mode.icon className="h-8 w-8 text-sky-600 dark:text-sky-300" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{mode.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{mode.focus}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {mode.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400" aria-hidden />
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
            Programme cadence for polar-grade reliability
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            From blueprint to optimisation, every stage delivers artefacts, telemetry, and enablement so operations remain resilient across extreme environments.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-4">
          {PHASES.map((phase) => (
            <article
              key={phase.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-sky-100/60 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-700 dark:bg-sky-500/20 dark:text-sky-200">
                  <phase.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-300">
                  {phase.name}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{phase.detail}</p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {phase.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400" aria-hidden />
                    <span>{item}</span>
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
            Controls tailored for extreme operations
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Governance, analytics, and communications stay in lockstep with your expedition pace so every stakeholder moves decisively.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {CONTROLS.map((control) => (
              <div
                key={control.title}
                className="rounded-3xl border border-sky-100/60 bg-white/85 p-5 text-sm shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70"
              >
                <control.icon className="h-6 w-6 text-sky-600 dark:text-sky-300" />
                <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{control.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{control.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative isolate overflow-hidden rounded-[2.75rem] border border-sky-100/60 bg-gradient-to-br from-cyan-100 via-white to-sky-50 p-8 text-slate-900 shadow-xl dark:border-slate-700/60 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_25%,rgba(165,243,252,0.2),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(191,219,254,0.2),transparent_55%)]" aria-hidden />
          <h3 className="text-lg font-semibold">Polar leadership briefings</h3>
          <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
            AI-authored narratives summarise compliance posture, resource burn, and distributor morale for government sponsors and corporate boards.
          </p>
          <dl className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-300">Channels</dt>
              <dd className="mt-2 leading-6">Secure email, Teams, Slack, and PDF briefing packs with annotated insights.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-300">Cadence</dt>
              <dd className="mt-2 leading-6">Daily during mission launch, weekly during steady state, with instant alerts for regulatory or weather risks.</dd>
            </div>
          </dl>
          <Button asChild size="lg" className="mt-6 w-full gap-2 bg-sky-600 text-white hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400">
            <Link href={contactHref}>
              Schedule expedition briefing
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Frequently asked questions</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Get clarity on the safeguards, analytics, and integrations purpose-built for remote Antarctic deployments.
          </p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-sky-100/60 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[3rem] border border-sky-100/60 bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-500 px-6 py-16 text-white shadow-xl dark:border-slate-700/60">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(255,255,255,0.25),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(255,255,255,0.2),transparent_55%)]" aria-hidden />
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Pioneer compliant payouts for Antarctica’s frontier economy
          </h2>
          <p className="text-base text-sky-50/90">
            Bring resilience, transparency, and mission-grade analytics to every expedition with Cloud MLM Software.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-sky-700 hover:bg-slate-100">
              <Link href={contactHref}>
                Start your polar deployment
                <ArrowUpRight className="h-4 w-4 text-sky-600" aria-hidden />
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
