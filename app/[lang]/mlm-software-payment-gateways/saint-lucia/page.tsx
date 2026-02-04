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
  Lightning,
  MapTrifold,
  Megaphone,
  Plugs,
  RocketLaunch,
  ShieldCheck,
  Stack,
  TreePalm,
  UsersThree,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroCallout = {
  eyebrow: string;
  title: string;
  description: string;
  icon: IconType;
};

type GatewayPlay = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type JourneyStage = {
  step: string;
  headline: string;
  detail: string;
  icon: IconType;
};

type ModuleCard = {
  name: string;
  description: string;
  icon: IconType;
};

type Metric = {
  label: string;
  value: string;
  detail: string;
};

const HERO_CALLOUTS: HeroCallout[] = [
  {
    eyebrow: "Legacy headline preserved",
    title: "We honour “Ways to accept payments from MLM Software in People’s Democratic Republic of Saint Lucia – LC.”",
    description:
      "Cloud MLM Software keeps the original WordPress phrasing live while steering a modern AIO programme for 2025 launches.",
    icon: Stack
  },
  {
    eyebrow: "Gateway roster stabilised",
    title: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain in play.",
    description:
      "Each connector gains compliance choreography, FX telemetry, and island-ready automation without losing familiar workflows.",
    icon: Plugs
  },
  {
    eyebrow: "Caribbean focus activated",
    title: "Tourism, citizenship-by-investment, and offshore services demand precise governance.",
    description:
      "We align multi currency, multilingual, and ticketing modules to support Gros Islet, Vieux Fort, Castries, and global backers.",
    icon: TreePalm
  }
];

const GATEWAYS: GatewayPlay[] = [
  {
    name: "PayPal & Amazon Pay hospitality lanes",
    summary: "Digitise resort memberships, wellness retreats, and CBI sponsor payments without FX surprises.",
    bullets: [
      "Multi currency module reconciles XCD, USD, EUR, and GBP flows with CFO-friendly variance alerts.",
      "Emails module delivers AI-personalised receipts, compliance notices, and luxury concierge updates."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "PayU & Stripe digital commerce mesh",
    summary: "Blend ecommerce, mobile fulfilment, and subscription clubs across the Pitons and beyond.",
    bullets: [
      "Ticket system module aggregates PSP escalations, vendor queries, and distributor coaching into SLA dashboards.",
      "Auto responder triggers multilingual onboarding, CCPA-ready consent reminders, and campaign journeys."
    ],
    icon: Megaphone
  },
  {
    name: "Authorize.Net & Braintree trust spine",
    summary: "Give North American partners familiar controls while respecting ECCB oversight.",
    bullets: [
      "KYC documentation vault stores source-of-funds evidence, citizenship files, and AML attestations.",
      "Backup manager preserves settlement files, chargeback trails, and auditor-ready commentary."
    ],
    icon: ShieldCheck
  },
  {
    name: "Adyen & 2Checkout expansion runway",
    summary: "Bridge Saint Lucia launches with OECS neighbours and diaspora hubs in London, Toronto, and Miami.",
    bullets: [
      "E-wallet module releases instant commissions once payouts clear acquiring partners.",
      "E-voucher engine powers referral incentives, festival campaigns, and partner loyalty programmes."
    ],
    icon: RocketLaunch
  }
];

const STAGES: JourneyStage[] = [
  {
    step: "Stage 01",
    headline: "Reconstruct the archive briefing",
    detail:
      "Extract the WordPress headline, gateway list, and module mentions to maintain SEO equity while uplifting the narrative.",
    icon: Compass
  },
  {
    step: "Stage 02",
    headline: "Codify compliance choreography",
    detail:
      "Synchronise Eastern Caribbean Central Bank guidelines, data residency needs, and KYC controls with automated guardrails.",
    icon: ClipboardText
  },
  {
    step: "Stage 03",
    headline: "Deploy AI-first operations",
    detail:
      "Ticketing, backups, multilingual content, and analytics flow into live dashboards for finance, field, and sponsor leaders.",
    icon: Lightning
  },
  {
    step: "Stage 04",
    headline: "Amplify thought leadership",
    detail:
      "Use insights to expand into Saint Vincent, Antigua, and the Bahamas with repeatable launch kits and AI copilots.",
    icon: ChartLineUp
  }
];

const MODULES: ModuleCard[] = [
  {
    name: "Multi currency module",
    description: "Balances XCD, USD, EUR, and GBP inflows with tolerance alerts and auditor-grade reporting.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    description: "Routes PSP escalations, resort concierge requests, and distributor coaching into SLA-driven workflows.",
    icon: ChatsCircle
  },
  {
    name: "Multilingual system",
    description: "Delivers English, French Creole, and Spanish messaging without fragmenting your brand voice.",
    icon: UsersThree
  },
  {
    name: "Auto responder",
    description: "Automates onboarding, compliance notices, and lifestyle campaign updates across channels.",
    icon: Megaphone
  },
  {
    name: "E-wallet",
    description: "Issues commissions, reimbursements, and loyalty rewards with maker-checker governance.",
    icon: Wallet
  },
  {
    name: "E-voucher",
    description: "Drives beach resort promotions, training passes, and referral rewards with redemption analytics.",
    icon: Stack
  },
  {
    name: "KYC documentation",
    description: "Secures citizenship-by-investment dossiers, passports, and compliance artefacts with expiry alerts.",
    icon: ClipboardText
  },
  {
    name: "Backup manager",
    description: "Preserves settlements, audit trails, and AI telemetry across redundant Caribbean-ready zones.",
    icon: DeviceMobileCamera
  }
];

const METRICS: Metric[] = [
  {
    label: "Gateway partners",
    value: "8",
    detail: "Optimised from the WordPress export with real-time compliance oversight."
  },
  {
    label: "Island playbooks",
    value: "5",
    detail: "Castries, Rodney Bay, and diaspora routes covered with repeatable launch cadences."
  },
  {
    label: "AI monitors",
    value: "3",
    detail: "Telemetry for conversions, risk posture, and commission velocity."
  }
];

export const metadata: Metadata = {
  title: "Saint Lucia MLM Payment Gateways | Cloud MLM Software",
  description:
    "Modernise PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for Saint Lucia with Cloud MLM Software’s AI-ready compliance and hospitality-first automation.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/saint-lucia"
  },
  openGraph: {
    title: "Saint Lucia MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Saint Lucia—elevated with multi currency controls, ECCB-aligned compliance, and tourism-ready AI telemetry."
  }
};

type SaintLuciaPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function SaintLuciaPaymentGatewayPage({ params }: SaintLuciaPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-indigo-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/60">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-200/60 blur-3xl dark:bg-emerald-900/40" />
          <div className="absolute -bottom-28 left-8 h-72 w-72 rounded-full bg-indigo-200/60 blur-3xl dark:bg-indigo-900/40" />
          <div className="absolute bottom-12 right-12 h-40 w-40 rounded-full bg-sky-200/70 blur-3xl dark:bg-sky-900/40" />
        </div>
        <div className="container relative grid gap-12 lg:grid-cols-[minmax(0,0.78fr),minmax(0,0.52fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              Ways to accept payments · Saint Lucia (LC)
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Saint Lucia – LC
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software elevates the WordPress-era narrative into an AI-ready operating model for Saint Lucia.
                We blend multi currency, multilingual, and compliance workflows so resorts, financial services, and
                citizenship programmes steer payment gateways with confidence.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Speak with a Saint Lucia strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-emerald-300 text-emerald-900 hover:bg-emerald-100 dark:border-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  Preview the island demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground dark:text-white/60">
              <span>Need the full roster?</span>
              <Link href={gatewayHubHref} className="inline-flex items-center gap-1 font-semibold text-emerald-700 hover:underline dark:text-emerald-200">
                MLM Software Payment Gateways
                <ArrowUpRight className="h-3 w-3" aria-hidden />
              </Link>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">Saint Lucia blueprint refreshed for 2025</span>
            </div>
          </div>
          <div className="grid gap-4">
            {HERO_CALLOUTS.map((callout) => {
              const Icon = callout.icon;
              return (
                <article
                  key={callout.eyebrow}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-emerald-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/60">
                        {callout.eyebrow}
                      </p>
                      <h2 className="text-base font-semibold text-foreground dark:text-white">{callout.title}</h2>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{callout.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.58fr),minmax(0,0.42fr)]">
          <div className="space-y-5">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Gateway orchestration crafted for Saint Lucia
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              The original roster now features AI telemetry, compliance guardrails, and hospitality-grade experiences that
              reflect the realities of Saint Lucia’s tourism, financial, and citizenship leaders.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {GATEWAYS.slice(0, 2).map((gateway) => {
                const Icon = gateway.icon;
                return (
                  <article
                    key={gateway.name}
                    className="flex h-full flex-col gap-3 rounded-[2.25rem] border border-emerald-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-800 dark:bg-white/10 dark:text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-1">
                        <h3 className="text-base font-semibold text-foreground dark:text-white">{gateway.name}</h3>
                        <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.summary}</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                      {gateway.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 dark:bg-white" aria-hidden />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="grid gap-4">
            {GATEWAYS.slice(2).map((gateway) => {
              const Icon = gateway.icon;
              return (
                <article
                  key={gateway.name}
                  className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-indigo-200/60 bg-gradient-to-br from-white via-white to-indigo-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-foreground dark:text-white">{gateway.name}</h3>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.summary}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {gateway.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-indigo-500 dark:bg-white" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted/60 py-20 dark:bg-slate-950/70">
        <div className="container space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              A Saint Lucia launch cadence in four movements
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Each phase keeps the WordPress voice intact while adding ECCB-ready compliance and AI telemetry for tourism,
              financial, and citizenship teams.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.step}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-200/50 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 dark:text-emerald-200">
                        {stage.step}
                      </p>
                      <h3 className="mt-1 text-base font-semibold text-foreground dark:text-white">{stage.headline}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{stage.detail}</p>
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
              Modules from the WordPress navigation, reimagined for Saint Lucia
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Multi currency, multilingual, ticketing, autoresponder, e-wallet, e-voucher, KYC documentation, and backup
              modules combine into one Caribbean-ready control plane with AI copilots and compliance guardrails.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {MODULES.slice(0, 4).map((module) => {
                const Icon = module.icon;
                return (
                  <article
                    key={module.name}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-emerald-200/60 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-800 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="text-base font-semibold text-foreground dark:text-white">{module.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{module.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="grid gap-4">
            {MODULES.slice(4).map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.name}
                  className="flex h-full flex-col gap-3 rounded-[2.5rem] border border-indigo-200/60 bg-gradient-to-br from-white via-white to-indigo-50 p-5 shadow-sm dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{module.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{module.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 rounded-[3rem] border border-emerald-200/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white shadow-lg dark:border-slate-700/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 lg:grid-cols-[minmax(0,0.6fr),minmax(0,0.4fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-100/90">
              Cloud MLM Software · Thought leadership
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to operationalise Saint Lucia payment gateways?
            </h2>
            <p className="text-sm text-emerald-100/80">
              Partner with Cloud MLM Software to transform your WordPress-era briefing into a Caribbean-first, AI-enabled
              operation. From ECCB compliance to diaspora expansion, we help you lead with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 rounded-full bg-white text-slate-900 hover:bg-emerald-100">
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
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-100/80">Telemetry snapshot</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {METRICS.map((metric) => (
                  <div key={metric.label} className="space-y-1">
                    <p className="text-3xl font-semibold text-white">{metric.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-emerald-100/70">
                      {metric.label}
                    </p>
                    <p className="text-sm text-emerald-100/80">{metric.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-emerald-100/80">
              AI copilots monitor payment conversion trends, compliance posture, and commission velocity so Saint Lucia
              leaders can steer growth with clarity.
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
