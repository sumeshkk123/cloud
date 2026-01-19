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
  Blocks,
  Code2,
  Globe,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  SquareStack,
  Wand2
} from "lucide-react";
import {
  BracketsAngle,
  CloudArrowUp,
  DeviceMobile,
  FingerprintSimple,
  PaintBrushBroad,
  RocketLaunch,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
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

type PackageTier = {
  name: string;
  price: string;
  description: string;
  bestFor: string;
  features: string[];
  icon: IconType;
};

type Milestone = {
  title: string;
  duration: string;
  description: string;
  outcomes: string[];
  icon: IconType;
};

type Enhancement = {
  title: string;
  detail: string;
  icon: IconType;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_STATS: Stat[] = [
  {
    label: "Drupal launches delivered",
    value: "140+",
    detail: "Conversion-focused experiences across wellness, fintech, and retail networks.",
    icon: Globe
  },
  {
    label: "Average time-to-launch",
    value: "7 weeks",
    detail: "From kick-off to CMS handover with Cloud MLM Software governance.",
    icon: RocketLaunch
  },
  {
    label: "Organic visibility lift",
    value: "34%",
    detail: "SEO and performance uplift measured within 90 days post launch.",
    icon: Sparkles
  },
  {
    label: "Marketing team productivity",
    value: "3.1×",
    detail: "Reusable components and workflows accelerate campaign execution.",
    icon: LayoutDashboard
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Brand-perfect experience",
    description:
      "Craft immersive Drupal front ends with composable design systems, localisation, and accessibility baked in.",
    bullets: [
      "Component library aligned to Cloud MLM Software visual language",
      "Design tokens for dark + light modes across devices",
      "Storytelling layouts optimised for high-intent conversions"
    ],
    icon: PaintBrushBroad
  },
  {
    title: "Revenue-ready integrations",
    description:
      "Sync Drupal with Cloud MLM Software modules for lead capture, enrolment, and knowledge management.",
    bullets: [
      "Secure SSO and distributor portal deep links",
      "Real-time product catalogue and promotions management",
      "Automated lead routing, nurture, and analytics dashboards"
    ],
    icon: SquareStack
  },
  {
    title: "Enterprise-grade governance",
    description:
      "Protect compliance and performance with build pipelines, monitoring, and approval workflows aligned to global standards.",
    bullets: [
      "Structured workflows for marketing, legal, and product",
      "Automated vulnerability scanning and performance tests",
      "Audit-ready change logs and rollback capabilities"
    ],
    icon: ShieldCheck
  }
];

const PACKAGE_TIERS: PackageTier[] = [
  {
    name: "Experience Starter",
    price: "$12k fixed",
    description: "Launch a conversion-optimised Drupal microsite aligned with your compensation story.",
    bestFor: "Early-stage or pre-launch teams",
    features: [
      "Brand discovery and UX workshop",
      "Component-based landing pages with multilingual support",
      "Cloud hosting setup with performance guardrails"
    ],
    icon: Wand2
  },
  {
    name: "Growth Platform",
    price: "$21k fixed",
    description: "Expand into multi-site Drupal operations with campaign automation woven in.",
    bestFor: "Scaling marketing teams and new regional launches",
    features: [
      "Reusable block library for dynamic product storytelling",
      "Integration with CRM, analytics, and automation stacks",
      "Content governance workflows with approval routing"
    ],
    icon: Blocks
  },
  {
    name: "Enterprise Orchestration",
    price: "Custom engagement",
    description: "Unify complex product portfolios, markets, and compliance stakeholders on one Drupal backbone.",
    bestFor: "Global direct selling incumbents",
    features: [
      "Composable architecture across brands and markets",
      "Headless delivery to apps, portals, and kiosks",
      "AI-assisted personalisation and localisation services"
    ],
    icon: Code2
  }
];

const MILESTONES: Milestone[] = [
  {
    title: "Strategy blueprint",
    duration: "Week 1",
    description:
      "Align objectives, user journeys, and success metrics. We translate your catalogue and compensation narrative into Drupal-friendly architecture.",
    outcomes: [
      "Experience map and technical scope",
      "Design direction with component inventory",
      "Risk register and governance model"
    ],
    icon: UsersThree
  },
  {
    title: "Experience build",
    duration: "Weeks 2-5",
    description:
      "Rapid prototyping, component development, and integration setup. QA pairs performance, accessibility, and security reviews in parallel.",
    outcomes: [
      "Responsive templates and regional variations",
      "SSO, lead capture, and automation plumbing",
      "Content migration with editorial training"
    ],
    icon: BracketsAngle
  },
  {
    title: "Launch & optimise",
    duration: "Weeks 6-7",
    description:
      "Soft launch with data validation, followed by public release and hypercare. Marketing receives optimisation dashboards and experimentation playbooks.",
    outcomes: [
      "Monitoring and alerting instrumentation",
      "Knowledge base and enablement assets",
      "90-day optimisation roadmap with KPIs"
    ],
    icon: CloudArrowUp
  }
];

const ENHANCEMENTS: Enhancement[] = [
  {
    title: "A/B testing accelerator",
    detail: "Pair Drupal with experiment frameworks to iterate hero messaging, CTAs, and conversion flows.",
    icon: Sparkles
  },
  {
    title: "Mobile-first storytelling",
    detail: "Progressive web app enhancements ensure fast, app-like experiences for field leaders on the go.",
    icon: DeviceMobile
  },
  {
    title: "Security hardening",
    detail: "Implement role-based permissions, bot protection, and compliance scanning aligned to regulated markets.",
    icon: FingerprintSimple
  },
  {
    title: "Design ops enablement",
    detail: "Train in-house teams on component governance, contributing guidelines, and release cadences.",
    icon: PaintBrushBroad
  }
];

const FAQS: Faq[] = [
  {
    question: "What differentiates the Drupal CMS Website offer from standard agencies?",
    answer:
      "Cloud MLM Software unifies Drupal builds with compensation, enrolment, and distributor operations. You get conversion-ready storytelling plus automation, compliance, and analytics your teams can rely on."
  },
  {
    question: "Can we migrate existing content or templates?",
    answer:
      "Yes. We audit current assets, prioritise high-performing content, and refactor templates into reusable Drupal components with localisation and accessibility considerations."
  },
  {
    question: "How do you ensure SEO and performance best practices?",
    answer:
      "Every build includes Core Web Vitals monitoring, schema optimisation, and structured content models. We benchmark progress pre- and post-launch to keep momentum visible."
  },
  {
    question: "What support is available after launch?",
    answer:
      "You receive 90 days of optimisation support. From there, select managed services or enable your internal team with design ops, developer training, and advisory retainers."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Drupal CMS Website Pricing for Cloud MLM Software";
  const description =
    "Explore Cloud MLM Software’s Drupal CMS Website pricing, packages, and roadmap. Launch a conversion-first site with direct selling integrations and enterprise governance.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/pricing/drupal-cms-website", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type DrupalCmsWebsitePageProps = {
  params: { lang: SupportedLocale };
};

export default function DrupalCmsWebsitePage({ params }: DrupalCmsWebsitePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const servicesHref = buildLocalizedPath("/services/web-development", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-slate-950 text-white dark:bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(94,234,212,0.18),transparent_40%),radial-gradient(circle_at_100%_10%,rgba(59,130,246,0.16),transparent_45%),linear-gradient(140deg,rgba(15,23,42,1) 20%,rgba(22,38,61,1) 70%)]" aria-hidden />
        <div className="container relative grid gap-16 py-24 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.7fr)]">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-cyan-200">
              Drupal crafted for direct selling growth
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Drupal CMS website pricing with Cloud MLM Software expertise.
            </h1>
            <p className="max-w-xl text-base text-slate-100/80">
              Build a high-converting digital home that integrates seamlessly with Cloud MLM Software. From brand storytelling to automation-ready infrastructure, we package everything needed to launch quickly and iterate intelligently.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Book a Drupal pricing session
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                <Link href={servicesHref}>
                  Review implementation services
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {HERO_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <article key={stat.label} className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200/80">{stat.label}</p>
                    <p className="mt-1 text-2xl font-semibold">{stat.value}</p>
                  </div>
                  <p className="text-sm text-slate-100/70">{stat.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.7fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A Drupal stack engineered for conversion</h2>
            <p className="text-sm text-muted-foreground">
              We combine Drupal craftsmanship with Cloud MLM Software product knowledge. The result is an experience that converts curious prospects into committed distributors while staying compliant worldwide.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {CAPABILITIES.map((capability) => {
              const Icon = capability.icon;
              return (
                <article key={capability.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
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
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-950/40">
        <div className="container space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Packages to match your growth stage</h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
              Select the Drupal delivery model that meets your marketing velocity, localisation needs, and integration complexity. Every package includes governance, enablement, and performance instrumentation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {PACKAGE_TIERS.map((tier) => {
              const Icon = tier.icon;
              return (
                <article key={tier.name} className="flex h-full flex-col gap-5 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <span className="text-sm font-semibold text-primary">{tier.price}</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
                    <p className="text-sm text-muted-foreground">{tier.description}</p>
                  </div>
                  <div className="rounded-2xl border border-border/40 bg-muted/40 p-3 text-xs font-semibold uppercase tracking-wide text-primary/80 dark:bg-slate-900/60">
                    {tier.bestFor}
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline">
                    <Link href={contactHref}>
                      Discuss this tier
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Implementation milestones</h2>
          <p className="text-sm text-muted-foreground">
            A transparent cadence keeps stakeholders aligned. Each milestone culminates in artefacts your marketing, product, and compliance teams can approve with confidence.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {MILESTONES.map((milestone) => {
            const Icon = milestone.icon;
            return (
              <article key={milestone.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary/80">{milestone.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{milestone.title}</h3>
                <p className="text-sm text-muted-foreground">{milestone.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {milestone.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{outcome}</span>
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Optional enhancements</h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              Layer strategic services that elevate your launch from polished to exceptional. Each enhancement is scoped as a fixed outcome with rapid value realisation.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {ENHANCEMENTS.map((enhancement) => {
              const Icon = enhancement.icon;
              return (
                <article key={enhancement.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm dark:bg-slate-950/70">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{enhancement.title}</h3>
                  <p className="text-sm text-muted-foreground">{enhancement.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">Answers your marketing, technology, and compliance leaders typically request before kick-off.</p>
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
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-background to-indigo-50 p-10 shadow-sm dark:border-primary/50 dark:from-primary/25 dark:via-slate-950 dark:to-indigo-950/40">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="absolute bottom-0 right-0 h-48 w-48 translate-y-1/3 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-900/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.45fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Let’s design a Drupal experience reps love.</h2>
              <p className="text-sm text-muted-foreground">
                Share your content, integration, and compliance requirements. We’ll assemble a pricing proposal and delivery plan aligned to your launch timeline.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/45 dark:bg-slate-950/70">
              <p className="text-sm text-muted-foreground">
                Expect a discovery call agenda and stakeholder checklist within one business day. We ensure your Drupal build becomes a revenue engine, not just a brochure.
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
                    Explore services
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
