import type { Metadata } from "next";
import { SmartImage } from "@/components/ui/smart-image";
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
  CalendarCheck,
  FileText,
  Globe2,
  GraduationCap,
  Lightbulb,
  Mic,
  Newspaper,
  Play,
  Sparkles,
  Users
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type ResourceCategory = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type FeaturedResource = {
  title: string;
  description: string;
  href: string;
  badge: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

type LearningTrack = {
  title: string;
  description: string;
  cta: { label: string; href: string };
  highlights: string[];
};

type EventItem = {
  title: string;
  description: string;
  date: string;
  location: string;
  href: string;
};

type ResourceFAQ = {
  question: string;
  answer: string;
};

const HERO_STATS = [
  { label: "Guides & playbooks", value: "48+" },
  { label: "On-demand sessions", value: "26" },
  { label: "Customer stories", value: "32" }
];

const RESOURCE_CATEGORIES: ResourceCategory[] = [
  {
    title: "Launch playbooks",
    description:
      "Implementation checklists, migration plans, and compensation change guides built from 300+ enterprise launches.",
    bullets: [
      "Four-week implementation roadmap",
      "Compensation plan comparison kit",
      "Migration checklist templates"
    ],
    icon: FileText
  },
  {
    title: "Data & compliance briefs",
    description:
      "Prepare legal, finance, and IT teams with briefs covering regulatory shifts, data residency, and audit readiness.",
    bullets: [
      "Global compliance readiness report",
      "SOC-aligned security workbook",
      "Fraud monitoring and remediation toolkit"
    ],
    icon: Globe2
  },
  {
    title: "Revenue growth series",
    description:
      "Campaign frameworks, field adoption journeys, and retention tactics proven across high-growth MLM brands.",
    bullets: [
      "Field enablement sprint agendas",
      "Customer loyalty program templates",
      "Automation blueprints for reactivation"
    ],
    icon: Lightbulb
  },
  {
    title: "Product masterclasses",
    description:
      "Watch modular walkthroughs covering Commission Studio, Distributor CRM, and Commerce Orchestration modules.",
    bullets: [
      "Plan Studio deep dive",
      "Distributor CRM adoption lessons",
      "Commerce & fulfillment orchestration demo"
    ],
    icon: Play
  },
  {
    title: "Executive roundtables",
    description:
      "Quarterly sessions with industry experts unpacking expansion strategies, KPIs, and modernisation lessons.",
    bullets: [
      "APAC expansion panel replay",
      "Finance leader KPI scorecard",
      "Scaling governance beyond 5 markets"
    ],
    icon: Users
  },
  {
    title: "Customer stories",
    description:
      "See how direct selling brands modernised their stack, accelerated payouts, and improved distributor retention.",
    bullets: [
      "Launch in 90 days case study",
      "Hybrid compensation revamp",
      "Wellness brand omnichannel rollout"
    ],
    icon: Newspaper
  }
];

const FEATURED_RESOURCES: FeaturedResource[] = [
  {
    title: "2025 Direct Selling Transformation Playbook",
    description:
      "A 60-page guide covering technology, compensation, and operational best practices for enterprise direct selling leaders.",
    href: "/resources/direct-selling-transformation-playbook/",
    badge: "EBOOK",
    image: {
      src: "/wp-content/uploads/2024/08/mlm-software-pricing-guide.webp",
      alt: "Direct selling playbook cover",
      width: 640,
      height: 420
    }
  },
  {
    title: "Compensation Studio Live Workshop",
    description:
      "An on-demand session showing how revenue teams iterate binary, unilevel, and hybrid plans with real-time modelling.",
    href: "/webinars/compensation-studio-live/",
    badge: "WEBINAR",
    image: {
      src: "/wp-content/uploads/2024/08/cloudDashboardDemo.webp",
      alt: "Screenshot of compensation modelling workshop",
      width: 640,
      height: 420
    }
  },
  {
    title: "Global Compliance Field Guide",
    description:
      "A practical toolkit for aligning compensation, communications, and data workflows with FTC, DSA, and GDPR expectations.",
    href: "/resources/global-compliance-field-guide/",
    badge: "TOOLKIT",
    image: {
      src: "/wp-content/uploads/2024/08/plan-comparison.webp",
      alt: "Compliance field guide preview",
      width: 640,
      height: 420
    }
  }
];

const LEARNING_TRACKS: LearningTrack[] = [
  {
    title: "Implementation launch kit",
    description:
      "Everything your PMO and solution architects need to stand up Cloud MLM Software in under eight weeks.",
    highlights: [
      "Discovery workshop agendas",
      "Data migration mapping workbook",
      "Launch communications calendar"
    ],
    cta: {
      label: "Download launch kit",
      href: "/resources/implementation-kit/"
    }
  },
  {
    title: "Compensation innovation lab",
    description:
      "Guided exercises and templates for optimising payout ratios, matching bonuses, and customer rewards.",
    highlights: [
      "Plan variant scorecards",
      "Payout health checklist",
      "Leadership communication scripts"
    ],
    cta: {
      label: "Access comp lab",
      href: "/resources/compensation/toolkit/"
    }
  },
  {
    title: "Field adoption accelerator",
    description:
      "Drive daily engagement with ready-made onboarding journeys, content calendars, and recognition campaigns.",
    highlights: [
      "30-day distributor onboarding journey",
      "Content calendar & asset pack",
      "Engagement KPI dashboard template"
    ],
    cta: {
      label: "Get adoption bundle",
      href: "/resources/field-adoption-accelerator/"
    }
  }
];

const UPCOMING_EVENTS: EventItem[] = [
  {
    title: "2025 Global MLM Transformation Summit",
    description: "Two-day executive summit focused on modernising compensation, commerce, and compliance operations.",
    date: "March 12–13, 2025",
    location: "Austin, TX + virtual",
    href: "/resources/events/mlm-transformation-summit/"
  },
  {
    title: "Quarterly Product Release Briefing",
    description: "See the latest enhancements across Commission Studio, Distributor CRM, and Commerce Hub.",
    date: "January 29, 2025",
    location: "Live webinar",
    href: "/resources/events/product-release-briefing/"
  },
  {
    title: "Field Enablement Workshop",
    description: "Hands-on session helping sales enablement teams deploy onboarding journeys and recognition programs.",
    date: "February 19, 2025",
    location: "Virtual workshop",
    href: "/resources/events/field-enablement-workshop/"
  }
];

const RESOURCE_FAQS: ResourceFAQ[] = [
  {
    question: "Do I need to be a Cloud MLM Software customer to access these resources?",
    answer:
      "Most playbooks, webinars, and case studies are freely available. Some deep-dive templates require a free account so we can tailor recommendations to your goals."
  },
  {
    question: "How often are new resources published?",
    answer:
      "We add fresh content every month, including release briefings, compensation calculators, and expansion checklists. Subscribe to the resource update newsletter to stay informed."
  },
  {
    question: "Can you customise a workshop for our leadership team?",
    answer:
      "Yes. Our strategists host private versions of our most popular sessions—implementation readiness, compensation innovation, and compliance maturity—for enterprise teams."
  },
  {
    question: "Where can I find product documentation?",
    answer:
      "Technical docs, API references, and admin guides live inside the customer help centre. Request access during your onboarding or reach out to support to enable your account."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Resources | Cloud MLM Software";
  const description =
    "Browse playbooks, webinars, events, and customer stories to modernise your direct selling operations with Cloud MLM Software.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/resources", locale)
    }
  };
}

type ResourcesPageProps = {
  params: { lang: SupportedLocale };
};

export default function ResourcesPage({ params }: ResourcesPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const newsletterHref = "/resources/newsletter/";
  const demoHref = "/free-mlm-software-demo/";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-24 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/40">
        <div className="container relative">
          <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] md:items-center">
            <div className="max-w-4xl">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" aria-hidden />
                Resource hub for modern MLM teams
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Your launch, growth, and compliance toolkit—curated by Cloud MLM Software experts.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                Access implementation playbooks, compensation workshops, customer stories, and upcoming events built to help direct selling leaders modernise every part of their operation.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href={newsletterHref}>
                    Subscribe for updates
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={demoHref}>
                    Watch platform tour
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="lg">
                  <Link href={contactHref}>
                    Request private workshop
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden overflow-hidden rounded-3xl border border-border/60 bg-background/40 shadow-sm md:block">
              <SmartImage
                src="/wp-content/uploads/2024/08/cloudDashboardDemo.webp"
                alt="Resource library preview"
                width={900}
                height={643}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
          <dl className="mt-14 grid gap-6 sm:grid-cols-3">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-border/60 bg-background p-6 text-center shadow-sm">
                <dt className="text-sm font-medium text-muted-foreground">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-foreground">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Featured resources launching teams forward</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Start with the most requested guides and sessions. Each resource is produced by Cloud MLM Software strategists who partner with enterprise direct selling brands every day.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {FEATURED_RESOURCES.map((resource) => (
            <article
              key={resource.title}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-background shadow-sm"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <SmartImage
                  src={resource.image.src}
                  alt={resource.image.alt}
                  width={resource.image.width}
                  height={resource.image.height}
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-4 top-4 inline-flex rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                  {resource.badge}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-xl font-semibold text-foreground">{resource.title}</h3>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
                <Button asChild variant="ghost" className="mt-auto justify-start px-0 text-primary">
                  <Link href={resource.href} target="_blank" rel="noopener noreferrer">
                    View resource
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Browse by resource category</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Navigate curated collections for launches, compensation design, field enablement, compliance, and customer success.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {RESOURCE_CATEGORIES.map((category) => (
            <article
              key={category.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <category.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {category.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Choose a guided learning track</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Follow curated paths designed for implementation leads, compensation strategists, and field enablement teams.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {LEARNING_TRACKS.map((track) => (
            <article
              key={track.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm"
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                <GraduationCap className="h-4 w-4" aria-hidden />
                Guided path
              </span>
              <h3 className="text-xl font-semibold text-foreground">{track.title}</h3>
              <p className="text-sm text-muted-foreground">{track.description}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {track.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="mt-auto w-fit">
                <Link href={track.cta.href} target="_blank" rel="noopener noreferrer">
                  {track.cta.label}
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-8">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Events and on-demand sessions</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Join upcoming summits or catch the latest release briefings at your convenience.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {UPCOMING_EVENTS.map((event) => (
            <article
              key={event.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm"
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                <CalendarCheck className="h-4 w-4" aria-hidden />
                {event.date}
              </span>
              <h3 className="text-xl font-semibold text-foreground">{event.title}</h3>
              <p className="text-sm text-muted-foreground">{event.description}</p>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{event.location}</p>
              <Button asChild variant="ghost" className="mt-auto justify-start px-0 text-primary">
                <Link href={event.href} target="_blank" rel="noopener noreferrer">
                  Reserve a seat
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Frequently asked questions</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Answers to the most common questions from leaders exploring Cloud MLM Software resources.
          </p>
        </div>
        <div className="space-y-4">
          {RESOURCE_FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-foreground">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-sm text-primary transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-12 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Need bespoke enablement for your team?</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Partner with our strategists to customise workshops, migrate legacy content, or build new playbooks tuned to your compensation plan and markets.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Book a consultation
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={newsletterHref}>
                Join resource newsletter
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
