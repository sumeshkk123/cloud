import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { ArrowUpRight } from "lucide-react";
import {
  Buildings,
  ChartBar,
  ChartLineUp,
  ChatsCircle,
  Compass,
  EnvelopeSimple,
  GearSix,
  GlobeHemisphereEast,
  GlobeHemisphereWest,
  Handshake,
  IdentificationCard,
  Lightning,
  MapTrifold,
  PaperPlaneTilt,
  ShieldCheck,
  StackSimple,
  Ticket,
  UsersThree,
  Wallet,
  Waveform,
  Files
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroSignal = {
  title: string;
  summary: string;
  icon: IconType;
};

type GatewayVector = {
  name: string;
  initiative: string;
  bullets: string[];
  icon: IconType;
  gradient: string;
};

type ModulePillar = {
  name: string;
  description: string;
  icon: IconType;
  accent: string;
};

type IntegrationInterval = {
  phase: string;
  explanation: string;
  icon: IconType;
};

type RegionalThread = {
  title: string;
  note: string;
  icon: IconType;
};

const HERO_SIGNALS: HeroSignal[] = [
  {
    title: "WordPress pledge preserved",
    summary:
      "We keep “Ways to accept payments from MLM Software in People’s Democratic Republic of Poland – PL” as the north star while elevating the experience with AI-first orchestration.",
    icon: ShieldCheck
  },
  {
    title: "Poland growth corridor",
    summary:
      "Warsaw, Kraków, and Wrocław teams gain dashboards, audit control, and messaging shaped for Poland’s regulatory climate and EU expectations.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Gateway availability proven",
    summary:
      "Cloud MLM Software has already built great systems for the greatest companies; now PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, and Braintree are positioned inside a resilient governance loop.",
    icon: ChartLineUp
  }
];

const GATEWAY_VECTORS: GatewayVector[] = [
  {
    name: "PayPal — cross-border trust",
    initiative: "Stabilise PLN, EUR, USD, and GBP inflows for distributors across Poland’s global diaspora.",
    bullets: [
      "Multi currency module reconciles treasury positions with automated variance flags.",
      "Ticket system module documents disputes, refunds, and tax evidence for fiscal controllers."
    ],
    icon: Wallet,
    gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent dark:from-emerald-500/25 dark:via-emerald-500/10"
  },
  {
    name: "Amazon Pay — ecommerce acceleration",
    initiative: "Blend marketplace velocity with subscription journeys for wellness, education, and retail networks.",
    bullets: [
      "Auto responder keeps sales cycles energised with transactional and promotional sequences.",
      "Emails hub personalises onboarding cadences for leaders in Warsaw and beyond."
    ],
    icon: Handshake,
    gradient: "from-orange-500/20 via-orange-500/5 to-transparent dark:from-orange-500/25 dark:via-orange-500/10"
  },
  {
    name: "PayU — Central Europe reach",
    initiative: "Align Poland, Czech Republic, and Baltics with unified routing and settlement logic.",
    bullets: [
      "Lightning-fast routing applies AI hints to improve approval rates and minimise declines.",
      "KYC documentation vault keeps franchise and distributor files audit-ready."
    ],
    icon: Lightning,
    gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent dark:from-cyan-500/25 dark:via-cyan-500/10"
  },
  {
    name: "Stripe — product experimentation",
    initiative: "Prototype new incentives, AI-led digital products, and hybrid commerce without jeopardising compliance.",
    bullets: [
      "Backup manager snapshots webhook payloads, pricing experiments, and analytics.",
      "Ticket workflows transform alerts into accountable tasks with SLA monitoring."
    ],
    icon: Waveform,
    gradient: "from-purple-500/20 via-purple-500/5 to-transparent dark:from-purple-500/25 dark:via-purple-500/10"
  },
  {
    name: "Authorize.Net — transatlantic rigour",
    initiative: "Combine North American acquiring strength with Poland’s finance governance playbooks.",
    bullets: [
      "Identification records and contracts stay centralised in the KYC documentation workspace.",
      "Emails module relays compliance notices, card updates, and reserve actions instantly."
    ],
    icon: Files,
    gradient: "from-slate-500/20 via-slate-500/5 to-transparent dark:from-slate-500/25 dark:via-slate-500/10"
  },
  {
    name: "Braintree — omnichannel loyalty",
    initiative: "Support in-person activations, dropshipping, and recurring revenue initiatives across Poland and the EU.",
    bullets: [
      "E-wallet module governs instant commissions with maker-checker control.",
      "E-voucher flows document rewards while syncing to analytics for optimisation."
    ],
    icon: StackSimple,
    gradient: "from-blue-500/20 via-blue-500/5 to-transparent dark:from-blue-500/25 dark:via-blue-500/10"
  }
];

const MODULE_PILLARS: ModulePillar[] = [
  {
    name: "Multi currency module",
    description: "Display, price, and reconcile PLN, EUR, GBP, and USD without manual spreadsheets or FX confusion.",
    icon: GlobeHemisphereWest,
    accent: "bg-emerald-500/15 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-100"
  },
  {
    name: "Ticket system module",
    description: "Route distributor questions, bank escalations, and compliance reviews with AI summaries.",
    icon: ChatsCircle,
    accent: "bg-amber-500/15 text-amber-900 dark:bg-amber-500/20 dark:text-amber-100"
  },
  {
    name: "Auto responder",
    description: "Deliver journey-based communications in Polish and English for every stakeholder moment.",
    icon: PaperPlaneTilt,
    accent: "bg-sky-500/15 text-sky-900 dark:bg-sky-500/20 dark:text-sky-100"
  },
  {
    name: "E-voucher",
    description: "Design promotional and loyalty vouchers with traceable approvals and redemption analytics.",
    icon: Ticket,
    accent: "bg-rose-500/15 text-rose-900 dark:bg-rose-500/20 dark:text-rose-100"
  },
  {
    name: "E-wallet",
    description: "Manage instant payouts, withdrawal rules, and ledger history with CFO-grade oversight.",
    icon: Wallet,
    accent: "bg-indigo-500/15 text-indigo-900 dark:bg-indigo-500/20 dark:text-indigo-100"
  },
  {
    name: "Backup manager",
    description: "Keep immutable snapshots of payment data, documentation, and regional tax evidence.",
    icon: StackSimple,
    accent: "bg-slate-500/15 text-slate-900 dark:bg-slate-500/20 dark:text-slate-100"
  },
  {
    name: "Emails hub",
    description: "Orchestrate campaigns, alerts, and policy notices with delivery analytics in one workspace.",
    icon: EnvelopeSimple,
    accent: "bg-blue-500/15 text-blue-900 dark:bg-blue-500/20 dark:text-blue-100"
  },
  {
    name: "KYC documentation",
    description: "Centralise contracts, IDs, and verification timelines ready for auditors and regulators.",
    icon: IdentificationCard,
    accent: "bg-lime-500/15 text-lime-900 dark:bg-lime-500/20 dark:text-lime-100"
  },
  {
    name: "Multi-lingual system",
    description: "Extend Polish, English, and regional language experiences without fragmenting content.",
    icon: UsersThree,
    accent: "bg-violet-500/15 text-violet-900 dark:bg-violet-500/20 dark:text-violet-100"
  }
];

const INTEGRATION_INTERVALS: IntegrationInterval[] = [
  {
    phase: "Discovery & localisation",
    explanation:
      "The original WordPress copy seeds messaging, regulatory assumptions, and Poland-specific buyer journeys before automation kicks in.",
    icon: MapTrifold
  },
  {
    phase: "Gateway instrumentation",
    explanation:
      "We orchestrate PayPal through Braintree with routing logic, resilience testing, and AI-generated dashboards for leadership.",
    icon: GearSix
  },
  {
    phase: "Operational runbooks",
    explanation:
      "Modules, documentation, and ticket workflows keep finance, compliance, and distributor success teams aligned.",
    icon: ChartBar
  }
];

const REGIONAL_THREADS: RegionalThread[] = [
  {
    title: "Central Europe collaboration",
    note: "Poland, Czech Republic, Slovakia, and the Baltics share gateway insights, FX guardrails, and distributor training cadences.",
    icon: Buildings
  },
  {
    title: "EU market alignment",
    note: "Teams harmonise VAT, PSD2, and data governance requirements while experimenting with country-specific incentives.",
    icon: Compass
  },
  {
    title: "Global diaspora reach",
    note: "Polish communities across North America and Western Europe remain connected through consistent communications and payouts.",
    icon: Handshake
  }
];

export const metadata: Metadata = {
  title: "Poland MLM Payment Gateways | Cloud MLM Software",
  description:
    "Engineer Poland’s MLM payment gateways with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, and Braintree supported by AI-led operations and compliance.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/poland"
  },
  openGraph: {
    title: "Poland MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People’s Democratic Republic of Poland – PL with enterprise governance and automation."
  }
};

type PolandPageProps = {
  params: { lang: SupportedLocale };
};

export default function PolandPaymentGatewayPage({ params }: PolandPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-slate-100 py-20 dark:from-slate-950 dark:via-emerald-950/60 dark:to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(14,165,233,0.18),transparent_60%),radial-gradient(circle_at_60%_80%,rgba(100,116,139,0.2),transparent_62%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 shadow-sm dark:border-emerald-300/20 dark:bg-white/10 dark:text-emerald-100">
              Ways to accept payments · Poland (PL)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Poland MLM payment gateways guided by AI, compliance, and regional expertise
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground">
                Cloud MLM Software has already built great systems for the greatest companies. The availability of the payment gateways supported for People’s Democratic Republic of Poland – PL are carried forward and enhanced with telemetry, automation, and executive-ready narratives.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Speak with a Poland specialist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-emerald-600/40 text-emerald-700 hover:bg-emerald-600/10 dark:border-emerald-300/30 dark:text-emerald-100"
              >
                <Link href={demoHref}>
                  Review the live demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            {HERO_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article
                  key={signal.title}
                  className="group relative overflow-hidden rounded-3xl border border-emerald-600/20 bg-white/75 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-emerald-500/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100 dark:from-emerald-400/15" />
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-100">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-lg font-semibold text-foreground">{signal.title}</h2>
                      <p className="text-sm text-muted-foreground">{signal.summary}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Gateway execution vectors for Poland
          </h2>
          <p className="text-sm text-muted-foreground">
            The WordPress listing of PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, and Braintree becomes a structured execution model tailored to Poland’s market expectations.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_VECTORS.map((vector) => {
            const Icon = vector.icon;
            return (
              <article
                key={vector.name}
                className="relative h-full overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10"
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${vector.gradient}`} />
                <div className="relative space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-foreground/10 text-foreground dark:bg-white/15 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{vector.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{vector.initiative}</p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {vector.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground/60 dark:bg-white/60" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(52,211,153,0.28),transparent_45%),radial-gradient(circle_at_85%_20%,rgba(14,165,233,0.25),transparent_50%)] opacity-80" />
        <div className="container relative space-y-12">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Modules powering Poland’s daily operations
            </h2>
            <p className="max-w-2xl text-sm text-white/75">
              Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, and multi-lingual system from WordPress evolve into a coordinated intelligence stack.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-white/90">
                <Link href={modulesHref}>
                  Explore full module library
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-white/40 text-white hover:bg-white/15"
              >
                <Link href={pricingHref}>
                  Review pricing scenarios
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.name} className="h-full rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                  <div className="flex items-start gap-3">
                    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${pillar.accent}`}>
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{pillar.name}</h3>
                  </div>
                  <p className="mt-3 text-sm text-white/75">{pillar.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Integration intervals for leadership clarity
            </h2>
            <p className="text-sm text-muted-foreground">
              Operationalising the Poland blueprint means sequencing localisation, gateway instrumentation, and module governance into a repeatable cadence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Schedule a strategy session
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-border text-foreground hover:bg-foreground/10 dark:border-white/15"
              >
                <Link href={pricingHref}>
                  Download investment brief
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <ol className="space-y-6">
            {INTEGRATION_INTERVALS.map((interval, index) => {
              const Icon = interval.icon;
              return (
                <li
                  key={interval.phase}
                  className="relative flex gap-4 rounded-3xl border border-border/50 bg-background/80 p-6 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex flex-col items-center">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    {index < INTEGRATION_INTERVALS.length - 1 && <span className="mt-2 h-full w-px flex-1 bg-border/60 dark:bg-white/15" />}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-foreground">{interval.phase}</h3>
                    <p className="text-sm text-muted-foreground">{interval.explanation}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Regional threads expanding from Poland
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
            “Learn more about MLM Software availability in each country or region” becomes an intelligence network of neighbouring markets and diaspora communities.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {REGIONAL_THREADS.map((thread) => {
            const Icon = thread.icon;
            return (
              <article key={thread.title} className="group rounded-3xl border border-border/60 bg-background p-6 transition hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg dark:border-white/10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{thread.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{thread.note}</p>
              </article>
            );
          })}
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

