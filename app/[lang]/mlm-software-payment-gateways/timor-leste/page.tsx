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
  ChatsCircle,
  Compass,
  CurrencyCircleDollar,
  GlobeHemisphereEast,
  Lightning,
  MapTrifold,
  Plugs,
  ShieldCheck,
  Sparkle,
  StackSimple,
  UsersThree,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroStat = {
  label: string;
  value: string;
};

type LeadershipSignal = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayFramework = {
  name: string;
  narrative: string;
  actions: string[];
  icon: IconType;
  accent: string;
};

type ModulePlay = {
  name: string;
  detail: string;
  icon: IconType;
};

type LaunchTrack = {
  phase: string;
  headline: string;
  detail: string;
  icon: IconType;
};

type RegionalBridge = {
  title: string;
  narrative: string;
  icon: IconType;
};

const HERO_STATS: HeroStat[] = [
  {
    label: "Capital corridors",
    value: "Dili / Baucau / Oecusse"
  },
  {
    label: "Gateway stack",
    value: "PayPal / Braintree / Skrill / SecurionPay"
  },
  {
    label: "Priority modules",
    value: "Multi currency / Ticket system / Auto responder"
  }
];

const LEADERSHIP_SIGNALS: LeadershipSignal[] = [
  {
    title: "Timor-Leste delivery confidence",
    description:
      "Leadership teams in Dili gain a control tower that aligns cross-border ambitions with domestic banking realities and frontline distributor trust.",
    icon: Compass
  },
  {
    title: "Legacy narrative preserved",
    description:
      "Ways to accept payments from MLM Software in People's Democratic Republic of Timor-Leste - TL remains the north star, now reinforced with telemetry and AI-assisted decision paths.",
    icon: StackSimple
  },
  {
    title: "Gateway commitments honoured",
    description:
      "PayPal, Braintree, Skrill, SecurionPay, 2Checkout, Stripe, Authorize.Net, Adyen, and Amazon Pay stay embedded with richer fraud, FX, and compliance overlays.",
    icon: Plugs
  },
  {
    title: "Module synergy orchestrated",
    description:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, and multi-lingual capabilities operate as one fabric.",
    icon: Sparkle
  }
];

const GATEWAY_FRAMEWORKS: GatewayFramework[] = [
  {
    name: "PayPal diaspora corridor",
    narrative:
      "Serve Timorese diaspora leaders across Australia, Portugal, and Indonesia while maintaining instant clarity for Dili-based finance.",
    actions: [
      "Multi currency module reconciles USD, AUD, EUR, and IDR settlements with treasury-ready variance reporting.",
      "Ticket system module routes AML, CTF, and chargeback escalations through AI summaries for executive review."
    ],
    icon: CurrencyCircleDollar,
    accent: "bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white"
  },
  {
    name: "Braintree experience studio",
    narrative:
      "Prototype subscriptions, onboarding kits, and hybrid events with data points every executive can interrogate.",
    actions: [
      "Auto responder personalises confirmations in Tetum, Portuguese, and English while logging sentiment trends.",
      "Backup manager snapshots campaign flows before each membership push to protect institutional memory."
    ],
    icon: Lightning,
    accent: "bg-amber-400/20 text-amber-700 dark:bg-white/10 dark:text-white"
  },
  {
    name: "Skrill field force lane",
    narrative:
      "Equip mobile-first distributors with dependable payouts even when networks between the municipalities fluctuate.",
    actions: [
      "E-wallet module manages instant commissions with maker-checker controls for sensitive leadership ranks.",
      "Emails module keeps regional teams synced on PSP notices, cash-out windows, and compliance checkpoints."
    ],
    icon: ChatsCircle,
    accent: "bg-emerald-400/20 text-emerald-700 dark:bg-white/10 dark:text-white"
  },
  {
    name: "SecurionPay compliance mesh",
    narrative:
      "Latch onto EU-grade fraud tooling without losing the nuance of Timor-Leste's mixed banking ecosystem.",
    actions: [
      "KYC documentation vault tracks identity expiries, utility proofs, and sanction screening refresh cycles.",
      "Multi-Lingual system synchronises web, mobile, and chatbot experiences for Tetum, Portuguese, and Bahasa audiences."
    ],
    icon: ShieldCheck,
    accent: "bg-purple-400/20 text-purple-700 dark:bg-white/10 dark:text-white"
  },
  {
    name: "2Checkout digital export runway",
    narrative:
      "Launch global digital products with ready-made taxation evidence and governance narratives for investors.",
    actions: [
      "E-voucher journeys automate incentive fulfilment with audit trails trusted by finance and compliance.",
      "Multi currency module keeps FX exposure dashboards live for CFO and board checkpoints."
    ],
    icon: Wallet,
    accent: "bg-cyan-400/20 text-cyan-700 dark:bg-white/10 dark:text-white"
  }
];

const MODULE_PLAYS: ModulePlay[] = [
  {
    name: "Multi currency module",
    detail: "Balances USD, AUD, SGD, and IDR alongside USD-pegged reporting to give Timor-Leste executives treasury certainty.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    detail: "Channels PSP escalations, banking enquiries, and distributor requests with SLA-backed workflows and AI summaries.",
    icon: MapTrifold
  },
  {
    name: "Auto responder",
    detail: "Delivers multilingual confirmations, webinars, and key compliance prompts tuned for each leadership cadence.",
    icon: ChatsCircle
  },
  {
    name: "E-Voucher",
    detail: "Creates incentive codes for launch events, wellness programmes, and digital starter kits with audit-friendly controls.",
    icon: Sparkle
  },
  {
    name: "E-Wallet",
    detail: "Streams real-time commissions, reimbursements, and loyalty payouts with configurable maker-checker thresholds.",
    icon: Wallet
  },
  {
    name: "Backup manager",
    detail: "Snapshots every funnel, payout rule, and notification map before releases so Timor-Leste teams can roll forward with confidence.",
    icon: Lightning
  },
  {
    name: "Emails",
    detail: "Orchestrates broadcast, regulatory, and role-based communications with deliverability monitoring baked in.",
    icon: Plugs
  },
  {
    name: "KYC documentation",
    detail: "Captures national IDs, passports, proof-of-address, and regional compliance artefacts with automated expiry alerts.",
    icon: ShieldCheck
  },
  {
    name: "Multi-Lingual system",
    detail: "Keeps Tetum, Portuguese, English, and Bahasa experiences aligned across web, mobile, and chatbot touchpoints.",
    icon: GlobeHemisphereEast
  }
];

const LAUNCH_TRACKS: LaunchTrack[] = [
  {
    phase: "01 - Horizon scan",
    headline: "Map existing WordPress flows into the Timor-Leste operating canvas",
    detail:
      "We catalogue legacy forms, navigation entries, and payment promises to ensure every historical asset carries forward.",
    icon: Compass
  },
  {
    phase: "02 - Parallel assurance",
    headline: "Stage sandbox gateways with mirrored data for treasury validation",
    detail:
      "Finance, compliance, and operations leaders co-review reconciliations before switching production traffic.",
    icon: ShieldCheck
  },
  {
    phase: "03 - Field adoption",
    headline: "Equip city leads and remote field teams with AI-assisted guides",
    detail:
      "Distributors in Dili, Baucau, Maliana, and Oecusse receive tailored journeys, offline aids, and escalation playbooks.",
    icon: ChatsCircle
  },
  {
    phase: "04 - Command centre",
    headline: "Activate real-time dashboards for executives and board reporting",
    detail:
      "CFO, COO, and programme directors monitor conversions, chargebacks, disputes, and FX positions from one pane.",
    icon: Lightning
  }
];

const REGIONAL_BRIDGES: RegionalBridge[] = [
  {
    title: "Asia-Pacific orchestration",
    narrative:
      "Synchronises learnings with Singapore, Malaysia, and Indonesia teams to benchmark PSP metrics and alternate payment preferences.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Oceania collaboration",
    narrative:
      "Shares AI telemetry with Australia and New Zealand squads to align diaspora incentives and compliance guardrails.",
    icon: MapTrifold
  },
  {
    title: "Lusophone alliances",
    narrative:
      "Connects with Lisbon and Macau leadership circles to align policy updates, tax considerations, and growth narratives.",
    icon: UsersThree
  },
  {
    title: "Global diaspora stewardship",
    narrative:
      "Keeps investors and board members updated through executive briefings that combine financial accuracy with launch momentum.",
    icon: ChatsCircle
  }
];

export const metadata: Metadata = {
  title: "Timor-Leste MLM Payment Gateways | Cloud MLM Software",
  description:
    "Reimagine Timor-Leste's MLM payment gateways with AI-ready compliance, diaspora corridor intelligence, and a unified control tower for PayPal, Braintree, Skrill, SecurionPay, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/timor-leste"
  },
  openGraph: {
    title: "Timor-Leste MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People's Democratic Republic of Timor-Leste - TL, elevated with treasury precision, compliance guardrails, and AI guided journeys."
  }
};

type TimorLestePageProps = {
  params: { lang: SupportedLocale };
};

export default function TimorLestePaymentGatewayPage({ params }: TimorLestePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_90%_30%,rgba(59,130,246,0.35),transparent_60%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.25),transparent_55%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em]">
              Timor-Leste | Payment Intelligence
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Timor-Leste MLM payment gateways orchestrated for frontline trust
              </h1>
              <p className="max-w-2xl text-base text-white/80">
                Cloud MLM Software transforms Timor-Leste&apos;s WordPress legacy into an AI-ready command centre,
                aligning diaspora ambitions, domestic compliance, and every distributor journey.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">{stat.label}</p>
                  <p className="mt-3 text-sm font-medium text-white">{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Schedule a Timor-Leste strategy session
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10">
                <Link href={demoHref}>Explore the live platform</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Legacy anchor</p>
            <p className="text-base text-white">
              Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Timor-Leste - TL
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/80">
                We retained every navigation promise, module reference, and payment roster while upgrading the experience
                for board, finance, compliance, and field leadership.
              </p>
              <Button asChild variant="secondary" size="lg" className="mt-6 w-full gap-2 bg-white/10 text-white">
                <Link href={pricingHref}>
                  Review pricing frameworks
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Executive signals guiding Timor-Leste&apos;s payment transformation
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Our leadership dashboards keep Timor-Leste decision-makers informed about compliance, gateway performance,
            and distributor sentiment without losing the original WordPress storyline.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {LEADERSHIP_SIGNALS.map((signal) => {
            const Icon = signal.icon;
            return (
              <article
                key={signal.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/10 text-slate-900 dark:bg-white/10 dark:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-foreground dark:text-white">{signal.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{signal.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-white to-cyan-100 py-20 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(14,165,233,0.25),transparent_55%),radial-gradient(circle_at_85%_75%,rgba(59,130,246,0.25),transparent_60%)] dark:bg-none" />
        <div className="container relative space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Gateway frameworks engineered for Timor-Leste&apos;s executive agenda
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Each core gateway retains its promise while gaining the instrumentation, compliance guardrails, and AI
              assistance expected from Cloud MLM Software.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {GATEWAY_FRAMEWORKS.map((framework) => {
              const Icon = framework.icon;
              return (
                <article
                  key={framework.name}
                  className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="relative space-y-4">
                    <div
                      className={`inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-semibold ${framework.accent}`}
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-slate-900 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      {framework.name}
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{framework.narrative}</p>
                    <ul className="space-y-3">
                      {framework.actions.map((action) => (
                        <li
                          key={action}
                          className="rounded-2xl border border-slate-200/60 bg-white/80 px-4 py-3 text-sm text-muted-foreground shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white/70"
                        >
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Operational modules elevated from navigation into a unified system
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              The modules referenced throughout the WordPress navigation now operate within a cohesive workspace that
              tracks every approval, settlement, and customer interaction.
            </p>
            <div className="rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
              <p className="text-sm text-muted-foreground dark:text-white/70">
                Finance, compliance, operations, and field leaders collaborate in the same environment, seeing
                multi-currency impact, support queues, and AI-generated insights in real time.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {MODULE_PLAYS.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.name}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{module.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{module.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.35),transparent_60%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Launch tracks that keep executives and field teams aligned
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-white/80">
              Timor-Leste&apos;s rollout journey follows a deliberate sequence so every stakeholder gains visibility before we
              move to the next milestone.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {LAUNCH_TRACKS.map((track) => {
              const Icon = track.icon;
              return (
                <article
                  key={track.phase}
                  className="relative rounded-3xl border border-white/15 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                        {track.phase}
                      </span>
                      <h3 className="text-base font-semibold">{track.headline}</h3>
                      <p className="text-sm text-white/80">{track.detail}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Regional bridges that amplify Timor-Leste&apos;s influence
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Cloud MLM Software positions Timor-Leste as a thought leader across regional partnerships, diaspora hubs, and
            investor communities.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {REGIONAL_BRIDGES.map((bridge) => {
            const Icon = bridge.icon;
            return (
              <article
                key={bridge.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/10 text-slate-900 dark:bg-white/10 dark:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{bridge.title}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{bridge.narrative}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container rounded-3xl border border-border/60 bg-gradient-to-br from-sky-100 via-white to-cyan-100 p-10 shadow-sm dark:border-white/10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Elevate Timor-Leste&apos;s MLM payment experience with Cloud MLM Software
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Our AI-ready platform keeps your payment gateways, modules, and leadership reporting aligned, delivering a
              dependable experience for every stakeholder from Dili to Darwin.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href={contactHref}>
                Talk to a strategist
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link href={demoHref}>See a guided demo</Link>
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
