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
  MusicNotes,
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
  detail: string;
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

type Movement = {
  stage: string;
  copy: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Legacy statement intact",
    detail:
      "Hero preserves “Ways to accept payments from MLM Software in People’s Democratic Republic of Lebanon – LB” word for word from the WordPress export.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Gateway lineup",
    detail: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout.",
    icon: CreditCard
  },
  {
    title: "Module roster",
    detail:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual system.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal diaspora runway",
    summary: "Coordinate Lebanese diaspora in Paris, Dubai, and Montreal with compliant, transparent automation.",
    bullets: [
      "Multi currency module balances LBP, EUR, AED, and CAD with variance analytics for treasury.",
      "Ticket system module archives Banque du Liban compliance, sanction diligence, and donor reporting."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay retail trust",
    summary: "Deliver dependable ecommerce experiences for Beirut, Tripoli, and Sidon communities.",
    bullets: [
      "Auto responder issues Arabic, French, and English confirmations plus customs-ready documentation.",
      "Backup manager protects seasonal campaigns aligned to tourism and holiday schedules."
    ],
    icon: Sparkle
  },
  {
    name: "PayU regional mesh",
    summary: "Integrate PSPs supporting Levant, GCC, and European corridors without losing compliance clarity.",
    bullets: [
      "Emails module circulates AML, VAT, and data sovereignty updates with CFO narratives.",
      "KYC documentation vault stores distributor verification, PSP onboarding, and board approvals."
    ],
    icon: Target
  },
  {
    name: "Stripe experimentation studio",
    summary: "Prototype AI concierge services for creative industries, education, and wellness programmes.",
    bullets: [
      "Webhook telemetry keeps Shopify, WooCommerce, and Magento storefronts aligned with analytics.",
      "Ticket workflows deliver engineering pods AI-generated reproduction steps and context."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net enterprise lane",
    summary: "Blend North American acquiring with Lebanese governance expectations and sanction checks.",
    bullets: [
      "Multi-lingual system publishes policy digests across Arabic, French, and English stakeholders.",
      "Vaulted artefacts capture merchant approvals, sanction diligence, and legal documentation."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    summary: "Tokenised payments support pop-ups across galleries, coastal resorts, and hospitality venues.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker guardrails and liquidity controls.",
      "Backup manager records offline transactions for audit and donor transparency."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    summary: "Monitor EU, GCC, and North American conversion health with risk telemetry.",
    bullets: [
      "Currency analytics surface success rates, interchange pressure, and FX exposure for CFO review.",
      "Ticket system escalates Adyen risk signals anchored with distributor evidence."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    summary: "Distribute digital kits, AI enablement, and learning portals to diaspora and in-country partners.",
    bullets: [
      "Auto responder nurtures onboarding with multilingual checklists and milestone notes.",
      "ChatsCircle pods provide proactive outreach when telemetry highlights friction."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    label: "Multi currency system",
    description: "Balances LBP, USD, EUR, and AED inflows with variance analytics tuned to Lebanon’s treasury needs.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    description: "Routes compliance, logistics, and PSP cases with SLA dashboards, AI summaries, and audit trails.",
    icon: MapTrifold
  },
  {
    label: "Auto responder",
    description: "Delivers Arabic, French, and English communications instantly with AI-personalised sequences.",
    icon: Megaphone
  },
  {
    label: "E-voucher engine",
    description: "Supports cultural events, fundraising, and loyalty programmes with telemetry visibility.",
    icon: Sparkle
  },
  {
    label: "E-wallet manager",
    description: "Streams instant commissions and reimbursements with maker-checker oversight.",
    icon: Wallet
  },
  {
    label: "Backup manager",
    description: "Preserves storefront, automation, and compliance data against infrastructure disruption.",
    icon: ShieldCheck
  },
  {
    label: "Emails module",
    description: "Centralises campaign, transactional, and compliance messaging for leadership clarity.",
    icon: Megaphone
  },
  {
    label: "KYC documentation",
    description: "Maintains distributor identification, sanction diligence, and PSP onboarding artefacts.",
    icon: StackSimple
  },
  {
    label: "Multi-lingual system",
    description: "Synchronises Arabic, French, and English experiences across portals and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const MOVEMENTS: Movement[] = [
  {
    stage: "Movement 01",
    copy:
      "Interpret the WordPress brief—the headline, gateway list, and module references anchor the Lebanon programme.",
    icon: Buildings
  },
  {
    stage: "Movement 02",
    copy:
      "Wire the operating system—multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual experiences operate with AI telemetry.",
    icon: MusicNotes
  },
  {
    stage: "Movement 03",
    copy:
      "Activate gateways—PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout complete sandbox, localisation, and compliance.",
    icon: Target
  },
  {
    stage: "Movement 04",
    copy:
      "Optimise insight cadence—dashboards, AI summaries, and compliance artefacts highlight Cloud MLM Software’s thought leadership in Lebanon.",
    icon: ChartLineUp
  }
];

export const metadata: Metadata = {
  title: "Lebanon MLM Payment Gateways | Cloud MLM Software",
  description:
    "Transform the Lebanon payment gateway checklist with AI-enabled orchestration across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/lebanon"
  },
  openGraph: {
    title: "Lebanon MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Lebanon, elevated with multi currency intelligence, compliance governance, and AI telemetry."
  }
};

type LebanonPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function LebanonPaymentGatewayPage({ params }: LebanonPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-100 via-white to-amber-100 py-20 dark:from-rose-500/25 dark:via-slate-950 dark:to-amber-500/25">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(244,114,182,0.2),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(251,191,36,0.2),transparent_55%),radial-gradient(circle_at_55%_80%,rgba(59,130,246,0.18),transparent_55%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-rose-700 dark:border-white/20 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · Lebanon (LB)
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Lebanon MLM payment gateways orchestrated for creative resilience
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software keeps the WordPress promise intact while upgrading it with AI telemetry, compliance
                guardrails, and leadership-ready execution for Lebanon’s global story.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Connect with Beirut leadership
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-rose-500/60 text-rose-700 dark:text-white">
                <Link href={demoHref}>
                  Preview the Lebanon demo
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
                      <p className="text-sm text-muted-foreground dark:text-white/70">{highlight.detail}</p>
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
            Gateway narratives for Lebanon’s diaspora, hospitality, and innovation movements
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Each connector inherits automation, compliance, and AI guidance tuned for Lebanese leadership and partners.
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
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Modules from the legacy navigation, orchestrated together
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual experiences
              unite with AI telemetry for Lebanon.
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
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
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
            Four movements rooted in the legacy article
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground dark:text-white/70">
            Each stage keeps the WordPress heritage alive while delivering a modern, AI-enabled launch.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {MOVEMENTS.map((movement) => {
            const Icon = movement.icon;
            return (
              <article
                key={movement.stage}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                    {movement.stage}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{movement.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-950 via-rose-900 to-amber-900 py-20 text-white">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/70">
              The WordPress article emphasised global reach. Lebanon uses the same lens to partner with leaders across
              continents.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                region: "Middle East",
                description:
                  "Beirut collaborates with Dubai, Riyadh, and Doha on FX resilience, compliance guardrails, and automation flows.",
                icon: Compass
              },
              {
                region: "Europe",
                description:
                  "Paris and Berlin programmes exchange PSD2-ready playbooks and donor reporting frameworks with Lebanese leadership.",
                icon: Buildings
              },
              {
                region: "North America",
                description:
                  "Toronto and Montreal diaspora efforts align wallet policies and AI telemetry with Beirut HQ.",
                icon: Bank
              },
              {
                region: "Africa",
                description:
                  "Cairo and Nairobi partners collaborate on humanitarian compliance routines and field enablement.",
                icon: UsersThree
              },
              {
                region: "Asia-Pacific",
                description:
                  "Singapore and Sydney command centres reuse Lebanon’s automation scripts for resilient experiences.",
                icon: MapTrifold
              },
              {
                region: "South America",
                description:
                  "São Paulo and Buenos Aires operations leverage Lebanese AI insights to scale responsibly.",
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
            <Button asChild size="lg" className="gap-2 bg-white text-rose-900 hover:bg-slate-200">
              <Link href={pricingHref}>
                Review Lebanon pricing
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
