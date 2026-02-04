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
  Barbell,
  ChatsCircle,
  Compass,
  CurrencyCircleDollar,
  GlobeHemisphereWest,
  Handshake,
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

type HeroHighlight = {
  label: string;
  description: string;
};

type ExecutiveOutcome = {
  title: string;
  detail: string;
  icon: IconType;
};

type GatewayMotion = {
  title: string;
  subheading: string;
  points: string[];
  icon: IconType;
};

type ModuleAnchor = {
  name: string;
  summary: string;
  icon: IconType;
};

type Phase = {
  step: string;
  headline: string;
  description: string;
  icon: IconType;
};

type RegionalBridge = {
  region: string;
  storyline: string;
  icon: IconType;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    label: "Polynesian leadership aligned",
    description: "Built for Nuku&apos;alofa headquarters, Vava&apos;u innovation teams, and Tongatapu field leaders."
  },
  {
    label: "Gateway roster retained",
    description: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain intact."
  },
  {
    label: "AI-assisted governance",
    description: "Telemetry, compliance history, and narrative dashboards guide every investor and board session."
  }
];

const EXECUTIVE_OUTCOMES: ExecutiveOutcome[] = [
  {
    title: "Legacy promise honoured",
    detail:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Tonga - TO anchors the redesign, keeping every navigation pledge visible.",
    icon: StackSimple
  },
  {
    title: "Maritime-ready resilience",
    detail:
      "Offline safeguards, sync-aware status messaging, and maker-checker approvals respect inter-island connectivity dynamics.",
    icon: AnchorSimple
  },
  {
    title: "Diaspora transparency",
    detail:
      "Investors and leaders in New Zealand, Australia, and the United States see settlement pacing, FX exposure, and compliance posture in real time.",
    icon: GlobeHemisphereWest
  },
  {
    title: "Distributor confidence",
    detail:
      "Journeys adapt to local payment preferences while keeping compliance and treasury teams informed through shared work queues.",
    icon: Handshake
  }
];

const GATEWAY_MOTIONS: GatewayMotion[] = [
  {
    title: "PayPal diaspora corridor",
    subheading: "Connect Polynesian leadership with global communities.",
    points: [
      "Multi currency module balances TOP, NZD, AUD, and USD with treasury variance tracking.",
      "Ticket system module routes AML, dispute, and chargeback cases with AI-summarised dossiers."
    ],
    icon: CurrencyCircleDollar
  },
  {
    title: "Amazon Pay membership lane",
    subheading: "Blend ecommerce-grade experiences with concierge communication.",
    points: [
      "Auto responder schedules bilingual confirmations, webinars, and renewal reminders.",
      "Backup manager snapshots seasonal promotions before they reach campaign teams."
    ],
    icon: Sparkle
  },
  {
    title: "PayU regional bridge",
    subheading: "Unlock Pacific and Asian corridors without losing compliance control.",
    points: [
      "Emails module distributes PSP notices, deposit timelines, and scheme updates across leadership.",
      "KYC documentation vault maintains passports, proof-of-address, and beneficial ownership artefacts."
    ],
    icon: MapTrifold
  },
  {
    title: "Stripe experimentation studio",
    subheading: "Prototype AI concierge, digital kits, and hybrid subscriptions.",
    points: [
      "Multi-Lingual system keeps English and Tongan narratives aligned across web, mobile, and chatbots.",
      "Ticket system creates shared workstreams for engineering, finance, and compliance sign-off."
    ],
    icon: Lightning
  },
  {
    title: "Authorize.Net assurance lane",
    subheading: "Marry North American expectations with Tonga&apos;s regulatory standards.",
    points: [
      "Multi currency module reconciles USD settlements against TOP banking partners with CFO-ready outputs.",
      "KYC documentation ensures sanction, PEP, and business verification trails stay inspection ready."
    ],
    icon: ShieldCheck
  },
  {
    title: "Braintree omnichannel vault",
    subheading: "Tokenise field sales, remote events, and loyalty programmes without losing visibility.",
    points: [
      "E-wallet module manages instant commissions with maker-checker logic for leadership roles.",
      "Backup manager preserves offline orders when connectivity dips between island groups."
    ],
    icon: Wallet
  },
  {
    title: "Adyen oversight tower",
    subheading: "Monitor conversion, fraud, and settlement pacing across hemispheres.",
    points: [
      "Multi currency dashboards surface FX exposure and scheme performance for board conversations.",
      "Emails module records read receipts so compliance updates never go unnoticed."
    ],
    icon: Compass
  },
  {
    title: "2Checkout digital runway",
    subheading: "Launch premium content and training ecosystems with tax narratives intact.",
    points: [
      "E-voucher journeys automate incentive fulfilment with approval workflows leadership can trust.",
      "Multi-Lingual messaging keeps diaspora audiences aligned with Tonga headquarters."
    ],
    icon: UsersFour
  }
];

const MODULE_ANCHORS: ModuleAnchor[] = [
  {
    name: "Multi currency module",
    summary: "Balances TOP, NZD, AUD, USD, and GBP inflows while forecasting treasury positions.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    summary: "Gives finance, compliance, and operations a shared queue for PSP and distributor cases.",
    icon: ChatsCircle
  },
  {
    name: "Auto responder",
    summary: "Delivers bilingual confirmations, nurture streams, and escalation prompts aligned with leadership cadence.",
    icon: Sparkle
  },
  {
    name: "E-Voucher",
    summary: "Issues incentive codes for new market launches, wellness summits, and loyalty programmes with audit trails.",
    icon: Lightning
  },
  {
    name: "E-Wallet",
    summary: "Streams commissions and reimbursements with maker-checker approvals tailored to Tonga&apos;s hierarchy.",
    icon: Wallet
  },
  {
    name: "Backup manager",
    summary: "Captures funnels, automations, and payout rules before every release or connectivity-sensitive deployment.",
    icon: AnchorSimple
  },
  {
    name: "Emails",
    summary: "Keeps investors, compliance officers, and field leaders aligned through scheduled digests and alerts.",
    icon: Plugs
  },
  {
    name: "KYC documentation",
    summary: "Maintains ID, residency, and due diligence records with automated expiry prompts.",
    icon: ShieldCheck
  },
  {
    name: "Multi-Lingual system",
    summary: "Ensures English and Tongan messaging stays consistent across every digital surface and AI agent.",
    icon: GlobeHemisphereWest
  }
];

const PHASES: Phase[] = [
  {
    step: "Phase 01",
    headline: "Heritage inventory",
    description:
      "Document every WordPress navigation entry, copy block, and payment assurance to guarantee nothing is lost.",
    icon: StackSimple
  },
  {
    step: "Phase 02",
    headline: "Compliance rehearsal",
    description:
      "Mirror gateway data in sandbox environments so finance and compliance leaders validate settlements, AML checks, and disputes.",
    icon: ShieldCheck
  },
  {
    step: "Phase 03",
    headline: "Field enablement",
    description:
      "Build AI-assisted playbooks, offline aids, and escalation routes for island and diaspora teams.",
    icon: Handshake
  },
  {
    step: "Phase 04",
    headline: "Executive telemetry",
    description:
      "Launch dashboards that surface conversion, FX exposure, support demand, and sentiment for C-suite and investors.",
    icon: Lightning
  }
];

const REGIONAL_BRIDGES: RegionalBridge[] = [
  {
    region: "Pacific alliances",
    storyline:
      "Shares insights with Fiji, Samoa, and Cook Islands programmes to benchmark PSP performance and compliance practices.",
    icon: MapTrifold
  },
  {
    region: "Australasia corridors",
    storyline:
      "Aligns with Auckland and Sydney leadership for investor briefings, diaspora onboarding, and treasury coordination.",
    icon: Compass
  },
  {
    region: "North America partners",
    storyline:
      "Keeps San Francisco, Los Angeles, and Salt Lake City leaders in sync on Authorize.Net and PayPal performance.",
    icon: Barbell
  },
  {
    region: "EU investors",
    storyline:
      "Delivers narrative ready updates for London and Frankfurt stakeholders focused on Adyen and PSD2 guardrails.",
    icon: CurrencyCircleDollar
  }
];

export const metadata: Metadata = {
  title: "Tonga MLM Payment Gateways | Cloud MLM Software",
  description:
    "Elevate Tonga&apos;s MLM payment gateways with AI telemetry, diaspora insight, and continuity across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/tonga"
  },
  openGraph: {
    title: "Tonga MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Tonga - TO, reimagined with treasury precision, compliance guardrails, and distributor-first experiences."
  }
};

type TongaPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function TongaPaymentGatewayPage({ params }: TongaPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-900 via-slate-950 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(248,113,113,0.35),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.3),transparent_60%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em]">
              Tonga | Payment Evolution
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Tonga MLM payment gateways built for Polynesian scale
              </h1>
              <p className="max-w-2xl text-base text-white/80">
                Cloud MLM Software advances Tonga&apos;s WordPress heritage into an AI-assisted operating platform that
                aligns treasury precision, compliance evidence, and distributor trust.
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
              <Button asChild size="lg" className="gap-2 bg-white text-rose-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Schedule a Tonga strategy session
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10">
                <Link href={demoHref}>Experience the platform</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-lg backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Legacy anchor</p>
            <p className="text-base text-white">
              Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Tonga - TO
            </p>
            <p className="text-sm text-white/80">
              The navigation structure, module references, and gateway commitments from the WordPress build remain
              intact—now supported by compliance records, AI telemetry, and investor-ready narratives.
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
            What Tonga&apos;s leadership gains from the payment transformation
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Executive teams, investors, and field leaders can interrogate every payment signal while the original
            storyline remains recognisable.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {EXECUTIVE_OUTCOMES.map((outcome) => {
            const Icon = outcome.icon;
            return (
              <article
                key={outcome.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{outcome.title}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{outcome.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-rose-100 via-white to-sky-100 py-20 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(248,113,113,0.25),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(14,165,233,0.25),transparent_60%)] dark:bg-none" />
        <div className="container relative space-y-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
            <div className="space-y-6 rounded-3xl border border-rose-500/30 bg-white/85 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-700 dark:text-white/70">
                PSP roster
              </p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
                Gateway roadmap reinvented for executive storytelling
              </h2>
              <p className="text-sm text-muted-foreground dark:text-white/70">
                Every connector from the WordPress experience is catalogued here with the modules and safeguards that now
                support it. The roster remains unchanged; the insight layer is transformed.
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
              {GATEWAY_MOTIONS.map((motion) => {
                const Icon = motion.icon;
                return (
                  <article
                    key={motion.title}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-foreground dark:text-white">{motion.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground dark:text-white/70">{motion.subheading}</p>
                      </div>
                    </div>
                    <ul className="space-y-3 pl-2">
                      {motion.points.map((point) => (
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
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Modules from navigation now operate as a single control tower
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Multi currency, ticketing, automation, vouchers, wallet, backup manager, emails, KYC, and multi-lingual
              workflows collaborate so every department works from the same source of truth.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link href={demoHref}>
                Explore the module workspace
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {MODULE_ANCHORS.map((module) => {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(248,113,113,0.35),transparent_55%),radial-gradient(circle_at_80%_75%,rgba(59,130,246,0.3),transparent_60%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Execution phases that keep Tonga&apos;s leadership in control
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-white/80">
              Each phase ships tangible deliverables—heritage maps, compliance rehearsals, field playbooks, and
              executive dashboards—so the move from WordPress to Next.js feels orchestrated.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <article
                  key={phase.step}
                  className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                        {phase.step}
                      </span>
                      <h3 className="text-base font-semibold">{phase.headline}</h3>
                      <p className="text-sm text-white/80">{phase.description}</p>
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
            Regional bridges that amplify Tonga&apos;s influence
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The redesigned platform keeps pace with regional partners and diaspora investors, sharing AI-driven insights
            across every corridor.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {REGIONAL_BRIDGES.map((bridge) => {
            const Icon = bridge.icon;
            return (
              <article
                key={bridge.region}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/15 text-rose-700 dark:bg-white/10 dark:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{bridge.region}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{bridge.storyline}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container rounded-3xl border border-border/60 bg-gradient-to-br from-rose-100 via-white to-slate-100 p-10 shadow-sm dark:border-white/10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Elevate Tonga&apos;s MLM payment experience with Cloud MLM Software
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Honour your legacy content while equipping executives, investors, and field teams with AI-backed insights
              across every payment promise.
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

