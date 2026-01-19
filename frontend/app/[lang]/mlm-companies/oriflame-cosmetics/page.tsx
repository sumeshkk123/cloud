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
  Building2,
  Globe2,
  HandshakeIcon,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  Users
} from "lucide-react";
import { Cpu, Heart, Palette, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type CommunityDriver = {
  title: string;
  description: string;
  signal: string;
  icon: IconType;
};

type PlatformCapability = {
  title: string;
  description: string;
  payoff: string;
  icon: IconType;
};

const ORIFLAME_STATS: Stat[] = [
  {
    label: "Revenue",
    value: "$1.56B",
    detail: "Ranked #11 in the DSN Global 100, showcasing consistent global demand.",
    icon: Building2
  },
  {
    label: "Founded",
    value: "1967",
    detail: "Swedish-born heritage that pairs science with nature-inspired beauty.",
    icon: Sparkles
  },
  {
    label: "Headquarters",
    value: "Schaffhausen, Switzerland",
    detail: "Strategic location orchestrating R&D, supply chain, and sustainability initiatives.",
    icon: MapPin
  },
  {
    label: "Markets",
    value: "60+ countries",
    detail: "Localized business models that respect culture while preserving brand DNA.",
    icon: Globe2
  },
  {
    label: "Consultants",
    value: "3M+ entrepreneurs",
    detail: "Independent beauty and wellness advocates delivering personalised service.",
    icon: Users
  },
  {
    label: "Employees",
    value: "6,000 specialists",
    detail: "Scientists, trainers, and support teams enabling consistent product innovation.",
    icon: UsersThree
  },
  {
    label: "Product focus",
    value: "Cosmetics · Personal care · Wellness",
    detail: "Swedish innovation meets responsibly sourced botanicals and nutrients.",
    icon: Leaf
  },
  {
    label: "Compensation",
    value: "Multi-level empowerment",
    detail: "Rewards customer loyalty, leadership, and sustainable team growth.",
    icon: ShieldCheck
  }
];

const BRAND_PILLARS: Pillar[] = [
  {
    title: "Nature + science harmony",
    description: "Formulations blend plant-based ingredients with advanced research for visible results.",
    proof: "Global R&D centres coordinate clinical testing and ingredient traceability.",
    icon: Leaf
  },
  {
    title: "Beauty as empowerment",
    description: "Consultants build micro-enterprises with flexible business models and education.",
    proof: "3M+ entrepreneurs leverage Oriflame Academy and digital starter kits.",
    icon: HandshakeIcon
  },
  {
    title: "Sustainability leadership",
    description: "Respect for people and planet drives packaging, sourcing, and social investments.",
    proof: "Carbon reduction goals and philanthropic initiatives support communities worldwide.",
    icon: Heart
  }
];

const COMMUNITY_DRIVERS: CommunityDriver[] = [
  {
    title: "Consultant-first enablement",
    description: "Education, mentoring, and recognition elevate confidence at every career stage.",
    signal: "Onboarding journeys and leadership forums nurture consistent business growth.",
    icon: UsersThree
  },
  {
    title: "Digital social selling",
    description: "Live streaming, beauty apps, and analytics help consultants serve modern consumers.",
    signal: "Localized e-commerce portals streamline order management and client retention.",
    icon: Cpu
  },
  {
    title: "Purpose-driven storytelling",
    description: "Narratives celebrate empowerment, sustainability, and self-expression.",
    signal: "Campaigns spotlight real consultants balancing entrepreneurship and impact.",
    icon: Target
  }
];

const CLOUD_CAPABILITIES: PlatformCapability[] = [
  {
    title: "Personalised beauty journeys",
    description: "Create AI-assisted consultation flows, regimen planners, and routine reminders.",
    payoff: "Deliver consistent, high-touch experiences across digital and in-person channels.",
    icon: Palette
  },
  {
    title: "Global compliance guardrails",
    description: "Automate territory-specific policies, payouts, and data residency controls.",
    payoff: "Expand into new markets with the same discipline Oriflame maintains worldwide.",
    icon: ShieldCheck
  },
  {
    title: "Consultant intelligence",
    description: "Surface performance insights, goal tracking, and enablement resources in one hub.",
    payoff: "Empower leaders to coach with data while preserving Oriflame’s human touch.",
    icon: Users
  },
  {
    title: "Sustainability dashboards",
    description: "Track eco initiatives, ingredient sourcing, and social impact metrics effortlessly.",
    payoff: "Demonstrate purpose-based leadership to regulators, investors, and consumers.",
    icon: Heart
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Oriflame Cosmetics MLM Company Insights";
  const description =
    "Review Oriflame’s $1.56B global beauty enterprise—nature-meets-science innovation, consultant empowerment, and sustainability leadership—and explore how Cloud MLM Software scales similar ambitions.";
  const keywords = [
    "Oriflame MLM review",
    "Oriflame compensation plan",
    "Swedish beauty direct selling",
    "Cloud MLM Software beauty platform",
    "AI enablement for global MLM"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/oriflame-cosmetics", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type OriflamePageProps = {
  params: { lang: SupportedLocale };
};

export default function OriflamePage({ params }: OriflamePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-[#f5f2ff] via-[#eef9ff] to-[#f3fff5] py-20 dark:border-border/40 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(99,102,241,0.25),transparent_55%),radial-gradient(circle_at_70%_32%,rgba(14,165,233,0.22),transparent_60%),radial-gradient(circle_at_42%_84%,rgba(45,212,191,0.18),transparent_65%)]" aria-hidden />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.55fr)]">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              <span className="rounded-full border border-primary/30 bg-white/80 px-4 py-1 shadow-sm dark:border-primary/40 dark:bg-white/10">
                Rank #11 · Global 100
              </span>
              <span className="rounded-full border border-primary/30 bg-white/80 px-4 py-1 shadow-sm dark:border-primary/40 dark:bg-white/10">
                Swedish nature-inspired beauty
              </span>
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Oriflame Cosmetics: empowering global beauty entrepreneurs with sustainable innovation.
              </h1>
              <p className="text-base text-muted-foreground">
                Since 1967, Oriflame has balanced nature-inspired ingredients with advanced research to create inclusive beauty and wellness
                lines. A global consultant network delivers these experiences with empathy and entrepreneurial spirit.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Co-create your global rollout
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={pricingHref}>
                  Compare investment paths
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-primary hover:bg-primary/10">
                <Link href={demoHref}>
                  Experience an AI-led demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 -z-10 rounded-[36px] border border-foreground/10 bg-white/75 shadow-[0_40px_80px_-50px_rgba(79,70,229,0.35)] backdrop-blur dark:border-white/15 dark:bg-slate-950/80" aria-hidden />
            <div className="relative grid gap-6 rounded-[32px] p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">Company snapshot</span>
              <div className="grid gap-4 sm:grid-cols-2">
                {ORIFLAME_STATS.slice(0, 4).map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <article key={stat.label} className="rounded-3xl border border-foreground/10 bg-white/85 p-5 dark:border-white/15 dark:bg-slate-900/80">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{stat.label}</span>
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                      </div>
                      <p className="mt-3 text-2xl font-semibold text-foreground">{stat.value}</p>
                      <p className="mt-2 text-xs text-muted-foreground">{stat.detail}</p>
                    </article>
                  );
                })}
              </div>
              <div className="rounded-3xl border border-foreground/10 bg-gradient-to-br from-white via-primary/5 to-white p-6 dark:border-white/15 dark:from-slate-900 dark:via-primary/10 dark:to-slate-900">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">Operational scale</h2>
                <div className="mt-4 grid gap-4">
                  {ORIFLAME_STATS.slice(4).map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label} className="flex items-start gap-3 rounded-2xl border border-foreground/10 bg-white/80 p-4 dark:border-white/15 dark:bg-slate-900/70">
                        <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{stat.value}</p>
                          <p className="text-xs text-muted-foreground">{stat.detail}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Pillars that position Oriflame as a beauty icon</h2>
          <p className="text-sm text-muted-foreground">
            The brand’s influence spans product integrity, consultant empowerment, and a deep respect for the planet—creating a durable blueprint
            for modern direct selling.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BRAND_PILLARS.map((pillar) => {
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
                <p className="rounded-2xl border border-primary/20 bg-primary/10 p-4 text-xs text-primary dark:border-primary/30 dark:bg-primary/15 dark:text-primary-foreground">
                  {pillar.proof}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-primary/5 via-background to-emerald-50 py-20 dark:border-border/40 dark:from-primary/10 dark:via-slate-950 dark:to-emerald-950/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_72%_72%,rgba(16,185,129,0.18),transparent_55%)]" aria-hidden />
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Community drivers that sustain global momentum</h2>
            <p className="text-sm text-muted-foreground">
              Oriflame’s success is anchored in how it equips consultants to serve clients, collaborate digitally, and champion purposeful
              initiatives.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COMMUNITY_DRIVERS.map((driver) => {
              const Icon = driver.icon;
              return (
                <article
                  key={driver.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md dark:border-border/40 dark:bg-slate-950/80"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/15 dark:text-primary-foreground">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{driver.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{driver.description}</p>
                  <p className="text-xs font-medium text-primary/80 dark:text-primary/70">{driver.signal}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How Cloud MLM Software elevates Oriflame-level ambitions</h2>
          <p className="text-sm text-muted-foreground">
            We help beauty multinationals stay agile, compliant, and human-centred by digitising their entire consultant and client experience.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CLOUD_CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article
                key={capability.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/50 bg-background/95 p-6 shadow-sm transition hover:border-primary/50 hover:shadow-md dark:border-border/40 dark:bg-slate-950/80"
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
              Explore global beauty modules
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={contactHref}>
              Design your transformation plan
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

