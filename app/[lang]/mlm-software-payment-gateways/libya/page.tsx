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

type HeroHighlight = {
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

type ProgrammeStep = {
  stage: string;
  copy: string;
  icon: IconType;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    title: "Legacy headline preserved",
    detail:
      "We keep the WordPress promise intact: “Ways to accept payments from MLM Software in People’s Democratic Republic of Libya – LY.”",
    icon: GlobeHemisphereEast
  },
  {
    title: "Gateway roster",
    detail:
      "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout—exactly the connectors listed in the original export.",
    icon: CreditCard
  },
  {
    title: "Module ecosystem",
    detail:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, and the multi-lingual system operate as one orchestrated stack.",
    icon: StackSimple
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal diaspora bridge",
    summary: "Support Libyan diaspora in London, Istanbul, and Dubai while keeping treasury and donor reporting aligned.",
    bullets: [
      "Multi currency module reconciles LIB, GBP, TRY, and AED settlements with variance alerts for finance teams.",
      "Ticket system module archives sanction diligence and Central Bank correspondences for audit-ready transparency."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay commerce trust",
    summary: "Deliver dependable ecommerce experiences from Tripoli to Benghazi with bilingual confirmations.",
    bullets: [
      "Auto responder issues Arabic and English transaction updates plus customs-ready documentation for logistics partners.",
      "Backup manager protects seasonal campaigns tied to tourism, education, and humanitarian programmes."
    ],
    icon: Sparkle
  },
  {
    name: "PayU regional mesh",
    summary: "Integrate PSPs across North African and European corridors without losing compliance visibility.",
    bullets: [
      "Emails module circulates AML, VAT, and FX policy updates with executive commentary and recommended actions.",
      "KYC documentation vault manages distributor verification, PSP onboarding artefacts, and renewal reminders."
    ],
    icon: Target
  },
  {
    name: "Stripe experimentation studio",
    summary: "Prototype AI concierge experiences for energy, education, and digital wellness initiatives.",
    bullets: [
      "Webhook telemetry synchronises Shopify, WooCommerce, and Magento storefronts into one analytics layer.",
      "Ticket workflows deliver engineering pods AI-authored reproduction notes for faster remediation."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net enterprise lane",
    summary: "Blend North American acquiring expectations with Libyan governance requirements.",
    bullets: [
      "Multi-lingual system broadcasts compliance digests across Arabic, English, and French stakeholder groups.",
      "Vaulted artefacts capture sanction checks, board approvals, and legal documentation for each merchant profile."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    summary: "Tokenised payments empower hybrid pop-ups in coastal cities, cross-border trade fairs, and NGO activations.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker guardrails and cash-out policies.",
      "Backup manager records offline device transactions for humanitarian and rural outreach programmes."
    ],
    icon: Plugs
  },
  {
    name: "Adyen unified ledger",
    summary: "Monitor EU, MENA, and North American conversion health via one executive dashboard.",
    bullets: [
      "Currency analytics highlight success rates, interchange exposure, and FX volatility for CFO review.",
      "Ticket system escalates Adyen risk alerts anchored with distributor evidence and compliance commentary."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    summary: "Distribute digital kits, AI enablement, and remote learning across Libya and diaspora programmes.",
    bullets: [
      "Auto responder nurtures partner onboarding with milestone checklists and multilingual playbooks.",
      "ChatsCircle pods trigger proactive outreach when telemetry indicates friction or stalled adoption."
    ],
    icon: ChatsCircle
  }
];

const MODULES: Module[] = [
  {
    label: "Multi currency system",
    description: "Balances LIB, USD, EUR, and AED with automated variance alerts and treasury dashboards.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    description: "Routes compliance, logistics, and PSP cases with SLA dashboards, AI summaries, and audit-ready trails.",
    icon: MapTrifold
  },
  {
    label: "Auto responder",
    description: "Delivers Arabic, English, and French communications instantly with AI-personalised journeys.",
    icon: Megaphone
  },
  {
    label: "E-voucher engine",
    description: "Supports humanitarian incentives, education grants, and commerce promotions with telemetry.",
    icon: Sparkle
  },
  {
    label: "E-wallet manager",
    description: "Streams instant commissions and reimbursements with maker-checker oversight and payout controls.",
    icon: Wallet
  },
  {
    label: "Backup manager",
    description: "Captures immutable snapshots of storefronts, automation flows, and compliance artefacts.",
    icon: ShieldCheck
  },
  {
    label: "Emails module",
    description: "Coordinate transactional, campaign, and compliance messaging for leadership and field teams.",
    icon: Megaphone
  },
  {
    label: "KYC documentation",
    description: "Stores distributor identification, sanction diligence, and PSP onboarding artefacts with reminders.",
    icon: StackSimple
  },
  {
    label: "Multi-lingual system",
    description: "Keeps Arabic, English, and French experiences synchronised across portals and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const PROGRAMME_STEPS: ProgrammeStep[] = [
  {
    stage: "01 · Interpret the brief",
    copy:
      "The WordPress headline, gateway roster, and module references become the blueprint for Libya’s AI-enabled launch.",
    icon: Buildings
  },
  {
    stage: "02 · Wire the operating system",
    copy:
      "Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual touchpoints operate under one telemetry layer.",
    icon: Compass
  },
  {
    stage: "03 · Activate the gateways",
    copy:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout complete sandbox, localisation, and compliance testing.",
    icon: Target
  },
  {
    stage: "04 · Optimise leadership insight",
    copy:
      "Executives receive dashboards, AI summaries, and compliance artefacts that prove Cloud MLM Software’s thought leadership in Libya.",
    icon: ChartLineUp
  }
];

export const metadata: Metadata = {
  title: "Libya MLM Payment Gateways | Cloud MLM Software",
  description:
    "Modernise the Libya WordPress payment gateway checklist with AI telemetry, compliance guardrails, and orchestrated automation across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/libya"
  },
  openGraph: {
    title: "Libya MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Libya reimagined with multi currency control, ticket governance, and leadership-ready insights."
  }
};

type LibyaPageProps = {
  params: { lang: SupportedLocale };
};

export default function LibyaPaymentGatewayPage({ params }: LibyaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-sky-50 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(251,191,36,0.25),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(56,189,248,0.22),transparent_55%),radial-gradient(circle_at_55%_80%,rgba(14,165,233,0.18),transparent_55%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-600/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              Ways to accept payments · Libya (LY)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Libya’s payment gateways, orchestrated for an AI-era operating model
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                Cloud MLM Software keeps the WordPress heritage alive—honouring the original copy, gateway list, and module
                roster—while elevating it with automation, compliance, and leadership telemetry.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-amber-500 text-slate-900 hover:bg-amber-400">
                <Link href={contactHref}>
                  Connect with the Tripoli team
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-amber-500/60 text-amber-700 hover:bg-amber-100">
                <Link href={demoHref}>
                  Preview the Libya demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {HERO_HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article
                  key={highlight.title}
                  className="rounded-3xl border border-amber-500/20 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15 text-amber-700">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground">{highlight.title}</h2>
                      <p className="text-sm text-muted-foreground">{highlight.detail}</p>
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
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Gateway narratives tuned to Libya’s commerce, humanitarian, and diaspora journeys
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Each connector gains automation, compliance, and AI telemetry guidance so leadership sees the entire payment
            landscape—from Tripoli to Benghazi to the global diaspora.
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
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15 text-amber-700">
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
                      <span className="mt-2 h-2 w-2 rounded-full bg-amber-500" aria-hidden />
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
              Modules from the legacy navigation, orchestrated for Libyan leadership
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
              Multi currency, ticketing, automation, vouchers, wallet, backup, emails, KYC, and multi-lingual systems work
              together—now enriched with AI telemetry and compliance traces.
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
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/15 text-amber-700">
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
            Four-step programme grounded in Libya’s heritage article
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground">
            A disciplined sequence maintains authenticity while delivering modern automation and leadership insights.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROGRAMME_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.stage}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/15 text-amber-700">
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

      <section className="bg-gradient-to-br from-slate-950 via-amber-900 to-slate-950 py-20 text-white">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/70">
              The WordPress article celebrated worldwide coverage. We preserve that lens so Libya’s leadership can compare
              playbooks with peers across continents.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                region: "North Africa",
                description:
                  "Tripoli aligns with Tunis, Cairo, and Rabat programmes via shared dashboards, FX telemetry, and compliance artefacts.",
                icon: Compass
              },
              {
                region: "Europe",
                description:
                  "Paris, Rome, and London partners exchange PSD2-ready playbooks and donor reporting frameworks with Libyan leadership.",
                icon: Buildings
              },
              {
                region: "Middle East",
                description:
                  "Dubai and Riyadh programmes collaborate on FX resilience, supply chain oversight, and automation cadences.",
                icon: UsersThree
              },
              {
                region: "North America",
                description:
                  "Toronto and Washington DC diaspora hubs align wallet policies, compliance evidence, and AI summaries with Tripoli HQ.",
                icon: Bank
              },
              {
                region: "Asia-Pacific",
                description:
                  "Singapore and Sydney command centres reuse Libya’s automation scripts to maintain resilience during expansions.",
                icon: MapTrifold
              },
              {
                region: "South America",
                description:
                  "São Paulo and Buenos Aires operations leverage Libyan AI insights to scale responsibly.",
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
            <Button asChild size="lg" className="gap-2 bg-white text-amber-900 hover:bg-amber-100">
              <Link href={pricingHref}>
                Review Libya pricing
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
