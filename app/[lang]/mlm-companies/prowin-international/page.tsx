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
  Droplet,
  Factory,
  Globe2,
  Home,
  Leaf,
  PawPrint,
  Recycle,
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

type SustainabilityPillar = {
  title: string;
  description: string;
  emphasis: string;
  icon: IconType;
};

type CommunityActivator = {
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

const PROWIN_METRICS: Metric[] = [
  {
    label: "Revenue",
    value: "$230.2M+",
    detail: "Eco-conscious home, wellness, and pet care portfolio delighting European households.",
    icon: Recycle
  },
  {
    label: "Founded",
    value: "1995 · Illingen",
    detail: "Family-led German company scaling with sustainability as a north star.",
    icon: Factory
  },
  {
    label: "Consultant community",
    value: "132+ employees & thousands of hosts",
    detail: "Green-minded advisors delivering memorable, planet-positive experiences.",
    icon: Users2
  },
  {
    label: "Primary market",
    value: "Germany & Europe",
    detail: "Growing cross-border footprint with localisation for EU compliance and culture.",
    icon: Globe2
  },
  {
    label: "Product universe",
    value: "Home care · Wellness · Pet care",
    detail: "Bio-based cleaning, plant-powered nutrition, and pet wellbeing essentials.",
    icon: PawPrint
  },
  {
    label: "Sales journey",
    value: "In-home & digital consultations",
    detail: "Person-to-person education, sustainability workshops, and social commerce.",
    icon: HandHeart
  }
];

const SUSTAINABILITY_PILLARS: SustainabilityPillar[] = [
  {
    title: "Planet-first formulation",
    description:
      "Prowin crafts biodegradable cleaning concentrates, refill systems, and low-impact packaging to minimise waste at every step.",
    emphasis: "Consultants translate eco-benefits into everyday rituals that resonate with conscious households.",
    icon: Leaf
  },
  {
    title: "Whole-home harmony",
    description:
      "From allergy-friendly wellness support to pet-safe solutions, Prowin curates a cohesive lifestyle experience.",
    emphasis: "Mix-and-match collections help families simplify routines while elevating wellbeing.",
    icon: Home
  },
  {
    title: "Science meets soul",
    description:
      "Research partnerships and transparent ingredient storytelling nurture trust across generations of customers.",
    emphasis: "Awards and certifications fuel credibility and keep the community proud to represent the brand.",
    icon: Sparkles
  }
];

const COMMUNITY_ACTIVATORS: CommunityActivator[] = [
  {
    title: "Sustainability storytellers",
    summary:
      "Consultants host micro-workshops—teaching circular living, zero-waste swaps, and pet wellness routines tailored to local needs.",
    proof: "Event dashboards show higher order value when experiences include hands-on demonstrations and personalised eco audits.",
    icon: UsersThree
  },
  {
    title: "Purposeful recognition",
    summary:
      "Progressive rewards celebrate climate action, community outreach, and mentorship as much as revenue milestones.",
    proof: "Badge-based recognition keeps leaders focused on values-driven growth while nurturing retention.",
    icon: UsersFour
  },
  {
    title: "Impact reporting loops",
    summary:
      "Consultants contribute local insights on customer preferences, sustainability wins, and new product needs back to HQ.",
    proof: "Feedback portals inform the innovation roadmap and accelerate category expansion across the EU.",
    icon: ChartLineUp
  }
];

const CLOUD_PROWIN_CAPABILITIES: PlatformCapability[] = [
  {
    title: "Eco engagement engine",
    description:
      "Automate sustainability challenges, refill reminders, and badge-driven education across email, SMS, and community hubs.",
    payoff: "Extend the magic of in-home gatherings into ongoing, measurable climate impact journeys.",
    icon: Recycle
  },
  {
    title: "Holistic product intelligence",
    description:
      "Unify ingredient data, regulatory documentation, and localisation packs inside one searchable advisor workspace.",
    payoff: "Give consultants compliant, hyper-relevant talking points in seconds—no matter the market.",
    icon: ShieldCheck
  },
  {
    title: "Pet & wellness personalisation",
    description:
      "Blend lifestyle intel, pet profiles, and wellness goals to generate AI-assisted bundle recommendations.",
    payoff: "Serve curated solutions that boost loyalty programs and repeat purchases for every household member.",
    icon: PawPrint
  },
  {
    title: "Supply orchestration",
    description:
      "Sync sustainable inventory, carbon-friendly shipping options, and post-purchase surveys in a single dashboard.",
    payoff: "Scale responsibly while giving leaders visibility into environmental and commercial KPIs.",
    icon: Droplet
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Prowin International Company Spotlight & Sustainable Enablement";
  const description =
    "Learn how Prowin International fuses eco-conscious innovation with heartfelt community selling—and how Cloud MLM Software powers compliant growth, personalised bundles, and measurable climate impact.";
  const keywords = [
    "Prowin International MLM review",
    "Sustainable direct selling software",
    "Prowin consultant platform",
    "Cloud MLM Software for home care brands",
    "Eco-friendly MLM enablement"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/prowin-international", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ProwinInternationalPageProps = {
  params: { lang: SupportedLocale };
};

export default function ProwinInternationalPage({ params }: ProwinInternationalPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-[#f4fff5] via-[#f1f8ff] to-[#f9fcff] py-20 dark:border-border/40 dark:from-slate-950/70 dark:via-slate-950 dark:to-emerald-950/50">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(34,197,94,0.18),transparent_55%),radial-gradient(circle_at_82%_32%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(circle_at_45%_88%,rgba(110,231,183,0.2),transparent_65%)]"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-16 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.55fr)]">
          <div className="space-y-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-200">
              <span className="rounded-full border border-emerald-200/60 bg-white/80 px-4 py-1 shadow-sm backdrop-blur dark:border-white/20 dark:bg-slate-950/60">
                Eco-innovation leader
              </span>
              <span className="rounded-full border border-sky-200/60 bg-sky-50/80 px-4 py-1 text-sky-600 shadow-sm backdrop-blur dark:border-sky-400/40 dark:bg-sky-900/40 dark:text-sky-200">
                Purpose-driven community
              </span>
              <span className="rounded-full border border-amber-200/60 bg-amber-50/80 px-4 py-1 text-amber-600 shadow-sm backdrop-blur dark:border-amber-400/40 dark:bg-amber-900/40 dark:text-amber-200">
                Planet-positive rituals
              </span>
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Prowin International: conscious homes, thriving consultants, and measurable climate impact.
              </h1>
              <p className="text-base text-muted-foreground">
                Prowin unites premium sustainability with heartfelt customer care. Cloud MLM Software keeps that mission humming—automating eco
                journeys, powering compliant storytelling, and helping every consultant deliver greener outcomes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Co-design your Prowin-ready platform
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={pricingHref}>
                  Compare platform tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="hover:bg-emerald-100/60 dark:hover:bg-emerald-500/20">
                <Link href={demoHref}>
                  Watch an eco automation demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 -z-10 rounded-[3rem] border border-emerald-200/70 bg-white/85 shadow-[0_48px_120px_-70px_rgba(56,189,248,0.4)] backdrop-blur dark:border-white/15 dark:bg-slate-950/80" aria-hidden />
            <div className="relative grid gap-5 rounded-[2.6rem] p-8">
              {PROWIN_METRICS.map((metric) => {
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
            Sustainability pillars
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Every product, ritual, and relationship is designed to tread lightly.
          </h2>
          <p className="text-sm text-muted-foreground">
            Prowin International blends environmental stewardship with joyful everyday living. Cloud MLM Software captures that story, helping
            advisors educate and inspire without missing a detail.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {SUSTAINABILITY_PILLARS.map((pillar) => {
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

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-background via-background to-sky-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-sky-900/40">
        <div
          className="absolute inset-x-0 top-16 h-60 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_65%)] blur-3xl dark:opacity-70"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-10 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.55fr)]">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-sky-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-600 dark:border-sky-400/40 dark:bg-sky-900/40 dark:text-sky-200">
              Community activators
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Consultants become climate stewards, lifestyle coaches, and local innovators.
            </h2>
            <p className="text-sm text-muted-foreground">
              Cloud MLM Software equips the field with templates, dashboards, and feedback loops that amplify every mission-led initiative.
            </p>
          </div>
          <div className="rounded-[2.5rem] border border-border/50 bg-white/85 p-8 shadow-lg shadow-sky-200/40 backdrop-blur dark:border-border/40 dark:bg-slate-950/85 dark:shadow-sky-900/40">
            <ul className="space-y-6">
              {COMMUNITY_ACTIVATORS.map((activator) => {
                const Icon = activator.icon;
                return (
                  <li key={activator.title} className="flex gap-4">
                    <span className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{activator.title}</h3>
                      <p className="text-sm text-muted-foreground">{activator.summary}</p>
                      <p className="rounded-2xl border border-sky-200/60 bg-sky-50/70 p-4 text-xs text-sky-600 dark:border-sky-400/30 dark:bg-sky-900/40 dark:text-sky-200">
                        {activator.proof}
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
            Scale Prowin’s sustainable impact with an intelligent, compliant, and beautiful platform.
          </h2>
          <p className="text-sm text-muted-foreground">
            From product storytelling to post-purchase circularity, Cloud MLM Software helps Prowin teams lead with heart and measurable value.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CLOUD_PROWIN_CAPABILITIES.map((capability) => {
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
              Explore sustainability modules
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={contactHref}>
              Plan your next expansion
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

