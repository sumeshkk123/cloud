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
  Bank,
  ChartLineUp,
  ChatsCircle,
  Compass,
  CurrencyCircleDollar,
  HandCoins,
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
  description: string;
  icon: IconType;
};

type GatewayInitiative = {
  name: string;
  narrative: string;
  actions: string[];
  icon: IconType;
};

type ModuleCard = {
  title: string;
  detail: string;
  icon: IconType;
};

type Initiative = {
  phase: string;
  summary: string;
  detail: string;
  icon: IconType;
};

type RegionWave = {
  title: string;
  copy: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    label: "Legacy storyline preserved",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Sint Maarten (Dutch part) - SX remains the heritage anchor inside this experience.",
    icon: StackSimple
  },
  {
    label: "Gateway roster intact",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout continue as the eight mandatory connectors.",
    icon: Plugs
  },
  {
    label: "Module ecosystem united",
    description:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, and multi-lingual system collaborate as one operating mesh.",
    icon: Sparkle
  }
];

const GATEWAY_INITIATIVES: GatewayInitiative[] = [
  {
    name: "PayPal cross-border concierge",
    narrative: "Serve island leadership while harmonising experiences for Dutch, French, and North American networks.",
    actions: [
      "Multi currency module reconciles ANG, USD, EUR, and CAD settlements with variance commentary for finance teams.",
      "Ticket system module stores compliance evidence for De Nederlandsche Bank oversight and local regulators."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay travel lane",
    narrative: "Support tourism driven merchandising, duty free activations, and hospitality partnerships.",
    actions: [
      "Auto responder delivers multilingual confirmations aligned to cruise timetables and hotel check-ins.",
      "Backup manager preserves seasonal catalogues before each tourism wave."
    ],
    icon: Anchor
  },
  {
    name: "PayU regional federation",
    narrative: "Blend Latin American PSPs, Caribbean wallets, and European acquirers without losing compliance agility.",
    actions: [
      "Emails module circulates risk advisories, tax updates, and FX signals to treasury leaders.",
      "KYC documentation tracks business licensing, maritime trade certificates, and sanction screenings."
    ],
    icon: ChatsCircle
  },
  {
    name: "Stripe experimentation hub",
    narrative: "Prototype AI concierge, luxury loyalty programmes, and experiential pop-ups across both sides of the island.",
    actions: [
      "Ticket system module routes developer escalations with AI generated reproductions for engineering teams.",
      "Multi-lingual system keeps English, Dutch, French, and Spanish surface content synchronised."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net assurance corridor",
    narrative: "Align North American compliance expectations with island specific governance requirements.",
    actions: [
      "Multi currency module compares US acquirer performance against Caribbean banking partners.",
      "KYC documentation vault retains merchant onboarding, sanction checks, and offshore compliance evidence."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel vault",
    narrative: "Tokenise in-resort purchases, lifestyle memberships, and community events.",
    actions: [
      "E-wallet module enables instant commissions with maker-checker thresholds per distributor tier.",
      "Backup manager captures offline sales for areas with intermittent connectivity."
    ],
    icon: Wallet
  },
  {
    name: "Adyen performance tower",
    narrative: "Monitor conversion, interchange, and risk metrics across EU, US, and LATAM corridors.",
    actions: [
      "Multi currency module visualises FX exposure for ANG, USD, EUR, and CAD flows.",
      "Emails module delivers scheme and compliance alerts with audit-ready logs."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    narrative: "Deliver digital kits, AI enablement, and onboarding across charter partners and remote distributors.",
    actions: [
      "E-voucher journeys automate incentives with tax documentation aligned to Dutch Caribbean governance.",
      "Multi-lingual system harmonises English, Dutch, and French narratives for regional collaboration."
    ],
    icon: MapTrifold
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    title: "Multi currency module",
    detail: "Balances ANG, USD, EUR, CAD, and guilders with automated reconciliation packs and anomaly detection.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    detail: "Coordinates MAS, EU, and island specific compliance requests with SLA governance and audit trails.",
    icon: HandCoins
  },
  {
    title: "Auto responder",
    detail: "Delivers multilingual communications tuned to cruise schedules, events, and partner activations.",
    icon: Megaphone
  },
  {
    title: "E-voucher",
    detail: "Issues duty free promos, resort credits, and loyalty perks with maker-checker approvals.",
    icon: Wallet
  },
  {
    title: "E-wallet",
    detail: "Streams commissions and reimbursements with liquidity dashboards for island wide operations.",
    icon: Bank
  },
  {
    title: "Backup manager",
    detail: "Captures storefront and automation configurations before hurricane season or infrastructure upgrades.",
    icon: ShieldCheck
  },
  {
    title: "Emails module",
    detail: "Centralises marketing, transactional, and compliance communications with deliverability telemetry.",
    icon: UsersFour
  },
  {
    title: "KYC documentation",
    detail: "Maintains identity, vessel, and business registrations with renewal reminders for compliance teams.",
    icon: Compass
  },
  {
    title: "Multi-lingual system",
    detail: "Synchronises English, Dutch, French, and Spanish experiences across portals, bots, and collateral.",
    icon: MapTrifold
  }
];

const INITIATIVES: Initiative[] = [
  {
    phase: "Phase 01",
    summary: "Translate the WordPress heritage",
    detail:
      "Carry forward the headline, gateway list, and module references so stakeholders recognise the programme instantly.",
    icon: StackSimple
  },
  {
    phase: "Phase 02",
    summary: "Calibrate regulatory guardrails",
    detail:
      "Integrate Dutch, French, and Caribbean compliance expectations with automated reporting and approval matrices.",
    icon: ShieldCheck
  },
  {
    phase: "Phase 03",
    summary: "Activate the eight connectors",
    detail:
      "Advance PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout through sandbox, pilot, and go-live ceremonies.",
    icon: Plugs
  },
  {
    phase: "Phase 04",
    summary: "Scale AI telemetry",
    detail:
      "Deliver weekly executive briefings, liquidity alerts, and customer experience intelligence that keep Sint Maarten leadership ahead.",
    icon: ChartLineUp
  }
];

const REGION_WAVES: RegionWave[] = [
  {
    title: "Caribbean",
    copy:
      "Shares AML, FX, and hurricane readiness playbooks with Curacao, Aruba, and Bahamas programmes for resilience.",
    icon: Anchor
  },
  {
    title: "Europe",
    copy:
      "Aligns PSD2, GDPR, and SEPA practices with Amsterdam and Paris teams supporting cross border distributors.",
    icon: CurrencyCircleDollar
  },
  {
    title: "North America",
    copy:
      "Collaborates with Miami and New York hubs on tourism partnerships, chargeback governance, and AI telemetry.",
    icon: Compass
  },
  {
    title: "Latin America",
    copy:
      "Replicates wallet innovation and compliance cadences from Bogota, Mexico City, and Sao Paulo networks.",
    icon: MapTrifold
  },
  {
    title: "Europe Overseas",
    copy:
      "Coordinates with Guadeloupe and Martinique leadership on maritime trade, logistics, and compliance dashboards.",
    icon: HandCoins
  },
  {
    title: "Oceania",
    copy:
      "Exchanges AI telemetry and field enablement practices with Sydney and Auckland teams to build global resilience.",
    icon: ChartLineUp
  }
];

export const metadata: Metadata = {
  title: "Sint Maarten MLM Payment Gateways | Cloud MLM Software",
  description:
    "Launch Sint Maarten ready MLM payment gateways with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout operating inside an AI optimised, compliance forward platform.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/sint-maarten-dutch-part"
  },
  openGraph: {
    title: "Sint Maarten MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Sint Maarten (Dutch part) - modernised for tourism, compliance, and global scale execution."
  }
};

type SintMaartenPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function SintMaartenPaymentGatewayPage({ params }: SintMaartenPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-100 py-20 dark:from-cyan-500/20 dark:via-slate-950 dark:to-emerald-500/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.3),transparent_60%),radial-gradient(circle_at_80%_15%,rgba(16,185,129,0.25),transparent_55%),radial-gradient(circle_at_45%_80%,rgba(244,114,182,0.2),transparent_60%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-700 dark:border-white/20 dark:bg-white/10 dark:text-white">
              Sint Maarten - Payment Orchestration
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Sint Maarten MLM payment gateways designed for dual jurisdiction excellence
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software transforms the legacy WordPress narrative into an AI enabled platform that reflects
                the island&apos;s tourism heartbeat, regulatory diversity, and global ambitions.
              </p>
            </div>
            <div className="rounded-3xl border border-cyan-500/30 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/10">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-700 dark:text-white/70">
                Legacy anchor
              </p>
              <p className="mt-3 text-base text-foreground dark:text-white">
                Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Sint Maarten (Dutch part) - SX
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Schedule a Sint Maarten workshop
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
                  Explore the AI powered demo
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
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-emerald-500/15 to-rose-500/15 opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground dark:text-white">{highlight.label}</h2>
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
            Gateway initiatives tuned for island wide commerce and compliance
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The eight connectors from the legacy page now include actionable guidance for treasury, compliance, and
            experience teams across Dutch and French territories.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_INITIATIVES.map((initiative) => {
            const Icon = initiative.icon;
            return (
              <article
                key={initiative.name}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border/60 bg-background/85 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-emerald-500/10 to-rose-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground dark:text-white">{initiative.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{initiative.narrative}</p>
                  </div>
                </div>
                <ul className="relative space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {initiative.actions.map((action) => (
                    <li key={action} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-500 dark:bg-white" aria-hidden />
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
              Modules from the legacy navigation, orchestrated for Sint Maarten
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Each module now delivers telemetry, resilience, and multilingual polish aligned to the island&apos;s economic
              and regulatory makeup.
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
              Delivery playbook
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white">
              Modernise the WordPress page with disciplined execution
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Four phases respect the original narrative while empowering Sint Maarten leadership with compliance,
              treasury, and AI ready insight.
            </p>
            <Button asChild variant="secondary" size="lg" className="gap-2">
              <Link href={pricingHref}>
                Review island pricing frameworks
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 hidden w-px bg-gradient-to-b from-cyan-500 via-emerald-500 to-transparent lg:block" />
            <div className="space-y-6">
              {INITIATIVES.map((initiative) => {
                const Icon = initiative.icon;
                return (
                  <article
                    key={initiative.phase}
                    className="relative rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div className="space-y-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                          {initiative.phase}
                        </span>
                        <h3 className="text-base font-semibold text-foreground dark:text-white">{initiative.summary}</h3>
                        <p className="text-sm text-muted-foreground dark:text-white/70">{initiative.detail}</p>
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(56,189,248,0.35),transparent_60%),radial-gradient(circle_at_80%_15%,rgba(16,185,129,0.2),transparent_55%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/75">
              Sint Maarten collaborates with regional and global partners to keep payment operations resilient, compliant,
              and AI inspired.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REGION_WAVES.map((wave) => {
              const Icon = wave.icon;
              return (
                <article key={wave.title} className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/5 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{wave.title}</h3>
                  </div>
                  <p className="text-sm text-white/75">{wave.copy}</p>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-cyan-900 hover:bg-cyan-100">
              <Link href={contactHref}>
                Talk to a Sint Maarten strategist
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
