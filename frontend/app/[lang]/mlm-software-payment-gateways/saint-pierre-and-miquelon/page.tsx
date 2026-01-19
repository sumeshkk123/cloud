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
  UsersThree,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroRibbon = {
  label: string;
  detail: string;
};

type HeroInsight = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayStory = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Phase = {
  stage: string;
  headline: string;
  detail: string;
  icon: IconType;
};

type ModuleTile = {
  title: string;
  description: string;
  icon: IconType;
};

const HERO_RIBBONS: HeroRibbon[] = [
  {
    label: "WordPress headline preserved",
    detail: "“Ways to accept payments from MLM Software in People’s Democratic Republic of Saint Pierre and Miquelon – PM”"
  },
  {
    label: "Gateway roster retained",
    detail: "PayPal · Amazon Pay · PayU · Stripe · Authorize.Net · Braintree · Adyen · 2Checkout"
  },
  {
    label: "French territorial governance",
    detail: "GDPR, Trésor public, and Atlantic logistics support built into automation"
  }
];

const HERO_INSIGHTS: HeroInsight[] = [
  {
    title: "Archipelago-first payment strategy",
    description:
      "Saint Pierre and Miquelon’s shipping, fisheries, and tourism sectors demand resilient multi currency orchestration.",
    icon: MapTrifold
  },
  {
    title: "Automation for remote operations",
    description:
      "Ticketing, backups, multilingual messaging, and FX dashboards keep Paris, Newfoundland, and local teams aligned.",
    icon: Lightning
  },
  {
    title: "AI-ready compliance posture",
    description:
      "KYC documentation, AML reviews, and border controls flow into auditable workstreams ready for regulators and auditors.",
    icon: ShieldCheck
  }
];

const GATEWAY_STORIES: GatewayStory[] = [
  {
    name: "PayPal & Amazon Pay maritime corridor",
    summary:
      "Support fisheries exports, maritime charters, and tourism experiences spanning France, Canada, and the Atlantic.",
    bullets: [
      "Multi currency module reconciles EUR, CAD, and USD settlements with tolerance alerts.",
      "Emails module sends AI-personalised receipts, customs updates, and compliance reminders."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "PayU & Stripe ecommerce lattice",
    summary: "Enable remote subscriptions, membership clubs, and virtual experiences for global supporters.",
    bullets: [
      "Ticket system module routes PSP escalations, shipping updates, and harbour logistics into SLA dashboards.",
      "Auto responder activates bilingual onboarding, renewal nudges, and event reminders."
    ],
    icon: Megaphone
  },
  {
    name: "Authorize.Net & Braintree continuity spine",
    summary: "North American partners retain familiar rails while French governance stays intact.",
    bullets: [
      "KYC documentation vault stores maritime clearances, residency evidence, and beneficial ownership files.",
      "Backup manager protects settlement data, dispute narratives, and auditor-ready commentary."
    ],
    icon: ClipboardText
  },
  {
    name: "Adyen & 2Checkout expansion runway",
    summary: "Link Saint Pierre and Miquelon launches with Paris, Quebec, and global diaspora networks.",
    bullets: [
      "E-wallet module releases instant commissions once acquiring partners confirm funds.",
      "E-voucher engine powers tourism packages, loyalty rewards, and referral incentives."
    ],
    icon: RocketLaunch
  }
];

const PHASES: Phase[] = [
  {
    stage: "Phase 01",
    headline: "Catalogue the original brief",
    detail: "Preserve the WordPress headline, gateway list, and module references before reimagining the experience.",
    icon: Stack
  },
  {
    stage: "Phase 02",
    headline: "Engineer Atlantic compliance",
    detail:
      "Align GDPR, French territorial tax rules, and customs documentation with AI-assisted workflows and audit logs.",
    icon: ShieldCheck
  },
  {
    stage: "Phase 03",
    headline: "Automate island operations",
    detail:
      "Ticketing, multilingual messaging, and backup modules unify Paris, Saint Pierre, and Newfoundland collaboration.",
    icon: ChatsCircle
  },
  {
    stage: "Phase 04",
    headline: "Scale regional partnerships",
    detail:
      "Scenario models ready expansions into Quebec, Nova Scotia, and Brittany while keeping the archipelago at the centre.",
    icon: ChartLineUp
  }
];

const MODULE_TILES: ModuleTile[] = [
  {
    title: "Multi currency module",
    description: "Balances EUR, CAD, and USD flows with predictive variance alerts for finance leaders.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    description: "Routes PSP, harbour logistics, and distributor support into SLA-driven queues.",
    icon: ChatsCircle
  },
  {
    title: "Multilingual system",
    description: "Delivers French and English experiences without splitting brand identity.",
    icon: UsersThree
  },
  {
    title: "Auto responder",
    description: "Automates onboarding, compliance notices, and travel advisories across channels.",
    icon: Megaphone
  },
  {
    title: "E-wallet",
    description: "Issues instant commissions, reimbursements, and loyalty payouts with maker-checker controls.",
    icon: Wallet
  },
  {
    title: "E-voucher",
    description: "Distributes tourism packages, training passes, and referral bonuses with redemption analytics.",
    icon: Stack
  },
  {
    title: "KYC documentation",
    description: "Stores maritime permits, residency evidence, and AML attestations with renewal alerts.",
    icon: ClipboardText
  },
  {
    title: "Backup manager",
    description: "Safeguards settlements, dispute trails, and analytics across redundant French and Canadian zones.",
    icon: DeviceMobileCamera
  }
];

export const metadata: Metadata = {
  title: "Saint Pierre and Miquelon MLM Payment Gateways | Cloud MLM Software",
  description:
    "Upgrade PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for Saint Pierre and Miquelon with Cloud MLM Software’s AI-enabled, compliance-ready operations.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/saint-pierre-and-miquelon"
  },
  openGraph: {
    title: "Saint Pierre and Miquelon MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Saint Pierre and Miquelon—anchored in the original narrative, now powered by multi currency automation and AI telemetry."
  }
};

type SaintPierrePageProps = {
  params: { lang: SupportedLocale };
};

export default function SaintPierreAndMiquelonPaymentGatewayPage({ params }: SaintPierrePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-slate-100 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950/60">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-200/60 blur-3xl dark:bg-sky-900/40" />
          <div className="absolute bottom-12 right-16 h-60 w-60 rounded-full bg-blue-200/60 blur-3xl dark:bg-blue-900/40" />
          <div className="absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl dark:bg-emerald-900/40" />
        </div>
        <div className="container relative space-y-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr),minmax(0,0.3fr)]">
            <div className="space-y-6 text-foreground dark:text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-sky-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                Ways to accept payments · Saint Pierre and Miquelon (PM)
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Saint Pierre and Miquelon – PM
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software keeps the WordPress voice alive while delivering an AI-ready control tower for the
                archipelago. Fisheries, tourism, fintech, and diaspora programmes gain multi currency orchestration,
                automated compliance, and resilient payment visibility across the Atlantic.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href={contactHref}>
                    Speak with a Saint Pierre strategist
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="gap-2 border-sky-300 text-sky-900 hover:bg-sky-100 dark:border-white/20 dark:text-white"
                >
                  <Link href={demoHref}>
                    Preview the archipelago demo
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-[2.5rem] border border-white/60 bg-white/80 p-6 shadow-lg backdrop-blur dark:border-white/10 dark:bg-white/5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-900 dark:text-white/70">
                Canonical commitments
              </h2>
              <div className="space-y-4">
                {HERO_RIBBONS.map((ribbon) => (
                  <div key={ribbon.label} className="space-y-1 rounded-2xl border border-sky-200/60 bg-white/80 p-4 dark:border-white/10 dark:bg-white/5">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 dark:text-sky-200">{ribbon.label}</p>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{ribbon.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {HERO_INSIGHTS.map((insight) => {
              const Icon = insight.icon;
              return (
                <article
                  key={insight.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-sky-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-500/15 text-sky-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-base font-semibold text-foreground dark:text-white">{insight.title}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{insight.description}</p>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground dark:text-white/60">
            <span>Explore additional regions</span>
            <Link href={gatewayHubHref} className="inline-flex items-center gap-1 font-semibold text-sky-700 hover:underline dark:text-sky-200">
              MLM Software Payment Gateways
              <ArrowUpRight className="h-3 w-3" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Gateway orchestration for Saint Pierre and Miquelon
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The WordPress export kept eight gateway partners front-and-centre. We retain the roster, layering automation,
            compliance, and AI telemetry tailored to Atlantic island realities.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_STORIES.map((story) => {
            const Icon = story.icon;
            return (
              <article
                key={story.name}
                className="flex h-full flex-col gap-4 rounded-[2.5rem] border border-sky-200/60 bg-white/80 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-800 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{story.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{story.summary}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {story.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-sky-500 dark:bg-white" aria-hidden />
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
              Four phases to modernise Saint Pierre and Miquelon
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              We preserve the historical narrative while introducing compliance, automation, and telemetry for remote
              operations and global stakeholders.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <article
                  key={phase.stage}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-sky-200/60 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-700 dark:text-sky-200">
                        {phase.stage}
                      </p>
                      <h3 className="mt-1 text-base font-semibold text-foreground dark:text-white">{phase.headline}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{phase.detail}</p>
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
              Modules reimagined for Atlantic resilience
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Multi currency, multilingual, ticketing, autoresponder, e-wallet, e-voucher, KYC documentation, and backup
              modules now include AI copilots, compliance guardrails, and archipelago-friendly automation.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {MODULE_TILES.slice(0, 4).map((module) => {
                const Icon = module.icon;
                return (
                  <article
                    key={module.title}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-sky-200/60 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-800 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="text-base font-semibold text-foreground dark:text-white">{module.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{module.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="space-y-4">
            {MODULE_TILES.slice(4).map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="flex h-full flex-col gap-3 rounded-[2.5rem] border border-blue-200/60 bg-gradient-to-br from-white via-white to-blue-50 p-5 shadow-sm dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{module.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{module.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 rounded-[3rem] border border-sky-200/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white shadow-lg dark:border-slate-700/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 lg:grid-cols-[minmax(0,0.6fr),minmax(0,0.4fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-sky-100/90">
              Cloud MLM Software · Thought leadership
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to operationalise Saint Pierre and Miquelon gateways?
            </h2>
            <p className="text-sm text-sky-100/80">
              Transform the WordPress briefing into an AI-aware command centre. Align finance, compliance, and field teams
              across Paris, the archipelago, and global partners with Cloud MLM Software.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 rounded-full bg-white text-slate-900 hover:bg-sky-100">
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
                  Review licensing pathways
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 rounded-[2.5rem] border border-white/15 bg-white/10 p-8 backdrop-blur">
            <div className="grid gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-100/80">Telemetry snapshot</p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-1">
                  <p className="text-3xl font-semibold text-white">8</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-100/70">Gateway partners</p>
                  <p className="text-sm text-sky-100/80">Modernised with compliance, FX, and automation layers.</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-semibold text-white">4</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-100/70">Operational phases</p>
                  <p className="text-sm text-sky-100/80">From archive interpretation to Atlantic expansion.</p>
                </div>
                <div className="space-y-1">
                  <p className="text-3xl font-semibold text-white">3</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-100/70">AI copilots</p>
                  <p className="text-sm text-sky-100/80">Monitoring conversions, compliance, and commissions.</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-sky-100/80">
              AI intelligence keeps remote teams informed on gateway performance, regulator requests, and distributor
              enablement around the world.
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
