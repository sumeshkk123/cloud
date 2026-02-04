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
  ChartLineUp,
  ChatsCircle,
  Compass,
  CurrencyCircleDollar,
  GlobeHemisphereEast,
  Handshake,
  Lightning,
  MapTrifold,
  Megaphone,
  Plugs,
  ShieldCheck,
  Sparkle,
  StackSimple,
  UsersThree,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type ExecutiveSignal = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayBlueprint = {
  name: string;
  focus: string;
  actions: string[];
  icon: IconType;
  accent: string;
};

type OperatingPillar = {
  label: string;
  detail: string;
  icon: IconType;
};

type DeliveryMilestone = {
  stage: string;
  headline: string;
  detail: string;
  icon: IconType;
};

type RegionalRipple = {
  region: string;
  narrative: string;
  icon: IconType;
};

const EXECUTIVE_SIGNALS: ExecutiveSignal[] = [
  {
    title: "Island capital, global reach",
    description:
      "Victoria's leadership balances blue-economy growth, tourism inflows, and SaaS ambitions with the same governance cadence delivered across APAC and EMEA.",
    icon: Compass
  },
  {
    title: "Legacy headline honoured",
    description:
      "\"Ways to accept payments from MLM Software in People's Democratic Republic of Seychelles - SC\" remains our enduring anchor, now wrapped in AI-ready guidance.",
    icon: StackSimple
  },
  {
    title: "Gateway commitments locked in",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout stay at the centre of the programme with enriched telemetry and compliance context.",
    icon: Plugs
  },
  {
    title: "Module synergy orchestrated",
    description:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, and multi-lingual system interlock as a single operating mesh.",
    icon: Sparkle
  }
];

const GATEWAY_BLUEPRINTS: GatewayBlueprint[] = [
  {
    name: "PayPal trust lattice",
    focus: "Connect global members with Seychelles-based leadership while protecting brand equity and FX health.",
    actions: [
      "Multi currency module balances SCR, USD, EUR, and GBP with treasury-ready variance alerts.",
      "Ticket system module threads Financial Intelligence Unit evidence into every payout review."
    ],
    icon: CurrencyCircleDollar,
    accent: "from-sky-500/30 via-cyan-500/20 to-emerald-500/25"
  },
  {
    name: "Amazon Pay experience lane",
    focus: "Blend ecommerce-grade checkout with concierge communication for tourism and remote services programmes.",
    actions: [
      "Auto responder releases bilingual confirmations and escalation paths for Victoria, Mahe, and Praslin teams.",
      "Backup manager snapshots seasonal campaigns before each surge in traveller demand."
    ],
    icon: Lightning,
    accent: "from-amber-400/25 via-orange-500/20 to-rose-500/20"
  },
  {
    name: "PayU regional bridge",
    focus: "Unlock gateways across Africa and Asia without compromising Seychelles-specific compliance rhythms.",
    actions: [
      "Emails module carries Central Bank and FIU updates to finance, compliance, and distributor squads.",
      "KYC documentation vault tracks ID expiries, beneficial ownership attestations, and mobile wallet proofs."
    ],
    icon: Megaphone,
    accent: "from-teal-400/25 via-cyan-500/20 to-blue-500/20"
  },
  {
    name: "Stripe experimentation studio",
    focus: "Prototype AI concierge, subscription bundles, and premium events with developer-grade instrumentation.",
    actions: [
      "Ticket system module routes engineering and PSP signals with AI-generated summaries for leadership.",
      "Multi-Lingual system synchronises English and French journeys across web, mobile, and chatbot touchpoints."
    ],
    icon: Sparkle,
    accent: "from-indigo-500/25 via-violet-500/20 to-purple-500/25"
  },
  {
    name: "Authorize.Net resilience lane",
    focus: "Blend North American expectations with Seychelles regulatory oversight for board-level comfort.",
    actions: [
      "Multi currency module reconciles US acquirer settlements against local banking partners in SCR.",
      "KYC documentation keeps sanction, PEP, and merchant onboarding dossiers inspection ready."
    ],
    icon: ShieldCheck,
    accent: "from-emerald-500/25 via-slate-500/15 to-slate-900/30"
  },
  {
    name: "Braintree omnichannel vault",
    focus: "Tokenise field sales, digital kits, and wellness programmes with biometrics-friendly guardrails.",
    actions: [
      "E-wallet module streams instant commissions with maker-checker thresholds for sensitive ranks.",
      "Backup manager preserves offline transactions when inter-island connectivity fluctuates."
    ],
    icon: Wallet,
    accent: "from-rose-400/25 via-fuchsia-500/20 to-purple-400/20"
  },
  {
    name: "Adyen oversight tower",
    focus: "Monitor conversion, fraud, and treasury signals across EU and APAC corridors from one command centre.",
    actions: [
      "Multi currency module surfaces FX exposure across SCR, EUR, USD, and ZAR corridors for CFO sign-off.",
      "Emails module distributes PSD2, SCA, and scheme updates with audit-trail reinforcement."
    ],
    icon: ChartLineUp,
    accent: "from-lime-400/25 via-emerald-500/20 to-teal-500/20"
  },
  {
    name: "2Checkout digital runway",
    focus: "Deliver digital product catalogues, AI enablement, and partner onboarding across continents.",
    actions: [
      "E-voucher journeys automate incentive fulfilment while keeping tax documentation complete.",
      "Multi-Lingual system ensures Seychelles and diaspora communities receive aligned product narratives."
    ],
    icon: UsersThree,
    accent: "from-blue-400/25 via-slate-500/15 to-gray-900/25"
  }
];

const OPERATING_PILLARS: OperatingPillar[] = [
  {
    label: "Multi currency module",
    detail: "Balances SCR, USD, EUR, and GBP receivables with automated reconciliation packs for CFO and board review.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    detail: "Channels FIU filings, PSP escalations, and distributor requests through SLA-backed, AI-summarised workflows.",
    icon: MapTrifold
  },
  {
    label: "Auto responder",
    detail: "Delivers instant confirmations, webinar invites, and compliance prompts in English and French.",
    icon: Megaphone
  },
  {
    label: "E-Voucher",
    detail: "Issues campaign rewards and travel incentives with granular approval trails and expiry governance.",
    icon: Sparkle
  },
  {
    label: "E-Wallet",
    detail: "Streams real-time commissions, reimbursements, and loyalty payouts with risk-aware thresholds.",
    icon: Wallet
  },
  {
    label: "Backup Manager",
    detail: "Captures storefront, payout, and policy configurations before seasonal surges or infrastructure maintenance.",
    icon: ShieldCheck
  },
  {
    label: "Emails",
    detail: "Maintains marketing, transactional, and compliance communications with deliverability analytics baked in.",
    icon: ChatsCircle
  },
  {
    label: "KYC Documentation",
    detail: "Centralises IDs, business registrations, bank letters, and sanction checks with renewal reminders.",
    icon: Handshake
  },
  {
    label: "Multi-Lingual system",
    detail: "Keeps English, French, and Creole experiences synchronised across portals, bots, and knowledge assets.",
    icon: GlobeHemisphereEast
  }
];

const DELIVERY_MILESTONES: DeliveryMilestone[] = [
  {
    stage: "Phase 01",
    headline: "Transcribe the WordPress legacy",
    detail:
      "We start by migrating every headline, gateway name, and module reference so stakeholders see continuity from the first review.",
    icon: StackSimple
  },
  {
    stage: "Phase 02",
    headline: "Instrument compliance & treasury",
    detail:
      "Financial Intelligence Unit, Central Bank of Seychelles, and correspondent banking guardrails are codified inside workflows and dashboards.",
    icon: ShieldCheck
  },
  {
    stage: "Phase 03",
    headline: "Activate the gateway roster",
    detail:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout progress through sandbox, test, and go-live ceremonies.",
    icon: Plugs
  },
  {
    stage: "Phase 04",
    headline: "Optimise AI decision loops",
    detail:
      "Leadership receives weekly narratives, anomaly alerts, and scenario models so Seychelles stays the thought leader for MLM payouts in the Indian Ocean.",
    icon: ChartLineUp
  }
];

const REGIONAL_RIPPLES: RegionalRipple[] = [
  {
    region: "Africa",
    narrative:
      "Aligns with Mauritius, Kenya, and South Africa programmes to share AI-driven compliance plays and treasury metrics.",
    icon: Compass
  },
  {
    region: "Asia",
    narrative:
      "Synchronises with Singapore and Malaysia orchestration layers for PSP innovation and alternative payment benchmarking.",
    icon: UsersThree
  },
  {
    region: "Europe",
    narrative:
      "Keeps PSD2, GDPR, and SEPA learnings flowing between Seychelles leadership and EU partners for cross-border stability.",
    icon: GlobeHemisphereEast
  },
  {
    region: "North America",
    narrative:
      "Matches diaspora expectations in Toronto, New York, and Miami with Authorize.Net and PayPal best practices.",
    icon: Handshake
  },
  {
    region: "Oceania",
    narrative:
      "Shares AI telemetry with Australia and New Zealand teams to balance tourism campaigns and remote workforces.",
    icon: Lightning
  },
  {
    region: "South America",
    narrative:
      "Replicates incentive cadences and e-voucher programmes proven in Brazil and Colombia to accelerate new market launches.",
    icon: MapTrifold
  }
];

export const metadata: Metadata = {
  title: "Seychelles MLM Payment Gateways | Cloud MLM Software",
  description:
    "Engineer Seychelles-ready MLM payment gateways that keep PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout in one compliant, AI-enabled command centre.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/seychelles"
  },
  openGraph: {
    title: "Seychelles MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People's Democratic Republic of Seychelles - now elevated with treasury dashboards, KYC automation, and AI telemetry."
  }
};

type SeychellesPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function SeychellesPaymentGatewayPage({ params }: SeychellesPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-white to-emerald-50 py-20 dark:from-sky-500/20 dark:via-slate-950 dark:to-emerald-500/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(16,185,129,0.25),transparent_55%),radial-gradient(circle_at_45%_85%,rgba(14,116,144,0.2),transparent_55%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.25fr,0.95fr] lg:items-start">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-700 dark:border-white/20 dark:bg-white/10 dark:text-white/70">
              Seychelles - Payment Orchestration
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Seychelles MLM payment gateways engineered for island-scale velocity
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software translates Seychelles&apos; WordPress legacy into an AI-optimised, compliance-forward
                operating system that meets board expectations and accelerates distributor confidence.
              </p>
            </div>
            <div className="rounded-3xl border border-sky-500/30 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-700 dark:text-white/70">
                Legacy anchor
              </p>
              <p className="mt-3 text-base text-foreground dark:text-white">
                Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Seychelles - SC
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Schedule a Seychelles strategy session
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-sky-500/40 text-sky-800 hover:bg-sky-100 dark:border-white/30 dark:text-white"
              >
                <Link href={demoHref}>
                  Preview the AI-enabled demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {EXECUTIVE_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article
                  key={signal.title}
                  className="group relative overflow-hidden rounded-3xl border border-sky-500/25 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-emerald-500/10 to-cyan-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground dark:text-white">{signal.title}</h2>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{signal.description}</p>
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
            Gateway blueprints for Seychelles growth, compliance, and AI visibility
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The eight connectors named in the WordPress export now arrive with concrete actions for treasury, compliance,
            and distributor experience leaders.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_BLUEPRINTS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border/60 bg-background/85 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gateway.accent} opacity-0 transition duration-500 group-hover:opacity-100`}
                  aria-hidden
                />
                <div className="relative flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/5 text-slate-900 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground dark:text-white">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.focus}</p>
                  </div>
                </div>
                <ul className="relative space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {gateway.actions.map((action) => (
                    <li key={action} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-sky-500 dark:bg-white" aria-hidden />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/60 py-20 dark:bg-slate-950">
        <div className="container space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Operating pillars lifted from navigation into a single Seychelles platform
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Every module referenced in the WordPress navigation now carries AI telemetry, compliance guardrails, and
              experiential polish tailored for the archipelago.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {OPERATING_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.label}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{pillar.label}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{pillar.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="space-y-6 rounded-3xl border border-sky-500/30 bg-sky-50/80 p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-600 dark:text-white/70">playbook</p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white">
              Delivery milestones that preserve heritage and accelerate innovation
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              The programme respects the WordPress storyline while equipping Seychelles with executive-grade analytics,
              treasury precision, and AI-driven decision support.
            </p>
            <Button asChild variant="secondary" size="lg" className="gap-2">
              <Link href={pricingHref}>
                Review Seychelles pricing frameworks
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 hidden w-px bg-gradient-to-b from-sky-500 via-emerald-500 to-transparent lg:block" />
            <div className="space-y-6">
              {DELIVERY_MILESTONES.map((milestone) => {
                const Icon = milestone.icon;
                return (
                  <article
                    key={milestone.stage}
                    className="relative rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div className="space-y-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                          {milestone.stage}
                        </span>
                        <h3 className="text-base font-semibold text-foreground dark:text-white">{milestone.headline}</h3>
                        <p className="text-sm text-muted-foreground dark:text-white/70">{milestone.detail}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-sky-900 to-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.35),transparent_60%),radial-gradient(circle_at_80%_15%,rgba(16,185,129,0.2),transparent_55%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/70">
              Seychelles shares knowledge with peer programmes across continents to uphold resilience, AI-readiness, and
              customer trust.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REGIONAL_RIPPLES.map((ripple) => {
              const Icon = ripple.icon;
              return (
                <article key={ripple.region} className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/5 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{ripple.region}</h3>
                  </div>
                  <p className="text-sm text-white/75">{ripple.narrative}</p>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-100">
              <Link href={contactHref}>
                Talk to a Seychelles strategist
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={demoHref}>
                Launch the interactive demo
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
