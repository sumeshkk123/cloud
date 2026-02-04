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
  AnchorSimple,
  Bank,
  CompassTool,
  CurrencyCircleDollar,
  Lightning,
  MapTrifold,
  Megaphone,
  Plugs,
  ShieldCheck,
  Sparkle,
  StackSimple,
  UsersThree,
  Waveform
} from "@phosphor-icons/react/dist/ssr";
import {
  ArrowUpRight,
  Globe2,
  LifeBuoy,
  Radar,
  Sailboat
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroCard = {
  headline: string;
  description: string;
  icon: IconType;
};

type GatewayPlay = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type ModuleGuide = {
  title: string;
  detail: string;
  icon: IconType;
};

type Phase = {
  label: string;
  title: string;
  description: string;
  icon: IconType;
};

const HERO_CARDS: HeroCard[] = [
  {
    headline: "Legacy statement honoured",
    description:
      "“Ways to accept payments from MLM Software in People’s Democratic Republic of Micronesia – FM” anchors our hero narrative with modern storytelling layered on top.",
    icon: AnchorSimple
  },
  {
    headline: "Gateway mix operationalised",
    description: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout become telemetry-rich journeys.",
    icon: StackSimple
  },
  {
    headline: "Island-ready operations",
    description: "Multi currency, ticketing, automation, vouchers, wallets, backup, email, KYC, and multi-lingual modules sync across the archipelago.",
    icon: Globe2
  }
];

const GATEWAY_PLAYS: GatewayPlay[] = [
  {
    name: "Braintree island mesh",
    summary: "Unify pop-up commerce, diaspora subscriptions, and partner marketplaces across Pohnpei, Chuuk, Yap, and Kosrae.",
    bullets: [
      "Multi currency module aligns USD, AUD, and local settlement agreements with treasury-grade dashboards.",
      "Ticket system keeps regulator correspondence, sponsor evidence, and PSP escalations in one governed stream."
    ],
    icon: Plugs
  },
  {
    name: "Skrill digital-first concierge",
    summary: "Support education programmes, microfinance initiatives, and AI-driven loyalty campaigns with risk-aware automation.",
    bullets: [
      "Auto responder drives bilingual (English & Chuukese) notifications with AI-crafted next steps.",
      "Backup manager captures campaign artefacts whenever satellite connections fluctuate."
    ],
    icon: Waveform
  },
  {
    name: "PayPal global bridge",
    summary: "Blend e-commerce buyers and distributors across Guam, Hawaii, and mainland U.S. while meeting compliance obligations.",
    bullets: [
      "Emails module circulates AML, FX, and tax updates with CFO commentary and regulatory context.",
      "KYC documentation vault stores identity checks, residency evidence, and renewal attestations."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "SecurionPay experimentation lane",
    summary: "Prototype subscription launches, AI-enabled concierge flows, and regional partnerships with comprehensive telemetry.",
    bullets: [
      "E-wallet manager streams instant commissions with maker-checker approvals and payout limits.",
      "Multi-lingual system aligns English, Chuukese, and Pohnpeian experiences across portals and AI agents."
    ],
    icon: Lightning
  }
];

const MODULE_GUIDES: ModuleGuide[] = [
  {
    title: "Multi currency system",
    detail: "Balances USD and AUD inflows with variance analytics ready for government review.",
    icon: Bank
  },
  {
    title: "Ticket system module",
    detail: "Routes compliance, PSP, and distributor requests with SLA dashboards and AI summaries.",
    icon: Radar
  },
  {
    title: "Auto responder",
    detail: "Delivers multilingual onboarding, campaign nudges, and escalation updates in seconds.",
    icon: Sparkle
  },
  {
    title: "E-voucher engine",
    detail: "Supports incentive kits, tourism partnerships, and education programmes with redemption telemetry.",
    icon: Megaphone
  },
  {
    title: "E-wallet manager",
    detail: "Streams commissions and reimbursements with configurable controls and instant notifications.",
    icon: ShieldCheck
  },
  {
    title: "Backup manager",
    detail: "Safeguards storefronts, automations, and compliance artefacts during connectivity drops.",
    icon: LifeBuoy
  },
  {
    title: "Emails module",
    detail: "Centralises transactional, campaign, and compliance messaging for leadership clarity.",
    icon: Sailboat
  },
  {
    title: "KYC documentation",
    detail: "Maintains verifications, sanction checks, and renewal evidence with automated reminders.",
    icon: MapTrifold
  },
  {
    title: "Multi-lingual system",
    detail: "Keeps English, Chuukese, Pohnpeian, and Kosraean experiences synchronised across channels.",
    icon: Globe2
  }
];

const PHASES: Phase[] = [
  {
    label: "Phase 01",
    title: "Interpret the WordPress brief",
    description:
      "We catalogue every legacy promise — hero text, gateway roster, navigation references — and map them to modern UX touchpoints.",
    icon: CompassTool
  },
  {
    label: "Phase 02",
    title: "Wire the payment fabric",
    description:
      "Gateways, modules, and AI telemetry activate together, giving finance and compliance an island-spanning command centre.",
    icon: ShieldCheck
  },
  {
    label: "Phase 03",
    title: "Operationalise intelligence",
    description:
      "Real-time dashboards surface commission readiness, FX exposure, and risk signals for leadership and regulators.",
    icon: Radar
  },
  {
    label: "Phase 04",
    title: "Scale confidently",
    description:
      "AI-driven playbooks accelerate expansions into new islands, diaspora segments, and partner alliances without losing governance.",
    icon: UsersThree
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Micronesia MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Transform the Micronesia payment gateway checklist. Cloud MLM Software orchestrates PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with AI telemetry and compliant operations.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/micronesia", locale)
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

type MicronesiaPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function MicronesiaPaymentGatewaysPage({ params }: MicronesiaPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3rem] border border-cyan-200/60 bg-gradient-to-br from-cyan-50 via-white to-sky-100 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(8,145,178,0.25),transparent_55%),radial-gradient(circle_at_88%_12%,rgba(14,165,233,0.28),transparent_55%),radial-gradient(circle_at_45%_90%,rgba(2,132,199,0.3),transparent_60%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.35),transparent_55%),radial-gradient(circle_at_88%_15%,rgba(14,165,233,0.35),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(2,132,199,0.3),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-700 dark:border-cyan-500/50 dark:bg-slate-950/70 dark:text-cyan-100">
                Ways to accept payments · Micronesia (FM)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Micronesia MLM payment gateways built for ocean-spanning confidence
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  Cloud MLM Software elevates the legacy WordPress outline into a modern, AI-ready operating model. Finance, compliance, and field teams all see how PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout power growth throughout the islands.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-cyan-600 text-white hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400">
                  <Link href={contactHref}>
                    Coordinate your Micronesia rollout
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-cyan-200 bg-white/80 text-cyan-700 hover:bg-cyan-100 dark:border-cyan-500/40 dark:bg-transparent dark:text-cyan-100 dark:hover:bg-cyan-500/10"
                >
                  <Link href={demoHref}>Preview the payment console</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5">
              {HERO_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.headline}
                    className="rounded-3xl border border-cyan-200/70 bg-white/85 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-700 dark:bg-slate-800 dark:text-cyan-200">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <h2 className="text-base font-semibold text-slate-900 dark:text-white">{card.headline}</h2>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{card.description}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Gateway playbooks grounded in Micronesia’s WordPress lineage
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Each gateway is more than a connector—it is a monitored growth lane with compliance evidence, FX clarity, and AI guidance ready for leadership.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.name}
                className="flex h-full flex-col gap-4 rounded-[2.25rem] border border-cyan-200/70 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-700 dark:bg-slate-800 dark:text-cyan-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{play.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{play.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {play.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-300" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-slate-100">
        <div className="container space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Modules from the legacy navigation, reimagined as a single console
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-slate-300">
              The WordPress navigation listed the modules. We preserve that intent and give each capability AI telemetry, governance artefacts, and leadership-ready insights.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_GUIDES.map((module) => {
              const Icon = module.icon;
              return (
                <article key={module.title} className="flex h-full flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-cyan-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{module.title}</h3>
                  </div>
                  <p className="text-sm text-slate-200">{module.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Four phases to launch and scale Micronesia</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            From honouring the WordPress text to automating operations, our cadence keeps every stakeholder aligned.
          </p>
        </div>
        <div className="relative grid gap-6 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[12.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-cyan-500/40 via-transparent to-transparent lg:block" aria-hidden />
          <div className="pointer-events-none absolute left-[37.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-cyan-500/40 via-transparent to-transparent lg:block" aria-hidden />
          <div className="pointer-events-none absolute left-[62.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-cyan-500/40 via-transparent to-transparent lg:block" aria-hidden />
          {PHASES.map((phase) => {
            const Icon = phase.icon;
            return (
              <article key={phase.label} className="rounded-[2rem] border border-cyan-200/70 bg-white/90 p-6 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/70">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-500 dark:text-slate-400">
                  <Icon className="h-5 w-5" aria-hidden />
                  {phase.label}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{phase.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{phase.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-[2.75rem] border border-cyan-200/70 bg-gradient-to-br from-cyan-600 via-cyan-500 to-sky-500 p-10 text-slate-100 shadow-xl dark:border-slate-700">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">Next step</p>
              <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                Purchase AI-powered Cloud MLM Software and lead Micronesia’s payment transformation.
              </h2>
              <p className="max-w-2xl text-sm text-white/90">
                We orchestrate timelines, compliance artefacts, and AI enablement so your distributors, regulators, and partners all trust the platform from day one.
              </p>
            </div>
            <div className="grid gap-4">
              <Button asChild size="lg" className="w-full gap-2 bg-white text-cyan-700 hover:bg-slate-100">
                <Link href={contactHref}>
                  Talk to Cloud MLM Software
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full gap-2 border-white/60 text-white hover:bg-white/10"
              >
                <Link href={demoHref}>
                  Explore the Micronesia demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
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
