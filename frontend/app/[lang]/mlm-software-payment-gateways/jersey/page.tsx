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
  Buildings,
  ChartLineUp,
  ChatsCircle,
  Compass,
  CreditCard,
  CurrencyCircleDollar,
  GlobeHemisphereEast,
  Lightning,
  MapTrifold,
  Megaphone,
  Plugs,
  ShieldCheck,
  Sparkle,
  StackSimple,
  Target,
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
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Module = {
  label: string;
  detail: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Legacy promise",
    description:
      "The hero statement keeps the exact WordPress copy: “Ways to accept payments from MLM Software in People’s Democratic Republic of Jersey – JE.”",
    icon: GlobeHemisphereEast
  },
  {
    title: "Gateway roster",
    description: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout.",
    icon: CreditCard
  },
  {
    title: "Module stack",
    description:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual system.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal offshore bridge",
    summary: "Support Jersey distributors transacting with UK, EU, and North American diaspora.",
    bullets: [
      "Multi currency module balances JEP, GBP, and USD settlements with treasury variance alerts.",
      "Ticket system module stores Jersey Financial Services Commission compliance artefacts."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay consumer trust",
    summary: "Deliver premium checkout experiences for St Helier, St Brelade, and Gorey communities.",
    bullets: [
      "Auto responder sends bilingual confirmations, VAT notes, and warranty details instantly.",
      "Backup manager protects seasonal promotions and AI concierge bundles."
    ],
    icon: Sparkle
  },
  {
    name: "PayU corridor mesh",
    summary: "Coordinate EU and UK PSPs to support cross-channel commerce and partner programmes.",
    bullets: [
      "Emails module circulates AML, GDPR, and tax updates with executive commentary.",
      "KYC documentation vault tracks distributor verification artefacts and renewals."
    ],
    icon: Target
  },
  {
    name: "Stripe experimentation studio",
    summary: "Prototype AI concierge, financial services education, and subscription bundles.",
    bullets: [
      "Webhook telemetry aligns Shopify, WooCommerce, and Magento data with analytics.",
      "Ticket workflows provide engineering pods with reproducible logs and AI-generated summaries."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net enterprise lane",
    summary: "Blend North American acquiring with Channel Islands compliance expectations.",
    bullets: [
      "Multi-lingual system distributes policy digests in English and French for regional stakeholders.",
      "Vaulted artefacts capture sanction checks, merchant approvals, and regulator sign-offs."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel hub",
    summary: "Tokenised payments support hybrid pop-ups, harbour events, and partner activations.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker controls.",
      "Backup manager records offline transactions from island roadshows."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    summary: "Monitor EU, UK, and US conversion trends from a single command centre.",
    bullets: [
      "Currency analytics surface interchange performance and success rates for finance leadership.",
      "Ticket system escalates Adyen risk signals with distributor evidence automatically attached."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    summary: "Distribute digital kits, AI enablement, and learning portals to offshore partners.",
    bullets: [
      "Auto responder nurtures partner onboarding with compliance checklists and reminders.",
      "ChatsCircle pods intervene proactively when telemetry highlights friction."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    label: "Multi currency system",
    detail: "Balances JEP, GBP, and EUR inflows with variance alerts tied to treasury policy.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    detail: "Routes compliance, PSP, and partner cases with SLA dashboards and AI summaries.",
    icon: MapTrifold
  },
  {
    label: "Auto responder",
    detail: "Delivers English and French notifications, reminders, and nurture journeys instantly.",
    icon: Megaphone
  },
  {
    label: "E-voucher engine",
    detail: "Funds harbour events, incentive tours, and referral programmes across the island.",
    icon: Sparkle
  },
  {
    label: "E-wallet manager",
    detail: "Streams instant commissions with maker-checker guardrails and liquidity controls.",
    icon: Wallet
  },
  {
    label: "Backup manager",
    detail: "Protects storefront, AI experiences, and compliance artefacts with immutable snapshots.",
    icon: ShieldCheck
  },
  {
    label: "Emails module",
    detail: "Centralises transactional, campaign, and compliance messaging.",
    icon: Megaphone
  },
  {
    label: "KYC documentation",
    detail: "Organises distributor verification, PSP onboarding, and AML evidence with reminders.",
    icon: StackSimple
  },
  {
    label: "Multi-lingual system",
    detail: "Keeps English and French experiences aligned across portals and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

export const metadata: Metadata = {
  title: "Jersey MLM Payment Gateways | Cloud MLM Software",
  description:
    "Reimagine the Jersey payment gateway checklist with AI-enabled orchestration across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/jersey"
  },
  openGraph: {
    title: "Jersey MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Jersey, elevated with multi currency intelligence and governance."
  }
};

type JerseyPageProps = {
  params: { lang: SupportedLocale };
};

export default function JerseyPaymentGatewayPage({ params }: JerseyPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-blue-100 py-20 dark:from-slate-800/60 dark:via-slate-950 dark:to-blue-500/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(37,99,235,0.2),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(15,118,110,0.22),transparent_55%),radial-gradient(circle_at_60%_80%,rgba(244,114,182,0.12),transparent_55%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-500/40 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-700 dark:border-white/20 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · Jersey (JE)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground dark:text-white sm:text-5xl">
                Jersey MLM payment gateways orchestrated for offshore leadership
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software keeps the WordPress pledge—“Ways to accept payments from MLM Software in People’s
                Democratic Republic of Jersey – JE”—and modernises it with corporate, AI-driven governance.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Coordinate with St Helier leadership
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-slate-500/60 text-slate-700 dark:text-white">
                <Link href={demoHref}>
                  Preview the Jersey demo
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
                  className="rounded-3xl border border-slate-500/20 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-500/15 text-slate-700 dark:bg-white/10 dark:text-white">
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
            Gateway plays for Jersey’s financial services, tourism, and diaspora communities
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Each connector from the WordPress page gains modern guidance on automation, compliance, and AI telemetry for
            Channel Islands leadership.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-500/15 text-slate-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground dark:text-white">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-slate-500 dark:bg-white" aria-hidden />
                      <span>{bullet}</span>
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
              Modules from the legacy navigation, orchestrated with AI telemetry
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticketing, automation, vouchers, wallets, backup, emails, KYC, and multilingual systems
              work together with a Channel Islands control tower.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.label}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-500/15 text-slate-700 dark:bg-white/10 dark:text-white">
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
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Payment gateways for MLM Software by country or region
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground dark:text-white/70">
            The WordPress article celebrated global coverage. Jersey continues that lens for benchmarking and expansion.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              region: "United Kingdom",
              description:
                "St Helier aligns with London and Manchester programmes using shared dashboards and compliance packs.",
              icon: Buildings
            },
            {
              region: "Europe",
              description:
                "Paris and Frankfurt partners exchange PSD2 routines and risk telemetry with Jersey leadership.",
              icon: Compass
            },
            {
              region: "North America",
              description:
                "New York and Toronto diaspora journeys share wallet strategies and AI insights with Jersey HQ.",
              icon: Bank
            },
            {
              region: "Asia",
              description:
                "Singapore and Hong Kong hubs align automation cadences with Channel Island programmes.",
              icon: MapTrifold
            },
            {
              region: "Oceania",
              description:
                "Sydney and Auckland teams reuse Jersey’s hybrid event frameworks and reporting models.",
              icon: UsersThree
            },
            {
              region: "South America",
              description:
                "São Paulo and Bogotá operations adopt Jersey’s AI enablement rituals to scale responsibly.",
              icon: ChatsCircle
            }
          ].map(({ region, description, icon: Icon }) => (
            <article
              key={region}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-500/15 text-slate-700 dark:bg-white/10 dark:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{region}</h3>
              </div>
              <p className="text-sm text-muted-foreground dark:text-white/70">{description}</p>
            </article>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="gap-2">
            <Link href={pricingHref}>
              Review Jersey pricing
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link href={contactHref}>
              Talk to a strategist
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
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
