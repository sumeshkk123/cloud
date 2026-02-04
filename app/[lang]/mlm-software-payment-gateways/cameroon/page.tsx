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
  BarChart3,
  CircleDollarSign,
  Globe2,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  Handshake,
  MapTrifold,
  SealQuestion,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Cameroon MLM Payment Gateways | Cloud MLM Software",
  description:
    "Operationalize MLM payment gateways for Cameroon with banking, PSP, and compliance orchestration. Cloud MLM Software aligns BEAC policies, mobile money, and distributor payouts.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/cameroon"
  },
  openGraph: {
    title: "Cameroon MLM Payment Gateways",
    description:
      "Launch compliant MLM payment operations in Cameroon with harmonized bank, PSP, and mobile money integrations from Cloud MLM Software.",
    url: "/mlm-software-payment-gateways/cameroon"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  title: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Signal = {
  title: string;
  copy: string;
  icon: IconType;
};

type Capability = {
  title: string;
  body: string;
  icon: IconType;
  items: string[];
};

type Play = {
  phase: string;
  summary: string;
  outcome: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const KEY_METRICS: Metric[] = [
  {
    title: "Settlement tempo",
    value: "T+1.2 days",
    detail:
      "Automated reconciliation for BEAC-cleared bank transfers, MTN Mobile Money, and Orange Money withdrawals.",
    icon: Workflow
  },
  {
    title: "Gateway portfolio",
    value: "12 live rails",
    detail:
      "UBA, Afriland First Bank, PayPal, Stripe, PayU, Authorize.Net, Braintree, Adyen, 2Checkout, and local PSP bridges orchestrated in one policy.",
    icon: Bank
  },
  {
    title: "Compliance artefacts",
    value: "39 templates",
    detail:
      "COBAC-ready AML checklists, FX filings, and distributor communications in English and French.",
    icon: ShieldCheck
  }
];

const MARKET_SIGNALS: Signal[] = [
  {
    title: "Dual-currency operations",
    copy:
      "CFA franc dominance with growing USD inflows from diaspora leaders requires automated FX buffers and treasury oversight.",
    icon: CircleDollarSign
  },
  {
    title: "Mobile money gravity",
    copy:
      "70%+ of commission payouts now clear through MTN and Orange wallets. Agents expect instant withdrawals and chargeback logic.",
    icon: UsersThree
  },
  {
    title: "Regulatory synchronization",
    copy:
      "COBAC, BEAC, and Camtel policies demand demonstrable KYC, e-invoicing, and data residency safeguards for incentives.",
    icon: Globe2
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Banking core",
    body: "Connect BEAC network banks with configurable approval tiers and liquidity telemetry.",
    icon: ChartLineUp,
    items: [
      "Direct integrations for UBA, BICEC, Afriland First Bank, and Société Générale Cameroun.",
      "Escrow, settlement batching, and reserve monitoring with director approvals.",
      "Automated BEAC FX filings and treasury exports aligned to accounting cadences."
    ]
  },
  {
    title: "Mobile & PSP bridge",
    body: "Deliver consistent experiences across cards, wallets, and OTC agents.",
    icon: Handshake,
    items: [
      "Unified routing for MTN Mobile Money, Orange Money, PayPal, Stripe, and PayU.",
      "Chargeback, refund, and reversal playbooks mapped to finance and support workflows.",
      "Offline fallback and recon alerts to handle regional connectivity variability."
    ]
  },
  {
    title: "Distributor intelligence",
    body: "Empower field leaders with transparent insights and automated nudges.",
    icon: BarChart3,
    items: [
      "Commission drilldowns, statement history, and forecast widgets in English and French.",
      "Role-based controls for compliance, finance, and leadership with audit trails.",
      "Content blocks tuned for wellness, agri-distribution, and digital services verticals."
    ]
  }
];

const DELIVERY_PLAYS: Play[] = [
  {
    phase: "90-day activation",
    summary: "Design gateway mix, route pilots, and compliance guardrails.",
    outcome:
      "Signed-off PSP stack, automated KYC policies, and distributor onboarding narratives ready for rollout.",
    icon: Sparkles
  },
  {
    phase: "Scale orchestration",
    summary: "Expand to multi-country corridors and real-time performance monitoring.",
    outcome:
      "Cross-border settlements across CEMAC, Nigeria, and Europe with telemetry dashboards for uptime and fees.",
    icon: MapTrifold
  },
  {
    phase: "Continuous optimization",
    summary: "Iterate on AI-driven anomaly detection and commission forecasting.",
    outcome:
      "Predictive liquidity alerts, AI-supported distributor retention signals, and quarterly compliance attestation packs.",
    icon: Workflow
  }
];

const FAQS: FAQ[] = [
  {
    question: "Can Cloud MLM Software reconcile MTN and Orange Money payouts with card settlements?",
    answer:
      "Yes. We normalize wallet, card, and bank data into a single ledger, produce BEAC-aligned reconciliation files, and surface discrepancy workflows for finance and compliance teams."
  },
  {
    question: "How do you manage COBAC AML requirements for rapidly growing networks?",
    answer:
      "Our policy engine enforces tiered KYC, sanctions screening, and commission thresholds. Compliance teams receive audit-ready evidence packs and real-time alerts for unusual activity."
  },
  {
    question: "Do you support bilingual distributor communications?",
    answer:
      "All portal modules, statements, and automated nudges are delivered in English and French, with localization controls for sector-specific messaging."
  }
];

type CameroonPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function CameroonPaymentGatewayPage({ params }: CameroonPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-emerald-900 via-slate-950 to-slate-900 px-6 py-16 text-white shadow-xl lg:px-12">
          <div className="absolute inset-0 -z-10 opacity-25">
            <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-emerald-400/40 blur-3xl" />
            <div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-teal-500/30 blur-3xl" />
          </div>
          <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-emerald-100 backdrop-blur-sm">
                Cameroon | Payment Operations Blueprint
              </div>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Unite bank, PSP, and mobile money rails for Cameroon MLM growth.
              </h1>
              <p className="max-w-2xl text-base text-slate-200/85">
                Cloud MLM Software helps Cameroonian MLM enterprises deliver reliable collections and payouts. We fuse BEAC-compliant banking, mobile wallets, and cross-border PSPs into one governed experience with distributor-centric intelligence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                  <Link href={contactHref}>
                    Speak with a payment strategist
                    <ArrowUpRight className="h-4 w-4 text-slate-600" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/70 text-white hover:bg-white/10"
                >
                  <Link href={demoHref}>Explore the live platform</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              {KEY_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.title}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur"
                  >
                    <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-emerald-400/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <span className="text-xs uppercase tracking-wider text-emerald-200/80">
                          {metric.title}
                        </span>
                        <p className="text-2xl font-semibold text-white">{metric.value}</p>
                      </div>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-slate-200/70">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr,1.2fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Signals shaping the Cameroon payment landscape
            </h2>
            <p className="text-sm text-muted-foreground">
              Draw from market-specific insight to configure the right mix of gateways, compliance controls, and distributor services.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {MARKET_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article
                  key={signal.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-muted/50 p-6"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{signal.title}</h3>
                  <p className="text-sm text-muted-foreground">{signal.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Platform capabilities tuned for Cameroon
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Every module aligns to BEAC standards and the field expectations of Cameroonian distributors and customers.
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
              <article key={capability.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/50 bg-background p-8 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">{capability.body}</p>
                </div>
                <ul className="mt-2 space-y-3 text-sm text-muted-foreground">
                  {capability.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-primary/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="grid gap-12 lg:grid-cols-[1fr,1fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Delivery plays that sustain Cameroonian growth
            </h2>
            <p className="text-sm text-muted-foreground">
              Our playbooks fuse governance and innovation—ensuring rapid rollouts never compromise compliance or brand equity.
            </p>
          </div>
          <div className="grid gap-6">
            {DELIVERY_PLAYS.map((play) => {
              const Icon = play.icon;
              return (
                <article
                  key={play.phase}
                  className="rounded-3xl border border-border/60 bg-muted/40 p-6 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">{play.phase}</p>
                      <h3 className="text-lg font-semibold text-foreground">{play.summary}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{play.outcome}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Frequently asked in Cameroon engagements
          </h2>
          <p className="text-sm text-muted-foreground">
            Addressing the questions raised by payment, compliance, and leadership teams across wellness, financial services, and digital product sectors.
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
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-r from-emerald-500/15 via-emerald-600/20 to-slate-900 px-8 py-12 shadow-lg backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.2fr,0.8fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to orchestrate Cameroonian payments the Cloud way?
              </h2>
              <p className="text-sm text-muted-foreground">
                Partner with us to align gateway selection, compliance governance, and distributor enablement—so your teams can focus on strategy, not firefighting.
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
                  View demo environments
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
