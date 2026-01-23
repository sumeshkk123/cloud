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
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Factory,
  Globe2,
  HeartHandshake,
  Lightbulb,
  Recycle,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import {
  ChartLineUp,  GlobeHemisphereEast,
  Handshake,
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
  score: 68,
  label: "Overall trust score",
  summary:
    "A 12-year DJSI streak and closed-loop ESG execution earn credibility, balanced against activist scrutiny and lessons from marathon patent litigation."
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
    label: "Revenue",
    value: "$1.7B (H1 2025)",
    detail:
      "Direct Selling News reported Coway delivered $1.7B in first-half 2025 revenue, a 16.8% year-over-year increase on the rental-led model."
  },
  {
    label: "Rental accounts",
    value: "+160k net in Q2",
    detail:
      "The same briefing highlighted 160,000 net rental additions in Q2 2025 as Icon Pro and NOBLE launches accelerated subscriber growth."
  },
  {
    label: "Employees",
    value: "4,506 (2024)",
    detail:
      "Coway’s 2024 Sustainability Report lists 4,506 global employees, including 4,465 locally hired team members supporting operations."
  },
  {
    label: "ESG recognition",
    value: "12-year DJSI APAC",
    detail:
      "Direct Selling News confirmed Coway kept its place on the Dow Jones Sustainability Asia Pacific Index for the 12th consecutive year."
  }
];

const VISION_PILLARS: VisionPillar[] = [
  {
    title: "Best Life Solution ethos",
    description:
      "Coway positions itself as the “Best Life Solution Company,” aligning stakeholder trust, mutual growth, and everyday wellness experiences.",
    proof: "Direct Selling News — Coway Listed in Dow Jones Sustainability Asia Pacific Index (Jan 2025).",
    icon: Sparkles
  },
  {
    title: "Circular stewardship",
    description:
      "Sustainability reporting details a closed-loop system that feeds recycled plastics from returned devices into mass production runs.",
    proof: "Direct Selling News — Coway Releases 2024 Sustainability Report (Aug 2025).",
    icon: Recycle
  },
  {
    title: "Community air-care",
    description:
      "Campaigns delivering purifiers and maintenance to environmentally vulnerable households reinforce the brand’s social impact thesis.",
    proof: "Direct Selling News — Coway Releases 2024 Sustainability Report (Aug 2025).",
    icon: HeartHandshake
  },
  {
    title: "R&D powered scaling",
    description:
      "Leadership underscores sustained R&D investment to extend the Icon purifier line and BEREX wellness hardware for global markets.",
    proof: "Direct Selling News — Coway General Meeting Reaffirms Board Independence (Apr 2025).",
    icon: Lightbulb
  }
];

const STORY_ARC: TimelineEvent[] = [
  {
    era: "1989",
    headline: "Founded in Seoul",
    detail:
      "Coway opens on May 2, 1989 as a water and air care specialist, laying the groundwork for today’s subscription-driven model."
  },
  {
    era: "2007",
    headline: "Refurbished rentals introduced",
    detail:
      "The sustainability report credits Coway with launching a refurbished product system in 2007 to cut waste and extend asset life."
  },
  {
    era: "2021",
    headline: "ESG Committee formalised",
    detail:
      "Board governance evolves with a formal ESG Committee charged with carbon-neutral roadmaps and transparency now lauded by DJSI."
  },
  {
    era: "2025",
    headline: "Icon Pro wins 16th IDEA award",
    detail:
      "The Icon Pro Water Purifier secures Coway’s 16th consecutive IDEA Design Award for its intuitive LCD guidance and recipe-led dispensing."
  },
  {
    era: "2025",
    headline: "Supreme Court resolves patent case",
    detail:
      "South Korea’s Supreme Court ends an 11-year Chungho Nais dispute, affirming Coway’s differentiated ice purifier technology."
  }
];

const COMPENSATION_ELEMENTS: CompensationElement[] = [
  {
    title: "Rental-first recurring commissions",
    description:
      "Field earnings hinge on long-term appliance rentals, with growth driven by purifier launches and subscription retention.",
    highlight: "Direct Selling News — Coway Reports Q2 2025 Financial Results (Aug 2025) noted 160,000 net rental additions in the quarter.",
    icon: ChartLineUp
  },
  {
    title: "Commissioned Cody specialists",
    description:
      "Codys and Home Care Doctors operate as commissioned sales associates, blending service visits with compliant upgrade guidance.",
    highlight: "Coway Sustainability Report 2024 documents 5,926 commissioned associates in dedicated information-security training.",
    icon: UsersThree
  },
  {
    title: "IoCare-driven service loops",
    description:
      "Real-time Cody matching, AR catalogues, and product history dashboards equip teams to upsell care plans and raise visit productivity.",
    highlight: "Coway Sustainability Report 2024 details the Real-Time Cody Matching Service and digital lifecycle tracking for customers.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Governance-linked performance unlocks",
    description:
      "Board focus on shareholder returns and R&D resourcing sustains budgets for bonuses tied to verified growth metrics.",
    highlight: "Direct Selling News — Coway General Meeting Reaffirms Board Independence (Apr 2025) emphasised reinforcing returns alongside innovation spend.",
    icon: Handshake
  }
];

const SUCCESS_STORIES: SuccessStory[] = [
  {
    title: "Design excellence streak",
    description:
      "Icon Pro’s touch-screen guidance, recipe mode, and sensor diagnostics earned Coway its 16th consecutive IDEA Design Award.",
    metric: "16-year IDEA award run",
    proof: "Direct Selling News — Coway Honored at 2025 IDEA Design Awards (Sept 2025).",
    icon: BadgeCheck
  },
  {
    title: "Closed-loop ESG execution",
    description:
      "Recycled plastics from returned appliances now loop into mass production, shrinking waste and boosting ESG credibility.",
    metric: "Closed-loop plastics deployed in 2024",
    proof: "Direct Selling News — Coway Releases 2024 Sustainability Report (Aug 2025).",
    icon: Sparkles
  },
  {
    title: "Double-digit top-line expansion",
    description:
      "Revenue climbed 16.3% year-over-year in Q2 2025, with operating profit up 14.9% amid strong rental momentum across Asia.",
    metric: "$905M Q2 2025 revenue",
    proof: "Direct Selling News — Coway Reports Q2 2025 Financial Results (Aug 2025).",
    icon: Globe2
  }
];

const INNOVATION_SIGNALS: Innovation[] = [
  {
    title: "Icon Pro smart guidance",
    description:
      "Full-screen LCD controls, recipe presets, and proactive troubleshooting deliver a premium, guided purification experience.",
    proof: "Direct Selling News — Coway Honored at 2025 IDEA Design Awards (Sept 2025).",
    icon: Lightbulb
  },
  {
    title: "Closed-loop materials program",
    description:
      "Recycled plastics from retrieval campaigns feed directly into new production, aligning manufacturing with ESG deliverables.",
    proof: "Direct Selling News — Coway Releases 2024 Sustainability Report (Aug 2025).",
    icon: Recycle
  },
  {
    title: "Real-time service orchestration",
    description:
      "Digital Cody matching, AR catalogues, and lifecycle dashboards synchronise sales, service, and retention playbooks.",
    proof: "Coway Sustainability Report 2024 — Customer Satisfaction Services section.",
    icon: Factory
  }
];

const REPUTATION_SIGNALS: ReputationSignal[] = [
  {
    title: "DJSI Asia Pacific member",
    detail:
      "Twelve consecutive years on the DJSI Asia Pacific Index signal sustained ESG governance and disclosure discipline.",
    evidence: "Direct Selling News — Coway Listed in Dow Jones Sustainability Asia Pacific Index (Jan 2025).",
    icon: ShieldCheck
  },
  {
    title: "ESG Committee oversight",
    detail:
      "A board-level ESG Committee coordinates carbon-neutral roadmaps, stakeholder engagement, and transparent reporting cadence.",
    evidence: "Direct Selling News — Coway Releases 2024 Sustainability Report (Aug 2025).",
    icon: BadgeCheck
  },
  {
    title: "Field data protection drills",
    detail:
      "5,926 commissioned associates completed targeted information-security training, reinforcing compliant customer interactions.",
    evidence: "Coway Sustainability Report 2024 — Information Security Training data.",
    icon: HeartHandshake
  }
];

const CRITICAL_WATCHPOINTS: Critique[] = [
  {
    title: "Activist governance pressure",
    description:
      "Align Partners’ push for cumulative voting underscores investor expectations for transparency and balanced board influence.",
    mitigation:
      "Model scenario planning for activist proposals, document governance KPIs, and keep investor communications real-time.",
    source: "Direct Selling News — Coway General Meeting Reaffirms Board Independence (Apr 2025).",
    icon: AlertTriangle
  },
  {
    title: "Long-horizon IP litigation",
    description:
      "The 11-year patent battle with Chungho Nais shows how core technology can remain under legal scrutiny for a decade plus.",
    mitigation:
      "Map competitor patents, pre-negotiate cross-licensing guardrails, and automate evidence capture across engineering releases.",
    source: "BusinessKorea — Supreme Court Sides with Coway in 11-year Legal Battle with Chungho Nais (May 2025).",
    icon: Factory
  },
  {
    title: "Commissioned network compliance",
    description:
      "Thousands of commissioned associates handle customer data daily, increasing exposure to privacy lapses and messaging drift.",
    mitigation:
      "Extend LMS certification, embed secure messaging defaults, and audit Cody visit playbooks alongside incentive payouts.",
    source: "Coway Sustainability Report 2024 — Information Security Training metrics.",
    icon: ShieldCheck
  }
];

const TRUST_SCORES: TrustScore[] = [
  {
    title: "Governance resilience",
    score: "68/100",
    insight:
      "DJSI recognition and a dedicated ESG Committee build trust, yet activist demands mean governance narratives must stay proactive.",
    methodology:
      "Weighted on index recognitions, board structures, and recent shareholder engagement dynamics."
  },
  {
    title: "Product integrity",
    score: "66/100",
    insight:
      "IDEA accolades and closed-loop design affirm quality, while litigation history highlights the need for rigorous IP monitoring.",
    methodology:
      "Assessed via award cadence, sustainability reporting, and material legal proceedings affecting product claims."
  },
  {
    title: "Channel scalability",
    score: "64/100",
    insight:
      "Rental momentum and digital IoCare tools scale revenue, but compliance programs must keep pace with a vast commissioned force.",
    methodology:
      "Blend of subscriber growth, digital enablement maturity, and associate compliance investments."
  }
];

const NEWS_HEADLINES: NewsItem[] = [
  {
    title: "Coway Honored at 2025 IDEA Design Awards",
    source: "Direct Selling News",
    date: "September 19, 2025",
    summary:
      "Icon Pro’s LCD interface, recipe mode, and sensor diagnostics earned Coway its 16th straight IDEA accolade for design excellence.",
    url: "https://www.directsellingnews.com/2025/09/19/coway-honored-at-2025-idea-design-awards/"
  },
  {
    title: "Coway Releases 2024 Sustainability Report",
    source: "Direct Selling News",
    date: "August 26, 2025",
    summary:
      "Closed-loop plastics, community air campaigns, and ESG communication milestones headline Coway’s 2024 sustainability disclosure.",
    url: "https://www.directsellingnews.com/2025/08/26/coway-releases-2024-sustainability-report/"
  },
  {
    title: "Coway Reports Q2 2025 Financial Results",
    source: "Direct Selling News",
    date: "August 8, 2025",
    summary:
      "Revenue hit $905M for Q2 with 160,000 net rental additions, as Malaysia grew 23.9% year-over-year and overseas units surged.",
    url: "https://www.directsellingnews.com/2025/08/08/coway-reports-q2-2025-financial-results/"
  }
];

const CLOUD_ROADMAP: CloudPlay[] = [
  {
    title: "Litigation intelligence hub",
    description:
      "Track competitor patents, automate evidence vaults, and forecast settlement exposure before disputes span a decade.",
    icon: Factory
  },
  {
    title: "Rental growth telemetry",
    description:
      "Model churn, referral share, and cohort profitability so subscription economics stay ahead of activist benchmarks.",
    icon: ChartLineUp
  },
  {
    title: "Cody compliance automation",
    description:
      "Deploy secure messaging, guided scripts, and audit trails that sync with incentive payouts for every commissioned associate.",
    icon: ShieldCheck
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Coway Trust & Compensation Insights";
  const description =
    "Analyse Coway’s rental-first growth engine, ESG commitments, innovation streak, critiques, and advisory trust scores before shaping your own health-tech expansion.";
  const keywords = [
    "Coway trust insights",
    "Coway MLM analysis",
    "Coway compensation overview",
    "Cloud MLM Software advisory",
    "Coway rental business diligence"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/coway", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type CowayPageProps = {
  params: { lang: SupportedLocale };
};

export default function CowayPage({ params }: CowayPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const trustScoreHref = "#trust-score";
  const timelineHref = "#timeline";
  const trustSnapshotHref = "#trust-insights";
  const trustFill = `${PRIMARY_TRUST_SCORE.score}%`;

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-primary/40 bg-gradient-to-br from-[#0E4DA8]/15 via-white to-[#7BA4F4]/10 py-20 dark:border-primary/30 dark:from-slate-900 dark:via-slate-950 dark:to-blue-950/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(14,77,168,0.35),transparent_55%),radial-gradient(circle_at_78%_24%,rgba(79,140,240,0.3),transparent_60%),radial-gradient(circle_at_50%_85%,rgba(123,164,244,0.24),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.75fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-1 text-sm font-semibold text-slate-900 backdrop-blur dark:border-white/20 dark:bg-white/10 dark:text-white">
              Mission: Best Life Solution
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Inside Coway — trust, rental velocity, and ESG-led compensation insights.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/80">
                Assess how Coway’s rental-first economics, closed-loop sustainability, design recognition, and governance debates shape the opportunity. Navigate the strategic snapshot, timeline, compensation levers, successes, critiques, and headlines before crafting your own resilient life-care launch.
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

          <aside className="relative grid gap-6 rounded-3xl border border-white/40 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/15 dark:bg-slate-950/80">
            <div className="grid gap-6">
              <div className="flex items-center gap-5 rounded-2xl border border-primary/20 bg-primary/5 p-4 dark:border-primary/30 dark:bg-primary/15">
                <div className="relative h-24 w-24">
                  <svg viewBox="0 0 120 120" className="h-full w-full">
                    <circle cx="60" cy="60" r="54" className="stroke-slate-200 dark:stroke-slate-800" strokeWidth="6" fill="none" />
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      className="stroke-primary"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray="339.292"
                      strokeDashoffset={`
                        ${339.292 - (339.292 * PRIMARY_TRUST_SCORE.score) / 100}
                      `}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-[10px] rounded-full bg-white shadow-[inset_0_10px_25px_-20px_rgba(15,23,42,0.45)] dark:bg-slate-950" aria-hidden />
                  <div className="absolute inset-0 rounded-full blur-xl bg-blue-200/40 dark:bg-blue-900/40" aria-hidden />
                  <div className="relative text-center">
                    <span className="text-3xl font-semibold text-foreground">{PRIMARY_TRUST_SCORE.score}</span>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">/100</p>
                  </div>
                </div>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p>{PRIMARY_TRUST_SCORE.label}</p>
                  <p>{PRIMARY_TRUST_SCORE.summary}</p>
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-foreground">Strategic snapshot</h2>
                <p className="text-sm text-muted-foreground">
                  Financial scale, subscriber momentum, workforce depth, and ESG credentials for diligence.
                </p>
                <div className="grid gap-4">
                  {COMPANY_FACTS.slice(0, 2).map((fact) => (
                    <article
                      key={fact.label}
                      className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm dark:border-border/40 dark:bg-slate-900/60"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                        {fact.label}
                      </span>
                      <span className="text-2xl font-semibold text-foreground">{fact.value}</span>
                      <p className="text-xs text-muted-foreground">{fact.detail}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {COMPANY_FACTS.slice(2).map((fact) => (
                <article
                  key={fact.label}
                  className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm dark:border-border/40 dark:bg-slate-900/60"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {fact.label}
                  </span>
                  <span className="text-2xl font-semibold text-foreground">{fact.value}</span>
                  <p className="text-xs text-muted-foreground">{fact.detail}</p>
                </article>
              ))}
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm text-muted-foreground dark:border-primary/30 dark:bg-primary/10">
              Rental velocity, ESG disclosures, and legal resilience define Coway’s current trust narrative.
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Vision & brand pillars</h2>
          <p className="text-sm text-muted-foreground">
            Convert Coway’s purpose-led positioning into actionable pillars for your own launch playbook.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {VISION_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-primary/15"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </div>
                <p className="text-xs uppercase tracking-wide text-primary/80 dark:text-primary/70">{pillar.proof}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="timeline" className="relative scroll-mt-32 border-y border-border/60 bg-gradient-to-br from-primary/5 via-background to-blue-50 py-20 dark:border-border/40 dark:from-primary/10 dark:via-slate-950 dark:to-blue-950/40">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/20 via-transparent to-transparent opacity-70 dark:from-primary/25" aria-hidden />
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Timeline of resilience</h2>
            <p className="text-sm text-muted-foreground">
              Map the milestones anchoring Coway’s governance, innovation, and dispute readiness.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)]">
            <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 text-sm text-muted-foreground dark:border-primary/40 dark:bg-primary/10">
              From founding and refurbished rentals to ESG committees and Supreme Court wins, Coway’s arc blends innovation with risk vigilance.
            </div>
            <div className="space-y-8">
              {STORY_ARC.map((event) => (
                <article
                  key={event.era}
                  className="relative rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
                >
                  <span className="absolute -left-3 top-6 h-6 w-6 rounded-full border border-primary/30 bg-primary/10 dark:border-primary/40 dark:bg-primary/20" aria-hidden />
                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">{event.era}</span>
                    <h3 className="text-lg font-semibold text-foreground">{event.headline}</h3>
                    <p className="text-sm text-muted-foreground">{event.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Compensation breakdown</h2>
          <p className="text-sm text-muted-foreground">
            Understand the levers shaping Coway’s commissioned rental model and what it means for your incentive architecture.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {COMPENSATION_ELEMENTS.map((element) => {
            const Icon = element.icon;
            return (
              <article
                key={element.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-primary/10"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{element.title}</h3>
                  <p className="text-sm text-muted-foreground">{element.description}</p>
                </div>
                <p className="text-xs uppercase tracking-wide text-primary/80 dark:text-primary/70">{element.highlight}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Success stories</h2>
          <p className="text-sm text-muted-foreground">
            Highlight the validation points reinforcing Coway’s growth and trust narrative.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {SUCCESS_STORIES.map((story) => {
            const Icon = story.icon;
            return (
              <article
                key={story.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{story.title}</h3>
                  <p className="text-sm text-muted-foreground">{story.description}</p>
                </div>
                <div className="space-y-1 text-xs text-primary/80 dark:text-primary/70">
                  <p className="font-semibold uppercase tracking-wide">{story.metric}</p>
                  <p>{story.proof}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Innovation signals</h2>
          <p className="text-sm text-muted-foreground">
            Chart how Coway is pairing product design, sustainability, and digital experiences to differentiate.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
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
            Blend third-party validations and compliance investments into your diligence story.
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
            Translate qualitative findings into advisory scores to prioritise enablement, mitigation, and investment focus.
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
          Scores are advisory estimates designed to frame cross-functional discussions; supplement them with your legal, finance, and market-specific counsel.
        </p>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Challenges, critics, and lessons</h2>
          <p className="text-sm text-muted-foreground">
            Stress-test your roadmap against the pressures Coway navigates today.
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
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p className="font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">Mitigation</p>
                  <p>{critique.mitigation}</p>
                  <p className="uppercase tracking-wide">Source: {critique.source}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Recent headlines</h2>
          <p className="text-sm text-muted-foreground">
            Keep diligence conversations current with verified external coverage.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {NEWS_HEADLINES.map((news) => (
            <article
              key={news.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
            >
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{news.source}</span>
                <h3 className="text-lg font-semibold text-foreground">{news.title}</h3>
                <p className="text-xs text-primary/80 dark:text-primary/70">{news.date}</p>
              </div>
              <p className="text-sm text-muted-foreground">{news.summary}</p>
              <Button asChild variant="ghost" className="justify-start px-0 text-sm">
                <Link href={news.url} target="_blank" rel="nofollow noopener noreferrer">
                  View coverage
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-primary/40 bg-gradient-to-br from-primary/10 via-background to-blue-50 py-20 dark:border-primary/30 dark:from-primary/15 dark:via-slate-950 dark:to-blue-950/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_22%_20%,rgba(14,77,168,0.25),transparent_55%),radial-gradient(circle_at_80%_28%,rgba(123,164,244,0.28),transparent_60%)]" aria-hidden />
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              How Cloud MLM Software helps
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Build a compliant life-care engine with legal, rental, and field safeguards from day one.
            </h2>
            <p className="text-sm text-muted-foreground">
              Launch your own premium rental business with litigation monitoring, revenue telemetry, and Cody-grade compliance automation embedded.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={pricingHref}>
                  Review solution tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:text-foreground">
                <Link href={contactHref}>
                  Start a tailored blueprint
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            {CLOUD_ROADMAP.map((play) => {
              const Icon = play.icon;
              return (
                <article
                  key={play.title}
                  className="flex flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
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
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
