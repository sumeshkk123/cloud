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
  ChatsCircle,
  Circuitry,
  CreditCard,
  CurrencyCircleDollar,
  EnvelopeSimple,
  Lightning,
  MapTrifold,
  Megaphone,
  Plugs,
  RocketLaunch,
  ShieldCheck,
  SlidersHorizontal,
  Sparkle,
  SquaresFour,
  TrendUp,
  UsersThree,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type MomentumMetric = {
  title: string;
  figure: string;
  narrative: string;
  icon: IconType;
};

type GatewayPlay = {
  name: string;
  angle: string;
  highlights: string[];
  icon: IconType;
};

type ModuleCard = {
  title: string;
  description: string;
  icon: IconType;
};

type JourneyStage = {
  step: string;
  heading: string;
  copy: string;
  icon: IconType;
};

const MOMENTUM: MomentumMetric[] = [
  {
    title: "Financial district velocity",
    figure: "24/7 cross-border settlement",
    narrative:
      "Hong Kong’s distributed ledger pilots and payment sandboxes keep regional inflows live, letting Cloud MLM Software monitor conversions in real time.",
    icon: Buildings
  },
  {
    title: "Digital wallet adoption",
    figure: "93% consumer e-payment usage",
    narrative:
      "Octopus, FPS, and card wallets converge into a unified ledger so distributors never worry about reconciliation drag.",
    icon: Wallet
  },
  {
    title: "Regulatory precision",
    figure: "HKMA & SFC orchestration",
    narrative:
      "Licensing requirements, VASP rules, and e-invoicing proofs sit in one compliance locker—ready for leadership reviews or AI copilots.",
    icon: ShieldCheck
  }
];

const GATEWAY_PLAYS: GatewayPlay[] = [
  {
    name: "PayPal international runway",
    angle: "Diaspora programmes across Shenzhen, Singapore, London, and Vancouver trust PayPal as their first tender.",
    highlights: [
      "Multi currency module converts USD, CAD, and HKD in a CFO-friendly variance dashboard.",
      "KYC documentation vault keeps remittance declarations, proof-of-residence, and AML checks auditable."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay marketplace fusion",
    angle: "Ecommerce style checkout meets premium wellness storefronts across Kowloon and New Territories.",
    highlights: [
      "Ticket system module synchronises fulfilment updates between hub warehouses and Amazon support cases.",
      "Auto responder issues bilingual delivery alerts tuned to the territory’s high-rise logistics windows."
    ],
    icon: Sparkle
  },
  {
    name: "PayU Greater Bay bridge",
    angle: "Link Hong Kong acquirers with Southeast Asia and India alternative payment rails.",
    highlights: [
      "Multi currency forecasts track FX exposure when routing HKD, CNY, and INR volumes.",
      "Backup manager archives settlement files, dispute evidence, and PSP communications."
    ],
    icon: Circuitry
  },
  {
    name: "Stripe innovation studio",
    angle: "Prototype subscriptions, AI concierge, and automation bots across Hong Kong’s startup ecosystem.",
    highlights: [
      "E-wallet module streams instant commissions once Stripe webhooks confirm settlement.",
      "Emails module circulates release notes, compliance flag summaries, and sandbox telemetry."
    ],
    icon: CreditCard
  },
  {
    name: "Authorize.Net heritage control",
    angle: "Blend US corporate governance with Hong Kong distributor trails.",
    highlights: [
      "Ticket system captures underwriting documents, chargeback narratives, and CFO approvals.",
      "Backup manager safeguards policies, gateway credentials, and quarterly compliance evidence."
    ],
    icon: Bank
  },
  {
    name: "Braintree omnichannel hub",
    angle: "Tokenise kiosk, pop-up, and ecommerce payments for mobile field teams.",
    highlights: [
      "E-wallet module synchronises Braintree customer vaults with commission payouts and credits.",
      "Multi-lingual system keeps Cantonese and English support playbooks aligned."
    ],
    icon: Plugs
  },
  {
    name: "Adyen boardroom vantage",
    angle: "Aggregate EU, US, and APAC acquiring in one AI-assisted control tower.",
    highlights: [
      "Multi currency analytics reveal interchange, FX, and approval rates for executive decks.",
      "KYC documentation stores enhanced due diligence proofs beside HKMA attestation logs."
    ],
    icon: TrendUp
  },
  {
    name: "2Checkout digital expansion",
    angle: "Deliver virtual kits, learning portals, and AI enablement to global partners.",
    highlights: [
      "E-voucher engine releases limited access bundles for product previews and virtual summits.",
      "Auto responder nurtures onboarding cohorts with timezone-sensitive milestones."
    ],
    icon: RocketLaunch
  }
];

const MODULES: ModuleCard[] = [
  {
    title: "Multi currency module",
    description: "Balances HKD, USD, CNY, SGD, and GBP flows with risk thresholds and CFO digests.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    description: "Routes PSP underwriting, logistics escalations, and compliance audits with SLA timers.",
    icon: ChatsCircle
  },
  {
    title: "Auto responder",
    description: "Publishes Cantonese and English nudges across email, SMS, WhatsApp, and AI chat surfaces.",
    icon: Megaphone
  },
  {
    title: "E-voucher engine",
    description: "Manages referral incentives, festival campaigns, and exclusive product drops with live telemetry.",
    icon: Sparkle
  },
  {
    title: "E-wallet",
    description: "Streams instant commissions with maker-checker controls aligned to finance guardrails.",
    icon: Wallet
  },
  {
    title: "Backup manager",
    description: "Preserves finance statements, settlement files, and regulator correspondence for continuity.",
    icon: ShieldCheck
  },
  {
    title: "Emails module",
    description: "Centralises operational broadcasts, compliance notifications, and campaign storytelling.",
    icon: EnvelopeSimple
  },
  {
    title: "KYC documentation",
    description: "Stores identity proofs, business registration, and AML dossiers with expiry alerts.",
    icon: SlidersHorizontal
  },
  {
    title: "Multi-lingual system",
    description: "Keeps Cantonese and English portals, bots, and microsites synchronised.",
    icon: UsersThree
  }
];

const JOURNEY: JourneyStage[] = [
  {
    step: "Phase 01",
    heading: "Translate the legacy promise",
    copy:
      "We honour the WordPress headline—Ways to accept payments from MLM Software in People’s Democratic Republic of Hong Kong—while modernising it for AI-led visibility.",
    icon: SquaresFour
  },
  {
    step: "Phase 02",
    heading: "Curate compliance artefacts",
    copy:
      "CNBS-style governance gives way to HKMA precision with ticketing, backup, and documentation modules orchestrating every check.",
    icon: ShieldCheck
  },
  {
    step: "Phase 03",
    heading: "Activate the gateway squad",
    copy:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout roll out through sandbox, certification, and enablement cadences.",
    icon: Lightning
  },
  {
    step: "Phase 04",
    heading: "Deliver AI-first telemetry",
    copy:
      "Dashboards, AI summaries, and alerting sequences equip leaders across finance, product, and field operations with instant insight.",
    icon: Circuitry
  }
];

export const metadata: Metadata = {
  title: "Hong Kong MLM Payment Gateways | Cloud MLM Software",
  description:
    "Coordinate PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for Hong Kong with AI-ready telemetry and compliance orchestration.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/hong-kong"
  },
  openGraph: {
    title: "Hong Kong MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Hong Kong—transformed into a skyline-speed programme with Cloud MLM Software."
  }
};

type HongKongPageProps = {
  params: { lang: SupportedLocale };
};

export default function HongKongPaymentGatewayPage({ params }: HongKongPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-900/40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-12 h-64 w-64 rounded-full bg-blue-300/40 blur-3xl dark:bg-blue-900/40" />
          <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-fuchsia-200/40 blur-3xl dark:bg-fuchsia-900/40" />
        </div>
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/60 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-900 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              Ways to accept payments · Hong Kong (HK)
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Hong Kong – HK
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software keeps one foot in the WordPress legacy and one in Hong Kong’s real-time economy. We
                orchestrate gateway activations, regulatory evidence, and AI telemetry so field teams, finance, and leadership
                move at skyline speed.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Speak with a Hong Kong strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-blue-300 text-blue-900 hover:bg-blue-100 dark:border-white/20 dark:text-white"
              >
                <Link href={demoHref}>
                  Preview the Hong Kong demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {MOMENTUM.map((moment) => {
              const Icon = moment.icon;
              return (
                <article
                  key={moment.title}
                  className="flex h-full flex-col justify-between rounded-3xl border border-blue-200/70 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-200/50 text-blue-900 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground dark:text-white/60">
                        {moment.title}
                      </p>
                      <p className="text-lg font-semibold text-foreground dark:text-white">{moment.figure}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground dark:text-white/70">{moment.narrative}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr]">
          <article className="relative overflow-hidden rounded-3xl border border-indigo-200/70 bg-white/80 p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="absolute -top-24 right-0 h-48 w-48 rounded-full bg-indigo-200/60 blur-3xl dark:bg-indigo-900/40" />
            <div className="relative space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-700 dark:bg-white/10 dark:text-white/70">
                Central district perspective
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
                A skyline-ready operating model that keeps gateways, compliance, and AI in sync
              </h2>
              <p className="text-sm text-muted-foreground dark:text-white/70">
                The WordPress export referenced the eight primary gateways and the full Cloud MLM module stack. We translate
                that legacy into living dashboards, enablement tracks, and compliance guardrails purpose-built for Hong Kong’s
                fast-moving market.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/60 px-3 py-1 text-xs font-medium text-indigo-800 dark:border-white/20 dark:text-white/70">
                  Gateway readiness checks
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/60 px-3 py-1 text-xs font-medium text-indigo-800 dark:border-white/20 dark:text-white/70">
                  AI compliance concierge
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/60 px-3 py-1 text-xs font-medium text-indigo-800 dark:border-white/20 dark:text-white/70">
                  Distributor enablement loops
                </span>
              </div>
            </div>
          </article>
          <div className="grid gap-4 sm:grid-cols-2">
            {GATEWAY_PLAYS.map((gateway) => {
              const Icon = gateway.icon;
              return (
                <article
                  key={gateway.name}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-blue-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-200/50 text-blue-900 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-foreground dark:text-white">{gateway.name}</h3>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.angle}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {gateway.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-indigo-400 dark:bg-white" aria-hidden />
                        <span>{highlight}</span>
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
        <div className="container space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Module stack lifted straight from the legacy navigation
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticket system, auto responder, e-voucher, e-wallet, backup manager, emails, KYC documentation,
              and multi-lingual capabilities now operate as one telemetry-rich platform.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-indigo-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-700 dark:bg-white/10 dark:text-white">
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

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Hong Kong enablement journey
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground dark:text-white/70">
            Each stage keeps the original promise intact while layering automation, AI, and governance for Hong Kong’s leaders,
            promoters, and finance teams.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {JOURNEY.map((stage) => {
            const Icon = stage.icon;
            return (
              <article
                key={stage.step}
                className="relative flex h-full flex-col gap-4 rounded-3xl border border-blue-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-200/50 text-blue-900 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                    {stage.step}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{stage.heading}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{stage.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-blue-200 via-white to-indigo-200 py-16 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-900/40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 -translate-x-1/2 rounded-full bg-blue-200/70 blur-3xl dark:bg-blue-900/40" />
          <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 rounded-full bg-fuchsia-200/70 blur-3xl dark:bg-fuchsia-900/40" />
        </div>
        <div className="container relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-900 dark:bg-white/10 dark:text-white/70">
              Next steps for Hong Kong
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Ready to orchestrate Hong Kong MLM payment gateways with Cloud MLM Software?
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground dark:text-white/70">
              We align the Hong Kong sandbox, gateway partners, and AI-driven compliance so your programme leads the region in
              both trust and velocity.
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
              className="gap-2 border-blue-300 text-blue-900 hover:bg-blue-100 dark:border-white/20 dark:text-white"
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
