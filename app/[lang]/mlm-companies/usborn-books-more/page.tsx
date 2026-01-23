import type { CSSProperties, ComponentType } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { buildLocalizedPath } from "@/lib/locale-links";
import { isSupportedLocale } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Bookmark,
  Globe2,
  GraduationCap,
  Library,
  MapPin,
  Palette,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import { ChartLineUp, ClipboardText, DeviceMobile, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type LiteracyMetric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type StoryPillar = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type FieldRhythm = {
  stage: string;
  narrative: string;
  enablement: string;
  icon: IconType;
};

type Watchpoint = {
  title: string;
  risk: string;
  mitigation: string;
  icon: IconType;
};

type CloudPlay = {
  title: string;
  description: string;
  outcome: string;
  icon: IconType;
};

const LITERACY_METRICS: LiteracyMetric[] = [
  {
    label: "Founded",
    value: "1989",
    detail: "Educational Development Corporation introduced Usborne’s award-winning catalogue to North America.",
    icon: Library
  },
  {
    label: "Mission",
    value: "Ignite lifelong readers",
    detail: "Consultants connect families, teachers, and librarians with stories that inspire curiosity.",
    icon: BookOpen
  },
  {
    label: "Catalogue",
    value: "1,800+ titles",
    detail: "Picture books, STEAM nonfiction, interactive activity kits, and inclusive series for every age.",
    icon: Palette
  },
  {
    label: "Field community",
    value: "35K+ literacy advocates",
    detail: "Book lovers host pop-ups, school fairs, and virtual storytimes across the United States.",
    icon: Users
  },
  {
    label: "Impact",
    value: "Millions donated",
    detail: "Literacy for a Lifetime grants and Reach for the Stars! challenges stock classrooms nationwide.",
    icon: GraduationCap
  },
  {
    label: "Compensation",
    value: "Party plan hybrid",
    detail: "Retail profits, team bonuses, and literacy incentives tied to verified sales and donations.",
    icon: ChartLineUp
  }
];

const STORY_PILLARS: StoryPillar[] = [
  {
    title: "Award-winning curation",
    description:
      "Authors, educators, and illustrators co-create visually rich, research-backed stories that meet childhood milestones.",
    proof: "Moonbeam, Parents’ Choice, and Teacher’s Choice honours each publishing season.",
    icon: Bookmark
  },
  {
    title: "Interactive discovery",
    description:
      "Lift-the-flap, shine-a-light, and puzzle-based books transform learning into sensory-friendly play.",
    proof: "Educator testimonials highlight engagement gains and curriculum alignment.",
    icon: Sparkles
  },
  {
    title: "Community partnerships",
    description:
      "Book fairs, storytime livestreams, and school literacy nights unite parents, teachers, and donors around reading goals.",
    proof: "Literacy for a Lifetime case studies and Reach for the Stars! challenge success stories.",
    icon: Globe2
  }
];

const FIELD_RHYTHMS: FieldRhythm[] = [
  {
    stage: "Curate story journeys",
    narrative:
      "Consultants assess reading levels, interests, and sensory needs to assemble personalised libraries.",
    enablement: "Interactive quizzes, themed bundles, and educator-approved recommendations streamline planning.",
    icon: ClipboardText
  },
  {
    stage: "Spark experiential events",
    narrative:
      "Hybrid pop-ups, book fairs, and virtual author visits turn excitement into orders and donations.",
    enablement: "Event checklists, QR wish lists, and fundraising dashboards keep experiences delightful.",
    icon: DeviceMobile
  },
  {
    stage: "Nurture literacy advocates",
    narrative:
      "Mentorship cohorts, recognition programs, and grant coaching help advocates scale their community impact.",
    enablement: "Automated coaching cadences, literacy challenge templates, and impact reporting kits.",
    icon: UsersThree
  }
];

const WATCHPOINTS: Watchpoint[] = [
  {
    title: "Inventory agility",
    risk: "Viral releases can sell out quickly, stalling classroom wish lists and fundraising deliveries.",
    mitigation: "Predict demand with event data, surface substitutions, and communicate shipping ETAs proactively.",
    icon: ShieldCheck
  },
  {
    title: "Event freshness",
    risk: "Virtual fatigue means storytimes must stay imaginative and culturally relevant.",
    mitigation: "Supply rotating storytelling kits, author spotlights, and hybrid tech support for hosts.",
    icon: Sparkles
  },
  {
    title: "Impact transparency",
    risk: "Schools and donors expect measurable literacy outcomes from grants and drives.",
    mitigation: "Dashboards track books delivered, students reached, and educator testimonials per campaign.",
    icon: GraduationCap
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Reading journey designer",
    description:
      "Matches reader profiles with curated lists, sensory-friendly picks, and educator lesson tie-ins in seconds.",
    outcome: "Boosts order confidence and showcases cross-sell bundles families actually need.",
    icon: BookOpen
  },
  {
    title: "Event storytelling studio",
    description:
      "Automates invitations, livestream overlays, and donation tracking for hybrid book fairs and storytimes.",
    outcome: "Elevates host professionalism while shrinking setup time.",
    icon: Sparkles
  },
  {
    title: "Literacy impact dashboard",
    description:
      "Aggregates books donated, classrooms supported, and student reach to fuel grant proposals and PR.",
    outcome: "Shows stakeholders tangible outcomes and unlocks larger partnerships.",
    icon: Globe2
  },
  {
    title: "Mentor cadence autopilot",
    description:
      "Guides new consultants through 90-day literacy challenges, recognition, and community leadership milestones.",
    outcome: "Protects culture while scaling consistent reader experiences nationwide.",
    icon: UsersThree
  }
];

const PRIMARY_TRUST_SCORE = {
  score: 64,
  label: "Literacy trust index",
  summary: "Combines catalogue quality, field sustainability, and community impact across Usborne Books & More."
};

const GAUGE_STYLE: CSSProperties = {
  background: `conic-gradient(#f97316 ${PRIMARY_TRUST_SCORE.score * 3.6}deg, rgba(249, 115, 22, 0.2) 0deg)`
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Usborne Books & More Literacy Community Blueprint";
  const description =
    "Explore how Usborne Books & More inspires readers, sustains consultants, and how Cloud MLM Software amplifies literacy-focused growth.";
  const keywords = [
    "Usborne Books & More",
    "Usborne literacy consultants",
    "Usborne compensation plan",
    "children’s book direct sales",
    "Cloud MLM Software literacy"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/usborn-books-more", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type UsbornePageProps = {
  params: { lang: SupportedLocale };
};

export default function UsbornePage({ params }: UsbornePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const indexHref = buildLocalizedPath("/mlm-companies", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-rose-950 via-amber-900 to-fuchsia-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(249,115,22,0.3),transparent_55%),radial-gradient(circle_at_78%_26%,rgba(236,72,153,0.32),transparent_58%)]" />
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.55fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-amber-500/10 px-4 py-1 text-sm font-semibold text-amber-100">
              Usborne Books & More • Literacy community
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Spark curiosity, fund classrooms, and build joyful reader communities.
            </h1>
            <p className="text-base text-amber-50/80">
              Usborne Books & More thrives when stories feel magical and accessible. Equip consultants with the storytelling,
              automation, and impact dashboards that make literacy irresistible.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  Explore the literacy toolkit
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-amber-200/60 text-amber-100 hover:bg-amber-500/10"
              >
                <Link href={pricingHref}>
                  Review technology bundles
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-amber-100 underline underline-offset-4 hover:bg-white/10">
                <Link href={indexHref}>
                  Return to MLM company index
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-2 text-sm text-amber-50/80">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-200" aria-hidden />
                Tulsa, Oklahoma • Serving families and schools nationwide
              </p>
              <p>
                “Stories change lives. When we measure impact and centre joy, literacy becomes a movement everyone champions.”
              </p>
            </div>
          </div>

          <aside className="grid gap-6 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-xl backdrop-blur">
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/25 bg-black/30 p-6 text-center">
              <div className="relative flex h-44 w-44 items-center justify-center rounded-full p-4" style={GAUGE_STYLE} aria-hidden>
                <div className="absolute inset-6 flex flex-col items-center justify-center rounded-full bg-black/40 text-center shadow-lg">
                  <span className="text-4xl font-semibold text-white">{PRIMARY_TRUST_SCORE.score}</span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-amber-100/80">
                    {PRIMARY_TRUST_SCORE.label}
                  </span>
                </div>
              </div>
              <p className="text-xs text-amber-50/80">{PRIMARY_TRUST_SCORE.summary}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {LITERACY_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex h-full flex-col gap-3 rounded-2xl border border-white/20 bg-black/30 p-4 shadow-sm transition hover:-translate-y-1 hover:bg-black/40"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/20 text-amber-100">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-amber-100/80">{metric.label}</span>
                    </div>
                    <span className="text-lg font-semibold text-white">{metric.value}</span>
                    <p className="text-xs text-amber-50/80">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 rounded-3xl border border-primary/15 bg-gradient-to-br from-amber-50 via-white to-rose-50 p-10 dark:border-primary/10 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Story pillars that delight</h2>
            <p className="text-sm text-muted-foreground">
              Center events and content around these truths so families feel confident investing in your recommendations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {STORY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/70"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground">{pillar.description}</p>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {pillar.proof}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.6fr)]">
          <div className="space-y-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Field rhythms for literacy leaders</h2>
              <p className="text-sm text-muted-foreground">
                Give every consultant a cadence that balances creativity, impact, and sustainable effort.
              </p>
            </div>
            <div className="space-y-5">
              {FIELD_RHYTHMS.map((rhythm) => {
                const Icon = rhythm.icon;
                return (
                  <article
                    key={rhythm.stage}
                    className="flex gap-4 rounded-3xl border border-primary/20 bg-primary/5 p-5 dark:border-primary/15 dark:bg-primary/10"
                  >
                    <span className="mt-1 inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary shadow dark:bg-slate-950/60">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{rhythm.stage}</h3>
                      <p className="text-sm text-muted-foreground">{rhythm.narrative}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                        {rhythm.enablement}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Watchpoints to manage</h2>
              <p className="text-sm text-muted-foreground">
                Safeguard your reputation by anticipating the realities literacy advocates navigate every season.
              </p>
            </div>
            <div className="space-y-5">
              {WATCHPOINTS.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="flex gap-4 rounded-3xl border border-primary/25 bg-primary/5 p-5 dark:border-primary/20 dark:bg-primary/10"
                  >
                    <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary shadow dark:bg-slate-950/60">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.risk}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                        {item.mitigation}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-8 rounded-3xl border border-border/60 bg-background p-10 shadow-sm dark:border-border/40 dark:bg-slate-950/80">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.6fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Cloud MLM Software plays for literacy champions
            </h2>
            <p className="text-sm text-muted-foreground">
              Unite storytelling passion with scalable systems. We automate the busywork so consultants can focus on readers.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Build my literacy roadmap
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={demoHref}>
                  Schedule a guided demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {CLOUD_PLAYS.map((play) => {
              const Icon = play.icon;
              return (
                <article
                  key={play.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                  <p className="text-sm text-muted-foreground">{play.description}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {play.outcome}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

