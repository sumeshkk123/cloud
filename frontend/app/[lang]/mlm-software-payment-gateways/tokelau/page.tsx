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
  Handshake,
  Lightning,
  MapTrifold,
  Plugs,
  ShieldCheck,
  Sparkle,
  StackSimple,
  UsersThree,
  Wallet,
  Waves
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroSignal = {
  heading: string;
  copy: string;
};

type StrategicLayer = {
  title: string;
  detail: string;
  icon: IconType;
};

type GatewayProgram = {
  name: string;
  insight: string;
  bullets: string[];
  icon: IconType;
};

type ModuleThread = {
  name: string;
  description: string;
  icon: IconType;
};

type RolloutStep = {
  label: string;
  title: string;
  description: string;
  icon: IconType;
};

const HERO_SIGNALS: HeroSignal[] = [
  {
    heading: "Atoll-first experience",
    copy: "Built for Fakaofo, Nukunonu, and Atafu leadership teams balancing maritime realities with digital ambitions."
  },
  {
    heading: "Gateway roster intact",
    copy: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain the official connectors."
  },
  {
    heading: "AI-ready operations",
    copy: "Telemetry, compliance history, and distributor sentiment are available in one interface for executives and investors."
  }
];

const STRATEGIC_LAYERS: StrategicLayer[] = [
  {
    title: "Legacy storyline preserved",
    detail:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Tokelau - TK stays visible as the anchor point for the entire experience.",
    icon: StackSimple
  },
  {
    title: "Maritime-ready workflows",
    detail:
      "Offline caching, sync-aware notifications, and escalation paths respect inter-atoll connectivity realities while protecting compliance.",
    icon: Waves
  },
  {
    title: "Diaspora alignment",
    detail:
      "Investors and leaders across New Zealand, Australia, and Samoa receive unified reporting without losing Tokelau context.",
    icon: GlobeHemisphereEast
  }
];

const GATEWAY_PROGRAMS: GatewayProgram[] = [
  {
    name: "PayPal diaspora channel",
    insight: "Connect Tokelau leadership with diaspora hubs across Auckland, Sydney, and Honolulu.",
    bullets: [
      "Multi currency module reconciles NZD, AUD, USD, and WST inflows with treasury variance alerts.",
      "Ticket system module automates AML, refund, and dispute escalations with AI summaries."
    ],
    icon: CurrencyCircleDollar
  },
  {
    name: "Amazon Pay commerce lane",
    insight: "Blend ecommerce expectations with high-touch communication for remote distributors.",
    bullets: [
      "Auto responder handles onboarding, compliance prompts, and nurture journeys in English and Tokelauan.",
      "Backup manager snapshots campaigns before each shipping window or promotion."
    ],
    icon: Sparkle
  },
  {
    name: "Stripe innovation studio",
    insight: "Prototype digital memberships, micro-subscriptions, and AI concierge support with governance in place.",
    bullets: [
      "Multi-Lingual system synchronises English and Tokelauan experiences across web, mobile, and chatbot surfaces.",
      "Ticket system routes engineering and compliance collaboration while preserving audit trails."
    ],
    icon: Lightning
  },
  {
    name: "Braintree omnichannel vault",
    insight: "Tokenise doorstep deliveries, remote enrollments, and seasonal events without losing visibility.",
    bullets: [
      "E-wallet flows manage instant commissions with maker-checker controls for key leadership tiers.",
      "Backup manager protects offline transactions when connectivity dips between atolls."
    ],
    icon: Wallet
  },
  {
    name: "Adyen oversight tower",
    insight: "Review conversion, fraud, and settlement pacing across New Zealand and global corridors.",
    bullets: [
      "Emails module keeps finance, compliance, and operations in sync with PSP updates and reminders.",
      "Multi currency dashboards surface FX exposure for CFO and board briefings."
    ],
    icon: Compass
  },
  {
    name: "2Checkout digital runway",
    insight: "Launch digital resources and premium programmes with taxation narratives ready for investors.",
    bullets: [
      "E-voucher workflows automate incentive distribution with audit-ready documentation.",
      "Multi-Lingual system ensures Tokelau communities and diaspora receive unified messaging."
    ],
    icon: UsersThree
  }
];

const MODULE_THREADS: ModuleThread[] = [
  {
    name: "Multi currency module",
    description: "Balances NZD, USD, AUD, and WST while forecasting treasury exposure for Tokelau leadership.",
    icon: CurrencyCircleDollar
  },
  {
    name: "Ticket system module",
    description: "Manages PSP escalations, compliance checks, and distributor support with SLA clarity.",
    icon: ChatsCircle
  },
  {
    name: "Auto responder",
    description: "Delivers bilingual confirmations, event reminders, and compliance prompts tuned for each audience.",
    icon: Sparkle
  },
  {
    name: "E-Voucher",
    description: "Issues digital incentives for seasonal campaigns, wellness programmes, and micro-learning events.",
    icon: Lightning
  },
  {
    name: "E-Wallet",
    description: "Streams commissions and reimbursements with approval workflows for senior leadership.",
    icon: Wallet
  },
  {
    name: "Backup manager",
    description: "Captures workflows, funnels, and payment rules before deployments or connectivity-sensitive launches.",
    icon: AnchorSimple
  },
  {
    name: "Emails",
    description: "Keeps investors, compliance teams, and field leaders aligned with scheduled summaries and alerts.",
    icon: Plugs
  },
  {
    name: "KYC documentation",
    description: "Monitors passports, national IDs, proof-of-residency, and beneficial ownership attestations.",
    icon: ShieldCheck
  },
  {
    name: "Multi-Lingual system",
    description: "Maintains English and Tokelauan experiences across digital surfaces and AI assistants.",
    icon: GlobeHemisphereEast
  }
];

const ROLLOUT_STEPS: RolloutStep[] = [
  {
    label: "Step 01",
    title: "Heritage mapping",
    description:
      "Capture the exact wording, navigation promises, and payment assurances from the WordPress experience.",
    icon: StackSimple
  },
  {
    label: "Step 02",
    title: "Compliance rehearsal",
    description:
      "Mirror gateway data in sandbox environments so finance and compliance leaders validate settlements and AML checks.",
    icon: ShieldCheck
  },
  {
    label: "Step 03",
    title: "Field enablement",
    description:
      "Provide AI-assisted guides, offline assets, and escalation flows for Fakaofo, Nukunonu, and Atafu leadership teams.",
    icon: Handshake
  },
  {
    label: "Step 04",
    title: "Executive telemetry",
    description:
      "Launch dashboards that track conversion, disputes, FX exposure, and sentiment for investors and board members.",
    icon: Lightning
  }
];

export const metadata: Metadata = {
  title: "Tokelau MLM Payment Gateways | Cloud MLM Software",
  description:
    "Modernise Tokelau&apos;s MLM payment gateways with maritime-ready operations, AI telemetry, and continuity across PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/tokelau"
  },
  openGraph: {
    title: "Tokelau MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Tokelau - TK, reimagined for atoll leadership, diaspora investors, and compliant growth."
  }
};

type TokelauPageProps = {
  params: { lang: SupportedLocale };
};

export default function TokelauPaymentGatewayPage({ params }: TokelauPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-20 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.25),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.25),transparent_55%)] dark:bg-none" />
        <div className="container relative grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-sky-700 dark:border-white/20 dark:bg-white/10 dark:text-white/70">
              Tokelau | Payment Intelligence
            </span>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground dark:text-white sm:text-5xl">
              Tokelau MLM payment gateways orchestrated for maritime realities
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground dark:text-white/70">
              Cloud MLM Software converts Tokelau&apos;s WordPress storyline into an AI-assisted operating layer that
              respects inter-atoll connectivity, diaspora expectations, and investor-grade compliance.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {HERO_SIGNALS.map((signal) => (
                <article
                  key={signal.heading}
                  className="rounded-3xl border border-sky-500/20 bg-white/85 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/10"
                >
                  <h2 className="text-sm font-semibold text-foreground dark:text-white">{signal.heading}</h2>
                  <p className="mt-3 text-sm text-muted-foreground dark:text-white/70">{signal.copy}</p>
                </article>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Schedule a Tokelau strategy session
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href={demoHref}>Explore the live platform</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-sky-500/20 bg-white/85 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700 dark:text-white/70">
              Legacy anchor
            </p>
            <p className="text-base text-foreground dark:text-white">
              Ways to accept payments from MLM Software in People&apos;s Democratic Republic of Tokelau - TK
            </p>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              We retain the navigation flow, module references, and gateway commitments from the WordPress build while
              wrapping every promise in compliance evidence and AI telemetry.
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
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Strategic layers the Tokelau leadership team can rely on
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              Executives, investors, and field leaders gain clear visibility into what changed, what stayed, and how AI
              now supports every decision.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {STRATEGIC_LAYERS.map((layer) => {
              const Icon = layer.icon;
              return (
                <article
                  key={layer.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground dark:text-white">{layer.title}</h3>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{layer.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.35),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.35),transparent_60%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Gateway programmes translated for atoll operations
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-white/80">
              Each connector from the WordPress page now carries executive-level context, module alignment, and AI
              visibility so Tokelau&apos;s leadership can scale confidently.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {GATEWAY_PROGRAMS.map((program) => {
              const Icon = program.icon;
              return (
                <article
                  key={program.name}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold">{program.name}</h3>
                      <p className="mt-1 text-sm text-white/80">{program.insight}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 pl-2">
                    {program.bullets.map((item) => (
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
        <div className="space-y-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Modules from navigation now work together as one system
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            All legacy modules—multi currency, ticketing, auto responder, vouchers, wallet, backup manager, emails, KYC,
            and multi-lingual—operate inside a single control tower with audit trails for every action.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
          {MODULE_THREADS.map((module) => {
            const Icon = module.icon;
            return (
              <article
                key={module.name}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
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

      <section className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-white to-emerald-100 py-20 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(14,165,233,0.25),transparent_55%),radial-gradient(circle_at_85%_75%,rgba(16,185,129,0.25),transparent_55%)] dark:bg-none" />
        <div className="container relative space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Rollout sequence built for Tokelau&apos;s leadership cadence
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Each phase delivers artefacts for sign-off—heritage mapping, compliance rehearsal, field enablement, and
              executive dashboards—so the switch from WordPress feels orchestrated.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {ROLLOUT_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.label}
                  className="rounded-3xl border border-sky-500/20 bg-white/90 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/15 text-sky-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-white/60">
                        {step.label}
                      </span>
                      <h3 className="text-base font-semibold text-foreground dark:text-white">{step.title}</h3>
                      <p className="text-sm text-muted-foreground dark:text-white/70">{step.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container rounded-3xl border border-border/60 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10 text-white shadow-sm">
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Partner with Cloud MLM Software for Tokelau&apos;s next chapter
            </h2>
            <p className="text-sm text-white/80">
              The AI-ready platform honouring Tokelau&apos;s WordPress narrative now gives executives, investors, and
              field teams a dependable operating rhythm across every payment promise.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-100">
              <Link href={contactHref}>
                Talk to a strategist
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10">
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
