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
  Banknote,
  BarChart3,
  Building2,
  Compass,
  Gauge,
  Globe,
  Layers3,
  Medal,
  Network,
  ShieldCheck,
  Sparkles,
  TimerReset
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  Circuitry,
  CurrencyCircleDollar,
  Handshake,
  LockKey,
  MapTrifold,
  PresentationChart
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
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

type Module = {
  name: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type Phase = {
  step: string;
  heading: string;
  description: string;
  deliverables: string[];
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
    title: "Bank & PSP connectors",
    value: "18",
    detail: "Erste, Raiffeisen, BAWAG, UniCredit Bank Austria, Stripe, Adyen, and EU PSPs with redundancy.",
    icon: Bank
  },
  {
    title: "Regulatory response",
    value: "48 hrs",
    detail: "Average time to ship FMA, PSD2, and AML updates with evidence packs.",
    icon: ShieldCheck
  },
  {
    title: "Language coverage",
    value: "4",
    detail: "German, English, Italian, and Hungarian enablement for Austrian and cross-border teams.",
    icon: Globe
  }
];

const INSIGHTS: Insight[] = [
  {
    title: "FMA & EU compliance",
    summary: "Regulator-ready architecture",
    description:
      "We embed Austrian Financial Market Authority guidelines, PSD2, and GDPR obligations in a single compliance cockpit with automated artefacts.",
    icon: LockKey
  },
  {
    title: "Multi-market commerce",
    summary: "Austria and DACH expansion",
    description:
      "Card, SEPA, wallet, and invoice flows are unified with reconciliation so finance leaders manage domestic and cross-border sales effortlessly.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Premium distributor experience",
    summary: "High-touch enablement",
    description:
      "Role-based dashboards, AI coaching, and multilingual assets keep Vienna HQ and regional leaders accelerating growth together.",
    icon: Medal
  }
];

const MODULES: Module[] = [
  {
    name: "Regulated bank layer",
    focus: "FMA aligned settlement",
    bullets: [
      "ISO 20022 file exchange for Erste, Raiffeisen, and BAWAG",
      "Automated tax and social contribution exports for Austrian regulators",
      "Dual-control credential management with biometric signature support"
    ],
    icon: ChartLineUp
  },
  {
    name: "Commerce orchestration",
    focus: "SEPA, card, wallet, invoice",
    bullets: [
      "Stripe, Adyen, Klarna, and regional PSP routing with fee-smart rules",
      "Subscription, instalment, and loyalty engines tuned for DACH customers",
      "Chargeback intelligence that drafts high-probability win narratives"
    ],
    icon: Compass
  },
  {
    name: "Intelligence & enablement",
    focus: "Analytics that activate leaders",
    bullets: [
      "Executive dashboards showcasing liquidity, compliance, and field sentiment",
      "AI copilot delivering German, English, and Italian enablement cues",
      "Experience scorecards tracking onboarding velocity and support health"
    ],
    icon: Sparkles
  }
];

const PHASES: Phase[] = [
  {
    step: "01",
    heading: "Strategy alignment",
    description: "Collect priorities across governance, finance, and field leadership.",
    deliverables: [
      "Stakeholder blueprint across HQ, regional offices, and compliance",
      "Process audit covering onboarding, payouts, and exception flows",
      "Risk matrix addressing PSD2, AML, and cross-border expansion goals"
    ],
    icon: Building2
  },
  {
    step: "02",
    heading: "Connector engineering",
    description: "Configure secure integrations, approvals, and monitoring.",
    deliverables: [
      "Credential vault with rotation alerts and maker-checker workflows",
      "Routing logic balancing SEPA, card, and invoice rails",
      "QA scripts validating commissions, promotions, and refunds"
    ],
    icon: Layers3
  },
  {
    step: "03",
    heading: "Pilot ignition",
    description: "Launch guided cohorts with telemetry and change enablement.",
    deliverables: [
      "Command centre integrating liquidity, adoption, and compliance signals",
      "Enablement kit for Vienna HQ and regional leadership",
      "Variance detection comparing forecast to live payout data"
    ],
    icon: TimerReset
  },
  {
    step: "04",
    heading: "Optimise & scale",
    description: "Evolve automation and expand into adjacent markets.",
    deliverables: [
      "Quarterly optimisation reviews with AI-authored recommendations",
      "Automation backlog prioritised alongside executive sponsors",
      "Expansion playbooks for DACH, CEE, and premium partner channels"
    ],
    icon: Gauge
  }
];

const ASSURANCES: Assurance[] = [
  {
    title: "Compliance cockpit",
    description:
      "FMA, AML, PSD2, and GDPR evidence is centralised with submission-ready artefacts and audit trails.",
    icon: ShieldCheck
  },
  {
    title: "Revenue assurance intelligence",
    description:
      "Predictive analytics highlight anomalies across SEPA, card, and invoice settlements before they impact trust.",
    icon: BarChart3
  },
  {
    title: "Leadership storytelling",
    description:
      "Narrative briefings summarise liquidity, compliance, and distributor sentiment for boards and investors.",
    icon: PresentationChart
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "Can the platform manage EUR wallets across multiple entities?",
    answer:
      "Yes. Multi-entity wallet management keeps Austrian and EU business units in sync with hedging buffers and consolidated reporting."
  },
  {
    question: "How do you support PSD2 Strong Customer Authentication?",
    answer:
      "Payment flows leverage PSD2-compliant gateways with tokenisation, 3DS2, and adaptive authentication policies built into the rules engine."
  },
  {
    question: "Do you integrate invoice and SEPA direct debit processes?",
    answer:
      "Cloud MLM Software orchestrates SEPA credit/debit, invoice automation, and reconciliation with ERP connectors for total visibility."
  },
  {
    question: "What about multilingual field enablement?",
    answer:
      "Dashboards, notifications, and AI coaching ship in German, English, Italian, and Hungarian to serve Austria and neighbouring teams."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Austria MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Deploy an FMA-compliant payment ecosystem for Austria. Cloud MLM Software unites banks, SEPA, PSPs, and analytics to elevate your MLM enterprise.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/austria", locale)
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

type AustriaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function AustriaPaymentGatewaysPage({ params }: AustriaPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.25rem] border border-rose-100/70 bg-gradient-to-br from-slate-50 via-white to-rose-50 px-6 py-20 text-slate-900 shadow-lg dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-16">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(244,63,94,0.2),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(251,113,133,0.25),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(244,114,182,0.22),transparent_60%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(244,63,94,0.3),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(251,113,133,0.35),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(244,114,182,0.28),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-white/70 px-5 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-rose-700 dark:border-rose-500/40 dark:bg-slate-900/70 dark:text-rose-200">
              <Network className="h-4 w-4" />
              Austria payment transformation
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Run Austria’s MLM payments with regulator confidence and executive clarity
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-200">
                Cloud MLM Software unifies banking partners, SEPA flows, and multilingual analytics. Deliver fast, compliant payouts while empowering distributors and leadership with actionable insights.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-rose-600 text-white hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400">
                <Link href={contactHref}>
                  Design your Austria rollout
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
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(251,113,133,0.2),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(244,114,182,0.25),transparent_60%)]" aria-hidden />
            {METRICS.map((metric) => (
              <article key={metric.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-700 dark:bg-rose-400/20 dark:text-rose-200">
                  <metric.icon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300">{metric.title}</p>
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
            Insights tailored for Austria’s premium market positioning
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Align to regulatory expectations, cross-border commerce ambitions, and the elevated experience Austrian distributors demand.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {INSIGHTS.map((insight) => (
            <article
              key={insight.title}
              className="group relative flex h-full flex-col gap-4 rounded-3xl border border-rose-100/70 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-rose-300 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/70"
            >
              <div className="absolute inset-0 -z-10 rounded-3xl bg-[conic-gradient(at_top_left,var(--tw-gradient-stops))] from-rose-200 via-transparent to-emerald-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-rose-500/25 dark:to-emerald-500/25" aria-hidden />
              <insight.icon className="h-8 w-8 text-rose-600 dark:text-rose-300" />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{insight.title}</h3>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600 dark:text-rose-300">{insight.summary}</p>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{insight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-rose-100/70 bg-rose-50/60 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container space-y-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Assemble modules that balance compliance, commerce, and experience
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300">
                Select the modules that match your growth thesis. Each inherits Cloud MLM Software’s analytics, automation, and security foundation.
              </p>
            </div>
            <div className="rounded-[2.75rem] border border-rose-100/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-slate-100 shadow-xl dark:border-slate-700">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                Executive simulator
              </p>
              <p className="mt-4 text-base text-slate-100">
                Model liquidity, compliance effort, and automation payoff before committing. Collaborate with leadership through shared scenario dashboards.
              </p>
              <Button asChild size="lg" className="mt-6 w-full gap-2 bg-white text-slate-900 hover:bg-slate-100">
                <Link href={pricingHref}>
                  Review deployment pathways
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {MODULES.map((module) => (
              <article
                key={module.name}
                className="flex h-full flex-col gap-5 rounded-3xl border border-rose-100/70 bg-white/85 p-7 shadow-sm transition hover:-translate-y-1 hover:border-rose-300 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/70"
              >
                <module.icon className="h-8 w-8 text-rose-600 dark:text-rose-300" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{module.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{module.focus}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {module.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-rose-400 to-emerald-400" aria-hidden />
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
            Programme cadence aligned to Austria’s governance tempo
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Each phase ships with artefacts, telemetry, and enablement so finance, compliance, and the field stay aligned.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-4">
          {PHASES.map((phase) => (
            <article
              key={phase.step}
              className="flex h-full flex-col gap-4 rounded-3xl border border-rose-100/70 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-500/15 text-rose-700 dark:bg-rose-500/20 dark:text-rose-200">
                  <phase.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-300">
                  {phase.step}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{phase.heading}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{phase.description}</p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {phase.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-6 rounded-full bg-gradient-to-r from-rose-400 to-emerald-400" aria-hidden />
                    <span>{deliverable}</span>
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
            Assurance engines that protect trust and momentum
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Governance, assurance, and executive storytelling align your Austrian leadership teams and regulators around the same truth.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {ASSURANCES.map((assurance) => (
              <div
                key={assurance.title}
                className="rounded-3xl border border-rose-100/70 bg-white/85 p-5 text-sm shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70"
              >
                <assurance.icon className="h-6 w-6 text-rose-600 dark:text-rose-300" />
                <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{assurance.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{assurance.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative isolate overflow-hidden rounded-[2.75rem] border border-rose-100/70 bg-gradient-to-br from-rose-100 via-white to-emerald-50 p-8 text-slate-900 shadow-xl dark:border-slate-700/60 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_25%,rgba(251,113,133,0.18),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(52,211,153,0.18),transparent_55%)]" aria-hidden />
          <h3 className="text-lg font-semibold">Austria executive narratives</h3>
          <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
            Weekly digests summarise compliance posture, liquidity movements, and distributor sentiment for boards, investors, and partner councils.
          </p>
          <dl className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-300">Channels</dt>
              <dd className="mt-2 leading-6">Email, Teams, Slack, and board-ready PDF packs with AI-authored insights.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-300">Cadence</dt>
              <dd className="mt-2 leading-6">Daily during rollout, weekly thereafter, with instant alerts for regulatory or FX changes.</dd>
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
            Answers to the questions Austrian executives, compliance leads, and distributor councils raise most often.
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

      <section className="relative overflow-hidden rounded-[3rem] border border-rose-100/70 bg-gradient-to-r from-rose-600 via-emerald-500 to-rose-500 px-6 py-16 text-white shadow-xl dark:border-slate-700/60">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(255,255,255,0.25),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(255,255,255,0.2),transparent_55%)]" aria-hidden />
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Lead Austria’s movement toward intelligent MLM payments
          </h2>
          <p className="text-base text-rose-50/90">
            Partner with Cloud MLM Software to deliver compliant, luxurious, and insight-driven payment experiences across Austria and the DACH region.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-rose-700 hover:bg-slate-100">
              <Link href={contactHref}>
                Start your Austria deployment
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
