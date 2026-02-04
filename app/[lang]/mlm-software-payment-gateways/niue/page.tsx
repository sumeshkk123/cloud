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
  ChartLineUp,
  CurrencyCircleDollar,
  Lightning,
  MapTrifold,
  PlugsConnected,
  ShieldCheck,
  Sparkle,
  Stack,
  UsersThree,
  Waves
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayStream = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type CompassStep = {
  step: string;
  title: string;
  detail: string;
  icon: IconType;
};

type ModuleBadge = {
  name: string;
  insight: string;
  icon: IconType;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    title: "WordPress headline honoured",
    description: "“Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Niue – NU”.",
    icon: Waves
  },
  {
    title: "Gateway roster preserved",
    description: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain central.",
    icon: PlugsConnected
  },
  {
    title: "Continental coverage respected",
    description: "Africa, Asia, Europe, North America, Oceania, and South America convert into one operations plan.",
    icon: ChartLineUp
  }
];

const GATEWAY_STREAMS: GatewayStream[] = [
  {
    name: "PayPal & Amazon Pay lagoon",
    summary: "Digital commerce for Alofi communities and global diaspora supporters.",
    bullets: [
      "Multi currency module aligns NZD, USD, and digital tender with treasury analytics.",
      "Emails module distributes settlement, compliance, and campaign updates automatically."
    ],
    icon: Waves
  },
  {
    name: "PayU & Stripe innovation reef",
    summary: "Subscription kits and ecommerce experiences across Oceania, Asia, and Europe.",
    bullets: [
      "Ticket system manages PSP escalations, regulator conversations, and solution workflows.",
      "Auto responder powers multilingual onboarding, promotions, and retention journeys."
    ],
    icon: Sparkle
  },
  {
    name: "Authorize.Net & Braintree trust channel",
    summary: "North American acquiring aligned with Niue&apos;s compliance expectations.",
    bullets: [
      "KYC documentation vault protects identity proof, sanction checks, and renewal cadences.",
      "Backup manager safeguards payout logic, AI prompts, and audit artefacts."
    ],
    icon: ShieldCheck
  },
  {
    name: "Adyen & 2Checkout expansion tide",
    summary: "Enterprise routing for tourism, creative industries, and technology ventures.",
    bullets: [
      "E-wallet manager streams commissions with maker-checker governance and audit trails.",
      "E-voucher engine energises loyalty events, field incentives, and community programmes."
    ],
    icon: Stack
  }
];

const COMPASS_STEPS: CompassStep[] = [
  {
    step: "Compass 01",
    title: "Interpret the legacy chart",
    detail: "Translate the WordPress headline, gateway list, and navigation references into a modern design blueprint.",
    icon: Anchor
  },
  {
    step: "Compass 02",
    title: "Engineer governance breakwater",
    detail: "Blend multi currency, KYC, and automation layers for Niuean regulators and global partners.",
    icon: ShieldCheck
  },
  {
    step: "Compass 03",
    title: "Unify continental crews",
    detail: "Connect Oceania with Africa, Asia, Europe, North America, and South America via shared telemetry.",
    icon: UsersThree
  },
  {
    step: "Compass 04",
    title: "Optimise with AI tides",
    detail: "Forecast conversions, detect anomalies, and tune programmes using predictive insight.",
    icon: Lightning
  }
];

const MODULE_BADGES: ModuleBadge[] = [
  {
    name: "Multi currency module",
    insight: "Balances NZD, USD, and digital tender with variance dashboards for leadership.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    insight: "Routes PSP, regulator, and distributor cases with SLA visibility and ownership clarity.",
    icon: MapTrifold
  },
  {
    name: "Auto responder",
    insight: "Delivers multilingual coaching, compliance alerts, and campaign flows automatically.",
    icon: Sparkle
  },
  {
    name: "E-voucher",
    insight: "Issues loyalty rewards, travel passes, and event access with redemption telemetry.",
    icon: PlugsConnected
  },
  {
    name: "E-wallet",
    insight: "Streams commissions and reimbursements with maker-checker governance.",
    icon: ShieldCheck
  },
  {
    name: "Backup manager",
    insight: "Safeguards payout logic, AI prompts, and compliance artefacts against connectivity shifts.",
    icon: Anchor
  },
  {
    name: "Emails",
    insight: "Central command for transactional, regulatory, and campaign messages across continents.",
    icon: UsersThree
  },
  {
    name: "KYC documentation",
    insight: "Maintains identity trails, sanction checks, and renewal reminders for oversight.",
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
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Niue MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Niue – NU, orchestrating PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with governance automation.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/niue", locale)
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

type NiuePaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function NiuePaymentGatewaysPage({ params }: NiuePaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.4rem] border border-cyan-200/70 bg-gradient-to-br from-cyan-50 via-white to-sky-100 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(14,165,233,0.25),transparent_55%),radial-gradient(circle_at_88%_10%,rgba(59,130,246,0.22),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(56,189,248,0.2),transparent_60%)] dark:bg-[radial-gradient(circle_at_12%_12%,rgba(14,165,233,0.33),transparent_55%),radial-gradient(circle_at_88%_10%,rgba(59,130,246,0.32),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(56,189,248,0.28),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-700 dark:border-cyan-500/60 dark:bg-slate-950/70 dark:text-cyan-100">
                Ways to accept payments · Niue (NU)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Niue&apos;s MLM payment gateways refreshed for Pacific leadership
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  We upgrade the WordPress outline into a modern, AI-enabled experience. Finance, compliance, and field
                  leaders orchestrate PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout
                  across every continent listed in the source navigation.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 rounded-full bg-sky-600 text-white hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400"
                >
                  <Link href={contactHref}>
                    Plan the Niue rollout
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
              {HERO_HIGHLIGHTS.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <article key={highlight.title} className="flex gap-4 rounded-[1.75rem] border border-cyan-200/60 bg-white/90 p-5 dark:border-slate-800/60 dark:bg-slate-950">
                    <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-sky-500/15 text-sky-700 dark:bg-slate-800 dark:text-sky-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h2 className="text-sm font-semibold text-slate-900 dark:text-white">{highlight.title}</h2>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{highlight.description}</p>
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
            Gateway streams translated from the WordPress roster
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Each processor becomes a programme with compliance, telemetry, and growth enablement for Niue.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_STREAMS.map((stream) => {
            const Icon = stream.icon;
            return (
              <article
                key={stream.name}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-cyan-200/70 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-700 dark:bg-slate-800 dark:text-sky-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stream.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{stream.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {stream.bullets.map((bullet) => (
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
        <div className="grid gap-10 rounded-[3rem] border border-cyan-200/70 bg-gradient-to-br from-white via-cyan-50 to-sky-100 p-12 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 lg:grid-cols-[minmax(0,0.43fr)_minmax(0,0.57fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/70 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-600 dark:border-cyan-500/40 dark:bg-slate-900 dark:text-cyan-200">
              Continental navigation
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Six continents aligned from a Niue command room
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              The source navigation referenced Africa, Asia, Europe, North America, Oceania, and South America. We
              repurpose that list into telemetry, regulator alerts, and AI copilots supporting every stakeholder.
            </p>
            <div className="grid gap-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="rounded-3xl border border-cyan-200/70 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-950">
                <p className="font-semibold text-slate-900 dark:text-white">Regulator-ready dashboards</p>
                <p>Export AML, tax, and data governance summaries for Pacific and global authorities.</p>
              </div>
              <div className="rounded-3xl border border-cyan-200/70 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-950">
                <p className="font-semibold text-slate-900 dark:text-white">AI collaboration loops</p>
                <p>Distributors, finance teams, and partners align using predictive analytics and guided workflows.</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {COMPASS_STEPS.map((compass) => {
                const Icon = compass.icon;
                return (
                  <article
                    key={compass.step}
                    className="flex h-full flex-col gap-3 rounded-[2.5rem] border border-cyan-200/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-700 dark:bg-slate-800 dark:text-sky-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-200">
                          {compass.step}
                        </p>
                        <h3 className="text-base font-semibold text-slate-900 dark:text-white">{compass.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{compass.detail}</p>
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
            Module badges fuelling Niue&apos;s operations
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Multi currency, ticketing, automation, vouchers, wallets, backup, email, KYC, and multi-lingual modules now
            support a Pacific-first, AI-ready network.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MODULE_BADGES.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.name}
                className="flex h-full flex-col gap-3 rounded-[2.25rem] border border-cyan-200/70 bg-gradient-to-br from-white via-white to-cyan-50 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-700 dark:bg-slate-800 dark:text-sky-200">
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
              Ready to modernise Niue&apos;s payment gateways?
            </h2>
            <p className="text-sm text-cyan-100/80">
              We help Niuean MLM leaders convert WordPress-era listings into telemetry-rich, AI-aware operations. Align
              product, compliance, and engineering strategists for the next wave of expansion.
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
                  <p className="text-cyan-100/80">Gateway partners orchestrated for Niue&apos;s rollout.</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-cyan-100/80">
              AI copilots monitor conversions, risk posture, and campaign momentum from Niue to global partners.
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
