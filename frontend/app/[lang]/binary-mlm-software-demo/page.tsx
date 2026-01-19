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
  ArrowUpRight,
  BarChart3,
  Bot,
  CheckCircle2,
  ClipboardCheck,
  GaugeCircle,
  LayoutDashboard,
  LineChart,
  MessageSquare,
  Network,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Target
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
  detail: string;
};

type Feature = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type DemoStage = {
  title: string;
  description: string;
  icon: IconType;
};

type ModuleHighlight = {
  title: string;
  description: string;
  icon: IconType;
};

type Integration = {
  title: string;
  description: string;
};

type AioCapability = {
  title: string;
  description: string;
  icon: IconType;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_STATS: Stat[] = [
  {
    label: "Binary launches supported",
    value: "210+",
    detail: "Binary strategies guided from demo to deployment with Cloud MLM Software."
  },
  {
    label: "Median time to go live",
    value: "8 weeks",
    detail: "From discovery to production rollout for binary plans."
  },
  {
    label: "Demo satisfaction",
    value: "98%",
    detail: "Stakeholders rating clarity across finance, compliance, and field teams."
  },
  {
    label: "AI insights delivered",
    value: "60+",
    detail: "Actionable recommendations generated from demo data and historical benchmarks."
  }
];

const FEATURES: Feature[] = [
  {
    title: "Binary engine walkthrough",
    description:
      "Explore compensation logic, carryover rules, and binary plan analytics across admin, finance, and distributor experiences.",
    bullets: [
      "Leg balance dashboards and alerts",
      "Cycle caps, bonuses, and promotion visibility",
      "Sponsor tools for coaching and recognition"
    ],
    icon: LayoutDashboard
  },
  {
    title: "Stakeholder storytelling",
    description:
      "Guide executives and field leaders through journey-based demos that connect data to business outcomes.",
    bullets: [
      "Scenario narratives covering launch and growth",
      "Cost-to-comp and retention scorecards",
      "Interactive Q&A logged for follow-up"
    ],
    icon: LineChart
  },
  {
    title: "Operational readiness",
    description:
      "Showcase security, localisation, and support workflows that keep binary programmes compliant and scalable.",
    bullets: [
      "Permission sets for global teams",
      "Integrated compliance and audit tooling",
      "Performance monitoring and recovery plans"
    ],
    icon: ShieldCheck
  }
];

const DEMO_STAGES: DemoStage[] = [
  {
    title: "Discovery and alignment",
    description:
      "Capture objectives, compensation rules, and data sources to tailor the demo experience to your binary plan.",
    icon: ClipboardCheck
  },
  {
    title: "Interactive demo sessions",
    description:
      "Strategists guide you through admin, distributor, and analytics modules while addressing regional compliance questions.",
    icon: GaugeCircle
  },
  {
    title: "Activation blueprint",
    description:
      "Receive rollout roadmaps, cost modelling, and AI enriched insight packs within 72 hours of the finale.",
    icon: Target
  }
];

const MODULE_HIGHLIGHTS: ModuleHighlight[] = [
  {
    title: "Compensation control centre",
    description:
      "Configure binary cycles, pairing rules, and incentives, then preview payout results before approval.",
    icon: LayoutDashboard
  },
  {
    title: "Field acceleration tools",
    description:
      "Provide distributors with mobile responsive dashboards, replication sites, and coaching prompts.",
    icon: Network
  },
  {
    title: "Compliance and finance hub",
    description:
      "Automate documentation, GST reporting, and audit trails with role based access for regulators and finance teams.",
    icon: ShieldCheck
  },
  {
    title: "Cloud reliability",
    description:
      "Autoscaling infrastructure, monitoring, and CI/CD pipelines keep binary platforms stable through surges.",
    icon: ServerCog
  }
];

const INTEGRATIONS: Integration[] = [
  {
    title: "Payments and settlement",
    description: "Connect banks, pay-out providers, and e-wallets to deliver binary commissions globally."
  },
  {
    title: "CRM and ecommerce",
    description: "Integrate Shopify, WooCommerce, Magento, Salesforce, and custom portals for single source of truth."
  },
  {
    title: "Compliance tooling",
    description: "Sync KYC, AML, and document workflows with binary compensation changes for audit readiness."
  },
  {
    title: "Business intelligence",
    description: "Stream KPI and revenue data into Power BI, Tableau, or Snowflake for advanced modelling."
  }
];

const AIO_CAPABILITIES: AioCapability[] = [
  {
    title: "Demo concierge automations",
    description:
      "AI agents brief attendees, capture objectives, and personalise agenda flows automatically.",
    icon: Bot
  },
  {
    title: "Decision-ready transcripts",
    description:
      "Questions, commitments, and tasks are transcribed, tagged, and delivered as structured summaries to leadership.",
    icon: Sparkles
  },
  {
    title: "Knowledge base sync",
    description:
      "Semantic tagging feeds demo learnings into knowledge hubs so support teams and copilots answer accurately.",
    icon: MessageSquare
  }
];

const FAQS: Faq[] = [
  {
    question: "What is covered during the binary demo?",
    answer:
      "We explore compensation logic, distributor journeys, compliance workflows, and rollout planning specific to your binary plan."
  },
  {
    question: "How long does the demo last?",
    answer:
      "Sessions typically run 60 to 90 minutes with optional deep dives for finance, compliance, or technology leaders."
  },
  {
    question: "Can we test our compensation data?",
    answer:
      "Yes. Share plan details ahead of time and we will build simulations so you can validate outcomes live."
  },
  {
    question: "What happens after the demo?",
    answer:
      "You receive activation recommendations, ROI modelling, and implementation roadmaps tailored to your timeline."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Binary MLM Software Demo";
  const description =
    "Experience Cloud MLM Software binary platform with guided demos covering compensation, analytics, and compliance.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/binary-mlm-software-demo", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BinaryDemoPageProps = {
  params: { lang: SupportedLocale };
};

export default function BinaryDemoPage({ params }: BinaryDemoPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const calculatorHref = buildLocalizedPath("/binary-mlm-calculator", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_88%_-6%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6 text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" aria-hidden />
              Binary demo programme
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              See binary automation, analytics, and governance before you launch.
            </h1>
            <p className="text-lg text-muted-foreground">
              Cloud MLM Software binary demo sessions mirror your compensation structure so leadership can evaluate automation, compliance, and distributor enablement with clarity.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Schedule your binary demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                  Explore the live environment
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href={calculatorHref}>
                  Review the binary calculator
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <dl className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-border/60 bg-background p-6 text-center shadow-sm">
                <dt className="text-sm font-medium text-muted-foreground">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-foreground">{stat.value}</dd>
                <p className="mt-2 text-xs text-muted-foreground">{stat.detail}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What you will explore during the demo</h2>
          <p className="text-sm text-muted-foreground">
            Tailor every session to your goals so product, finance, and field leaders see binary performance from every angle.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {feature.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How the demo journey works</h2>
          <p className="text-sm text-muted-foreground">
            Move from alignment to activation with a repeatable approach guided by compensation strategists and solution architects.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {DEMO_STAGES.map((stage) => (
            <article key={stage.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <stage.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{stage.title}</h3>
              <p className="text-sm text-muted-foreground">{stage.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Platform modules on display</h2>
          <p className="text-sm text-muted-foreground">
            Highlight the Cloud MLM Software modules that keep binary programmes profitable, compliant, and distributor friendly.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {MODULE_HIGHLIGHTS.map((module) => (
            <article key={module.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <module.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{module.title}</h3>
              <p className="text-sm text-muted-foreground">{module.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Integrations ready for scale</h2>
            <p className="text-sm text-muted-foreground">
              Tie binary operations to your finance, CRM, compliance, and analytics stack with maintained connectors.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {INTEGRATIONS.map((integration) => (
              <article key={integration.title} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">{integration.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{integration.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Artificial Intelligence Optimisation</h2>
            <p className="text-sm text-muted-foreground">
              Make demo artefacts easy for copilots, support teams, and leadership dashboards to reuse after the session.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {AIO_CAPABILITIES.map((capability) => (
              <article key={capability.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <capability.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">
            Get clarity before you reserve your session.
          </p>
        </div>
        <div className="grid gap-4">
          {FAQS.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container rounded-3xl border border-border/60 bg-gradient-to-br from-primary/15 via-background to-emerald-200/20 p-10 shadow-sm dark:from-primary/20 dark:to-emerald-500/10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Book your binary demo today</h2>
            <p className="text-sm text-muted-foreground">
              Align stakeholders, validate binary compensation, and plan rollout milestones with Cloud MLM Software experts.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 lg:justify-end">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Talk with our team
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={plansHref}>
                Explore plan services
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
