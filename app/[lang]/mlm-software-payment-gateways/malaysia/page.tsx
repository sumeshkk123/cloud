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
  heading: string;
  text: string;
  icon: IconType;
};

type Gateway = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Module = {
  label: string;
  detail: string;
  icon: IconType;
};

type Stage = {
  name: string;
  note: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    heading: "Legacy headline",
    text:
      "WordPress copy stays intact: “Ways to accept payments from MLM Software in People’s Democratic Republic of Malaysia – MY.”",
    icon: GlobeHemisphereEast
  },
  {
    heading: "Gateway roster",
    text: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout.",
    icon: CreditCard
  },
  {
    heading: "Module ecosystem",
    text:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, multi-lingual system.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    title: "PayPal e-commerce runway",
    summary: "Connect Malaysia’s diaspora and digital buyers across Kuala Lumpur, Singapore, and London.",
    bullets: [
      "Multi currency module reconciles MYR, SGD, GBP, and USD with treasury-ready variance alerts.",
      "Ticket system module stores Bank Negara correspondence, sanction diligence, and donor reporting artefacts."
    ],
    icon: CurrencyCircleDollar
  },
  {
    title: "Amazon Pay digital trust",
    summary: "Deliver polished checkout experiences for Klang Valley tech corridors and tourism hubs.",
    bullets: [
      "Auto responder issues Malay, English, and Mandarin confirmations with customs-ready documentation.",
      "Backup manager protects seasonal campaigns aligned to retail festivals and halal tourism drives."
    ],
    icon: Sparkle
  },
  {
    title: "PayU regional mesh",
    summary: "Integrate PSPs across ASEAN corridors without losing compliance visibility.",
    bullets: [
      "Emails module circulates AML, e-invoicing, and FX policy updates with CFO commentary.",
      "KYC documentation vault manages distributor verification, PSP onboarding, and renewal reminders."
    ],
    icon: Target
  },
  {
    title: "Stripe experimentation studio",
    summary: "Prototype AI concierge services for SaaS, education, and wellness communities.",
    bullets: [
      "Webhook telemetry synchronises Shopify, WooCommerce, and Magento storefronts into unified analytics.",
      "Ticket workflows provide engineering pods with AI-authored reproduction logs and severity insights."
    ],
    icon: Lightning
  },
  {
    title: "Authorize.Net enterprise lane",
    summary: "Blend North American acquiring with Malaysia’s governance and board oversight requirements.",
    bullets: [
      "Multi-lingual system publishes policy digests across Malay, English, and Mandarin stakeholders.",
      "Vaulted artefacts capture sanction checks, merchant approvals, and legal documentation per profile."
    ],
    icon: ShieldCheck
  },
  {
    title: "Braintree omnichannel core",
    summary: "Tokenised payments empower lifestyle pop-ups, hybrid events, and digital partner experiences.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker approvals and payout controls.",
      "Backup manager records offline transactions from rural outreach and experiential activations."
    ],
    icon: Plugs
  },
  {
    title: "Adyen unified ledger",
    summary: "Monitor EU, GCC, and North American conversion health from one executive dashboard.",
    bullets: [
      "Currency analytics highlight success rates, interchange exposure, and FX volatility for CFO review.",
      "Ticket system escalates Adyen risk alerts enriched with distributor evidence and compliance commentary."
    ],
    icon: ChartLineUp
  },
  {
    title: "2Checkout digital runway",
    summary: "Distribute digital kits, AI enablement, and remote trainings to partners across Malaysia and the diaspora.",
    bullets: [
      "Auto responder nurtures onboarding journeys with milestone checklists and multilingual playbooks.",
      "ChatsCircle pods trigger proactive outreach when telemetry surfaces friction or conversion dips."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    label: "Multi currency system",
    detail: "Balances MYR, USD, SGD, and EUR with variance analytics and treasury-ready exports.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    detail: "Routes compliance, PSP, logistics, and donor cases with SLA dashboards and AI summaries.",
    icon: MapTrifold
  },
  {
    label: "Auto responder",
    detail: "Delivers Malay, English, and Mandarin communications instantly with AI-personalised sequencing.",
    icon: Megaphone
  },
  {
    label: "E-voucher engine",
    detail: "Supports loyalty programmes, tourism incentives, and education campaigns with telemetry.",
    icon: Sparkle
  },
  {
    label: "E-wallet manager",
    detail: "Streams instant commissions with maker-checker approvals and payout guardrails.",
    icon: Wallet
  },
  {
    label: "Backup manager",
    detail: "Captures immutable storefront, automation, and compliance artefacts for regulatory confidence.",
    icon: ShieldCheck
  },
  {
    label: "Emails module",
    detail: "Centralises transactional, campaign, and compliance messaging for leadership clarity.",
    icon: Megaphone
  },
  {
    label: "KYC documentation",
    detail: "Maintains distributor verification, sanction diligence, and PSP onboarding packages with reminders.",
    icon: StackSimple
  },
  {
    label: "Multi-lingual system",
    detail: "Keeps Malay, English, and Mandarin experiences synchronised across portals and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const STAGES: Stage[] = [
  {
    name: "Stage 01",
    note: "Interpret the WordPress brief—the headline, gateway roster, and module references remain the blueprint.",
    icon: Buildings
  },
  {
    name: "Stage 02",
    note: "Orchestrate the modules—multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual touchpoints operate under one telemetry layer.",
    icon: Compass
  },
  {
    name: "Stage 03",
    note: "Activate the gateways—PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout complete sandbox, localisation, and compliance testing.",
    icon: Target
  },
  {
    name: "Stage 04",
    note: "Optimise leadership insight—dashboards, AI summaries, and compliance artefacts keep Malaysia’s leadership aligned with regulators and partners.",
    icon: ChartLineUp
  }
];

export const metadata: Metadata = {
  title: "Malaysia MLM Payment Gateways | Cloud MLM Software",
  description:
    "Elevate the Malaysia payment gateway checklist with automation, compliance guardrails, and AI telemetry across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/malaysia"
  },
  openGraph: {
    title: "Malaysia MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Malaysia enriched with multi currency intelligence and leadership-ready insight."
  }
};

type MalaysiaPageProps = {
  params: { lang: SupportedLocale };
};

export default function MalaysiaPaymentGatewayPage({ params }: MalaysiaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-white to-emerald-100 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(14,165,233,0.2),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_55%_80%,rgba(251,191,36,0.18),transparent_55%)]" />
        <div className="container space-y-10">
          <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
                Ways to accept payments · Malaysia (MY)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  Malaysia’s payment gateways orchestrated for digital-first growth
                </h1>
                <p className="max-w-2xl text-base text-muted-foreground">
                  We keep the WordPress heritage—gateway list, module roster, and the “Ways to accept payments” headline—while layering automation, compliance guardrails, and AI telemetry for commerce, tourism, and donor programmes.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-blue-600 text-white hover:bg-blue-500">
                  <Link href={contactHref}>
                    Connect with the Kuala Lumpur pod
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-blue-500/60 text-blue-700 hover:bg-blue-100">
                  <Link href={demoHref}>
                    Preview the Malaysia demo
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
                    key={highlight.heading}
                    className="rounded-3xl border border-blue-500/20 bg-white/85 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/15 text-blue-700">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">{highlight.heading}</h2>
                        <p className="text-sm text-muted-foreground">{highlight.text}</p>
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
            Gateway plays for Malaysia’s commerce, tourism, and innovation programmes
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Each connector receives automation, compliance, and AI telemetry so leadership can align commerce, philanthropy, and digital services.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/15 text-blue-700">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">{gateway.title}</h3>
                    <p className="text-sm text-muted-foreground">{gateway.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" aria-hidden />
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
              Modules from the legacy navigation, orchestrated together
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
              Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual touchpoints provide a single governance layer for Malaysian leadership.
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
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-blue-700">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">{module.label}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{module.detail}</p>
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
            Authentic copy, disciplined execution—Malaysia’s launch follows a clear rhythm with AI insight.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((stage) => {
            const Icon = stage.icon;
            return (
              <article
                key={stage.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-blue-700">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">{stage.name}</span>
                </div>
                <p className="text-sm text-muted-foreground">{stage.note}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-950 via-blue-900 to-emerald-900 py-20 text-white">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/70">
              The WordPress article highlighted global coverage. Malaysia keeps that lens to share playbooks with peers across ASEAN, the GCC, and beyond.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                region: "ASEAN",
                description: "Kuala Lumpur collaborates with Singapore, Bangkok, and Jakarta on automation cadences and compliance guardrails.",
                icon: Buildings
              },
              {
                region: "GCC",
                description: "Dubai and Doha offices coordinate FX resilience and philanthropic governance with Malaysian leadership.",
                icon: UsersThree
              },
              {
                region: "Europe",
                description: "London and Berlin partners share PSD2-ready playbooks and donor reporting frameworks.",
                icon: Compass
              },
              {
                region: "North America",
                description: "Toronto and New York diaspora hubs align wallet policies and AI telemetry with Kuala Lumpur HQ.",
                icon: Bank
              },
              {
                region: "Asia-Pacific",
                description: "Sydney and Tokyo command centres reuse Malaysia’s automation scripts for remote enablement.",
                icon: MapTrifold
              },
              {
                region: "Africa",
                description: "Nairobi and Lagos programmes adopt multi currency guardrails refined in Malaysia.",
                icon: ChartLineUp
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
            <Button asChild size="lg" className="gap-2 bg-white text-blue-900 hover:bg-blue-100">
              <Link href={pricingHref}>
                Review Malaysia pricing
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
