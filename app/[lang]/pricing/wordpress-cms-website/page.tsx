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
  BadgeCheck,
  Blocks,
  Globe,
  LayoutDashboard,
  LifeBuoy,
  Server,
  Sparkles,
  Users
} from "lucide-react";
import {
  BracketsSquare,
  ChartBar,
  Code,
  DeviceMobile,
  PaintBrush,
  ShieldCheckered,
  Stack
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

type Phase = {
  title: string;
  duration: string;
  summary: string;
  outputs: string[];
  icon: IconType;
};

type AddOn = {
  title: string;
  detail: string;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_METRICS: Metric[] = [
  {
    title: "WordPress launches delivered",
    value: "85+",
    detail: "Conversion-first marketing and recruiting sites for direct selling brands.",
    icon: LayoutDashboard
  },
  {
    title: "Average build timeline",
    value: "6 weeks",
    detail: "Discovery to production-ready WordPress site with Cloud MLM Software integration.",
    icon: Blocks
  },
  {
    title: "Organic traffic lift",
    value: "42%",
    detail: "Measured 90 days after migration to our WordPress stack.",
    icon: ChartBar
  },
  {
    title: "Conversion rate improvement",
    value: "28%",
    detail: "Lead and enrolment forms optimised with data-driven iteration.",
    icon: Sparkles
  }
];

const CAPABILITIES: Capability[] = [
  {
    title: "Brand experience design",
    description:
      "UX and visual design tailored to position your story, products, and distributor journeys with clarity.",
    bullets: [
      "Component-driven design system for hero, proof, storytelling, and CTA sections",
      "Accessibility-first, mobile-optimised interactions",
      "Immersive landing templates for campaigns and funnels"
    ],
    icon: PaintBrush
  },
  {
    title: "Performance and SEO",
    description:
      "Headless-ready WordPress architecture with speed, schema, and localisation best practices built in.",
    bullets: [
      "Optimised Core Web Vitals with caching, image, and script strategies",
      "Multilingual and regional SEO support with structured data",
      "Analytics instrumentation connecting traffic to CRM and Cloud MLM Software metrics"
    ],
    icon: Server
  },
  {
    title: "Integrations and governance",
    description:
      "Keep marketing agile and compliant with automation, CI/CD, and workflow guardrails.",
    bullets: [
      "Cloud MLM Software data sync for enrolment, products, and testimonials",
      "Marketing automation, CRM, and analytics connectors",
      "Content governance workflows with staging environments and approvals"
    ],
    icon: BracketsSquare
  }
];

const PACKAGES: Package[] = [
  {
    name: "Growth launch",
    price: "$18k fixed",
    description: "High-conversion marketing site with campaign-ready templates and lead flows.",
    bestFor: "Teams launching or re-platforming core marketing experiences.",
    deliverables: [
      "Brand and UX exploration, copy & content guidelines",
      "Component library with blog, landing, and resource pages",
      "Hosting and deployment automation with monitoring"
    ],
    icon: Stack
  },
  {
    name: "Experience hub",
    price: "$26k fixed",
    description: "Advanced personalisation, localisation, and automation to support multi-market growth.",
    bestFor: "Scaling organisations balancing marketing, recruiting, and support journeys.",
    deliverables: [
      "Personalised content blocks tied to Cloud MLM Software data",
      "Multilingual support with translation workflows",
      "Campaign builder templates with analytics dashboards"
    ],
    icon: Globe
  },
  {
    name: "Enterprise platform",
    price: "Custom engagement",
    description: "Composable WordPress platform with headless delivery, advanced security, and optimisation office.",
    bestFor: "Enterprises orchestrating complex product portfolios and markets.",
    deliverables: [
      "Headless or hybrid architecture with CDN optimisation",
      "Security hardening, SSO, and compliance automation",
      "Dedicated optimisation squad with experimentation roadmap"
    ],
    icon: ShieldCheckered
  }
];

const PHASES: Phase[] = [
  {
    title: "Strategy & architecture",
    duration: "Week 1",
    summary: "Brand, content, and technical discovery to define experience blueprint and success metrics.",
    outputs: [
      "Experience map with personas and journeys",
      "Technical architecture + hosting plan",
      "Content and SEO action plan"
    ],
    icon: LayoutDashboard
  },
  {
    title: "Design & build",
    duration: "Weeks 2-5",
    summary: "Design system creation, WordPress development, and integration with Cloud MLM Software and marketing stack.",
    outputs: [
      "Figma component library and approved content modules",
      "Responsive WordPress templates with Gutenberg or custom blocks",
      "Integrated lead forms, automation, and analytics tracking"
    ],
    icon: Code
  },
  {
    title: "Launch & optimise",
    duration: "Week 6",
    summary: "Site launch with QA, SEO validation, performance tuning, and training for marketing teams.",
    outputs: [
      "Launch checklist + hypercare dashboard",
      "Marketing enablement and training materials",
      "Optimisation backlog with experimentation priorities"
    ],
    icon: LifeBuoy
  }
];

const ADDONS: AddOn[] = [
  {
    title: "Content production",
    detail: "Copywriting, visual assets, and localisation support to accelerate go-live."
  },
  {
    title: "Campaign accelerator",
    detail: "Landing page sprints tied to product launches or recruiting pushes."
  },
  {
    title: "Ongoing optimisation",
    detail: "Monthly CRO, SEO, and marketing automation experiments with reporting."
  }
];

const FAQS: Faq[] = [
  {
    question: "Do you provide hosting and maintenance?",
    answer:
      "Yes. We manage secure hosting, performance monitoring, and updates, or work with your preferred provider using our DevOps playbooks."
  },
  {
    question: "Can we migrate our existing content?",
    answer:
      "We audit current assets, migrate high-value content, and provide SEO safeguards to retain rankings during transition."
  },
  {
    question: "How do you ensure compliance with direct selling regulations?",
    answer:
      "Templates include required disclaimers, income statements, and approval workflows so content stays within regulatory guidelines."
  },
  {
    question: "What happens after launch?",
    answer:
      "You receive training, documentation, and optimisation backlog. Many clients retain us for ongoing CRO, SEO, and marketing automation support."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "WordPress CMS Website Pricing | Cloud MLM Software";
  const description =
    "Explore pricing, roadmap, and deliverables for Cloud MLM Software’s WordPress CMS websites. Launch conversion-first marketing sites with enterprise governance.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/pricing/wordpress-cms-website", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type WordPressWebsitePageProps = {
  params: { lang: SupportedLocale };
};

export default function WordPressWebsitePage({ params }: WordPressWebsitePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const servicesHref = buildLocalizedPath("/services/web-development", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-indigo-950 via-slate-950 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(129,140,248,0.24),transparent_45%),radial-gradient(circle_at_82%_24%,rgba(94,234,212,0.18),transparent_50%),linear-gradient(135deg,rgba(15,23,42,1) 20%,rgba(30,27,75,1) 70%)]" aria-hidden />
        <div className="container relative grid gap-16 py-24 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.6fr)]">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-indigo-200">
              WordPress engineered for direct selling growth
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              WordPress CMS website pricing with Cloud MLM Software expertise.
            </h1>
            <p className="max-w-xl text-base text-slate-100/80">
              Launch a fast, secure, and conversion-optimised WordPress experience that connects seamlessly to your Cloud MLM Software ecosystem. Our packages bundle strategy, design, engineering, and enablement.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Schedule pricing session
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                <Link href={servicesHref}>
                  Review services hub
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
                    <p className="text-xs font-semibold uppercase tracking-wide text-indigo-200/80">{metric.title}</p>
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Build a site that converts and scales</h2>
          <p className="text-sm text-muted-foreground">
            Our WordPress engagements combine product storytelling, SEO, and integrations to support marketing, recruiting, and compliance teams simultaneously.
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Packages aligned to your digital roadmap</h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
              From launch-focused builds to enterprise-grade platforms, choose the package with the features, integrations, and enablement you need.
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
                        <BadgeCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Six-week delivery roadmap</h2>
          <p className="text-sm text-muted-foreground">
            Transparent checkpoints keep marketing, technology, and compliance teams aligned while we build and launch your site.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PHASES.map((phase) => {
            const Icon = phase.icon;
            return (
              <article key={phase.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary/80">{phase.duration}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.summary}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {phase.outputs.map((output) => (
                    <li key={output} className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{output}</span>
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Add-ons to accelerate launch</h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              Expand the engagement with services that drive adoption and ROI even faster.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {ADDONS.map((addon) => (
              <article key={addon.title} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                <h3 className="text-base font-semibold text-foreground">{addon.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{addon.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">Marketing, IT, and compliance leaders ask these before kickoff.</p>
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
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-background to-violet-100 p-10 shadow-sm dark:border-primary/50 dark:from-primary/25 dark:via-slate-950 dark:to-violet-950/40">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="absolute bottom-0 right-0 h-48 w-48 translate-y-1/3 rounded-full bg-violet-200/30 blur-3xl dark:bg-violet-900/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to launch a WordPress site that converts?</h2>
              <p className="text-sm text-muted-foreground">
                Share your goals, content requirements, and integration landscape. We’ll deliver a pricing proposal and roadmap aligned to your vision.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/45 dark:bg-slate-950/70">
              <p className="text-sm text-muted-foreground">
                Expect a discovery agenda and content inventory checklist within one business day. We remain your partner through launch and optimisation.
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
