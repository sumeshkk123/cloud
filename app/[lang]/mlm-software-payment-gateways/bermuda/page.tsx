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
  Anchor,
  ArrowUpRight,
  BarChart3,
  Briefcase,
  Globe2,
  Scale,
  ShieldCheck,
  Sparkles,
  Waves
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
  step: string;
  headline: string;
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

const BERMUDA_INSIGHTS: Insight[] = [
  {
    title: "Financial services leadership",
    description:
      "Bermuda Monetary Authority (BMA) and Ministry of Finance expect world-class AML, data protection, and reporting discipline.",
    icon: ShieldCheck
  },
  {
    title: "Global clientele",
    description:
      "Distributors partner with international investors, luxury travel, and insurance clients across North America and Europe.",
    icon: Globe2
  },
  {
    title: "Premium concierge culture",
    description:
      "High-net-worth leaders expect executive-grade service, analytics, and bespoke payout scheduling.",
    icon: Briefcase
  }
];

const PAYMENT_PILLARS: Pillar[] = [
  {
    name: "Bank & trust orchestration",
    summary: "Automate BMD and multi-currency settlements with compliant audit trails.",
    bullets: [
      "API and secure file integrations with Butterfield, HSBC Bermuda, Clarien, and trust partners",
      "Maker-checker flows for leadership incentives, event payouts, and multi-signature approvals",
      "Daily reconciliation packs mapped to BMA reporting requirements"
    ],
    icon: Bank
  },
  {
    name: "PSP & card experience",
    summary: "Blend luxury travel PSPs with global processors to match client expectations.",
    bullets: [
      "First Atlantic Commerce, Nuvei, Stripe, and PayPal connectors with risk-based routing",
      "Dynamic FX buffers for BMD, USD, CAD, GBP, and EUR corridors",
      "Chargeback intelligence tied to AI anomaly detection and finance case management"
    ],
    icon: Circuitry
  },
  {
    name: "Executive concierge enablement",
    summary: "Deliver analytics, support, and advocacy tuned to high-touch leadership circles.",
    bullets: [
      "Portals, dashboards, and notifications optimised for executive teams and field ambassadors",
      "AI narratives summarising cash velocity, compliance posture, and strategic opportunities",
      "Concierge escalation integrated with Salesforce, HubSpot, or bespoke service desks"
    ],
    icon: Handshake
  }
];

const DELIVERY_STAGES: Stage[] = [
  {
    step: "01",
    headline: "Governance blueprint",
    detail:
      "Workshops with finance, compliance, and leadership teams to map BMA obligations, data protection needs, and brand expectations."
  },
  {
    step: "02",
    headline: "Integration runway",
    detail:
      "Connect banks, PSPs, and analytics using encrypted vaults, IAM controls, and telemetry instrumentation across environments."
  },
  {
    step: "03",
    headline: "Guided pilot",
    detail:
      "Launch select cohorts with live dashboards, SLA tracking, and automated compliance alerts for regulator readiness."
  },
  {
    step: "04",
    headline: "Optimise & scale",
    detail:
      "Expand into additional territories with automation sprints, FX modelling, and executive scorecard reviews."
  }
];

const ASSURANCE_LAYERS: Assurance[] = [
  {
    title: "Regulator-grade confidence",
    copy:
      "AML, sanction screening, and audit trails align with BMA expectations; SAR drafts and board-ready reports are a click away.",
    icon: Scale
  },
  {
    title: "Treasury storytelling",
    copy:
      "AI-generated narratives translate cash velocity, risk, and growth opportunities for CFOs and investor relations teams.",
    icon: BarChart3
  },
  {
    title: "Brand-defining experiences",
    copy:
      "Concierge service models and SLA dashboards ensure every distributor interaction matches Bermuda’s premium reputation.",
    icon: Sparkles
  }
];

const FAQ_ITEMS: FAQ[] = [
  {
    question: "Which financial partners can you integrate in Bermuda?",
    answer:
      "Cloud MLM Software supports Butterfield, HSBC Bermuda, Clarien Bank, First Atlantic Commerce, Nuvei, Stripe, PayPal, and bespoke trust partners via secure orchestration."
  },
  {
    question: "Do you manage multi-currency payouts?",
    answer:
      "Yes. Treasury teams orchestrate BMD alongside USD, CAD, GBP, and EUR with FX buffers, hedging policies, and automated variance explanations."
  },
  {
    question: "How is compliance handled with the BMA?",
    answer:
      "We embed AML, data protection, and audit trails with immutable logs, SAR-ready exports, and policy workflows designed for BMA examinations."
  },
  {
    question: "Can executives access investor-grade analytics?",
    answer:
      "Executives receive AI narratives, KPI scorecards, and scenario modelling tailored for board meetings, investor updates, and strategic planning."
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Bermuda MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Deliver luxury-grade MLM payment gateways in Bermuda. Cloud MLM Software unites banks, PSPs, and concierge analytics with regulator-ready governance.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/bermuda", locale)
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

type BermudaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function BermudaPaymentGatewaysPage({
  params
}: BermudaPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden px-6 pb-20 pt-24 sm:px-12">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 dark:from-black dark:via-slate-950 dark:to-cyan-900" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(14,165,233,0.18),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(255,255,255,0.15),transparent_55%)]" aria-hidden />
        <div className="container relative mx-auto grid max-w-6xl gap-16 text-white lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.7fr)]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              <Waves className="h-4 w-4" aria-hidden />
              Bermuda payment architecture
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Craft Bermuda payment gateways worthy of your most discerning stakeholders
              </h1>
              <p className="text-lg text-slate-100/80">
                Cloud MLM Software unifies banks, PSPs, and concierge analytics so your brand delivers luxury-grade payouts with
                regulator-ready governance and AI-driven insight.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {BERMUDA_INSIGHTS.map((insight) => (
                <div key={insight.title} className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur">
                  <insight.icon className="h-6 w-6 text-cyan-300" aria-hidden />
                  <h2 className="mt-3 text-base font-semibold">{insight.title}</h2>
                  <p className="mt-2 text-sm text-slate-100/80">{insight.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Plan your launch
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/60 bg-transparent text-white hover:bg-white/10"
              >
                <Link href={demoHref}>Request a guided demo</Link>
              </Button>
            </div>
          </div>
          <aside className="relative isolate flex flex-col gap-6 rounded-[2.75rem] border border-white/20 bg-white/10 p-8 backdrop-blur">
            <div className="absolute inset-x-8 top-6 -z-10 h-[240px] rounded-[2.5rem] bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/25 blur-2xl" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-100/70">Executive snapshots</p>
            <div className="grid gap-5">
              <div className="rounded-2xl border border-white/25 bg-white/10 p-5">
                <Anchor className="h-6 w-6 text-cyan-300" />
                <p className="mt-4 text-3xl font-semibold text-white">Stability & trust</p>
                <p className="mt-2 text-sm text-slate-100/80">
                  Instantly surface liquidity, compliance posture, and customer satisfaction to calm any executive briefing.
                </p>
              </div>
              <div className="rounded-2xl border border-white/25 bg-white/10 p-5">
                <CurrencyCircleDollar className="h-6 w-6 text-cyan-300" />
                <p className="mt-4 text-3xl font-semibold text-white">Multi-currency mastery</p>
                <p className="mt-2 text-sm text-slate-100/80">
                  Manage BMD, USD, CAD, and GBP payouts with FX guardrails and hedging recommendations.
                </p>
              </div>
              <div className="rounded-2xl border border-white/25 bg-white/10 p-5">
                <SealCheck className="h-6 w-6 text-cyan-300" />
                <p className="mt-4 text-3xl font-semibold text-white">Audit ready</p>
                <p className="mt-2 text-sm text-slate-100/80">
                  Immutable audit trails, SLA evidence, and SAR drafts are always a click away for BMA alignments.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/25 bg-white/10 p-5 text-sm text-slate-100/80">
              <p className="font-semibold text-white">Need additional regions?</p>
              <p className="mt-1 text-xs text-slate-100/70">
                Explore the full payment gateway catalogue powering our global clients.
              </p>
              <Button
                asChild
                size="sm"
                variant="ghost"
                className="mt-4 h-10 justify-start gap-2 rounded-xl border border-white/10 bg-white/10 px-3 text-white hover:bg-white/20"
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
              Bermuda payment pillars engineered for excellence
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Combine governance, precision, and concierge service to delight every stakeholder.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {PAYMENT_PILLARS.map((pillar) => (
              <article
                key={pillar.name}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-slate-200/70 bg-white/80 p-8 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <pillar.icon className="h-8 w-8 text-cyan-600 dark:text-cyan-300" />
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
              Delivery stages with full transparency
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Keep executives, regulators, and field leaders aligned from discovery to expansion.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {DELIVERY_STAGES.map((stage) => (
              <div
                key={stage.step}
                className="flex h-full flex-col gap-3 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-600 dark:text-cyan-300">
                  Phase {stage.step}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stage.headline}</h3>
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
              Assurance layers that protect your brand
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Governance, storytelling, and premium service are built into every deployment.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {ASSURANCE_LAYERS.map((assurance) => (
              <div
                key={assurance.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/60"
              >
                <assurance.icon className="h-7 w-7 text-cyan-600 dark:text-cyan-300" aria-hidden />
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
              Insights tailored to Bermuda&apos;s finance, compliance, and leadership teams.
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
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 dark:from-black dark:via-slate-900 dark:to-cyan-900" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.15),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(255,255,255,0.18),transparent_55%)]" aria-hidden />
        <div className="container mx-auto max-w-4xl space-y-6 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            Bermuda growth pledge
          </p>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
            Deliver luxury-grade payouts and regulator-ready control across Bermuda
          </h2>
          <p className="text-base text-white/80">
            Partner with Cloud MLM Software to combine governance, automation, and human expertise that matches Bermuda’s global
            reputation for financial excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
              <Link href={contactHref}>
                Schedule a strategy session
                <ArrowUpRight className="h-4 w-4 text-slate-700" aria-hidden />
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
