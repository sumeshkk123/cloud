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
  Anchor,
  ChartsLine,
  Compass,
  CurrencyCircleDollar,
  Lightning,
  MapTrifold,
  PlugsConnected,
  ShieldCheck,
  StarFour,
  UsersThree,
  Waves
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroCard = {
  title: string;
  detail: string;
  icon: IconType;
};

type GatewayWave = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Voyage = {
  step: string;
  title: string;
  description: string;
  icon: IconType;
};

type ModuleSignal = {
  name: string;
  insight: string;
  icon: IconType;
};

const HERO_CARDS: HeroCard[] = [
  {
    title: "Headline honoured",
    detail: "“Ways to accept payments from MLM Software in People&apos;s Democratic Republic of New Caledonia – NC”.",
    icon: Compass
  },
  {
    title: "Gateway roster",
    detail: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
    icon: PlugsConnected
  },
  {
    title: "Continental scope",
    detail: "Africa, Asia, Europe, North America, Oceania, and South America shaped into one plan.",
    icon: Waves
  }
];

const GATEWAY_WAVES: GatewayWave[] = [
  {
    name: "PayPal & Amazon Pay lagoon",
    summary: "Digital-first flows for Nouméa, Koné, and Pacific diaspora communities.",
    bullets: [
      "Multi currency dashboards reconcile XPF, EUR, USD, and travel wallets in real time.",
      "Emails module publishes settlement, tax, and compliance updates to island leadership."
    ],
    icon: Waves
  },
  {
    name: "PayU & Stripe reef innovation",
    summary: "APAC and European commerce programmes with AI-ready storefronts.",
    bullets: [
      "Ticket system aligns PSP escalations, regulator engagements, and support swarms.",
      "Auto responder nurtures onboarding journeys in French and English playbooks."
    ],
    icon: StarFour
  },
  {
    name: "Authorize.Net & Braintree trust channel",
    summary: "North American rails calibrated for French Pacific compliance.",
    bullets: [
      "KYC documentation preserves identity dossiers, sanction results, and renewal cadences.",
      "Backup manager safeguards payout logic, continuity plans, and regulator artefacts."
    ],
    icon: ShieldCheck
  },
  {
    name: "Adyen & 2Checkout expansion current",
    summary: "Enterprise routing for tourism, mining, and fintech partners across Oceania.",
    bullets: [
      "E-wallet orchestrates instant commissions with maker-checker controls.",
      "E-voucher delivers campaign incentives, loyalty perks, and event access effortlessly."
    ],
    icon: ChartsLine
  }
];

const VOYAGES: Voyage[] = [
  {
    step: "Voyage 01",
    title: "Chart the WordPress currents",
    description: "Translate the legacy headline, gateway callouts, and continental listings into a modern brief.",
    icon: Compass
  },
  {
    step: "Voyage 02",
    title: "Engineer governance reefs",
    description: "Blend multi currency, KYC, and automation layers for French Pacific regulators and partners.",
    icon: ShieldCheck
  },
  {
    step: "Voyage 03",
    title: "Synchronise global crews",
    description: "Connect Oceania, Asia, Europe, Africa, and the Americas with shared telemetry and AI copilots.",
    icon: UsersThree
  },
  {
    step: "Voyage 04",
    title: "Optimise with tidal analytics",
    description: "Predict conversions, risk, and campaign ROI using data-led experimentation.",
    icon: Lightning
  }
];

const MODULE_SIGNALS: ModuleSignal[] = [
  {
    name: "Multi currency module",
    insight: "Balances XPF, EUR, USD, and digital tender while tracking FX variance.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    insight: "Coordinates PSP, regulator, and distributor cases with SLA precision.",
    icon: MapTrifold
  },
  {
    name: "Auto responder",
    insight: "Delivers multilingual journeys, compliance alerts, and coaching prompts automatically.",
    icon: Lightning
  },
  {
    name: "E-voucher",
    insight: "Issues travel perks, events access, and loyalty boosters for island programmes.",
    icon: StarFour
  },
  {
    name: "E-wallet",
    insight: "Streams commissions and reimbursements with maker-checker governance.",
    icon: ShieldCheck
  },
  {
    name: "Backup manager",
    insight: "Protects payout logic, AI prompts, and compliance artefacts against connectivity shifts.",
    icon: Anchor
  },
  {
    name: "Emails",
    insight: "Central hub for transactional, campaign, and compliance communications.",
    icon: UsersThree
  },
  {
    name: "KYC documentation",
    insight: "Maintains distributor identity trails, sanction checks, and renewal reminders.",
    icon: MapTrifold
  },
  {
    name: "Multi-lingual system",
    insight: "Extends English experiences into French and regional languages seamlessly.",
    icon: Waves
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "New Caledonia MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of New Caledonia – NC, orchestrating PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with governance automation.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/new-caledonia", locale)
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

type NewCaledoniaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale };
};

export default function NewCaledoniaPaymentGatewaysPage({ params }: NewCaledoniaPaymentGatewaysPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.5rem] border border-cyan-200/70 bg-gradient-to-br from-cyan-50 via-white to-emerald-50 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(16,185,129,0.25),transparent_55%),radial-gradient(circle_at_88%_10%,rgba(6,182,212,0.24),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.2),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_12%,rgba(16,185,129,0.36),transparent_55%),radial-gradient(circle_at_88%_10%,rgba(6,182,212,0.36),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.28),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-700 dark:border-cyan-500/60 dark:bg-slate-950/70 dark:text-cyan-100">
                Ways to accept payments · New Caledonia (NC)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  New Caledonia&apos;s MLM payment gateways, tuned for Pacific leadership
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  Cloud MLM Software translates the source WordPress outline into a modern command centre. PayPal,
                  Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout connect to finance, compliance,
                  and distributor teams across People&apos;s Democratic Republic of New Caledonia.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                >
                  <Link href={contactHref}>
                    Plan the island rollout
                    <Waves className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gap-2 rounded-full border-cyan-200 bg-white/80 text-cyan-700 hover:bg-cyan-100 dark:border-cyan-500/40 dark:bg-transparent dark:text-cyan-100 dark:hover:bg-cyan-500/20"
                >
                  <Link href={demoHref}>Preview the payment console</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 rounded-[2.75rem] border border-cyan-200/70 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/70">
              {HERO_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <article key={card.title} className="flex gap-4 rounded-[1.75rem] border border-cyan-200/60 bg-white/90 p-5 dark:border-slate-800/60 dark:bg-slate-950">
                    <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-700 dark:bg-slate-800 dark:text-cyan-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h2 className="text-sm font-semibold text-slate-900 dark:text-white">{card.title}</h2>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{card.detail}</p>
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
            Gateway waves inspired by the WordPress roster
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Each processor becomes a Pacific-proof programme with telemetry, compliance, and growth enablement.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_WAVES.map((wave) => {
            const Icon = wave.icon;
            return (
              <article
                key={wave.name}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-cyan-200/70 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-700 dark:bg-slate-800 dark:text-cyan-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{wave.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{wave.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {wave.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-cyan-500/60 dark:bg-cyan-300" />
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
        <div className="grid gap-10 rounded-[3rem] border border-cyan-200/70 bg-gradient-to-br from-white via-cyan-50 to-emerald-50 p-12 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 lg:grid-cols-[minmax(0,0.43fr)_minmax(0,0.57fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/70 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-600 dark:border-cyan-500/40 dark:bg-slate-900 dark:text-cyan-200">
              Pacific command centre
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Continents aligned from a New Caledonia operations hub
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              The original navigation listed six continents. We fuse them into a live workspace with governance alerts,
              AI copilots, and programme telemetry calibrated for Pacific leadership.
            </p>
            <div className="grid gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="rounded-3xl border border-cyan-200/70 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-950">
                <p className="font-semibold text-slate-900 dark:text-white">Regulator-ready dashboards</p>
                <p>Surface PSD2, AML, and French Pacific requirements with exportable evidence.</p>
              </div>
              <div className="rounded-3xl border border-cyan-200/70 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-950">
                <p className="font-semibold text-slate-900 dark:text-white">AI-guided enablement</p>
                <p>Distributors, partners, and banking allies collaborate through predictive insights.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {VOYAGES.map((voyage) => {
                const Icon = voyage.icon;
                return (
                  <article
                    key={voyage.step}
                    className="flex h-full flex-col gap-3 rounded-[2.5rem] border border-cyan-200/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-700 dark:bg-slate-800 dark:text-cyan-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-200">
                          {voyage.step}
                        </p>
                        <h3 className="text-base font-semibold text-slate-900 dark:text-white">{voyage.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{voyage.description}</p>
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
            Module signals stabilised for every voyage
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Multi currency, ticketing, automation, vouchers, wallets, backup, email, KYC, and multi-lingual modules now
            power New Caledonia&apos;s operating rhythm.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MODULE_SIGNALS.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.name}
                className="flex h-full flex-col gap-3 rounded-[2.25rem] border border-cyan-200/70 bg-gradient-to-br from-white via-white to-cyan-50 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-700 dark:bg-slate-800 dark:text-cyan-200">
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
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100">
              Cloud MLM Software · Thought leadership
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to modernise the New Caledonia payment landscape?
            </h2>
            <p className="text-sm text-cyan-100/80">
              We partner with Pacific MLM leaders to evolve WordPress-era listings into telemetry-rich, AI-guided
              experiences. Align product, compliance, and engineering pioneers for your next milestone.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 rounded-full bg-white text-slate-900 hover:bg-cyan-100">
                <Link href={contactHref}>
                  Talk to Cloud MLM Software
                  <Waves className="h-4 w-4" aria-hidden />
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
                  <Waves className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 rounded-[2.5rem] border border-white/15 bg-white/5 p-8 backdrop-blur">
            <div className="grid gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/80">Telemetry snapshot</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-3xl font-semibold text-white">6</p>
                  <p className="text-cyan-100/80">Continents referenced across the legacy navigation.</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-white">8</p>
                  <p className="text-cyan-100/80">Gateway partners orchestrated for New Caledonia&apos;s rollout.</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-cyan-100/80">
              AI copilots monitor conversions, risk posture, and programme health from Nouméa to global partners.
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
