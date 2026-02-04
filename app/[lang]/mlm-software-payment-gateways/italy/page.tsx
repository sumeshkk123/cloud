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
      "The hero preserves the precise WordPress statement: “Ways to accept payments from MLM Software in People’s Democratic Republic of Italy – IT.”",
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
    name: "PayPal diaspora orchestration",
    summary: "Serve Italian diaspora buying kits from New York, Toronto, and Buenos Aires.",
    bullets: [
      "Multi currency module balances EUR, USD, and CAD before treasury sign-off.",
      "Ticket system module stores Bank of Italy compliance notes and PSP evidence."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay retail confidence",
    summary: "Deliver trusted checkout journeys for Milan, Rome, and Naples shoppers.",
    bullets: [
      "Auto responder issues bilingual receipts, VAT notes, and warranty details instantly.",
      "Backup manager protects seasonal promotions and AI bundles."
    ],
    icon: Sparkle
  },
  {
    name: "PayU continental bridge",
    summary: "Enable EU PSPs supporting multilingual partners across the peninsula.",
    bullets: [
      "Emails module circulates PSD2, AML, and VAT updates with executive commentary.",
      "KYC documentation vault tracks distributor verification artefacts and expiries."
    ],
    icon: Target
  },
  {
    name: "Stripe experimentation studio",
    summary: "Prototype AI concierge services and subscription programmes for design districts.",
    bullets: [
      "Webhook telemetry keeps Shopify, WooCommerce, and Magento aligned with analytics.",
      "Ticket workflows deliver engineering-ready reproductions and AI-generated summaries."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net enterprise link",
    summary: "Blend North American acquiring with Italian governance and audit rituals.",
    bullets: [
      "Multi-lingual system publishes policy digests in Italian and English simultaneously.",
      "Vaulted artefacts capture sanction diligence and leadership approvals for each merchant ID."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel hub",
    summary: "Tokenised payments support hybrid pop-ups, roadshows, and artisan collaborations.",
    bullets: [
      "E-wallet module activates instant commissions with maker-checker controls.",
      "Backup manager protects offline transaction data for regulatory audits."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    summary: "Compare EU, UK, and US conversion trends from a single control tower.",
    bullets: [
      "Currency analytics highlight interchange and success rates for finance leadership.",
      "Ticket system attaches Adyen risk alerts to distributor evidence automatically."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    summary: "Distribute digital kits, AI enablement, and learning portals across Italy and beyond.",
    bullets: [
      "Auto responder nurtures partner onboarding with compliance and launch checklists.",
      "ChatsCircle teams engage proactively when telemetry highlights friction."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    label: "Multi currency system",
    detail: "Balances EUR, USD, and GBP inflows with variance alerts tied to Italian treasury policy.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    detail: "Routes compliance, PSP, and fulfilment cases with SLA dashboards and AI summaries.",
    icon: MapTrifold
  },
  {
    label: "Auto responder",
    detail: "Delivers Italian- and English-language notifications, reminders, and nurture flows instantly.",
    icon: Megaphone
  },
  {
    label: "E-voucher engine",
    detail: "Funds retail pop-ups, national roadshows, and partner incentives across regions.",
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
    detail: "Coordinates campaign, transactional, and compliance messaging from one command centre.",
    icon: Megaphone
  },
  {
    label: "KYC documentation",
    detail: "Organises distributor verification, PSP onboarding, and sanction checks with reminders.",
    icon: StackSimple
  },
  {
    label: "Multi-lingual system",
    detail: "Keeps Italian, English, French, and German experiences aligned across portals.",
    icon: GlobeHemisphereEast
  }
];

export const metadata: Metadata = {
  title: "Italy MLM Payment Gateways | Cloud MLM Software",
  description:
    "Modernise the Italy payment gateway checklist with AI-enabled orchestration across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/italy"
  },
  openGraph: {
    title: "Italy MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Italy, elevated with multi currency intelligence and governance."
  }
};

type ItalyPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function ItalyPaymentGatewayPage({ params }: ItalyPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-100 via-white to-emerald-100 py-20 dark:from-rose-500/20 dark:via-slate-950 dark:to-emerald-500/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(244,114,182,0.2),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(34,197,94,0.2),transparent_55%),radial-gradient(circle_at_60%_80%,rgba(59,130,246,0.15),transparent_55%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/50 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-rose-700 dark:border-white/20 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · Italy (IT)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground dark:text-white sm:text-5xl">
                Italy MLM payment gateways orchestrated for design-led growth
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                We keep the WordPress pledge—“Ways to accept payments from MLM Software in People’s Democratic Republic
                of Italy – IT”—while upgrading it with corporate processes, AI telemetry, and compliance guardrails.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Connect with Milan leadership
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-rose-500/60 text-rose-700 dark:text-white">
                <Link href={demoHref}>
                  Preview the Italy demo
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
                  className="rounded-3xl border border-rose-500/30 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
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
            Gateway plays for Italy’s fashion, manufacturing, and diaspora communities
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Each connector from the WordPress page gains modern context with automation, compliance, and AI guidance.
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
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
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
                      <span className="mt-2 h-2 w-2 rounded-full bg-rose-500 dark:bg-white" aria-hidden />
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
          <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
                Modules from the legacy navigation, orchestrated with AI telemetry
              </h2>
              <p className="text-sm text-muted-foreground dark:text-white/70">
                Multi currency, ticketing, automation, vouchers, wallets, backup, emails, KYC, and multilingual systems
                work together with clear governance for Italy.
              </p>
              <div className="rounded-3xl border border-border/60 bg-background/80 p-6 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <Buildings className="h-8 w-8 text-primary dark:text-white" aria-hidden />
                  <div>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">Executive insight</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">
                      Milan headquarters watches onboarding, revenue, and compliance metrics with AI-powered briefings.
                    </p>
                  </div>
                </div>
              </div>
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
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
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
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Payment gateways for MLM Software by country or region
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground dark:text-white/70">
            The WordPress article celebrated global coverage—Italy aligns with this perspective for benchmarking.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              region: "Europe",
              description:
                "Milan shares PSD2-ready playbooks with Paris, Madrid, and Berlin through joint dashboards.",
              icon: Buildings
            },
            {
              region: "North America",
              description:
                "New York and Toronto diaspora teams align incentive and wallet strategies with Italian leadership.",
              icon: Bank
            },
            {
              region: "Asia",
              description:
                "Singapore and Tokyo command centres share automation and compliance rituals with Milan HQ.",
              icon: MapTrifold
            },
            {
              region: "Africa",
              description:
                "Cairo and Nairobi programmes coordinate regulatory updates and AI enablement cadences.",
              icon: Compass
            },
            {
              region: "Oceania",
              description:
                "Sydney and Melbourne partners reuse Italy’s hybrid event frameworks and reporting models.",
              icon: UsersThree
            },
            {
              region: "South America",
              description:
                "São Paulo and Buenos Aires operations adopt Italian AI insights to scale responsibly.",
              icon: ChatsCircle
            }
          ].map(({ region, description, icon: Icon }) => (
            <article
              key={region}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
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
              Review Italy pricing
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
