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
  Bank,
  Bridge,
  Buildings,
  CirclesThreePlus,
  Compass,
  Cpu,
  GlobeHemisphereEast,
  GlobeSimple,
  MapPin,
  Megaphone,
  Mountains,
  MusicNotes,
  Scroll,
  ShieldCheck,
  Sparkle,
  StackSimple,
  TrafficSignal,
  UsersThree,
  Wine
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroElement = {
  title: string;
  detail: string;
  icon: IconType;
};

type CultureSignal = {
  heading: string;
  description: string;
  icon: IconType;
};

type GatewayBlueprint = {
  name: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type ModuleMatrixItem = {
  name: string;
  description: string;
  icon: IconType;
  accent: string;
};

type ExecutionPillar = {
  phase: string;
  insight: string;
  icon: IconType;
};

type RegionalNetwork = {
  title: string;
  note: string;
  icon: IconType;
};

const HERO_ELEMENTS: HeroElement[] = [
  {
    title: "WordPress legacy honoured",
    detail:
      "Hero copy keeps the exact promise “Ways to accept payments from MLM Software in People’s Democratic Republic of Georgia – GE.”",
    icon: Scroll
  },
  {
    title: "Eight-gateway roster",
    detail: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout.",
    icon: CirclesThreePlus
  },
  {
    title: "Module foundation",
    detail:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual system.",
    icon: StackSimple
  }
];

const CULTURE_SIGNALS: CultureSignal[] = [
  {
    heading: "Demo experiences preserved",
    description: "Custom and preset demos gain automated invites, AI transcripts, and follow-up cadences.",
    icon: Sparkle
  },
  {
    heading: "Heritage meets innovation",
    description: "We blend hospitality, fintech, and creative industries—a nod to Georgia’s lively economy.",
    icon: MusicNotes
  },
  {
    heading: "Global index evolved",
    description: "The WordPress country list becomes a knowledge exchange across Black Sea and Caucasus partners.",
    icon: GlobeSimple
  }
];

const GATEWAY_BLUEPRINTS: GatewayBlueprint[] = [
  {
    name: "PayPal — diaspora cadence",
    focus: "Coordinate Tbilisi, Berlin, and New York distributors with treasury-grade oversight.",
    bullets: [
      "Multi currency ledgers reconcile GEL, EUR, USD, and GBP inflows with anomaly detection.",
      "Ticket system archives National Bank of Georgia updates, tax filings, and partner credentials."
    ],
    icon: GlobeHemisphereEast
  },
  {
    name: "Amazon Pay — hospitality & retail",
    focus: "Support boutique hotels, wine tourism, and creative marketplaces with curated checkout journeys.",
    bullets: [
      "Auto responder issues bilingual confirmations, customs paperwork, and loyalty nudges instantly.",
      "Backup manager protects seasonal campaigns and AI merchandising data."
    ],
    icon: Wine
  },
  {
    name: "PayU — regional corridors",
    focus: "Bridge EU, Türkiye, and Central Asian PSPs with unified compliance visibility.",
    bullets: [
      "Emails module circulates PSD2, Georgian NBG, and regional policy updates with executive commentary.",
      "KYC documentation vault manages distributor renewals, sanction checks, and legal approvals."
    ],
    icon: Compass
  },
  {
    name: "Stripe — digital ventures",
    focus: "Prototype AI-led education, SaaS, and creative economy subscriptions.",
    bullets: [
      "Automation aggregates webhook analytics across Shopify, WooCommerce, and custom stacks.",
      "Ticket workflows deliver AI-authored diagnostics for engineering pods."
    ],
    icon: Cpu
  },
  {
    name: "Authorize.Net — transatlantic governance",
    focus: "Blend North American acquiring with Georgian regulatory expectations and board-level oversight.",
    bullets: [
      "Multi-lingual documentation synchronises Georgian and English contracts with version control.",
      "Secure vault stores sanction diligence, legal sign-offs, and risk assessments."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree — omnichannel incentives",
    focus: "Tokenise events, wellness programmes, and franchise activations with secure wallet flows.",
    bullets: [
      "E-wallet module streams commissions with maker-checker controls and liquidity monitoring.",
      "Backup manager protects offline capture during roadshows across regions."
    ],
    icon: UsersThree
  },
  {
    name: "Adyen — performance intelligence",
    focus: "Compare EU, Caucasus, and diaspora conversion trends with executive dashboards.",
    bullets: [
      "Analytics spotlight interchange variance, dispute ratios, and approval rates.",
      "Ticket system attaches Adyen risk alerts to compliance tasks with ownership clarity."
    ],
    icon: Buildings
  },
  {
    name: "2Checkout — digital export runway",
    focus: "Distribute e-learning, AI enablement, and documentation to regional partners and diaspora leaders.",
    bullets: [
      "Auto responder nurtures onboarding sequences with compliance checkpoints embedded.",
      "Knowledge base repackages WordPress FAQs into AI-ready playbooks."
    ],
    icon: Megaphone
  }
];

const MODULE_MATRIX: ModuleMatrixItem[] = [
  {
    name: "Multi currency intelligence",
    description: "Balances GEL, USD, EUR, and GBP settlements with treasury dashboards and granular alerts.",
    icon: Bank,
    accent: "bg-amber-500/10 text-amber-800 dark:bg-amber-500/15 dark:text-amber-100"
  },
  {
    name: "Ticket system studio",
    description: "Routes compliance, logistics, and distributor requests with SLA heatmaps and AI notes.",
    icon: TrafficSignal,
    accent: "bg-rose-500/10 text-rose-800 dark:bg-rose-500/15 dark:text-rose-100"
  },
  {
    name: "Auto responder",
    description: "Delivers Georgian and English communications for renewals, experiences, and compliance.",
    icon: Sparkle,
    accent: "bg-indigo-500/10 text-indigo-800 dark:bg-indigo-500/15 dark:text-indigo-100"
  },
  {
    name: "E-voucher atelier",
    description: "Funds cultural events, franchise launches, and loyalty programmes with tracked approvals.",
    icon: Bridge,
    accent: "bg-red-500/10 text-red-800 dark:bg-red-500/15 dark:text-red-100"
  },
  {
    name: "E-wallet orchestration",
    description: "Streams instant commissions with liquidity guardrails and audit trails.",
    icon: UsersThree,
    accent: "bg-emerald-500/10 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-100"
  },
  {
    name: "Backup manager",
    description: "Maintains immutable snapshots for data centres, field offices, and remote activations.",
    icon: StackSimple,
    accent: "bg-slate-500/10 text-slate-800 dark:bg-slate-500/15 dark:text-slate-100"
  },
  {
    name: "Emails command centre",
    description: "Coordinates campaign, transactional, and compliance messaging from one hub.",
    icon: Megaphone,
    accent: "bg-cyan-500/10 text-cyan-800 dark:bg-cyan-500/15 dark:text-cyan-100"
  },
  {
    name: "KYC documentation",
    description: "Stores identity checks, sanction evidence, and renewal reminders aligned with NBG policy.",
    icon: ShieldCheck,
    accent: "bg-purple-500/10 text-purple-800 dark:bg-purple-500/15 dark:text-purple-100"
  },
  {
    name: "Multi-lingual portals",
    description: "Keeps Georgian, English, and Russian experiences aligned with shared governance.",
    icon: GlobeHemisphereEast,
    accent: "bg-blue-500/10 text-blue-800 dark:bg-blue-500/15 dark:text-blue-100"
  }
];

const EXECUTION_PILLARS: ExecutionPillar[] = [
  {
    phase: "Discovery with WordPress fidelity",
    insight: "Legacy copy seeds hero messaging, demo flows, and stakeholder journeys for Tbilisi leadership.",
    icon: MapPin
  },
  {
    phase: "Gateway instrumentation",
    insight: "PayPal through 2Checkout receive telemetry, SLA tracking, and compliance automations.",
    icon: Cpu
  },
  {
    phase: "Governance enablement",
    insight: "Ticket, KYC, and reporting data sync for board reviews and regulatory readiness.",
    icon: ShieldCheck
  },
  {
    phase: "Continuous refinement",
    insight: "AI briefings, retrospectives, and knowledge updates publish weekly to all hubs.",
    icon: Sparkle
  }
];

const REGIONAL_NETWORKS: RegionalNetwork[] = [
  {
    title: "Caucasus alliance",
    note: "Armenia and Azerbaijan partners share FX guardrails and distributor insights.",
    icon: Mountains
  },
  {
    title: "European connection",
    note: "Berlin, Tallinn, and Warsaw offices swap compliance playbooks and PSP strategies.",
    icon: Buildings
  },
  {
    title: "Black Sea innovation",
    note: "İstanbul and Bucharest hubs coordinate fintech experiments and AI enablement.",
    icon: Bridge
  },
  {
    title: "Global diaspora",
    note: "Toronto and Los Angeles communities align onboarding and communication cadences.",
    icon: Megaphone
  }
];

export const metadata: Metadata = {
  title: "Georgia MLM Payment Gateways | Cloud MLM Software",
  description:
    "Reimagine Georgia’s MLM payment gateways across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with AI-guided operations.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/georgia"
  },
  openGraph: {
    title: "Georgia MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Georgia with hospitality-rich experiences and corporate-grade governance."
  }
};

type GeorgiaPageProps = {
  params: { lang: SupportedLocale };
};

export default function GeorgiaPaymentGatewayPage({ params }: GeorgiaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-rose-50 py-20 dark:from-amber-950 dark:via-slate-950 dark:to-rose-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(245,158,11,0.16),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(244,114,182,0.18),transparent_55%),radial-gradient(circle_at_60%_80%,rgba(59,130,246,0.12),transparent_55%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-600/40 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-amber-800 shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · Georgia (GE)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Georgia MLM payment gateways crafted for hospitality, fintech, and creative growth
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground">
                We retain the WordPress promise—“Ways to accept payments from MLM Software in People’s Democratic Republic of Georgia – GE”—and amplify it with AI telemetry, compliance orchestration, and cultural nuance for Tbilisi leadership.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Speak with the Tbilisi team
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-amber-600/60 text-amber-700 hover:bg-amber-500/10 dark:border-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  Preview the Georgia demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {HERO_ELEMENTS.map((element) => {
                const Icon = element.icon;
                return (
                  <article
                    key={element.title}
                    className="rounded-3xl border border-amber-600/30 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15 text-amber-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-foreground">{element.title}</h2>
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground">{element.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <aside className="relative flex flex-col gap-6 rounded-3xl border border-amber-600/30 bg-white/80 p-8 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Signals we ported from WordPress</h2>
              <p className="text-sm text-muted-foreground">
                Demo pathways, module listings, and global coverage transform into a Georgian operating model with analytics, AI assistants, and governance frameworks.
              </p>
            </div>
            <div className="space-y-4">
              {CULTURE_SIGNALS.map((signal) => {
                const Icon = signal.icon;
                return (
                  <div key={signal.heading} className="flex items-start gap-4 rounded-2xl border border-border/50 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/15 text-amber-700 dark:bg-white/10 dark:text-white">
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
            <div className="rounded-2xl border border-dashed border-amber-600/40 bg-amber-500/10 p-5 text-sm text-amber-900 dark:border-amber-400/40 dark:bg-amber-500/15 dark:text-amber-100">
              Weekly AI briefings summarise gateway health, compliance tasks, and global collaborations for Georgia’s leadership team.
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Gateway blueprints crafted for Georgia’s creative economy
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Eight WordPress gateways return with data-rich playbooks, balancing hospitality heritage, fintech ambition, and diaspora networks.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_BLUEPRINTS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-amber-600/30 bg-white/80 p-6 transition hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15 text-amber-700 dark:bg-white/10 dark:text-white">
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
                      <span aria-hidden className="mt-1 inline-flex h-2 w-2 rounded-full bg-amber-600/70 dark:bg-white/60" />
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(245,158,11,0.14),transparent_60%),radial-gradient(circle_at_90%_75%,rgba(244,114,182,0.16),transparent_60%)]" />
        <div className="container relative space-y-10 rounded-[3rem] border border-amber-600/30 bg-white/85 p-10 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Module matrix supporting Georgian operations
              </h2>
              <p className="max-w-2xl text-sm text-muted-foreground">
                Each module from WordPress now carries analytics, automation, and governance tuned to Georgia’s hospitality, fintech, and creative sectors.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link href={modulesHref}>
                Explore modules
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_MATRIX.map((module) => {
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
              Execution pillars for Georgia leadership
            </h2>
            <p className="text-sm text-muted-foreground">
              Authentic WordPress copy evolves into a four-phase cadence—balancing compliance, creativity, and AI automation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={pricingHref}>
                  Examine pricing paths
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-border text-foreground hover:bg-foreground/10 dark:border-white/15">
                <Link href={contactHref}>
                  Schedule a playbook session
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 rounded-3xl border border-amber-600/30 bg-white/80 p-8 dark:border-white/10 dark:bg-white/5">
            {EXECUTION_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.phase} className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/80 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/15 text-amber-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-sm font-semibold text-foreground">{pillar.phase}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground">{pillar.insight}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-amber-950 via-rose-900 to-indigo-900 py-20 text-white">
        <div className="container space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Regional networks orchestrated from Tbilisi
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/75">
              The WordPress country directory becomes a collaboration network spanning the Caucasus, Europe, and global diaspora hubs.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {REGIONAL_NETWORKS.map((network) => {
              const Icon = network.icon;
              return (
                <article key={network.title} className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{network.title}</h3>
                  </div>
                  <p className="text-sm text-white/75">{network.note}</p>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-amber-900 hover:bg-white/90">
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
