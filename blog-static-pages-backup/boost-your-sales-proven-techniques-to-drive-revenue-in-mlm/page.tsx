import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, CalendarDays, LineChart, Handshake, MessagesSquare, Sparkles, Target, Trophy } from "lucide-react";
import { ArrowLineUp, ChatsCircle, CirclesThree, DeviceMobile, Graph, IdentificationBadge, Smiley } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type IncomeMode = {
  title: string;
  description: string;
  cues: string[];
  icon: IconType;
};

type Strategy = {
  title: string;
  description: string;
  actions: string[];
  icon: IconType;
};

type Play = {
  label: string;
  summary: string;
  guidance: string;
  icon: IconType;
};

type Enablement = {
  title: string;
  detail: string;
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    label: "Revenue uplift recorded",
    value: "42%",
    description: "Average top-line increase for teams applying structured coaching and data-driven selling.",
    icon: LineChart
  },
  {
    label: "Active field engagement",
    value: "89%",
    description: "Distributors engaging weekly with Cloud MLM learning hubs and playbooks.",
    icon: ChatsCircle
  },
  {
    label: "Time to first win",
    value: "14 days",
    description: "New distributors reaching initial commissions with guided onboarding journeys.",
    icon: Trophy
  }
];

const INCOME_MODES: IncomeMode[] = [
  {
    title: "Active income",
    description:
      "Earn direct profits by introducing your products and services to customers beyond the network. Focus on authentic conversations and tailored recommendations.",
    cues: [
      "Understand each buyer’s needs before presenting the solution.",
      "Showcase real customer outcomes through demos and testimonials.",
      "Maintain a consistent follow-up rhythm to secure repeat orders."
    ],
    icon: Target
  },
  {
    title: "Passive income",
    description:
      "Scale earnings by mentoring new distributors and supporting their success. Compensation grows as your team thrives and spreads value through the network.",
    cues: [
      "Recruit individuals aligned with your brand promise and ethics.",
      "Provide personalised playbooks covering onboarding, sales, and retention.",
      "Celebrate milestones openly to reinforce momentum across the downline."
    ],
    icon: ArrowLineUp
  }
];

const STRATEGIES: Strategy[] = [
  {
    title: "Build lasting relationships",
    description:
      "MLM flourishes when trust is genuine. Invest time in learning the aspirations, pain points, and motivations of every prospect.",
    actions: [
      "Maintain detailed notes about customer preferences and purchase history.",
      "Deliver proactive check-ins with helpful insights rather than hard sells.",
      "Adopt the mantra “once a client, forever a client” to nurture loyalty."
    ],
    icon: Handshake
  },
  {
    title: "Activate social storytelling",
    description:
      "Social platforms provide a free, global stage to share product value, testimonials, and educational content every day.",
    actions: [
      "Host live sessions, Q&As, and behind-the-scenes glimpses that humanise your brand.",
      "Encourage user-generated content to validate product impact.",
      "Blend organic posts with targeted ads to reach new communities."
    ],
    icon: DeviceMobile
  },
  {
    title: "Stay present with follow-ups",
    description:
      "Consistent communication proves reliability. Follow through on every promise to reinforce confidence and unlock referrals.",
    actions: [
      "Send thank-you messages and feedback surveys after each purchase.",
      "Respond quickly to messages across email, chat, and phone.",
      "Invite customers into supportive communities where they can learn and share."
    ],
    icon: MessagesSquare
  }
];

const GAME_PLAYS: Play[] = [
  {
    label: "1. Product mastery",
    summary:
      "Know your catalogue intimately—ingredients, benefits, differentiators—so every conversation feels personalised and credible.",
    guidance: "Host demos online and offline, spotlight real stories, and connect features to specific customer outcomes.",
    icon: BookOpen
  },
  {
    label: "2. Continuous learning",
    summary:
      "Attend webinars, conferences, and masterminds to stay sharp. Your growth as a leader determines the pace of your organisation.",
    guidance: "Curate a monthly learning calendar and share highlights with your team so everyone levels up together.",
    icon: CalendarDays
  },
  {
    label: "3. Data-led decisions",
    summary:
      "Track conversions, earnings per click, and retention metrics to understand which plays deserve more investment.",
    guidance: "Use dashboards to coach distributors, adjust incentives, and experiment with campaigns that maximise ROI.",
    icon: Graph
  },
  {
    label: "4. Community rituals",
    summary:
      "Create safe spaces for collaboration. Celebrate wins, address setbacks, and keep everyone aligned to shared goals.",
    guidance: "Establish weekly stand-ups, recognition ceremonies, and accountability pods that spark collective momentum.",
    icon: CirclesThree
  }
];

const ENABLEMENT: Enablement[] = [
  {
    title: "Personalised onboarding journeys",
    detail:
      "Guide newcomers through the business model, compensation plan, and ethics while encouraging early outreach activities.",
    icon: IdentificationBadge
  },
  {
    title: "Coaching with AI copilots",
    detail:
      "Provide instant support via intelligent assistants that surface scripts, objection handling, and next-best actions on demand.",
    icon: Sparkles
  },
  {
    title: "Well-being and resilience",
    detail:
      "Sustained revenue comes from energised teams. Promote routines that reduce burnout and keep confidence high during market shifts.",
    icon: Smiley
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Boost Your Sales: Proven Techniques to Drive Revenue in MLM";
  const description =
    "Level up your MLM revenue with Cloud MLM Software’s playbook for relationship-first selling, data-driven coaching, and continuous enablement.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/boost-your-sales-proven-techniques-to-drive-revenue-in-mlm", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type SalesPlaybookPageProps = {
  params: { lang: SupportedLocale };
};

export default function SalesPlaybookPage({ params }: SalesPlaybookPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-amber-50 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(244,114,182,0.25),transparent_60%),radial-gradient(circle_at_84%_22%,rgba(251,191,36,0.24),transparent_60%),radial-gradient(circle_at_70%_78%,rgba(56,189,248,0.2),transparent_60%)]" />
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-rose-600">
                Growth playbook · Revenue excellence
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Boost your sales: proven techniques to drive revenue in MLM
              </h1>
              <p className="text-lg text-slate-700">
                Staying true to the legacy article, this refreshed guide shows how relationship-first selling, social storytelling, and
                continuous learning combine to unlock reliable revenue in modern MLM organisations.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="bg-rose-600 text-white hover:bg-rose-500">
                  <Link href={demoHref}>
                    Access sales acceleration demo
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100">
                  <Link href={contactHref}>
                    Connect with a growth advisor
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-rose-100">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-100"
                >
                  <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-rose-600">
                    <metric.icon className="h-5 w-5 text-rose-500" aria-hidden />
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
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Recognise how income flows</h2>
          <p className="mt-4 text-lg text-slate-600">
            The article spotlighted both active and passive revenue streams. Translate those principles into structured plays that keep your
            business balanced and scalable.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {INCOME_MODES.map((mode) => (
            <article
              key={mode.title}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-100"
            >
              <mode.icon className="h-10 w-10 text-rose-500" aria-hidden />
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{mode.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{mode.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {mode.cues.map((cue) => (
                  <li key={cue} className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-4 w-4 text-amber-400" aria-hidden />
                    <span>{cue}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-amber-50 to-rose-50 p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900">Strategies that compound trust</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Relationship building, social media presence, and thoughtful follow-ups were core to the original article. These playbooks
                modernise that advice with clear actions.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {STRATEGIES.map((strategy) => (
                <div key={strategy.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <strategy.icon className="h-8 w-8 text-rose-500" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{strategy.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{strategy.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {strategy.actions.map((action) => (
                      <li key={action} className="flex items-start gap-2">
                        <ArrowRight className="mt-1 h-4 w-4 text-amber-400" aria-hidden />
                        <span>{action}</span>
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
        <div className="rounded-3xl border border-rose-200 bg-white p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-rose-600">
                Field playbook
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">Four plays to accelerate momentum</h2>
              <p className="text-sm text-slate-600">
                Execute these routines weekly to keep momentum high, help distributors stay motivated, and turn prospects into advocates.
              </p>
            </div>
            <div className="grid gap-4">
              {GAME_PLAYS.map((play) => (
                <div key={play.label} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <div className="flex items-center gap-3">
                    <play.icon className="h-6 w-6 text-rose-500" aria-hidden />
                    <h3 className="text-lg font-semibold text-slate-900">{play.label}</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{play.summary}</p>
                  <p className="mt-2 text-sm font-medium text-slate-700">{play.guidance}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-rose-50 via-white to-amber-50 p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,300px),minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">Enablement that sticks</h2>
              <p className="text-sm text-slate-600">
                Supporting distributors after the initial training was a crucial takeaway from the original article. These enablement levers keep
                knowledge current and morale high.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {ENABLEMENT.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <item.icon className="h-8 w-8 text-rose-500" aria-hidden />
                  <h3 className="mt-3 text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-100 via-white to-amber-50 p-10 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Ready to elevate your MLM sales engine?</h2>
            <p className="text-lg text-slate-600">
              Cloud MLM Software equips your teams with automation, insights, and AI guidance so every interaction feels tailored and
              trustworthy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-rose-600 text-white hover:bg-rose-500">
                <Link href={demoHref}>
                  Book a sales strategy session
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-rose-300 text-rose-600 hover:bg-rose-100">
                <Link href={contactHref}>
                  Partner with our consultants
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
