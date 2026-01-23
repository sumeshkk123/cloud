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

type RhythmStep = {
  stage: string;
  copy: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Legacy headline",
    description:
      "Hero keeps “Ways to accept payments from MLM Software in People’s Democratic Republic of Latvia – LV” verbatim from the WordPress export.",
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
    name: "PayPal Baltic bridge",
    summary: "Empower Latvia’s diaspora in London, Dublin, and Toronto to support education and growth programmes.",
    bullets: [
      "Multi currency module reconciles EUR, GBP, and CAD settlements with treasury guardrails.",
      "Ticket system module stores Bank of Latvia compliance artefacts and sanction diligence."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay ecommerce trust",
    summary: "Deliver frictionless checkout journeys for Riga, Liepāja, and Daugavpils shoppers.",
    bullets: [
      "Auto responder issues Latvian and English confirmations, warranty notes, and shipping updates.",
      "Backup manager safeguards seasonal campaigns aligned to holiday and tourism peaks."
    ],
    icon: Sparkle
  },
  {
    name: "PayU regional mesh",
    summary: "Integrate PSPs across the Baltics and EU with transparent governance.",
    bullets: [
      "Emails module circulates PSD2, AML, and VAT updates with CFO-friendly commentary.",
      "KYC documentation vault tracks distributor verification artefacts with renewal reminders."
    ],
    icon: Target
  },
  {
    name: "Stripe experimentation studio",
    summary: "Prototype AI concierge services, subscription portals, and design accelerators.",
    bullets: [
      "Webhook telemetry aligns Shopify, WooCommerce, and Magento storefronts with analytics.",
      "Ticket workflows provide AI-generated reproduction notes for engineering pods."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net enterprise lane",
    summary: "Blend North American acquiring with Latvian governance and board oversight.",
    bullets: [
      "Multi-lingual system broadcasts policy digests in Latvian, English, and Russian.",
      "Vaulted artefacts capture sanction checks, merchant approvals, and compliance evidence."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    summary: "Tokenised payments support pop-ups at festivals, innovation hubs, and tourist centres.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker guardrails.",
      "Backup manager records offline transactions from remote events for audit readiness."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    summary: "Monitor EU, UK, and US conversion health with risk and success indicators.",
    bullets: [
      "Currency analytics highlight interchange pressures, decline ratios, and FX exposure.",
      "Ticket system escalates Adyen risk alerts with distributor evidence attached."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    summary: "Distribute digital kits, AI enablement, and remote learning across Latvia and diaspora partners.",
    bullets: [
      "Auto responder nurtures onboarding with bilingual checklists and milestone reminders.",
      "ChatsCircle pods engage proactively when telemetry reveals friction."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    label: "Multi currency system",
    detail: "Balances EUR, GBP, USD, and NOK inflows with variance analytics for Latvian treasury teams.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    detail: "Routes compliance, PSP, and logistics cases with SLA dashboards, AI summaries, and audit trails.",
    icon: MapTrifold
  },
  {
    label: "Auto responder",
    detail: "Delivers Latvian, English, and Russian messaging instantly with personalised automation.",
    icon: Megaphone
  },
  {
    label: "E-voucher engine",
    detail: "Supports tourism packages, innovation incentives, and community promotions with telemetry.",
    icon: Sparkle
  },
  {
    label: "E-wallet manager",
    detail: "Streams instant commissions and reimbursements with maker-checker approvals.",
    icon: Wallet
  },
  {
    label: "Backup manager",
    detail: "Keeps storefronts, automation workflows, and compliance artefacts resilient against disruption.",
    icon: ShieldCheck
  },
  {
    label: "Emails module",
    detail: "Centralises campaign, transactional, and compliance messaging for leadership oversight.",
    icon: Megaphone
  },
  {
    label: "KYC documentation",
    detail: "Maintains distributor identities, sanction diligence, and PSP onboarding packages.",
    icon: StackSimple
  },
  {
    label: "Multi-lingual system",
    detail: "Keeps Latvian, English, and Russian experiences synchronised across portals and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const RHYTHM: RhythmStep[] = [
  {
    stage: "Stage 01",
    copy:
      "Interpret the WordPress brief—headline, gateway list, and module references become the blueprint for Latvia.",
    icon: Buildings
  },
  {
    stage: "Stage 02",
    copy:
      "Instrument the modules—multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual experiences share telemetry.",
    icon: Compass
  },
  {
    stage: "Stage 03",
    copy:
      "Activate gateways—PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout pass sandbox, localisation, and compliance.",
    icon: Target
  },
  {
    stage: "Stage 04",
    copy:
      "Optimise insight—dashboards, AI summaries, and compliance artefacts keep Latvian leadership ahead.",
    icon: ChartLineUp
  }
];

export const metadata: Metadata = {
  title: "Latvia MLM Payment Gateways | Cloud MLM Software",
  description:
    "Upgrade the Latvia payment gateway checklist with AI-enabled orchestration across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/latvia"
  },
  openGraph: {
    title: "Latvia MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Latvia, elevated with multi currency intelligence and compliance governance."
  }
};

type LatviaPageProps = {
  params: { lang: SupportedLocale };
};

export default function LatviaPaymentGatewayPage({ params }: LatviaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-violet-100 py-20 dark:from-slate-900 dark:via-slate-950 dark:to-violet-500/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(99,102,241,0.2),transparent_55%),radial-gradient(circle_at_78%_20%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_55%_80%,rgba(236,72,153,0.18),transparent_55%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-violet-700 dark:border-white/20 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · Latvia (LV)
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Latvia MLM payment gateways orchestrated for Baltic excellence
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software keeps the WordPress promise intact while delivering AI telemetry, compliance guardrails,
                and leadership-ready narratives for Latvia’s innovation landscape.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Connect with Riga leadership
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-violet-500/60 text-violet-700 dark:text-white">
                <Link href={demoHref}>
                  Preview the Latvia demo
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
                  className="rounded-3xl border border-violet-500/30 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/15 text-violet-700 dark:bg-white/10 dark:text-white">
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
            Gateway plays for Latvia’s innovation, tourism, and diaspora programmes
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Each connector inherits automation, compliance, and AI context tailored to Latvian leadership.
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
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/15 text-violet-700 dark:bg-white/10 dark:text-white">
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
                      <span className="mt-2 h-2 w-2 rounded-full bg-violet-500 dark:bg-white" aria-hidden />
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
              Modules from the legacy navigation, orchestrated as one telemetry-rich stack
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual experiences
              operate together with AI summaries for Latvia.
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
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/15 text-violet-700 dark:bg-white/10 dark:text-white">
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
            Programme rhythm grounded in WordPress heritage
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground dark:text-white/70">
            Four movements keep Latvia’s gateway launch disciplined, auditable, and AI-enabled.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {RHYTHM.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.stage}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/15 text-violet-700 dark:bg-white/10 dark:text-white">
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

      <section className="bg-gradient-to-br from-slate-950 via-violet-900 to-slate-950 py-20 text-white">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/70">
              The WordPress article emphasised global scope. Latvia keeps that viewpoint to exchange playbooks across the
              world.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                region: "Baltics",
                description:
                  "Riga partners with Vilnius and Tallinn on automation cadences, treasury insights, and compliance rituals.",
                icon: Compass
              },
              {
                region: "Europe",
                description:
                  "London and Berlin programmes share PSD2-ready playbooks and AI narratives with Latvian leadership.",
                icon: Buildings
              },
              {
                region: "North America",
                description:
                  "Toronto and Chicago diaspora efforts align wallet policies and telemetries with Riga HQ.",
                icon: Bank
              },
              {
                region: "Nordics",
                description:
                  "Stockholm and Helsinki teams collaborate on compliance resilience and remote enablement.",
                icon: UsersThree
              },
              {
                region: "Asia-Pacific",
                description:
                  "Singapore and Tokyo programmes reuse Latvia’s automation frameworks and risk guardrails.",
                icon: MapTrifold
              },
              {
                region: "South America",
                description:
                  "São Paulo and Buenos Aires operations leverage Latvian AI insights to scale responsibly.",
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
            <Button asChild size="lg" className="gap-2 bg-white text-violet-900 hover:bg-slate-200">
              <Link href={pricingHref}>
                Review Latvia pricing
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
