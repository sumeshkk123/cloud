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
  AnchorSimple,
  Bridge,
  CirclesThreePlus,
  Coin,
  Cpu,
  GlobeHemisphereWest,
  Handshake,
  Lightning,
  MapTrifold,
  Megaphone,
  ProhibitInset,
  ShieldCheck,
  Sparkle,
  StackSimple,
  Binoculars,
  Ticket,
  Vault,
  Waves,
  Sailboat
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroBlock = {
  title: string;
  detail: string;
  icon: IconType;
};

type LegacyThread = {
  heading: string;
  description: string;
  icon: IconType;
};

type GatewayStrategy = {
  name: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type ModuleCard = {
  name: string;
  description: string;
  icon: IconType;
  accent: string;
};

type DeliveryTrack = {
  stage: string;
  insight: string;
  icon: IconType;
};

type RegionalChannel = {
  title: string;
  note: string;
  icon: IconType;
};

const HERO_BLOCKS: HeroBlock[] = [
  {
    title: "WordPress statement preserved",
    detail:
      "The headline keeps the exact copy “Ways to accept payments from MLM Software in People’s Democratic Republic of Gibraltar – GI.”",
    icon: ShieldCheck
  },
  {
    title: "Gateway roster",
    detail: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout.",
    icon: CirclesThreePlus
  },
  {
    title: "Module integrity",
    detail:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual system.",
    icon: StackSimple
  }
];

const LEGACY_THREADS: LegacyThread[] = [
  {
    heading: "Demo pathways honoured",
    description: "Custom and preset demo flows now include automated invitations, recordings, and AI follow-up briefs.",
    icon: Sparkle
  },
  {
    heading: "Financial fortress",
    description: "We match Gibraltar’s regulatory strength with compliance-first automation and board-ready reporting.",
    icon: Vault
  },
  {
    heading: "Global coverage evolved",
    description: "WordPress country listings become an intelligence exchange across UK, Mediterranean, and LATAM corridors.",
    icon: GlobeHemisphereWest
  }
];

const GATEWAY_STRATEGIES: GatewayStrategy[] = [
  {
    name: "PayPal — cross-border treasury",
    focus: "Coordinate Gibraltar, London, and Madrid distributors with treasury-grade visibility.",
    bullets: [
      "Multi currency ledgers reconcile GBP, EUR, USD, and GIP inflows with anomaly detection.",
      "Ticket system archives FSC Gibraltar guidance, tax filings, and partner credentials."
    ],
    icon: Coin
  },
  {
    name: "Amazon Pay — premium commerce",
    focus: "Support financial services, wellness, and tourism offers with frictionless checkout experiences.",
    bullets: [
      "Auto responder issues bilingual confirmations, customs paperwork, and loyalty cues instantly.",
      "Backup manager protects launch telemetry and AI merchandising data."
    ],
    icon: AnchorSimple
  },
  {
    name: "PayU — gateway to Mediterranean",
    focus: "Integrate PSPs across Iberia, North Africa, and LATAM while retaining compliance visibility.",
    bullets: [
      "Emails module circulates PSD2, FSC, and EU updates with executive commentary.",
      "KYC documentation vault holds distributor renewals, sanction checks, and legal approvals."
    ],
    icon: Waves
  },
  {
    name: "Stripe — digital ventures",
    focus: "Prototype AI-led finance, SaaS, and membership platforms anchored in Gibraltar’s innovation scene.",
    bullets: [
      "Automation aggregates webhook analytics across Shopify, WooCommerce, and bespoke stacks.",
      "Ticket workflows supply AI-authored diagnostics for engineering squads."
    ],
    icon: Cpu
  },
  {
    name: "Authorize.Net — transatlantic controls",
    focus: "Blend North American acquiring with Gibraltar’s regulatory rigour and board oversight.",
    bullets: [
      "Multi-lingual documentation synchronises English and Spanish contracts with version histories.",
      "Secure vault stores sanction diligence, approvals, and risk assessments for each merchant ID."
    ],
    icon: Vault
  },
  {
    name: "Braintree — omnichannel incentives",
    focus: "Tokenise roadshows, yacht-based events, and luxury partnerships with secure wallet flows.",
    bullets: [
      "E-wallet module streams commissions with maker-checker controls and liquidity guardrails.",
      "Backup manager protects offline capture during harbour activations and conferences."
    ],
    icon: Sailboat
  },
  {
    name: "Adyen — performance radar",
    focus: "Compare EU, UK, and LATAM conversion metrics with CFO-ready dashboards.",
    bullets: [
      "Analytics spotlight approval rates, decline codes, and interchange variance.",
      "Ticket system links Adyen risk alerts to compliance case owners."
    ],
    icon: Binoculars
  },
  {
    name: "2Checkout — digital export runway",
    focus: "Deliver e-learning, AI enablement, and documentation to distributors around the world.",
    bullets: [
      "Auto responder nurtures onboarding journeys with compliance checkpoints embedded.",
      "Knowledge base repackages WordPress FAQs into AI-ready playbooks."
    ],
    icon: Megaphone
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    name: "Multi currency observatory",
    description: "Balances GBP, EUR, USD, and GIP settlements with treasury dashboards and variance alerts.",
    icon: Coin,
    accent: "bg-slate-500/10 text-slate-800 dark:bg-slate-500/15 dark:text-slate-100"
  },
  {
    name: "Ticket system",
    description: "Routes compliance, logistics, and distributor support with SLA heatmaps and AI summaries.",
    icon: Ticket,
    accent: "bg-cyan-500/10 text-cyan-800 dark:bg-cyan-500/15 dark:text-cyan-100"
  },
  {
    name: "Auto responder",
    description: "Delivers English and Spanish communications for renewals, onboarding, and governance.",
    icon: Sparkle,
    accent: "bg-blue-500/10 text-blue-800 dark:bg-blue-500/15 dark:text-blue-100"
  },
  {
    name: "E-voucher studio",
    description: "Funds events, loyalty programmes, and CSR initiatives with traceable approvals.",
    icon: Handshake,
    accent: "bg-emerald-500/10 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-100"
  },
  {
    name: "E-wallet orchestration",
    description: "Streams instant commissions with liquidity guardrails and audit trails.",
    icon: Handshake,
    accent: "bg-indigo-500/10 text-indigo-800 dark:bg-indigo-500/15 dark:text-indigo-100"
  },
  {
    name: "Backup manager",
    description: "Maintains immutable snapshots for cloud, on-prem, and partner-hosted deployments.",
    icon: StackSimple,
    accent: "bg-slate-700/10 text-slate-900 dark:bg-slate-700/15 dark:text-slate-100"
  },
  {
    name: "Emails command centre",
    description: "Coordinates campaign, transactional, and compliance messaging from one hub.",
    icon: Megaphone,
    accent: "bg-rose-500/10 text-rose-800 dark:bg-rose-500/15 dark:text-rose-100"
  },
  {
    name: "KYC documentation vault",
    description: "Stores identity checks, sanction evidence, and renewals aligned with FSC Gibraltar.",
    icon: ShieldCheck,
    accent: "bg-purple-500/10 text-purple-800 dark:bg-purple-500/15 dark:text-purple-100"
  },
  {
    name: "Multi-lingual portals",
    description: "Keeps English and Spanish experiences aligned with governance layers.",
    icon: Bridge,
    accent: "bg-amber-500/10 text-amber-800 dark:bg-amber-500/15 dark:text-amber-100"
  }
];

const DELIVERY_TRACKS: DeliveryTrack[] = [
  {
    stage: "Legacy mapping",
    insight: "WordPress copy seeds stakeholder journeys, demo flows, and compliance baselines.",
    icon: MapTrifold
  },
  {
    stage: "Gateway instrumentation",
    insight: "Telemetry and SLA tracking activate across PayPal through 2Checkout with alert thresholds.",
    icon: Lightning
  },
  {
    stage: "Governance activation",
    insight: "Ticket, KYC, and backup data converge for board briefings and regulatory readiness.",
    icon: ShieldCheck
  },
  {
    stage: "Continuous optimisation",
    insight: "AI briefings, retrospectives, and knowledge packets publish weekly to Gibraltar leadership.",
    icon: Cpu
  }
];

const REGIONAL_CHANNELS: RegionalChannel[] = [
  {
    title: "UK alignment",
    note: "London teams exchange compliance updates and PSP negotiations with Gibraltar.",
    icon: Bridge
  },
  {
    title: "Mediterranean pathways",
    note: "Madrid and Lisbon hubs collaborate on FX guardrails and experience design.",
    icon: Waves
  },
  {
    title: "LATAM extension",
    note: "Sao Paulo and Buenos Aires share onboarding playbooks and AI enablement cadences.",
    icon: GlobeHemisphereWest
  },
  {
    title: "Global compliance network",
    note: "Singapore and Dubai hubs monitor regulatory signals and orchestrate risk reviews.",
    icon: ProhibitInset
  }
];

export const metadata: Metadata = {
  title: "Gibraltar MLM Payment Gateways | Cloud MLM Software",
  description:
    "Elevate Gibraltar’s MLM payment gateways across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with compliance-first automation.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/gibraltar"
  },
  openGraph: {
    title: "Gibraltar MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Gibraltar with financial fortress reliability and AI insight."
  }
};

type GibraltarPageProps = {
  params: { lang: SupportedLocale };
};

export default function GibraltarPaymentGatewayPage({ params }: GibraltarPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 dark:from-slate-900 dark:via-slate-950 dark:to-blue-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(30,64,175,0.16),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(15,118,110,0.16),transparent_55%),radial-gradient(circle_at_65%_80%,rgba(71,85,105,0.14),transparent_55%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-500/40 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-slate-800 shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · Gibraltar (GI)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Gibraltar MLM payment gateways engineered for financial strongholds
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground">
                We uphold the WordPress headline—“Ways to accept payments from MLM Software in People’s Democratic Republic of Gibraltar – GI”—while introducing AI telemetry, compliance guardrails, and board-ready governance.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Talk with the Gibraltar office
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
                  Request the Gibraltar demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {HERO_BLOCKS.map((block) => {
                const Icon = block.icon;
                return (
                  <article
                    key={block.title}
                    className="rounded-3xl border border-slate-500/30 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-500/15 text-slate-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-foreground">{block.title}</h2>
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground">{block.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <aside className="relative flex flex-col gap-6 rounded-3xl border border-slate-500/30 bg-white/80 p-8 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">WordPress threads carried forward</h2>
              <p className="text-sm text-muted-foreground">
                Demo prompts, module lists, and global coverage transform into a finance-first operating model with analytics and AI assistance.
              </p>
            </div>
            <div className="space-y-4">
              {LEGACY_THREADS.map((thread) => {
                const Icon = thread.icon;
                return (
                  <div key={thread.heading} className="flex items-start gap-4 rounded-2xl border border-border/50 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-500/15 text-slate-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-sm font-semibold text-foreground">{thread.heading}</h3>
                      <p className="text-xs text-muted-foreground">{thread.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="rounded-2xl border border-dashed border-slate-500/40 bg-slate-500/10 p-5 text-sm text-slate-900 dark:border-slate-400/40 dark:bg-slate-500/15 dark:text-slate-100">
              Weekly AI briefings summarise payment health, compliance status, and new opportunities for Gibraltar leadership.
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Gateway strategies grounded in Gibraltar’s financial hub
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            The eight WordPress gateways return with structured playbooks for regulated operations, cross-border growth, and premium experiences.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_STRATEGIES.map((strategy) => {
            const Icon = strategy.icon;
            return (
              <article
                key={strategy.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-500/30 bg-white/80 p-6 transition hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-500/15 text-slate-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{strategy.name}</h3>
                    <p className="text-sm text-muted-foreground">{strategy.focus}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {strategy.bullets.map((bullet) => (
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(30,64,175,0.18),transparent_60%),radial-gradient(circle_at_90%_70%,rgba(15,118,110,0.16),transparent_60%)]" />
        <div className="container relative space-y-10 rounded-[3rem] border border-slate-500/30 bg-white/85 p-10 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Module stack aligned to Gibraltar operations
              </h2>
              <p className="max-w-2xl text-sm text-muted-foreground">
                Modules from WordPress are preserved and enhanced with analytics, automation, and access controls tuned to Gibraltar’s regulatory landscape.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link href={modulesHref}>
                Explore module catalogue
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_CARDS.map((module) => {
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
              Delivery tracks for Gibraltar leadership
            </h2>
            <p className="text-sm text-muted-foreground">
              WordPress fidelity meets finance-first automation to create a four-stage governance cadence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={pricingHref}>
                  Review pricing options
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-border text-foreground hover:bg-foreground/10 dark:border-white/15">
                <Link href={contactHref}>
                  Schedule a compliance workshop
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 rounded-3xl border border-slate-500/30 bg-white/80 p-8 dark:border-white/10 dark:bg-white/5">
            {DELIVERY_TRACKS.map((track) => {
              const Icon = track.icon;
              return (
                <div key={track.stage} className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/80 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-500/15 text-slate-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-sm font-semibold text-foreground">{track.stage}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground">{track.insight}</p>
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
              Regional channels anchored in Gibraltar
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/75">
              The extensive WordPress country list becomes a collaboration network across the UK, Mediterranean, and global compliance hubs.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {REGIONAL_CHANNELS.map((channel) => {
              const Icon = channel.icon;
              return (
                <article key={channel.title} className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{channel.title}</h3>
                  </div>
                  <p className="text-sm text-white/75">{channel.note}</p>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-white/90">
              <Link href={contactHref}>
                Book a strategy call
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
