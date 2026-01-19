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
  Building2,
  Filter,
  QuoteIcon,
  Star,
  UsersRound
} from "lucide-react";
import {
  ChartLineUp,
  ChatsTeardrop,
  GlobeHemisphereEast,
  ThumbsUp
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type Story = {
  name: string;
  title: string;
  company: string;
  location: string;
  quote: string;
  category: "Technology" | "Direct Selling" | "Finance" | "Wellness";
};

const STORIES: Story[] = [
  {
    name: "Janluc R.",
    title: "CEO",
    company: "Bornan Solutions",
    location: "United States",
    quote:
      "Ease of use for members and admin—ergonomic and intuitive. After six months of daily development, the tech team proved to be world-class.",
    category: "Technology"
  },
  {
    name: "Giovanni P.",
    title: "CTO",
    company: "Garva Technologies",
    location: "United States",
    quote:
      "Support is always available. The software lets us plan excellent work with simple UX, rich graphics, and reliable services.",
    category: "Technology"
  },
  {
    name: "Joseph Y.",
    title: "CEO",
    company: "Venture Micros",
    location: "Spain",
    quote:
      "Best business decision we made. The platform is user friendly, professional, and delivers consistent results for our field leaders.",
    category: "Direct Selling"
  },
  {
    name: "Victor Tin",
    title: "CEO",
    company: "SRL Clariba",
    location: "Italy",
    quote:
      "Implementation was smooth and the dashboard is outstanding. We launched faster than expected with ongoing support.",
    category: "Finance"
  },
  {
    name: "Benito",
    title: "CTO",
    company: "Developsolo",
    location: "United States",
    quote:
      "Secure administration, encrypted transfers, and added firewalls keep our data protected. Highly efficient and reliable.",
    category: "Technology"
  },
  {
    name: "David",
    title: "CEO",
    company: "Emergye Integl",
    location: "France",
    quote:
      "Laravel foundation with RESTful controllers empowers our developers to innovate quickly without compromising stability.",
    category: "Technology"
  },
  {
    name: "Frederick L.",
    title: "CEO",
    company: "Paradigm Rebels",
    location: "United States",
    quote:
      "We bring ideas and Cloud MLM turns them into scalable experiences with elegant code quality.",
    category: "Direct Selling"
  },
  {
    name: "Luah B.",
    title: "CEO",
    company: "Pismart Paradata",
    location: "France",
    quote:
      "Communication is excellent and response times are fast. The team keeps delivering with precision.",
    category: "Wellness"
  },
  {
    name: "Ahmed I.",
    title: "CEO",
    company: "Cognoca Dista Solutions",
    location: "United States",
    quote:
      "It’s easy to customise plans and adjust promotions for each market. The development team is outstanding.",
    category: "Direct Selling"
  },
  {
    name: "Laura Fernandez",
    title: "CEO",
    company: "ACONITI Ltd",
    location: "Madrid, Spain",
    quote:
      "Communication is neat and the software works flawlessly. We now run a highly efficient, tailor-made solution.",
    category: "Wellness"
  },
  {
    name: "Javier Florez",
    title: "Administrative Team",
    company: "Insys Communications",
    location: "United States",
    quote:
      "The team listened carefully, answered every question, and brought seasoned expertise to the table.",
    category: "Technology"
  },
  {
    name: "Joe",
    title: "CEO",
    company: "CBT",
    location: "New York, United States",
    quote:
      "Whenever we need help, the engineers respond immediately, giving us peace of mind to keep scaling.",
    category: "Finance"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Testimonials Library";
  const description =
    "Browse testimonials from Cloud MLM Software clients across industries. Filter by focus area and learn how we accelerate growth.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/testimonials", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type TestimonialsPageProps = {
  params: { lang: SupportedLocale };
};

export default function TestimonialsPage({ params }: TestimonialsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  const categories = Array.from(new Set(STORIES.map((story) => story.category)));

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-sky-50 via-white to-rose-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-rose-950/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(56,189,248,0.2),transparent_55%),radial-gradient(circle_at_86%_24%,rgba(251,113,133,0.2),transparent_58%),radial-gradient(circle_at_46%_84%,rgba(125,211,252,0.16),transparent_60%)]" aria-hidden />
        <div className="container space-y-8">
          <div className="space-y-4 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Trusted by ambitious brands
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Voices from the field, finance, and technology teams we support.
            </h1>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground">
              These testimonials span product categories, geographies, and business models. Each captures how Cloud MLM Software streamlines compensation, compliance, and customer journeys.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <span key={category} className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground dark:bg-slate-950/60">
                <Filter className="h-3.5 w-3.5" aria-hidden />
                {category}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Share your goals
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={pricingHref}>
                Explore solution bundles
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {STORIES.map((story) => (
            <article key={story.name} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{story.category}</p>
                  <h2 className="mt-2 text-lg font-semibold text-foreground">{story.name}</h2>
                  <p className="text-sm text-muted-foreground">{story.title} — {story.company}</p>
                  <p className="text-xs text-muted-foreground/80">{story.location}</p>
                </div>
                <QuoteIcon className="h-5 w-5 text-primary" aria-hidden />
              </div>
              <p className="text-sm text-muted-foreground">{story.quote}</p>
              <div className="mt-auto flex items-center gap-3 text-xs text-muted-foreground">
                <UsersRound className="h-4 w-4 text-primary" aria-hidden />
                <span>Engagement spotlight</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:border-border/30 dark:bg-slate-950/40">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Highlights our clients mention most</h2>
            <p className="text-sm text-muted-foreground">
              Consistent themes emerge across every engagement. The data below derives from post-launch surveys across the last two years.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Global reliability",
                  detail: "99.97% platform uptime and tiered recovery plans keep high-volume markets online.",
                  icon: GlobeHemisphereEast
                },
                {
                  title: "Outcome-focused consulting",
                  detail: "Strategy workshops shorten deployment by an average of 7 weeks.",
                  icon: ChartLineUp
                },
                {
                  title: "Human + AI collaboration",
                  detail: "AI copilots are paired with human advisors so teams trust every recommendation.",
                  icon: ChatsTeardrop
                },
                {
                  title: "Field delight",
                  detail: "95% of surveyed distributors rate the experience 4 stars or above post-launch.",
                  icon: ThumbsUp
                }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="flex gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Client review snapshot</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-background p-5 text-center shadow-sm">
                <Star className="mx-auto h-6 w-6 text-primary" aria-hidden />
                <p className="mt-2 text-3xl font-semibold text-foreground">4.8/5</p>
                <p className="text-xs text-muted-foreground">Average satisfaction rating</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background p-5 text-center shadow-sm">
                <Building2 className="mx-auto h-6 w-6 text-primary" aria-hidden />
                <p className="mt-2 text-3xl font-semibold text-foreground">28</p>
                <p className="text-xs text-muted-foreground">Industries served</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Ready to join the brands innovating with Cloud MLM Software? Let’s craft a programme tailored to your ambitions.
            </p>
            <Button asChild>
              <Link href={contactHref}>
                Start your engagement
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-sky-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-sky-900/40">
          <div className="absolute -left-24 top-1/4 h-48 w-48 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-64 w-64 translate-y-1/3 rounded-full bg-rose-200/30 blur-3xl dark:bg-rose-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.75fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Want your success story featured here?</h2>
              <p className="text-sm text-muted-foreground">
                Share your project vision, audience, and desired outcomes. We’ll pair you with a dedicated strategist and outline pilot milestones.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={contactHref}>
                    Connect with us
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={pricingHref}>
                    Review investment options
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background/80 p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/70">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Preparation guide</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Current challenges and key success metrics.</li>
                <li>• Target launch cadence across regions and channels.</li>
                <li>• Integrations, data sources, and security requirements.</li>
              </ul>
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
