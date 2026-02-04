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
  AlarmCheck,
  ArrowUpRight,
  BarChart3,
  Building2,
  CandlestickChart,
  Globe2,
  Landmark,
  ShieldCheck,
  Wallet
} from "lucide-react";
import { Bank, ChartLineUp, Handshake, IdentificationBadge, MapTrifold, SealQuestion } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Chile MLM Payment Gateways | Cloud MLM Software",
  description:
    "Orchestrate Chilean MLM payments with banking, PSP, and compliance mastery. Cloud MLM Software aligns SBIF requirements, multi-currency corridors, and distributor enablement.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/chile"
  },
  openGraph: {
    title: "Chile MLM Payment Gateways",
    description:
      "Launch compliant MLM payment operations in Chile by uniting Transbank, PSPs, and cross-border rails through Cloud MLM Software.",
    url: "/mlm-software-payment-gateways/chile"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  title: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Insight = {
  title: string;
  description: string;
  icon: IconType;
};

type Capability = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type JourneyStep = {
  stage: string;
  focus: string;
  description: string;
  artefacts: string[];
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_METRICS: Metric[] = [
  {
    title: "Settlement rhythm",
    value: "T+1 Chilean business day",
    detail: "Transbank, Banco de Chile, Santander, and BCI settlements orchestrated with FX buffers.",
    icon: AlarmCheck
  },
  {
    title: "Gateway mix",
    value: "13 integrations",
    detail: "Transbank, Mercado Pago, Stripe, Adyen, PayPal, PayU, and Fiserv unified under adaptive routing.",
    icon: Wallet
  },
  {
    title: "Compliance artefacts",
    value: "41 dossiers",
    detail: "CMF (ex-SBIF) AML, data residency, and tax packs localized for Chilean regulators.",
    icon: ShieldCheck
  }
];

const MARKET_INSIGHTS: Insight[] = [
  {
    title: "Hybrid retail + digital journeys",
    description:
      "Chileans expect seamless transitions between physical pop-ups, ecommerce, and social commerce. Inventory and payment orchestration must be unified.",
    icon: Building2
  },
  {
    title: "Cross-border expansion",
    description:
      "Growth into Peru, Argentina, Colombia, and the US requires multi-currency routing, FX hedging, and double-entry tax readiness.",
    icon: Globe2
  },
  {
    title: "Financial inclusion push",
    description:
      "Fintech-friendly regulators encourage digital wallets and open banking APIs—an opportunity to diversify payout methods responsibly.",
    icon: Landmark
  },
  {
    title: "Wellness and tech verticals",
    description:
      "Chile’s wellness, education, and SaaS-driven MLMs need predictive analytics, compliance storytelling, and bilingual enablement.",
    icon: CandlestickChart
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Banking & treasury alignment",
    summary: "Keep CFOs and auditors confident with transparent settlements and FX control.",
    bullets: [
      "Direct integrations with Banco de Chile, Santander, Scotiabank, BCI, and Itau.",
      "Treasury dashboards balancing CLP, USD, and PEN exposures with predictive buffers.",
      "Reconciliation pipelines that produce CMF-ready evidence and ERP exports."
    ],
    icon: Bank
  },
  {
    title: "PSP & wallet orchestration",
    summary: "Connect Transbank, PSPs, and wallets into a performance-driven routing engine.",
    bullets: [
      "Adaptive routing across Transbank, Mercado Pago, Stripe, Adyen, PayPal, and PayU.",
      "Domestic and cross-border installments, BNPL, and card-on-file logic with telemetry.",
      "Chargeback omnichannel automation with dispute narratives localized for Chile."
    ],
    icon: Handshake
  },
  {
    title: "Distributor intelligence studio",
    summary: "Equip field leaders with real-time insights and compliance-ready knowledge.",
    bullets: [
      "Dashboards and statements in Spanish and English with customizable segments.",
      "Predictive nudges covering churn risk, coaching needs, and product adoption.",
      "Content playbooks that translate CMF compliance into distributor-friendly guidance."
    ],
    icon: ChartLineUp
  }
];

const JOURNEY: JourneyStep[] = [
  {
    stage: "Vision alignment",
    focus: "Diagnostic + expansion roadmap",
    description:
      "Workshops with finance, compliance, and field leadership produce an aligned stack blueprint and governance plan.",
    artefacts: ["Payment architecture map", "Compliance risk register", "Stakeholder briefing kit"],
    icon: MapTrifold
  },
  {
    stage: "Activation sprints",
    focus: "Gateway, banking, and wallet enablement",
    description:
      "Transbank, PSP, and bank integrations go live in waves, supported by telemetry dashboards and enablement packs.",
    artefacts: ["Integration runbooks", "Telemetry dashboards", "Distributor launch narratives"],
    icon: IdentificationBadge
  },
  {
    stage: "Optimization loop",
    focus: "AI insights + compliance drills",
    description:
      "Predictive analytics surface retention and compliance signals, while quarterly drills keep regulators satisfied.",
    artefacts: ["AI insight digests", "Quarterly compliance drill reports", "Executive scorecards"],
    icon: ChartLineUp
  }
];

const FAQS: FAQ[] = [
  {
    question: "How do you integrate with Transbank and local banks?",
    answer:
      "We connect to Transbank and major Chilean banks via secure APIs, automating settlement reconciliation, fee audits, and FX allocations."
  },
  {
    question: "Can Cloud MLM Software support cross-border expansion within LATAM?",
    answer:
      "Yes. We manage multi-currency routing, tax documentation, and regulatory compliance across Chile, Peru, Argentina, Colombia, and the US."
  },
  {
    question: "Do you provide bilingual distributor experiences?",
    answer:
      "Dashboards, statements, and automation cues are available in Spanish and English, tailored to product segments and leadership tiers."
  }
];

type ChilePageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function ChilePaymentGatewayPage({ params }: ChilePageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="container">
        <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-gradient-to-br from-slate-950 via-sky-900 to-rose-900 px-8 py-16 text-white shadow-2xl">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(244,63,94,0.25),transparent_55%)]" />
          <div className="space-y-10">
            <div className="grid gap-10 lg:grid-cols-[1.3fr,0.7fr] lg:items-start">
              <div className="space-y-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-sky-100 backdrop-blur">
                  Chile · Payment Expansion Blueprint
                </span>
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Unite Transbank, PSPs, and cross-border rails for Chilean MLM growth.
                </h1>
                <p className="max-w-2xl text-base text-slate-200/85">
                  Cloud MLM Software harmonizes Chilean banking partners, PSPs, and compliance mandates. We help enterprises deliver
                  high-converting experiences across physical and digital channels—while maintaining audit-ready governance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                    <Link href={contactHref}>
                      Talk with a Chile payments strategist
                      <ArrowUpRight className="h-4 w-4 text-slate-600" aria-hidden />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
                    <Link href={demoHref}>View platform walkthrough</Link>
                  </Button>
                </div>
              </div>
              <div className="grid gap-4">
                {HERO_METRICS.map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <article
                      key={metric.title}
                      className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-lg backdrop-blur transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-widest text-sky-100/80">{metric.title}</p>
                          <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
                        </div>
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
                          <Icon className="h-6 w-6" aria-hidden />
                        </span>
                      </div>
                      <p className="mt-4 text-sm text-slate-200/75">{metric.detail}</p>
                    </article>
                  );
                })}
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-4">
              {MARKET_INSIGHTS.map((insight) => {
                const Icon = insight.icon;
                return (
                  <article key={insight.title} className="flex h-full flex-col gap-3 rounded-3xl border border-white/15 bg-white/10 p-5 shadow-lg backdrop-blur">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{insight.title}</h3>
                    <p className="text-sm text-slate-200/75">{insight.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Capabilities refined for Chilean operations
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Each capability keeps revenue growth and regulatory confidence moving in tandem.
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
          <div className="grid gap-10 p-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Journey with Cloud MLM Software
              </h2>
              <p className="text-sm text-muted-foreground">
                Structured phases ensure every stakeholder—finance, compliance, field leaders—moves with confidence.
              </p>
            </div>
            <div className="space-y-6">
              {JOURNEY.map((step) => {
                const Icon = step.icon;
                return (
                  <article key={step.stage} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <div className="flex flex-col">
                          <span className="text-xs uppercase tracking-wider text-muted-foreground">{step.stage}</span>
                          <h3 className="text-lg font-semibold text-foreground">{step.focus}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {step.artefacts.map((artefact) => (
                            <li key={artefact} className="flex items-start gap-2">
                              <span className="mt-1 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-primary/60" />
                              <span>{artefact}</span>
                            </li>
                          ))}
                        </ul>
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
            Frequently asked in Chile engagements
          </h2>
          <p className="text-sm text-muted-foreground">
            We document the questions raised by Chilean CFOs, compliance leads, and distributor councils to keep projects on track.
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
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-r from-sky-500/15 via-rose-500/15 to-slate-900 px-8 py-12 shadow-xl backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to orchestrate Chile-first payment excellence?
              </h2>
              <p className="text-sm text-muted-foreground">
                Partner with Cloud MLM Software to align revenue growth, compliance, and distributor trust under one platform.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Plan your rollout
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
