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
  BarChart2,
  Compass,
  Gauge,
  Globe2,
  Layers3,
  ShieldCheck,
  Waves
} from "lucide-react";
import {
  Bank,
  ChartLineUp,
  Handshake,
  IdentificationBadge,
  MapTrifold,
  SealQuestion
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Cook Islands MLM Payment Gateways | Cloud MLM Software",
  description:
    "Coordinate banking, PSP, and compliance workflows for Cook Islands MLM operations with Cloud MLM Software.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/cook-islands"
  },
  openGraph: {
    title: "Cook Islands MLM Payment Gateways",
    description:
      "Unite Cook Islands banking, PSPs, and distributor tooling within one orchestrated payment platform.",
    url: "/mlm-software-payment-gateways/cook-islands"
  }
};

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type Opportunity = {
  title: string;
  copy: string;
  icon: IconType;
};

type Capability = {
  title: string;
  summary: string;
  bullets: string[];
  icon: IconType;
};

type Stage = {
  step: string;
  focus: string;
  description: string;
  icon: IconType;
};

type FAQ = {
  question: string;
  answer: string;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Settlement cadence",
    value: "T+1.3 days",
    description: "Bank of the Cook Islands and ANZ clearing with NZD and AUD corridor visibility.",
    icon: Gauge
  },
  {
    label: "Gateway portfolio",
    value: "10 integrations",
    description: "Stripe, Adyen, PayPal, Windcave, Square, PayU, and POLi orchestrated with routing telemetry.",
    icon: Layers3
  },
  {
    label: "Compliance artefacts",
    value: "30 documentation packs",
    description: "AML/CFT, Cook Islands FSC requirements, and tax reporting templates with localized narratives.",
    icon: ShieldCheck
  }
];

const OPPORTUNITIES: Opportunity[] = [
  {
    title: "Tourism-driven demand",
    copy: "Seasonal tourism requires reliable pop-up payment experiences and quick distributor onboarding.",
    icon: Waves
  },
  {
    title: "Regional workforce",
    copy: "Distributors across New Zealand, Australia, and Polynesia need multi-currency payouts and multilingual guidance.",
    icon: Globe2
  },
  {
    title: "Compliance vigilance",
    copy: "Cook Islands FSC and AML expectations demand automated reporting and auditable processes.",
    icon: BarChart2
  },
  {
    title: "Connectivity variability",
    copy: "Edge caching and offline capture keep sales moving even when bandwidth drops on outlying islands.",
    icon: Compass
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Banking & treasury alignment",
    summary: "Unify Cook Islands banking partners with liquidity dashboards and reporting automation.",
    bullets: [
      "Integrations with Bank of the Cook Islands, ANZ, and Westpac.",
      "FX-aware dashboards covering NZD, AUD, and USD positions with predictive alerts.",
      "Automated reconciliation exports tailored for local accountants and corporate services."
    ],
    icon: Bank
  },
  {
    title: "PSP & wallet orchestration",
    summary: "Deliver consistent experiences across on-island, online, and regional channels.",
    bullets: [
      "Routing across Stripe, Adyen, PayPal, Windcave, Square, and PayU with fallback logic.",
      "Support for POLi, debit, and offline capture syncing once connectivity stabilizes.",
      "Chargeback automation with evidence vaults accessible to finance and support teams."
    ],
    icon: Handshake
  },
  {
    title: "Distributor intelligence",
    summary: "Empower leaders with insights and compliance cues in English and Cook Islands Māori content blocks.",
    bullets: [
      "Dashboards covering commissions, tax obligations, and stock readiness.",
      "AI nudges surfacing churn risk, training opportunities, and compliance deadlines.",
      "Knowledge base aligned to tourism, wellness, and services verticals."
    ],
    icon: ChartLineUp
  }
];

const STAGES: Stage[] = [
  {
    step: "Blueprint",
    focus: "Discovery + compliance mapping",
    description:
      "Workshops align banking, PSP priorities, and FSC expectations into a sequenced rollout plan.",
    icon: MapTrifold
  },
  {
    step: "Activation",
    focus: "Integration sprints",
    description:
      "Enable payment rails in waves with telemetry dashboards tracking conversion, fees, and uptime.",
    icon: IdentificationBadge
  },
  {
    step: "Optimization",
    focus: "Analytics + compliance rehearsals",
    description:
      "Quarterly reviews surface AI insights, regulator rehearsal outputs, and distributor enablement updates.",
    icon: ChartLineUp
  }
];

const FAQS: FAQ[] = [
  {
    question: "Do you support POLi, Windcave, and other regional PSPs?",
    answer:
      "Yes. We orchestrate Windcave, POLi, Stripe, Adyen, and PayPal, applying routing logic, telemetry, and dispute automation."
  },
  {
    question: "How are Cook Islands FSC and AML requirements managed?",
    answer:
      "Our compliance cockpit automates AML/KYC workflows, maintains audit trails, and produces regulator-ready documentation."
  },
  {
    question: "Can distributors access content in Cook Islands Māori?",
    answer:
      "Dashboards, statements, and knowledge blocks can be localized for Cook Islands Māori and English audiences with role-based permissions."
  }
];

type CookIslandsPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function CookIslandsPaymentGatewayPage({ params }: CookIslandsPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="container">
        <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-gradient-to-br from-slate-950 via-sky-900 to-emerald-900 px-8 py-16 text-white shadow-2xl">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(56,189,248,0.32),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(16,185,129,0.3),transparent_60%)]" />
          <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-sky-100 backdrop-blur">
                Cook Islands · Payment Operating Guide
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Keep Cook Islands distributors and customers in sync with modern payments.
              </h1>
              <p className="max-w-2xl text-base text-slate-200/85">
                Cloud MLM Software harmonizes banking partners, PSPs, and compliance workflows so Cook Islands enterprises can scale with confidence—on island and across the Pacific.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                  <Link href={contactHref}>
                    Plan your Cook Islands rollout
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
                    key={metric.label}
                    className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-lg backdrop-blur transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-sky-100/80">{metric.label}</p>
                        <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
                      </div>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-slate-200/75">{metric.description}</p>
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
            Opportunities guiding your payment blueprint
          </h2>
          <p className="text-sm text-muted-foreground">
            Translate island realities into payment, compliance, and distributor strategies that scale.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {OPPORTUNITIES.map((opportunity) => {
            const Icon = opportunity.icon;
            return (
              <article key={opportunity.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-muted/40 p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{opportunity.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{opportunity.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Capabilities engineered for Cook Islands operations
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Ensure banking, PSP, and distributor teams stay aligned even as demand surges.
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
                  <p className="text-sm text-muted-foreground">{capability.summary}</p>
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
                Implementation stages with Cloud MLM Software
              </h2>
              <p className="text-sm text-muted-foreground">
                Structured stages ensure activation speed while governance keeps pace.
              </p>
            </div>
            <div className="grid gap-6">
              {STAGES.map((stage) => {
                const Icon = stage.icon;
                return (
                  <article key={stage.step} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <div className="flex flex-col">
                          <span className="text-xs uppercase tracking-wider text-muted-foreground">{stage.step}</span>
                          <h3 className="text-lg font-semibold text-foreground">{stage.focus}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{stage.description}</p>
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
            Frequently asked in Cook Islands engagements
          </h2>
          <p className="text-sm text-muted-foreground">
            Address finance, compliance, and distributor questions before they slow momentum.
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
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-r from-sky-500/15 via-emerald-500/15 to-slate-900 px-8 py-12 shadow-xl backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to orchestrate Cook Islands payment excellence?
              </h2>
              <p className="text-sm text-muted-foreground">
                Partner with Cloud MLM Software to harmonize payments, compliance, and distributor empowerment under one platform.
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
                  Explore live environments
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
