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
  Gauge,
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
  title: "Comoros MLM Payment Gateways | Cloud MLM Software",
  description:
    "Unify banking, mobile money, and compliance for Comoros MLM operations with Cloud MLM Software.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/comoros"
  },
  openGraph: {
    title: "Comoros MLM Payment Gateways",
    description:
      "Launch compliant MLM payment experiences across the Comoros islands with Cloud MLM Software’s orchestration engine.",
    url: "/mlm-software-payment-gateways/comoros"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  title: string;
  value: string;
  detail: string;
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

type Step = {
  label: string;
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
    title: "Settlement rhythm",
    value: "T+1.8 days",
    detail: "Banque Centrale des Comores oversight with BFC, Exim Bank, and Société Générale clearing.",
    icon: Gauge
  },
  {
    title: "Gateway coverage",
    value: "8 rails",
    detail: "Telma Mobile Money, Mvola, PayPal, Stripe, PayU, and cash agent flows orchestrated with policy control.",
    icon: Layers3
  },
  {
    title: "Compliance artefacts",
    value: "31 packs",
    detail: "AML/CFT, regional tax, and cross-border documentation localized for Comoros and Indian Ocean regulators.",
    icon: ShieldCheck
  }
];

const OPPORTUNITIES: Opportunity[] = [
  {
    title: "Mobile money reliance",
    copy: "Distributors prefer Telma and Mvola wallets. Offline-ready workflows protect cash flow when connectivity dips.",
    icon: Waves
  },
  {
    title: "Diaspora corridors",
    copy: "Flows from France, Madagascar, and East Africa require multi-currency routing and FX visibility.",
    icon: Globe2
  },
  {
    title: "Tourism & services growth",
    copy: "Boutique tourism and services networks need seasonal onboarding, transparent incentives, and compliance visibility.",
    icon: BarChart2
  },
  {
    title: "Regulatory coordination",
    copy: "Banque Centrale des Comores and regional authorities expect evidence-backed AML/KYC and tax reporting.",
    icon: Compass
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Banking & treasury synchronization",
    summary: "Automate settlement, FX controls, and liquidity visibility across Comorian banks.",
    bullets: [
      "Integrations with BFC Bank, Exim Bank Comores, and Société Générale Comores.",
      "Liquidity dashboards spanning KMF, EUR, and USD with predictive alerts for treasury teams.",
      "Reconciliation pipelines generating regulator-ready exports and ERP feeds."
    ],
    icon: Bank
  },
  {
    title: "Mobile money orchestration",
    summary: "Unify wallet, cash agent, and card flows into one governed experience.",
    bullets: [
      "Routing across Telma Mobile Money, Mvola, and PayPal with fallback logic.",
      "Offline capture for leaders operating in regions with intermittent connectivity.",
      "Dispute and refund automation synced with finance, support, and compliance workflows."
    ],
    icon: Handshake
  },
  {
    title: "Distributor intelligence",
    summary: "Empower leaders with narratives, alerts, and compliance prompts in French and Arabic.",
    bullets: [
      "Dashboards covering commissions, onboarding progress, and tax obligations.",
      "AI nudges flagging churn risk, training needs, and compliance follow-ups.",
      "Knowledge libraries aligned to tourism, services, and micro-entrepreneur segments."
    ],
    icon: ChartLineUp
  }
];

const IMPLEMENTATION_STEPS: Step[] = [
  {
    label: "Blueprint",
    focus: "Payment & compliance diagnostics",
    description:
      "Stakeholder workshops align banking partners, wallet priorities, and regulator expectations into an actionable plan.",
    icon: MapTrifold
  },
  {
    label: "Activation",
    focus: "Integration sprints",
    description:
      "Enable bank, wallet, and PSP flows with telemetry on uptime, fees, and reconciliation health.",
    icon: IdentificationBadge
  },
  {
    label: "Optimization",
    focus: "Analytics & compliance drills",
    description:
      "Quarterly reviews surface AI insights, regulator rehearsal outcomes, and distributor enablement updates.",
    icon: ChartLineUp
  }
];

const FAQS: FAQ[] = [
  {
    question: "Can you support Telma and Mvola mobile money flows?",
    answer:
      "Yes. We integrate Telma and Mvola wallets, providing routing logic, offline capture, and reconciliation automation."
  },
  {
    question: "How are AML and tax requirements addressed?",
    answer:
      "Our compliance cockpit automates KYC, AML, and tax reporting, producing Banque Centrale des Comores-ready evidence sets."
  },
  {
    question: "Do you provide bilingual distributor experiences?",
    answer:
      "Dashboards, statements, and messaging are available in French and Arabic, tailored to distributor roles and sectors."
  }
];

type ComorosPageProps = {
  params: { lang: SupportedLocale };
};

export default function ComorosPaymentGatewayPage({ params }: ComorosPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="container">
        <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-gradient-to-br from-slate-950 via-emerald-900 to-cyan-900 px-8 py-16 text-white shadow-2xl">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.32),transparent_55%),radial-gradient(circle_at_85%_25%,rgba(6,182,212,0.28),transparent_60%)]" />
          <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-emerald-100 backdrop-blur">
                Comoros · Payment Operating Blueprint
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Orchestrate resilient MLM payments across the Comoros islands.
              </h1>
              <p className="max-w-2xl text-base text-slate-200/85">
                Cloud MLM Software unites banking partners, mobile wallets, and compliance guardrails into one orchestrated platform.
                Deliver trusted customer experiences and predictable payouts despite infrastructure variability.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                  <Link href={contactHref}>
                    Plan your Comoros rollout
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
                    key={metric.title}
                    className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-lg backdrop-blur transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-emerald-100/80">{metric.title}</p>
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
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Opportunities shaping Comoros payment strategy
          </h2>
          <p className="text-sm text-muted-foreground">
            Build your roadmap around the realities of island commerce, diaspora demand, and regulatory expectations.
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
              Capabilities engineered for Comorian operations
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Each capability keeps finance, compliance, and distributor leaders coordinated.
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
                Structured stages deliver momentum while preserving compliance discipline.
              </p>
            </div>
            <div className="grid gap-6">
              {IMPLEMENTATION_STEPS.map((step) => {
                const Icon = step.icon;
                return (
                  <article key={step.label} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <div className="flex flex-col">
                          <span className="text-xs uppercase tracking-wider text-muted-foreground">{step.label}</span>
                          <h3 className="text-lg font-semibold text-foreground">{step.focus}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
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
            Frequently asked in Comoros engagements
          </h2>
          <p className="text-sm text-muted-foreground">
            Addressing the recurring questions from finance, compliance, and distributor leadership teams.
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
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-r from-emerald-500/15 via-cyan-500/15 to-slate-900 px-8 py-12 shadow-xl backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to orchestrate Comoros-first payment excellence?
              </h2>
              <p className="text-sm text-muted-foreground">
                Partner with Cloud MLM Software to keep banking, mobile money, and distributors synchronized under one platform.
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
