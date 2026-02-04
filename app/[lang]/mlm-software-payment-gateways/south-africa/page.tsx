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
  ChartLineUp,
  ChatsCircle,
  Compass,
  CurrencyCircleDollar,
  GlobeHemisphereEast,
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
  body: string;
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
    title: "Legacy headline preserved",
    body:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of South Africa - ZA remains the reference point for the new experience.",
    icon: StackSimple
  },
  {
    title: "Gateway list confirmed",
    body:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout continue as the mandated connectors.",
    icon: Plugs
  },
  {
    title: "Module ecosystem unified",
    body:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, and multi-lingual system operate as one telemetry-rich fabric.",
    icon: Sparkle
  }
];

const GATEWAYS: Gateway[] = [
  {
    name: "PayPal diaspora runway",
    focus: "Connect Johannesburg leadership with global distributors in London, Toronto, and Perth.",
    actions: [
      "Multi currency module reconciles ZAR, USD, GBP, and AUD flows with treasury ready variance notes.",
      "Ticket system module stores SA Reserve Bank compliance evidence and exchange control documentation."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay retail lane",
    focus: "Support ecommerce, retail, and lifestyle brands across Gauteng, Western Cape, and KZN provinces.",
    actions: [
      "Auto responder issues bilingual confirmations aligned to delivery windows and pick-up hubs.",
      "Backup manager snapshots seasonal campaigns before holiday and tourism peaks."
    ],
    icon: Megaphone
  },
  {
    name: "PayU continental mesh",
    focus: "Blend South African PSPs, mobile money, and continental wallets with global processors.",
    actions: [
      "Emails module circulates FSCA, SARB, and POPIA updates to compliance and finance leaders.",
      "KYC documentation vault tracks FICA verification, business registrations, and sanction checks."
    ],
    icon: ChatsCircle
  },
  {
    name: "Stripe innovation studio",
    focus: "Prototype AI concierge, subscription bundles, and gig economy programmes across major metros.",
    actions: [
      "Ticket system module routes developer escalations with AI generated reproduction notes.",
      "Multi-lingual system harmonises English, Afrikaans, and isiZulu surfaces."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net governance track",
    focus: "Blend US acquiring expectations with South African compliance mandates for cross-border growth.",
    actions: [
      "Multi currency module compares US settlement performance against local banking partners.",
      "KYC documentation retains sanction, PEP, and tax clearance records inspection ready."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel vault",
    focus: "Tokenise experiential marketing, field events, and premium retail activations.",
    actions: [
      "E-wallet module delivers instant commissions with maker-checker guardrails per distributor tier.",
      "Backup manager protects offline transactions for areas with intermittent connectivity."
    ],
    icon: Wallet
  },
  {
    name: "Adyen performance tower",
    focus: "Monitor conversion, risk, and interchange metrics across Africa, EU, and US corridors.",
    actions: [
      "Multi currency module visualises FX exposure across ZAR, USD, EUR, and GBP routes.",
      "Emails module distributes scheme advisories, SCA updates, and compliance alerts."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    focus: "Deliver digital kits, AI enablement, and field onboarding to South African and continental teams.",
    actions: [
      "E-voucher journeys automate incentive fulfilment with tax documentation aligned to SARS requirements.",
      "Multi-lingual system keeps English, Afrikaans, and isiZulu knowledge assets aligned."
    ],
    icon: MapTrifold
  }
];

const MODULES: Module[] = [
  {
    title: "Multi currency module",
    detail: "Balances ZAR, USD, EUR, GBP, and AUD with AI assisted reconciliation commentary and variance alerts.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    detail: "Routes FSCA, SARB, and POPIA requests with SLA dashboards and immutable audit trails.",
    icon: ShieldCheck
  },
  {
    title: "Auto responder",
    detail: "Delivers multilingual communications across SMS, email, and chatbot surfaces instantly.",
    icon: Sparkle
  },
  {
    title: "E-voucher",
    detail: "Issues loyalty rewards, promo credits, and event passes with maker-checker approvals.",
    icon: Wallet
  },
  {
    title: "E-wallet",
    detail: "Streams commissions and reimbursements with liquidity guardrails and CFO ready analytics.",
    icon: Bank
  },
  {
    title: "Backup manager",
    detail: "Safeguards storefronts, automation flows, and compliance archives before every launch cycle.",
    icon: ShieldCheck
  },
  {
    title: "Emails module",
    detail: "Centralises transactional, marketing, and compliance messaging with deliverability telemetry.",
    icon: ChatsCircle
  },
  {
    title: "KYC documentation",
    detail: "Maintains FICA, tax clearance, and sanction evidence with automated renewal reminders.",
    icon: Compass
  },
  {
    title: "Multi-lingual system",
    detail: "Keeps English, Afrikaans, isiZulu, and Setswana experiences aligned across portals and bots.",
    icon: GlobeHemisphereEast
  }
];

const STEPS: Step[] = [
  {
    phase: "Phase 01",
    title: "Transcribe the WordPress legacy",
    detail:
      "Retain the original headline, gateway references, and module list so stakeholders see continuity immediately.",
    icon: StackSimple
  },
  {
    phase: "Phase 02",
    title: "Instrument South African governance",
    detail:
      "Embed FSCA, SARB, POPIA, and FICA expectations into workflows, approvals, and monitoring dashboards.",
    icon: ShieldCheck
  },
  {
    phase: "Phase 03",
    title: "Activate the connector roster",
    detail:
      "Move PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout through sandbox, pilot, and production ceremonies.",
    icon: Plugs
  },
  {
    phase: "Phase 04",
    title: "Scale AI telemetry",
    detail:
      "Deliver executive briefings, liquidity forecasts, and anomaly detection tuned for South African leadership.",
    icon: ChartLineUp
  }
];

const ALLIANCES: Alliance[] = [
  {
    region: "Southern Africa",
    insight:
      "Collaborates with Botswana, Namibia, and Mozambique teams on cross-border compliance and FX strategy.",
    icon: Compass
  },
  {
    region: "East Africa",
    insight:
      "Shares wallet innovation, M-Pesa integration learnings, and AI telemetry with Nairobi and Kampala hubs.",
    icon: Lightning
  },
  {
    region: "Europe",
    insight:
      "Aligns PSD2 practices, risk controls, and treasury automation with Amsterdam and London partners.",
    icon: ChartLineUp
  },
  {
    region: "North America",
    insight:
      "Coordinates with New York and Toronto leadership on Authorize.Net governance and diaspora enablement.",
    icon: UsersThree
  },
  {
    region: "Middle East",
    insight:
      "Partners with Dubai and Riyadh treasury teams on liquidity buffers and correspondent banking diversification.",
    icon: Bank
  },
  {
    region: "Asia Pacific",
    insight:
      "Works with Singapore and Sydney hubs on AI experimentation cadences and automation frameworks.",
    icon: MapTrifold
  }
];

export const metadata: Metadata = {
  title: "South Africa MLM Payment Gateways | Cloud MLM Software",
  description:
    "Deploy South Africa ready MLM payment gateways with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout orchestrated through compliance rich, AI enabled workflows.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/south-africa"
  },
  openGraph: {
    title: "South Africa MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of South Africa - now elevated with FSCA governance, AI telemetry, and executive ready insights."
  }
};

type SouthAfricaPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function SouthAfricaPaymentGatewayPage({ params }: SouthAfricaPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-yellow-100 py-20 dark:from-emerald-500/25 dark:via-slate-950 dark:to-yellow-500/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.3),transparent_60%),radial-gradient(circle_at_80%_15%,rgba(253,224,71,0.25),transparent_55%),radial-gradient(circle_at_45%_80%,rgba(59,130,246,0.2),transparent_60%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700 dark:border-white/20 dark:bg-white/10 dark:text-white">
              South Africa - Payment Orchestration
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                South Africa MLM payment gateways tuned for continental leadership
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software modernises the WordPress narrative into an AI optimised platform that satisfies South
                African compliance, treasury, and customer experience ambitions.
              </p>
            </div>
            <div className="rounded-3xl border border-emerald-500/30 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/10">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-700 dark:text-white/70">
                Legacy anchor
              </p>
              <p className="mt-3 text-base text-foreground dark:text-white">
                Ways to accept payments from MLM Software in People&apos;s Democratic Republic of South Africa - ZA
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Connect with South Africa leadership
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-emerald-500/40 text-emerald-800 hover:bg-emerald-100 dark:border-white/30 dark:text-white"
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
                  className="group relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-yellow-500/15 to-blue-500/15 opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground dark:text-white">{highlight.title}</h2>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{highlight.body}</p>
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
            Gateway plays tuned for South African compliance and scale
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The eight connectors from the WordPress export now arrive with concrete actions for finance, compliance, and
            experience teams.
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
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-yellow-500/10 to-blue-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
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
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 dark:bg-white" aria-hidden />
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
              Modules from the WordPress navigation now operate as one South African platform
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Each module contributes telemetry, resilience, and multilingual experiences ready for continental rollout.
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
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
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
          <div className="space-y-6 rounded-3xl border border-emerald-500/30 bg-white/85 p-8 shadow-sm dark:border-white/15 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600 dark:text-white/70">
              Delivery playbook
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white">
              Four phases to modernise the South Africa page responsibly
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Preserve heritage, codify governance, activate connectors, and unlock AI telemetry for South African
              leadership.
            </p>
            <Button asChild variant="secondary" size="lg" className="gap-2">
              <Link href={pricingHref}>
                Review South Africa pricing frameworks
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 hidden w-px bg-gradient-to-b from-emerald-500 via-yellow-500 to-transparent lg:block" />
            <div className="space-y-6">
              {STEPS.map((step) => {
                const Icon = step.icon;
                return (
                  <article
                    key={step.phase}
                    className="relative rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
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

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-900 to-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(16,185,129,0.35),transparent_60%),radial-gradient(circle_at_80%_15%,rgba(253,224,71,0.2),transparent_55%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/75">
              South Africa collaborates with continental and global hubs to maintain resilient, compliant, and AI enabled
              payment operations.
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
            <Button asChild size="lg" className="gap-2 bg-white text-emerald-900 hover:bg-emerald-100">
              <Link href={contactHref}>
                Talk to a South Africa strategist
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
