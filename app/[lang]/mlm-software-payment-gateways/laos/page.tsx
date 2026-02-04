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
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Module = {
  title: string;
  detail: string;
  icon: IconType;
};

type Step = {
  stage: string;
  copy: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    label: "Legacy statement",
    description:
      "Hero retains “Ways to accept payments from MLM Software in People’s Democratic Republic of Laos – LA” exactly as the WordPress export states.",
    icon: GlobeHemisphereEast
  },
  {
    label: "Gateway roster",
    description: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout.",
    icon: CreditCard
  },
  {
    label: "Module arsenal",
    description:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual system.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal Mekong bridge",
    summary: "Enable Lao diaspora in Bangkok, Paris, and Sydney to fund education, tourism, and wellness programmes.",
    bullets: [
      "Multi currency module reconciles LAK, THB, EUR, and AUD prior to treasury approval.",
      "Ticket system module stores Bank of the Lao PDR compliance artefacts and sanction diligence."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay retail trust",
    summary: "Deliver dependable ecommerce for Vientiane, Luang Prabang, and Pakse communities with bilingual touchpoints.",
    bullets: [
      "Auto responder issues Lao and English notifications with customs-ready documentation.",
      "Backup manager safeguards seasonal campaigns around tourist seasons and cultural festivals."
    ],
    icon: Sparkle
  },
  {
    name: "PayU regional mesh",
    summary: "Integrate PSPs serving ASEAN corridors without losing compliance clarity.",
    bullets: [
      "Emails module circulates AML, VAT, and digital economy updates with CFO commentary.",
      "KYC documentation vault tracks distributor verification, PSP onboarding, and renewal alerts."
    ],
    icon: Target
  },
  {
    name: "Stripe experimentation studio",
    summary: "Prototype AI concierge services for tourism, retail, and education programmes with rapid iteration.",
    bullets: [
      "Webhook telemetry aligns Shopify, WooCommerce, and Magento storefronts with analytics.",
      "Ticket workflows provide engineering pods with AI-authored reproduction steps."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net enterprise lane",
    summary: "Blend North American acquiring with Lao leadership oversight and sanction diligence.",
    bullets: [
      "Multi-lingual system pushes policy digests in Lao, English, and French simultaneously.",
      "Vaulted artefacts capture merchant approvals, sanction checks, and board sign-offs."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    summary: "Tokenised payments support hybrid events, tourism pop-ups, and digital experiences.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker guardrails.",
      "Backup manager records offline device transactions for audit-ready evidence."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    summary: "Monitor EU, US, and ASEAN conversion performance from a single command centre.",
    bullets: [
      "Currency analytics highlight success rates, interchange pressure, and FX exposure for CFO review.",
      "Ticket system escalates Adyen risk alerts with distributor evidence attached."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    summary: "Distribute digital kits, AI enablement, and remote learning across Laos and its global partners.",
    bullets: [
      "Auto responder nurtures partner onboarding with bilingual checklists and milestone reminders.",
      "ChatsCircle pods reach out proactively when telemetry reveals friction."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    title: "Multi currency system",
    detail: "Balances LAK, THB, USD, and EUR settlements with variance alerts tailored to Lao treasury teams.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    detail: "Routes compliance, logistics, and PSP cases with SLA dashboards, AI summaries, and audit trails.",
    icon: MapTrifold
  },
  {
    title: "Auto responder",
    detail: "Delivers Lao and English communications instantly with AI-personalised updates.",
    icon: Megaphone
  },
  {
    title: "E-voucher engine",
    detail: "Supports tourism offers, education incentives, and regional promotions with telemetry.",
    icon: Sparkle
  },
  {
    title: "E-wallet manager",
    detail: "Streams instant commissions and reimbursements with maker-checker controls.",
    icon: Wallet
  },
  {
    title: "Backup manager",
    detail: "Safeguards storefront, automation, and compliance artefacts despite connectivity shifts.",
    icon: ShieldCheck
  },
  {
    title: "Emails module",
    detail: "Centralises transactional, campaign, and compliance messaging for leadership clarity.",
    icon: Megaphone
  },
  {
    title: "KYC documentation",
    detail: "Maintains distributor verification, sanction diligence, and PSP onboarding packages with reminders.",
    icon: StackSimple
  },
  {
    title: "Multi-lingual system",
    detail: "Keeps Lao, English, and French experiences aligned across portals and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const STEPS: Step[] = [
  {
    stage: "01 · Interpret the brief",
    copy:
      "We anchor the programme in the WordPress headline, gateway list, and module references the legacy article highlighted.",
    icon: Buildings
  },
  {
    stage: "02 · Instrument the stack",
    copy:
      "Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual touchpoints receive AI telemetry and compliance guardrails.",
    icon: Compass
  },
  {
    stage: "03 · Activate the gateways",
    copy:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout pass sandbox, localisation, and compliance checks.",
    icon: Target
  },
  {
    stage: "04 · Optimise insight cadence",
    copy:
      "Executives receive dashboards, AI summaries, and compliance artefacts that position Cloud MLM Software as Laos’ thought leader.",
    icon: ChartLineUp
  }
];

export const metadata: Metadata = {
  title: "Laos MLM Payment Gateways | Cloud MLM Software",
  description:
    "Elevate the Laos payment gateway checklist with AI-enabled orchestration across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/laos"
  },
  openGraph: {
    title: "Laos MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Laos, enhanced with multi currency intelligence and compliance governance."
  }
};

type LaosPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function LaosPaymentGatewayPage({ params }: LaosPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-100 via-white to-lime-100 py-20 dark:from-rose-500/25 dark:via-slate-950 dark:to-lime-500/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(244,114,182,0.2),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(132,204,22,0.2),transparent_55%),radial-gradient(circle_at_55%_80%,rgba(59,130,246,0.18),transparent_55%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-rose-700 dark:border-white/20 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · Laos (LA)
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Laos MLM payment gateways orchestrated for Mekong momentum
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software honours the WordPress legacy while delivering AI telemetry, compliance guardrails, and
                leadership-ready narratives for Laos’ digital growth.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Connect with Vientiane leadership
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-rose-500/60 text-rose-700 dark:text-white">
                <Link href={demoHref}>
                  Preview the Laos demo
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
                  className="rounded-3xl border border-rose-500/30 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
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
            Gateway tactics designed for Laos’ tourism, retail, and diaspora journeys
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Each connector from the WordPress page gains automation, compliance, and AI narratives tailored to Lao
            leadership and field teams.
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
              Modules from the legacy navigation, now orchestrated as one stack
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual experiences
              align with AI telemetry across Laos.
            </p>
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
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
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
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Four-step journey rooted in the legacy page
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground dark:text-white/70">
            We keep the WordPress heritage alive while executing with modern telemetry and governance.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.stage}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                    {step.stage}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{step.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-rose-900 py-20 text-white">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/70">
              The WordPress article celebrated worldwide availability. Laos continues that lens to partner with peers
              across continents.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                region: "ASEAN",
                description:
                  "Bangkok, Hanoi, and Phnom Penh programmes share automation cadences and compliance guardrails with Laos.",
                icon: Compass
              },
              {
                region: "Europe",
                description:
                  "Paris and Berlin partners exchange PSD2-ready playbooks and treasury insights with Lao leadership.",
                icon: Buildings
              },
              {
                region: "North America",
                description:
                  "Los Angeles and Toronto diaspora hubs align wallet policies and AI telemetry with Vientiane.",
                icon: Bank
              },
              {
                region: "Middle East",
                description:
                  "Dubai and Doha programmes collaborate on FX resilience and compliance routines.",
                icon: UsersThree
              },
              {
                region: "Oceania",
                description:
                  "Sydney and Auckland partners reuse Laos’ automation scripts for remote enablement.",
                icon: MapTrifold
              },
              {
                region: "South America",
                description:
                  "São Paulo and Santiago operations leverage Lao AI insights to scale responsibly.",
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
                Review Laos pricing
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
