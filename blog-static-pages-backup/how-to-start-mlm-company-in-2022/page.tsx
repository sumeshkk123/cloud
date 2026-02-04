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
  Building2,
  CalendarClock,
  CheckCircle2,
  Handshake,
  Megaphone,
  Target,
  TrendingUp,
  Wallet
} from "lucide-react";
import { GlobeHemisphereEast, RocketLaunch, Spiral, Sparkle } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type HeroHighlight = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type LaunchStep = {
  title: string;
  description: string;
  insight: string;
  icon: ComponentType<{ className?: string }>;
};

type InsightSection = {
  title: string;
  paragraphs: string[];
  icon: ComponentType<{ className?: string }>;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    title: "Direct selling momentum",
    description: "Forecasts show digital-first distributors accelerating growth as buyers return to relationship-led commerce.",
    icon: TrendingUp
  },
  {
    title: "Digitised launch playbooks",
    description: "Cloud-native tooling keeps compensation data accurate from day one so leaders can scale with confidence.",
    icon: RocketLaunch
  },
  {
    title: "Global-ready infrastructure",
    description: "Multilingual, multi-currency operations unlock cross-border expansion without slowing compliance checks.",
    icon: GlobeHemisphereEast
  }
];

const INTRO_PARAGRAPHS: string[] = [
  "2025 is shaping up to be a landmark year for multi-level marketing. After years of fluctuating consumer behaviour, distributors are once again winning trust through personalised, digital experiences that put products in the spotlight.",
  "Customers—especially in developing markets—value the independence direct sellers offer. With more households choosing online discovery and fulfilment, the appetite for modern MLM organisations has never been stronger.",
  "For founders, that surge is an invitation to establish a purpose-built company. The blueprint below distils how seasoned consultants advise new leaders to design a compliant, growth-ready MLM business."
];

const LAUNCH_STEPS: LaunchStep[] = [
  {
    title: "Define a sharp product specialisation",
    description:
      "Lead with a signature product line that solves a real problem. Depth of expertise builds credibility, protects your price point, and keeps distributors aligned on the value story.",
    insight: "Prioritise uncompromising product quality and a pricing model that signals trustworthiness from day one.",
    icon: Target
  },
  {
    title: "Curate wholesale partnerships",
    description:
      "Hand-pick suppliers who understand your category and can commit to transparent fulfilment. A dependable distributor network keeps launch promises intact and preserves your brand reputation.",
    insight: "Negotiate partner terms that scale—low minimums now, but with headroom for velocity once momentum lands.",
    icon: Handshake
  },
  {
    title: "Engineer a resilient pricing structure",
    description:
      "Balance retail, wholesale, and distributor commissions with data. Establish incentives that reward activity without eroding margin, then revisit the model as your first cohorts progress.",
    insight: "Start with clear commission tiers—many leaders opt for a 10% base—to establish transparency and trust.",
    icon: Wallet
  },
  {
    title: "Design the organisational backbone",
    description:
      "Implement enterprise MLM software early. Automated calculations, compliance checks, and granular dashboards keep daily operations precise even as enrollment spikes.",
    insight: "Use technology to schedule supplier reviews and track product velocity so you can adapt before issues surface.",
    icon: Building2
  },
  {
    title: "Amplify the story across digital media",
    description:
      "Complete your web presence, publish proof-driven content, and meet prospects on every channel they frequent. Consistency builds brand recognition and creates a pipeline for new advocates.",
    insight: "Pair organic storytelling with social proof—launch webinars, testimonials, and educational shorts to stay visible.",
    icon: Megaphone
  }
];

const OPERATIONAL_INSIGHTS: InsightSection[] = [
  {
    title: "Keep teams aligned with intelligent automation",
    paragraphs: [
      "Deploy Cloud MLM Software to centralise enrolment data, commission logic, and compliance monitoring. With a single command centre, leaders can analyse trends, balance team structures, and take action without waiting for manual reports.",
      "Regular supplier check-ins become data-backed conversations when inventory snapshots and payout histories are available in one place. That cadence protects customer experience and ensures product availability stays ahead of demand."
    ],
    icon: CheckCircle2
  },
  {
    title: "Build magnetic campaigns that compound reach",
    paragraphs: [
      "Once your operational foundation is set, double down on marketing that educates. Combine product walkthroughs, distributor spotlights, and transparent pricing explainers to remove friction for prospects evaluating your offer.",
      "Every touchpoint—site, email, social—should reinforce the same promise: a supportive, tech-enabled path to entrepreneurial success. When your narrative is clear, referrals and repurchase cycles accelerate naturally."
    ],
    icon: Sparkle
  }
];

const AUTHOR_BIO =
  "Experienced Research Analyst with in-depth knowledge of the MLM industry, including emerging trends and innovative strategies. Passionate about utilising technology to drive growth and optimise business processes. Adept at analysing market dynamics, delivering actionable insights, and staying ahead of industry developments.";

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "How to Start MLM Company in 2025";
  const description =
    "Build your 2025-ready MLM company with strategic product focus, supplier partnerships, transparent pricing, and tech-enabled operations that scale.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/how-to-start-mlm-company-in-2022", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type StartMlmCompanyPageProps = {
  params: { lang: SupportedLocale };
};

export default function StartMlmCompanyPage({ params }: StartMlmCompanyPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-indigo-50/80 to-sky-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.2),transparent_60%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.28),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.28),transparent_60%)]" />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:border-indigo-500/50 dark:bg-slate-900/70 dark:text-indigo-200">
              <Spiral className="h-4 w-4 text-indigo-500 dark:text-indigo-300" aria-hidden />
              Launch blueprint • 2025
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">
              How to start MLM company in 2025
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Turn post-pandemic demand into a resilient organisation. Shape your product line, supplier ecosystem, pricing, and marketing engine with a
              technology-first strategy built for global scale.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild className="bg-indigo-600 text-white hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400">
                <Link href={demoHref}>
                  Explore the platform
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Link href={contactHref}>
                  Discuss your launch plan
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-indigo-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-200">Reading time</p>
                <p className="mt-3 flex items-center gap-3 text-base text-slate-700 dark:text-slate-200">
                  <CalendarClock className="h-5 w-5 text-indigo-500 dark:text-indigo-300" aria-hidden />
                  Approximately 6 minutes
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-indigo-100 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none">
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-200">Author</p>
                <p className="mt-3 text-base text-slate-700 dark:text-slate-200">Edward • Research Analyst</p>
              </div>
            </div>
          </div>
          <aside className="space-y-5 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl shadow-indigo-100 backdrop-blur md:p-10 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-200">Market signals</p>
              <Sparkle className="h-5 w-5 text-indigo-500 dark:text-indigo-300" aria-hidden />
            </div>
            <div className="space-y-6 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {HERO_HIGHLIGHTS.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-indigo-100/70 bg-white/70 p-4 dark:border-indigo-500/30 dark:bg-slate-900/50">
                  <item.icon className="mt-1 h-6 w-6 shrink-0 text-indigo-500 dark:text-indigo-300" aria-hidden />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-6">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-indigo-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-200">Why act now</p>
            <div className="space-y-5 text-base leading-7 text-slate-700 dark:text-slate-300">
              {INTRO_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg shadow-indigo-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:border-indigo-500/50 dark:bg-slate-900/60 dark:text-indigo-200">
                <RocketLaunch className="h-4 w-4 text-indigo-500 dark:text-indigo-300" aria-hidden />
                Foundational steps
              </span>
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Architect the launch sequence</h2>
              <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
                Translate consultant wisdom into an actionable roadmap. Each step below keeps your venture compliant, customer-centric, and ready for rapid
                duplication across markets.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-[22px] w-px bg-gradient-to-b from-indigo-200 via-indigo-300/70 to-transparent dark:from-indigo-500/40 dark:via-indigo-400/30" aria-hidden />
              <div className="space-y-8">
                {LAUNCH_STEPS.map((step, index) => (
                  <article
                    key={step.title}
                    className="relative rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-md shadow-indigo-100 pl-14 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none"
                  >
                    <div className="absolute left-0 top-6 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-indigo-200 bg-white text-indigo-700 shadow-sm dark:border-indigo-500/50 dark:bg-slate-900 dark:text-indigo-200">
                      {index + 1}
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start gap-4">
                        <div className="rounded-xl bg-indigo-100/70 p-2 dark:bg-indigo-500/20">
                          <step.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-300" aria-hidden />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                          <p className="mt-2 text-base leading-7 text-slate-700 dark:text-slate-300">{step.description}</p>
                        </div>
                      </div>
                      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4 text-sm text-indigo-800 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-200">
                        {step.insight}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 lg:grid-cols-2">
          {OPERATIONAL_INSIGHTS.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col gap-6 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg shadow-indigo-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-indigo-100/80 p-3 dark:bg-indigo-500/20">
                  <item.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-300" aria-hidden />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">{item.title}</h2>
              </div>
              <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white/90 p-12 text-center shadow-xl shadow-indigo-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-200">Next steps</p>
          <h2 className="mt-6 text-3xl font-semibold text-slate-900 dark:text-white">Lead with technology and trusted expertise</h2>
          <p className="mt-4 text-base leading-7 text-slate-700 dark:text-slate-300">
            Your organisational structure determines how fast teams can act. Use Cloud MLM Software to keep commissions transparent, data accurate, and every
            distributor energised with real-time insights.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-indigo-600 text-white hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400">
              <Link href={demoHref}>
                Schedule a guided demo
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              <Link href={contactHref}>
                Build your roll-out plan
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-lg shadow-indigo-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-200">About the author</p>
          <p className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">Edward</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">Research Analyst</p>
          <p className="mt-6 text-base leading-7 text-slate-700 dark:text-slate-300">{AUTHOR_BIO}</p>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
