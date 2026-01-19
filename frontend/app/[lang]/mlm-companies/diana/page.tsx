import type { ComponentType } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { buildLocalizedPath } from "@/lib/locale-links";
import { isSupportedLocale } from "@/lib/i18n-utils";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarClock,
  Droplets,
  FlaskConical,
  Globe2,
  HeartHandshake,
  Leaf,
  LineChart,
  Palette,
  Sparkles,
  Users
} from "lucide-react";
import { ChartLineUp, ChatsCircle, HandHeart, StarFour } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  narrative: string;
  icon: IconType;
};

type Experience = {
  title: string;
  description: string;
  evidence: string;
  icon: IconType;
};

type Programme = {
  name: string;
  promise: string;
  detail: string;
};

type Opportunity = {
  title: string;
  description: string;
  icon: IconType;
};

type Readiness = {
  label: string;
  score: string;
  message: string;
};

type CloudPlay = {
  title: string;
  description: string;
  outcome: string;
  icon: IconType;
};

const AURA_METRICS: Metric[] = [
  {
    label: "Revenue signal",
    value: "$147M",
    narrative: "Direct Selling News ranks Diana with $147 million in annual revenue from beauty, lingerie, and wellness.",
    icon: LineChart
  },
  {
    label: "Founded",
    value: "1986",
    narrative: "Decades of botanically-inspired formulations emerging from Tokyo’s beauty innovation hub.",
    icon: CalendarClock
  },
  {
    label: "Product universe",
    value: "Beauty • Lingerie • Wellness",
    narrative: "Collections fuse Japanese skincare rituals, confidence-first apparel, and holistic supplements.",
    icon: Palette
  },
  {
    label: "Primary market",
    value: "Japan",
    narrative: "A community of Glow Ambassadors anchored in Japan with expansion-ready training infrastructure.",
    icon: Globe2
  }
];

const BRAND_EXPERIENCES: Experience[] = [
  {
    title: "Ritual-inspired formulations",
    description:
      "Diana blends ancient botanicals with biotech actives so every serum, mask, and supplement feels luxurious and effective.",
    evidence: "Glow Ambassadors demo textures, absorption, and layering techniques during living room consultations.",
    icon: FlaskConical
  },
  {
    title: "Confidence-first apparel",
    description:
      "Lingerie collections focus on bespoke fits and empowering silhouettes that align with the brand’s body-positive ethos.",
    evidence: "Consultants guide styling sessions that celebrate individuality while reinforcing premium loyalty.",
    icon: Sparkles
  },
  {
    title: "Community-led mentoring",
    description:
      "Ambassador huddles, micro workshops, and weekly glow calls keep new sellers supported and compliance aware.",
    evidence: "Vector-style field coaching translated into beauty rituals and storytelling playbooks.",
    icon: HeartHandshake
  },
  {
    title: "Service beyond the sale",
    description:
      "Refill journeys, seasonal look-books, and skincare diagnostics create lifetime value across multi-category households.",
    evidence: "CRM-driven 90-day check-ins and loyalty surprises keep reorder rates strong.",
    icon: Users
  }
];

const SIGNATURE_PROGRAMMES: Programme[] = [
  {
    name: "Glow Studio Sessions",
    promise: "Experience-led gatherings that turn skincare education into memorable self-care rituals.",
    detail:
      "Hosts receive curated kits featuring best-selling serums, spa accessories, and scripts that prompt before/after journaling."
  },
  {
    name: "Ambassador Mastery Path",
    promise: "Tiered certifications covering ingredient literacy, inclusive selling, and personal branding.",
    detail:
      "Each level unlocks digital badges, advanced mentorship, and invitation-only leadership retreats in Tokyo."
  },
  {
    name: "Luxe Loyalty Loops",
    promise: "Automated loyalty arcs nudge clients toward refills, limited editions, and capsule launches.",
    detail:
      "CRM nudges pair skin diagnostics with curated sets to keep average order values growing across seasons."
  }
];

const OPPORTUNITY_SIGNALS: Opportunity[] = [
  {
    title: "Clean beauty differentiation",
    description:
      "Efficacy-backed botanicals and transparent ingredient stories resonate with thoughtful Japanese consumers.",
    icon: Leaf
  },
  {
    title: "Hybrid retail theatre",
    description:
      "Ambassadors mix in-home rituals, pop-up ateliers, and livestream skincare labs for modern reach.",
    icon: ChatsCircle
  },
  {
    title: "Mentor culture momentum",
    description:
      "Structured coaching keeps part-time ambassadors engaged and confident while scaling to leadership tiers.",
    icon: HandHeart
  }
];

const RISK_RADAR: Opportunity[] = [
  {
    title: "Regenerative claims scrutiny",
    description:
      "Beauty regulators expect evidence-backed messaging on collagen, elasticity, and anti-aging claims.",
    icon: ChartLineUp
  },
  {
    title: "Inventory seasonality",
    description:
      "Limited-edition capsules can disrupt cash flow if ambassadors overstock without data-driven insights.",
    icon: Droplets
  },
  {
    title: "Experience consistency",
    description:
      "Every Glow Studio must deliver premium ambience—fragrance, lighting, and storytelling—to protect brand equity.",
    icon: StarFour
  }
];

const READINESS_SCORES: Readiness[] = [
  {
    label: "Brand trust velocity",
    score: "72/100",
    message: "Lifetime refill promises, premium packaging, and DSN rankings uplift trust—protect claims with QA playbooks."
  },
  {
    label: "Field enablement rhythm",
    score: "68/100",
    message: "Weekly Glow Huddles and digital dashboards must stay personalised to keep ambassadors energised."
  },
  {
    label: "Digital ritual maturity",
    score: "63/100",
    message: "Room to embed AI skincare diagnostics, AR look-books, and cohort analytics into every launch."
  }
];

const CLOUD_ENABLEMENT: CloudPlay[] = [
  {
    title: "Ritual intelligence engine",
    description:
      "Map customer skin goals, recommended routines, and refill cadences into a single AI-assisted journey.",
    outcome: "Ambassadors enter appointments prepared with hyper-personalised talking points and bundles.",
    icon: Sparkles
  },
  {
    title: "Experience quality monitor",
    description:
      "Capture post-event feedback, ambience ratings, and compliance checks across every Glow Studio.",
    outcome: "Leadership spots training gaps fast and preserves the upscale brand aura.",
    icon: HeartHandshake
  },
  {
    title: "Inventory pulse dashboard",
    description:
      "Blend sell-through data with seasonal launch calendars to keep kits, lingerie, and skincare flowing on time.",
    outcome: "Ambassadors avoid stockouts while finance teams maintain healthy cash cycles.",
    icon: LineChart
  }
];

const PRIMARY_TRUST_SCORE = {
  score: 72,
  label: "Trust composite",
  summary:
    "Measurement combines compliance hygiene, product satisfaction, and the mentorship depth behind the Glow Ambassador network."
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = isSupportedLocale(params.lang) ? params.lang : i18n.defaultLocale;

  const title = "Diana MLM Company Overview & Glow Ambassador Playbook";
  const description =
    "Dive into Diana’s skincare, lingerie, and wellness opportunity. Understand revenue signals, ambassador programmes, and Cloud MLM enablement tailored for beauty thought leaders.";

  const alternates = i18n.locales.reduce<Record<string, string>>((acc, currentLocale) => {
    acc[currentLocale] = buildLocalizedPath(currentLocale, "/mlm-companies/diana");
    return acc;
  }, {});

  return {
    title,
    description,
    alternates: { canonical: buildLocalizedPath(locale, "/mlm-companies/diana"), languages: alternates },
    openGraph: {
      title,
      description,
      url: buildLocalizedPath(locale, "/mlm-companies/diana"),
      type: "article"
    }
  };
}

export default function DianaPage({ params }: { params: { lang: Locale } }) {
  const locale = isSupportedLocale(params.lang) ? params.lang : i18n.defaultLocale;

  const demoHref = buildLocalizedPath(locale, "/free-mlm-software-demo");
  const contactHref = buildLocalizedPath(locale, "/contact");
  const companiesHref = buildLocalizedPath(locale, "/mlm-companies");

  return (
    <div className="space-y-24 pb-20 pt-16">
      <section className="relative isolate overflow-hidden border-y border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background py-20 dark:from-primary/15">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary dark:border-primary/20 dark:bg-primary/20">
              Beauty & wellness • Rank #71
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Diana MLM Company — Glow Ambassador Intelligence
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                Diana celebrates individuality with skincare, lingerie, and wellness collections born in Tokyo. Use this field
                guide to understand the rituals, mentorship culture, and digital enablement leaders deploy to stay ahead in a
                premium beauty market.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Explore platform tour
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={contactHref}>
                  Discuss launch strategy
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="underline underline-offset-4">
                <Link href={companiesHref}>
                  Back to MLM companies
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              “Glow Ambassadors are passionate advocates for healthy skin and confident living. Ongoing mentorship and
              community huddles turn personal rituals into a lifestyle movement.”
            </p>
          </div>

          <aside className="space-y-6 rounded-3xl border border-primary/25 bg-background/90 p-8 shadow-xl dark:border-primary/20 dark:bg-slate-950/80">
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-border/60 bg-background/95 p-6 text-center dark:border-border/40 dark:bg-slate-950/70">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {PRIMARY_TRUST_SCORE.label}
              </span>
              <span className="text-5xl font-semibold text-primary">{PRIMARY_TRUST_SCORE.score}</span>
              <p className="text-xs text-muted-foreground">{PRIMARY_TRUST_SCORE.summary}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {AURA_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex h-full flex-col gap-3 rounded-2xl border border-border/60 bg-background p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {metric.label}
                      </span>
                    </div>
                    <span className="text-lg font-semibold text-foreground">{metric.value}</span>
                    <p className="text-xs text-muted-foreground">{metric.narrative}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Signature glow experiences</h2>
            <p className="text-sm text-muted-foreground">
              Align product storytelling with the sensory rituals Diana customers expect. Each experience turns high-touch
              service into measurable retention.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {BRAND_EXPERIENCES.map((experience) => {
              const Icon = experience.icon;
              return (
                <article
                  key={experience.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-primary/20 bg-primary/5 p-6 dark:border-primary/15 dark:bg-primary/10"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background text-primary shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{experience.title}</h3>
                  <p className="text-sm text-muted-foreground">{experience.description}</p>
                  <p className="text-xs font-medium text-primary">{experience.evidence}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Programmes powering the field</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            A three-part operating system elevates Glow Ambassadors from their first consultation through leadership.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {SIGNATURE_PROGRAMMES.map((programme) => (
            <article
              key={programme.name}
              className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
            >
              <h3 className="text-lg font-semibold text-foreground">{programme.name}</h3>
              <p className="text-sm font-medium text-primary">{programme.promise}</p>
              <p className="text-sm text-muted-foreground">{programme.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Opportunity radar & risk radar
            </h2>
            <p className="text-sm text-muted-foreground">
              Blend beauty-led storytelling with governance guardrails so the brand’s reputation, community, and growth stay in
              balance.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background p-6 dark:border-border/40 dark:bg-slate-950/80">
              <h3 className="text-lg font-semibold text-foreground">Momentum windows</h3>
              <div className="space-y-4">
                {OPPORTUNITY_SIGNALS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-3 rounded-2xl border border-border/60 p-4 dark:border-border/40">
                      <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <p className="text-xs text-muted-foreground">
                        <span className="block text-sm font-semibold text-foreground">{item.title}</span>
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-primary/25 bg-primary/5 p-6 dark:border-primary/20 dark:bg-primary/10">
              <h3 className="text-lg font-semibold text-foreground">Watchpoints</h3>
              <div className="space-y-4">
                {RISK_RADAR.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-3 rounded-2xl border border-primary/30 p-4 dark:border-primary/25">
                      <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background text-primary shadow-sm">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <p className="text-xs text-muted-foreground">
                        <span className="block text-sm font-semibold text-foreground">{item.title}</span>
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Readiness dashboard</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Score your organisation before rolling out a Diana-aligned programme. Prioritise trust, enablement, and digital
            maturity.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {READINESS_SCORES.map((item) => (
            <article
              key={item.label}
              className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/80"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{item.label}</p>
              <span className="text-4xl font-semibold text-primary">{item.score}</span>
              <p className="text-sm text-muted-foreground">{item.message}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 rounded-3xl border border-primary/25 bg-primary/5 p-8 dark:border-primary/20 dark:bg-primary/10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Cloud MLM Software for Glow Ambassadors
            </h2>
            <p className="text-sm text-muted-foreground">
              Pair Diana’s artistry with AI-driven insights. Our platform orchestrates rituals, loyalty loops, and compliance so
              leaders scale with grace.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={demoHref}>
                  Book an experience demo
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href={contactHref}>
                  Co-create my rollout
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {CLOUD_ENABLEMENT.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <p className="text-xs font-medium text-primary">{item.outcome}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

