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
  Award,
  LineChart,
  Flame,
  Globe2,
  Handshake,
  Layers,
  Library,
  Target,
  Users
} from "lucide-react";
import {
  ChatsCircle,
  Lightning,
  PresentationChart,
  RocketLaunch,
  Trophy
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type Strategy = {
  title: string;
  summary: string;
  icon: IconType;
  bullets: string[];
};

type MarketingPlay = {
  title: string;
  detail: string;
  icon: IconType;
};

type Earner = {
  name: string;
  country: string;
  income: string;
  highlight: string;
};

type Challenge = {
  title: string;
  description: string;
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    label: "Countries represented",
    value: "95+",
    description: "Herbalife distributors operate across nearly 100 markets worldwide.",
    icon: Globe2
  },
  {
    label: "Top earner income",
    value: "$3.5M+",
    description: "Annual compensation achieved by the highest-ranking Herbalife leaders in 2025.",
    icon: Trophy
  },
  {
    label: "Average tenure",
    value: "18 years",
    description: "Many top earners have invested decades mastering the Herbalife model.",
    icon: Library
  }
];

const STRATEGIES: Strategy[] = [
  {
    title: "Set intentional goals",
    summary:
      "Every top earner maps revenue, recruitment, and training goals—and reviews them weekly to stay aligned with long-term vision.",
    icon: Target,
    bullets: [
      "Define income milestones for 30/60/90 days.",
      "Break goals into daily activities for you and your team.",
      "Celebrate micro-wins to keep energy high."
    ]
  },
  {
    title: "Invest in growth",
    summary:
      "Continuous learning keeps leaders ahead. Workshops, mentoring, and industry events sharpen skills and expand networks.",
    icon: PresentationChart,
    bullets: [
      "Schedule quarterly workshops on product science and leadership.",
      "Shadow mentors to see how they coach and close.",
      "Document playbooks so your team scales faster."
    ]
  },
  {
    title: "Master time management",
    summary:
      "Top earners balance prospecting, coaching, marketing, and rest. They design sustainable routines that compound results.",
    icon: Lightning,
    bullets: [
      "Use themed days for recruiting, training, and customer care.",
      "Automate reminders for renewals, follow-ups, and events.",
      "Protect personal downtime to avoid burnout."
    ]
  }
];

const MARKETING_PLAYS: MarketingPlay[] = [
  {
    title: "Story-driven selling",
    detail:
      "Share personal wellness transformations to make products relatable, authentic, and trustworthy.",
    icon: Handshake
  },
  {
    title: "Try-before-you-buy experiences",
    detail:
      "Host tasting parties, sample drops, or virtual demos so prospects feel results before committing.",
    icon: Flame
  },
  {
    title: "Digital omnipresence",
    detail:
      "Publish wellness tips, recipes, and promotions across social, email, and blogs to stay top-of-mind.",
    icon: ChatsCircle
  }
];

const EARNERS: Earner[] = [
  {
    name: "Enrique & Graciela Varela",
    country: "Mexico",
    income: "$3,540,000",
    highlight: "Nutrition Club pioneers who model community-first leadership."
  },
  {
    name: "A. Benitez & Raquel Cortez",
    country: "USA",
    income: "$3,000,000",
    highlight: "Scaled by mentoring local leaders and expanding outreach programmes."
  },
  {
    name: "John & Lori Tartol",
    country: "Ireland",
    income: "$2,880,000",
    highlight: "International expansion experts blending wellness education with business coaching."
  },
  {
    name: "Susan Peterson",
    country: "USA",
    income: "$2,880,000",
    highlight: "Founder’s Circle mentor who has guided generations of Herbalife distributors."
  },
  {
    name: "Leonard & Irina Weisbein",
    country: "Russia",
    income: "$2,700,000",
    highlight: "Built massive teams by combining personal development with rigorous onboarding."
  },
  {
    name: "Tae Ho Kim",
    country: "South Korea",
    income: "$2,640,000",
    highlight: "Trailblazer in Asia, blending local culture with global Herbalife playbooks."
  },
  {
    name: "Carol & Alan Lorenz",
    country: "Canada & UK",
    income: "$2,400,000",
    highlight: "Chairman’s Club veterans with four decades of consistent performance."
  },
  {
    name: "Leonard & Esther Kim",
    country: "South Korea",
    income: "$2,400,000",
    highlight: "Training-focused leaders who champion replicable systems."
  },
  {
    name: "Geri Cvitanovich",
    country: "USA",
    income: "$1,800,000",
    highlight: "Community-driven approach built on mentorship and customer loyalty."
  },
  {
    name: "Michael Palmstierna Hamilton",
    country: "France",
    income: "$1,560,000",
    highlight: "Personalised coaching and wellness education anchor his European growth."
  }
];

const CHALLENGES: Challenge[] = [
  {
    title: "Navigating rejection",
    description:
      "Prospects won’t always say yes. Top earners refine messaging, track objections, and maintain pipeline momentum.",
    icon: Layers
  },
  {
    title: "Time & responsibility juggle",
    description:
      "Systematised calendars, task delegation, and automation keep leaders focused on high-impact work.",
    icon: LineChart
  },
  {
    title: "Building resilient teams",
    description:
      "Culture, recognition, and education keep downlines engaged—stopping attrition before it starts.",
    icon: Users
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Herbalife Top Earners 2025: Success Stories and Earnings Revealed";
  const description =
    "Learn how Herbalife’s highest earners built global businesses—plus the strategies, marketing plays, and tools driving their success.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/herbalife-top-earners", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type HerbalifeEarnersPageProps = {
  params: { lang: SupportedLocale };
};

export default function HerbalifeEarnersPage({ params }: HerbalifeEarnersPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-rose-50 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(168,85,247,0.26),transparent_60%),radial-gradient(circle_at_82%_22%,rgba(244,114,182,0.22),transparent_60%),radial-gradient(circle_at_68%_78%,rgba(59,130,246,0.18),transparent_60%)]" />
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-purple-700">
                Success playbook · Herbalife insights
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Herbalife top earners 2025: success stories and earnings revealed
              </h1>
              <p className="text-lg text-slate-700">
                Health and wellness entrepreneurs across the Herbalife network are building multi-million-dollar businesses. Explore the strategies they use—and how you can adapt
                them with modern tools.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="bg-purple-600 text-white hover:bg-purple-500">
                  <Link href={demoHref}>
                    Unlock AI-powered MLM tools
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100">
                  <Link href={contactHref}>
                    Connect with strategy mentors
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-purple-100">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-100"
                >
                  <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-purple-600">
                    <metric.icon className="h-5 w-5 text-purple-500" aria-hidden />
                    {metric.label}
                  </div>
                  <p className="text-3xl font-semibold text-slate-900">{metric.value}</p>
                  <p className="mt-2 text-sm text-slate-600">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                Foundation
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">Inside the Herbalife business model</h2>
              <p className="text-sm text-slate-600">
                Herbalife pairs direct selling with network-building. Distributors earn on personal retail, then mentor downlines to earn royalties and bonuses as teams grow.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                <RocketLaunch className="h-7 w-7 text-purple-600" aria-hidden />
                <h3 className="mt-3 text-base font-semibold text-slate-900">Product-first earnings</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Distributors buy at wholesale discounts and retail products to earn immediate profit.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                <Layers className="h-7 w-7 text-purple-600" aria-hidden />
                <h3 className="mt-3 text-base font-semibold text-slate-900">Downline royalties</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Structured ranks reward mentorship, training, and team volume across multiple levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-100 via-white to-purple-100 p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900">Strategies top earners swear by</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Goal-setting, self-development, and time mastery transform Herbalife businesses from part-time projects into global enterprises.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {STRATEGIES.map((strategy) => (
                <div key={strategy.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <strategy.icon className="h-8 w-8 text-purple-600" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{strategy.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{strategy.summary}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {strategy.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <ArrowRight className="mt-1 h-4 w-4 text-rose-400" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                Marketing moves
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">How elite distributors grow audiences</h2>
              <p className="text-sm text-slate-600">
                Personal stories, immersive experiences, and digital consistency convert prospects into loyal customers.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {MARKETING_PLAYS.map((play) => (
                <div key={play.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <div className="flex items-center gap-3">
                    <play.icon className="h-6 w-6 text-purple-600" aria-hidden />
                    <h3 className="text-base font-semibold text-slate-900">{play.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{play.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-purple-200 bg-white p-10">
          <h2 className="text-2xl font-semibold text-slate-900">Herbalife top earners list 2025</h2>
          <p className="mt-2 text-sm text-slate-600">
            Income figures include estimated annual earnings from royalties, bonuses, and retail profits.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="py-3 pr-6 font-semibold">Distributor(s)</th>
                  <th className="py-3 pr-6 font-semibold">Country</th>
                  <th className="py-3 pr-6 font-semibold">Estimated income</th>
                  <th className="py-3 font-semibold">Highlights</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {EARNERS.map((earner) => (
                  <tr key={earner.name}>
                    <td className="py-4 pr-6 font-semibold text-slate-900">{earner.name}</td>
                    <td className="py-4 pr-6">{earner.country}</td>
                    <td className="py-4 pr-6">{earner.income}</td>
                    <td className="py-4">{earner.highlight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                Overcoming obstacles
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">How top earners tackle common challenges</h2>
              <p className="text-sm text-slate-600">
                Rejection, time pressure, and team attrition are inevitable. Systems and mindset keep leaders resilient.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {CHALLENGES.map((challenge) => (
                <div key={challenge.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <div className="flex items-center gap-3">
                    <challenge.icon className="h-6 w-6 text-purple-600" aria-hidden />
                    <h3 className="text-base font-semibold text-slate-900">{challenge.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-100 via-white to-purple-100 p-10 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Ready to build your Herbalife success story?</h2>
            <p className="text-lg text-slate-600">
              Cloud MLM Software empowers Herbalife distributors with AI-backed coaching, compensation automation, and analytics—so your business scales like the leaders you admire.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-purple-600 text-white hover:bg-purple-500">
                <Link href={demoHref}>
                  Request a personalised demo
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-100">
                <Link href={pricingHref}>
                  Explore subscription plans
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="ghost" className="text-slate-700 hover:bg-slate-100">
                <Link href={contactHref}>
                  Talk with a strategist
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
