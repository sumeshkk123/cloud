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
  Buildings,
  ChartLineUp,
  ClipboardText,
  Compass,
  Cpu,
  GlobeHemisphereWest,
  Handshake,
  Lightning,
  MapTrifold,
  Megaphone,
  ShieldCheck,
  StackSimple,
  UsersThree,
  Waveform
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  title: string;
  description: string;
  icon: IconType;
};

type GatewayFieldNote = {
  gateway: string;
  focus: string;
  outcomes: string[];
  icon: IconType;
};

type ModuleFieldLab = {
  name: string;
  description: string;
  icon: IconType;
  accent: string;
};

type OperationalPath = {
  phase: string;
  insight: string;
  icon: IconType;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    title: "Promise carried forward",
    description:
      "Ways to accept payments from MLM Software in People’s Democratic Republic of Republic of the Congo – CG remains the headline line-for-line.",
    icon: ShieldCheck
  },
  {
    title: "Gateway inventory secured",
    description: "PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, and Braintree stay available for Congo operations.",
    icon: ChartLineUp
  },
  {
    title: "Enterprise continuity",
    description:
      "Cloud MLM Software already builds for top-tier organisations; we extend that confidence with telemetry and contextual storytelling.",
    icon: Buildings
  }
];

const GATEWAY_FIELD_NOTES: GatewayFieldNote[] = [
  {
    gateway: "PayPal — global trust",
    focus: "Support Brazzaville, Pointe-Noire, and diaspora distributors with consistent settlement oversight.",
    outcomes: [
      "Multi currency module reconciles XAF, USD, EUR, and GBP with automated variance tracking.",
      "Ticket system archives dispute notes, tax evidence, and PSP correspondence."
    ],
    icon: StackSimple
  },
  {
    gateway: "Amazon Pay — commerce uplift",
    focus: "Equip digital-first sellers and international affiliates with reliable checkout experiences.",
    outcomes: [
      "Auto responder orchestrates onboarding stories, promotions, and compliance reminders.",
      "Emails hub ensures multilingual delivery across African and international audiences."
    ],
    icon: Megaphone
  },
  {
    gateway: "PayU — continental reach",
    focus: "Bridge Central Africa with European gateways via unified routing and compliance signals.",
    outcomes: [
      "Lightning-fast routing reduces declines by steering payments to optimal processors.",
      "Documentation vault retains onboarding files and regulatory approvals for every partner."
    ],
    icon: Lightning
  },
  {
    gateway: "Stripe — innovation runway",
    focus: "Test AI-led experiences, education platforms, and hybrid commerce without losing compliance footing.",
    outcomes: [
      "Telemetry captures webhook insights and experiment outcomes for product teams.",
      "Ticket workflows translate alerts into accountable actions with SLA tracking."
    ],
    icon: Waveform
  },
  {
    gateway: "Authorize.Net — transatlantic rigour",
    focus: "Connect North American acquiring networks with Congo’s local governance needs.",
    outcomes: [
      "KYC documentation ensures distributor and partner files are regulator-ready.",
      "Emails hub delivers executive summaries on reserves, chargebacks, and approvals."
    ],
    icon: ClipboardText
  },
  {
    gateway: "Braintree — experiential loyalty",
    focus: "Support field activations, events, and ecommerce with one incentive command centre.",
    outcomes: [
      "E-wallet streams payouts with maker-checker control.",
      "E-voucher modules design measurable campaigns tied to analytics."
    ],
    icon: Handshake
  }
];

const MODULE_FIELD_LABS: ModuleFieldLab[] = [
  {
    name: "Multi currency module",
    description: "Present localized pricing, manage FX, and eliminate spreadsheet-based reconciliation.",
    icon: GlobeHemisphereWest,
    accent: "bg-emerald-500/15 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-100"
  },
  {
    name: "Ticket system module",
    description: "Route compliance and PSP support flows with analytics and SLA visibility.",
    icon: ClipboardText,
    accent: "bg-amber-500/15 text-amber-900 dark:bg-amber-500/20 dark:text-amber-100"
  },
  {
    name: "Auto responder",
    description: "Deliver contextual journeys for onboarding, renewals, and product drops.",
    icon: Megaphone,
    accent: "bg-cyan-500/15 text-cyan-900 dark:bg-cyan-500/20 dark:text-cyan-100"
  },
  {
    name: "Emails hub",
    description: "Keep marketing, operational, and executive communications in a single workspace.",
    icon: UsersThree,
    accent: "bg-indigo-500/15 text-indigo-900 dark:bg-indigo-500/20 dark:text-indigo-100"
  },
  {
    name: "KYC documentation",
    description: "Centralise identity, compliance, and contract evidence for auditors.",
    icon: ClipboardText,
    accent: "bg-blue-500/15 text-blue-900 dark:bg-blue-500/20 dark:text-blue-100"
  },
  {
    name: "E-wallet & e-voucher",
    description: "Instant payouts and reward mechanisms carry audit-ready trails.",
    icon: StackSimple,
    accent: "bg-rose-500/15 text-rose-900 dark:bg-rose-500/20 dark:text-rose-100"
  }
];

const OPERATIONAL_PATHS: OperationalPath[] = [
  {
    phase: "Preserve WordPress fidelity",
    insight:
      "Hero copy and module references migrate without change, sustaining SEO equity and stakeholder trust.",
    icon: ShieldCheck
  },
  {
    phase: "Activate telemetry",
    insight: "Dashboards and anomaly alerts surface gateway performance and compliance posture.",
    icon: Cpu
  },
  {
    phase: "Enable cross-team collaboration",
    insight: "Ticket, email, and documentation workflows connect finance, legal, and distributor enablement.",
    icon: Compass
  },
  {
    phase: "Expand regional alliances",
    insight: "Playbooks scale into neighbouring markets like Gabon, Cameroon, and Angola with shared governance.",
    icon: MapTrifold
  }
];

export const metadata: Metadata = {
  title: "Republic of the Congo MLM Payment Gateways | Cloud MLM Software",
  description:
    "Engineer Republic of the Congo’s MLM payment gateways with PayPal, Amazon Pay, PayU, Stripe, Authorize.Net, and Braintree supported by AI-led operations.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/republic-of-the-congo"
  },
  openGraph: {
    title: "Republic of the Congo MLM Payment Gateways",
    description:
      "Ways to accept payments from MLM Software in People’s Democratic Republic of Republic of the Congo – CG, enhanced with analytics and regional insight."
  }
};

type RepublicOfTheCongoPageProps = {
  params: { lang: SupportedLocale };
};

export default function RepublicOfTheCongoPaymentGatewayPage({ params }: RepublicOfTheCongoPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-100 via-white to-lime-100 py-20 dark:from-slate-950 dark:via-emerald-950/40 dark:to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(16,185,129,0.22),transparent_55%),radial-gradient(circle_at_82%_18%,rgba(74,222,128,0.2),transparent_60%),radial-gradient(circle_at_55%_80%,rgba(2,132,199,0.15),transparent_65%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-600/30 bg-white/75 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 shadow-sm dark:border-emerald-300/40 dark:bg-white/10 dark:text-emerald-100">
              Ways to accept payments · Republic of the Congo (CG)
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Republic of the Congo payment gateways with intelligence from day one
              </h1>
              <p className="max-w-3xl text-base text-muted-foreground">
                Ways to accept payments from MLM Software in People’s Democratic Republic of Republic of the Congo – CG
                remains intact while the experience evolves into a strategic, AI-informed hub.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Connect with our Africa desk
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-emerald-600/40 text-emerald-700 hover:bg-emerald-500/10 dark:border-emerald-300/40 dark:text-emerald-100"
              >
                <Link href={demoHref}>
                  Review live demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="space-y-5">
            {HERO_HIGHLIGHTS.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article
                  key={highlight.title}
                  className="rounded-3xl border border-emerald-600/25 bg-white/75 p-6 backdrop-blur transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-base font-semibold text-foreground">{highlight.title}</h2>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Gateway field notes grounded in WordPress copy
          </h2>
          <p className="text-sm text-muted-foreground">
            Cloud MLM Software has already built great systems for the greatest companies. The availability of the
            payment gateways supported for People’s Democratic Republic of Republic of the Congo – CG is honoured with
            narrative, telemetry, and accountability layers.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {GATEWAY_FIELD_NOTES.map((note) => {
            const Icon = note.icon;
            return (
              <article
                key={note.gateway}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 transition hover:-translate-y-1 hover:border-emerald-500/40 dark:border-white/10"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{note.gateway}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{note.focus}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {note.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground/60 dark:bg-white/60" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-900 to-slate-950 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_20%,rgba(52,211,153,0.32),transparent_45%),radial-gradient(circle_at_85%_30%,rgba(74,222,128,0.28),transparent_55%)]" />
        <div className="container relative space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Modules in the operations lab</h2>
            <p className="max-w-3xl text-sm text-white/75">
              Multi currency, ticket system, auto responder, emails, KYC documentation, and e-wallet/e-voucher modules
              migrate from WordPress into a resilient, analytics-backed stack.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULE_FIELD_LABS.map((module) => {
              const Icon = module.icon;
              return (
                <article key={module.name} className="h-full rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${module.accent}`}>
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-white">{module.name}</h3>
                  </div>
                  <p className="mt-3 text-sm text-white/80">{module.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Operational path for Congo leadership
          </h2>
          <p className="text-sm text-muted-foreground">
            Leaders gain a step-by-step view of how WordPress fidelity transforms into strategy, telemetry, and
            regional expansion.
          </p>
        </div>
        <ol className="grid gap-6 md:grid-cols-2">
          {OPERATIONAL_PATHS.map((path) => {
            const Icon = path.icon;
            return (
              <li
                key={path.phase}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{path.phase}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{path.insight}</p>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="container overflow-hidden rounded-3xl border border-emerald-600/30 bg-gradient-to-br from-emerald-100 via-white to-lime-100 p-10 dark:border-emerald-300/30 dark:from-slate-950 dark:via-emerald-950/40 dark:to-slate-950">
        <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Mobilise the Congo gateway programme
            </h2>
            <p className="text-sm text-muted-foreground">
              Partner with Cloud MLM Software to connect WordPress continuity, analytics, and African growth playbooks
              under one roof.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href={contactHref}>
                Book a working session
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-emerald-600/40 text-emerald-700 hover:bg-emerald-500/10 dark:border-emerald-300/40 dark:text-emerald-100"
            >
              <Link href={servicesHref}>
                Explore integration services
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
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

