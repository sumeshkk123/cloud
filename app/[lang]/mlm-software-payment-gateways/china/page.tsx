import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { AlarmCheck, ArrowUpRight, BadgeCheck, BarChart3, Globe2, Layers3, TrendingUp, ShieldCheck } from "lucide-react";
import {
  Bank,
  ChartLineUp,
  Coins,
  Handshake,
  IdentificationBadge,
  MapTrifold,
  SealQuestion
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "China MLM Payment Gateways | Cloud MLM Software",
  description:
    "Execute compliant MLM payments in China with Alipay, WeChat Pay, UnionPay, and cross-border rails orchestrated by Cloud MLM Software.",
  alternates: {
    canonical: "/mlm-software-payment-gateways/china"
  },
  openGraph: {
    title: "China MLM Payment Gateways",
    description:
      "Launch resilient MLM payment operations in China by uniting domestic wallets, banking partners, and global PSPs with Cloud MLM Software.",
    url: "/mlm-software-payment-gateways/china"
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
  name: string;
  focus: string;
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
    label: "Settlement cadence",
    value: "T+0.7 day avg",
    description: "Alipay, WeChat Pay, and UnionPay clearing synchronized with SAFE FX requirements.",
    icon: AlarmCheck
  },
  {
    label: "Gateway ecosystem",
    value: "16 rails",
    description: "UnionPay, Alipay, WeChat Pay, LianLian, PingPong, Stripe, Adyen, PayPal, Payoneer unified in one orchestration layer.",
    icon: Layers3
  },
  {
    label: "Regulatory artefacts",
    value: "48 dossiers",
    description: "SAMR licensing, data residency, and cross-border e-commerce compliance packs localized for China.",
    icon: ShieldCheck
  }
];

const OPPORTUNITIES: Opportunity[] = [
  {
    title: "Domestic wallet ubiquity",
    copy: "Alipay and WeChat Pay drive consumer trust. Intelligent orchestration keeps conversion high and fraud low.",
    icon: BarChart3
  },
  {
    title: "Cross-border corridors",
    copy: "South-East Asia, Europe, and North America expansion demands multi-entity treasury control and SAFE-aligned FX automation.",
    icon: Globe2
  },
  {
    title: "Regulatory scrutiny",
    copy: "SAMR, MOFCOM, and data laws require auditable processes, consent management, and localized documentation.",
    icon: BadgeCheck
  },
  {
    title: "Innovation velocity",
    copy: "China’s digital-native distributors expect real-time insights, social commerce integration, and AI guidance.",
    icon: TrendingUp
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Domestic payment core",
    summary: "Connect Alipay, WeChat Pay, UnionPay, and local PSPs with risk-aware routing.",
    bullets: [
      "Direct API orchestration for Alipay, WeChat Pay, UnionPay, LianLian, and PingPong.",
      "Dynamic transaction scoring, velocity controls, and device fingerprinting to minimize fraud.",
      "Realtime settlement tracking with SAFE-ready FX reports and fund availability alerts."
    ],
    icon: Handshake
  },
  {
    title: "Global treasury intelligence",
    summary: "Keep multi-entity finance teams aligned on FX, capital controls, and tax obligations.",
    bullets: [
      "Treasury dashboards consolidating RMB, USD, EUR, and SGD with predictive liquidity.",
      "Automated SAFE filings, tax invoices, and cross-border settlement documentation.",
      "Scenario modelling for entity expansion, distributor tiers, and inventory cycles."
    ],
    icon: Bank
  },
  {
    title: "Distributor experience engine",
    summary: "Deliver intelligent insights and compliance cues within WeCom, DingTalk, and mobile dashboards.",
    bullets: [
      "Localized narratives in Simplified Chinese and English with role-based permissions.",
      "AI nudges surfacing churn risk, compliance tasks, and growth opportunities.",
      "Automated knowledge center aligned to SAMR messaging and social commerce best practices."
    ],
    icon: ChartLineUp
  }
];

const IMPLEMENTATION_STAGES: Stage[] = [
  {
    name: "Blueprint",
    focus: "Licensing, stack, and data governance design",
    description:
      "Collaborative workshops define payment architecture, compliance milestones, and data residency strategies across mainland and cross-border entities.",
    artefacts: ["Payment architecture map", "Regulatory action plan", "Localization guidelines"],
    icon: MapTrifold
  },
  {
    name: "Activation",
    focus: "Gateway enablement + telemetry rollout",
    description:
      "Stage-by-stage activation of domestic wallets, UnionPay, and global PSPs with telemetry on conversion, fraud, and settlement health.",
    artefacts: ["Integration runbooks", "Telemetry dashboards", "Distributor enablement packs"],
    icon: IdentificationBadge
  },
  {
    name: "Optimization",
    focus: "Predictive insights + compliance drills",
    description:
      "Quarterly drills simulate regulator requests, while AI models forecast demand, liquidity, and distributor performance.",
    artefacts: ["AI forecasting summaries", "Compliance drill reports", "Executive scorecards"],
    icon: Coins
  }
];

const FAQS: FAQ[] = [
  {
    question: "Do you integrate natively with Alipay and WeChat Pay?",
    answer:
      "Yes. We provide direct integrations with Alipay and WeChat Pay, handling settlement, reconciliation, and fraud telemetry in line with platform requirements."
  },
  {
    question: "How do you support SAFE and cross-border FX compliance?",
    answer:
      "Our treasury engine automates SAFE filings, captures supporting evidence, and synchronizes FX data for finance teams and regulators."
  },
  {
    question: "Can distributor tooling live inside WeCom or DingTalk?",
    answer:
      "Absolutely. We embed dashboards, alerts, and automations directly into WeCom, DingTalk, and mobile portals for seamless adoption."
  }
];

type ChinaPageProps = {
  params: { lang: SupportedLocale } | Promise<{ lang: SupportedLocale }>;
};

export default async function ChinaPaymentGatewayPage({ params }: ChinaPageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved?.lang ?? "en");
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="container">
        <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-gradient-to-br from-slate-950 via-red-900 to-amber-900 px-8 py-16 text-white shadow-2xl">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_25%,rgba(239,68,68,0.32),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.25),transparent_55%)]" />
          <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-amber-100 backdrop-blur">
                China · Payment Operating Framework
              </span>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Orchestrate domestic wallets and cross-border gateways for China-first MLM growth.
              </h1>
              <p className="max-w-2xl text-base text-slate-200/85">
                Cloud MLM Software aligns Alipay, WeChat Pay, UnionPay, and global PSPs within one governance model. We empower Chinese enterprises to deliver frictionless customer payments and distributor payouts while satisfying SAMR and SAFE mandates.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-200">
                  <Link href={contactHref}>
                    Discuss China rollout
                    <ArrowUpRight className="h-4 w-4 text-slate-600" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/70 text-white hover:bg-white/10">
                  <Link href={demoHref}>Tour the live platform</Link>
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
                        <p className="text-xs uppercase tracking-widest text-amber-100/80">{metric.label}</p>
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
            Strategic opportunities guiding your China payment stack
          </h2>
          <p className="text-sm text-muted-foreground">
            Anchor product, compliance, and distributor strategies to market realities across mainland China and global corridors.
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
              Capabilities tuned for China-first operations
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground">
              Each capability reinforces trust with regulators, distributors, and global treasury teams.
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
                Structured phases maintain speed while honouring China&apos;s regulatory expectations.
              </p>
            </div>
            <div className="space-y-6">
              {IMPLEMENTATION_STAGES.map((stage) => {
                const Icon = stage.icon;
                return (
                  <article key={stage.name} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <div className="flex flex-col">
                          <span className="text-xs uppercase tracking-wider text-muted-foreground">{stage.name}</span>
                          <h3 className="text-lg font-semibold text-foreground">{stage.focus}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{stage.description}</p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {stage.artefacts.map((artefact) => (
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
            Frequently asked in China engagements
          </h2>
          <p className="text-sm text-muted-foreground">
            Address the questions Chinese CFOs, compliance teams, and distributor leaders raise when modernizing payments.
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
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-r from-red-500/15 via-amber-500/15 to-slate-900 px-8 py-12 shadow-xl backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to orchestrate China-first payment excellence?
              </h2>
              <p className="text-sm text-muted-foreground">
                Align with Cloud MLM Software to harmonize domestic innovation and global expansion under one intelligent payment layer.
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
