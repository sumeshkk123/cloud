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

type Fact = {
  title: string;
  text: string;
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

type Step = {
  stage: string;
  copy: string;
  icon: IconType;
};

const FACTS: Fact[] = [
  {
    title: "Legacy headline",
    text:
      "We honour the WordPress title: “Ways to accept payments from MLM Software in People’s Democratic Republic of Lithuania – LT.”",
    icon: GlobeHemisphereEast
  },
  {
    title: "Gateway roster",
    text: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout—exactly as exported.",
    icon: CreditCard
  },
  {
    title: "Module stack",
    text:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, and the multi-lingual system operate together.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal Baltic bridge",
    description: "Support Lithuania’s fintech-friendly diaspora across Vilnius, London, and Dublin.",
    bullets: [
      "Multi currency module reconciles EUR, GBP, and USD settlements with variance alerts tuned to treasury objectives.",
      "Ticket system module stores sanction diligence, Bank of Lithuania approvals, and donor-ready reports."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay ecommerce trust",
    description: "Deliver polished checkout experiences for Vilnius tech corridors and coastal tourism hubs.",
    bullets: [
      "Auto responder sends Lithuanian and English confirmations and VAT documentation instantly.",
      "Backup manager protects seasonal campaigns tied to e-governance showcases and startup festivals."
    ],
    icon: Sparkle
  },
  {
    name: "PayU regional mesh",
    description: "Integrate EU PSPs and alternative tenders without losing compliance oversight.",
    bullets: [
      "Emails module circulates PSD2, AML, and SEPA updates with CFO commentary and action items.",
      "KYC documentation vault tracks distributor verification artefacts and renewal milestones."
    ],
    icon: Target
  },
  {
    name: "Stripe experimentation studio",
    description: "Prototype AI concierge services for SaaS accelerators and creative collectives.",
    bullets: [
      "Webhook telemetry keeps Shopify, WooCommerce, and Magento storefronts synchronised with analytics dashboards.",
      "Ticket workflows provide engineering pods with AI-generated reproduction notes and severity metadata."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net enterprise lane",
    description: "Blend North American acquiring with Lithuanian board governance and reporting expectations.",
    bullets: [
      "Multi-lingual system publishes policy digests across Lithuanian, English, and Russian stakeholders.",
      "Vaulted artefacts capture sanction checks, merchant approvals, and legal documentation for each profile."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    description: "Tokenised payments empower hybrid pop-ups in Kaunas innovation hubs and cultural venues.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker oversight and payout policies.",
      "Backup manager records offline transactions from touring events and rural outreach activations."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    description: "Monitor EU, Nordic, and US conversion health from a single executive command centre.",
    bullets: [
      "Currency analytics surface success rates, interchange shifts, and FX exposure for CFO reviews.",
      "Ticket system escalates Adyen risk alerts enriched with distributor evidence and compliance commentary."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    description: "Distribute digital kits, AI enablement, and remote trainings across Baltic partners.",
    bullets: [
      "Auto responder nurtures partner onboarding with milestone checklists and multilingual playbooks.",
      "ChatsCircle pods trigger proactive outreach when telemetry highlights friction or plateauing adoption."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    label: "Multi currency system",
    detail: "Balances EUR, USD, GBP, and NOK inflows with variance analytics and treasury-ready exports.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    detail: "Routes compliance, PSP, logistics, and AI incidents with SLA dashboards and audit-ready transcripts.",
    icon: MapTrifold
  },
  {
    label: "Auto responder",
    detail: "Delivers Lithuanian, English, and Russian communications instantly with AI-personalised sequences.",
    icon: Megaphone
  },
  {
    label: "E-voucher engine",
    detail: "Supports innovation grants, tourism campaigns, and partner incentives with telemetry.",
    icon: Sparkle
  },
  {
    label: "E-wallet manager",
    detail: "Streams instant commissions with maker-checker approvals and payout policies aligned to finance.",
    icon: Wallet
  },
  {
    label: "Backup manager",
    detail: "Captures immutable snapshots of storefronts, automation flows, and compliance artefacts for regulators.",
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
    detail: "Keeps Lithuanian, English, and Russian experiences synchronised across portals and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const STEPS: Step[] = [
  {
    stage: "Stage 01",
    copy:
      "Interpret the WordPress brief—headline, gateway list, and module references remain the guiding blueprint.",
    icon: Buildings
  },
  {
    stage: "Stage 02",
    copy:
      "Instrument the stack—multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual experiences gain telemetry and compliance guardrails.",
    icon: Compass
  },
  {
    stage: "Stage 03",
    copy:
      "Activate the gateways—PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout pass sandbox, localisation, and compliance testing.",
    icon: Target
  },
  {
    stage: "Stage 04",
    copy:
      "Optimise leadership insight—dashboards, AI summaries, and compliance artefacts demonstrate Cloud MLM Software’s stewardship in Lithuania.",
    icon: ChartLineUp
  }
];

export const metadata: Metadata = {
  title: "Lithuania MLM Payment Gateways | Cloud MLM Software",
  description:
    "Upgrade the Lithuania WordPress payment gateway checklist with AI telemetry, compliance guardrails, and automation across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/lithuania"
  },
  openGraph: {
    title: "Lithuania MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Lithuania elevated with multi currency intelligence, ticket governance, and leadership-ready insights."
  }
};

type LithuaniaPageProps = {
  params: { lang: SupportedLocale };
};

export default function LithuaniaPaymentGatewayPage({ params }: LithuaniaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-100 via-white to-slate-100 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_75%_18%,rgba(14,165,233,0.18),transparent_55%),radial-gradient(circle_at_55%_80%,rgba(236,72,153,0.18),transparent_55%)]" />
        <div className="container space-y-10">
          <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-violet-700">
                Ways to accept payments · Lithuania (LT)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  Lithuania’s payment gateways, orchestrated for Baltic digital leadership
                </h1>
                <p className="max-w-2xl text-base text-muted-foreground">
                  We keep the WordPress promise intact—gateway list, module roster, and the original “Ways to accept payments” statement—while amplifying it with automation, compliance, and AI telemetry.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-violet-600 text-white hover:bg-violet-500">
                  <Link href={contactHref}>
                    Meet the Vilnius launch pod
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 border-violet-500/60 text-violet-700 hover:bg-violet-100">
                  <Link href={demoHref}>
                    Preview the Lithuania demo
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5">
              {FACTS.map((fact) => {
                const Icon = fact.icon;
                return (
                  <article
                    key={fact.title}
                    className="rounded-3xl border border-violet-500/20 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-violet-600/15 text-violet-700">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <h2 className="text-base font-semibold text-foreground">{fact.title}</h2>
                        <p className="text-sm text-muted-foreground">{fact.text}</p>
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
            Gateway plays for Lithuania’s innovation, tourism, and diaspora programmes
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Each connector gains automation, compliance, and AI narratives so Lithuanian leadership can connect commerce,
            philanthropy, and digital services.
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
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-violet-600/15 text-violet-700">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground">{gateway.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-violet-600" aria-hidden />
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
              Modules from the legacy navigation, orchestrated with AI visibility
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
              Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual touchpoints
              form a single governance layer for Lithuania’s leadership.
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
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-600/15 text-violet-700">
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
            Four-stage cadence grounded in the WordPress heritage
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground">
            Authentic copy, disciplined execution—Lithuania’s payment launch follows a concise rhythm.
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
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-600/15 text-violet-700">
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

      <section className="bg-gradient-to-br from-slate-950 via-violet-900 to-slate-950 py-20 text-white">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/70">
              The WordPress article celebrated global coverage. Lithuania preserves that viewpoint to benchmark against peers worldwide.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                region: "Baltics",
                description:
                  "Vilnius collaborates with Tallinn and Riga on automation cadences, compliance routines, and innovation telemetry.",
                icon: Compass
              },
              {
                region: "Nordics",
                description:
                  "Stockholm and Helsinki partners exchange PSD2-ready playbooks and treasury guardrails with Lithuanian leadership.",
                icon: Buildings
              },
              {
                region: "North America",
                description:
                  "Toronto and New York diaspora programmes align wallet policies and AI telemetry through shared dashboards.",
                icon: Bank
              },
              {
                region: "Middle East",
                description:
                  "Dubai and Doha offices share FX resilience strategies and philanthropic governance rituals.",
                icon: UsersThree
              },
              {
                region: "Asia-Pacific",
                description:
                  "Singapore and Tokyo command centres reuse Lithuania’s automation scripts for remote enablement.",
                icon: MapTrifold
              },
              {
                region: "South America",
                description:
                  "São Paulo and Buenos Aires operations leverage Lithuanian AI insights to scale responsibly.",
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
                Review Lithuania pricing
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
