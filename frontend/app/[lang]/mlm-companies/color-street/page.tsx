import type { CSSProperties, ComponentType } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  CalendarClock,
  Factory,
  FileText,
  FlaskConical,
  Globe2,
  HandCoins,
  HeartHandshake,
  HeartPulse,
  Layers,
  LineChart,
  Megaphone,
  RefreshCcw,
  Share2,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  Users
} from "lucide-react";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type CompanyFact = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type VisionPillar = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type TimelineEvent = {
  era: string;
  headline: string;
  detail: string;
};

type CompensationElement = {
  title: string;
  description: string;
  highlight: string;
  icon: IconType;
};

type SuccessStory = {
  title: string;
  description: string;
  metric: string;
  proof: string;
  icon: IconType;
};

type InnovationSignal = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type ReputationSignal = {
  title: string;
  detail: string;
  evidence: string;
  icon: IconType;
};

type TrustScore = {
  title: string;
  score: string;
  insight: string;
  methodology: string;
};

type Critique = {
  title: string;
  description: string;
  mitigation: string;
  source: string;
  icon: IconType;
};

type NewsItem = {
  title: string;
  source: string;
  date: string;
  summary: string;
  url: string;
};

type CloudPlay = {
  title: string;
  description: string;
  icon: IconType;
};

const PRIMARY_TRUST_SCORE = {
  score: 60,
  label: "Overall trust score",
  summary:
    "Composite read on Color Street's compliance safeguards, consumer sentiment, and income transparency for beauty-focused social selling." 
};

const COMPANY_FACTS: CompanyFact[] = [
  {
    label: "Cumulative commissions",
    value: "$820M+",
    description: "Lifetime stylist payouts highlighted in Direct Selling News' September 2024 Color Street profile.",
    icon: HandCoins
  },
  {
    label: "Nail strips shipped",
    value: "100M+",
    description: "Global nail strip sets sold across North America and Germany by 2024 (DSN global beauty brand spotlight).",
    icon: Sparkles
  },
  {
    label: "Founded",
    value: "2017",
    description: "Direct selling debut with 62 designs and 1,400 founding Stylists (Color Street history & DSN coverage).",
    icon: CalendarClock
  },
  {
    label: "Headquarters",
    value: "Clifton, NJ",
    description: "Owned U.S. manufacturing keeps quality and release cadence under direct control (DSN September 2024).",
    icon: Factory
  },
  {
    label: "Global reach",
    value: "US • Canada • Germany",
    description: "Canada launch in 2021 and Germany expansion in 2023 supported by a distributed R&D lab network (DSN September 2024).",
    icon: Globe2
  },
  {
    label: "Omnichannel expansion",
    value: "TikTok Shop 2025",
    description: "Creator-led marketplace launched to complement stylist-led selling (Direct Selling News, April 24 2025).",
    icon: Megaphone
  }
];

const VISION_PILLARS: VisionPillar[] = [
  {
    title: "Owned manufacturing advantage",
    description:
      "Color Street controls design, production, and weekly product drops from its U.S. facilities, keeping quality and supply velocity aligned with stylist demand.",
    proof: "Direct Selling News, 'Color Street: Building a global beauty brand.' September 1, 2024.",
    icon: Factory
  },
  {
    title: "Omnichannel field enablement",
    description:
      "A two-tier compensation redesign and creator partnerships are meant to feed stylists with warmer leads while modernising the customer experience.",
    proof: "Direct Selling News, January 31 and May 30, 2025 compensation plan updates; TikTok Shop announcement April 24, 2025.",
    icon: Megaphone
  },
  {
    title: "Cause-led community",
    description:
      "Color Street Foundation campaigns mobilise stylists and customers around breast cancer research, anti-trafficking work, and other social causes.",
    proof: "Direct Selling News philanthropic spotlights, August 2 and October 13, 2023.",
    icon: HeartHandshake
  },
  {
    title: "Global R&D pipeline",
    description:
      "Lab teams in South Korea, Canada, France, Germany, and Italy co-develop new formulas like the tri-flora Melt Away balm to expand the brand beyond nails.",
    proof: "Direct Selling News, September 1, 2024 profile detailing Color Street's research network.",
    icon: FlaskConical
  }
];

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    era: "2007",
    headline: "Incoco production breakthrough",
    detail:
      "Founder Fa Park fulfils a one-million-strip order for Avon, proving the scalability of his patented nail polish strips (DSN, June 2019)."
  },
  {
    era: "2017",
    headline: "Color Street direct selling launch",
    detail:
      "62 nail designs and 1,400 Stylists kick off the brand's network marketing era with in-person sampling and Color 10 activity goals (DSN, June 2019)."
  },
  {
    era: "2021-2023",
    headline: "International footprint established",
    detail:
      "Canada goes live in 2021, Germany follows in 2023, and the company adds global R&D labs to fuel localized product innovation (DSN, September 2024)."
  },
  {
    era: "January 2025",
    headline: "Compensation simplified to 40/15 core",
    detail:
      "Color Street retires an 18-rank structure for a retail-first, two-tier plan paying up to 40% on personal volume and 15% on Level 1 (DSN, January 31 2025)."
  },
  {
    era: "April-August 2025",
    headline: "Creator commerce & Attract FX debut",
    detail:
      "TikTok Shop launches to pair stylists with content creators, while Attract FX magnetic nail strips showcase ongoing product innovation (DSN, April 24 & August 22 2025)."
  }
];

const COMPENSATION_ELEMENTS: CompensationElement[] = [
  {
    title: "Retail-first 40/15 core",
    description:
      "Stylists earn up to 40% on personal retail volume and 15% on personally enrolled stylists, reinforcing verified customer orders over recruitment.",
    highlight: "New structure effective March 1, 2025 after a company-wide review of Q4 2024 sales (Direct Selling News, January 31 2025).",
    icon: LineChart
  },
  {
    title: "Tiered level overrides",
    description:
      "July 2025 enhancements unlock an additional 3% on Level 2 and 2% on Level 3 as stylists demonstrate balanced frontline development.",
    highlight: "Updates aim to reward team builders sooner with smaller early milestones (Direct Selling News, May 30 2025).",
    icon: Layers
  },
  {
    title: "Omnichannel demand flywheel",
    description:
      "Creator partnerships, social media campaigns, and TikTok Shop activations are positioned to drive fresh customers back to stylists' funnels.",
    highlight: "Fa Park frames omnichannel moves as support for stylists while modernising brand discovery (Direct Selling News, April 24 2025).",
    icon: Megaphone
  },
  {
    title: "Transparent income disclosures",
    description:
      "Annual statements map outcomes by rank—63% of paid stylists averaged $4 per month in 2023, with weighted annual income of $1,378 excluding fees.",
    highlight: "Color Street's published disclosures help set realistic expectations for prospects and compliance teams (Color Street 2023 Income Disclosure Statement).",
    icon: FileText
  }
];

const SUCCESS_STORIES: SuccessStory[] = [
  {
    title: "100M nail strips milestone",
    description:
      "Color Street's owned manufacturing and weekly drops have moved more than 100 million nail strips since launch, building a category-leading brand.",
    metric: "100M+ strips sold; $820M+ paid to stylists",
    proof: "Direct Selling News, September 1 2024 global brand feature.",
    icon: Sparkles
  },
  {
    title: "Breast cancer impact",
    description:
      "Limited-edition Pink Out designs and Color Street Foundation grants fuel awareness and research partnerships each autumn.",
    metric: "$35K donated in 2023 to BCRF & Living Beyond Breast Cancer",
    proof: "Direct Selling News, October 13 2023 philanthropic update.",
    icon: HeartPulse
  },
  {
    title: "Human trafficking prevention",
    description:
      "The A Path Forward strip funded donations supporting Refuge for Women and The McCain Institute during World Day Against Trafficking in Persons.",
    metric: "$40K contributed across two NGOs in 2023",
    proof: "Direct Selling News, August 2 2023 Color Street Foundation coverage.",
    icon: ShieldCheck
  }
];

const INNOVATION_SIGNALS: InnovationSignal[] = [
  {
    title: "Attract FX magnetic effects",
    description:
      "New metallic-infused strips align pigments with magnetic fields for 3D shimmer without extra tools, refreshing the hero product line.",
    proof: "Direct Selling News, August 22 2025 launch report.",
    icon: Sparkles
  },
  {
    title: "TikTok Shop creator program",
    description:
      "An official TikTok presence enlists creators to showcase looks, expanding brand reach while routing conversions back to stylists.",
    proof: "Direct Selling News, April 24 2025 announcement.",
    icon: Share2
  },
  {
    title: "Global lab network",
    description:
      "Cross-continent labs collaborate on cosmetics, hand care, and balms—including the patent-pending tri-flora Melt Away cleanser—broadening product mix.",
    proof: "Direct Selling News, September 1 2024 company profile.",
    icon: FlaskConical
  }
];

const REPUTATION_SIGNALS: ReputationSignal[] = [
  {
    title: "Published 2023 income disclosure",
    detail:
      "Color Street publicly breaks down average and median earnings by rank, including fee-adjusted outcomes for U.S. and Canadian stylists.",
    evidence: "Color Street Income Disclosure Statement (January 1–December 31, 2023).",
    icon: FileText
  },
  {
    title: "Controlled manufacturing footprint",
    detail:
      "All nail strips are produced in Color Street's U.S. facility with proprietary equipment, helping ensure consistency and compliance oversight.",
    evidence: "Direct Selling News, September 1 2024 profile.",
    icon: Factory
  },
  {
    title: "Color Street Foundation transparency",
    detail:
      "Recurring donations to medical research and social impact partners demonstrate an established CSR cadence that supports brand trust.",
    evidence: "Direct Selling News philanthropic coverage, August & October 2023.",
    icon: HeartHandshake
  }
];

const TRUST_SCORES: TrustScore[] = [
  {
    title: "Compliance posture",
    score: "68/100",
    insight:
      "Income disclosures, owned production, and a retail-first plan signal maturing governance, though rapid product cycles still demand rigorous QA.",
    methodology: "Weighted on disclosure transparency, manufacturing control, and compensation alignment with retail consumption."
  },
  {
    title: "Consumer sentiment",
    score: "52/100",
    insight:
      "Trustpilot's 2.7/5 rating captures mixed reviews—loyal fans praise longevity while others cite thinner strips and customer service hurdles.",
    methodology: "Blend of Trustpilot reviews, community feedback, and product quality commentary."
  },
  {
    title: "Opportunity realism",
    score: "58/100",
    insight:
      "Most stylists earn modest supplemental income; coaching must keep expectations anchored in personal retail and omnichannel demand generation.",
    methodology: "Assessed via 2023 income disclosure data, compensation plan mechanics, and training investments."
  }
];

const CRITICAL_WATCHPOINTS: Critique[] = [
  {
    title: "Product consistency backlash",
    description:
      "Recent Trustpilot feedback highlights thinner strips and adhesion issues, risking churn if launch batches vary in quality.",
    mitigation:
      "Tighten batch QA, publish formulation updates, and arm stylists with troubleshooting scripts before new collections drop.",
    source: "Trustpilot.com/colorstreet.com reviews (2023-2025).",
    icon: AlertTriangle
  },
  {
    title: "Field adjustment to simplified plan",
    description:
      "Leaders transitioning from 18 ranks to a two-tier structure may need new playbooks for leg balance and retail coaching.",
    mitigation:
      "Model earnings scenarios, deliver compliance-led training, and monitor leg health dashboards post March 2025 go-live.",
    source: "Direct Selling News, January 31 2025 compensation plan update.",
    icon: RefreshCcw
  },
  {
    title: "Earnings concentration at base ranks",
    description:
      "63% of paid stylists averaged $4 per month excluding fees in 2023, underscoring the need for realistic onboarding narratives.",
    mitigation:
      "Embed income disclosure coaching, highlight customer acquisition KPIs, and align incentives to verified retail activity.",
    source: "Color Street 2023 Income Disclosure Statement.",
    icon: TrendingDown
  }
];

const NEWS_HEADLINES: NewsItem[] = [
  {
    title: "Color Street Enhances Compensation Plan – Expands Earning Potential for Stylists",
    source: "Direct Selling News",
    date: "May 30, 2025",
    summary:
      "Details July enhancements that add Level 2 and Level 3 overrides while lowering thresholds for stylists to reach maximum retail commissions.",
    url: "https://www.directsellingnews.com/2025/05/30/color-street-enhances-compensation-plan-expands-earning-potential-for-stylists/"
  },
  {
    title: "Color Street Launches TikTok Shop",
    source: "Direct Selling News",
    date: "April 24, 2025",
    summary:
      "Announces a creator commerce strategy designed to meet trend-driven buyers where they are and funnel demand back to stylists.",
    url: "https://www.directsellingnews.com/2025/04/24/color-street-launches-tiktok-shop/"
  },
  {
    title: "Color Street Launches Magnetic Nail Polish Strips",
    source: "Direct Selling News",
    date: "August 22, 2025",
    summary:
      "Introduces Attract FX metallic strips that lock pigments with magnetic fields for an elevated at-home manicure experience.",
    url: "https://www.directsellingnews.com/2025/08/22/color-street-launches-magnetic-nail-polish-strips/"
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Retail compensation digital twin",
    description:
      "Simulate 40/15 payouts, Level 2-3 overrides, and omnichannel incentives before rollout to protect margin and compliance.",
    icon: LineChart
  },
  {
    title: "Sentiment & quality intelligence",
    description:
      "Aggregate Trustpilot, support tickets, and sample feedback to catch adhesion issues early and automate recall messaging.",
    icon: ShieldCheck
  },
  {
    title: "Impact storytelling dashboard",
    description:
      "Track Color Street Foundation donations, campaign KPIs, and shareable proof points for stylists and regulators.",
    icon: HeartHandshake
  },
  {
    title: "Creator-to-stylist routing",
    description:
      "Map creator campaigns to stylist territories, monitor conversion handoffs, and optimise omnichannel lead assignments.",
    icon: Users
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Color Street Trust & Compensation Insights";
  const description =
    "Explore Color Street's brand story, compensation redesign, innovation roadmap, and risk signals—then see how Cloud MLM Software can support compliant beauty launches.";
  const keywords = [
    "Color Street trust insights",
    "Color Street compensation analysis",
    "Color Street TikTok Shop strategy",
    "MLM beauty compliance guidance",
    "Cloud MLM Software for cosmetics"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/color-street", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ColorStreetPageProps = {
  params: { lang: SupportedLocale };
};

export default function ColorStreetPage({ params }: ColorStreetPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const trustInsightsHref = "#trust-insights";
  const timelineHref = "#timeline";
  const trustScoreHref = "#trust-score";

  const gaugeAngle = (PRIMARY_TRUST_SCORE.score / 100) * 360;
  const gaugeStyle: CSSProperties = {
    background: `conic-gradient(rgba(14, 165, 233, 0.8) 0deg ${gaugeAngle}deg, rgba(148, 163, 184, 0.25) ${gaugeAngle}deg 360deg)`
  };

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-primary/30 bg-gradient-to-br from-rose-50 via-white to-sky-50 py-20 dark:border-primary/20 dark:from-slate-950 dark:via-slate-950 dark:to-purple-950/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_16%,rgba(236,72,153,0.22),transparent_55%),radial-gradient(circle_at_84%_24%,rgba(79,70,229,0.28),transparent_60%),radial-gradient(circle_at_52%_82%,rgba(14,165,233,0.18),transparent_65%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-primary/30 dark:bg-primary/20 dark:text-foreground">
              Beauty & social selling intelligence
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Color Street: real nail artistry, omnichannel stylists, and compliance guardrails for modern social selling.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/80">
                Analyse Color Street&apos;s evolution—from Fa Park&apos;s manufacturing breakthrough to today&apos;s creator-enabled, retail-first strategy. Review its vision pillars, compensation redesign, innovation signals, and critiques to inform your next beauty-focused MLM move with Cloud MLM Software.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={trustInsightsHref}>
                  Explore trust signals
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/25 dark:text-foreground">
                <Link href={timelineHref}>
                  Map the timeline
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary/10 dark:border-primary/30 dark:text-foreground"
              >
                <Link href={trustScoreHref}>
                  View trust score
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="underline-offset-4">
                <Link href={contactHref}>
                  Talk to Cloud MLM Software
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative grid gap-6 rounded-3xl border border-white/50 bg-white/90 p-6 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-slate-950/80">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wide text-primary">Trust outlook</span>
                <p className="text-lg font-semibold text-foreground">{PRIMARY_TRUST_SCORE.label}</p>
              </div>
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-primary/30 bg-primary/10 p-2" style={gaugeStyle}>
                <div className="flex h-full w-full items-center justify-center rounded-full bg-background text-2xl font-bold text-primary">
                  {PRIMARY_TRUST_SCORE.score}
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{PRIMARY_TRUST_SCORE.summary}</p>
            <div className="grid gap-4">
              {COMPANY_FACTS.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div key={fact.label} className="flex items-start gap-3 rounded-2xl border border-slate-200/60 bg-white/80 p-4 dark:border-slate-800/80 dark:bg-slate-900/60">
                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-foreground">{fact.label}</p>
                      <p className="text-sm text-primary">{fact.value}</p>
                      <p className="text-xs text-muted-foreground">{fact.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="grid gap-2 rounded-2xl border border-primary/40 bg-primary/5 p-4 text-sm dark:border-primary/30 dark:bg-primary/10">
              <span className="font-semibold text-primary">Need a beauty-trust blueprint?</span>
              <p className="text-muted-foreground">
                Cloud MLM Software delivers compliant funnels, omnichannel analytics, and stylists tools tailored for cosmetics ventures.
              </p>
              <Button asChild size="sm" className="justify-start px-0 text-primary hover:text-primary/80" variant="ghost">
                <Link href={pricingHref}>
                  View platform capabilities
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Vision & brand pillars</h2>
          <p className="text-sm text-muted-foreground">
            The pillars shaping Color Street&apos;s strategy show how manufacturing discipline, omnichannel storytelling, and cause-led community building converge.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {VISION_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </div>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">Proof: {pillar.proof}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section id="timeline" className="container space-y-12 scroll-mt-32">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Timeline of resilience</h2>
          <p className="text-sm text-muted-foreground">
            Milestones highlight how a manufacturing patent scaled into a global beauty brand navigating compensation reform and creator commerce.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-5">
          {TIMELINE_EVENTS.map((event) => (
            <article
              key={event.headline}
              className="col-span-1 flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">{event.era}</span>
              <h3 className="text-lg font-semibold text-foreground">{event.headline}</h3>
              <p className="text-sm text-muted-foreground">{event.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Compensation breakdown</h2>
          <p className="text-sm text-muted-foreground">
            Understand the mechanics behind Color Street&apos;s simplified retail-first plan and the signals leadership uses to keep stylists aligned with customer value.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {COMPENSATION_ELEMENTS.map((element) => {
            const Icon = element.icon;
            return (
              <article
                key={element.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{element.title}</h3>
                  <p className="text-sm text-muted-foreground">{element.description}</p>
                </div>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{element.highlight}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Success stories</h2>
          <p className="text-sm text-muted-foreground">
            Evidence of Color Street&apos;s market traction and philanthropy demonstrates how storytelling and impact fuel trust.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SUCCESS_STORIES.map((story) => {
            const Icon = story.icon;
            return (
              <article
                key={story.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{story.title}</h3>
                    <p className="text-xs text-primary/80 dark:text-primary/70">{story.metric}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{story.description}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">Proof: {story.proof}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Innovation signals</h2>
          <p className="text-sm text-muted-foreground">
            Track how Color Street modernises product storytelling and distribution while keeping stylists at the centre.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {INNOVATION_SIGNALS.map((signal) => {
            const Icon = signal.icon;
            return (
              <article
                key={signal.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">{signal.title}</h3>
                    <p className="text-xs text-primary/80 dark:text-primary/70">{signal.proof}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{signal.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="trust-insights" className="container space-y-12 scroll-mt-32">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Trust & reputation signals</h2>
          <p className="text-sm text-muted-foreground">
            These indicators showcase how Color Street balances transparency, operational control, and community impact.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {REPUTATION_SIGNALS.map((signal) => {
            const Icon = signal.icon;
            return (
              <article
                key={signal.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{signal.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{signal.detail}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">Evidence: {signal.evidence}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section id="trust-score" className="container space-y-12 scroll-mt-32">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Trust score snapshot</h2>
          <p className="text-sm text-muted-foreground">
            Use these advisory scores as starting points for due diligence workshops and product launch planning.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {TRUST_SCORES.map((score) => (
            <article
              key={score.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-primary/10"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-foreground">{score.title}</h3>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary dark:border-primary/40 dark:bg-primary/15">
                  {score.score}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{score.insight}</p>
              <span className="text-xs uppercase tracking-wide text-muted-foreground">Methodology: {score.methodology}</span>
            </article>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Scores are advisory estimates to spark conversations with legal, compliance, and field leadership teams. Pair them with current local counsel guidance before market expansion.
        </p>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Critiques & lessons</h2>
          <p className="text-sm text-muted-foreground">
            Balance the highlights with known friction points to inform mitigation plans.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CRITICAL_WATCHPOINTS.map((critique) => {
            const Icon = critique.icon;
            return (
              <article
                key={critique.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{critique.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{critique.description}</p>
                <p className="text-sm font-medium text-primary dark:text-primary/80">Mitigation: {critique.mitigation}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">Source: {critique.source}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Recent headlines</h2>
          <p className="text-sm text-muted-foreground">
            Monitor fresh coverage for strategy, product, and field implications.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {NEWS_HEADLINES.map((item) => (
            <article
              key={item.url}
              className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/70"
            >
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wide text-primary">{item.source} • {item.date}</span>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{item.summary}</p>
              <Button asChild size="sm" variant="ghost" className="mt-auto justify-start px-0 text-primary hover:text-primary/80">
                <Link href={item.url} rel="nofollow noopener noreferrer" target="_blank">
                  Read more
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How Cloud MLM Software helps</h2>
            <p className="text-sm text-muted-foreground">
              Translate Color Street&apos;s learnings into your own launch playbook with a platform built for compliance, omnichannel selling, and trust storytelling.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {CLOUD_PLAYS.map((play) => {
              const Icon = play.icon;
              return (
                <article
                  key={play.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{play.title}</h3>
                  <p className="text-sm text-muted-foreground">{play.description}</p>
                </article>
              );
            })}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 rounded-3xl border border-primary/30 bg-primary/5 p-6 dark:border-primary/20 dark:bg-primary/10">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">Build your next beauty trust blueprint</h3>
            <p className="text-sm text-muted-foreground">
              Partner with Cloud MLM Software to launch stylists dashboards, omnichannel attribution, and compliance tooling tailored to cosmetics ventures.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href={contactHref}>
                Book a working session
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={pricingHref}>
                Review pricing & bundles
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
