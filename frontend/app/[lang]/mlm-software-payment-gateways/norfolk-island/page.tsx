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
  Compass,
  CurrencyCircleDollar,
  Leaf,
  Lightning,
  MapTrifold,
  PlugsConnected,
  ShieldCheck,
  Stack,
  UsersThree,
  Waves
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroFact = {
  label: string;
  detail: string;
  icon: IconType;
};

type GatewayCanopy = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type JourneyStage = {
  stage: string;
  heading: string;
  description: string;
  icon: IconType;
};

type ModuleLeaf = {
  name: string;
  insight: string;
  icon: IconType;
};

const HERO_FACTS: HeroFact[] = [
  {
    label: "WordPress headline",
    detail: "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Norfolk Island – NF.",
    icon: Compass
  },
  {
    label: "Gateway roster",
    detail: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain focal.",
    icon: PlugsConnected
  },
  {
    label: "Continental reach",
    detail: "Africa, Asia, Europe, North America, Oceania, and South America guide the operating blueprint.",
    icon: Waves
  }
];

const GATEWAY_CANOPY: GatewayCanopy[] = [
  {
    title: "PayPal & Amazon Pay growth grove",
    summary: "Digital-first payout flows for Kingston, Burnt Pine, and global diaspora supporters.",
    bullets: [
      "Multi currency module balances AUD, USD, and digital tender with treasury-grade analytics.",
      "Emails module delivers settlement stories, compliance notices, and campaign updates."
    ],
    icon: Stack
  },
  {
    title: "PayU & Stripe innovation trail",
    summary: "Subscription kits and ecommerce journeys spanning Oceania, Asia, and Europe.",
    bullets: [
      "Ticket system coordinates PSP escalations, regulator conversations, and partner enablement.",
      "Auto responder nurtures onboarding, promotions, and retention experiences automatically."
    ],
    icon: ChartLineUp
  },
  {
    title: "Authorize.Net & Braintree trust timber",
    summary: "North American rails aligned with Norfolk Island compliance and data expectations.",
    bullets: [
      "KYC documentation vault protects identity dossiers, sanction results, and renewal cadences.",
      "Backup manager safeguards payout logic, AI prompts, and audit artefacts."
    ],
    icon: ShieldCheck
  },
  {
    title: "Adyen & 2Checkout canopy bridge",
    summary: "Enterprise routing for tourism, sustainability, and technology partnerships.",
    bullets: [
      "E-wallet manager streams commissions with maker-checker governance and ledger clarity.",
      "E-voucher engine fuels loyalty campaigns, events, and incentive programmes."
    ],
    icon: Leaf
  }
];

const JOURNEY_STAGES: JourneyStage[] = [
  {
    stage: "Stage 01",
    heading: "Decode the WordPress outline",
    description: "Translate the legacy headline, gateway list, and navigation references into present-day requirements.",
    icon: Compass
  },
  {
    stage: "Stage 02",
    heading: "Engineer governance canopy",
    description: "Blend multi currency, KYC, and automation layers for Norfolk Island regulators and partners.",
    icon: ShieldCheck
  },
  {
    stage: "Stage 03",
    heading: "Unify continental stewards",
    description: "Align Oceania operations with Africa, Asia, Europe, North America, and South America using shared telemetry.",
    icon: UsersThree
  },
  {
    stage: "Stage 04",
    heading: "Optimise with AI insight",
    description: "Forecast conversions, detect anomalies, and refine programmes through predictive analytics.",
    icon: Lightning
  }
];

const MODULE_LEAVES: ModuleLeaf[] = [
  {
    name: "Multi currency module",
    insight: "Balances AUD, USD, and digital assets while surfacing FX variance instantly.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    insight: "Routes PSP, regulator, and distributor cases with SLA dashboards and escalation mapping.",
    icon: MapTrifold
  },
  {
    name: "Auto responder",
    insight: "Delivers multilingual coaching, compliance alerts, and campaign flows automatically.",
    icon: Lightning
  },
  {
    name: "E-voucher",
    insight: "Issues loyalty incentives, event passes, and rewards with redemption telemetry.",
    icon: PlugsConnected
  },
  {
    name: "E-wallet",
    insight: "Streams commissions and reimbursements with maker-checker controls.",
    icon: ShieldCheck
  },
  {
    name: "Backup manager",
    insight: "Protects payout logic, AI prompts, and compliance artefacts during connectivity shifts.",
    icon: Stack
  },
  {
    name: "Emails",
    insight: "Central communications layer for transactional, regulatory, and campaign messaging.",
    icon: UsersThree
  },
  {
    name: "KYC documentation",
    insight: "Maintains identity records, sanction checks, and renewal reminders.",
    icon: ChartLineUp
  },
  {
    name: "Multi-lingual system",
    insight: "Extends English-first experiences into Pacific languages and AI assistants seamlessly.",
    icon: Waves
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Norfolk Island MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Norfolk Island – NF, orchestrating PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with AI-ready governance.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/norfolk-island", locale)
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

type NorfolkIslandPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function NorfolkIslandPaymentGatewaysPage({ params }: NorfolkIslandPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.5rem] border border-emerald-200/70 bg-gradient-to-br from-emerald-50 via-white to-lime-100 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(34,197,94,0.26),transparent_55%),radial-gradient(circle_at_88%_10%,rgba(132,204,22,0.22),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.2),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_12%,rgba(34,197,94,0.36),transparent_55%),radial-gradient(circle_at_88%_10%,rgba(132,204,22,0.3),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.28),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 dark:border-emerald-500/60 dark:bg-slate-950/70 dark:text-emerald-100">
                Ways to accept payments · Norfolk Island (NF)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Norfolk Island&apos;s MLM payment gateways transformed for sustainable scale
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  We translate the WordPress outline into an AI-ready operations centre. Finance, compliance, and field
                  leaders orchestrate PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with
                  telemetry covering every referenced continent.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                >
                  <Link href={contactHref}>
                    Plan the Norfolk Island rollout
                    <Leaf className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gap-2 rounded-full border-emerald-200 bg-white/80 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-500/40 dark:bg-transparent dark:text-emerald-100 dark:hover:bg-emerald-500/20"
                >
                  <Link href={demoHref}>Preview the payment console</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 rounded-[2.75rem] border border-emerald-200/70 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/70">
              {HERO_FACTS.map((fact) => {
                const Icon = fact.icon;
                return (
                  <article key={fact.label} className="flex gap-4 rounded-[1.75rem] border border-emerald-200/60 bg-white/90 p-5 dark:border-slate-800/60 dark:bg-slate-950">
                    <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-700 dark:bg-slate-800 dark:text-emerald-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-200">
                        {fact.label}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{fact.detail}</p>
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
            Gateway canopy derived from the source roster
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Each processor becomes a sustainable growth programme with compliance and telemetry at its core.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_CANOPY.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.title}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-emerald-200/70 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-700 dark:bg-slate-800 dark:text-emerald-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{gateway.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{gateway.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-emerald-500/60 dark:bg-emerald-300" />
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
        <div className="grid gap-10 rounded-[3rem] border border-emerald-200/70 bg-gradient-to-br from-white via-emerald-50 to-lime-100 p-12 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 lg:grid-cols-[minmax(0,0.43fr)_minmax(0,0.57fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600 dark:border-emerald-500/40 dark:bg-slate-900 dark:text-emerald-200">
              Continental collaboration
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Six-continent oversight from a Norfolk Island operations hub
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              The WordPress navigation referenced Africa, Asia, Europe, North America, Oceania, and South America. We
              convert those cues into telemetry dashboards, regulator alerts, and AI copilots built for island leadership.
            </p>
            <div className="grid gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="rounded-3xl border border-emerald-200/70 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-950">
                <p className="font-semibold text-slate-900 dark:text-white">Regulator-ready evidence</p>
                <p>Export AML, tax, and data governance footprints for authorities across continents.</p>
              </div>
              <div className="rounded-3xl border border-emerald-200/70 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-950">
                <p className="font-semibold text-slate-900 dark:text-white">AI-guided collaboration</p>
                <p>Distributors, finance teams, and partners align through predictive analytics and scenario testing.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {JOURNEY_STAGES.map((journey) => {
                const Icon = journey.icon;
                return (
                  <article
                    key={journey.stage}
                    className="flex h-full flex-col gap-3 rounded-[2.5rem] border border-emerald-200/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-700 dark:bg-slate-800 dark:text-emerald-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-200">
                          {journey.stage}
                        </p>
                        <h3 className="text-base font-semibold text-slate-900 dark:text-white">{journey.heading}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{journey.description}</p>
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
            Module leaves sustaining Norfolk Island operations
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Multi currency, ticketing, automation, vouchers, wallets, backup, email, KYC, and multi-lingual modules now
            operate in a unified canopy.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MODULE_LEAVES.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.name}
                className="flex h-full flex-col gap-3 rounded-[2.25rem] border border-emerald-200/70 bg-gradient-to-br from-white via-white to-emerald-50 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-700 dark:bg-slate-800 dark:text-emerald-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">{module.name}</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">{module.insight}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 rounded-[3rem] border border-slate-900/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white shadow-lg dark:border-slate-700/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-100">
              Cloud MLM Software · Thought leadership
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to modernise Norfolk Island payment gateways?
            </h2>
            <p className="text-sm text-emerald-100/80">
              We help Norfolk Island MLM leaders convert WordPress-era listings into telemetry-rich, AI-ready operations.
              Align product, compliance, and engineering strategists to accelerate your roadmap.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 rounded-full bg-white text-slate-900 hover:bg-emerald-100">
                <Link href={contactHref}>
                  Talk to Cloud MLM Software
                  <Leaf className="h-4 w-4" aria-hidden />
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
                  <Leaf className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 rounded-[2.5rem] border border-white/15 bg-white/5 p-8 backdrop-blur">
            <div className="grid gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-100/80">Telemetry snapshot</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-3xl font-semibold text-white">6</p>
                  <p className="text-emerald-100/80">Continents referenced in the source navigation.</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">8</p>
                  <p className="text-emerald-100/80">Gateway partners orchestrated for Norfolk Island&apos;s rollout.</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-emerald-100/80">
              AI copilots monitor conversions, risk posture, and collaboration cues from Norfolk Island to global partners.
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
