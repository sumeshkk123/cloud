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
  PlugsConnected,
  RocketLaunch,
  ShieldCheck,
  Stack,
  TreePalm,
  UsersThree,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroBadge = {
  label: string;
  detail: string;
  icon: IconType;
};

type GatewayFramework = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Step = {
  index: string;
  title: string;
  description: string;
  icon: IconType;
};

type ModuleCard = {
  name: string;
  insight: string;
  icon: IconType;
};

type Metric = {
  label: string;
  value: string;
  detail: string;
};

const HERO_BADGES: HeroBadge[] = [
  {
    label: "WordPress headline respected",
    detail: "“Ways to accept payments from MLM Software in People’s Democratic Republic of Sao Tome and Principe – ST.”",
    icon: Stack
  },
  {
    label: "Gateway roster retained",
    detail: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout",
    icon: PlugsConnected
  },
  {
    label: "Gulf of Guinea focus",
    detail: "Blue economy, cocoa, and tourism initiatives gain multi currency orchestration with AI telemetry.",
    icon: TreePalm
  }
];

const GATEWAY_FRAMEWORKS: GatewayFramework[] = [
  {
    name: "PayPal & Amazon Pay trade winds",
    summary: "Support tourism, cocoa exports, and diaspora remittances with dependable digital rails.",
    bullets: [
      "Multi currency module balances STN, EUR, USD, and XAF settlements with tolerance alerts.",
      "Emails module delivers AI-personalised receipts, customs notices, and compliance reminders."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "PayU & Stripe digital marketplace",
    summary: "Enable ecommerce, subscriptions, and virtual experiences for local entrepreneurs and NGOs.",
    bullets: [
      "Ticket system module orchestrates PSP escalations, supply chain updates, and field coaching.",
      "Auto responder automates multilingual onboarding, donor relations, and loyalty campaigns."
    ],
    icon: Megaphone
  },
  {
    name: "Authorize.Net & Braintree trust anchor",
    summary: "Bridge North American partners and investors while honouring regional governance.",
    bullets: [
      "KYC documentation vault stores due diligence packs, residency evidence, and AML artefacts.",
      "Backup manager safeguards settlement records, dispute narratives, and auditor-ready commentary."
    ],
    icon: ShieldCheck
  },
  {
    name: "Adyen & 2Checkout expansion runway",
    summary: "Expand into ECOWAS markets, tourism corridors, and development alliances with unified insight.",
    bullets: [
      "E-wallet module releases instant commissions once acquiring partners confirm clear funds.",
      "E-voucher engine powers promotional codes, training modules, and partner incentives."
    ],
    icon: RocketLaunch
  }
];

const STEPS: Step[] = [
  {
    index: "Step 01",
    title: "Interpret the WordPress archive",
    description:
      "Capture the headline, gateway list, and module references before redesigning the experience for 2025.",
    icon: Compass
  },
  {
    index: "Step 02",
    title: "Engineer compliance choreography",
    description:
      "Blend BCEAO relationships, AML controls, and data governance with AI-assisted workflows and audit trails.",
    icon: ClipboardText
  },
  {
    index: "Step 03",
    title: "Automate island operations",
    description:
      "Ticketing, multilingual messaging, and backups align tourism, cocoa cooperatives, and fintech partners.",
    icon: Lightning
  },
  {
    index: "Step 04",
    title: "Amplify Gulf of Guinea influence",
    description:
      "Scenario models target Angola, Gabon, Cameroon, and Portugal with repeatable launch kits and AI telemetry.",
    icon: ChartLineUp
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    name: "Multi currency module",
    insight: "Balances STN, EUR, USD, and regional currencies with predictive variance alerts.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    insight: "Routes PSP escalations, logistics updates, and compliance queries into SLA dashboards.",
    icon: ChatsCircle
  },
  {
    name: "Multilingual system",
    insight: "Delivers Portuguese, English, and French experiences without fragmenting identity.",
    icon: UsersThree
  },
  {
    name: "Auto responder",
    insight: "Automates onboarding, donor relations, and compliance reminders across channels.",
    icon: Megaphone
  },
  {
    name: "E-wallet",
    insight: "Provides instant commissions, reimbursements, and campaign incentives with maker-checker controls.",
    icon: Wallet
  },
  {
    name: "E-voucher",
    insight: "Launches tourism packages, training access, and loyalty rewards with redemption analytics.",
    icon: Stack
  },
  {
    name: "KYC documentation",
    insight: "Stores identity evidence, business licences, and AML artefacts with renewal alerts.",
    icon: ClipboardText
  },
  {
    name: "Backup manager",
    insight: "Preserves settlements, dispute trails, and telemetry across redundant regional zones.",
    icon: DeviceMobileCamera
  }
];

const METRICS: Metric[] = [
  {
    label: "Gateway partners uplifted",
    value: "8",
    detail: "Retained from WordPress, modernised with compliance and AI telemetry."
  },
  {
    label: "Operational steps",
    value: "4",
    detail: "From archive interpretation to regional expansion."
  },
  {
    label: "AI copilots active",
    value: "3",
    detail: "Monitoring conversions, compliance posture, and commission velocity."
  }
];

export const metadata: Metadata = {
  title: "Sao Tome & Principe MLM Payment Gateways | Cloud MLM Software",
  description:
    "Transform PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for Sao Tome and Principe with Cloud MLM Software’s AI-ready, compliance-first operations.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/sao-tome-and-principe"
  },
  openGraph: {
    title: "Sao Tome and Principe MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Sao Tome and Principe—preserving the WordPress narrative while adding automation and AI telemetry for the Gulf of Guinea."
  }
};

type SaoTomePageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function SaoTomeAndPrincipePaymentGatewayPage({ params }: SaoTomePageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-amber-950/60">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-200/60 blur-3xl dark:bg-emerald-900/40" />
          <div className="absolute bottom-12 right-12 h-60 w-60 rounded-full bg-amber-200/60 blur-3xl dark:bg-amber-900/40" />
          <div className="absolute -bottom-28 left-8 h-72 w-72 rounded-full bg-teal-200/60 blur-3xl dark:bg-teal-900/40" />
        </div>
        <div className="container relative space-y-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.68fr),minmax(0,0.32fr)]">
            <div className="space-y-6 text-foreground dark:text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                Ways to accept payments · Sao Tome and Principe (ST)
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Sao Tome and Principe – ST
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software elevates the WordPress-era briefing into an AI-ready operating model. Tourism, blue
                economy ventures, cocoa cooperatives, and fintech partners gain multi currency orchestration, compliance
                guardrails, and automation suited for the Gulf of Guinea.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {HERO_BADGES.map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <article
                      key={badge.label}
                      className="flex h-full flex-col gap-3 rounded-3xl border border-emerald-200/60 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-800 dark:bg-white/10 dark:text-white">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <h2 className="text-sm font-semibold text-foreground dark:text-white">{badge.label}</h2>
                      </div>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{badge.detail}</p>
                    </article>
                  );
                })}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href={contactHref}>
                    Talk to a Sao Tome strategist
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
                  className="inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-amber-900 transition hover:bg-amber-100 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
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
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Gateway frameworks for Sao Tome and Principe
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The legacy WordPress roster now includes compliance guardrails, automation, and AI telemetry to support tourism,
            blue economy ventures, and diaspora programmes.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_FRAMEWORKS.map((framework) => {
            const Icon = framework.icon;
            return (
              <article
                key={framework.name}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-emerald-200/60 bg-white/80 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-800 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{framework.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{framework.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {framework.bullets.map((bullet) => (
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
              Four steps to modernise Gulf of Guinea operations
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Preserve the WordPress voice while embedding compliance, automation, and AI telemetry for Sao Tome and
              Principe’s tourism, agribusiness, and fintech leaders.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.index}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-200/60 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-200">
                        {step.index}
                      </p>
                      <h3 className="mt-1 text-base font-semibold text-foreground dark:text-white">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{step.description}</p>
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
              Modules from the WordPress navigation, reimagined for 2025
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Multi currency, multilingual, ticketing, autoresponder, e-wallet, e-voucher, KYC documentation, and backup
              modules combine into an AI-enabled control plane built for Sao Tome and Principe.
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
                    <p className="text-sm text-muted-foreground dark:text-white/70">{module.insight}</p>
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
        <div className="grid gap-10 rounded-[3rem] border border-emerald-200/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white shadow-lg dark:border-slate-700/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 lg:grid-cols-[minmax(0,0.6fr),minmax(0,0.4fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-100/90">
              Cloud MLM Software · Thought leadership
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to operationalise Sao Tome and Principe payment gateways?
            </h2>
            <p className="text-sm text-emerald-100/80">
              Partner with Cloud MLM Software to transform your WordPress briefing into an AI-enabled, compliance-ready
              command centre. Align finance, compliance, and field teams across the Gulf of Guinea and global partners.
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
              AI copilots monitor conversion trends, compliance posture, and commission health so leaders can scale across
              Sao Tome and Principe with confidence.
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
