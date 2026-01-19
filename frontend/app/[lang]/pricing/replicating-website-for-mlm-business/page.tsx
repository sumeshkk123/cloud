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
  Globe2,
  Layout,
  Link2,
  Share,
  Sparkles,
  Users
} from "lucide-react";
import {
  ChartPie,
  DeviceMobileCamera,
  Lightning,
  MegaphoneSimple,
  StackSimple,
  WebhooksLogo
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  title: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Feature = {
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
  highlights: string[];
  icon: IconType;
};

type Milestone = {
  title: string;
  duration: string;
  summary: string;
  deliverables: string[];
  icon: IconType;
};

type Benefit = {
  title: string;
  detail: string;
};

type Faq = {
  question: string;
  answer: string;
};

const HERO_METRICS: Metric[] = [
  {
    title: "Replicated sites managed",
    value: "120k+",
    detail: "Distributor experiences launched across 37 countries.",
    icon: Globe2
  },
  {
    title: "Time to launch",
    value: "4 weeks",
    detail: "From design handoff to live, compliant replicated sites.",
    icon: Lightning
  },
  {
    title: "Lead conversion uplift",
    value: "31%",
    detail: "Average increase after implementing personalised funnels.",
    icon: ChartPie
  },
  {
    title: "Marketing workload saved",
    value: "2.8×",
    detail: "Content and asset updates pushed once, replicated instantly.",
    icon: Share
  }
];

const FEATURES: Feature[] = [
  {
    title: "Brand-consistent templates",
    description:
      "Launch responsive templates that adapt to distributor preferences while staying on-brand and compliant.",
    bullets: [
      "Modular sections for hero, offer, proof, and capture flows",
      "Dark/light support, custom highlight colours, and typography tokens",
      "Compliance-approved block library with disclaimers and regional messaging"
    ],
    icon: Layout
  },
  {
    title: "Personalisation engine",
    description:
      "Distributors showcase product mixes, testimonials, and calls to action tailored to their audiences.",
    bullets: [
      "Profile-driven content slots (product focus, languages, campaigns)",
      "Dynamic lead routing and CRM connectors",
      "Analytics tying site performance to rank, incentive, and region"
    ],
    icon: WebhooksLogo
  },
  {
    title: "Marketing automation",
    description:
      "Keep replicated sites fresh with centralised control and automated launch sequences.",
    bullets: [
      "Campaign presets with time-boxed offers and landing pages",
      "Scheduled updates and A/B testing at scale",
      "Asset governance with role-based approvals"
    ],
    icon: MegaphoneSimple
  }
];

const PACKAGES: Package[] = [
  {
    name: "Launch network",
    price: "$15k fixed",
    description: "Deploy core replicated sites with automated onboarding and compliance workflows.",
    bestFor: "Emerging brands supporting new distributor cohorts.",
    highlights: [
      "Two base templates with configurable sections",
      "Lead capture, CRM sync, and email automation primers",
      "Launch playbook with onboarding and compliance training"
    ],
    icon: StackSimple
  },
  {
    name: "Growth network",
    price: "$24k fixed",
    description: "Advanced personalisation, localisation, and analytics to drive distributor-led growth.",
    bestFor: "Scaling organisations operating across multiple regions.",
    highlights: [
      "Multilingual content and regional storefront integration",
      "Distributor microsite analytics dashboard",
      "Campaign automation library with nurture journeys"
    ],
    icon: Sparkles
  },
  {
    name: "Enterprise network",
    price: "Custom engagement",
    description: "Highly tailored designs, integrations, and optimisation office for large networks.",
    bestFor: "Global enterprises with complex compliance and branding needs.",
    highlights: [
      "Dynamic product catalogues and e-commerce checkout",
      "Tech partner integrations (CDP, DAM, analytics suites)",
      "Dedicated optimisation squad with experimentation roadmap"
    ],
    icon: Users
  }
];

const MILESTONES: Milestone[] = [
  {
    title: "Blueprint and design",
    duration: "Week 1",
    summary: "Align on brand, compliance, and funnel strategy. Produce template concepts and content map.",
    deliverables: [
      "Experience blueprint with personas and journeys",
      "Component inventory and style direction",
      "Compliance checklist and content governance model"
    ],
    icon: Layout
  },
  {
    title: "Build and integration",
    duration: "Weeks 2-3",
    summary: "Develop templates, configure personalisation rules, and connect data sources.",
    deliverables: [
      "Responsive template library in Cloud MLM Software",
      "Profile-based dynamic content rules",
      "Lead routing and analytics instrumentation"
    ],
    icon: Link2
  },
  {
    title: "Launch and optimisation",
    duration: "Week 4",
    summary: "Roll out to pilot cohorts, enable teams, and establish ongoing optimisation cadence.",
    deliverables: [
      "Launcher toolkit for distributors and field leaders",
      "Analytics dashboards and adoption tracking",
      "Optimisation backlog with campaign roadmap"
    ],
    icon: Lightning
  }
];

const BENEFITS: Benefit[] = [
  {
    title: "On-brand differentiation",
    detail: "Distributors express their voice without drifting from corporate standards."
  },
  {
    title: "Compliance peace of mind",
    detail: "Central approvals, version control, and audit history out-of-the-box."
  },
  {
    title: "Speed to market",
    detail: "Campaigns launch simultaneously across thousands of sites with one publish."
  }
];

const FAQS: Faq[] = [
  {
    question: "Can distributors customise their replicated site?",
    answer:
      "Yes. They personalise highlighted products, testimonials, and calls to action within compliance-approved limits. You define what can be changed and what stays standardised."
  },
  {
    question: "Do you support multilingual content?",
    answer:
      "Absolutely. We pair this module with our multilingual system so copy, assets, and disclaimers adapt to local markets automatically."
  },
  {
    question: "How are leads routed?",
    answer:
      "Lead forms and chat widgets connect to Cloud MLM Software or your CRM, ensuring distributors receive real-time notifications with attribution tracking."
  },
  {
    question: "What analytics are provided?",
    answer:
      "Dashboards surface visit, lead, and conversion data per distributor, plus aggregate insights for marketing, compliance, and executive teams."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Replicating Website for MLM Business Pricing";
  const description =
    "Review pricing, packages, and roadmap for Cloud MLM Software’s replicating websites. Launch compliant, on-brand distributor microsites fast.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/pricing/replicating-website-for-mlm-business", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ReplicatingWebsitePageProps = {
  params: { lang: SupportedLocale };
};

export default function ReplicatingWebsitePage({ params }: ReplicatingWebsitePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(59,130,246,0.22),transparent_45%),radial-gradient(circle_at_78%_26%,rgba(56,189,248,0.18),transparent_50%),linear-gradient(140deg,rgba(15,23,42,1) 15%,rgba(30,64,175,0.85) 70%)]" aria-hidden />
        <div className="container relative grid gap-16 py-24 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.58fr)]">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-blue-200">
              Distributor-ready experiences at scale
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Replicating website pricing for modern MLM growth.
            </h1>
            <p className="max-w-xl text-base text-slate-100/80">
              Cloud MLM Software equips your field with compliant, on-brand microsites that convert. We deliver templates, personalisation, and automation so every distributor launches ready to win.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                <Link href={contactHref}>
                  Plan your rollout
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                <Link href={pricingHref}>
                  Explore pricing hub
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
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-200/80">{metric.title}</p>
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What every replicated site engagement includes</h2>
          <p className="text-sm text-muted-foreground">
            We package brand, compliance, and automation best practices so marketing and field teams stay aligned without sacrificing creativity.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:bg-slate-950/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {feature.bullets.map((bullet) => (
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Choose the network package that fits</h2>
            <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
              Packages scale with your field size, localisation needs, and automation ambitions. Each tier ships with detailed enablement and governance assets.
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
                    {pkg.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <BadgeCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                        <span>{highlight}</span>
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Four-week implementation milestones</h2>
          <p className="text-sm text-muted-foreground">
            Clear checkpoints keep marketing, compliance, and technology leaders aligned while we accelerate launch.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
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
                <p className="text-sm text-muted-foreground">{milestone.summary}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {milestone.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex items-start gap-2">
                      <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      <span>{deliverable}</span>
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Benefits for corporate and field teams</h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              Replicated sites become more than a compliance checkbox—they drive growth.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <article key={benefit.title} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:bg-slate-950/70">
                <h3 className="text-base font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{benefit.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">Marketing, compliance, and distributor success teams ask these before kickoff.</p>
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
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-background to-blue-100 p-10 shadow-sm dark:border-primary/50 dark:from-primary/25 dark:via-slate-950 dark:to-blue-950/40">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl dark:bg-primary/30" aria-hidden />
          <div className="absolute bottom-0 right-0 h-48 w-48 translate-y-1/3 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-900/30" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to amplify every distributor online?</h2>
              <p className="text-sm text-muted-foreground">
                Share your launch calendar, localisation needs, and integrations. We’ll prepare a pricing proposal and timeline tailored to your growth strategy.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/30 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/45 dark:bg-slate-950/70">
              <p className="text-sm text-muted-foreground">
                Expect a discovery agenda and content inventory checklist within one business day. We partner with you through launch and continuous optimisation.
              </p>
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
