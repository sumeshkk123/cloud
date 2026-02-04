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
  CirclesThreePlus,
  Compass,
  Cpu,
  GasPump,
  GlobeHemisphereWest,
  Handshake,
  Leaf,
  Lightning,
  MapTrifold,
  Megaphone,
  ShieldCheck,
  StackSimple,
  TreeStructure,
  UsersThree,
  Warehouse,
  Waves
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroPillar = {
  title: string;
  detail: string;
  icon: IconType;
};

type StrategySignal = {
  heading: string;
  description: string;
  icon: IconType;
};

type GatewayPlay = {
  label: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type ModulePanel = {
  name: string;
  description: string;
  icon: IconType;
  accent: string;
};

type ExecutionTrack = {
  phase: string;
  insight: string;
  icon: IconType;
};

type RegionalInfra = {
  name: string;
  note: string;
  icon: IconType;
};

const HERO_PILLARS: HeroPillar[] = [
  {
    title: "WordPress continuity",
    detail:
      "The hero repeats the exact phrase “Ways to accept payments from MLM Software in People’s Democratic Republic of Gabon – GA.”",
    icon: ShieldCheck
  },
  {
    title: "Gateway orchestration",
    detail: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout.",
    icon: CirclesThreePlus
  },
  {
    title: "Module fidelity",
    detail:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual experience.",
    icon: StackSimple
  }
];

const STRATEGY_SIGNALS: StrategySignal[] = [
  {
    heading: "Custom & preset demos respected",
    description: "WordPress demo flows now trigger automated invites, AI transcripts, and renewal cadences.",
    icon: Lightning
  },
  {
    heading: "Industrial + digital balance",
    description: "We blend energy-sector expectations with SaaS agility—mirroring Gabon’s mixed economy.",
    icon: GasPump
  },
  {
    heading: "Knowledge transfer",
    description: "Global country listings evolve into a data exchange for CEMAC allies and diaspora leaders.",
    icon: GlobeHemisphereWest
  }
];

const GATEWAY_PLAYS: GatewayPlay[] = [
  {
    label: "PayPal — diaspora treasury",
    summary: "Harmonise Libreville, Paris, and Montreal distributor inflows with audit-ready dashboards.",
    bullets: [
      "Multi currency ledgers balance XAF, EUR, USD, and CAD before finance sign-off.",
      "Ticket system archives ACPR updates, tax evidence, and distributor credentials."
    ],
    icon: Compass
  },
  {
    label: "Amazon Pay — premium retail",
    summary: "Support luxury, wellness, and tourism offers with trusted checkout experiences.",
    bullets: [
      "Auto responder issues bilingual receipts, warranties, and customs paperwork instantly.",
      "Backup manager protects launch telemetry and AI-driven merchandising."
    ],
    icon: Leaf
  },
  {
    label: "PayU — regional expansion",
    summary: "Integrate PSPs across CEMAC, ECOWAS, and Indian Ocean corridors without losing oversight.",
    bullets: [
      "Emails module circulates PSD2, BEAC, and ECOWAS updates with executive commentary.",
      "KYC documentation vault tracks distributor renewals, sanction checks, and approvals."
    ],
    icon: TreeStructure
  },
  {
    label: "Stripe — digital ventures",
    summary: "Prototype AI-led subscription portals for education, wellness, and fintech ecosystems.",
    bullets: [
      "Automation streams webhook analytics across Shopify, WooCommerce, and bespoke stacks.",
      "Ticket workflows carry AI-authored diagnostics for engineering follow-up."
    ],
    icon: Cpu
  },
  {
    label: "Authorize.Net — transatlantic rigour",
    summary: "Blend North American acquiring with Gabon’s regulatory expectations and board oversight.",
    bullets: [
      "Multi-lingual contracts align French and English clauses in a single governance layer.",
      "Secure vault stores sanction diligence, approvals, and legal documentation."
    ],
    icon: ShieldCheck
  },
  {
    label: "Braintree — omnichannel incentives",
    summary: "Tokenise roadshows, wellness events, and in-market activations with secure wallet flows.",
    bullets: [
      "E-wallet module streams commissions with maker-checker guardrails and liquidity alerts.",
      "Backup manager protects offline capture during provincial activations."
    ],
    icon: Handshake
  },
  {
    label: "Adyen — performance insights",
    summary: "Compare EU, CEMAC, and diaspora conversion trends via executive-ready dashboards.",
    bullets: [
      "Analytics highlight approval rates, decline codes, and interchange variance.",
      "Ticket system links Adyen risk alerts to compliance case owners."
    ],
    icon: MapTrifold
  },
  {
    label: "2Checkout — digital export runway",
    summary: "Deliver e-learning, AI enablement, and documentation across Gabonese and diaspora audiences.",
    bullets: [
      "Auto responder nurtures onboarding sequences with compliance checkpoints embedded.",
      "Knowledge hub ports WordPress FAQs into AI-ready playbooks."
    ],
    icon: Megaphone
  }
];

const MODULE_PANELS: ModulePanel[] = [
  {
    name: "Multi currency intelligence",
    description: "Balances XAF, EUR, USD, and CFA settlements with treasury dashboards and alerts.",
    icon: Waves,
    accent: "bg-emerald-500/10 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-100"
  },
  {
    name: "Ticket system control tower",
    description: "Routes compliance, logistics, and distributor support with SLA insights and AI summaries.",
    icon: MapTrifold,
    accent: "bg-lime-500/10 text-lime-800 dark:bg-lime-500/15 dark:text-lime-100"
  },
  {
    name: "Auto responder studio",
    description: "Delivers French and English communications for renewals, promotions, and governance.",
    icon: Lightning,
    accent: "bg-amber-500/10 text-amber-800 dark:bg-amber-500/15 dark:text-amber-100"
  },
  {
    name: "E-voucher engine",
    description: "Funds activations, loyalty drives, and social programmes with tracked approvals.",
    icon: Leaf,
    accent: "bg-emerald-700/10 text-emerald-900 dark:bg-emerald-700/15 dark:text-emerald-100"
  },
  {
    name: "E-wallet orchestration",
    description: "Streams instant commissions with liquidity guardrails and audit trails.",
    icon: UsersThree,
    accent: "bg-cyan-500/10 text-cyan-800 dark:bg-cyan-500/15 dark:text-cyan-100"
  },
  {
    name: "Backup manager",
    description: "Maintains immutable snapshots for data centres, field offices, and remote activations.",
    icon: Warehouse,
    accent: "bg-slate-500/10 text-slate-800 dark:bg-slate-500/15 dark:text-slate-100"
  },
  {
    name: "Emails command centre",
    description: "Coordinates campaign, transactional, and compliance messaging from one hub.",
    icon: Megaphone,
    accent: "bg-rose-500/10 text-rose-800 dark:bg-rose-500/15 dark:text-rose-100"
  },
  {
    name: "KYC documentation",
    description: "Stores KYC evidence, sanction checks, and renewal reminders aligned with BEAC policy.",
    icon: ShieldCheck,
    accent: "bg-indigo-500/10 text-indigo-800 dark:bg-indigo-500/15 dark:text-indigo-100"
  },
  {
    name: "Multi-lingual portals",
    description: "Keeps French, English, and Portuguese experiences aligned for Gabon and diaspora teams.",
    icon: GlobeHemisphereWest,
    accent: "bg-teal-500/10 text-teal-800 dark:bg-teal-500/15 dark:text-teal-100"
  }
];

const EXECUTION_TRACKS: ExecutionTrack[] = [
  {
    phase: "Discovery with WordPress fidelity",
    insight: "Authentic copy seeds hero messaging, demo flows, and stakeholder journeys for Libreville leadership.",
    icon: Compass
  },
  {
    phase: "Gateway instrumentation",
    insight: "PayPal through 2Checkout gain telemetry, anomaly detection, and SLA governance per connector.",
    icon: Cpu
  },
  {
    phase: "Compliance + resilience",
    insight: "Ticket, KYC, and backup data synchronise for board reporting and regulatory readiness.",
    icon: ShieldCheck
  },
  {
    phase: "Continuous refinement",
    insight: "AI briefings, retrospectives, and knowledge updates ship every Friday to territory leads.",
    icon: Lightning
  }
];

const REGIONAL_INFRA: RegionalInfra[] = [
  {
    name: "CEMAC alliances",
    note: "Cameroon, Congo, and Equatorial Guinea share FX guardrails and distributor insights.",
    icon: TreeStructure
  },
  {
    name: "European partners",
    note: "Paris and Brussels teams exchange compliance playbooks and PSP negotiations.",
    icon: ShieldCheck
  },
  {
    name: "Gulf & Asia corridors",
    note: "Dubai and Singapore hubs collaborate on fintech innovation and AI enablement.",
    icon: Cpu
  },
  {
    name: "Diaspora networks",
    note: "Toronto, Lyon, and Johannesburg offices align onboarding and communications cadences.",
    icon: Megaphone
  }
];

export const metadata: Metadata = {
  title: "Gabon MLM Payment Gateways | Cloud MLM Software",
  description:
    "Modernise Gabon’s MLM payment gateways across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with AI-governed operations.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/gabon"
  },
  openGraph: {
    title: "Gabon MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Gabon with rainforest resilience, energy-sector rigour, and AI-powered governance."
  }
};

type GabonPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function GabonPaymentGatewayPage({ params }: GabonPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-20 dark:from-emerald-950 dark:via-slate-950 dark:to-amber-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(22,163,74,0.18),transparent_55%),radial-gradient(circle_at_80%_22%,rgba(217,119,6,0.16),transparent_55%),radial-gradient(circle_at_65%_80%,rgba(5,150,105,0.16),transparent_55%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-600/40 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-800 shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · Gabon (GA)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Gabon MLM payment gateways aligned to rainforest and energy ambitions
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground">
                The WordPress headline stays word-perfect—“Ways to accept payments from MLM Software in People’s Democratic Republic of Gabon – GA”—while we layer AI telemetry, compliance guardrails, and territory-specific insights for Libreville leadership.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Talk with the Libreville team
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-emerald-600/60 text-emerald-700 hover:bg-emerald-500/10 dark:border-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  View the Gabon demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {HERO_PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article
                    key={pillar.title}
                    className="rounded-3xl border border-emerald-600/30 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-foreground">{pillar.title}</h2>
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground">{pillar.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <aside className="relative flex flex-col gap-6 rounded-3xl border border-emerald-600/30 bg-white/80 p-8 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Signals we imported from WordPress</h2>
              <p className="text-sm text-muted-foreground">
                Demo prompts, module listings, and global coverage become an operating system for Gabon—complete with analytics, automation, and AI briefings.
              </p>
            </div>
            <div className="space-y-4">
              {STRATEGY_SIGNALS.map((signal) => {
                const Icon = signal.icon;
                return (
                  <div key={signal.heading} className="flex items-start gap-4 rounded-2xl border border-border/50 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
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
            <div className="rounded-2xl border border-dashed border-emerald-600/40 bg-emerald-500/10 p-5 text-sm text-emerald-900 dark:border-emerald-400/40 dark:bg-emerald-500/15 dark:text-emerald-100">
              AI-generated executive briefings summarise payment health, compliance tasks, and growth opportunities every Monday.
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Gateway plays tuned to Gabon’s growth corridors
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            The eight WordPress gateways are reintroduced with modern insights for rainforest stewardship, energy ventures, and diaspora enablement.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_PLAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.label}
                className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-600/30 bg-white/80 p-6 transition hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{gateway.label}</h3>
                    <p className="text-sm text-muted-foreground">{gateway.summary}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span aria-hidden className="mt-1 inline-flex h-2 w-2 rounded-full bg-emerald-600/70 dark:bg-white/60" />
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(22,163,74,0.14),transparent_60%),radial-gradient(circle_at_90%_70%,rgba(217,119,6,0.14),transparent_60%)]" />
        <div className="container relative grid gap-10 rounded-[3rem] border border-emerald-600/30 bg-white/85 p-10 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1fr,1fr]">
          <div className="space-y-6">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Module panels powering territory operations
            </h2>
            <p className="text-sm text-muted-foreground">
              Each module from WordPress is enhanced with analytics, automation, and access controls—supporting Gabon’s economic mix and digital ambitions.
            </p>
            <div className="rounded-3xl border border-dashed border-emerald-600/40 bg-emerald-500/10 p-6 text-sm text-emerald-900 dark:border-emerald-400/40 dark:bg-emerald-500/15 dark:text-emerald-100">
              Modules align with sustainability targets and industrial governance, ensuring rainforest commitments remain central.
            </div>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link href={modulesHref}>
                Explore full module list
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {MODULE_PANELS.map((panel) => {
              const Icon = panel.icon;
              return (
                <article
                  key={panel.name}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${panel.accent}`}>
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-foreground">{panel.name}</h3>
                    <p className="text-sm text-muted-foreground">{panel.description}</p>
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
              Execution tracks for Gabon leadership
            </h2>
            <p className="text-sm text-muted-foreground">
              Authentic copy and modules from WordPress now operate through a four-phase delivery motion tuned to Gabon’s economy.
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
                  Schedule a governance workshop
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 rounded-3xl border border-emerald-600/30 bg-white/80 p-8 dark:border-white/10 dark:bg-white/5">
            {EXECUTION_TRACKS.map((track) => {
              const Icon = track.icon;
              return (
                <div key={track.phase} className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/80 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-sm font-semibold text-foreground">{track.phase}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground">{track.insight}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-950 via-teal-900 to-amber-900 py-20 text-white">
        <div className="container space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Regional infrastructure orchestrated from Libreville
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/75">
              The WordPress country catalogue transforms into an intelligence exchange across francophone Africa, EU partners, and diaspora cities.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {REGIONAL_INFRA.map((infra) => {
              const Icon = infra.icon;
              return (
                <article key={infra.name} className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{infra.name}</h3>
                  </div>
                  <p className="text-sm text-white/75">{infra.note}</p>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-emerald-900 hover:bg-white/90">
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
