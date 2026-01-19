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
  ChatsCircle,
  ClipboardText,
  Compass,
  CreditCard,
  CurrencyCircleDollar,
  DeviceMobileCamera,
  EnvelopeSimple,
  Lightning,
  MapTrifold,
  Megaphone,
  Plugs,
  RocketLaunch,
  ShieldCheck,
  Sparkle,
  Stack,
  TrendUp,
  UsersThree,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Pulse = {
  eyebrow: string;
  title: string;
  copy: string;
  icon: IconType;
};

type GatewayMove = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type ModuleCard = {
  title: string;
  description: string;
  icon: IconType;
};

type Stage = {
  label: string;
  heading: string;
  insight: string;
  icon: IconType;
};

const PULSES: Pulse[] = [
  {
    eyebrow: "UPI and real-time commerce",
    title: "1,100+ crore UPI transactions each month demand precise reconciliation and payout cadence.",
    copy:
      "Cloud MLM Software fuses UPI, cards, and alternative rails so field promoters across India see transparent balances and commissions instantly.",
    icon: DeviceMobileCamera
  },
  {
    eyebrow: "Regulatory and tax governance",
    title: "RBI circulars, GST filings, and data-protection guardrails shape every payment decision.",
    copy:
      "Ticketing, backup, and documentation modules track RBI approvals, GST invoices, and compliance artefacts in one secure command centre.",
    icon: ShieldCheck
  },
  {
    eyebrow: "Gateway roster continuity",
    title: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout all remain core to the WordPress brief.",
    copy:
      "We retain the original list and layer it with AI telemetry, compliance workflows, and field enablement journeys tailored for India.",
    icon: Stack
  }
];

const GATEWAYS: GatewayMove[] = [
  {
    name: "PayPal diaspora flywheel",
    summary: "Empower NRIs and diaspora sponsors in Dubai, Singapore, Toronto, and London to invest in Indian growth.",
    bullets: [
      "Multi currency module converts INR, USD, AED, SGD, and CAD flows with CFO-ready variance dashboards.",
      "KYC documentation vault keeps FEMA declarations, sanction checks, and proof-of-funds organised."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay trust layer",
    summary: "Blend marketplace-grade checkout with direct selling fulfilment in Tier 1 to Tier 3 cities.",
    bullets: [
      "Ticket system module orchestrates logistics updates across India Post, Blue Dart, Delhivery, and local partners.",
      "Auto responder publishes multilingual (English, Hindi, Tamil, Telugu, Malayalam) notifications based on region."
    ],
    icon: Megaphone
  },
  {
    name: "PayU India gateway",
    summary: "Connect cards, UPI, wallets, and EMI options to deliver frictionless conversions.",
    bullets: [
      "Multi currency analytics surface success rates by tender type, issuer, and geography for stakeholder reviews.",
      "Backup manager stores settlement files, chargeback artefacts, and reconciliation workbooks."
    ],
    icon: TrendUp
  },
  {
    name: "Stripe experimentation studio",
    summary: "Prototype AI concierge journeys, subscription bundles, and partner APIs for India’s startup ecosystem.",
    bullets: [
      "E-wallet module releases instant commissions once Stripe webhooks confirm settlement.",
      "Emails module circulates product release briefings, finance digests, and compliance alerts."
    ],
    icon: CreditCard
  },
  {
    name: "Authorize.Net enterprise blend",
    summary: "Support corporate teams that require North American gateway familiarity with Indian compliance.",
    bullets: [
      "Ticket system captures underwriting packages, risk reviews, and CFO approvals.",
      "Backup manager safeguards SLA agreements, PCI attestations, and regulator correspondence."
    ],
    icon: Bank
  },
  {
    name: "Braintree omnichannel fabric",
    summary: "Tokenise ecommerce, pop-up events, and mobile field payments across metros and tier-two cities.",
    bullets: [
      "E-wallet module syncs Braintree customer vaults with commission plans and reimbursements.",
      "Multi-lingual system keeps Hindi, English, and regional language knowledge bases aligned."
    ],
    icon: Plugs
  },
  {
    name: "Adyen executive vantage",
    summary: "Aggregate EU, US, and APAC acquiring into one Indian command centre for global expansion.",
    bullets: [
      "Multi currency forecasts highlight interchange trends, FX impact, and authorisation health.",
      "KYC documentation stores enhanced due diligence dossiers, RBI interactions, and audit trails."
    ],
    icon: Compass
  },
  {
    name: "2Checkout digital runway",
    summary: "Distribute virtual kits, AI learning, and enablement journeys to dispersed teams.",
    bullets: [
      "E-voucher engine launches referral bonuses, festival campaigns, and product previews with redemption analytics.",
      "Auto responder nurtures onboarding cohorts with milestone-driven prompts and escalation ready cues."
    ],
    icon: Sparkle
  }
];

const MODULES: ModuleCard[] = [
  {
    title: "Multi currency module",
    description: "Balances INR, USD, AED, EUR, and SGD inflows with tolerance alerts and AI-ready commentary.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    description: "Routes PSP, logistics, and compliance threads with SLA dashboards and auditable transcripts.",
    icon: ChatsCircle
  },
  {
    title: "Auto responder",
    description: "Publishes multilingual (English, Hindi, Tamil, Telugu, Malayalam, Kannada) communications instantly.",
    icon: Megaphone
  },
  {
    title: "E-voucher engine",
    description: "Manages festival offers, referral incentives, and influencer programmes with redemption metrics.",
    icon: Stack
  },
  {
    title: "E-wallet",
    description: "Streams instant commissions, reimbursements, and loyalty payouts with maker-checker controls.",
    icon: Wallet
  },
  {
    title: "Backup manager",
    description: "Captures settlement files, GST filings, audit evidence, and risk assessments for continuity.",
    icon: ShieldCheck
  },
  {
    title: "Emails module",
    description: "Centralises campaign storytelling, compliance alerts, and AI-generated executive digests.",
    icon: EnvelopeSimple
  },
  {
    title: "KYC documentation",
    description: "Stores identity proofs, business licences, AML evidence, and expiry alerts with automation.",
    icon: ClipboardText
  },
  {
    title: "Multi-lingual system",
    description: "Keeps regional language portals, bots, and microsites aligned with India’s cultural nuance.",
    icon: UsersThree
  }
];

const STAGES: Stage[] = [
  {
    label: "Stage 01",
    heading: "Reaffirm the WordPress baseline",
    insight:
      "We retain the headline—Ways to accept payments from MLM Software in People’s Democratic Republic of India—while modernising the narrative for 2025 growth plans.",
    icon: Stack
  },
  {
    label: "Stage 02",
    heading: "Curate compliance choreography",
    insight:
      "Ticketing, backup, and documentation modules organise RBI, GST, and data-protection artefacts with AI summaries for leadership.",
    icon: ShieldCheck
  },
  {
    label: "Stage 03",
    heading: "Activate the gateway roster",
    insight:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout complete sandbox, certification, and enablement cadences.",
    icon: Lightning
  },
  {
    label: "Stage 04",
    heading: "Deliver AI-first oversight",
    insight:
      "Dashboards, alerts, and conversational intelligence keep finance, compliance, and field teams aligned in real time.",
    icon: RocketLaunch
  }
];

export const metadata: Metadata = {
  title: "India MLM Payment Gateways | Cloud MLM Software",
  description:
    "Modernise PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for India with Cloud MLM Software’s AI-ready compliance and enablement.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/india"
  },
  openGraph: {
    title: "India MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in India—transformed with gateway orchestration, GST-ready compliance, and AI telemetry."
  }
};

type IndiaPageProps = {
  params: { lang: SupportedLocale };
};

export default function IndiaPaymentGatewayPage({ params }: IndiaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-orange-50 via-white to-emerald-50 py-20 dark:from-orange-900/30 dark:via-slate-950 dark:to-emerald-900/30">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-orange-200/60 blur-3xl dark:bg-orange-900/40" />
          <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-emerald-200/60 blur-3xl dark:bg-emerald-900/40" />
        </div>
        <div className="container relative grid gap-12 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-300/60 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              Ways to accept payments · India (IN)
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ways to accept payments from MLM Software in People’s Democratic Republic of India – IN
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                We preserve the WordPress storyline and build an AIO-ready programme that aligns RBI guardrails, GST
                requirements, and India’s UPI-driven growth with world-class gateway orchestration.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Speak with an India strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-orange-400 text-orange-900 hover:bg-orange-100 dark:border-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  Preview the India demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            {PULSES.map((pulse) => {
              const Icon = pulse.icon;
              return (
                <article
                  key={pulse.eyebrow}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-orange-200/70 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-500/15 text-orange-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/60">
                        {pulse.eyebrow}
                      </p>
                      <h2 className="text-base font-semibold text-foreground dark:text-white">{pulse.title}</h2>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{pulse.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-5 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Gateway blueprints tailored for India
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Each connector from the WordPress export now includes automation, compliance, and enablement guidance shaped for
            India’s high-velocity market.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-orange-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-500/15 text-orange-800 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 dark:bg-white" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/60 py-20 dark:bg-slate-950/70">
        <div className="container space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Modules from the original navigation, orchestrated for India
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation,
              and multi-lingual modules combine into one AI-enabled control plane.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-orange-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/15 text-orange-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{module.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{module.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            India enablement journey
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground dark:text-white/70">
            Four stages keep India’s programme aligned to RBI guardrails and growth ambitions while honouring the legacy copy.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((stage) => {
            const Icon = stage.icon;
            return (
              <article
                key={stage.label}
                className="flex h-full flex-col gap-4 rounded-3xl border border-orange-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/15 text-orange-800 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                    {stage.label}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{stage.heading}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{stage.insight}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-orange-200 via-white to-emerald-200 py-16 dark:from-orange-900/40 dark:via-slate-950 dark:to-emerald-900/40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 -translate-x-1/2 rounded-full bg-orange-200/70 blur-3xl dark:bg-orange-900/40" />
          <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 rounded-full bg-emerald-200/70 blur-3xl dark:bg-emerald-900/40" />
        </div>
        <div className="container relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-900 dark:bg-white/10 dark:text-white/70">
              Next steps for India
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Ready to orchestrate India’s MLM payment gateways with Cloud MLM Software?
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground dark:text-white/70">
              Align gateway readiness, compliance guardrails, and AI telemetry so India’s programme scales with the confidence
              of a thought leader.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href={pricingHref}>
                Review investment options
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-orange-400 text-orange-900 hover:bg-orange-100 dark:border-white/20 dark:text-white"
            >
              <Link href={gatewayHubHref}>
                Explore global gateways
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
