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
  Beaker,
  GraduationCap,
  HandshakeIcon,
  Heart,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UsersRound
} from "lucide-react";
import { GlobeHemisphereEast, Leaf, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type SnapshotStat = {
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

type CommunityPlay = {
  title: string;
  insight: string;
  signal: string;
  icon: IconType;
};

type PlatformCapability = {
  title: string;
  description: string;
  action: string;
  icon: IconType;
};

const SNAPSHOT_STATS: SnapshotStat[] = [
  {
    label: "Global revenue",
    value: "$192M",
    detail: "DSN Global 100 ranking (#64) highlights sustained demand for evidence-based wellness experiences.",
    icon: TrendingUp
  },
  {
    label: "Founded",
    value: "2001",
    detail: "Two decades refining holistic lifestyle products and cross-border community expansion.",
    icon: Sparkles
  },
  {
    label: "Headquarters",
    value: "Hong Kong",
    detail: "Strategic Asia-Pacific base connecting U.S. product development with high-growth markets.",
    icon: MapPin
  },
  {
    label: "Primary market",
    value: "Hong Kong",
    detail: "High-touch coaching culture where authentic stories and premium skincare resonate.",
    icon: Target
  },
  {
    label: "Team",
    value: "153 employees",
    detail: "Corporate, science, and customer-success specialists enabling global members.",
    icon: UsersRound
  },
  {
    label: "Product focus",
    value: "Wellness · Beauty · Home care",
    detail: "Skincare rituals, nutrition stacks, and household essentials guided by R&D rigor.",
    icon: Beaker
  },
  {
    label: "Compensation",
    value: "Multi-level plan",
    detail: "Balanced enrolment with loyal customer volume to reward retention, not hype.",
    icon: ShieldCheck
  },
  {
    label: "Sales motion",
    value: "Person-to-person advocacy",
    detail: "Members serve as wellness mentors, turning personal transformations into success stories.",
    icon: HandshakeIcon
  }
];

const PRODUCT_PILLARS: Pillar[] = [
  {
    title: "Science-led formulations",
    description: "Advanced skincare, nutritional supplements, and wellness essentials crafted with rigorous ingredient testing.",
    proof: "NHT Global emphasises clinical research to validate every hero product before international launches.",
    icon: Leaf
  },
  {
    title: "Holistic vitality systems",
    description: "Curated product ecosystems empower members to promote complete well-being, not single-use solutions.",
    proof: "Bundles unite inside-out beauty, immunity, and lifestyle enhancements to deliver visible results.",
    icon: Sparkles
  },
  {
    title: "Premium customer experience",
    description: "Loyalty rewards, education, and personalised consultations nurture long-term advocates.",
    proof: "Omnichannel touchpoints keep customers connected to mentors and tailored regimens.",
    icon: Heart
  }
];

const COMMUNITY_PLAYS: CommunityPlay[] = [
  {
    title: "Mentor-first onboarding",
    insight: "Members guide prospects through rituals, ingredient education, and lifestyle coaching.",
    signal: "Structured learning paths keep product storytelling compliant and compelling.",
    icon: GraduationCap
  },
  {
    title: "Story-driven growth",
    insight: "Authentic transformations power social proof, creating a magnetic pull for wellness seekers.",
    signal: "Content, live demos, and events revolve around lived experiences instead of hard selling.",
    icon: UsersThree
  },
  {
    title: "Community as retention flywheel",
    insight: "Support circles and recognition systems transform transactions into enduring relationships.",
    signal: "Monthly wellness meetups and digital groups sustain engagement across geographies.",
    icon: GlobeHemisphereEast
  }
];

const CLOUD_CAPABILITIES: PlatformCapability[] = [
  {
    title: "Personalised wellness journeys",
    description: "Digitise members’ signature coaching flow with guided onboarding, regimen builders, and progress tracking.",
    action: "Help every mentor deliver consistent, AI-assisted experiences that mirror in-person care.",
    icon: UsersThree
  },
  {
    title: "Real-time compensation clarity",
    description: "Model multi-level requirements, autoships, and compliance thresholds without spreadsheets.",
    action: "Give field leaders dashboards that build trust and keep enrolment aligned with customer value.",
    icon: ShieldCheck
  },
  {
    title: "Predictive demand planning",
    description: "Use purchase signals to forecast inventory and personalise cross-sell recommendations.",
    action: "Empower NHT Global-style operations to meet demand surges with surgical precision.",
    icon: Target
  },
  {
    title: "Regulatory-ready expansion",
    description: "Localise languages, currencies, and reporting so new markets launch with confidence.",
    action: "Extend the Hong Kong playbook into emerging territories without compromising governance.",
    icon: GlobeHemisphereEast
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "NHT Global MLM Company Insights";
  const description =
    "Review NHT Global’s $192M wellness brand—holistic product pillars, mentor-led growth, and global community—and explore how Cloud MLM Software elevates similar strategies.";
  const keywords = [
    "NHT Global MLM review",
    "NHT Global compensation plan",
    "NHT Global wellness products",
    "Cloud MLM Software for beauty brands",
    "AI MLM platform for NHT Global"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/nht-global", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type NhtGlobalPageProps = {
  params: { lang: SupportedLocale };
};

export default function NhtGlobalPage({ params }: NhtGlobalPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-primary/30 bg-gradient-to-br from-[#0f172a] via-[#1c2c52] to-[#1e3a5f] py-20 text-white dark:border-primary/20">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/40 via-transparent to-transparent opacity-70" aria-hidden />
        <div className="absolute -left-16 top-1/3 h-56 w-56 rounded-full bg-emerald-400/25 blur-[120px]" aria-hidden />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-sky-400/25 blur-[110px]" aria-hidden />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.6fr)]">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-sky-200">
              <span className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-white/80">Rank #64 · Global 100</span>
              <span className="rounded-full border border-white/20 bg-white/5 px-4 py-1 text-white/70">Hong Kong Headquarters</span>
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                NHT Global: holistic wellness, community-first leadership, and data-ready expansion strategies.
              </h1>
              <p className="text-base text-slate-200/80">
                Founded in 2001, NHT Global empowers Independent Members to deliver premium skincare, nutrition, and lifestyle solutions. Their success stems from science-backed products, mentor-led coaching, and a culture that prizes genuine transformation over hype.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Discuss your wellness rollout
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <Link href={pricingHref}>
                  Explore platform investment
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-sky-200 hover:bg-sky-400/15">
                <Link href={demoHref}>
                  Request AI-guided demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 -z-10 rounded-[34px] border border-white/20 bg-white/5 blur-sm" aria-hidden />
            <div className="relative grid gap-6 rounded-[32px] border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200">Company snapshot</span>
              <div className="grid gap-5 sm:grid-cols-2">
                {SNAPSHOT_STATS.slice(0, 4).map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <article key={stat.label} className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-black/30 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-400/15 text-sky-100">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <span className="text-sm font-semibold text-white">{stat.label}</span>
                      </div>
                      <p className="text-xl font-semibold text-white">{stat.value}</p>
                      <p className="text-xs text-slate-200/70">{stat.detail}</p>
                    </article>
                  );
                })}
              </div>
              <div className="grid gap-4 rounded-2xl border border-white/15 bg-black/25 p-5">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-sky-100">Product identity</h2>
                <p className="text-xs text-slate-200/70">
                  Premium beauty, wellness, and home essentials inspire loyal customer relationships and repeatable stories.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {SNAPSHOT_STATS.slice(4, 8).map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label} className="space-y-2 rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-2 text-sky-100">
                          <Icon className="h-4 w-4" aria-hidden />
                          <span className="text-xs font-semibold uppercase tracking-wide">{stat.label}</span>
                        </div>
                        <p className="text-sm font-semibold text-white">{stat.value}</p>
                        <p className="text-[11px] text-slate-200/70">{stat.detail}</p>
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Product pillars that drive the brand</h2>
          <p className="text-sm text-muted-foreground">
            NHT Global positions itself as a holistic wellness partner. Its formulations, experience design, and advocacy culture help Independent Members deliver results customers can feel—and trust.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background p-6 transition hover:border-primary/40 hover:shadow-lg dark:border-primary/30 dark:from-primary/10 dark:via-slate-950 dark:to-slate-950"
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

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-primary/5 via-background to-sky-50 py-20 dark:border-border/40 dark:from-primary/10 dark:via-slate-950 dark:to-slate-950/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(59,130,246,0.15),transparent_55%),radial-gradient(circle_at_70%_72%,rgba(56,189,248,0.15),transparent_55%)]" aria-hidden />
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Community plays that sustain momentum</h2>
            <p className="text-sm text-muted-foreground">
              Members build the brand through mentorship, storytelling, and authentic care. These practices keep teams engaged and customers loyal.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {COMMUNITY_PLAYS.map((play) => {
              const Icon = play.icon;
              return (
                <article
                  key={play.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md dark:border-border/40 dark:bg-slate-950/80"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-sm font-semibold text-foreground">{play.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{play.insight}</p>
                  <p className="text-xs font-medium text-primary/80 dark:text-primary/70">{play.signal}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Where Cloud MLM Software accelerates growth</h2>
          <p className="text-sm text-muted-foreground">
            Take NHT Global’s blueprint and amplify it with a platform engineered for intelligent automation, transparent payouts, and international readiness—without sacrificing the human touch that makes wellness communities thrive.
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
                  {capability.action}
                </p>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={modulesHref}>
              Review tailored modules
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={contactHref}>
              Partner with our specialists
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

