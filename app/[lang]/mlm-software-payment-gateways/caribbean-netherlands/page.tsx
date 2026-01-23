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
  Compass,
  Globe,
  LifeBuoy,
  LineChart,
  Network,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { Bank, ChartLineUp, MapTrifold, SealQuestion, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Caribbean Netherlands MLM Payment Gateways | Cloud MLM Software",
  description:
    "Activate PSPs, banking, and compliance for Caribbean Netherlands MLM operations. Cloud MLM Software orchestrates BES island realities with cross-border commerce.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/caribbean-netherlands"
  },
  openGraph: {
    title: "Caribbean Netherlands MLM Payment Gateways",
    description:
      "Launch compliant MLM payment flows across Bonaire, Sint Eustatius, and Saba with Cloud MLM Software’s banking and PSP orchestration.",
    url: "/mlm-software-payment-gateways/caribbean-netherlands"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  title: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Opportunity = {
  label: string;
  description: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type JourneyStep = {
  phase: string;
  focus: string;
  description: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_HIGHLIGHTS: Highlight[] = [
  {
    title: "Settlement window",
    value: "T+1.5 days",
    detail: "Banco di Caribe and MCB orchestration with FX buffers for USD and ANG cash flows.",
    icon: Compass
  },
  {
    title: "Gateway mix",
    value: "11 providers",
    detail: "Stripe, Adyen, PayPal, Cielo, 2Checkout, Cardknox, and regional acquirers stitched into one routing layer.",
    icon: Network
  },
  {
    title: "Compliance dossiers",
    value: "31 artefacts",
    detail: "Dutch Central Bank, BES AML, and EU data safeguards with localized document packs.",
    icon: ShieldCheck
  }
];

const OPPORTUNITIES: Opportunity[] = [
  {
    label: "Multicurrency diaspora flows",
    description:
      "Automate USD and EUR settlements for travel, marine services, and wellness networks serving diaspora communities.",
    icon: Globe
  },
  {
    label: "Tourism seasonality",
    description:
      "Predict liquidity swings tied to cruise and dive seasons, aligning PSP fees and reserve policies to peak demand.",
    icon: LifeBuoy
  },
  {
    label: "Island-specific compliance",
    description:
      "Bridge BES regulations with Netherlands oversight, ensuring KYC, tax, and data residency hold across islands.",
    icon: Bank
  },
  {
    label: "Hybrid sales motions",
    description:
      "Blend in-person pop-ups and ecommerce funnels with unified inventory, commission, and settlement telemetry.",
    icon: UsersThree
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Banking & FX nucleus",
    summary: "Anchor BES banking while harmonizing USD, EUR, and ANG treasury mandates.",
    bullets: [
      "Direct connectivity to Banco di Caribe, Maduro & Curiel’s Bank, and RBC Caribbean.",
      "Automated FX conversions with margin controls and threshold alerts for treasury teams.",
      "Structured settlement schedules to ease inter-island liquidity transfers."
    ],
    icon: ChartLineUp
  },
  {
    title: "PSP & wallet convergence",
    summary: "Engineer consistent customer and distributor experiences across diverse rails.",
    bullets: [
      "Smart routing across Stripe, Adyen, PayPal, Cielo, Cardknox, and local POS terminals.",
      "Offline capture support for intermittent connectivity on Saba and Sint Eustatius.",
      "Chargeback evidence vaults and compliance workflows aligned to Dutch standards."
    ],
    icon: Sparkles
  },
  {
    title: "Field intelligence studio",
    summary: "Equip leaders with narrative-rich dashboards supporting tourism and wellness verticals.",
    bullets: [
      "Localized storytelling modules across English, Papiamentu, and Dutch touchpoints.",
      "Commission transparency with multi-currency breakdowns and tax-ready exports.",
      "AI nudges highlighting island-specific growth hotspots and distributor health."
    ],
    icon: LineChart
  }
];

const JOURNEY: JourneyStep[] = [
  {
    phase: "Blueprint",
    focus: "Gateway and compliance alignment",
    description:
      "Workshops with finance, compliance, and island managers culminate in a documented payment stack and regulator-ready plan.",
    icon: MapTrifold
  },
  {
    phase: "Activation",
    focus: "Stack deployment & telemetry",
    description:
      "Rolling enablement of banking, PSP, and wallet rails with monitoring on uptime, fees, and FX variances.",
    icon: Sparkles
  },
  {
    phase: "Optimization",
    focus: "AI-driven scaling",
    description:
      "Predictive modelling on seasonal demand, distributor churn, and cross-island expansion opportunities.",
    icon: ChartLineUp
  }
];

const FAQS: FAQ[] = [
  {
    question: "How do you manage multi-currency settlements for the BES islands?",
    answer:
      "We orchestrate USD, EUR, and ANG flows simultaneously, applying FX buffers, treasury alerts, and settlement batching aligned to banking partners on each island."
  },
  {
    question: "Can Cloud MLM Software support offline payment capture?",
    answer:
      "Yes. We provide offline capture for field events, syncing card and cash transactions once connectivity stabilizes, while maintaining audit logs."
  },
  {
    question: "What compliance artefacts are provided for BES regulations?",
    answer:
      "Clients receive AML/KYC checklists, tax documentation templates, and data governance policies aligned with Dutch Central Bank expectations."
  }
];

type CaribbeanNetherlandsPageProps = {
  params: { lang: SupportedLocale };
};

export default function CaribbeanNetherlandsPaymentGatewayPage({
  params
}: CaribbeanNetherlandsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="container">
        <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-gradient-to-bl from-sky-900 via-slate-950 to-emerald-900 px-6 py-16 text-white shadow-2xl lg:px-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.3),transparent_60%),radial-gradient(circle_at_85%_85%,rgba(99,102,241,0.25),transparent_60%)]" />
          <div className="grid gap-12 lg:grid-cols-[1.3fr,0.7fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-emerald-100 backdrop-blur">
                Caribbean Netherlands · Payment Field Manual
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Harmonize BES island payments with cross-border ambition.
              </h1>
              <p className="max-w-2xl text-base text-slate-200/85">
                Cloud MLM Software unites regional banking, global PSPs, and island-specific compliance into one
                orchestrated experience. Delight distributors and customers across Bonaire, Sint Eustatius, and Saba while staying audit-ready.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                  <Link href={contactHref}>
                    Schedule an island strategy session
                    <ArrowUpRight className="h-4 w-4 text-slate-600" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/70 text-white hover:bg-white/10"
                >
                  <Link href={demoHref}>View platform walkthrough</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              {HERO_HIGHLIGHTS.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <article
                    key={highlight.title}
                    className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-lg backdrop-blur transition-colors duration-300 hover:bg-white/15"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-emerald-200/80">{highlight.title}</p>
                        <p className="mt-2 text-2xl font-semibold text-white">{highlight.value}</p>
                      </div>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-slate-200/70">{highlight.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Market opportunities guiding your payment stack
          </h2>
          <p className="text-sm text-muted-foreground">
            Map tourism, diaspora, and island regulatory realities to the payment rails that accelerate growth.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {OPPORTUNITIES.map((opportunity) => {
            const Icon = opportunity.icon;
            return (
              <article key={opportunity.label} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-muted/40 p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{opportunity.label}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{opportunity.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Pillars for resilient BES payment orchestration
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Each pillar anchors your ability to serve distributors, tourists, and partners with confidence.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href={pricingHref}>
              Explore pricing playbooks
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-8 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.summary}</p>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <CheckIcon />
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
          <div className="grid gap-10 p-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Journey with Cloud MLM Software
              </h2>
              <p className="text-sm text-muted-foreground">
                We make island-focused payment modernization predictable—from blueprint to optimization.
              </p>
            </div>
            <div className="grid gap-6">
              {JOURNEY.map((step) => {
                const Icon = step.icon;
                return (
                  <article key={step.phase} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">{step.phase}</p>
                        <h3 className="text-lg font-semibold text-foreground">{step.focus}</h3>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">{step.description}</p>
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
            Frequently asked by island leadership teams
          </h2>
          <p className="text-sm text-muted-foreground">
            We capture the questions that surface during payment readiness, so you can move forward with clarity.
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
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-r from-emerald-500/15 via-sky-600/15 to-slate-900 px-8 py-12 shadow-xl backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Accelerate BES-ready payment orchestration
              </h2>
              <p className="text-sm text-muted-foreground">
                Unite island realities with world-class payment experiences built on Cloud MLM Software.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Start your payment roadmap
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href={demoHref}>
                  Explore demo environments
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

function CheckIcon() {
  return (
    <span className="mt-1 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
      <ShieldCheck className="h-3 w-3" aria-hidden />
    </span>
  );
}

function resolveLocale(lang: string): Locale {
  if (!isSupportedLocale(lang)) {
    return i18n.defaultLocale as Locale;
  }

  return lang as Locale;
}
