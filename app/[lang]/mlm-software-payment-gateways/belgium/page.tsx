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
  BadgeEuro,
  BarChart3,
  Building2,
  FileCheck2,
  Fingerprint,
  Globe,
  Layers3,
  ShieldCheck
} from "lucide-react";
import {
  Bank,
  ChartLine,
  Circuitry,
  DeviceMobile,
  SealCheck
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Insight = {
  title: string;
  detail: string;
  icon: IconType;
};

type Stream = {
  name: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Milestone = {
  phase: string;
  label: string;
  detail: string;
};

type Assurance = {
  title: string;
  copy: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const MARKET_INSIGHTS: Insight[] = [
  {
    title: "PSD2-compliant orchestration",
    detail:
      "Belgium’s National Bank and FSMA expect PSD2, GDPR, and AML6 alignment backed by auditable controls.",
    icon: ShieldCheck
  },
  {
    title: "Benelux corridor expansion",
    detail:
      "Distributors frequently scale across Belgium, Netherlands, Luxembourg, and Northern France. FX buffers protect contributions.",
    icon: Globe
  },
  {
    title: "Corporate HQ expectations",
    detail:
      "European leadership teams demand analytics, ESG, and transparency narratives in multiple languages.",
    icon: Building2
  }
];

const PAYMENT_STREAMS: Stream[] = [
  {
    name: "Bank-first settlement spine",
    description:
      "Automate SEPA, instant payments, and treasury controls with Belgium’s leading institutions.",
    bullets: [
      "API integrations with BNP Paribas Fortis, KBC, ING, Belfius, and Crelan",
      "Maker-checker approvals and segregation of duties for sensitive payouts",
      "Daily reconciliation exports aligned to National Bank of Belgium formats"
    ],
    icon: Bank
  },
  {
    name: "PSP & wallet mesh",
    description:
      "Blend Bancontact, Payconiq, Stripe, Adyen, Mollie, and PayPal into a single routing policy.",
    bullets: [
      "Dynamic currency conversion for EUR, GBP, CHF, and USD corridors",
      "AI-powered fraud scoring with chargeback queues surfaced to finance",
      "Customer experience metrics linking acceptance, latency, and satisfaction"
    ],
    icon: Circuitry
  },
  {
    name: "Distributor enablement studio",
    description:
      "Deliver multilingual, mobile-first experiences with governance and coaching built in.",
    bullets: [
      "Portals and notifications in Dutch, French, German, and English",
      "AI-generated coaching prompts and revenue narratives for every rank",
      "Concierge escalation integrated with Salesforce Service Cloud or Freshdesk"
    ],
    icon: DeviceMobile
  }
];

const IMPLEMENTATION_MILESTONES: Milestone[] = [
  {
    phase: "01",
    label: "Discovery & governance blueprint",
    detail: "Workshops with compliance, treasury, and sales to capture regulatory and commercial objectives."
  },
  {
    phase: "02",
    label: "Integration and security sprint",
    detail: "Connect banks and PSPs, configure IAM, and establish tokenised vaults with GDPR-compliant data residency."
  },
  {
    phase: "03",
    label: "Pilot with telemetry",
    detail: "Launch limited cohorts with live dashboards, SLA tracking, and automated compliance alerts."
  },
  {
    phase: "04",
    label: "Optimise and scale",
    detail: "Expand across Benelux and EU markets with feature flags, automation sprints, and executive insight loops."
  }
];

const ASSURANCE_LAYERS: Assurance[] = [
  {
    title: "Regulator-grade controls",
    copy:
      "PSD2, AML, and GDPR workflows are embedded with immutable audit trails and SAR-ready exports.",
    icon: FileCheck2
  },
  {
    title: "Treasury storytelling",
    copy:
      "AI narrates cash flow, hedging requirements, and distributor health so CFOs can brief the board confidently.",
    icon: BarChart3
  },
  {
    title: "Security provenance",
    copy:
      "Zero-trust architecture, continuous monitoring, and encryption keep sensitive payout data protected end-to-end.",
    icon: Fingerprint
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "Which payment providers do you support in Belgium?",
    answer:
      "We integrate Bancontact, Payconiq, Stripe, Adyen, Mollie, PayPal, and regional acquirers alongside BNP Paribas Fortis, KBC, ING, Belfius, and Crelan banking partners."
  },
  {
    question: "Do you support multilingual experiences?",
    answer:
      "Yes. Distributor journeys, notifications, and analytics narratives are available in Dutch, French, German, and English with governance workflows for translation updates."
  },
  {
    question: "How is PSD2 compliance handled?",
    answer:
      "Strong customer authentication, consent management, audit trails, and third-party provider reporting are embedded in our orchestration layer."
  },
  {
    question: "Can executives access ESG and compliance metrics?",
    answer:
      "Executives receive dashboards that combine sales, compliance, ESG indicators, and AI-generated commentary to inform board conversations."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Belgium MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Operate Belgium MLM payment gateways with PSD2, AML, and GDPR rigor. Cloud MLM Software unifies banks, PSPs, and analytics for Benelux expansion.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/belgium", locale)
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

type BelgiumPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function BelgiumPaymentGatewaysPage({
  params
}: BelgiumPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden px-6 pb-20 pt-24 sm:px-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-slate-50 to-sky-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.2),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(14,165,233,0.18),transparent_55%),radial-gradient(circle_at_40%_85%,rgba(56,189,248,0.22),transparent_55%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.18),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(14,165,233,0.16),transparent_55%),radial-gradient(circle_at_40%_85%,rgba(56,189,248,0.2),transparent_55%)]" aria-hidden />
        <div className="container relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.7fr)] lg:items-center">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/60 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 shadow-sm dark:border-blue-500/40 dark:bg-slate-900/60 dark:text-blue-200">
              <BadgeEuro className="h-4 w-4" aria-hidden />
              Belgium payment intelligence
            </span>
            <div className="space-y-6 text-slate-900 dark:text-slate-100">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Deliver compliant, insight-rich MLM payment gateways across Belgium and Benelux
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Cloud MLM Software orchestrates banks, PSPs, and multilingual distributor journeys with PSD2-grade security and
                AI-assisted analytics your board can act on.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {MARKET_INSIGHTS.map((insight) => (
                <div
                  key={insight.title}
                  className="rounded-3xl border border-slate-200/70 bg-white/80 p-5 text-sm text-slate-600 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-300"
                >
                  <insight.icon className="h-6 w-6 text-blue-600 dark:text-blue-300" aria-hidden />
                  <h2 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{insight.title}</h2>
                  <p className="mt-2 leading-relaxed">{insight.detail}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-blue-600 text-white hover:bg-blue-500">
                <Link href={contactHref}>
                  Architect your launch
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/60"
              >
                <Link href={demoHref}>Request a guided demo</Link>
              </Button>
            </div>
          </div>
          <aside className="relative isolate flex flex-col gap-6 rounded-[2.75rem] border border-blue-200/70 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="absolute inset-x-8 top-6 -z-10 h-[240px] rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 via-transparent to-emerald-500/20 blur-2xl" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
              Executive snapshots
            </p>
            <div className="grid gap-5">
              <div className="rounded-2xl border border-blue-200/70 bg-white/90 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50">
                <Layers3 className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">Unified ledger</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Harmonise settlements across SEPA, instant payments, cards, and wallets.
                </p>
              </div>
              <div className="rounded-2xl border border-blue-200/70 bg-white/90 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50">
                <ChartLine className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">AI narratives</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Weekly insights summarise distributor momentum and compliance status for leadership.
                </p>
              </div>
              <div className="rounded-2xl border border-blue-200/70 bg-white/90 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50">
                <SealCheck className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">Audit ready</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  PSD2 evidence packs, SLA history, and SAR drafts available on demand.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-blue-200/70 bg-blue-50/70 p-5 text-sm text-blue-900 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50 dark:text-slate-100">
              <p className="font-semibold">Need a wider scope?</p>
              <p className="mt-1 text-xs">
                Browse the full gateway catalogue to benchmark coverage across Europe, Asia, and the Americas.
              </p>
              <Button
                asChild
                size="sm"
                variant="ghost"
                className="mt-4 h-10 justify-start gap-2 rounded-xl border border-transparent px-3 text-blue-700 hover:bg-white dark:text-slate-200 dark:hover:bg-slate-800/60"
              >
                <Link href={gatewaysHref}>
                  View all gateways
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6 sm:px-12">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Payment streams engineered for Belgium&apos;s growth agenda
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Combine compliance, automation, and leadership enablement with plays tuned to the Belgian market.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {PAYMENT_STREAMS.map((stream) => (
              <article
                key={stream.name}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-slate-200/70 bg-white/80 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <stream.icon className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{stream.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{stream.description}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {stream.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-xl border border-transparent bg-slate-50/70 p-3 leading-relaxed shadow-sm dark:bg-slate-950/40"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-slate-50/60 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container mx-auto max-w-5xl space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Implementation milestones with full transparency
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Align every stakeholder from discovery to scaling with an evidence-backed cadence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {IMPLEMENTATION_MILESTONES.map((milestone) => (
              <div
                key={milestone.phase}
                className="flex h-full flex-col gap-3 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-blue-600 dark:text-blue-300">
                  Phase {milestone.phase}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{milestone.label}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{milestone.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-12">
        <div className="container mx-auto max-w-5xl space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Assurance layers executives rely on
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Governance, analytics, and security come standard in every deployment.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {ASSURANCE_LAYERS.map((assurance) => (
              <div
                key={assurance.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <assurance.icon className="h-7 w-7 text-blue-600 dark:text-blue-300" aria-hidden />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{assurance.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{assurance.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200/80 bg-slate-50/60 py-20 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="container mx-auto max-w-5xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Strategic answers for finance, compliance, and field leadership across Belgium.
            </p>
          </div>
          <div className="space-y-6">
            {FAQ_ITEMS.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/50"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 pb-24 pt-20 sm:px-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-700 dark:from-blue-800 dark:via-blue-700 dark:to-cyan-800" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.15),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(255,255,255,0.18),transparent_55%)]" aria-hidden />
        <div className="container mx-auto max-w-4xl space-y-6 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            Belgium growth blueprint
          </p>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
            Harmonise Belgian compliance, distributor delight, and board-level insights
          </h2>
          <p className="text-base text-white/80">
            Cloud MLM Software fuses automation, governance, and human expertise so your Benelux network becomes the benchmark for
            compliant, AI-ready expansion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-blue-700 hover:bg-slate-100">
              <Link href={contactHref}>
                Talk to a strategist
                <ArrowUpRight className="h-4 w-4 text-blue-500" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/70 bg-transparent text-white hover:bg-white/10"
            >
              <Link href={pricingHref}>Review commercial options</Link>
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
