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
  Home,
  Lamp,
  Leaf,
  Paintbrush,
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

type HomePillar = {
  title: string;
  description: string;
  emphasis: string;
  icon: IconType;
};

type CommunityGesture = {
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

const SHINSEI_METRICS: Metric[] = [
  {
    label: "Revenue",
    value: "$79M+",
    detail: "Japanese home service collective crafting trusted solutions for modern living.",
    icon: Building2
  },
  {
    label: "Founded",
    value: "2004 · Kobe City",
    detail: "Family-grown enterprise blending craftsmanship with heartfelt hospitality.",
    icon: Home
  },
  {
    label: "Consultant community",
    value: "458+ employees & advocates",
    detail: "Lifestyle advisors guiding customers through product discovery and ongoing care.",
    icon: Users2
  },
  {
    label: "Primary market",
    value: "Japan & expanding regions",
    detail: "Strengthening neighbourhood relationships while exploring global partnerships.",
    icon: Globe2
  },
  {
    label: "Product universe",
    value: "Appliances & home décor",
    detail: "Innovative appliances, wellness accents, and design-forward essentials.",
    icon: Lamp
  },
  {
    label: "Sales motion",
    value: "Person-to-person",
    detail: "In-home consultations, design workshops, and heritage storytelling.",
    icon: HandHeart
  }
];

const HOME_PILLARS: HomePillar[] = [
  {
    title: "Thoughtful design",
    description:
      "Shinsei curates appliances and decor that honour Japanese simplicity while embracing modern convenience.",
    emphasis: "Consultants personalise layouts and demonstrations to suit every home's rhythm.",
    icon: Paintbrush
  },
  {
    title: "Wellbeing centred",
    description:
      "From air quality solutions to calm lighting, every product aims to create healthier, happier living spaces.",
    emphasis: "Lifestyle guides help families form routines that nurture comfort and balance.",
    icon: Leaf
  },
  {
    title: "Neighbourhood spirit",
    description:
      "Community events, care programmes, and service excellence keep Shinsei woven into the local fabric.",
    emphasis: "Partnerships with schools and neighbourhood associations elevate impact and trust.",
    icon: Sparkles
  }
];

const COMMUNITY_GESTURES: CommunityGesture[] = [
  {
    title: "In-home sanctuary sessions",
    summary:
      "Consultants host intimate previews, demonstrating appliances and decor in real environments with tailored styling tips.",
    proof: "Customer satisfaction rises when experiences include layout suggestions and seasonal refresh plans.",
    icon: UsersThree
  },
  {
    title: "Care-after-delivery",
    summary:
      "Follow-up visits, maintenance reminders, and digital check-ins ensure every product continues to delight.",
    proof: "Loyalty programmes thrive when consultants proactively nurture aftercare and wellness routines.",
    icon: HandHeart
  },
  {
    title: "Community atelier events",
    summary:
      "Pop-up design ateliers, sustainability workshops, and co-created charity drives keep the brand purpose-led.",
    proof: "Participation metrics show increased referrals when events spotlight shared values and local stories.",
    icon: UsersFour
  }
];

const CLOUD_SHINSEI_CAPABILITIES: PlatformCapability[] = [
  {
    title: "Home harmony planner",
    description:
      "Blend floor plans, lifestyle data, and purchase history into AI-assisted recommendations and styling boards.",
    payoff: "Deliver curated proposals that make upgrades intuitive and inspiring.",
    icon: Home
  },
  {
    title: "Experience orchestration",
    description:
      "Manage appointment scheduling, event kits, and post-visit checklists from one collaborative workspace.",
    payoff: "Ensure every consultation feels polished while keeping teams aligned.",
    icon: ShieldCheck
  },
  {
    title: "Aftercare intelligence",
    description:
      "Automate maintenance reminders, part replacements, and wellbeing tips across email, LINE, and SMS.",
    payoff: "Strengthen lifetime value with proactive, caring touchpoints.",
    icon: Leaf
  },
  {
    title: "Community impact insights",
    description:
      "Track volunteer hours, local partnerships, and customer sentiment to celebrate the brand’s human touch.",
    payoff: "Leadership can scale programmes that resonate and recognise consultants making a difference.",
    icon: ChartLineUp
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Shinsei Home Service Co. Ltd Company Spotlight & Lifestyle Enablement";
  const description =
    "Explore how Shinsei Home Service blends Japanese craftsmanship with community-first care—and how Cloud MLM Software powers personalised home journeys, aftercare, and neighbourhood impact.";
  const keywords = [
    "Shinsei Home Service MLM review",
    "Japanese home service direct sales",
    "Shinsei consultant tools",
    "Cloud MLM Software for home brands",
    "AI home styling platform"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/shinsei-home-service-coltd", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ShinseiHomeServicePageProps = {
  params: { lang: SupportedLocale };
};

export default function ShinseiHomeServicePage({ params }: ShinseiHomeServicePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-[#f5fff9] via-[#f0f7ff] to-[#f8f5ff] py-20 dark:border-border/40 dark:from-slate-950/70 dark:via-slate-950 dark:to-emerald-950/40">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_80%_28%,rgba(96,165,250,0.18),transparent_60%),radial-gradient(circle_at_45%_88%,rgba(192,132,252,0.18),transparent_65%)]"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-16 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.55fr)]">
          <div className="space-y-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-200">
              <span className="rounded-full border border-emerald-200/60 bg-white/80 px-4 py-1 shadow-sm backdrop-blur dark:border-white/20 dark:bg-slate-950/60">
                Crafted for comfort
              </span>
              <span className="rounded-full border border-sky-200/60 bg-sky-50/80 px-4 py-1 text-sky-600 shadow-sm backdrop-blur dark:border-sky-400/40 dark:bg-sky-900/40 dark:text-sky-200">
                Community anchored
              </span>
              <span className="rounded-full border border-violet-200/60 bg-violet-50/80 px-4 py-1 text-violet-600 shadow-sm backdrop-blur dark:border-violet-400/40 dark:bg-violet-900/40 dark:text-violet-200">
                Purpose-led service
              </span>
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Shinsei Home Service: heartfelt design, neighbourly care, and modern living in harmony.
              </h1>
              <p className="text-base text-muted-foreground">
                Shinsei elevates everyday living with thoughtful appliances and bespoke decor. Cloud MLM Software ensures consultants deliver those
                experiences seamlessly—from curated consultations to long-term aftercare.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Design your Shinsei-ready platform
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={pricingHref}>
                  Explore platform tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="hover:bg-emerald-100/60 dark:hover:bg-emerald-500/20">
                <Link href={demoHref}>
                  Watch a home journey demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 -z-10 rounded-[3rem] border border-emerald-200/70 bg-white/85 shadow-[0_48px_120px_-70px_rgba(52,211,153,0.4)] backdrop-blur dark:border-white/15 dark:bg-slate-950/80" aria-hidden />
            <div className="relative grid gap-5 rounded-[2.6rem] p-8">
              {SHINSEI_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-3 rounded-3xl border border-transparent bg-gradient-to-r from-white/95 via-white/80 to-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300/70 hover:shadow-lg dark:from-slate-900/85 dark:via-slate-900/60 dark:to-slate-900/30"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-200">
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

      <section className="container space-y-10 rounded-[3rem] border border-border/60 bg-gradient-to-br from-background to-emerald-50/60 p-10 shadow-lg shadow-emerald-100/40 dark:border-border/40 dark:from-slate-950 dark:to-slate-950/70">
        <div className="space-y-4 md:max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:border-emerald-400/40 dark:bg-emerald-900/40 dark:text-emerald-200">
            Home pillars
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A blueprint for homes that feel peaceful, purposeful, and beautifully practical.
          </h2>
          <p className="text-sm text-muted-foreground">
            Shinsei’s lifestyle philosophy lives in every consultation. Cloud MLM Software keeps the narrative cohesive with ready-to-use resources
            for consultants and customers alike.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {HOME_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-200/40 bg-background/95 p-6 transition hover:-translate-y-1 hover:border-emerald-400/70 hover:shadow-xl dark:border-emerald-400/30 dark:bg-slate-950/85"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <p className="text-xs font-medium text-emerald-600 dark:text-emerald-200">{pillar.emphasis}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-background via-background to-violet-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-violet-900/40">
        <div
          className="absolute inset-x-0 top-16 h-60 bg-[radial-gradient(circle_at_center,rgba(192,132,252,0.18),transparent_65%)] blur-3xl dark:opacity-70"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-10 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.55fr)]">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-200/60 bg-violet-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-violet-600 dark:border-violet-400/40 dark:bg-violet-900/40 dark:text-violet-200">
              Community gestures
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Hospitality, craftsmanship, and trust woven into every visit.
            </h2>
            <p className="text-sm text-muted-foreground">
              Cloud MLM Software supports Shinsei teams with tools that keep experiences polished and relationships lasting.
            </p>
          </div>
          <div className="rounded-[2.5rem] border border-border/50 bg-white/85 p-8 shadow-lg shadow-violet-200/40 backdrop-blur dark:border-border/40 dark:bg-slate-950/85 dark:shadow-violet-900/40">
            <ul className="space-y-6">
              {COMMUNITY_GESTURES.map((gesture) => {
                const Icon = gesture.icon;
                return (
                  <li key={gesture.title} className="flex gap-4">
                    <span className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-500/20 dark:text-violet-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{gesture.title}</h3>
                      <p className="text-sm text-muted-foreground">{gesture.summary}</p>
                      <p className="rounded-2xl border border-violet-200/60 bg-violet-50/70 p-4 text-xs text-violet-600 dark:border-violet-400/30 dark:bg-violet-900/40 dark:text-violet-200">
                        {gesture.proof}
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
            Build a connected ecosystem for Shinsei’s next era of living.
          </h2>
          <p className="text-sm text-muted-foreground">
            Cloud MLM Software unifies consultations, aftercare, community engagement, and analytics so Shinsei consultants can focus on what they
            do best—caring for homes and the people in them.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CLOUD_SHINSEI_CAPABILITIES.map((capability) => {
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
              Discover home-service modules
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={contactHref}>
              Schedule a platform consultation
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

