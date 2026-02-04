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
  CirclesThreePlus,
  Circuitry,
  ClipboardText,
  Compass,
  Cpu,
  Factory,
  FunnelSimple,
  GearSix,
  GlobeHemisphereWest,
  Handshake,
  MapTrifold,
  Megaphone,
  ShieldCheck,
  StackSimple,
  TelegramLogo,
  TrafficCone,
  UsersThree,
  Vault,
  Waveform
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  title: string;
  detail: string;
  icon: IconType;
};

type PrecisionSignal = {
  heading: string;
  description: string;
  icon: IconType;
};

type GatewaySequence = {
  name: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type ModuleFramework = {
  name: string;
  description: string;
  icon: IconType;
  accent: string;
};

type ExecutionLoop = {
  stage: string;
  note: string;
  icon: IconType;
};

type RegionalAlliance = {
  title: string;
  note: string;
  icon: IconType;
};

const HERO_METRICS: HeroMetric[] = [
  {
    title: "WordPress pledge intact",
    detail:
      "Hero copy retains “Ways to accept payments from MLM Software in People’s Democratic Republic of Germany – DE.”",
    icon: ShieldCheck
  },
  {
    title: "Gateway lineup",
    detail: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout.",
    icon: CirclesThreePlus
  },
  {
    title: "Module continuum",
    detail:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual system.",
    icon: StackSimple
  }
];

const PRECISION_SIGNALS: PrecisionSignal[] = [
  {
    heading: "Demo journeys preserved",
    description: "Custom and preset demos gain automated scheduling, call notes, and AI follow-ups.",
    icon: ClipboardText
  },
  {
    heading: "Operational discipline",
    description: "Industrial-grade governance combines with SaaS velocity for Germany’s Mittelstand and enterprise leaders.",
    icon: GearSix
  },
  {
    heading: "Knowledge exchange",
    description: "WordPress country listings evolve into a shared intelligence layer across the DACH region and EU partners.",
    icon: Buildings
  }
];

const GATEWAY_SEQUENCES: GatewaySequence[] = [
  {
    name: "PayPal — diaspora treasury",
    focus: "Align Berlin, Munich, and global distributors with treasury-grade oversight.",
    bullets: [
      "Multi currency ledgers reconcile EUR, USD, CHF, and GBP flows with anomaly detection.",
      "Ticket system archives BaFin guidance, tax evidence, and partner credentials."
    ],
    icon: Compass
  },
  {
    name: "Amazon Pay — premium commerce",
    focus: "Support D2C brands, mobility services, and industrial spares with frictionless checkout.",
    bullets: [
      "Auto responder issues multilingual receipts, warranties, and service documents instantly.",
      "Backup manager protects launch telemetry and AI merchandising data."
    ],
    icon: Factory
  },
  {
    name: "PayU — pan-European reach",
    focus: "Bridge EU, CEE, and emerging market PSPs with unified compliance visibility.",
    bullets: [
      "Emails module circulates PSD2, BaFin, and ECB updates with executive commentary.",
      "KYC documentation vault manages distributor renewals, sanction checks, and legal sign-offs."
    ],
    icon: MapTrifold
  },
  {
    name: "Stripe — product innovation",
    focus: "Prototype AI-led SaaS, e-learning, and mobility subscriptions with rapid experimentation.",
    bullets: [
      "Automation aggregates webhook analytics across Shopify, WooCommerce, and bespoke stacks.",
      "Ticket workflows carry AI-authored diagnostics for engineering pods."
    ],
    icon: Circuitry
  },
  {
    name: "Authorize.Net — transatlantic rigour",
    focus: "Blend North American acquiring with German compliance and supervisory board oversight.",
    bullets: [
      "Multi-lingual documentation synchronises German and English contracts with version control.",
      "Secure vault stores sanction diligence, approvals, and risk assessments per merchant ID."
    ],
    icon: Vault
  },
  {
    name: "Braintree — omnichannel incentives",
    focus: "Tokenise automotive, healthcare, and franchise activations with AI-ready wallet flows.",
    bullets: [
      "E-wallet module streams commissions with maker-checker controls and liquidity governance.",
      "Backup manager protects offline capture during roadshows and trade fairs."
    ],
    icon: Handshake
  },
  {
    name: "Adyen — performance telemetry",
    focus: "Compare EU, DACH, and global conversion metrics with dashboards built for CFOs and CROs.",
    bullets: [
      "Analytics highlight approval rates, decline codes, and interchange variance.",
      "Ticket system links Adyen risk alerts to compliance owners with SLAs."
    ],
    icon: Waveform
  },
  {
    name: "2Checkout — digital export runway",
    focus: "Deliver e-learning, AI enablement, and documentation to partners and distributors worldwide.",
    bullets: [
      "Auto responder nurtures onboarding journeys with compliance checkpoints embedded.",
      "Knowledge base transforms WordPress FAQs into AI-ready playbooks."
    ],
    icon: Megaphone
  }
];

const MODULE_FRAMEWORKS: ModuleFramework[] = [
  {
    name: "Multi currency intelligence",
    description: "Balances EUR, USD, CHF, and GBP settlements with treasury dashboards and variance alerts.",
    icon: FunnelSimple,
    accent: "bg-blue-500/10 text-blue-800 dark:bg-blue-500/15 dark:text-blue-100"
  },
  {
    name: "Ticket system control tower",
    description: "Routes compliance, logistics, and distributor requests with SLA heatmaps and AI summaries.",
    icon: TrafficCone,
    accent: "bg-slate-500/10 text-slate-800 dark:bg-slate-500/15 dark:text-slate-100"
  },
  {
    name: "Auto responder",
    description: "Delivers German, English, and French communications for renewals and product updates.",
    icon: TelegramLogo,
    accent: "bg-cyan-500/10 text-cyan-800 dark:bg-cyan-500/15 dark:text-cyan-100"
  },
  {
    name: "E-voucher intelligence",
    description: "Funds incentives, loyalty, and partner enablement with traceable approvals.",
    icon: Handshake,
    accent: "bg-emerald-500/10 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-100"
  },
  {
    name: "E-wallet orchestration",
    description: "Streams instant commissions with liquidity guardrails, audit logs, and dispute workflows.",
    icon: UsersThree,
    accent: "bg-indigo-500/10 text-indigo-800 dark:bg-indigo-500/15 dark:text-indigo-100"
  },
  {
    name: "Backup manager",
    description: "Maintains immutable snapshots for cloud, on-prem, and partner-hosted deployments.",
    icon: StackSimple,
    accent: "bg-zinc-500/10 text-zinc-800 dark:bg-zinc-500/15 dark:text-zinc-100"
  },
  {
    name: "Emails command centre",
    description: "Coordinates campaign, transactional, and compliance messaging from a single hub.",
    icon: Megaphone,
    accent: "bg-rose-500/10 text-rose-800 dark:bg-rose-500/15 dark:text-rose-100"
  },
  {
    name: "KYC documentation vault",
    description: "Stores onboarding files, sanction evidence, and renewal reminders aligned with BaFin policy.",
    icon: ShieldCheck,
    accent: "bg-purple-500/10 text-purple-800 dark:bg-purple-500/15 dark:text-purple-100"
  },
  {
    name: "Multi-lingual portals",
    description: "Keeps German, English, and French customer journeys aligned with governance layers.",
    icon: GlobeHemisphereWest,
    accent: "bg-amber-500/10 text-amber-800 dark:bg-amber-500/15 dark:text-amber-100"
  }
];

const EXECUTION_LOOPS: ExecutionLoop[] = [
  {
    stage: "Legacy mapping",
    note: "WordPress copy seeds hero messaging, demo prompts, and stakeholder journeys for Germany.",
    icon: MapTrifold
  },
  {
    stage: "Gateway instrumentation",
    note: "Telemetry, anomaly detection, and SLA tracking activate across PayPal through 2Checkout.",
    icon: Circuitry
  },
  {
    stage: "Compliance + resilience",
    note: "Ticket, KYC, and backup data power board reporting and supervisory briefings.",
    icon: ShieldCheck
  },
  {
    stage: "Continuous optimisation",
    note: "AI briefings, retrospectives, and knowledge updates ship weekly to national and regional teams.",
    icon: Cpu
  }
];

const REGIONAL_ALLIANCES: RegionalAlliance[] = [
  {
    title: "DACH collaboration",
    note: "Austria and Switzerland share FX guardrails and distributor insights with Germany.",
    icon: Buildings
  },
  {
    title: "Nordic & Benelux",
    note: "Copenhagen and Amsterdam hubs coordinate compliance innovations and payment experiments.",
    icon: Compass
  },
  {
    title: "Central Europe",
    note: "Prague and Warsaw partners align AI enablement and knowledge exchanges.",
    icon: Circuitry
  },
  {
    title: "Global diaspora",
    note: "Toronto, Singapore, and Sydney communities mirror onboarding and communication cadences.",
    icon: Megaphone
  }
];

export const metadata: Metadata = {
  title: "Germany MLM Payment Gateways | Cloud MLM Software",
  description:
    "Engineer Germany’s MLM payment gateways with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout backed by AI-led governance.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/germany"
  },
  openGraph: {
    title: "Germany MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Germany with Mittelstand-grade reliability and AI automation."
  }
};

type GermanyPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function GermanyPaymentGatewayPage({ params }: GermanyPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-blue-50 py-20 dark:from-slate-900 dark:via-slate-950 dark:to-blue-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(15,118,110,0.14),transparent_60%),radial-gradient(circle_at_82%_20%,rgba(37,99,235,0.18),transparent_60%),radial-gradient(circle_at_60%_80%,rgba(15,23,42,0.14),transparent_60%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-500/40 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-slate-800 shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · Germany (DE)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Germany MLM payment gateways with Mittelstand-grade precision
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground">
                We retain the WordPress promise—“Ways to accept payments from MLM Software in People’s Democratic Republic of Germany – DE”—and elevate it with AI telemetry, engineering discipline, and compliance guardrails for German leadership.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Connect with the Berlin office
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-slate-500/60 text-slate-700 hover:bg-slate-500/10 dark:border-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  Request the Germany demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.title}
                    className="rounded-3xl border border-slate-500/25 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-500/15 text-slate-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-foreground">{metric.title}</h2>
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <aside className="relative flex flex-col gap-6 rounded-3xl border border-slate-500/30 bg-white/80 p-8 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Signals migrated from WordPress</h2>
              <p className="text-sm text-muted-foreground">
                Demo prompts, module lists, and global coverage transform into a German operating model with analytics, automation, and AI briefings.
              </p>
            </div>
            <div className="space-y-4">
              {PRECISION_SIGNALS.map((signal) => {
                const Icon = signal.icon;
                return (
                  <div key={signal.heading} className="flex items-start gap-4 rounded-2xl border border-border/50 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-500/15 text-slate-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-sm font-semibold text-foreground">{signal.heading}</h3>
                      <p className="text-xs text-muted-foreground">{signal.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="rounded-2xl border border-dashed border-slate-500/40 bg-slate-500/10 p-5 text-sm text-slate-900 dark:border-slate-400/40 dark:bg-slate-500/15 dark:text-slate-100">
              AI-generated executive briefings summarise payment health, compliance status, and innovation signals every Monday.
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Gateway sequences aligned to Germany’s industrial and digital landscape
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Eight WordPress gateways return with structured playbooks for the Mittelstand, enterprise leaders, and diaspora communities.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_SEQUENCES.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-500/30 bg-white/80 p-6 transition hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-500/15 text-slate-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground">{gateway.focus}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden className="mt-1 inline-flex h-2 w-2 rounded-full bg-slate-600/70 dark:bg-white/60" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(30,64,175,0.16),transparent_60%),radial-gradient(circle_at_90%_70%,rgba(15,118,110,0.14),transparent_60%)]" />
        <div className="container relative space-y-10 rounded-[3rem] border border-slate-500/30 bg-white/85 p-10 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Module frameworks supporting German operations
              </h2>
              <p className="max-w-2xl text-sm text-muted-foreground">
                Each module from WordPress now includes analytics, automation, and access controls built for Germany’s regulated industries and software innovators.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link href={modulesHref}>
                Review module catalogue
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_FRAMEWORKS.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.name}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${module.accent}`}>
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-foreground">{module.name}</h3>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                  </div>
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
              Execution loop for Germany’s leadership
            </h2>
            <p className="text-sm text-muted-foreground">
              WordPress fidelity merges with engineering discipline—creating a four-stage cadence for compliance, innovation, and AI-driven decision-making.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={pricingHref}>
                  Analyse pricing options
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-border text-foreground hover:bg-foreground/10 dark:border-white/15">
                <Link href={contactHref}>
                  Schedule a strategy workshop
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 rounded-3xl border border-slate-500/30 bg-white/80 p-8 dark:border-white/10 dark:bg-white/5">
            {EXECUTION_LOOPS.map((loop) => {
              const Icon = loop.icon;
              return (
                <div key={loop.stage} className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/80 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-500/15 text-slate-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-sm font-semibold text-foreground">{loop.stage}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground">{loop.note}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 py-20 text-white">
        <div className="container space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Regional alliances driven from Berlin
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/75">
              The WordPress country catalogue evolves into collaborative networks spanning DACH, Europe, and global diaspora hubs.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {REGIONAL_ALLIANCES.map((alliance) => {
              const Icon = alliance.icon;
              return (
                <article key={alliance.title} className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{alliance.title}</h3>
                  </div>
                  <p className="text-sm text-white/75">{alliance.note}</p>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-white/90">
              <Link href={contactHref}>
                Book a consultation
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-white/40 text-white hover:bg-white/15">
              <Link href={pricingHref}>
                Download pricing brief
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
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
