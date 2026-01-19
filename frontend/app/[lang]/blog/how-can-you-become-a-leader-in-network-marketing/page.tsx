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
  CalendarCheck,
  ChartBar,
  Compass,
  Handshake,
  Lightbulb,
  MapPin,
  MessageSquare,
  Target,
  Users
} from "lucide-react";
import {
  BookOpen,
  ChatsCircle,
  Heartbeat,
  Lightning,
  MegaphoneSimple,
  PencilSimpleLine,
  StarFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  summary: string;
  icon: IconType;
  bullets: string[];
};

type Routine = {
  title: string;
  detail: string;
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    label: "Global MLM millionaires",
    value: "1200+",
    description: "Network marketing has produced well over a thousand millionaires worldwide—proof leadership matters.",
    icon: ChartBar
  },
  {
    label: "Average leader tenure",
    value: "6-10 years",
    description: "Top leaders invest years mastering products, mentorship, and technology.",
    icon: CalendarCheck
  },
  {
    label: "Time on leadership development",
    value: "15 hrs/wk",
    description: "High-performing uplines dedicate focused time to coaching, planning, and self-improvement.",
    icon: Lightbulb
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Know your products cold",
    summary:
      "Deep product expertise builds credibility instantly. Customers and downlines trust leaders who educate with clarity.",
    icon: BookOpen,
    bullets: [
      "Study ingredients, certifications, and case studies for every SKU.",
      "Document FAQs so your team can answer confidently.",
      "Pair demos with personal testimonials to humanise benefits."
    ]
  },
  {
    title: "Start local, expand globally",
    summary:
      "Laser-focus on your immediate network first. Early wins create social proof and momentum before you scale.",
    icon: MapPin,
    bullets: [
      "Host local meetups, pop-ups, or workshops to build community.",
      "Identify micro-influencers in neighbourhoods and niche groups.",
      "Encourage referrals by spotlighting success stories from your area."
    ]
  },
  {
    title: "Build disciplined follow-up systems",
    summary:
      "Leadership means consistency. Track every conversation and follow through with precision using tech and templates.",
    icon: Compass,
    bullets: [
      "Automate reminders for prospects, customers, and new reps.",
      "Use chatbots or CRM workflows to answer FAQs instantly.",
      "Review pipeline health weekly so no opportunity slips."
    ]
  },
  {
    title: "Communicate with empathy",
    summary:
      "Two-way communication builds trust. Listen first, understand needs, and respond with personalised guidance.",
    icon: MessageSquare,
    bullets: [
      "Hold regular team huddles to align goals and celebrate wins.",
      "Offer multiple support channels—chat, voice, email—for accessibility.",
      "Model open, respectful dialogue so culture stays positive."
    ]
  },
  {
    title: "Lead by example daily",
    summary:
      "Show your team how it’s done. Leaders who prospect, sell, and learn alongside their downlines inspire loyalty.",
    icon: StarFour,
    bullets: [
      "Share your daily activity tracker to highlight consistency.",
      "Document learnings from wins and losses in public forums.",
      "Invest in your well-being so energy stays high for others."
    ]
  }
];

const ROUTINES: Routine[] = [
  {
    title: "Design a daily rhythm",
    detail:
      "Block time for prospecting, customer care, personal development, and recharging. Consistency compounds momentum.",
    icon: Target
  },
  {
    title: "Coach with intention",
    detail:
      "Hold one-on-ones, set tailored goals, and equip reps with scripts, videos, and automation support.",
    icon: Handshake
  },
  {
    title: "Amplify your voice",
    detail:
      "Leverage social platforms, live video, and email sequences to share insights and spotlight team achievements.",
    icon: MegaphoneSimple
  },
  {
    title: "Measure the right metrics",
    detail:
      "Track recruitment, activation, retention, and customer satisfaction so you can coach smarter.",
    icon: Users
  },
  {
    title: "Stay hungry for growth",
    detail:
      "Invest in masterminds, leadership events, and AI-enabled coaching to keep skills sharp.",
    icon: Lightning
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "How Can You Become a Leader in Network Marketing?";
  const description =
    "Master product knowledge, follow-up systems, communication, and daily discipline to lead thriving MLM teams with Cloud MLM Software’s guidance.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/how-can-you-become-a-leader-in-network-marketing", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type LeadershipPageProps = {
  params: { lang: SupportedLocale };
};

export default function LeadershipPage({ params }: LeadershipPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-amber-50 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(79,70,229,0.24),transparent_60%),radial-gradient(circle_at_82%_22%,rgba(251,191,36,0.22),transparent_60%),radial-gradient(circle_at_68%_78%,rgba(59,130,246,0.18),transparent_60%)]" />
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
                Leadership playbook · Network marketing
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                How can you become a leader in network marketing?
              </h1>
              <p className="text-lg text-slate-700">
                Great leaders combine product mastery, authentic relationships, and disciplined systems. Follow these principles to inspire your teams and scale impact in any MLM organisation.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="bg-indigo-600 text-white hover:bg-indigo-500">
                  <Link href={demoHref}>
                    Explore leadership automation tools
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100">
                  <Link href={contactHref}>
                    Connect with a leadership coach
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-indigo-100">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-100"
                >
                  <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-indigo-600">
                    <metric.icon className="h-5 w-5 text-indigo-500" aria-hidden />
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
                Fundamentals
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">Leadership pillars that attract success</h2>
              <p className="text-sm text-slate-600">
                Master these behaviours and skills to earn trust and replicate success across every level of your organisation.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {PILLARS.map((pillar) => (
                <div key={pillar.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <div className="flex items-center gap-3">
                    <pillar.icon className="h-6 w-6 text-indigo-600" aria-hidden />
                    <h3 className="text-base font-semibold text-slate-900">{pillar.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{pillar.summary}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <ArrowRight className="mt-1 h-4 w-4 text-amber-400" aria-hidden />
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
        <div className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-100 via-white to-amber-100 p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900">Daily routines of top network marketing leaders</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Your calendar is a leadership tool. Structure it intentionally to balance growth, support, and self-care.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {ROUTINES.map((routine) => (
                <div key={routine.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <routine.icon className="h-8 w-8 text-indigo-600" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{routine.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{routine.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Lead with confidence and scale with technology</h2>
            <p className="text-lg text-slate-600">
              Cloud MLM Software gives leaders CRM workflows, AI-driven coaching prompts, and analytics dashboards so you can amplify impact and keep your teams engaged.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-indigo-600 text-white hover:bg-indigo-500">
                <Link href={demoHref}>
                  Schedule a leadership demo
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-indigo-300 text-indigo-700 hover:bg-indigo-100">
                <Link href={pricingHref}>
                  Explore coaching bundles
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="ghost" className="text-slate-700 hover:bg-slate-100">
                <Link href={contactHref}>
                  Partner with our strategists
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
