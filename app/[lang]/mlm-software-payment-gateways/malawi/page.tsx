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

type Snapshot = {
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

type Step = {
  stage: string;
  copy: string;
  icon: IconType;
};

const SNAPSHOTS: Snapshot[] = [
  {
    title: "Legacy headline",
    detail:
      "We retain the WordPress copy: “Ways to accept payments from MLM Software in People’s Democratic Republic of Malawi – MW.”",
    icon: GlobeHemisphereEast
  },
  {
    title: "Gateway line-up",
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
    summary: "Connect Malawian diaspora in Johannesburg, London, and Washington DC with compliant automation.",
    bullets: [
      "Multi currency module reconciles MWK, ZAR, GBP, and USD with variance analytics for treasury and donor programmes.",
      "Ticket system module stores sanction diligence, Reserve Bank correspondences, and humanitarian evidence."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay commerce trust",
    summary: "Deliver reliable ecommerce for Lilongwe, Blantyre, and Mzuzu communities with bilingual updates.",
    bullets: [
      "Auto responder issues English and Chichewa confirmations with customs-ready documentation.",
      "Backup manager safeguards seasonal campaigns aligned to agriculture, education, and tourism initiatives."
    ],
    icon: Sparkle
  },
  {
    name: "PayU regional mesh",
    summary: "Integrate PSPs across SADC corridors while keeping compliance stakeholders aligned.",
    bullets: [
      "Emails module circulates AML, FX, and revenue authority updates with CFO guidance.",
      "KYC documentation vault manages distributor verification, PSP onboarding, and renewal reminders."
    ],
    icon: Target
  },
  {
    name: "Stripe experimentation studio",
    summary: "Prototype AI concierge services for cooperatives, education, and wellness programmes.",
    bullets: [
      "Webhook telemetry synchronises Shopify, WooCommerce, and Magento storefronts with analytics dashboards.",
      "Ticket workflows generate AI-authored reproduction logs for faster engineering resolution."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net enterprise lane",
    summary: "Blend North American acquiring with Malawi’s governance expectations and donor accountability.",
    bullets: [
      "Multi-lingual system broadcasts policy digests in English and Chichewa for leadership and field teams.",
      "Vaulted artefacts capture sanction checks, board approvals, and legal documentation per merchant profile."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    summary: "Tokenised payments empower rural outreach pop-ups, cooperative events, and hybrid education sessions.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker guardrails and payout policies.",
      "Backup manager records offline transactions from regions with intermittent connectivity."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    summary: "Monitor EU, African, and North American conversion health with risk telemetry and performance insights.",
    bullets: [
      "Currency analytics highlight success rates, interchange exposure, and FX volatility for CFO reviews.",
      "Ticket system escalates Adyen risk alerts enriched with distributor evidence and compliance commentary."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    summary: "Distribute digital kits, AI enablement, and remote trainings to partners across Malawi and the diaspora.",
    bullets: [
      "Auto responder nurtures onboarding with bilingual milestone checklists and action plans.",
      "ChatsCircle pods engage proactively when telemetry indicates friction or stalled adoption."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    label: "Multi currency system",
    description: "Balances MWK, USD, GBP, and ZAR with variance analytics and treasury-ready exports.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    description: "Routes compliance, PSP, logistics, and donor support cases with SLA dashboards and AI summaries.",
    icon: MapTrifold
  },
  {
    label: "Auto responder",
    description: "Delivers English and Chichewa communications instantly with AI-personalised sequences.",
    icon: Megaphone
  },
  {
    label: "E-voucher engine",
    description: "Supports cooperative incentives, education programmes, and tourism campaigns with telemetry.",
    icon: Sparkle
  },
  {
    label: "E-wallet manager",
    description: "Streams instant commissions and reimbursements with maker-checker oversight and payout controls.",
    icon: Wallet
  },
  {
    label: "Backup manager",
    description: "Captures immutable storefront, automation, and compliance artefacts even during connectivity gaps.",
    icon: ShieldCheck
  },
  {
    label: "Emails module",
    description: "Centralises transactional, campaign, and compliance messaging for leadership clarity.",
    icon: Megaphone
  },
  {
    label: "KYC documentation",
    description: "Maintains distributor verification, sanction diligence, and PSP onboarding artefacts with reminders.",
    icon: StackSimple
  },
  {
    label: "Multi-lingual system",
    description: "Keeps English and Chichewa experiences synchronised across portals and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const STEPS: Step[] = [
  {
    stage: "01 · Interpret the brief",
    copy:
      "The WordPress headline, gateway list, and module references are the blueprint for Malawi’s AI-enabled launch.",
    icon: Buildings
  },
  {
    stage: "02 · Orchestrate the stack",
    copy:
      "Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual experiences operate as one telemetry layer.",
    icon: Compass
  },
  {
    stage: "03 · Activate the gateways",
    copy:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout complete sandbox, localisation, and compliance testing.",
    icon: Target
  },
  {
    stage: "04 · Optimise insight cadence",
    copy:
      "Dashboards, AI summaries, and compliance artefacts keep Malawi’s leadership aligned with regulators, donors, and partner networks.",
    icon: ChartLineUp
  }
];

export const metadata: Metadata = {
  title: "Malawi MLM Payment Gateways | Cloud MLM Software",
  description:
    "Modernise the Malawi payment gateway checklist with AI telemetry, compliance guardrails, and automation across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/malawi"
  },
  openGraph: {
    title: "Malawi MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Malawi elevated with multi currency intelligence and leadership-ready insight."
  }
};

type MalawiPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function MalawiPaymentGatewayPage({ params }: MalawiPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-100 via-white to-amber-100 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(34,197,94,0.2),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(251,191,36,0.2),transparent_55%),radial-gradient(circle_at_55%_80%,rgba(56,189,248,0.16),transparent_55%)]" />
        <div className="container space-y-10">
          <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
                Ways to accept payments · Malawi (MW)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  Malawi’s payment gateways orchestrated for inclusive growth
                </h1>
                <p className="max-w-2xl text-base text-muted-foreground">
                  Cloud MLM Software keeps the original WordPress promise while enriching it with automation, compliance guardrails, and AI telemetry for agriculture, education, and diaspora programmes.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-emerald-600 text-white hover:bg-emerald-500">
                  <Link href={contactHref}>
                    Connect with the Lilongwe team
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-emerald-500/60 text-emerald-700 hover:bg-emerald-100">
                  <Link href={demoHref}>
                    Preview the Malawi demo
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5">
              {SNAPSHOTS.map((snapshot) => {
                const Icon = snapshot.icon;
                return (
                  <article
                    key={snapshot.title}
                    className="rounded-3xl border border-emerald-500/20 bg-white/85 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">{snapshot.title}</h2>
                        <p className="text-sm text-muted-foreground">{snapshot.detail}</p>
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
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Gateway plays for Malawi’s diaspora, agriculture, and education programmes
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Automation, compliance, and AI telemetry turn the WordPress connector list into an executive-ready payments programme.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground">{gateway.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/60 py-20">
        <div className="container space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Modules from the legacy navigation, orchestrated with telemetry
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
              Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual touchpoints form one resilient platform for Malawi’s leadership.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.label}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">{module.label}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{module.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Four-stage cadence grounded in the WordPress brief
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground">
            A disciplined rhythm keeps Malawi’s launch authentic, auditable, and AI-enabled.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.stage}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">{step.stage}</span>
                </div>
                <p className="text-sm text-muted-foreground">{step.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-950 via-emerald-900 to-amber-900 py-20 text-white">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/70">
              The WordPress article highlighted global coverage. Malawi continues that outlook—sharing playbooks with partners across Africa, Europe, and the Americas.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                region: "East Africa",
                description: "Lilongwe collaborates with Nairobi and Dar es Salaam on automation and compliance guardrails.",
                icon: Compass
              },
              {
                region: "Europe",
                description: "London and Brussels programmes share PSD2-ready playbooks and donor reporting frameworks.",
                icon: Buildings
              },
              {
                region: "North America",
                description: "Washington DC and Toronto diaspora networks align wallet policies and AI telemetry with Malawi leadership.",
                icon: Bank
              },
              {
                region: "Asia-Pacific",
                description: "Singapore and Sydney command centres reuse Malawi’s automation scripts for remote enablement.",
                icon: MapTrifold
              },
              {
                region: "Middle East",
                description: "Dubai and Doha offices collaborate on FX resilience and philanthropic governance.",
                icon: UsersThree
              },
              {
                region: "South America",
                description: "São Paulo and Buenos Aires operations leverage Malawi’s AI insights to scale responsibly.",
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
            <Button asChild size="lg" className="gap-2 bg-white text-emerald-900 hover:bg-emerald-100">
              <Link href={pricingHref}>
                Review Malawi pricing
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
