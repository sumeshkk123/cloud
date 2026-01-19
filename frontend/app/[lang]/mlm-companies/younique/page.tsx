import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { buildLocalizedPath } from "@/lib/locale-links";
import { isSupportedLocale } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ArrowRight,
  ArrowUpRight,
  Crown,
  Heart,
  MapPin,
  Palette,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import { ChartLineUp, ClipboardText, Handshake, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type BeautyPillar = {
  title: string;
  description: string;
  highlight: string;
  icon: IconType;
};

type EmpowerStage = {
  stage: string;
  focus: string;
  enablement: string;
  icon: IconType;
};

type CloudPlay = {
  title: string;
  description: string;
  outcome: string;
  icon: IconType;
};

const CORE_METRICS: Metric[] = [
  {
    label: "Global revenue",
    value: "$427M",
    detail: "Prestige cosmetics and skincare celebrated across digital-first communities.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "2012",
    detail: "Created in Lehi, Utah to elevate women’s confidence through beauty and community.",
    icon: Sparkles
  },
  {
    label: "Compensation",
    value: "Multilevel",
    detail: "Rewards consistent sales, mentoring, and community-driven leadership.",
    icon: UsersThree
  },
  {
    label: "Team",
    value: "Global presenters",
    detail: "Independent Presenters share authentic stories while giving back through philanthropy.",
    icon: Users
  },
  {
    label: "Primary market",
    value: "United States",
    detail: "Expanding worldwide with social commerce and localized training experiences.",
    icon: MapPin
  }
];

const BEAUTY_PILLARS: BeautyPillar[] = [
  {
    title: "Performance cosmetics",
    description:
      "High-impact pigments, long-wear formulas, and inclusive shade ranges empower artistry for every skin tone.",
    highlight: "Product launches pair with interactive tutorials and AR try-ons to boost confidence.",
    icon: Palette
  },
  {
    title: "Confidence skincare",
    description:
      "Dermatologist-tested cleansers, serums, and treatments support healthy radiance from within.",
    highlight: "Education-first approach helps customers build routines rooted in self-care.",
    icon: Heart
  },
  {
    title: "Presenter mentorship",
    description:
      "Robust onboarding, leadership tracks, and community circles nurture personal and professional growth.",
    highlight: "Every presenter receives resources to craft genuine, uplifting social content.",
    icon: Handshake
  },
  {
    title: "Philanthropic impact",
    description:
      "Younique Foundation programs invest in healing and empowerment for women and girls worldwide.",
    highlight: "Transparency dashboards connect product purchases to mission-driven outcomes.",
    icon: Crown
  }
];

const EMPOWER_STAGES: EmpowerStage[] = [
  {
    stage: "Ignite self-belief",
    focus:
      "Launch onboarding experiences that celebrate personal stories, product mastery, and brand purpose.",
    enablement: "Interactive storytelling kits, AI caption assistants, and compliance guardrails.",
    icon: ClipboardText
  },
  {
    stage: "Design signature looks",
    focus:
      "Help presenters curate personalised routines and content calendars that resonate with their communities.",
    enablement: "Data-backed shade matching, content libraries, and social listening insights.",
    icon: Palette
  },
  {
    stage: "Lead with impact",
    focus:
      "Guide top presenters to mentor teams, host philanthropic events, and amplify empowerment initiatives.",
    enablement: "Leadership dashboards, event orchestration tools, and mission impact trackers.",
    icon: Crown
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Beauty storytelling studio",
    description:
      "Delivers brand-approved visuals, scripts, and AI-coached reels to keep social commerce authentic and compliant.",
    outcome: "Speeds up content creation while ensuring every message uplifts and informs.",
    icon: Sparkles
  },
  {
    title: "Confidence journey hub",
    description:
      "Personalises skincare and makeup recommendations with progress tracking and auto-replenish options.",
    outcome: "Drives retention and showcases real results to inspire referrals.",
    icon: Heart
  },
  {
    title: "Presenter growth cockpit",
    description:
      "Maps leadership pipelines, training milestones, and philanthropic contributions in one view.",
    outcome: "Helps corporate teams deliver targeted coaching and celebrates mission impact.",
    icon: Crown
  },
  {
    title: "Global compliance radar",
    description:
      "Automates claim reviews, disclosure reminders, and cultural localisation for every market expansion.",
    outcome: "Keeps empowerment messaging safe as the brand enters new regions.",
    icon: ShieldCheck
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Younique Beauty Empowerment Blueprint";
  const description =
    "Discover how Younique empowers women through beauty, community, and philanthropy—elevated by Cloud MLM Software for compelling, compliant storytelling.";
  const keywords = [
    "Younique beauty strategy",
    "Younique presenter tools",
    "Cloud MLM Software beauty enablement",
    "social commerce MLM platform",
    "women empowerment direct selling"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/younique", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type YouniquePageProps = {
  params: { lang: SupportedLocale };
};

export default function YouniquePage({ params }: YouniquePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const servicesHref = buildLocalizedPath("/services", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const indexHref = buildLocalizedPath("/mlm-companies", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-slate-950 via-violet-900 to-fuchsia-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(192,132,252,0.32),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(244,114,182,0.3),transparent_60%),radial-gradient(circle_at_50%_85%,rgba(96,165,250,0.25),transparent_55%)]" />
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200/60 bg-fuchsia-500/10 px-4 py-1 text-sm font-semibold tracking-wide text-fuchsia-100">
              Younique • Beauty with purpose
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Elevate confidence with intelligent beauty experiences that honour every story.
            </h1>
            <p className="text-base text-fuchsia-50/80">
              Younique blends prestige cosmetics, personal growth, and philanthropy. Cloud MLM Software keeps presenters inspired and
              compliant as they share transformative routines, support survivors, and build sustainable businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  Explore the beauty enablement hub
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-fuchsia-200/60 text-fuchsia-100 hover:bg-fuchsia-500/10">
                <Link href={pricingHref}>
                  Design my presenter platform
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-fuchsia-100 underline underline-offset-4 hover:bg-white/10">
                <Link href={indexHref}>
                  Return to MLM company index
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-3 text-sm text-fuchsia-50/80">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-fuchsia-200" aria-hidden />
                Lehi, Utah • Serving beauty lovers across the United States and global digital communities
              </p>
              <p>
                “When women feel seen, supported, and celebrated, confidence becomes contagious.”
              </p>
            </div>
          </div>
          <aside className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <div className="space-y-2 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-fuchsia-200">Mission metrics</p>
              <h2 className="text-2xl font-semibold text-white">Younique pulse</h2>
            </div>
            <div className="grid gap-4">
              {CORE_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-black/25 p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-fuchsia-200/40 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-fuchsia-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-fuchsia-100/80">{metric.label}</p>
                        <p className="text-lg font-semibold text-white">{metric.value}</p>
                      </div>
                    </div>
                    <p className="text-sm text-fuchsia-50/80">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 rounded-3xl border border-border/60 bg-gradient-to-br from-fuchsia-50 via-white to-slate-50 p-10 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Empowering women with beauty and confidence</h2>
            <p className="text-base text-muted-foreground">
              Younique’s product line—from expressive color cosmetics to skin-nurturing treatments—helps women radiate inside and out.
              Presenters gain business tools, mentorship, and creative space to share their glow with the world.
            </p>
            <p className="text-base text-muted-foreground">
              The brand’s philanthropy underscores every purchase. Cloud MLM Software keeps the mission cohesive with dashboards that
              connect impact metrics to field storytelling in real time.
            </p>
          </div>
          <div className="grid gap-4 rounded-3xl border border-primary/10 bg-primary/5 p-6 dark:border-primary/10 dark:bg-primary/10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80 dark:text-primary/70">Empowerment lens</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Crown className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Beauty routines become platforms for women to rediscover self-worth.
              </li>
              <li className="flex items-start gap-2">
                <Heart className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Philanthropic programs provide healing resources and advocacy for survivors.
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Ethical product claims and ingredient transparency protect community trust.
              </li>
            </ul>
            <div>
              <Button asChild variant="secondary">
                <Link href={servicesHref}>
                  Explore empowerment services
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-border/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Beauty pillars
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            More than makeup: a movement celebrating resilience and self-expression
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Equip presenters to blend artistry, advocacy, and mentorship with compliant, data-driven support.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {BEAUTY_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/80"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                  {pillar.highlight}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
          <div className="space-y-4 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/80">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Presenter empowerment journey</h2>
            <p className="text-sm text-muted-foreground">
              Keep presenters inspired and protected from the first livestream to global leadership.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 hidden border-l border-primary/30 md:block" aria-hidden />
            <div className="space-y-6">
              {EMPOWER_STAGES.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <article
                    key={stage.stage}
                    className="relative grid gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75 md:grid-cols-[auto_1fr]"
                  >
                    <div className="flex items-center gap-4 md:flex-col md:items-start">
                      <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Stage {index + 1}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{stage.stage}</h3>
                      <p className="text-sm text-muted-foreground">{stage.focus}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                        {stage.enablement}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10 rounded-3xl border border-border/60 bg-background p-10 shadow-sm dark:border-border/40 dark:bg-slate-950/85">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Cloud MLM Software plays</h2>
            <p className="text-sm text-muted-foreground">
              Blend expressive beauty with AI-ready systems that keep every presenter supported and compliant.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Architect my Younique platform
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
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/80"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                    <p className="text-sm text-muted-foreground">{play.description}</p>
                  </div>
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
