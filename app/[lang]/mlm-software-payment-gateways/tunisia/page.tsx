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
  ChatTeardropDots,
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

type StrategicFocus = {
  title: string;
  detail: string;
  icon: IconType;
};

type GatewayArc = {
  name: string;
  summary: string;
  items: string[];
  icon: IconType;
};

type ModuleLink = {
  title: string;
  description: string;
  icon: IconType;
};

type RoadmapStage = {
  phase: string;
  headline: string;
  description: string;
  icon: IconType;
};

type Partnership = {
  region: string;
  insight: string;
  icon: IconType;
};

const HERO_METRICS: HeroMetric[] = [
  {
    label: "Capital corridors",
    value: "Tunis / Sfax / Sousse"
  },
  {
    label: "Gateway stack",
    value: "PayPal / Amazon Pay / PayU / Stripe"
  },
  {
    label: "Executive agenda",
    value: "Compliance / Treasury / Expansion"
  }
];

const STRATEGIC_FOCUS: StrategicFocus[] = [
  {
    title: "Legacy storyline protected",
    detail:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Tunisia - TN stays visible as the anchor phrase for stakeholders and search.",
    icon: StackSimple
  },
  {
    title: "Regulatory altitude",
    detail:
      "Central Bank of Tunisia guidance, PSD2 considerations, and AML routines are embedded with maker-checker controls.",
    icon: ShieldCheck
  },
  {
    title: "Diaspora harmony",
    detail:
      "Leaders across Paris, Montreal, and Dubai receive unified dashboards on settlements, FX exposure, and campaign outcomes.",
    icon: GlobeHemisphereEast
  }
];

const GATEWAY_ARCS: GatewayArc[] = [
  {
    name: "PayPal diaspora corridor",
    summary: "Connect Tunis headquarters with diaspora leadership in France, Canada, and the Gulf.",
    items: [
      "Multi currency module reconciles TND, EUR, CAD, USD, and AED with treasury variance tracking.",
      "Ticket system module assembles AML and dispute dossiers with AI-generated summaries."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay experience lane",
    summary: "Blend ecommerce expectations with concierge communication for health, wellness, and education programmes.",
    items: [
      "Auto responder drives bilingual confirmations, webinar invites, and compliance prompts tuned to Tunisian schedules.",
      "Backup manager snapshots promotions ahead of seasonal surges and investor reviews."
    ],
    icon: Sparkle
  },
  {
    name: "PayU growth bridge",
    summary: "Unlock payments across MENA and Europe without losing Tunisian compliance oversight.",
    items: [
      "Emails module keeps finance, compliance, and operations aligned on PSP alerts and reconciliation cycles.",
      "KYC documentation vault manages ID, residency, and corporate paperwork with automated expiry alerts."
    ],
    icon: MapTrifold
  },
  {
    name: "Stripe experimentation studio",
    summary: "Prototype AI concierge, subscription experiences, and digital kits with instrumentation leaders can interrogate.",
    items: [
      "Multi-Lingual system synchronises Arabic, French, and English experiences across every digital touchpoint.",
      "Ticket system connects engineering, marketing, and compliance collaboration with traceable approvals."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net governance lane",
    summary: "Blend North American expectations with Tunisian regulatory narratives for board confidence.",
    items: [
      "Multi currency module reconciles USD settlements with local banking partners and CFO dashboards.",
      "KYC documentation maintains sanction, PEP, and beneficial ownership records ready for inspection."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel vault",
    summary: "Tokenise pop-up events, remote enrollments, and loyalty programmes with full transparency.",
    items: [
      "E-wallet module streams instant commissions with maker-checker guardrails for senior ranks.",
      "Backup manager preserves offline transactions whenever connectivity fluctuates."
    ],
    icon: Wallet
  },
  {
    name: "Adyen oversight tower",
    summary: "Monitor conversion, fraud, and settlement pacing across EU and MENA corridors from one command centre.",
    items: [
      "Multi currency dashboards surface FX exposure, authorisation trends, and scheme metrics for C-suite sessions.",
      "Emails module distributes PSD2, SCA, and scheme notices with read receipts."
    ],
    icon: Compass
  },
  {
    name: "2Checkout digital runway",
    summary: "Launch knowledge products and AI enablement with taxation narratives prepped for investors.",
    items: [
      "E-voucher workflows automate incentive fulfilment with audit-ready approval trails.",
      "Multi-Lingual system keeps diaspora audiences aligned with Tunis headquarters messaging."
    ],
    icon: UsersThree
  }
];

const MODULE_LINKS: ModuleLink[] = [
  {
    title: "Multi currency module",
    description: "Balances TND, EUR, USD, CAD, GBP, and AED while forecasting treasury exposure for leadership.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    description: "Creates SLA-backed work queues for PSP escalations, distributor support, and compliance verifications.",
    icon: ChatsCircle
  },
  {
    title: "Auto responder",
    description: "Delivers Arabic, French, and English communications for onboarding, compliance, and nurture journeys.",
    icon: ChatTeardropDots
  },
  {
    title: "E-Voucher",
    description: "Issues incentive codes for launch events, academies, and partner programmes with audit histories.",
    icon: Sparkle
  },
  {
    title: "E-Wallet",
    description: "Streams commissions and reimbursements with maker-checker approvals tuned to Tunisian governance.",
    icon: Wallet
  },
  {
    title: "Backup manager",
    description: "Preserves automations, payout rules, and data models before releases or regulatory audits.",
    icon: AnchorSimple
  },
  {
    title: "Emails",
    description: "Schedules investor updates, compliance alerts, and leadership briefings with deliverability tracking.",
    icon: Plugs
  },
  {
    title: "KYC documentation",
    description: "Maintains identity, residency, and corporate documents with automated expiry alerts and reviewer logs.",
    icon: ShieldCheck
  },
  {
    title: "Multi-Lingual system",
    description: "Aligns Arabic, French, and English messaging across the website, mobile apps, and AI agents.",
    icon: GlobeHemisphereEast
  }
];

const ROADMAP_STAGES: RoadmapStage[] = [
  {
    phase: "Stage 01",
    headline: "Heritage capture",
    description:
      "Catalogue navigation language, gateway lists, and module references from the WordPress build to preserve SEO signals and stakeholder familiarity.",
    icon: StackSimple
  },
  {
    phase: "Stage 02",
    headline: "Compliance rehearsal",
    description:
      "Mirror gateway transactions in sandbox environments so finance and compliance leaders verify reconciliation and AML routines.",
    icon: ShieldCheck
  },
  {
    phase: "Stage 03",
    headline: "Field enablement",
    description:
      "Equip Tunis, Sfax, and Sousse leadership with AI-guided playbooks, offline aids, and escalation routes tailored to local dynamics.",
    icon: ChatTeardropDots
  },
  {
    phase: "Stage 04",
    headline: "Executive telemetry",
    description:
      "Launch dashboards surfacing conversion, FX exposure, dispute ratios, and sentiment for board and investor sessions.",
    icon: Lightning
  }
];

const PARTNERSHIPS: Partnership[] = [
  {
    region: "MENA alliances",
    insight:
      "Shares compliance and PSP benchmarks with UAE, Saudi Arabia, and Morocco programmes to accelerate regional growth.",
    icon: MapTrifold
  },
  {
    region: "European corridors",
    insight:
      "Keeps Paris, Lyon, and Marseille investors informed on Adyen performance, PSD2 updates, and treasury health.",
    icon: Compass
  },
  {
    region: "North American expansion",
    insight:
      "Aligns Toronto and Montreal leadership on PayPal and Authorize.Net metrics with bilingual executive reporting.",
    icon: UsersThree
  },
  {
    region: "Gulf partnerships",
    insight:
      "Coordinates with Dubai and Doha stakeholders on FX exposure, settlement pacing, and compliance readiness.",
    icon: GlobeHemisphereEast
  }
];

export const metadata: Metadata = {
  title: "Tunisia MLM Payment Gateways | Cloud MLM Software",
  description:
    "Transform Tunisia&apos;s MLM payment gateways with AI telemetry, compliance automation, and continuity across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/tunisia"
  },
  openGraph: {
    title: "Tunisia MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Tunisia - TN, reshaped for investors, regulators, and distributor confidence."
  }
};

type TunisiaPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function TunisiaPaymentGatewayPage({ params }: TunisiaPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-amber-50 py-20 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,63,94,0.25),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(234,179,8,0.25),transparent_60%)] dark:bg-none" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-rose-700 dark:border-white/20 dark:bg-white/10 dark:text-white/70">
              Tunisia | Payment Reinvention
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground dark:text-white sm:text-5xl">
                Tunisia MLM payment gateways aligned for regulatory excellence
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software converts Tunisia&apos;s WordPress heritage into an AI-backed operating system that
                aligns compliance, treasury, and diaspora expectations in one place.
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-3">
              {HERO_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-rose-500/20 bg-white/85 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/10"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-700 dark:text-white/70">
                    {metric.label}
                  </dt>
                  <dd className="mt-3 text-sm font-medium text-foreground dark:text-white">{metric.value}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Schedule a Tunisia strategy session
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href={demoHref}>Experience the live platform</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-rose-500/20 bg-white/85 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-700 dark:text-white/70">
              Legacy anchor
            </p>
            <p className="text-base text-foreground dark:text-white">
              Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Tunisia - TN
            </p>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              The original copy, navigation structure, and gateway roster remain untouched. We enrich them with
              compliance telemetry, AI insights, and investor-ready narratives without losing the heritage storyline.
            </p>
            <Button asChild variant="secondary" size="lg" className="w-full gap-2">
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
            Strategic focus areas for Tunisia&apos;s leadership team
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Executives, investors, and compliance leaders gain the clarity they need while staying grounded in the
            original WordPress narrative.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {STRATEGIC_FOCUS.map((focus) => {
            const Icon = focus.icon;
            return (
              <article
                key={focus.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{focus.title}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{focus.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,63,94,0.35),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(234,179,8,0.3),transparent_60%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Gateway arcs reimagined for Tunisian oversight
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-white/80">
              Every connector from the legacy site is still here—PayPal, Amazon Pay, PayU, Stripe, Authorize.Net,
              Braintree, Adyen, and 2Checkout—now fortified with the modules and telemetry that leadership expects.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {GATEWAY_ARCS.map((arc) => {
              const Icon = arc.icon;
              return (
                <article
                  key={arc.name}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-white/15 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold">{arc.name}</h3>
                      <p className="mt-1 text-sm text-white/80">{arc.summary}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 pl-2">
                    {arc.items.map((item) => (
                      <li key={item} className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/80">
                        {item}
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
              Modules from navigation now operate as a single operations network
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticketing, automation, vouchers, wallet, backup manager, emails, KYC, and multi-lingual
              capabilities collaborate inside one workspace with audit trails throughout.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link href={demoHref}>
                Tour the operations network
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {MODULE_LINKS.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
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

      <section className="relative overflow-hidden bg-gradient-to-br from-amber-100 via-white to-rose-100 py-20 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,63,94,0.25),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(234,179,8,0.25),transparent_60%)] dark:bg-none" />
        <div className="container relative space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Roadmap that keeps Tunisia&apos;s leadership confident at every milestone
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Each stage ships tangible artefacts—heritage documentation, compliance rehearsals, field enablement
              toolkits, and executive dashboards—so the transition feels orchestrated.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {ROADMAP_STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.phase}
                  className="rounded-3xl border border-rose-500/30 bg-white/90 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-600 dark:text-white/60">
                        {stage.phase}
                      </span>
                      <h3 className="text-base font-semibold text-foreground dark:text-white">{stage.headline}</h3>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{stage.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Partnerships amplified by Tunisia&apos;s new operating system
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Compliance dashboards, treasury stories, and AI insights travel seamlessly to regional partners, diaspora
            investors, and leadership networks.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PARTNERSHIPS.map((partnership) => {
            const Icon = partnership.icon;
            return (
              <article
                key={partnership.region}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{partnership.region}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{partnership.insight}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container rounded-3xl border border-border/60 bg-gradient-to-br from-rose-50 via-white to-amber-50 p-10 shadow-sm dark:border-white/10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Elevate Tunisia&apos;s MLM payment experience with Cloud MLM Software
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Honour the legacy WordPress journey while equipping executives, compliance leaders, and distributors with
              AI-assisted insight across every payment promise.
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

