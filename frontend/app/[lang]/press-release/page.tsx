import type { Metadata } from "next";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  CalendarDays,
  Filter,
  MapPin,
  Megaphone,
  Newspaper,
  Rss,
  Sparkles
} from "lucide-react";

export const dynamic = "force-static";

type PressRelease = {
  title: string;
  summary: string;
  date: string;
  location: string;
  href: string;
  tags: string[];
};

type FilterSet = {
  label: string;
  description: string;
  count: number;
};

const FEATURED_RELEASE: PressRelease = {
  title: "Cloud MLM Software recognised by Research.com for elevating global MLM operations",
  summary:
    "Our platform is spotlighted for unifying compensation accuracy, AI-assisted coaching, and enterprise-grade integrations for modern direct selling brands.",
  date: "August 23, 2025",
  location: "San Francisco, California, USA",
  href: "/blogs/cloud-mlm-software-deserves-attention-in-research",
  tags: ["Awards", "Platform", "Thought leadership"]
};

const ARCHIVE: PressRelease[] = [
  FEATURED_RELEASE,
  {
    title: "Cloud MLM Software launches automation accelerator for omnichannel party plans",
    summary:
      "New release helps field leaders choreograph hybrid experiences with live pacing analytics, QR-friendly order flows, and celebratory coaching scripts.",
    date: "June 12, 2025",
    location: "Austin, Texas, USA",
    href: "#",
    tags: ["Product", "Automation", "Party plan"]
  },
  {
    title: "Strategic partnerships expand multi-currency payouts across 28 new markets",
    summary:
      "Finance and compliance teams gain treasury dashboards, automated FX safeguards, and settlement transparency for rapid international expansion.",
    date: "March 5, 2025",
    location: "Dubai, UAE",
    href: "#",
    tags: ["Partnerships", "Global", "Payments"]
  },
  {
    title: "Cloud MLM Software earns ISO 27001 recertification with AI governance focus",
    summary:
      "Security, privacy, and model governance enhancements protect distributor data while accelerating intelligent field experiences.",
    date: "November 18, 2024",
    location: "London, United Kingdom",
    href: "#",
    tags: ["Security", "Compliance", "AI"]
  }
];

const FILTERS: FilterSet[] = [
  {
    label: "All announcements",
    description: "Our complete timeline of milestones, launches, partnerships, and recognition.",
    count: 48
  },
  {
    label: "Awards & recognition",
    description: "Industry accolades and analyst coverage showcasing impact across markets.",
    count: 11
  },
  {
    label: "Product innovation",
    description: "Feature drops, AI enhancements, and roadmap debriefs for customers and press.",
    count: 19
  },
  {
    label: "Partnerships",
    description: "Alliances that unlock payments, compliance, and fulfilment capabilities globally.",
    count: 9
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Press Release";
  const description =
    "Stay informed on Cloud MLM Software announcements covering product innovation, partnerships, awards, and thought leadership.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/press-release", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PressReleasePageProps = {
  params: { lang: SupportedLocale };
};

export default function PressReleasePage({ params }: PressReleasePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const resourcesHref = buildLocalizedPath("/resources", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-purple-900/80 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(129,140,248,0.28),transparent_55%),radial-gradient(circle_at_80%_18%,rgba(244,114,182,0.32),transparent_55%),radial-gradient(circle_at_72%_78%,rgba(56,189,248,0.25),transparent_60%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-200/60 bg-purple-400/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-purple-100">
              Press room
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              Highlights, milestones, and perspectives from Cloud MLM Software.
            </h1>
            <p className="max-w-2xl text-base text-slate-100/85">
              Explore analyst coverage, partnership announcements, and product innovations shaping the future of ethical, data-driven network marketing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={FEATURED_RELEASE.href}>
                  Read the latest release
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-purple-200/60 text-purple-100 hover:bg-purple-400/10"
              >
                <Link href={contactHref}>
                  Connect with media relations
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative space-y-6 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-purple-400/40 blur-3xl" aria-hidden />
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/75">
              <span>Featured announcement</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold">
                <Megaphone className="h-3.5 w-3.5" aria-hidden />
                Analyst spotlight
              </span>
            </div>
            <div className="space-y-3 text-sm text-slate-100/85">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-100/90">{FEATURED_RELEASE.date}</p>
              <h2 className="text-xl font-semibold text-white">{FEATURED_RELEASE.title}</h2>
              <p>{FEATURED_RELEASE.summary}</p>
            </div>
            <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.3em] text-purple-100/80">
              {FEATURED_RELEASE.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)]">
        <aside className="space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground dark:bg-slate-950/50">
              <Filter className="h-3.5 w-3.5" aria-hidden />
              Curated filters
            </div>
            <p className="text-sm text-muted-foreground">
              Quickly surface coverage that matches your beat—whether you track technology, payments, or corporate milestones.
            </p>
          </div>
          <div className="space-y-4">
            {FILTERS.map((item) => (
              <article
                key={item.label}
                className="rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition duration-200 hover:border-primary/40"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                  <span>{item.label}</span>
                  <span>{item.count}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-purple-50 p-6 shadow-sm dark:from-primary/10 dark:via-slate-950 dark:to-purple-900/30">
            <h3 className="text-lg font-semibold text-foreground">Media kit on demand</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Request executive bios, brand guidelines, platform overviews, and analyst briefings in one bundle.
            </p>
            <Button asChild className="mt-4">
              <Link href={resourcesHref}>
                Access resources
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </aside>

        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Latest announcements</h2>
            <p className="text-sm text-muted-foreground">
              Timestamped releases curated by data journalists and corporate communications for clarity and speed.
            </p>
          </div>
          <div className="space-y-6">
            {ARCHIVE.map((release) => (
              <article
                key={`${release.title}-${release.date}`}
                className="relative overflow-hidden rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition duration-200 hover:border-primary/40"
              >
                <div className="absolute -left-16 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden />
                <div className="relative space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                      {release.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" aria-hidden />
                      {release.location}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{release.title}</h3>
                    <p className="text-sm text-muted-foreground">{release.summary}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.3em] text-primary/80">
                    {release.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-primary/10 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button asChild variant="link" className="px-0 text-primary">
                    <Link href={release.href}>
                      Read full story
                      <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-950/40">
        <div className="container grid gap-10 lg:grid-cols-3">
          <article className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Newspaper className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="text-lg font-semibold text-foreground">Executive quotes on call</h3>
            <p className="text-sm text-muted-foreground">
              Schedule interviews with our executive leadership, compensation scientists, or product strategists for your next feature.
            </p>
          </article>
          <article className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Sparkles className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="text-lg font-semibold text-foreground">Analyst-ready materials</h3>
            <p className="text-sm text-muted-foreground">
              Access briefing decks, platform demos, and roadmap synopses designed for researchers and evaluation committees.
            </p>
          </article>
          <article className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Rss className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="text-lg font-semibold text-foreground">Subscribe for updates</h3>
            <p className="text-sm text-muted-foreground">
              Join our newsroom mailing list for embargoed releases, event invites, and quarterly insights.
            </p>
            <Button asChild>
              <Link href={buildLocalizedPath("/resources/newsletter", locale)}>
                Subscribe now
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
