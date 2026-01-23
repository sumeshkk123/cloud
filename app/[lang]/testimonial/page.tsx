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
  Globe2,
  Layers,
  ShieldCheck,
  Users
} from "lucide-react";
import {
  ChatsCircle,
  Handshake,
  Quotes,
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type Testimonial = {
  name: string;
  role: string;
  region: string;
  quote: string;
};

type Pillar = {
  title: string;
  detail: string;
  icon: React.ComponentType<{ className?: string }>;
};

type Article = {
  title: string;
  date: string;
  category: string;
  href: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Janluc R",
    role: "Founder, EU wellness collective",
    region: "Paris, France",
    quote:
      "Cloud MLM Software gave us a stair-stepped launch plan that kept every mentor aligned from day one. Our onboarding time halved."
  },
  {
    name: "Giovanni P",
    role: "Director of Operations, LATAM skincare brand",
    region: "São Paulo, Brazil",
    quote:
      "The analytics reporting helps us forecast inventory and commissions within hours instead of weeks."
  },
  {
    name: "Laura Fernandez",
    role: "Head of Digital, global nutrition network",
    region: "Madrid, Spain",
    quote:
      "Mobile-first journeys energised our field team. Recognition badges and guided prompts created record rank advancements."
  },
  {
    name: "Victor Tin",
    role: "VP Sales Enablement, APAC fintech",
    region: "Singapore",
    quote:
      "Compliance loves the audit-ready exports; leaders love the clarity. We finally speak the same language about performance."
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Trusted partnerships",
    detail: "We design every launch hand-in-hand with your leadership, mirroring your brand voice and growth ambition.",
    icon: Handshake
  },
  {
    title: "Global-scale delivery",
    detail: "Our multilingual, multi-currency architecture keeps customer experiences consistent across continents.",
    icon: Globe2
  },
  {
    title: "Security & compliance first",
    detail: "Role-based guardrails, rigorous testing, and verified infra keep regulators and finance teams confident.",
    icon: ShieldCheck
  }
];

const ARTICLES: Article[] = [
  {
    title: "The Ultimate Guide to MLM Affiliate Software",
    date: "September 24, 2025",
    category: "Cloud MLM Software",
    href: "/blog/the-ultimate-guide-to-mlm-affiliate-software"
  },
  {
    title: "AI and Shopify MLM: Personalised commission planning",
    date: "September 1, 2025",
    category: "New Technologies",
    href: "/blog/ai-and-shopify-mlm"
  },
  {
    title: "MLM back office software: Powering growth",
    date: "August 15, 2025",
    category: "MLM Business",
    href: "/blog/mlm-back-office-software"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Client Testimonials";
  const description =
    "See why global network marketing brands trust Cloud MLM Software. Explore testimonials, success metrics, and recent platform updates.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/testimonial", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type TestimonialPageProps = {
  params: { lang: SupportedLocale };
};

export default function TestimonialPage({ params }: TestimonialPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const allStoriesHref = buildLocalizedPath("/testimonials", locale);
  const blogHref = buildLocalizedPath("/blogs", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-purple-50 via-white to-amber-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-purple-950/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(168,85,247,0.18),transparent_55%),radial-gradient(circle_at_85%_24%,rgba(251,191,36,0.18),transparent_60%),radial-gradient(circle_at_48%_84%,rgba(96,165,250,0.16),transparent_58%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)]">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                What our clients say
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Partnerships built on outcomes, not promises.
              </h1>
              <p className="max-w-2xl text-base text-muted-foreground">
                We co-create direct-selling experiences with brands across the globe. From enterprise migrations to AI-driven optimisation, every engagement is measured by the growth we deliver for field leaders and customers.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Speak with a strategist
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={allStoriesHref}>
                  Explore individual stories
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article key={pillar.title} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/80 p-5 shadow-sm backdrop-blur dark:border-border/40 dark:bg-slate-950/60">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-base font-semibold text-foreground">{pillar.title}</h2>
                    <p className="text-sm text-muted-foreground">{pillar.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="relative space-y-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">In their words</p>
            <div className="space-y-5">
              {TESTIMONIALS.map((testimonial) => (
                <article key={testimonial.name} className="rounded-2xl border border-border/60 bg-muted/30 p-5 dark:border-border/40 dark:bg-slate-900/40">
                  <Quotes className="h-5 w-5 text-primary" aria-hidden />
                  <p className="mt-3 text-sm text-muted-foreground">{testimonial.quote}</p>
                  <div className="mt-4 text-sm">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                    <p className="text-muted-foreground/80">{testimonial.region}</p>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4 text-center mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            Shared success metrics
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How we translate strategy into measurable wins</h2>
          <p className="text-sm text-muted-foreground">
            The combination of thoughtful consultancy, enterprise-grade technology, and AI-driven optimisation helps our clients scale faster and smarter.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              value: "+38%",
              description: "Average uplift in monthly active distributors within six months of launch.",
              icon: Users
            },
            {
              value: "3.2x",
              description: "Increase in automation coverage across payouts, recognition, and compliance workflows.",
              icon: Layers
            },
            {
              value: "12 countries",
              description: "Largest single roll-out completed for a client with unified UX and localised content.",
              icon: Globe2
            },
            {
              value: "24/7",
              description: "Follow-the-sun support that pairs product specialists with your field leadership.",
              icon: ChatsCircle
            }
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <article key={stat.value} className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 text-left shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:border-border/30 dark:bg-slate-950/40">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Latest updates & news</h2>
            <p className="text-sm text-muted-foreground">
              Stay informed with insights that help you modernise compensation design, improve member retention, and leverage AI responsibly.
            </p>
            <div className="space-y-4">
              {ARTICLES.map((article) => (
                <article key={article.title} className="rounded-3xl border border-border/60 bg-background p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{article.category}</p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{article.title}</h3>
                  <p className="text-sm text-muted-foreground">{article.date}</p>
                  <Button asChild variant="ghost" className="mt-4 h-auto justify-start px-0 text-sm text-primary">
                    <Link href={buildLocalizedPath(article.href, locale)}>
                      Read update
                      <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                    </Link>
                  </Button>
                </article>
              ))}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg backdrop-blur dark:border-border/40 dark:bg-slate-950/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">Why teams return</p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>• Dedicated success managers coordinate design, development, and launch operations.</p>
              <p>• AI copilots and calculators simplify complex plan modelling for field and finance stakeholders.</p>
              <p>• Continuous enablement keeps customer journeys evolving with your business goals.</p>
            </div>
            <Button asChild>
              <Link href={contactHref}>
                Schedule a discovery workshop
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-fuchsia-50 p-10 shadow-sm dark:border-primary/40 dark:from-primary/20 dark:via-slate-950 dark:to-fuchsia-900/30">
          <div className="absolute -left-24 top-1/4 h-48 w-48 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-64 w-64 translate-y-1/3 rounded-full bg-amber-200/30 blur-3xl dark:bg-amber-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.75fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to craft your own testimonial story?</h2>
              <p className="text-sm text-muted-foreground">
                Tell us about your network, markets, and growth ambitions. We’ll prepare a tailored action plan and introduce you to clients who have walked the same path.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={contactHref}>
                    Connect with our team
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={blogHref}>
                    Browse more insights
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background/80 p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-950/70">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">What to prepare</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Overview of your compensation plans and growth goals.</li>
                <li>• Top regions, languages, and integrations required.</li>
                <li>• Desired launch timeline and success metrics.</li>
              </ul>
              <p className="text-xs text-muted-foreground">We reply within one business day with next-step options.</p>
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
