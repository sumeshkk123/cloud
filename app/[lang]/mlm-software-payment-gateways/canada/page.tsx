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
  Check,
  Gauge,
  Globe2,
  Layers3,
  ShieldCheck,
  Sparkles,
  WalletCards
} from "lucide-react";
import { Bank, Buildings, ChartLineUp, Handshake, SealQuestion } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Canada MLM Payment Gateways | Cloud MLM Software",
  description:
    "Align Interac, card networks, and cross-border PSPs for Canada-focused MLM growth. Cloud MLM Software orchestrates FINTRAC-compliant collections and payouts.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/canada"
  },
  openGraph: {
    title: "Canada MLM Payment Gateways",
    description:
      "Deploy compliant MLM payment operations in Canada with Interac, card, ACH, and PSP orchestration powered by Cloud MLM Software.",
    url: "/mlm-software-payment-gateways/canada"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type FocusArea = {
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
  outcome: string;
  detail: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_STATS: Stat[] = [
  {
    label: "Interac readiness",
    value: "97% coverage",
    description: "Instant e-Transfer orchestration with automated cut-off management and settlement reconciliation.",
    icon: Gauge
  },
  {
    label: "Gateway footprint",
    value: "14 providers",
    description: "Moneris, Stripe, Adyen, PayPal, Square, Authorize.Net, PayU, and 2Checkout unified under one routing brain.",
    icon: Layers3
  },
  {
    label: "Compliance dossiers",
    value: "42 artefacts",
    description: "FINTRAC, PCMLTFA, and provincial disclosures templated for rapid audit responses.",
    icon: ShieldCheck
  }
];

const FOCUS_AREAS: FocusArea[] = [
  {
    title: "Interac-first culture",
    copy:
      "Design MLM purchase and payout paths that favour Interac for trust, while backing into cards and wallets when velocity spikes.",
    icon: WalletCards
  },
  {
    title: "Cross-border corridors",
    copy:
      "Coordinate USD settlements for Alberta and Ontario leaders expanding into the US and Caribbean without duplicating ledgers.",
    icon: Globe2
  },
  {
    title: "Bilingual enablement",
    copy:
      "Deliver narratives, dashboards, and compliance notifications in English and French across field and back-office teams.",
    icon: Buildings
  },
  {
    title: "Wellness & fintech niches",
    copy:
      "Tailor incentive logic to Canadian wellness, clean energy, and fintech MLM segments with province-aware tax handling.",
    icon: ChartLineUp
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Banking & Interac core",
    summary: "Couple Interac e-Transfers with ACH and EFT rails to ensure predictable liquidity.",
    bullets: [
      "Direct bank integrations: RBC, TD, BMO, Scotiabank, CIBC, Desjardins.",
      "Bulk e-Transfer, ACH, and wire automations mapped to treasury approvals.",
      "Bank statement ingestion with reconciliation into ERP or data lake destinations."
    ],
    icon: Bank
  },
  {
    title: "PSP smart-routing",
    summary: "Balance conversion, fee, and risk performance across cards, wallets, and BNPL methods.",
    bullets: [
      "Adaptive routing across Moneris, Stripe, Square, Adyen, and PayPal with uptime scoring.",
      "Chargeback, refund, and dispute automations aligned to FINTRAC evidence needs.",
      "Failover logic for Interac outages backed by card and wallet fallbacks."
    ],
    icon: Handshake
  },
  {
    title: "Distributor intelligence",
    summary: "Give field leaders real-time visibility into commissions, compliance, and growth signals.",
    bullets: [
      "Scenario modelling for provincial tax differences and volume-based incentives.",
      "Localized storytelling modules for Québec and Atlantic Canada business units.",
      "Predictive nudges highlighting churn risk, compliance gaps, and upsell opportunities."
    ],
    icon: Sparkles
  }
];

const DELIVERY_PLAYS: Play[] = [
  {
    stage: "Discovery sprint",
    outcome: "Interac, PSP, and compliance alignment plan",
    detail:
      "2-week stakeholder workshops mapping acquisition and payout flows, resulting in an annotated payment architecture and FINTRAC action log.",
    icon: Globe2
  },
  {
    stage: "90-day activation",
    outcome: "Orchestrated go-live across core rails",
    detail:
      "Sequential enablement of Interac, card, and ACH rails with telemetry dashboards and bilingual distributor training kits.",
    icon: ArrowUpRight
  },
  {
    stage: "Optimization & AI loop",
    outcome: "Predictive insights and audit readiness",
    detail:
      "Quarterly compliance drills, anomaly detection, and automated evidence packs surfaced to finance and compliance leadership.",
    icon: Sparkles
  }
];

const FAQS: FAQ[] = [
  {
    question: "Do you support Interac e-Transfer payouts alongside traditional ACH?",
    answer:
      "Yes. We orchestrate Interac alongside ACH and wire payments, handling limits, cut-off windows, and reconciliation into finance systems automatically."
  },
  {
    question: "How does Cloud MLM Software help with FINTRAC reporting?",
    answer:
      "Our compliance cockpit aggregates KYC events, suspicious activity alerts, and threshold-based reports, generating FINTRAC-ready exports with audit trails."
  },
  {
    question: "Can distributors view statements in English and French?",
    answer:
      "Bilingual mode is standard. Commission statements, dashboards, and knowledge bases are localized for English and French audiences with role-based controls."
  }
];

type CanadaPageProps = {
  params: { lang: SupportedLocale };
};

export default function CanadaPaymentGatewayPage({ params }: CanadaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-900 px-8 py-16 text-white shadow-2xl">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.35),transparent_58%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.25),transparent_55%)]" />
          <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-sky-100 backdrop-blur">
                Canada · Payment Orchestration Blueprint
              </div>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Build Interac-native MLM payment experiences trusted across Canada.
              </h1>
              <p className="max-w-2xl text-base text-slate-200/85">
                Cloud MLM Software blends Interac, card networks, ACH, and global PSPs into one governed fabric. We help
                Canadian enterprises scale responsibly with FINTRAC-aligned compliance and bilingual distributor journeys.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                  <Link href={contactHref}>
                    Talk to a Canadian payments strategist
                    <ArrowUpRight className="h-4 w-4 text-slate-600" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10">
                  <Link href={demoHref}>Tour the live platform</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5">
              {HERO_STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <article
                    key={stat.label}
                    className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-lg backdrop-blur transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-sky-200/90">{stat.label}</p>
                        <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
                      </div>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-slate-200/75">{stat.description}</p>
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
            Signals reshaping MLM payments in Canada
          </h2>
          <p className="text-sm text-muted-foreground">
            Translate market realities—Interac loyalty, bilingual expectations, and regulatory precision—into smarter
            gateway architecture.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FOCUS_AREAS.map((area) => {
            const Icon = area.icon;
            return (
              <article key={area.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Capabilities tuned for Canadian operations
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Every layer—banking, PSP routing, distributor enablement—is optimized for resilience across provinces and cross-border corridors.
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
              <article key={capability.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-muted/40 p-8 shadow-sm">
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
                      <Check className="mt-1 h-4 w-4 text-primary" aria-hidden />
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
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Proven playbooks, built for Canadian scaling
            </h2>
            <p className="text-sm text-muted-foreground">
              We compress activation timelines without compromising governance. Every play produces artefacts teams can share with leadership and regulators.
            </p>
          </div>
          <div className="grid gap-6">
            {DELIVERY_PLAYS.map((play) => {
              const Icon = play.icon;
              return (
                <article key={play.stage} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">{play.stage}</p>
                      <h3 className="text-lg font-semibold text-foreground">{play.outcome}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{play.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Questions from Canadian payment leaders
          </h2>
          <p className="text-sm text-muted-foreground">
            Addressing the compliance, treasury, and distributor experience questions that surface in every strategy workshop.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {FAQS.map((faq) => (
            <article key={faq.question} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-muted/40 p-6">
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
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-blue-600/15 via-slate-900 to-slate-950 px-8 py-12 shadow-xl">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to orchestrate Canadian payments together?
              </h2>
              <p className="text-sm text-muted-foreground">
                We blend governance, experience design, and intelligent automation so every commission run and purchase
                feels seamless.
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
