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
  ChartLineUp,
  ChatsCircle,
  CloudArrowUp,
  Compass,
  CurrencyCircleDollar,
  EnvelopeSimple,
  Gift,
  GlobeHemisphereEast,
  Handshake,
  Lightning,
  Megaphone,
  Plugs,
  RocketLaunch,
  ShieldCheck,
  Sparkle,
  StackSimple,
  Ticket,
  Translate,
  Wallet
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroSignal = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayStream = {
  name: string;
  focus: string;
  actions: string[];
  icon: IconType;
  tone: string;
};

type Phase = {
  label: string;
  title: string;
  detail: string;
  icon: IconType;
};

type Module = {
  title: string;
  description: string;
  icon: IconType;
};

type Metric = {
  label: string;
  value: string;
  detail: string;
};

const HERO_SIGNALS: HeroSignal[] = [
  {
    title: "WordPress headline, modernised",
    description:
      "“Ways to accept payments from MLM Software in People’s Democratic Republic of South Sudan – SS” stays intact as we move from export to experience.",
    icon: StackSimple
  },
  {
    title: "Gateway continuity guaranteed",
    description:
      "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout remain the anchor roster for South Sudan revenue programmes.",
    icon: Plugs
  },
  {
    title: "Module intelligence activated",
    description:
      "Multi currency, ticket system, autoresponder, e-voucher, e-wallet, emails, KYC documentation, backup manager, and multilingual journeys are reimagined with AI telemetry.",
    icon: Sparkle
  }
];

const GATEWAY_STREAMS: GatewayStream[] = [
  {
    name: "PayPal + Amazon Pay humanitarian corridor",
    focus: "Support international donors, NGOs, and diaspora-backed commerce without losing time to reconciliation.",
    actions: [
      "Multi currency module balances SSP, USD, EUR, and GBP flows while surfacing tolerance breaches instantly.",
      "Emails module distributes bilingual compliance notices, donor receipts, and settlement briefings."
    ],
    icon: GlobeHemisphereEast,
    tone: "from-emerald-400/25 via-cyan-500/20 to-teal-500/20 dark:from-emerald-900/40 dark:via-cyan-900/30 dark:to-teal-900/30"
  },
  {
    name: "PayU + Stripe digital commerce runway",
    focus: "Enable cross-border subscriptions, e-learning catalogues, and retail roll-outs made for Juba and beyond.",
    actions: [
      "Ticket system module fuses PSP escalations and customer support into SLA-backed dashboards.",
      "Auto responder personalises onboarding, renewal nudges, and regulatory reminders in seconds."
    ],
    icon: Lightning,
    tone: "from-orange-400/25 via-amber-500/20 to-rose-500/20 dark:from-orange-900/40 dark:via-amber-900/30 dark:to-rose-900/30"
  },
  {
    name: "Authorize.Net + Braintree confidence stack",
    focus: "Give North American partners the controls they expect while satisfying Bank of South Sudan oversight.",
    actions: [
      "KYC documentation vault keeps identity, licensing, and AML artefacts inspection ready.",
      "Backup manager snapshots every settlement pack to maintain board-level assurance and audit continuity."
    ],
    icon: ShieldCheck,
    tone: "from-slate-200/40 via-emerald-500/15 to-slate-900/40 dark:from-slate-900/70 dark:via-emerald-700/25 dark:to-slate-950/70"
  },
  {
    name: "Adyen + 2Checkout expansion bridge",
    focus: "Scale regional launches across IGAD and EAC corridors with consistent brand voice and loyalty mechanics.",
    actions: [
      "E-wallet module streams instant commissions with maker-checker thresholds for sensitive ranks.",
      "E-voucher engine powers incentives, training credits, and onboarding kits with redemption intelligence."
    ],
    icon: ChartLineUp,
    tone: "from-indigo-400/25 via-purple-500/20 to-blue-500/20 dark:from-indigo-900/40 dark:via-purple-900/35 dark:to-blue-900/35"
  }
];

const PHASES: Phase[] = [
  {
    label: "Phase 01",
    title: "Recover the WordPress narrative",
    detail:
      "Capture the hero statement, the eight payment gateways, and the module roster exactly as the HTML export presents them.",
    icon: Compass
  },
  {
    label: "Phase 02",
    title: "Align with Central Bank governance",
    detail:
      "Blend Bank of South Sudan directives with Know Your Customer rules so every payout, donor remittance, and PSP escalation is auditable.",
    icon: Handshake
  },
  {
    label: "Phase 03",
    title: "Automate operational rituals",
    detail:
      "Ticketing, autoresponder, multilingual messaging, and backup manager combine to keep delivery squads and leadership in lockstep.",
    icon: ChatsCircle
  },
  {
    label: "Phase 04",
    title: "Expand across IGAD and EAC",
    detail:
      "Leverage Adyen and 2Checkout to enter Ethiopia, Kenya, and Uganda with consistent onboarding, payouts, and AI telemetry.",
    icon: RocketLaunch
  }
];

const MODULES: Module[] = [
  {
    title: "Multi currency module",
    description: "Balances SSP, USD, EUR, and GBP settlements with predictive variance alerts for finance leads.",
    icon: CurrencyCircleDollar
  },
  {
    title: "Ticket system module",
    description: "Routes PSP escalations, compliance checks, and field requests into SLA-governed workflows.",
    icon: Ticket
  },
  {
    title: "Auto responder",
    description: "Delivers bilingual confirmations, renewal reminders, and programme updates within minutes.",
    icon: Megaphone
  },
  {
    title: "E-voucher",
    description: "Issues incentive codes, training passes, and humanitarian stipends with redemption analytics.",
    icon: Gift
  },
  {
    title: "E-wallet",
    description: "Streams instant commissions and reimbursements with maker-checker thresholds tuned for risk.",
    icon: Wallet
  },
  {
    title: "Backup manager",
    description: "Captures immutable snapshots of settlements, support logs, and compliance dossiers.",
    icon: CloudArrowUp
  },
  {
    title: "Emails",
    description: "Keeps stakeholders aligned with digestible compliance, donor, and leadership briefings.",
    icon: EnvelopeSimple
  },
  {
    title: "KYC documentation",
    description: "Stores identity, licensing, and AML artefacts with renewal alerts and reviewer sign-offs.",
    icon: ShieldCheck
  },
  {
    title: "Multilingual system",
    description: "Synchronises English and Arabic experiences across web, mobile, and AI chat assistants.",
    icon: Translate
  }
];

const METRICS: Metric[] = [
  {
    label: "Gateways preserved",
    value: "8",
    detail: "PayPal through 2Checkout retained from the WordPress archive."
  },
  {
    label: "Core modules",
    value: "9",
    detail: "Referenced directly in the legacy navigation and content blocks."
  },
  {
    label: "Automation focus areas",
    value: "4",
    detail: "Compliance, commissioning, support, and multilingual delivery."
  }
];

export const metadata: Metadata = {
  title: "South Sudan MLM Payment Gateways | Cloud MLM Software",
  description:
    "Transform PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout for South Sudan with Cloud MLM Software’s AI-ready operations.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/south-sudan"
  },
  openGraph: {
    title: "South Sudan MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People’s Democratic Republic of South Sudan – now delivered with compliance, automation, and AI telemetry."
  }
};

type SouthSudanPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function SouthSudanPaymentGatewayPage({ params }: SouthSudanPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const gatewayHubHref = buildLocalizedPath("/mlm-software-payment-gateways", locale);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-teal-50 via-white to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-12 h-64 w-64 rounded-full bg-teal-300/40 blur-3xl dark:bg-emerald-900/40" />
          <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl dark:bg-teal-900/30" />
          <div className="absolute -bottom-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-900/30" />
        </div>
        <div className="container relative grid gap-12 lg:grid-cols-[minmax(0,0.6fr),minmax(0,0.4fr)]">
          <div className="space-y-8">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-900 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                Ways to accept payments · South Sudan (SS)
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground dark:text-white sm:text-5xl">
                Ways to accept payments from MLM Software in People’s Democratic Republic of South Sudan – SS
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground dark:text-white/70">
                Cloud MLM Software has already built great systems for the greatest companies. Now the South Sudan WordPress
                export becomes an AI-ready control room covering payments, compliance, and multilingual journeys across IGAD.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="flex h-full flex-col gap-2 rounded-3xl border border-emerald-200/60 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-3xl font-semibold text-foreground dark:text-white">{metric.value}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-800 dark:text-emerald-200">
                    {metric.label}
                  </p>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{metric.detail}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {HERO_SIGNALS.map((signal) => {
                const Icon = signal.icon;
                return (
                  <article
                    key={signal.title}
                    className="flex h-full flex-col gap-3 rounded-[2.5rem] border border-emerald-200/60 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-sm font-semibold text-foreground dark:text-white">{signal.title}</h2>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{signal.description}</p>
                  </article>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Speak with a South Sudan strategist
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-emerald-300 text-emerald-900 hover:bg-emerald-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
              >
                <Link href={demoHref}>
                  Request an AI-powered demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="gap-2 text-emerald-900 hover:bg-emerald-100 hover:text-emerald-900 dark:text-white dark:hover:bg-white/10"
              >
                <Link href={gatewayHubHref}>
                  Explore all payment gateways
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between gap-8 rounded-[3rem] border border-emerald-200/60 bg-white/80 p-10 shadow-lg dark:border-white/10 dark:bg-white/5">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-900 dark:text-emerald-200">
                Thought leadership · Cloud MLM Software
              </p>
              <p className="text-balance text-lg text-foreground dark:text-white">
                Each gateway journey is engineered for compliance-first growth, retaining the WordPress content while
                introducing AI copilots for decision support.
              </p>
            </div>
            <div className="space-y-3 rounded-[2.5rem] border border-emerald-200/60 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 p-8 dark:border-white/10 dark:from-emerald-900/30 dark:via-teal-900/30 dark:to-cyan-900/30">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-900 dark:text-emerald-200">
                Contact acceleration
              </p>
              <p className="text-sm text-muted-foreground dark:text-white/70">
                Finance, technology, and programme leaders can align on a single AI-ready control plane that respects donor
                expectations and regulatory cadence in Juba.
              </p>
              <Button asChild className="gap-2 rounded-full">
                <Link href={pricingHref}>
                  Review pricing pathways
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
            Gateway streams tailored for South Sudan
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
            The WordPress roster of PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout now
            operates with AI supervision, compliance instrumentation, and multilingual outreach.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_STREAMS.map((stream) => {
            const Icon = stream.icon;
            return (
              <article
                key={stream.name}
                className={`flex h-full flex-col gap-5 rounded-[2.5rem] border border-emerald-200/60 bg-gradient-to-br p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 ${stream.tone}`}
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-emerald-900 dark:bg-white/10 dark:text-white">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-foreground dark:text-white">{stream.name}</h3>
                    <p className="text-sm text-muted-foreground dark:text-white/70">{stream.focus}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground dark:text-white/70">
                  {stream.actions.map((action) => (
                    <li key={action} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500 dark:bg-white" aria-hidden />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/60 py-20 dark:bg-slate-950/70">
        <div className="container space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Operating compass for South Sudan programmes
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground dark:text-white/70">
              Each phase protects the legacy content while injecting automation, governance, and AI telemetry for finance,
              compliance, and growth teams.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {PHASES.map((phase) => {
              const Icon = phase.icon;
              return (
                <article
                  key={phase.label}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-200/60 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-800 dark:text-emerald-200">
                        {phase.label}
                      </p>
                      <h3 className="mt-1 text-base font-semibold text-foreground dark:text-white">{phase.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-white/70">{phase.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.58fr),minmax(0,0.42fr)]">
          <div className="space-y-5">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
              Modules referenced in the WordPress export, reimagined
            </h2>
            <p className="text-sm text-muted-foreground dark:text-white/70">
              The navigation links captured in the legacy HTML now deliver AI-enabled orchestration for finance, support,
              compliance, and growth leaders working across South Sudan.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {MODULES.slice(0, 4).map((module) => {
                const Icon = module.icon;
                return (
                  <article
                    key={module.title}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-emerald-200/60 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-800 dark:bg-white/10 dark:text-white">
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
          <div className="space-y-4">
            {MODULES.slice(4).map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="flex h-full flex-col gap-3 rounded-[2.5rem] border border-emerald-200/60 bg-gradient-to-br from-white via-white to-emerald-50 p-5 shadow-sm dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-800 dark:bg-white/10 dark:text-white">
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

      <section className="container">
        <div className="grid gap-10 rounded-[3rem] border border-emerald-200/60 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white shadow-lg dark:border-slate-700/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 lg:grid-cols-[minmax(0,0.62fr),minmax(0,0.38fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-100/90">
              Cloud MLM Software · South Sudan strategy
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Translate the WordPress archive into an AI-enabled command centre
            </h2>
            <p className="text-sm text-emerald-100/80">
              Our consultants orchestrate the retained payment gateways, modules, and compliance artefacts into a modern
              operations blueprint. South Sudan’s finance, compliance, and growth leaders gain clarity, speed, and auditable
              control.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 rounded-full bg-white text-slate-900 hover:bg-emerald-100">
                <Link href={contactHref}>
                  Connect with Cloud MLM Software
                  <Lightning className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 rounded-full border-white/60 text-white hover:bg-white/10"
              >
                <Link href={demoHref}>
                  Schedule a guided walkthrough
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6 rounded-[2.5rem] border border-white/15 bg-white/10 p-8 backdrop-blur">
            <div className="grid gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-100/80">Execution snapshot</p>
              <ul className="space-y-3 text-sm text-emerald-100/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" aria-hidden />
                  <span>PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, Braintree, Adyen, and 2Checkout ready for rollout.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" aria-hidden />
                  <span>Ticketing, multilingual messaging, and backup manager unified for donor-grade accountability.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" aria-hidden />
                  <span>KYC documentation vault and e-wallet automation tuned to Central Bank directives.</span>
                </li>
              </ul>
            </div>
            <p className="text-sm text-emerald-100/80">
              Bring your stakeholders together under one platform that honours the original content while adding enterprise
              reliability for South Sudan and neighbouring markets.
            </p>
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
