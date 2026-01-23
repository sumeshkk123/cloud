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
  AlarmClock,
  ArrowUpRight,
  BarChart3,
  Bot,
  ClipboardCheck,
  Coins,
  HandCoins,
  Layers3,
  LineChart,
  ShieldCheck,
  Sparkles,
  Users,
  Activity
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

type DemoSection = {
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

type AiEvolution = {
  year: string;
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type UseCase = {
  title: string;
  outcome: string;
  metric: string;
  icon: IconType;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_STATS: Stat[] = [
  {
    label: "Campaigns launched",
    value: "1.9K",
    detail: "Crowd funding MLM programmes orchestrated with Cloud MLM Software.",
    icon: HandCoins
  },
  {
    label: "Payout automation",
    value: "92%",
    detail: "Transactions reconciled automatically across tiers, wallets, and gateways.",
    icon: Coins
  },
  {
    label: "Compliance coverage",
    value: "40+",
    detail: "Regulatory profiles supported, from donation caps to KYC and AML.",
    icon: ShieldCheck
  },
  {
    label: "AI copilots live",
    value: "2025",
    detail: "Predictive insights recommend campaign tweaks and risk mitigations instantly.",
    icon: Sparkles
  }
];

const BENEFITS: Benefit[] = [
  {
    title: "Campaign management built for momentum",
    description:
      "Design, launch, and govern donation-based plans with precise guardrails and automation-first workflows.",
    icon: Layers3,
    bullets: [
      "Blueprint once, clone across causes, markets, or partner organisations",
      "Tiered milestone tracking ensures contributors and organisers stay aligned",
      "Real-time dashboards connect campaign health to revenue and retention"
    ]
  },
  {
    title: "Trust and compliance from day one",
    description:
      "Maintain donor confidence with controls covering AML, taxation, privacy, and payout governance.",
    icon: ShieldCheck,
    bullets: [
      "Automated KYC/AML checks before funds are released",
      "Regional tax receipts and audit-ready transaction exports",
      "Consent vault and data residency controls per jurisdiction"
    ]
  },
  {
    title: "AI-guided optimisation",
    description:
      "Copilots and predictive analytics surface opportunities, risks, and actions before they impact performance.",
    icon: Bot,
    bullets: [
      "Scenario planning highlights fundraising gaps or saturation",
      "Smart alerts detect abnormal contribution patterns",
      "Narrative briefings keep leadership and field teams informed"
    ]
  }
];

const DEMO_SECTIONS: DemoSection[] = [
  {
    title: "Campaign studio",
    description:
      "Configure contribution tiers, incentives, and timelines with visual templates tied to compliance rules.",
    icon: ClipboardCheck,
    bullets: [
      "Define donation milestones and peer-to-peer overrides",
      "Set release rules for e-wallets, cash, or in-kind rewards",
      "Preview contributor journeys across web and mobile"
    ]
  },
  {
    title: "Funding intelligence",
    description:
      "Monitor real-time contribution health, ROI, and participant sentiment across all programmes.",
    icon: LineChart,
    bullets: [
      "Cohort analytics reveal top-performing campaigns and influencers",
      "Heatmaps highlight geographic momentum and potential gaps",
      "AI forecasts predict funding velocity and payout exposure"
    ]
  },
  {
    title: "Operations console",
    description:
      "Automate compliance tasks, approvals, and communications with transparent audit trails.",
    icon: BarChart3,
    bullets: [
      "Automated notifications for milestone unlocks and settlement",
      "Exception routing for finance, legal, or customer success",
      "Document repository with immutable change logs"
    ]
  }
];

const WORKFLOW: WorkflowStep[] = [
  {
    title: "Ideate",
    description:
      "Collaborate with Cloud MLM analysts to align campaign design with regulatory and brand objectives.",
    icon: Layers3
  },
  {
    title: "Configure",
    description:
      "Model tiers, compliance policies, and automations using the campaign studio sandboxes.",
    icon: ClipboardCheck
  },
  {
    title: "Launch",
    description:
      "Activate web, mobile, and partner channels with staging rings, messaging, and training.",
    icon: AlarmClock
  },
  {
    title: "Optimise",
    description:
      "Leverage AI copilots, experimentation, and quarterly reviews to iterate fast.",
    icon: Bot
  }
];

const AI_EVOLUTION: AiEvolution[] = [
  {
    year: "2025",
    title: "Copilot orchestrated campaigns",
    description:
      "Copilots summarise campaign performance, detect anomalies, and recommend new strategies before payouts lock.",
    icon: Bot,
    bullets: [
      "Generate board-ready updates with charts and talking points",
      "Trigger workflow automations directly from copilot recommendations",
      "Coach organisers on messaging or incentive tweaks using predictive insights"
    ]
  },
  {
    year: "2024",
    title: "Telemetry & experimentation foundation",
    description:
      "Feature flags, synthetic data, and observability ensured upcoming AI features launched safely.",
    icon: Activity,
    bullets: [
      "A/B test contribution flows without impacting production",
      "Realtime anomaly detection across donations, payouts, and sign-ups",
      "Quality dashboards track compliance SLAs and automation health"
    ]
  }
];

const USE_CASES: UseCase[] = [
  {
    title: "Humanitarian relief network",
    outcome: "Coordinated 120 campaigns and released funds 2.5x faster while meeting AML obligations.",
    metric: "Global relief NGO partner",
    icon: HandCoins
  },
  {
    title: "Education micro-funding",
    outcome: "AI-guided nudges lifted average contribution value by 34% across LATAM markets.",
    metric: "EdTech crowd funding consortium",
    icon: Sparkles
  },
  {
    title: "Community wellness launches",
    outcome: "Compliance automation reduced manual reviews by 68%, freeing teams to focus on storytellers and advocates.",
    metric: "Health & wellness brand",
    icon: ShieldCheck
  }
];

const FAQS: Faq[] = [
  {
    question: "Does the demo cover both donation and product-based rewards?",
    answer:
      "Yes. You can configure cash-only contributions, product bundles, subscription perks, or hybrid incentives with distinct payout rules."
  },
  {
    question: "How are compliance and KYC handled?",
    answer:
      "We integrate with leading KYC/AML providers, support manual reviews, and retain encrypted audit trails for every contributor and organiser."
  },
  {
    question: "Can we integrate the crowd funding module with external sites?",
    answer:
      "Embeddable widgets, REST APIs, and webhooks let you capture contributions from microsites, partner portals, or third-party campaigns while keeping data in sync."
  },
  {
    question: "What support is available after launch?",
    answer:
      "Customer success teams provide campaign playbooks, quarterly optimisation workshops, and 24/7 support backed by AI copilots for faster diagnostics."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Crowd Funding MLM Software Demo";
  const description =
    "Model secure, AI-assisted crowd funding MLM programmes with Cloud MLM Software’s interactive demo.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/crowd-funding-mlm-software-demo", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type CrowdFundingDemoPageProps = {
  params: { lang: SupportedLocale };
};

export default function CrowdFundingDemoPage({ params }: CrowdFundingDemoPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";
  const resourcesHref = buildLocalizedPath("/resources", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_90%_-10%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <HandCoins className="h-4 w-4" aria-hidden />
              Crowd funding accelerator
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Launch trusted crowd funding MLM campaigns with automation, compliance, and AI insight.
            </h1>
            <p className="text-lg text-muted-foreground">
              Cloud MLM Software’s crowd funding demo shows how you can design contribution tiers, reward supporters, protect compliance, and optimise results from one intelligent workspace.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Request a campaign blueprint
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                  Explore the live demo
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why leaders pick Cloud MLM Software for crowd funding plans</h2>
          <p className="text-sm text-muted-foreground">
            Deliver inspiring campaigns without sacrificing compliance, automation, or reporting clarity.
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Inside the crowd funding demo</h2>
            <p className="text-sm text-muted-foreground">
              Follow the journey from campaign creation to payout reconciliation with clear visibility at every step.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {DEMO_SECTIONS.map((section) => {
              const Icon = section.icon;
              return (
                <article key={section.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">{section.title}</h3>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {section.bullets.map((bullet) => (
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A proven delivery workflow</h2>
          <p className="text-sm text-muted-foreground">
            Align every stakeholder—from product to finance—so campaigns launch quickly and responsibly.
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">From telemetry to AI-native crowd funding</h2>
            <p className="text-sm text-muted-foreground">
              Discover how 2024 groundwork enabled 2025 AI copilots that keep campaigns healthy.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {AI_EVOLUTION.map((entry) => {
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Where customers see results</h2>
          <p className="text-sm text-muted-foreground">
            Use cases proving how crowd funding MLM programmes thrive on Cloud MLM Software.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {USE_CASES.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <article key={useCase.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground">{useCase.outcome}</p>
                <p className="text-xs uppercase tracking-wide text-primary">{useCase.metric}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
            <p className="text-sm text-muted-foreground">
              Quick answers for teams exploring crowd funding MLM strategies.
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
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-10 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Start your crowd funding demo today</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Share your objectives and we will configure a personalised sandbox that showcases automation, compliance, and AI insights for your team.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Schedule a campaign workshop
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                Watch the demo overview
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href={resourcesHref}>
                Download resource kit
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
