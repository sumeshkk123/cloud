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
  FlaskConical,
  Gavel,
  Globe2,
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
  score: 58,
  label: "Overall trust score",
  summary:
    "Solid certifications and cash-backed operations support credibility, yet China distribution questions and delisting tensions keep confidence moderate."
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
    label: "Revenue (1H 2024)",
    value: "S$208.6M",
    detail: "Unaudited statements logged S$208.58 million in revenue for the six months ended 30 June 2024 (SGX — Best World International Ltd 1H2024 results announcement, 7 Aug 2024)."
  },
  {
    label: "Cash reserves",
    value: "S$571.1M",
    detail: "Group cash and cash equivalents stood at S$571.1 million as of 30 June 2024, underscoring a cash-heavy balance sheet (SGX — 1H2024 results announcement)."
  },
  {
    label: "Founded",
    value: "1990",
    detail: "Best World launched in Singapore in 1990 to develop premium skin care, personal care, and wellness brands (Best World Sustainability Report 2023)."
  },
  {
    label: "Global footprint",
    value: "12 markets",
    detail: "Subsidiaries, joint ventures, and associates span 12 markets and reach customers in 40 markets worldwide (Best World Sustainability Report 2023)."
  }
];

const VISION_PILLARS: VisionPillar[] = [
  {
    title: "Life Harmony promise",
    description:
      "The Life Harmony mission anchors product innovation around holistic wellness outcomes for beauty and health enthusiasts worldwide.",
    proof: "Best World Sustainability Report 2023 — Vision and mission statements.",
    icon: Sparkles
  },
  {
    title: "People-centred culture",
    description:
      "A close-knit, collaborative workplace with flexible benefits, education opportunities, and community values powers distributor and employee growth.",
    proof: "Best World — Join Best World! (culture, benefits, and core values).",
    icon: UsersThree
  },
  {
    title: "Progressive entrepreneurial platform",
    description:
      "The Enterprise Network Programme keeps incentives fair and borderless so members can scale their businesses beyond local boundaries.",
    proof: "Best World Factsheet 07 — ENP explained as a realizable incentive system with international sponsorship support.",
    icon: Handshake
  },
  {
    title: "Governance as differentiator",
    description:
      "Membership in global direct selling associations and published sustainability controls position compliance and trust as core brand assets.",
    proof: "Best World Sustainability Report 2023 — Association memberships and governance commitments.",
    icon: ShieldCheck
  }
];

const STORY_ARC: TimelineEvent[] = [
  {
    era: "1990",
    headline: "Singapore founders go regional",
    detail:
      "Dora Hoan and Doreen Tan formalised Best World in 1990, investing in research-led skin care and wellness brands built in Singapore (Best World Sustainability Report 2023)."
  },
  {
    era: "2019",
    headline: "China franchise model under scrutiny",
    detail:
      "Business Times coverage and Bonitas Research allegations triggered PwC reviews and SGX compliance queries around mainland franchise partners (Kazakh Value Investor Substack — Best World International (BWI) Reflections, Apr 2024)."
  },
  {
    era: "2021",
    headline: "Audit disclaimer and pivot planning",
    detail:
      "EY issued a disclaimer of opinion on 15 Sep 2021 over distribution relationships; Nexia TS was appointed soon after while management explored licence transitions (Kazakh Value Investor Substack — Best World International (BWI) Reflections, Apr 2024)."
  },
  {
    era: "Nov 2022",
    headline: "Trading resumes after 42 months",
    detail:
      "Following prolonged suspension, SGX allowed shares to trade again in November 2022 once remediation and disclosures met regulator expectations (Yahoo Finance — Best World's founders want EGM to delist company, 22 Mar 2024)."
  },
  {
    era: "Mar–Jul 2024",
    headline: "Selective capital reduction proposal",
    detail:
      "Founders tabled a S$2.56 per share selective capital reduction and delisting plan, sending the offer to a July 2024 EGM for minority shareholder approval (SIAS — Q&As on EGM, Best World International Limited 2024)."
  }
];

const COMPENSATION_ELEMENTS: CompensationElement[] = [
  {
    title: "Enterprise Network Programme",
    description:
      "The ENP framework emphasises fair, realizable rewards and career mobility, helping members climb the plan without geographic limits.",
    highlight: "Best World Factsheet 07 describes ENP as a progressive plan with historical 148k distributor base growth and international sponsorship.",
    icon: ArrowBendUpRight
  },
  {
    title: "Cross-border sponsorship",
    description:
      "International sponsorship schemes let leaders piggyback new centres overseas, driving duplication when new lifestyle hubs open.",
    highlight: "Legacy factsheet notes 11 regional centres and 75 lifestyle centres supporting cross-market expansion (Best World Factsheet 07).",
    icon: GlobeHemisphereWest
  },
  {
    title: "Commission-heavy payouts",
    description:
      "Direct selling remains core: S$44.5M in commissions and S$3.4M in franchise sales expenses flowed to the field in 1H 2024 alone.",
    highlight: "SGX — Best World International Ltd unaudited 1H2024 results, Note on distribution costs.",
    icon: ChartLineUp
  },
  {
    title: "Liquidity for investors",
    description:
      "Management couples heavy cash reserves with equal-access buybacks and a pending S$2.56 selective capital reduction for minorities.",
    highlight: "SIAS — 2024 EGM Q&A details the SCR price and IFA valuation range for exiting shareholders.",
    icon: Gavel
  }
];

const SUCCESS_STORIES: SuccessStory[] = [
  {
    title: "Great Place To Work renewal",
    description:
      "Employee surveys and culture investments secured Great Place To Work certification through Aug 2025, signalling strong internal trust.",
    metric: "Certification window Aug 2024 – Aug 2025",
    proof: "Best World — Who We Are (Awards section).",
    icon: BadgeCheck
  },
  {
    title: "Life Harmony goes global",
    description:
      "Subsidiaries spanning 12 markets and customer reach in 40 markets show the Life Harmony proposition resonates beyond Singapore.",
    metric: "12 operating markets / 40 customer markets",
    proof: "Best World Sustainability Report 2023 — About Best World.",
    icon: Globe2
  },
  {
    title: "Cash-backed resilience",
    description:
      "Net cash ballooned from S$241M in FY2019 to over S$600M in FY2023, funding buybacks and cushioning regulatory pauses.",
    metric: "~S$600M net cash (FY2023)",
    proof: "Kazakh Value Investor Substack — Best World International (BWI) Reflections, Apr 2024.",
    icon: ChartLineUp
  }
];

const INNOVATION_SIGNALS: Innovation[] = [
  {
    title: "R&D-driven product roadmaps",
    description:
      "In-house research teams pursue innovative skin care and wellness formulas to keep Life Harmony solutions differentiated.",
    proof: "Best World Sustainability Report 2023 — Dedication to scientific research and development.",
    icon: FlaskConical
  },
  {
    title: "QR-coded authenticity checks",
    description:
      "QR codes now span DR’s Secret and Aestier packaging, letting consumers verify authenticity and feeding enforcement workflows.",
    proof: "Best World Sustainability Report 2023 — Intellectual property safeguards and QR code initiative.",
    icon: ShieldCheck
  },
  {
    title: "Digitised feedback cycles",
    description:
      "Regional centres compile digital and in-person feedback into monthly reports so HQ quality teams act on consumer signals fast.",
    proof: "Best World Sustainability Report 2023 — Customer feedback process overview.",
    icon: GlobeHemisphereWest
  }
];

const REPUTATION_SIGNALS: ReputationSignal[] = [
  {
    title: "Association alignment",
    detail:
      "Membership in the Direct Selling Association of Singapore, World Federation of Direct Selling Associations, and SME networks embeds external oversight.",
    evidence: "Best World Sustainability Report 2023 — Association memberships.",
    icon: CheckCircle2
  },
  {
    title: "Data protection accolades",
    detail:
      "Cyber Trust Mark and Data Protection Trustmark accolades confirm investments in privacy, resiliency, and responsible data use.",
    evidence: "Best World — Who We Are (2024 awards list).",
    icon: ShieldCheck
  },
  {
    title: "Workforce confidence",
    detail:
      "Great Place To Work survey reports 78% of employees consider it a great workplace, reinforcing retention and ethics narratives.",
    evidence: "Great Place To Work Singapore — Best World International Ltd profile (78% employee response).",
    icon: UsersThree
  }
];

const CRITICAL_WATCHPOINTS: Critique[] = [
  {
    title: "China distributor opacity",
    description:
      "Changsha Best’s related-party links and franchise ambiguity continue to shadow the China business even as the model evolves.",
    mitigation: "Maintain independent audits, document beneficial ownership, and keep SGX updated on direct-selling licence pursuits.",
    source: "Kazakh Value Investor Substack — Best World International (BWI) Reflections, Apr 2024.",
    icon: AlertTriangle
  },
  {
    title: "Minority exit fairness",
    description:
      "Selective capital reduction pricing drew scrutiny from minority holders seeking clarity on valuations and governance voice.",
    mitigation: "Use independent FA transparency, share valuation sensitivities, and record dissent handling in EGM documentation.",
    source: "SIAS — Q&As on EGM, Best World International Limited 2024.",
    icon: Gavel
  },
  {
    title: "Cash deployment signalling",
    description:
      "Years of cash hoarding ahead of delisting raises questions about capital efficiency and shareholder alignment.",
    mitigation: "Publish capital allocation roadmaps tying reserves to product, market, and compliance investments—not just corporate actions.",
    source: "Kazakh Value Investor Substack — Best World International (BWI) Reflections, Apr 2024.",
    icon: ShieldCheck
  }
];

const TRUST_SCORES: TrustScore[] = [
  {
    title: "Governance maturity",
    score: "59/100",
    insight:
      "Certifications and association ties are solid, yet regulator attention on China distribution keeps governance at a guarded mid-range.",
    methodology: "Weighted on external certifications, SGX interventions, and audit history."
  },
  {
    title: "People & culture",
    score: "63/100",
    insight:
      "Great Place To Work results and values-led comms point to healthy engagement, but field morale hinges on clarity around the delisting path.",
    methodology: "Blend of GPTW survey data, internal benefits, and distributor sentiment proxies."
  },
  {
    title: "Market adaptability",
    score: "52/100",
    insight:
      "Cash cushions backstop pivots, though licence uncertainties and reliance on one geography temper the outlook.",
    methodology: "Assessed via geographic concentration, regulatory status, and capital agility."
  }
];

const NEWS_HEADLINES: NewsItem[] = [
  {
    title: "Best World's founders want EGM to delist company",
    source: "Yahoo Finance / The Edge Singapore",
    date: "22 Mar 2024",
    summary:
      "Controlling shareholders seek a selective capital reduction to take the company private, citing S$574M cash and China headwinds.",
    url: "https://sg.finance.yahoo.com/news/best-worlds-founders-want-egm-080547712.html"
  },
  {
    title: "Best World International (BWI) Reflections",
    source: "Kazakh Value Investor Substack",
    date: "04 Apr 2024",
    summary:
      "A special-sits investor chronicles the 2019 short attacks, trading halt, buybacks, and the proposed delisting roadmap.",
    url: "https://kazakhvalueinvestor.substack.com/p/best-world-international-bwi-reflections"
  },
  {
    title: "1H2024 unaudited results filed",
    source: "SGX",
    date: "07 Aug 2024",
    summary:
      "Revenue stayed level year-on-year while commissions hit S$44.5M and cash holdings remained above S$571M.",
    url: "https://links.sgx.com/1.0.0/corporate-announcements/UEBJH8KQUEK6QDJO/814607_2024%2008%2007%20BW%201H2024%20Results%20Ann%20Interim_Final.pdf"
  }
];

const CLOUD_ROADMAP: CloudPlay[] = [
  {
    title: "Compliance autopilot",
    description:
      "Codify SGX, DSAS, and WFDSA obligations into workflows so every market launch ships with the right governance briefs and artefacts.",
    icon: ShieldCheck
  },
  {
    title: "Payout intelligence",
    description:
      "Model ENP levels, commission burn, and capital actions together so finance sees the knock-on effect of delisting or plan tweaks.",
    icon: ChartLineUp
  },
  {
    title: "Regulatory scenario labs",
    description:
      "Prototype licence transition, counterparty audits, and communications playbooks before regulators force your hand.",
    icon: Lightbulb
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Best World International Trust & Compensation Insights";
  const description =
    "Evaluate Best World International’s Life Harmony story, compensation mechanics, regulatory history, innovation stack, and trust posture before expanding in wellness.";
  const keywords = [
    "Best World International trust insights",
    "Best World MLM analysis",
    "Best World compensation plan",
    "Cloud MLM Software trust advisory",
    "Singapore wellness direct selling review"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/best-world-international-ltd", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PageProps = {
  params: { lang: SupportedLocale };
};

export default function BestWorldInternationalPage({ params }: PageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const trustScoreHref = "#trust-score";
  const timelineHref = "#timeline";
  const trustSnapshotHref = "#trust-insights";
  const trustFill = `${PRIMARY_TRUST_SCORE.score}%`;

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-primary/40 bg-gradient-to-br from-[#0a3b7a]/20 via-white to-[#5a189a]/18 py-20 dark:border-primary/30 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(10,59,122,0.35),transparent_55%),radial-gradient(circle_at_82%_28%,rgba(90,24,154,0.3),transparent_60%),radial-gradient(circle_at_52%_84%,rgba(10,59,122,0.25),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.75fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-1 text-sm font-semibold text-slate-900 backdrop-blur dark:border-white/20 dark:bg-white/10 dark:text-white">
              Purpose: Life Harmony-led wellness expansion
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Inside Best World International — trust & delisting diligence for wellness operators.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/80">
                Map the brand story, payout mechanics, innovation signals, and watchpoints shaping Best World International’s current chapter. Use the data-backed trust score, timeline, and critiques to stress-test your own wellness or beauty launch plan.
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

          <aside className="relative grid gap-6 rounded-3xl border border-white/40 bg-white/85 p-8 shadow-xl backdrop-blur dark:border-white/15 dark:bg-slate-950/70">
            <div className="absolute -right-10 top-14 h-28 w-28 rounded-full bg-[#0a3b7a]/20 blur-3xl" aria-hidden />
            <div className="absolute -left-12 bottom-10 h-32 w-32 rounded-full bg-[#5a189a]/20 blur-3xl" aria-hidden />
            <div className="grid gap-4 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-white to-white p-6 dark:from-primary/30 dark:via-slate-950 dark:to-slate-950">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-wide text-primary/80">Trust gauge</span>
                <span className="text-xs text-muted-foreground">Advisory estimate</span>
              </div>
              <div className="flex items-end gap-6">
                <div className="relative h-28 w-28">
                  <svg viewBox="0 0 36 36" className="h-full w-full">
                    <path
                      d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="text-primary/15"
                    />
                    <path
                      d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray={`${trustFill} 100`}
                      className="text-primary"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-semibold text-primary">{PRIMARY_TRUST_SCORE.score}</span>
                    <span className="text-xs text-muted-foreground">/100</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-primary">{PRIMARY_TRUST_SCORE.label}</p>
                  <p className="text-xs text-muted-foreground">{PRIMARY_TRUST_SCORE.summary}</p>
                </div>
              </div>
            </div>
            <div className="relative grid gap-4">
              {COMPANY_FACTS.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-slate-200/70 bg-white/90 p-4 dark:border-white/10 dark:bg-slate-950/60">
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{fact.label}</p>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">{fact.value}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{fact.detail}</p>
                </div>
              ))}
            </div>
            <div className="relative flex flex-wrap items-center gap-3">
              <Button asChild size="sm" variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:text-white">
                <Link href={pricingHref}>
                  Explore pricing
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <p className="text-xs text-slate-600 dark:text-slate-300">Need a Life Harmony-inspired stack? We’ll model plan mechanics and compliance with you.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Vision & brand pillars</h2>
          <p className="text-sm text-muted-foreground">
            Anchor your strategy in the same pillars driving Best World’s Life Harmony journey.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {VISION_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-primary/10"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">Evidence: {pillar.proof}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section id="timeline" className="container space-y-12 scroll-mt-32">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Timeline of resilience</h2>
          <p className="text-sm text-muted-foreground">
            Follow pivotal chapters shaping compliance posture and capital strategy.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-5">
          {STORY_ARC.map((event) => (
            <article
              key={event.era}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/50 bg-background/90 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">{event.era}</span>
              <h3 className="text-base font-semibold text-foreground">{event.headline}</h3>
              <p className="text-sm text-muted-foreground">{event.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Compensation breakdown</h2>
          <p className="text-sm text-muted-foreground">
            Understand how Best World funds the field and rewards investors.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {COMPENSATION_ELEMENTS.map((element) => {
            const Icon = element.icon;
            return (
              <article
                key={element.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-primary/10"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{element.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{element.description}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">Reference: {element.highlight}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Success stories</h2>
          <p className="text-sm text-muted-foreground">
            Proof points that the Life Harmony strategy delivers impact.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {SUCCESS_STORIES.map((story) => {
            const Icon = story.icon;
            return (
              <article
                key={story.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{story.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{story.description}</p>
                <div>
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">Signal: {story.metric}</span>
                  <p className="text-xs text-muted-foreground">Source: {story.proof}</p>
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
            Track differentiators that strengthen product and compliance narratives.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {INNOVATION_SIGNALS.map((signal) => {
            const Icon = signal.icon;
            return (
              <article
                key={signal.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-primary/10"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
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
            Validate reputation with third-party recognition and safeguards.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {REPUTATION_SIGNALS.map((signal) => {
            const Icon = signal.icon;
            return (
              <article
                key={signal.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
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
            Use advisory scores to frame mitigation workshops.
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
          Scores support diligence conversations; pair them with local legal advice and updated regulator guidance.
        </p>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Challenges, critics, and lessons</h2>
          <p className="text-sm text-muted-foreground">
            Spotlight pressure points so your future rollout can stay ahead of them.
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
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Mitigation: {critique.mitigation}</p>
                  <span className="text-xs text-muted-foreground">Source: {critique.source}</span>
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
            Stay current on filings, investor moves, and commentary.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {NEWS_HEADLINES.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
            >
              <div>
                <span className="text-xs uppercase tracking-wide text-primary">{item.date}</span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.source}</p>
              </div>
              <p className="text-sm text-muted-foreground">{item.summary}</p>
              <Button asChild size="sm" variant="ghost" className="justify-start gap-2 px-0 text-primary">
                <Link href={item.url} target="_blank" rel="nofollow noopener noreferrer">
                  Read more
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="container overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-white to-primary/5 p-12 shadow-lg dark:border-primary/40 dark:from-slate-950 dark:via-slate-950 dark:to-primary/10">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] md:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">How Cloud MLM Software helps</h2>
            <p className="text-sm text-slate-700 dark:text-slate-200/80">
              Replicate Best World’s strengths while neutralising its risk profile. Our strategy, engineering, and compliance teams co-design operating systems that honour Life Harmony ambitions without repeating delisting headaches.
            </p>
            <div className="grid gap-5 sm:grid-cols-3">
              {CLOUD_ROADMAP.map((play) => {
                const Icon = play.icon;
                return (
                  <div key={play.title} className="rounded-2xl border border-white/40 bg-white/90 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-950/60">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <h3 className="text-sm font-semibold text-foreground">{play.title}</h3>
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground">{play.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Book a working session
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={pricingHref}>
                  Review solution bundles
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(rawLocale: string): SupportedLocale {
  if (isSupportedLocale(rawLocale)) {
    return rawLocale;
  }

  return i18n.defaultLocale as SupportedLocale;
}
