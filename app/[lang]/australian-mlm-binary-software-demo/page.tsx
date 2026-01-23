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
  Bot,
  CheckCircle2,
  Film,
  Globe,
  Headset,
  LayoutDashboard,
  LineChart,
  PlayCircle,
  Rocket,
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
    label: "Australian binary launches orchestrated",
    value: "140+",
    detail: "High growth direct selling brands validated and deployed with Cloud MLM Software guidance."
  },
  {
    label: "Average time to proof of concept",
    value: "3 weeks",
    detail: "From discovery kickoff to stakeholder sign off across compensation, compliance, and infrastructure."
  },
  {
    label: "Stakeholder satisfaction",
    value: "98%",
    detail: "Product, finance, and compliance leaders rating demo clarity and readiness."
  },
  {
    label: "AI informed recommendations",
    value: "50+",
    detail: "Actionable insights delivered from predictive modelling and structured knowledge packs."
  }
];

const FEATURES: Feature[] = [
  {
    title: "Binary plan architecture in context",
    description:
      "Walk through a working environment that mirrors Australian binary logic, including accelerator legs, lifestyle bonuses, and governance controls.",
    bullets: [
      "Mirror power, profit, and accelerator legs with live sample data",
      "Simulate carryover, cycling, and loyalty rewards in minutes",
      "Compare strategic pathways using interactive dashboards"
    ],
    icon: LayoutDashboard
  },
  {
    title: "Executive narrative coaching",
    description:
      "Align founders, finance, and compliance using storytelling that connects metrics, distributor outcomes, and regulatory guardrails.",
    bullets: [
      "Frame decisions with tailored scorecards and talking points",
      "Highlight profit protection levers for each leadership role",
      "Capture questions and assign follow up actions inside the demo"
    ],
    icon: Film
  },
  {
    title: "Operational excellence toolkit",
    description:
      "Explore the controls that keep Australian binary programmes resilient, audit ready, and efficient from day one.",
    bullets: [
      "Role based access for compliance, finance, and field teams",
      "Detailed audit exports covering payouts, reversals, and adjustments",
      "Regional hosting, monitoring, and continuity safeguards"
    ],
    icon: ShieldCheck
  }
];

const DEMO_STAGES: DemoStage[] = [
  {
    title: "Strategic discovery workshop",
    description:
      "Define objectives, compensation triggers, and technology dependencies so the demo experience reflects your operating reality.",
    icon: Target
  },
  {
    title: "Interactive demo sessions",
    description:
      "Product strategists guide your teams through admin, distributor, and analytics journeys while addressing regulatory and operational questions in real time.",
    icon: PlayCircle
  },
  {
    title: "Activation blueprint delivery",
    description:
      "Receive rollout roadmaps, cost modelling, migration guidance, and AI enriched insights within 72 hours of the final demo session.",
    icon: LineChart
  }
];

const MODULE_HIGHLIGHTS: ModuleHighlight[] = [
  {
    title: "Commission governance suite",
    description:
      "Model binary legs, launch incentives, and preview payouts before approval to protect enterprise margins and compliance.",
    icon: LayoutDashboard
  },
  {
    title: "Field momentum workspace",
    description:
      "Equip distributors with mobile ready dashboards, onboarding pathways, coaching prompts, and recognition workflows tuned for ANZ teams.",
    icon: Users
  },
  {
    title: "Regulation and audit hub",
    description:
      "Automate KYC, AML, product disclosure, and document workflows while maintaining a searchable regulator ready archive.",
    icon: ShieldCheck
  },
  {
    title: "Cloud reliability fabric",
    description:
      "Elastic hosting, automated backups, and performance telemetry ensure uptime during volume spikes and recognition events.",
    icon: ServerCog
  }
];

const INTEGRATIONS: Integration[] = [
  {
    title: "Payments and settlement",
    description: "Connect to Australian banks, PayPal, Stripe, Eway, and hyperwallet style providers using maintained adapters."
  },
  {
    title: "Tax and compliance",
    description: "Synchronise with GST engines, e invoicing platforms, and document vaults to streamline reporting and audits."
  },
  {
    title: "Commerce and CRM",
    description: "Integrate Shopify, WooCommerce, Magento, or custom ordering portals while syncing data to HubSpot, Salesforce, and Zoho."
  },
  {
    title: "Analytics and data lake",
    description: "Publish near real time metrics to Power BI, Tableau, Snowflake, or BigQuery for enterprise intelligence and governance."
  }
];

const AIO_CAPABILITIES: AioCapability[] = [
  {
    title: "AI demo concierge",
    description:
      "Conversational assistants brief attendees, capture objectives, and surface agenda highlights before each session.",
    icon: Bot
  },
  {
    title: "Context aware transcripts",
    description:
      "Questions, commitments, and follow ups are transcribed, enriched, and packaged for leadership within minutes of the demo.",
    icon: Sparkles
  },
  {
    title: "Knowledge base ready assets",
    description:
      "Semantic tagging makes demo artefacts easy for internal copilots and support agents to retrieve with accurate Australian terminology.",
    icon: Globe
  }
];

const FAQS: Faq[] = [
  {
    question: "What is included in the Australian binary demo session?",
    answer:
      "You will review platform navigation, compensation controls, distributor journeys, compliance automation, and rollout planning tailored to Australian regulations."
  },
  {
    question: "How long does the demo take?",
    answer:
      "A standard engagement runs 60 to 90 minutes, with elective deep dives for finance, compliance, product, or technology leaders."
  },
  {
    question: "Can we test our existing compensation rules?",
    answer:
      "Yes. Share your current plan and our analysts will configure simulations so you can validate outcomes live during the session."
  },
  {
    question: "Is there a cost for the demo?",
    answer:
      "The core experience is complimentary. Extended proofs of concept with dedicated environments are available for enterprise evaluations."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Australian MLM Binary Software Demo";
  const description =
    "Experience the Australian binary plan inside Cloud MLM Software. Explore compensation controls, compliance automation, and distributor journeys tailored for ANZ.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/australian-mlm-binary-software-demo", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AustralianBinaryDemoPageProps = {
  params: { lang: SupportedLocale };
};

export default function AustralianBinaryDemoPage({ params }: AustralianBinaryDemoPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const calculatorHref = buildLocalizedPath("/australian-binary-plan-mlm-calculator", locale);
  const plansHref = buildLocalizedPath("/mlm-plans", locale);
  const demoHref = "https://demo.cloudmlmsoftware.com";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_15%,rgba(56,189,248,0.18),transparent_42%),radial-gradient(circle_at_90%_-10%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6 text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" aria-hidden />
              Australian binary demo programme
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              See Australian binary plan automation in action before you invest.
            </h1>
            <p className="text-lg text-muted-foreground">
              Cloud MLM Software delivers a guided, data rich demo that mirrors your compensation model, compliance
              needs, and distributor experience. Equip leadership with clarity before committing to rollout.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Secure your demo session
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
                  Review the plan calculator
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
            We craft every Australian binary demo to match your terminology, incentive logic, and organisational goals so
            you can evaluate value without guesswork.
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

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How the demo journey unfolds</h2>
            <p className="text-sm text-muted-foreground">
              Partner with dedicated strategists, compensation analysts, and solution architects who guide you from
              discovery to executive approved action plans.
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
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">See the platform modules that matter</h2>
          <p className="text-sm text-muted-foreground">
            Surface the Cloud MLM Software modules that keep Australian binary programmes profitable, compliant, and
            distributor friendly.
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Integrations ready from day one</h2>
            <p className="text-sm text-muted-foreground">
              Cloud MLM Software connects with your finance, commerce, and analytics stack so binary plan operations scale
              with confidence.
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

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Artificial Intelligence Optimisation</h2>
          <p className="text-sm text-muted-foreground">
            Every demo artefact is structured for conversational AI so teams can revisit insights through ChatGPT, Grok,
            Gemini, and internal copilots.
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
      </section>

      <section className="container space-y-8">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Support that extends beyond the demo</h2>
          <p className="text-sm text-muted-foreground">
            Dedicated specialists stay engaged before, during, and after the demo so you have full clarity on investment,
            rollout, and adoption.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Headset className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-foreground">Concierge coordination</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Schedule sessions across time zones, capture stakeholder objectives, and keep communication centralised.
            </p>
          </article>
          <article className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Users className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-foreground">Executive readiness kits</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Receive scorecards, ROI models, and board friendly briefs that accelerate go to market decisions.
            </p>
          </article>
          <article className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Globe className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-foreground">Global rollout planning</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Plan phased launches, localisation, and support operations with confidence in every market.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
            <p className="text-sm text-muted-foreground">
              Answers to common questions about the Australian MLM Binary Software demo programme.
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
        </div>
      </section>

      <section className="container rounded-3xl border border-border/60 bg-gradient-to-br from-primary/15 via-background to-emerald-200/20 p-10 shadow-sm dark:from-primary/20 dark:to-emerald-500/10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Book your Australian binary demo</h2>
            <p className="text-sm text-muted-foreground">
              Align stakeholders, validate compensation logic, and accelerate decision making with a personalised demo of
              Cloud MLM Software.
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
