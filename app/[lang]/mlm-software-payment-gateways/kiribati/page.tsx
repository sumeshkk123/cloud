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
  Buildings,
  ChartLineUp,
  ChatsCircle,
  Compass,
  CreditCard,
  CurrencyCircleDollar,
  GlobeHemisphereEast,
  Lightning,
  Lifebuoy,
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

type HeroTile = {
  heading: string;
  copy: string;
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
  description: string;
  icon: IconType;
};

type Initiative = {
  title: string;
  detail: string;
  icon: IconType;
};

const HERO_TILES: HeroTile[] = [
  {
    heading: "Legacy headline kept intact",
    copy:
      "We keep “Ways to accept payments from MLM Software in People’s Democratic Republic of Kiribati – KI” exactly as the WordPress export states.",
    icon: GlobeHemisphereEast
  },
  {
    heading: "Gateway lineup",
    copy:
      "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout—verbatim from the legacy article.",
    icon: CreditCard
  },
  {
    heading: "Module ecosystem",
    copy:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual system.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal diaspora bridge",
    summary: "Serve Kiribati diaspora in Auckland, Sydney, and Honolulu while respecting FX and compliance.",
    bullets: [
      "Multi currency module reconciles Australian dollar, New Zealand dollar, and USD flows with KID reporting.",
      "Ticket system module stores Pacific regulation diligence and partner approvals."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay island trust",
    summary: "Deliver reliable checkout journeys for Tarawa communities with ocean-resilient outreach.",
    bullets: [
      "Auto responder issues bilingual updates referencing shipping windows and climate conditions.",
      "Backup manager safeguards campaigns aligned to seasonal supply schedules."
    ],
    icon: Sparkle
  },
  {
    name: "PayU regional mesh",
    summary: "Coordinate PSPs serving Oceania and Asia corridors while keeping compliance visibility.",
    bullets: [
      "Emails module circulates AML, customs, and duty-free policy updates with leadership commentary.",
      "KYC documentation vault stores distributor identification, shipping permits, and PSP onboarding packs."
    ],
    icon: Target
  },
  {
    name: "Stripe experimentation studio",
    summary: "Prototype AI concierge services supporting climate advocacy, education, and tourism programmes.",
    bullets: [
      "Webhook telemetry aligns Shopify, WooCommerce, and Magento storefronts with analytics.",
      "Ticket workflows elevate engineering incidents with AI-generated reproduction notes."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net enterprise lane",
    summary: "Blend North American acquiring with Kiribati leadership oversight and sanction diligence.",
    bullets: [
      "Multi-lingual system broadcasts policy digests across English and Gilbertese experiences.",
      "Vaulted artefacts capture merchant approvals, sanction checks, and board sign-offs."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    summary: "Tokenised payments empower hybrid outreach, island events, and digital pop-ups.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker controls.",
      "Backup manager records offline transactions from satellite-connected touchpoints."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    summary: "Monitor EU, US, and Pacific corridor success rates through one control tower.",
    bullets: [
      "Currency analytics surface interchange performance and decline ratios for CFO decisions.",
      "Ticket system escalates Adyen risk signals with context and distributor evidence attached."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    summary: "Distribute digital kits and AI enablement programmes to scattered atolls and global partners.",
    bullets: [
      "Auto responder nurtures onboarding with compliance checklists and shipping readiness tips.",
      "ChatsCircle pods intervene proactively when telemetry reveals latency or friction."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    label: "Multi currency system",
    description: "Balances AUD, NZD, USD, and EUR settlements with automated variance alerts and CFO dashboards.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    description: "Routes compliance, logistics, and PSP tickets with SLA dashboards, AI summaries, and audit trails.",
    icon: MapTrifold
  },
  {
    label: "Auto responder",
    description: "Delivers English and Gilbertese communications instantly with climate-contingent messaging.",
    icon: Megaphone
  },
  {
    label: "E-voucher engine",
    description: "Supports island outreach, fundraiser incentives, and climate advocacy with telemetry.",
    icon: Sparkle
  },
  {
    label: "E-wallet manager",
    description: "Streams instant commissions and reimbursements with maker-checker oversight.",
    icon: Wallet
  },
  {
    label: "Backup manager",
    description: "Preserves storefronts, automation flows, and compliance artefacts despite connectivity shifts.",
    icon: ShieldCheck
  },
  {
    label: "Emails module",
    description: "Centralises campaign, transactional, and compliance messaging for distributed leadership.",
    icon: Megaphone
  },
  {
    label: "KYC documentation",
    description: "Maintains distributor verification, maritime shipping approvals, and PSP onboarding artefacts.",
    icon: StackSimple
  },
  {
    label: "Multi-lingual system",
    description: "Synchronises English and Gilbertese experiences across portals, PDFs, and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const INITIATIVES: Initiative[] = [
  {
    title: "Ocean-resilient operations",
    detail:
      "Backup manager, ticketing, and automation workflows coordinate around satellite connectivity windows and climate alerts.",
    icon: Lifebuoy
  },
  {
    title: "Diaspora collaboration",
    detail:
      "Multi currency, PayPal, and Stripe telemetry keep diaspora contributions visible to Tarawa leadership in real time.",
    icon: Bank
  },
  {
    title: "Compliance guardianship",
    detail:
      "Ticket system and KYC documentation store customs, maritime, and AML artefacts ready for inspections and donors.",
    icon: ShieldCheck
  },
  {
    title: "AI enablement",
    detail:
      "Auto responder and analytics deliver insight-rich narratives to local councils and global partners for quick action.",
    icon: Lightning
  }
];

export const metadata: Metadata = {
  title: "Kiribati MLM Payment Gateways | Cloud MLM Software",
  description:
    "Modernise the Kiribati payment gateway checklist with AI-enabled orchestration across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/kiribati"
  },
  openGraph: {
    title: "Kiribati MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Kiribati, elevated with multi currency intelligence and resilience."
  }
};

type KiribatiPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function KiribatiPaymentGatewayPage({ params }: KiribatiPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-white to-cyan-100 py-20 dark:from-sky-500/25 dark:via-slate-950 dark:to-cyan-500/30">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(45,212,191,0.2),transparent_55%),radial-gradient(circle_at_55%_80%,rgba(147,197,253,0.22),transparent_55%)]" />
        <div className="container relative space-y-12">
          <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 dark:border-white/20 dark:bg-white/10 dark:text-white/80">
                Ways to accept payments · Kiribati (KI)
              </span>
              <div className="space-y-6 text-foreground dark:text-white">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Kiribati MLM payment gateways tuned for Pacific resilience
                </h1>
                <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                  Cloud MLM Software translates the WordPress promise into an AI-enabled operating system that respects
                  the island nation’s logistical realities and global reach.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href={contactHref}>
                    Meet the Tarawa command centre
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-sky-500/60 text-sky-700 dark:text-white">
                  <Link href={demoHref}>
                    Preview the Kiribati demo
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5">
              {HERO_TILES.map((tile) => {
                const Icon = tile.icon;
                return (
                  <article
                    key={tile.heading}
                    className="rounded-3xl border border-sky-500/30 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground dark:text-white">{tile.heading}</h2>
                        <p className="text-sm text-muted-foreground dark:text-white/70">{tile.copy}</p>
                      </div>
                    </div>
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
            Gateway narratives for Kiribati’s diaspora, climate, and tourism journeys
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Each connector from the WordPress export is reimagined with automation, compliance, and AI context suited to
            a distributed island nation.
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
                    <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.summary}</p>
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
              Modules from the legacy navigation, orchestrated for ocean resilience
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual touchpoints
              give Kiribati a single telemetry layer.
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
            Leadership initiatives for Kiribati’s payment narrative
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground dark:text-white/70">
            The programme stays agile despite geography, ensuring governance and AI insight for every partner.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {INITIATIVES.map((initiative) => {
            const Icon = initiative.icon;
            return (
              <article
                key={initiative.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground dark:text-white">{initiative.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{initiative.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-950 via-sky-950 to-cyan-900 py-20 text-white">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/70">
              The WordPress article celebrated global reach. Kiribati maintains that perspective to share playbooks and
              measure progress worldwide.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                region: "Oceania",
                description:
                  "Auckland, Sydney, and Suva programmes exchange automation rituals and logistics insights with Tarawa.",
                icon: Anchor
              },
              {
                region: "North America",
                description:
                  "Honolulu and Los Angeles diaspora journeys align wallet policies and donor updates via shared dashboards.",
                icon: Bank
              },
              {
                region: "Europe",
                description:
                  "London and Paris partners share PSD2 documentation and compliance narratives tailored to small island states.",
                icon: Buildings
              },
              {
                region: "Asia",
                description:
                  "Singapore and Tokyo command centres provide automation cadences and risk guardrails for climate advocacy.",
                icon: MapTrifold
              },
              {
                region: "Africa",
                description:
                  "Nairobi and Cape Town programmes coordinate humanitarian playbooks with Kiribati leadership.",
                icon: UsersThree
              },
              {
                region: "South America",
                description:
                  "São Paulo and Santiago teams reuse Kiribati’s AI insights to steer distributed island initiatives.",
                icon: ChatsCircle
              }
            ].map(({ region, description, icon: Icon }) => (
              <article key={region} className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-white">{region}</h3>
                </div>
                <p className="text-sm text-white/75">{description}</p>
              </article>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-sky-900 hover:bg-slate-200">
              <Link href={pricingHref}>
                Review Kiribati pricing
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-white/40 text-white hover:bg-white/10">
              <Link href={contactHref}>
                Talk to a strategist
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
