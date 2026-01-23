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
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Briefcase,
  Compass,
  Globe2,
  Sailboat,
  ShieldCheck,
  Waves
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  Handshake,
  IdentificationBadge,
  SealQuestion
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Cayman Islands MLM Payment Gateways | Cloud MLM Software",
  description:
    "Orchestrate Cayman Islands MLM payments with banking, PSP, and compliance excellence. Cloud MLM Software aligns CIMA oversight with tourism and financial services growth.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/cayman-islands"
  },
  openGraph: {
    title: "Cayman Islands MLM Payment Gateways",
    description:
      "Launch compliant MLM payment operations in the Cayman Islands with bank, PSP, and corporate service integrations from Cloud MLM Software.",
    url: "/mlm-software-payment-gateways/cayman-islands"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Contour = {
  title: string;
  description: string;
  icon: IconType;
};

type Capability = {
  title: string;
  body: string;
  bullets: string[];
  icon: IconType;
};

type TimelineEvent = {
  title: string;
  description: string;
  timeline: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Settlement model",
    value: "T+1 business day",
    detail: "Butterfield, Cayman National, and RBC Caribbean clearing with USD and KYD parity tracking.",
    icon: Waves
  },
  {
    label: "Gateway coverage",
    value: "12 live PSPs",
    detail: "Stripe, Adyen, PayPal, PayU, BlueSnap, Authorize.Net, 2Checkout, and local POS partners orchestrated in one brain.",
    icon: Globe2
  },
  {
    label: "Compliance dossier",
    value: "38 artefacts",
    detail: "CIMA, CRS/FATCA, and economic substance documentation ready for regulators and advisors.",
    icon: ShieldCheck
  }
];

const MARKET_CONTOURS: Contour[] = [
  {
    title: "Financial services gravity",
    description:
      "High-value affiliates expect tiered commissions, multi-jurisdiction payments, and spotless audit trails that satisfy corporate service providers.",
    icon: Briefcase
  },
  {
    title: "Tourism and lifestyle peaks",
    description:
      "Seasonal surges tied to tourism and wellness events require dynamic liquidity buffers and smart routing to maintain uptime.",
    icon: Sailboat
  },
  {
    title: "Regulatory coordination",
    description:
      "CIMA, CRS/FATCA, and anti-money laundering frameworks demand evidence-ready processes across every cash inflow and payout.",
    icon: ShieldCheck
  },
  {
    title: "Cross-border orchestration",
    description:
      "MLM leaders frequently operate across the US, Canada, and LatAm, calling for real-time FX awareness and tax documentation.",
    icon: Compass
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Banking & treasury control",
    body: "Connect Cayman banking partners with automated settlements and evidence trails.",
    bullets: [
      "Integrations with Butterfield, Cayman National Bank, and RBC Caribbean.",
      "Liquidity dashboards with USD/KYD visibility and capital adequacy alerts.",
      "Automated reconciliation exports compatible with trust and corporate service providers."
    ],
    icon: Bank
  },
  {
    title: "PSP and routing intelligence",
    body: "Route transactions and payouts to maximize conversion while minimizing fees.",
    bullets: [
      "Smart failover across Stripe, Adyen, PayPal, PayU, BlueSnap, and 2Checkout.",
      "Card, ACH, SEPA Instant, and wallet orchestration with telemetry on latency and decline drivers.",
      "Dispute automation with case evidence packages aligned to CIMA and card network requirements."
    ],
    icon: Handshake
  },
  {
    title: "Distributor trust & insight",
    body: "Deliver commission clarity with compliance-friendly self-service.",
    bullets: [
      "Role-based dashboards covering tax residency, cross-border payouts, and performance trends.",
      "AI narratives that surface churn risk, compliance gaps, and upsell opportunity signals.",
      "Document vaults for KYC, contracts, and economic substance attestations."
    ],
    icon: ChartLineUp
  }
];

const TIMELINE: TimelineEvent[] = [
  {
    title: "Gateway diagnostics",
    description:
      "Map existing PSPs, banks, and corporate service providers. Deliver a reconciled view of fees, compliance posture, and quick wins.",
    timeline: "Weeks 1-3",
    icon: IdentificationBadge
  },
  {
    title: "Activation sprints",
    description:
      "Enable upgraded PSP routing, automate settlements, and deploy distributor dashboards with bilingual guidance.",
    timeline: "Weeks 4-12",
    icon: ArrowRight
  },
  {
    title: "Optimization loop",
    description:
      "Blend predictive analytics, compliance drills, and data automation to maintain regulator trust and field confidence.",
    timeline: "Ongoing",
    icon: BarChart3
  }
];

const FAQS: FAQ[] = [
  {
    question: "Can you integrate with Cayman Islands banking partners?",
    answer:
      "Yes. We connect to Butterfield, Cayman National, and RBC Caribbean via secure data feeds, automating settlements, reconciliation, and treasury alerts."
  },
  {
    question: "How is CIMA compliance managed?",
    answer:
      "Our platform produces CIMA-ready AML/KYC evidence, economic substance reporting, and CRS/FATCA documentation with role-based approvals."
  },
  {
    question: "Do you support cross-border commission payouts?",
    answer:
      "We orchestrate KYD, USD, and CAD payouts via bank transfers, cards, and digital wallets, applying tax and residency rules automatically."
  }
];

type CaymanIslandsPageProps = {
  params: { lang: SupportedLocale };
};

export default function CaymanIslandsPaymentGatewayPage({ params }: CaymanIslandsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="container">
        <div className="relative overflow-hidden rounded-[28px] border border-border/60 bg-gradient-to-br from-slate-950 via-cyan-900 to-emerald-800 px-8 py-16 text-white shadow-2xl">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.3),transparent_55%),radial-gradient(circle_at_85%_35%,rgba(15,118,110,0.3),transparent_55%)]" />
          <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-cyan-100 backdrop-blur">
                Cayman Islands · Payment Operating System
              </div>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Anchor Cayman MLM growth with regulated, resilient payments.
              </h1>
              <p className="max-w-2xl text-base text-slate-200/85">
                Cloud MLM Software connects Cayman banking partners, international PSPs, and compliance oversight into a
                single orchestrated experience. Delight sophisticated distributors while satisfying regulators and service providers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                  <Link href={contactHref}>
                    Discuss Cayman rollout
                    <ArrowUpRight className="h-4 w-4 text-slate-600" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/70 text-white hover:bg-white/10"
                >
                  <Link href={demoHref}>See platform demo</Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-lg backdrop-blur transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-cyan-100/80">{metric.label}</p>
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
            Understand Cayman market contours
          </h2>
          <p className="text-sm text-muted-foreground">
            Align your payment architecture with the realities of Cayman finance, tourism, and compliance.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {MARKET_CONTOURS.map((contour) => {
            const Icon = contour.icon;
            return (
              <article key={contour.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-muted/50 p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{contour.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{contour.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Capabilities that keep Cayman operations audit-ready
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Each capability is engineered for resilience, trust, and scale across high-value segments.
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
                  <p className="text-sm text-muted-foreground">{capability.body}</p>
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
          <div className="grid gap-10 p-8 lg:grid-cols-[0.8fr,1.2fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Transformation timeline
              </h2>
              <p className="text-sm text-muted-foreground">
                Structured sprints keep stakeholders aligned from diagnostics to optimization.
              </p>
            </div>
            <div className="grid gap-6">
              {TIMELINE.map((event) => {
                const Icon = event.icon;
                return (
                  <article key={event.title} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">{event.timeline}</p>
                        <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">{event.description}</p>
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
            Frequently asked in Cayman engagements
          </h2>
          <p className="text-sm text-muted-foreground">
            We capture and answer the questions raised by Cayman CFOs, compliance leaders, and distributor councils.
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
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-r from-cyan-500/15 via-emerald-500/15 to-slate-900 px-8 py-12 shadow-xl backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to orchestrate Cayman-focused payment excellence?
              </h2>
              <p className="text-sm text-muted-foreground">
                Align with Cloud MLM Software to unite regulators, partners, and field leaders around a modern payment stack.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href={contactHref}>
                  Plan your rollout
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link href={demoHref}>
                  Discover live environments
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
