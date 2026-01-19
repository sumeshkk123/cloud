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

type HeroMetric = {
  label: string;
  value: string;
};

type LeadershipSignal = {
  title: string;
  detail: string;
  icon: IconType;
};

type GatewayCard = {
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
  phase: string;
  headline: string;
  description: string;
  icon: IconType;
};

const HERO_METRICS: HeroMetric[] = [
  {
    label: "Main hubs",
    value: "Montevideo / Canelones / Punta del Este"
  },
  {
    label: "Gateway stack",
    value: "PayPal / Amazon Pay / PayU / Stripe"
  },
  {
    label: "Executive lens",
    value: "Compliance / Treasury / Growth telemetry"
  }
];

const LEADERSHIP_SIGNALS: LeadershipSignal[] = [
  {
    title: "Legacy narrative preserved",
    detail:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Uruguay - UY remains the anchor phrase for stakeholders and SEO continuity.",
    icon: StackSimple
  },
  {
    title: "Regulatory assurance",
    detail:
      "Banco Central del Uruguay guidelines, AML routines, and data-residency expectations are embedded with maker-checker approvals.",
    icon: ShieldCheck
  },
  {
    title: "Regional alignment",
    detail:
      "Leadership across Buenos Aires, São Paulo, and Madrid view settlements, FX exposure, and sentiment in the same command centre.",
    icon: GlobeHemisphereWest
  }
];

const GATEWAY_CARDS: GatewayCard[] = [
  {
    name: "PayPal diaspora corridor",
    summary: "Connect Uruguay leadership with communities across North America and Europe.",
    bullets: [
      "Multi currency module balances UYU, USD, EUR, and BRL with treasury variance dashboards.",
      "Ticket system module orchestrates AML, dispute, and refund escalations with AI-generated summaries."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay experience lane",
    summary: "Blend ecommerce-grade checkout with high-touch communication for wellness and education programmes.",
    bullets: [
      "Auto responder delivers Spanish and English confirmations, webinars, and compliance prompts.",
      "Backup manager snapshots promotional funnels before seasonal campaigns."
    ],
    icon: Sparkle
  },
  {
    name: "PayU regional bridge",
    summary: "Unlock LATAM corridors without losing compliance oversight.",
    bullets: [
      "Emails module keeps finance, compliance, and operations aligned on PSP notices and settlement timing.",
      "KYC documentation vault tracks ID, residency, and beneficial ownership evidence with expiry alerts."
    ],
    icon: MapTrifold
  },
  {
    name: "Stripe experimentation studio",
    summary: "Prototype AI concierge, subscription tiers, and digital experiences with instrumentation across departments.",
    bullets: [
      "Multi-Lingual system synchronises Spanish, English, and Portuguese journeys across web, mobile, and chatbots.",
      "Ticket system creates shared workstreams for engineering, marketing, and compliance sign-off."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net governance lane",
    summary: "Blend North American expectations with Uruguay&apos;s regulatory posture for investor assurance.",
    bullets: [
      "Multi currency module reconciles USD settlements with domestic banking partners and CFO dashboards.",
      "KYC documentation keeps sanction screening, PEP monitoring, and due diligence dossiers inspection ready."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel vault",
    summary: "Tokenise field sales, remote enrollments, and loyalty programmes without losing visibility.",
    bullets: [
      "E-wallet module streams instant commissions with maker-checker controls for leadership tiers.",
      "Backup manager preserves offline transactions when connectivity fluctuates between departments."
    ],
    icon: Wallet
  },
  {
    name: "Adyen oversight tower",
    summary: "Monitor conversion, fraud, and settlement pacing across LATAM and EU corridors from one command centre.",
    bullets: [
      "Multi currency dashboards surface FX exposure, authorisation trends, and scheme performance for board reviews.",
      "Emails module distributes PSD2, SCA, and scheme updates with read receipts."
    ],
    icon: Compass
  },
  {
    name: "2Checkout digital runway",
    summary: "Launch digital academies, AI enablement, and partner onboarding with tax-ready narratives.",
    bullets: [
      "E-voucher workflows automate incentive fulfilment with audit trails for finance and compliance teams.",
      "Multi-Lingual messaging keeps Uruguay communities and diaspora aligned with Montevideo headquarters."
    ],
    icon: UsersThree
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    name: "Multi currency module",
    description: "Balances UYU, USD, EUR, BRL, and ARS while forecasting treasury exposure for leadership.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    description: "SLA-backed queues for PSP escalations, distributor support, and compliance verification.",
    icon: ChatsCircle
  },
  {
    name: "Auto responder",
    description: "Delivers Spanish and English confirmations, webinars, and compliance prompts tuned to Uruguay audiences.",
    icon: Sparkle
  },
  {
    name: "E-Voucher",
    description: "Generates incentive codes for launch events, academies, and loyalty programmes with approval trails.",
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
    description: "Schedules investor updates, compliance notices, and leadership briefings with deliverability tracking.",
    icon: Plugs
  },
  {
    name: "KYC documentation",
    description: "Maintains ID, residency, and beneficial ownership evidence with automated expiry alerts.",
    icon: ShieldCheck
  },
  {
    name: "Multi-Lingual system",
    description: "Aligns Spanish, English, and Portuguese messaging across web, mobile, and AI assistants.",
    icon: GlobeHemisphereWest
  }
];

const TIMELINE_STEPS: TimelineStep[] = [
  {
    phase: "Step 01",
    headline: "Heritage capture",
    description:
      "Document WordPress copy, navigation structure, and gateway roster to maintain SEO equity and stakeholder familiarity.",
    icon: StackSimple
  },
  {
    phase: "Step 02",
    headline: "Compliance rehearsal",
    description:
      "Mirror gateway transactions so finance and compliance leaders validate reconciliation, AML, and data residency controls.",
    icon: ShieldCheck
  },
  {
    phase: "Step 03",
    headline: "Field enablement",
    description:
      "Deliver AI-guided playbooks, offline aids, and escalation routes for Montevideo, Canelones, and Punta del Este teams.",
    icon: Sparkle
  },
  {
    phase: "Step 04",
    headline: "Executive telemetry",
    description:
      "Launch dashboards covering conversion, FX exposure, dispute ratios, and sentiment for board and investor sessions.",
    icon: Lightning
  }
];

export const metadata: Metadata = {
  title: "Uruguay MLM Payment Gateways | Cloud MLM Software",
  description:
    "Reimagine Uruguay&apos;s MLM payment gateways with AI telemetry, compliance automation, and continuity across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/uruguay"
  },
  openGraph: {
    title: "Uruguay MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Uruguay - UY, elevated for regulators, investors, and distributor confidence."
  }
};

type UruguayPageProps = {
  params: { lang: SupportedLocale };
};

export default function UruguayPaymentGatewayPage({ params }: UruguayPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-slate-950 to-sky-500/30 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.3),transparent_60%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em]">
              Uruguay | Payment Reinvention
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Uruguay MLM payment gateways engineered for regional growth and compliance
              </h1>
              <p className="max-w-2xl text-base text-white/80">
                Cloud MLM Software transforms Uruguay&apos;s WordPress heritage into an AI-supported operating system that aligns compliance telemetry, treasury foresight, and distributor trust.
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
              <Button asChild size="lg" className="gap-2 bg-white text-emerald-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Schedule a Uruguay strategy session
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
              Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Uruguay - UY
            </p>
            <p className="text-sm text-white/80">
              The navigation, gateway roster, and module references stay untouched. We enrich them with compliance evidence, AI telemetry, and investor-ready narratives without altering the original wording.
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
            Leadership signals guiding the Uruguay transformation
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Board members, compliance teams, and field leaders know what stayed, what evolved, and how AI now supports every payment promise.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {LEADERSHIP_SIGNALS.map((signal) => {
            const Icon = signal.icon;
            return (
              <article
                key={signal.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{signal.title}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{signal.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-100 via-white to-sky-100 py-20 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.25),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.25),transparent_60%)] dark:bg-none" />
        <div className="container relative space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Gateway roster enriched with compliance and AI telemetry
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout keep their WordPress promise while gaining the modules that support revenue, compliance, and distributor journeys.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {GATEWAY_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.name}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-foreground dark:text-white">{card.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground dark:text-white/70">{card.summary}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 pl-2">
                    {card.bullets.map((bullet) => (
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
            Modules from navigation now operate as a unified control tower
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Multi currency, ticketing, auto responder, vouchers, wallet, backup manager, emails, KYC, and multi-lingual capabilities collaborate with full audit history.
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
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(56,189,248,0.3),transparent_60%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Timeline that keeps Uruguay leadership confident
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-white/80">
              Each phase produces heritage documentation, compliance rehearsals, field enablement kits, and executive dashboards—ensuring sign-off before go-live.
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

      <section className="container rounded-3xl border border-border/60 bg-gradient-to-br from-emerald-100 via-white to-sky-100 p-10 shadow-sm dark:border-white/10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Elevate Uruguay&apos;s payment experience with Cloud MLM Software
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

