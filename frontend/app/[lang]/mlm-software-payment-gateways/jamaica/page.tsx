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
  name: string;
  description: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Legacy promise",
    description:
      "Hero text keeps the exact WordPress statement: “Ways to accept payments from MLM Software in People’s Democratic Republic of Jamaica – JM.”",
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
    name: "PayPal diaspora bridge",
    summary: "Enable diaspora remittances from New York, Toronto, and London to fund Jamaican programmes.",
    bullets: [
      "Multi currency module balances JMD, USD, and CAD settlements before treasury sign-off.",
      "Ticket system module stores Bank of Jamaica compliance artefacts and PSP correspondence."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay island trust",
    summary: "Deliver frictionless checkout for Kingston, Montego Bay, and Ocho Rios communities.",
    bullets: [
      "Auto responder issues bilingual confirmations and customs-ready documentation instantly.",
      "Backup manager safeguards festival promotions and AI concierge experiences."
    ],
    icon: Sparkle
  },
  {
    name: "PayU regional mesh",
    summary: "Coordinate Caribbean PSPs that support tourism, wellness, and retail partners.",
    bullets: [
      "Emails module circulates AML, FX, and tourism authority updates with executive commentary.",
      "KYC documentation vault tracks distributor verification artefacts with expiry reminders."
    ],
    icon: Target
  },
  {
    name: "Stripe innovation studio",
    summary: "Prototype AI hospitality bundles and digital academies for creative industries.",
    bullets: [
      "Webhook telemetry aligns Shopify, WooCommerce, and Magento storefronts with analytics.",
      "Ticket workflows provide engineering pods with reproducible logs and AI-generated summaries."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net enterprise lane",
    summary: "Blend US acquiring expectations with Jamaican leadership oversight.",
    bullets: [
      "Multi-lingual system distributes policy digests in English and Spanish for regional teams.",
      "Vaulted artefacts capture sanction checks, merchant approvals, and regulator sign-offs."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    summary: "Tokenised payments support resort experiences, direct sales kiosks, and field pop-ups.",
    bullets: [
      "E-wallet module enables instant commissions with maker-checker guardrails.",
      "Backup manager records offline transactions from events and island tours."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    summary: "Monitor EU, US, and LATAM conversion trends from a single command centre.",
    bullets: [
      "Currency analytics surface interchange costs and success rates for leadership dashboards.",
      "Ticket system attaches Adyen risk signals to distributor evidence automatically."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    summary: "Distribute digital kits, AI enablement, and learning subscriptions to island partners.",
    bullets: [
      "Auto responder nurtures onboarding with compliance checklists and go-live reminders.",
      "ChatsCircle pods engage proactively when telemetry highlights friction or drop-off."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    name: "Multi currency system",
    description: "Balances JMD, USD, and CAD inflows with variance alerts tied to treasury policy.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    description: "Routes compliance, PSP, and fulfilment cases with SLA dashboards and AI summaries.",
    icon: MapTrifold
  },
  {
    name: "Auto responder",
    description: "Delivers English and Spanish notifications and nurture journeys instantly.",
    icon: Megaphone
  },
  {
    name: "E-voucher engine",
    description: "Funds resort activations, incentive programmes, and referral campaigns.",
    icon: Sparkle
  },
  {
    name: "E-wallet manager",
    description: "Streams instant commissions with maker-checker approvals and liquidity controls.",
    icon: Wallet
  },
  {
    name: "Backup manager",
    description: "Protects storefront, AI experiences, and compliance artefacts with immutable snapshots.",
    icon: ShieldCheck
  },
  {
    name: "Emails module",
    description: "Centralises transactional, campaign, and compliance messaging.",
    icon: Megaphone
  },
  {
    name: "KYC documentation",
    description: "Organises distributor verification, PSP onboarding, and tax documentation.",
    icon: StackSimple
  },
  {
    name: "Multi-lingual system",
    description: "Keeps English, Spanish, and French Caribbean experiences aligned across portals.",
    icon: GlobeHemisphereEast
  }
];

export const metadata: Metadata = {
  title: "Jamaica MLM Payment Gateways | Cloud MLM Software",
  description:
    "Transform the Jamaica payment gateway checklist with AI-enabled orchestration across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/jamaica"
  },
  openGraph: {
    title: "Jamaica MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Jamaica, elevated with multi currency intelligence and governance."
  }
};

type JamaicaPageProps = {
  params: { lang: SupportedLocale };
};

export default function JamaicaPaymentGatewayPage({ params }: JamaicaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-100 via-white to-yellow-100 py-20 dark:from-emerald-400/20 dark:via-slate-950 dark:to-yellow-400/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(16,185,129,0.25),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(250,204,21,0.2),transparent_55%),radial-gradient(circle_at_60%_80%,rgba(59,130,246,0.15),transparent_55%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:border-white/20 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · Jamaica (JM)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground dark:text-white sm:text-5xl">
                Jamaica MLM payment gateways tuned for tourism and technology growth
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                We preserve the WordPress promise—“Ways to accept payments from MLM Software in People’s Democratic
                Republic of Jamaica – JM”—while orchestrating an AI-ready launch motion.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Connect with Kingston leadership
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-emerald-500/60 text-emerald-700 dark:text-white">
                <Link href={demoHref}>
                  Preview the Jamaica demo
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
                  className="rounded-3xl border border-emerald-500/30 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-4">
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
            Gateway plays for Jamaica’s tourism, wellness, and diaspora ecosystems
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Each connector from the WordPress page gains the automation, compliance, and AI guidance needed for
            Jamaican leadership.
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
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
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
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 dark:bg-white" aria-hidden />
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
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Modules from the legacy navigation, orchestrated for Jamaica
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticketing, automation, vouchers, wallets, backup, emails, KYC, and multilingual systems
              combine into a single governed stack with AI telemetry.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.name}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{module.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{module.description}</p>
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
            The WordPress article showcased global coverage. Jamaica keeps that lens to benchmark growth.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              region: "North America",
              description:
                "Kingston aligns with New York and Toronto diaspora programmes via shared dashboards and AI summaries.",
              icon: Bank
            },
            {
              region: "Europe",
              description:
                "London and Madrid partners exchange PSD2-ready playbooks and compliance insights with Jamaican leadership.",
              icon: Buildings
            },
            {
              region: "Asia",
              description:
                "Singapore and Tokyo command centres share automation cadences and wallet strategies with Jamaica.",
              icon: MapTrifold
            },
            {
              region: "Africa",
              description:
                "Accra and Lagos programmes collaborate on regulatory updates and AI enablement rituals.",
              icon: Compass
            },
            {
              region: "Oceania",
              description:
                "Sydney and Melbourne teams harmonise seasonal promotions with Caribbean leadership oversight.",
              icon: UsersThree
            },
            {
              region: "South America",
              description:
                "São Paulo and Bogotá operations leverage Jamaican AI insights to scale responsibly.",
              icon: ChatsCircle
            }
          ].map(({ region, description, icon: Icon }) => (
            <article
              key={region}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
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
              Review Jamaica pricing
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
