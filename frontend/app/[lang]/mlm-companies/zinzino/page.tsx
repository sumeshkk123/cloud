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
  BarChart3,
  CalendarDays,
  FlaskConical,
  Globe2,
  Handshake,
  MessageCircleHeart,
  Users,
  Briefcase
} from "lucide-react";
import {
  Brain,
  ChartLineUp,
  GlobeHemisphereWest,
  HandsClapping,
  Heartbeat,
  ShieldCheck,
  Target,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type CompanyMetric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type BalancePillar = {
  title: string;
  summary: string;
  signal: string;
  icon: IconType;
};

type EnablementPlay = {
  title: string;
  description: string;
  impact: string;
  icon: IconType;
};

const COMPANY_METRICS: CompanyMetric[] = [
  {
    label: "Revenue",
    value: "$67M",
    detail: "2024 reported global wellness revenue anchored in nutrition portfolios.",
    icon: BarChart3
  },
  {
    label: "Founded",
    value: "2005 · Västra Götaland",
    detail: "Swedish HQ guiding scientific innovation and regulatory excellence.",
    icon: CalendarDays
  },
  {
    label: "People",
    value: "120 employees",
    detail: "Lean corporate team empowering a worldwide partner network.",
    icon: Users
  },
  {
    label: "Compensation",
    value: "Multilevel plan",
    detail: "Balanced leg development with customer-driven reward triggers.",
    icon: Handshake
  },
  {
    label: "Primary market",
    value: "Sweden & EU",
    detail: "Nordic roots with expanding global communities and lab partnerships.",
    icon: Globe2
  },
  {
    label: "Product focus",
    value: "Balance concept",
    detail: "Diagnostics, BalanceOil™, and curated supplements for optimal wellness.",
    icon: FlaskConical
  },
  {
    label: "Sales motion",
    value: "Person-to-person",
    detail: "Guided wellness conversations supported by digital coaching tools.",
    icon: MessageCircleHeart
  }
];

const BALANCE_PILLARS: BalancePillar[] = [
  {
    title: "Science-led personalization",
    summary:
      "Zinzino blends cutting-edge diagnostics with omega-balanced nutrition so customers feel the shift between data and daily energy.",
    signal: "BalanceOil™ programs reference clinical studies and continuous R&D investments.",
    icon: Heartbeat
  },
  {
    title: "People helping people",
    summary:
      "Partners lead with empathy—sharing their own wellness stories, supporting peers, and keeping compliance front and centre.",
    signal: "Purpose-driven onboarding emphasises mentorship, honest transformation, and sustainable customer retention.",
    icon: HandsClapping
  },
  {
    title: "Global top-100 presence",
    summary:
      "Consistent performance lands Zinzino on international direct selling rankings, spotlighting Nordic craftsmanship on a worldwide stage.",
    signal: "Ranked #99 on the 2024 Global 100, reflecting steady growth and trust indicators.",
    icon: GlobeHemisphereWest
  }
];

const ENABLEMENT_PLAYS: EnablementPlay[] = [
  {
    title: "Balance concept intelligence",
    description:
      "Create AI-assisted dashboards that translate test results into personalised supplement pathways for every household.",
    impact: "Consultants can demo BalanceOil™ journeys with compliant narratives, raising conversion and loyalty metrics.",
    icon: Brain
  },
  {
    title: "Community trust automation",
    description:
      "Map mentorship circles, wellness challenges, and testimonial libraries so leaders amplify authentic field stories at scale.",
    impact: "Keeps the “people helping people” promise alive while protecting claim integrity across languages.",
    icon: UsersThree
  },
  {
    title: "Regulatory guardrails",
    description:
      "Embed EU and Nordic compliance cues, ingredient dossiers, and claim checkpoints directly into field workflows.",
    impact: "Protects the multilevel plan from miscommunication and accelerates approvals for new product releases.",
    icon: ShieldCheck
  },
  {
    title: "Growth forecasting",
    description:
      "Model leg balance, customer-to-partner ratios, and recurring revenue with predictive analytics tuned to Zinzino incentives.",
    impact: "Leadership gains confident expansion plans and responsive coaching signals every week.",
    icon: ChartLineUp
  },
  {
    title: "Immersive wellness sprints",
    description:
      "Launch interactive 30-day vitality programs with content automation, microlearning, and hybrid event orchestration.",
    impact: "Keeps customers engaged between check-ins and builds data-backed case studies for future campaigns.",
    icon: Target
  },
  {
    title: "Partner enablement workbench",
    description:
      "Centralise pricing, inventory visibility, and fulfilment status so part-time advocates never lose momentum.",
    impact: "Shortens onboarding time while maintaining premium service experiences across borders.",
    icon: Briefcase
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Zinzino Company Spotlight & Balance Concept Enablement";
  const description =
    "Explore how Zinzino’s science-driven wellness movement and multilevel opportunity thrive with Cloud MLM Software’s AI-ready enablement.";
  const keywords = [
    "Zinzino MLM review",
    "BalanceOil concept platform",
    "Nordic wellness direct selling software",
    "Cloud MLM Software for nutrition brands",
    "Zinzino distributor enablement"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/zinzino", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ZinzinoPageProps = {
  params: { lang: SupportedLocale };
};

export default function ZinzinoPage({ params }: ZinzinoPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-[#f7fbff] via-[#f5f9f7] to-[#f0f7ff] py-20 dark:border-border/40 dark:from-slate-950/80 dark:via-slate-950 dark:to-sky-950/60">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(59,130,246,0.16),transparent_55%),radial-gradient(circle_at_82%_35%,rgba(59,201,180,0.24),transparent_60%),radial-gradient(circle_at_46%_88%,rgba(56,189,248,0.18),transparent_65%)] dark:opacity-80"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-14 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
          <div className="space-y-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-sky-700 dark:text-sky-200">
              <span className="rounded-full border border-sky-200/80 bg-white/80 px-4 py-1 shadow-sm backdrop-blur dark:border-white/20 dark:bg-slate-950/70">
                Science-driven wellness
              </span>
              <span className="rounded-full border border-emerald-200/80 bg-emerald-50/80 px-4 py-1 text-emerald-600 shadow-sm backdrop-blur dark:border-emerald-400/40 dark:bg-emerald-900/50 dark:text-emerald-200">
                People helping people
              </span>
              <span className="rounded-full border border-amber-200/80 bg-amber-50/80 px-4 py-1 text-amber-600 shadow-sm backdrop-blur dark:border-amber-400/40 dark:bg-amber-900/50 dark:text-amber-200">
                Global Top 100
              </span>
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Zinzino: a Nordic wellness movement powered by Balance concept insights and heartfelt mentorship.
              </h1>
              <p className="text-base leading-7 text-muted-foreground">
                Born in Sweden and trusted across 60+ markets, Zinzino unites laboratory-grade nutrition with community-driven coaching. The mission
                is simple: restore body balance, inspire healthier lifestyles, and build a fair opportunity for partners who lead with empathy and
                data.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-sky-200/60 bg-white/85 p-5 text-sm shadow-sm dark:border-sky-400/40 dark:bg-slate-950/80">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-500 dark:text-sky-200">DSN RANK</p>
                <p className="mt-2 text-2xl font-semibold text-foreground">#99</p>
                <p className="mt-2 text-muted-foreground">Direct Selling News Global 100, 2024 edition.</p>
              </div>
              <div className="rounded-3xl border border-emerald-200/60 bg-white/85 p-5 text-sm shadow-sm dark:border-emerald-400/40 dark:bg-slate-950/80">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-200">BALANCE FOCUS</p>
                <p className="mt-2 text-2xl font-semibold text-foreground">Omega & polyphenol science</p>
                <p className="mt-2 text-muted-foreground">Diagnostics and supplements that translate data into daily habits.</p>
              </div>
              <div className="rounded-3xl border border-amber-200/60 bg-white/85 p-5 text-sm shadow-sm dark:border-amber-400/40 dark:bg-slate-950/80">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600 dark:text-amber-200">PARTNER COMMUNITY</p>
                <p className="mt-2 text-2xl font-semibold text-foreground">People-first</p>
                <p className="mt-2 text-muted-foreground">Mentorship, wellness storytelling, and measured customer wins.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Architect your Zinzino-ready platform
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={pricingHref}>
                  Compare pricing blueprints
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="hover:bg-sky-100/70 dark:hover:bg-sky-500/20">
                <Link href={demoHref}>
                  Watch a Balance journey demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 -z-10 rounded-[3rem] border border-sky-200/70 bg-white/80 shadow-[0_48px_120px_-70px_rgba(56,189,248,0.45)] backdrop-blur dark:border-white/15 dark:bg-slate-950/85 dark:shadow-sky-900/30" aria-hidden />
            <div className="relative grid gap-5 rounded-[2.6rem] p-8">
              {COMPANY_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-3 rounded-3xl border border-transparent bg-gradient-to-r from-white/95 via-white/80 to-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-300/70 hover:shadow-lg dark:from-slate-900/85 dark:via-slate-900/60 dark:to-slate-900/30"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-200">
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

      <section className="container space-y-12 rounded-[3rem] border border-border/60 bg-gradient-to-br from-background via-foreground/5 to-background p-10 shadow-[0_32px_120px_-80px_rgba(8,47,73,0.45)] dark:border-border/40 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="space-y-4 md:max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-sky-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-700 dark:border-sky-400/40 dark:bg-sky-900/50 dark:text-sky-200">
            Balance concept pillars
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A global movement committed to restoring body balance and building meaningful livelihoods.
          </h2>
          <p className="text-sm text-muted-foreground">
            Zinzino is more than a product catalogue—it’s a mission to improve well-being worldwide through measurable results and compassionate
            leadership. Every interaction blends scientific credibility with stories that keep customers motivated.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {BALANCE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-sky-200/40 bg-background/95 p-6 transition hover:-translate-y-1 hover:border-sky-300/70 hover:shadow-xl dark:border-sky-400/30 dark:bg-slate-950/85"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.summary}</p>
                <p className="rounded-2xl border border-sky-200/60 bg-sky-50/70 p-4 text-xs text-sky-600 dark:border-sky-400/30 dark:bg-sky-900/40 dark:text-sky-200">
                  {pillar.signal}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-background via-background to-emerald-50/70 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950/40">
        <div
          className="absolute inset-x-0 top-16 h-64 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.18),transparent_65%)] blur-3xl dark:opacity-70"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-10 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)]">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:border-emerald-400/40 dark:bg-emerald-900/40 dark:text-emerald-200">
              Cloud MLM Software enablement
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Equip every Balance advocate with AI-ready tools, insightful dashboards, and compassionate automation.
            </h2>
            <p className="text-sm text-muted-foreground">
              Cloud MLM Software turns Zinzino’s wellness mission into a repeatable, measurable, and compliant experience. From diagnostic journeys to
              cross-border logistics, we orchestrate the details so leaders focus on impact.
            </p>
          </div>
          <div className="rounded-[2.5rem] border border-border/50 bg-white/85 p-8 shadow-lg shadow-emerald-200/40 backdrop-blur dark:border-border/40 dark:bg-slate-950/85 dark:shadow-emerald-900/40">
            <ul className="space-y-6">
              {ENABLEMENT_PLAYS.map((play) => {
                const Icon = play.icon;
                return (
                  <li key={play.title} className="flex gap-4">
                    <span className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                      <p className="text-sm text-muted-foreground">{play.description}</p>
                      <p className="rounded-2xl border border-emerald-200/60 bg-emerald-50/70 p-4 text-xs text-emerald-600 dark:border-emerald-400/30 dark:bg-emerald-900/40 dark:text-emerald-200">
                        {play.impact}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="container space-y-10 rounded-[3rem] border border-border/60 bg-gradient-to-br from-background to-sky-50/60 p-10 shadow-lg shadow-sky-100/40 dark:border-border/40 dark:from-slate-950 dark:to-slate-950/70">
        <div className="space-y-4 md:max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 bg-sky-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-700 dark:border-sky-400/40 dark:bg-sky-900/50 dark:text-sky-200">
            Next actions
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ready to extend Zinzino’s impact with intelligent automation and compliant storytelling?
          </h2>
          <p className="text-sm text-muted-foreground">
            Let’s co-design a platform experience that mirrors the Balance concept—precise, human, and relentlessly focused on better outcomes.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={contactHref}>
              Talk to a strategist
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
