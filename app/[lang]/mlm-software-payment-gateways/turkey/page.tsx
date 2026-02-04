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
  UsersFour,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroDetail = {
  title: string;
  copy: string;
};

type InsightCard = {
  heading: string;
  detail: string;
  icon: IconType;
};

type GatewayTrail = {
  name: string;
  description: string;
  highlights: string[];
  icon: IconType;
};

type ModuleCard = {
  name: string;
  summary: string;
  icon: IconType;
};

type TimelineNode = {
  label: string;
  title: string;
  description: string;
  icon: IconType;
};

type Network = {
  region: string;
  story: string;
  icon: IconType;
};

const HERO_DETAILS: HeroDetail[] = [
  {
    title: "Gateway roster",
    copy: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain committed."
  },
  {
    title: "Executive focus",
    copy: "Compliance narratives, treasury forecasting, and AI telemetry in one Istanbul-ready command centre."
  },
  {
    title: "Regional reach",
    copy: "Serves Istanbul, Ankara, Izmir, and diaspora leadership across Berlin, London, and Dubai."
  }
];

const INSIGHT_CARDS: InsightCard[] = [
  {
    heading: "Legacy anchor preserved",
    detail:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Turkey - TR stays front and centre for SEO, stakeholders, and brand memory.",
    icon: StackSimple
  },
  {
    heading: "Regulatory altitude",
    detail:
      "BDDK expectations, PSD2 interplay, and AML controls are documented through maker-checker approvals and audit trails.",
    icon: ShieldCheck
  },
  {
    heading: "Diaspora alignment",
    detail:
      "Berlin, Rotterdam, and Dubai investors review settlement pacing, FX exposure, and growth telemetry alongside Istanbul leadership.",
    icon: GlobeHemisphereEast
  }
];

const GATEWAY_TRAILS: GatewayTrail[] = [
  {
    name: "PayPal diaspora corridor",
    description: "Connect Istanbul HQ with diaspora leaders across Europe and North America.",
    highlights: [
      "Multi currency module reconciles TRY, EUR, GBP, USD, and CAD with treasury variance dashboards.",
      "Ticket system module orchestrates AML, dispute, and chargeback escalations with AI summaries."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay commerce lane",
    description: "Blend ecommerce-grade checkout with concierge messaging for wellness and education programmes.",
    highlights: [
      "Auto responder handles multilingual onboarding, compliance prompts, and nurture journeys.",
      "Backup manager snapshots promotional funnels before key product or investor launches."
    ],
    icon: Sparkle
  },
  {
    name: "PayU growth bridge",
    description: "Unlock Eastern European and Middle Eastern corridors without losing Turkish compliance guardrails.",
    highlights: [
      "Emails module keeps finance, compliance, and operations aligned on PSP notices and settlement timing.",
      "KYC documentation vault tracks ID, residency, and beneficial ownership artefacts with reviewer logs."
    ],
    icon: MapTrifold
  },
  {
    name: "Stripe experimentation studio",
    description: "Prototype AI concierge, subscription tiers, and hybrid events with instrumentation for every department.",
    highlights: [
      "Multi-Lingual system synchronises Turkish, English, and Arabic experiences across web, mobile, and chatbots.",
      "Ticket system creates shared workstreams for engineering, marketing, and compliance sign-off."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net governance lane",
    description: "Blend North American expectations with Turkey&apos;s regulatory landscape for investor assurance.",
    highlights: [
      "Multi currency module reconciles USD settlements with local banking partners and CFO reporting.",
      "KYC documentation ensures sanction, PEP, and due diligence evidence stays inspection ready."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel vault",
    description: "Tokenise field sales, pop-up experiences, and remote enrollments while maintaining visibility.",
    highlights: [
      "E-wallet module streams instant commissions with maker-checker controls tailored to Turkish hierarchies.",
      "Backup manager protects offline transactions when connectivity fluctuates across regions."
    ],
    icon: Wallet
  },
  {
    name: "Adyen oversight tower",
    description: "Monitor conversion, fraud, and settlement pacing across EU and MENA corridors from one dashboard.",
    highlights: [
      "Multi currency insights surface FX risk, authorisation trends, and scheme performance for board reviews.",
      "Emails module distributes PSD2, SCA, and scheme updates with read receipts for compliance assurance."
    ],
    icon: Compass
  },
  {
    name: "2Checkout digital runway",
    description: "Launch digital resources, AI enablement, and certification programmes with tax-ready narratives.",
    highlights: [
      "E-voucher workflows automate incentive fulfilment with audit trails for finance and compliance.",
      "Multi-Lingual messaging keeps diaspora communities aligned with Istanbul headquarters."
    ],
    icon: UsersFour
  }
];

const MODULE_CARDS: ModuleCard[] = [
  {
    name: "Multi currency module",
    summary: "Balances TRY, EUR, USD, GBP, and SAR while forecasting exposure for board-level conversations.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    summary: "SLA-backed queues for PSP escalations, compliance cases, and distributor support requests.",
    icon: ChatsCircle
  },
  {
    name: "Auto responder",
    summary: "Delivers Turkish, English, and Arabic communications for onboarding, compliance prompts, and webinars.",
    icon: Sparkle
  },
  {
    name: "E-Voucher",
    summary: "Issues incentive codes for Istanbul launches, Ankara roadshows, and digital programmes with approvals.",
    icon: Lightning
  },
  {
    name: "E-Wallet",
    summary: "Streams commissions, reimbursements, and bonuses with configurable maker-checker thresholds.",
    icon: Wallet
  },
  {
    name: "Backup manager",
    summary: "Preserves automations, payout rules, and AI models before releases or regulatory updates.",
    icon: AnchorSimple
  },
  {
    name: "Emails",
    summary: "Schedules investor briefings, compliance notices, and performance digests with delivery tracking.",
    icon: Plugs
  },
  {
    name: "KYC documentation",
    summary: "Maintains ID, residency, and corporate paperwork with expiry monitoring and reviewer logs.",
    icon: ShieldCheck
  },
  {
    name: "Multi-Lingual system",
    summary: "Aligns Turkish, English, and Arabic messaging across the website, mobile apps, and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const TIMELINE_NODES: TimelineNode[] = [
  {
    label: "Step 01",
    title: "Heritage inventory",
    description:
      "Document the WordPress copy, navigation structure, and gateway list to maintain SEO equity and stakeholder familiarity.",
    icon: StackSimple
  },
  {
    label: "Step 02",
    title: "Compliance rehearsal",
    description:
      "Mirror gateway transactions in sandbox environments so finance and compliance leaders validate reconciliation and AML routines.",
    icon: ShieldCheck
  },
  {
    label: "Step 03",
    title: "Field enablement",
    description:
      "Equip Istanbul, Ankara, and Izmir teams with AI-guided playbooks, offline aids, and escalation routes tailored to regional realities.",
    icon: Buildings
  },
  {
    label: "Step 04",
    title: "Executive telemetry",
    description:
      "Launch dashboards that surface conversion, FX exposure, dispute ratios, and sentiment for board and investor updates.",
    icon: Lightning
  }
];

const NETWORKS: Network[] = [
  {
    region: "European corridors",
    story:
      "Shares Adyen, PayPal, and PSD2 insights with Berlin, Amsterdam, and London leadership circles for expansion planning.",
    icon: Compass
  },
  {
    region: "Gulf partnerships",
    story:
      "Keeps Dubai, Doha, and Riyadh investors aligned on FX exposure, settlement pacing, and compliance readiness.",
    icon: GlobeHemisphereEast
  },
  {
    region: "North American investors",
    story:
      "Delivers Authorize.Net and PayPal performance stories to New York and Toronto stakeholders with transparent telemetry.",
    icon: Buildings
  },
  {
    region: "Central Asia alliances",
    story:
      "Benchmarks PayU and Stripe performance with Kazakhstan, Azerbaijan, and Uzbekistan programmes for shared innovation.",
    icon: MapTrifold
  }
];

export const metadata: Metadata = {
  title: "Turkey MLM Payment Gateways | Cloud MLM Software",
  description:
    "Reimagine Turkey&apos;s MLM payment gateways with AI telemetry, compliance automation, and continuity across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/turkey"
  },
  openGraph: {
    title: "Turkey MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Turkey - TR, elevated for regulators, investors, and distributors."
  }
};

type TurkeyPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function TurkeyPaymentGatewayPage({ params }: TurkeyPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-rose-900 to-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(244,63,94,0.35),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(59,130,246,0.3),transparent_60%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em]">
              Turkey | Payment Transformation
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Turkey MLM payment gateways engineered for regulatory and diaspora confidence
              </h1>
              <p className="max-w-2xl text-base text-white/80">
                Cloud MLM Software advances Turkey&apos;s WordPress legacy into an AI-assisted operating platform that
                integrates compliance telemetry, treasury forecasting, and distributor trust.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {HERO_DETAILS.map((detail) => (
                <article
                  key={detail.title}
                  className="rounded-3xl border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                >
                  <h2 className="text-sm font-semibold text-white">{detail.title}</h2>
                  <p className="mt-3 text-sm text-white/80">{detail.copy}</p>
                </article>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-rose-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Schedule a Turkey strategy session
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
              Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Turkey - TR
            </p>
            <p className="text-sm text-white/80">
              The navigation structure, module references, and gateway roster from the WordPress edition remain intact.
              We wrap them with compliance evidence, AI telemetry, and executive storytelling without altering the
              heritage copy.
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
            Insight pillars guiding Turkey&apos;s payment transformation
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Investors, compliance leaders, and field executives stay grounded in the original narrative while gaining
            visibility into every payment promise.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {INSIGHT_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.heading}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{card.heading}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{card.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-rose-100 via-white to-sky-100 py-20 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,63,94,0.25),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(14,165,233,0.25),transparent_60%)] dark:bg-none" />
        <div className="container relative space-y-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
            <div className="space-y-6 rounded-3xl border border-rose-500/30 bg-white/85 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-700 dark:text-white/70">
                PSP roster
              </p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
                Gateway roster honoured, insight layer transformed
              </h2>
              <p className="text-sm text-muted-foreground dark:text-white/70">
                PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout stay intact while each
                connector gains compliance telemetry, module alignment, and AI-ready storytelling.
              </p>
              <ul className="grid gap-2 text-sm text-foreground/80 dark:text-white/80 sm:grid-cols-2">
                <li>PayPal</li>
                <li>Amazon Pay</li>
                <li>PayU</li>
                <li>Stripe</li>
                <li>Authorize.Net</li>
                <li>Braintree</li>
                <li>Adyen</li>
                <li>2Checkout</li>
              </ul>
            </div>
            <div className="grid gap-6">
              {GATEWAY_TRAILS.map((trail) => {
                const Icon = trail.icon;
                return (
                  <article
                    key={trail.name}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-foreground dark:text-white">{trail.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground dark:text-white/70">{trail.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-3 pl-2">
                      {trail.highlights.map((highlight) => (
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
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Navigation modules now operate as a unified operations cockpit
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticketing, auto responder, vouchers, wallet, backup manager, emails, KYC, and multi-lingual
              capabilities collaborate to keep finance, compliance, and field leaders aligned.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link href={demoHref}>
                Tour the operations cockpit
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
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
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{module.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{module.summary}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,63,94,0.35),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(59,130,246,0.3),transparent_60%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Timeline that keeps Turkey&apos;s leadership confident at every checkpoint
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-white/80">
              Each step delivers artefacts—heritage inventories, compliance rehearsals, field enablement kits, and
              executive dashboards—so the transition from WordPress feels orchestrated.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {TIMELINE_NODES.map((node) => {
              const Icon = node.icon;
              return (
                <article
                  key={node.label}
                  className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                        {node.label}
                      </span>
                      <h3 className="text-base font-semibold">{node.title}</h3>
                      <p className="text-sm text-white/80">{node.description}</p>
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
            Networks powered by Turkey&apos;s new operating model
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Compliance dashboards, treasury stories, and AI telemetry reach regional partners and diaspora investors
            without losing the heritage narrative.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {NETWORKS.map((network) => {
            const Icon = network.icon;
            return (
              <article
                key={network.region}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{network.region}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{network.story}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container rounded-3xl border border-border/60 bg-gradient-to-br from-rose-100 via-white to-slate-100 p-10 shadow-sm dark:border-white/10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Elevate Turkey&apos;s MLM payment experience with Cloud MLM Software
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Honour the original WordPress content while empowering executives, investors, and distributors with
              AI-supported insight across every payment promise.
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

