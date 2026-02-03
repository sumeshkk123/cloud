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

type Step = {
  label: string;
  title: string;
  detail: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    eyebrow: "EU-regulated hub",
    heading: "Malta aligns with MFSA, PSD2, and EU AML directives—compliance evidence must travel with every payout.",
    copy:
      "Our ticketing, backup, and documentation modules maintain MFSA filings, risk assessments, and board approvals in one secure workspace.",
    icon: ShieldCheck
  },
  {
    eyebrow: "Gateway continuity",
    heading: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain the WordPress pillars.",
    copy:
      "We retain the legacy list while elevating it with AI telemetry, SLA tracking, and field-ready storytelling tailored for Malta’s distributors.",
    icon: Stack
  },
  {
    eyebrow: "Mediterranean reach",
    heading: "Distributors in Valletta, Sliema, and Gozo rely on tourism, remote workers, and EU trade routes.",
    copy:
      "Multi currency insights balance EUR, GBP, and USD flows so finance teams see variance and approvals instantly.",
    icon: CurrencyCircleDollar
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal global runway",
    summary: "Connect Maltese HQ with diaspora sponsors across London, Toronto, and Sydney.",
    bullets: [
      "Multi currency module reconciles EUR, GBP, and AUD inflows with AI-driven variance insights.",
      "KYC documentation captures sanction checks, residency proofs, and MFSA audit notes."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay commerce trust",
    summary: "Blend ecommerce-grade checkout with coastal fulfilment experiences.",
    bullets: [
      "Ticket system routes MaltaPost, DHL, and courier escalations with SLA evidence.",
      "Auto responder publishes bilingual (English/Maltese) delivery notifications and retention nudges."
    ],
    icon: Megaphone
  },
  {
    name: "PayU pan-Euro bridge",
    summary: "Integrate cards, wallets, and bank transfers from Malta to wider EU corridors.",
    bullets: [
      "Multi currency analytics track approval rates, interchange, and FX impact by tender.",
      "Backup manager preserves settlement files, dispute artefacts, and PSP conversations."
    ],
    icon: TrendUp
  },
  {
    name: "Stripe innovation lane",
    summary: "Prototype AI concierge, subscription bundles, and partner APIs for Malta’s digital economy.",
    bullets: [
      "E-wallet module pushes instant commissions when Stripe webhooks confirm settlement.",
      "Emails module circulates release notes, compliance warnings, and finance digests."
    ],
    icon: CreditCard
  },
  {
    name: "Authorize.Net governance",
    summary: "Support corporate teams seeking North American oversight paired with Maltese compliance.",
    bullets: [
      "Ticket system collects underwriting packages, chargeback narratives, and CFO approvals.",
      "Backup manager secures PCI attestations, SLA documents, and regulator correspondence."
    ],
    icon: Bank
  },
  {
    name: "Braintree omnichannel core",
    summary: "Tokenise pop-up boutiques, beach events, and ecommerce storefronts.",
    bullets: [
      "E-wallet module syncs Braintree customer vaults with commission plans and reimbursements.",
      "Multi-lingual system keeps English and Maltese knowledge bases aligned."
    ],
    icon: Plugs
  },
  {
    name: "Adyen executive vantage",
    summary: "Aggregate EU, US, and APAC acquiring visibility into one Maltese dashboard.",
    bullets: [
      "Multi currency forecasts highlight interchange exposure, FX impact, and authorisation health.",
      "KYC documentation stores enhanced due diligence dossiers and MFSA reporting history."
    ],
    icon: Compass
  },
  {
    name: "2Checkout digital runway",
    summary: "Deliver virtual kits, AI enablement, and learning hubs to remote teams.",
    bullets: [
      "E-voucher engine launches referral programmes and launch events with redemption analytics.",
      "Auto responder nurtures onboarding cohorts with milestone-based prompts and escalation paths."
    ],
    icon: Sparkle
  }
];

const MODULES: Module[] = [
  {
    title: "Multi currency module",
    description: "Balances EUR, GBP, and USD flows with tolerance alerts and executive-ready commentary.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    description: "Routes PSP, logistics, and compliance requests with SLA dashboards and audit transcripts.",
    icon: ChatsCircle
  },
  {
    title: "Auto responder",
    description: "Delivers English and Maltese notifications across email, SMS, and AI channels instantly.",
    icon: Megaphone
  },
  {
    title: "E-voucher engine",
    description: "Drives coastal promotions, referral bonuses, and exclusive launches with redemption insight.",
    icon: Stack
  },
  {
    title: "E-wallet",
    description: "Streams instant commissions while enforcing maker-checker finance controls.",
    icon: Wallet
  },
  {
    title: "Backup manager",
    description: "Captures settlement files, risk assessments, and regulator correspondence for continuity.",
    icon: ShieldCheck
  },
  {
    title: "Emails module",
    description: "Centralises compliance alerts, campaign storytelling, and AI-generated summaries.",
    icon: EnvelopeSimple
  },
  {
    title: "KYC documentation",
    description: "Stores identity proofs, AML evidence, and expiry reminders for distributors and partners.",
    icon: ClipboardText
  },
  {
    title: "Multi-lingual system",
    description: "Keeps English and Maltese portals, bots, and microsites synchronised for every audience.",
    icon: UsersThree
  }
];

const STEPS: Step[] = [
  {
    label: "Phase 01",
    title: "Reinstate the WordPress promise",
    detail:
      "We honour the headline—Ways to accept payments from MLM Software in People’s Democratic Republic of Malta—while elevating it for 2025 programmes.",
    icon: Stack
  },
  {
    label: "Phase 02",
    title: "Harmonise compliance artefacts",
    detail:
      "Ticketing, backup, and documentation modules align MFSA filings, PSD2 checks, and AML evidence in one command centre.",
    icon: ShieldCheck
  },
  {
    label: "Phase 03",
    title: "Activate gateway excellence",
    detail:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout complete sandbox, certification, and enablement cadences.",
    icon: Lightning
  },
  {
    label: "Phase 04",
    title: "Deliver AI-first visibility",
    detail:
      "Dashboards, alerts, and AI summaries equip Malta’s executives, finance leaders, and distributors with real-time insight.",
    icon: RocketLaunch
  }
];

export const metadata: Metadata = {
  title: "Malta MLM Payment Gateways | Cloud MLM Software",
  description:
    "Coordinate PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for Malta with Cloud MLM Software’s AI-enabled compliance platform.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/malta"
  },
  openGraph: {
    title: "Malta MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Malta—reimagined with maritime-ready automation, compliance, and AI telemetry."
  }
};

type MaltaPageProps = {
  params: { lang: SupportedLocale };
};

export default function MaltaPaymentGatewayPage({ params }: MaltaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-rose-50 via-white to-sky-100 py-20 dark:from-rose-900/30 dark:via-slate-950 dark:to-sky-900/40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-0 h-64 w-64 -translate-x-1/3 rounded-full bg-rose-200/60 blur-3xl dark:bg-rose-900/40" />
          <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-sky-200/60 blur-3xl dark:bg-sky-900/40" />
        </div>
        <div className="container relative grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-300/60 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-rose-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              Ways to accept payments · Malta (MT)
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Malta – MT
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software transforms the WordPress export into a Mediterranean-ready blueprint that blends gateway
                excellence, MFSA compliance, and AI telemetry for field, finance, and leadership teams.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Speak with a Malta strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-rose-400 text-rose-900 hover:bg-rose-100 dark:border-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  Preview the Malta demo
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
                  className="flex h-full flex-col gap-4 rounded-3xl border border-rose-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-rose-500/15 text-rose-800 dark:bg-white/10 dark:text-white">
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
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Gateway playbook for Malta
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Every gateway highlighted in the WordPress export now carries automation, compliance, and enablement guidance
            tuned for Malta’s EU-regulated environment.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-rose-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-rose-500/15 text-rose-800 dark:bg-white/10 dark:text-white">
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
                      <span className="mt-2 h-2 w-2 rounded-full bg-sky-400 dark:bg-white" aria-hidden />
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
              Modules from the legacy navigation, orchestrated for Malta
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation,
              and multi-lingual modules now operate as one AI-enabled platform.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-rose-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-800 dark:bg-white/10 dark:text-white">
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
            Malta enablement journey
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground dark:text-white/70">
            Four phases keep the Maltese launch aligned to EU regulation while embracing automation, AI insight, and gateway
            excellence.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.label}
                className="flex h-full flex-col gap-4 rounded-3xl border border-rose-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-800 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                    {step.label}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{step.title}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{step.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-rose-200 via-white to-sky-200 py-16 dark:from-rose-900/40 dark:via-slate-950 dark:to-sky-900/40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 -translate-x-1/2 rounded-full bg-rose-200/70 blur-3xl dark:bg-rose-900/40" />
          <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 rounded-full bg-sky-200/70 blur-3xl dark:bg-sky-900/40" />
        </div>
        <div className="container relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-rose-900 dark:bg-white/10 dark:text-white/70">
              Next steps for Malta
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Ready to orchestrate Malta’s MLM payment gateways with Cloud MLM Software?
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground dark:text-white/70">
              Let’s align gateway readiness, MFSA compliance, and AI telemetry so your Maltese programme leads the region in
              trust and velocity.
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
              className="gap-2 border-rose-400 text-rose-900 hover:bg-rose-100 dark:border-white/20 dark:text-white"
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
