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
  label: string;
  description: string;
  icon: IconType;
};

type Gateway = {
  name: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type Module = {
  title: string;
  detail: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    label: "Legacy headline locked in",
    description:
      "The hero preserves “Ways to accept payments from MLM Software in People’s Democratic Republic of Israel – IL,” exactly as the WordPress article states.",
    icon: GlobeHemisphereEast
  },
  {
    label: "Gateway roster",
    description:
      "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout — the full list we now orchestrate with AI telemetry.",
    icon: CreditCard
  },
  {
    label: "Modules in play",
    description:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual system.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal diaspora runway",
    focus: "Empower Israeli diaspora in New York, London, and Sydney to fund kits and subscriptions.",
    bullets: [
      "Multi currency module balances ILS, USD, GBP, and AUD with treasury variance alerts.",
      "Ticket system module packages Bank of Israel compliance evidence for leadership."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay consumer trust",
    focus: "Deliver one-click experiences for Tel Aviv, Jerusalem, and Haifa shoppers.",
    bullets: [
      "Auto responder sends bilingual confirmations and warranty notices instantly.",
      "Backup manager safeguards flash promotion assets and AI bundle catalogues."
    ],
    icon: Sparkle
  },
  {
    name: "PayU regional bridge",
    focus: "Coordinate with EU PSPs to support multilingual partner journeys.",
    bullets: [
      "Emails module circulates PSD2, AML, and VAT updates with executive commentary.",
      "KYC documentation vault maps distributor verification artefacts with expiry reminders."
    ],
    icon: Target
  },
  {
    name: "Stripe innovation studio",
    focus: "Prototype AI concierge services and SaaS-style training programmes.",
    bullets: [
      "Webhook telemetry aligns Shopify, WooCommerce, and Magento data with product analytics.",
      "Ticket workflows escalate incidents with reproducible logs and AI-generated summaries."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net enterprise lane",
    focus: "Blend North American acquiring with Israeli leadership oversight and compliance rituals.",
    bullets: [
      "Multi-lingual system distributes policy updates in Hebrew, English, and Russian.",
      "Vaulted artefacts ensure each merchant ID captures sanction checks and board approvals."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    focus: "Tokenised payments support hybrid pop-ups, tech meetups, and retail activations.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker guardrails.",
      "Backup manager records offline transaction data for audits and AI retraining."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    focus: "Compare success rates across EU, US, and APAC corridors from one command centre.",
    bullets: [
      "Currency analytics surface conversion health and interchange pressures for CFO review.",
      "Ticket system links Adyen risk alerts with distributor evidence automatically attached."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout scale runway",
    focus: "Distribute digital kits, AI enablement, and learning subscriptions globally.",
    bullets: [
      "Auto responder nurtures partner onboarding with checklists and compliance tasks.",
      "ChatsCircle pods offer proactive outreach triggered by payment telemetry signals."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    title: "Multi currency system",
    detail: "Tracks ILS, USD, EUR, and GBP inflows with variance alerts tuned to Israeli treasury policy.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    detail: "Routes compliance, product, and PSP cases with SLA dashboards and AI summaries.",
    icon: MapTrifold
  },
  {
    title: "Auto responder",
    detail: "Delivers Hebrew- and English-language notifications and nurture sequences instantly.",
    icon: Megaphone
  },
  {
    title: "E-voucher engine",
    detail: "Funds hackathon vouchers, campus programmes, and omnichannel incentives.",
    icon: Sparkle
  },
  {
    title: "E-wallet manager",
    detail: "Streams instant commissions with maker-checker approvals and liquidity controls.",
    icon: Wallet
  },
  {
    title: "Backup manager",
    detail: "Protects storefront, AI experiences, and compliance artefacts with immutable snapshots.",
    icon: ShieldCheck
  },
  {
    title: "Emails module",
    detail: "Centralises transactional, campaign, and compliance communication with delivery analytics.",
    icon: Megaphone
  },
  {
    title: "KYC documentation",
    detail: "Captures distributor verification, sanction checks, and PSP onboarding artefacts.",
    icon: StackSimple
  },
  {
    title: "Multi-lingual system",
    detail: "Keeps Hebrew, English, Arabic, and Russian experiences harmonised across portals.",
    icon: GlobeHemisphereEast
  }
];

export const metadata: Metadata = {
  title: "Israel MLM Payment Gateways | Cloud MLM Software",
  description:
    "Elevate the Israel payment gateway checklist with AI-enabled orchestration of PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/israel"
  },
  openGraph: {
    title: "Israel MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Israel, upgraded with multi currency intelligence and governance."
  }
};

type IsraelPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function IsraelPaymentGatewayPage({ params }: IsraelPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-white to-emerald-100 py-20 dark:from-blue-500/20 dark:via-slate-950 dark:to-emerald-500/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(59,130,246,0.22),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(16,185,129,0.2),transparent_55%),radial-gradient(circle_at_60%_80%,rgba(251,191,36,0.18),transparent_55%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 dark:border-white/20 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · Israel (IL)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground dark:text-white sm:text-5xl">
                Israel MLM payment gateways, orchestrated for AI-era innovation
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software keeps the WordPress pledge—“Ways to accept payments from MLM Software in People’s
                Democratic Republic of Israel – IL”—and elevates it with professional governance.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Connect with Tel Aviv leadership
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-blue-500/60 text-blue-700 dark:text-white">
                <Link href={demoHref}>
                  Preview the Israel demo
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
                  className="rounded-3xl border border-blue-500/30 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/15 text-blue-700 dark:bg-white/10 dark:text-white">
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
            Gateway narratives for Israel’s fintech, SaaS, and diaspora communities
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The eight connectors from the WordPress page now carry modern context—automation, compliance, and AI
            telemetry for Israeli leadership.
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
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/15 text-blue-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground dark:text-white">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.focus}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 dark:bg-white" aria-hidden />
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
                Modules from the WordPress navigation, orchestrated with AI insight
              </h2>
              <p className="text-sm text-muted-foreground dark:text-white/70">
                Multi currency, ticketing, automation, vouchers, wallets, backup, emails, KYC, and multilingual systems
                now operate in one governed stack for Israel.
              </p>
              <div className="rounded-3xl border border-border/60 bg-background/80 p-6 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <Buildings className="h-8 w-8 text-primary dark:text-white" aria-hidden />
                  <div>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">
                      Tel Aviv control tower
                    </h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">
                      Leadership sees onboarding, revenue, and compliance health across the whole country in one view.
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
                    key={module.title}
                    className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
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
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Payment gateways for MLM Software by country or region
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground dark:text-white/70">
            The WordPress article celebrated global coverage. We continue that perspective to benchmark Israel’s
            programme.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              region: "North America",
              description:
                "Tel Aviv teams align with New York and Toronto diaspora programmes using shared AI dashboards.",
              icon: Bank
            },
            {
              region: "Europe",
              description:
                "Dublin, Berlin, and Paris partners exchange PSD2-ready playbooks with Israeli leadership.",
              icon: Buildings
            },
            {
              region: "Asia",
              description:
                "Singapore and Tokyo command centres share automation routines to accelerate Israeli innovation.",
              icon: MapTrifold
            },
            {
              region: "Africa",
              description:
                "Johannesburg and Nairobi programmes collaborate on compliance resilience and AI enablement.",
              icon: Compass
            },
            {
              region: "Oceania",
              description:
                "Sydney and Melbourne partners reuse Israel’s hybrid event playbooks and reporting models.",
              icon: UsersThree
            },
            {
              region: "South America",
              description:
                "São Paulo and Bogotá leadership teams adopt Israeli AI insights to scale responsibly.",
              icon: ChatsCircle
            }
          ].map(({ region, description, icon: Icon }) => (
            <article
              key={region}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-blue-700 dark:bg-white/10 dark:text-white">
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
              Review Israel pricing
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
