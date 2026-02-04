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
  Globe2,
  Layers3,
  ShieldCheck,
  Sparkles
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
  title: "Croatia MLM Payment Gateways | Cloud MLM Software",
  description:
    "Orchestrate Croatia-focused MLM payments with banking, PSP, and compliance excellence powered by Cloud MLM Software.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/croatia"
  },
  openGraph: {
    title: "Croatia MLM Payment Gateways",
    description:
      "Unify Croatian banks, PSPs, and EU compliance requirements to scale MLM operations with Cloud MLM Software.",
    url: "/mlm-software-payment-gateways/croatia"
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
  copy: string;
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
    label: "Settlement rhythm",
    value: "T+1 eurozone day",
    description: "HNB-cleared settlements across Zagrebačka banka, PBZ, Erste, and OTP with SEPA and TARGET balances.",
    icon: AlarmCheck
  },
  {
    label: "Gateway ecosystem",
    value: "13 integrations",
    description: "PayU, WSPay, CorvusPay, Stripe, Adyen, PayPal, and card acquirers orchestrated with routing intelligence.",
    icon: Layers3
  },
  {
    label: "Compliance artefacts",
    value: "42 dossiers",
    description: "HNB, GDPR, and EU AML documentation localized for Croatian finance and compliance teams.",
    icon: ShieldCheck
  }
];

const OPPORTUNITIES: Opportunity[] = [
  {
    title: "Hybrid commerce adoption",
    copy: "Distributors mix retail, ecommerce, and event-driven journeys, requiring unified inventory and payment orchestration.",
    icon: Building2
  },
  {
    title: "EU expansion corridors",
    copy: "Scaling into Slovenia, Hungary, Austria, and Germany demands multi-entity FX control and tax harmonization.",
    icon: Globe2
  },
  {
    title: "Regulatory vigilance",
    copy: "HNB, GDPR, and EU AML directives demand granular consent, reporting, and audit-ready workflows.",
    icon: BarChart3
  },
  {
    title: "Digital-first distributors",
    copy: "Wellness, travel, and fintech MLMs expect real-time dashboards, AI insights, and bilingual enablement.",
    icon: Sparkles
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Banking & treasury intelligence",
    summary: "Stay euro-ready with liquidity dashboards, FX controls, and automated reporting.",
    bullets: [
      "Integrations with Zagrebačka banka, PBZ, Erste Bank, and OTP covering settlement automation.",
      "Treasury dashboards balancing EUR, USD, and regional currencies with predictive alerts.",
      "Automated statement ingest producing ERP, SEPA, and regulator-ready exports."
    ],
    icon: Bank
  },
  {
    title: "PSP & acquirer orchestration",
    summary: "Route across Croatian and EU PSPs to maximize conversion and manage risk.",
    bullets: [
      "Smart routing across WSPay, CorvusPay, PayU, Stripe, Adyen, and PayPal with performance scoring.",
      "Support for card installments, Apple Pay, Google Pay, and SEPA Instant payouts.",
      "Chargeback automation with PSD2-compliant evidence packs and dispute workflows."
    ],
    icon: Handshake
  },
  {
    title: "Distributor intelligence studio",
    summary: "Deliver insight-rich dashboards and compliance cues in Croatian and English.",
    bullets: [
      "Dashboards covering commission health, VAT obligations, and churn signals.",
      "AI narratives surfacing coaching opportunities, compliance tasks, and market expansion cues.",
      "Knowledge base aligned to EU data privacy, VAT, and consumer protection requirements."
    ],
    icon: ChartLineUp
  }
];

const STAGES: Stage[] = [
  {
    phase: "Blueprint",
    focus: "Diagnostic + EU compliance alignment",
    description:
      "Stakeholder sessions capture gateway priorities, GDPR mandates, and distributor expectations to form a sequenced roadmap.",
    icon: MapTrifold
  },
  {
    phase: "Activation",
    focus: "Gateway + banking enablement",
    description:
      "Roll out integrations with telemetry on conversion, decline reasons, PSD2 SCA health, and settlement accuracy.",
    icon: IdentificationBadge
  },
  {
    phase: "Optimization",
    focus: "AI insights + compliance drills",
    description:
      "Quarterly retros deliver predictive analytics, GDPR audit rehearsals, and distributor enablement updates.",
    icon: ChartLineUp
  }
];

const FAQS: FAQ[] = [
  {
    question: "Do you integrate with Croatian PSPs like WSPay and CorvusPay?",
    answer:
      "Yes. We orchestrate WSPay, CorvusPay, PayU, Stripe, Adyen, and card acquirers, automating routing, PSD2 compliance, and reconciliation."
  },
  {
    question: "How are HNB and GDPR requirements managed?",
    answer:
      "Our compliance cockpit automates AML/KYC, consent management, and GDPR evidence packs, providing audit-ready exports for regulators."
  },
  {
    question: "Can distributors access dashboards in Croatian and English?",
    answer:
      "Dashboards, statements, and knowledge bases are localized for Croatian and English audiences, aligned to leadership tiers."
  }
];

type CroatiaPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function CroatiaPaymentGatewayPage({ params }: CroatiaPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="container">
        <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-gradient-to-br from-slate-950 via-blue-900 to-emerald-900 px-8 py-16 text-white shadow-2xl">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_25%,rgba(37,99,235,0.32),transparent_55%),radial-gradient(circle_at_82%_20%,rgba(16,185,129,0.28),transparent_55%)]" />
          <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-sky-100 backdrop-blur">
                Croatia · Payment Operating Blueprint
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Align Croatian payments, compliance, and distributor experience under one platform.
              </h1>
              <p className="max-w-2xl text-base text-slate-200/85">
                Cloud MLM Software unites Croatian banks, PSPs, and EU compliance expectations into a single orchestrated fabric. Deliver seamless checkout, predictable payouts, and audit-ready evidence while expanding across Europe.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                  <Link href={contactHref}>
                    Schedule a Croatia strategy session
                    <ArrowUpRight className="h-4 w-4 text-slate-600" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
                  <Link href={demoHref}>View the platform</Link>
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
                        <p className="text-xs uppercase tracking-widest text-sky-100/80">{metric.label}</p>
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
            Signals shaping Croatia payment strategy
          </h2>
          <p className="text-sm text-muted-foreground">
            Anchor your roadmap to the realities of Croatian consumers, EU compliance mandates, and distributor expectations.
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
                <p className="text-sm text-muted-foreground">{opportunity.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Capabilities engineered for Croatian operations
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Each module keeps finance, compliance, and distributor leaders coordinated across the EU.
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
                Implementation stages with Cloud MLM Software
              </h2>
              <p className="text-sm text-muted-foreground">
                Structured phases keep activation predictable while exceeding EU compliance expectations.
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
            Frequently asked in Croatia engagements
          </h2>
          <p className="text-sm text-muted-foreground">
            Provide finance, compliance, and distributor stakeholders with clarity before you launch.
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
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-r from-blue-500/15 via-emerald-500/15 to-slate-900 px-8 py-12 shadow-xl backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to orchestrate Croatia-first payment excellence?
              </h2>
              <p className="text-sm text-muted-foreground">
                Partner with Cloud MLM Software to align growth, compliance, and distributor trust under a single payment operating system.
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
