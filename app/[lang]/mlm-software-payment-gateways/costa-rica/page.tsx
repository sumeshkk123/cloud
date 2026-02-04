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
  title: "Costa Rica MLM Payment Gateways | Cloud MLM Software",
  description:
    "Transform Costa Rica-focused MLM payments with banking, PSP, and compliance orchestration from Cloud MLM Software.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/costa-rica"
  },
  openGraph: {
    title: "Costa Rica MLM Payment Gateways",
    description:
      "Unify Costa Rican banking, PSPs, and distributor experiences to scale MLM operations with Cloud MLM Software.",
    url: "/mlm-software-payment-gateways/costa-rica"
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
    label: "Settlement tempo",
    value: "T+1 business day",
    description: "BAC Credomatic, Banco Nacional, and Banco de Costa Rica clearing orchestrated with FX telemetry.",
    icon: AlarmCheck
  },
  {
    label: "Gateway ecosystem",
    value: "11 integrations",
    description: "PayU, BAC Gateway, Stripe, Adyen, PayPal, Wompi, and Sinpe Móvil orchestrated with routing policies.",
    icon: Layers3
  },
  {
    label: "Compliance artefacts",
    value: "38 dossiers",
    description: "SUGEF, Hacienda, and data privacy documentation localized for Costa Rican regulators.",
    icon: ShieldCheck
  }
];

const OPPORTUNITIES: Opportunity[] = [
  {
    title: "Omnichannel adoption",
    copy: "Costa Rican distributors blend retail, ecommerce, and Sinpe Móvil experiences—demanding unified inventory and payment flows.",
    icon: Building2
  },
  {
    title: "Eco-tourism and wellness",
    copy: "Wellness and eco-tourism segments need data-rich dashboards, seasonal onboarding, and compliance storytelling.",
    icon: Sparkles
  },
  {
    title: "Regional expansion",
    copy: "Growth into Central America and the US requires multi-entity FX control, tax readiness, and bilingual enablement.",
    icon: Globe2
  },
  {
    title: "Regulatory scrutiny",
    copy: "SUGEF and data privacy laws require auditable AML, consent, and reporting workflows.",
    icon: BarChart3
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Banking & treasury orchestration",
    summary: "Maintain liquidity, FX, and compliance visibility across Costa Rican banks and regional entities.",
    bullets: [
      "Integrations with BAC Credomatic, Banco Nacional, Banco de Costa Rica, and Scotiabank.",
      "Treasury dashboards spanning CRC, USD, and regional currencies with predictive alerts.",
      "Automated reconciliation exports aligned to Hacienda and corporate reporting needs."
    ],
    icon: Bank
  },
  {
    title: "PSP & Sinpe orchestration",
    summary: "Unify card, wallet, and Sinpe Móvil experiences with intelligent routing and telemetry.",
    bullets: [
      "Routing across PayU, BAC Gateway, Stripe, Adyen, PayPal, and Wompi with performance scoring.",
      "Sinpe Móvil payouts with limit management, fee controls, and reconciliation automation.",
      "Chargeback workflows with localized evidence packs for regional PSPs and card networks."
    ],
    icon: Handshake
  },
  {
    title: "Distributor intelligence",
    summary: "Deliver insights and compliance guardrails in Spanish and English.",
    bullets: [
      "Dashboards covering commissions, taxes, and performance narratives for wellness and eco-tourism networks.",
      "AI nudges surfacing churn risk, inventory needs, and compliance reminders.",
      "Knowledge base tuned to Costa Rican regulatory expectations and cross-border expansion playbooks."
    ],
    icon: ChartLineUp
  }
];

const STAGES: Stage[] = [
  {
    phase: "Blueprint",
    focus: "Diagnostic + regulator alignment",
    description:
      "Stakeholder workshops define gateway priorities, compliance milestones, and distributor experience aspirations.",
    icon: MapTrifold
  },
  {
    phase: "Activation",
    focus: "Gateway + Sinpe enablement",
    description:
      "Deploy integrations in waves with telemetry dashboards covering conversion, decline drivers, and settlement health.",
    icon: IdentificationBadge
  },
  {
    phase: "Optimization",
    focus: "AI insights + compliance drills",
    description:
      "Quarterly retros deliver predictive insights, Hacienda-ready reports, and distributor enablement updates.",
    icon: ChartLineUp
  }
];

const FAQS: FAQ[] = [
  {
    question: "Do you integrate with Sinpe Móvil and PayU?",
    answer:
      "Yes. We orchestrate Sinpe Móvil alongside PayU, BAC Gateway, and global PSPs, automating routing, limits, and reconciliation."
  },
  {
    question: "How are SUGEF and Hacienda requirements handled?",
    answer:
      "Our compliance cockpit automates AML/KYC workflows, consent logs, and tax reporting with audit-ready exports for SUGEF and Hacienda."
  },
  {
    question: "Can distributors self-serve in Spanish and English?",
    answer:
      "Dashboards, statements, and knowledge assets are localized for both languages, tailored to leadership levels and product segments."
  }
];

type CostaRicaPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function CostaRicaPaymentGatewayPage({ params }: CostaRicaPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="container">
        <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-gradient-to-br from-slate-950 via-emerald-900 to-blue-900 px-8 py-16 text-white shadow-2xl">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.32),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(59,130,246,0.28),transparent_55%)]" />
          <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-emerald-100 backdrop-blur">
                Costa Rica · Payment Expansion Blueprint
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Run Costa Rica-first payment operations with confidence and speed.
              </h1>
              <p className="max-w-2xl text-base text-slate-200/85">
                Cloud MLM Software unites Costa Rican banking partners, Sinpe Móvil, and global PSPs into a single orchestrated platform. Provide frictionless customer payments, transparent payouts, and regulator-ready evidence—without slowing innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                  <Link href={contactHref}>
                    Speak with a Costa Rica strategist
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
            Opportunities shaping your Costa Rica payment roadmap
          </h2>
          <p className="text-sm text-muted-foreground">
            Align payment decisions with the realities of Costa Rican consumers, distributors, and regulators.
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
              Capabilities engineered for Costa Rican operations
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Keep finance, compliance, and distributor leaders moving together with modular capabilities.
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
                Structured phases maintain velocity while keeping compliance in lockstep.
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
            Frequently asked in Costa Rica engagements
          </h2>
          <p className="text-sm text-muted-foreground">
            Responses to the recurring questions from finance, compliance, and distributor leadership teams.
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
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-r from-emerald-500/15 via-blue-500/15 to-slate-900 px-8 py-12 shadow-xl backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to orchestrate Costa Rica-first payment excellence?
              </h2>
              <p className="text-sm text-muted-foreground">
                Partner with Cloud MLM Software to harmonize payments, compliance, and distributor empowerment in one platform.
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
