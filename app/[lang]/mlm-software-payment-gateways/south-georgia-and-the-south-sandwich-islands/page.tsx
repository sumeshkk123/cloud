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
  Buildings,
  ChartLineUp,
  ChatsCircle,
  Compass,
  CurrencyCircleDollar,
  GlobeHemisphereEast,
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

type Highlight = {
  heading: string;
  description: string;
  icon: IconType;
};

type Gateway = {
  name: string;
  focus: string;
  moves: string[];
  icon: IconType;
};

type Module = {
  title: string;
  detail: string;
  icon: IconType;
};

type TimelineStep = {
  phase: string;
  title: string;
  detail: string;
  icon: IconType;
};

type RegionPartner = {
  region: string;
  narrative: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    heading: "Legacy anchor retained",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of South Georgia and the South Sandwich Islands - GS remains the guiding statement.",
    icon: StackSimple
  },
  {
    heading: "Gateway roster confirmed",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout stay at the centre of the orchestration story.",
    icon: Plugs
  },
  {
    heading: "Module ecosystem united",
    description:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, and multi-lingual system operate as a single telemetry layer.",
    icon: Sparkle
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal expedition runway",
    focus: "Serve research stations, naval crews, and remote distributors aligned to British governance.",
    moves: [
      "Multi currency module reconciles GBP, USD, EUR, and ZAR flows with treasury ready variance notes.",
      "Ticket system module stores compliance evidence for the Government of South Georgia and the South Sandwich Islands."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay provisioning lane",
    focus: "Support supply chains, tourism expeditions, and conservation programmes with reliable checkouts.",
    moves: [
      "Auto responder delivers multilingual confirmations tied to vessel schedules and seasonal windows.",
      "Backup manager captures catalogues and logistics workflows before each expedition cycle."
    ],
    icon: Megaphone
  },
  {
    name: "PayU remote mesh",
    focus: "Blend UK acquiring, South Atlantic operations, and global PSP connections without losing compliance.",
    moves: [
      "Emails module circulates maritime regulations, tax updates, and FX guidance to leadership.",
      "KYC documentation vault tracks vessel registrations, crew credentials, and sanction screenings."
    ],
    icon: ChatsCircle
  },
  {
    name: "Stripe experimentation studio",
    focus: "Prototype AI concierge, field logistics dashboards, and donation experiences for conservation partners.",
    moves: [
      "Ticket system module routes developer escalations with AI generated replication notes.",
      "Multi-lingual system keeps English and Spanish surfaces aligned for multinational crews."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net assurance track",
    focus: "Blend US acquiring requirements with British overseas governance and maritime compliance.",
    moves: [
      "Multi currency module compares US settlement performance against UK banking partners.",
      "KYC documentation retains sanction, PEP, and merchant onboarding records inspection ready."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel vault",
    focus: "Tokenise donations, expedition bookings, and research sponsorships.",
    moves: [
      "E-wallet module streams reimbursements and grants with maker-checker controls by role.",
      "Backup manager preserves offline transactions during limited connectivity windows."
    ],
    icon: Wallet
  },
  {
    name: "Adyen performance tower",
    focus: "Monitor conversion and risk signals across UK, EU, and North American corridors.",
    moves: [
      "Multi currency module visualises FX exposure across GBP, USD, EUR, and AUD.",
      "Emails module distributes scheme advisories, SCA updates, and compliance notices."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    focus: "Deliver digital kits, AI enablement, and conservation storytelling to global supporters.",
    moves: [
      "E-voucher journeys automate incentive fulfilment with tax documentation for UK governance.",
      "Multi-lingual system harmonises English and Spanish resources for field teams."
    ],
    icon: MapTrifold
  }
];

const MODULES: Module[] = [
  {
    title: "Multi currency module",
    detail: "Balances GBP, USD, EUR, AUD, and ZAR with AI assisted reconciliation commentary.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    detail: "Routes governance, PSP, and expedition support requests with SLA dashboards and audit trails.",
    icon: ShieldCheck
  },
  {
    title: "Auto responder",
    detail: "Delivers English and Spanish communications across limited connectivity channels instantly.",
    icon: Sparkle
  },
  {
    title: "E-voucher",
    detail: "Issues expedition passes, donor perks, and logistics credits with maker-checker approvals.",
    icon: Wallet
  },
  {
    title: "E-wallet",
    detail: "Streams stipends, reimbursements, and grants with liquidity guardrails and CFO ready insight.",
    icon: Buildings
  },
  {
    title: "Backup manager",
    detail: "Protects storefronts, automation flows, and compliance archives ahead of seasonal expeditions.",
    icon: Anchor
  },
  {
    title: "Emails module",
    detail: "Centralises transactional, marketing, and compliance messaging with deliverability telemetry.",
    icon: ChatsCircle
  },
  {
    title: "KYC documentation",
    detail: "Maintains identity, vessel, and permit evidence with automated renewal reminders.",
    icon: Compass
  },
  {
    title: "Multi-lingual system",
    detail: "Keeps English and Spanish experiences synchronised across portals, bots, and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const TIMELINE: TimelineStep[] = [
  {
    phase: "Phase 01",
    title: "Transcribe the WordPress legacy",
    detail:
      "Carry forward the headline, gateway roster, and module references so stakeholders recognise continuity.",
    icon: StackSimple
  },
  {
    phase: "Phase 02",
    title: "Embed governance and logistics guardrails",
    detail:
      "Integrate British overseas legislation, maritime compliance, and expedition logistics into workflows and dashboards.",
    icon: ShieldCheck
  },
  {
    phase: "Phase 03",
    title: "Activate the connector roster",
    detail:
      "Advance PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout through sandbox, pilot, and production stages.",
    icon: Plugs
  },
  {
    phase: "Phase 04",
    title: "Unlock AI telemetry for remote leadership",
    detail:
      "Deliver executive briefings, supply chain forecasts, and risk alerts tuned for remote decision makers.",
    icon: ChartLineUp
  }
];

const REGION_PARTNERS: RegionPartner[] = [
  {
    region: "United Kingdom",
    narrative:
      "Coordinates with London headquarters on governance, treasury oversight, and compliance reporting.",
    icon: Buildings
  },
  {
    region: "South Atlantic",
    narrative:
      "Shares logistics and resilience practices with Falkland Islands and Saint Helena teams.",
    icon: Anchor
  },
  {
    region: "Europe",
    narrative:
      "Aligns PSD2 controls and donor engagement strategies with Amsterdam and Berlin hubs.",
    icon: ChartLineUp
  },
  {
    region: "North America",
    narrative:
      "Collaborates with Washington and Toronto partners on conservation funding and compliance telemetry.",
    icon: UsersThree
  },
  {
    region: "South America",
    narrative:
      "Works with Buenos Aires and Santiago teams on expedition support and multilingual storytelling.",
    icon: MapTrifold
  },
  {
    region: "Oceania",
    narrative:
      "Partners with Hobart and Wellington operations on research logistics and AI automation frameworks.",
    icon: Compass
  }
];

export const metadata: Metadata = {
  title: "South Georgia & South Sandwich Islands MLM Payment Gateways | Cloud MLM Software",
  description:
    "Deploy South Georgia and South Sandwich Islands ready MLM payment gateways with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout orchestrated through resilient, AI enabled workflows.",
  alternates: {
    canonical:
      "/mlm-software-payment-gateways/south-georgia-and-the-south-sandwich-islands"
  },
  openGraph: {
    title: "South Georgia & South Sandwich Islands MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of South Georgia and the South Sandwich Islands - now modernised with logistics governance and AI telemetry."
  }
};

type SouthGeorgiaPageProps = {
  params: { lang: SupportedLocale };
};

export default function SouthGeorgiaPaymentGatewayPage({ params }: SouthGeorgiaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-100 py-20 dark:from-blue-500/20 dark:via-slate-950 dark:to-emerald-500/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.3),transparent_60%),radial-gradient(circle_at_82%_15%,rgba(16,185,129,0.25),transparent_55%),radial-gradient(circle_at_45%_80%,rgba(148,163,184,0.2),transparent_60%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-blue-700 dark:border-white/20 dark:bg-white/10 dark:text-white">
              South Georgia & South Sandwich Islands - Payment Orchestration
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Payment gateways engineered for remote stewardship and global support
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software transforms the WordPress export into an AI optimised experience that respects British
                governance, expedition logistics, and global donor engagement.
              </p>
            </div>
            <div className="rounded-3xl border border-blue-500/30 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/10">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-700 dark:text-white/70">
                Legacy anchor
              </p>
              <p className="mt-3 text-base text-foreground dark:text-white">
                Ways to accept payments from MLM Software in People&apos;s Democratic Republic of South Georgia and the South
                Sandwich Islands - GS
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Schedule a South Atlantic strategy session
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-blue-500/40 text-blue-800 hover:bg-blue-100 dark:border-white/30 dark:text-white"
              >
                <Link href={demoHref}>
                  Preview the AI powered demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article
                  key={highlight.heading}
                  className="group relative overflow-hidden rounded-3xl border border-blue-500/25 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-emerald-500/15 to-slate-500/15 opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/15 text-blue-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground dark:text-white">{highlight.heading}</h2>
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
            Gateway plays tailored for remote governance, logistics, and donor trust
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The eight connectors from the WordPress export now include concrete moves for treasury, compliance, and
            programme leads.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border/60 bg-background/85 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-emerald-500/10 to-slate-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/15 text-blue-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground dark:text-white">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.focus}</p>
                  </div>
                </div>
                <ul className="relative space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {gateway.moves.map((move) => (
                    <li key={move} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 dark:bg-white" aria-hidden />
                      <span>{move}</span>
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
              Modules from the WordPress navigation now power a single remote platform
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Each module inherits telemetry, multilingual reach, and resilience tuned for expedition leaders and global
              donors.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-blue-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{module.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{module.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="space-y-6 rounded-3xl border border-blue-500/30 bg-white/85 p-8 shadow-sm dark:border-white/15 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-white/70">
              Delivery cadence
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white">
              Four phases to modernise the South Atlantic page
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Maintain heritage, embed governance, activate connectors, and unlock AI telemetry for remote decision
              makers.
            </p>
            <Button asChild variant="secondary" size="lg" className="gap-2">
              <Link href={pricingHref}>
                Review programme pricing
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 hidden w-px bg-gradient-to-b from-blue-500 via-emerald-500 to-transparent lg:block" />
            <div className="space-y-6">
              {TIMELINE.map((step) => {
                const Icon = step.icon;
                return (
                  <article
                    key={step.phase}
                    className="relative rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/15 text-blue-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div className="space-y-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                          {step.phase}
                        </span>
                        <h3 className="text-base font-semibold text-foreground dark:text-white">{step.title}</h3>
                        <p className="text-sm text-muted-foreground dark:text-white/70">{step.detail}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(59,130,246,0.35),transparent_60%),radial-gradient(circle_at_80%_15%,rgba(16,185,129,0.2),transparent_55%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/75">
              South Georgia and the South Sandwich Islands collaborate with global partners to keep payment operations
              resilient, compliant, and data informed despite extreme remoteness.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REGION_PARTNERS.map((partner) => {
              const Icon = partner.icon;
              return (
                <article key={partner.region} className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/5 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{partner.region}</h3>
                  </div>
                  <p className="text-sm text-white/75">{partner.narrative}</p>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-blue-900 hover:bg-blue-100">
              <Link href={contactHref}>
                Talk to a South Atlantic strategist
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
