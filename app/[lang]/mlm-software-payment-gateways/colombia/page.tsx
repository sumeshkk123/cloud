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
  Building2,
  Globe2,
  Landmark,
  Layers3,
  TrendingUp,
  ShieldCheck
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
  title: "Colombia MLM Payment Gateways | Cloud MLM Software",
  description:
    "Orchestrate Colombia-focused MLM payments with banking, PSP, and compliance excellence from Cloud MLM Software.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/colombia"
  },
  openGraph: {
    title: "Colombia MLM Payment Gateways",
    description:
      "Unite Colombian banking, PSPs, and cross-border rails to scale MLM operations with Cloud MLM Software.",
    url: "/mlm-software-payment-gateways/colombia"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type Opportunity = {
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

type Stage = {
  phase: string;
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
    label: "Settlement tempo",
    value: "T+1 business day",
    description: "Bancolombia, Davivienda, BBVA, and Banco de Bogotá clearing with FX telemetry.",
    icon: TrendingUp
  },
  {
    label: "Gateway ecosystem",
    value: "12 providers",
    description: "PayU, Mercado Pago, Stripe, Adyen, PayPal, Redeban, and Wompi orchestrated with routing logic.",
    icon: Layers3
  },
  {
    label: "Compliance artefacts",
    value: "36 dossiers",
    description: "SFC, DIAN, and Habeas Data documentation with bilingual narratives for teams and regulators.",
    icon: ShieldCheck
  }
];

const OPPORTUNITIES: Opportunity[] = [
  {
    title: "Hybrid channel adoption",
    description:
      "Colombian distributors navigate physical storefronts, social commerce, and ecommerce simultaneously—requiring unified inventory and payment flows.",
    icon: Building2
  },
  {
    title: "Cross-border corridors",
    description:
      "Expansion into Mexico, Peru, Ecuador, and the US demands multi-currency routing, FX hedging, and localized tax documentation.",
    icon: Globe2
  },
  {
    title: "Regulatory vigilance",
    description:
      "SFC and Habeas Data frameworks require auditable KYC, consent, and reporting workflows under Colombia-specific rules.",
    icon: Landmark
  },
  {
    title: "Wellness & fintech verticals",
    description:
      "Segments like wellness, agri-tech, and fintech expect data-rich dashboards, retention insights, and proactive compliance cues.",
    icon: BarChart3
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Banking & treasury orchestration",
    summary: "Balance cash flow, FX, and compliance across Colombian banks and global entities.",
    bullets: [
      "Integrations with Bancolombia, Davivienda, Banco de Bogotá, and BBVA covering reconciliation automation.",
      "Liquidity dashboards spanning COP, USD, and PEN exposures with predictive alerts.",
      "Automated bank statement ingest producing ERP and regulatory exports for finance teams."
    ],
    icon: Bank
  },
  {
    title: "PSP & wallet intelligence",
    summary: "Maximize conversion by routing across local PSPs, wallets, and cards with telemetry.",
    bullets: [
      "Adaptive routing across PayU, Mercado Pago, Wompi, Stripe, Adyen, and PayPal.",
      "Installments, recurring billing, and COD workflows aligned to Colombian consumer expectations.",
      "Chargeback automation with evidence packs localized for PayU and card network standards."
    ],
    icon: Handshake
  },
  {
    title: "Distributor intelligence studio",
    summary: "Deliver actionable insights and compliance guardrails in Spanish and English.",
    bullets: [
      "Dashboards highlighting commission health, tax withholdings, and growth momentum.",
      "AI-driven nudges covering churn risk, coaching opportunities, and compliance tasks.",
      "Knowledge base aligned to Colombian regulations and cross-border expansion playbooks."
    ],
    icon: ChartLineUp
  }
];

const STAGES: Stage[] = [
  {
    phase: "Blueprint",
    focus: "Diagnostic + regulator alignment",
    description:
      "Stakeholder workshops map payment stack priorities, compliance requirements, and distributor ambitions into a sequenced roadmap.",
    icon: MapTrifold
  },
  {
    phase: "Activation",
    focus: "Gateway + banking enablement",
    description:
      "Deploy integrations in waves with telemetry dashboards covering conversion, decline reasons, and settlement health.",
    icon: IdentificationBadge
  },
  {
    phase: "Optimization",
    focus: "AI insights + compliance drills",
    description:
      "Quarterly retros deliver predictive insights, DIAN-ready reports, and distributor enablement updates.",
    icon: ChartLineUp
  }
];

const FAQS: FAQ[] = [
  {
    question: "Do you integrate with PayU, Wompi, and Mercado Pago?",
    answer:
      "Yes. We orchestrate PayU, Wompi, Mercado Pago, and global PSPs, delivering routing logic, telemetry, and dispute automation."
  },
  {
    question: "How do you manage DIAN and SFC compliance?",
    answer:
      "Our platform automates DIAN tax reporting, SFC AML workflows, and Habeas Data consent logs with audit-ready exports."
  },
  {
    question: "Can distributors self-serve in Spanish and English?",
    answer:
      "Dashboards, statements, and alerts are localized for both languages, tailored to leadership levels and product segments."
  }
];

type ColombiaPageProps = {
  params: { lang: SupportedLocale };
};

export default function ColombiaPaymentGatewayPage({ params }: ColombiaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="container">
        <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-gradient-to-br from-slate-950 via-amber-900 to-blue-900 px-8 py-16 text-white shadow-2xl">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(245,158,11,0.3),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(37,99,235,0.28),transparent_55%)]" />
          <div className="space-y-10">
            <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
              <div className="space-y-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-amber-100 backdrop-blur">
                  Colombia · Payment Expansion Blueprint
                </span>
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Power Colombia-first MLM growth with orchestrated payments and compliance.
                </h1>
                <p className="max-w-2xl text-base text-slate-200/85">
                  Cloud MLM Software unites Colombian banking partners, PSPs, and distributor tooling into a single governed experience.
                  Deliver fast checkout, transparent payouts, and regulator-ready evidence without slowing innovation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                    <Link href={contactHref}>
                      Speak with a Colombia strategist
                      <ArrowUpRight className="h-4 w-4 text-slate-600" aria-hidden />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
                    <Link href={demoHref}>Explore the platform</Link>
                  </Button>
                </div>
              </div>
              <div className="grid gap-4">
                {HERO_METRICS.map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <article
                      key={metric.label}
                      className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-lg backdrop-blur transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-widest text-amber-100/80">{metric.label}</p>
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
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Market opportunities shaping your payment strategy
          </h2>
          <p className="text-sm text-muted-foreground">
            Align payment decisions with Colombia’s consumer behaviours, regulatory mandates, and growth ambitions.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {OPPORTUNITIES.map((opportunity) => {
            const Icon = opportunity.icon;
            return (
              <article key={opportunity.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-muted/40 p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{opportunity.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{opportunity.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Capabilities engineered for Colombian operations
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Keep finance, compliance, and distributor leaders aligned with modules built for the Colombian market.
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
                Implementation path with Cloud MLM Software
              </h2>
              <p className="text-sm text-muted-foreground">
                Structured stages keep your rollout on pace while meeting regulatory expectations.
              </p>
            </div>
            <div className="grid gap-6">
              {STAGES.map((stage) => {
                const Icon = stage.icon;
                return (
                  <article key={stage.phase} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <div className="flex flex-col">
                          <span className="text-xs uppercase tracking-wider text-muted-foreground">{stage.phase}</span>
                          <h3 className="text-lg font-semibold text-foreground">{stage.focus}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{stage.description}</p>
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
            Frequently asked in Colombia engagements
          </h2>
          <p className="text-sm text-muted-foreground">
            Provide clarity to finance, compliance, and distributor councils as they modernize payments.
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
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-r from-amber-500/15 via-blue-500/15 to-slate-900 px-8 py-12 shadow-xl backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to orchestrate Colombia-first payment excellence?
              </h2>
              <p className="text-sm text-muted-foreground">
                Partner with Cloud MLM Software to unite growth, compliance, and distributor trust under one platform.
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
