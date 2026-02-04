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

type HeroBadge = {
  heading: string;
  copy: string;
};

type LeadershipInsight = {
  title: string;
  detail: string;
  icon: IconType;
};

type GatewayStory = {
  name: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type ModuleCard = {
  name: string;
  description: string;
  icon: IconType;
};

type TimelineStep = {
  label: string;
  headline: string;
  description: string;
  icon: IconType;
};

const HERO_BADGES: HeroBadge[] = [
  {
    heading: "Market coverage",
    copy: "Designed for London headquarters, Manchester operations, and Edinburgh leadership."
  },
  {
    heading: "Gateway roster",
    copy: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain official connectors."
  },
  {
    heading: "AI telemetry",
    copy: "Compliance history, FX exposure, and distributor sentiment surface together for investors and board sessions."
  }
];

const LEADERSHIP_INSIGHTS: LeadershipInsight[] = [
  {
    title: "Legacy promise preserved",
    detail:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of United Kingdom - UK remains the anchor for stakeholders and search engines.",
    icon: StackSimple
  },
  {
    title: "Regulatory altitude",
    detail:
      "FCA expectations, PSD2 requirements, and AML routines are embedded through maker-checker approvals and audit trails.",
    icon: ShieldCheck
  },
  {
    title: "Global alignment",
    detail:
      "Leadership across New York, Dubai, and Singapore view settlements, FX exposure, and campaign telemetry in one command centre.",
    icon: GlobeHemisphereWest
  }
];

const GATEWAY_STORIES: GatewayStory[] = [
  {
    name: "PayPal diaspora corridor",
    summary: "Serve UK leadership with global reach across North America, Europe, and the Commonwealth.",
    bullets: [
      "Multi currency module balances GBP, USD, EUR, and AUD with treasury variance dashboards.",
      "Ticket system module orchestrates AML, dispute, and chargeback escalations with AI-generated briefs."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay experience lane",
    summary: "Blend ecommerce-grade checkouts with high-touch messaging for education, wellness, and service brands.",
    bullets: [
      "Auto responder delivers multilingual confirmations, webinars, and compliance prompts tailored to UK audiences.",
      "Backup manager snapshots promotional funnels before seasonal campaigns or investor showcases."
    ],
    icon: Sparkle
  },
  {
    name: "PayU growth bridge",
    summary: "Unlock European expansion while maintaining FCA compliance oversight.",
    bullets: [
      "Emails module keeps finance, compliance, and operations aligned on PSP notices and settlement timing.",
      "KYC documentation vault manages ID, residency, and beneficial ownership evidence with expiry alerts."
    ],
    icon: MapTrifold
  },
  {
    name: "Stripe experimentation studio",
    summary: "Prototype AI concierge, subscription tiers, and digital experiences with instrumentation.",
    bullets: [
      "Multi-Lingual system synchronises English, Welsh, and Polish journeys across web, mobile, and chatbots.",
      "Ticket system creates shared workstreams for engineering, marketing, and compliance sign-off."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net governance lane",
    summary: "Blend North American expectations with UK regulatory narratives for investor confidence.",
    bullets: [
      "Multi currency module reconciles USD settlements with UK banking partners and CFO dashboards.",
      "KYC documentation keeps sanction screening, PEP monitoring, and due diligence dossiers inspection ready."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel vault",
    summary: "Tokenise field sales, pop-up experiences, and remote enrollments with full transparency.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker controls for leadership tiers.",
      "Backup manager preserves offline transactions when connectivity fluctuates between venues."
    ],
    icon: Wallet
  },
  {
    name: "Adyen oversight tower",
    summary: "Monitor conversion, fraud, and settlement pacing across EU, US, and APAC corridors.",
    bullets: [
      "Multi currency dashboards surface FX exposure, authorisation trends, and scheme performance for board reviews.",
      "Emails module distributes PSD2, SCA, and scheme updates with read receipts."
    ],
    icon: Compass
  },
  {
    name: "2Checkout digital runway",
    summary: "Launch digital academies, AI enablement, and training programmes with tax-ready narratives.",
    bullets: [
      "E-voucher workflows automate incentive fulfilment with audit trails for finance and compliance.",
      "Multi-Lingual messaging keeps UK communities and global investors aligned with London headquarters."
    ],
    icon: UsersThree
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    name: "Multi currency module",
    description: "Balances GBP, USD, EUR, AED, and AUD while forecasting treasury exposure for leadership.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    description: "SLA-backed queues for PSP escalations, distributor support, and compliance reviews.",
    icon: ChatsCircle
  },
  {
    name: "Auto responder",
    description: "Delivers English, Welsh, and Polish communications for onboarding, compliance, and nurture journeys.",
    icon: Sparkle
  },
  {
    name: "E-Voucher",
    description: "Issues incentive codes for launch events, academies, and loyalty programmes with approval trails.",
    icon: Lightning
  },
  {
    name: "E-Wallet",
    description: "Streams commissions and reimbursements with maker-checker guardrails tailored to leadership tiers.",
    icon: Wallet
  },
  {
    name: "Backup manager",
    description: "Preserves funnels, payout rules, and automation maps before releases or regulatory checkpoints.",
    icon: AnchorSimple
  },
  {
    name: "Emails",
    description: "Schedules investor digests, compliance notices, and leadership briefings with deliverability tracking.",
    icon: Plugs
  },
  {
    name: "KYC documentation",
    description: "Maintains ID, residency, and due diligence records with automated expiry alerts.",
    icon: ShieldCheck
  },
  {
    name: "Multi-Lingual system",
    description: "Aligns English, Welsh, and Polish messaging across web, mobile, and AI assistants.",
    icon: GlobeHemisphereWest
  }
];

const TIMELINE_STEPS: TimelineStep[] = [
  {
    label: "Step 01",
    headline: "Heritage inventory",
    description:
      "Document the WordPress copy, navigation, and gateway promises to maintain SEO equity and stakeholder familiarity.",
    icon: StackSimple
  },
  {
    label: "Step 02",
    headline: "Compliance rehearsal",
    description:
      "Mirror gateway data in sandbox environments so finance and compliance leaders validate reconciliation, AML, and PSD2 controls.",
    icon: ShieldCheck
  },
  {
    label: "Step 03",
    headline: "Field enablement",
    description:
      "Provide AI-guided playbooks, offline aids, and escalation routes for London, Manchester, and Edinburgh teams.",
    icon: Sparkle
  },
  {
    label: "Step 04",
    headline: "Executive telemetry",
    description:
      "Launch dashboards covering conversion, FX exposure, dispute ratios, and sentiment for board and investor updates.",
    icon: Lightning
  }
];

export const metadata: Metadata = {
  title: "United Kingdom MLM Payment Gateways | Cloud MLM Software",
  description:
    "Modernise United Kingdom MLM payment gateways with AI telemetry, compliance automation, and continuity across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/united-kingdom"
  },
  openGraph: {
    title: "United Kingdom MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of United Kingdom - UK, elevated for regulators, investors, and distributor confidence."
  }
};

type UnitedKingdomPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function UnitedKingdomPaymentGatewayPage({ params }: UnitedKingdomPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-slate-950 to-red-700/40 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(239,68,68,0.3),transparent_60%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em]">
              United Kingdom | Payment Evolution
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                United Kingdom MLM payment gateways engineered for FCA-grade confidence
              </h1>
              <p className="max-w-2xl text-base text-white/80">
                Cloud MLM Software transforms the WordPress heritage into an AI-supported operating system that aligns compliance telemetry, treasury precision, and distributor trust for the UK market.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {HERO_BADGES.map((badge) => (
                <article
                  key={badge.heading}
                  className="rounded-3xl border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                >
                  <h2 className="text-sm font-semibold text-white">{badge.heading}</h2>
                  <p className="mt-3 text-sm text-white/80">{badge.copy}</p>
                </article>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-blue-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Schedule a UK strategy session
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
              Ways to accept payments from MLM Software in People&apos;s Democratic Republic of United Kingdom - UK
            </p>
            <p className="text-sm text-white/80">
              The navigation flow, gateway roster, and module references stay untouched. We enrich them with compliance evidence, AI telemetry, and investor storytelling without changing the heritage wording.
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
            Leadership insights guiding the UK transformation
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Board members, compliance teams, and field leaders understand what stayed, what evolved, and how AI now supports every payment promise.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {LEADERSHIP_INSIGHTS.map((insight) => {
            const Icon = insight.icon;
            return (
              <article
                key={insight.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-blue-700 dark:bg-white/10 dark:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{insight.title}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{insight.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-white to-red-100 py-20 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(239,68,68,0.25),transparent_60%)] dark:bg-none" />
        <div className="container relative space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Gateway stories enriched for FCA-ready reporting
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain the official connectors—now backed by modules and telemetry leadership expects.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {GATEWAY_STORIES.map((story) => {
              const Icon = story.icon;
              return (
                <article
                  key={story.name}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-blue-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-foreground dark:text-white">{story.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground dark:text-white/70">{story.summary}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 pl-2">
                    {story.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="rounded-2xl border border-border/50 bg-background/70 px-4 py-3 text-sm text-muted-foreground shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white/70"
                      >
                        {bullet}
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
            Multi currency, ticketing, auto responder, vouchers, wallet, backup manager, emails, KYC, and multi-lingual capabilities share data and approvals for every department.
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
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-blue-700 dark:bg-white/10 dark:text-white">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(239,68,68,0.3),transparent_60%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Timeline that keeps UK leadership confident at every stage
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-white/80">
              Each step delivers heritage maps, compliance rehearsals, field enablement kits, and executive dashboards—ensuring approval before go-live.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {TIMELINE_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.label}
                  className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                        {step.label}
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

      <section className="container rounded-3xl border border-border/60 bg-gradient-to-br from-blue-100 via-white to-red-100 p-10 shadow-sm dark:border-white/10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Elevate UK payment experiences with Cloud MLM Software
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Honour the WordPress legacy while empowering executives, investors, and distributors with AI-backed insight across every payment promise.
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
