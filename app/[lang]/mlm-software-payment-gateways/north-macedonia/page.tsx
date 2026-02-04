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
  Lightning,
  MapTrifold,
  Megaphone,
  PlugsConnected,
  ShieldCheck,
  Stack,
  UsersThree,
  WaveSine
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  label: string;
  value: string;
  description: string;
};

type GatewayBlueprint = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Initiative = {
  code: string;
  title: string;
  detail: string;
  icon: IconType;
};

type ModuleCard = {
  title: string;
  narrative: string;
  icon: IconType;
};

const HERO_METRICS: HeroMetric[] = [
  {
    label: "WordPress headline",
    value: "Ways to accept payments",
    description: "Preserved for People&apos;s Democratic Republic of North Macedonia – MK."
  },
  {
    label: "Gateway roster",
    value: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout",
    description: "All eight processors remain the focus of the programme."
  },
  {
    label: "Continental reach",
    value: "Africa · Asia · Europe · North America · Oceania · South America",
    description: "Legacy navigation informs our continental collaboration plan."
  }
];

const GATEWAY_BLUEPRINTS: GatewayBlueprint[] = [
  {
    title: "PayPal & Amazon Pay commerce runway",
    summary: "Support Skopje, Bitola, and diaspora networks with instant payouts and compliance clarity.",
    bullets: [
      "Multi currency analytics reconcile MKD, EUR, USD, and alternative wallets with treasury oversight.",
      "Emails module automates settlement, tax, and regulatory communications across teams."
    ],
    icon: Stack
  },
  {
    title: "PayU & Stripe innovation studio",
    summary: "Ecommerce, subscription, and AI-powered storefronts spanning Europe and the wider world.",
    bullets: [
      "Ticket system aligns PSP escalations, regulator enquiries, and engineering squads.",
      "Auto responder drives multilingual onboarding, campaigns, and retention loops."
    ],
    icon: ChartLineUp
  },
  {
    title: "Authorize.Net & Braintree trust framework",
    summary: "North American acquiring harmonised with North Macedonia&apos;s compliance and data governance.",
    bullets: [
      "KYC documentation vault safeguards identity dossiers, sanction checks, and renewal cadences.",
      "Backup manager protects payout logic, AI prompts, and audit artefacts."
    ],
    icon: ShieldCheck
  },
  {
    title: "Adyen & 2Checkout expansion grid",
    summary: "Enterprise routing for telecom, wellness, and technology partners across continents.",
    bullets: [
      "E-wallet manager streams commissions with maker-checker controls and ledger visibility.",
      "E-voucher engine energises loyalty programmes, events, and distributor incentives."
    ],
    icon: Megaphone
  }
];

const INITIATIVES: Initiative[] = [
  {
    code: "Initiative 01",
    title: "Decode the WordPress directive",
    detail: "Translate the headline, gateway list, and navigation references into a modern programme brief.",
    icon: Compass
  },
  {
    code: "Initiative 02",
    title: "Engineer governance lattice",
    detail: "Blend multi currency, KYC, and automation layers for North Macedonian regulators and global partners.",
    icon: ShieldCheck
  },
  {
    code: "Initiative 03",
    title: "Connect continental collaborators",
    detail: "Unite Europe with Africa, Asia, North America, Oceania, and South America via shared telemetry.",
    icon: UsersThree
  },
  {
    code: "Initiative 04",
    title: "Optimise with AI telemetry",
    detail: "Forecast conversions, detect anomalies, and iterate campaigns using predictive analytics.",
    icon: Lightning
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    title: "Multi currency module",
    narrative: "Balances MKD, EUR, USD, and digital tender while surfacing FX variance instantly.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    narrative: "Routes PSP, regulator, and distributor cases with SLA dashboards and workflow ownership.",
    icon: MapTrifold
  },
  {
    title: "Auto responder",
    narrative: "Delivers multilingual coaching, compliance alerts, and campaign prompts automatically.",
    icon: WaveSine
  },
  {
    title: "E-voucher",
    narrative: "Issues loyalty rewards, event access, and incentive vouchers with redemption telemetry.",
    icon: PlugsConnected
  },
  {
    title: "E-wallet",
    narrative: "Streams commissions and reimbursements with maker-checker governance.",
    icon: ShieldCheck
  },
  {
    title: "Backup manager",
    narrative: "Safeguards payout logic, AI prompts, and audit artefacts across infrastructure zones.",
    icon: Stack
  },
  {
    title: "Emails",
    narrative: "Central communications fabric for transactional, regulatory, and campaign messaging.",
    icon: UsersThree
  },
  {
    title: "KYC documentation",
    narrative: "Maintains identity trails, sanction results, and renewal reminders for oversight.",
    icon: ChartLineUp
  },
  {
    title: "Multi-lingual system",
    narrative: "Extends English-first experiences into Macedonian and regional languages seamlessly.",
    icon: Megaphone
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "North Macedonia MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of North Macedonia – MK, orchestrating PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with governance automation.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/north-macedonia", locale)
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

type NorthMacedoniaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function NorthMacedoniaPaymentGatewaysPage({ params }: NorthMacedoniaPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.4rem] border border-indigo-200/70 bg-gradient-to-br from-indigo-50 via-white to-slate-100 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(99,102,241,0.25),transparent_55%),radial-gradient(circle_at_88%_10%,rgba(165,180,252,0.22),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(56,189,248,0.2),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_12%,rgba(99,102,241,0.34),transparent_55%),radial-gradient(circle_at_88%_10%,rgba(165,180,252,0.32),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(56,189,248,0.28),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/60 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-indigo-700 dark:border-indigo-500/60 dark:bg-slate-950/70 dark:text-indigo-100">
                Ways to accept payments · North Macedonia (MK)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  North Macedonia&apos;s MLM payment gateways orchestrated with European precision
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  Cloud MLM Software reimagines the WordPress outline into an AI-ready operating console. Finance,
                  compliance, and field leaders coordinate PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree,
                  Adyen, and 2Checkout across every continent highlighted in the legacy navigation.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
                >
                  <Link href={contactHref}>
                    Plan the MK rollout
                    <Lightning className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gap-2 rounded-full border-indigo-200 bg-white/80 text-indigo-700 hover:bg-indigo-100 dark:border-indigo-500/40 dark:bg-transparent dark:text-indigo-100 dark:hover:bg-indigo-500/20"
                >
                  <Link href={demoHref}>Preview the payment console</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 rounded-[2.75rem] border border-indigo-200/70 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/70">
              {HERO_METRICS.map((metric) => (
                <div key={metric.label} className="rounded-[1.75rem] border border-indigo-200/60 bg-white/90 p-5 dark:border-slate-800/60 dark:bg-slate-950">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-200">
                    {metric.label}
                  </p>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Gateway blueprints evolved from the WordPress roster
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Each processor becomes a telemetry-rich programme with compliance and growth enablement at the core.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_BLUEPRINTS.map((blueprint) => {
            const Icon = blueprint.icon;
            return (
              <article
                key={blueprint.title}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-indigo-200/70 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-700 dark:bg-slate-800 dark:text-indigo-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{blueprint.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{blueprint.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {blueprint.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-indigo-500/60 dark:bg-indigo-300" />
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
        <div className="grid gap-10 rounded-[3rem] border border-indigo-200/70 bg-gradient-to-br from-white via-indigo-50 to-slate-100 p-12 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 lg:grid-cols-[minmax(0,0.43fr)_minmax(0,0.57fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-indigo-600 dark:border-indigo-500/40 dark:bg-slate-900 dark:text-indigo-200">
              Continental coordination
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Live telemetry across six continents anchored in North Macedonia
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              The legacy navigation referenced Africa, Asia, Europe, North America, Oceania, and South America. We convert
              those cues into dashboards, regulator alerts, and AI copilots aligned with Macedonian leadership.
            </p>
            <div className="grid gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="rounded-3xl border border-indigo-200/70 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-950">
                <p className="font-semibold text-slate-900 dark:text-white">Regulator-ready archives</p>
                <p>Export AML, sanction, and tax evidence for every jurisdiction in scope.</p>
              </div>
              <div className="rounded-3xl border border-indigo-200/70 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-950">
                <p className="font-semibold text-slate-900 dark:text-white">AI-guided collaboration</p>
                <p>Field, finance, and partner teams iterate programmes with predictive analytics.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {INITIATIVES.map((initiative) => {
                const Icon = initiative.icon;
                return (
                  <article
                    key={initiative.code}
                    className="flex h-full flex-col gap-3 rounded-[2.5rem] border border-indigo-200/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-700 dark:bg-slate-800 dark:text-indigo-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-200">
                          {initiative.code}
                        </p>
                        <h3 className="text-base font-semibold text-slate-900 dark:text-white">{initiative.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{initiative.detail}</p>
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
            Module grid powering Macedonian expansion
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Multi currency, ticketing, automation, vouchers, wallets, backup, email, KYC, and multi-lingual modules now
            operate as one network.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MODULE_CARDS.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.title}
                className="flex h-full flex-col gap-3 rounded-[2.25rem] border border-indigo-200/70 bg-gradient-to-br from-white via-white to-indigo-50 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-700 dark:bg-slate-800 dark:text-indigo-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">{module.title}</h3>
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
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-indigo-100">
              Cloud MLM Software · Thought leadership
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to modernise North Macedonia&apos;s payment gateways?
            </h2>
            <p className="text-sm text-indigo-100/80">
              We partner with Macedonian MLM leaders to transform WordPress-era listings into telemetry-rich,
              AI-conscious operations. Align product, compliance, and engineering strategists to accelerate your roadmap.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 rounded-full bg-white text-slate-900 hover:bg-indigo-100">
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
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-100/80">Telemetry snapshot</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-3xl font-semibold text-white">6</p>
                  <p className="text-indigo-100/80">Continents referenced across the legacy navigation.</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">8</p>
                  <p className="text-indigo-100/80">Gateway partners orchestrated for North Macedonia&apos;s rollout.</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-indigo-100/80">
              AI copilots monitor conversions, risk posture, and programme alignment from Skopje to global partners.
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
