import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Bot,
  Coins,
  GaugeCircle,
  Layers,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Benefit = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Module = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type WorkflowStep = {
  title: string;
  description: string;
  icon: IconType;
};

type AiEnhancement = {
  year: string;
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_STATS: Stat[] = [
  {
    label: "Digital assets supported",
    value: "220+",
    detail: "Cryptocurrencies, stablecoins, and tokens managed across customer programmes.",
    icon: Coins
  },
  {
    label: "Automation coverage",
    value: "88%",
    detail: "Treasury, payout, and compliance workflows handled by the crypto engine.",
    icon: Workflow
  },
  {
    label: "Exchange integrations",
    value: "35",
    detail: "Direct API connectivity to liquidity, pricing, and custody partners.",
    icon: Activity
  },
  {
    label: "AI copilots launched",
    value: "2025",
    detail: "Copilots flag anomalies, summarise risks, and recommend treasury actions in real time.",
    icon: Sparkles
  }
];

const BENEFITS: Benefit[] = [
  {
    title: "Token-ready compensation",
    description:
      "Launch hybrid fiat and crypto rewards with configurable guardrails for volatility, tax, and liquidity.",
    icon: GaugeCircle,
    bullets: [
      "Real-time pricing feeds keep payouts aligned with market rates",
      "Vesting, lock-up, and withdrawal policies tailored per rank",
      "Scenario planner forecasts profitability before launch"
    ]
  },
  {
    title: "Enterprise-grade security",
    description:
      "Custody integrations, approval workflows, and chain analytics protect every transaction.",
    icon: ShieldCheck,
    bullets: [
      "Multi-signature wallets with policy-based access",
      "Automated AML/KYC and travel rule compliance",
      "Immutable audit trails for regulators and banking partners"
    ]
  },
  {
    title: "Insight on autopilot",
    description:
      "Dashboards and copilots keep finance, operations, and compliance aligned on actionable data.",
    icon: Bot,
    bullets: [
      "Predictive alerts highlight treasury or payout anomalies",
      "Narrative briefings summarise weekly performance",
      "Natural-language queries with source citations"
    ]
  }
];

const MODULES: Module[] = [
  {
    title: "Crypto vault & treasury",
    description: "Secure custody with automated reconciliation and policy-driven approvals.",
    icon: ShieldCheck,
    bullets: [
      "Multi-wallet management per region or programme",
      "Treasury rebalancing rules and hedging recommendations",
      "Settlement queue with on-chain proof references"
    ]
  },
  {
    title: "Tokenised plan studio",
    description: "Model token incentives, bonus pools, and staking rewards in minutes.",
    icon: Layers,
    bullets: [
      "Support for hybrid fiat + token payouts",
      "Vesting schedules linked to performance metrics",
      "Whitelabel dashboards for distributors and investors"
    ]
  },
  {
    title: "Compliance control centre",
    description: "Generate regulator-ready statements, tax forms, and compliance evidence.",
    icon: BarChart3,
    bullets: [
      "Jurisdiction-specific tax and reporting packs",
      "Chain analytics integrations for AML investigations",
      "Approval workflows with full change history"
    ]
  }
];

const WORKFLOW: WorkflowStep[] = [
  {
    title: "Blueprint",
    description: "Align token economics, regulatory expectations, and integrations with Cloud MLM strategists.",
    icon: Layers
  },
  {
    title: "Configure",
    description: "Set up wallets, pricing feeds, payout logic, and compliance policies in the sandbox.",
    icon: Activity
  },
  {
    title: "Launch",
    description: "Deploy with enablement kits, change management, and controlled rollout rings.",
    icon: Workflow
  },
  {
    title: "Optimise",
    description: "Iterate with copilot guidance, experimentation, and quarterly governance reviews.",
    icon: Bot
  }
];

const AI_ENHANCEMENTS: AiEnhancement[] = [
  {
    year: "2025",
    title: "Copilot intelligence",
    description:
      "Copilots summarise treasury health, flag suspicious flows, and suggest remediation steps before issues escalate.",
    icon: Sparkles,
    bullets: [
      "Board-ready briefings with charts and talking points",
      "One-click actions to adjust incentives or rebalance wallets",
      "Predictive modelling for liquidity and hedging decisions"
    ]
  },
  {
    year: "2024",
    title: "Telemetry foundation",
    description:
      "Feature flags, synthetic data, and observability paved the way for AI-native crypto operations.",
    icon: Activity,
    bullets: [
      "Exchange sandboxes validate payout logic pre-launch",
      "Real-time dashboards monitor on-chain and off-chain flows",
      "Experiment manager compares token incentives across cohorts"
    ]
  }
];

const FAQS: Faq[] = [
  {
    question: "Which cryptocurrencies are supported?",
    answer:
      "We support major blockchains, stablecoins, and custom tokens. Additional assets can be added after security review."
  },
  {
    question: "How is wallet security managed?",
    answer:
      "Institutional custody, multi-signature approvals, hardware vault options, and policy-based access keep assets secure."
  },
  {
    question: "Can we connect external exchanges or DeFi protocols?",
    answer:
      "Yes. REST APIs and webhooks integrate with liquidity pools, exchanges, and DeFi platforms while maintaining compliance checkpoints."
  },
  {
    question: "How are taxes and reporting handled?",
    answer:
      "Regional tax modules generate transaction histories, forms, and regulator-ready reports linked to every payout."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Cryptocurrency MLM Software";
  const description =
    "Launch token-ready MLM programmes with secure custody, automated compliance, and AI copilots from Cloud MLM Software.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/cryptocurrency-mlm-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type CryptoMlmSoftwarePageProps = {
  params: { lang: SupportedLocale };
};

export default function CryptoMlmSoftwarePage({ params }: CryptoMlmSoftwarePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_20%,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_88%_-10%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Coins className="h-4 w-4" aria-hidden />
              Crypto-native MLM innovation
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Power secure, automated crypto MLM programmes with intelligence at every layer.
            </h1>
            <p className="text-lg text-muted-foreground">
              Cloud MLM Software gives you the controls to launch tokenised rewards, manage treasury operations, and meet regulatory expectations—all with AI copilots that keep your teams informed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Book a crypto readiness workshop
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                  Explore the crypto demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <dl className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HERO_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <dt className="mt-4 text-sm font-medium text-muted-foreground">{stat.label}</dt>
                  <dd className="mt-1 text-2xl font-semibold text-foreground">{stat.value}</dd>
                  <p className="mt-2 text-xs text-muted-foreground">{stat.detail}</p>
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why crypto leaders partner with Cloud MLM Software</h2>
          <p className="text-sm text-muted-foreground">
            Deliver innovative plans faster while keeping compliance, finance, and operations aligned.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article key={benefit.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {benefit.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Modules showcased in the demo</h2>
            <p className="text-sm text-muted-foreground">
              Explore custody, compensation, and compliance experiences purpose-built for crypto MLM programmes.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <article key={module.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">{module.title}</h3>
                  <p className="text-sm text-muted-foreground">{module.description}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {module.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                        {bullet}
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
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A delivery workflow proven across crypto programmes</h2>
          <p className="text-sm text-muted-foreground">
            Launch with confidence using a structured approach that keeps every stakeholder aligned.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {WORKFLOW.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-background py-20">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">From telemetry to copilot intelligence</h2>
            <p className="text-sm text-muted-foreground">
              2024 observability investments now power AI copilots that keep your programme compliant and agile.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {AI_ENHANCEMENTS.map((entry) => {
              const Icon = entry.icon;
              return (
                <article key={entry.year} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">{entry.year}</p>
                      <h3 className="text-lg font-semibold text-foreground">{entry.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{entry.description}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">
            Answers for finance, compliance, and operations teams evaluating crypto MLM programmes.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {FAQS.map((faq) => (
            <article key={faq.question} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
              <p className="text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-10 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to launch your crypto MLM programme?</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Book a session with Cloud MLM Software analysts to review requirements, configure the sandbox, and activate AI copilots tailored to your brand.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Schedule a crypto workshop
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                Watch the crypto demo
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
