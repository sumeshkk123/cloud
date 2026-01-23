import type { Metadata } from "next";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  FolderOpen,
  Mic,
  Newspaper,
  Sparkles
} from "lucide-react";

export const dynamic = "force-static";

type NewsItem = {
  title: string;
  date: string;
  summary: string;
  href: string;
};

type Insight = {
  title: string;
  description: string;
};

type Resource = {
  label: string;
  description: string;
  href: string;
};

type FAQ = {
  question: string;
  answer: string;
};

const FEATURED_NEWS: NewsItem = {
  title: "Bpract introduces AI co-pilot inside Cloud MLM Software",
  date: "February 2025",
  summary:
    "A new AI-powered assistant accelerates compensation modelling, field onboarding, and analytics setup for enterprise network marketing brands.",
  href: "/press-release/"
};

const NEWS_TIMELINE: NewsItem[] = [
  {
    title: "Cloud MLM Software expands data residency and compliance support",
    date: "January 2025",
    summary:
      "Customers can now select regional hosting zones with matching privacy controls and audit-ready documentation.",
    href: "/press-release/"
  },
  {
    title: "Customer milestone: 200+ launches delivered",
    date: "November 2024",
    summary:
      "A look at the brands scaling on Cloud MLM Software across wellness, fintech, education, and consumer goods."
    ,
    href: "/press-release/"
  },
  {
    title: "Bpract Academy welcomes new cohort",
    date: "September 2024",
    summary:
      "Interns and trainees join engineering, design, and marketing teams to work on real Cloud MLM Software initiatives.",
    href: "/press-release/"
  }
];

const INSIGHTS: Insight[] = [
  {
    title: "Global infrastructure",
    description: "Cloud MLM Software operates on hardened infrastructure with 99.9% uptime and 24/7 monitoring."
  },
  {
    title: "Customer innovation",
    description: "AI automation, compensation labs, and analytics deliver measurable growth for network marketing leaders."
  },
  {
    title: "Community impact",
    description: "Bpract Academy and outreach programmes mentor emerging talent across Kerala and beyond."
  }
];

const MEDIA_RESOURCES: Resource[] = [
  {
    label: "Press kit",
    description: "Download approved logos, product screenshots, and leadership portraits.",
    href: "/documents/"
  },
  {
    label: "Company overview",
    description: "Facts, milestones, and values shaping Cloud MLM Software.",
    href: "/company/about"
  },
  {
    label: "Security & trust",
    description: "Infrastructure, compliance, and incident response information.",
    href: "/company/security"
  },
  {
    label: "Media contact",
    description: "Reach the communications team for interviews or statements.",
    href: "mailto:[email protected]"
  }
];

const MEDIA_FAQS: FAQ[] = [
  {
    question: "How can the media reach Bpract?",
    answer:
      "Email [email protected] with your publication name, deadline, and story angle. Our communications team responds within one business day."
  },
  {
    question: "Where can I find product imagery or logos?",
    answer:
      "Download approved logos, product screenshots, and executive headshots from our press kit."
  },
  {
    question: "Do you offer spokesperson interviews?",
    answer:
      "Yes. We coordinate interviews with product, engineering, or leadership team members depending on the topic."
  },
  {
    question: "How do I stay informed about new releases?",
    answer:
      "Subscribe to our newsletter at /resources/newsletter to receive launch announcements, blog posts, and event invitations."
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Newsroom | Cloud MLM Software";
  const description =
    "Read the latest company updates, product launches, and customer milestones from Bpract Software Solutions.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/company/news", locale)
    }
  };
}

type CompanyNewsPageProps = {
  params: { lang: SupportedLocale };
};

export default function CompanyNewsPage({ params }: CompanyNewsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="border-b border-border/60 bg-gradient-to-br from-slate-100 via-white to-emerald-50 py-24 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900/40">
        <div className="container grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,360px)] md:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" aria-hidden />
              Newsroom
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Updates from the team powering Cloud MLM Software.
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore product announcements, customer milestones, and community initiatives from Bpract Software Solutions.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="mailto:[email protected]">
                  Contact media relations
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resources/newsletter">
                  Subscribe to updates
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <article className="flex h-full flex-col gap-4 rounded-3xl border border-primary/30 bg-primary/5 p-6 text-left shadow-sm">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
              <CalendarDays className="h-4 w-4" aria-hidden />
              {FEATURED_NEWS.date}
            </span>
            <h2 className="text-2xl font-semibold text-foreground">{FEATURED_NEWS.title}</h2>
            <p className="text-sm text-muted-foreground">{FEATURED_NEWS.summary}</p>
            <Button asChild variant="outline" className="mt-auto w-fit">
              <Link href={FEATURED_NEWS.href} target="_blank" rel="noopener noreferrer">
                Read press release
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </article>
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Latest announcements</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {NEWS_TIMELINE.map((item) => (
            <article key={item.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                <Newspaper className="h-4 w-4" aria-hidden />
                {item.date}
              </span>
              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.summary}</p>
              <Button asChild variant="ghost" className="mt-auto justify-start px-0 text-primary">
                <Link href={item.href} target="_blank" rel="noopener noreferrer">
                  View details
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Bpract at a glance</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {INSIGHTS.map((insight) => (
            <article key={insight.title} className="rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{insight.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{insight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Media resources</h2>
        <div className="overflow-hidden rounded-3xl border border-border/60 bg-background">
          <div className="grid gap-0 md:grid-cols-2">
            {MEDIA_RESOURCES.map((resource) => (
              <div key={resource.label} className="border-t border-border/60 p-6 first:border-t-0 md:border-r md:first:border-t-0">
                <h3 className="text-lg font-semibold text-foreground">{resource.label}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{resource.description}</p>
                <Link
                  href={resource.href}
                  target={resource.href.startsWith("http") ? "_blank" : undefined}
                  rel={resource.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-primary/80"
                >
                  Access resource
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Media FAQ</h2>
        <div className="space-y-4">
          {MEDIA_FAQS.map((faq) => (
            <details key={faq.question} className="group rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition">
              <summary className="cursor-pointer list-none text-lg font-semibold text-foreground">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-sm text-primary transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="container flex flex-col items-center gap-6 rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-background to-primary/10 p-12 text-center shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Share your story idea</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Partner with our communications team for interviews, data requests, or product deep dives. We’re here to help you tell the Cloud MLM Software story.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="mailto:[email protected]">
                Email media relations
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={contactHref}>
                Contact support
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
