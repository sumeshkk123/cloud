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
  AirplaneTilt,
  ChartLineUp,
  ChatsCircle,
  ClipboardText,
  Compass,
  CurrencyCircleDollar,
  DeviceMobileCamera,
  GlobeHemisphereWest,
  Lightning,
  MapTrifold,
  Megaphone,
  PlugsConnected,
  RocketLaunch,
  ShieldCheck,
  Stack,
  UsersThree,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Insight = {
  label: string;
  headline: string;
  description: string;
  icon: IconType;
};

type StatCard = {
  label: string;
  value: string;
  description: string;
};

type GatewayPlan = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Sprint = {
  phase: string;
  name: string;
  detail: string;
  icon: IconType;
};

type ModuleSignal = {
  name: string;
  insight: string;
  icon: IconType;
};

const INSIGHTS: Insight[] = [
  {
    label: "WordPress lineage",
    headline: "Headline preserved for Saint Martin (French part)",
    description:
      "We retain “Ways to accept payments from MLM Software in People’s Democratic Republic of Saint Martin (French part) – MF” as the canonical anchor.",
    icon: Stack
  },
  {
    label: "Gateway alignment",
    headline: "Eight PSP partners modernised",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout operate with new compliance, FX, and automation guardrails.",
    icon: PlugsConnected
  },
  {
    label: "Bi-territorial nuance",
    headline: "French-Dutch island orchestration",
    description:
      "Tourism, retail, fintech, and logistics leaders on both sides of the island coordinate with bilingual content, multi currency dashboards, and AI copilots.",
    icon: GlobeHemisphereWest
  }
];

const STAT_CARDS: StatCard[] = [
  {
    label: "Gateway roster",
    value: "8",
    description: "Carried over from the WordPress archive with enhanced automation."
  },
  {
    label: "Launch playbooks",
    value: "6",
    description: "Covering Marigot, Grand Case, Philipsburg, and key diaspora hubs."
  },
  {
    label: "AI monitors",
    value: "3",
    description: "Conversion, compliance, and commission health tracked in real time."
  }
];

const GATEWAYS: GatewayPlan[] = [
  {
    title: "PayPal & Amazon Pay cross-border lanes",
    summary: "Seamless commerce for tourism, yacht services, and ecommerce merchants with EU and US clientele.",
    bullets: [
      "Multi currency module balances EUR, USD, ANG, and XCD settlements with tolerance alerts.",
      "Emails module issues AI-personalised receipts, VAT summaries, and compliance notices in English and French."
    ],
    icon: CurrencyCircleDollar
  },
  {
    title: "PayU & Stripe omnichannel fabric",
    summary: "Subscription clubs, duty-free retail, and event ticketing thrive across both jurisdictions.",
    bullets: [
      "Ticket system module routes PSP escalations, logistics updates, and field coaching into SLA dashboards.",
      "Auto responder sends multilingual onboarding, risk reminders, and loyalty campaigns within minutes."
    ],
    icon: Megaphone
  },
  {
    title: "Authorize.Net & Braintree trust assurance",
    summary: "North American partners retain familiar rails while French compliance remains intact.",
    bullets: [
      "KYC documentation vault stores Know Your Traveller, beneficial ownership, and tax residency artefacts.",
      "Backup manager safeguards settlement files, dispute narratives, and auditor-ready evidence."
    ],
    icon: ShieldCheck
  },
  {
    title: "Adyen & 2Checkout expansion runway",
    summary: "Scale across the Caribbean basin with unified analytics and automated payouts.",
    bullets: [
      "E-wallet module releases instant commissions when acquiring partners confirm clear funds.",
      "E-voucher engine powers retail collaborations, cruise excursions, and experiential rewards."
    ],
    icon: RocketLaunch
  }
];

const SPRINTS: Sprint[] = [
  {
    phase: "Sprint 01",
    name: "Curate the historical record",
    detail:
      "Parse the original WordPress briefing to capture headline phrasing, gateway lists, and module references before modernising.",
    icon: Compass
  },
  {
    phase: "Sprint 02",
    name: "Engineer cross-border compliance",
    detail:
      "Blend GDPR, EU AMLD, FATF, and Dutch risk controls with AI summaries so tourism and fintech operators stay audit-ready.",
    icon: ClipboardText
  },
  {
    phase: "Sprint 03",
    name: "Activate automation and telemetry",
    detail:
      "Ticketing, backups, multilingual content, and FX dashboards power live collaboration between French and Dutch teams.",
    icon: Lightning
  },
  {
    phase: "Sprint 04",
    name: "Extend to regional partners",
    detail:
      "Use scenario models to expand into Saint Barthélemy, Anguilla, and Guadeloupe with repeatable launch kits.",
    icon: ChartLineUp
  }
];

const MODULE_SIGNALS: ModuleSignal[] = [
  {
    name: "Multi currency module",
    insight: "Tracks EUR, USD, ANG, and XCD with predictive variance alerts for finance leaders.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    insight: "Routes PSP, logistics, and guest-experience threads into SLA-driven workstreams.",
    icon: ChatsCircle
  },
  {
    name: "Multilingual system",
    insight: "Delivers English, French, and Dutch engagement without fragmenting brand identity.",
    icon: UsersThree
  },
  {
    name: "Auto responder",
    insight: "Automates onboarding, compliance, and loyalty drips to keep both sides of the island aligned.",
    icon: Megaphone
  },
  {
    name: "E-wallet",
    insight: "Provides instant commissions, reimbursements, and loyalty payouts with maker-checker controls.",
    icon: Wallet
  },
  {
    name: "E-voucher",
    insight: "Distributes retail rewards, excursion passes, and affiliate incentives with redemption telemetry.",
    icon: Stack
  },
  {
    name: "KYC documentation",
    insight: "Stores travel, residency, and beneficial ownership evidence with renewal alerts.",
    icon: ClipboardText
  },
  {
    name: "Backup manager",
    insight: "Protects settlements, dispute trails, and analytics across Paris, Amsterdam, and Caribbean zones.",
    icon: DeviceMobileCamera
  }
];

export const metadata: Metadata = {
  title: "Saint Martin (French Part) MLM Payment Gateways | Cloud MLM Software",
  description:
    "Transform PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for Saint Martin (French part) with Cloud MLM Software’s bilingual, AI-first operations.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/saint-martin-french-part"
  },
  openGraph: {
    title: "Saint Martin (French Part) MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Saint Martin (French part)—reframed with multi currency controls, EU compliance, and cross-border AI telemetry."
  }
};

type SaintMartinPageProps = {
  params: { lang: SupportedLocale };
};

export default function SaintMartinFrenchPartPaymentGatewayPage({ params }: SaintMartinPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-amber-50 via-white to-rose-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-rose-950/60">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-1/3 h-64 w-64 rounded-full bg-rose-200/60 blur-3xl dark:bg-rose-900/40" />
          <div className="absolute -bottom-24 right-12 h-72 w-72 rounded-full bg-amber-200/60 blur-3xl dark:bg-amber-900/40" />
          <div className="absolute bottom-12 left-12 h-48 w-48 rounded-full bg-sky-200/60 blur-3xl dark:bg-sky-900/40" />
        </div>
        <div className="container relative grid gap-12 lg:grid-cols-[minmax(0,0.7fr),minmax(0,0.3fr)]">
          <div className="space-y-10">
            <div className="space-y-6 text-foreground dark:text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-rose-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                Ways to accept payments · Saint Martin (MF)
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Saint Martin (French part) – MF
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                We convert the WordPress export into an AI-ready operations guide for Saint Martin’s French side. Tourism,
                retail, fintech, and logistics organisations gain multi currency visibility, automated compliance, and
                bilingual engagement across the island.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {INSIGHTS.map((insight) => {
                const Icon = insight.icon;
                return (
                  <article
                    key={insight.label}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-rose-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-rose-500/15 text-rose-800 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div className="space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/60">
                          {insight.label}
                        </p>
                        <h2 className="text-base font-semibold text-foreground dark:text-white">{insight.headline}</h2>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{insight.description}</p>
                  </article>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Talk to a Saint Martin specialist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-rose-300 text-rose-900 hover:bg-rose-100 dark:border-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  Preview the updated demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-amber-900 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
                WordPress voice preserved
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground dark:text-white/60">
              <span>Looking for additional territories?</span>
              <Link href={gatewayHubHref} className="inline-flex items-center gap-1 font-semibold text-rose-700 hover:underline dark:text-rose-200">
                MLM Software Payment Gateways
                <ArrowUpRight className="h-3 w-3" aria-hidden />
              </Link>
            </div>
          </div>
          <div className="space-y-4 rounded-[2.5rem] border border-white/60 bg-white/80 p-6 shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-rose-900 dark:text-white/70">
              Telemetry snapshot
            </h2>
            <div className="grid gap-4">
              {STAT_CARDS.map((stat) => (
                <div key={stat.label} className="space-y-1 rounded-2xl border border-rose-200/60 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="text-3xl font-semibold text-rose-900 dark:text-white">{stat.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-700 dark:text-rose-200">{stat.label}</p>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Gateway playbooks tuned for Saint Martin’s French side
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Tourism, retail, logistics, and fintech teams gain orchestrated strategies that retain the original WordPress
            roster while adding AI telemetry, bilingual experiences, and European compliance.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.title}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-rose-200/60 bg-white/80 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/15 text-rose-800 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{gateway.title}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {gateway.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-rose-500 dark:bg-white" aria-hidden />
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
        <div className="container space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Four agile sprints to modernise Saint Martin operations
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Each sprint keeps the original voice alive while layering bilingual automation, compliance choreography, and
              AI telemetry that connects finance, field, and partner teams.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {SPRINTS.map((sprint) => {
              const Icon = sprint.icon;
              return (
                <article
                  key={sprint.phase}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-rose-200/60 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-500/15 text-rose-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-700 dark:text-rose-200">
                        {sprint.phase}
                      </p>
                      <h3 className="mt-1 text-base font-semibold text-foreground dark:text-white">{sprint.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{sprint.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.62fr),minmax(0,0.38fr)]">
          <div className="space-y-5">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Module stack from the WordPress menu, reimagined for 2025
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Multi currency, multilingual, ticketing, autoresponder, e-wallet, e-voucher, KYC documentation, and backup
              modules gain AI copilots, compliance guardrails, and bilingual experiences for Saint Martin’s French side.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {MODULE_SIGNALS.slice(0, 4).map((module) => {
                const Icon = module.icon;
                return (
                  <article
                    key={module.name}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-rose-200/60 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-500/15 text-rose-800 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="text-base font-semibold text-foreground dark:text-white">{module.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{module.insight}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="space-y-4">
            {MODULE_SIGNALS.slice(4).map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.name}
                  className="flex h-full flex-col gap-3 rounded-[2.5rem] border border-amber-200/60 bg-gradient-to-br from-white via-white to-amber-50 p-5 shadow-sm dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{module.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{module.insight}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 rounded-[3rem] border border-rose-200/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white shadow-lg dark:border-slate-700/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 lg:grid-cols-[minmax(0,0.6fr),minmax(0,0.4fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-rose-100/90">
              Cloud MLM Software · Thought leadership
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to modernise Saint Martin’s payment gateways?
            </h2>
            <p className="text-sm text-rose-100/80">
              Partner with Cloud MLM Software to translate your WordPress briefing into a cross-border, AI-enabled
              operation. Align finance, compliance, and field leaders across Saint Martin’s French side and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 rounded-full bg-white text-slate-900 hover:bg-rose-100">
                <Link href={contactHref}>
                  Connect with Cloud MLM Software
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
                  Review pricing pathways
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 rounded-[2.5rem] border border-white/15 bg-white/10 p-8 backdrop-blur">
            <div className="grid gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-rose-100/80">Command centre snapshot</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {STAT_CARDS.map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-100/70">{stat.label}</p>
                    <p className="text-sm text-rose-100/80">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-rose-100/80">
              AI copilots watch conversion curves, compliance posture, and commission health so Saint Martin leaders can
              drive growth with precision.
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
