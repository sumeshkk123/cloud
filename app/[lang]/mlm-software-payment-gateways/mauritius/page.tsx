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

type Highlight = {
  eyebrow: string;
  heading: string;
  copy: string;
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
  description: string;
  icon: IconType;
};

type Phase = {
  step: string;
  heading: string;
  detail: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    eyebrow: "Mauritius fintech hub",
    heading: "An IFC with global investors, B2B services, and innovation sandboxes demands precise payment orchestration.",
    copy:
      "Cloud MLM Software captures FSC oversight, AML evidence, and data protection requirements across ticketing, backup, and documentation modules.",
    icon: ShieldCheck
  },
  {
    eyebrow: "Gateway continuity",
    heading: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain the backbone of the WordPress export.",
    copy:
      "We keep the legacy list intact while delivering automation, telemetry, and enablement guidance for Mauritius field teams and executives.",
    icon: Stack
  },
  {
    eyebrow: "Tourism + tech blend",
    heading: "Mauritius combines tourism, fintech, and offshore services—multi currency intelligence keeps these verticals synchronised.",
    copy:
      "Finance teams see live variance and gateway health thanks to dashboards, alerts, and AI summaries.",
    icon: Compass
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal global runway",
    summary: "Engage sponsors in London, Dubai, and Johannesburg who invest in Mauritian programmes.",
    bullets: [
      "Multi currency module reconciles MUR, EUR, GBP, and ZAR flows with CFO-friendly commentary.",
      "KYC documentation vault stores sanction screening, proof-of-funds, and residency documents."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay commerce trust",
    summary: "Deliver ecommerce-grade checkout with resort and island fulfilment agility.",
    bullets: [
      "Ticket system module aligns Mauritius Post, DHL, and ground couriers with SLA visibility.",
      "Auto responder publishes English and French updates tied to delivery and loyalty prompts."
    ],
    icon: Megaphone
  },
  {
    name: "PayU regional mesh",
    summary: "Connect cards, bank transfers, and wallets across Mauritius, Africa, and Asia corridors.",
    bullets: [
      "Multi currency analytics surface approval rates, FX exposure, and fee trends.",
      "Backup manager archives settlement files, dispute narratives, and PSP communications."
    ],
    icon: TrendUp
  },
  {
    name: "Stripe innovation studio",
    summary: "Prototype AI concierge, subscription bundles, and partner APIs for Mauritius’s fintech scene.",
    bullets: [
      "E-wallet module streams instant commissions when Stripe webhooks confirm settlement.",
      "Emails module shares release notes, compliance alerts, and finance digests."
    ],
    icon: CreditCard
  },
  {
    name: "Authorize.Net governance lane",
    summary: "Support corporates expecting North American gateway posture with Mauritian oversight.",
    bullets: [
      "Ticket system records underwriting packages, chargeback decisions, and executive sign-offs.",
      "Backup manager secures contracts, PCI attestations, and regulator correspondence."
    ],
    icon: Bank
  },
  {
    name: "Braintree omnichannel core",
    summary: "Tokenise pop-up activations, ecommerce, and resort experiences.",
    bullets: [
      "E-wallet module synchronises Braintree customer vaults with commission plans and reimbursements.",
      "Multi-lingual system keeps English and French knowledge bases aligned."
    ],
    icon: Plugs
  },
  {
    name: "Adyen executive vantage",
    summary: "Aggregate EU, US, and APAC acquiring intelligence into a single Mauritian control tower.",
    bullets: [
      "Multi currency forecasts highlight interchange exposure, FX impact, and authorisation health.",
      "KYC documentation stores enhanced due diligence dossiers and FSC interactions."
    ],
    icon: Compass
  },
  {
    name: "2Checkout digital runway",
    summary: "Launch virtual kits, AI learning, and enablement tracks for remote teams and partners.",
    bullets: [
      "E-voucher engine releases referral programmes, event passes, and launch bundles with analytics.",
      "Auto responder nurtures onboarding cohorts with milestone prompts and escalation routes."
    ],
    icon: Sparkle
  }
];

const MODULES: Module[] = [
  {
    title: "Multi currency module",
    description: "Balances MUR, EUR, GBP, USD, and ZAR inflows with tolerance alerts and AI commentary.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    description: "Routes PSP, logistics, and compliance conversations with SLA dashboards and audit trails.",
    icon: ChatsCircle
  },
  {
    title: "Auto responder",
    description: "Delivers English and French communications across email, SMS, and AI chat surfaces instantly.",
    icon: Megaphone
  },
  {
    title: "E-voucher engine",
    description: "Drives referral incentives, loyalty bundles, and campaign codes with redemption visibility.",
    icon: Stack
  },
  {
    title: "E-wallet",
    description: "Streams instant commissions while enforcing maker-checker governance.",
    icon: Wallet
  },
  {
    title: "Backup manager",
    description: "Secures settlement files, tax submissions, and audit evidence for continuity.",
    icon: ShieldCheck
  },
  {
    title: "Emails module",
    description: "Centralises compliance alerts, campaign storytelling, and AI-generated executive digests.",
    icon: EnvelopeSimple
  },
  {
    title: "KYC documentation",
    description: "Stores identity proofs, AML evidence, and expiry reminders for partners and distributors.",
    icon: ClipboardText
  },
  {
    title: "Multi-lingual system",
    description: "Keeps English and French portals, microsites, and AI assistants aligned.",
    icon: UsersThree
  }
];

const PHASES: Phase[] = [
  {
    step: "Phase 01",
    heading: "Reaffirm the WordPress storyline",
    detail:
      "We preserve the headline—Ways to accept payments from MLM Software in People’s Democratic Republic of Mauritius—while refreshing it for 2025 growth.",
    icon: Stack
  },
  {
    step: "Phase 02",
    heading: "Coordinate compliance artefacts",
    detail:
      "Ticketing, backup, and documentation modules align FSC filings, AML evidence, and tax submissions inside one workspace.",
    icon: ShieldCheck
  },
  {
    step: "Phase 03",
    heading: "Activate the gateway roster",
    detail:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout pass through sandbox, certification, and enablement routines.",
    icon: Lightning
  },
  {
    step: "Phase 04",
    heading: "Deliver AI-first telemetry",
    detail:
      "Dashboards, alerts, and AI summaries keep Mauritius’s finance, compliance, and field teams aligned in real time.",
    icon: MapTrifold
  }
];

export const metadata: Metadata = {
  title: "Mauritius MLM Payment Gateways | Cloud MLM Software",
  description:
    "Coordinate PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for Mauritius with Cloud MLM Software’s AI-enabled compliance platform.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/mauritius"
  },
  openGraph: {
    title: "Mauritius MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Mauritius—modernised with gateway orchestration, FSC compliance, and AI telemetry."
  }
};

type MauritiusPageProps = {
  params: { lang: SupportedLocale };
};

export default function MauritiusPaymentGatewayPage({ params }: MauritiusPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-amber-50 py-20 dark:from-cyan-900/30 dark:via-slate-950 dark:to-amber-900/30">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-0 h-64 w-64 -translate-x-1/3 rounded-full bg-cyan-200/60 blur-3xl dark:bg-cyan-900/40" />
          <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-amber-200/60 blur-3xl dark:bg-amber-900/40" />
        </div>
        <div className="container relative grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              Ways to accept payments · Mauritius (MU)
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Mauritius – MU
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                We transform the WordPress export into a Mauritian operating model that unites gateway excellence, FSC-ready
                compliance, and AI telemetry for tourism, fintech, and offshore services alike.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Speak with a Mauritius strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-cyan-400 text-cyan-900 hover:bg-cyan-100 dark:border-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  Preview the Mauritius demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            {HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article
                  key={highlight.eyebrow}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-cyan-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/60">
                        {highlight.eyebrow}
                      </p>
                      <h2 className="text-base font-semibold text-foreground dark:text-white">{highlight.heading}</h2>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{highlight.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-5 text-center">
          <h2 className="text-balance text-3xl ft-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Gateway excellence for Mauritius
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Each gateway from the WordPress export now includes automation, compliance, and enablement guidance tuned for
            Mauritius’s global business environment.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-cyan-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-800 dark:bg-white/10 dark:text-white">
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
                      <span className="mt-2 h-2 w-2 rounded-full bg-amber-400 dark:bg-white" aria-hidden />
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
              Modules from the legacy navigation, orchestrated for Mauritius
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation,
              and multi-lingual modules now operate as a single AI-enabled platform.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-cyan-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-800 dark:bg-white/10 dark:text-white">
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
            Mauritius enablement phases
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground dark:text-white/70">
            Four phases ensure the original copy remains intact while delivering automation, compliance, and AI visibility for
            Mauritius leaders.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PHASES.map((phase) => {
            const Icon = phase.icon;
            return (
              <article
                key={phase.step}
                className="flex h-full flex-col gap-4 rounded-3xl border border-cyan-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-800 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                    {phase.step}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{phase.heading}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{phase.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-cyan-200 via-white to-amber-200 py-16 dark:from-cyan-900/40 dark:via-slate-950 dark:to-amber-900/40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 -translate-x-1/2 rounded-full bg-cyan-200/70 blur-3xl dark:bg-cyan-900/40" />
          <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 rounded-full bg-amber-200/70 blur-3xl dark:bg-amber-900/40" />
        </div>
        <div className="container relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-900 dark:bg-white/10 dark:text-white/70">
              Next steps for Mauritius
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Ready to orchestrate Mauritius’s MLM payment gateways with Cloud MLM Software?
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground dark:text-white/70">
              Align gateway readiness, compliance guardrails, and AI telemetry so Mauritius’s programme leads in innovation and
              trust.
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
              className="gap-2 border-cyan-400 text-cyan-900 hover:bg-cyan-100 dark:border-white/20 dark:text-white"
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
