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
  BookOpen,
  ChartLineUp,
  CurrencyCircleDollar,
  GlobeHemisphereWest,
  Lightning,
  PlugsConnected,
  RocketLaunch,
  ShieldCheck,
  ShoppingBag,
  UsersThree,
  Wind
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  label: string;
  value: string;
  description: string;
};

type GatewayCharter = {
  name: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Sprint = {
  phase: string;
  title: string;
  detail: string;
  icon: IconType;
};

type ModuleRow = {
  title: string;
  insight: string;
  icon: IconType;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    label: "WordPress headline",
    value: "Ways to accept payments",
    description: "We retain the legacy promise for People&apos;s Democratic Republic of Netherlands – NL."
  },
  {
    label: "Gateway roster",
    value: "8 processors",
    description: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout."
  },
  {
    label: "Continents",
    value: "Six regions",
    description: "Africa · Asia · Europe · North America · Oceania · South America."
  }
];

const GATEWAY_CHARTER: GatewayCharter[] = [
  {
    name: "PayPal & Amazon Pay digital trade lane",
    description: "Omnichannel experiences for Amsterdam, Rotterdam, and cross-border ecommerce.",
    bullets: [
      "Multi currency telemetry reconciles EUR, USD, and local wallets in real time.",
      "Emails module sends compliance, VAT, and settlement narratives to stakeholders."
    ],
    icon: ShoppingBag
  },
  {
    name: "PayU & Stripe innovation studio",
    description: "Subscription clubs, data marketplaces, and AI-assisted storefronts.",
    bullets: [
      "Ticketing grid coordinates PSP escalations, regulator dialogues, and solution engineering.",
      "Auto responder nurtures onboarding and retention in Dutch and English playbooks."
    ],
    icon: RocketLaunch
  },
  {
    name: "Authorize.Net & Braintree trust bridge",
    description: "North American acquiring aligned with Dutch privacy and PSD2 obligations.",
    bullets: [
      "KYC documentation holds identity proofs, sanction reports, and renewal cadences.",
      "Backup manager protects payout logic, audit artefacts, and AI prompt libraries."
    ],
    icon: ShieldCheck
  },
  {
    name: "Adyen & 2Checkout expansion fabric",
    description: "Enterprise-grade routing for EU, LATAM, and APAC partner ecosystems.",
    bullets: [
      "E-wallet manager streams commissions with maker-checker approvals and audit trails.",
      "E-voucher engine fuels loyalty events, travel incentives, and partner roadshows."
    ],
    icon: ChartLineUp
  }
];

const SPRINTS: Sprint[] = [
  {
    phase: "Sprint 01",
    title: "Decode legacy intent",
    detail: "Extract the WordPress headline, gateway roster, and continental navigation into present-day requirements.",
    icon: BookOpen
  },
  {
    phase: "Sprint 02",
    title: "Engineer compliance fabric",
    detail: "Blend PSD2, GDPR, and Dutch tax expectations with AI-governed automation layers.",
    icon: ShieldCheck
  },
  {
    phase: "Sprint 03",
    title: "Activate global collaboration",
    detail: "Connect Dutch field leaders with partners across Europe, the Americas, Oceania, Asia, and Africa.",
    icon: UsersThree
  },
  {
    phase: "Sprint 04",
    title: "Optimise with live telemetry",
    detail: "Scenario-test conversions, chargebacks, and campaign ROI with predictive analytics.",
    icon: Lightning
  }
];

const MODULE_ROWS: ModuleRow[] = [
  {
    title: "Multi currency module",
    insight: "Balances EUR, USD, GBP, and digital tender with treasury-ready variance dashboards.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    insight: "Routes PSP, regulator, and distributor cases with SLA and ownership clarity.",
    icon: GlobeHemisphereWest
  },
  {
    title: "Auto responder",
    insight: "Delivers Dutch and English automations for onboarding, compliance, and retention.",
    icon: Wind
  },
  {
    title: "E-voucher",
    insight: "Issues digital incentives for events, travel programmes, and loyalty milestones.",
    icon: PlugsConnected
  },
  {
    title: "E-wallet",
    insight: "Instant commissions governed by maker-checker flows and PSD2-ready logs.",
    icon: ShieldCheck
  },
  {
    title: "Backup manager",
    insight: "Protects payout logic, AI models, and historical reports for auditors.",
    icon: BookOpen
  },
  {
    title: "Emails",
    insight: "Central hub for transactional, regulatory, and campaign communications.",
    icon: UsersThree
  },
  {
    title: "KYC documentation",
    insight: "Maintains identity artefacts, sanction checks, and renewal reminders.",
    icon: ChartLineUp
  },
  {
    title: "Multi-lingual system",
    insight: "Extends English-first journeys into Dutch, German, and French experiences seamlessly.",
    icon: GlobeHemisphereWest
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Netherlands MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Netherlands – NL, translating the WordPress roster of PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout into AI-ready operations.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/netherlands", locale)
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

type NetherlandsPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function NetherlandsPaymentGatewaysPage({ params }: NetherlandsPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.25rem] border border-sky-200/70 bg-gradient-to-br from-sky-50 via-white to-orange-50 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_88%_10%,rgba(249,115,22,0.22),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(14,165,233,0.22),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_12%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_88%_10%,rgba(249,115,22,0.32),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(14,165,233,0.3),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/60 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 dark:border-sky-500/60 dark:bg-slate-950/70 dark:text-sky-100">
                Ways to accept payments · Netherlands (NL)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Netherlands MLM payment gateways, elevated for global precision
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  We translate the legacy WordPress listing into a corporate-grade, AI-aware experience. Dutch finance,
                  compliance, and field leaders orchestrate PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree,
                  Adyen, and 2Checkout with telemetry covering every continent reference.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 rounded-full bg-sky-600 text-white hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400"
                >
                  <Link href={contactHref}>
                    Plan the Dutch rollout
                    <Wind className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gap-2 rounded-full border-sky-200 bg-white/80 text-sky-700 hover:bg-sky-100 dark:border-sky-500/40 dark:bg-transparent dark:text-sky-100 dark:hover:bg-sky-500/20"
                >
                  <Link href={demoHref}>Preview the payment console</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-3 rounded-[2.75rem] border border-sky-200/60 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/70">
              {HERO_HIGHLIGHTS.map((highlight) => (
                <div key={highlight.label} className="flex flex-col gap-1 border-b border-slate-200/60 pb-4 last:border-b-0 dark:border-slate-700/60">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-200">
                    {highlight.label}
                  </p>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">{highlight.value}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Gateway charter engineered from the source roster
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Every processor transforms into a playbook covering commerce, compliance, and partner enablement for Dutch
            leaders.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_CHARTER.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-sky-200/70 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-700 dark:bg-slate-800 dark:text-sky-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{gateway.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{gateway.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-sky-500/60 dark:bg-sky-300" />
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
        <div className="grid gap-10 rounded-[3rem] border border-sky-200/70 bg-gradient-to-br from-white via-sky-50 to-orange-50 p-12 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 lg:grid-cols-[minmax(0,0.43fr)_minmax(0,0.57fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-sky-600 dark:border-sky-500/40 dark:bg-slate-900 dark:text-sky-200">
              Global coverage
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Six-continent oversight from a Dutch command centre
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              The WordPress navigation listed Africa, Asia, Europe, North America, Oceania, and South America. We convert
              those references into an oversight workspace with live telemetry, risk alerts, and AI copilots ready for
              global collaboration.
            </p>
            <div className="grid gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="rounded-3xl border border-sky-200/70 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-950">
                <p className="font-semibold text-slate-900 dark:text-white">Regulatory visibility</p>
                <p>Map PSD2, GDPR, and partner jurisdiction obligations with audit-ready artefacts.</p>
              </div>
              <div className="rounded-3xl border border-sky-200/70 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-950">
                <p className="font-semibold text-slate-900 dark:text-white">AI telemetry</p>
                <p>Detect anomalies, chargebacks, and emerging opportunities before they surface.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {SPRINTS.map((sprint) => {
                const Icon = sprint.icon;
                return (
                  <article
                    key={sprint.phase}
                    className="flex h-full flex-col gap-3 rounded-[2.5rem] border border-sky-200/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-700 dark:bg-slate-800 dark:text-sky-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-200">
                          {sprint.phase}
                        </p>
                        <h3 className="text-base font-semibold text-slate-900 dark:text-white">{sprint.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{sprint.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Module network activated</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Multi currency, ticketing, automation, vouchers, wallets, backup, email, KYC, and multi-lingual capabilities
            from the legacy navigation now operate as a Dutch-led network.
          </p>
        </div>
        <div className="overflow-hidden rounded-[2.5rem] border border-sky-200/70 bg-white shadow-sm dark:border-slate-800/60 dark:bg-slate-950/70">
          <div className="grid divide-y divide-slate-200 dark:divide-slate-800 md:grid-cols-3 md:divide-x md:divide-y-0">
            {MODULE_ROWS.map((module) => {
              const Icon = module.icon;
              return (
                <div key={module.title} className="flex h-full flex-col gap-3 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-700 dark:bg-slate-800 dark:text-sky-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">{module.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{module.insight}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 rounded-[3rem] border border-slate-900/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white shadow-lg dark:border-slate-700/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-sky-100">
              Cloud MLM Software · Thought leadership
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to modernise Netherlands payment gateways?
            </h2>
            <p className="text-sm text-sky-100/80">
              We partner with Dutch MLM leaders to transform WordPress-era listings into telemetry-rich operations. Align
              product, compliance, and engineering stakeholders for your next milestone.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 rounded-full bg-white text-slate-900 hover:bg-sky-100">
                <Link href={contactHref}>
                  Talk to Cloud MLM Software
                  <Wind className="h-4 w-4" aria-hidden />
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
                  <Wind className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 rounded-[2.5rem] border border-white/15 bg-white/5 p-8 backdrop-blur">
            <div className="grid gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-100/80">Telemetry snapshot</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-3xl font-semibold text-white">6</p>
                  <p className="text-sky-100/80">Continents represented within the WordPress navigation.</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">8</p>
                  <p className="text-sky-100/80">Priority gateways aligned to Dutch growth initiatives.</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-sky-100/80">
              AI copilots monitor conversions, risk posture, and collaboration signals across every Dutch expansion lane.
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
