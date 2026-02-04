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
  Bank,
  Buildings,
  ChartLineUp,
  ChatsCircle,
  Circuitry,
  Compass,
  CurrencyCircleDollar,
  Lightning,
  MapTrifold,
  Megaphone,
  Plugs,
  ShieldCheck,
  Sparkle,
  StackSimple,
  UsersThree,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  title: string;
  description: string;
  icon: IconType;
};

type Gateway = {
  name: string;
  focus: string;
  actions: string[];
  icon: IconType;
};

type Module = {
  title: string;
  detail: string;
  icon: IconType;
};

type Step = {
  phase: string;
  title: string;
  detail: string;
  icon: IconType;
};

type Alliance = {
  region: string;
  insight: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Legacy statement preserved",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of South Korea - KR anchors the modern programme.",
    icon: StackSimple
  },
  {
    title: "Gateway roster confirmed",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain mandatory for the rollout.",
    icon: Plugs
  },
  {
    title: "Module fabric orchestrated",
    description:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, and multi-lingual system operate as one telemetry mesh.",
    icon: Circuitry
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal global runway",
    focus: "Connect Seoul headquarters with distributors and partners across the Americas, Europe, and APAC.",
    actions: [
      "Multi currency module reconciles KRW, USD, EUR, and JPY flows with compliance ready variance commentary.",
      "Ticket system module stores FSC and FSS documentation plus cross border policy approvals."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay commerce lane",
    focus: "Deliver premium ecommerce experiences across K-beauty, tech, and lifestyle ecosystems.",
    actions: [
      "Auto responder issues multilingual confirmations aligned to just-in-time logistics windows.",
      "Backup manager snapshots seasonal drops and promotional bundles before each launch."
    ],
    icon: Megaphone
  },
  {
    name: "PayU APAC mesh",
    focus: "Blend Asian wallets, domestic PSPs, and global acquirers without losing regulatory agility.",
    actions: [
      "Emails module circulates FSC, AML, and tax updates to finance, compliance, and treasury leads.",
      "KYC documentation tracks business registrations, sanction screenings, and digital signature records."
    ],
    icon: ChatsCircle
  },
  {
    name: "Stripe innovation studio",
    focus: "Prototype AI concierge, subscription bundles, and smart retail experiences with developer velocity.",
    actions: [
      "Ticket system module routes developer escalations with AI generated reproduction notes.",
      "Multi-lingual system harmonises Korean, English, and Japanese surfaces for omnichannel marketing."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net compliance track",
    focus: "Blend US acquiring expectations with Korean governance to support global expansion.",
    actions: [
      "Multi currency module compares US settlement performance against Korean banking partners.",
      "KYC documentation keeps sanction, PEP, and merchant onboarding dossiers inspection ready."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel core",
    focus: "Tokenise experiential retail, pop-up activations, and influencer programmes.",
    actions: [
      "E-wallet module enables instant commissions with maker-checker guardrails by distributor tier.",
      "Backup manager protects offline transactions for hybrid retail moments and events."
    ],
    icon: Wallet
  },
  {
    name: "Adyen performance tower",
    focus: "Monitor conversion, risk, and interchange metrics across EU, US, and APAC corridors from Seoul.",
    actions: [
      "Multi currency module visualises FX exposure across KRW, USD, EUR, and SGD routes.",
      "Emails module distributes scheme updates, SCA requirements, and compliance alerts with traceability."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    focus: "Deliver digital kits, AI enablement, and learning assets to Korean and global distributor teams.",
    actions: [
      "E-voucher journeys automate incentive fulfilment with tax documentation aligned to Korean accounting standards.",
      "Multi-lingual system keeps Korean, English, and Japanese learning pathways synchronised."
    ],
    icon: MapTrifold
  }
];

const MODULES: Module[] = [
  {
    title: "Multi currency module",
    detail: "Balances KRW, USD, EUR, JPY, and SGD with AI assisted reconciliation insights and variance alerts.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    detail: "Routes FSC, FSS, PSP, and distributor requests with SLA dashboards and immutable audit logs.",
    icon: ShieldCheck
  },
  {
    title: "Auto responder",
    detail: "Delivers Korean, English, and Japanese communications across SMS, email, and chatbot surfaces.",
    icon: Sparkle
  },
  {
    title: "E-voucher",
    detail: "Issues loyalty perks, promotional bundles, and event passes with maker-checker approvals.",
    icon: Wallet
  },
  {
    title: "E-wallet",
    detail: "Streams commissions and reimbursements with liquidity guardrails and CFO ready analytics.",
    icon: Buildings
  },
  {
    title: "Backup manager",
    detail: "Safeguards storefronts, automation pipelines, and compliance archives before each release window.",
    icon: ShieldCheck
  },
  {
    title: "Emails module",
    detail: "Centralises transactional, marketing, and compliance messaging with deliverability telemetry.",
    icon: ChatsCircle
  },
  {
    title: "KYC documentation",
    detail: "Maintains identity, corporate, and banking evidence with automated renewal reminders.",
    icon: Compass
  },
  {
    title: "Multi-lingual system",
    detail: "Keeps Korean, English, and Japanese experiences aligned across portals, bots, and AI assistants.",
    icon: Circuitry
  }
];

const STEPS: Step[] = [
  {
    phase: "Phase 01",
    title: "Transcribe the WordPress heritage",
    detail:
      "Retain the original headline, gateway roster, and navigation modules so stakeholders recognise continuity from day one.",
    icon: StackSimple
  },
  {
    phase: "Phase 02",
    title: "Embed Korean governance frameworks",
    detail:
      "Integrate FSC, FSS, AML, and data privacy expectations into workflows, approvals, and dashboards.",
    icon: ShieldCheck
  },
  {
    phase: "Phase 03",
    title: "Activate the eight connectors",
    detail:
      "Advance PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout through sandbox, pilot, and production ceremonies.",
    icon: Plugs
  },
  {
    phase: "Phase 04",
    title: "Scale AI telemetry and insights",
    detail:
      "Deliver executive briefings, liquidity forecasts, and anomaly detection tuned for Korean leadership velocity.",
    icon: ChartLineUp
  }
];

const ALLIANCES: Alliance[] = [
  {
    region: "Asia Pacific",
    insight:
      "Collaborates with Singapore, Tokyo, and Sydney hubs on AI automation, experimentation cadences, and compliance.",
    icon: Lightning
  },
  {
    region: "North America",
    insight:
      "Shares Authorize.Net governance and diaspora enablement strategies with Los Angeles and Vancouver teams.",
    icon: UsersThree
  },
  {
    region: "Europe",
    insight:
      "Aligns PSD2 practices, interchange optimisation, and treasury automation with Amsterdam and Berlin hubs.",
    icon: ChartLineUp
  },
  {
    region: "Middle East",
    insight:
      "Partners with Dubai and Riyadh teams on liquidity, FX resilience, and correspondent banking frameworks.",
    icon: Bank
  },
  {
    region: "Latin America",
    insight:
      "Works with Mexico City and Sao Paulo programmes on localisation, compliance, and AI enablement routines.",
    icon: MapTrifold
  },
  {
    region: "Africa",
    insight:
      "Collaborates with Nairobi and Lagos operations on mobile money innovation, risk governance, and field enablement.",
    icon: Compass
  }
];

export const metadata: Metadata = {
  title: "South Korea MLM Payment Gateways | Cloud MLM Software",
  description:
    "Deploy South Korea ready MLM payment gateways with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout orchestrated through AI enabled, compliance rich workflows.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/south-korea"
  },
  openGraph: {
    title: "South Korea MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of South Korea - now elevated with FSC governance, AI telemetry, and global scale execution."
  }
};

type SouthKoreaPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function SouthKoreaPaymentGatewayPage({ params }: SouthKoreaPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-purple-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_60%),radial-gradient(circle_at_80%_15%,rgba(168,85,247,0.25),transparent_55%),radial-gradient(circle_at_45%_80%,rgba(14,165,233,0.2),transparent_60%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
              South Korea - Payment Orchestration
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                South Korea MLM payment gateways designed for high velocity innovation
              </h1>
              <p className="max-w-2xl text-base text-white/75">
                Cloud MLM Software translates the WordPress export into an AI optimised platform that matches South
                Korea&apos;s pursuit of digital excellence, compliance discipline, and global presence.
              </p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-sm backdrop-blur">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/70">Legacy anchor</p>
              <p className="mt-3 text-base text-white">
                Ways to accept payments from MLM Software in People&apos;s Democratic Republic of South Korea - KR
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-blue-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Connect with Seoul leadership
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-white/30 text-white hover:bg-white/10"
              >
                <Link href={demoHref}>
                  Preview the AI powered demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article
                  key={highlight.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-cyan-500/20 opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold">{highlight.title}</h2>
                      <p className="text-sm text-white/75">{highlight.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Gateway plays engineered for Korean compliance, product, and finance excellence
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The eight connectors retain their original names while gaining actionable moves for cross functional teams.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border/60 bg-background/85 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/15 text-blue-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground dark:text-white">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.focus}</p>
                  </div>
                </div>
                <ul className="relative space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {gateway.actions.map((action) => (
                    <li key={action} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 dark:bg-white" aria-hidden />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/70 py-20 dark:bg-slate-950">
        <div className="container space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Modules from the WordPress navigation now power one Korean platform
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Each module gains telemetry, localisation, and compliance guardrails to support Korean leadership.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-blue-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{module.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{module.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="space-y-6 rounded-3xl border border-blue-500/30 bg-white/85 p-8 shadow-sm dark:border-white/15 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-white/70">
              Execution playbook
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white">
              Four phases that respect heritage and accelerate innovation
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Maintain the original storyline, integrate governance, activate connectors, and unlock AI telemetry for
              Korean leadership teams.
            </p>
            <Button asChild variant="secondary" size="lg" className="gap-2">
              <Link href={pricingHref}>
                Review South Korea pricing frameworks
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 hidden w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent lg:block" />
            <div className="space-y-6">
              {STEPS.map((step) => {
                const Icon = step.icon;
                return (
                  <article
                    key={step.phase}
                    className="relative rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/15 text-blue-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div className="space-y-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                          {step.phase}
                        </span>
                        <h3 className="text-base font-semibold text-foreground dark:text-white">{step.title}</h3>
                        <p className="text-sm text-muted-foreground dark:text-white/70">{step.detail}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(59,130,246,0.35),transparent_60%),radial-gradient(circle_at_80%_15%,rgba(168,85,247,0.2),transparent_55%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/75">
              South Korea collaborates with global hubs to maintain resilient, compliant, and AI informed payment
              operations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ALLIANCES.map((alliance) => {
              const Icon = alliance.icon;
              return (
                <article key={alliance.region} className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/5 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{alliance.region}</h3>
                  </div>
                  <p className="text-sm text-white/75">{alliance.insight}</p>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-blue-900 hover:bg-slate-200">
              <Link href={contactHref}>
                Talk to a South Korea strategist
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={demoHref}>
                Launch the interactive demo
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
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
