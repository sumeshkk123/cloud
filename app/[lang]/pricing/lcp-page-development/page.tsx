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
  BadgeCheck,
  BarChart2,
  MousePointer2,
  Globe2,
  Laptop,
  Rocket,
  Sparkles,
  Target
} from "lucide-react";
import {
  BracketsAngle,
  ChartPieSlice,
  ChatsTeardrop,
  Palette,
  PenNib,
  ShareNetwork,
  SquaresFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Showcase = {
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

type TimelineStep = {
  title: string;
  duration: string;
  summary: string;
  icon: IconType;
};

type Highlight = {
  title: string;
  result: string;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_METRICS: Metric[] = [
  {
    label: "LCPs launched",
    value: "320+",
    detail: "High-converting landing capture pages for MLM recruitment and product launches.",
    icon: MousePointer2
  },
  {
    label: "Average conversion lift",
    value: "48%",
    detail: "Compared to legacy lead capture experiences within 60 days of deployment.",
    icon: BarChart2
  },
  {
    label: "Global rollout support",
    value: "26 markets",
    detail: "Localization, compliance, and currency handling included in the blueprint.",
    icon: Globe2
  },
  {
    label: "Content refresh velocity",
    value: "2× faster",
    detail: "Marketing teams publish variants without developer dependency.",
    icon: Sparkles
  }
];

const SHOWCASES: Showcase[] = [
  {
    title: "Design systems aligned to story",
    description:
      "Pair brand identity with persuasive storytelling, responsive layouts, and ADA-friendly interactions tailored to your audiences.",
    bullets: [
      "Component library for hero, proof, and CTA sections",
      "Dark and light mode support with colour token guardrails",
      "Micro-interactions tuned for mobile-first experiences"
    ],
    icon: Palette
  },
  {
    title: "Conversion science built in",
    description:
      "Leverage Cloud MLM Software analytics to craft journeys optimised for recruiting, onboarding, and product sales.",
    bullets: [
      "Dynamic forms tied to compensation segments",
      "Real-time validation, progressive profiling, and consent capture",
      "A/B test-ready layouts with data instrumentation"
    ],
    icon: ChartPieSlice
  },
  {
    title: "Automation ready",
    description:
      "Connect LCPs to marketing automation, sales enablement, and CRM workflows without custom code every time.",
    bullets: [
      "Instant lead routing to distributors or success teams",
      "Triggered email, SMS, and WhatsApp follow-up sequences",
      "Dashboards revealing segment-level performance"
    ],
    icon: ShareNetwork
  }
];

const PACKAGES: Package[] = [
  {
    name: "Launch Lift",
    price: "$6.5k fixed",
    description: "A ready-to-launch LCP for a single campaign or product line with rapid testing baked in.",
    bestFor: "Pre-launch and product-drop teams",
    deliverables: [
      "Brand narrative workshop + copy kit",
      "Responsive LCP with two hero variations",
      "Automation wiring for initial follow-ups"
    ],
    icon: Rocket
  },
  {
    name: "Momentum Engine",
    price: "$11k fixed",
    description: "Deploy a modular LCP system with reusable blocks and analytics for ongoing campaigns.",
    bestFor: "Marketing teams running multiple promos",
    deliverables: [
      "Component library with localisation support",
      "Form variants for recruitment, sampling, and webinars",
      "Conversion dashboard with KPI guardrails"
    ],
    icon: Laptop
  },
  {
    name: "Enterprise Studio",
    price: "Custom",
    description: "Orchestrate LCPs across geographies, brands, and compliance regimes with ease.",
    bestFor: "Global enterprises with multi-team collaboration",
    deliverables: [
      "Design ops playbook and governance workflows",
      "Headless delivery to portals and microsites",
      "Integrated experimentation and AI-assisted copy"
    ],
    icon: Target
  }
];

const TIMELINE: TimelineStep[] = [
  {
    title: "Blueprint & concept",
    duration: "Week 1",
    summary: "Customer journey mapping, creative direction, and conversion goals aligned with stakeholders.",
    icon: PenNib
  },
  {
    title: "Build & integrate",
    duration: "Weeks 2-3",
    summary: "Low-fi to high-fi evolution, component development, and automation hookups executed in tandem.",
    icon: SquaresFour
  },
  {
    title: "Launch & optimise",
    duration: "Week 4",
    summary: "Quality assurance, launch readiness, and experimentation roadmap prepared for marketing teams.",
    icon: BracketsAngle
  }
];

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Recruitment uplift",
    result: "35% more qualified leads with targeted storytelling and progressive profiling."
  },
  {
    title: "Time-to-market",
    result: "Campaigns spin up in days thanks to reusable modules vetted by compliance."
  },
  {
    title: "Field enablement",
    result: "Distributor share packs and referrals baked into launch playbooks drive adoption."
  }
];

const FAQS: Faq[] = [
  {
    question: "What is included in an LCP Page development engagement?",
    answer:
      "We handle conversion strategy, UX/UI design, content collaboration, development, testing, and launch enablement. Every engagement ships with analytics instrumentation, automation hooks, and a knowledge base."
  },
  {
    question: "Can we manage the LCPs internally after launch?",
    answer:
      "Yes. You receive a component library, design tokens, and governance guidelines. We also train marketing and creative teams so they can publish variants without redeploying code."
  },
  {
    question: "How do you ensure local compliance?",
    answer:
      "We accommodate jurisdictional requirements for disclosures, imagery, consent, and data retention. Legal teams review at defined checkpoints with artefacts ready for sign-off."
  },
  {
    question: "What if we need multiple LCPs at once?",
    answer:
      "The Momentum and Enterprise packages are built for scale. We set up multi-tenant libraries, automation logic, and analytics so each team can launch quickly while sharing best practices."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "LCP Page Development Pricing | Cloud MLM Software";
  const description =
    "Review Cloud MLM Software’s LCP page development pricing, packages, and launch roadmap. Build landing capture experiences that convert and integrate with automation.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/pricing/lcp-page-development", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type LcpPageDevelopmentProps = {
  params: { lang: SupportedLocale };
};

export default function LcpPageDevelopmentPage({ params }: LcpPageDevelopmentProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHubHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(56,189,248,0.18),transparent_45%),radial-gradient(circle_at_88%_22%,rgba(14,165,233,0.18),transparent_50%),linear-gradient(130deg,rgb(10,21,36) 20%,rgb(15,32,55) 70%)]" aria-hidden />
        <div className="container relative grid gap-16 py-24 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.65fr)]">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-cyan-200">
              Landing capture pages engineered for conversion
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              LCP page development pricing for high-velocity MLM launches.
            </h1>
            <p className="max-w-xl text-base text-slate-100/80">
              Activate campaigns that turn curiosity into enrolment. Cloud MLM Software delivers conversion design, automation, and analytics in a single engagement so marketing teams can scale without friction.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Book a launch session
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                <Link href={pricingHubHref}>
                  Compare pricing catalogue
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {HERO_METRICS.map((metric) => {
              const Icon = metric.icon;
              return (
                <article key={metric.label} className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200/80">{metric.label}</p>
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
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.7fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Bring strategy, story, and systems together</h2>
            <p className="text-sm text-muted-foreground">
              Your landing experiences become the heartbeat of recruiting and product storytelling. We combine brand-first design, performance data, and automation to keep audiences moving forward.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {SHOWCASES.map((showcase) => {
              const Icon = showcase.icon;
              return (
                <article key={showcase.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{showcase.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{showcase.description}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {showcase.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <BadgeCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-950/40">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Packages aligned to your campaign velocity</h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
              Whether you’re launching a single promotion or orchestrating a global line-up, pick the package that matches your ambitions. Each bundle includes strategy, design, development, and enablement.
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
                    {pkg.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <BadgeCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                        <span>{item}</span>
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Four-week launch roadmap</h2>
          <p className="text-sm text-muted-foreground">
            Our cadence keeps decision makers informed while momentum stays high. Expect structured checkpoints, prototypes, and analytics instrumentation at every stage.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TIMELINE.map((step) => {
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
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/40 py-20 dark:bg-slate-950/50">
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.7fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Results our clients rely on</h2>
            <p className="text-sm text-muted-foreground">
              LCP success is measured in downstream revenue, not just click-through. Here’s what transformation looks like when marketing, product, and compliance collaborate.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {HIGHLIGHTS.map((highlight) => (
              <article key={highlight.title} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-primary/80">{highlight.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{highlight.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">Leadership teams usually clarify these topics before green-lighting delivery.</p>
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
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-background to-cyan-50 p-10 shadow-sm dark:border-primary/50 dark:from-primary/25 dark:via-slate-950 dark:to-cyan-950/40">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="absolute bottom-0 right-0 h-48 w-48 translate-y-1/3 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to transform your landing experiences?</h2>
              <p className="text-sm text-muted-foreground">
                Share your campaign goals and target cohorts. We’ll prepare a pricing proposal, creative direction, and launch plan aligned to your timeline.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/45 dark:bg-slate-950/70">
              <p className="text-sm text-muted-foreground">
                Expect a discovery agenda and stakeholder checklist within one business day. Our mission is to make every landing moment count.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={contactHref}>
                    Schedule consultation
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={pricingHubHref}>
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
