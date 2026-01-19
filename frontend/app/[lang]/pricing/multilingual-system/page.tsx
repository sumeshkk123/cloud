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
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Globe,
  Languages,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import {
  ChatDots,
  DeviceMobileSpeaker,
  GlobeHemisphereEast,
  Headset,
  SpeakerHigh,
  Translate
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  title: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Capability = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Package = {
  name: string;
  price: string;
  description: string;
  bestFor: string;
  deliverables: string[];
  icon: IconType;
};

type Workflow = {
  title: string;
  duration: string;
  summary: string;
  highlights: string[];
  icon: IconType;
};

type Support = {
  title: string;
  detail: string;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_METRICS: Metric[] = [
  {
    title: "Languages operationalised",
    value: "48",
    detail: "Distributor and customer experiences deployed with full localisation.",
    icon: Languages
  },
  {
    title: "Content turnaround",
    value: "72 hrs",
    detail: "Average time to publish updates across priority languages.",
    icon: Megaphone
  },
  {
    title: "Translation accuracy",
    value: "99.3%",
    detail: "Quality score from compliance and field leadership reviews.",
    icon: ShieldCheck
  },
  {
    title: "Adoption uplift",
    value: "28%",
    detail: "Increase in engagement from multilingual onboarding and support.",
    icon: Users
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Unified language orchestration",
    description:
      "Manage marketing, product, and support content in one governance model aligned to Cloud MLM Software modules.",
    bullets: [
      "Glossary and tone guidelines shared across teams",
      "CMS connectors with translation memory and version control",
      "Automated fallback logic for launches and urgent updates"
    ],
    icon: GlobeHemisphereEast
  },
  {
    title: "AI-assisted localisation",
    description:
      "Blend machine translation, human review, and AI quality checks to keep releases timely without sacrificing nuance.",
    bullets: [
      "Custom engines trained on industry terminology",
      "Human QA workflows with jurisdiction-specific reviewers",
      "Quality scoring and continuous improvement dashboards"
    ],
    icon: Sparkles
  },
  {
    title: "Omnichannel delivery",
    description:
      "Synchronise web, mobile, video, and support scripts so distributors and customers receive consistent messaging in every channel.",
    bullets: [
      "Portal, app, and document localisation pipelines",
      "Voice-over and caption services for events and academies",
      "Knowledge base and chatbot content synchronisation"
    ],
    icon: DeviceMobileSpeaker
  }
];

const PACKAGES: Package[] = [
  {
    name: "Launch bundle",
    price: "$12k fixed",
    description: "Set up localisation for core marketing, onboarding, and support assets in up to five languages.",
    bestFor: "Brands entering new priority markets",
    deliverables: [
      "Language governance playbook with glossary + tone guide",
      "CMS + Cloud MLM Software localisation workflows",
      "Training for marketing and compliance reviewers"
    ],
    icon: Translate
  },
  {
    name: "Growth accelerator",
    price: "$19k fixed",
    description: "Scale to 12+ languages with AI-assisted workflows, analytics, and voice/local content.",
    bestFor: "Organisations expanding across regions rapidly",
    deliverables: [
      "Automated review routing and stakeholder dashboards",
      "Video, audio, and chatbot localisation pipeline",
      "Engagement metrics tied to language rollout milestones"
    ],
    icon: SpeakerHigh
  },
  {
    name: "Enterprise localisation office",
    price: "Custom engagement",
    description: "Embed localisation into product, marketing, and compliance cycles with dedicated support.",
    bestFor: "Global enterprises operating in highly regulated markets",
    deliverables: [
      "Localization PMO with shared backlog and SLAs",
      "24/5 translation desk with emergency response",
      "Quarterly optimisation and innovation workshops"
    ],
    icon: Headset
  }
];

const WORKFLOW: Workflow[] = [
  {
    title: "Discovery & language modelling",
    duration: "Weeks 1-2",
    summary: "Capture market priorities, regulatory needs, and stakeholder processes to design localisation governance.",
    highlights: [
      "Persona-driven content mapping by channel",
      "Glossary creation with legal approval checkpoints",
      "Roadmap for phased language rollouts"
    ],
    icon: Globe
  },
  {
    title: "Platform configuration",
    duration: "Weeks 3-5",
    summary: "Integrate translation workflows with Cloud MLM Software modules, marketing systems, and support tools.",
    highlights: [
      "Automation scripts and translation memory setup",
      "Sandbox testing for portals, apps, and documents",
      "Training for content producers and reviewers"
    ],
    icon: BookOpen
  },
  {
    title: "Activation & optimisation",
    duration: "Weeks 6-7",
    summary: "Launch multilingual experiences, measure impact, and fine-tune cadence for future releases.",
    highlights: [
      "Quality assurance with field and compliance reps",
      "Engagement dashboards with localisation KPIs",
      "Optimisation backlog for upcoming campaigns"
    ],
    icon: ChatDots
  }
];

const SUPPORTS: Support[] = [
  {
    title: "Field enablement kits",
    detail: "Launch-day guides, scripts, and FAQs to equip leaders and customer care teams."
  },
  {
    title: "Always-on translation desk",
    detail: "Handle urgent updates, regulatory notices, or event scripts without disrupting pipeline."
  },
  {
    title: "Analytics concierge",
    detail: "Monthly insights tying language investments to conversion, retention, and support outcomes."
  }
];

const FAQS: Faq[] = [
  {
    question: "Can we reuse our existing translation vendors?",
    answer:
      "Yes. We integrate preferred vendors into the workflow while supplementing with our AI and reviewer network to meet speed and quality targets."
  },
  {
    question: "How do you ensure compliance across markets?",
    answer:
      "We embed legal review checkpoints, maintain regulator-approved glossaries, and provide audit trails of every translation decision."
  },
  {
    question: "What happens when products or promotions change?",
    answer:
      "Change requests trigger automated localisation tasks, notifications to reviewers, and updates across web, app, and knowledge assets."
  },
  {
    question: "Do you support community-sourced translations?",
    answer:
      "We provide contributor workflows with quality checks, so you can leverage field expertise while safeguarding consistency and compliance."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Multilingual System Pricing | Cloud MLM Software";
  const description =
    "Review pricing and roadmap for Cloud MLM Software’s multilingual system. Launch compliant, AI-assisted localisation across web, mobile, and support channels.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/pricing/multilingual-system", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MultilingualSystemPageProps = {
  params: { lang: SupportedLocale };
};

export default function MultilingualSystemPage({ params }: MultilingualSystemPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-purple-900 via-slate-900 to-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(192,132,252,0.18),transparent_45%),radial-gradient(circle_at_80%_25%,rgba(56,189,248,0.18),transparent_50%),linear-gradient(130deg,rgba(30,27,75,1) 20%,rgba(15,23,42,1) 70%)]" aria-hidden />
        <div className="container relative grid gap-16 py-24 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.58fr)]">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-purple-200">
              Localise every touchpoint with confidence
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Multilingual system pricing that scales storytelling worldwide.
            </h1>
            <p className="max-w-xl text-base text-slate-100/80">
              Cloud MLM Software blends AI translation, human expertise, and governance so teams can launch multilingual campaigns, portals, and support assets without friction.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Plan your localisation roadmap
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                <Link href={servicesHref}>
                  Explore services hub
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {HERO_METRICS.map((metric) => {
              const Icon = metric.icon;
              return (
                <article key={metric.title} className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-purple-200/80">{metric.title}</p>
                    <p className="mt-1 text-2xl font-semibold">{metric.value}</p>
                  </div>
                  <p className="text-sm text-slate-100/70">{metric.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Localisation engineered for momentum</h2>
          <p className="text-sm text-muted-foreground">
            Our multilingual system engagements distil lessons from high-performing direct selling brands worldwide. We embed localisation into everyday operations so marketing and product teams keep pace with global demand.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article key={capability.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:bg-slate-950/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {capability.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
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
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Packages for every growth stage</h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
              Each package bundles technology, process design, and enablement so your teams can deliver multilingual experiences with confidence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {PACKAGES.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <article key={pkg.name} className="flex h-full flex-col gap-5 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="text-sm font-semibold text-primary">{pkg.price}</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                  </div>
                  <div className="rounded-2xl border border-border/40 bg-muted/40 p-3 text-xs font-semibold uppercase tracking-wide text-primary/80 dark:bg-slate-900/60">
                    {pkg.bestFor}
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {pkg.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-start gap-2">
                        <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                        <span>{deliverable}</span>
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
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Seven-week localisation workflow</h2>
          <p className="text-sm text-muted-foreground">
            Our cadence keeps marketing, compliance, and technology teams aligned. Every phase ends with artefacts ready for leadership sign-off.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {WORKFLOW.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary/80">{step.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.summary}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {step.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/40 py-20 dark:bg-slate-950/50">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Support that keeps localisation humming</h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              Cloud MLM Software stays engaged beyond launch to protect speed, accuracy, and brand consistency.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {SUPPORTS.map((support) => (
              <article key={support.title} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                <h3 className="text-base font-semibold text-foreground">{support.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{support.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">Common localisation questions from marketing, compliance, and product leaders.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {FAQS.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
              <h3 className="text-base font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-background to-purple-50 p-10 shadow-sm dark:border-primary/50 dark:from-primary/25 dark:via-slate-950 dark:to-purple-950/40">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="absolute bottom-0 right-0 h-48 w-48 translate-y-1/3 rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-900/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to speak every market’s language?</h2>
              <p className="text-sm text-muted-foreground">
                Share your launch calendar and language priorities. We’ll craft a pricing proposal, timeline, and governance plan tuned to your stakeholders.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/45 dark:bg-slate-950/70">
              <p className="text-sm text-muted-foreground">
                Expect a discovery agenda and reviewer checklist within one business day. We stay partnered through every release cycle.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={contactHref}>
                    Schedule consultation
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={servicesHref}>
                    Explore services hub
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
