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
  Anchor,
  ArrowClockwise,
  CirclesThreePlus,
  Compass,
  Cpu,
  GlobeHemisphereEast,
  Lighthouse,
  ListChecks,
  MapTrifold,
  Megaphone,
  Sailboat,
  ShieldCheck,
  Shore,
  Stack,
  StarFour,
  TreePalm,
  Waveform,
  WaveSawtooth,
  Waves,
  Wind
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroCard = {
  title: string;
  description: string;
  icon: IconType;
};

type LagoonSignal = {
  heading: string;
  detail: string;
  icon: IconType;
};

type GatewayWave = {
  name: string;
  insight: string;
  bullets: string[];
  icon: IconType;
};

type ModuleStrand = {
  name: string;
  description: string;
  icon: IconType;
  accent: string;
};

type MomentumRow = {
  phase: string;
  summary: string;
  icon: IconType;
};

type RegionalTie = {
  title: string;
  note: string;
  icon: IconType;
};

const HERO_CARDS: HeroCard[] = [
  {
    title: "Legacy assurance",
    description:
      "“Ways to accept payments from MLM Software in People’s Democratic Republic of French Polynesia – PF” remains word-perfect in the hero statement.",
    icon: Shore
  },
  {
    title: "Eight-gateway orchestration",
    description: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout.",
    icon: CirclesThreePlus
  },
  {
    title: "Module continuum",
    description:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual experience.",
    icon: Stack
  }
];

const LAGOON_SIGNALS: LagoonSignal[] = [
  {
    heading: "Demo pathways preserved",
    detail: "Custom and preset demos from WordPress acquire automated invites, transcripts, and follow-up sequences.",
    icon: StarFour
  },
  {
    heading: "Module spotlight",
    detail: "Every module listed on WordPress maps to governance dashboards, AI assistants, and analytics hooks.",
    icon: ListChecks
  },
  {
    heading: "Global directory",
    detail: "The country list becomes a searchable intelligence index shared with island partnerships and EU allies.",
    icon: Compass
  }
];

const GATEWAY_WAVES: GatewayWave[] = [
  {
    name: "PayPal — diaspora channel",
    insight: "Serve Tahiti, Paris, and Auckland distributors with a unified treasury heartbeat.",
    bullets: [
      "Multi currency ledgers balance XPF, EUR, USD, and NZD inflows before leadership sign-off.",
      "Ticket lifecycles capture ACPR communications, VAT evidence, and partner credentials."
    ],
    icon: Waves
  },
  {
    name: "Amazon Pay — premium hospitality",
    insight: "Support tourism experiences, wellness retreats, and cultural initiatives across the archipelagos.",
    bullets: [
      "Auto responder issues bilingual itineraries, customs notes, and replenishment reminders instantly.",
      "Backup manager protects seasonal campaigns and island-specific launch data."
    ],
    icon: TreePalm
  },
  {
    name: "PayU — Indo-Pacific expansion",
    insight: "Connect French Polynesia to India, Southeast Asia, and New Zealand corridors without losing oversight.",
    bullets: [
      "Emails module circulates PSD2, RBI, and Pacific compliance updates with executive commentary.",
      "KYC documentation vault monitors distributor renewals and sanctions across jurisdictions."
    ],
    icon: WaveSawtooth
  },
  {
    name: "Stripe — digital lagoon",
    insight: "Prototype AI-led membership platforms and sustainability fundraising for island communities.",
    bullets: [
      "Webhook analytics merge Shopify, WooCommerce, and custom portals into one insight stream.",
      "Ticket responses include AI-authored diagnostics and localisation guidance."
    ],
    icon: Cpu
  },
  {
    name: "Authorize.Net — transpacific rigour",
    insight: "Blend North American acquiring with Tahitian governance, board oversight, and franchise agreements.",
    bullets: [
      "Multi-lingual portals synchronise French, Tahitian, and English documentation.",
      "Audit vault stores sanction diligence, legal sign-offs, and banking correspondence."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree — experiential commerce",
    insight: "Tokenise payments for pop-up boutiques, marine excursions, and cultural showcases.",
    bullets: [
      "E-wallet module streams incentives with liquidity thresholds and maker-checker visibility.",
      "Backup manager safeguards offline capture events aboard vessels and remote sites."
    ],
    icon: Sailboat
  },
  {
    name: "Adyen — performance watch",
    insight: "Compare EU, Pacific, and North American conversion metrics inside a single observability layer.",
    bullets: [
      "Dashboards surface interchange variance, chargeback ratios, and approval rates for CFO briefings.",
      "Ticket system attaches Adyen risk alerts to compliance cases with ownership clarity."
    ],
    icon: Lighthouse
  },
  {
    name: "2Checkout — digital export runway",
    insight: "Distribute e-learning, AI enablement, and documentation across islands and diaspora hubs.",
    bullets: [
      "Auto responder nurtures onboarding journeys with compliance checkpoints embedded.",
      "Knowledge centre syndicates WordPress FAQs into AI-ready content packs."
    ],
    icon: Megaphone
  }
];

const MODULE_STRANDS: ModuleStrand[] = [
  {
    name: "Multi currency intelligence",
    description: "Balances XPF, EUR, USD, AUD, and NZD settlements with treasury dashboards and alerts.",
    icon: Waves,
    accent: "bg-sky-500/10 text-sky-800 dark:bg-sky-500/15 dark:text-sky-100"
  },
  {
    name: "Ticket system navigator",
    description: "Routes compliance, logistics, and distributor needs with SLA heatmaps and AI summaries.",
    icon: MapTrifold,
    accent: "bg-cyan-500/10 text-cyan-800 dark:bg-cyan-500/15 dark:text-cyan-100"
  },
  {
    name: "Auto responder studio",
    description: "Delivers French, Tahitian, and English communications for renewals and experiences.",
    icon: Wind,
    accent: "bg-emerald-500/10 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-100"
  },
  {
    name: "E-voucher lagoon",
    description: "Funds cultural events, ocean initiatives, and sales incentives with traceable approvals.",
    icon: TreePalm,
    accent: "bg-teal-500/10 text-teal-800 dark:bg-teal-500/15 dark:text-teal-100"
  },
  {
    name: "E-wallet tides",
    description: "Streams instant commissions with liquidity guardrails calibrated for island banking.",
    icon: Waveform,
    accent: "bg-indigo-500/10 text-indigo-800 dark:bg-indigo-500/15 dark:text-indigo-100"
  },
  {
    name: "Backup reef",
    description: "Maintains immutable snapshots for onshore, offshore, and vessel-based operations.",
    icon: Anchor,
    accent: "bg-blue-500/10 text-blue-800 dark:bg-blue-500/15 dark:text-blue-100"
  },
  {
    name: "Emails command",
    description: "Coordinates campaign, transactional, and compliance messaging from one hub.",
    icon: Megaphone,
    accent: "bg-rose-500/10 text-rose-800 dark:bg-rose-500/15 dark:text-rose-100"
  },
  {
    name: "KYC documentation",
    description: "Stores identity checks, sanction evidence, and renewal reminders for Pacific partners.",
    icon: ShieldCheck,
    accent: "bg-purple-500/10 text-purple-800 dark:bg-purple-500/15 dark:text-purple-100"
  },
  {
    name: "Multi-lingual portals",
    description: "Keeps French, Tahitian, English, and Japanese experiences aligned.",
    icon: GlobeHemisphereEast,
    accent: "bg-amber-500/10 text-amber-800 dark:bg-amber-500/15 dark:text-amber-100"
  }
];

const MOMENTUM_ROWS: MomentumRow[] = [
  {
    phase: "Discovery across archipelagos",
    summary: "We translate the WordPress copy into stakeholder journeys for Tahiti, Bora Bora, and Moorea leadership.",
    icon: TreePalm
  },
  {
    phase: "Payment intelligence activation",
    summary: "AI dashboards monitor PayPal through 2Checkout health, funding ocean sustainability along the way.",
    icon: Waveform
  },
  {
    phase: "Compliance and experience cadence",
    summary: "Ticket, KYC, and communications data stream into briefings for board members and island councils.",
    icon: ShieldCheck
  },
  {
    phase: "Continuous renewal",
    summary: "Weekly retros capture lessons, publish to the knowledge base, and refresh automations for the next campaign.",
    icon: ArrowClockwise
  }
];

const REGIONAL_TIES: RegionalTie[] = [
  {
    title: "Pacific alliances",
    note: "Collaborate with New Zealand, Fiji, and Samoa partners on FX resilience and AI enablement.",
    icon: Sailboat
  },
  {
    title: "European Union",
    note: "Paris and Brussels teams exchange compliance briefings and PSP negotiations with Tahiti.",
    icon: ShieldCheck
  },
  {
    title: "Asia gateways",
    note: "Singapore and Tokyo hubs coordinate launch playbooks for tourism and digital membership programmes.",
    icon: Compass
  },
  {
    title: "Americas diaspora",
    note: "San Francisco and Santiago enable remote distributors with mirrored onboarding sequences.",
    icon: Megaphone
  }
];

export const metadata: Metadata = {
  title: "French Polynesia MLM Payment Gateways | Cloud MLM Software",
  description:
    "Elevate French Polynesia’s MLM payment gateways across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with AI-ready oceanic operations.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/french-polynesia"
  },
  openGraph: {
    title: "French Polynesia MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in French Polynesia, rebuilt with lagoon-grade resilience and corporate governance."
  }
};

type FrenchPolynesiaPageProps = {
  params: { lang: SupportedLocale };
};

export default function FrenchPolynesiaPaymentGatewayPage({ params }: FrenchPolynesiaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-20 dark:from-sky-950 dark:via-slate-950 dark:to-cyan-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(14,165,233,0.16),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.12),transparent_55%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-sky-800 shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · French Polynesia (PF)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                French Polynesia MLM payment gateways tuned for lagoon economies
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground">
                We preserve the WordPress statement—“Ways to accept payments from MLM Software in People’s Democratic Republic of French Polynesia – PF”—and elevate it with AI telemetry, multi-island operations, and corporate governance that respects local culture.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Connect with the Tahiti office
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-sky-500/60 text-sky-700 hover:bg-sky-500/10 dark:border-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  See the island demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {HERO_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.title}
                    className="rounded-3xl border border-sky-500/20 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-foreground">{card.title}</h2>
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground">{card.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <aside className="relative flex flex-col gap-6 rounded-3xl border border-sky-500/30 bg-white/80 p-8 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Signals from the WordPress experience</h2>
              <p className="text-sm text-muted-foreground">
                Demo prompts, module listings, and global coverage from the legacy page migrate into an ocean-ready operating model that leadership can recognise instantly.
              </p>
            </div>
            <div className="space-y-4">
              {LAGOON_SIGNALS.map((signal) => {
                const Icon = signal.icon;
                return (
                  <div key={signal.heading} className="flex items-start gap-4 rounded-2xl border border-border/50 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-sm font-semibold text-foreground">{signal.heading}</h3>
                      <p className="text-xs text-muted-foreground">{signal.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="rounded-2xl border border-dashed border-sky-500/40 bg-sky-500/10 p-5 text-sm text-sky-900 dark:border-sky-400/40 dark:bg-sky-500/15 dark:text-sky-100">
              Weekly AI briefings summarise gateway health, compliance updates, and tourism initiatives for the Tahiti board.
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Gateway waves engineered for island economies
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            The eight payment partners from WordPress reappear as navigational aids—each built with AI telemetry, compliance guardrails, and lagoon-ready logistics.
          </p>
        </div>
        <div className="space-y-8">
          {GATEWAY_WAVES.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="relative grid gap-6 rounded-3xl border border-sky-500/25 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5 lg:grid-cols-[auto,1fr]"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground">{gateway.insight}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden className="mt-1 inline-flex h-2 w-2 rounded-full bg-sky-600/70 dark:bg-white/60" />
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.14),transparent_60%),radial-gradient(circle_at_90%_60%,rgba(14,165,233,0.14),transparent_60%)]" />
        <div className="container relative space-y-10 rounded-[3rem] border border-sky-500/30 bg-white/85 p-10 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Module strands powering Polynesian operations
              </h2>
              <p className="max-w-2xl text-sm text-muted-foreground">
                Each module from WordPress is preserved and augmented with analytics, automation, and access controls suitable for a multi-island operation.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link href={modulesHref}>
                Explore every module
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_STRANDS.map((module) => {
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
              Implementation momentum across the archipelagos
            </h2>
            <p className="text-sm text-muted-foreground">
              Leadership gains a cadence tuned to French Polynesia’s geography—combining authentic WordPress messaging with automation, compliance, and knowledge-sharing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={pricingHref}>
                  Review pricing scenarios
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-border text-foreground hover:bg-foreground/10 dark:border-white/15">
                <Link href={contactHref}>
                  Launch a capability workshop
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 rounded-3xl border border-sky-500/30 bg-white/80 p-8 dark:border-white/10 dark:bg-white/5">
            {MOMENTUM_ROWS.map((row) => {
              const Icon = row.icon;
              return (
                <div key={row.phase} className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/80 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-sm font-semibold text-foreground">{row.phase}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground">{row.summary}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-sky-950 via-cyan-900 to-indigo-900 py-20 text-white">
        <div className="container space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Regional intelligence anchored in Tahiti
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/75">
              The extensive WordPress country list becomes a curated intelligence exchange—linking island partners, EU leadership, and Pacific allies.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {REGIONAL_TIES.map((tie) => {
              const Icon = tie.icon;
              return (
                <article key={tie.title} className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{tie.title}</h3>
                  </div>
                  <p className="text-sm text-white/75">{tie.note}</p>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-sky-900 hover:bg-white/90">
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
