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
  Film,
  GaugeCircle,
  LayoutDashboard,
  LineChart,
  MessageSquare,
  Network,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Target,
  Users
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
    label: "Auto fill launches supported",
    value: "130+",
    detail: "Matrix and spillover programmes guided from discovery to go live with Cloud MLM Software."
  },
  {
    label: "Median deployment timeline",
    value: "7 weeks",
    detail: "From workshop kickoff to production ready environment for auto fill plans."
  },
  {
    label: "Stakeholder satisfaction",
    value: "97%",
    detail: "Leaders rating demo clarity across product, finance, compliance, and field teams."
  },
  {
    label: "AI enriched recommendations",
    value: "45+",
    detail: "Actionable insights generated from demo sessions and historical benchmarks."
  }
];

const FEATURES: Feature[] = [
  {
    title: "Spillover visibility",
    description:
      "Experience how automatic placement, spillover pools, and matrix compression operate across admin, finance, and distributor views.",
    bullets: [
      "See matrix fill rates with live sample data",
      "Highlight placement overrides and exception rules",
      "Track sponsor impact and retention alerts"
    ],
    icon: LayoutDashboard
  },
  {
    title: "Narratives for decision makers",
    description:
      "Connect dashboards, worksheets, and guided storytelling so executives understand the why behind every recommendation.",
    bullets: [
      "Frame cost to comp, margin, and churn trends",
      "Surface distributor experience wins and risks",
      "Assign follow ups inside the demo workspace"
    ],
    icon: Film
  },
  {
    title: "Operational readiness",
    description:
      "Showcase governance, localisation, and performance controls that keep auto fill deployments resilient and compliant.",
    bullets: [
      "Role based access for analysts and support",
      "Audit ready payout and adjustment logs",
      "Elastic infrastructure tested for bursts"
    ],
    icon: ShieldCheck
  }
];

const DEMO_STAGES: DemoStage[] = [
  {
    title: "Discovery alignment",
    description:
      "Define objectives, plan rules, and success metrics so the demo content mirrors your auto fill ambitions.",
    icon: Target
  },
  {
    title: "Interactive guided tours",
    description:
      "Product strategists demonstrate admin, distributor, and analytics flows while answering regulatory and financial questions in context.",
    icon: LineChart
  },
  {
    title: "Activation blueprint",
    description:
      "Within 72 hours you receive rollout recommendations, cost models, and AI supported insight packs.",
    icon: ClipboardCheck
  }
];

const MODULE_HIGHLIGHTS: ModuleHighlight[] = [
  {
    title: "Compensation cockpit",
    description:
      "Calibrate matrix widths, spillover limits, and incentive tiers, then preview payouts before approval.",
    icon: LayoutDashboard
  },
  {
    title: "Distributor enablement",
    description:
      "Deliver onboarding journeys, recognition, and guidance tuned for teams operating inside auto fill programmes.",
    icon: Users
  },
  {
    title: "Compliance and finance hub",
    description:
      "Automate documentation, GST reporting, and audit trails so every market stays inspection ready.",
    icon: ShieldCheck
  },
  {
    title: "Platform reliability",
    description:
      "Autoscaling infrastructure, monitoring, and recovery workflows keep demos and production environments stable.",
    icon: ServerCog
  }
];

const INTEGRATIONS: Integration[] = [
  {
    title: "Payments and settlement",
    description: "Pre-built connectors for Australian banks, PayPal, Stripe, and global pay-out partners."
  },
  {
    title: "Tax and compliance",
    description: "Sync GST engines, e invoicing solutions, and statutory reporting platforms without duplicate entry."
  },
  {
    title: "Commerce and CRM",
    description: "Connect Shopify, WooCommerce, Magento, Salesforce, HubSpot, and custom storefronts effortlessly."
  },
  {
    title: "Analytics and data lake",
    description: "Stream demo and production metrics into Power BI, Tableau, Snowflake, or BigQuery."
  }
];

const AIO_CAPABILITIES: AioCapability[] = [
  {
    title: "Demo concierge automations",
    description:
      "Conversational assistants brief attendees, gather objectives, and personalise demo flows automatically.",
    icon: Bot
  },
  {
    title: "Context aware transcripts",
    description:
      "We log questions, decisions, and tasks, then deliver structured recaps for leadership within minutes of the demo.",
    icon: Sparkles
  },
  {
    title: "Knowledge base feeds",
    description:
      "Semantic tagging pushes demo artefacts into knowledge hubs so support teams and copilots answer accurately.",
    icon: MessageSquare
  }
];

const FAQS: Faq[] = [
  {
    question: "What does the auto fill demo include?",
    answer:
      "You will explore platform navigation, placement logic, distributor journeys, compliance safeguards, and rollout planning tailored to auto fill programmes."
  },
  {
    question: "How long is the session?",
    answer:
      "Most demos run 60 to 90 minutes with elective deep dives for finance, compliance, or technology leads."
  },
  {
    question: "Can we bring our own plan data?",
    answer:
      "Yes. Share your matrix structure and incentives in advance and we will build simulations for the live walkthrough."
  },
  {
    question: "Is there a cost to attend?",
    answer:
      "The core demo is complimentary. Extended proof of concept environments are available for enterprise evaluations."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Auto Fill Plan MLM Software Demo";
  const description =
    "Experience Cloud MLM Software's auto fill platform with guided demos that showcase spillover intelligence, compliance, and operational excellence.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/auto-fill-plan-mlm-software-demo", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AutoFillDemoPageProps = {
  params: { lang: SupportedLocale };
};

export default function AutoFillDemoPage({ params }: AutoFillDemoPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const calculatorHref = buildLocalizedPath("/auto-fill-plan-mlm-calculator", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_12%,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_88%_-6%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6 text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" aria-hidden />
              Auto fill demo programme
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              See auto fill automation, spillover logic, and analytics in action.
            </h1>
            <p className="text-lg text-muted-foreground">
              Cloud MLM Software delivers a guided demo tailored to your matrix strategy, helping leadership evaluate automation, compliance, and distributor experience before rollout.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Schedule your demo
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={demoHref} target="_blank" rel="noopener noreferrer">
                  Preview the live environment
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href={calculatorHref}>
                  Review the calculator
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Explore what the auto fill demo covers</h2>
          <p className="text-sm text-muted-foreground">
            Every session is configured to your auto placement strategy, incentive structure, and operational priorities so stakeholders stay aligned.
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Demonstrate the platform modules that matter</h2>
          <p className="text-sm text-muted-foreground">
            Highlight the Cloud MLM Software modules that keep auto fill programmes profitable, compliant, and trusted by distributors.
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
              Connect finance, commerce, compliance, and analytics systems from day one so auto fill plans expand without friction.
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
              Make every demo artefact ready for chatbots, copilots, and knowledge bases so teams revisit insights instantly.
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
            Get quick answers before you reserve your tailored demo.
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Book your auto fill demo</h2>
            <p className="text-sm text-muted-foreground">
              Align stakeholders, validate spillover logic, and accelerate approval with a personalised Cloud MLM Software walkthrough.
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
