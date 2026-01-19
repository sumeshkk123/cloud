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
  BarChart3,
  Globe2,
  Leaf,
  Mountain,
  ShieldCheck,
  Sparkles,
  Timer,
  Wind
} from "lucide-react";
import {
  Bank,
  Circuitry,
  CurrencyCircleDollar,
  Handshake,
  SealCheck
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Insight = {
  title: string;
  description: string;
  icon: IconType;
};

type Pillar = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Stage = {
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

const BHUTAN_INSIGHTS: Insight[] = [
  {
    title: "Gross National Happiness ethos",
    description:
      "Bhutanese regulators value ethical commerce, transparent controls, and citizen-centric digital experiences.",
    icon: Leaf
  },
  {
    title: "Digital inclusion drive",
    description:
      "Royal Monetary Authority (RMA) promotes mobile wallets, QR payments, and open banking reforms across Bhutan.",
    icon: Wind
  },
  {
    title: "Cross-border cooperation",
    description:
      "Distributors collaborate with networks in India, Nepal, and Southeast Asia, demanding frictionless FX planning.",
    icon: Globe2
  }
];

const PAYMENT_PILLARS: Pillar[] = [
  {
    name: "Bank & RMA-aligned settlement spine",
    summary: "Automate compliant BBTN payouts with regulator-ready reporting.",
    bullets: [
      "Integrations for Bank of Bhutan, Druk PNB, Tashi Bank, BNB, and BOBL",
      "Dual approvals for leadership incentives and high-value transfers",
      "Regulator-ready exports aligned with RMA guidelines and tax reporting"
    ],
    icon: Bank
  },
  {
    name: "Wallet & PSP harmony",
    summary: "Blend mBOB, goBoB, and regional PSPs into one orchestrated experience.",
    bullets: [
      "Mobility wallet integrations plus Stripe, Razorpay, Paytm, and Worldline connectors",
      "Flexible FX buffers for BTN, INR, USD, and EUR corridors",
      "Chargeback detection, retry logic, and automated finance workflows"
    ],
    icon: Circuitry
  },
  {
    name: "Distributor mindfulness studio",
    summary: "Deliver supportive, insight-rich journeys for leaders and wellness ambassadors.",
    bullets: [
      "Portals in Dzongkha and English with guided actions and micro-learning",
      "AI narratives linking compensation, ethics, and business sustainability metrics",
      "Concierge support across WhatsApp, SMS, and voice with SLA dashboards"
    ],
    icon: Handshake
  }
];

const DELIVERY_STAGES: Stage[] = [
  {
    phase: "01",
    label: "Discovery & harmony mapping",
    detail:
      "Co-create a Bhutan blueprint aligning governance, spiritual values, and commercial objectives for every stakeholder."
  },
  {
    phase: "02",
    label: "Integration & protection",
    detail:
      "Connect banks, wallets, and PSPs with encrypted vaults, IAM controls, and telemetry tuned to Bhutanese regulations."
  },
  {
    phase: "03",
    label: "Guided pilot",
    detail:
      "Launch pilot cohorts with dashboards monitoring payout speed, compliance posture, and distributor wellbeing."
  },
  {
    phase: "04",
    label: "Optimise & expand",
    detail:
      "Scale across South Asia with automation sprints, FX modelling, and executive reviews anchored in purposeful growth."
  }
];

const ASSURANCE_LAYERS: Assurance[] = [
  {
    title: "Ethical compliance",
    copy:
      "AML, sanction screening, and audit trails align with RMA directives, supporting Bhutan’s emphasis on integrity and wellbeing.",
    icon: ShieldCheck
  },
  {
    title: "Treasury serenity",
    copy:
      "Liquidity dashboards and AI variance explanations keep CFOs ahead of FX movements and seasonal demand.",
    icon: BarChart3
  },
  {
    title: "Experience harmony",
    copy:
      "Concierge service models, mindfulness-aligned communications, and SLA dashboards ensure leaders feel supported.",
    icon: Sparkles
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "Which financial partners do you integrate with in Bhutan?",
    answer:
      "Cloud MLM Software supports Bank of Bhutan, Druk PNB, BNB, Tashi Bank, BOBL, mBOB, goBoB, and regional PSPs like Stripe, Razorpay, and Paytm inside a single orchestration layer."
  },
  {
    question: "Do you support Dzongkha localisation?",
    answer:
      "Yes. Distributor experiences, knowledge content, and notification flows are available in Dzongkha and English with governance for translation updates."
  },
  {
    question: "How is compliance managed with the RMA?",
    answer:
      "AML screening, sanction checks, suspicious activity workflows, and regulator-ready exports are automated to meet RMA expectations."
  },
  {
    question: "Can executives access wellbeing and sustainability metrics?",
    answer:
      "Executives receive AI-generated narratives combining compensation performance, ESG signals, and distributor wellbeing indicators."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Bhutan MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Launch Bhutanese MLM payment gateways that honour compliance, wellbeing, and cross-border growth. Cloud MLM Software unifies banks, wallets, and analytics with purposeful automation.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/bhutan", locale)
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

type BhutanPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function BhutanPaymentGatewaysPage({
  params
}: BhutanPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden px-6 pb-20 pt-24 sm:px-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.2),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(167,139,250,0.2),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(56,189,248,0.2),transparent_55%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(167,139,250,0.18),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(56,189,248,0.18),transparent_55%)]" aria-hidden />
        <div className="container relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.7fr)] lg:items-center">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 shadow-sm dark:border-emerald-400/40 dark:bg-slate-900/60 dark:text-emerald-200">
              <Mountain className="h-4 w-4" aria-hidden />
              Bhutan payment harmony
            </span>
            <div className="space-y-6 text-slate-900 dark:text-slate-100">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Build Bhutanese payment gateways that balance compliance and wellbeing
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Cloud MLM Software unifies banks, wallets, and cross-border PSPs while championing Bhutan&apos;s commitment to
                ethical, transparent commerce.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {BHUTAN_INSIGHTS.map((insight) => (
                <div
                  key={insight.title}
                  className="rounded-3xl border border-emerald-200/70 bg-white/80 p-5 text-sm text-slate-600 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-300"
                >
                  <insight.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-300" aria-hidden />
                  <h2 className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{insight.title}</h2>
                  <p className="mt-2 leading-relaxed">{insight.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-emerald-600 text-white hover:bg-emerald-500">
                <Link href={contactHref}>
                  Design your rollout
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/60"
              >
                <Link href={demoHref}>Experience a guided demo</Link>
              </Button>
            </div>
          </div>
          <aside className="relative isolate flex flex-col gap-6 rounded-[2.75rem] border border-emerald-200/70 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/70">
            <div className="absolute inset-x-8 top-6 -z-10 h-[240px] rounded-[2.5rem] bg-gradient-to-br from-emerald-500/20 via-transparent to-purple-500/20 blur-2xl" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
              Executive snapshots
            </p>
            <div className="grid gap-5">
              <div className="rounded-2xl border border-emerald-200/70 bg-white/90 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50">
                <Timer className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />
                <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">Realtime visibility</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Monitor liquidity, compliance posture, and distributor wellbeing in one dashboard.
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-200/70 bg-white/90 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50">
                <CurrencyCircleDollar className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />
                <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">Multi-currency ready</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Automate BTN, INR, USD, and EUR payouts with FX guardrails and hedging playbooks.
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-200/70 bg-white/90 p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50">
                <SealCheck className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />
                <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">Audit confidence</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Immutable logs, SAR drafts, and SLA evidence align with Royal Monetary Authority requirements.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-200/70 bg-emerald-50/80 p-5 text-sm text-emerald-900 shadow-sm dark:border-slate-700/60 dark:bg-slate-950/50 dark:text-slate-100">
              <p className="font-semibold">Need more regions?</p>
              <p className="mt-1 text-xs">
                Explore the full Cloud MLM Software payment gateway catalogue to plan expansion beyond Bhutan.
              </p>
              <Button
                asChild
                size="sm"
                variant="ghost"
                className="mt-4 h-10 justify-start gap-2 rounded-xl border border-transparent px-3 text-emerald-700 hover:bg-white dark:text-slate-200 dark:hover:bg-slate-800/60"
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
              Bhutan payment pillars grounded in purpose
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Blend governance, automation, and compassionate enablement tailored for Bhutan’s market.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {PAYMENT_PILLARS.map((pillar) => (
              <article
                key={pillar.name}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-slate-200/70 bg-white/80 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <pillar.icon className="h-8 w-8 text-emerald-600 dark:text-emerald-300" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{pillar.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{pillar.summary}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {pillar.bullets.map((bullet) => (
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
              Implementation journey in harmony with stakeholders
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Maintain transparency from discovery workshops to expansion sprints.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {DELIVERY_STAGES.map((stage) => (
              <div
                key={stage.phase}
                className="flex h-full flex-col gap-3 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-300">
                  Phase {stage.phase}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stage.label}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{stage.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-12">
        <div className="container mx-auto max-w-5xl space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Assurance layers that nurture trust
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Governance, analytics, and mindful experiences are part of every deployment.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {ASSURANCE_LAYERS.map((assurance) => (
              <div
                key={assurance.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <assurance.icon className="h-7 w-7 text-emerald-600 dark:text-emerald-300" aria-hidden />
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
              Answers for finance, compliance, and field leaders planning Bhutan expansion.
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
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-700 via-emerald-600 to-purple-700 dark:from-emerald-800 dark:via-emerald-700 dark:to-purple-800" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.15),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(255,255,255,0.18),transparent_55%)]" aria-hidden />
        <div className="container mx-auto max-w-4xl space-y-6 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            Bhutan growth pledge
          </p>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
            Deliver mindful payouts and regulator trust across Bhutan and South Asia
          </h2>
          <p className="text-base text-white/80">
            Partner with Cloud MLM Software to blend governance, automation, and compassionate enablement aligned with Bhutan’s
            values.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-emerald-700 hover:bg-slate-100">
              <Link href={contactHref}>
                Speak with a strategist
                <ArrowUpRight className="h-4 w-4 text-emerald-500" aria-hidden />
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
