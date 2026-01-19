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
  headline: string;
  caption: string;
  icon: IconType;
};

type Gateway = {
  name: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Module = {
  label: string;
  detail: string;
  icon: IconType;
};

type RegionStory = {
  region: string;
  description: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Legacy pledge",
    headline: "Ways to accept payments from MLM Software in People’s Democratic Republic of Kazakhstan – KZ.",
    caption: "Hero statement stays verbatim from the WordPress export.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Gateway roster",
    headline: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout",
    caption: "The identical list found in the legacy page fuels our AI-enabled rebuild.",
    icon: CreditCard
  },
  {
    title: "Module suite",
    headline: "Multi currency · Ticket system · Auto responder · E-voucher · E-wallet · Backup manager · Emails · KYC documentation · Multi-lingual system",
    caption: "Every module mentioned in the WordPress navigation now operates as a unified stack.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal diaspora runway",
    description: "Empower Kazakh diaspora in Berlin, Seoul, and Chicago to fund entrepreneurial programmes.",
    bullets: [
      "Multi currency module balances KZT, EUR, KRW, and USD with treasury variance alerts.",
      "Ticket system module archives National Bank of Kazakhstan approvals and sanction checks."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay retail trust",
    description: "Deliver reliable checkout for Almaty, Astana, and Shymkent communities with bilingual outreach.",
    bullets: [
      "Auto responder confirms purchases in Kazakh and Russian with customs-ready documentation.",
      "Backup manager safeguards seasonal campaigns for Expo, energy, and agritech events."
    ],
    icon: Sparkle
  },
  {
    name: "PayU regional mesh",
    description: "Integrate PSPs serving Eurasian Economic Union markets without losing compliance visibility.",
    bullets: [
      "Emails module circulates AML, FX, and VAT policy updates with executive commentary.",
      "KYC documentation vault keeps distributor IDs, business licences, and PSP onboarding synced."
    ],
    icon: Target
  },
  {
    name: "Stripe experimentation studio",
    description: "Prototype AI concierge services for mining innovation, education, and fintech accelerators.",
    bullets: [
      "Webhook telemetry aligns Shopify, WooCommerce, and Magento storefronts with analytics.",
      "Ticket workflows surface engineering incidents with AI-generated reproduction steps."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net enterprise lane",
    description: "Blend North American acquiring with Kazakhstan’s digital development roadmap.",
    bullets: [
      "Multi-lingual system broadcasts policy updates in Kazakh, Russian, and English simultaneously.",
      "Vaulted artefacts capture sanction diligence, board approvals, and banking partner evidence."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    description: "Tokenised payments support hybrid events across energy corridors and tech hubs.",
    bullets: [
      "E-wallet module offers instant bonuses with maker-checker oversight.",
      "Backup manager secures offline transactions from expo halls and rural activations."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    description: "Compare EU, APAC, and North American conversion health through one command centre.",
    bullets: [
      "Currency analytics monitor interchange pressures, decline ratios, and FX exposure.",
      "Ticket system escalates Adyen risk signals with distributor evidence and compliance notes attached."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    description: "Distribute AI-assisted learning, digital kit launches, and online academies across regions.",
    bullets: [
      "Auto responder nurtures partner onboarding with bilingual playbooks and milestone reminders.",
      "ChatsCircle pods conduct proactive outreach based on telemetry-driven health scores."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    label: "Multi currency system",
    detail: "Balances KZT, USD, EUR, and CNY inflows with automated variance alerts for treasury teams.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    detail: "Routes compliance, PSP, and logistics cases with SLA dashboards, analytics, and AI summaries.",
    icon: MapTrifold
  },
  {
    label: "Auto responder",
    detail: "Delivers Kazakh and Russian notifications instantly, including policy updates and renewals.",
    icon: Megaphone
  },
  {
    label: "E-voucher engine",
    detail: "Supports Expo incentives, rural outreach, and innovation accelerators with telemetry.",
    icon: Sparkle
  },
  {
    label: "E-wallet manager",
    detail: "Streams instant commissions and reimbursements with maker-checker guardrails.",
    icon: Wallet
  },
  {
    label: "Backup manager",
    detail: "Secures storefronts, automation journeys, and compliance artefacts with immutable snapshots.",
    icon: ShieldCheck
  },
  {
    label: "Emails module",
    detail: "Centralises campaign, transactional, and regulatory communications for leadership oversight.",
    icon: Megaphone
  },
  {
    label: "KYC documentation",
    detail: "Maintains distributor verification, PSP onboarding, and regulatory approvals with reminders.",
    icon: StackSimple
  },
  {
    label: "Multi-lingual system",
    detail: "Synchronises Kazakh, Russian, and English experiences across portals and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const REGION_STORIES: RegionStory[] = [
  {
    region: "Central Asia",
    description:
      "Astana coordinates with Tashkent and Bishkek programmes through shared dashboards and policy digests.",
    icon: Compass
  },
  {
    region: "Europe",
    description:
      "Berlin, Warsaw, and London partners exchange PSD2-ready playbooks and AML routines with Kazakh leadership.",
    icon: Buildings
  },
  {
    region: "North America",
    description:
      "Chicago and Toronto diaspora cohorts align wallet policies and AI enablement rituals via shared telemetry.",
    icon: Bank
  },
  {
    region: "Asia-Pacific",
    description:
      "Singapore, Seoul, and Tokyo command centres share automation cadences to accelerate Kazakhstan’s rollout.",
    icon: MapTrifold
  },
  {
    region: "Middle East",
    description:
      "Dubai and Riyadh programmes collaborate on compliance resilience, cross-border FX, and AI insights.",
    icon: UsersThree
  },
  {
    region: "South America",
    description:
      "São Paulo and Santiago leadership teams reuse Kazakhstan’s AI telemetry to scale responsibly.",
    icon: ChatsCircle
  }
];

export const metadata: Metadata = {
  title: "Kazakhstan MLM Payment Gateways | Cloud MLM Software",
  description:
    "Rebuild the Kazakhstan payment gateway checklist with AI-enabled orchestration across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/kazakhstan"
  },
  openGraph: {
    title: "Kazakhstan MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Kazakhstan, elevated with multi currency intelligence and governance."
  }
};

type KazakhstanPageProps = {
  params: { lang: SupportedLocale };
};

export default function KazakhstanPaymentGatewayPage({ params }: KazakhstanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-white to-emerald-100 py-20 dark:from-sky-500/25 dark:via-slate-950 dark:to-emerald-500/25">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(14,165,233,0.2),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(34,197,94,0.18),transparent_55%),radial-gradient(circle_at_55%_80%,rgba(59,130,246,0.18),transparent_55%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 dark:border-white/20 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · Kazakhstan (KZ)
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Kazakhstan MLM payment gateways aligned to Eurasian innovation
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software keeps the WordPress pledge intact while elevating it with AI telemetry, compliance
                governance, and enterprise-grade execution for Kazakhstan’s leadership.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Connect with the Astana pod
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-sky-500/60 text-sky-700 dark:text-white">
                <Link href={demoHref}>
                  Preview the Kazakhstan demo
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
                  className="rounded-3xl border border-sky-500/30 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground dark:text-white">{highlight.title}</h2>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{highlight.headline}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground dark:text-white/50">
                        {highlight.caption}
                      </p>
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
            Gateway plays for Kazakhstan’s energy, fintech, and education sectors
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Each connector inherits the automation, compliance, and AI context that modern Kazakh leadership expects.
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
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground dark:text-white">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-sky-500 dark:bg-white" aria-hidden />
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
              Modules lifted from the legacy navigation, now orchestrated together
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual touchpoints
              gain a shared control tower with AI telemetry.
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
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
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
            Regional benchmarking keeps Kazakhstan’s leadership ahead
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground dark:text-white/70">
            The WordPress article listed a global view—we keep that lens so Kazakhstan can share playbooks across
            continents.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REGION_STORIES.map((story) => {
            const Icon = story.icon;
            return (
              <article
                key={story.region}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground dark:text-white">{story.region}</h3>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{story.description}</p>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="gap-2">
            <Link href={pricingHref}>
              Review Kazakhstan pricing
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
