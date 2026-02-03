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
  CheckCircle2,
  Factory,
  FlaskConical,
  Gavel,
  Globe2,
  GraduationCap,
  Lightbulb,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import {
  ArrowBendUpRight,
  ChartLineUp,
  GlobeHemisphereWest,
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
  summary: "Blends regulatory history, consumer protections, and live field sentiment across 100+ markets."
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
    value: "$7.4B",
    detail: "2024 global sales cited in Amway’s Global Impact Report coverage (Direct Selling News, Mar 2025)."
  },
  {
    label: "Founded",
    value: "1959",
    detail: "Established by Rich DeVos and Jay Van Andel in Ada, Michigan to champion people-first direct selling."
  },
  {
    label: "Employees",
    value: "14,000+",
    detail: "Corporate employees supporting manufacturing, R&D, and market operations worldwide (Global Impact Report 2024)."
  },
  {
    label: "ABOs",
    value: "1M+",
    detail: "Amway Business Owners active across 100+ markets, per the “How Amway Works” global overview."
  }
];

const VISION_PILLARS: VisionPillar[] = [
  {
    title: "Freedom-led entrepreneurship",
    description:
      "Founders’ Fundamentals emphasise freedom so ABOs can tailor schedules, pricing, and customer engagement to local realities while staying aligned with Amway Promise safeguards.",
    proof: "Our Principles — Founders’ Fundamentals (Amway Global).",
    icon: Lightbulb
  },
  {
    title: "Family-built partnerships",
    description:
      "Family is a core value that shows up in cross-market mentorship, multilingual training, and corporate support designed to keep ABOs ‘in business for themselves, but never by themselves.’",
    proof: "How Amway Works overview of the global support network.",
    icon: UsersThree
  },
  {
    title: "Hope through wellbeing innovation",
    description:
      "Nutrition-led R&D, from Nutrilite farms to new gut health programs, signals confidence that high-quality products unlock sustainable opportunity.",
    proof: "Global Impact Report 2024 and DSN gut health program coverage.",
    icon: FlaskConical
  },
  {
    title: "Reward with responsibility",
    description:
      "Rewards are designed to mirror responsible selling—backed by satisfaction guarantees, refunds, and compliance coaching embedded in the Amway Promise framework.",
    proof: "Amway Promise protections detailed on How Amway Works.",
    icon: ShieldCheck
  }
];

const STORY_ARC: TimelineEvent[] = [
  {
    era: "1959",
    headline: "Founders launch American Way",
    detail:
      "Rich DeVos and Jay Van Andel introduce Amway in Ada, Michigan, anchoring the business in freedom, family, hope, and reward, with Nutrilite nutrition as an early differentiator."
  },
  {
    era: "1979",
    headline: "FTC v. Amway defines compliance baseline",
    detail:
      "A landmark ruling recognises Amway’s retailing safeguards and codifies inventory buy-back rules still emulated by compliance-savvy MLMs today."
  },
  {
    era: "1990s–2015",
    headline: "Global expansion and supply chain integration",
    detail:
      "Amway scales to 100+ markets, vertically integrates Nutrilite farming, and invests in manufacturing to control product quality and service levels worldwide."
  },
  {
    era: "2022",
    headline: "India enforcement prompts renewed guardrails",
    detail:
      "Investigations by Indian authorities underscore the need for disciplined income claims, catalysing refreshed compliance training and transparency on earnings realities."
  },
  {
    era: "2024–2025",
    headline: "Impact reinvestment and leadership refresh",
    detail:
      "The Global Impact Report highlights $7.4B in sales, $127.6M reinvested into Ada manufacturing, 47k volunteer hours, and Michael Nelson’s appointment as CEO to steer the next chapter."
  }
];

const COMPENSATION_ELEMENTS: CompensationElement[] = [
  {
    title: "Retail profit margin",
    description:
      "IBOs set local pricing and earn the spread between Amway’s wholesale rates and customer-facing retail, keeping focus on verified consumption volumes.",
    highlight: "Customer-first selling anchors earnings before any team overrides (Amway Insider — Can you make money with Amway?).",
    icon: Handshake
  },
  {
    title: "Performance volume bonuses",
    description:
      "Monthly bonuses scale with product volume, rewarding consistent personal selling behaviour and customer retention milestones.",
    highlight: "Higher point value tiers unlock progressively stronger percentage payouts each month.",
    icon: ChartLineUp
  },
  {
    title: "Leadership development bonuses",
    description:
      "When sponsored teams replicate compliant retailing, uplines participate in additional bonuses tied to verified downline sales volume.",
    highlight: "Overrides remain linked to product movement, not enrolment fees, sustaining the FTC-recognised safeguards.",
    icon: GlobeHemisphereWest
  },
  {
    title: "Recognition & incentive travel",
    description:
      "Cash awards, lifestyle experiences, and business summits reward milestone ranks and best-practice duplication across global markets.",
    highlight: "Discretionary incentives require both volume qualifications and compliance benchmarks to stay eligible.",
    icon: ArrowBendUpRight
  }
];

const SUCCESS_STORIES: SuccessStory[] = [
  {
    title: "Global impact in action",
    description:
      "47,000 volunteer hours funded child tutoring in Taiwan, women’s empowerment in India, and crisis response in Thailand throughout 2024.",
    metric: "47k volunteer hours across four flagship programmes",
    proof: "Direct Selling News — Amway Publishes Global Impact Report 2024",
    icon: BadgeCheck
  },
  {
    title: "Ada campus reinvestment",
    description:
      "A $127.6M upgrade adds a nutrition manufacturing centre and R&D pilot plant, creating 260 jobs while modernising quality labs.",
    metric: "$127.6M reinvested & 260 new roles",
    proof: "Direct Selling News — Amway Publishes Global Impact Report 2024",
    icon: Factory
  },
  {
    title: "Education-first field enablement",
    description:
      "Amway Education delivers 150+ multilingual courses, podcasts, and activities so ABOs can master compliant selling and onboarding.",
    metric: "150+ virtual courses in 5 languages",
    proof: "Amway Insider — Can you make money with Amway?",
    icon: GraduationCap
  }
];

const INNOVATION_SIGNALS: Innovation[] = [
  {
    title: "Nutrition manufacturing upgrade",
    description:
      "Capital projects in Ada modernise production, quality control, and pilot-scale R&D for future wellness launches.",
    proof: "Direct Selling News — Amway Publishes Global Impact Report 2024",
    icon: FlaskConical
  },
  {
    title: "Begin 30 gut health launch",
    description:
      "The Nutrilite Begin 30 programme pairs supplements with the Wellbeing+ app for habit coaching rooted in microbiome science.",
    proof: "Direct Selling News — New Amway Wellness Program Focuses on Supporting Gut Health",
    icon: Sparkles
  },
  {
    title: "PCR packaging momentum",
    description:
      "Selective Nutrilite protein cannisters now use 30% post-consumer recycled material, supporting lifecycle transparency goals.",
    proof: "Direct Selling News — Amway Publishes Global Impact Report 2024",
    icon: Globe2
  }
];

const REPUTATION_SIGNALS: ReputationSignal[] = [
  {
    title: "Amway Promise protections",
    detail:
      "Refund guarantees, product warranties, and data protection commitments deliver an institutional customer experience.",
    evidence: "How Amway Works — Amway Promise protections outline",
    icon: ShieldCheck
  },
  {
    title: "Impact transparency",
    detail:
      "Annual impact reporting discloses sustainability metrics, volunteerism, and capital investments for stakeholders.",
    evidence: "Direct Selling News — Global Impact Report 2024 summary",
    icon: CheckCircle2
  },
  {
    title: "Skin Cancer Foundation alliance",
    detail:
      "Artistry and g&h SPF lines hold the Foundation’s Seal of Recommendation, validating quality in skincare narratives.",
    evidence: "Direct Selling News — Amway Named Skin Cancer Foundation Corporate Council Bronze Ally",
    icon: BadgeCheck
  }
];

const CRITICAL_WATCHPOINTS: Critique[] = [
  {
    title: "Persistent regulatory scrutiny",
    description:
      "From the 1979 FTC case to India’s 2022 enforcement actions, authorities continue probing income claims and business models.",
    mitigation: "Embed automated income disclosure reminders, track claims, and keep legal counsel involved in every localisation.",
    source: "Wikipedia — FTC v. Amway Corp. & 2022 India ED investigation",
    icon: Gavel
  },
  {
    title: "Earnings concentration reality",
    description:
      "Corporate disclosures emphasise that only disciplined sellers achieve meaningful income, challenging hype-driven recruitment narratives.",
    mitigation: "Use analytics to spotlight customer-to-IBO ratios, publish realistic earnings dashboards, and reward verified retail activity.",
    source: "Amway Insider — Can you make money with Amway?",
    icon: AlertTriangle
  },
  {
    title: "Health-claim discipline",
    description:
      "Wellness narratives can drift beyond approved talking points, risking regulator pushback despite third-party product seals.",
    mitigation: "Centralise compliant messaging, lock creative reviews, and ingest third-party certifications into advisor tooling.",
    source: "Direct Selling News — Skin Cancer Foundation Bronze Ally announcement",
    icon: ShieldCheck
  }
];

const TRUST_SCORES: TrustScore[] = [
  {
    title: "Compliance posture",
    score: "70/100",
    insight:
      "Legacy FTC precedent, Amway Promise safeguards, and ongoing investments in compliance training keep regulators engaged yet cooperative.",
    methodology: "Weighted on legal history, customer protections, refund policies, and external oversight signals."
  },
  {
    title: "Consumer sentiment stability",
    score: "62/100",
    insight:
      "Trusted product seals and philanthropy resonate, but historic cultural critiques mean sentiment still depends on transparent leadership communication.",
    methodology: "Blend of third-party recognitions, media narratives, and community feedback volatility."
  },
  {
    title: "Opportunity realism",
    score: "65/100",
    insight:
      "Clear income disclaimers and retail-first messaging set expectations, though earnings remain concentrated among consistent sellers.",
    methodology: "Assessed via compensation levers, disclosure practices, and alignment of rewards with documented retail volume."
  }
];

const NEWS_HEADLINES: NewsItem[] = [
  {
    title: "Amway publishes Global Impact Report 2024",
    source: "Direct Selling News",
    date: "March 24, 2025",
    summary:
      "Report spotlights $7.4B in sales, sustainability milestones, and $127.6M reinvested into manufacturing and R&D.",
    url: "https://www.directsellingnews.com/2025/03/24/amway-publishes-global-impact-report-2024/"
  },
  {
    title: "Amway named Skin Cancer Foundation Bronze Ally",
    source: "Direct Selling News",
    date: "May 1, 2025",
    summary:
      "Eight Artistry Skin Nutrition and g&h SPF products now carry the Foundation’s Seal of Recommendation for Daily or Active Use.",
    url: "https://www.directsellingnews.com/2025/05/01/amway-named-skin-cancer-foundation-corporate-council-bronze-ally/"
  },
  {
    title: "New wellness program focuses on gut health",
    source: "Direct Selling News",
    date: "January 10, 2025",
    summary:
      "Nutrilite Begin 30 pairs supplements with the Wellbeing+ app to hardwire daily habits and microbiome education.",
    url: "https://www.directsellingnews.com/2025/01/10/new-amway-wellness-program-focuses-on-supporting-gut-health/"
  }
];

const CLOUD_ROADMAP: CloudPlay[] = [
  {
    title: "Regulatory readiness workspace",
    description:
      "Model FTC, DSSRC, and jurisdictional rules with automated claim monitoring so your launch clears the same hurdles Amway navigates.",
    icon: Gavel
  },
  {
    title: "Comp plan digital twin",
    description:
      "Stress-test retail margins, PV thresholds, and breakage controls in a sandbox before scaling to new markets.",
    icon: ChartLineUp
  },
  {
    title: "Field compliance enablement",
    description:
      "Deliver multilingual microlearning, certification, and disclosure reminders that mirror Amway Education’s best practices.",
    icon: GraduationCap
  },
  {
    title: "Impact & ESG dashboard",
    description:
      "Track volunteer hours, PCR packaging, and job creation metrics to publish investor-ready impact snapshots.",
    icon: GlobeHemisphereWest
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Amway Trust & Compensation Insights";
  const description =
    "Explore Amway’s Founders’ Fundamentals, compensation levers, innovation signals, critiques, and the trust score outlook, then map your own compliant wellness venture.";
  const keywords = [
    "Amway trust score",
    "Amway MLM analysis",
    "Amway compensation plan insights",
    "Cloud MLM Software trust advisory",
    "Amway compliance review"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/amway", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AmwayPageProps = {
  params: { lang: SupportedLocale };
};

export default function AmwayPage({ params }: AmwayPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const trustScoreHref = "#trust-score";
  const timelineHref = "#timeline";
  const trustSnapshotHref = "#trust-insights";
  const trustFill = `${PRIMARY_TRUST_SCORE.score}%`;

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-primary/40 bg-gradient-to-br from-[#003399]/15 via-white to-[#36B35F]/12 py-20 dark:border-primary/30 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950/35">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(0,51,153,0.35),transparent_55%),radial-gradient(circle_at_82%_28%,rgba(37,114,171,0.28),transparent_60%),radial-gradient(circle_at_52%_84%,rgba(54,179,95,0.24),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.75fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-1 text-sm font-semibold text-slate-900 backdrop-blur dark:border-white/20 dark:bg-white/10 dark:text-white">
              Vision: Freedom, Family, Hope, Reward
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Inside Amway — trust, wellbeing innovation, and a decades-long distributor network.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/80">
                Assess how Amway’s Founders’ Fundamentals, compliance precedents, and $7.4B wellness engine shape expectations. Review company facts, history, payout levers, successes, risk factors, and current headlines—then adapt the takeaways to your own launch.
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
            <div className="absolute -right-10 top-14 h-28 w-28 rounded-full bg-[#003399]/20 blur-3xl" aria-hidden />
            <div className="absolute bottom-0 left-8 h-20 w-20 translate-y-1/2 rounded-full bg-[#36B35F]/30 blur-3xl dark:bg-[#36B35F]/40" aria-hidden />
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col justify-between gap-5 rounded-3xl border border-primary/20 bg-gradient-to-br from-white via-sky-50 to-white p-6 shadow-sm dark:border-primary/30 dark:from-slate-950 dark:via-primary/10 dark:to-slate-950">
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">Trust score outlook</h2>
                  <p className="text-sm text-muted-foreground">Aggregated view of compliance posture, sentiment stability, and opportunity realism.</p>
                </div>
                <div className="relative mx-auto flex h-32 w-32 items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `conic-gradient(#0ea5e9 ${trustFill}, rgba(148,163,184,0.2) ${trustFill})`
                    }}
                    aria-hidden
                  />
                  <div className="absolute inset-[10px] rounded-full bg-white shadow-[inset_0_10px_25px_-20px_rgba(15,23,42,0.45)] dark:bg-slate-950" aria-hidden />
                  <div className="absolute inset-0 rounded-full blur-xl bg-sky-200/30 dark:bg-sky-900/30" aria-hidden />
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
                  Operational facts that inform diligence, compliance strategy, and market readiness decisions.
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
              Founders’ Fundamentals, sustainability reinvestments, and a trust-first promise keep Amway’s legacy brand relevant in modern wellness.
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Founders’ fundamentals in action</h2>
          <p className="text-sm text-muted-foreground">
            Translate freedom, family, hope, and reward into practical levers for governance, enablement, and responsible growth.
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

      <section id="timeline" className="relative scroll-mt-32 border-y border-border/60 bg-gradient-to-br from-primary/5 via-background to-emerald-50 py-20 dark:border-border/40 dark:from-primary/10 dark:via-slate-950 dark:to-emerald-950/40">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/20 via-transparent to-transparent opacity-70 dark:from-primary/25" aria-hidden />
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Timeline of resilience</h2>
            <p className="text-sm text-muted-foreground">
              Anchor your diligence on the milestones that cemented Amway’s compliance profile and wellbeing positioning.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)]">
            <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 text-sm text-muted-foreground dark:border-primary/40 dark:bg-primary/10">
              Freedom-driven entrepreneurship, tested regulation, and ongoing reinvestment created a playbook for global wellness brands balancing opportunity with accountability.
            </div>
            <div className="space-y-8">
              {STORY_ARC.map((event) => (
                <article
                  key={event.era}
                  className="grid gap-2 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">{event.era}</span>
                  <h3 className="text-lg font-semibold text-foreground">{event.headline}</h3>
                  <p className="text-sm text-muted-foreground">{event.detail}</p>
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
            Map the three core earning levers and how discretionary incentives align with verified retail volume.
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
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{element.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{element.description}</p>
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-3 text-xs text-primary dark:border-primary/40 dark:bg-primary/10">
                  {element.highlight}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Success stories</h2>
          <p className="text-sm text-muted-foreground">
            Highlight the operational wins and community investments that reinforce Amway’s longevity.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {SUCCESS_STORIES.map((story) => {
            const Icon = story.icon;
            return (
              <article
                key={story.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-primary/10"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{story.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{story.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">{story.metric}</p>
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
            Track the investments and product moves that keep Amway competitive in the wellness economy.
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
            Validate the brand with third-party accreditations, customer protections, and impact transparency.
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
            Translate due diligence findings into advisory scores so stakeholders can gauge confidence levels and mitigation priorities.
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
          Scores are advisory estimates to support trust and risk workshops; combine them with current legal counsel guidance and market-specific compliance reviews.
        </p>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Challenges, critics, and lessons</h2>
          <p className="text-sm text-muted-foreground">
            Understand where Amway faces pressure so you can design proactive guardrails for your own build.
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
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-3 text-xs text-primary dark:border-primary/40 dark:bg-primary/10">
                  Mitigation: {critique.mitigation}
                </div>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">Source: {critique.source}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Recent headlines to monitor</h2>
          <p className="text-sm text-muted-foreground">
            Keep leadership, compliance, and marketing teams aligned with the latest external coverage.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {NEWS_HEADLINES.map((news) => (
            <article
              key={news.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
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

      <section className="relative overflow-hidden border-y border-primary/40 bg-gradient-to-br from-primary/10 via-background to-emerald-50 py-20 dark:border-primary/30 dark:from-primary/15 dark:via-slate-950 dark:to-emerald-950/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(0,51,153,0.25),transparent_55%),radial-gradient(circle_at_78%_30%,rgba(54,179,95,0.28),transparent_60%)]" aria-hidden />
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              How Cloud MLM Software helps
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Replicate Amway’s discipline—without inheriting its complexity.
            </h2>
            <p className="text-sm text-muted-foreground">
              Launch a wellness brand with regulatory readiness, comp-plan modelling, compliance education, and ESG tracking built in from day one.
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
