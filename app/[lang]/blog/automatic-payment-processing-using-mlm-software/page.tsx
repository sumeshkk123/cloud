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
  ArrowRight,
  CalendarClock,
  CreditCard,
  Globe,
  Layers,
  Lock,
  Wallet,
  Workflow
} from "lucide-react";
import {
  ChartPieSlice,
  Circuitry,
  Cloud,
  CurrencyCircleDollar,
  PlugsConnected,
  ShieldCheck,
  Timer,
  UsersFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type Advantage = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type FlowStep = {
  title: string;
  detail: string;
  icon: IconType;
};

type Option = {
  title: string;
  cadence: string;
  support: string;
};

const METRICS: Metric[] = [
  {
    label: "Transactions automated",
    value: "4.5M+",
    description: "Secure payments processed annually through Cloud MLM Software infrastructures.",
    icon: CreditCard
  },
  {
    label: "Average payout accuracy",
    value: "99.98%",
    description: "Eliminating manual errors keeps uplines and downlines confident in every cycle.",
    icon: ShieldCheck
  },
  {
    label: "Gateways supported",
    value: "120+",
    description: "Local rails, cards, wallets, and crypto integrations meet global expectations.",
    icon: Globe
  }
];

const ADVANTAGES: Advantage[] = [
  {
    title: "Unified automation fabric",
    description:
      "Automate scheduled payouts, tax deductions, and voucher creation while keeping finance teams in control.",
    bullets: [
      "Shift from rigid cycles to flexible scheduling without sacrificing governance.",
      "Generate compliant statements for every commission run automatically.",
      "Consolidate approvals, notifications, and remittance insights in one workspace."
    ],
    icon: Workflow
  },
  {
    title: "API-first payment experiences",
    description:
      "Embed gateway APIs into checkout flows, back-office portals, and partner apps so the journey stays frictionless.",
    bullets: [
      "Track payment statuses across mobile, social, and web experiences in real time.",
      "Retain customers on branded surfaces instead of redirecting to external pages.",
      "Allow marketers to use live purchase data for campaign optimisation instantly."
    ],
    icon: PlugsConnected
  },
  {
    title: "Resilient compliance posture",
    description:
      "Protect customer data, enforce geographic policies, and maintain accurate ledgers even as volumes surge.",
    bullets: [
      "Encrypt every transaction and store sensitive data in segregated vaults.",
      "Provide finance and legal teams with auditable change histories.",
      "Apply configurable limits to prevent fraud, double payouts, or missed clawbacks."
    ],
    icon: Lock
  }
];

const FLOW: FlowStep[] = [
  {
    title: "Collect and normalise data",
    detail:
      "Import volume, rank, and bonus details from CRM, e-commerce, and field apps. Standardise them with compensation rules.",
    icon: Cloud
  },
  {
    title: "Calculate commissions",
    detail:
      "Run your compensation engine, apply deductions, and simulate multiple scenarios before committing to payouts.",
    icon: ChartPieSlice
  },
  {
    title: "Trigger secure disbursements",
    detail:
      "Use APIs to connect to regional gateways, wallets, or banking rails. Every payment inherits risk controls automatically.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Inform stakeholders",
    detail:
      "Notify distributors, finance teams, and leadership with real-time dashboards and downloadable vouchers.",
    icon: UsersFour
  },
  {
    title: "Monitor and optimise",
    detail:
      "Track settlement times, chargebacks, and reconciliation gaps. Feed insights into compensation and treasury strategies.",
    icon: Timer
  }
];

const OPTIONS: Option[] = [
  {
    title: "Weekly cadence",
    cadence: "Ideal for high-velocity sales programmes that prioritise instant recognition.",
    support: "Automated statements, net-off adjustments, and rank-triggered bonuses."
  },
  {
    title: "Monthly cadence",
    cadence: "Balances cash flow management with predictable income for global downlines.",
    support: "Consolidated tax reports, compliance checkpoints, and volume reconciliation."
  },
  {
    title: "Income statement driven",
    cadence: "Executes payouts only when profitability thresholds are met—perfect for emerging markets.",
    support: "Custom alerts, leadership approvals, and on-demand scenario modelling."
  },
  {
    title: "Deduction-led payouts",
    cadence: "Automatically withhold fees, renewals, or inventory charges before releasing commissions.",
    support: "Transparent breakouts for every deduction plus self-service dispute tools."
  }
];

const QUICK_TAKEAWAYS = [
  "Design gateway APIs with modern standards so they evolve alongside customer expectations.",
  "Use the same API fabric to pay downlines, vendors, and internal teams without duplicating logic.",
  "Guarantee data privacy and compliance even when transactions span continents and currencies.",
  "Keep marketers informed with live dashboards that show which offers or campaigns convert best.",
  "Automate reconciliation so finance can focus on forecasting, not chasing spreadsheets."
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Automatic Payment Processing Using MLM Software";
  const description =
    "Streamline payouts, secure data, and integrate gateways with Cloud MLM Software’s automated payment infrastructure.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/automatic-payment-processing-using-mlm-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AutomaticPaymentsPageProps = {
  params: { lang: SupportedLocale };
};

export default function AutomaticPaymentsPage({ params }: AutomaticPaymentsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.24),transparent_55%),radial-gradient(circle_at_85%_18%,rgba(16,185,129,0.22),transparent_60%),radial-gradient(circle_at_60%_80%,rgba(244,114,182,0.18),transparent_65%)]" />
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
                Finance automation · Payment intelligence
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Automatic payment processing using MLM software
              </h1>
              <p className="text-lg text-slate-700">
                Deliver accurate, on-time payouts without drowning your finance team in manual work. This modern retelling of our legacy
                article highlights the automation, API design, and governance practices you need to scale confidently.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="bg-sky-600 text-white hover:bg-sky-500">
                  <Link href={demoHref}>
                    View payment automation demo
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100">
                  <Link href={contactHref}>
                    Speak with a payments architect
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-xl shadow-sky-100">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-100"
                >
                  <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-sky-600">
                    <metric.icon className="h-5 w-5 text-sky-500" aria-hidden />
                    {metric.label}
                  </div>
                  <p className="text-3xl font-semibold text-slate-900">{metric.value}</p>
                  <p className="mt-2 text-sm text-slate-600">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-900">Why automation matters now</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              The original article noted that automatic payment processing keeps finances at their highest level. Today, it also safeguards
              customer data, maintains compliance, and empowers marketers to iterate quickly. These pillars bring that narrative to life.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {ADVANTAGES.map((advantage) => (
              <article
                key={advantage.title}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-100"
              >
                <advantage.icon className="h-10 w-10 text-sky-500" aria-hidden />
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{advantage.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{advantage.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-600">
                  {advantage.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <ArrowRight className="mt-1 h-4 w-4 text-emerald-400" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-rose-50 to-sky-50 p-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold text-slate-900">End-to-end automation journey</h2>
            <p className="mt-4 text-sm text-slate-600">
              Every flow—from API integration to payout confirmation—should feel deliberate. Use this map to coordinate teams and technology
              without losing sight of distributor trust.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FLOW.map((step) => (
              <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                  <step.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,300px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                Payout models
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">Flexible schedules, consistent transparency</h2>
              <p className="text-sm text-slate-600">
                Weekly, monthly, statement-linked or deduction-led—Cloud MLM Software supports the cadence that matches your cash flow
                strategy while respecting the promises you make to the field.
              </p>
            </div>
            <div className="grid gap-4">
              {OPTIONS.map((option) => (
                <div key={option.title} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{option.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{option.cadence}</p>
                  <p className="mt-3 text-sm font-medium text-slate-700">Support includes:</p>
                  <p className="mt-1 text-sm text-slate-600">{option.support}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-emerald-50 via-white to-sky-50 p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">Keep teams informed and confident</h2>
              <p className="text-sm text-slate-600">
                The legacy article emphasised how APIs elevate customer experiences. Extend that thinking with automated insights that help
                affiliates, marketers, and finance leaders stay aligned.
              </p>
            </div>
            <div className="grid gap-4">
              {QUICK_TAKEAWAYS.map((tip) => (
                <div key={tip} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                  <Layers className="mt-1 h-6 w-6 text-sky-500" aria-hidden />
                  <p className="text-sm text-slate-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-100 via-white to-emerald-50 p-10 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Ready to modernise your MLM payouts?</h2>
            <p className="text-lg text-slate-600">
              Cloud MLM Software synchronises gateways, commissions, and compliance so you can focus on expansion instead of spreadsheets.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-sky-600 text-white hover:bg-sky-500">
                <Link href={demoHref}>
                  Schedule a payments walkthrough
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-sky-400 text-sky-700 hover:bg-sky-100">
                <Link href={contactHref}>
                  Connect with our consultants
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
