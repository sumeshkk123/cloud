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
  Bank,
  Briefcase,
  Buildings,
  CreditCard,
  Lightning,
  Megaphone,
  ShieldCheck,
  Sparkle,
  StackSimple,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";
import {
  ArrowUpRight,
  BarChart3,
  Globe2,
  Infinity,
  Map,
  Receipt
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayStream = {
  name: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type ModuleDetail = {
  title: string;
  subtitle: string;
  description: string;
  icon: IconType;
};

type Step = {
  label: string;
  title: string;
  description: string;
  icon: IconType;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    title: "Legacy headline secured",
    description:
      "Our hero explicitly references “Ways to accept payments from MLM Software in People’s Democratic Republic of Monaco – MC,” ensuring the WordPress promise remains visible.",
    icon: Infinity
  },
  {
    title: "Luxury-grade connectors",
    description: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout orchestrated for Monaco’s finance climate.",
    icon: CreditCard
  },
  {
    title: "Governance-first modules",
    description: "Multi currency, ticketing, automation, vouchers, wallets, backup, emails, KYC, and multi-lingual tooling tailored for principality compliance.",
    icon: ShieldCheck
  }
];

const GATEWAY_STREAMS: GatewayStream[] = [
  {
    name: "Stripe experiential concierge",
    description: "Deliver premium event, retail, and hospitality journeys for Monaco’s high-net-worth clientele.",
    bullets: [
      "Auto responder issues multilingual invites, confirmations, and premium aftercare sequences.",
      "Backup manager safeguards curated campaign assets, agreements, and compliance artefacts."
    ],
    icon: Sparkle
  },
  {
    name: "Adyen luxury omnichannel lane",
    description: "Unify in-boutique experiences with digital storefronts supporting French Riviera visitors.",
    bullets: [
      "Multi currency insights manage EUR, USD, GBP, and CHF settlements with FX guardrails.",
      "Ticket workflows track PSP interactions, sanction checks, and AML escalations with auditable evidence."
    ],
    icon: Buildings
  },
  {
    name: "Authorize.Net partnership bridge",
    description: "Maintain transparent commission flows for cross-border alliances headquartered in the US.",
    bullets: [
      "E-wallet programme streams instant commissions with maker-checker approvals and luxury-tier limits.",
      "Emails module curates compliance, tax, and treasury updates for Monaco and partner jurisdictions."
    ],
    icon: Briefcase
  },
  {
    name: "PayPal global member network",
    description: "Support Monaco-based leaders connecting with distributors across Europe, the Middle East, and Africa.",
    bullets: [
      "KYC documentation vault stores enhanced due diligence, residency evidence, and sanction screening records.",
      "Multi-lingual system aligns English, French, Italian, and Arabic journeys across apps and AI copilots."
    ],
    icon: Globe2
  }
];

const MODULE_DETAILS: ModuleDetail[] = [
  {
    title: "Multi currency system",
    subtitle: "Treasury clarity",
    description: "Variance analytics for EUR, USD, CHF, GBP, and AED ready for finance and regulator review.",
    icon: Bank
  },
  {
    title: "Ticket system module",
    subtitle: "Service harmony",
    description: "Routes compliance, PSP, and concierge requests with SLA dashboards and AI-generated summaries.",
    icon: Receipt
  },
  {
    title: "Auto responder",
    subtitle: "Luxury communications",
    description: "Delivers premium multilingual experiences instantly, from onboarding to bespoke events.",
    icon: Megaphone
  },
  {
    title: "E-voucher engine",
    subtitle: "Exclusive incentives",
    description: "Manages curated experiences, gifting programmes, and membership privileges with redemption telemetry.",
    icon: BarChart3
  },
  {
    title: "E-wallet manager",
    subtitle: "Instant confidence",
    description: "Streams commissions with governance-friendly limits, approvals, and audit evidence.",
    icon: StackSimple
  },
  {
    title: "Backup manager",
    subtitle: "Continuity assured",
    description: "Preserves storefronts, automations, and compliance artefacts with immutable history.",
    icon: ShieldCheck
  },
  {
    title: "Emails module",
    subtitle: "Executive alignment",
    description: "Centralises transactional, campaign, and compliance messages with analytics for leadership.",
    icon: Sparkle
  },
  {
    title: "KYC documentation",
    subtitle: "Enhanced diligence",
    description: "Version-controlled identity, residency, and sanction checks ready for Monaco regulators.",
    icon: Map
  },
  {
    title: "Multi-lingual system",
    subtitle: "Riviera ready",
    description: "Synchronises English, French, Italian, Arabic, and Russian journeys across portals and AI assistants.",
    icon: Globe2
  }
];

const STEPS: Step[] = [
  {
    label: "Stage 01",
    title: "Interpret the WordPress brief",
    description: "The hero statement, gateway roster, and navigation references become foundational design inputs.",
    icon: Infinity
  },
  {
    label: "Stage 02",
    title: "Wire the Monaco backbone",
    description: "Payment adapters, modules, and telemetry align with principality compliance expectations.",
    icon: Buildings
  },
  {
    label: "Stage 03",
    title: "Enable luxury operations",
    description: "Dashboards, comms, and workflows launch with programmes for concierge, finance, and field leadership.",
    icon: UsersThree
  },
  {
    label: "Stage 04",
    title: "Optimise and expand",
    description: "Quarterly reviews tune commission structures, FX exposure, and partner alliances with AI insights.",
    icon: Lightning
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
}): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const title = "Monaco MLM Payment Gateways | Cloud MLM Software";
  const description =
    "Deliver Monaco-grade MLM payment experiences. Cloud MLM Software orchestrates PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout with luxury-ready automation.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-payment-gateways/monaco", locale)
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

type MonacoPaymentGatewaysPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function MonacoPaymentGatewaysPage({ params }: MonacoPaymentGatewaysPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[3.5rem] border border-rose-200/60 bg-gradient-to-br from-rose-50 via-white to-slate-100 px-6 py-20 text-slate-900 shadow-sm dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100 sm:px-14">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(248,113,113,0.25),transparent_55%),radial-gradient(circle_at_90%_12%,rgba(79,70,229,0.25),transparent_55%),radial-gradient(circle_at_40%_90%,rgba(30,64,175,0.28),transparent_60%)] dark:bg-[radial-gradient(circle_at_10%_20%,rgba(248,113,113,0.35),transparent_55%),radial-gradient(circle_at_90%_12%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_40%_90%,rgba(30,64,175,0.35),transparent_60%)]"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-start">
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-400/50 bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-rose-700 dark:border-rose-500/50 dark:bg-slate-950/70 dark:text-rose-200">
                Ways to accept payments · Monaco (MC)
              </span>
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Monaco’s MLM payment gateways curated for principality precision
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-200">
                  We transform the original WordPress outline into a luxury-grade operating system. Finance, compliance, and field leaders see gateway performance, AI insights, and governance artefacts through a Monaco-first lens.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-rose-600 text-white hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400">
                  <Link href={contactHref}>
                    Plan the Monaco payment rollout
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-rose-200 bg-white/80 text-rose-700 hover:bg-rose-100 dark:border-rose-500/40 dark:bg-transparent dark:text-rose-100 dark:hover:bg-rose-500/10"
                >
                  <Link href={demoHref}>Preview the payment console</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-6">
              {HERO_HIGHLIGHTS.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <article
                    key={highlight.title}
                    className="rounded-3xl border border-rose-200/60 bg-white/85 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/15 text-rose-700 dark:bg-slate-800 dark:text-rose-200">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <h2 className="text-base font-semibold text-slate-900 dark:text-white">{highlight.title}</h2>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{highlight.description}</p>
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
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Gateway streams engineered for Monaco</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Every connector from the WordPress page becomes a programme with telemetry, compliance artefacts, and premium experiences.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_STREAMS.map((stream) => {
            const Icon = stream.icon;
            return (
              <article
                key={stream.name}
                className="flex h-full flex-col gap-4 rounded-[2.25rem] border border-rose-200/60 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-950/70"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/15 text-rose-700 dark:bg-slate-800 dark:text-rose-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{stream.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{stream.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {stream.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-rose-500 dark:bg-rose-300" aria-hidden />
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
              Modules from the legacy navigation, orchestrated for Monaco’s leadership
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-slate-300">
              The WordPress module list becomes a curated console with AI telemetry, audit evidence, and executive-ready views.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_DETAILS.map((module) => {
              const Icon = module.icon;
              return (
                <article key={module.title} className="flex h-full flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-rose-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-white">{module.title}</h3>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/60">{module.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-200">{module.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Four stages to Monaco-grade delivery</h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Our Monaco pod keeps every milestone true to the WordPress brief while unlocking AI-led excellence.
          </p>
        </div>
        <div className="relative grid gap-6 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[12.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-rose-500/40 via-transparent to-transparent lg:block" aria-hidden />
          <div className="pointer-events-none absolute left-[37.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-rose-500/40 via-transparent to-transparent lg:block" aria-hidden />
          <div className="pointer-events-none absolute left-[62.5%] top-12 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-rose-500/40 via-transparent to-transparent lg:block" aria-hidden />
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.label} className="rounded-[2rem] border border-rose-200/60 bg-white/90 p-6 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/70">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-rose-500 dark:text-slate-400">
                  <Icon className="h-5 w-5" aria-hidden />
                  {step.label}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-[2.75rem] border border-rose-200/60 bg-gradient-to-br from-rose-600 via-rose-500 to-indigo-500 p-10 text-slate-100 shadow-xl dark:border-slate-700">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">Next step</p>
              <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                Purchase AI-powered Cloud MLM Software to lead in Monaco.
              </h2>
              <p className="max-w-2xl text-sm text-white/90">
                Launch with curated enablement, regulator-ready artefacts, and luxury-grade operations. Our principality pod ensures every experience feels bespoke.
              </p>
            </div>
            <div className="grid gap-4">
              <Button asChild size="lg" className="w-full gap-2 bg-white text-rose-700 hover:bg-slate-100">
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
                  Explore the Monaco demo
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
