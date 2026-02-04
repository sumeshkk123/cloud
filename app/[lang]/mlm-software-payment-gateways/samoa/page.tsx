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
  GlobeHemisphereEast,
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

type HeroInsight = {
  title: string;
  description: string;
  icon: IconType;
};

type HeroStat = {
  label: string;
  value: string;
  detail: string;
};

type GatewayPlan = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Voyage = {
  phase: string;
  heading: string;
  detail: string;
  icon: IconType;
};

type ModuleSignal = {
  name: string;
  insight: string;
  icon: IconType;
};

const HERO_INSIGHTS: HeroInsight[] = [
  {
    title: "Canonical headline preserved",
    description:
      "We honour “Ways to accept payments from MLM Software in People’s Democratic Republic of Samoa – WS” as the SEO anchor.",
    icon: Stack
  },
  {
    title: "Gateway roster intact",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain the backbone of the programme.",
    icon: PlugsConnected
  },
  {
    title: "Blue Pacific partnerships",
    description:
      "Tourism, remittances, agribusiness, and digital services gain multi currency orchestration with AI-ready automation.",
    icon: GlobeHemisphereEast
  }
];

const HERO_STATS: HeroStat[] = [
  {
    label: "Gateway partners",
    value: "8",
    detail: "Updated with compliance, FX, and automation layers."
  },
  {
    label: "Regional playbooks",
    value: "5",
    detail: "Apia, Savai’i, New Zealand, Australia, and USA diaspora routes."
  },
  {
    label: "AI copilots",
    value: "3",
    detail: "Monitoring conversions, compliance posture, and commissions."
  }
];

const GATEWAYS: GatewayPlan[] = [
  {
    title: "PayPal & Amazon Pay remittance bridge",
    summary: "Connect Samoa’s global diaspora with local entrepreneurs and community programmes.",
    bullets: [
      "Multi currency module balances WST, NZD, AUD, and USD settlements with tolerance alerts.",
      "Emails module issues AI-personalised reminders, receipt archives, and consent updates."
    ],
    icon: CurrencyCircleDollar
  },
  {
    title: "PayU & Stripe digital commerce spine",
    summary: "Subscription clubs, tourism experiences, and digital exports scale with developer-friendly tooling.",
    bullets: [
      "Ticket system module routes PSP escalations, logistics updates, and field coaching into SLA dashboards.",
      "Auto responder orchestrates multilingual onboarding, compliance nudges, and loyalty campaigns."
    ],
    icon: Megaphone
  },
  {
    title: "Authorize.Net & Braintree trust continuum",
    summary: "North American partners retain familiar rails with Samoa’s regulatory guardrails in place.",
    bullets: [
      "KYC documentation vault stores source-of-funds evidence, residency certificates, and AML attestations.",
      "Backup manager safeguards settlement artefacts, dispute narratives, and auditor-ready commentary."
    ],
    icon: ShieldCheck
  },
  {
    title: "Adyen & 2Checkout expansion runway",
    summary: "Bridge Samoa with Asia-Pacific markets, tourism hubs, and regional fintech alliances.",
    bullets: [
      "E-wallet module releases instant commissions once acquiring partners confirm clear funds.",
      "E-voucher engine powers cultural experiences, referral rewards, and wholesale incentives."
    ],
    icon: RocketLaunch
  }
];

const VOYAGES: Voyage[] = [
  {
    phase: "Voyage 01",
    heading: "Interpret the WordPress archive",
    detail:
      "Extract the historic headline, gateway list, and module references before reinventing the experience for 2025.",
    icon: Compass
  },
  {
    phase: "Voyage 02",
    heading: "Engineer compliance choreography",
    detail:
      "Blend Central Bank of Samoa guidelines, AML obligations, and data governance with AI summaries and audit trails.",
    icon: ClipboardText
  },
  {
    phase: "Voyage 03",
    heading: "Automate island operations",
    detail:
      "Ticketing, backups, multilingual messaging, and analytics align tourism, agribusiness, and fintech stakeholders.",
    icon: Lightning
  },
  {
    phase: "Voyage 04",
    heading: "Expand through Blue Pacific alliances",
    detail:
      "Scenario plans for Fiji, Tonga, New Zealand, and the United States accelerate cross-border launches.",
    icon: ChartLineUp
  }
];

const MODULE_SIGNALS: ModuleSignal[] = [
  {
    name: "Multi currency module",
    insight: "Tracks WST, NZD, AUD, USD, and EUR flows with predictive variance alerts.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    insight: "Routes PSP, logistics, and compliance escalations into SLA-driven workflows.",
    icon: ChatsCircle
  },
  {
    name: "Multilingual system",
    insight: "Delivers Samoan and English experiences without fragmenting brand voice.",
    icon: UsersThree
  },
  {
    name: "Auto responder",
    insight: "Automates onboarding, compliance reminders, and diaspora engagement journeys.",
    icon: Megaphone
  },
  {
    name: "E-wallet",
    insight: "Provides instant commissions, reimbursements, and incentives with maker-checker governance.",
    icon: Wallet
  },
  {
    name: "E-voucher",
    insight: "Issues tourism packages, training passes, and loyalty rewards with redemption analytics.",
    icon: Stack
  },
  {
    name: "KYC documentation",
    insight: "Secures identity evidence, business licences, and AML artefacts with renewal alerts.",
    icon: ClipboardText
  },
  {
    name: "Backup manager",
    insight: "Protects settlements, dispute trails, and telemetry across Pacific-aligned infrastructure.",
    icon: DeviceMobileCamera
  }
];

export const metadata: Metadata = {
  title: "Samoa MLM Payment Gateways | Cloud MLM Software",
  description:
    "Modernise PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for Samoa with Cloud MLM Software’s AI-enabled, compliance-first operations.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/samoa"
  },
  openGraph: {
    title: "Samoa MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Samoa—anchored in the WordPress headline, reimagined with Pacific-ready automation and AI telemetry."
  }
};

type SamoaPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function SamoaPaymentGatewayPage({ params }: SamoaPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/60">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-200/60 blur-3xl dark:bg-cyan-900/40" />
          <div className="absolute bottom-10 right-12 h-60 w-60 rounded-full bg-blue-200/60 blur-3xl dark:bg-blue-900/40" />
          <div className="absolute -bottom-28 left-8 h-72 w-72 rounded-full bg-emerald-200/60 blur-3xl dark:bg-emerald-900/40" />
        </div>
        <div className="container relative grid gap-12 lg:grid-cols-[minmax(0,0.68fr),minmax(0,0.32fr)]">
          <div className="space-y-8 text-foreground dark:text-white">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                Ways to accept payments · Samoa (WS)
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Samoa – WS
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software transforms the WordPress-era briefing into an AI-ready command centre for Samoa. Tourism,
                agribusiness, fintech, and diaspora programmes gain multi currency orchestration, compliance guardrails, and
                automation built for the Blue Pacific.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {HERO_INSIGHTS.map((insight) => {
                const Icon = insight.icon;
                return (
                  <article
                    key={insight.title}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-cyan-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-800 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-base font-semibold text-foreground dark:text-white">{insight.title}</h2>
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{insight.description}</p>
                  </article>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Talk to a Samoa strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-cyan-300 text-cyan-900 hover:bg-cyan-100 dark:border-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  Preview the updated demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Link
                href={gatewayHubHref}
                className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-blue-900 transition hover:bg-blue-100 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
              >
                View all regions
                <ArrowUpRight className="h-3 w-3" aria-hidden />
              </Link>
            </div>
          </div>
          <div className="space-y-4 rounded-[2.5rem] border border-white/60 bg-white/80 p-6 shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-900 dark:text-white/70">
              Telemetry snapshot
            </h2>
            <div className="grid gap-4">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="space-y-1 rounded-2xl border border-cyan-200/60 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="text-3xl font-semibold text-cyan-900 dark:text-white">{stat.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-200">
                    {stat.label}
                  </p>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Gateway blueprints tailored for Samoa’s Blue Pacific economy
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The original WordPress roster now includes compliance, automation, and AI telemetry for tourism, agribusiness,
            fintech, and diaspora-led initiatives across Samoa.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.title}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-cyan-200/60 bg-white/80 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-800 dark:bg-white/10 dark:text-white">
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
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-500 dark:bg-white" aria-hidden />
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
              Four voyages to modernise Samoa’s payment gateways
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Preserve the WordPress voice while introducing compliance, automation, and AI telemetry built for island and
              diaspora stakeholders.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {VOYAGES.map((voyage) => {
              const Icon = voyage.icon;
              return (
                <article
                  key={voyage.phase}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-cyan-200/60 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700 dark:text-cyan-200">
                        {voyage.phase}
                      </p>
                      <h3 className="mt-1 text-base font-semibold text-foreground dark:text-white">{voyage.heading}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{voyage.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.6fr),minmax(0,0.4fr)]">
          <div className="space-y-5">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Module stack reimagined for Samoa’s 2025 ambitions
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Multi currency, multilingual, ticketing, autoresponder, e-wallet, e-voucher, KYC documentation, and backup
              modules gain AI copilots, compliance guardrails, and automation built for Pacific operations.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {MODULE_SIGNALS.slice(0, 4).map((module) => {
                const Icon = module.icon;
                return (
                  <article
                    key={module.name}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-cyan-200/60 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-800 dark:bg-white/10 dark:text-white">
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
                  className="flex h-full flex-col gap-3 rounded-[2.5rem] border border-blue-200/60 bg-gradient-to-br from-white via-white to-blue-50 p-5 shadow-sm dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-800 dark:bg-white/10 dark:text-white">
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
        <div className="grid gap-10 rounded-[3rem] border border-cyan-200/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white shadow-lg dark:border-slate-700/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 lg:grid-cols-[minmax(0,0.6fr),minmax(0,0.4fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100/90">
              Cloud MLM Software · Thought leadership
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to operationalise Samoa’s payment gateways?
            </h2>
            <p className="text-sm text-cyan-100/80">
              Partner with Cloud MLM Software to modernise your WordPress briefing into a Pacific-ready, AI-enabled
              operation. Align finance, compliance, and field leaders across Samoa and global diaspora hubs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 rounded-full bg-white text-slate-900 hover:bg-cyan-100">
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
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/80">Telemetry snapshot</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {HERO_STATS.map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/70">{stat.label}</p>
                    <p className="text-sm text-cyan-100/80">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-cyan-100/80">
              AI copilots watch conversion trends, compliance posture, and commission health so Samoa’s leaders can expand
              with clarity.
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
