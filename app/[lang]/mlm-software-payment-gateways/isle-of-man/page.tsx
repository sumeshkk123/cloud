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
  CubeTransparent,
  CurrencyCircleDollar,
  GlobeHemisphereEast,
  Handshake,
  Lightning,
  MapTrifold,
  MegaphoneSimple,
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
  heading: string;
  body: string;
  icon: IconType;
};

type Gateway = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Module = {
  name: string;
  summary: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    heading: "Legacy copy honoured",
    body:
      "The hero headline preserves “Ways to accept payments from MLM Software in People’s Democratic Republic of Isle of Man – IM.”",
    icon: GlobeHemisphereEast
  },
  {
    heading: "Gateway lineup",
    body:
      "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout—exactly from the WordPress export.",
    icon: CreditCard
  },
  {
    heading: "Module roster",
    body:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual system.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    title: "PayPal global bridge",
    description: "Support Isle of Man distributors transacting with UK, EU, and North American partners.",
    bullets: [
      "Multi currency module balances GBP, EUR, and USD settlements with variance alerts.",
      "Ticket system module stores OFT licences, AML reviews, and PSP correspondence."
    ],
    icon: CurrencyCircleDollar
  },
  {
    title: "Amazon Pay retail trust",
    description: "Deliver slick experiences tailored to ecommerce shoppers across Douglas and Ramsey.",
    bullets: [
      "Auto responder confirms fulfilment with bilingual messaging and AI-personalised tips.",
      "Backup manager safeguards promotional assets and seasonal bundles."
    ],
    icon: Sparkle
  },
  {
    title: "PayU corridor hub",
    description: "Enable EU corridors while aligning with local regulatory expectations.",
    bullets: [
      "Emails module broadcasts governance updates to compliance and finance executives.",
      "KYC documentation vault keeps distributor verification artefacts with automated renewals."
    ],
    icon: Target
  },
  {
    title: "Stripe experimentation lab",
    description: "Prototype AI concierge services and learning experiences for offshore financial hubs.",
    bullets: [
      "Webhook orchestration syncs Shopify, WooCommerce, and Magento storefronts with payment telemetry.",
      "Ticket workflows capture technical incidents with AI summaries and resolution playbooks."
    ],
    icon: Lightning
  },
  {
    title: "Authorize.Net enterprise lane",
    description: "Blend US acquiring with Isle of Man corporate governance and audit expectations.",
    bullets: [
      "Multi-lingual system delivers policy digests to UK, EU, and APAC stakeholders.",
      "Vaulted artefacts document sanction checks, merchant IDs, and leadership approvals."
    ],
    icon: ShieldCheck
  },
  {
    title: "Braintree omnichannel core",
    description: "Tokenised payments enable hybrid events and ferry terminal pop-up activations.",
    bullets: [
      "E-wallet module drives instant commissions with maker-checker guardrails.",
      "Backup manager secures offline transaction data from retail touchpoints."
    ],
    icon: Plugs
  },
  {
    title: "Adyen unified ledger",
    description: "Compare EU, UK, and Gulf success rates through a single control tower.",
    bullets: [
      "Currency analytics surface conversion health and interchange costs for leadership.",
      "Ticket system escalates Adyen risk insights with distributor evidence pre-attached."
    ],
    icon: ChartLineUp
  },
  {
    title: "2Checkout digital runway",
    description: "Distribute digital kits and AI enablement programmes to offshore partners.",
    bullets: [
      "Auto responder nurtures partner onboarding with compliance checklists.",
      "ChatsCircle pods handle proactive outreach triggered by payment telemetry."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    name: "Multi currency system",
    summary: "Reconciles GBP, EUR, and USD flows with treasury-ready reporting and alerts.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    summary: "Routes compliance, partner, and PSP cases with SLA dashboards and AI summaries.",
    icon: MapTrifold
  },
  {
    name: "Auto responder",
    summary: "Delivers bilingual notifications and AI-personalised nudges across stakeholders.",
    icon: Lightning
  },
  {
    name: "E-voucher engine",
    summary: "Supports ferry port activations, incentive campaigns, and referral programmes.",
    icon: Sparkle
  },
  {
    name: "E-wallet manager",
    summary: "Pushes instant commissions and kit reimbursements with maker-checker controls.",
    icon: Wallet
  },
  {
    name: "Backup manager",
    summary: "Preserves storefront, AI experience, and compliance artefacts for resilience.",
    icon: ShieldCheck
  },
  {
    name: "Emails module",
    summary: "Synchronises transactional, campaign, and compliance communication at scale.",
    icon: MegaphoneSimple
  },
  {
    name: "KYC documentation",
    summary: "Secures distributor verification, PSP onboarding, and AML evidence with monitoring.",
    icon: CubeTransparent
  },
  {
    name: "Multi-lingual system",
    summary: "Aligns English and partner-language experiences across portals and AI chatflows.",
    icon: GlobeHemisphereEast
  }
];

export const metadata: Metadata = {
  title: "Isle of Man MLM Payment Gateways | Cloud MLM Software",
  description:
    "Transform the Isle of Man payment gateway checklist into an AI-enabled launch with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/isle-of-man"
  },
  openGraph: {
    title: "Isle of Man MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Isle of Man, elevated for modern governance and AI discovery."
  }
};

type IsleOfManPageProps = {
  params: { lang: SupportedLocale };
};

export default function IsleOfManPaymentGatewayPage({ params }: IsleOfManPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(16,185,129,0.25),transparent_55%),radial-gradient(circle_at_75%_20%,rgba(148,163,184,0.25),transparent_55%),radial-gradient(circle_at_60%_80%,rgba(56,189,248,0.2),transparent_55%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/75">
              Ways to accept payments · Isle of Man (IM)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Isle of Man MLM payment gateways aligned to offshore excellence
              </h1>
              <p className="max-w-2xl text-base text-white/75">
                Cloud MLM Software honours the WordPress pledge—“Ways to accept payments from MLM Software in People’s
                Democratic Republic of Isle of Man – IM”—and translates it into an AI-ready corporate launch.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Meet the Douglas command centre
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-white/40 text-white hover:bg-white/10">
                <Link href={demoHref}>
                  Preview the Isle of Man demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article key={highlight.heading} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold">{highlight.heading}</h2>
                      <p className="text-sm text-white/70">{highlight.body}</p>
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
            Gateway plays for Isle of Man’s offshore, fintech, and tourism ecosystems
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Each connector from the WordPress page now includes automation, compliance, and AI telemetry guidance for
            Island leadership.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground dark:text-white">{gateway.title}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400 dark:bg-white" aria-hidden />
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
          <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
                Modules from the legacy navigation, unified into one offshore-ready stack
              </h2>
              <p className="text-sm text-muted-foreground dark:text-white/70">
                Multi currency, ticketing, automation, vouchers, wallets, backup, emails, KYC, and multilingual systems
                are orchestrated with AI insights for Isle of Man leadership.
              </p>
              <div className="rounded-3xl border border-border/60 bg-background/80 p-6 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-start gap-3">
                  <CubeTransparent className="h-8 w-8 text-primary dark:text-white" aria-hidden />
                  <div>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">Control tower view</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">
                      Douglas headquarters shares dashboards and AI narratives with field leaders in Ramsey and Peel.
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
                    key={module.name}
                    className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="text-base font-semibold text-foreground dark:text-white">{module.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{module.summary}</p>
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
            The WordPress article listed global coverage. We keep that lens so Isle of Man leadership benchmarks every
            corridor.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              region: "Europe",
              description:
                "Compare PSD2 readiness across Dublin, London, and Copenhagen programmes with AI dashboards.",
              icon: Buildings
            },
            {
              region: "North America",
              description:
                "Coordinate diaspora recruitment in Toronto and New York with Isle of Man wallet policies.",
              icon: Bank
            },
            {
              region: "Asia",
              description:
                "Singapore, Hong Kong, and Dubai command centres share automation routines through shared telemetry.",
              icon: MapTrifold
            },
            {
              region: "Africa",
              description:
                "Cape Town and Nairobi launches exchange compliance playbooks to accelerate resilient growth.",
              icon: Compass
            },
            {
              region: "Oceania",
              description:
                "Sydney and Auckland teams harmonise seasonal campaigns with Isle of Man leadership oversight.",
              icon: UsersThree
            },
            {
              region: "South America",
              description:
                "São Paulo and Buenos Aires leaders share AI enablement rituals with the offshore headquarters.",
              icon: Handshake
            }
          ].map(({ region, description, icon: Icon }) => (
            <article
              key={region}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300 dark:bg-white/10 dark:text-white">
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
              Review Isle of Man pricing
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
