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
  BaggageClaim,
  BarChart3,
  Building,
  Compass,
  Flame,
  Lightbulb,
  Route,
  Sparkles,
  Waves
} from "lucide-react";
import {
  Bank,
  CurrencyCircleDollar,
  DeviceMobile,
  GlobeHemisphereWest,
  Handshake,
  ShieldCheck
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  metric: string;
  label: string;
  description: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  summary: string;
  detail: string;
  icon: IconType;
};

type Program = {
  name: string;
  focus: string;
  items: string[];
  icon: IconType;
};

type JourneyStep = {
  phase: string;
  title: string;
  description: string;
  outcomes: string[];
  icon: IconType;
};

type Safeguard = {
  title: string;
  description: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    metric: "10+",
    label: "Bank & PSP adapters",
    description: "Covers Eastern Caribbean Central Bank rails, Republic Bank, FirstCaribbean, and global PSPs.",
    icon: Bank
  },
  {
    metric: "48 hrs",
    label: "Policy refresh",
    description: "Average turnaround for ECCB compliance updates once artefacts are submitted.",
    icon: Lightbulb
  },
  {
    metric: "9",
    label: "Tourism corridors",
    description: "Optimised settlement flows covering St. John’s, English Harbour, and diaspora hubs in NYC and London.",
    icon: Route
  }
];

const PILLARS: Pillar[] = [
  {
    title: "ECCB-ready settlement",
    summary: "Local regulation, global reach.",
    detail:
      "We orchestrate Eastern Caribbean dollar settlements, USD hedging, and transparent audit trails so finance leaders move with confidence.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Tourism-fuelled growth",
    summary: "Peak season agility.",
    detail:
      "Dynamic credit buffers and omnichannel payment flows help your network capture seasonal demand from cruise ships and resorts.",
    icon: BaggageClaim
  },
  {
    title: "Diaspora leadership",
    summary: "Always-on collaboration.",
    detail:
      "Role-based dashboards keep executives in Antigua, Miami, and London aligned on payouts, compliance, and sentiment.",
    icon: GlobeHemisphereWest
  }
];

const PROGRAMS: Program[] = [
  {
    name: "Banking assurance layer",
    focus: "ECCB compliant, globally aware",
    items: [
      "Automated ECS and USD settlement files for Republic Bank and FirstCaribbean",
      "Dynamic sanction screening and identity validation via NIS and passport checks",
      "Treasury cockpit visualising cash buffers across domestic and diaspora markets"
    ],
    icon: Bank
  },
  {
    name: "Merchant & PSP fusion",
    focus: "Omnichannel acceptance",
    items: [
      "Stripe, Adyen, and Caribbean PSP routing with surge-ready scaling",
      "Travel-specific chargeback intelligence with AI dispute summaries",
      "Subscription billing for wellness retreats, resorts, and business memberships"
    ],
    icon: Compass
  },
  {
    name: "Field enablement studio",
    focus: "Empower every tier",
    items: [
      "Mobile-first payouts with WhatsApp confirmations and offline caching",
      "Campaign orchestration tied to Carnival, sailing, and resort calendars",
      "AI concierge providing bilingual support for Antigua & Barbuda field teams"
    ],
    icon: DeviceMobile
  }
];

const JOURNEY: JourneyStep[] = [
  {
    phase: "01",
    title: "Discovery & calibration",
    description: "Map commercial, regulatory, and field priorities before implementation.",
    outcomes: [
      "Stakeholder interviews with finance, compliance, tourism partners, and top distributors",
      "Process audit capturing onboarding, payout, and refund journeys",
      "Risk radar for FX swings, hurricane disruption, and seasonal cash spikes"
    ],
    icon: Building
  },
  {
    phase: "02",
    title: "Connector configuration",
    description: "Build ECCB-compliant integrations with built-in guardrails.",
    outcomes: [
      "Credential vault with dual-control approvals",
      "Routing logic prioritising domestic banks with PSP fallbacks",
      "QA playbook validating commissions, bonuses, and loyalty incentives"
    ],
    icon: Flame
  },
  {
    phase: "03",
    title: "Pilot & optimise",
    description: "Launch guided cohorts with telemetry and enablement.",
    outcomes: [
      "Executive command centre covering liquidity, adoption, and compliance",
      "Distributor enablement kit for St. John’s and diaspora leadership",
      "Variance detection to align forecasts with real-time performance"
    ],
    icon: BarChart3
  },
  {
    phase: "04",
    title: "Scale & evolve",
    description: "Expand to new products, territories, and automation use cases.",
    outcomes: [
      "Quarterly optimisation sprints with AI-authored insights",
      "Roadmap for digital wallets, BNPL, and experiential incentives",
      "Expansion playbooks for Barbuda, cruise partnerships, and corporate tie-ins"
    ],
    icon: Waves
  }
];

const SAFEGUARDS: Safeguard[] = [
  {
    title: "Compliance lighthouse",
    description:
      "ECCB and FIU requirements are embedded with audit-ready artefacts and automated evidence collection.",
    icon: ShieldCheck
  },
  {
    title: "Revenue assurance intelligence",
    description:
      "Predictive alerts surface anomalies across international card payments, chargebacks, and cashless incentives.",
    icon: Sparkles
  },
  {
    title: "Leadership storytelling",
    description:
      "Weekly narrative briefs translate telemetry into board-ready updates for executives and investors.",
    icon: Handshake
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "Can the platform manage ECS and USD payouts simultaneously?",
    answer:
      "Yes. Multi-currency wallets let treasury leaders administer ECS, USD, and GBP settlements with hedging controls and consolidated reporting."
  },
  {
    question: "How do you address seasonality driven by tourism?",
    answer:
      "Credit buffers and incentive automations adjust against live demand signals. Campaign templates align with peak travel windows and cruise schedules."
  },
  {
    question: "What if field teams have limited connectivity?",
    answer:
      "Offline-ready mobile experiences queue transactions, trigger SMS fallbacks, and sync once stable connections resume."
  },
  {
    question: "Do you integrate with regional accounting tools?",
    answer:
      "We provide connectors for QuickBooks, Sage, Xero, and custom finance systems with webhook events for synchronous ledger updates."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Antigua and Barbuda MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Design an ECCB-aligned payment ecosystem for Antigua and Barbuda. Cloud MLM Software blends banking, PSPs, and tourism-ready automation for your MLM network.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/antigua-and-barbuda", locale)
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

type AntiguaAndBarbudaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function AntiguaAndBarbudaPaymentGatewaysPage({
  params
}: AntiguaAndBarbudaPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.25rem] border border-rose-100/70 bg-gradient-to-br from-amber-50 via-white to-rose-50 px-6 py-20 text-slate-900 shadow-lg dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-16">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(249,168,212,0.25),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(253,186,116,0.25),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(253,164,175,0.22),transparent_60%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(249,168,212,0.35),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(253,186,116,0.35),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(253,164,175,0.28),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:items-start">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-white/70 px-5 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-rose-700 dark:border-rose-500/40 dark:bg-slate-900/70 dark:text-rose-200">
              <Lightbulb className="h-4 w-4" />
              Antigua & Barbuda payments vision
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Orchestrate island-ready MLM payments with global polish
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-200">
                Cloud MLM Software fuses ECCB-compliant banking, omnichannel PSPs, and field enablement tuned for Antigua & Barbuda’s tourism economy. Deliver transparent payouts that earn regulator confidence and distributor loyalty.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-rose-600 text-white hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400">
                <Link href={contactHref}>
                  Design your island rollout
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-rose-200 bg-white/80 text-rose-800 hover:bg-rose-50 dark:border-rose-500/30 dark:bg-transparent dark:text-rose-100 dark:hover:bg-rose-500/10"
              >
                <Link href={demoHref}>Preview orchestration demo</Link>
              </Button>
            </div>
          </div>
          <div className="relative isolate grid gap-6 rounded-[2.75rem] border border-rose-100/70 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(253,186,116,0.2),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(251,113,133,0.25),transparent_60%)]" aria-hidden />
            {HIGHLIGHTS.map((highlight) => (
              <article key={highlight.label} className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-700 dark:bg-rose-400/20 dark:text-rose-200">
                  <highlight.icon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-semibold text-slate-900 dark:text-white">{highlight.metric}</p>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">{highlight.label}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{highlight.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            The pillars powering Antigua & Barbuda’s payment strategy
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Each pillar translates local realities into scalable fintech architecture that elevates your distributors at home and abroad.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="group relative flex h-full flex-col gap-4 rounded-3xl border border-rose-100/70 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-rose-300 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/70"
            >
              <div className="absolute inset-0 -z-10 rounded-3xl bg-[conic-gradient(at_top_left,var(--tw-gradient-stops))] from-rose-200 via-transparent to-amber-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-rose-500/25 dark:to-amber-500/25" aria-hidden />
              <pillar.icon className="h-8 w-8 text-rose-600 dark:text-rose-300" />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600 dark:text-rose-300">{pillar.summary}</p>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{pillar.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-rose-100/70 bg-rose-50/60 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container space-y-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Programmes that blend compliance, commerce, and community
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Tailor your payment ecosystem with modular programmes. Each includes playbooks, automation, and reporting to accelerate adoption.
              </p>
            </div>
            <div className="rounded-[2.75rem] border border-rose-100/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-xl dark:border-slate-700">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                Executive insight
              </p>
              <p className="mt-4 text-base text-slate-100">
                Compare programme mixes, FX risk, and automation ROI before launch. Share scenario models with stakeholders in one click.
              </p>
              <Button asChild size="lg" className="mt-6 w-full gap-2 bg-white text-slate-900 hover:bg-slate-100">
                <Link href={pricingHref}>
                  Explore pricing bundles
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {PROGRAMS.map((program) => (
              <article
                key={program.name}
                className="flex h-full flex-col gap-5 rounded-3xl border border-rose-100/70 bg-white/85 p-7 shadow-sm transition hover:-translate-y-1 hover:border-rose-300 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/70"
              >
                <program.icon className="h-8 w-8 text-rose-600 dark:text-rose-300" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{program.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{program.focus}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {program.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-rose-400 to-amber-400" aria-hidden />
                      <span>{item}</span>
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
            Delivery cadence that keeps island operations resilient
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Structured phases ensure compliance, finance, and field teams progress together with full transparency.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-4">
          {JOURNEY.map((step) => (
            <article
              key={step.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-rose-100/70 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-500/15 text-rose-700 dark:bg-rose-500/20 dark:text-rose-200">
                  <step.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-300">
                  {step.phase}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {step.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-to-r from-rose-400 to-amber-400" aria-hidden />
                    <span>{outcome}</span>
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
            Safeguards that protect compliance and trust
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Governance, assurance, and storytelling combine to keep regulators, executives, and field leaders in sync.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {SAFEGUARDS.map((guard) => (
              <div
                key={guard.title}
                className="rounded-3xl border border-rose-100/70 bg-white/85 p-5 text-sm shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70"
              >
                <guard.icon className="h-6 w-6 text-rose-600 dark:text-rose-300" />
                <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{guard.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{guard.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative isolate overflow-hidden rounded-[2.75rem] border border-rose-100/70 bg-gradient-to-br from-amber-100 via-white to-rose-50 p-8 text-slate-900 shadow-xl dark:border-slate-700/60 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_25%,rgba(253,186,116,0.2),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(251,113,133,0.2),transparent_55%)]" aria-hidden />
          <h3 className="text-lg font-semibold">Executive narratives</h3>
          <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
            Weekly and monthly digests convert telemetry into strategic insight for your board, investors, and global leadership team.
          </p>
          <dl className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-300">Channels</dt>
              <dd className="mt-2 leading-6">Email, Slack, Teams, and PDF board packs with AI-generated talking points.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-300">Cadence</dt>
              <dd className="mt-2 leading-6">Daily reporting during go-live, weekly once stabilised, with instant alerts for compliance or FX events.</dd>
            </div>
          </dl>
          <Button asChild size="lg" className="mt-6 w-full gap-2 bg-rose-600 text-white hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400">
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
            Address the top questions leaders ask when migrating Antigua & Barbuda payment operations to Cloud MLM Software.
          </p>
        </div>
        <div className="space-y-6">
          {FAQ_ITEMS.map((faq) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-rose-100/70 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[3rem] border border-rose-100/70 bg-gradient-to-r from-rose-600 via-amber-500 to-rose-500 px-6 py-16 text-white shadow-xl dark:border-slate-700/60">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(255,255,255,0.25),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(255,255,255,0.2),transparent_55%)]" aria-hidden />
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Set the benchmark for MLM payments in Antigua & Barbuda
          </h2>
          <p className="text-base text-rose-50/90">
            Deliver compliant, intelligent, and inspiring payment experiences with Cloud MLM Software as your innovation partner.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-rose-700 hover:bg-slate-100">
              <Link href={contactHref}>
                Start your deployment journey
                <ArrowUpRight className="h-4 w-4 text-rose-600" aria-hidden />
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
