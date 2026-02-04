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

type HeroBlock = {
  label: string;
  title: string;
  description: string;
  icon: IconType;
};

type GatewayBlueprint = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Initiative = {
  phase: string;
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

const HERO_BLOCKS: HeroBlock[] = [
  {
    label: "Legacy headline",
    title: "Ways to accept payments from MLM Software in People’s Democratic Republic of Saint Vincent and the Grenadines – VC",
    description: "The original WordPress phrasing remains the SEO anchor while the experience evolves for 2025.",
    icon: Stack
  },
  {
    label: "Gateway roster",
    title: "Eight PSP partners modernised",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout retain continuity with compliance, FX, and telemetry layers.",
    icon: Plugs
  },
  {
    label: "Island economy",
    title: "Tourism, blue economy, and fintech prominence",
    description:
      "We orchestrate payment experiences for yachting, digital services, agriculture, and global diaspora programmes.",
    icon: TreePalm
  }
];

const GATEWAYS: GatewayBlueprint[] = [
  {
    name: "PayPal & Amazon Pay island commerce",
    summary: "Enable tourism, yachting, and diaspora contributions with frictionless digital checkout.",
    bullets: [
      "Multi currency module balances XCD, USD, GBP, and EUR settlements with tolerance alerts.",
      "Emails module sends AI-personalised receipts, tax disclosures, and consent updates in minutes."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "PayU & Stripe omnichannel runway",
    summary: "Subscription clubs and ecommerce fulfilment scale across Kingstown, Bequia, and Canouan.",
    bullets: [
      "Ticket system module routes PSP escalations, shipping updates, and distributor coaching into SLA dashboards.",
      "Auto responder delivers multilingual onboarding, compliance nudges, and loyalty campaigns."
    ],
    icon: Megaphone
  },
  {
    name: "Authorize.Net & Braintree trust scaffolding",
    summary: "North American partners retain familiar rails while Eastern Caribbean compliance stays intact.",
    bullets: [
      "KYC documentation vault stores beneficial ownership, CBI dossiers, and AML evidence.",
      "Backup manager safeguards settlement files, chargeback artefacts, and auditor-ready commentary."
    ],
    icon: ShieldCheck
  },
  {
    name: "Adyen & 2Checkout expansion mesh",
    summary: "Extend into OECS neighbours, digital services, and global diaspora investment corridors.",
    bullets: [
      "E-wallet module releases instant commissions once acquiring partners confirm clear funds.",
      "E-voucher engine powers promotional codes, training passes, and affiliate rewards with analytics."
    ],
    icon: RocketLaunch
  }
];

const INITIATIVES: Initiative[] = [
  {
    phase: "Initiative 01",
    headline: "Interpret the WordPress archive",
    detail:
      "Capture the legacy headline, gateway roster, and module mentions so SEO equity and institutional memory stay intact.",
    icon: Compass
  },
  {
    phase: "Initiative 02",
    headline: "Engineer ECCB-aligned compliance",
    detail:
      "Blend Eastern Caribbean Central Bank requirements, AML controls, and data governance with AI-assisted workflows.",
    icon: ClipboardText
  },
  {
    phase: "Initiative 03",
    headline: "Automate island-wide operations",
    detail:
      "Ticketing, backups, multilingual messaging, and analytics align tourism, fintech, agriculture, and diaspora leaders.",
    icon: Lightning
  },
  {
    phase: "Initiative 04",
    headline: "Scale thought leadership",
    detail:
      "Use insights to expand into Saint Lucia, Barbados, Grenada, and beyond with repeatable launch kits and AI telemetry.",
    icon: ChartLineUp
  }
];

const MODULES: ModuleCard[] = [
  {
    name: "Multi currency module",
    description: "Tracks XCD, USD, EUR, and GBP flows with predictive variance alerts for CFO teams.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    description: "Routes PSP escalations, harbour logistics, and distributor queries via SLA workflows.",
    icon: ChatsCircle
  },
  {
    name: "Multilingual system",
    description: "Delivers English, French Creole, and Spanish experiences without fragmenting the brand.",
    icon: UsersThree
  },
  {
    name: "Auto responder",
    description: "Automates onboarding, compliance notices, and investor relations updates across channels.",
    icon: Megaphone
  },
  {
    name: "E-wallet",
    description: "Provides instant commissions, reimbursements, and incentives with maker-checker governance.",
    icon: Wallet
  },
  {
    name: "E-voucher",
    description: "Issues promotional codes, event passes, and loyalty rewards with redemption analytics.",
    icon: Stack
  },
  {
    name: "KYC documentation",
    description: "Stores CBI applications, source-of-funds evidence, and AML attestations with renewal alerts.",
    icon: ClipboardText
  },
  {
    name: "Backup manager",
    description: "Preserves settlements, dispute trails, and analytics across redundant Caribbean-ready zones.",
    icon: DeviceMobileCamera
  }
];

const METRICS: Metric[] = [
  {
    label: "Gateway partners uplifted",
    value: "8",
    detail: "Retained from WordPress, enhanced with automation and AI telemetry."
  },
  {
    label: "Operational initiatives",
    value: "4",
    detail: "Archive interpretation through regional expansion."
  },
  {
    label: "AI copilots live",
    value: "3",
    detail: "Monitoring conversions, compliance posture, and commission velocity."
  }
];

export const metadata: Metadata = {
  title: "Saint Vincent & Grenadines MLM Payment Gateways | Cloud MLM Software",
  description:
    "Transform PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for Saint Vincent and the Grenadines with Cloud MLM Software’s AI-ready, compliance-first operations.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/saint-vincent-and-the-grenadines"
  },
  openGraph: {
    title: "Saint Vincent and the Grenadines MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Saint Vincent and the Grenadines—preserving the original narrative while adding Caribbean-ready automation and AI telemetry."
  }
};

type SaintVincentPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function SaintVincentAndTheGrenadinesPaymentGatewayPage({ params }: SaintVincentPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-teal-50 via-white to-orange-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-orange-950/60">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-teal-200/60 blur-3xl dark:bg-teal-900/40" />
          <div className="absolute bottom-12 right-16 h-60 w-60 rounded-full bg-orange-200/60 blur-3xl dark:bg-orange-900/40" />
          <div className="absolute -bottom-28 left-8 h-72 w-72 rounded-full bg-emerald-200/60 blur-3xl dark:bg-emerald-900/40" />
        </div>
        <div className="container relative grid gap-10 lg:grid-cols-[minmax(0,0.72fr),minmax(0,0.28fr)]">
          <div className="space-y-8 text-foreground dark:text-white">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-teal-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                Ways to accept payments · Saint Vincent and the Grenadines (VC)
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Saint Vincent and the Grenadines – VC
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software upgrades the WordPress-era briefing into an AI-ready operating model. Tourism, blue
                economy ventures, fintech programmes, and diaspora investors gain multi currency orchestration, compliance
                guardrails, and automation tailored for Saint Vincent and the Grenadines.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {HERO_BLOCKS.map((block) => {
                const Icon = block.icon;
                return (
                  <article
                    key={block.label}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-teal-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-500/15 text-teal-800 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div className="space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/60">
                          {block.label}
                        </p>
                        <h2 className="text-sm font-semibold text-foreground dark:text-white">{block.title}</h2>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{block.description}</p>
                  </article>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Talk to a Saint Vincent strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-teal-300 text-teal-900 hover:bg-teal-100 dark:border-white/20 dark:text-white"
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
            <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-teal-900 dark:text-white/70">
              Telemetry snapshot
            </h2>
            <div className="grid gap-4">
              {METRICS.map((metric) => (
                <div key={metric.label} className="space-y-1 rounded-2xl border border-teal-200/60 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="text-3xl font-semibold text-teal-900 dark:text-white">{metric.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-700 dark:text-teal-200">
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
            Gateway playbooks engineered for Saint Vincent and the Grenadines
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The original WordPress roster of gateways now gains automation, compliance guardrails, and AI telemetry to
            support tourism, fintech, agriculture, and diaspora growth.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-teal-200/60 bg-white/80 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-800 dark:bg-white/10 dark:text-white">
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
                      <span className="mt-2 h-2 w-2 rounded-full bg-teal-500 dark:bg-white" aria-hidden />
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
              Four initiatives to modernise Saint Vincent operations
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Each initiative preserves the legacy narrative while embedding compliance, automation, and AI telemetry for
              tourism, blue economy, and fintech leaders.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {INITIATIVES.map((initiative) => {
              const Icon = initiative.icon;
              return (
                <article
                  key={initiative.phase}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-teal-200/60 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-700 dark:text-teal-200">
                        {initiative.phase}
                      </p>
                      <h3 className="mt-1 text-base font-semibold text-foreground dark:text-white">
                        {initiative.headline}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{initiative.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.58fr),minmax(0,0.42fr)]">
          <div className="space-y-5">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Modules from the WordPress menu, reimagined for 2025
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Multi currency, multilingual, ticketing, autoresponder, e-wallet, e-voucher, KYC documentation, and backup
              modules combine into an AI-enabled command centre built for Saint Vincent and the Grenadines.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {MODULES.slice(0, 4).map((module) => {
                const Icon = module.icon;
                return (
                  <article
                    key={module.name}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-teal-200/60 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-800 dark:bg-white/10 dark:text-white">
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
            {MODULES.slice(4).map((module) => {
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
        <div className="grid gap-10 rounded-[3rem] border border-teal-200/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white shadow-lg dark:border-slate-700/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 lg:grid-cols-[minmax(0,0.6fr),minmax(0,0.4fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-teal-100/90">
              Cloud MLM Software · Thought leadership
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to operationalise Saint Vincent and the Grenadines payment gateways?
            </h2>
            <p className="text-sm text-teal-100/80">
              Partner with Cloud MLM Software to transform the WordPress briefing into an AI-ready command centre. Align
              finance, compliance, and field teams across the Grenadines and global diaspora hubs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 rounded-full bg-white text-slate-900 hover:bg-teal-100">
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
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-100/80">Command centre snapshot</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {METRICS.map((metric) => (
                  <div key={metric.label} className="space-y-1">
                    <p className="text-3xl font-semibold text-white">{metric.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-100/70">{metric.label}</p>
                    <p className="text-sm text-teal-100/80">{metric.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-teal-100/80">
              AI copilots watch conversion curves, compliance posture, and commission health so leaders can expand across
              the Grenadines with clarity.
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
