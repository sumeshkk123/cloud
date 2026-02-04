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

type HeroHighlight = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayPlan = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Stage = {
  label: string;
  heading: string;
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

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    title: "WordPress headline honoured",
    description:
      "“Ways to accept payments from MLM Software in People’s Democratic Republic of Senegal – SN” remains our SEO anchor.",
    icon: Stack
  },
  {
    title: "Gateway roster continuity",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout stay in the playbook with new automation layers.",
    icon: Plugs
  },
  {
    title: "WAEMU & ECOWAS alignment",
    description:
      "Senegal’s fintech, tourism, agribusiness, and diaspora programmes gain multi currency orchestration and AI telemetry.",
    icon: MapTrifold
  }
];

const GATEWAY_PLANS: GatewayPlan[] = [
  {
    name: "PayPal & Amazon Pay diaspora bridge",
    summary: "Connect Dakar entrepreneurs with diaspora sponsors across Paris, Montreal, and New York.",
    bullets: [
      "Multi currency module balances XOF, EUR, USD, and CAD settlements with tolerance alerts.",
      "Emails module issues AI-personalised receipts, BCEAO compliance notices, and consent updates."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "PayU & Stripe digital marketplace",
    summary: "Enable ecommerce, subscription clubs, and cultural experiences across Senegal and West Africa.",
    bullets: [
      "Ticket system module routes PSP escalations, logistics updates, and field coaching into SLA dashboards.",
      "Auto responder automates multilingual onboarding, compliance reminders, and loyalty campaigns."
    ],
    icon: Megaphone
  },
  {
    name: "Authorize.Net & Braintree trust runway",
    summary: "North American partners retain familiar rails while WAEMU requirements stay fully auditable.",
    bullets: [
      "KYC documentation vault stores Know Your Customer packs, residency evidence, and AML attestations.",
      "Backup manager preserves settlement files, dispute narratives, and auditor-ready commentary."
    ],
    icon: ShieldCheck
  },
  {
    name: "Adyen & 2Checkout expansion mesh",
    summary: "Bridge Senegal ventures with global markets, tourism corridors, and development partners.",
    bullets: [
      "E-wallet module releases instant commissions once acquiring partners confirm clear funds.",
      "E-voucher engine powers promotional codes, training access, and loyalty programmes with analytics."
    ],
    icon: RocketLaunch
  }
];

const STAGES: Stage[] = [
  {
    label: "Phase 01",
    heading: "Interpret the WordPress archive",
    detail:
      "Capture the headline, gateway roster, and module references before reimagining the experience for 2025.",
    icon: Compass
  },
  {
    label: "Phase 02",
    heading: "Engineer regulatory choreography",
    detail:
      "Blend BCEAO requirements, data governance, and regional compliance with AI-assisted workflows and audit trails.",
    icon: ClipboardText
  },
  {
    label: "Phase 03",
    heading: "Automate Senegal operations",
    detail:
      "Ticketing, backups, multilingual messaging, and analytics connect tourism, fintech, agribusiness, and diaspora teams.",
    icon: Lightning
  },
  {
    label: "Phase 04",
    heading: "Scale ECOWAS influence",
    detail:
      "Scenario models target Côte d’Ivoire, Ghana, and Nigeria with repeatable launch kits and AI telemetry.",
    icon: ChartLineUp
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    name: "Multi currency module",
    description: "Balances XOF, EUR, USD, and CFA-linked flows with predictive variance alerts.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    description: "Routes PSP escalations, logistics updates, and compliance queries into SLA dashboards.",
    icon: ChatsCircle
  },
  {
    name: "Multilingual system",
    description: "Delivers French, Wolof, and English messaging without fragmenting brand voice.",
    icon: UsersThree
  },
  {
    name: "Auto responder",
    description: "Automates onboarding, compliance reminders, and diaspora engagement journeys.",
    icon: Megaphone
  },
  {
    name: "E-wallet",
    description: "Provides instant commissions, reimbursements, and loyalty payouts with maker-checker governance.",
    icon: Wallet
  },
  {
    name: "E-voucher",
    description: "Issues promotional codes, training passes, and festival rewards with redemption analytics.",
    icon: Stack
  },
  {
    name: "KYC documentation",
    description: "Secures identity evidence, business licences, and AML artefacts with renewal alerts.",
    icon: ClipboardText
  },
  {
    name: "Backup manager",
    description: "Safeguards settlements, dispute trails, and telemetry across regional cloud zones.",
    icon: DeviceMobileCamera
  }
];

const METRICS: Metric[] = [
  {
    label: "Gateway partners uplifted",
    value: "8",
    detail: "Retained from WordPress with compliance and AI telemetry layers."
  },
  {
    label: "Operational phases",
    value: "4",
    detail: "Archive interpretation through ECOWAS expansion."
  },
  {
    label: "AI copilots active",
    value: "3",
    detail: "Monitoring conversions, compliance posture, and commission velocity."
  }
];

export const metadata: Metadata = {
  title: "Senegal MLM Payment Gateways | Cloud MLM Software",
  description:
    "Transform PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for Senegal with Cloud MLM Software’s AI-ready, compliance-first operations.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/senegal"
  },
  openGraph: {
    title: "Senegal MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Senegal—preserving the WordPress narrative while adding automation and AI telemetry for WAEMU leaders."
  }
};

type SenegalPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function SenegalPaymentGatewayPage({ params }: SenegalPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-orange-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-orange-950/60">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-200/60 blur-3xl dark:bg-emerald-900/40" />
          <div className="absolute bottom-10 right-16 h-60 w-60 rounded-full bg-orange-200/60 blur-3xl dark:bg-orange-900/40" />
          <div className="absolute -bottom-28 left-8 h-72 w-72 rounded-full bg-teal-200/60 blur-3xl dark:bg-teal-900/40" />
        </div>
        <div className="container relative grid gap-12 lg:grid-cols-[minmax(0,0.68fr),minmax(0,0.32fr)]">
          <div className="space-y-8 text-foreground dark:text-white">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                Ways to accept payments · Senegal (SN)
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Senegal – SN
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software translates the WordPress export into an AI-ready operating model. Tourism, fintech,
                agribusiness, and diaspora networks gain multi currency orchestration, compliance guardrails, and automation
                tailored to Senegal and WAEMU.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {HERO_HIGHLIGHTS.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <article
                    key={highlight.title}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-emerald-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-800 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-foreground dark:text-white">{highlight.title}</h2>
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{highlight.description}</p>
                  </article>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Talk to a Senegal strategist
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
                  Preview the updated demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Link
                href={gatewayHubHref}
                className="inline-flex items-center gap-2 rounded-full border border-orange-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-900 transition hover:bg-orange-100 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
              >
                Explore more regions
                <ArrowUpRight className="h-3 w-3" aria-hidden />
              </Link>
            </div>
          </div>
          <div className="space-y-4 rounded-[2.5rem] border border-white/60 bg-white/80 p-6 shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-900 dark:text-white/70">
              Telemetry snapshot
            </h2>
            <div className="grid gap-4">
              {METRICS.map((metric) => (
                <div key={metric.label} className="space-y-1 rounded-2xl border border-emerald-200/60 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="text-3xl font-semibold text-emerald-900 dark:text-white">{metric.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-200">
                    {metric.label}
                  </p>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Gateway strategies tailored for Senegal
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The legacy WordPress roster now includes compliance guardrails, automation, and AI telemetry for Senegal’s
            fintech, tourism, and diaspora programmes.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_PLANS.map((plan) => {
            const Icon = plan.icon;
            return (
              <article
                key={plan.name}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-emerald-200/60 bg-white/80 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-800 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{plan.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {plan.bullets.map((bullet) => (
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
      </section>

      <section className="bg-muted/60 py-20 dark:bg-slate-950/70">
        <div className="container space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Four phases to modernise Senegal operations
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Preserve the WordPress voice while embedding regulatory choreography, automation, and AI telemetry for
              Senegal’s growth agenda.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.label}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-200/60 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-200">
                        {stage.label}
                      </p>
                      <h3 className="mt-1 text-base font-semibold text-foreground dark:text-white">{stage.heading}</h3>
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
              Modules from the WordPress menu, reimagined for Senegal
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Multi currency, multilingual, ticketing, autoresponder, e-wallet, e-voucher, KYC documentation, and backup
              modules combine into an AI-enabled command centre for Senegal and WAEMU.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {MODULE_CARDS.slice(0, 4).map((module) => {
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
          <div className="space-y-4">
            {MODULE_CARDS.slice(4).map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.name}
                  className="flex h-full flex-col gap-3 rounded-[2.5rem] border border-orange-200/60 bg-gradient-to-br from-white via-white to-orange-50 p-5 shadow-sm dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-800 dark:bg-white/10 dark:text-white">
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
              Ready to operationalise Senegal payment gateways?
            </h2>
            <p className="text-sm text-emerald-100/80">
              Partner with Cloud MLM Software to transform your WordPress briefing into an AI-enabled, compliance-first
              command centre. Align finance, compliance, and growth leaders across Senegal and the diaspora.
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
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100/70">{metric.label}</p>
                    <p className="text-sm text-emerald-100/80">{metric.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-emerald-100/80">
              AI copilots track conversion curves, compliance obligations, and commission velocity so Senegal’s leaders can
              scale with clarity.
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
