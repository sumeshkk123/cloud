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
  Activity,
  ArrowRight,
  ArrowUpRight,
  Droplets,
  Flame,
  HandshakeIcon,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  Trees,
  Trophy,
  Users
} from "lucide-react";
import { GlobeHemisphereWest, Heartbeat, Lightbulb, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type StatCard = {
  label: string;
  value: string;
  context: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  description: string;
  signal: string;
  icon: IconType;
};

type Innovation = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type PlatformPlay = {
  title: string;
  description: string;
  enablement: string;
  icon: IconType;
};

const COMPANY_STATS: StatCard[] = [
  {
    label: "Global revenue",
    value: "$67.5M",
    context: "Wellness technology revenues sourced from Direct Selling News Global 100 listing (#98).",
    icon: Trophy
  },
  {
    label: "Founded",
    value: "1989",
    context: "35+ years advancing Japanese-inspired wellness science for global audiences.",
    icon: Lightbulb
  },
  {
    label: "Headquarters",
    value: "Irvine, California",
    context: "North American hub translating Japanese R&D into everyday lifestyle rituals.",
    icon: MapPin
  },
  {
    label: "Primary markets",
    value: "United States · Mexico",
    context: "High-engagement communities focused on holistic wellness and personal transformation.",
    icon: GlobeHemisphereWest
  },
  {
    label: "Employees",
    value: "250+",
    context: "Corporate, science, and customer success teams enabling consultant excellence worldwide.",
    icon: Users
  },
  {
    label: "Product portfolio",
    value: "Magnetics · Water · Nutrition · Home",
    context: "Solutions supporting the Five Pillars of Health with technology-meets-nature design.",
    icon: Sparkles
  },
  {
    label: "Compensation model",
    value: "Multilevel · Values-driven",
    context: "Rewards personal volume, customer loyalty, and leadership development with compliance guardrails.",
    icon: ShieldCheck
  },
  {
    label: "Sales motion",
    value: "Person-to-person mentorship",
    context: "Consultants serve as wellness coaches, reinforcing relationships beyond transactions.",
    icon: HandshakeIcon
  }
];

const FIVE_PILLARS: Pillar[] = [
  {
    title: "Healthy mind",
    description: "Mindfulness practices and restorative technologies support mental resilience and focus.",
    signal: "Consultants share rituals centred on sleep, stress, and energetic balance.",
    icon: Activity
  },
  {
    title: "Healthy body",
    description: "Flagship magnetic insoles, water filters, and nutrition stacks encourage everyday vitality.",
    signal: "Science-driven design keeps wellness routines accessible and measurable.",
    icon: Heartbeat
  },
  {
    title: "Healthy family",
    description: "Household solutions extend wellness benefits to loved ones and daily environments.",
    signal: "Family-centric narratives keep retention high across generations.",
    icon: UsersThree
  },
  {
    title: "Healthy society",
    description: "Community initiatives and education amplify impact beyond individual households.",
    signal: "Events, philanthropy, and sustainability commitments elevate reputation.",
    icon: Trees
  },
  {
    title: "Healthy finances",
    description: "Balanced compensation fosters realistic income pathways and leadership growth.",
    signal: "Training protects compliance while empowering entrepreneurial momentum.",
    icon: Target
  }
];

const INNOVATION_STORIES: Innovation[] = [
  {
    title: "Magnetic technology heritage",
    description: "Nikken’s pioneering magnetic wellness devices blend traditional Japanese insight with modern ergonomics.",
    proof: "Applied magnetics research underpins everything from insoles to sleep systems that reduce fatigue.",
    icon: Flame
  },
  {
    title: "PiMag® water ecosystem",
    description: "Filtration and mineral infusion replicate mountain springs for daily hydration rituals.",
    proof: "Certified filtration performance anchors wellness claims and differentiates household experiences.",
    icon: Droplets
  },
  {
    title: "Environmentally conscious design",
    description: "Sustainable materials and resource-efficient manufacturing reinforce wellness values.",
    proof: "Recyclable components and durable build quality limit waste while delighting customers.",
    icon: Leaf
  }
];

const CLOUD_MLM_PLAYS: PlatformPlay[] = [
  {
    title: "Codify the Five Pillars journey",
    description: "Translate mindset, body care, and home rituals into digital playbooks that guide every consultant.",
    enablement: "Interactive onboarding paths and AI nudges keep customers engaged across wellness dimensions.",
    icon: UsersThree
  },
  {
    title: "Trustworthy compensation analytics",
    description: "Model multi-market requirements, autoship commitments, and leadership bonuses in real time.",
    enablement: "Dashboards and alerts give leaders confidence in plan integrity and compliance.",
    icon: ShieldCheck
  },
  {
    title: "Insights-driven product curation",
    description: "Blend purchase signals with wellness goals to personalise PiMag®, magnetics, and nutrition bundles.",
    enablement: "Cross-sell recommendations respect health narratives and elevate customer lifetime value.",
    icon: Target
  },
  {
    title: "Sustainable growth controls",
    description: "Automate policy reminders, documentation, and ESG reporting to mirror Nikken’s values.",
    enablement: "Keep expansion disciplined while celebrating conscious business practices.",
    icon: Trees
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Nikken MLM Company Blueprint";
  const description =
    "Explore Nikken’s Five Pillars philosophy—holistic technology, people-first mentorship, and sustainable growth—and discover how Cloud MLM Software scales similar wellness enterprises.";
  const keywords = [
    "Nikken MLM review",
    "Nikken compensation plan",
    "Nikken Five Pillars of Health",
    "Cloud MLM Software for wellness",
    "AI MLM platform for Nikken distributors"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/nikken", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type NikkenPageProps = {
  params: { lang: SupportedLocale };
};

export default function NikkenPage({ params }: NikkenPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-[#f8fafc] via-[#f0f6ff] to-[#e5f5f0] py-20 dark:border-border/40 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.18),transparent_60%),radial-gradient(circle_at_45%_80%,rgba(59,130,246,0.15),transparent_65%)]" aria-hidden />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.6fr)]">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-primary">Rank #98 · Global 100</span>
              <span className="rounded-full border border-primary/30 bg-white/70 px-4 py-1 text-primary">Five Pillars of Health</span>
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Nikken: harmonising wellness innovation with purpose-driven communities.
              </h1>
              <p className="text-base text-muted-foreground">
                Since 1989, Nikken has fused Japanese wellness traditions with magnetic technology, hydration science, and sustainable design. Their consultants cultivate balanced lifestyles—mind, body, family, society, and finances—through authentic mentorship.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Talk to our wellness architects
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={pricingHref}>
                  Compare investment options
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-primary hover:bg-primary/10">
                <Link href={demoHref}>
                  Experience an AI demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 -z-10 rounded-[34px] border border-primary/30 bg-white/60 shadow-[0_30px_60px_-40px_rgba(16,24,40,0.45)] backdrop-blur dark:border-primary/20 dark:bg-slate-950/80" aria-hidden />
            <div className="relative grid gap-6 rounded-[32px] p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">Company snapshot</span>
              <div className="grid gap-4">
                {COMPANY_STATS.slice(0, 4).map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <article key={stat.label} className="rounded-3xl border border-primary/20 bg-white/80 p-5 dark:border-primary/30 dark:bg-slate-950/80">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{stat.label}</span>
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                      </div>
                      <p className="mt-3 text-2xl font-semibold text-foreground">{stat.value}</p>
                      <p className="mt-2 text-xs text-muted-foreground">{stat.context}</p>
                    </article>
                  );
                })}
              </div>
              <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-white p-6 dark:border-primary/30 dark:from-primary/10 dark:via-slate-950 dark:to-slate-950">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">Product ethos</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  From PiMag® hydration to Rest &amp; Relax technologies, Nikken cultivates solutions that enrich every pillar of life.
                </p>
                <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                  <li>• Magnetic and far-infrared innovation for restorative sleep</li>
                  <li>• Alkaline hydration rituals through advanced filtration</li>
                  <li>• Plant-forward nutrition designed for whole-body balance</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Five Pillars of Health in action</h2>
          <p className="text-sm text-muted-foreground">
            Nikken’s consultants anchor every conversation around holistic alignment. Each pillar strengthens the brand promise and keeps members loyal to the mission.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {FIVE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md dark:border-border/40 dark:bg-slate-950/80"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/15 dark:text-primary-foreground">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <p className="text-xs font-medium text-primary/80 dark:text-primary/70">{pillar.signal}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-primary/5 via-background to-emerald-50 py-20 dark:border-border/40 dark:from-primary/10 dark:via-slate-950 dark:to-emerald-950/50">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/25 via-transparent to-transparent opacity-80" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.75fr)]">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary dark:border-primary/40 dark:bg-primary/15">
              Product innovation timeline
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Engineering everyday wellness</h2>
            <p className="text-sm text-muted-foreground">
              Each breakthrough reflects a commitment to blending technology, sustainability, and human-centric experiences. Together, they form a blueprint for modern wellness enterprises.
            </p>
          </div>
          <div className="grid gap-6">
            {INNOVATION_STORIES.map((story, index) => {
              const Icon = story.icon;
              return (
                <article
                  key={story.title}
                  className="relative rounded-3xl border border-primary/20 bg-background/95 p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md dark:border-primary/30 dark:bg-slate-950/80"
                >
                  <span className="absolute -left-10 top-6 text-4xl font-semibold text-primary/30">{String(index + 1).padStart(2, "0")}</span>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{story.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{story.description}</p>
                  <p className="mt-3 rounded-2xl border border-primary/20 bg-primary/10 p-4 text-xs text-primary dark:border-primary/30 dark:bg-primary/15 dark:text-primary-foreground">
                    {story.proof}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Scaling the Nikken philosophy with Cloud MLM Software</h2>
          <p className="text-sm text-muted-foreground">
            Cloud MLM Software equips wellness-led enterprises with automation, insight, and governance so they can scale responsibly while preserving their human touch.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CLOUD_MLM_PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/50 bg-background/95 p-6 shadow-sm transition hover:border-primary/50 hover:shadow-md dark:border-border/40 dark:bg-slate-950/80"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{play.description}</p>
                <p className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-xs text-primary dark:border-primary/30 dark:bg-primary/10">
                  {play.enablement}
                </p>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={modulesHref}>
              Explore modular capabilities
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={contactHref}>
              Architect your launch plan
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

