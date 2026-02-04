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
  BarChart3,
  BookOpen,
  Compass,
  FlagTriangleRight,
  Handshake,
  LineChart,
  Search,
  Megaphone,
  ShieldCheck,
  Users
} from "lucide-react";
import {
  ChartLineUp,
  CirclesThreePlus,
  CirclesThree,
  DeviceMobileCamera,
  GlobeHemisphereEast,
  LinkSimple,
  RocketLaunch,
  Smiley
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
  description: string;
  points: string[];
  icon: IconType;
};

type Step = {
  label: string;
  title: string;
  description: string;
  icon: IconType;
};

type Channel = {
  title: string;
  summary: string;
  actions: string[];
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    label: "Projected affiliate ROI",
    value: "4.2x",
    description: "Average multiplier achieved by Cloud MLM clients after structured affiliate launches.",
    icon: LineChart
  },
  {
    label: "Activation time",
    value: "21 days",
    description: "Typical time from partner recruitment to first monetised referral.",
    icon: RocketLaunch
  },
  {
    label: "Content conversion lift",
    value: "32%",
    description: "Increase in earnings per click once copy and landing experiences are aligned.",
    icon: BookOpen
  }
];

const FOUNDATIONS: Pillar[] = [
  {
    title: "Define the value promise",
    description:
      "Clarify why partners should advocate for your offer, how commissions scale, and what moments deserve recognition.",
    points: [
      "Document commission tiers tied to volume, retention, and bonus triggers.",
      "Set expectations for ethical storytelling and compliance-ready messaging.",
      "Bundle onboarding kits with AI-ready FAQs, product sheets, and demo videos."
    ],
    icon: FlagTriangleRight
  },
  {
    title: "Curate quality affiliates",
    description:
      "Recruit voices who already speak to your audience. Guide them with briefs, co-branded assets, and feedback loops.",
    points: [
      "Score prospects on reach, credibility, and category alignment.",
      "Host strategy reviews to co-design promotional angles.",
      "Equip partners with campaign dashboards that highlight wins."
    ],
    icon: Handshake
  },
  {
    title: "Measure and optimise",
    description:
      "Monitor every click, conversion, and conversation. Let data inform the incentives and creative assets that stay in rotation.",
    points: [
      "Audit channel-level EPC, average order values, and refund rates weekly.",
      "Detect cookie drop-off windows to refresh nurture flows.",
      "Share insight briefings so partners understand what resonates."
    ],
    icon: BarChart3
  }
];

const JOURNEY_STEPS: Step[] = [
  {
    label: "Phase 1",
    title: "Prepare your infrastructure",
    description:
      "Choose tracking platforms, integrate unique affiliate links, and map compliance guardrails for each market you touch.",
    icon: LinkSimple
  },
  {
    label: "Phase 2",
    title: "Recruit and brief affiliates",
    description:
      "Pitch the opportunity, align on performance expectations, and co-create storylines that put customer outcomes first.",
    icon: Users
  },
  {
    label: "Phase 3",
    title: "Launch multi-channel campaigns",
    description:
      "Blend YouTube walkthroughs, social snippets, email drips, and paid remarketing into a cohesive go-live calendar.",
    icon: Megaphone
  },
  {
    label: "Phase 4",
    title: "Optimise and scale",
    description:
      "Track earnings per click, iterate offers, and deploy AI assistants that coach partners on high-performing tactics.",
    icon: ChartLineUp
  }
];

const CHANNELS: Channel[] = [
  {
    title: "Content-rich websites",
    summary:
      "Create in-depth comparison guides, FAQs, and evergreen funnels that deliver context before asking for a click.",
    actions: [
      "Keep every affiliate link unique so you can trace campaigns instantly.",
      "Refresh copy with keyword insights and conversational support scripts.",
      "Embed testimonials and success metrics to reinforce credibility."
    ],
    icon: Compass
  },
  {
    title: "Video-first storytelling",
    summary:
      "Use tutorials, walkthroughs, and customer stories to animate your offer. Pair organic reach with retargeting ads.",
    actions: [
      "Launch episodic series that address objections and show real use cases.",
      "Optimise thumbnails, captions, and CTAs for cross-platform visibility.",
      "Repurpose clips for reels, webinars, and AI-powered learning hubs."
    ],
    icon: DeviceMobileCamera
  },
  {
    title: "Social and community loops",
    summary:
      "Meet audiences where they already gather. Encourage discussions, quick tips, and celebratory moments that prove momentum.",
    actions: [
      "Outline posting cadences with seasonality in mind.",
      "Use polls and AMAs to collect product feedback and story ideas.",
      "Amplify partner wins to reinforce trust and long-term loyalty."
    ],
    icon: CirclesThreePlus
  },
  {
    title: "Performance media",
    summary:
      "Invest in paid search and social once conversion journeys are proven. Layer remarketing to capture indecisive visitors.",
    actions: [
      "Protect brand guidelines with pre-approved ad copy and creatives.",
      "Rotate incentives carefully to avoid margin erosion.",
      "Coordinate spend with organic pushes so audiences see coherent messaging."
    ],
    icon: Search
  }
];

const QUICK_TIPS = [
  "Map customer personas and align affiliates to each journey stage.",
  "Share real-time dashboards covering clicks, conversions, and refunds.",
  "Refresh incentives quarterly to reward both acquisition and retention.",
  "Encourage affiliates to weave stories, not just discount codes.",
  "Treat content as a product—edit, optimise, and A/B test relentlessly."
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "An Easy Guide to Start Affiliate Marketing";
  const description =
    "Launch a profitable affiliate programme with Cloud MLM Software. Learn the steps, channels, and metrics that keep partners inspired.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/an-easy-guide-to-start-affiliate-marketing", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AffiliateGuidePageProps = {
  params: { lang: SupportedLocale };
};

export default function AffiliateGuidePage({ params }: AffiliateGuidePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-sky-50 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(251,191,36,0.28),transparent_60%),radial-gradient(circle_at_80%_22%,rgba(14,165,233,0.24),transparent_60%),radial-gradient(circle_at_70%_78%,rgba(16,185,129,0.18),transparent_60%)]" />
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
                Affiliate strategy · Growth playbook
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                An easy guide to start affiliate marketing
              </h1>
              <p className="text-lg text-slate-700">
                Turn enthusiastic advocates into revenue drivers. This guide distils the original Cloud MLM Software article into a
                modern operating model that keeps affiliates engaged, compliant, and profitable.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="bg-emerald-500 text-white hover:bg-emerald-400">
                  <Link href={demoHref}>
                    Explore affiliate dashboards
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100">
                  <Link href={contactHref}>
                    Talk to a strategist
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-amber-100">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-100"
                >
                  <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-emerald-600">
                    <metric.icon className="h-5 w-5 text-emerald-500" aria-hidden />
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
          <h2 className="text-3xl font-semibold text-slate-900">Three foundations for affiliate success</h2>
          <p className="mt-4 text-lg text-slate-600">
            Borrow the essence of the WordPress guide—align purpose, partnerships, and performance—to keep every campaign ethical and
            effective.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {FOUNDATIONS.map((pillar) => (
            <article
              key={pillar.title}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-100"
            >
              <pillar.icon className="h-10 w-10 text-emerald-500" aria-hidden />
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-emerald-50 to-sky-50 p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,280px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-600">
                Step-by-step plan
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">Move from concept to high-performing programme</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Affiliate marketing works best when strategy, technology, and partner enablement stay in sync. Follow these four phases to
                honour the spirit of the original article while adopting modern automation.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {JOURNEY_STEPS.map((step) => (
                <div key={step.title} className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <step.icon className="h-6 w-6" aria-hidden />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">{step.label}</p>
                        <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
              Channel playbooks
            </span>
            <h2 className="text-3xl font-semibold text-slate-900">Choose the right launchpad for every offer</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              From blogs and communities to YouTube and paid media, the best affiliates diversify traffic sources. Adapt these suggestions to
              cultivate trust, long-term loyalty, and measurable growth.
            </p>
            <div className="rounded-2xl border border-emerald-200 bg-white p-5 text-sm text-emerald-700">
              <p className="font-semibold">Pro tip</p>
              <p className="mt-2">
                Pair each channel with analytics dashboards. Transparent reporting turns affiliates into collaborators rather than resellers.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {CHANNELS.map((channel) => (
              <article key={channel.title} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <channel.icon className="h-8 w-8 text-emerald-500" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{channel.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{channel.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {channel.actions.map((action) => (
                    <li key={action} className="flex items-start gap-2">
                      <ArrowRight className="mt-1 h-4 w-4 text-emerald-400" aria-hidden />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-center">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                Essentials
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">Turn clicks into long-term customer value</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                The original article emphasised patience, quality partners, and credible content. Convert those lessons into daily rituals by
                keeping these reminders front and centre.
              </p>
            </div>
            <div className="grid gap-4">
              {QUICK_TIPS.map((tip) => (
                <div key={tip} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
                  <Smiley className="mt-1 h-6 w-6 text-emerald-500" aria-hidden />
                  <p className="text-sm text-slate-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-10 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Ready to accelerate with affiliate marketing?</h2>
            <p className="text-lg text-slate-600">
              Cloud MLM Software equips you with analytics, automation, and compliance guardrails so every partner feels like an extension of
              your brand.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-emerald-500 text-white hover:bg-emerald-400">
                <Link href={demoHref}>
                  Book a personalised walkthrough
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-emerald-300 text-emerald-600 hover:bg-emerald-100">
                <Link href={contactHref}>
                  Connect with our experts
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
