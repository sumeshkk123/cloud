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
  Backpack,
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
  Mountain,
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

type HeroBlock = {
  heading: string;
  detail: string;
  icon: IconType;
};

type Gateway = {
  name: string;
  focus: string;
  bullets: string[];
  icon: IconType;
};

type Module = {
  label: string;
  description: string;
  icon: IconType;
};

type Journey = {
  stage: string;
  title: string;
  copy: string;
  icon: IconType;
};

const HERO_BLOCKS: HeroBlock[] = [
  {
    heading: "Legacy headline intact",
    detail:
      "Hero retains “Ways to accept payments from MLM Software in People’s Democratic Republic of Kyrgyzstan – KG” exactly as the WordPress export states.",
    icon: GlobeHemisphereEast
  },
  {
    heading: "Gateway roster honoured",
    detail:
      "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout—verbatim from the legacy page.",
    icon: CreditCard
  },
  {
    heading: "Module ecosystem",
    detail:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual system.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal diaspora runway",
    focus: "Empower Kyrgyz diaspora in Moscow, Istanbul, and New York to fund education and remittance programmes.",
    bullets: [
      "Multi currency module reconciles KGS, RUB, TRY, and USD settlements before treasury sign-off.",
      "Ticket system module stores National Bank compliance artefacts and sanction diligence."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay digital trust",
    focus: "Deliver frictionless ecommerce for Bishkek, Osh, and Karakol communities.",
    bullets: [
      "Auto responder provides bilingual notifications referencing customs and logistics status.",
      "Backup manager safeguards seasonal campaigns aligned to tourism and academic cycles."
    ],
    icon: Sparkle
  },
  {
    name: "PayU regional mesh",
    focus: "Integrate PSPs serving Eurasian Economic Union corridors with transparent governance.",
    bullets: [
      "Emails module circulates AML, FX, and VAT updates with CFO commentary.",
      "KYC documentation vault tracks distributor verification, merchant IDs, and expiry reminders."
    ],
    icon: Target
  },
  {
    name: "Stripe experimentation studio",
    focus: "Prototype AI concierge services for tourism, agriculture, and microfinance initiatives.",
    bullets: [
      "Webhook telemetry keeps Shopify, WooCommerce, and Magento storefronts synchronized with analytics.",
      "Ticket workflows produce AI generated reproduction notes for engineering resolution."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net enterprise lane",
    focus: "Blend North American acquiring with Kyrgyzstani governance requirements.",
    bullets: [
      "Multi-lingual system sends policy digests in Kyrgyz, Russian, and English simultaneously.",
      "Vaulted artefacts capture sanction checks, board approvals, and partner evidence."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    focus: "Tokenised payments empower pop-ups in mountain resorts and urban innovation hubs.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker guardrails.",
      "Backup manager records offline transactions from mountainous regions with limited connectivity."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    focus: "Monitor EU, MENA, and Eurasian conversion health from a unified command centre.",
    bullets: [
      "Currency analytics highlight interchange exposure, decline ratios, and FX volatility.",
      "Ticket system escalates Adyen risk alerts with distributor evidence attached."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    focus: "Distribute digital kits, AI training, and remote learning across rural regions.",
    bullets: [
      "Auto responder nurtures partner onboarding with bilingual checklists and milestone updates.",
      "ChatsCircle pods offer proactive outreach when telemetry reveals latency or drop-off."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    label: "Multi currency system",
    description: "Balances KGS, USD, EUR, and RUB inflows with automated variance alerts and CFO dashboards.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    description: "Routes compliance, logistics, and PSP cases with SLA dashboards, AI summaries, and audit trails.",
    icon: MapTrifold
  },
  {
    label: "Auto responder",
    description: "Delivers Kyrgyz, Russian, and English messaging instantly with AI-personalised nudges.",
    icon: Megaphone
  },
  {
    label: "E-voucher engine",
    description: "Supports tourism packages, artisan programmes, and education incentives with telemetry.",
    icon: Sparkle
  },
  {
    label: "E-wallet manager",
    description: "Streams instant commissions and reimbursements with maker-checker guardrails.",
    icon: Wallet
  },
  {
    label: "Backup manager",
    description: "Stores immutable snapshots of storefronts, automation, and compliance data for continuity.",
    icon: ShieldCheck
  },
  {
    label: "Emails module",
    description: "Centralises transactional, campaign, and compliance messaging for leadership oversight.",
    icon: Megaphone
  },
  {
    label: "KYC documentation",
    description: "Maintains distributor IDs, sanction checks, and PSP onboarding packages with reminder workflows.",
    icon: StackSimple
  },
  {
    label: "Multi-lingual system",
    description: "Keeps Kyrgyz, Russian, and English experiences synchronized across portals and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const JOURNEY: Journey[] = [
  {
    stage: "01",
    title: "Interpret the heritage page",
    copy:
      "The WordPress headline, gateway list, and module references become the blueprint for Kyrgyzstan’s launch.",
    icon: Backpack
  },
  {
    stage: "02",
    title: "Wire the platform",
    copy:
      "Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual touchpoints interlock with telemetry.",
    icon: Mountain
  },
  {
    stage: "03",
    title: "Activate gateways",
    copy:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout complete sandbox, localisation, and compliance testing.",
    icon: Target
  },
  {
    stage: "04",
    title: "Optimise leadership insight",
    copy:
      "Executives receive AI summaries, dashboards, and compliance artefacts showing Cloud MLM Software’s thought leadership in Kyrgyzstan.",
    icon: ChartLineUp
  }
];

export const metadata: Metadata = {
  title: "Kyrgyzstan MLM Payment Gateways | Cloud MLM Software",
  description:
    "Reimagine the Kyrgyzstan payment gateway checklist with AI-enabled orchestration across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/kyrgyzstan"
  },
  openGraph: {
    title: "Kyrgyzstan MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Kyrgyzstan, elevated with multi currency intelligence, ticket governance, and AI telemetry."
  }
};

type KyrgyzstanPageProps = {
  params: { lang: SupportedLocale };
};

export default function KyrgyzstanPaymentGatewayPage({ params }: KyrgyzstanPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-emerald-100 py-20 dark:from-indigo-500/25 dark:via-slate-950 dark:to-emerald-500/25">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(99,102,241,0.2),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_55%_80%,rgba(34,197,94,0.18),transparent_55%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-700 dark:border-white/20 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · Kyrgyzstan (KG)
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Kyrgyzstan MLM payment gateways aligned to mountain-speed agility
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software translates the WordPress promise into a modern, AI-ready launch that respects the
                nation’s geography, diaspora, and regulatory context.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Coordinate with the Bishkek pod
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-indigo-500/60 text-indigo-700 dark:text-white">
                <Link href={demoHref}>
                  Preview the Kyrgyzstan demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {HERO_BLOCKS.map((block) => {
              const Icon = block.icon;
              return (
                <article
                  key={block.heading}
                  className="rounded-3xl border border-indigo-500/30 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground dark:text-white">{block.heading}</h2>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{block.detail}</p>
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
            Gateway plays for Kyrgyzstan’s tourism, agriculture, and diaspora programmes
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Each connector inherits compliance, automation, and AI narratives designed for Kyrgyz leadership and
            frontline teams.
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
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-700 dark:bg-white/10 dark:text-white">
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

      <section className="bg-muted/60 py-20 dark:bg-slate-950">
        <div className="container space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Modules from the legacy navigation, now orchestrated as one platform
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual touchpoints
              align with AI telemetry for Kyrgyzstan.
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
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-700 dark:bg-white/10 dark:text-white">
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
            Four-stage journey rooted in WordPress heritage
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground dark:text-white/70">
            Clear milestones ensure the legacy copy evolves into an AI-ready launch without losing authenticity.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {JOURNEY.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.stage}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                    Stage {step.stage}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{step.title}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{step.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-emerald-900 py-20 text-white">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/70">
              The WordPress article emphasised worldwide reach. Kyrgyzstan uses the same view to coordinate with peers
              across continents.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                region: "Central Asia",
                description:
                  "Bishkek aligns with Almaty and Tashkent programmes via shared dashboards and policy digests.",
                icon: Compass
              },
              {
                region: "Europe",
                description:
                  "Berlin and Warsaw partners exchange PSD2-ready playbooks and treasury insights with Kyrgyz leadership.",
                icon: Buildings
              },
              {
                region: "North America",
                description:
                  "New York and Toronto diaspora hubs align wallet policies and AI telemetry with Bishkek.",
                icon: Bank
              },
              {
                region: "Middle East",
                description:
                  "Dubai and Riyadh programmes collaborate on compliance resilience and FX guardrails.",
                icon: UsersThree
              },
              {
                region: "Asia-Pacific",
                description:
                  "Singapore and Seoul command centres share automation cadences for remote enablement.",
                icon: MapTrifold
              },
              {
                region: "South America",
                description:
                  "São Paulo and Santiago teams adopt Kyrgyzstan’s AI insights to scale responsibly.",
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
            <Button asChild size="lg" className="gap-2 bg-white text-indigo-900 hover:bg-slate-200">
              <Link href={pricingHref}>
                Review Kyrgyzstan pricing
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
