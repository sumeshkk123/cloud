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
  AirTrafficControl,
  Buildings,
  ChartLineUp,
  ChatsCircle,
  Circuitry,
  Compass,
  CurrencyCircleDollar,
  GlobeSimple,
  Lightning,
  MapTrifold,
  Plugs,
  ShieldCheck,
  Sparkle,
  Storefront,
  UsersFour,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Insight = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayProgramme = {
  name: string;
  focus: string;
  insights: string[];
  icon: IconType;
};

type Module = {
  label: string;
  detail: string;
  icon: IconType;
};

type PlaybookStep = {
  title: string;
  detail: string;
  icon: IconType;
};

type RegionalPartner = {
  region: string;
  description: string;
  icon: IconType;
};

const INSIGHTS: Insight[] = [
  {
    title: "Legacy copy honoured",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Singapore - SG remains the foundational statement for the modernised page.",
    icon: Sparkle
  },
  {
    title: "Gateway catalog confirmed",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout stay anchored as the eight mandatory connectors.",
    icon: Plugs
  },
  {
    title: "Module stack orchestrated",
    description:
      "Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation, and multi-lingual system operate as an integrated telemetry plane.",
    icon: Circuitry
  },
  {
    title: "MAS ready governance",
    description:
      "Every workflow references Monetary Authority of Singapore regulations, data residency expectations, and audit-ready documentation.",
    icon: ShieldCheck
  }
];

const GATEWAY_PROGRAMMES: GatewayProgramme[] = [
  {
    name: "PayPal global bridge",
    focus: "Serve Singapore headquarters while maintaining experience parity for APAC, EMEA, and Americas distributors.",
    insights: [
      "Multi currency module reconciles SGD, USD, EUR, and GBP flows with MAS compliant variance alerts.",
      "Ticket system module stores MAS TRM evidence, SOC reports, and incident response details."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay retail canvas",
    focus: "Translate Singapore&apos;s retail excellence into curated distributor journeys and partner storefronts.",
    insights: [
      "Auto responder coordinates omnichannel confirmations in English and Mandarin with embedded logistics updates.",
      "Backup manager snapshots campaign assets before peak travel and shopping seasons."
    ],
    icon: Storefront
  },
  {
    name: "PayU regional mesh",
    focus: "Blend Southeast Asian wallets, cards, and alternative payment methods without compromising compliance.",
    insights: [
      "Emails module circulates MAS notices, PDPA reminders, and risk advisories to finance leadership.",
      "KYC documentation tracks Singpass verifications, business filings, and corporate secretary attestations."
    ],
    icon: ChatsCircle
  },
  {
    name: "Stripe innovation runway",
    focus: "Prototype AI powered concierge, subscription bundles, and rapid experimentation programmes.",
    insights: [
      "Ticket system module orchestrates developer escalations with AI produced replication steps.",
      "Multi-lingual system keeps English, Mandarin, and Malay experiences synchronised across digital surfaces."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net governance lane",
    focus: "Blend US acquiring expectations with Singapore&apos;s regulatory frameworks for cross border growth.",
    insights: [
      "Multi currency module compares US gateway settlements against Singapore based correspondent banks.",
      "KYC documentation vault retains sanction screening, PEP reviews, and yearly attestation packs."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel suite",
    focus: "Tokenise premium events, pop-up experiences, and concierge style activations across the island.",
    insights: [
      "E-wallet module enables instant commissions with role based approvals and maker-checker controls.",
      "Backup manager preserves data pipelines and integrations ahead of major partner launches."
    ],
    icon: Wallet
  },
  {
    name: "Adyen performance tower",
    focus: "Monitor conversion, risk, and cost metrics across APAC, EU, and Americas corridors from one console.",
    insights: [
      "Multi currency module surfaces FX exposure and interchange metrics for CFO reviews.",
      "Emails module distributes PSD2 and scheme updates with delivery analytics for leadership."
    ],
    icon: ChartLineUp
  },
  {
    name: "2Checkout digital runway",
    focus: "Deliver digital kits, AI enablement, and elearning modules to Singapore and regional partners.",
    insights: [
      "E-voucher experiences automate incentive distribution with tax documentation attached.",
      "Multi-lingual system harmonises English, Mandarin, Malay, and Tamil narratives for field enablement."
    ],
    icon: MapTrifold
  }
];

const MODULES: Module[] = [
  {
    label: "Multi currency module",
    detail: "Balances SGD, USD, EUR, GBP, and regional currencies with AI generated variance commentary.",
    icon: CurrencyCircleDollar
  },
  {
    label: "Ticket system module",
    detail: "Routes MAS, PDPA, and platform support requests through SLA backed workflows and executive dashboards.",
    icon: AirTrafficControl
  },
  {
    label: "Auto responder",
    detail: "Delivers multi language notifications instantly across email, SMS, and chatbot channels.",
    icon: Sparkle
  },
  {
    label: "E-voucher",
    detail: "Issues promo credits and loyalty rewards with granular approval trails for finance and compliance.",
    icon: Wallet
  },
  {
    label: "E-wallet",
    detail: "Streams real time commissions, reimbursements, and incentives with liquidity guardrails.",
    icon: Buildings
  },
  {
    label: "Backup manager",
    detail: "Safeguards storefronts, automations, and reporting packs before each launch window.",
    icon: ShieldCheck
  },
  {
    label: "Emails module",
    detail: "Centralises transactional, marketing, and compliance communications with deliverability telemetry.",
    icon: ChatsCircle
  },
  {
    label: "KYC documentation",
    detail: "Tracks identity, corporate filings, and sanction checks with automated renewal alerts.",
    icon: Compass
  },
  {
    label: "Multi-lingual system",
    detail: "Keeps English, Mandarin, Malay, and Tamil experiences aligned across portals and AI assistants.",
    icon: GlobeSimple
  }
];

const PLAYBOOK: PlaybookStep[] = [
  {
    title: "Preserve the WordPress foundations",
    detail:
      "Carry forward the headline, gateway list, and module references so Singapore stakeholders recognise the continuity.",
    icon: Sparkle
  },
  {
    title: "Wire MAS ready controls",
    detail:
      "Embed MAS, PDPA, and cyber hygiene requirements inside workflows, approval matrices, and monitoring dashboards.",
    icon: ShieldCheck
  },
  {
    title: "Activate the eight connectors",
    detail:
      "Move PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout through sandbox, pilot, and production stages with clear success metrics.",
    icon: Plugs
  },
  {
    title: "Accelerate AI insights",
    detail:
      "Deliver weekly executive briefings, anomaly alerts, and liquidity forecasting so leadership stays ahead of market shifts.",
    icon: ChartLineUp
  }
];

const REGIONAL_PARTNERS: RegionalPartner[] = [
  {
    region: "Southeast Asia",
    description:
      "Aligns with Kuala Lumpur, Jakarta, and Bangkok programmes on wallet innovation, regulatory updates, and AI automation.",
    icon: MapTrifold
  },
  {
    region: "North Asia",
    description:
      "Shares conversion insights with Tokyo, Seoul, and Taipei teams to harmonise experimentation cadences.",
    icon: AirTrafficControl
  },
  {
    region: "Europe",
    description:
      "Coordinates PSD2 and GDPR ready practices with Amsterdam, Frankfurt, and London hubs for global distributors.",
    icon: GlobeSimple
  },
  {
    region: "North America",
    description:
      "Connects with San Francisco and New York AI labs to co-develop telemetry and automation frameworks.",
    icon: Circuitry
  },
  {
    region: "Middle East",
    description:
      "Partners with Dubai and Riyadh treasury teams on liquidity buffers, FX resilience, and correspondent banking.",
    icon: Buildings
  },
  {
    region: "Oceania",
    description:
      "Collaborates with Sydney and Auckland leadership on distributed workforce enablement and compliance standards.",
    icon: Compass
  }
];

export const metadata: Metadata = {
  title: "Singapore MLM Payment Gateways | Cloud MLM Software",
  description:
    "Launch Singapore ready MLM payment gateways with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout orchestrated under MAS compliant, AI enabled governance.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/singapore"
  },
  openGraph: {
    title: "Singapore MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Singapore - now elevated with MAS governance, AI telemetry, and global scale execution."
  }
};

type SingaporePageProps = {
  params: { lang: SupportedLocale };
};

export default function SingaporePaymentGatewayPage({ params }: SingaporePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-amber-100 py-20 dark:from-rose-500/20 dark:via-slate-950 dark:to-amber-500/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,63,94,0.3),transparent_60%),radial-gradient(circle_at_80%_15%,rgba(251,191,36,0.25),transparent_55%),radial-gradient(circle_at_40%_80%,rgba(59,130,246,0.2),transparent_60%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/40 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-rose-700 dark:border-white/20 dark:bg-white/10 dark:text-white">
              Singapore - Payment Orchestration
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Singapore MLM payment gateways engineered for global headquarters velocity
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software moves the legacy WordPress storyline into an AI optimised experience designed for MAS
                compliant operations, cross border growth, and executive ready insights.
              </p>
            </div>
            <div className="rounded-3xl border border-rose-500/30 bg-white/85 p-6 shadow-sm backdrop-blur dark:border-white/15 dark:bg-white/10">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-700 dark:text-white/70">
                Legacy anchor
              </p>
              <p className="mt-3 text-base text-foreground dark:text-white">
                Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Singapore - SG
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Connect with Singapore leadership
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-rose-500/40 text-rose-800 hover:bg-rose-100 dark:border-white/30 dark:text-white"
              >
                <Link href={demoHref}>
                  Preview the AI powered demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {INSIGHTS.map((insight) => {
              const Icon = insight.icon;
              return (
                <article
                  key={insight.title}
                  className="group relative overflow-hidden rounded-3xl border border-rose-500/25 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/15 dark:bg-white/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/15 via-amber-500/15 to-sky-500/15 opacity-0 transition duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground dark:text-white">{insight.title}</h2>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{insight.description}</p>
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
            Gateway programmes calibrated for Singapore scale and compliance
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The eight connectors from the WordPress export now include concrete actions for product, finance, and
            compliance leaders across the island.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {GATEWAY_PROGRAMMES.map((programme) => {
            const Icon = programme.icon;
            return (
              <article
                key={programme.name}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border/60 bg-background/85 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rose-500/10 via-amber-500/10 to-sky-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground dark:text-white">{programme.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{programme.focus}</p>
                  </div>
                </div>
                <ul className="relative space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {programme.insights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-rose-500 dark:bg-white" aria-hidden />
                      <span>{item}</span>
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
          <div className="grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
                Module stack fused for Singapore headquarters
              </h2>
              <p className="text-sm text-muted-foreground dark:text-white/70">
                The navigation modules from the WordPress page now operate as a telemetry rich platform covering treasury,
                compliance, automation, and localisation.
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link href={pricingHref}>
                  Review Singapore pricing frameworks
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {MODULES.map((module) => {
                const Icon = module.icon;
                return (
                  <article
                    key={module.label}
                    className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/85 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="text-base font-semibold text-foreground dark:text-white">{module.label}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{module.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Playbook for MAS ready execution
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground dark:text-white/70">
            Four disciplined movements modernise the WordPress narrative while meeting Singapore leadership expectations.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PLAYBOOK.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground dark:text-white/60">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{step.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-rose-900 to-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(244,63,94,0.35),transparent_60%),radial-gradient(circle_at_80%_15%,rgba(251,191,36,0.2),transparent_55%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Payment gateways for MLM Software by country or region
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-white/75">
              Singapore collaborates with partner regions to maintain resilient, compliant, and insight rich payment
              operations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REGIONAL_PARTNERS.map((partner) => {
              const Icon = partner.icon;
              return (
                <article key={partner.region} className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/5 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{partner.region}</h3>
                  </div>
                  <p className="text-sm text-white/75">{partner.description}</p>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-rose-900 hover:bg-rose-100">
              <Link href={contactHref}>
                Talk to a Singapore strategist
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
