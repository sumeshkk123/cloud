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
  CloudSnow,
  Compass,
  Cpu,
  Factory,
  FireSimple,
  GlobeHemisphereWest,
  Lifebuoy,
  Lightning,
  Megaphone,
  SealQuestion,
  ShieldCheck,
  Snowflake,
  StackSimple,
  TidalWave,
  Ticket,
  UsersThree,
  Warehouse
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroPoint = {
  title: string;
  detail: string;
  icon: IconType;
};

type LegacyAnchor = {
  heading: string;
  description: string;
  icon: IconType;
};

type GatewayDrift = {
  name: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type ModuleBlock = {
  name: string;
  description: string;
  icon: IconType;
  accent: string;
};

type DeliveryLoop = {
  stage: string;
  insight: string;
  icon: IconType;
};

type RegionalVector = {
  title: string;
  note: string;
  icon: IconType;
};

const HERO_POINTS: HeroPoint[] = [
  {
    title: "WordPress fidelity",
    detail:
      "Hero copy retains “Ways to accept payments from MLM Software in People’s Democratic Republic of Greenland – GL.”",
    icon: Snowflake
  },
  {
    title: "Gateway constellation",
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

const LEGACY_ANCHORS: LegacyAnchor[] = [
  {
    heading: "Demo pathways preserved",
    description: "Custom and preset demo flows gain automated invites, AI transcripts, and follow-up cadences.",
    icon: Lifebuoy
  },
  {
    heading: "Arctic resilience",
    description: "We pair polar reliability with AI telemetry for fishing, energy, and community ventures.",
    icon: CloudSnow
  },
  {
    heading: "Global knowledge exchange",
    description: "WordPress country listings become an intelligence grid for Arctic, Nordic, and North American partners.",
    icon: GlobeHemisphereWest
  }
];

const GATEWAY_DRIFTS: GatewayDrift[] = [
  {
    name: "PayPal — diaspora remittance",
    focus: "Unify Nuuk, Copenhagen, and North American distributors with treasury-grade visibility.",
    bullets: [
      "Multi currency ledgers reconcile DKK, USD, CAD, and EUR flows with anomaly detection.",
      "Ticket system archives Danish FSA guidance, tax evidence, and partner credentials."
    ],
    icon: Compass
  },
  {
    name: "Amazon Pay — community commerce",
    focus: "Support coastal retail, wellness, and cultural programmes with trusted checkout experiences.",
    bullets: [
      "Auto responder issues bilingual confirmations, customs paperwork, and replenishment nudges instantly.",
      "Backup manager protects seasonal campaigns and remote activation telemetry."
    ],
    icon: FireSimple
  },
  {
    name: "PayU — Nordic & Arctic reach",
    focus: "Integrate PSPs across Denmark, Iceland, and Canadian corridors without losing compliance visibility.",
    bullets: [
      "Emails module circulates PSD2, Danish FSA, and Arctic policy updates with executive commentary.",
      "KYC documentation vault manages distributor renewals, sanction checks, and legal approvals."
    ],
    icon: TidalWave
  },
  {
    name: "Stripe — digital innovation",
    focus: "Prototype AI-led education, sustainability, and logistics platforms for Arctic communities.",
    bullets: [
      "Automation aggregates webhook analytics across Shopify, WooCommerce, and bespoke stacks.",
      "Ticket workflows deliver AI-authored diagnostics for engineering pods."
    ],
    icon: Cpu
  },
  {
    name: "Authorize.Net — transatlantic oversight",
    focus: "Blend North American acquiring with Greenlandic governance and board-level controls.",
    bullets: [
      "Multi-lingual documentation synchronises Danish and English contracts in a single workspace.",
      "Secure vault stores sanction diligence, approvals, and risk assessments."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree — omnichannel incentives",
    focus: "Tokenise community programmes, science initiatives, and tourism experiences with secure wallets.",
    bullets: [
      "E-wallet module streams commissions with maker-checker guardrails and liquidity alerts.",
      "Backup manager protects offline capture during remote field activations."
    ],
    icon: UsersThree
  },
  {
    name: "Adyen — performance telemetry",
    focus: "Compare EU, Nordic, and North American conversion metrics with executive dashboards.",
    bullets: [
      "Analytics highlight approval rates, decline codes, and interchange variance for leadership.",
      "Ticket system links Adyen risk alerts to compliance owners with SLAs."
    ],
    icon: Lightning
  },
  {
    name: "2Checkout — digital export runway",
    focus: "Distribute e-learning, AI enablement, and documentation to Greenlandic communities worldwide.",
    bullets: [
      "Auto responder nurtures onboarding sequences with compliance checkpoints embedded.",
      "Knowledge base repackages WordPress FAQs into AI-ready playbooks."
    ],
    icon: Megaphone
  }
];

const MODULE_BLOCKS: ModuleBlock[] = [
  {
    name: "Multi currency intelligence",
    description: "Balances DKK, USD, CAD, and EUR settlements with treasury dashboards and variance alerts.",
    icon: Compass,
    accent: "bg-blue-500/10 text-blue-800 dark:bg-blue-500/15 dark:text-blue-100"
  },
  {
    name: "Ticket system beacon",
    description: "Routes compliance, logistics, and distributor cases with SLA heatmaps and AI summaries.",
    icon: Ticket,
    accent: "bg-cyan-500/10 text-cyan-800 dark:bg-cyan-500/15 dark:text-cyan-100"
  },
  {
    name: "Auto responder",
    description: "Delivers Danish and English communications for renewals, sustainability, and governance.",
    icon: Sparkle,
    accent: "bg-indigo-500/10 text-indigo-800 dark:bg-indigo-500/15 dark:text-indigo-100"
  },
  {
    name: "E-voucher engine",
    description: "Funds community programmes, research, and loyalty initiatives with traceable approvals.",
    icon: FireSimple,
    accent: "bg-amber-500/10 text-amber-800 dark:bg-amber-500/15 dark:text-amber-100"
  },
  {
    name: "E-wallet orchestration",
    description: "Streams instant commissions with liquidity guardrails and dispute workflows.",
    icon: UsersThree,
    accent: "bg-emerald-500/10 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-100"
  },
  {
    name: "Backup manager",
    description: "Maintains immutable snapshots for satellite links, offline hubs, and research vessels.",
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
    description: "Stores identity checks, sanction evidence, and renewal reminders aligned with Danish FSA.",
    icon: ShieldCheck,
    accent: "bg-purple-500/10 text-purple-800 dark:bg-purple-500/15 dark:text-purple-100"
  },
  {
    name: "Multi-lingual portals",
    description: "Keeps Danish, English, and Greenlandic experiences aligned across communities.",
    icon: GlobeHemisphereWest,
    accent: "bg-teal-500/10 text-teal-800 dark:bg-teal-500/15 dark:text-teal-100"
  }
];

const DELIVERY_LOOPS: DeliveryLoop[] = [
  {
    stage: "Legacy mapping",
    insight: "WordPress copy seeds hero messaging, demo prompts, and stakeholder journeys for Greenland leadership.",
    icon: SealQuestion
  },
  {
    stage: "Gateway instrumentation",
    insight: "Telemetry, anomaly detection, and SLA tracking activate across PayPal through 2Checkout.",
    icon: Cpu
  },
  {
    stage: "Governance and resilience",
    insight: "Ticket, KYC, and backup data provide board briefings and regulatory readiness for Arctic stakeholders.",
    icon: ShieldCheck
  },
  {
    stage: "Continuous optimisation",
    insight: "Weekly AI briefings share insights with Nuuk, Copenhagen, and partner hubs.",
    icon: Lightning
  }
];

const REGIONAL_VECTORS: RegionalVector[] = [
  {
    title: "Nordic collaboration",
    note: "Iceland, Faroe Islands, and Norway share FX guardrails and knowledge exchanges.",
    icon: CloudSnow
  },
  {
    title: "North American corridors",
    note: "Toronto and Anchorage hubs coordinate onboarding, incentives, and AI enablement.",
    icon: Compass
  },
  {
    title: "European governance",
    note: "Copenhagen and Brussels partners sync compliance updates and PSP negotiations.",
    icon: Factory
  },
  {
    title: "Global research alliance",
    note: "Hobart and Reykjavik teams exchange sustainability insights and automation playbooks.",
    icon: Megaphone
  }
];

export const metadata: Metadata = {
  title: "Greenland MLM Payment Gateways | Cloud MLM Software",
  description:
    "Equip Greenland’s MLM payment gateways with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout backed by AI-led governance.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/greenland"
  },
  openGraph: {
    title: "Greenland MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Greenland with Arctic resilience, multi-currency insight, and AI automation."
  }
};

type GreenlandPageProps = {
  params: { lang: SupportedLocale };
};

export default function GreenlandPaymentGatewayPage({ params }: GreenlandPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-sky-100 py-20 dark:from-slate-900 dark:via-slate-950 dark:to-sky-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(148,163,184,0.2),transparent_60%),radial-gradient(circle_at_82%_25%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(circle_at_60%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-500/40 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-slate-800 shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · Greenland (GL)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Greenland MLM payment gateways crafted for Arctic resilience and AI insight
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground">
                We preserve the WordPress promise—“Ways to accept payments from MLM Software in People’s Democratic Republic of Greenland – GL”—and extend it with telemetry, compliance guardrails, and sustainability-first storytelling.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Connect with the Nuuk team
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
                  Request the Greenland demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {HERO_POINTS.map((point) => {
                const Icon = point.icon;
                return (
                  <article
                    key={point.title}
                    className="rounded-3xl border border-slate-500/30 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-500/15 text-slate-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-foreground">{point.title}</h2>
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground">{point.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <aside className="relative flex flex-col gap-6 rounded-3xl border border-slate-500/30 bg-white/80 p-8 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">WordPress anchors carried forward</h2>
              <p className="text-sm text-muted-foreground">
                Demo triggers, module listings, and country coverage convert into an Arctic-ready operating model with analytics and AI assistants.
              </p>
            </div>
            <div className="space-y-4">
              {LEGACY_ANCHORS.map((anchor) => {
                const Icon = anchor.icon;
                return (
                  <div key={anchor.heading} className="flex items-start gap-4 rounded-2xl border border-border/50 bg-background/80 p-4 dark:border-white/10 dark:bg-white/5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-500/15 text-slate-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-sm font-semibold text-foreground">{anchor.heading}</h3>
                      <p className="text-xs text-muted-foreground">{anchor.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="rounded-2xl border border-dashed border-slate-500/40 bg-slate-500/10 p-5 text-sm text-slate-900 dark:border-slate-400/40 dark:bg-slate-500/15 dark:text-slate-100">
              AI-generated briefings summarise payment health, compliance status, and sustainability updates for Greenland every Monday.
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Gateway drifts tuned to Arctic economies
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            The eight WordPress gateways return with Arctic-ready playbooks spanning diaspora remittance, sustainability, and innovation.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_DRIFTS.map((drift) => {
            const Icon = drift.icon;
            return (
              <article
                key={drift.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-500/30 bg-white/80 p-6 transition hover:-translate-y-1.5 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-500/15 text-slate-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{drift.name}</h3>
                    <p className="text-sm text-muted-foreground">{drift.focus}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {drift.bullets.map((bullet) => (
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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(148,163,184,0.16),transparent_60%),radial-gradient(circle_at_90%_70%,rgba(56,189,248,0.14),transparent_60%)]" />
        <div className="container relative space-y-10 rounded-[3rem] border border-slate-500/30 bg-white/85 p-10 shadow-xl backdrop-blur dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Module blocks sustaining Greenland operations
              </h2>
              <p className="max-w-2xl text-sm text-muted-foreground">
                Modules from WordPress are preserved and hardened for Arctic conditions—combining analytics, automation, and resilience.
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
            {MODULE_BLOCKS.map((module) => {
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
              Delivery loops for Greenland leadership
            </h2>
            <p className="text-sm text-muted-foreground">
              WordPress authenticity merges with AI telemetry to create a four-stage governance cadence tailored to Arctic operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={pricingHref}>
                  Review pricing coordinates
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-border text-foreground hover:bg-foreground/10 dark:border-white/15">
                <Link href={contactHref}>
                  Plan a governance workshop
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 rounded-3xl border border-slate-500/30 bg-white/80 p-8 dark:border-white/10 dark:bg-white/5">
            {DELIVERY_LOOPS.map((loop) => {
              const Icon = loop.icon;
              return (
                <div key={loop.stage} className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/80 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-500/15 text-slate-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-sm font-semibold text-foreground">{loop.stage}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground">{loop.insight}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 via-sky-900 to-slate-950 py-20 text-white">
        <div className="container space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Regional vectors anchored in Greenland
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/75">
              The WordPress country list becomes a collaboration network across Nordic allies, North America, and global research hubs.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {REGIONAL_VECTORS.map((vector) => {
              const Icon = vector.icon;
              return (
                <article key={vector.title} className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/10 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{vector.title}</h3>
                  </div>
                  <p className="text-sm text-white/75">{vector.note}</p>
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
