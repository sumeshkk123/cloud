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
  title: "Côte d'Ivoire MLM Payment Gateways | Cloud MLM Software",
  description:
    "Unite banking, mobile money, and compliance workflows for Côte d'Ivoire MLM operations with Cloud MLM Software.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/cote-d-ivoire"
  },
  openGraph: {
    title: "Côte d'Ivoire MLM Payment Gateways",
    description:
      "Launch resilient MLM payment experiences across Côte d'Ivoire with banking, mobile money, and compliance orchestration from Cloud MLM Software.",
    url: "/mlm-software-payment-gateways/cote-d-ivoire"
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
    label: "Settlement window",
    value: "T+1.6 days",
    description: "BICICI, Société Générale Côte d'Ivoire, Ecobank, and Banque Atlantique settlements orchestrated with BCEAO compliance.",
    icon: AlarmCheck
  },
  {
    label: "Gateway ecosystem",
    value: "12 rails",
    description: "Orange Money, MTN Mobile Money, Wave, PayPal, PayU, Stripe, and cards orchestrated in one policy engine.",
    icon: Layers3
  },
  {
    label: "Compliance artefacts",
    value: "39 dossiers",
    description: "BCEAO, CN-ITIE, and tax documentation localized for Côte d'Ivoire regulators and banking partners.",
    icon: ShieldCheck
  }
];

const OPPORTUNITIES: Opportunity[] = [
  {
    title: "Mobile money dominance",
    description:
      "Orange Money, MTN, and Wave power day-to-day transactions. Distributors expect instant payouts and offline fallback logic.",
    icon: Building2
  },
  {
    title: "Regional corridors",
    description:
      "Expansion across UEMOA markets demands multi-currency management, BCEAO compliance, and cross-border tax governance.",
    icon: Globe2
  },
  {
    title: "Agriculture & services growth",
    description:
      "High-growth sectors seek data-rich dashboards, multilingual communications, and predictive coaching cues.",
    icon: Sparkles
  },
  {
    title: "Infrastructure variability",
    description:
      "Intermittent connectivity in secondary cities requires edge caching, offline capture, and intelligent alerting.",
    icon: BarChart3
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Banking & treasury control",
    summary: "Automate settlements, FX, and compliance evidence across Ivorian and regional banks.",
    bullets: [
      "Integrations with BICICI, Société Générale CI, Ecobank, and Banque Atlantique.",
      "Treasury dashboards covering XOF, USD, and EUR with predictive alerts and reconciliation status.",
      "Automated bank statement ingest producing ERP and regulator-ready exports."
    ],
    icon: Bank
  },
  {
    title: "Mobile money orchestration",
    summary: "Deliver consistent experiences across Orange, MTN, Wave, and card rails.",
    bullets: [
      "Routing logic balancing fees, limits, and uptime across Orange Money, MTN Money, and Wave.",
      "Offline capture for leaders operating outside Abidjan, syncing transactions once connectivity returns.",
      "Chargeback and dispute automation with evidence vaults accessible to finance and compliance."
    ],
    icon: Handshake
  },
  {
    title: "Distributor intelligence studio",
    summary: "Empower leaders with bilingual dashboards, narratives, and compliance cues.",
    bullets: [
      "Dashboards in French and English covering commissions, onboarding, and tax obligations.",
      "AI insights surfacing churn risk, coaching opportunities, and compliance tasks.",
      "Knowledge base aligned to agricultural, wellness, and services segments."
    ],
    icon: ChartLineUp
  }
];

const STAGES: Stage[] = [
  {
    phase: "Blueprint",
    focus: "Diagnostic + BCEAO alignment",
    description:
      "Stakeholder workshops map gateway priorities, compliance guardrails, and distributor experience goals into a sequenced roadmap.",
    icon: MapTrifold
  },
  {
    phase: "Activation",
    focus: "Banking + mobile money enablement",
    description:
      "Launch integrations in waves with telemetry on uptime, fees, and reconciliation health across wallets and banks.",
    icon: IdentificationBadge
  },
  {
    phase: "Optimization",
    focus: "AI insights + compliance drills",
    description:
      "Quarterly retros deliver predictive analytics, BCEAO-ready evidence packs, and distributor enablement updates.",
    icon: ChartLineUp
  }
];

const FAQS: FAQ[] = [
  {
    question: "Do you integrate with Orange Money, MTN, and Wave?",
    answer:
      "Absolutely. We orchestrate Orange, MTN, and Wave flows alongside cards and global PSPs with routing logic, limits, and reconciliation automation."
  },
  {
    question: "How are BCEAO and tax requirements addressed?",
    answer:
      "Our compliance cockpit automates AML/KYC workflows, tax reporting, and evidence production aligned to BCEAO and local tax authorities."
  },
  {
    question: "Can distributors access bilingual dashboards?",
    answer:
      "Dashboards, statements, and alerts are localized in French and English with role-based narratives for each segment."
  }
];

type CoteDIvoirePageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function CoteDIvoirePaymentGatewayPage({ params }: CoteDIvoirePageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="container">
        <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-gradient-to-br from-slate-950 via-emerald-900 to-orange-900 px-8 py-16 text-white shadow-2xl">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(16,185,129,0.32),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.28),transparent_60%)]" />
          <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-emerald-100 backdrop-blur">
                Côte d&apos;Ivoire · Payment Operating Blueprint
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Harmonize mobile money, banking, and compliance for Ivorian MLM growth.
              </h1>
              <p className="max-w-2xl text-base text-slate-200/85">
                Cloud MLM Software connects Orange Money, MTN, Wave, and banking partners into a single orchestrated platform. Deliver trusted customer payments, resilient payouts, and regulator-ready evidence without slowing expansion.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                  <Link href={contactHref}>
                    Speak with an Ivorian strategist
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
            Market opportunities guiding your payment roadmap
          </h2>
          <p className="text-sm text-muted-foreground">
            Translate consumer preferences, infrastructure realities, and regulator expectations into tangible capabilities.
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
              Capabilities engineered for Côte d&apos;Ivoire operations
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Each capability keeps finance, compliance, and distributor leaders aligned across Abidjan and regional hubs.
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
                Structured phases keep activation rapid while staying ready for BCEAO review.
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
            Frequently asked in Côte d&apos;Ivoire engagements
          </h2>
          <p className="text-sm text-muted-foreground">
            Equip finance, compliance, and distributor councils with clear answers before launch.
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
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-r from-emerald-500/15 via-orange-500/15 to-slate-900 px-8 py-12 shadow-xl backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to orchestrate Côte d&apos;Ivoire payment excellence?
              </h2>
              <p className="text-sm text-muted-foreground">
                Partner with Cloud MLM Software to harmonize banking, mobile money, and compliance in one intelligent platform.
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
