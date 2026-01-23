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
  title: string;
  description: string;
  icon: IconType;
};

type Gateway = {
  name: string;
  focus: string;
  actions: string[];
  icon: IconType;
};

type Module = {
  label: string;
  detail: string;
  icon: IconType;
};

type Step = {
  phase: string;
  title: string;
  detail: string;
  icon: IconType;
};

type RegionLink = {
  region: string;
  insight: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Legacy statement preserved",
    description:
      "Ways to accept payments from MLM Software in Slovenia - SL remains the guiding headline within the modernised experience.",
    icon: StackSimple
  },
  {
    title: "Gateway commitments",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout continue as the eight mandatory connectors.",
    icon: Plugs
  },
  {
    title: "Module orchestration",
    description:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, and multi-lingual system operate as a unified telemetry fabric.",
    icon: Circuitry
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal alpine bridge",
    focus: "Connect Ljubljana HQ with EU, Balkan, and global distributor communities.",
    actions: [
      "Multi currency module reconciles EUR, USD, GBP, and CHF transactions with audit ready variance packs.",
      "Ticket system module stores Bank of Slovenia compliance evidence and PSD2 documentation."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay commerce lane",
    focus: "Deliver premium ecommerce experiences for lifestyle, wellness, and tourism verticals.",
    actions: [
      "Auto responder issues bilingual confirmations aligned to cross border fulfilment SLAs.",
      "Backup manager snapshots product catalogues before seasonal travel and holiday peaks."
    ],
    icon: Megaphone
  },
  {
    name: "PayU regional mesh",
    focus: "Blend Central European PSPs, cards, and alternative payments without losing compliance agility.",
    actions: [
      "Emails module circulates Bank of Slovenia guidance, AML updates, and FX insights to leadership.",
      "KYC documentation vault tracks corporate filings, sanction checks, and licensing renewals."
    ],
    icon: ChatsCircle
  },
  {
    name: "Stripe innovation studio",
    focus: "Prototype AI concierge, hybrid subscription bundles, and experiential events across Ljubljana and Maribor.",
    actions: [
      "Ticket system module routes developer escalations with AI generated replication steps.",
      "Multi-lingual system keeps Slovene, English, and German surfaces synchronised."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net assurance track",
    focus: "Blend US acquiring expectations with EU, GDPR, and local governance requirements.",
    actions: [
      "Multi currency module compares US settlements against Slovenian banking partners for treasury oversight.",
      "KYC documentation consolidates sanction screening, PEP reviews, and merchant onboarding packages."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel vault",
    focus: "Tokenise field activations, retail pop-ups, and corporate events with unified data.",
    actions: [
      "E-wallet module streams commissions with maker-checker thresholds tailored by distributor rank.",
      "Backup manager preserves offline transactions for mountainous regions with limited coverage."
    ],
    icon: Wallet
  },
  {
    name: "Adyen performance tower",
    focus: "Monitor conversion, risk, and interchange metrics across EU and global corridors.",
    actions: [
      "Multi currency module visualises FX exposure across EUR, HRK, CZK, and HUF flows.",
      "Emails module distributes scheme notices, SCA updates, and compliance alerts with traceability."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    focus: "Deliver digital kits, AI enablement, and partner onboarding across Slovenia and neighbouring markets.",
    actions: [
      "E-voucher journeys automate incentives with tax documentation aligned to Slovenian accounting standards.",
      "Multi-lingual system harmonises Slovene, English, and German learning assets."
    ],
    icon: MapTrifold
  }
];

const MODULES: Module[] = [
  {
    label: "Multi currency module",
    detail: "Balances EUR, USD, GBP, CHF, and regional currencies with AI generated reconciliation insights.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    detail: "Routes regulatory, PSP, and distributor requests with SLA dashboards and immutable audit logs.",
    icon: ShieldCheck
  },
  {
    label: "Auto responder",
    detail: "Delivers Slovene and English communications instantly across email, SMS, and chat touchpoints.",
    icon: Sparkle
  },
  {
    label: "E-voucher",
    detail: "Issues campaign rewards, event passes, and loyalty perks with maker-checker approvals.",
    icon: Wallet
  },
  {
    label: "E-wallet",
    detail: "Streams commissions and reimbursements with liquidity guardrails and CFO ready analytics.",
    icon: Buildings
  },
  {
    label: "Backup manager",
    detail: "Protects storefronts, automations, and compliance archives before every major launch cycle.",
    icon: ShieldCheck
  },
  {
    label: "Emails module",
    detail: "Centralises transactional, marketing, and compliance messaging with deliverability telemetry.",
    icon: ChatsCircle
  },
  {
    label: "KYC documentation",
    detail: "Maintains identity, corporate, and banking evidence with automated renewal reminders.",
    icon: Compass
  },
  {
    label: "Multi-lingual system",
    detail: "Keeps Slovene, English, and German experiences aligned across portals, bots, and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const STEPS: Step[] = [
  {
    phase: "Phase 01",
    title: "Transcribe the WordPress legacy",
    detail:
      "Retain the original headline, gateway list, and navigation modules so stakeholders recognise continuity from the first review.",
    icon: StackSimple
  },
  {
    phase: "Phase 02",
    title: "Embed regulatory guardrails",
    detail:
      "Wire Bank of Slovenia expectations, PSD2 controls, and GDPR requirements into workflows, approvals, and dashboards.",
    icon: ShieldCheck
  },
  {
    phase: "Phase 03",
    title: "Activate the eight connectors",
    detail:
      "Advance PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout through sandbox, pilot, and production stages.",
    icon: Plugs
  },
  {
    phase: "Phase 04",
    title: "Scale AI telemetry",
    detail:
      "Deliver executive briefings, liquidity forecasts, and anomaly detection to keep Slovenian leadership ahead.",
    icon: ChartLineUp
  }
];

const REGION_LINKS: RegionLink[] = [
  {
    region: "Central Europe",
    insight:
      "Collaborates with Vienna and Budapest hubs on PSD2 compliance, treasury optimisation, and automation cadences.",
    icon: UsersThree
  },
  {
    region: "Western Europe",
    insight:
      "Shares insights with Frankfurt and Amsterdam teams on interchange control, FX strategy, and AI telemetry.",
    icon: ChartLineUp
  },
  {
    region: "Balkans",
    insight:
      "Aligns with Zagreb, Belgrade, and Sarajevo partners on localisation, AML readiness, and distributor enablement.",
    icon: Compass
  },
  {
    region: "North America",
    insight:
      "Coordinates with Toronto and New York leadership on Authorize.Net governance and diaspora expansion.",
    icon: Buildings
  },
  {
    region: "Middle East",
    insight:
      "Partners with Dubai and Riyadh treasury teams on liquidity buffers and correspondent banking diversification.",
    icon: MapTrifold
  },
  {
    region: "Asia Pacific",
    insight:
      "Works with Singapore and Sydney innovation hubs on AI automation, experimentation rhythms, and telemetry sharing.",
    icon: Lightning
  }
];

export const metadata: Metadata = {
  title: "Slovenia MLM Payment Gateways | Cloud MLM Software",
  description:
    "Deploy Slovenia ready MLM payment gateways with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout orchestrated through compliance rich, AI enabled workflows.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/slovenia"
  },
  openGraph: {
    title: "Slovenia MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Slovenia - now delivered with PSD2 governance, AI telemetry, and executive ready insights."
  }
};

type SloveniaPageProps = {
  params: { lang: SupportedLocale };
};

export default function SloveniaPaymentGatewayPage({ params }: SloveniaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-violet-100 py-20 dark:from-emerald-500/20 dark:via-slate-950 dark:to-violet-500/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.3),transparent_60%),radial-gradient(circle_at_80%_15%,rgba(139,92,246,0.25),transparent_55%),radial-gradient(circle_at_45%_80%,rgba(59,130,246,0.2),transparent_60%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700 dark:border-white/20 dark:bg-white/10 dark:text-white">
              Slovenia - Payment Orchestration
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Slovenia MLM payment gateways tuned for alpine agility and EU scale
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software reimagines the legacy WordPress storyline as an AI optimised platform that satisfies
                Slovenia&apos;s regulatory expectations while accelerating growth and innovation.
              </p>
            </div>
            <div className="rounded-3xl border border-emerald-500/30 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/10">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-700 dark:text-white/70">
                Legacy anchor
              </p>
              <p className="mt-3 text-base text-foreground dark:text-white">
                Ways to accept payments from MLM Software in Slovenia - SL
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Connect with Slovenia leadership
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
                  key={highlight.title}
                  className="group relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-violet-500/15 to-sky-500/15 opacity-0 transition duration-500 group-hover:opacity-100" />
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
            Gateway programmes calibrated for Slovenian compliance and innovation
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The eight connectors from the WordPress export gain executable guidance for treasury, compliance, and product
            teams.
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
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-violet-500/10 to-sky-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
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
              Modules from the navigation assembled into one Slovenia platform
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Every module inherits telemetry, automation, and multilingual governance aligned to Slovenia&apos;s operating
              landscape.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.label}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
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
          <div className="space-y-6 rounded-3xl border border-emerald-500/30 bg-white/85 p-8 shadow-sm dark:border-white/15 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600 dark:text-white/70">
              Execution steps
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white">
              Four disciplined phases to modernise the Slovenian page
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Maintain heritage, embed governance, activate connectors, and unlock AI telemetry for leadership.
            </p>
            <Button asChild variant="secondary" size="lg" className="gap-2">
              <Link href={pricingHref}>
                Review Slovenia pricing frameworks
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 hidden w-px bg-gradient-to-b from-emerald-500 via-violet-500 to-transparent lg:block" />
            <div className="space-y-6">
              {STEPS.map((step) => {
                const Icon = step.icon;
                return (
                  <article
                    key={step.phase}
                    className="relative rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
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

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-900 to-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(34,197,94,0.35),transparent_60%),radial-gradient(circle_at_80%_15%,rgba(139,92,246,0.2),transparent_55%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/75">
              Slovenia partners with regional and global hubs to keep payment operations resilient, compliant, and AI
              ready.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REGION_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <article key={link.region} className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/5 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{link.region}</h3>
                  </div>
                  <p className="text-sm text-white/75">{link.insight}</p>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-emerald-900 hover:bg-emerald-100">
              <Link href={contactHref}>
                Talk to a Slovenia strategist
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
