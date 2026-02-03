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
  BarChart4,
  Compass,
  Gauge,
  Globe2,
  Lightbulb,
  Map,
  Megaphone,
  Sparkles,
  Waves
} from "lucide-react";
import {
  Bank,
  ChatCircle,
  CurrencyCircleDollar,
  DeviceMobile,
  Handshake,
  ShieldCheck,
  TreePalm
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  heading: string;
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

type Blueprint = {
  name: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type Milestone = {
  step: string;
  title: string;
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

const METRICS: Metric[] = [
  {
    heading: "Gateway coverage",
    value: "12 integrations",
    detail: "CIBC FirstCaribbean, Aruba Bank, Caribbean Mercantile Bank, Stripe, Adyen, and more with built-in redundancy.",
    icon: Bank
  },
  {
    heading: "Compliance readiness",
    value: "48 hours",
    detail: "Average turnaround for Centrale Bank van Aruba and FIU reporting updates.",
    icon: ShieldCheck
  },
  {
    heading: "Tourism corridor uptime",
    value: "99.97%",
    detail: "High-availability architecture covering visitor hotspots and diaspora leadership hubs.",
    icon: TreePalm
  }
];

const INSIGHTS: Insight[] = [
  {
    title: "CBA regulation alignment",
    subtitle: "Licensing, AML, and FX guardrails",
    description:
      "Cloud MLM Software embeds Centrale Bank van Aruba requirements, FIU reporting, and FX controls so your payout strategy stays audit-ready.",
    icon: Lightbulb
  },
  {
    title: "Tourism-driven commerce",
    subtitle: "Seasonal peaks and VIP clientele",
    description:
      "Dynamic credit buffers, high-limit approval chains, and concierge payouts support distributors operating in hotels, casinos, and travel hubs.",
    icon: Waves
  },
  {
    title: "Diaspora leadership coordination",
    subtitle: "New York, Miami, Amsterdam",
    description:
      "Role-based dashboards align onshore and offshore leaders with live telemetry, compliance updates, and sentiment analytics.",
    icon: Globe2
  }
];

const BLUEPRINTS: Blueprint[] = [
  {
    name: "Regulated bank layer",
    focus: "CBA-compliant settlements",
    bullets: [
      "Automated settlement files for CIBC FirstCaribbean, Aruba Bank, and Caribbean Mercantile Bank",
      "NVB account validation, KYC evidence, and sanction refreshes",
      "Treasury cockpit visualising ARF requirements, FX buffers, and liquidity"
    ],
    icon: Anchor
  },
  {
    name: "Commerce acceleration",
    focus: "Cards, wallets, and experiential sales",
    bullets: [
      "Stripe, Adyen, PayPal, and Caribbean PSP routing with smart failover",
      "Event-based incentives tied to carnival, resort, and cruise itineraries",
      "Chargeback intelligence with AI-crafted replies and win-rate analytics"
    ],
    icon: Compass
  },
  {
    name: "Field enablement studio",
    focus: "Mobile-first distributor empowerment",
    bullets: [
      "Instant-access wallets with WhatsApp, SMS, and email confirmations",
      "Geo-aware campaigns around Oranjestad, Palm Beach, and San Nicolas",
      "AI concierge providing multilingual coaching and escalation triage"
    ],
    icon: DeviceMobile
  }
];

const MILESTONES: Milestone[] = [
  {
    step: "01",
    title: "Vision alignment",
    description: "Translate governance, finance, and tourism realities into a unified blueprint.",
    outputs: [
      "Stakeholder map including finance, compliance, tourism partners, and distributor leadership",
      "Process audit covering onboarding, payouts, refunds, and loyalty programmes",
      "Risk canvas highlighting FX exposure, seasonality, and VIP customer expectations"
    ],
    icon: Map
  },
  {
    step: "02",
    title: "Connector configuration",
    description: "Engineer compliant integrations and routing logic with guardrails.",
    outputs: [
      "Credential vault with dual approvals and rotation timelines",
      "Routing table balancing bank rails and PSP fallbacks by risk score",
      "QA suites validating commissions, incentives, and hospitality partnerships"
    ],
    icon: Gauge
  },
  {
    step: "03",
    title: "Guided launch",
    description: "Bring live cohorts on board with telemetry and enablement.",
    outputs: [
      "Executive command centre tracking liquidity, adoption, and compliance",
      "Distributor enablement kit for resort, retail, and remote teams",
      "Variance detection aligning forecasts with live payout data"
    ],
    icon: Megaphone
  },
  {
    step: "04",
    title: "Optimise & expand",
    description: "Scale automation, analytics, and new corridor opportunities.",
    outputs: [
      "Quarterly innovation sprints with AI-authored recommendations",
      "Automation backlog prioritised with leadership councils",
      "Expansion playbooks for cruise partners, corporate sales, and diaspora hubs"
    ],
    icon: BarChart4
  }
];

const ASSURANCES: Assurance[] = [
  {
    title: "Compliance lighthouse",
    description:
      "Centrale Bank van Aruba, FIU, and tax evidence collects automatically with submission-ready artefacts and approval trails.",
    icon: ShieldCheck
  },
  {
    title: "Revenue assurance intelligence",
    description:
      "Predictive analytics scan card, wallet, and bank streams for anomalies so finance teams act before trust erodes.",
    icon: Sparkles
  },
  {
    title: "Leadership storytelling",
    description:
      "Narrative briefings summarise payout health, tourism-driven demand, and sentiment for executives and investors.",
    icon: ChatCircle
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "Can Cloud MLM Software manage florin and USD wallets together?",
    answer:
      "Yes. Multi-currency wallets allow treasury teams to define hedging buffers, manage liquidity, and publish consolidated or segmented ledgers in seconds."
  },
  {
    question: "How quickly can compliance teams access audit evidence?",
    answer:
      "Compliance workspaces archive every KYC record, sanction screen, and approval signature, enabling regulator-ready packets on demand."
  },
  {
    question: "Do you support tourism-driven incentive campaigns?",
    answer:
      "Campaign engines coordinate incentives around carnival, resort seasons, and cruise schedules with automated reporting for ROI tracking."
  },
  {
    question: "What about distributors working from cruise ships or remote areas?",
    answer:
      "Offline caching and multi-channel notifications ensure payouts and alerts reach mobile leaders even with intermittent connectivity."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Aruba MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Create a tourism-ready, regulator-aligned payment network for Aruba. Cloud MLM Software orchestrates banks, PSPs, and field enablement in one platform.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/aruba", locale)
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

type ArubaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function ArubaPaymentGatewaysPage({
  params
}: ArubaPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.25rem] border border-teal-100/70 bg-gradient-to-br from-sky-50 via-white to-cyan-50 px-6 py-20 text-slate-900 shadow-lg dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-16">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.25),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(14,165,233,0.22),transparent_60%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.35),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(14,165,233,0.28),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200/70 bg-white/70 px-5 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-teal-700 dark:border-teal-500/40 dark:bg-slate-900/70 dark:text-teal-200">
              <Anchor className="h-4 w-4" />
              Aruba payment orchestration
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Deliver island-grade MLM payments with global polish
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-200">
                Cloud MLM Software unites bank partners, tourism-ready commerce, and mobile-first enablement so Aruba’s distributors and executives stay perfectly aligned.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-teal-600 text-white hover:bg-teal-500 dark:bg-teal-500 dark:hover:bg-teal-400">
                <Link href={contactHref}>
                  Design your Aruba rollout
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-teal-200 bg-white/80 text-teal-800 hover:bg-teal-50 dark:border-teal-500/30 dark:bg-transparent dark:text-teal-100 dark:hover:bg-teal-500/10"
              >
                <Link href={demoHref}>Preview orchestration demo</Link>
              </Button>
            </div>
          </div>
          <div className="relative isolate grid gap-6 rounded-[2.75rem] border border-teal-100/70 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.2),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.25),transparent_60%)]" aria-hidden />
            {METRICS.map((metric) => (
              <article key={metric.heading} className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-700 dark:bg-teal-400/20 dark:text-teal-200">
                  <metric.icon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">{metric.heading}</p>
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
            Insights shaped by Aruba’s tourism and diaspora economy
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            We translate local regulations and tourism-season dynamics into a fintech strategy that scales effortlessly.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {INSIGHTS.map((insight) => (
            <article
              key={insight.title}
              className="group relative flex h-full flex-col gap-4 rounded-3xl border border-teal-100/70 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/70"
            >
              <div className="absolute inset-0 -z-10 rounded-3xl bg-[conic-gradient(at_top_left,var(--tw-gradient-stops))] from-teal-200 via-transparent to-cyan-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-teal-500/25 dark:to-cyan-500/25" aria-hidden />
              <insight.icon className="h-8 w-8 text-teal-600 dark:text-teal-300" />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{insight.title}</h3>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-300">{insight.subtitle}</p>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{insight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-teal-100/70 bg-teal-50/60 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container space-y-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Blueprints that combine compliance, commerce, and field momentum
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Assemble your ideal deployment from regulated banking, tourism commerce, and distributor enablement modules.
              </p>
            </div>
            <div className="rounded-[2.75rem] border border-teal-100/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-xl dark:border-slate-700">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                Executive simulator
              </p>
              <p className="mt-4 text-base text-slate-100">
                Model cash flow, tourism surges, and automation ROI before rolling updates. Share insight decks with leadership instantly.
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
            {BLUEPRINTS.map((blueprint) => (
              <article
                key={blueprint.name}
                className="flex h-full flex-col gap-5 rounded-3xl border border-teal-100/70 bg-white/85 p-7 shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/70"
              >
                <blueprint.icon className="h-8 w-8 text-teal-600 dark:text-teal-300" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{blueprint.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{blueprint.focus}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {blueprint.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-teal-400 to-sky-400" aria-hidden />
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
            Implementation cadence tuned for Aruba’s leadership pace
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Structured milestones keep regulators, finance teams, and distributors aligned from discovery to optimisation.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-4">
          {MILESTONES.map((milestone) => (
            <article
              key={milestone.step}
              className="flex h-full flex-col gap-4 rounded-3xl border border-teal-100/70 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-700 dark:bg-teal-500/20 dark:text-teal-200">
                  <milestone.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-300">
                  {milestone.step}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{milestone.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{milestone.description}</p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {milestone.outputs.map((output) => (
                  <li key={output} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-to-r from-teal-400 to-sky-400" aria-hidden />
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
            Assurance layers for regulators, executives, and the field
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Governance, revenue assurance, and story-driven communication keep every stakeholder aligned on progress.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {ASSURANCES.map((assurance) => (
              <div
                key={assurance.title}
                className="rounded-3xl border border-teal-100/70 bg-white/85 p-5 text-sm shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70"
              >
                <assurance.icon className="h-6 w-6 text-teal-600 dark:text-teal-300" />
                <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{assurance.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{assurance.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative isolate overflow-hidden rounded-[2.75rem] border border-teal-100/70 bg-gradient-to-br from-cyan-100 via-white to-teal-50 p-8 text-slate-900 shadow-xl dark:border-slate-700/60 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_25%,rgba(56,189,248,0.2),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(45,212,191,0.2),transparent_55%)]" aria-hidden />
          <h3 className="text-lg font-semibold">Aruba executive narratives</h3>
          <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
            Weekly digests summarise compliance posture, liquidity, and distributor sentiment for island HQ and diaspora leadership teams.
          </p>
          <dl className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-300">Channels</dt>
              <dd className="mt-2 leading-6">Email, Slack, Teams, and board-ready PDF packs with AI-authored insights.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-300">Cadence</dt>
              <dd className="mt-2 leading-6">Daily during launch, weekly during steady state, plus instant alerts for regulatory or FX changes.</dd>
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
            Practical answers to the most common questions Aruba-focused executives and leaders ask.
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

      <section className="relative overflow-hidden rounded-[3rem] border border-teal-100/70 bg-gradient-to-r from-teal-600 via-sky-500 to-cyan-500 px-6 py-16 text-white shadow-xl dark:border-slate-700/60">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(255,255,255,0.25),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(255,255,255,0.2),transparent_55%)]" aria-hidden />
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Set the standard for MLM payouts in Aruba
          </h2>
          <p className="text-base text-teal-50/90">
            Partner with Cloud MLM Software to deliver compliant, tourism-ready, and insight-rich payment experiences across the island and diaspora.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-teal-700 hover:bg-slate-100">
              <Link href={contactHref}>
                Start your Aruba deployment
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
