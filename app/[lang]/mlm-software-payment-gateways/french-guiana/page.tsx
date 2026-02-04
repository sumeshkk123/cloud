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
  ArrowLineUpRight,
  ChartScatter,
  CirclesThreePlus,
  CloudRain,
  Compass,
  Cpu,
  Cylinder,
  GlobeHemisphereWest,
  Handshake,
  Leaf,
  Lightning,
  MapTrifold,
  Megaphone,
  RocketLaunch,
  ShieldCheck,
  StackSimple,
  Tree,
  TrendUp,
  UsersThree,
  Warehouse
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroSignal = {
  label: string;
  description: string;
  icon: IconType;
};

type GatewayPlay = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type ModuleCard = {
  title: string;
  description: string;
  icon: IconType;
  accent: string;
};

type TimelineStage = {
  title: string;
  detail: string;
  icon: IconType;
};

type RegionalBridge = {
  region: string;
  note: string;
  icon: IconType;
};

const HERO_SIGNALS: HeroSignal[] = [
  {
    label: "WordPress pledge",
    description:
      "We honour the headline “Ways to accept payments from MLM Software in People’s Democratic Republic of France – GF” while elevating it with an AI command centre.",
    icon: RocketLaunch
  },
  {
    label: "Gateway roster",
    description: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout.",
    icon: CirclesThreePlus
  },
  {
    label: "Module backbone",
    description:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual experience.",
    icon: StackSimple
  }
];

const GATEWAY_PLAYS: GatewayPlay[] = [
  {
    name: "PayPal · diaspora synchronisation",
    summary: "Unite Cayenne, Kourou, and Paris distributors with board-grade treasury oversight.",
    bullets: [
      "Multi currency ledgers balance EUR, USD, and BRL remittances with anomaly alerts for finance teams.",
      "Ticket routing archives ACPR notes, SEPA evidence, and partner credentials inside an auditable trail."
    ],
    icon: TrendUp
  },
  {
    name: "Amazon Pay · coastal retail confidence",
    summary: "Deliver premium checkout experiences for tourism showcases and government programmes.",
    bullets: [
      "Auto responder issues bilingual confirmations, customs paperwork, and sustainability briefs instantly.",
      "Backup guardian preserves launch-day telemetry for cross-functional retrospectives."
    ],
    icon: CloudRain
  },
  {
    name: "PayU · equatorial expansion",
    summary: "Bridge French Guiana, Brazil, and Suriname corridors with predictable acquisition data.",
    bullets: [
      "Emails module circulates PSD2, PIX, and LATAM regulatory updates with executive annotations.",
      "KYC vault stores distributor verification artefacts with renewal reminders and sanction checks."
    ],
    icon: Compass
  },
  {
    name: "Stripe · space-centre innovation",
    summary: "Prototype AI-driven onboarding for aerospace supply chains around the Guiana Space Centre.",
    bullets: [
      "Automation streams webhook analytics into dashboards for engineering pods and leadership.",
      "Ticket responses include AI-authored diagnostics and reproducible logs for rapid release cycles."
    ],
    icon: RocketLaunch
  },
  {
    name: "Authorize.Net · transatlantic rigour",
    summary: "Blend North American acquiring with French corporate governance and legal oversight.",
    bullets: [
      "Multi-lingual interface keeps French and English contracts aligned with a single source of truth.",
      "Shielded artefacts capture sanction diligence, approvals, and redlined agreements automatically."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree · omnichannel incentive",
    summary: "Tokenised payments support rainforest field programmes and digital kit distribution.",
    bullets: [
      "E-wallet module orchestrates instant incentives with liquidity guardrails and maker-checker policies.",
      "Backup manager protects offline collection events with encrypted recovery plans."
    ],
    icon: Handshake
  },
  {
    name: "Adyen · data-rich monitoring",
    summary: "Compare gateway performance across EU, Caribbean, and LATAM operations from one control tower.",
    bullets: [
      "Charting surfaces interchange variance, dispute ratios, and success rates for CFO briefings.",
      "Ticket system links Adyen risk alerts to compliance tasks with ownership clarity."
    ],
    icon: ChartScatter
  },
  {
    name: "2Checkout · digital reach",
    summary: "Deliver e-learning, AI enablement, and documentation across remote territories.",
    bullets: [
      "Auto responder nurtures onboarding sequences with compliance checkpoints baked into every email.",
      "Knowledge articles syndicate WordPress FAQs into AI-ready playbooks for field teams."
    ],
    icon: Megaphone
  }
];

const MODULES: ModuleCard[] = [
  {
    title: "Multi currency module",
    description: "Balances EUR, USD, BRL, and SRD flows with treasury dashboards grounded in ACPR policy.",
    icon: Cylinder,
    accent: "bg-emerald-500/10 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-100"
  },
  {
    title: "Ticket system",
    description: "Routes compliance, logistics, and distributor inquiries with SLA monitors and AI summaries.",
    icon: MapTrifold,
    accent: "bg-cyan-500/10 text-cyan-800 dark:bg-cyan-500/15 dark:text-cyan-100"
  },
  {
    title: "Auto responder",
    description: "Delivers French and English communications for renewals, shipments, and training milestones.",
    icon: Lightning,
    accent: "bg-amber-500/10 text-amber-800 dark:bg-amber-500/15 dark:text-amber-100"
  },
  {
    title: "E-voucher studio",
    description: "Funds coastal events, rainforest initiatives, and social programmes with clear approvals.",
    icon: Leaf,
    accent: "bg-lime-500/10 text-lime-800 dark:bg-lime-500/15 dark:text-lime-100"
  },
  {
    title: "E-wallet orchestration",
    description: "Streams instant commissions with liquidity guardrails tuned to French Guiana’s banking mix.",
    icon: UsersThree,
    accent: "bg-blue-500/10 text-blue-800 dark:bg-blue-500/15 dark:text-blue-100"
  },
  {
    title: "Backup manager",
    description: "Maintains immutable snapshots for remote field operations and space-industry stakeholders.",
    icon: Warehouse,
    accent: "bg-slate-500/10 text-slate-800 dark:bg-slate-500/15 dark:text-slate-100"
  },
  {
    title: "Emails command centre",
    description: "Coordinates campaign, transactional, and compliance messaging with role-based templates.",
    icon: Megaphone,
    accent: "bg-rose-500/10 text-rose-800 dark:bg-rose-500/15 dark:text-rose-100"
  },
  {
    title: "KYC documentation",
    description: "Stores onboarding files, ID checks, and sanction evidence in an auditable vault.",
    icon: ShieldCheck,
    accent: "bg-indigo-500/10 text-indigo-800 dark:bg-indigo-500/15 dark:text-indigo-100"
  },
  {
    title: "Multi-lingual system",
    description: "Keeps French, English, Portuguese, and Creole experiences aligned across portals.",
    icon: GlobeHemisphereWest,
    accent: "bg-teal-500/10 text-teal-800 dark:bg-teal-500/15 dark:text-teal-100"
  }
];

const TIMELINE: TimelineStage[] = [
  {
    title: "Discovery with WordPress fidelity",
    detail: "Authentic copy from the legacy page seeds the hero statement and informs persona mapping.",
    icon: Tree
  },
  {
    title: "Gateway blueprints drafted in 10 days",
    detail: "Automation pipelines evaluate PayPal through 2Checkout performance across diaspora corridors.",
    icon: ArrowLineUpRight
  },
  {
    title: "AI governance activation",
    detail: "Telemetry, ticketing, and compliance data feed into AI briefings for French Guiana leadership.",
    icon: Cpu
  },
  {
    title: "Sustainability reporting loop",
    detail: "Backup and audit trails align with rainforest protection initiatives and ESG disclosures.",
    icon: Leaf
  }
];

const REGIONAL_BRIDGES: RegionalBridge[] = [
  {
    region: "Caribbean",
    note: "Coordinate with Martinique and Guadeloupe hubs to harmonise onboarding scripts and FX exposure.",
    icon: Compass
  },
  {
    region: "Latin America",
    note: "Share payment intelligence with Brazil, Suriname, and Guyana for continuum coverage.",
    icon: GlobeHemisphereWest
  },
  {
    region: "European Union",
    note: "Paris and Brussels teams align compliance updates and PSP negotiations for the territory.",
    icon: ShieldCheck
  },
  {
    region: "Aerospace ecosystem",
    note: "Kourou partners, satellite vendors, and aviation suppliers share telemetry via secure portals.",
    icon: RocketLaunch
  }
];

export const metadata: Metadata = {
  title: "French Guiana MLM Payment Gateways | Cloud MLM Software",
  description:
    "Modernise French Guiana’s MLM payment gateways with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout backed by AI governance.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/french-guiana"
  },
  openGraph: {
    title: "French Guiana MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in French Guiana enhanced with diaspora telemetry, rainforest initiatives, and corporate compliance."
  }
};

type FrenchGuianaPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function FrenchGuianaPaymentGatewayPage({ params }: FrenchGuianaPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-sky-50 py-20 dark:from-emerald-950 dark:via-slate-950 dark:to-sky-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(14,116,144,0.18),transparent_55%),radial-gradient(circle_at_65%_80%,rgba(99,102,241,0.12),transparent_55%)]" />
        <div className="container relative grid gap-14 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-800 shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · French Guiana (GF)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                French Guiana MLM payment gateways with rainforest-grade resilience
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground">
                We keep the WordPress promise—“Ways to accept payments from MLM Software in People’s Democratic Republic of French Guiana – GF”—and extend it with AI telemetry, diaspora orchestration, and sustainability reporting led by Cayenne and Kourou.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Speak with the Cayenne team
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-emerald-500/60 text-emerald-700 hover:bg-emerald-500/10 dark:border-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  Review the French Guiana demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {HERO_SIGNALS.map((signal) => {
                const Icon = signal.icon;
                return (
                  <article
                    key={signal.label}
                    className="rounded-3xl border border-emerald-500/20 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-foreground">{signal.label}</h2>
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground">{signal.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <aside className="relative flex flex-col gap-6 rounded-3xl border border-emerald-500/30 bg-white/80 p-8 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="space-y-2">
              <h2 className="text-base font-semibold text-foreground">Legacy signals we respected</h2>
              <p className="text-sm text-muted-foreground">
                Modules, demo prompts, and global country lists from WordPress are mapped into this experience so the territory team recognises every promise we retained.
              </p>
            </div>
            <div className="space-y-4">
              {HERO_FOOTNOTES.map((footnote) => {
                const Icon = footnote.icon;
                return (
                  <div key={footnote.title} className="flex items-start gap-4 rounded-2xl border border-border/50 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-foreground">{footnote.title}</h3>
                      <p className="text-xs text-muted-foreground">{footnote.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="rounded-2xl border border-dashed border-emerald-500/40 bg-emerald-500/10 p-5 text-sm text-emerald-900 dark:border-emerald-400/40 dark:bg-emerald-500/15 dark:text-emerald-100">
              AI-generated executive briefings summarise gateway health, compliance tasks, and sustainability impact every Monday.
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Gateway blueprints rooted in French Guiana’s diaspora corridors
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Every connector from WordPress returns with a modern playbook—focused on rainforest stewardship, aerospace supply chains, and francophone expansion.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_PLAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-500/30 bg-white/80 p-6 transition hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{gateway.name}</h3>
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_25%,rgba(16,185,129,0.14),transparent_55%),radial-gradient(circle_at_90%_75%,rgba(59,130,246,0.12),transparent_55%)]" />
        <div className="container relative space-y-10 rounded-[3rem] border border-emerald-500/30 bg-white/85 p-10 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Modules orchestrated for tropical operations
              </h2>
              <p className="max-w-2xl text-sm text-muted-foreground">
                The modules celebrated on WordPress now power a unified command centre. Each card reflects French Guiana’s operational priorities—from rainforest routes to launchpad logistics.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link href={modulesHref}>
                View full module library
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${module.accent}`}>
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-foreground">{module.title}</h3>
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
              Delivery cadence for French Guiana leadership
            </h2>
            <p className="text-sm text-muted-foreground">
              WordPress copy, eight gateway promises, and the familiar module list remain—but every initiative now feeds AI analytics, compliance workflows, and sustainability dashboards managed by the French Guiana command centre.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={pricingHref}>
                  Explore pricing for the territory
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-border text-foreground hover:bg-foreground/10 dark:border-white/15">
                <Link href={contactHref}>
                  Start an implementation workshop
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative rounded-3xl border border-emerald-500/30 bg-white/80 p-8 dark:border-white/10 dark:bg-white/5">
            <div className="absolute left-10 top-12 h-[calc(100%-5rem)] w-px bg-gradient-to-b from-emerald-500/60 via-border to-transparent" />
            <div className="space-y-8">
              {TIMELINE.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <div key={stage.title} className="relative pl-16">
                    <div className="absolute left-0 top-1 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    {index < TIMELINE.length - 1 ? (
                      <span className="absolute left-5 top-14 h-8 w-px bg-emerald-500/40" aria-hidden />
                    ) : null}
                    <h3 className="text-base font-semibold text-foreground">{stage.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{stage.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-950 via-sky-900 to-slate-900 py-20 text-white">
        <div className="container space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Regional bridges guided by the French Guiana hub
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/75">
              The WordPress country list becomes a curated intelligence exchange—leveraging neighbouring territories, EU policy makers, and the Guiana Space Centre community.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {REGIONAL_BRIDGES.map((bridge) => {
              const Icon = bridge.icon;
              return (
                <article key={bridge.region} className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{bridge.region}</h3>
                  </div>
                  <p className="text-sm text-white/75">{bridge.note}</p>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-emerald-900 hover:bg-white/90">
              <Link href={contactHref}>
                Book a strategy session
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-white/40 text-white hover:bg-white/15">
              <Link href={pricingHref}>
                Download the pricing brief
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

type HeroFootnote = {
  title: string;
  detail: string;
  icon: IconType;
};

const HERO_FOOTNOTES: HeroFootnote[] = [
  {
    title: "Custom and preset demos",
    detail: "The WordPress demo pathways reappear with automated scheduling, AI transcripts, and follow-up sequences.",
    icon: Lightning
  },
  {
    title: "Modules preserved",
    detail: "Each module mentioned on WordPress remains intact and gains telemetry plus role-based access control.",
    icon: CirclesThreePlus
  },
  {
    title: "Global coverage",
    detail: "Country listings migrate into a data exchange so every region benefits from French Guiana’s insights.",
    icon: GlobeHemisphereWest
  }
];

function resolveLocale(lang: string): Locale {
  if (!isSupportedLocale(lang)) {
    return i18n.defaultLocale as Locale;
  }

  return lang as Locale;
}
