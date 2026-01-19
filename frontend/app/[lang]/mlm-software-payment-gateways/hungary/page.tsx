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
  ChatsCircle,
  ClipboardText,
  Compass,
  CreditCard,
  CurrencyCircleDollar,
  EnvelopeSimple,
  Gauge,
  GlobeHemisphereEast,
  Lightning,
  MapTrifold,
  Megaphone,
  Plugs,
  RocketLaunch,
  ShieldCheck,
  SquaresFour,
  Stack,
  TrendUp,
  UsersThree,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Insight = {
  eyebrow: string;
  heading: string;
  copy: string;
  icon: IconType;
};

type GatewayPath = {
  name: string;
  promise: string;
  details: string[];
  icon: IconType;
};

type ModuleRow = {
  title: string;
  benefit: string;
  icon: IconType;
};

type TimelineStage = {
  label: string;
  title: string;
  summary: string;
  icon: IconType;
};

const INSIGHTS: Insight[] = [
  {
    eyebrow: "Budapest fintech momentum",
    heading: "Digital-first consumers across Budapest, Debrecen, and Szeged expect instant payments and mobile stewardship.",
    copy:
      "Cloud MLM Software connects domestic instant payment schemes with AI-enabled onboarding so Hungarian distributors can activate programmes without friction.",
    icon: Gauge
  },
  {
    eyebrow: "Regulatory alignment",
    heading: "Hungarian National Bank and EU PSD2 guidelines shape every payout, audit trail, and FX decision.",
    copy:
      "Ticketing, backup, and documentation modules preserve AML, e-invoicing, and VAT evidence for when auditors request storytelling detail.",
    icon: ShieldCheck
  },
  {
    eyebrow: "Gateway roster",
    heading: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout fuel Hungary’s hybrid distributors.",
    copy:
      "We keep the WordPress heritage intact while layering modern telemetry so leaders see gateway health in one pane of glass.",
    icon: SquaresFour
  }
];

const GATEWAYS: GatewayPath[] = [
  {
    name: "PayPal diaspora corridor",
    promise: "Unite Budapest headquarters with Hungarian communities in London, Berlin, and Chicago.",
    details: [
      "Multi currency module reconciles HUF, EUR, GBP, and USD balances with CFO-level variance insight.",
      "KYC documentation vault stores remittance attestations, proof-of-address, and AML screenings."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay retail trust",
    promise: "Blend ecommerce checkout quality with wellness kit fulfilment across Hungary’s logistics network.",
    details: [
      "Ticket system module routes Magyar Posta and courier escalations with SLA evidence.",
      "Auto responder issues bilingual (Hungarian/English) delivery updates and loyalty prompts."
    ],
    icon: Megaphone
  },
  {
    name: "PayU Central Europe link",
    promise: "Connect card and alternative payments across Hungary, Poland, Romania, and Czechia.",
    details: [
      "Multi currency analytics measure interchange and approval rates by payment method.",
      "Backup manager preserves settlement files, dispute narratives, and PSP correspondence."
    ],
    icon: TrendUp
  },
  {
    name: "Stripe experimentation track",
    promise: "Prototype subscription, AI concierge, and partner automation flows without losing compliance clarity.",
    details: [
      "E-wallet module pushes instant commissions once webhooks confirm net settlement.",
      "Emails module circulates sandbox updates, finance digests, and tax notices to leadership."
    ],
    icon: CreditCard
  },
  {
    name: "Authorize.Net governance lane",
    promise: "Support corporates requiring North American gateway familiarity alongside Hungarian oversight.",
    details: [
      "Ticket system captures underwriting packages, contract approvals, and chargeback outcomes.",
      "Backup manager keeps SLA, PCI attestations, and CFO sign-offs audit-ready."
    ],
    icon: Bank
  },
  {
    name: "Braintree omnichannel core",
    promise: "Synchronise ecommerce, field events, and retail pop-ups with tokenised payments.",
    details: [
      "E-wallet module links Braintree customer vaults to commission profiles in real time.",
      "Multi-lingual system aligns Hungarian and English knowledge bases for service teams."
    ],
    icon: Plugs
  },
  {
    name: "Adyen executive vantage",
    promise: "Provide global acquiring oversight for EU, US, and APAC growth from one Hungarian command centre.",
    details: [
      "Multi currency forecasts highlight FX exposure, fees, and approval rates for board decks.",
      "KYC documentation stores enhanced due diligence evidence and regulator rapport."
    ],
    icon: GlobeHemisphereEast
  },
  {
    name: "2Checkout digital reach",
    promise: "Launch digital kits, learning hubs, and AI enablement journeys for remote Hungarian teams.",
    details: [
      "E-voucher module distributes limited access passes tied to product reveals and webinars.",
      "Auto responder nurtures onboarding cohorts with time-boxed prompts and escalation paths."
    ],
    icon: RocketLaunch
  }
];

const MODULES: ModuleRow[] = [
  {
    title: "Multi currency module",
    benefit: "Converts HUF, EUR, GBP, and USD flows with tolerance alerts and financial storytelling dashboards.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    benefit: "Routes PSP, logistics, and compliance conversations with SLA tracking and audit-ready transcripts.",
    icon: ChatsCircle
  },
  {
    title: "Auto responder",
    benefit: "Publishes Hungarian and English nudges across email, SMS, and AI chat assistants.",
    icon: Megaphone
  },
  {
    title: "E-voucher engine",
    benefit: "Releases festival-themed promotions, referral bonuses, and incentive codes with redemption metrics.",
    icon: Stack
  },
  {
    title: "E-wallet",
    benefit: "Streams instant commissions with maker-checker governance for finance leaders.",
    icon: Wallet
  },
  {
    title: "Backup manager",
    benefit: "Secures settlement files, audit artefacts, and tax documentation for continuity.",
    icon: ShieldCheck
  },
  {
    title: "Emails module",
    benefit: "Centralises compliance bulletins, campaign storytelling, and AI-generated digests.",
    icon: EnvelopeSimple
  },
  {
    title: "KYC documentation",
    benefit: "Manages ID proofs, company registrations, and AML risk scoring with expiry alerts.",
    icon: ClipboardText
  },
  {
    title: "Multi-lingual system",
    benefit: "Keeps Hungarian and English portals, bots, and microsites aligned for every audience.",
    icon: UsersThree
  }
];

const TIMELINE: TimelineStage[] = [
  {
    label: "Stage 01",
    title: "Restore the WordPress promise",
    summary:
      "We retain the headline—Ways to accept payments from MLM Software in People’s Democratic Republic of Hungary—while reshaping it for 2025 programmes.",
    icon: Compass
  },
  {
    label: "Stage 02",
    title: "Wire compliance choreography",
    summary:
      "Ticketing, backup, and documentation modules ensure Hungarian National Bank, PSD2, and tax requirements travel together.",
    icon: ShieldCheck
  },
  {
    label: "Stage 03",
    title: "Activate the gateway roster",
    summary:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout pass through sandbox, certification, and distributor enablement loops.",
    icon: Lightning
  },
  {
    label: "Stage 04",
    title: "Deliver AI-first oversight",
    summary:
      "Dashboards, summaries, and alerts keep executives, finance, and field promoters synced to real-time performance.",
    icon: MapTrifold
  }
];

export const metadata: Metadata = {
  title: "Hungary MLM Payment Gateways | Cloud MLM Software",
  description:
    "Coordinate PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for Hungary with AI-driven compliance and field-ready automation.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/hungary"
  },
  openGraph: {
    title: "Hungary MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Hungary—reimagined with Cloud MLM Software’s AI telemetry and regulatory orchestration."
  }
};

type HungaryPageProps = {
  params: { lang: SupportedLocale };
};

export default function HungaryPaymentGatewayPage({ params }: HungaryPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-rose-50 py-20 dark:from-emerald-900/30 dark:via-slate-950 dark:to-rose-900/30">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/3 h-64 w-64 rounded-full bg-emerald-200/60 blur-3xl dark:bg-emerald-900/40" />
          <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-rose-200/60 blur-3xl dark:bg-rose-900/40" />
        </div>
        <div className="container relative grid gap-12 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              Ways to accept payments · Hungary (HU)
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Hungary – HU
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                The WordPress export listed the eight gateway anchors and the full Cloud MLM Software module suite. We convert
                that static copy into a Hungarian programme that balances regulation, diaspora volume, and AI-first field
                enablement.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Speak with a Hungary strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-emerald-400 text-emerald-900 hover:bg-emerald-100 dark:border-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  Preview the Hungary demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            {INSIGHTS.map((insight) => {
              const Icon = insight.icon;
              return (
                <article
                  key={insight.eyebrow}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-200/70 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground dark:text-white/60">
                        {insight.eyebrow}
                      </p>
                      <h2 className="text-base font-semibold text-foreground dark:text-white">{insight.heading}</h2>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{insight.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-5 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Gateway enablement blueprint for Hungary
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Each connector from the WordPress article now carries modern guidance for automation, compliance, and distributor
            enablement across Hungary’s digital and physical channels.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {GATEWAYS.map((gateway) => {
            const Icon = gateway.icon;
            return (
              <article
                key={gateway.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-800 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{gateway.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.promise}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {gateway.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 dark:bg-white" aria-hidden />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/60 py-20 dark:bg-slate-950/70">
        <div className="container space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Module stack used in the original navigation
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation,
              and multi-lingual modules now operate as a single Hungarian control plane.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{module.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{module.benefit}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Programme timeline anchored in Hungary
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground dark:text-white/70">
            Four stages ensure the Hungarian launch honours the original copy while embracing AI, compliance, and gateway
            excellence.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TIMELINE.map((stage) => {
            const Icon = stage.icon;
            return (
              <article
                key={stage.label}
                className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-800 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                    {stage.label}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{stage.title}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{stage.summary}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-200 via-white to-rose-200 py-16 dark:from-emerald-900/40 dark:via-slate-950 dark:to-rose-900/40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 -translate-x-1/2 rounded-full bg-emerald-200/70 blur-3xl dark:bg-emerald-900/40" />
          <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 rounded-full bg-rose-200/70 blur-3xl dark:bg-rose-900/40" />
        </div>
        <div className="container relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-900 dark:bg-white/10 dark:text-white/70">
              Next steps for Hungary
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Ready to orchestrate Hungary’s MLM payment gateways with Cloud MLM Software?
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground dark:text-white/70">
              Let’s combine gateway readiness, compliance choreography, and AI-enabled enablement so your Hungarian
              programme stands out as a regional leader.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href={pricingHref}>
                Review investment options
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-emerald-400 text-emerald-900 hover:bg-emerald-100 dark:border-white/20 dark:text-white"
            >
              <Link href={gatewayHubHref}>
                Explore global gateways
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
