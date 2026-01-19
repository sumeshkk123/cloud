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
  BookOpen,
  Feather,
  Flower2,
  Globe2,
  Heart,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users2
} from "lucide-react";
import { ChartLineUp, HandHeart, UsersFour, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type EmpowermentPillar = {
  title: string;
  description: string;
  emphasis: string;
  icon: IconType;
};

type CommunityCelebration = {
  title: string;
  summary: string;
  proof: string;
  icon: IconType;
};

type PlatformCapability = {
  title: string;
  description: string;
  payoff: string;
  icon: IconType;
};

const PURE_ROMANCE_METRICS: Metric[] = [
  {
    label: "Revenue",
    value: "$237M+",
    detail: "Relationship wellness brand creating joyful, confidence-filled experiences.",
    icon: Heart
  },
  {
    label: "Founded",
    value: "1993 · Cincinnati",
    detail: "Decades of intimacy education and women-led entrepreneurship.",
    icon: Flower2
  },
  {
    label: "Consultant community",
    value: "165+ employees & nationwide partners",
    detail: "Empathetic educators who host parties, private sessions, and digital support circles.",
    icon: Users2
  },
  {
    label: "Primary market",
    value: "United States",
    detail: "Growing with bilingual resources, inclusive products, and digital-first journeys.",
    icon: Globe2
  },
  {
    label: "Product universe",
    value: "Intimacy & wellness essentials",
    detail: "Bath, beauty, and enhancement collections designed to nurture body, mind, and connection.",
    icon: Feather
  },
  {
    label: "Sales motion",
    value: "Party plan + private consultations",
    detail: "Safe spaces, open dialogue, and personalised care anchored in trust.",
    icon: HandHeart
  }
];

const EMPOWERMENT_PILLARS: EmpowermentPillar[] = [
  {
    title: "Education without taboo",
    description:
      "Consultants lead with medically informed resources to answer questions about intimacy, pleasure, and self-care.",
    emphasis: "Guests leave informed, confident, and ready to continue the conversation long after the party.",
    icon: BookOpen
  },
  {
    title: "Self-love as a ritual",
    description:
      "Curated self-care routines—from bath luxuries to affirmations—help customers celebrate their bodies every day.",
    emphasis: "Personalised bundles keep confidence high between events and nurture repeat purchases.",
    icon: Sparkles
  },
  {
    title: "Inclusive belonging",
    description:
      "Pure Romance champions diverse voices, creating judgement-free zones for all identities and relationship journeys.",
    emphasis: "Community-first storytelling strengthens brand loyalty and expands reach.",
    icon: MessageCircle
  }
];

const COMMUNITY_CELEBRATIONS: CommunityCelebration[] = [
  {
    title: "Experience-first parties",
    summary:
      "Curated playlists, storytelling kits, and sensory demos turn gatherings into safe, joy-filled celebrations.",
    proof: "Conversion climbs when hosts personalise themes around confidence, communication, or romance refreshes.",
    icon: UsersThree
  },
  {
    title: "Confidence coaching",
    summary:
      "Consultants blend product expertise with empowerment coaching covering communication, self-exploration, and wellbeing.",
    proof: "Automated reflection prompts and follow-up journals elevate reorder rates and deepen relationships.",
    icon: HandHeart
  },
  {
    title: "Recognition with heart",
    summary:
      "Awards spotlight inclusive leadership, education milestones, and community impact—not just sales volume.",
    proof: "Values-driven recognition increases retention and attracts mission-aligned talent.",
    icon: UsersFour
  }
];

const CLOUD_PURE_ROMANCE_CAPABILITIES: PlatformCapability[] = [
  {
    title: "Intimacy education studio",
    description:
      "Centralise compliant guides, expert interviews, and AI-curated event outlines tailored to each audience’s comfort level.",
    payoff: "Ensure every consultant leads with accurate, empathetic messaging that builds trust instantly.",
    icon: BookOpen
  },
  {
    title: "Personalised care journeys",
    description:
      "Combine preference quizzes, purchase history, and wellbeing goals to create curated self-care plans.",
    payoff: "Deliver thoughtful recommendations while respecting privacy and regulatory nuances.",
    icon: ShieldCheck
  },
  {
    title: "Event-to-loyalty automation",
    description:
      "Automate invites, gratitude notes, subscription offers, and wellness check-ins across email, SMS, and social DMs.",
    payoff: "Extend warmth beyond the party with human-sounding touches that strengthen loyalty.",
    icon: Heart
  },
  {
    title: "Impact analytics",
    description:
      "Visualise consultant growth, education milestones, and customer sentiment to inform coaching and recognition.",
    payoff: "Leadership can amplify best practices, celebrate inclusive wins, and focus resources where they matter most.",
    icon: ChartLineUp
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Pure Romance Company Spotlight & Empowered Wellness Enablement";
  const description =
    "Discover how Pure Romance elevates intimacy, confidence, and community—and how Cloud MLM Software powers compliant education, personalised care, and values-driven growth.";
  const keywords = [
    "Pure Romance MLM review",
    "Intimacy wellness direct sales",
    "Pure Romance party tools",
    "Cloud MLM Software for wellness brands",
    "AI intimacy education platform"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/pure-romance", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PureRomancePageProps = {
  params: { lang: SupportedLocale };
};

export default function PureRomancePage({ params }: PureRomancePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-[#fff5fb] via-[#fdf5ff] to-[#f0f7ff] py-20 dark:border-border/40 dark:from-slate-950/70 dark:via-slate-950 dark:to-rose-950/40">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(236,72,153,0.18),transparent_55%),radial-gradient(circle_at_82%_28%,rgba(79,70,229,0.18),transparent_60%),radial-gradient(circle_at_50%_88%,rgba(244,114,182,0.2),transparent_65%)]"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-16 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.55fr)]">
          <div className="space-y-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-rose-500 dark:text-rose-200">
              <span className="rounded-full border border-rose-200/60 bg-white/80 px-4 py-1 shadow-sm backdrop-blur dark:border-white/20 dark:bg-slate-950/60">
                Intimacy reimagined
              </span>
              <span className="rounded-full border border-indigo-200/60 bg-indigo-50/80 px-4 py-1 text-indigo-600 shadow-sm backdrop-blur dark:border-indigo-400/40 dark:bg-indigo-900/40 dark:text-indigo-200">
                Education-driven
              </span>
              <span className="rounded-full border border-amber-200/60 bg-amber-50/80 px-4 py-1 text-amber-600 shadow-sm backdrop-blur dark:border-amber-400/40 dark:bg-amber-900/40 dark:text-amber-200">
                Confidence culture
              </span>
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Pure Romance: intimacy education, inclusive community, and everyday self-love rituals.
              </h1>
              <p className="text-base text-muted-foreground">
                Pure Romance normalises conversations about connection and wellbeing. Cloud MLM Software strengthens that mission with compliance-led
                content, personalised journeys, and insight-rich coaching tools.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Design your Pure Romance platform
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={pricingHref}>
                  Compare deployment tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="hover:bg-rose-100/60 dark:hover:bg-rose-500/20">
                <Link href={demoHref}>
                  Preview an intimacy workshop demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 -z-10 rounded-[3rem] border border-rose-200/70 bg-white/85 shadow-[0_48px_120px_-70px_rgba(244,114,182,0.45)] backdrop-blur dark:border-white/15 dark:bg-slate-950/80" aria-hidden />
            <div className="relative grid gap-5 rounded-[2.6rem] p-8">
              {PURE_ROMANCE_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-3 rounded-3xl border border-transparent bg-gradient-to-r from-white/95 via-white/80 to-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:border-rose-300/70 hover:shadow-lg dark:from-slate-900/85 dark:via-slate-900/60 dark:to-slate-900/30"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">{metric.label}</h2>
                    </div>
                    <p className="text-xl font-semibold text-foreground">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-10 rounded-[3rem] border border-border/60 bg-gradient-to-br from-background to-rose-50/60 p-10 shadow-lg shadow-rose-100/40 dark:border-border/40 dark:from-slate-950 dark:to-slate-950/70">
        <div className="space-y-4 md:max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/60 bg-rose-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-rose-600 dark:border-rose-400/40 dark:bg-rose-900/40 dark:text-rose-200">
            Empowerment pillars
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Confidence blossoms when education, care, and belonging collide.
          </h2>
          <p className="text-sm text-muted-foreground">
            Pure Romance consultants lead with empathy and expertise. Our platform keeps those stories consistent, compliant, and ready to inspire.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {EMPOWERMENT_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-rose-200/40 bg-background/95 p-6 transition hover:-translate-y-1 hover:border-rose-400/70 hover:shadow-xl dark:border-rose-400/30 dark:bg-slate-950/85"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <p className="text-xs font-medium text-rose-600 dark:text-rose-200">{pillar.emphasis}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-background via-background to-indigo-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-900/40">
        <div
          className="absolute inset-x-0 top-16 h-60 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.18),transparent_65%)] blur-3xl dark:opacity-70"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-10 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.55fr)]">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:border-indigo-400/40 dark:bg-indigo-900/40 dark:text-indigo-200">
              Community celebrations
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Every gathering becomes a sanctuary for curiosity and connection.
            </h2>
            <p className="text-sm text-muted-foreground">
              Cloud MLM Software keeps Pure Romance experiences organised, insight-rich, and ready to spark ongoing conversation.
            </p>
          </div>
          <div className="rounded-[2.5rem] border border-border/50 bg-white/85 p-8 shadow-lg shadow-indigo-200/40 backdrop-blur dark:border-border/40 dark:bg-slate-950/85 dark:shadow-indigo-900/40">
            <ul className="space-y-6">
              {COMMUNITY_CELEBRATIONS.map((celebration) => {
                const Icon = celebration.icon;
                return (
                  <li key={celebration.title} className="flex gap-4">
                    <span className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{celebration.title}</h3>
                      <p className="text-sm text-muted-foreground">{celebration.summary}</p>
                      <p className="rounded-2xl border border-indigo-200/60 bg-indigo-50/70 p-4 text-xs text-indigo-600 dark:border-indigo-400/30 dark:bg-indigo-900/40 dark:text-indigo-200">
                        {celebration.proof}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary dark:border-primary/40 dark:bg-primary/15">
            Cloud MLM Software advantage
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Build an inclusive, insight-rich Pure Romance ecosystem.
          </h2>
          <p className="text-sm text-muted-foreground">
            From intimacy education to loyalty journeys, Cloud MLM Software keeps consultants empowered, compliant, and ready to deliver care with
            confidence.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CLOUD_PURE_ROMANCE_CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article
                key={capability.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/50 bg-background/95 p-6 shadow-md transition hover:border-primary/50 hover:shadow-xl dark:border-border/40 dark:bg-slate-950/85"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
                <p className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-xs text-primary dark:border-primary/30 dark:bg-primary/10">
                  {capability.payoff}
                </p>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={modulesHref}>
              Explore wellness-ready modules
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={contactHref}>
              Craft your intimacy roadmap
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

