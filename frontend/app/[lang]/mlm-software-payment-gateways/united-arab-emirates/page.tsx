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
  Buildings,
  ChatsCircle,
  Compass,
  CurrencyCircleDollar,
  GlobeHemisphereEast,
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

type HeroMetric = {
  label: string;
  value: string;
};

type LeadershipPillar = {
  title: string;
  detail: string;
  icon: IconType;
};

type GatewayNarrative = {
  name: string;
  summary: string;
  highlights: string[];
  icon: IconType;
};

type ModuleCard = {
  name: string;
  description: string;
  icon: IconType;
};

type TimelineStage = {
  phase: string;
  headline: string;
  description: string;
  icon: IconType;
};

const HERO_METRICS: HeroMetric[] = [
  {
    label: "Leadership hubs",
    value: "Dubai / Abu Dhabi / Sharjah"
  },
  {
    label: "Gateway roster",
    value: "PayPal / Amazon Pay / PayU / Stripe"
  },
  {
    label: "Compliance scope",
    value: "CBUAE / DFSAs / AML / Data sovereignty"
  }
];

const LEADERSHIP_PILLARS: LeadershipPillar[] = [
  {
    title: "Legacy promise honoured",
    detail:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of United Arab Emirates - AE remains the anchor language across the experience.",
    icon: StackSimple
  },
  {
    title: "Regulatory assurance",
    detail:
      "CBUAE expectations, DFSA guidelines, and AML routines are orchestrated with maker-checker approvals and audit trails.",
    icon: ShieldCheck
  },
  {
    title: "GCC and global alignment",
    detail:
      "Investors across Riyadh, Doha, and London view settlements, FX exposure, and growth telemetry alongside UAE leadership.",
    icon: GlobeHemisphereEast
  }
];

const GATEWAY_NARRATIVES: GatewayNarrative[] = [
  {
    name: "PayPal global corridor",
    summary: "Connect UAE leadership with diaspora communities across Europe and North America.",
    highlights: [
      "Multi currency module balances AED, USD, EUR, and GBP with treasury variance dashboards.",
      "Ticket system module collates AML, dispute, and chargeback escalations with AI-generated dossiers."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay experience lane",
    summary: "Blend ecommerce-grade checkout with high-touch communication for luxury and wellness programmes.",
    highlights: [
      "Auto responder orchestrates Arabic and English confirmations, concierge updates, and compliance prompts.",
      "Backup manager snapshots promotional funnels before seasonal launches and investor previews."
    ],
    icon: Sparkle
  },
  {
    name: "PayU regional bridge",
    summary: "Unlock MENA and South Asian corridors without losing compliance oversight.",
    highlights: [
      "Emails module keeps finance, compliance, and operations aligned on PSP notices and settlement timing.",
      "KYC documentation vault maintains Emirates ID, residency, and beneficial ownership artefacts with expiry alerts."
    ],
    icon: MapTrifold
  },
  {
    name: "Stripe experimentation studio",
    summary: "Prototype AI concierge, subscription tiers, and digital kits with instrumentation across departments.",
    highlights: [
      "Multi-Lingual system synchronises Arabic, English, and Hindi journeys across web, mobile, and chatbots.",
      "Ticket system creates shared workstreams for engineering, marketing, and compliance sign-off."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net governance lane",
    summary: "Blend North American expectations with UAE regulatory narratives for investor assurance.",
    highlights: [
      "Multi currency module reconciles USD settlements with local banking partners and CFO dashboards.",
      "KYC documentation keeps sanction screening, PEP monitoring, and due diligence dossiers inspection ready."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel vault",
    summary: "Tokenise field sales, pop-up experiences, and remote enrollments without losing visibility.",
    highlights: [
      "E-wallet module streams instant commissions with maker-checker controls for leadership tiers.",
      "Backup manager preserves offline transactions when connectivity fluctuates across venues."
    ],
    icon: Wallet
  },
  {
    name: "Adyen oversight tower",
    summary: "Monitor conversion, fraud, and settlement pacing across GCC, EU, and APAC corridors.",
    highlights: [
      "Multi currency dashboards surface FX exposure, authorisation trends, and scheme metrics for board reviews.",
      "Emails module distributes PSD2, SCA, and scheme updates with read receipts."
    ],
    icon: Compass
  },
  {
    name: "2Checkout digital runway",
    summary: "Launch digital academies, AI enablement, and partner onboarding with tax-ready narratives.",
    highlights: [
      "E-voucher workflows automate incentive fulfilment with audit trails for finance and compliance teams.",
      "Multi-Lingual messaging keeps UAE communities and global investors aligned with Dubai headquarters."
    ],
    icon: UsersThree
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    name: "Multi currency module",
    description: "Balances AED, USD, EUR, GBP, SAR, and INR while forecasting treasury exposure for leadership.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    description: "Creates SLA-backed queues for PSP escalations, distributor support, and compliance verifications.",
    icon: ChatsCircle
  },
  {
    name: "Auto responder",
    description: "Delivers Arabic, English, and Hindi communications for onboarding, compliance, and concierge journeys.",
    icon: Sparkle
  },
  {
    name: "E-Voucher",
    description: "Issues incentive codes for launch events, partner loyalty, and premium experiences with approvals.",
    icon: Lightning
  },
  {
    name: "E-Wallet",
    description: "Streams commissions and reimbursements with maker-checker guardrails tailored to leadership tiers.",
    icon: Wallet
  },
  {
    name: "Backup manager",
    description: "Preserves funnels, payout rules, and AI assets before releases or regulatory checkpoints.",
    icon: AnchorSimple
  },
  {
    name: "Emails",
    description: "Schedules investor digests, compliance notices, and leadership briefings with deliverability tracking.",
    icon: Plugs
  },
  {
    name: "KYC documentation",
    description: "Maintains Emirates ID, passport, residency, and beneficial ownership records with expiry alerts.",
    icon: ShieldCheck
  },
  {
    name: "Multi-Lingual system",
    description: "Aligns Arabic, English, Hindi, and Urdu messaging across web, mobile, and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const TIMELINE_STAGES: TimelineStage[] = [
  {
    phase: "Stage 01",
    headline: "Heritage capture",
    description:
      "Document WordPress copy, navigation structure, and gateway roster to maintain SEO and stakeholder familiarity.",
    icon: StackSimple
  },
  {
    phase: "Stage 02",
    headline: "Compliance rehearsal",
    description:
      "Mirror gateway data in sandbox environments so finance and compliance leaders validate reconciliation, AML, and data residency controls.",
    icon: ShieldCheck
  },
  {
    phase: "Stage 03",
    headline: "Field enablement",
    description:
      "Deliver AI-guided playbooks, offline aids, and escalation routes for Dubai, Abu Dhabi, and Sharjah teams.",
    icon: Buildings
  },
  {
    phase: "Stage 04",
    headline: "Executive telemetry",
    description:
      "Launch dashboards covering conversion, FX exposure, dispute ratios, and sentiment for board and investor sessions.",
    icon: Lightning
  }
];

export const metadata: Metadata = {
  title: "United Arab Emirates MLM Payment Gateways | Cloud MLM Software",
  description:
    "Elevate UAE MLM payment gateways with AI telemetry, compliance automation, and continuity across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/united-arab-emirates"
  },
  openGraph: {
    title: "United Arab Emirates MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of United Arab Emirates - AE, reimagined for regulators, investors, and distributor confidence."
  }
};

type UnitedArabEmiratesPageProps = {
  params: { lang: SupportedLocale };
};

export default function UnitedArabEmiratesPaymentGatewayPage({ params }: UnitedArabEmiratesPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-amber-500/30 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.35),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(251,191,36,0.3),transparent_60%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em]">
              United Arab Emirates | Payment Command
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                UAE MLM payment gateways engineered for board-grade governance
              </h1>
              <p className="max-w-2xl text-base text-white/80">
                Cloud MLM Software modernises the WordPress legacy into an AI-ready operating system that blends compliance telemetry, treasury foresight, and premium experiences for UAE leadership.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {HERO_METRICS.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-3xl border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                >
                  <h2 className="text-sm font-semibold text-white">{metric.label}</h2>
                  <p className="mt-3 text-sm text-white/80">{metric.value}</p>
                </article>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-purple-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Schedule a UAE strategy session
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
              Ways to accept payments from MLM Software in People&apos;s Democratic Republic of United Arab Emirates - AE
            </p>
            <p className="text-sm text-white/80">
              The navigation structure, gateway roster, and module references remain untouched. We enrich them with compliance evidence, AI telemetry, and investor-ready narratives without altering the original wording.
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
            Leadership pillars steering the UAE transformation
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Board members, compliance teams, and field executives remain grounded in the original narrative while gaining AI-backed insight.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {LEADERSHIP_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/15 text-purple-700 dark:bg-white/10 dark:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{pillar.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-white to-amber-100 py-20 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(168,85,247,0.25),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(251,191,36,0.25),transparent_60%)] dark:bg-none" />
        <div className="container relative space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Gateway narratives enriched with compliance depth
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Each connector from the WordPress page—PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout—gains module alignment and executive-grade telemetry.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {GATEWAY_NARRATIVES.map((gateway) => {
              const Icon = gateway.icon;
              return (
                <article
                  key={gateway.name}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/15 text-purple-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-foreground dark:text-white">{gateway.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground dark:text-white/70">{gateway.summary}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 pl-2">
                    {gateway.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-2xl border border-border/50 bg-background/70 px-4 py-3 text-sm text-muted-foreground shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white/70"
                      >
                        {highlight}
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
        <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Modules lifted from navigation now operate as a unified control tower
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticketing, automation, vouchers, wallet, backup manager, emails, KYC, and multi-lingual capabilities collaborate with audit-ready evidence across departments.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {MODULE_CARDS.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.name}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/15 text-purple-700 dark:bg-white/10 dark:text-white">
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

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.35),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(251,191,36,0.3),transparent_60%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Timeline that keeps UAE leadership confident
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-white/80">
              Each stage delivers artefacts—heritage documentation, compliance rehearsals, field enablement kits, and executive dashboards—ensuring sign-off before go-live.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {TIMELINE_STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.phase}
                  className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                        {stage.phase}
                      </span>
                      <h3 className="text-base font-semibold">{stage.headline}</h3>
                      <p className="text-sm text-white/80">{stage.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container rounded-3xl border border-border/60 bg-gradient-to-br from-purple-100 via-white to-amber-100 p-10 shadow-sm dark:border-white/10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Elevate UAE&apos;s MLM payment experience with Cloud MLM Software
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Honour your WordPress heritage while empowering executives, investors, and distributors with AI-backed insight across every payment promise.
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

