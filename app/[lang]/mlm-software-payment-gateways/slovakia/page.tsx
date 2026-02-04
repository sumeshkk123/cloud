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
  Buildings,
  ChartLineUp,
  ChatsCircle,
  Circuitry,
  Compass,
  CurrencyCircleDollar,
  GlobeHemisphereEast,
  HandCoins,
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

type HeroCard = {
  heading: string;
  description: string;
  icon: IconType;
};

type GatewayCard = {
  name: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type ModuleRow = {
  label: string;
  detail: string;
  icon: IconType;
};

type Phase = {
  stage: string;
  title: string;
  copy: string;
  icon: IconType;
};

type RegionPartner = {
  region: string;
  summary: string;
  icon: IconType;
};

const HERO_CARDS: HeroCard[] = [
  {
    heading: "Legacy headline honoured",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Slovakia - SK anchors the modern experience.",
    icon: StackSimple
  },
  {
    heading: "Gateway list preserved",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout continue as the definitive roster.",
    icon: Plugs
  },
  {
    heading: "Module mesh unified",
    description:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, and multi-lingual system operate as one telemetry layer.",
    icon: Circuitry
  }
];

const GATEWAY_CARDS: GatewayCard[] = [
  {
    name: "PayPal cross border trust",
    focus: "Connect Bratislava leadership with EU, US, and diaspora distributors seamlessly.",
    bullets: [
      "Multi currency module reconciles EUR, USD, GBP, and CZK flows with audit ready variance packs.",
      "Ticket system module stores National Bank of Slovakia and EU regulatory evidence for inspections."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay ecommerce lane",
    focus: "Enable premium retail experiences across Slovak ecommerce, retail, and direct selling partners.",
    bullets: [
      "Auto responder delivers Slovak and English confirmations with fulfilment updates in real time.",
      "Backup manager snapshots seasonal storefronts ahead of Black Friday, Easter, and local holiday peaks."
    ],
    icon: Buildings
  },
  {
    name: "PayU regional federation",
    focus: "Blend Central European acquirers, wallets, and alternative payments without sacrificing compliance.",
    bullets: [
      "Emails module briefs finance, legal, and compliance teams on EU AML directives and NBS guidance.",
      "KYC documentation maintains corporate filings, identity checks, and sanction screenings with renewal alerts."
    ],
    icon: ChatsCircle
  },
  {
    name: "Stripe experimentation studio",
    focus: "Prototype AI concierge, subscription bundles, and trial programmes across Bratislava and Kosice.",
    bullets: [
      "Ticket system module routes developer escalations with AI generated replication steps.",
      "Multi-lingual system synchronises Slovak, English, and German experiences across digital surfaces."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net governance track",
    focus: "Align North American operations with Slovak and EU regulatory expectations for hybrid programmes.",
    bullets: [
      "Multi currency module compares US gateway settlements against Slovak banking partners for treasury visibility.",
      "KYC documentation vault keeps sanction and PEP evidence inspection ready for global auditors."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    focus: "Tokenise field tours, experiential pop-ups, and corporate events with consistent identity.",
    bullets: [
      "E-wallet module enables instant commissions with maker-checker guardrails by distributor tier.",
      "Backup manager preserves offline transactions and kiosk sales for remote regions."
    ],
    icon: Wallet
  },
  {
    name: "Adyen performance tower",
    focus: "Monitor EU wide conversion, chargeback, and interchange trends from a single console.",
    bullets: [
      "Multi currency module visualises FX exposure across EUR, CZK, HUF, and PLN corridors.",
      "Emails module distributes PSD2, scheme, and compliance updates with traceable delivery metrics."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    focus: "Distribute AI enablement, digital kits, and onboarding content to Slovak and EU partners.",
    bullets: [
      "E-voucher journeys automate incentives with tax documentation aligned to Slovak accounting standards.",
      "Multi-lingual system harmonises Slovak, English, and German learning assets for field teams."
    ],
    icon: MapTrifold
  }
];

const MODULE_ROWS: ModuleRow[] = [
  {
    label: "Multi currency module",
    detail: "Balances EUR, USD, GBP, CZK, and PLN with AI powered reconciliation notes and treasury dashboards.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    detail: "Routes regulatory, PSP, and distributor requests with SLA insights and immutable audit trails.",
    icon: HandCoins
  },
  {
    label: "Auto responder",
    detail: "Delivers Slovak, English, and German communications instantly across email, SMS, and chat.",
    icon: Sparkle
  },
  {
    label: "E-voucher",
    detail: "Issues loyalty perks, event passes, and promotional credits with maker-checker approvals.",
    icon: Wallet
  },
  {
    label: "E-wallet",
    detail: "Streams commissions and reimbursements with liquidity guardrails and CFO ready analytics.",
    icon: Buildings
  },
  {
    label: "Backup manager",
    detail: "Safeguards storefronts, automations, and compliance archives before each release window.",
    icon: ShieldCheck
  },
  {
    label: "Emails module",
    detail: "Centralises transactional, marketing, and compliance messaging with deliverability telemetry.",
    icon: ChatsCircle
  },
  {
    label: "KYC documentation",
    detail: "Maintains identity, corporate registrations, and sanction checks with renewal reminders.",
    icon: Compass
  },
  {
    label: "Multi-lingual system",
    detail: "Keeps Slovak, English, German, and Hungarian experiences aligned across portals and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const PHASES: Phase[] = [
  {
    stage: "Phase 01",
    title: "Transcribe the WordPress legacy",
    copy:
      "Retain the original headline, gateway references, and navigation modules so stakeholders recognise continuity.",
    icon: StackSimple
  },
  {
    stage: "Phase 02",
    title: "Wire EU compliant governance",
    copy:
      "Embed National Bank of Slovakia guidance, PSD2 controls, and AML directives within workflows, approvals, and dashboards.",
    icon: ShieldCheck
  },
  {
    stage: "Phase 03",
    title: "Activate the connector roster",
    copy:
      "Advance PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout through sandbox, pilot, and production.",
    icon: Plugs
  },
  {
    stage: "Phase 04",
    title: "Elevate AI decision loops",
    copy:
      "Deliver executive briefings, liquidity forecasts, and anomaly detection to keep Slovakia leadership ahead of market shifts.",
    icon: ChartLineUp
  }
];

const REGION_PARTNERS: RegionPartner[] = [
  {
    region: "Central Europe",
    summary:
      "Collaborates with Prague, Vienna, and Budapest programmes on PSD2 compliance, FX strategy, and AI telemetry.",
    icon: Compass
  },
  {
    region: "Western Europe",
    summary:
      "Aligns with Frankfurt and Amsterdam hubs on treasury automation, interchange optimisation, and risk controls.",
    icon: ChartLineUp
  },
  {
    region: "North America",
    summary:
      "Shares Authorize.Net and PayPal governance practices with Toronto and Chicago teams supporting EU expansion.",
    icon: UsersThree
  },
  {
    region: "Asia Pacific",
    summary:
      "Connects with Singapore and Sydney innovation hubs on AI automation, experimentation cadences, and telemetry.",
    icon: Lightning
  },
  {
    region: "Middle East",
    summary:
      "Partners with Dubai and Riyadh treasury teams on liquidity buffers and correspondent banking diversification.",
    icon: Buildings
  },
  {
    region: "South America",
    summary:
      "Shares enablement frameworks with Sao Paulo and Bogota programmes to support global expansions.",
    icon: MapTrifold
  }
];

export const metadata: Metadata = {
  title: "Slovakia MLM Payment Gateways | Cloud MLM Software",
  description:
    "Deploy Slovakia ready MLM payment gateways with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout orchestrated through EU compliant, AI enabled governance.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/slovakia"
  },
  openGraph: {
    title: "Slovakia MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Slovakia - now elevated with EU governance, AI telemetry, and executive ready insights."
  }
};

type SlovakiaPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function SlovakiaPaymentGatewayPage({ params }: SlovakiaPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-slate-100 py-20 dark:from-indigo-500/20 dark:via-slate-950 dark:to-blue-500/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(99,102,241,0.3),transparent_60%),radial-gradient(circle_at_82%_15%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_45%_82%,rgba(15,118,110,0.2),transparent_60%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-indigo-700 dark:border-white/20 dark:bg-white/10 dark:text-white">
              Slovakia - Payment Orchestration
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Slovakia MLM payment gateways designed for EU scale execution
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software translates the legacy WordPress outline into an AI enabled operating model that meets
                Slovak, EU, and global leadership expectations for payments, compliance, and growth.
              </p>
            </div>
            <div className="rounded-3xl border border-indigo-500/30 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/10">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-indigo-700 dark:text-white/70">
                Legacy anchor
              </p>
              <p className="mt-3 text-base text-foreground dark:text-white">
                Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Slovakia - SK
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Connect with Slovakia leadership
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-indigo-500/40 text-indigo-800 hover:bg-indigo-100 dark:border-white/30 dark:text-white"
              >
                <Link href={demoHref}>
                  Preview the AI powered demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {HERO_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.heading}
                  className="group relative overflow-hidden rounded-3xl border border-indigo-500/25 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-blue-500/15 to-emerald-500/15 opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground dark:text-white">{card.heading}</h2>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{card.description}</p>
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
            Gateway plays tuned for Slovak compliance, treasury, and customer experience
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Each connector from the WordPress export gains actionable guidance for AI telemetry, compliance, and revenue
            growth teams.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_CARDS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border/60 bg-background/85 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/10 to-emerald-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground dark:text-white">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.focus}</p>
                  </div>
                </div>
                <ul className="relative space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-indigo-500 dark:bg-white" aria-hidden />
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
              Modules from the navigation now operate as one Slovak platform
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Every module mentioned in the legacy page contributes to a telemetry rich operating model that favours
              transparency, automation, and localisation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_ROWS.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.label}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{module.label}</h3>
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
          <div className="space-y-6 rounded-3xl border border-indigo-500/30 bg-white/85 p-8 shadow-sm dark:border-white/15 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-600 dark:text-white/70">
              Execution playbook
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white">
              Four phases to modernise the WordPress page responsibly
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Maintain heritage, integrate EU governance, activate the connectors, and unlock AI telemetry for Slovak
              leadership.
            </p>
            <Button asChild variant="secondary" size="lg" className="gap-2">
              <Link href={pricingHref}>
                Review Slovakia pricing frameworks
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 hidden w-px bg-gradient-to-b from-indigo-500 via-blue-500 to-transparent lg:block" />
            <div className="space-y-6">
              {PHASES.map((phase) => {
                const Icon = phase.icon;
                return (
                  <article
                    key={phase.stage}
                    className="relative rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div className="space-y-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                          {phase.stage}
                        </span>
                        <h3 className="text-base font-semibold text-foreground dark:text-white">{phase.title}</h3>
                        <p className="text-sm text-muted-foreground dark:text-white/70">{phase.copy}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-900 to-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(99,102,241,0.35),transparent_60%),radial-gradient(circle_at_82%_15%,rgba(59,130,246,0.2),transparent_55%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/75">
              Slovakia collaborates with global hubs to maintain resilient, compliant, and insight rich payment
              operations for distributors and executives alike.
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
                  <p className="text-sm text-white/75">{partner.summary}</p>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-indigo-900 hover:bg-indigo-100">
              <Link href={contactHref}>
                Talk to a Slovakia strategist
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
