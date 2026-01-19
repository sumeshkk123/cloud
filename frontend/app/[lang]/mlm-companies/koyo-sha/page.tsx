import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, CalendarClock, Globe2, Leaf, ShieldCheck, Sparkles, Users, Workflow } from "lucide-react";
import { ChartLineUp, GlobeHemisphereEast, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Signal = {
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

type Ritual = {
  title: string;
  detail: string;
};

type CloudPlay = {
  title: string;
  description: string;
  highlight: string;
  icon: IconType;
};

const SIGNALS: Signal[] = [
  {
    label: "Revenue",
    value: "$86M",
    detail: "Japanese wellness and beauty loyalty built on decades of trust.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "1975",
    detail: "Gifu-born, with a deep commitment to community-centric entrepreneurship.",
    icon: CalendarClock
  },
  {
    label: "Employees",
    value: "150+",
    detail: "Lean corporate team supporting dense field communities across Japan.",
    icon: Users
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Holistic product culture",
    description: "Nutritional supplements, cosmetics, and personal care unify around longevity, balance, and beauty.",
    proof: "Curated rituals emphasise daily vitality and mindful self-care for multigenerational households.",
    icon: Leaf
  },
  {
    title: "Community-first gatherings",
    description: "Koyo-Sha salons and pop-up experiences cultivate personal relationships and shared wellbeing.",
    proof: "Consultants orchestrate tea ceremonies, wellness talks, and seasonal showcases to build loyalty.",
    icon: UsersThree
  },
  {
    title: "Trustworthy mentorship",
    description: "Leaders prioritise education, safe product use, and compliance clarity over aggressive selling.",
    proof: "Structured mentorship programmes elevate new consultants through shadowing and ethical storytelling.",
    icon: ShieldCheck
  }
];

const RITUALS: Ritual[] = [
  {
    title: "Tea & tonics",
    detail: "Introduce herbal tonics alongside skincare demos, turning wellness into a sensory conversation."
  },
  {
    title: "Seasonal renewals",
    detail: "Rotate regimens for spring, summer, autumn, and winter to align with cultural rhythms and skin needs."
  },
  {
    title: "Family care circles",
    detail: "Bundle supplements and personal care for each generation, tracking progress across the household."
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Ritual content studio",
    description: "Centralise scripts, ceremony guides, and translation notes for consultant-led gatherings.",
    highlight: "Cloud MLM Software ensures every asset is localised, compliant, and on-brand.",
    icon: Workflow
  },
  {
    title: "Loyalty lifecycle dashboard",
    description: "Monitor household purchases, regimen adherence, and referral flow in one canvas.",
    highlight: "Predictive AI nudges consultants when rituals need refreshing.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Ethical compliance layer",
    description: "Lock claims, enforce ingredient disclosures, and capture consent for beauty imagery.",
    highlight: "Proactive guardrails protect reputation while empowering local storytelling.",
    icon: ShieldCheck
  },
  {
    title: "Experience logistics hub",
    description: "Coordinate sampling, event supplies, and gift programmes with real-time inventory insights.",
    highlight: "Automation reduces manual tracking so consultants focus on relationships.",
    icon: Globe2
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Koyo-Sha Wellness & Beauty Blueprint";
  const description =
    "Dive into Koyo-Sha’s relationship-led wellness culture and learn how Cloud MLM Software helps replicate its Japanese hospitality advantage.";
  const keywords = [
    "Koyo-Sha Japan",
    "Koyo-Sha MLM strategy",
    "Japanese beauty direct selling",
    "Wellness community enablement",
    "Cloud MLM Software Koyo-Sha"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/koyo-sha", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type KoyoShaPageProps = {
  params: { lang: SupportedLocale };
};

export default function KoyoShaPage({ params }: KoyoShaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-[#f6fbff] to-[#f9f2ff] py-20 dark:border-border/40 dark:from-slate-950 dark:via-emerald-950 dark:to-purple-950">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(45,212,191,0.14),transparent_55%),radial-gradient(circle_at_82%_24%,rgba(124,58,237,0.18),transparent_60%),radial-gradient(circle_at_52%_88%,rgba(59,130,246,0.2),transparent_60%)]"
          aria-hidden
        />
        <div className="container grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,0.6fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:border-white/30 dark:bg-white/10 dark:text-white">
              Koyo-Sha • Gifu, Japan
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Everyday rituals that spark lifelong wellness communities.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/80">
                Since 1975, Koyo-Sha has nurtured beauty and health through mindful gatherings and trusted mentorship. Reimagine your customer
                journey with this harmony-first philosophy.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Explore the ritual AI workspace
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500/20 dark:bg-white/10 dark:text-white">
                <Link href={pricingHref}>
                  Review solution tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-emerald-200 text-emerald-800 hover:bg-emerald-500/10 dark:border-white/40 dark:text-white">
                <Link href={contactHref}>
                  Book a cultural blueprint session
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-emerald-200/70 bg-white/70 p-8 shadow-lg backdrop-blur dark:border-white/20 dark:bg-slate-950/70">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-200">Signals</span>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                Data points spotlighting Koyo-Sha’s consistency across Japan.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {SIGNALS.map((signal) => {
                const Icon = signal.icon;
                return (
                  <article key={signal.label} className="flex h-full flex-col gap-2 rounded-2xl border border-emerald-100 bg-white/90 p-4 dark:border-white/10 dark:bg-slate-900/70">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <p className="text-xs uppercase tracking-widest text-emerald-700/80 dark:text-emerald-100/80">{signal.label}</p>
                    <p className="text-2xl font-semibold text-slate-900 dark:text-white">{signal.value}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-200/80">{signal.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Harmony pillars</h2>
          <p className="text-sm text-muted-foreground">
            Blend product integrity, gathering excellence, and responsible mentorship to replicate Koyo-Sha’s staying power.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-emerald-50 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950/40"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{pillar.proof}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-white py-20 dark:border-border/40 dark:bg-slate-950/75">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_18%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_80%_24%,rgba(124,58,237,0.18),transparent_60%)]" aria-hidden />
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:border-white/30 dark:bg-white/10 dark:text-white">
              Ritual playbook
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Design rituals that stay.</h2>
            <p className="text-sm text-muted-foreground">
              Encourage consultants to lean into cultural nuance, hospitality, and family-oriented experiences.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {RITUALS.map((ritual) => (
              <article
                key={ritual.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-emerald-100 bg-emerald-50/80 p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/70"
              >
                <h3 className="text-lg font-semibold text-foreground">{ritual.title}</h3>
                <p className="text-sm text-muted-foreground">{ritual.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Cloud MLM Software for relationship-born brands
          </h2>
          <p className="text-sm text-muted-foreground">
            Mirror Koyo-Sha’s hospitality with AI-powered orchestration, compliance, and personalised storytelling.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CLOUD_PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{play.description}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{play.highlight}</span>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href={pricingHref}>
              Explore pricing
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href={contactHref}>
              Talk to our cultural strategists
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
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
