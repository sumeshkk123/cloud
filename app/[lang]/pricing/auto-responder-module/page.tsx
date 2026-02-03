import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle, Shield, Sparkles, Workflow } from "lucide-react";
import {
  ChatsCircle,
  Lightning,
  PaperPlaneTilt,
  Robot,
  RocketLaunch,
  SlidersHorizontal
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type Benefit = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type RoadmapStage = {
  title: string;
  description: string;
  duration: string;
  icon: IconType;
};

type Package = {
  title: string;
  price: string;
  description: string;
  outcomes: string[];
  icon: IconType;
};

type Enhancement = {
  title: string;
  description: string;
  icon: IconType;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Automated journeys launched",
    value: "2.1M+",
    description: "Campaigns orchestrated by Cloud MLM Software auto responders across 42 markets.",
    icon: PaperPlaneTilt
  },
  {
    label: "Average activation lift",
    value: "38%",
    description: "Field productivity increase within the first 90 days of automation rollout.",
    icon: Lightning
  },
  {
    label: "AI-personalised touchpoints",
    value: "120+ data signals",
    description: "Context-aware prompts that adapt to rank, product affinity, and compliance status.",
    icon: Robot
  },
  {
    label: "Verified deliverability score",
    value: "99.3%",
    description: "Infrastructure hardened for high-volume, reputation-safe outbound messaging.",
    icon: Shield
  }
];

const BENEFITS: Benefit[] = [
  {
    title: "Revenue-ready nurture playbooks",
    description:
      "Blended email, SMS, and in-app sequences move prospects from curiosity to qualified enrolments with minimal manual effort.",
    bullets: [
      "Launch packs tailored to product families and territories",
      "Event-triggered sequences for onboarding, renewals, and rank-ups",
      "Automated hand-offs between marketing, sales, and compliance"
    ],
    icon: Sparkles
  },
  {
    title: "Governed automation at scale",
    description:
      "Embedded consent guardrails, review workflows, and audit trails keep programs compliant while enabling rapid iteration.",
    bullets: [
      "Regional preference centers and double opt-in options",
      "AI-assisted content suggestions with legal annotations",
      "Version control with rollback-ready campaign snapshots"
    ],
    icon: Shield
  },
  {
    title: "Insight that fuels optimisation",
    description:
      "Unified analytics trace revenue, retention, and support impact back to every touchpoint so leadership can invest with confidence.",
    bullets: [
      "Real-time dashboards for marketing, operations, and finance",
      "Engagement scoring that feeds incentives and promotions",
      "Predictive health indicators for cohorts and geographies"
    ],
    icon: Workflow
  }
];

const ROADMAP: RoadmapStage[] = [
  {
    title: "Discovery & alignment",
    description:
      "Joint workshops capture messaging, compliance, and data requirements. We translate goals into sequencing logic and content themes.",
    duration: "Weeks 1-2",
    icon: ChatsCircle
  },
  {
    title: "Configuration & simulation",
    description:
      "Our automation engineers configure journeys, integrate data sources, and run volume simulations to validate throughput and guardrails.",
    duration: "Weeks 3-5",
    icon: SlidersHorizontal
  },
  {
    title: "Enablement & optimisation",
    description:
      "We orchestrate go-live, deliver playbooks, and embed optimisation cadences so your teams can iterate with confidence.",
    duration: "Weeks 6-8",
    icon: RocketLaunch
  }
];

const PACKAGES: Package[] = [
  {
    title: "Launch accelerator",
    price: "$14k fixed",
    description:
      "Perfect for organisations rolling out their first automated nurture journeys or revitalising legacy workflows.",
    outcomes: [
      "Two priority customer or distributor journeys configured end-to-end",
      "Channel strategy with deliverability and compliance baselines",
      "Launch dashboard with KPI guardrails and escalation protocols"
    ],
    icon: PaperPlaneTilt
  },
  {
    title: "Growth optimiser",
    price: "$24k fixed",
    description:
      "Designed for teams expanding automation into multiple regions, products, or lifecycle programs.",
    outcomes: [
      "Five multi-channel sequences with localisation support",
      "Data orchestration across CRM, e-commerce, and LMS platforms",
      "A/B testing framework with executive-ready reporting models"
    ],
    icon: Lightning
  },
  {
    title: "Enterprise blueprint",
    price: "Custom SOW",
    description:
      "Tailored for complex governance, multi-brand portfolios, or organisations integrating advanced AI copilots.",
    outcomes: [
      "Enterprise consent architecture with legal and security sign-off",
      "AI-assisted personalisation models trained on your datasets",
      "Joint optimisation office with quarterly innovation sprints"
    ],
    icon: Robot
  }
];

const ENHANCEMENTS: Enhancement[] = [
  {
    title: "Conversational AI co-pilots",
    description:
      "Deploy bilingual agent assistants that surface the next best action and generate compliant responses instantly.",
    icon: Robot
  },
  {
    title: "Journey intelligence dashboards",
    description:
      "Executive and regional scorecards load real-time conversion, retention, and revenue attribution insights.",
    icon: Sparkles
  },
  {
    title: "Field enablement playbooks",
    description:
      "Role-based training, video scripts, and escalation guides accelerate adoption and keep teams aligned.",
    icon: ArrowUpRight
  }
];

const FAQS: Faq[] = [
  {
    question: "How long does it take to deploy the Auto Responder Module?",
    answer:
      "Most clients launch their initial automation programmes within eight weeks. Timelines accelerate when data sources, consent policies, and core messaging are approved early in the engagement."
  },
  {
    question: "What internal resources are required?",
    answer:
      "We partner with a cross-functional taskforce that typically includes marketing, compliance, IT, and field leadership. Your team focuses on approvals and knowledge transfer while Cloud MLM Software handles configuration and orchestration."
  },
  {
    question: "Can we integrate existing marketing tools?",
    answer:
      "Yes. The module includes API and native connectors for CRM, e-commerce, LMS, and analytics platforms. We map data flow and event triggers so automation augments your current stack instead of replacing it."
  },
  {
    question: "How is pricing structured for additional journeys?",
    answer:
      "Additional sequences can be scoped as fixed-fee work packages or absorbed into a managed optimisation retainer. Both models include measurement, iteration, and governance support."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Auto Responder Module Pricing & Implementation";
  const description =
    "Explore Cloud MLM Software’s Auto Responder Module pricing, deliverables, and deployment roadmap to automate distributor and customer engagement.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/pricing/auto-responder-module", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AutoResponderPricingPageProps = {
  params: { lang: SupportedLocale };
};

export default function AutoResponderPricingPage({ params }: AutoResponderPricingPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-primary/5 via-background to-sky-50 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-sky-950">
        <div className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl dark:bg-primary/20" aria-hidden />
        <div className="pointer-events-none absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-900/40" aria-hidden />

        <div className="container relative grid gap-14 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.65fr)]">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-primary/40 dark:bg-primary/15">
              Pricing intelligence for modern MLM automation
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Auto Responder Module pricing and delivery blueprint.
            </h1>
            <p className="text-base text-muted-foreground sm:text-lg">
              Activate intelligent nurture journeys that keep distributors productive and customers loyal. Our pricing packages bundle strategy, configuration, and optimisation so your teams realise value from day one and keep momentum in every market.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Book a pricing session
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={pricingHref}>
                  Compare all modules
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {HERO_METRICS.map((metric) => {
              const Icon = metric.icon;
              return (
                <article
                  key={metric.label}
                  className="flex flex-col gap-3 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur dark:bg-slate-950/70"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">{metric.label}</p>
                    <p className="mt-1 text-2xl font-semibold text-foreground">{metric.value}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,0.6fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Intelligent automation with enterprise-grade guardrails.
            </h2>
            <p className="text-sm text-muted-foreground">
              We design each engagement to meet growth, compliance, and experience objectives. The Auto Responder Module combines multi-channel orchestration with AI-powered adaptations so you can modernise communications without adding manual overhead.
            </p>
          </div>
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/5 via-background to-emerald-50 p-6 shadow-sm dark:border-primary/40 dark:from-primary/10 dark:via-slate-950 dark:to-emerald-950/40">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                <CheckCircle className="h-6 w-6" aria-hidden />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Thought-leadership baked into every module</h3>
                <p className="text-sm text-muted-foreground">
                  Cloud MLM Software’s automation practice synthesises insights from hundreds of deployments, ensuring the module ships with benchmarked playbooks, governed experimentation, and AI-readiness from day one.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="flex h-full flex-col gap-5 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:bg-slate-950/70"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {benefit.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-950/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Deployment roadmap</h2>
            <p className="text-sm text-muted-foreground">
              A collaborative delivery model keeps stakeholders aligned and accelerates sign-off, data readiness, and adoption. Each stage concludes with measurable artefacts and executive checkpoints.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,1fr)]">
            <div className="space-y-6 rounded-3xl border border-primary/30 bg-background/80 p-6 shadow-sm dark:border-primary/40 dark:bg-slate-950/70">
              <h3 className="text-lg font-semibold text-foreground">Outcomes you can expect</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                  <span>Automation aligned to growth strategies, retention goals, and compliance mandates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                  <span>Executive-ready instrumentation that proves the value of each sequence.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                  <span>Continuous optimisation cycles supported by Cloud MLM Software specialists.</span>
                </li>
              </ul>
            </div>

            <ol className="relative space-y-10 border-l border-dashed border-border/60 pl-8">
              {ROADMAP.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <li key={stage.title} className="relative">
                    <div className="absolute -left-[41px] flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-background text-primary shadow-sm dark:bg-slate-950">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm dark:bg-slate-950/70">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-lg font-semibold text-foreground">{stage.title}</h3>
                        <span className="text-xs font-medium uppercase tracking-wide text-primary/70">{stage.duration}</span>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">{stage.description}</p>
                      <span className="mt-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary/90">
                        Phase {index + 1}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Pricing packages that scale with your ambition.
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
            Select the package that matches your automation maturity. Every engagement includes governance, enablement, and analytics designed for MLM and direct selling organisations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PACKAGES.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <article
                key={pkg.title}
                className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <span className="text-sm font-semibold text-primary">{pkg.price}</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{pkg.title}</h3>
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {pkg.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline">
                  <Link href={contactHref}>
                    Discuss this package
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,0.6fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Extend the module with AI-guided enhancements.
            </h2>
            <p className="text-sm text-muted-foreground">
              Keep your automation program ahead of the curve with optional accelerators focused on intelligence, adoption, and transparent reporting.
            </p>
          </div>
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-slate-50 p-6 shadow-sm dark:border-primary/40 dark:from-primary/15 dark:via-slate-950 dark:to-slate-950/70">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-1 h-5 w-5 text-primary" aria-hidden />
              <p className="text-sm text-muted-foreground">
                Enhancements are scoped as fixed outcomes with rapid delivery windows. We collaborate with your marketing, enablement, and data science teams to embed measurable improvements.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {ENHANCEMENTS.map((enhancement) => {
            const Icon = enhancement.icon;
            return (
              <article
                key={enhancement.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{enhancement.title}</h3>
                  <p className="text-sm text-muted-foreground">{enhancement.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30 py-20 dark:bg-slate-950/40">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.7fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Auto Responder Module FAQs
            </h2>
            <p className="text-sm text-muted-foreground">
              Get clarity on deployment expectations, investment models, and technical requirements before we begin.
            </p>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <article key={faq.question} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                <h3 className="text-base font-semibold text-foreground">{faq.question}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-background to-emerald-50 p-10 shadow-sm dark:border-primary/50 dark:from-primary/15 dark:via-slate-950 dark:to-emerald-950/40">
          <div className="absolute -left-8 top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl dark:bg-primary/20" aria-hidden />
          <div className="absolute bottom-0 right-0 h-40 w-40 translate-y-1/3 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.5fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to orchestrate outcomes with intelligent automation?
              </h2>
              <p className="text-sm text-muted-foreground">
                Share your automation vision and constraints. We’ll prepare a tailored proposal, timeline, and measurement framework grounded in Cloud MLM Software’s thought leadership.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/40 dark:bg-slate-950/70">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Connect with our automation architects</h3>
                <p className="text-sm text-muted-foreground">
                  Receive a curated walkthrough, cost breakdown, and optimisation roadmap aligned to your organisation’s growth objectives.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={contactHref}>
                    Schedule consultation
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={pricingHref}>
                    Explore pricing hub
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
