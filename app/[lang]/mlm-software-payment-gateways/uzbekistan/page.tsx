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
  Globe2,
  Layers3,
  Network,
  Radar,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  ChatsTeardrop,
  GlobeHemisphereEast,
  SealCheck,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroStat = {
  label: string;
  metric: string;
  description: string;
  icon: IconType;
};

type PlayCard = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type LocalRail = {
  name: string;
  focus: string;
  notes: string;
  icon: IconType;
};

type IntegrationStage = {
  step: string;
  title: string;
  summary: string;
  deliverables: string[];
  icon: IconType;
};

type FAQItem = {
  question: string;
  answer: string;
};

const HERO_STATS: HeroStat[] = [
  {
    label: "Global PSP bundle",
    metric: "7 connectors",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen remain orchestrated exactly as promised on the legacy experience.",
    icon: Bank
  },
  {
    label: "Local rails ready",
    metric: "Uzcard + Humo",
    description:
      "We combine Uzbekistan’s national card networks with Payme, Click, Apelsin, and Kapitalbank merchant acquiring so commissions keep moving.",
    icon: GlobeHemisphereEast
  },
  {
    label: "AI copilots",
    metric: "24/7 oversight",
    description:
      "Predict settlement delays, AML escalations, and distributor churn with AI signals routed to treasury and field leadership.",
    icon: Sparkles
  }
];

const PLAYBOOK: PlayCard[] = [
  {
    title: "Unified PSP control plane",
    description:
      "All gateways referenced in the original content land inside a single Cloud MLM Software orchestration layer tailored for Uzbekistan.",
    bullets: [
      "Sandbox-to-production readiness for PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen",
      "Tokenised vaulting to reuse cards across autoships, renewals, and corporate bulk orders",
      "Real-time routing that favours best-available interchange without adding friction"
    ],
    icon: Network
  },
  {
    title: "Uzbekistan-first checkout journeys",
    description:
      "Blend domestic rails and super-app wallets with the global PSP stack so local distributors feel native trust at every step.",
    bullets: [
      "Humo and Uzcard dual-presentment with fallback to Payme, Click, and Apelsin e-wallets",
      "In-app copy writing tuned to People’s Democratic Republic of Uzbekistan regulatory language",
      "Instant SMS confirmations and Telegram alerts for high-value distributor purchases"
    ],
    icon: Globe2
  },
  {
    title: "Governance, AML, and assurance",
    description:
      "Launch with evidence packs that satisfy the Central Bank of Uzbekistan and enterprise audit teams.",
    bullets: [
      "Maker-checker approvals across payouts, refunds, and incentive adjustments",
      "Screening pipelines for sanctions, AML, and politically exposed persons",
      "Tamper-proof audit trails and retention policies mapped to Uzbek data mandates"
    ],
    icon: ShieldCheck
  }
];

const LOCAL_RAILS: LocalRail[] = [
  {
    name: "Uzcard & Humo",
    focus: "National card schemes",
    notes:
      "Synchronous BIN detection routes transactions through the right network while preserving chargeback telemetry for finance teams.",
    icon: SealCheck
  },
  {
    name: "Payme & Apelsin",
    focus: "Super-app wallets",
    notes:
      "Deep links and QR invoicing help direct sellers convert buyers on social commerce and doorstep deliveries.",
    icon: ChatsTeardrop
  },
  {
    name: "Click & Paynet",
    focus: "Utility-first payments",
    notes:
      "Recurring autoships piggyback on the same rails that households already trust for utilities, keeping churn low.",
    icon: UsersThree
  },
  {
    name: "Kapitalbank & Ipak Yuli Bank",
    focus: "Acquiring partners",
    notes:
      "Treasury dashboards reconcile local settlement files with multicurrency ledgers and export IFRS-ready statements.",
    icon: ChartLineUp
  }
];

const INTEGRATION_STAGES: IntegrationStage[] = [
  {
    step: "01",
    title: "Discovery aligned to Uzbekistan realities",
    summary:
      "Co-design the payment foundation with headquarters, Tashkent leadership, and top distributors before we activate any PSP credentials.",
    deliverables: [
      "Current-state mapping across commissions, wallet top-ups, and inventory payments",
      "Gateway evaluation matrix spanning PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen",
      "Regulatory intake checklist covering the Central Bank of Uzbekistan and national data residency rules"
    ],
    icon: Layers3
  },
  {
    step: "02",
    title: "UX blueprint & localisation",
    summary:
      "Prototype bilingual flows and channel-specific journeys that embed the legacy promise: seamless ways to accept payments across Uzbekistan.",
    deliverables: [
      "Mobile-first checkout variants with Humo, Uzcard, Payme, Click, and cash-to-digital options",
      "Copywriting library referencing People’s Democratic Republic of Uzbekistan terminology",
      "AI-generated training scripts for field leaders and customer support"
    ],
    icon: Radar
  },
  {
    step: "03",
    title: "Controlled launch & telemetry",
    summary:
      "Release to pilot teams with AI copilots monitoring approvals, settlements, and AML hits in real time.",
    deliverables: [
      "Command-centre dashboards combining PSP events, local bank settlement files, and Cloud MLM compensation data",
      "Alerting for declined transactions, FX spreads, and fraud scoring anomalies",
      "Hypercare rituals with daily syncs between treasury, compliance, and field captains"
    ],
    icon: Bank
  },
  {
    step: "04",
    title: "Scale, optimise, and expand corridors",
    summary:
      "Extend the playbook beyond Uzbekistan while conserving the compliance guardrails and AI insights that launch produced.",
    deliverables: [
      "Quarterly optimisation sprints prioritised with finance and operations",
      "Scenario planning for Kazakhstan, Kyrgyzstan, and UAE expansions",
      "Benchmark reports that highlight retention, chargeback, and payout speed trends"
    ],
    icon: UsersThree
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Which payment gateways are orchestrated for Uzbekistan?",
    answer:
      "The same stack highlighted on the legacy site—PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen—runs natively alongside Uzcard, Humo, Payme, Click, Apelsin, Paynet, and leading acquiring banks."
  },
  {
    question: "How does Cloud MLM Software support compliance in the People’s Democratic Republic of Uzbekistan?",
    answer:
      "We package AML screening, sanctions checks, data retention policies, and maker-checker approvals in workflows tailored to the Central Bank of Uzbekistan. Audit trails, document vaults, and AI-written evidence packs reduce the burden on finance leads."
  },
  {
    question: "Can AI really monitor settlements and distributor health 24/7?",
    answer:
      "Yes. AI copilots review conversion rates, settlement timing, refund velocity, and churn indicators. They recommend interventions—coaching, promotions, or risk reviews—before distributors or customers feel friction."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Uzbekistan MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Launch compliant MLM payment journeys in Uzbekistan with Cloud MLM Software. Orchestrate PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and local rails like Uzcard, Humo, Payme, and Click with AI oversight.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/uzbekistan", locale)
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

type UzbekistanPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function UzbekistanPaymentGatewaysPage({ params }: UzbekistanPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative isolate overflow-hidden rounded-[3rem] border border-cyan-200/70 bg-gradient-to-br from-cyan-50 via-white to-emerald-100 px-6 py-20 shadow-sm dark:border-cyan-500/40 dark:from-slate-950 dark:via-slate-920 dark:to-slate-900 sm:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(8,145,178,0.28),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(14,116,144,0.24),transparent_55%),radial-gradient(circle_at_40%_85%,rgba(16,185,129,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(8,145,178,0.35),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(14,165,233,0.3),transparent_50%),radial-gradient(circle_at_45%_82%,rgba(16,185,129,0.35),transparent_60%)]" aria-hidden />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)] lg:items-center">
          <div className="space-y-8 text-slate-900 dark:text-slate-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/70 bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-800 dark:border-cyan-400/40 dark:bg-slate-900/70 dark:text-cyan-200">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              Uzbekistan payment gateways
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Uzbekistan MLM payment gateways orchestrated for growth and governance
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Uzbekistan – UZ start here. Cloud MLM Software has already built great systems for the greatest companies, and we now align that pedigree with Uzbekistan’s local rails and the global PSP bundle highlighted on the legacy experience.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-cyan-600 text-white hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400"
              >
                <Link href={contactHref}>
                  Talk with an Uzbekistan payments architect
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cyan-200/80 text-cyan-800 hover:bg-white/60 dark:border-cyan-400/40 dark:text-cyan-200 dark:hover:bg-slate-900/70"
              >
                <Link href={demoHref}>See Cloud MLM Software in action</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/80 bg-white/80 px-3 py-1 dark:border-cyan-400/40 dark:bg-slate-900/60">
                <Sparkles className="h-4 w-4 text-cyan-600 dark:text-cyan-300" aria-hidden />
                AI copilots watch conversions, settlements, and AML alerts round-the-clock.
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/80 px-3 py-1 dark:border-emerald-400/40 dark:bg-slate-900/60">
                <Globe2 className="h-4 w-4 text-emerald-600 dark:text-emerald-300" aria-hidden />
                PSP bundle includes PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, and Adyen.
              </span>
            </div>
          </div>
          <aside className="rounded-[2.25rem] border border-white/60 bg-white/80 p-8 shadow-lg backdrop-blur md:p-10 dark:border-slate-700/60 dark:bg-slate-900/70">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              What the launch cockpit surfaces
            </h2>
            <div className="mt-6 space-y-6">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-start gap-4 rounded-2xl border border-cyan-100/80 bg-white/70 p-4 dark:border-slate-700/60 dark:bg-slate-900/60"
                >
                  <stat.icon className="h-6 w-6 text-cyan-600 dark:text-cyan-300" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-200">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">
                      {stat.metric}
                    </p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button
              asChild
              size="lg"
              className="mt-8 w-full gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-cyan-500 dark:hover:bg-cyan-400"
            >
              <Link href={pricingHref}>
                Review Uzbekistan implementation packs
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:border-cyan-500/40 dark:text-cyan-200">
            <Network className="h-4 w-4" aria-hidden />
            Uzbekistan gateway launch map
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A modern payment operations blueprint for MLM leaders across Uzbekistan
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Every card below translates the legacy promise—listing the supported payment gateways—into
            a detailed, AI-enabled operating model. Teams in Tashkent, Samarkand, Namangan, and beyond
            can launch with confidence and iterate quickly.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {PLAYBOOK.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-cyan-100/80 bg-white/85 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <card.icon className="h-6 w-6 text-cyan-600 dark:text-cyan-300" aria-hidden />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{card.title}</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{card.description}</p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <ArrowUpRight className="mt-1 h-3.5 w-3.5 text-cyan-500 dark:text-cyan-300" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:border-emerald-500/40 dark:text-emerald-200">
            <Globe2 className="h-4 w-4" aria-hidden />
            In-country payment landscape
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Local rails that keep distributors paid and consumers converting
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Domestic rails are indispensable for MLM in Uzbekistan. We preserve global PSP optionality
            while leaning into the platforms that everyday consumers already use for utilities, travel,
            and e-commerce.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-start">
          <div className="space-y-4">
            {LOCAL_RAILS.map((rail) => (
              <div
                key={rail.name}
                className="rounded-3xl border border-emerald-100/80 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <div className="flex items-start gap-3">
                  <rail.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{rail.name}</h3>
                    <p className="text-sm font-medium text-emerald-700 dark:text-emerald-200">
                      {rail.focus}
                    </p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{rail.notes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <aside className="space-y-4 rounded-3xl border border-emerald-100/80 bg-gradient-to-br from-white/90 via-white/70 to-emerald-50 p-6 shadow-inner dark:border-slate-700/60 dark:from-slate-900/70 dark:via-slate-900/60 dark:to-slate-900/40">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Operating guardrails
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-300" aria-hidden />
                <span>Reconciliation packs align Uzcard, Humo, and PSP settlements inside one ledger.</span>
              </li>
              <li className="flex items-start gap-2">
                <Radar className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-300" aria-hidden />
                <span>AI surveillance models monitor conversion, refund, and chargeback volatility daily.</span>
              </li>
              <li className="flex items-start gap-2">
                <Layers3 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-300" aria-hidden />
                <span>Role-based access keeps finance, compliance, and operations aligned yet independent.</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe2 className="mt-0.5 h-4 w-4 text-emerald-600 dark:text-emerald-300" aria-hidden />
                <span>Insights benchmark Uzbekistan activity against regional peers for expansion planning.</span>
              </li>
            </ul>
            <Button
              asChild
              size="lg"
              className="w-full gap-2 bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
            >
              <Link href={gatewaysHref}>
                Explore all global payment gateways
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:border-cyan-500/40 dark:text-cyan-200">
            <Bank className="h-4 w-4" aria-hidden />
            Activation sequence
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Precision launch play with AI supervision at every phase
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Tailored for Uzbekistan’s regulatory climate, the sequence below keeps every workstream
            measurable—discovery through scale.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {INTEGRATION_STAGES.map((stage) => (
            <article
              key={stage.step}
              className="flex h-full flex-col gap-4 rounded-3xl border border-cyan-100/80 bg-white/85 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200 bg-white text-base font-semibold text-cyan-700 dark:border-cyan-500/40 dark:bg-slate-900/60 dark:text-cyan-200">
                  {stage.step}
                </span>
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-200">
                    <stage.icon className="h-4 w-4" aria-hidden />
                    Phase
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{stage.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stage.summary}</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {stage.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-2">
                    <ArrowUpRight className="mt-1 h-3.5 w-3.5 text-cyan-500 dark:text-cyan-300" aria-hidden />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-slate-700 dark:text-slate-200">
            <Sparkles className="h-4 w-4" aria-hidden />
            Questions from Uzbekistan leaders
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            AI-ready answers for your finance, compliance, and growth teams
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              className="flex h-full flex-col gap-3 rounded-3xl border border-slate-200/70 bg-white/85 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.question}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <Button
            asChild
            size="lg"
            className="gap-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-cyan-500 dark:hover:bg-cyan-400"
          >
            <Link href={contactHref}>
              Build your Uzbekistan launch plan
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-slate-200 text-slate-800 hover:bg-white/60 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900/60"
          >
            <Link href={pricingHref}>Compare implementation packages</Link>
          </Button>
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
