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

type HeroPoint = {
  title: string;
  description: string;
};

type LeadershipCard = {
  heading: string;
  detail: string;
  icon: IconType;
};

type GatewayCard = {
  name: string;
  summary: string;
  actions: string[];
  icon: IconType;
};

type ModuleCard = {
  name: string;
  narrative: string;
  icon: IconType;
};

type TimelineStep = {
  step: string;
  headline: string;
  description: string;
  icon: IconType;
};

const HERO_POINTS: HeroPoint[] = [
  {
    title: "Pan-European alignment",
    description: "Crafted for Kyiv headquarters, Lviv innovation hubs, and Dnipro field leaders with EU readiness."
  },
  {
    title: "Gateway continuity",
    description: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain the approved roster."
  },
  {
    title: "AI telemetry embedded",
    description: "Compliance evidence, treasury exposure, and distributor sentiment surface together for investors and leadership."
  }
];

const LEADERSHIP_CARDS: LeadershipCard[] = [
  {
    heading: "Legacy language preserved",
    detail:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Ukraine - UA remains visible for stakeholders and SEO.",
    icon: StackSimple
  },
  {
    heading: "Regulatory altitude",
    detail:
      "NBU, PSD2, and AML requirements are orchestrated through maker-checker approvals and auditable workflows.",
    icon: ShieldCheck
  },
  {
    heading: "Diaspora synchronisation",
    detail:
      "Leaders across Warsaw, Berlin, and Toronto view settlements, FX exposure, and growth telemetry in the same command centre.",
    icon: GlobeHemisphereEast
  }
];

const GATEWAY_CARDS: GatewayCard[] = [
  {
    name: "PayPal diaspora corridor",
    summary: "Connect Ukraine leadership with global communities in Europe and North America.",
    actions: [
      "Multi currency module balances UAH, EUR, USD, and PLN with treasury variance dashboards.",
      "Ticket system module collates AML, dispute, and refund escalations with AI-generated briefs."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay experience lane",
    summary: "Blend ecommerce-grade checkout with high-touch messaging for education and wellness programmes.",
    actions: [
      "Auto responder delivers multilingual confirmations, webinars, and compliance prompts across Ukrainian and English journeys.",
      "Backup manager snapshots promotional funnels before product launches or investor briefings."
    ],
    icon: Sparkle
  },
  {
    name: "PayU regional bridge",
    summary: "Unlock EU and Eastern European corridors without losing compliance oversight.",
    actions: [
      "Emails module keeps finance, compliance, and operations aligned on PSP notices and settlement pacing.",
      "KYC documentation vault tracks identity, residency, and beneficial ownership artefacts with expiry alerts."
    ],
    icon: MapTrifold
  },
  {
    name: "Stripe experimentation studio",
    summary: "Prototype AI concierge, subscription kits, and digital products with instrumentation across departments.",
    actions: [
      "Multi-Lingual system synchronises Ukrainian, English, and Polish experiences across web, mobile, and chatbots.",
      "Ticket system creates shared workstreams for engineering, marketing, and compliance sign-off."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net governance lane",
    summary: "Blend North American expectations with Ukraine&apos;s regulatory framework for investor assurance.",
    actions: [
      "Multi currency module reconciles USD settlements with local banking partners and CFO reporting.",
      "KYC documentation keeps sanction screening, PEP monitoring, and due diligence dossiers inspection ready."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel vault",
    summary: "Tokenise field sales, remote enrollments, and hybrid events while safeguarding visibility.",
    actions: [
      "E-wallet module streams instant commissions with maker-checker controls for leadership tiers.",
      "Backup manager preserves offline transactions and branch uploads when connectivity fluctuates."
    ],
    icon: Wallet
  },
  {
    name: "Adyen oversight tower",
    summary: "Monitor conversion, fraud, and settlement pacing across EU, UK, and North American corridors.",
    actions: [
      "Multi currency dashboards surface FX exposure, authorisation trends, and scheme performance for board reviews.",
      "Emails module distributes PSD2, SCA, and scheme updates with read receipts."
    ],
    icon: Compass
  },
  {
    name: "2Checkout digital runway",
    summary: "Launch digital academies, AI enablement, and training ecosystems with tax-ready narratives.",
    actions: [
      "E-voucher workflows automate incentive fulfilment with audit trails for finance and compliance.",
      "Multi-Lingual messaging keeps Ukraine communities and diaspora aligned with Kyiv headquarters."
    ],
    icon: UsersThree
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    name: "Multi currency module",
    narrative: "Balances UAH, EUR, USD, PLN, and GBP while forecasting treasury exposure for leadership.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    narrative: "Routes PSP escalations, compliance checks, and distributor support with SLA-backed workflows.",
    icon: ChatsCircle
  },
  {
    name: "Auto responder",
    narrative: "Delivers Ukrainian, English, and Polish communications for onboarding, compliance, and nurture journeys.",
    icon: Sparkle
  },
  {
    name: "E-Voucher",
    narrative: "Generates incentive codes for market launches, academies, and loyalty programmes with approval trails.",
    icon: Lightning
  },
  {
    name: "E-Wallet",
    narrative: "Streams commissions and reimbursements with maker-checker guardrails tuned to senior ranks.",
    icon: Wallet
  },
  {
    name: "Backup manager",
    narrative: "Preserves automations, payout rules, and AI models before releases or regulatory checkpoints.",
    icon: AnchorSimple
  },
  {
    name: "Emails",
    narrative: "Schedules investor digests, compliance notices, and leadership briefings with deliverability tracking.",
    icon: Plugs
  },
  {
    name: "KYC documentation",
    narrative: "Maintains ID, residency, and beneficial ownership records with automated expiry alerts.",
    icon: ShieldCheck
  },
  {
    name: "Multi-Lingual system",
    narrative: "Aligns Ukrainian, English, and Polish messaging across web, mobile, and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: "Phase 01",
    headline: "Heritage inventory",
    description:
      "Document WordPress copy, navigation structure, and gateway roster to maintain SEO equity and stakeholder familiarity.",
    icon: StackSimple
  },
  {
    step: "Phase 02",
    headline: "Compliance rehearsal",
    description:
      "Mirror transactions in sandbox environments so finance and compliance leaders validate reconciliation, AML, and PSD2 readiness.",
    icon: ShieldCheck
  },
  {
    step: "Phase 03",
    headline: "Field enablement",
    description:
      "Equip Kyiv, Lviv, and Dnipro teams with AI-guided playbooks, offline aids, and escalation pathways.",
    icon: Sparkle
  },
  {
    step: "Phase 04",
    headline: "Executive telemetry",
    description:
      "Launch dashboards covering conversion, FX exposure, dispute ratios, and sentiment for board and investor sessions.",
    icon: Lightning
  }
];

export const metadata: Metadata = {
  title: "Ukraine MLM Payment Gateways | Cloud MLM Software",
  description:
    "Reimagine Ukraine&apos;s MLM payment gateways with AI telemetry, compliance automation, and continuity across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/ukraine"
  },
  openGraph: {
    title: "Ukraine MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Ukraine - UA, elevated for regulators, investors, and distributor trust."
  }
};

type UkrainePageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function UkrainePaymentGatewayPage({ params }: UkrainePageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-slate-950 to-amber-500/30 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(250,204,21,0.3),transparent_60%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em]">
              Ukraine | Payment Transformation
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Ukraine MLM payment gateways engineered for EU-grade compliance and growth
              </h1>
              <p className="max-w-2xl text-base text-white/80">
                Cloud MLM Software advances Ukraine&apos;s WordPress heritage into an AI-ready operating platform that
                unifies compliance telemetry, treasury precision, and distributor trust.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {HERO_POINTS.map((point) => (
                <article
                  key={point.title}
                  className="rounded-3xl border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                >
                  <h2 className="text-sm font-semibold text-white">{point.title}</h2>
                  <p className="mt-3 text-sm text-white/80">{point.description}</p>
                </article>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-blue-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Schedule a Ukraine strategy session
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
              Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Ukraine - UA
            </p>
            <p className="text-sm text-white/80">
              The navigation flow, gateway roster, and module references remain untouched. We enrich them with compliance
              evidence, AI telemetry, and investor storytelling without altering the heritage wording.
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
            Leadership signals powering the transformation
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Ukraine&apos;s board, compliance teams, and field leaders stay grounded in the legacy narrative while gaining
            the visibility they need.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {LEADERSHIP_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.heading}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-blue-700 dark:bg-white/10 dark:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{card.heading}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{card.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-white to-amber-100 py-20 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(250,204,21,0.25),transparent_60%)] dark:bg-none" />
        <div className="container relative space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Gateway roster reinforced with module synergy
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout keep their WordPress promise while gaining telemetry and compliance context.
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
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-blue-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-foreground dark:text-white">{card.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground dark:text-white/70">{card.summary}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 pl-2">
                    {card.actions.map((action) => (
                      <li
                        key={action}
                        className="rounded-2xl border border-border/50 bg-background/70 px-4 py-3 text-sm text-muted-foreground shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white/70"
                      >
                        {action}
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
              Modules lifted from navigation now operate as a unified operations cockpit
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticketing, auto responder, vouchers, wallet, backup manager, emails, KYC, and multi-lingual capabilities collaborate with audit-ready evidence.
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
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-blue-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{module.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{module.narrative}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(250,204,21,0.3),transparent_60%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Timeline that keeps Ukraine&apos;s leadership confident
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-white/80">
              Each phase produces artefacts—heritage inventories, compliance rehearsals, field enablement kits, and executive dashboards—so every stakeholder signs off with certainty.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {TIMELINE_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.step}
                  className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                        {step.step}
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

      <section className="container rounded-3xl border border-border/60 bg-gradient-to-br from-blue-100 via-white to-amber-100 p-10 shadow-sm dark:border-white/10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Elevate Ukraine&apos;s MLM payment experience with Cloud MLM Software
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Honour the WordPress legacy while empowering executives, investors, and distributors with AI-backed insights across every payment promise.
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

