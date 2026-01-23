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
  ChartPie,
  Compass,
  CurrencyCircleDollar,
  GlobeHemisphereWest,
  Handbag,
  Lightning,
  ListChecks,
  MapTrifold,
  Plugs,
  ShieldCheck,
  Sparkle,
  StackSimple,
  UsersFour,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayPlay = {
  name: string;
  focus: string;
  actions: string[];
  icon: IconType;
};

type ModulePillar = {
  label: string;
  detail: string;
  icon: IconType;
};

type Milestone = {
  phase: string;
  summary: string;
  detail: string;
  icon: IconType;
};

type RegionSignal = {
  region: string;
  narrative: string;
  icon: IconType;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    title: "Legacy headline preserved",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Sierra Leone - SL anchors the modern experience.",
    icon: StackSimple
  },
  {
    title: "Gateway roster confirmed",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain the core connectors for every launch.",
    icon: Plugs
  },
  {
    title: "Module ecosystem unified",
    description:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, and multi-lingual system collaborate as one fabric.",
    icon: Sparkle
  }
];

const GATEWAY_PLAYS: GatewayPlay[] = [
  {
    name: "PayPal diaspora bridge",
    focus: "Link Freetown decision makers with global distributors in London, Washington, and Accra.",
    actions: [
      "Multi currency module reconciles SCR, USD, and GBP flows before treasury sign-off.",
      "Ticket system module packages Financial Intelligence Unit evidence alongside settlement approvals."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay commerce lane",
    focus: "Deliver premium shopping flows for tourism, fintech, and philanthropic initiatives.",
    actions: [
      "Auto responder streams bilingual confirmations that reflect coastal and inland logistics windows.",
      "Backup manager snapshots seasonal catalogues prior to holiday and festival activations."
    ],
    icon: Handbag
  },
  {
    name: "PayU regional expansion",
    focus: "Blend West African mobile money with global card acquiring without losing compliance agility.",
    actions: [
      "Emails module briefs finance chiefs on Bank of Sierra Leone policies and AML updates.",
      "KYC documentation tracks ID expiries, cooperative registrations, and correspondent banking attestations."
    ],
    icon: UsersFour
  },
  {
    name: "Stripe experimentation studio",
    focus: "Prototype AI concierge, subscription bundles, and hybrid events across Freetown and diaspora cities.",
    actions: [
      "Ticket system module routes developer requests with AI generated replication steps.",
      "Multi-lingual system keeps English and Krio experiences aligned across web and mobile surfaces."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net assurance track",
    focus: "Meet North American governance expectations while respecting local oversight.",
    actions: [
      "Multi currency module compares US acquirer performance against local clearing banks.",
      "KYC documentation houses sanction, PEP, and merchant onboarding dossiers ready for audits."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel vault",
    focus: "Tokenise community outreach, education programmes, and pop-up retail initiatives.",
    actions: [
      "E-wallet module powers instant commissions with maker-checker controls by distributor tier.",
      "Backup manager captures offline transactions for remote provinces facing connectivity gaps."
    ],
    icon: Wallet
  },
  {
    name: "Adyen performance tower",
    focus: "Monitor EU, US, and West African conversion signals from one analytics cockpit.",
    actions: [
      "Multi currency module visualises FX exposure across USD, EUR, GBP, and SLL corridors.",
      "Emails module syndicates scheme, SCA, and compliance updates with audit trails."
    ],
    icon: ChartPie
  },
  {
    name: "2Checkout digital runway",
    focus: "Distribute digital kits, AI training, and partner onboarding to inland districts and diaspora.",
    actions: [
      "E-voucher journeys automate incentive fulfilment with tax documentation prepared for finance teams.",
      "Multi-lingual system harmonises English and French narratives for Mano River partners."
    ],
    icon: MapTrifold
  }
];

const MODULE_PILLARS: ModulePillar[] = [
  {
    label: "Multi currency module",
    detail: "Balances SLL, USD, GBP, and EUR receivables with AI assisted reconciliation packs.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    detail: "Routes FIU, PSP, and distributor requests with SLA dashboards and audit-ready logs.",
    icon: ListChecks
  },
  {
    label: "Auto responder",
    detail: "Delivers English and Krio messaging for onboarding, compliance, and community outreach.",
    icon: Sparkle
  },
  {
    label: "E-voucher",
    detail: "Issues promotional rewards and humanitarian stipends with maker-checker approvals.",
    icon: Wallet
  },
  {
    label: "E-wallet",
    detail: "Streams commissions and reimbursements with real-time liquidity insights.",
    icon: Bank
  },
  {
    label: "Backup manager",
    detail: "Protects storefronts, workflows, and compliance artefacts ahead of seasonal surges.",
    icon: ShieldCheck
  },
  {
    label: "Emails module",
    detail: "Centralises campaign, transactional, and compliance communications with deliverability analytics.",
    icon: UsersFour
  },
  {
    label: "KYC documentation",
    detail: "Tracks identity, licensing, and banking evidence with automated renewal reminders.",
    icon: Compass
  },
  {
    label: "Multi-lingual system",
    detail: "Keeps English, Krio, and French knowledge assets synchronised across channels.",
    icon: GlobeHemisphereWest
  }
];

const MILESTONES: Milestone[] = [
  {
    phase: "Phase 01",
    summary: "Transcribe the WordPress foundation",
    detail:
      "Capture the original headline, gateway list, and module catalogue so Sierra Leone stakeholders see continuity from day one.",
    icon: StackSimple
  },
  {
    phase: "Phase 02",
    summary: "Instrument compliance and treasury",
    detail:
      "Embed Bank of Sierra Leone guidance, FIU reporting, and correspondent banking approvals into workflows and dashboards.",
    icon: ShieldCheck
  },
  {
    phase: "Phase 03",
    summary: "Activate the gateway roster",
    detail:
      "Advance PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout through sandbox, pilot, and production stages.",
    icon: Plugs
  },
  {
    phase: "Phase 04",
    summary: "Optimise executive visibility",
    detail:
      "Deliver AI powered narratives, liquidity alerts, and compliance summaries that position Sierra Leone as a regional thought leader.",
    icon: ChartPie
  }
];

const REGION_SIGNALS: RegionSignal[] = [
  {
    region: "West Africa",
    narrative:
      "Shares cash management and compliance practices with Ghana, Liberia, and Nigeria programmes to accelerate onboarding.",
    icon: Compass
  },
  {
    region: "Europe",
    narrative:
      "Aligns PSD2-ready controls with partners in London, Brussels, and Paris to support diaspora growth.",
    icon: GlobeHemisphereWest
  },
  {
    region: "North America",
    narrative:
      "Extends Authorize.Net and PayPal learnings from Toronto, New York, and Atlanta diaspora communities.",
    icon: UsersFour
  },
  {
    region: "Asia Pacific",
    narrative:
      "Tracks FX exposure and emerging wallet innovation with Singapore, Sydney, and Manila leadership hubs.",
    icon: MapTrifold
  },
  {
    region: "Middle East",
    narrative:
      "Collaborates with Dubai and Doha treasury teams on liquidity buffers and correspondent banking diversification.",
    icon: Bank
  },
  {
    region: "South America",
    narrative:
      "Replicates AI enabled field enablement routines from Sao Paulo and Bogota into Sierra Leone growth plans.",
    icon: ChartPie
  }
];

export const metadata: Metadata = {
  title: "Sierra Leone MLM Payment Gateways | Cloud MLM Software",
  description:
    "Deploy Sierra Leone ready MLM payment gateways with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout orchestrated inside an AI-first operating model.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/sierra-leone"
  },
  openGraph: {
    title: "Sierra Leone MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Sierra Leone - modernised with treasury dashboards, compliance automation, and AI telemetry."
  }
};

type SierraLeonePageProps = {
  params: { lang: SupportedLocale };
};

export default function SierraLeonePaymentGatewayPage({ params }: SierraLeonePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-sky-100 py-20 dark:from-emerald-500/20 dark:via-slate-950 dark:to-sky-500/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_50%_80%,rgba(15,118,110,0.25),transparent_60%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:border-white/20 dark:bg-white/10 dark:text-white">
              Sierra Leone - Payment Orchestration
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Sierra Leone MLM payment gateways engineered for resilient field growth
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software transforms the legacy WordPress outline into a modern, AI enabled operating model
                that matches the expectations of Sierra Leone executives, regulators, and distributors.
              </p>
            </div>
            <div className="rounded-3xl border border-emerald-500/30 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/10">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-700 dark:text-white/70">
                Legacy anchor
              </p>
              <p className="mt-3 text-base text-foreground dark:text-white">
                Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Sierra Leone - SL
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Plan a Sierra Leone strategy session
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-emerald-500/40 text-emerald-800 hover:bg-emerald-100 dark:border-white/30 dark:text-white"
              >
                <Link href={demoHref}>
                  Preview the AI enabled demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {HERO_HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article
                  key={highlight.title}
                  className="group relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-sky-500/15 to-cyan-500/15 opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground dark:text-white">{highlight.title}</h2>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{highlight.description}</p>
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
            Gateway plays tuned for Sierra Leone growth, compliance, and AI visibility
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The eight connectors listed in the WordPress export now ship with concrete actions for treasury, compliance,
            and distributor enablement teams.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_PLAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border/60 bg-background/85 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-sky-500/10 to-cyan-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground dark:text-white">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.focus}</p>
                  </div>
                </div>
                <ul className="relative space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {gateway.actions.map((action) => (
                    <li key={action} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 dark:bg-white" aria-hidden />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/70 py-20 dark:bg-slate-950">
        <div className="container space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Module pillars from the legacy navigation, orchestrated for Sierra Leone
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Every module referenced in the WordPress navigation now participates in a telemetry rich operating model
              that favours resilience and transparency.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.label}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
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
        <div className="grid gap-8 lg:grid-cols-[0.85fr,1.15fr] lg:items-start">
          <div className="space-y-6 rounded-3xl border border-emerald-500/30 bg-white/85 p-8 shadow-sm dark:border-white/15 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600 dark:text-white/70">
              Programme timeline
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white">
              Delivery milestones that balance heritage with executive velocity
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Four movements preserve the WordPress foundations while equipping Sierra Leone leadership with
              compliance, treasury, and AI enabled insight.
            </p>
            <Button asChild variant="secondary" size="lg" className="gap-2">
              <Link href={pricingHref}>
                Review Sierra Leone pricing frameworks
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 hidden w-px bg-gradient-to-b from-emerald-500 via-sky-500 to-transparent lg:block" />
            <div className="space-y-6">
              {MILESTONES.map((milestone) => {
                const Icon = milestone.icon;
                return (
                  <article
                    key={milestone.phase}
                    className="relative rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div className="space-y-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                          {milestone.phase}
                        </span>
                        <h3 className="text-base font-semibold text-foreground dark:text-white">{milestone.summary}</h3>
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

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-900 to-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(16,185,129,0.35),transparent_60%),radial-gradient(circle_at_80%_15%,rgba(59,130,246,0.2),transparent_55%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/75">
              Sierra Leone collaborates with neighbouring markets and global hubs to keep payment operations resilient,
              compliant, and ready for AI driven scaling.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REGION_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article key={signal.region} className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/5 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{signal.region}</h3>
                  </div>
                  <p className="text-sm text-white/75">{signal.narrative}</p>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-emerald-900 hover:bg-slate-200">
              <Link href={contactHref}>
                Talk to a Sierra Leone strategist
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
