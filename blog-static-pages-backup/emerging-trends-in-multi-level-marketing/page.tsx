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
  Globe,
  HeartHandshake,
  Layers,
  LineChart,
  Megaphone,
  Network,
  MousePointerClick,
  Shield,
  Sparkles,
  Users
} from "lucide-react";
import {
  ChatsCircle,
  Faders,
  Fire,
  Funnel,
  HandCoins,
  Lightning,
  Strategy
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type Trend = {
  title: string;
  summary: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  description: string;
  icon: IconType;
  bullets: string[];
};

type SocialPlay = {
  title: string;
  detail: string;
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    label: "Digital-first distributors",
    value: "78%",
    description: "Leaders rely on social media, automation, and e-commerce to run daily operations.",
    icon: Sparkles
  },
  {
    label: "Customer experience ROI",
    value: "2.5x",
    description: "Customer-centric MLM brands report higher retention and referral rates year over year.",
    icon: HeartHandshake
  },
  {
    label: "Social commerce growth",
    value: "30%",
    description: "Annual increase in revenue attributed to live selling, influencer partnerships, and UGC.",
    icon: Megaphone
  }
];

const TRENDS: Trend[] = [
  {
    title: "Entrepreneurship reimagined",
    summary:
      "Flexible work, passive income, and digital toolkits have inspired a new generation of tech-savvy network marketers.",
    icon: Lightning
  },
  {
    title: "Customer centricity",
    summary:
      "MLM companies are prioritising personalised journeys, feedback loops, and ongoing support rather than transactional selling.",
    icon: HeartHandshake
  },
  {
    title: "Social commerce fusion",
    summary:
      "Live demos, short-form video, and commerce-enabled chats keep products visible and conversions friction-free.",
    icon: ChatsCircle
  },
  {
    title: "Brand strength as currency",
    summary:
      "Trustworthy brands attract loyal customers and motivated recruits, fuelling sustainable global expansion.",
    icon: Award
  }
];

const CUSTOMER_PILLARS: Pillar[] = [
  {
    title: "Personalisation",
    description:
      "Design journeys that adapt to every customer’s preferences, ensuring each interaction feels relevant and timely.",
    icon: MousePointerClick,
    bullets: [
      "Segment audiences based on behaviour and lifecycle stage.",
      "Deliver tailored product recommendations and bundles.",
      "Leverage AI to auto-compose follow-ups in the customer’s tone."
    ]
  },
  {
    title: "Relationship building",
    description:
      "Replace one-off transactions with lifetime advocacy by matching customers to mentors, communities, and resources.",
    icon: Users,
    bullets: [
      "Host onboarding webinars and micro-learning journeys.",
      "Celebrate milestones, anniversaries, and loyalty tiers.",
      "Offer concierge support for premium segments."
    ]
  },
  {
    title: "Feedback & improvement",
    description:
      "Listen constantly—then act—with structured feedback loops that inform product roadmaps and service tweaks.",
    icon: Funnel,
    bullets: [
      "Gather surveys post-purchase and post-event.",
      "Mine social listening data for emerging needs.",
      "Close the loop publicly so customers see action."
    ]
  },
  {
    title: "Adaptive operations",
    description:
      "Keep your organisation nimble by iterating offers, channels, and fulfilment based on customer demand.",
    icon: Faders,
    bullets: [
      "Pilot new formats with agile cross-functional squads.",
      "Scale wins with automation and performance dashboards.",
      "Retire underperforming campaigns quickly to reinvest focus."
    ]
  }
];

const SOCIAL_PLAYS: SocialPlay[] = [
  {
    title: "Live commerce sessions",
    detail:
      "Blend storytelling, tutorials, and urgent offers via Instagram Live, TikTok Shop, or YouTube Shopping with instant checkout links.",
    icon: Fire
  },
  {
    title: "Influencer collaborations",
    detail:
      "Co-create content with credible voices who mirror your target demographic and share authentic experiences.",
    icon: Network
  },
  {
    title: "User-generated momentum",
    detail:
      "Encourage customers and distributors to share unboxing videos, reviews, and transformation stories.",
    icon: HandCoins
  },
  {
    title: "E-commerce integration",
    detail:
      "Seamlessly sync social content with product landing pages, enabling one-click shopping from stories and reels.",
    icon: Globe
  }
];

const BRAND_PILLARS: Pillar[] = [
  {
    title: "Credibility & trust",
    description:
      "Transparent compensation, compliance programmes, and verified testimonials reassure prospects and regulators alike.",
    icon: Shield,
    bullets: [
      "Publish clear income disclosures and ethics policies.",
      "Audit claims and marketing materials regularly.",
      "Highlight customer service metrics and third-party certifications."
    ]
  },
  {
    title: "Customer loyalty",
    description:
      "Consistent product quality and memorable experiences cultivate repeat purchases and evangelical promoters.",
    icon: HeartHandshake,
    bullets: [
      "Offer loyalty tiers with exclusive perks and community access.",
      "Use predictive analytics to anticipate churn signals.",
      "Reward referrals with both tangible and experiential benefits."
    ]
  },
  {
    title: "Global readiness",
    description:
      "Localise content, payments, and compliance to welcome distributors and customers from every market you enter.",
    icon: Globe,
    bullets: [
      "Localise language, currency, and fulfilment SLA per region.",
      "Respect cultural nuances in messaging and imagery.",
      "Align with regional legal and tax requirements before launch."
    ]
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Emerging Trends in Multi-Level Marketing";
  const description =
    "Discover how entrepreneurship, customer centricity, social commerce, and brand strength are reshaping MLM—with Cloud MLM Software insights and playbooks.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/emerging-trends-in-multi-level-marketing", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type EmergingTrendsPageProps = {
  params: { lang: SupportedLocale };
};

export default function EmergingTrendsPage({ params }: EmergingTrendsPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(16,185,129,0.28),transparent_60%),radial-gradient(circle_at_82%_22%,rgba(244,158,11,0.22),transparent_60%),radial-gradient(circle_at_68%_78%,rgba(14,165,233,0.18),transparent_60%)]" />
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Industry intelligence · Future of MLM
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Emerging trends in multi-level marketing
              </h1>
              <p className="text-lg text-slate-700">
                From digital-first entrepreneurs to customer-obsessed service models, MLM is evolving fast. Steer your organisation with data-backed insights,
                actionable playbooks, and technology that keeps you adaptive.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="bg-emerald-600 text-white hover:bg-emerald-500">
                  <Link href={demoHref}>
                    Explore trend-ready tooling
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100">
                  <Link href={contactHref}>
                    Talk with industry strategists
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-emerald-100">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-100"
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
          <h2 className="text-3xl font-semibold text-slate-900">Strategies defining modern MLM growth</h2>
          <p className="mt-4 text-lg text-slate-600">
            Blend entrepreneurial spirit with customer obsession, social commerce, and brand investment to stay ahead of the curve.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TRENDS.map((trend) => (
            <article
              key={trend.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-100"
            >
              <trend.icon className="h-10 w-10 text-emerald-600" aria-hidden />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{trend.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{trend.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                Customer-first playbook
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">Customer centricity in action</h2>
              <p className="text-sm text-slate-600">
                Personalisation, relationships, feedback, and agility shape unforgettable customer journeys. The original blog flagged them—today’s brands operationalise
                them at scale.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {CUSTOMER_PILLARS.map((pillar) => (
                <div key={pillar.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <div className="flex items-center gap-3">
                    <pillar.icon className="h-6 w-6 text-emerald-600" aria-hidden />
                    <h3 className="text-base font-semibold text-slate-900">{pillar.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{pillar.description}</p>
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
        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-amber-50 p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900">Social commerce moves to borrow today</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Social platforms double as storefronts, education hubs, and community spaces. Keep pace with these proven plays.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {SOCIAL_PLAYS.map((play) => (
                <div key={play.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <play.icon className="h-8 w-8 text-emerald-600" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{play.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{play.detail}</p>
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
                Brand blueprint
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">Strengthen your brand, strengthen your network</h2>
              <p className="text-sm text-slate-600">
                Credibility, loyalty, and global readiness turn MLM organisations into trusted market leaders.
              </p>
            </div>
            <div className="grid gap-4">
              {BRAND_PILLARS.map((pillar) => (
                <div key={pillar.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <div className="flex items-center gap-3">
                    <pillar.icon className="h-6 w-6 text-emerald-600" aria-hidden />
                    <h3 className="text-base font-semibold text-slate-900">{pillar.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{pillar.description}</p>
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
        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-100 via-white to-amber-100 p-10 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Turn trends into momentum</h2>
            <p className="text-lg text-slate-600">
              Cloud MLM Software equips you with platforms, playbooks, and analytics to make emerging trends actionable—ready for distributors, customers, and global
              partners alike.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-emerald-600 text-white hover:bg-emerald-500">
                <Link href={demoHref}>
                  Schedule a trend review
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-100">
                <Link href={contactHref}>
                  Partner with our strategists
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="ghost" className="text-slate-700 hover:bg-slate-100">
                <Link href={pricingHref}>
                  Review solution tiers
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
