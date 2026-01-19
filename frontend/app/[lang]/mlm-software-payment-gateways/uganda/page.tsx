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
  AnchorSimple,
  ChatsCircle,
  Compass,
  CurrencyCircleDollar,
  GlobeHemisphereWest,
  Lightning,
  MapTrifold,
  Plugs,
  ShieldCheck,
  Sparkle,
  StackSimple,
  UsersThree,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  label: string;
  description: string;
};

type ExecutiveGain = {
  title: string;
  detail: string;
  icon: IconType;
};

type GatewayModule = {
  name: string;
  summary: string;
  points: string[];
  icon: IconType;
};

type ModuleCard = {
  name: string;
  description: string;
  icon: IconType;
};

type TimelineStep = {
  phase: string;
  headline: string;
  description: string;
  icon: IconType;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    label: "Market coverage",
    description: "Built for Kampala HQ, Entebbe operations, and Gulu field leaders."
  },
  {
    label: "Gateway roster",
    description: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain the backbone."
  },
  {
    label: "AI telemetry",
    description: "Compliance history, FX exposure, and distributor sentiment surface in one executive cockpit."
  }
];

const EXECUTIVE_GAINS: ExecutiveGain[] = [
  {
    title: "Legacy language intact",
    detail:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Uganda - UG remains the anchor phrase for stakeholders and SEO.",
    icon: StackSimple
  },
  {
    title: "Regulatory readiness",
    detail:
      "Bank of Uganda, FIA guidelines, and AML routines are embedded through maker-checker approvals and audit trails.",
    icon: ShieldCheck
  },
  {
    title: "Diaspora synchronisation",
    detail:
      "Leaders across London, Dubai, and Minneapolis review settlements, FX exposure, and growth telemetry alongside Kampala executives.",
    icon: GlobeHemisphereWest
  }
];

const GATEWAY_MODULES: GatewayModule[] = [
  {
    name: "PayPal diaspora corridor",
    summary: "Connect Ugandan leadership with global communities in Europe, North America, and the Gulf.",
    points: [
      "Multi currency module balances UGX, USD, GBP, and AED with treasury variance dashboards.",
      "Ticket system module orchestrates AML, refund, and dispute escalations with AI-generated dossiers."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay commerce lane",
    summary: "Blend ecommerce-grade experience with localised onboarding journeys.",
    points: [
      "Auto responder delivers bilingual confirmations, webinar invites, and compliance prompts.",
      "Backup manager snapshots promotional funnels before seasonal campaigns and diaspora events."
    ],
    icon: Sparkle
  },
  {
    name: "PayU East Africa bridge",
    summary: "Unlock regional corridors across Kenya, Tanzania, and Rwanda without surrendering compliance oversight.",
    points: [
      "Emails module keeps finance, compliance, and operations aligned on PSP notices and settlement timelines.",
      "KYC documentation vault tracks ID, residency, and beneficial ownership artefacts with expiry alerts."
    ],
    icon: MapTrifold
  },
  {
    name: "Stripe experimentation studio",
    summary: "Prototype AI concierge, subscription tiers, and digital experiences with instrumentation.",
    points: [
      "Multi-Lingual system synchronises English, Luganda, and Swahili journeys across web, mobile, and chatbots.",
      "Ticket system creates shared workstreams for engineering, marketing, and compliance sign-off."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net governance lane",
    summary: "Blend North American expectations with Ugandan regulatory narratives for investors.",
    points: [
      "Multi currency module reconciles USD settlements against local banking partners with CFO-ready outputs.",
      "KYC documentation keeps sanction screening, PEP monitoring, and merchant dossiers inspection ready."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel vault",
    summary: "Tokenise field sales, remote enrollments, and wellness programmes without losing visibility.",
    points: [
      "E-wallet module streams instant commissions with maker-checker controls for leadership tiers.",
      "Backup manager preserves offline transactions when connectivity fluctuates between districts."
    ],
    icon: Wallet
  },
  {
    name: "Adyen oversight tower",
    summary: "Monitor conversion, fraud, and settlement pacing across EU and GCC corridors from one dashboard.",
    points: [
      "Multi currency dashboards surface FX exposure, authorisation trends, and scheme metrics for board reviews.",
      "Emails module distributes PSD2, SCA, and scheme updates with read receipts."
    ],
    icon: Compass
  },
  {
    name: "2Checkout digital runway",
    summary: "Launch digital academies, AI enablement, and training with tax-ready narratives.",
    points: [
      "E-voucher workflows automate incentive fulfilment with audit trails for finance and compliance teams.",
      "Multi-Lingual messaging keeps Ugandan communities and diaspora aligned with Kampala headquarters."
    ],
    icon: UsersThree
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    name: "Multi currency module",
    description: "Balances UGX, USD, GBP, AED, and EUR while forecasting treasury exposure for leadership.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    description: "SLA-backed queues for PSP escalations, distributor support, and compliance verifications.",
    icon: ChatsCircle
  },
  {
    name: "Auto responder",
    description: "Delivers multi-language confirmations, reminders, and compliance prompts tuned to Ugandan cadences.",
    icon: Sparkle
  },
  {
    name: "E-Voucher",
    description: "Issues incentive codes for launch events, training cohorts, and loyalty programmes with approvals.",
    icon: Lightning
  },
  {
    name: "E-Wallet",
    description: "Streams commissions and reimbursements with maker-checker thresholds tailored to senior ranks.",
    icon: Wallet
  },
  {
    name: "Backup manager",
    description: "Preserves funnels, payout rules, and automation maps before releases or regulatory checkpoints.",
    icon: AnchorSimple
  },
  {
    name: "Emails",
    description: "Schedules investor updates, compliance notices, and leadership briefings with delivery tracking.",
    icon: Plugs
  },
  {
    name: "KYC documentation",
    description: "Maintains ID, residency, and due diligence records with automated expiry alerts.",
    icon: ShieldCheck
  },
  {
    name: "Multi-Lingual system",
    description: "Aligns English, Luganda, and Swahili messaging across web, mobile, and AI assistants.",
    icon: GlobeHemisphereWest
  }
];

const TIMELINE_STEPS: TimelineStep[] = [
  {
    phase: "Step 01",
    headline: "Heritage capture",
    description:
      "Document WordPress copy, navigation structure, and gateway list to maintain familiarity and SEO equity.",
    icon: StackSimple
  },
  {
    phase: "Step 02",
    headline: "Compliance rehearsal",
    description:
      "Mirror gateway transactions in sandbox environments so finance and compliance leaders validate reconciliation and AML routines.",
    icon: ShieldCheck
  },
  {
    phase: "Step 03",
    headline: "Field enablement",
    description:
      " Deliver AI-guided playbooks, offline aids, and escalation routes for Kampala, Entebbe, and Gulu teams.",
    icon: Sparkle
  },
  {
    phase: "Step 04",
    headline: "Executive telemetry",
    description:
      "Launch dashboards that surface conversion, FX exposure, dispute ratios, and sentiment for board sessions.",
    icon: Lightning
  }
];

export const metadata: Metadata = {
  title: "Uganda MLM Payment Gateways | Cloud MLM Software",
  description:
    "Reimagine Uganda&apos;s MLM payment gateways with AI telemetry, compliance automation, and continuity across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/uganda"
  },
  openGraph: {
    title: "Uganda MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Uganda - UG, refactored for regulators, investors, and distributors."
  }
};

type UgandaPageProps = {
  params: { lang: SupportedLocale };
};

export default function UgandaPaymentGatewayPage({ params }: UgandaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-slate-950 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(250,204,21,0.35),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(59,130,246,0.3),transparent_60%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em]">
              Uganda | Payment Reinvention
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Uganda MLM payment gateways engineered for regulatory depth and diaspora trust
              </h1>
              <p className="max-w-2xl text-base text-white/80">
                Cloud MLM Software transforms Uganda&apos;s WordPress heritage into an AI-ready operating system that
                blends compliance telemetry, treasury foresight, and distributor assurance.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {HERO_HIGHLIGHTS.map((item) => (
                <article
                  key={item.label}
                  className="rounded-3xl border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                >
                  <h2 className="text-sm font-semibold text-white">{item.label}</h2>
                  <p className="mt-3 text-sm text-white/80">{item.description}</p>
                </article>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-amber-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Schedule a Uganda strategy session
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10">
                <Link href={demoHref}>Explore the live platform</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-lg backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Legacy anchor</p>
            <p className="text-base text-white">
              Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Uganda - UG
            </p>
            <p className="text-sm text-white/80">
              The navigation, gateway roster, and module references remain untouched. We wrap them with compliance
              evidence, AI telemetry, and investor-ready narratives without altering the heritage wording.
            </p>
            <Button asChild variant="secondary" size="lg" className="w-full gap-2 bg-white/10 text-white">
              <Link href={pricingHref}>
                Review pricing frameworks
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Executive gains delivered by the transformation
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Uganda&apos;s leadership sees exactly what stayed, what evolved, and how AI now fortifies every payment
            promise.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {EXECUTIVE_GAINS.map((gain) => {
            const Icon = gain.icon;
            return (
              <article
                key={gain.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/20 text-amber-900 dark:bg-white/10 dark:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{gain.title}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{gain.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-amber-100 via-white to-sky-100 py-20 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.25),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(59,130,246,0.25),transparent_60%)] dark:bg-none" />
        <div className="container relative space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Gateway roster, modules, and telemetry in one narrative
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout stay exactly as promised,
              now backed by the modules that keep compliance and revenue in sync.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {GATEWAY_MODULES.map((gateway) => {
              const Icon = gateway.icon;
              return (
                <article
                  key={gateway.name}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/20 text-amber-900 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-foreground dark:text-white">{gateway.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground dark:text-white/70">{gateway.summary}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 pl-2">
                    {gateway.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-2xl border border-border/50 bg-background/70 px-4 py-3 text-sm text-muted-foreground shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white/70"
                      >
                        {point}
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
        <div className="space-y-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Modules lifted from navigation now operate as a unified control tower
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Multi currency, ticketing, automation, vouchers, wallet, backup manager, emails, KYC, and multi-lingual
            capabilities now share data, approvals, and telemetry.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
          {MODULE_CARDS.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.name}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/20 text-amber-900 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground dark:text-white">{module.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground dark:text-white/70">{module.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.35),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(59,130,246,0.3),transparent_60%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Timeline that keeps Uganda&apos;s leadership confident
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-white/80">
              Each step ships tangible artefacts—heritage maps, compliance rehearsals, field enablement kits, and
              executive dashboards—so the board signs off with certainty.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {TIMELINE_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.phase}
                  className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                        {step.phase}
                      </span>
                      <h3 className="text-base font-semibold">{step.headline}</h3>
                      <p className="text-sm text-white/80">{step.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container rounded-3xl border border-border/60 bg-gradient-to-br from-amber-100 via-white to-sky-100 p-10 shadow-sm dark:border-white/10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Elevate Uganda&apos;s MLM payment experience with Cloud MLM Software
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Honour the WordPress legacy while empowering executives, investors, and distributors with AI-backed
              insights across every payment promise.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href={contactHref}>
                Talk to a strategist
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link href={demoHref}>See a guided demo</Link>
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

