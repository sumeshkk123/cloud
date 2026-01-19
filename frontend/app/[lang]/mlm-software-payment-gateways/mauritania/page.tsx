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
  Compass,
  CreditCard,
  CurrencyCircleDollar,
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

type Signal = {
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

type Phase = {
  step: string;
  heading: string;
  copy: string;
  icon: IconType;
};

const SIGNALS: Signal[] = [
  {
    title: "Gateway continuity",
    detail:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout stay central per the WordPress export.",
    icon: Stack
  },
  {
    title: "Sahara-to-sea commerce",
    detail:
      "Nouakchott, Nouadhibou, and inland communities depend on remittances and cross-border trade—multi currency telemetry keeps leaders informed.",
    icon: Compass
  },
  {
    title: "Regulation and audit readiness",
    detail:
      "BCEAO requirements, AML oversight, and tax reporting live inside ticketing, backup, and documentation modules.",
    icon: ShieldCheck
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal diaspora network",
    summary: "Empower sponsors in Paris, Dakar, and Casablanca to fund Mauritanian programmes.",
    bullets: [
      "Multi currency module reconciles MRU, EUR, and XOF inflows with CFO-ready dashboards.",
      "KYC documentation vault stores sanction screening, proof-of-funds, and residency evidence."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay commerce trust",
    summary: "Blend ecommerce confidence with on-the-ground fulfilment and distributor deliveries.",
    bullets: [
      "Ticket system module routes logistics updates across ports, road freight, and courier partners.",
      "Auto responder issues Arabic and French notifications tied to delivery and loyalty milestones."
    ],
    icon: Megaphone
  },
  {
    name: "PayU regional lattice",
    summary: "Connect cards, bank transfers, and mobile money for Mauritania and neighbouring markets.",
    bullets: [
      "Multi currency analytics highlight approval rates, FX impact, and fee structures per tender.",
      "Backup manager archives settlement files, dispute narratives, and PSP correspondence."
    ],
    icon: TrendUp
  },
  {
    name: "Stripe innovation studio",
    summary: "Prototype AI concierge, subscription bundles, and partner APIs without losing compliance clarity.",
    bullets: [
      "E-wallet module streams instant commissions once Stripe webhooks clear settlement.",
      "Emails module shares product release notes, compliance alerts, and finance digests."
    ],
    icon: CreditCard
  },
  {
    name: "Authorize.Net governance lane",
    summary: "Support corporates that expect North American gateway posture alongside BCEAO oversight.",
    bullets: [
      "Ticket system records underwriting packages, chargeback decisions, and executive approvals.",
      "Backup manager secures contracts, PCI attestations, and regulator communications."
    ],
    icon: Bank
  },
  {
    name: "Braintree omnichannel core",
    summary: "Tokenise field events, pop-up stores, and ecommerce engagements across Mauritania.",
    bullets: [
      "E-wallet module syncs Braintree customer vaults with commission profiles and reimbursements.",
      "Multi-lingual system keeps Arabic and French knowledge bases aligned for service teams."
    ],
    icon: Plugs
  },
  {
    name: "Adyen executive vantage",
    summary: "Aggregate EU, US, and APAC acquiring data inside one Mauritanian dashboard.",
    bullets: [
      "Multi currency forecasts surface interchange exposure, FX risk, and authorisation health.",
      "KYC documentation stores enhanced due diligence dossiers and BCEAO attestation logs."
    ],
    icon: Compass
  },
  {
    name: "2Checkout digital runway",
    summary: "Launch virtual kits, AI learning, and enablement journeys to dispersed teams.",
    bullets: [
      "E-voucher engine releases referral incentives, training passes, and launch codes with analytics.",
      "Auto responder nurtures onboarding cohorts with milestone-driven prompts and escalations."
    ],
    icon: Sparkle
  }
];

const MODULES: Module[] = [
  {
    label: "Multi currency module",
    description: "Balances MRU, EUR, XOF, and USD flows with tolerance alerts and AI commentary.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    description: "Routes PSP, logistics, and compliance escalations with SLA visibility and audit trails.",
    icon: ChatsCircle
  },
  {
    label: "Auto responder",
    description: "Delivers Arabic and French notifications across email, SMS, and AI chat surfaces instantly.",
    icon: Megaphone
  },
  {
    label: "E-voucher engine",
    description: "Manages referral campaigns, incentive bundles, and launch codes with redemption insight.",
    icon: Stack
  },
  {
    label: "E-wallet",
    description: "Streams instant commissions with maker-checker governance for finance leaders.",
    icon: Wallet
  },
  {
    label: "Backup manager",
    description: "Secures settlement files, tax submissions, and risk assessments for continuity.",
    icon: ShieldCheck
  },
  {
    label: "Emails module",
    description: "Centralises compliance alerts, campaign storytelling, and AI-generated executive digests.",
    icon: EnvelopeSimple
  },
  {
    label: "KYC documentation",
    description: "Stores identity proofs, AML evidence, and expiry reminders for distributors and partners.",
    icon: ClipboardText
  },
  {
    label: "Multi-lingual system",
    description: "Keeps Arabic and French portals, bots, and microsites aligned.",
    icon: UsersThree
  }
];

const PHASES: Phase[] = [
  {
    step: "Phase 01",
    heading: "Reaffirm the WordPress promise",
    copy:
      "We retain the headline—Ways to accept payments from MLM Software in People’s Democratic Republic of Mauritania—while elevating it for 2025 programmes.",
    icon: Stack
  },
  {
    step: "Phase 02",
    heading: "Coordinate compliance artefacts",
    copy:
      "Ticketing, backup, and documentation modules organise BCEAO oversight, AML evidence, and tax reporting for instant recall.",
    icon: ShieldCheck
  },
  {
    step: "Phase 03",
    heading: "Activate gateway excellence",
    copy:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout progress through sandbox, certification, and enablement cadences.",
    icon: Lightning
  },
  {
    step: "Phase 04",
    heading: "Deliver AI-first telemetry",
    copy:
      "Dashboards, alerts, and AI summaries give Mauritanian finance, compliance, and field leaders instant visibility.",
    icon: MapTrifold
  }
];

export const metadata: Metadata = {
  title: "Mauritania MLM Payment Gateways | Cloud MLM Software",
  description:
    "Deploy PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout in Mauritania with Cloud MLM Software’s AI-enabled compliance platform.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/mauritania"
  },
  openGraph: {
    title: "Mauritania MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Mauritania—modernised with gateway orchestration, BCEAO compliance, and AI telemetry."
  }
};

type MauritaniaPageProps = {
  params: { lang: SupportedLocale };
};

export default function MauritaniaPaymentGatewayPage({ params }: MauritaniaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-amber-50 via-white to-emerald-100 py-20 dark:from-amber-900/30 dark:via-slate-950 dark:to-emerald-900/30">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-0 h-64 w-64 -translate-x-1/3 rounded-full bg-amber-200/60 blur-3xl dark:bg-amber-900/40" />
          <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-emerald-200/60 blur-3xl dark:bg-emerald-900/40" />
        </div>
        <div className="container relative grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              Ways to accept payments · Mauritania (MR)
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Mauritania – MR
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software transforms the WordPress export into a Mauritania-specific operating model that synchronises
                gateways, compliance evidence, and AI telemetry across desert and coastal communities.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Speak with a Mauritania strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-amber-400 text-amber-900 hover:bg-amber-100 dark:border-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  Preview the Mauritania demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            {SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article
                  key={signal.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-amber-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-amber-500/15 text-amber-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-base font-semibold text-foreground dark:text-white">{signal.title}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{signal.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-5 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Gateway playbook for Mauritania
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Each gateway from the WordPress export now includes automation, compliance, and enablement guidance for Mauritania’s
            omnichannel reality.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-amber-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-amber-500/15 text-amber-800 dark:bg-white/10 dark:text-white">
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
              Modules from the legacy navigation, unified for Mauritania
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation,
              and multi-lingual modules now function as one AI-enabled control plane.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.label}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-amber-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/15 text-amber-800 dark:bg-white/10 dark:text-white">
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

      <section className="container space-y-10">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Mauritania enablement phases
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground dark:text-white/70">
            Four phases keep Mauritania’s programme aligned to regulatory expectations while embracing automation and AI
            oversight.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PHASES.map((phase) => {
            const Icon = phase.icon;
            return (
              <article
                key={phase.step}
                className="flex h-full flex-col gap-4 rounded-3xl border border-amber-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/15 text-amber-800 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                    {phase.step}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{phase.heading}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{phase.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-amber-200 via-white to-emerald-200 py-16 dark:from-amber-900/40 dark:via-slate-950 dark:to-emerald-900/40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 -translate-x-1/2 rounded-full bg-amber-200/70 blur-3xl dark:bg-amber-900/40" />
          <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 rounded-full bg-emerald-200/70 blur-3xl dark:bg-emerald-900/40" />
        </div>
        <div className="container relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-900 dark:bg-white/10 dark:text-white/70">
              Next steps for Mauritania
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Ready to orchestrate Mauritania’s MLM payment gateways with Cloud MLM Software?
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground dark:text-white/70">
              Let’s align gateway readiness, compliance guardrails, and AI telemetry so Mauritania’s programme thrives across
              the Sahara and the coast.
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
              className="gap-2 border-amber-400 text-amber-900 hover:bg-amber-100 dark:border-white/20 dark:text-white"
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
