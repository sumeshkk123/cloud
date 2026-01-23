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
  BarChart4,
  Coins,
  Gem,
  Globe,
  Handshake,
  Percent,
  Rocket,
  ShoppingBag,
  Trophy
} from "lucide-react";
import {
  Browsers,
  ChartPieSlice,
  Lightning,
  SelectionBackground,
  Sparkle,
  Target,
  UsersThree
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

type Niche = {
  name: string;
  description: string;
  icon: IconType;
};

type Program = {
  name: string;
  highlights: string[];
};

type Tip = {
  title: string;
  detail: string;
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    label: "Average commission per sale",
    value: "$500+",
    description: "High-ticket programmes pay exponentially more than the typical $20–$40 affiliate payout.",
    icon: Coins
  },
  {
    label: "Top conversion uplift",
    value: "3x",
    description: "Personalised funnels convert three times better than generic landing pages.",
    icon: BarChart4
  },
  {
    label: "Time to first payout",
    value: "14 days",
    description: "With the right offer, affiliates see their first high-ticket commission in two weeks.",
    icon: Rocket
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Strategic offer selection",
    summary:
      "Align premium products with your audience’s pain points and buying power—relevance drives conversions.",
    icon: Target,
    bullets: [
      "Audit the problems your audience will spend four figures to solve.",
      "Validate demand by analysing reviews, forums, and competitor funnels.",
      "Choose programmes with recurring payouts or tiered bonuses."
    ]
  },
  {
    title: "Trust-building experiences",
    summary:
      "High-ticket buyers expect consultative journeys. Blend storytelling, proof, and personal touchpoints.",
    icon: Handshake,
    bullets: [
      "Share case studies, testimonials, and your own transformation.",
      "Offer discovery calls, workshops, or private communities.",
      "Use marketing automation to nurture leads until they are ready."
    ]
  },
  {
    title: "Conversion-optimised funnels",
    summary:
      "Track every click. Optimise landing pages, emails, and ad creative to guide prospects to the next commitment.",
    icon: Browsers,
    bullets: [
      "Run A/B tests on headlines, offers, and form lengths.",
      "Factor in upsells, cross-sells, and order bumps to boost AOV.",
      "Monitor attribution so you reward the channels driving ROI."
    ]
  },
  {
    title: "Measurement & iteration",
    summary:
      "High-ticket affiliate marketing is data-driven. Iterate based on real performance metrics—not gut feelings.",
    icon: ChartPieSlice,
    bullets: [
      "Review EPC, refund rate, and customer LTV weekly.",
      "Forecast cash flow to reinvest in content, ads, and partnerships.",
      "Document every experiment so wins can be replicated."
    ]
  }
];

const NICHES: Niche[] = [
  {
    name: "Software & SaaS suites",
    description: "Enterprise tools, marketing automation, and analytics platforms pay hefty recurring commissions.",
    icon: Sparkle
  },
  {
    name: "Finance & investment",
    description: "Brokerage accounts, wealth accelerators, and premium advisory services reward affiliates generously.",
    icon: Percent
  },
  {
    name: "Health & wellness",
    description: "Premium supplements, coaching, and biohacking programmes resonate with transformation-focused audiences.",
    icon: Trophy
  },
  {
    name: "Education & masterminds",
    description: "High-ticket courses, certifications, and mentorship programmes provide step-change outcomes.",
    icon: UsersThree
  },
  {
    name: "E-commerce & luxury retail",
    description: "Designer goods, high-end gadgets, and niche subscription boxes deliver strong margins.",
    icon: ShoppingBag
  }
];

const PROGRAMMES: Program[] = [
  {
    name: "Amazon Luxury & Premium Categories",
    highlights: ["Trusted marketplace", "Luxury beauty and fashion payouts", "Broad cross-sell opportunities"]
  },
  {
    name: "ClickBank Elite Offers",
    highlights: ["High-end digital courses", "Automated fulfilment", "Commission tiers for top performers"]
  },
  {
    name: "Shopify Plus Affiliate",
    highlights: ["Advanced e-commerce plans", "Robust marketing resources", "Attractive bounty per referral"]
  },
  {
    name: "Bluehost & Liquid Web Hosting",
    highlights: ["Premium hosting packages", "Recurring commissions", "Strong brand recognition"]
  },
  {
    name: "HubSpot Solutions Partner",
    highlights: ["Inbound marketing suites", "Extensive training academy", "Lucrative retained revenue"]
  },
  {
    name: "ClickFunnels",
    highlights: ["Funnel-building software", "Complementary upsell library", "Community support for affiliates"]
  },
  {
    name: "MaxBounty CPA Network",
    highlights: ["Performance-based offers", "Dedicated account managers", "Diverse verticals for testing"]
  },
  {
    name: "Semrush Affiliate",
    highlights: ["SEO and advertising toolkits", "Recurring bounties", "High brand trust with marketers"]
  },
  {
    name: "Six Figure Mentors",
    highlights: ["Premium training memberships", "Mentorship-focused sell", "Robust personal development resources"]
  }
];

const TIPS: Tip[] = [
  {
    title: "Segment your audience",
    detail:
      "Upload custom audiences, retarget visitors, and tailor messaging for cold, warm, and hot prospects.",
    icon: SelectionBackground
  },
  {
    title: "Automate lead nurture",
    detail:
      "Build email and SMS journeys that educate, overcome objections, and invite prospects to strategy calls.",
    icon: Lightning
  },
  {
    title: "Stay compliant",
    detail:
      "Disclose affiliate relationships, respect geo-restrictions, and align with data privacy regulations.",
    icon: Globe
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "High Ticket Affiliate Marketing Products: Earn Bigger Commissions";
  const description =
    "Learn how to evaluate high-ticket affiliate programmes, choose profitable niches, and build funnels that convert premium buyers.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/blog/high-ticket-affiliate-marketing-products", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type HighTicketPageProps = {
  params: { lang: SupportedLocale };
};

export default function HighTicketPage({ params }: HighTicketPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-teal-50 py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(245,158,11,0.24),transparent_60%),radial-gradient(circle_at_82%_22%,rgba(13,148,136,0.24),transparent_60%),radial-gradient(circle_at_68%_78%,rgba(56,189,248,0.18),transparent_60%)]" />
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
                Affiliate mastery · Revenue acceleration
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                High ticket affiliate marketing products
              </h1>
              <p className="text-lg text-slate-700">
                Premium offers deliver premium payouts. Discover the niches, programmes, and strategies that help affiliates close four-figure deals while building long-term customer value.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="bg-amber-500 text-white hover:bg-amber-400">
                  <Link href={demoHref}>
                    Build your high-ticket funnel
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100">
                  <Link href={contactHref}>
                    Talk to affiliate strategists
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl shadow-amber-100">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-100"
                >
                  <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-amber-600">
                    <metric.icon className="h-5 w-5 text-amber-500" aria-hidden />
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
              <h2 className="text-2xl font-semibold text-slate-900">Why high-ticket affiliate marketing wins</h2>
              <p className="text-sm text-slate-600">
                Traditional affiliate marketing sells low-cost products at scale. High-ticket focuses on fewer, premium conversions—with much bigger returns per sale.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                <Gem className="h-7 w-7 text-amber-600" aria-hidden />
                <h3 className="mt-3 text-base font-semibold text-slate-900">Premium offers</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Luxury goods, advanced software, and elite memberships command higher commission structures.
                </p>
              </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                    <Handshake className="h-7 w-7 text-amber-600" aria-hidden />
                <h3 className="mt-3 text-base font-semibold text-slate-900">Relationship marketing</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Buyers expect trust, proof, and consultation—perfect for affiliates who enjoy education-based sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-100 via-white to-teal-100 p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-slate-900">Four pillars of high-ticket success</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Master these essentials to convert premium prospects consistently and sustainably.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {PILLARS.map((pillar) => (
                <div key={pillar.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <pillar.icon className="h-8 w-8 text-amber-600" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{pillar.summary}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <ArrowRight className="mt-1 h-4 w-4 text-teal-400" aria-hidden />
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
                Hot niches
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">Profitable categories to explore</h2>
              <p className="text-sm text-slate-600">
                These verticals combine high customer lifetime value with established affiliate programmes.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {NICHES.map((niche) => (
                <div key={niche.name} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <div className="flex items-center gap-3">
                    <niche.icon className="h-6 w-6 text-amber-600" aria-hidden />
                    <h3 className="text-base font-semibold text-slate-900">{niche.name}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{niche.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-100 via-white to-teal-100 p-10">
          <h2 className="text-2xl font-semibold text-slate-900">High-ticket affiliate programmes worth testing</h2>
          <p className="mt-2 text-sm text-slate-600">Evaluate commissions, cookie durations, and marketing resources before committing your focus.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {PROGRAMMES.map((programme) => (
              <div key={programme.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{programme.name}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {programme.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <ArrowRight className="mt-1 h-4 w-4 text-amber-400" aria-hidden />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-slate-200 bg-white p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,320px),minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                Pro tips
              </span>
              <h2 className="text-2xl font-semibold text-slate-900">Execute like a top-tier affiliate</h2>
              <p className="text-sm text-slate-600">Sophisticated tactics help you close faster and protect your brand.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {TIPS.map((tip) => (
                <div key={tip.title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                  <div className="flex items-center gap-3">
                    <tip.icon className="h-6 w-6 text-amber-600" aria-hidden />
                    <h3 className="text-base font-semibold text-slate-900">{tip.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{tip.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-100 via-white to-amber-100 p-10 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Turn premium offers into predictable income</h2>
            <p className="text-lg text-slate-600">
              Cloud MLM Software equips affiliates with automation, analytics, and compliant marketing systems—so every launch, webinar, and sales call earns the commission it deserves.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-amber-500 text-white hover:bg-amber-400">
                <Link href={demoHref}>
                  Schedule a high-ticket strategy session
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-100">
                <Link href={pricingHref}>
                  Explore automation bundles
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="ghost" className="text-slate-700 hover:bg-slate-100">
                <Link href={contactHref}>
                  Talk with an affiliate coach
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
