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
  UsersThree,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroCallout = {
  label: string;
  copy: string;
  icon: IconType;
};

type HeroMetric = {
  label: string;
  value: string;
  detail: string;
};

type GatewayArc = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Stage = {
  step: string;
  heading: string;
  detail: string;
  icon: IconType;
};

type ModuleCard = {
  name: string;
  description: string;
  icon: IconType;
};

const HERO_CALLOUTS: HeroCallout[] = [
  {
    label: "Canonical headline",
    copy: "We preserve “Ways to accept payments from MLM Software in People’s Democratic Republic of Saudi Arabia – SA” as the SEO anchor.",
    icon: Stack
  },
  {
    label: "Gateway roster continuity",
    copy: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain the backbone of the programme.",
    icon: PlugsConnected
  },
  {
    label: "Vision 2030 alignment",
    copy: "Commerce, fintech, tourism, and smart city initiatives gain AI-ready automation, compliance, and experience design.",
    icon: MapTrifold
  }
];

const HERO_METRICS: HeroMetric[] = [
  {
    label: "Gateway partners uplifted",
    value: "8",
    detail: "Retained from WordPress, modernised with compliance, FX, and AI telemetry."
  },
  {
    label: "Launch workstreams",
    value: "5",
    detail: "Covering Riyadh, Jeddah, NEOM, Red Sea, and global diaspora hubs."
  },
  {
    label: "AI copilots active",
    value: "3",
    detail: "Monitoring conversions, compliance posture, and commission velocity."
  }
];

const GATEWAY_ARCS: GatewayArc[] = [
  {
    title: "PayPal & Amazon Pay global remittance bridge",
    summary: "Enable cross-border commerce, diaspora remittances, and digital services with frictionless checkout.",
    bullets: [
      "Multi currency module reconciles SAR, USD, EUR, and AED settlements with tolerance alerts.",
      "Emails module issues AI-personalised receipts, VAT disclosures, and consent updates in Arabic and English."
    ],
    icon: CurrencyCircleDollar
  },
  {
    title: "PayU & Stripe innovation studio",
    summary: "Fuel subscription clubs, digital ventures, and smart city pilots with developer-friendly APIs.",
    bullets: [
      "Ticket system module routes PSP escalations, regulator queries, and field coaching into SLA dashboards.",
      "Auto responder orchestrates multilingual onboarding, compliance nudges, and loyalty journeys."
    ],
    icon: Megaphone
  },
  {
    title: "Authorize.Net & Braintree trust corridor",
    summary: "North American partners retain familiar rails while SAMA and MISA expectations stay fully auditable.",
    bullets: [
      "KYC documentation vault stores due diligence dossiers, beneficial ownership records, and regulator artefacts.",
      "Backup manager preserves settlement files, dispute narratives, and audit-ready commentary."
    ],
    icon: ShieldCheck
  },
  {
    title: "Adyen & 2Checkout expansion runway",
    summary: "Connect Saudi ventures with EU, US, and APAC markets through unified telemetry and automation.",
    bullets: [
      "E-wallet module releases instant commissions once acquiring partners confirm clear funds.",
      "E-voucher engine powers promotional codes, partner incentives, and loyalty programmes."
    ],
    icon: RocketLaunch
  }
];

const STAGES: Stage[] = [
  {
    step: "Track 01",
    heading: "Interpret the WordPress archive",
    detail:
      "Capture the headline, gateway roster, and module references before transforming the narrative for Vision 2030 ambitions.",
    icon: Compass
  },
  {
    step: "Track 02",
    heading: "Engineer regulatory choreography",
    detail:
      "Blend SAMA guidance, MISA requirements, ZATCA VAT rules, and data residency controls with AI-assisted workflows.",
    icon: ClipboardText
  },
  {
    step: "Track 03",
    heading: "Automate growth operations",
    detail:
      "Ticketing, backups, multilingual messaging, and analytics align finance, compliance, and go-to-market leaders.",
    icon: Lightning
  },
  {
    step: "Track 04",
    heading: "Amplify Vision 2030 impact",
    detail:
      "Scenario plans target NEOM, Red Sea, and giga-project ecosystems with repeatable launch kits and AI telemetry.",
    icon: ChartLineUp
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    name: "Multi currency module",
    description: "Balances SAR, USD, EUR, AED, and GBP flows with predictive variance alerts for CFO teams.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    description: "Routes PSP escalations, regulator questions, and partner feedback into SLA dashboards.",
    icon: ChatsCircle
  },
  {
    name: "Multilingual system",
    description: "Delivers Arabic and English experiences without fragmenting brand identity.",
    icon: UsersThree
  },
  {
    name: "Auto responder",
    description: "Automates onboarding, compliance reminders, and executive communications across channels.",
    icon: Megaphone
  },
  {
    name: "E-wallet",
    description: "Provides instant commissions, reimbursements, and loyalty payouts with maker-checker governance.",
    icon: Wallet
  },
  {
    name: "E-voucher",
    description: "Issues campaign vouchers, event passes, and partner incentives with redemption analytics.",
    icon: Stack
  },
  {
    name: "KYC documentation",
    description: "Stores regulatory filings, due diligence packs, and AML evidence with renewal alerts.",
    icon: ClipboardText
  },
  {
    name: "Backup manager",
    description: "Safeguards settlements, dispute trails, and telemetry across regional cloud zones.",
    icon: DeviceMobileCamera
  }
];

export const metadata: Metadata = {
  title: "Saudi Arabia MLM Payment Gateways | Cloud MLM Software",
  description:
    "Modernise PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for Saudi Arabia with Cloud MLM Software’s Vision 2030-ready automation and compliance.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/saudi-arabia"
  },
  openGraph: {
    title: "Saudi Arabia MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Saudi Arabia—retaining the WordPress narrative while adding AI telemetry and regulatory choreography."
  }
};

type SaudiArabiaPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function SaudiArabiaPaymentGatewayPage({ params }: SaudiArabiaPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-amber-50 via-white to-stone-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-amber-950/60">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-200/60 blur-3xl dark:bg-amber-900/40" />
          <div className="absolute bottom-10 right-12 h-60 w-60 rounded-full bg-emerald-200/60 blur-3xl dark:bg-emerald-900/40" />
          <div className="absolute -bottom-28 left-8 h-72 w-72 rounded-full bg-stone-200/60 blur-3xl dark:bg-slate-900/40" />
        </div>
        <div className="container relative grid gap-12 lg:grid-cols-[minmax(0,0.68fr),minmax(0,0.32fr)]">
          <div className="space-y-8 text-foreground dark:text-white">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-amber-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                Ways to accept payments · Saudi Arabia (SA)
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Saudi Arabia – SA
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software converts the WordPress export into a Vision 2030-ready programme. Commerce, fintech,
                tourism, and giga-project teams gain multi currency orchestration, compliance guardrails, and automation
                designed for Saudi Arabia’s ambition.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {HERO_CALLOUTS.map((callout) => {
                const Icon = callout.icon;
                return (
                  <article
                    key={callout.label}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-amber-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-amber-500/15 text-amber-800 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-sm font-semibold text-foreground dark:text-white">{callout.label}</h2>
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{callout.copy}</p>
                  </article>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Talk to a Saudi strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-amber-300 text-amber-900 hover:bg-amber-100 dark:border-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  Preview the updated demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Link
                href={gatewayHubHref}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-900 transition hover:bg-emerald-100 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
              >
                Explore more regions
                <ArrowUpRight className="h-3 w-3" aria-hidden />
              </Link>
            </div>
          </div>
          <div className="space-y-4 rounded-[2.5rem] border border-white/60 bg-white/80 p-6 shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-900 dark:text-white/70">
              Telemetry snapshot
            </h2>
            <div className="grid gap-4">
              {HERO_METRICS.map((metric) => (
                <div key={metric.label} className="space-y-1 rounded-2xl border border-amber-200/60 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="text-3xl font-semibold text-amber-900 dark:text-white">{metric.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700 dark:text-amber-200">
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
            Gateway arcs engineered for Saudi Arabia’s Vision 2030 ambitions
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The legacy WordPress roster of gateways gains regulatory guardrails, automation, and AI telemetry tailored to
            Saudi Arabia’s giga-projects and global partnerships.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_ARCS.map((arc) => {
            const Icon = arc.icon;
            return (
              <article
                key={arc.title}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-amber-200/60 bg-white/80 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-800 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{arc.title}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{arc.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {arc.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-amber-500 dark:bg-white" aria-hidden />
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
              Four tracks to modernise Saudi Arabia operations
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              We keep the original narrative while embedding regulatory, automation, and AI telemetry layers for Saudi
              Arabia’s rapid growth trajectories.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.step}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-amber-200/60 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700 dark:text-amber-200">
                        {stage.step}
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
              Module stack reimagined for Vision 2030 programmes
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Multi currency, multilingual, ticketing, autoresponder, e-wallet, e-voucher, KYC documentation, and backup
              modules combine into an AI-enabled command centre built for Saudi Arabia’s giga-projects.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {MODULE_CARDS.slice(0, 4).map((module) => {
                const Icon = module.icon;
                return (
                  <article
                    key={module.name}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-amber-200/60 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-800 dark:bg-white/10 dark:text-white">
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
                  className="flex h-full flex-col gap-3 rounded-[2.5rem] border border-emerald-200/60 bg-gradient-to-br from-white via-white to-emerald-50 p-5 shadow-sm dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
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
      </section>

      <section className="container">
        <div className="grid gap-10 rounded-[3rem] border border-amber-200/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white shadow-lg dark:border-slate-700/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 lg:grid-cols-[minmax(0,0.6fr),minmax(0,0.4fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-amber-100/90">
              Cloud MLM Software · Thought leadership
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to operationalise Saudi Arabia payment gateways?
            </h2>
            <p className="text-sm text-amber-100/80">
              Partner with Cloud MLM Software to transform your WordPress briefing into an AI-enabled, compliance-first
              operation tailored for Vision 2030. Align finance, compliance, and growth teams across the Kingdom.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 rounded-full bg-white text-slate-900 hover:bg-amber-100">
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
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-100/80">Telemetry snapshot</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {HERO_METRICS.map((metric) => (
                  <div key={metric.label} className="space-y-1">
                    <p className="text-3xl font-semibold text-white">{metric.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100/70">{metric.label}</p>
                    <p className="text-sm text-amber-100/80">{metric.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-amber-100/80">
              AI copilots track conversion curves, compliance posture, and commission velocity so Saudi Arabia’s leaders can
              scale with confidence.
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
