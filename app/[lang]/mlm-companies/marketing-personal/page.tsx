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
  CalendarClock,
  Globe2,
  HeartHandshake,
  MapPin,
  Palette,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import { ChartLineUp, ChatsCircle, GlobeHemisphereWest, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type CompanySignal = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type StoryFrame = {
  title: string;
  summary: string;
  insight: string;
  icon: IconType;
};

type ExperiencePath = {
  stage: string;
  description: string;
  tip: string;
  icon: IconType;
};

type CloudPlay = {
  title: string;
  description: string;
  payoff: string;
  icon: IconType;
};

type ProductCluster = {
  title: string;
  detail: string;
};

const PRODUCT_CLUSTERS: ProductCluster[] = [
  {
    title: "Fashion & accessories",
    detail: "Seasonal wardrobes designed for expressive entrepreneurs hosting in-home runways."
  },
  {
    title: "Beauty & cosmetics",
    detail: "High-touch rituals that sparkle during party demos and self-care consultations."
  },
  {
    title: "Personal care essentials",
    detail: "Daily wellness staples backed by innovative formulas and trusted ingredients."
  },
  {
    title: "Home décor accents",
    detail: "Ambience-elevating collections that transform gatherings into immersive experiences."
  }
];

const COMPANY_SIGNALS: CompanySignal[] = [
  {
    label: "Annual revenue",
    value: "$125M",
    detail: "Reported sales volume across Colombia’s lifestyle-driven direct selling channel.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "1999",
    detail: "Medellín-born brand blending entrepreneurship with community transformation.",
    icon: CalendarClock
  },
  {
    label: "Employees",
    value: "77 teammates",
    detail: "A nimble corporate crew orchestrating logistics, product innovation, and coaching.",
    icon: UsersThree
  },
  {
    label: "Headquarters",
    value: "Medellín, Colombia",
    detail: "Regional hubs keep fulfillment, education, and culture rooted in Antioquia.",
    icon: MapPin
  },
  {
    label: "Primary market",
    value: "Colombia",
    detail: "Deep relationships within Andean communities sustain loyalty and referrals.",
    icon: GlobeHemisphereWest
  },
  {
    label: "Compensation",
    value: "Single-level party plan",
    detail: "Social selling experiences reward authentic hosts and customer-first storytelling.",
    icon: PartyPopper
  }
];

const STORY_FRAMES: StoryFrame[] = [
  {
    title: "Community-led transformations",
    summary:
      "Marketing Personal is more than an MLM company; it is a Medellín-rooted community empowering people to reinvent their lifestyle goals.",
    insight:
      "Vision circles around inspiring confidence, self-expression, and entrepreneurship through every interaction.",
    icon: HeartHandshake
  },
  {
    title: "Lifestyle portfolio engineered for joy",
    summary:
      "From wellness staples to fashion, beauty, and décor, the portfolio is crafted with quality ingredients and modern design cues.",
    insight:
      "Each launch is calibrated for at-home demos so customers can experience tangible improvements in daily routines.",
    icon: Sparkles
  },
  {
    title: "People-first mentoring culture",
    summary:
      "Representatives share personal journeys, co-create success stories, and keep relationships at the center of growth.",
    insight:
      "Trust, integrity, and long-term friendships ensure every business interaction feels like joining a supportive family.",
    icon: ChatsCircle
  }
];

const EXPERIENCE_PATHS: ExperiencePath[] = [
  {
    stage: "Host purposeful gatherings",
    description: "Design intimate party-plan experiences where guests see, feel, and personalize each collection.",
    tip: "Use curated playlists, lighting, and sampling rituals to mirror Medellín’s vibrant hospitality DNA.",
    icon: PartyPopper
  },
  {
    stage: "Curate personalized journeys",
    description: "Pair fashion, beauty, personal care, and home décor into adaptable lifestyle bundles.",
    tip: "Storyboards and lookbooks help guests imagine the transformation long after the event ends.",
    icon: Palette
  },
  {
    stage: "Nurture family-like follow-up",
    description: "Stay close through mentorship check-ins, reorder prompts, and community-building moments.",
    tip: "Automated yet empathetic communication keeps the Marketing Personal promise of belonging alive.",
    icon: Users
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "AI party blueprinting",
    description: "Model guest lists, sampling flows, and kit compositions for every gathering.",
    payoff: "Cloud MLM Software spots winning combinations before the first guest arrives.",
    icon: BarChart3
  },
  {
    title: "Storytelling asset studio",
    description: "Centralize scripts, reels, and testimonials around each lifestyle cluster.",
    payoff: "Dynamic content keeps field voices authentic while remaining on-brand and compliant.",
    icon: Globe2
  },
  {
    title: "Community performance guardian",
    description: "Track sentiment, reorder cadence, and mentorship touchpoints in one console.",
    payoff: "Predictive alerts protect the people-first culture and surface timely coaching moments.",
    icon: ShieldCheck
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Marketing Personal MLM Strategy & Community Enablement";
  const description =
    "Explore how Marketing Personal’s single-level party plan, lifestyle portfolio, and people-first culture thrive with Cloud MLM Software intelligence.";
  const keywords = [
    "Marketing Personal MLM",
    "Marketing Personal Colombia direct selling",
    "party plan MLM software",
    "lifestyle direct selling enablement",
    "Cloud MLM Software insights"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/marketing-personal", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MarketingPersonalPageProps = {
  params: { lang: SupportedLocale };
};

export default function MarketingPersonalPage({ params }: MarketingPersonalPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-6 py-20 shadow-sm dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 18% 20%, rgba(79, 70, 229, 0.18), transparent 55%), radial-gradient(circle at 82% 30%, rgba(236, 72, 153, 0.12), transparent 60%), radial-gradient(circle at 50% 88%, rgba(59, 130, 246, 0.16), transparent 62%)"
          }}
          aria-hidden
        />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
              Marketing Personal • Medellín thought leadership
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Marketing Personal MLM intelligence for lifestyle-led entrepreneurs.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-700 dark:text-slate-200">
              Marketing Personal is a community-powered brand turning fashion, beauty, personal care, and home décor into purpose-driven
              opportunities. Cloud MLM Software equips the field to deliver curated party-plan experiences while staying true to the brand’s
              people-first ethos.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Explore the AI party-plan demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-slate-900 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Link href={contactHref}>
                  Blueprint your community operations
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Single-level compensation, party-plan storytelling, and a supportive family culture anchored in Colombia.
            </p>
          </div>
          <aside className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-8 backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-900/60">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/60 via-indigo-100/40 to-purple-100/40 dark:from-slate-900/40 dark:via-slate-900/20 dark:to-slate-900" aria-hidden />
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
              Lifestyle collection highlights
            </h2>
            <ul className="mt-6 space-y-5 text-sm leading-6 text-slate-700 dark:text-slate-200">
              {PRODUCT_CLUSTERS.map((cluster) => (
                <li key={cluster.title} className="flex gap-3 rounded-2xl border border-transparent bg-slate-100/80 p-4 dark:bg-slate-950/60">
                  <Sparkles className="mt-1 h-5 w-5 text-indigo-500 dark:text-indigo-300" aria-hidden />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{cluster.title}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300">{cluster.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Commercial signals we monitor</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Quantitative context guides how we adapt Cloud MLM Software to Marketing Personal’s marketplace realities.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {COMPANY_SIGNALS.map((signal) => {
            const Icon = signal.icon;
            return (
              <article
                key={signal.label}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition dark:border-slate-800 dark:bg-slate-900/60"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-200">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="mt-4 space-y-1.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{signal.label}</p>
                  <p className="text-xl font-semibold text-slate-900 dark:text-white">{signal.value}</p>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{signal.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-purple-50 via-white to-blue-50 px-8 py-16 shadow-sm dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="grid gap-10 lg:grid-cols-3">
          {STORY_FRAMES.map((frame) => {
            const Icon = frame.icon;
            return (
              <article key={frame.title} className="flex h-full flex-col gap-4 rounded-2xl bg-white/70 p-6 dark:bg-slate-900/50">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-200">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{frame.title}</h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{frame.summary}</p>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{frame.insight}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Field experience blueprint</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Marketing Personal’s family-like culture thrives when gatherings feel intentional, personalized, and supported well beyond the event
            night. These stages keep hosts confident and customers inspired.
          </p>
        </div>
        <ol className="grid gap-6 md:grid-cols-3">
          {EXPERIENCE_PATHS.map((path, index) => {
            const Icon = path.icon;
            return (
              <li
                key={path.stage}
                className="relative flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/60"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-200">
                  {index + 1}
                </span>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-950/60 dark:text-slate-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{path.stage}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{path.description}</p>
                <p className="text-xs font-medium uppercase tracking-wide text-indigo-600 dark:text-indigo-300">{path.tip}</p>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Cloud MLM Software plays</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Our platform analyses field data, automates storytelling, and safeguards compliance so Marketing Personal can scale without losing its
            human heartbeat.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CLOUD_PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.title}
                className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{play.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{play.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">{play.payoff}</p>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={pricingHref}>
              Review platform pricing
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-slate-900 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            <Link href={contactHref}>
              Book a community innovation call
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
