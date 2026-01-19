import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, BarChart3, Dumbbell, Globe2, HeartPulse, MessageCircle, ShieldCheck, Sparkles, Users } from "lucide-react";
import { ChartLineUp, HandHeart, RocketLaunch, Smiley, Target, UsersFour } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type CompanyFact = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type PurposeTheme = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type Strategy = {
  title: string;
  description: string;
  outcome: string;
  icon: IconType;
};

const COMPANY_FACTS: CompanyFact[] = [
  {
    label: "Revenue",
    value: "$94M",
    detail: "2024 wellness revenue anchored by Zeal for Life nutrition.",
    icon: BarChart3
  },
  {
    label: "Founded",
    value: "2008 · Houston, TX",
    detail: "Mission to elevate lives through faith-infused wellness and opportunity.",
    icon: RocketLaunch
  },
  {
    label: "Corporate team",
    value: "108 employees",
    detail: "A lean HQ supporting thousands of passionate consultants worldwide.",
    icon: Users
  },
  {
    label: "Primary market",
    value: "United States",
    detail: "Growing communities across North America and expanding internationally.",
    icon: Globe2
  },
  {
    label: "Signature product",
    value: "Zeal for Life",
    detail: "Natural ingredient blends designed to energise, revitalise, and sustain wellness.",
    icon: Dumbbell
  },
  {
    label: "Sales style",
    value: "Person-to-person",
    detail: "Heart-centred conversations, wellness events, and consistent follow-through.",
    icon: MessageCircle
  }
];

const PURPOSE_THEMES: PurposeTheme[] = [
  {
    title: "Elevating lives with purpose",
    description:
      "Zurvita is a mission-driven community that blends health, faith, and financial uplift. Every interaction aims to help people thrive physically and economically.",
    proof: "The founding vision prioritises positive impact, guiding both product innovation and compensation behaviour.",
    icon: HandHeart
  },
  {
    title: "Zeal for Life excellence",
    description:
      "The flagship Zeal for Life line features clean ingredients formulated to spark daily energy, resilience, and recovery.",
    proof: "Product education spotlights ingredient transparency, clinical references, and customer stories.",
    icon: HeartPulse
  },
  {
    title: "Integrity-driven field",
    description:
      "Consultants are encouraged to lead with empathy, integrity, and personal testimony, transforming business interactions into lasting relationships.",
    proof: "Onboarding frameworks reinforce community, accountability, and consistent customer care.",
    icon: UsersFour
  }
];

const PLATFORM_STRATEGIES: Strategy[] = [
  {
    title: "Zeal experience designer",
    description:
      "Create personalised wellness journeys that combine product bundles, content drip campaigns, and daily check-ins.",
    outcome: "Customers stay engaged between events, while consultants capture richer retention data.",
    icon: Smiley
  },
  {
    title: "Mission storytelling engine",
    description:
      "Aggregate compliant testimonials, before-and-after metrics, and gratitude journals inside a searchable library.",
    outcome: "Field leaders can share the heart of Zurvita while staying on-brand and regulation-ready.",
    icon: Sparkles
  },
  {
    title: "Integrity-first compensation analytics",
    description:
      "Monitor leg balance, preferred customer volume, and mentor effectiveness with predictive dashboards tuned to Zurvita incentives.",
    outcome: "Transforms coaching conversations into proactive, data-backed action plans.",
    icon: ChartLineUp
  },
  {
    title: "Expansion playbook automation",
    description:
      "Localise pricing, logistics, and compliance cues for new markets—complete with AI-assisted training nudges.",
    outcome: "Accelerates launches while sustaining the values-driven culture that makes Zurvita distinct.",
    icon: Target
  },
  {
    title: "Community care loop",
    description:
      "Trigger support workflows when customers skip orders, celebrate milestones, or submit prayer requests and testimonies.",
    outcome: "Keeps the people-first promise tangible and measurable across every touchpoint.",
    icon: ShieldCheck
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Zurvita Company Spotlight & Purpose-led Platform Enablement";
  const description =
    "Discover how Zurvita’s mission-driven wellness movement and Zeal for Life products scale with Cloud MLM Software’s intelligent enablement.";
  const keywords = [
    "Zurvita MLM review",
    "Zeal for Life distributor software",
    "Purpose-driven direct selling platform",
    "Cloud MLM Software for wellness companies",
    "Zurvita consultant enablement"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/zurvita", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ZurvitaPageProps = {
  params: { lang: SupportedLocale };
};

export default function ZurvitaPage({ params }: ZurvitaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-[#fff7f3] via-[#fff1f9] to-[#f8fbff] py-24 dark:border-border/40 dark:from-slate-950/80 dark:via-slate-950 dark:to-rose-950/50">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(244,114,182,0.22),transparent_55%),radial-gradient(circle_at_82%_38%,rgba(59,130,246,0.2),transparent_65%),radial-gradient(circle_at_42%_88%,rgba(251,191,36,0.2),transparent_65%)] dark:opacity-80"
          aria-hidden
        />
        <div className="container relative z-10 space-y-12">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-rose-600 dark:text-rose-200">
            <span className="rounded-full border border-rose-200/80 bg-white/80 px-4 py-1 shadow-sm backdrop-blur dark:border-white/20 dark:bg-slate-950/70">
              Purpose-led wellness
            </span>
            <span className="rounded-full border border-amber-200/80 bg-amber-50/80 px-4 py-1 text-amber-600 shadow-sm backdrop-blur dark:border-amber-400/40 dark:bg-amber-900/50 dark:text-amber-200">
              Zeal for Life innovation
            </span>
            <span className="rounded-full border border-sky-200/80 bg-sky-50/80 px-4 py-1 text-sky-600 shadow-sm backdrop-blur dark:border-sky-400/40 dark:bg-sky-900/50 dark:text-sky-200">
              Community uplift
            </span>
          </div>

          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.42fr)]">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  Zurvita: elevating lives with Zeal, mission, and measurable wellness impact.
                </h1>
                <p className="text-base leading-7 text-muted-foreground">
                  From Houston to homes around the world, Zurvita blends premium nutrition with a call to serve. Consultants lead with heart, share
                  their stories, and guide customers through energising rituals built on Zeal for Life and purpose-led coaching.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-rose-200/60 bg-white/85 p-5 text-sm shadow-sm dark:border-rose-400/40 dark:bg-slate-950/80">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500 dark:text-rose-200">DSN RANK</p>
                  <p className="mt-2 text-2xl font-semibold text-foreground">#89</p>
                  <p className="mt-2 text-muted-foreground">Recognised in the 2024 Global 100 for impact and momentum.</p>
                </div>
                <div className="rounded-3xl border border-amber-200/60 bg-white/85 p-5 text-sm shadow-sm dark:border-amber-400/40 dark:bg-slate-950/80">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-200">FOCUS</p>
                  <p className="mt-2 text-2xl font-semibold text-foreground">Zeal for Life</p>
                  <p className="mt-2 text-muted-foreground">Holistic nutrition system designed for energy, calm, and recovery.</p>
                </div>
                <div className="rounded-3xl border border-sky-200/60 bg-white/85 p-5 text-sm shadow-sm dark:border-sky-400/40 dark:bg-slate-950/80">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-200">COMMUNITY</p>
                  <p className="mt-2 text-2xl font-semibold text-foreground">Heart-led</p>
                  <p className="mt-2 text-muted-foreground">Faith, empathy, and financial stewardship guiding every engagement.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href={contactHref}>
                    Design your Zurvita-ready stack
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={pricingHref}>
                    Review platform packages
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="hover:bg-rose-100/70 dark:hover:bg-rose-500/20">
                  <Link href={demoHref}>
                    Experience a Zeal journey
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>

            <aside className="relative">
              <div className="absolute inset-0 -z-10 rounded-[3.25rem] border border-rose-200/70 bg-white/80 shadow-[0_48px_120px_-70px_rgba(244,114,182,0.45)] backdrop-blur dark:border-white/15 dark:bg-slate-950/85 dark:shadow-rose-900/30" aria-hidden />
              <div className="relative grid gap-5 rounded-[2.75rem] p-8">
                {COMPANY_FACTS.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <article
                      key={fact.label}
                      className="flex flex-col gap-3 rounded-3xl border border-transparent bg-gradient-to-r from-white/95 via-white/80 to-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:border-rose-300/70 hover:shadow-lg dark:from-slate-900/85 dark:via-slate-900/60 dark:to-slate-900/30"
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-200">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">{fact.label}</h2>
                      </div>
                      <p className="text-xl font-semibold text-foreground">{fact.value}</p>
                      <p className="text-sm text-muted-foreground">{fact.detail}</p>
                    </article>
                  );
                })}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="container space-y-12 rounded-[3.25rem] border border-border/60 bg-gradient-to-br from-background via-foreground/5 to-background p-12 shadow-[0_32px_120px_-80px_rgba(136,19,55,0.45)] dark:border-border/40 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="space-y-4 md:max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-rose-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-rose-600 dark:border-rose-400/40 dark:bg-rose-900/40 dark:text-rose-200">
            Mission highlights
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A mission-first community where wellness rituals and opportunity move in harmony.
          </h2>
          <p className="text-sm text-muted-foreground">
            Zurvita’s promise is simple: elevate lives. The company pairs mindful nutrition with mentorship, allowing families to pursue health goals
            and financial breathing room without sacrificing integrity.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PURPOSE_THEMES.map((theme) => {
            const Icon = theme.icon;
            return (
              <article
                key={theme.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-rose-200/40 bg-background/95 p-6 transition hover:-translate-y-1 hover:border-rose-300/70 hover:shadow-xl dark:border-rose-400/30 dark:bg-slate-950/85"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{theme.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{theme.description}</p>
                <p className="rounded-2xl border border-rose-200/60 bg-rose-50/70 p-4 text-xs text-rose-600 dark:border-rose-400/30 dark:bg-rose-900/40 dark:text-rose-200">
                  {theme.proof}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-background via-background to-amber-50/70 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-amber-950/40">
        <div
          className="absolute inset-x-0 top-16 h-64 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.22),transparent_65%)] blur-3xl dark:opacity-70"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-10 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)]">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-600 dark:border-amber-400/40 dark:bg-amber-900/40 dark:text-amber-200">
              Cloud MLM Software enablement
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Translate Zurvita’s heart for people into AI-assisted coaching, logistics, and community care.
            </h2>
            <p className="text-sm text-muted-foreground">
              Cloud MLM Software engineers the digital spine behind purpose-led cultures. We orchestrate Zeal journeys, protect brand integrity, and
              surface the analytics leaders need to steward growth wisely.
            </p>
          </div>
          <div className="rounded-[2.75rem] border border-border/50 bg-white/85 p-8 shadow-lg shadow-amber-200/40 backdrop-blur dark:border-border/40 dark:bg-slate-950/85 dark:shadow-amber-900/40">
            <ul className="space-y-6">
              {PLATFORM_STRATEGIES.map((strategy) => {
                const Icon = strategy.icon;
                return (
                  <li key={strategy.title} className="flex gap-4">
                    <span className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{strategy.title}</h3>
                      <p className="text-sm text-muted-foreground">{strategy.description}</p>
                      <p className="rounded-2xl border border-amber-200/60 bg-amber-50/70 p-4 text-xs text-amber-600 dark:border-amber-400/30 dark:bg-amber-900/40 dark:text-amber-200">
                        {strategy.outcome}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="container space-y-10 rounded-[3.25rem] border border-border/60 bg-gradient-to-br from-background to-rose-50/60 p-12 shadow-lg shadow-rose-100/40 dark:border-border/40 dark:from-slate-950 dark:to-slate-950/70">
        <div className="space-y-4 md:max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-rose-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-rose-600 dark:border-rose-400/40 dark:bg-rose-900/40 dark:text-rose-200">
            Next steps
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let’s ignite Zeal-powered growth with a platform that honours people, purpose, and performance.
          </h2>
          <p className="text-sm text-muted-foreground">
            Whether you&apos;re scaling small groups or expanding globally, Cloud MLM Software keeps mission and metrics perfectly in sync.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={contactHref}>
              Speak with a strategist
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={modulesHref}>
              Explore wellness modules
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
