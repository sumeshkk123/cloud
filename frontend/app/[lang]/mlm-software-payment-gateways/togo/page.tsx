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
  Handshake,
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

type StrategicSignal = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayVector = {
  name: string;
  narrative: string;
  highlights: string[];
  icon: IconType;
};

type ModulePlay = {
  title: string;
  detail: string;
  icon: IconType;
};

type TimelineStage = {
  phase: string;
  title: string;
  detail: string;
  icon: IconType;
};

const HERO_METRICS: HeroMetric[] = [
  {
    label: "Primary hubs",
    value: "Lomé / Sokodé / Kara"
  },
  {
    label: "Gateway roster",
    value: "PayPal / Amazon Pay / PayU / Stripe"
  },
  {
    label: "Executive focus",
    value: "Treasury / Compliance / Field trust"
  }
];

const STRATEGIC_SIGNALS: StrategicSignal[] = [
  {
    title: "Legacy narrative protected",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Togo - TG anchors every enhancement while presenting board-ready context.",
    icon: StackSimple
  },
  {
    title: "Gateway continuity",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout stay the official connectors with richer telemetry and audit history.",
    icon: Plugs
  },
  {
    title: "Diaspora alignment",
    description:
      "Finance teams harmonise inflows from West African corridors, EU investors, and North American leaders without breaking treasury cadence.",
    icon: GlobeHemisphereWest
  },
  {
    title: "Field resilience",
    description:
      "Distributor journeys adapt to varying connectivity and payment preferences while keeping compliance signals visible for leadership.",
    icon: AnchorSimple
  }
];

const GATEWAY_VECTORS: GatewayVector[] = [
  {
    name: "PayPal expansion lane",
    narrative: "Serve diaspora leaders in Paris, Toronto, and Accra while keeping Lomé finance teams in control.",
    highlights: [
      "Multi currency module balances XOF, EUR, USD, and CAD with treasury-ready variance alerts.",
      "Ticket system module bundles AML, dispute, and chargeback escalations with AI-generated summaries."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay commerce mesh",
    narrative: "Blend ecommerce-grade experiences with culturally tuned onboarding for wellness and education programmes.",
    highlights: [
      "Auto responder orchestrates bilingual confirmations and nurture journeys for leadership teams and distributors.",
      "Backup manager preserves promotional funnels before every seasonal launch."
    ],
    icon: Sparkle
  },
  {
    name: "PayU regional bridge",
    narrative: "Unlock payments across ECOWAS corridors without compromising Togolese compliance expectations.",
    highlights: [
      "Emails module keeps compliance, finance, and operations aligned on PSP notices and settlement milestones.",
      "KYC documentation vault tracks ID expiries, proof-of-address, and beneficial ownership updates."
    ],
    icon: MapTrifold
  },
  {
    name: "Stripe experimentation studio",
    narrative: "Prototype subscriptions, AI concierge, and digital kits with instrumentation executives can interrogate.",
    highlights: [
      "Multi-Lingual system synchronises French and English journeys across web, mobile, and chatbot surfaces.",
      "Ticket system routing ensures engineering, compliance, and finance collaborate on experimentation safely."
    ],
    icon: Lightning
  },
  {
    name: "Authorize.Net governance lane",
    narrative: "Blend North American expectations with Togolese regulatory oversight to support investor confidence.",
    highlights: [
      "Multi currency module reconciles USD settlements against local banking partners with CFO-grade reporting.",
      "KYC documentation locks down sanction screening, PEP tracking, and merchant onboarding dossiers."
    ],
    icon: ShieldCheck
  },
  {
    name: "Braintree omnichannel vault",
    narrative: "Tokenise field sales, remote enrollments, and digital add-ons without losing reconciliation clarity.",
    highlights: [
      "E-wallet journeys deliver instant commissions with maker-checker controls for sensitive ranks.",
      "Backup manager snapshots offline transactions for regions with intermittent connectivity."
    ],
    icon: Wallet
  },
  {
    name: "Adyen oversight tower",
    narrative: "Monitor conversion, fraud, and treasury signals across EU and African corridors from one console.",
    highlights: [
      "Multi currency dashboards surface FX exposure and settlement pacing for CFO and board sessions.",
      "Emails module distributes scheme and regulatory updates with recorded read receipts."
    ],
    icon: Compass
  },
  {
    name: "2Checkout digital runway",
    narrative: "Launch digital experiences and premium content with tax evidence and compliance stories ready to share.",
    highlights: [
      "E-voucher workflows automate incentive fulfilment while maintaining audit trails.",
      "Multi-Lingual narratives keep diaspora communities aligned with Togolese headquarters."
    ],
    icon: UsersThree
  }
];

const MODULE_PLAYS: ModulePlay[] = [
  {
    title: "Multi currency module",
    detail: "Balances XOF, EUR, USD, CAD, and NGN receivables to give the CFO and board immediate visibility.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    detail: "Captures PSP escalations, compliance checks, and distributor support with SLA-focused workflows.",
    icon: ChatsCircle
  },
  {
    title: "Auto responder",
    detail: "Delivers multilingual confirmations, webinar invites, and compliance prompts tailored for each audience.",
    icon: Sparkle
  },
  {
    title: "E-Voucher",
    detail: "Distributes campaign incentives and experiential rewards with approval trails leadership trusts.",
    icon: Lightning
  },
  {
    title: "E-Wallet",
    detail: "Streams instant commissions and reimbursements with maker-checker thresholds for senior ranks.",
    icon: Wallet
  },
  {
    title: "Backup manager",
    detail: "Preserves workflows, funnels, and payment rules before every release or seasonal push.",
    icon: AnchorSimple
  },
  {
    title: "Emails",
    detail: "Keeps investors, compliance officers, and field leaders synchronised with scheduling and tracking.",
    icon: Plugs
  },
  {
    title: "KYC documentation",
    detail: "Maintains national IDs, passports, proof-of-address, and beneficial ownership records with expiry alerts.",
    icon: ShieldCheck
  },
  {
    title: "Multi-Lingual system",
    detail: "Aligns French, English, and local dialect communications across web, mobile, and AI agents.",
    icon: GlobeHemisphereWest
  }
];

const TIMELINE_STAGES: TimelineStage[] = [
  {
    phase: "01 - Discovery cadence",
    title: "Map legacy WordPress assets into the Togo command centre",
    detail:
      "We catalogue navigation promises, landing pages, and payment assurances so nothing from the previous experience is lost.",
    icon: Compass
  },
  {
    phase: "02 - Compliance alignment",
    title: "Mirror PSP data and AML checks in sandbox environments",
    detail:
      "Finance and compliance leaders validate settlements, chargebacks, and sanction screenings before the go-live cutover.",
    icon: ShieldCheck
  },
  {
    phase: "03 - Field enablement",
    title: "Equip Lomé, Sokodé, and Kara teams with AI-assisted playbooks",
    detail:
      "Distributors receive guided walkthroughs, offline aids, and escalation routes tailored for their operating reality.",
    icon: Handshake
  },
  {
    phase: "04 - Executive telemetry",
    title: "Launch dashboards that keep leadership and investors aligned",
    detail:
      "C-suite leaders monitor conversion, FX exposure, disputes, and sentiment from a single pane of glass.",
    icon: Lightning
  }
];

export const metadata: Metadata = {
  title: "Togo MLM Payment Gateways | Cloud MLM Software",
  description:
    "Reimagine Togo&apos;s MLM payment gateways with AI-ready compliance, diaspora corridor insights, and unified operations across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/togo"
  },
  openGraph: {
    title: "Togo MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Togo - TG, now elevated with treasury precision, compliance guardrails, and distributor-first experiences."
  }
};

type TogoPageProps = {
  params: { lang: SupportedLocale };
};

export default function TogoPaymentGatewayPage({ params }: TogoPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_85%_30%,rgba(6,182,212,0.35),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.25),transparent_60%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em]">
              Togo | Payment Orchestration
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Togo MLM payment gateways engineered for cross-border confidence
              </h1>
              <p className="max-w-2xl text-base text-white/80">
                Cloud MLM Software translates Togo&apos;s WordPress legacy into an AI-ready operating system that aligns
                diaspora expectations, domestic compliance, and investor-grade reporting.
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-3">
              {HERO_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">{metric.label}</dt>
                  <dd className="mt-3 text-sm font-medium text-white">{metric.value}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-emerald-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Schedule a Togo strategy session
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10">
                <Link href={demoHref}>Experience the live platform</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-lg backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Legacy anchor</p>
            <p className="text-base text-white">
              Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Togo - TG
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/80">
                Every navigation promise, payment roster, and module reference from the WordPress experience remains in
                place—now elevated with compliance history, AI telemetry, and leadership-ready storytelling.
              </p>
              <Button asChild variant="secondary" size="lg" className="mt-6 w-full gap-2 bg-white/10 text-white">
                <Link href={pricingHref}>
                  Review pricing frameworks
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            What leadership gains with the Togo payment transformation
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            Executive teams, investors, and field leaders receive unified visibility into every payment promise while
            the heritage WordPress content stays recognisable.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STRATEGIC_SIGNALS.map((signal) => {
            const Icon = signal.icon;
            return (
              <article
                key={signal.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground dark:text-white">{signal.title}</h3>
                <p className="text-sm text-muted-foreground dark:text-white/70">{signal.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-sky-100 py-20 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.25),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(14,165,233,0.25),transparent_60%)] dark:bg-none" />
        <div className="container relative space-y-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
            <div className="space-y-6 rounded-3xl border border-emerald-500/20 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700 dark:text-white/70">
                Gateway frameworks
              </p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
                Eight payment vectors reimagined for executive clarity
              </h2>
              <p className="text-sm text-muted-foreground dark:text-white/70">
                Every connector from the WordPress page is still here—now described in board language with the modules
                and safeguards that keep revenue, compliance, and distributors aligned.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-emerald-500/20 bg-white/80 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:text-white/70">
                PSP roster
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
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {GATEWAY_VECTORS.map((vector) => {
              const Icon = vector.icon;
              return (
                <article
                  key={vector.name}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-foreground dark:text-white">{vector.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground dark:text-white/70">{vector.narrative}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 pl-2">
                    {vector.highlights.map((item) => (
                      <li
                        key={item}
                        className="rounded-2xl border border-border/50 bg-background/70 px-4 py-3 text-sm text-muted-foreground shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white/70"
                      >
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
        <div className="grid gap-8 lg:grid-cols-[0.85fr,1.15fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Modules lifted from navigation into a single platform
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              The modules referenced throughout the legacy navigation now operate as one connected workspace—ready for
              CFO updates, compliance reviews, and distributor coaching sessions.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link href={demoHref}>
                Walk through the module suite
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {MODULE_PLAYS.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{module.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{module.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_75%_75%,rgba(6,182,212,0.35),transparent_60%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Timeline that keeps Togolese leadership informed at every step
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-white/80">
              Each phase delivers tangible evidence—legacy mapping, compliance rehearsals, field enablement, and
              executive dashboards—so the board can sign off with confidence.
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
                      <h3 className="text-base font-semibold">{stage.title}</h3>
                      <p className="text-sm text-white/80">{stage.detail}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container rounded-3xl border border-border/60 bg-gradient-to-br from-emerald-50 via-white to-sky-100 p-10 shadow-sm dark:border-white/10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Elevate Togo&apos;s MLM payment experience with Cloud MLM Software
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Our AI-ready platform keeps your payment gateways, modules, and executive reporting synchronised so that
              every stakeholder—from Lomé headquarters to the global diaspora—acts with certainty.
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
