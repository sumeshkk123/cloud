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
  ArrowsLeftRight,
  Buildings,
  ChatsCircle,
  CreditCard,
  CurrencyCircleDollar,
  EnvelopeSimple,
  Gauge,
  GlobeHemisphereWest,
  IdentificationCard,
  Lightning,
  MagnifyingGlass,
  MapTrifold,
  Megaphone,
  Plugs,
  QrCode,
  RocketLaunch,
  SealCheck,
  ShieldCheck,
  ShoppingBag,
  ShoppingCartSimple,
  Sparkle,
  TrendUp,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type MarketSignal = {
  label: string;
  stat: string;
  detail: string;
  icon: IconType;
};

type OpportunityVector = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type GatewayTrack = {
  name: string;
  narrative: string;
  commitments: string[];
  icon: IconType;
};

type CompliancePhase = {
  phase: string;
  title: string;
  copy: string;
  icon: IconType;
};

type ModuleCapability = {
  title: string;
  description: string;
  icon: IconType;
};

const MARKET_SIGNALS: MarketSignal[] = [
  {
    label: "Remittance-fuelled commerce",
    stat: "67% cross-border share",
    detail:
      "Diaspora-led payments from Miami, Houston, and Madrid now fund most distributor activations; we surface them inside Cloud MLM dashboards in real time.",
    icon: ArrowsLeftRight
  },
  {
    label: "Card & QR acceleration",
    stat: "38% YoY digital growth",
    detail:
      "Banco Central de Honduras initiatives accelerate card-on-file, QR, and ACH rails—ideal for subscription-ready wellness and retail packs.",
    icon: TrendUp
  },
  {
    label: "Regulatory runway",
    stat: "CNBS circular 024/2024",
    detail:
      "Compliance pulses keep AML, know-your-distributor, and e-invoicing evidence aligned to Comision Nacional de Bancos y Seguros expectations.",
    icon: ShieldCheck
  }
];

const OPPORTUNITY_VECTORS: OpportunityVector[] = [
  {
    title: "San Pedro Sula enterprise corridors",
    summary: "Manufacturing-backed leaders combine B2B procurement with direct selling fulfilment.",
    bullets: [
      "Ticket system module orchestrates plant-to-field escalations with SLA-grade visibility.",
      "Backup manager snapshots fiscal evidence for customs, bonded warehouses, and corporate audits."
    ],
    icon: Buildings
  },
  {
    title: "Tegucigalpa wellness communities",
    summary: "AI-personalised onboarding wraps nutrition, beauty, and home care experiences around local events.",
    bullets: [
      "Auto responder sequences bilingual nudges across WhatsApp, SMS, and email with seasonal storytelling.",
      "E-voucher flows activate referral bundles and limited drops powered by Sparkle automation."
    ],
    icon: ShoppingBag
  },
  {
    title: "Diaspora growth loops",
    summary: "Cross-border promoters in the US, Spain, and Costa Rica finance Honduran expansion through trusted rails.",
    bullets: [
      "Multi currency module reconciles USD, EUR, and HNL balances with CFO-ready variance alerts.",
      "Multi-lingual system keeps English and Spanish knowledge bases in lockstep for AI copilots."
    ],
    icon: GlobeHemisphereWest
  }
];

const GATEWAY_TRACKS: GatewayTrack[] = [
  {
    name: "PayPal diaspora bridge",
    narrative: "Turn remittance trust into automated enrollment flows for Honduran field leaders.",
    commitments: [
      "Multi currency module posts USD-to-HNL conversions with treasury-grade approvals.",
      "KYC documentation vault captures OFAC screening notes and residency attestations."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay retail affinity",
    narrative: "Blend ecommerce-grade checkout with physical kit distribution in Tegucigalpa and San Pedro Sula.",
    commitments: [
      "Ticket system module routes fulfilment escalations between local warehouses and Amazon support windows.",
      "Auto responder shares order status, pickup options, and loyalty reminders in bilingual sequences."
    ],
    icon: ShoppingCartSimple
  },
  {
    name: "PayU LatAm coverage",
    narrative: "Connect local acquiring with regional alternative payment methods for Honduras and neighbouring markets.",
    commitments: [
      "Multi currency analytics surface success rates for debit, ACH, and cash partners across HN, GT, and SV.",
      "Backup manager logs PSP reconciliations, settlement files, and dispute artefacts for auditors."
    ],
    icon: QrCode
  },
  {
    name: "Stripe developer velocity",
    narrative: "Prototype subscription bundles and AI concierge experiences without sacrificing compliance.",
    commitments: [
      "E-wallet module pushes real-time commission splits once Stripe webhooks confirm settlement.",
      "Emails module circulates reconciliation digests, release notes, and tax confirmations to leadership."
    ],
    icon: CreditCard
  },
  {
    name: "Authorize.Net corporate guardrails",
    narrative: "Support enterprise accounts that demand traditional North American acquiring posture.",
    commitments: [
      "Ticket system module records underwriting evidence, chargeback narratives, and executive approval trails.",
      "Backup manager secures signed contracts, gateway credentials, and policy updates for continuity."
    ],
    icon: SealCheck
  },
  {
    name: "Braintree omnichannel core",
    narrative: "Unify POS, ecommerce, and field experiences with tokenised payments.",
    commitments: [
      "E-wallet module syncs Braintree customer vault data with distributor payout automation.",
      "Multi-lingual system keeps support workflows aligned for English and Spanish speaking promoters."
    ],
    icon: Plugs
  },
  {
    name: "Adyen global vantage point",
    narrative: "Aggregate EU, US, and APAC acquiring into one governance framework.",
    commitments: [
      "Multi currency forecasts compare interchange costs and FX exposure for CFO-ready decks.",
      "KYC documentation stores Adyen enhanced due diligence artefacts beside Honduran regulator packages."
    ],
    icon: GlobeHemisphereWest
  },
  {
    name: "2Checkout digital scale",
    narrative: "Monetise digital kits, e-learning, and AI enablement for distant teams.",
    commitments: [
      "E-voucher module releases limited access codes and promo bundles for virtual launches.",
      "Auto responder nurtures onboarding cohorts with time-zoned sequences and upsell prompts."
    ],
    icon: RocketLaunch
  }
];

const COMPLIANCE_PHASES: CompliancePhase[] = [
  {
    phase: "01",
    title: "Decode the legacy brief",
    copy:
      "We retain the WordPress promise—Ways to accept payments from MLM Software in People's Democratic Republic of Honduras—while modernising the storyline for 2025 growth.",
    icon: MagnifyingGlass
  },
  {
    phase: "02",
    title: "Localise risk choreography",
    copy:
      "Ticket system, KYC documentation, and backup manager align CNBS checks, PEP screening, and tax invoices into a single evidence locker.",
    icon: MapTrifold
  },
  {
    phase: "03",
    title: "Activate the gateway squad",
    copy:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout run through sandbox, certification, and distributor enablement playlists.",
    icon: Lightning
  },
  {
    phase: "04",
    title: "Optimise AI telemetry",
    copy: "Market, finance, and operations leaders receive AI summaries, variance dashboards, and alerting tuned for Honduran reality.",
    icon: Gauge
  }
];

const MODULE_CAPABILITIES: ModuleCapability[] = [
  {
    title: "Multi currency module",
    description: "Converts USD, EUR, and HNL inflows with automated tolerance alerts and board-grade reporting.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    description: "Routes gateway underwriting, logistics, and compliance requests with SLA timers and audit trails.",
    icon: ChatsCircle
  },
  {
    title: "Auto responder",
    description: "Delivers Spanish and English nurture journeys across email, SMS, and WhatsApp in seconds.",
    icon: Megaphone
  },
  {
    title: "E-voucher",
    description: "Launches promo codes, referral bundles, and incentive drops with redemption analytics.",
    icon: Sparkle
  },
  {
    title: "E-wallet",
    description: "Streams instant commissions while preserving maker-checker segregation for finance leaders.",
    icon: Wallet
  },
  {
    title: "Backup manager",
    description: "Captures financial statements, PSP settlements, and signed agreements for continuity and audit.",
    icon: ShieldCheck
  },
  {
    title: "Emails module",
    description: "Centralises operational, compliance, and campaign messaging with deliverability telemetry.",
    icon: EnvelopeSimple
  },
  {
    title: "KYC documentation",
    description: "Stores identification, business licensing, and AML evidence with expiry alerts and automation.",
    icon: IdentificationCard
  },
  {
    title: "Multi-lingual system",
    description: "Keeps Spanish and English portals, AI assistants, and microsites synchronised for every market.",
    icon: GlobeHemisphereWest
  }
];

export const metadata: Metadata = {
  title: "Honduras MLM Payment Gateways | Cloud MLM Software",
  description:
    "Modernise the Honduras MLM payment gateway stack with Cloud MLM Software guidance across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/honduras"
  },
  openGraph: {
    title: "Honduras MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in Honduras—reimagined with AI telemetry, compliance guardrails, and regional growth playbooks."
  }
};

type HondurasPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function HondurasPaymentGatewayPage({ params }: HondurasPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewaysHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-20 dark:from-sky-950 dark:via-slate-950 dark:to-emerald-900/30">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-200 blur-3xl dark:bg-sky-900/40" />
          <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-emerald-200 blur-3xl dark:bg-emerald-900/40" />
        </div>
        <div className="container relative grid gap-12 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-800 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white/80">
              Ways to accept payments · Honduras (HN)
            </span>
            <div className="space-y-6 text-foreground dark:text-white">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Honduras MLM payment gateways engineered for resilient, cross-border growth
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software honours the legacy WordPress copy while transforming it into a Honduras-specific playbook
                that unites gateways, compliance orchestration, and AI insights for every stakeholder.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Speak with a Honduras strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-sky-300 text-sky-800 dark:border-white/20 dark:text-white">
                <Link href={demoHref}>
                  Preview the Honduras demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {MARKET_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article
                  key={signal.label}
                  className="flex h-full flex-col justify-between rounded-3xl border border-sky-200/70 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-200/40 text-sky-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground dark:text-white/60">
                        {signal.label}
                      </p>
                      <p className="text-lg font-semibold text-foreground dark:text-white">{signal.stat}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground dark:text-white/70">{signal.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[0.85fr,1.15fr]">
          <article className="relative overflow-hidden rounded-3xl border border-emerald-200/70 bg-white/80 p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="absolute -top-20 right-2 h-40 w-40 rounded-full bg-emerald-200/60 blur-3xl dark:bg-emerald-900/50" />
            <div className="relative space-y-5">
              <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:bg-white/10 dark:text-white/80">
                Honduras opportunity map
              </span>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
                A modern operating picture for the Honduran payment landscape
              </h2>
              <p className="text-sm text-muted-foreground dark:text-white/70">
                The WordPress export referenced multiple modules and a global gateway list. We reframe it into a market signal
                digest that gives revenue, compliance, and field enablement teams a common playbook.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 px-3 py-1 text-xs font-medium text-emerald-800 dark:border-white/20 dark:text-white/80">
                  Live remittance telemetry
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 px-3 py-1 text-xs font-medium text-emerald-800 dark:border-white/20 dark:text-white/80">
                  AI compliance concierge
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/60 px-3 py-1 text-xs font-medium text-emerald-800 dark:border-white/20 dark:text-white/80">
                  Field enablement analytics
                </span>
              </div>
            </div>
          </article>
          <div className="grid gap-4 sm:grid-cols-2">
            {OPPORTUNITY_VECTORS.map((vector, index) => {
              const Icon = vector.icon;
              const spanClassName = index === 0 ? "sm:col-span-2" : "";

              return (
                <article
                  key={vector.title}
                  className={`relative flex h-full flex-col gap-4 rounded-3xl border border-emerald-200/70 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5 ${spanClassName}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-foreground dark:text-white">{vector.title}</h3>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{vector.summary}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {vector.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-white" aria-hidden />
                        <span>{bullet}</span>
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
              Gateway fit matrix reimagined for Honduras
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              The eight gateways named in the WordPress article now carry precise guidance for automation, compliance,
              finance, and field enablement teams operating across Honduras and the wider region.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {GATEWAY_TRACKS.map((gateway) => {
              const Icon = gateway.icon;
              return (
                <article
                  key={gateway.name}
                  className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-sky-200/60 bg-white/80 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                    <div className="absolute inset-x-6 top-0 h-24 rounded-b-[48px] bg-sky-200/40 blur-2xl dark:bg-sky-900/40" />
                  </div>
                  <div className="relative flex items-start gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-200/40 text-sky-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-foreground dark:text-white">{gateway.name}</h3>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{gateway.narrative}</p>
                    </div>
                  </div>
                  <ul className="relative space-y-3 text-sm text-muted-foreground dark:text-white/70">
                    {gateway.commitments.map((commitment) => (
                      <li key={commitment} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-sky-400 dark:bg-white" aria-hidden />
                        <span>{commitment}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Compliance and insight timeline
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground dark:text-white/70">
            Every stage carries forward the legacy headline while equipping Honduran teams with measurable, auditable
            outcomes that prove Cloud MLM Software leadership.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {COMPLIANCE_PHASES.map((phase) => {
            const Icon = phase.icon;
            return (
              <article
                key={phase.phase}
                className="relative flex h-full flex-col gap-4 rounded-3xl border border-emerald-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                    Phase {phase.phase}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{phase.title}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{phase.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-sky-200/60 bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-10 shadow-sm dark:border-white/10 dark:from-sky-950 dark:via-slate-950 dark:to-emerald-900/30">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-sky-200 blur-3xl dark:bg-sky-900/40" />
            <div className="absolute -top-16 right-1/4 h-48 w-48 rounded-full bg-emerald-200 blur-3xl dark:bg-emerald-900/40" />
          </div>
          <div className="relative space-y-8">
            <div className="space-y-3 text-center">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
                Modules from the WordPress navigation, orchestrated for Honduras
              </h2>
              <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
                Each capability becomes an ingredient in the Honduras operating model—ready for AI copilots, compliance
                audits, and distributor storytelling.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {MODULE_CAPABILITIES.map((module) => {
                const Icon = module.icon;
                return (
                  <article
                    key={module.title}
                    className="flex h-full flex-col gap-4 rounded-3xl border border-sky-200/60 bg-white/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-200/40 text-sky-800 dark:bg-white/10 dark:text-white">
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
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-sky-200 via-white to-emerald-100 py-16 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-900/40">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 -translate-x-1/2 rounded-full bg-sky-200 blur-3xl dark:bg-sky-900/40" />
          <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 rounded-full bg-emerald-200 blur-3xl dark:bg-emerald-900/40" />
        </div>
        <div className="container relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-800 dark:bg-white/10 dark:text-white/70">
              Next actions
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Ready to orchestrate Honduras payment gateways with Cloud MLM Software?
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground dark:text-white/70">
              Bring the Honduras programme online with strategic workshops, AI-enabled compliance, and gateway activation
              sprints that mirror Cloud MLM Software best practice.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href={pricingHref}>
                Review investment model
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-sky-300 text-sky-800 dark:border-white/20 dark:text-white">
              <Link href={gatewaysHubHref}>
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
