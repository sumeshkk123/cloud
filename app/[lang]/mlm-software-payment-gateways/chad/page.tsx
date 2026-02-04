import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ArrowUpRight,
  BarChart2,
  Compass,
  Cpu,
  Globe2,
  Layers3,
  ShieldCheck,
  Waves
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  Handshake,
  IdentificationBadge,
  MapTrifold,
  SealQuestion
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Chad MLM Payment Gateways | Cloud MLM Software",
  description:
    "Unify bank, mobile money, and compliance workflows for Chad MLM operations. Cloud MLM Software streamlines BEAC oversight, Sahel corridors, and distributor enablement.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/chad"
  },
  openGraph: {
    title: "Chad MLM Payment Gateways",
    description:
      "Deploy resilient MLM payment experiences in Chad by harmonizing banks, mobile wallets, and compliance using Cloud MLM Software.",
    url: "/mlm-software-payment-gateways/chad"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type Insight = {
  title: string;
  copy: string;
  icon: IconType;
};

type Capability = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Play = {
  stage: string;
  focus: string;
  description: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Settlement window",
    value: "T+1.7 days",
    description: "Harmonized settlement across BGFIBank, ECOBANK, Commercial Bank Tchad, and BEAC clearing.",
    icon: Waves
  },
  {
    label: "Gateway coverage",
    value: "10 channels",
    description: "Orange Money, Moov Money, PayU, PayPal, Stripe, 2Checkout, and cash agent flows unified.",
    icon: Layers3
  },
  {
    label: "Compliance artefacts",
    value: "33 dossiers",
    description: "AML/CFT, BEAC mandates, and tax reporting packs tailored for Chadian regulators and finance teams.",
    icon: ShieldCheck
  }
];

const MARKET_INSIGHTS: Insight[] = [
  {
    title: "Mobile-first payouts",
    copy:
      "Distributors prefer Orange Money and Moov Money for instant liquidity. Offline-ready playbooks stabilise payouts in regional hubs.",
    icon: BarChart2
  },
  {
    title: "Sahel corridor trade",
    copy:
      "Cross-border activity with Cameroon, Niger, and Nigeria demands FX-aware routing and transparent settlement reporting.",
    icon: Compass
  },
  {
    title: "Energy & agri verticals",
    copy:
      "Energy transition and agri-business MLMs require bilingual enablement, environmental compliance, and transparent incentives.",
    icon: Globe2
  },
  {
    title: "Infrastructure variability",
    copy:
      "Connectivity gaps across N'Djamena, Moundou, and Abéché call for edge caching, offline capture, and smart alerting.",
    icon: Cpu
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Banking & treasury synchronization",
    summary: "Automate settlements, FX logic, and visibility across Chadian and regional banks.",
    bullets: [
      "Direct integrations with BGFIBank, ECOBANK, and Commercial Bank Tchad.",
      "Treasury dashboards balancing CFA franc, USD, and EUR exposures with alerting.",
      "Automated reconciliation feeds ready for ERP, BI, and regulator consumption."
    ],
    icon: Bank
  },
  {
    title: "PSP & wallet orchestration",
    summary: "Deliver consistent customer and distributor experiences across mobile and card rails.",
    bullets: [
      "Unified Orange Money and Moov Money flows with configurable limits and fees.",
      "Fallback routing to Stripe, PayU, PayPal, and 2Checkout when wallets degrade.",
      "Chargeback, refund, and dispute automation with localized evidence packs."
    ],
    icon: Handshake
  },
  {
    title: "Distributor intelligence cockpit",
    summary: "Provide real-time insight and compliance cues to field leaders and coaches.",
    bullets: [
      "Dashboards in French and Arabic with commission, tax, and performance visibility.",
      "Predictive nudges covering churn risk, compliance gaps, and coaching opportunities.",
      "Knowledge assets explaining cross-border obligations, KYC status, and growth playbooks."
    ],
    icon: ChartLineUp
  }
];

const PLAYBOOK: Play[] = [
  {
    stage: "Alignment",
    focus: "Diagnostic + vision workshop",
    description:
      "Stakeholder sessions define target payment stack, compliance posture, and distributor experience outcomes.",
    icon: MapTrifold
  },
  {
    stage: "Execution",
    focus: "Gateway activation sprints",
    description:
      "Enable banking, PSP, and wallet integrations with telemetry on uptime, decline reasons, and fee performance.",
    icon: IdentificationBadge
  },
  {
    stage: "Optimization",
    focus: "AI-driven growth loop",
    description:
      "Embed predictive insights, compliance drills, and continuous enablement to keep the network resilient.",
    icon: ChartLineUp
  }
];

const FAQS: FAQ[] = [
  {
    question: "How do you handle payouts in regions with limited connectivity?",
    answer:
      "We equip field teams with offline capture modes for Orange and Moov wallets, automatically synchronizing transactions and reconciliations once connectivity returns."
  },
  {
    question: "Can Cloud MLM Software align with BEAC and Chadian regulators?",
    answer:
      "Yes. We provide AML/CFT workflows, reporting templates, and audit trails that align with BEAC mandates and local regulatory expectations."
  },
  {
    question: "Do you support multi-language distributor experiences?",
    answer:
      "Dashboards, statements, and communications are available in French and Arabic, with localized narratives for sector-specific needs."
  }
];

type ChadPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function ChadPaymentGatewayPage({ params }: ChadPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="container">
        <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-gradient-to-br from-slate-950 via-emerald-900 to-teal-900 px-8 py-16 text-white shadow-2xl">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.35),transparent_58%),radial-gradient(circle_at_85%_20%,rgba(45,212,191,0.32),transparent_60%)]" />
          <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-emerald-100 backdrop-blur">
                Chad · Payment Orchestration Playbook
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Deliver resilient MLM payments across N&apos;Djamena and the Sahel corridor.
              </h1>
              <p className="max-w-2xl text-base text-slate-200/85">
                Cloud MLM Software unifies banking partners, mobile wallets, and compliance workflows into one governed fabric.
                We help Chadian MLM enterprises provide dependable collections and payouts even when connectivity is uneven.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                  <Link href={contactHref}>
                    Speak with a Sahel strategist
                    <ArrowUpRight className="h-4 w-4 text-slate-600" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
                  <Link href={demoHref}>Explore the platform</Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-lg backdrop-blur transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-emerald-100/80">{metric.label}</p>
                        <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
                      </div>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-slate-200/75">{metric.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Insights guiding Chadian payment strategy
          </h2>
          <p className="text-sm text-muted-foreground">
            Align gateway decisions with the realities of distributors, regulators, and cross-border partners.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {MARKET_INSIGHTS.map((insight) => {
            const Icon = insight.icon;
            return (
              <article key={insight.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-muted/50 p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{insight.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{insight.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Capabilities built for Chad operations
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Each capability reinforces trust with banking partners, wallet providers, and distributors.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href={pricingHref}>
              Review pricing frameworks
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-8 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">{capability.summary}</p>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {capability.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-primary/70" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/40">
          <div className="grid gap-10 p-8 lg:grid-cols-[0.85fr,1.15fr] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Playbook for a resilient rollout
              </h2>
              <p className="text-sm text-muted-foreground">
                Structured stages ensure activation moves quickly while governance keeps pace.
              </p>
            </div>
            <div className="grid gap-6">
              {PLAYBOOK.map((play) => {
                const Icon = play.icon;
                return (
                  <article key={play.stage} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <div className="flex flex-col">
                          <span className="text-xs uppercase tracking-wider text-muted-foreground">{play.stage}</span>
                          <h3 className="text-lg font-semibold text-foreground">{play.focus}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{play.description}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Frequently asked in Chad engagements
          </h2>
          <p className="text-sm text-muted-foreground">
            Clarity for finance, compliance, and distributor leaders driving Sahel expansion.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {FAQS.map((faq) => (
            <article key={faq.question} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <SealQuestion className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground">{faq.question}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-slate-900 px-8 py-12 shadow-xl backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to orchestrate Chad-focused payment excellence?
              </h2>
              <p className="text-sm text-muted-foreground">
                Join Cloud MLM Software to harmonize banking, mobile money, and compliance under a single intelligent platform.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Design your rollout
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href={demoHref}>
                  Explore live environments
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
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
  if (!isSupportedLocale(lang)) {
    return i18n.defaultLocale as Locale;
  }

  return lang as Locale;
}
