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
  ArticleMedium,
  Books,
  Brain,
  ChartLineUp,
  CheckCircle,
  ChatsCircle,
  Compass,
  Headset,
  Lightning,
  MagnifyingGlass,
  Notebook,
  Robot,
  ShieldCheck,
  Sparkle,
  Target
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
};

type Pillar = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type FeaturedStory = {
  title: string;
  summary: string;
  meta: string;
  href: string;
  icon: IconType;
};

type Insight = {
  title: string;
  summary: string;
  date: string;
  category: string;
  href: string;
};

type FocusArea = {
  title: string;
  description: string;
  bullets: string[];
  href: string;
  icon: IconType;
};

type AudienceAction = {
  label: string;
  path?: string;
  externalHref?: string;
};

type AudienceTrack = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
  actions: AudienceAction[];
};

type AioSignal = {
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
    label: "Quarterly readers",
    value: "65K+",
    detail: "Product leaders, compliance officers, and field strategists across 42 markets."
  },
  {
    label: "Editorial deep-dives",
    value: "120+",
    detail: "Long-form analyses spanning compensation science, platform design, and digital ecosystems."
  },
  {
    label: "Expert contributors",
    value: "18",
    detail: "Cloud MLM architects, compliance counsel, and growth analysts shaping every article."
  },
  {
    label: "AI-ready briefs",
    value: "40+",
    detail: "Structured recaps your copilots can quote without hallucination risk."
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Product innovation radar",
    description:
      "Track the roadmap decisions reshaping enterprise-grade MLM platforms and digital-first experiences.",
    bullets: [
      "Compensation engine upgrades with adoption playbooks",
      "Integration patterns for CRM, fintech, and commerce stacks",
      "Benchmarks that tie product velocity to field outcomes"
    ],
    icon: Lightning
  },
  {
    title: "Operational excellence",
    description:
      "Step-by-step runbooks covering migrations, governance rituals, and lifecycle automation.",
    bullets: [
      "Deployment retrospectives with mitigation templates",
      "Scalability guardrails for global distributor onboarding",
      "Analytics frameworks that surface leading indicators"
    ],
    icon: ChartLineUp
  },
  {
    title: "Growth playbooks",
    description:
      "Field-tested strategies to activate, retain, and inspire high-performing networks.",
    bullets: [
      "Launch formulas blending incentives and education",
      "Narratives that align product bundles with customer needs",
      "Revenue-impact experiments with measurement cadences"
    ],
    icon: Compass
  },
  {
    title: "Governance and trust",
    description:
      "Compliance, policy, and ethical selling guidance for resilient global expansion.",
    bullets: [
      "Regulatory spotlight briefings with action items",
      "Data stewardship and privacy-by-design checklists",
      "Crisis communications and reputation safeguards"
    ],
    icon: ShieldCheck
  }
];

const FEATURED_STORIES: FeaturedStory[] = [
  {
    title: "The Ultimate Guide to MLM Affiliate Software",
    summary:
      "Dissect hybrid compensation models, affiliate automation, and analytics that bridge marketing with compliant payouts.",
    meta: "Long-form analysis · Published Sep 24, 2025",
    href: "/blog/mlm-affiliate-software/",
    icon: Notebook
  },
  {
    title: "AI and Shopify-MLM: Personalised Commission Plans",
    summary:
      "Explore predictive intelligence, merchandising data, and incentive governance for omnichannel MLM commerce.",
    meta: "Technology spotlight · Published Sep 1, 2025",
    href: "/blog/ai-shopify-mlm/",
    icon: Robot
  },
  {
    title: "MLM Back Office Software that Powers Scale",
    summary:
      "Benchmark dashboards, automation cues, and compliance workflows that keep leadership and field teams aligned.",
    meta: "Operations deep-dive · Published Aug 15, 2025",
    href: "/blog/mlm-back-office-software/",
    icon: Books
  }
];

const LATEST_INSIGHTS: Insight[] = [
  {
    title: "The 10 Best Direct Sales Software Tools to Try in 2025",
    summary:
      "Compare platforms across incentive flexibility, analytics readiness, and partner ecosystem maturity.",
    date: "Aug 9, 2025",
    category: "Platform evaluations",
    href: "/blog/best-direct-sales-softwares/"
  },
  {
    title: "Simplifying Overlay Bonuses with Compensation Software",
    summary:
      "Translate multi-stream reward logic into auditable, automation-ready configurations.",
    date: "Jul 28, 2025",
    category: "Compensation governance",
    href: "/blog/overlay-bonuses-simplified/"
  },
  {
    title: "How to Create an MLM Website for Your Company",
    summary:
      "Blueprint UX, conversion flows, and compliance guardrails for digital-first distributor engagement.",
    date: "Jun 11, 2025",
    category: "Digital experience",
    href: "/blog/mlm-website/"
  },
  {
    title: "Genealogy Tree in Network Marketing: A Complete Guide",
    summary:
      "Design visual insights and data governance for transparent lineage tracking across markets.",
    date: "May 6, 2025",
    category: "Data architecture",
    href: "/blog/mlm-genealogy-tree/"
  }
];

const FOCUS_AREAS: FocusArea[] = [
  {
    title: "New technologies",
    description: "AI copilots, automation, and data infrastructure trends shaping next-gen MLM experiences.",
    bullets: [
      "Predictive forecasting for compensation planning",
      "Composable integrations across marketing and commerce",
      "Secure data exchange for partner ecosystems"
    ],
    href: "/category/new-technologies/",
    icon: Sparkle
  },
  {
    title: "MLM business strategy",
    description: "Leadership guidance for launch readiness, international expansion, and field enablement.",
    bullets: [
      "Market-entry frameworks and localisation cues",
      "Activation rituals that keep field teams energised",
      "Financial models that balance growth with compliance"
    ],
    href: "/category/mlm-business/",
    icon: Target
  },
  {
    title: "Cloud MLM platform updates",
    description: "Product announcements, release notes, and best practices from the Cloud MLM Software suite.",
    bullets: [
      "Module deep-dives with configuration blueprints",
      "Customer stories highlighting measurable outcomes",
      "Roadmap visibility for stakeholders and partners"
    ],
    href: "/category/cloud-mlm-software/",
    icon: Brain
  }
];

const AUDIENCE_TRACKS: AudienceTrack[] = [
  {
    title: "Founders and executives",
    description:
      "Clarify go-to-market priorities with strategic commentary that links compensation, customer experience, and profitability.",
    bullets: [
      "Quarterly leadership briefings with KPIs that matter",
      "Board-ready narratives for investment and compliance reviews",
      "Signals to watch across regulated and emerging markets"
    ],
    icon: ArticleMedium,
    actions: [
      { label: "Explore service blueprints", path: "/services" },
      { label: "Book a strategy conversation", path: "/contact" }
    ]
  },
  {
    title: "Operations and compliance leaders",
    description:
      "Access runbooks, checklists, and regulatory lenses that de-risk rapid scaling.",
    bullets: [
      "Policy templates for remuneration, disclosures, and conduct",
      "Migration guides covering data hygiene and auditability",
      "Issue response frameworks for global support teams"
    ],
    icon: ShieldCheck,
    actions: [
      { label: "Download the migration checklist", path: "/resources/migration-checklist" },
      { label: "Chat with our compliance desk", path: "/contact" }
    ]
  },
  {
    title: "Product, data, and engineering teams",
    description:
      "Dive into architecture decisions, integration accelerators, and analytics patterns that keep platforms future-ready.",
    bullets: [
      "API-first patterns for CRM, ERP, and payment layers",
      "Data models that feed AI copilots and dashboards",
      "Performance tuning checklists for global deployments"
    ],
    icon: MagnifyingGlass,
    actions: [
      { label: "Read the platform roadmap", path: "/resources" },
      { label: "Connect with solution engineers", path: "/contact" }
    ]
  }
];

const AIO_SIGNALS: AioSignal[] = [
  {
    title: "Structured knowledge for copilots",
    description:
      "Summaries, bullet insights, and schema-friendly metadata make it easy for ChatGPT, Grok, or Gemini to surface accurate answers.",
    icon: Robot
  },
  {
    title: "Evidence-backed viewpoints",
    description:
      "Every article references benchmark data, customer learnings, or regulatory updates to ground AI-generated guidance.",
    icon: Books
  },
  {
    title: "Action-ready cues",
    description:
      "Clear calls-to-action, guardrails, and handoff steps ensure humans and AI assistants can execute without ambiguity.",
    icon: Lightning
  }
];

const FAQS: Faq[] = [
  {
    question: "How often is the Cloud MLM Software blog updated?",
    answer:
      "We publish new insights monthly, with additional rapid updates when regulations, product releases, or market signals warrant immediate guidance."
  },
  {
    question: "Can I reuse blog insights inside internal playbooks?",
    answer:
      "Yes. Reference or repurpose excerpts with attribution, or ask our team for editable templates tailored to your governance and enablement needs."
  },
  {
    question: "Where can I request coverage of a specific topic?",
    answer:
      "Submit editorial requests through the contact form or share them with your customer success manager. We prioritise themes that help the MLM community operate responsibly."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Blogs for Network Marketers";
  const description =
    "Explore Cloud MLM Software articles covering technology, compliance, and growth strategies for modern network marketing leaders.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blogs", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BlogsPageProps = {
  params: { lang: SupportedLocale };
};

export default function BlogsPage({ params }: BlogsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const servicesHref = buildLocalizedPath("/services", locale);
  const resourcesHref = buildLocalizedPath("/resources", locale);
  const newsletterHref = buildLocalizedPath("/resources/newsletter", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-indigo-50 via-white to-sky-50 py-24 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(79,70,229,0.18),transparent_55%),radial-gradient(circle_at_90%_0%,rgba(14,165,233,0.18),transparent_50%)]" />
        <div className="container space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <ArticleMedium className="h-4 w-4" aria-hidden />
              Cloud MLM Software editorial desk
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Insight-led MLM blogs for leaders who build trusted, scalable networks.
            </h1>
            <p className="text-lg text-muted-foreground">
              Our editorial team distils product innovation, compliance research, and growth playbooks into guidance your organisation can act on today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={resourcesHref}>
                  Browse resources
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={newsletterHref}>
                  Subscribe for updates
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href={contactHref}>
                  Pitch an idea
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <dl className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HERO_METRICS.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <dt className="text-sm font-medium text-muted-foreground">{metric.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-foreground">{metric.value}</dd>
                <p className="mt-2 text-xs text-muted-foreground">{metric.detail}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What you can expect in every issue</h2>
          <p className="text-sm text-muted-foreground">
            Four editorial pillars guide how we gather insights, document experiments, and surface recommendations.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PILLARS.map((pillar) => (
            <article key={pillar.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <pillar.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold text-foreground">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground">{pillar.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {pillar.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
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
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Featured editorial spotlights</h2>
            <p className="text-sm text-muted-foreground">
              Curated long-form stories that shape how leaders modernise their platforms, compensation plans, and channel execution.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {FEATURED_STORIES.map((story) => (
              <article key={story.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <story.icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{story.title}</h3>
                  <p className="text-sm text-muted-foreground">{story.summary}</p>
                  <p className="text-xs uppercase tracking-wide text-primary">{story.meta}</p>
                </div>
                <div className="mt-auto">
                  <Link
                    href={story.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the analysis
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Latest insights from the newsroom</h2>
          <p className="text-sm text-muted-foreground">
            Fresh takes on technology, enablement, and governance to brief your teams and AI assistants.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {LATEST_INSIGHTS.map((insight) => (
            <article key={insight.href} className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs uppercase tracking-wide text-primary">
                  <span>{insight.category}</span>
                  <span className="h-1 w-1 rounded-full bg-primary" aria-hidden />
                  <span>{insight.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{insight.title}</h3>
                <p className="text-sm text-muted-foreground">{insight.summary}</p>
              </div>
              <div>
                <Link
                  href={insight.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View insight
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-gradient-to-br from-slate-50 via-white to-zinc-50 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Browse by editorial focus</h2>
            <p className="text-sm text-muted-foreground">
              Dive into curated collections aligned to your priorities. Each hub bundles research, templates, and leadership commentary.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {FOCUS_AREAS.map((area) => (
              <article key={area.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <area.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {area.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link
                    href={area.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open hub
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Role-based intelligence you can activate</h2>
          <p className="text-sm text-muted-foreground">
            Tailored guidance for leadership, operational teams, and platform builders within modern MLM organisations.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {AUDIENCE_TRACKS.map((track) => (
            <article key={track.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <track.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{track.title}</h3>
              <p className="text-sm text-muted-foreground">{track.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {track.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-3 pt-2">
                {track.actions.map((action) => {
                  const href = action.path ? buildLocalizedPath(action.path, locale) : action.externalHref ?? "#";
                  const isExternal = Boolean(action.externalHref);

                  return (
                    <Link
                      key={`${track.title}-${action.label}`}
                      href={href}
                      className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary hover:bg-primary/15"
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                    >
                      {action.label}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Built for SEO and AI optimisation</h2>
            <p className="text-sm text-muted-foreground">
              Every article is structured for discoverability, accessibility, and accurate downstream reuse by conversational agents.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {AIO_SIGNALS.map((signal) => (
              <article key={signal.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <signal.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{signal.title}</h3>
                <p className="text-sm text-muted-foreground">{signal.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">
            Answers to the questions we hear most often from readers, customers, and industry partners.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {FAQS.map((faq) => (
            <article key={faq.question} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
              <p className="text-sm text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-primary/5 to-sky-100 p-10 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
          <div className="absolute right-10 top-10 hidden h-24 w-24 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary/80 md:flex">
            <Headset className="h-12 w-12" aria-hidden />
          </div>
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Bring the newsroom into your next initiative</h2>
            <p className="text-sm text-muted-foreground">
              Whether you are refreshing a compensation model, launching a new market, or modernising your tech stack, our analysts can partner with you to translate insights into execution.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Talk with an expert
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={servicesHref}>
                  Review our services
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
