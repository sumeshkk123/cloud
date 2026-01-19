import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  Globe2,
  Layers3,
  ShieldAlert,
  Sparkles,
  Workflow
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  Coins,
  Handshake,
  MapTrifold,
  SealQuestion
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Central African Republic MLM Payment Gateways | Cloud MLM Software",
  description:
    "Connect banking, mobile money, and compliance for Central African Republic MLM operations. Cloud MLM Software optimizes BEAC oversight, on/off-grid connectivity, and cross-border flows.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/central-african-republic"
  },
  openGraph: {
    title: "Central African Republic MLM Payment Gateways",
    description:
      "Launch compliant MLM payouts in the Central African Republic by harmonizing banks, mobile wallets, and risk controls with Cloud MLM Software.",
    url: "/mlm-software-payment-gateways/central-african-republic"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  title: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Signal = {
  label: string;
  description: string;
  icon: IconType;
};

type Capability = {
  title: string;
  copy: string;
  bullets: string[];
  icon: IconType;
};

type FlowItem = {
  phase: string;
  title: string;
  description: string;
  artefacts: string[];
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_METRICS: Metric[] = [
  {
    title: "Settlement cadence",
    value: "T+1.8 days",
    detail: "BEAC-aligned batching with alerts for SOCABU, BGFIBank, Orabank, and ECOBANK settlements.",
    icon: Workflow
  },
  {
    title: "Gateway stack",
    value: "9 rails unified",
    detail: "Mobile Money Orange, Moov Africa, PayPal, Stripe, PayU, 2Checkout, and cash agent workflows harmonized.",
    icon: Layers3
  },
  {
    title: "Compliance dossier",
    value: "35 artefacts",
    detail: "AML, KYC, and tax disclosures aligned to CEMAC statutes with localized narratives.",
    icon: ShieldAlert
  }
];

const MARKET_SIGNALS: Signal[] = [
  {
    label: "Mobile money dominance",
    description:
      "70% of payouts flow through Orange Money and Moov Africa. Agents need offline-ready commission and reconciliation tools.",
    icon: BarChart3
  },
  {
    label: "Infrastructure variability",
    description:
      "On/off-grid realities across Bangui and regional hubs require offline capture and resilience for intermittent connectivity.",
    icon: Building2
  },
  {
    label: "Cross-border corridors",
    description:
      "Trade with Cameroon, Chad, and Democratic Republic of Congo demands multi-currency awareness and regional compliance alignment.",
    icon: Globe2
  },
  {
    label: "Agriculture & energy expansion",
    description:
      "Emerging agri and clean-energy MLM segments seek transparent incentive models and local language enablement.",
    icon: Sparkles
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Banking & treasury resilience",
    copy: "Automate settlement and FX control across BEAC-linked institutions and cross-border flows.",
    bullets: [
      "Integrations with ECOBANK, BGFIBank, SOCABU, and Orabank for settlement orchestration.",
      "Treasury dashboard monitoring CFA franc balances, USD exposure, and reserve thresholds.",
      "Automated statement ingest with reconciliation exports for ERP and government reporting."
    ],
    icon: Bank
  },
  {
    title: "Mobile money orchestration",
    copy: "Deliver reliable payouts even with intermittent connectivity or agent turnover.",
    bullets: [
      "Unified Orange Money and Moov Africa workflows with dynamic fee and limit handling.",
      "Offline capture and sync for last-mile leaders operating outside major cities.",
      "Dispute, reversal, and agent commission tooling with auditable handoffs."
    ],
    icon: Handshake
  },
  {
    title: "Distributor intelligence",
    copy: "Empower leaders with contextual insights driving retention and compliance.",
    bullets: [
      "Story-driven dashboards in French and Sango for wellness, agri, and energy networks.",
      "AI narratives highlighting churn risk, compliance anomalies, and growth hotspots.",
      "Document vaults consolidating ID, licensing, and onboarding artefacts."
    ],
    icon: ChartLineUp
  }
];

const IMPLEMENTATION_FLOW: FlowItem[] = [
  {
    phase: "Foundation",
    title: "Diagnostic + roadmap",
    description:
      "Co-create a payment architecture that aligns BEAC policy, mobile money operations, and distributor journeys.",
    artefacts: ["Stack blueprint", "Compliance action log", "Stakeholder alignment brief"],
    icon: MapTrifold
  },
  {
    phase: "Activation",
    title: "Rail deployment",
    description:
      "Enable bank, PSP, and wallet integrations with monitoring for uptime, fees, and reconciliation health.",
    artefacts: ["Telemetry dashboards", "Automation runbooks", "Distributor enablement kits"],
    icon: Workflow
  },
  {
    phase: "Optimization",
    title: "Intelligence loop",
    description:
      "Embed predictive analytics, compliance drills, and continuous training to sustain outcomes.",
    artefacts: ["Predictive insights", "Audit-ready dossiers", "Quarterly performance retros"],
    icon: Coins
  }
];

const FAQS: FAQ[] = [
  {
    question: "How do you handle payouts when connectivity drops?",
    answer:
      "We provide offline capture for mobile money transactions, automatically syncing and reconciling once connectivity returns. Alerts notify finance teams of pending confirmations."
  },
  {
    question: "Can Cloud MLM Software manage multi-country regulatory expectations?",
    answer:
      "Yes. We align BEAC and CEMAC policies with localized processes, offering documentation packs for Central African Republic regulators and neighboring jurisdictions."
  },
  {
    question: "Do distributors receive insights in local languages?",
    answer:
      "Dashboards and communications are available in French and Sango, ensuring clarity for field leadership and compliance teams."
  }
];

type CentralAfricanRepublicPageProps = {
  params: { lang: SupportedLocale };
};

export default function CentralAfricanRepublicPaymentGatewayPage({
  params
}: CentralAfricanRepublicPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="container">
        <div className="relative overflow-hidden rounded-[30px] border border-border/60 bg-gradient-to-br from-slate-950 via-emerald-900 to-indigo-900 px-8 py-16 text-white shadow-2xl">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(79,70,229,0.28),transparent_60%)]" />
          <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-emerald-100 backdrop-blur">
                Central African Republic · Payment Operating Guide
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Power resilient MLM payments across Bangui and regional hubs.
              </h1>
              <p className="max-w-2xl text-base text-slate-200/85">
                Cloud MLM Software brings banking, mobile money, and compliance into one orchestrated platform. We help
                Central African Republic enterprises deliver reliable collections and payouts despite infrastructure variability.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                  <Link href={contactHref}>
                    Plan your CAR launch
                    <ArrowUpRight className="h-4 w-4 text-slate-600" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
                  <Link href={demoHref}>Explore the platform</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.title}
                    className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-lg backdrop-blur transition-colors duration-300 hover:bg-white/15"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-emerald-100/80">{metric.title}</p>
                        <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
                      </div>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-slate-200/75">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Market signals shaping payment strategy
          </h2>
          <p className="text-sm text-muted-foreground">
            Translate frontline realities into the payment rails and controls that accelerate growth.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {MARKET_SIGNALS.map((signal) => {
            const Icon = signal.icon;
            return (
              <article key={signal.label} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-muted/50 p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{signal.label}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{signal.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Capabilities engineered for Central African Republic operations
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Build trust with banking partners, distributors, and regulators through fit-for-purpose modules.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href={pricingHref}>
              Review pricing frameworks
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-8 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">{capability.copy}</p>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {capability.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-primary/70" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted/40">
          <div className="grid gap-10 p-8 lg:grid-cols-[0.85fr,1.15fr] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Implementation flow with Cloud MLM Software
              </h2>
              <p className="text-sm text-muted-foreground">
                Structured phases keep leaders aligned while de-risking activation in frontier markets.
              </p>
            </div>
            <div className="space-y-6">
              {IMPLEMENTATION_FLOW.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.phase} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <div className="flex flex-col">
                          <span className="text-xs uppercase tracking-wider text-muted-foreground">{item.phase}</span>
                          <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {item.artefacts.map((artefact) => (
                            <li key={artefact} className="flex items-start gap-2">
                              <span className="mt-1 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-primary/60" />
                              <span>{artefact}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Frequently asked in Central African Republic engagements
          </h2>
          <p className="text-sm text-muted-foreground">
            Clarity for finance, compliance, and distributor leadership teams as they modernize payments.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {FAQS.map((faq) => (
            <article key={faq.question} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <SealQuestion className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-foreground">{faq.question}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-r from-emerald-500/15 via-indigo-500/15 to-slate-900 px-8 py-12 shadow-xl backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to orchestrate Central African Republic payments?
              </h2>
              <p className="text-sm text-muted-foreground">
                Partner with Cloud MLM Software to unite banking, mobile money, and compliance under one resilient platform.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Design your rollout
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href={demoHref}>
                  View demo environments
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
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
