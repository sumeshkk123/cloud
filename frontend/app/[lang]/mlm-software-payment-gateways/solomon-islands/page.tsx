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
  GlobeHemisphereWest,
  Lightning,
  MapTrifold,
  Megaphone,
  Plugs,
  ShieldCheck,
  Sparkle,
  StackSimple,
  UsersFour,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  label: string;
  content: string;
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
  detail: string;
  icon: IconType;
};

type Stage = {
  phase: string;
  heading: string;
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
    label: "Legacy preserved",
    content:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Solomon Islands - SB anchors the reimagined experience.",
    icon: StackSimple
  },
  {
    label: "Gateway roster locked",
    content:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain the eight official connectors.",
    icon: Plugs
  },
  {
    label: "Module ecosystem",
    content:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, and multi-lingual system operate as one telemetry mesh.",
    icon: Sparkle
  }
];

const GATEWAY_PLAYS: GatewayPlay[] = [
  {
    name: "PayPal diaspora bridge",
    summary: "Connect Honiara leadership with Pacific, Australian, and North American distributor cohorts.",
    bullets: [
      "Multi currency module reconciles SBD, AUD, NZD, and USD flows with CFO ready commentary.",
      "Ticket system module stores Central Bank of Solomon Islands approvals and compliance evidence."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay commerce lane",
    summary: "Support tourism, retail, and digital marketplaces with premium checkout experiences.",
    bullets: [
      "Auto responder delivers bilingual confirmations aligned to inter-island logistics windows.",
      "Backup manager snapshots seasonal storefronts prior to holiday and festival activations."
    ],
    icon: Megaphone
  },
  {
    name: "PayU regional federation",
    summary: "Blend Pacific wallets, Australian acquiring, and global PSPs without losing governance agility.",
    bullets: [
      "Emails module circulates banking, AML, and FX updates to treasury and compliance leads.",
      "KYC documentation tracks cooperative registrations, maritime clearances, and sanction screenings."
    ],
    icon: ChatsCircle
  },
  {
    name: "Stripe experimentation lab",
    summary: "Prototype AI concierge, mobile experiences, and gig-economy incentives across the islands.",
    bullets: [
      "Ticket system module routes developer escalations with AI generated reproduction notes.",
      "Multi-lingual system keeps English and Pijin knowledge assets aligned across channels."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net assurance track",
    summary: "Blend US acquiring expectations with Solomon Islands regulatory oversight.",
    bullets: [
      "Multi currency module compares US settlement performance against regional banking partners.",
      "KYC documentation vault holds sanction, PEP, and merchant onboarding artefacts."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel vault",
    summary: "Tokenise community outreach, cooperatives, and field events with consistent governance.",
    bullets: [
      "E-wallet module enables instant commissions with maker-checker thresholds per distributor tier.",
      "Backup manager captures offline transactions for remote provinces with limited connectivity."
    ],
    icon: Wallet
  },
  {
    name: "Adyen performance tower",
    summary: "Monitor conversion, chargeback, and FX signals across Pacific, EU, and US corridors.",
    bullets: [
      "Multi currency module visualises FX exposure across SBD, AUD, NZD, and USD routes.",
      "Emails module distributes scheme updates and compliance advisories with traceability."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    summary: "Deliver digital kits, AI enablement, and partner onboarding across islands and diaspora partners.",
    bullets: [
      "E-voucher journeys automate incentive fulfilment with tax documentation for finance teams.",
      "Multi-lingual system harmonises English and Pijin learning assets for field enablement."
    ],
    icon: MapTrifold
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    title: "Multi currency module",
    detail: "Balances SBD, AUD, NZD, USD, and regional currencies with AI assisted reconciliation notes.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    detail: "Routes regulatory, PSP, and community support requests with SLA dashboards and audit trails.",
    icon: ShieldCheck
  },
  {
    title: "Auto responder",
    detail: "Delivers English and Pijin communications instantly across email, SMS, and chatbot channels.",
    icon: Sparkle
  },
  {
    title: "E-voucher",
    detail: "Issues cooperative rewards, field incentives, and event passes with maker-checker approvals.",
    icon: Wallet
  },
  {
    title: "E-wallet",
    detail: "Streams commissions and reimbursements with liquidity guardrails tuned for island operations.",
    icon: Buildings
  },
  {
    title: "Backup manager",
    detail: "Preserves storefronts, automations, and compliance archives before seasonal surges or cyclones.",
    icon: Anchor
  },
  {
    title: "Emails module",
    detail: "Centralises campaign, transactional, and compliance messaging with deliverability telemetry.",
    icon: UsersFour
  },
  {
    title: "KYC documentation",
    detail: "Maintains identity, cooperative, and maritime licensing evidence with renewal reminders.",
    icon: Compass
  },
  {
    title: "Multi-lingual system",
    detail: "Keeps English and Pijin experiences synchronised across portals, bots, and AI assistants.",
    icon: GlobeHemisphereWest
  }
];

const STAGES: Stage[] = [
  {
    phase: "Phase 01",
    heading: "Transcribe the WordPress legacy",
    detail:
      "Carry forward the headline, gateway listing, and module references so stakeholders recognise the historic storyline.",
    icon: StackSimple
  },
  {
    phase: "Phase 02",
    heading: "Embed regulatory guardrails",
    detail:
      "Integrate Central Bank of Solomon Islands guidance, AML policies, and risk controls into workflows and approvals.",
    icon: ShieldCheck
  },
  {
    phase: "Phase 03",
    heading: "Activate the eight connectors",
    detail:
      "Advance PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout through sandbox, pilot, and production checkpoints.",
    icon: Plugs
  },
  {
    phase: "Phase 04",
    heading: "Scale AI telemetry",
    detail:
      "Deliver executive briefings, liquidity forecasts, and anomaly alerts tailored to Pacific operations.",
    icon: ChartLineUp
  }
];

const REGION_PARTNERS: RegionPartner[] = [
  {
    region: "Melanesia",
    narrative:
      "Collaborates with Fiji, Papua New Guinea, and Vanuatu programmes on compliance, FX, and AI automation.",
    icon: Anchor
  },
  {
    region: "Australasia",
    narrative:
      "Aligns with Sydney and Auckland hubs on treasury operations, correspondent banking, and innovation cadence.",
    icon: Buildings
  },
  {
    region: "Southeast Asia",
    narrative:
      "Shares wallet innovation, AML readiness, and enablement frameworks with Singapore and Manila teams.",
    icon: Lightning
  },
  {
    region: "North America",
    narrative:
      "Coordinates with Honolulu and Los Angeles partners on diaspora engagement and compliance telemetry.",
    icon: MapTrifold
  },
  {
    region: "Europe",
    narrative:
      "Keeps PSD2 ready controls aligned with Amsterdam and London gateways supporting Pacific operations.",
    icon: ChartLineUp
  },
  {
    region: "Africa",
    narrative:
      "Exchanges resilience practices with Nairobi and Cape Town programmes to improve field enablement and AI adoption.",
    icon: Compass
  }
];

export const metadata: Metadata = {
  title: "Solomon Islands MLM Payment Gateways | Cloud MLM Software",
  description:
    "Deploy Solomon Islands ready MLM payment gateways with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout orchestrated within an AI enabled, compliance rich platform.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/solomon-islands"
  },
  openGraph: {
    title: "Solomon Islands MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Solomon Islands - now elevated with treasury dashboards, compliance automation, and AI telemetry."
  }
};

type SolomonIslandsPageProps = {
  params: { lang: SupportedLocale };
};

export default function SolomonIslandsPaymentGatewayPage({ params }: SolomonIslandsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-emerald-100 py-20 dark:from-cyan-500/20 dark:via-slate-950 dark:to-emerald-500/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(14,165,233,0.35),transparent_60%),radial-gradient(circle_at_82%_15%,rgba(16,185,129,0.3),transparent_55%),radial-gradient(circle_at_45%_80%,rgba(59,130,246,0.2),transparent_60%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700 dark:border-white/20 dark:bg-white/10 dark:text-white">
              Solomon Islands - Payment Orchestration
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Solomon Islands MLM payment gateways for resilient island growth
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software modernises the WordPress narrative into an AI optimised platform that respects
                Solomon Islands governance, geography, and community expectations.
              </p>
            </div>
            <div className="rounded-3xl border border-cyan-500/30 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/10">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-700 dark:text-white/70">
                Legacy anchor
              </p>
              <p className="mt-3 text-base text-foreground dark:text-white">
                Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Solomon Islands - SB
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Schedule a Solomon Islands briefing
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-cyan-500/40 text-cyan-800 hover:bg-cyan-100 dark:border-white/30 dark:text-white"
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
                  key={highlight.label}
                  className="group relative overflow-hidden rounded-3xl border border-cyan-500/25 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-emerald-500/15 to-sky-500/15 opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground dark:text-white">{highlight.label}</h2>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{highlight.content}</p>
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
            Gateway plays tuned for Pacific compliance, treasury, and experience
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The eight connectors from the legacy export now include concrete moves for finance, compliance, and product
            teams.
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
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-emerald-500/10 to-sky-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground dark:text-white">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.summary}</p>
                  </div>
                </div>
                <ul className="relative space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-500 dark:bg-white" aria-hidden />
                      <span>{bullet}</span>
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
              Modules from the WordPress navigation now power one Pacific platform
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Each module participates in a telemetry rich, multilingual, and resilient experience tailored to the
              Solomon Islands.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_CARDS.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-700 dark:bg-white/10 dark:text-white">
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
          <div className="space-y-6 rounded-3xl border border-cyan-500/30 bg-white/85 p-8 shadow-sm dark:border-white/15 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-600 dark:text-white/70">
              Programme cadence
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white">
              Four phases to modernise the Solomon Islands page
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Preserve the heritage, integrate governance, activate the connectors, and unlock AI telemetry for island
              leadership.
            </p>
            <Button asChild variant="secondary" size="lg" className="gap-2">
              <Link href={pricingHref}>
                Review Solomon Islands pricing
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 hidden w-px bg-gradient-to-b from-cyan-500 via-emerald-500 to-transparent lg:block" />
            <div className="space-y-6">
              {STAGES.map((stage) => {
                const Icon = stage.icon;
                return (
                  <article
                    key={stage.phase}
                    className="relative rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div className="space-y-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                          {stage.phase}
                        </span>
                        <h3 className="text-base font-semibold text-foreground dark:text-white">{stage.heading}</h3>
                        <p className="text-sm text-muted-foreground dark:text-white/70">{stage.detail}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-cyan-900 to-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(14,165,233,0.35),transparent_60%),radial-gradient(circle_at_80%_15%,rgba(16,185,129,0.2),transparent_55%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/75">
              Solomon Islands collaborates with global and regional hubs to sustain compliant, resilient, and AI informed
              payment operations.
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
            <Button asChild size="lg" className="gap-2 bg-white text-cyan-900 hover:bg-cyan-100">
              <Link href={contactHref}>
                Talk to a Solomon Islands strategist
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
