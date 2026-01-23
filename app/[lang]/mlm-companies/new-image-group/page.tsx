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
  ArrowUpRight,
  Building2,
  FlaskConical,
  Globe2,
  GraduationCap,
  Heart,
  HeartHandshake,
  Layers,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users
} from "lucide-react";
import { Cpu, Handshake, Leaf, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type CompanyFact = {
  label: string;
  value: string;
  context: string;
  icon: IconType;
};

type Highlight = {
  title: string;
  description: string;
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

type Enablement = {
  title: string;
  description: string;
  payoff: string;
  icon: IconType;
};

const COMPANY_FACTS: CompanyFact[] = [
  {
    label: "Revenue",
    value: "$231M",
    context: "Direct Selling News Global 100 (2024) estimate reflecting sustained wellness demand.",
    icon: TrendingUp
  },
  {
    label: "Founded",
    value: "1984",
    context: "Four decades of health innovation anchored in New Zealand’s entrepreneurial ecosystem.",
    icon: Building2
  },
  {
    label: "Compensation",
    value: "Multi-level plan",
    context: "Balanced enrolment and customer volume incentives keep growth realistic and sustainable.",
    icon: Layers
  },
  {
    label: "Employees",
    value: "200+",
    context: "Corporate, science, and support teams guiding product development and distributor success.",
    icon: Users
  },
  {
    label: "Headquarters",
    value: "Auckland, New Zealand",
    context: "Global base for R&D, quality assurance, and Asia-Pacific market leadership.",
    icon: MapPin
  },
  {
    label: "Primary market",
    value: "Taiwan",
    context: "High-engagement region with strong appetite for wellness coaching and premium products.",
    icon: Target
  },
  {
    label: "Product focus",
    value: "Supplements, weight management, skincare",
    context: "Formulated with rigorously tested ingredients to deliver measurable wellness outcomes.",
    icon: Sparkles
  },
  {
    label: "Sales method",
    value: "Person-to-person advocacy",
    context: "Independent Representatives cultivate trust through lived experiences and coaching.",
    icon: HeartHandshake
  }
];

const HERO_HIGHLIGHTS: Highlight[] = [
  {
    title: "Science-led wellness innovation",
    description: "Advanced nutritional supplements, weight management, and skincare solutions shaped by rigorous R&D.",
    icon: Leaf
  },
  {
    title: "Empowered Independent Representatives",
    description: "A coaching-first community where wellness advocates share personal journeys to inspire lasting change.",
    icon: UsersThree
  }
];

const INNOVATION_PILLARS: Pillar[] = [
  {
    title: "Research-driven formulations",
    description: "Every flagship product is developed with scientific oversight to maximise efficacy and customer trust.",
    proof: "New Image Group’s dedication to scientific excellence keeps the range aligned with emerging wellness insights.",
    icon: FlaskConical
  },
  {
    title: "Holistic wellness ecosystem",
    description: "Nutritional, weight management, and skincare ranges work together to deliver balanced, lifestyle-ready solutions.",
    proof: "Product combinations were shaped to help customers maintain long-term vitality across multiple health goals.",
    icon: Sparkles
  },
  {
    title: "Quality assurance discipline",
    description: "Ingredient sourcing, testing protocols, and compliance routines underpin the brand’s credibility worldwide.",
    proof: "Internal teams in Auckland and partner labs across Asia-Pacific enforce consistent quality checkpoints.",
    icon: ShieldCheck
  }
];

const COMMUNITY_DRIVERS: CommunityDriver[] = [
  {
    title: "Wellness advocacy network",
    description: "Independent Representatives lead with authenticity, sharing lived health improvements and product rituals.",
    signal: "Stories and results move through intimate, person-to-person circles that elevate trust.",
    icon: Handshake
  },
  {
    title: "Education-first mentoring",
    description: "Training content, nutritional education, and guided onboarding keep new advocates confident and compliant.",
    signal: "Structured knowledge-sharing ensures each conversation balances inspiration with realistic expectations.",
    icon: GraduationCap
  },
  {
    title: "Community-powered retention",
    description: "Supportive circles transform business interactions into meaningful relationships and long-term loyalty.",
    signal: "Events, wellness challenges, and shared wins cultivate a culture that favours sustainable engagement.",
    icon: Heart
  }
];

const CLOUD_ENABLEMENT: Enablement[] = [
  {
    title: "Personalised onboarding journeys",
    description: "Map person-to-person mentorship into guided playbooks so every Representative follows proven steps.",
    payoff: "Mirror authentic coaching digitally and accelerate time-to-confidence for new joiners.",
    icon: UsersThree
  },
  {
    title: "AI-guided product pairings",
    description: "Blend purchase trends with health goals to surface the next best supplement or skincare bundle.",
    payoff: "Uplift average order value while keeping recommendations aligned with wellness outcomes.",
    icon: Cpu
  },
  {
    title: "Compensation clarity",
    description: "Model multi-level requirements, autoships, and customer ratios in real time.",
    payoff: "Give the field transparent dashboards that protect trust and keep the plan compliant.",
    icon: ShieldCheck
  },
  {
    title: "Global-ready infrastructure",
    description: "Localise currencies, languages, and compliance cues for markets like Taiwan and beyond.",
    payoff: "Support expansion with a single platform that scales New Image Group’s winning blueprint.",
    icon: Globe2
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "New Image Group MLM Company Analysis";
  const description =
    "Evaluate New Image Group’s $231M wellness enterprise—its multi-level plan, science-led products, and people-first culture—then see how Cloud MLM Software amplifies similar growth stories.";
  const keywords = [
    "New Image Group MLM review",
    "New Image Group compensation plan",
    "New Image Group wellness products",
    "Cloud MLM Software for wellness companies",
    "AI-ready MLM software for New Image Group"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/new-image-group", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type NewImageGroupPageProps = {
  params: { lang: SupportedLocale };
};

export default function NewImageGroupPage({ params }: NewImageGroupPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-slate-800/70 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_82%_26%,rgba(56,189,248,0.25),transparent_60%),radial-gradient(circle_at_48%_88%,rgba(217,249,157,0.18),transparent_65%)]" aria-hidden />
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.5fr)]">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
              <span className="rounded-full border border-emerald-200/40 bg-emerald-400/10 px-4 py-1 text-emerald-50">Rank #52 · Global 100</span>
              <span className="rounded-full border border-emerald-200/40 bg-white/5 px-4 py-1 text-white/80">Auckland, New Zealand</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                New Image Group: transforming health and wealth through science-led community.
              </h1>
              <p className="text-base text-slate-200/80">
                The wellness collective blends innovative nutritional science with empowering business opportunities. Founded to elevate well-being and financial independence, New Image Group equips advocates with premium products and a people-first operating model.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {HERO_HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="flex h-full flex-col gap-3 rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur transition hover:border-emerald-300/60 hover:bg-white/15">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-100">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h2 className="text-sm font-semibold text-white">{item.title}</h2>
                    <p className="text-xs text-slate-200/80">{item.description}</p>
                  </article>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-950 hover:bg-white/90">
                <Link href={contactHref}>
                  Book a strategy call
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <Link href={pricingHref}>
                  View investment plans
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-emerald-200 hover:bg-emerald-400/15">
                <Link href={demoHref}>
                  Request intelligent demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute -left-24 top-1/3 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl" aria-hidden />
            <div className="relative grid gap-6 rounded-[32px] border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">Opportunity snapshot</span>
              <p className="text-sm text-slate-100/80">
                Cloud MLM Software helps brands like New Image Group convert authentic wellness advocacy into AI-ready, scalable operations without sacrificing the human touch.
              </p>
              <div className="grid gap-4 rounded-2xl border border-white/15 bg-black/30 p-5">
                <div className="flex items-center justify-between text-slate-200">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/80">Revenue</p>
                    <p className="text-2xl font-semibold text-white">$231M</p>
                  </div>
                  <TrendingUp className="h-10 w-10 text-emerald-200/90" aria-hidden />
                </div>
                <p className="text-xs text-slate-200/70">
                  Sustained global demand for outcome-based wellness programs relies on accurate payouts and frictionless customer journeys.
                </p>
              </div>
              <div className="grid gap-3 rounded-2xl border border-white/15 bg-black/40 p-5">
                <div className="flex items-center gap-3 text-slate-200">
                  <MapPin className="h-5 w-5 text-emerald-200" aria-hidden />
                  <span className="text-sm font-semibold">Auckland HQ · Taiwan spotlight market</span>
                </div>
                <p className="text-xs text-slate-200/70">
                  High-touch coaching in Asia-Pacific markets benefits from analytics that surface the next best action for every advocate.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container -mt-16 space-y-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {COMPANY_FACTS.map((fact) => {
            const Icon = fact.icon;
            return (
              <article
                key={fact.label}
                className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm transition hover:border-primary/50 hover:shadow-md dark:border-border/40 dark:bg-slate-950/80"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/15 dark:text-primary-foreground">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{fact.label}</h2>
                </div>
                <div className="space-y-3">
                  <p className="text-xl font-semibold text-foreground">{fact.value}</p>
                  <p className="text-sm text-muted-foreground">{fact.context}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Innovation blueprint</h2>
          <p className="text-sm text-muted-foreground">
            New Image Group’s portfolio exemplifies disciplined product development. Scientific oversight, multi-category wellness programs, and operational quality controls combine to create real outcomes customers can feel.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {INNOVATION_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background p-6 dark:border-primary/30 dark:from-primary/10 dark:via-slate-950 dark:to-slate-950"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
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
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-primary/20 via-transparent to-transparent opacity-80 dark:from-primary/25" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.75fr)]">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary dark:border-primary/40 dark:bg-primary/15">
              People-first engine
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Community-powered growth</h2>
            <p className="text-sm text-muted-foreground">
              Trust, education, and genuine support define the New Image Group experience. Their Independent Representatives operate as wellness advocates who translate science into everyday routines while nurturing deep personal relationships.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {COMMUNITY_DRIVERS.map((element) => {
              const Icon = element.icon;
              return (
                <article
                  key={element.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md dark:border-border/40 dark:bg-slate-950/80"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-sm font-semibold text-foreground">{element.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{element.description}</p>
                  <p className="text-xs font-medium text-primary/80 dark:text-primary/70">{element.signal}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How Cloud MLM Software elevates this playbook</h2>
          <p className="text-sm text-muted-foreground">
            Mirror New Image Group’s blend of science, storytelling, and mentorship with a digital backbone engineered for accuracy, compliance, and AI-personalised journeys. Our platform keeps high-touch relationships thriving at scale.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CLOUD_ENABLEMENT.map((capability) => {
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
              Explore tailored modules
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={contactHref}>
              Plan your next launch with us
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

