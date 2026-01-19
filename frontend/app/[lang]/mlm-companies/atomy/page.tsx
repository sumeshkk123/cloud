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
  AlertTriangle,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Factory,
  Globe2,
  HeartHandshake,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import {
  ChartLineUp,
  GlobeHemisphereWest,
  Lighthouse,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type CompanyFact = {
  label: string;
  value: string;
  detail: string;
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

type Innovation = {
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

type Critique = {
  title: string;
  description: string;
  mitigation: string;
  source: string;
  icon: IconType;
};

type TrustScore = {
  title: string;
  score: string;
  insight: string;
  methodology: string;
};

const PRIMARY_TRUST_SCORE = {
  score: 64,
  label: "Overall trust score",
  summary:
    "Blends a philanthropic track record, AAA+ business grade, and strong product loyalty with the need to manage binary-balance risk and revenue swings." 
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

const COMPANY_FACTS: CompanyFact[] = [
  {
    label: "Estimated revenue",
    value: "$1.83B (2024 est.)",
    detail:
      "Business for Home’s 2025 Global 500 list places Atomy’s 2024 sales at $1.83 billion with a 7% year-over-year gain." 
  },
  {
    label: "Global reach",
    value: "27 countries",
    detail:
      "Direct Selling News — ATOMY: Bringing Korea to the World (September 27, 2024) details Atomy operating in 27 markets across five continents." 
  },
  {
    label: "Members",
    value: "15M+",
    detail:
      "Direct Selling News — Global Atomy Taking Off (August 22, 2021) cites more than 15 million members across 19 regions with the industry’s lowest return rates in Korea." 
  },
  {
    label: "Guiding motto",
    value: "Absolute Quality, Absolute Price",
    detail:
      "Direct Selling News — ATOMY: Bringing Korea to the World (September 27, 2024) highlights the Absolute Quality, Absolute Price philosophy as Atomy’s consumer-first differentiator." 
  }
];

const VISION_PILLARS: VisionPillar[] = [
  {
    title: "Absolute value promise",
    description:
      "From its launch, Atomy set out to win by pairing premium Korean R&D with mass-market price points so consumers voluntarily repeat purchases.",
    proof:
      "Direct Selling News — ATOMY: Bringing Korea to the World (September 27, 2024).",
    icon: Sparkles
  },
  {
    title: "Consumer-first entrepreneurship",
    description:
      "Field leaders are supported with below-cost tools, travel subsidies, and company-organized academies so they can focus on customer outcomes instead of overhead.",
    proof:
      "Direct Selling News — Global Atomy Taking Off (August 22, 2021).",
    icon: UsersThree
  },
  {
    title: "On-tact community",
    description:
      "The brand’s Success Academy shifted to 4K live broadcasts and VR business tools during the pandemic, reinforcing hybrid engagement as a permanent pillar.",
    proof:
      "Direct Selling News — Global Atomy Taking Off (August 22, 2021).",
    icon: Lighthouse
  },
  {
    title: "Impact-led growth",
    description:
      "Eight-figure giving to Compassion Korea and broader social projects position trust-building as a corporate KPI alongside sales volume.",
    proof:
      "Direct Selling News — Atomy Donates $10.46 Million to Compassion Korea (August 23, 2022).",
    icon: HeartHandshake
  }
];

const STORY_ARC: TimelineEvent[] = [
  {
    era: "2009",
    headline: "Founding with a value mantra",
    detail:
      "Han-Gill Park launches Atomy in Gongju, South Korea with the Absolute Quality, Absolute Price charter driving product selection. Source: Direct Selling News — ATOMY: Bringing Korea to the World (September 27, 2024)." 
  },
  {
    era: "2010–2014",
    headline: "First wave of international expansion",
    detail:
      "The company enters the United States in 2010, adds Japan and Canada in 2011, and establishes a Greater China and ASEAN gateway through Taiwan by 2014. Source: Direct Selling News — ATOMY: Bringing Korea to the World (September 27, 2024)." 
  },
  {
    era: "2020",
    headline: "On-tact pivot keeps growth on track",
    detail:
      "COVID-19 restrictions push Success Academy fully online, drawing 13,000 global attendees and sustaining double-digit growth. Source: Direct Selling News — Global Atomy Taking Off (August 22, 2021)." 
  },
  {
    era: "2022",
    headline: "Compassion Korea partnership scales",
    detail:
      "Atomy’s $10.46M donation lifts cumulative giving to the nonprofit above $22M, funding 33 community projects across Asia. Source: Direct Selling News — Atomy Donates $10.46 Million to Compassion Korea (August 23, 2022)." 
  },
  {
    era: "2024",
    headline: "EU launch caps 27-market footprint",
    detail:
      "Atomy formalizes a European corporation and reinforces ambitions to reach every continent while keeping overseas sales outpacing domestic revenue. Source: Direct Selling News — ATOMY: Bringing Korea to the World (September 27, 2024)." 
  }
];

const COMPENSATION_ELEMENTS: CompensationElement[] = [
  {
    title: "General commissions",
    description:
      "44% of the compensation pool rewards personal and group PV production, payable weekly with a 300-point daily ceiling that protects margins (Source: Atomy Europe — How to Make Money with the Atomy Compensation Plan, December 20, 2023).",
    highlight:
      "Structure forces members to balance left-right legs and manage inventory velocity to avoid hitting the daily cap without payout.",
    icon: ChartLineUp
  },
  {
    title: "Mastership bonuses",
    description:
      "An additional 20% of rewards are split across mastership tiers from Sales Master to Imperial Master, encouraging leadership duplication (Source: Atomy Europe — How to Make Money with the Atomy Compensation Plan, December 20, 2023).",
    highlight:
      "Progression requires meeting both personal PPV thresholds and smaller-leg accumulation, reinforcing depth coaching.",
    icon: ShieldCheck
  },
  {
    title: "Education center support",
    description:
      "Six percent of global sales fund training centers and localized programming so compliance, income claims, and onboarding stay consistent worldwide (Source: Atomy Europe — How to Make Money with the Atomy Compensation Plan, December 20, 2023).",
    highlight:
      "Corporate-subsidized centers help unify messaging as Atomy scales into new regulatory environments.",
    icon: Factory
  },
  {
    title: "Lifetime PV accumulation",
    description:
      "Personal PV never resets and group PV stacks indefinitely, but payout only triggers when both legs cross defined thresholds in the same cycle (Source: Atomy Europe — How to Make Money with the Atomy Compensation Plan, December 20, 2023).",
    highlight:
      "Automation must flag leg imbalance early to prevent breakage under the 300-point daily payout limit.",
    icon: GlobeHemisphereWest
  }
];

const SUCCESS_STORIES: SuccessStory[] = [
  {
    title: "Academic spotlight for HemoHIM",
    description:
      "Korean Holistic Care Academy researchers highlighted HemoHIM’s origin at KAERI and new application research, validating Atomy’s hero SKU.",
    metric: "Forum showcased functional-ingredient certification for immunity support.",
    proof:
      "Direct Selling News — Academic Forum Highlights Atomy’s HemoHIM (December 19, 2024).",
    icon: BadgeCheck
  },
  {
    title: "Omnichannel Success Academy",
    description:
      "Atomy’s 4K broadcast infrastructure kept 9,000 to 13,000 distributors engaged monthly during lockdowns, now embedded as a hybrid growth engine.",
    metric: "First virtual academy drew 9,000 participants with rapid scale to 13,000 globally.",
    proof:
      "Direct Selling News — Global Atomy Taking Off (August 22, 2021).",
    icon: Sparkles
  },
  {
    title: "Compassion Korea impact",
    description:
      "Combined corporate and chairman donations exceeded $22M, underwriting 33 Compassion Korea initiatives across Thailand, the Philippines, and beyond.",
    metric: "$10.46M gift in 2022 lifted total giving past $22M.",
    proof:
      "Direct Selling News — Atomy Donates $10.46 Million to Compassion Korea (August 23, 2022).",
    icon: HeartHandshake
  }
];

const INNOVATION_SIGNALS: Innovation[] = [
  {
    title: "On-tact field enablement",
    description:
      "VR-enhanced academies, multilingual broadcasts, and centrally produced tools let leaders duplicate at scale without travel friction.",
    proof:
      "Direct Selling News — Global Atomy Taking Off (August 22, 2021).",
    icon: Lighthouse
  },
  {
    title: "Science-backed hero product",
    description:
      "Ongoing collaboration with KAERI and Kolmar BNH positions HemoHIM as an individually recognized functional ingredient for immunity.",
    proof:
      "Direct Selling News — Academic Forum Highlights Atomy’s HemoHIM (December 19, 2024).",
    icon: Factory
  },
  {
    title: "Localized go-to-market labs",
    description:
      "Projects like the Go and Meet 100 initiative embed HQ leaders in-field to translate Korea’s playbook for markets from Turkey to Colombia.",
    proof:
      "Direct Selling News — ATOMY: Bringing Korea to the World (September 27, 2024).",
    icon: Globe2
  }
];

const REPUTATION_SIGNALS: ReputationSignal[] = [
  {
    title: "AAA+ business grade",
    detail:
      "Business for Home assigns Atomy its highest AAA+ grade, reflecting strong distributor reviews and digital momentum.",
    evidence:
      "Business for Home — Atomy company profile (accessed October 5, 2025).",
    icon: BarChart3
  },
  {
    title: "Low return rates",
    detail:
      "Industry observers highlight Atomy’s exceptionally low product return ratios in Korea, pointing to genuine consumer pull.",
    evidence:
      "Direct Selling News — Global Atomy Taking Off (August 22, 2021).",
    icon: BadgeCheck
  },
  {
    title: "Impact transparency",
    detail:
      "Regularly publicized philanthropic totals and academic collaborations demonstrate a willingness to document social contributions.",
    evidence:
      "Direct Selling News — Atomy Donates $10.46 Million to Compassion Korea (August 23, 2022).",
    icon: ShieldCheck
  }
];

const CRITICAL_WATCHPOINTS: Critique[] = [
  {
    title: "Revenue volatility after 2021 peak",
    description:
      "Business for Home data shows revenue slipping from $1.84B in 2021 to $1.54B in 2022 before rebounding, signaling sensitivity to market shocks.",
    mitigation:
      "Model scenario plans and bolster demand forecasting for new regions before aggressive product launches.",
    source:
      "Business for Home — Atomy company profile (accessed October 5, 2025).",
    icon: AlertTriangle
  },
  {
    title: "Binary balance pressure",
    description:
      "Atomy’s weekly commissions cap at 300 points and require both legs to hit thresholds simultaneously, creating breakage risk for uneven organizations.",
    mitigation:
      "Deploy leg-balance dashboards and automated alerts so uplines can adjust placement before volume expires.",
    source:
      "Atomy Europe — How to Make Money with the Atomy Compensation Plan (December 20, 2023).",
    icon: AlertTriangle
  },
  {
    title: "Localization demands",
    description:
      "Rapid expansion to 27 countries hinges on HQ actively supporting cultural adaptation through projects like Go and Meet 100.",
    mitigation:
      "Codify localization playbooks and compliance checklists inside launch management tools for every new market.",
    source:
      "Direct Selling News — ATOMY: Bringing Korea to the World (September 27, 2024).",
    icon: AlertTriangle
  }
];

const TRUST_SCORES: TrustScore[] = [
  {
    title: "Compliance posture",
    score: "63/100",
    insight:
      "Transparent philanthropy and low return rates build regulator goodwill, yet multi-region rollouts demand ongoing policy harmonization.",
    methodology:
      "Weighted on social impact disclosures, product satisfaction metrics, and cross-border compliance infrastructure." 
  },
  {
    title: "Market resonance",
    score: "68/100",
    insight:
      "Hero products like HemoHIM backed by scientific forums and 27-market coverage illustrate broad appeal with room for localized assortment testing.",
    methodology:
      "Evaluated via geographic footprint, product recognition, and engagement program adaptability." 
  },
  {
    title: "Opportunity realism",
    score: "58/100",
    insight:
      "Lifetime PV accumulation and high payout ratios are attractive, but binary caps require disciplined field analytics to realize promised earnings.",
    methodology:
      "Assessed on compensation clarity, payout safeguards, and data visibility for field leaders." 
  }
];

const NEWS_HEADLINES: NewsItem[] = [
  {
    title: "Academic forum spotlights HemoHIM science",
    source: "Direct Selling News",
    date: "Dec 19, 2024",
    summary:
      "Researchers from KAERI and partner universities outlined fresh studies validating HemoHIM’s immunity claims and future applications.",
    url: "https://www.directsellingnews.com/2024/12/19/academic-forum-highlights-atomys-hemohim/"
  },
  {
    title: "Inside Atomy’s 27-country expansion",
    source: "Direct Selling News",
    date: "Sep 27, 2024",
    summary:
      "Feature piece tracks Absolute Quality, Absolute Price across Europe, Latin America, and the company’s Go and Meet 100 localization project.",
    url: "https://www.directsellingnews.com/2024/09/27/atomy-bringing-korea-to-the-world/"
  },
  {
    title: "Atomy channels $10.46M to Compassion Korea",
    source: "Direct Selling News",
    date: "Aug 23, 2022",
    summary:
      "Corporate and chairman donations lifted total aid beyond $22M, funding child education and women’s empowerment programs in Asia.",
    url: "https://www.directsellingnews.com/2022/08/23/atomy-donates-10-46-million-to-compassion-korea/"
  }
];

const CLOUD_ROADMAP: CloudPlay[] = [
  {
    title: "Regulatory launch cockpit",
    description:
      "Unify compensation caps, leg-balancing alerts, and market-specific disclosures so your expansion mirrors Atomy’s scale without compliance drift.",
    icon: ShieldCheck
  },
  {
    title: "Scientific storytelling engine",
    description:
      "Surface product evidence, academic citations, and clinical dashboards for hero SKUs like HemoHIM inside distributor experiences.",
    icon: Factory
  },
  {
    title: "Impact transparency hub",
    description:
      "Track philanthropic commitments, ESG metrics, and third-party validations to convert trust-building into shareable proof.",
    icon: HeartHandshake
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Atomy Trust & Compensation Insights";
  const description =
    "Unpack Atomy’s Absolute Quality credo, global expansion milestones, compensation levers, innovation plays, critiques, and advisory trust score.";
  const keywords = [
    "Atomy trust insights",
    "Atomy MLM analysis",
    "Atomy compensation plan",
    "HemoHIM research forum",
    "Cloud MLM Software advisory"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/atomy", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AtomyPageProps = {
  params: { lang: SupportedLocale };
};

export default function AtomyPage({ params }: AtomyPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const trustScoreHref = "#trust-score";
  const timelineHref = "#timeline";
  const trustSnapshotHref = "#trust-insights";
  const trustFill = `${PRIMARY_TRUST_SCORE.score}%`;

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-primary/40 bg-gradient-to-br from-[#00204A]/15 via-white to-[#2AAF61]/12 py-20 dark:border-primary/30 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950/35">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(0,32,74,0.35),transparent_55%),radial-gradient(circle_at_82%_28%,rgba(37,114,171,0.25),transparent_60%),radial-gradient(circle_at_48%_80%,rgba(42,175,97,0.24),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.75fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-1 text-sm font-semibold text-slate-900 backdrop-blur dark:border-white/20 dark:bg-white/10 dark:text-white">
              Inside global consumer-first expansion
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Inside Atomy — Trust & Compensation Insights for Absolute Quality growth.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/80">
                Review Atomy’s Absolute Quality, Absolute Price philosophy, the 27-country expansion timeline, compensation mechanics, success stories, and critiques. Use the advisory trust score to benchmark your own consumer-centered scale plans.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={trustScoreHref}>
                  Trust score outlook
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={timelineHref}>
                  Explore milestones
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:text-foreground">
                <Link href={trustSnapshotHref}>
                  Review trust signals
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="underline-offset-4">
                <Link href={contactHref}>
                  Talk to our specialists
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative grid gap-6 rounded-3xl border border-white/40 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/15 dark:bg-slate-950/70">
            <div className="absolute -right-10 top-14 h-28 w-28 rounded-full bg-[#00204A]/20 blur-3xl" aria-hidden />
            <div className="absolute -left-6 bottom-6 h-24 w-24 rounded-full bg-[#2AAF61]/25 blur-2xl" aria-hidden />
            <header className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary/90 dark:border-primary/30 dark:bg-primary/20 dark:text-primary/80">
                Strategic snapshot
              </span>
              <h2 className="text-lg font-semibold text-foreground">Atomy at a glance</h2>
            </header>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                {COMPANY_FACTS.map((fact) => (
                  <div key={fact.label} className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-100">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">{fact.label}</p>
                    <p className="text-lg font-semibold">{fact.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{fact.detail}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-end justify-between rounded-2xl border border-primary/30 bg-primary/10 p-5 text-primary dark:border-primary/40 dark:bg-primary/20">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary/70">Advisory trust score</span>
                  <p className="text-2xl font-bold">{PRIMARY_TRUST_SCORE.score}/100</p>
                  <p className="text-xs text-primary/80">{PRIMARY_TRUST_SCORE.summary}</p>
                </div>
                <div className="relative h-16 w-16">
                  <svg viewBox="0 0 36 36" className="h-16 w-16">
                    <path
                      className="text-primary/20"
                      strokeWidth="3"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.831"
                    />
                    <path
                      className="text-primary"
                      strokeWidth="3"
                      strokeDasharray={`${trustFill} 100`}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.831"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.8fr)] lg:items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Vision & leadership pillars</h2>
            <p className="text-sm text-muted-foreground">
              Align with Atomy’s consumer-first thesis to calibrate your own product, pricing, and community strategies.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {VISION_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">Proof: {pillar.proof}</span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="timeline" className="container space-y-12 scroll-mt-32">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Timeline of resilience</h2>
          <p className="text-sm text-muted-foreground">
            Trace how Atomy evolved from a Korean launch to a 27-country brand while reinforcing trust levers.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-5">
          {STORY_ARC.map((event) => (
            <article
              key={event.era}
              className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-gradient-to-b from-background via-background to-primary/5 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-primary/10"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-primary/80">{event.era}</span>
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
            Understand Atomy’s payout architecture to inform your own compensation modeling and guardrails.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {COMPENSATION_ELEMENTS.map((element) => {
            const Icon = element.icon;
            return (
              <article
                key={element.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{element.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{element.description}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">Highlight: {element.highlight}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Success stories</h2>
          <p className="text-sm text-muted-foreground">
            Showcase measurable wins that reinforce Atomy’s growth thesis and inform your proof stacking.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {SUCCESS_STORIES.map((story) => {
            const Icon = story.icon;
            return (
              <article
                key={story.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-b from-background via-background to-primary/5 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-primary/10"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{story.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{story.description}</p>
                <span className="text-xs font-semibold uppercase tracking-wide text-primary/80">{story.metric}</span>
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
            Track how Atomy modernizes product validation, training, and localization to stay competitive.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {INNOVATION_SIGNALS.map((signal) => {
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
                <p className="text-sm text-muted-foreground">{signal.description}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">Proof: {signal.proof}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section id="trust-insights" className="container space-y-12 scroll-mt-32">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Trust & reputation signals</h2>
          <p className="text-sm text-muted-foreground">
            Validate the brand with third-party ratings, product retention metrics, and impact transparency.
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
            Translate due diligence findings into advisory scores so stakeholders can gauge confidence and mitigation priorities.
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
          Scores are advisory estimates to support trust and risk workshops; layer them with legal counsel guidance and market-specific compliance reviews.
        </p>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Critiques & lessons</h2>
          <p className="text-sm text-muted-foreground">
            Understand where Atomy faces pressure so you can pre-empt similar challenges.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CRITICAL_WATCHPOINTS.map((critique) => {
            const Icon = critique.icon;
            return (
              <article
                key={critique.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-primary/10"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{critique.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{critique.description}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">Mitigation: {critique.mitigation}</span>
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
            Monitor the latest external coverage to keep your competitive intelligence current.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {NEWS_HEADLINES.map((item) => (
            <article
              key={item.url}
              className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:border-primary/40 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/70"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-primary/80">{item.source}</span>
                <p className="text-xs text-muted-foreground">{item.date}</p>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.summary}</p>
              <Button asChild variant="link" className="w-fit px-0 text-primary">
                <Link href={item.url} rel="nofollow noopener noreferrer" target="_blank">
                  Read article
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How Cloud MLM Software helps</h2>
          <p className="text-sm text-muted-foreground">
            Translate Atomy’s lessons into platform capabilities that future-proof your launch or migration.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CLOUD_ROADMAP.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{play.description}</p>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href={contactHref}>
              Schedule a strategy session
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={pricingHref}>
              Explore pricing
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: SupportedLocale): Locale {
  const locale = i18n.locales.find((item) => item.code === lang);

  if (!locale) {
    return i18n.defaultLocale;
  }

  if (!isSupportedLocale(locale.code)) {
    return i18n.defaultLocale;
  }

  return locale;
}
