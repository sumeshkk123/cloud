import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ChartLineUp,
  Circuitry,
  CurrencyCircleDollar,
  Lightning,
  MapTrifold,
  PlugsConnected,
  ShieldCheck,
  Stack,
  Target,
  UsersThree,
  WaveSquare
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroBullet = {
  title: string;
  detail: string;
  icon: IconType;
};

type GatewayFramework = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type SequenceStep = {
  code: string;
  heading: string;
  description: string;
  icon: IconType;
};

type ModuleMatrix = {
  name: string;
  narrative: string;
  icon: IconType;
};

const HERO_BULLETS: HeroBullet[] = [
  {
    title: "WordPress headline",
    detail: "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of North Korea – KP.",
    icon: Target
  },
  {
    title: "Gateway roster",
    detail: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain foundational.",
    icon: PlugsConnected
  },
  {
    title: "Continental scope",
    detail: "Africa, Asia, Europe, North America, Oceania, and South America inform every sequence.",
    icon: WaveSquare
  }
];

const GATEWAY_FRAMEWORKS: GatewayFramework[] = [
  {
    name: "PayPal & Amazon Pay activation lattice",
    summary: "Digital payout experiences for Pyongyang, Rason, and global stakeholders.",
    bullets: [
      "Multi currency module reconciles KPW, USD, CNY, and alternative rails with treasury analytics.",
      "Emails module distributes settlement evidence, compliance briefs, and programme updates automatically."
    ],
    icon: Stack
  },
  {
    name: "PayU & Stripe innovation corridors",
    summary: "Subscription kits and ecommerce pilots across Asia, Europe, and the Americas.",
    bullets: [
      "Ticket system aligns PSP escalations, regulator dialogues, and engineering taskforces.",
      "Auto responder orchestrates multilingual onboarding, campaigns, and retention journeys."
    ],
    icon: Circuitry
  },
  {
    name: "Authorize.Net & Braintree trust grid",
    summary: "North American acquiring aligned with export controls, AML, and data governance obligations.",
    bullets: [
      "KYC documentation vault secures identity dossiers, sanction results, and renewal cadences.",
      "Backup manager preserves payout logic, AI prompts, and continuity plans."
    ],
    icon: ShieldCheck
  },
  {
    name: "Adyen & 2Checkout expansion array",
    summary: "Enterprise routing for industrial ventures, logistics, and services expansions.",
    bullets: [
      "E-wallet manager streams commissions with maker-checker approvals and audit trails.",
      "E-voucher engine executes incentive structures, loyalty programmes, and event access."
    ],
    icon: ChartLineUp
  }
];

const SEQUENCE_STEPS: SequenceStep[] = [
  {
    code: "Seq 01",
    heading: "Decode the legacy briefing",
    description: "Translate the WordPress headline, gateway list, and navigation references into modern architecture.",
    icon: Target
  },
  {
    code: "Seq 02",
    heading: "Engineer compliance scaffolding",
    description: "Blend multi currency, KYC, and automation layers for regulated operations and partner oversight.",
    icon: ShieldCheck
  },
  {
    code: "Seq 03",
    heading: "Synchronise continental alliances",
    description: "Connect Asia, Africa, Europe, North America, Oceania, and South America through shared telemetry.",
    icon: UsersThree
  },
  {
    code: "Seq 04",
    heading: "Optimise with AI telemetry",
    description: "Forecast conversions, detect anomalies, and refine programmes using predictive analytics.",
    icon: Lightning
  }
];

const MODULE_MATRIX: ModuleMatrix[] = [
  {
    name: "Multi currency module",
    narrative: "Balances KPW, USD, CNY, and digital tenders while surfacing FX variance in real time.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    narrative: "Routes PSP, regulator, and distributor cases with SLA dashboards and escalation clarity.",
    icon: MapTrifold
  },
  {
    name: "Auto responder",
    narrative: "Delivers multilingual coaching, compliance bulletins, and campaign prompts instantly.",
    icon: Lightning
  },
  {
    name: "E-voucher",
    narrative: "Issues loyalty rewards, access passes, and incentive tokens with redemption telemetry.",
    icon: PlugsConnected
  },
  {
    name: "E-wallet",
    narrative: "Streams commissions and reimbursements with maker-checker governance.",
    icon: ShieldCheck
  },
  {
    name: "Backup manager",
    narrative: "Safeguards payout logic, AI models, and compliance artefacts against infrastructure shifts.",
    icon: Stack
  },
  {
    name: "Emails",
    narrative: "Central communications fabric for transactional, regulatory, and campaign messaging.",
    icon: UsersThree
  },
  {
    name: "KYC documentation",
    narrative: "Maintains identity trails, sanction records, and renewal reminders.",
    icon: ChartLineUp
  },
  {
    name: "Multi-lingual system",
    narrative: "Extends English-first journeys into supported languages and AI assistants seamlessly.",
    icon: WaveSquare
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "North Korea MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of North Korea – KP, orchestrating PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with governance automation.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/north-korea", locale)
    },
    openGraph: {
      title,
      description
    },
    twitter: {
      title,
      description
    }
  };
}

type NorthKoreaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function NorthKoreaPaymentGatewaysPage({ params }: NorthKoreaPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.5rem] border border-rose-200/70 bg-gradient-to-br from-rose-50 via-white to-slate-100 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(248,113,113,0.25),transparent_55%),radial-gradient(circle_at_88%_10%,rgba(244,63,94,0.22),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(244,114,182,0.2),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_12%,rgba(248,113,113,0.35),transparent_55%),radial-gradient(circle_at_88%_10%,rgba(244,63,94,0.3),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(244,114,182,0.28),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-300/60 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-rose-700 dark:border-rose-500/60 dark:bg-slate-950/70 dark:text-rose-100">
                Ways to accept payments · North Korea (KP)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  North Korea&apos;s MLM payment gateways re-engineered for compliant orchestration
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  We elevate the WordPress outline into an AI-enabled operations blueprint. Finance, compliance, and field
                  leaders orchestrate PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout
                  across the six continents highlighted in the legacy navigation.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 rounded-full bg-rose-600 text-white hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400"
                >
                  <Link href={contactHref}>
                    Plan the North Korea rollout
                    <Lightning className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gap-2 rounded-full border-rose-200 bg-white/80 text-rose-700 hover:bg-rose-100 dark:border-rose-500/40 dark:bg-transparent dark:text-rose-100 dark:hover:bg-rose-500/20"
                >
                  <Link href={demoHref}>Preview the payment console</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 rounded-[2.75rem] border border-rose-200/70 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/70">
              {HERO_BULLETS.map((bullet) => {
                const Icon = bullet.icon;
                return (
                  <article key={bullet.title} className="flex gap-4 rounded-[1.75rem] border border-rose-200/60 bg-white/90 p-5 dark:border-slate-800/60 dark:bg-slate-950">
                    <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-rose-500/15 text-rose-700 dark:bg-slate-800 dark:text-rose-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h2 className="text-sm font-semibold text-slate-900 dark:text-white">{bullet.title}</h2>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{bullet.detail}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Gateway frameworks extracted from the WordPress roster
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Each processor becomes a controlled, telemetry-rich programme designed for North Korea&apos;s leadership.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_FRAMEWORKS.map((framework) => {
            const Icon = framework.icon;
            return (
              <article
                key={framework.name}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-rose-200/70 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/15 text-rose-700 dark:bg-slate-800 dark:text-rose-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{framework.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{framework.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {framework.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-rose-500/60 dark:bg-rose-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 rounded-[3rem] border border-rose-200/70 bg-gradient-to-br from-white via-rose-50 to-slate-100 p-12 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 lg:grid-cols-[minmax(0,0.43fr)_minmax(0,0.57fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-rose-600 dark:border-rose-500/40 dark:bg-slate-900 dark:text-rose-200">
              Continental telemetry
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Six continents controlled from a North Korea operations hub
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Africa, Asia, Europe, North America, Oceania, and South America formed the original navigation. We reframe
              them as live dashboards, regulator alerts, and AI copilots for leadership assurance.
            </p>
            <div className="grid gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="rounded-3xl border border-rose-200/70 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-950">
                <p className="font-semibold text-slate-900 dark:text-white">Regulator clarity</p>
                <p>Evidence trails for compliance, sanctions, and taxation across every jurisdiction.</p>
              </div>
              <div className="rounded-3xl border border-rose-200/70 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-950">
                <p className="font-semibold text-slate-900 dark:text-white">AI copilots</p>
                <p>Predictions, anomaly alerts, and scenario testing embed into daily workflows.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {SEQUENCE_STEPS.map((sequence) => {
                const Icon = sequence.icon;
                return (
                  <article
                    key={sequence.code}
                    className="flex h-full flex-col gap-3 rounded-[2.5rem] border border-rose-200/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-500/15 text-rose-700 dark:bg-slate-800 dark:text-rose-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-rose-200">
                          {sequence.code}
                        </p>
                        <h3 className="text-base font-semibold text-slate-900 dark:text-white">{sequence.heading}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{sequence.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Module matrix powering North Korea&apos;s rollout
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Multi currency, ticketing, automation, vouchers, wallets, backup, email, KYC, and multi-lingual modules now
            operate as a tightly governed matrix.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MODULE_MATRIX.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.name}
                className="flex h-full flex-col gap-3 rounded-[2.25rem] border border-rose-200/70 bg-gradient-to-br from-white via-white to-rose-50 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-500/15 text-rose-700 dark:bg-slate-800 dark:text-rose-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">{module.name}</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">{module.narrative}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 rounded-[3rem] border border-slate-900/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white shadow-lg dark:border-slate-700/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-rose-100">
              Cloud MLM Software · Thought leadership
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to modernise North Korea&apos;s payment gateways?
            </h2>
            <p className="text-sm text-rose-100/80">
              We help leaders evolve WordPress-era listings into telemetry-rich, AI-conscious operations. Align product,
              compliance, and engineering strategists to validate your next move.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 rounded-full bg-white text-slate-900 hover:bg-rose-100">
                <Link href={contactHref}>
                  Talk to Cloud MLM Software
                  <Lightning className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 rounded-full border-white/60 text-white hover:bg-white/10"
              >
                <Link href={pricingHref}>
                  Review licensing options
                  <Lightning className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 rounded-[2.5rem] border border-white/15 bg-white/5 p-8 backdrop-blur">
            <div className="grid gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-100/80">Telemetry snapshot</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-3xl font-semibold text-white">6</p>
                  <p className="text-rose-100/80">Continents referenced across the legacy navigation.</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">8</p>
                  <p className="text-rose-100/80">Gateway partners orchestrated for North Korea&apos;s rollout.</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-rose-100/80">
              AI copilots monitor conversions, risk posture, and collaboration cues across every authorised programme.
            </p>
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
