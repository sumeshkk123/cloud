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
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  CalendarClock,
  Factory,
  Globe2,
  HandCoins,
  LineChart,
  ShieldCheck,
  Sparkles,
  Trophy,
  Zap
} from "lucide-react";
import {
  BatteryCharging,
  ChartLineUp,
  GlobeHemisphereEast,
  Lightning,
  NotePencil,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

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
  score: 74,
  label: "Overall trust score",
  summary:
    "Composite indicator covering regulatory posture, customer sentiment, and opportunity realism for Ambit-style energy ventures."
};

const COMPANY_FACTS: CompanyFact[] = [
  {
    label: "DSN Global 100",
    value: "#14",
    description: "Ranked fourteenth in the 2024 Direct Selling News Global 100 for revenue scale and field performance.",
    icon: Award
  },
  {
    label: "Revenue",
    value: "$1.3B",
    description: "Approximate retail electricity and natural gas revenue reported in the most recent public filings.",
    icon: LineChart
  },
  {
    label: "Founded",
    value: "2006",
    description: "Launched in Dallas, Texas by Jere Thompson Jr. and Chris Chambless with an energy choice mission.",
    icon: CalendarClock
  },
  {
    label: "Employees",
    value: "430+",
    description: "Corporate, compliance, and customer care specialists supporting consultants across markets.",
    icon: UsersThree
  },
  {
    label: "Primary markets",
    value: "U.S., Canada, Japan",
    description: "Retail operations in deregulated territories with localized tariffs and marketing assets.",
    icon: Globe2
  },
  {
    label: "Product focus",
    value: "Electricity & gas",
    description: "Residential and small-business supply plans with loyalty credits, smart home bundles, and community solar.",
    icon: Zap
  }
];

const VISION_PILLARS: VisionPillar[] = [
  {
    title: "Choice-driven reliability",
    description:
      "Pair stable energy supply with transparent pricing so consultants confidently present alternatives to incumbent utilities.",
    proof: "Texas PUC retail provider licensing and regional supply partnerships.",
    icon: Lightning
  },
  {
    title: "Advisor empowerment",
    description:
      "Equip consultants with dashboards, scripts, and training academies that simplify complex rate structures for households.",
    proof: "Ambit University training resources and leadership events.",
    icon: NotePencil
  },
  {
    title: "Compliance-first delivery",
    description:
      "Automate disclosures, contract renewals, and quality assurance audits across multi-state regulatory landscapes.",
    proof: "PUC filings and escalated QA teams embedded in advisor onboarding.",
    icon: ShieldCheck
  },
  {
    title: "Sustainable innovation",
    description:
      "Expand into solar, efficiency, and smart-device bundles that align energy savings with loyalty incentives.",
    proof: "Community solar pilots and smart home add-ons announced in Vistra retail updates.",
    icon: Sparkles
  }
];

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    era: "2006",
    headline: "Retail electric launch in Texas",
    detail:
      "Ambit Energy secures its Texas retail electric provider license, building its first consultant network around reliable residential supply."
  },
  {
    era: "2010",
    headline: "Inc. 500 #1 fastest-growing company",
    detail:
      "Inc. Magazine recognises Ambit as the fastest-growing private company in America, spotlighting its direct selling model and rapid customer growth."
  },
  {
    era: "2013",
    headline: "International expansion into Japan",
    detail:
      "The brand pilots operations in deregulating Japanese prefectures with localized support centres and translated advisor materials."
  },
  {
    era: "2017",
    headline: "Canada launch and mobile enablement",
    detail:
      "Ontario entry and the MyAmbit mobile app give consultants live rate data, outage alerts, and contract management on the go."
  },
  {
    era: "2019",
    headline: "Vistra acquisition announced",
    detail:
      "Vistra Corp. acquires Ambit Energy to strengthen its retail portfolio, expanding compliance resources and energy procurement leverage."
  },
  {
    era: "2023-2024",
    headline: "Community solar and AI-driven quoting",
    detail:
      "New York and Massachusetts pilots bundle community solar with AI-assisted proposals, improving renewable adoption and retention."
  }
];

const COMPENSATION_ELEMENTS: CompensationElement[] = [
  {
    title: "Customer Acquisition Bonuses (CAB)",
    description:
      "Upfront bonuses reward consultants for verified customer enrollments across electricity and natural gas products.",
    highlight: "Bonuses tier by rate class and market, reinforcing compliant onboarding checklists.",
    icon: HandCoins
  },
  {
    title: "Residual income on usage",
    description:
      "Monthly residuals track customer energy consumption, aligning consultant earnings with long-term service quality.",
    highlight: "True-up adjustments ensure wholesale cost swings are factored before payout execution.",
    icon: LineChart
  },
  {
    title: "Leadership development pools",
    description:
      "Executive and National Consultant pools distribute overrides to teams that balance customer volume with licensed advisor mentorship.",
    highlight: "Leg qualifications prevent single-leg dependency and encourage cross-market collaboration.",
    icon: Trophy
  },
  {
    title: "Incentives & recognition",
    description:
      "Travel rewards, annual Achievers Club events, and sustainability challenges keep field engagement high.",
    highlight: "Scorecards blend revenue performance with compliance and customer satisfaction milestones.",
    icon: Award
  }
];

const SUCCESS_STORIES: SuccessStory[] = [
  {
    title: "MyAmbit Rewards loyalty flywheel",
    description:
      "Bill credits, travel experiences, and refer-a-friend perks convert satisfied customers into long-term members and referral advocates.",
    metric: "High retention tiers tied to loyalty credit redemption",
    proof: "MyAmbit Rewards program overviews and customer marketing collateral",
    icon: HandCoins
  },
  {
    title: "Ambit Cares community impact",
    description:
      "Consultants and employees partner with Feeding America(R) to deliver millions of meals while raising energy assistance awareness.",
    metric: "Meal donations and volunteer hours reported in Ambit Cares summaries",
    proof: "Ambit Cares annual impact updates",
    icon: UsersThree
  },
  {
    title: "Advisor academies and compliance labs",
    description:
      "Leadership academies, Power Trip national events, and compliance labs give advisors playbooks for every regulatory environment.",
    metric: "Graduation rates and certification badges tracked via Ambit University",
    proof: "Ambit University curriculum materials",
    icon: NotePencil
  }
];

const INNOVATION_SIGNALS: InnovationSignal[] = [
  {
    title: "MyAmbit App intelligence",
    description:
      "Mobile dashboards blend usage insights, outage notifications, and renewal reminders for consultants and customers alike.",
    proof: "App release notes and customer communications from Ambit Energy",
    icon: GlobeHemisphereEast
  },
  {
    title: "Community solar bundling",
    description:
      "Partnerships with utility-scale solar operators let Ambit customers offset usage while earning loyalty benefits.",
    proof: "Vistra retail announcements covering community solar pilots",
    icon: BatteryCharging
  },
  {
    title: "AI-assisted pricing proposals",
    description:
      "Rate engine enhancements surface compliant quotes by customer class, seasonality, and risk appetite in real time.",
    proof: "Internal roadmap briefings shared at Power Trip and leadership summits",
    icon: ChartLineUp
  }
];

const REPUTATION_SIGNALS: ReputationSignal[] = [
  {
    title: "Direct Selling Association member",
    detail:
      "Ambit Energy participates in DSA ethics reviews and adheres to published codes of conduct for marketing practices.",
    evidence: "Direct Selling Association member directory",
    icon: BadgeCheck
  },
  {
    title: "Public regulatory filings",
    detail:
      "Retail electric and gas licenses remain active with the Texas PUC, NY PSC, Ontario Energy Board, and other commissions.",
    evidence: "State commission licence databases",
    icon: Factory
  },
  {
    title: "Better Business Bureau listing",
    detail:
      "BBB profiles track complaint responsiveness and consumer sentiment for Ambit's retail energy services.",
    evidence: "BBB.org company listing",
    icon: ShieldCheck
  }
];

const TRUST_SCORES: TrustScore[] = [
  {
    title: "Compliance posture",
    score: "82/100",
    insight:
      "Multi-state licensing, DSA membership, and Vistra governance support robust compliance, though rate-change communication must stay vigilant.",
    methodology: "Weighted by regulatory filings, association status, and disclosure controls."
  },
  {
    title: "Customer sentiment",
    score: "66/100",
    insight:
      "Loyalty programs and outage communications drive advocacy, yet billing disputes during rate spikes can pressure satisfaction scores.",
    methodology: "Blend of BBB feedback, consumer reviews, and program retention metrics."
  },
  {
    title: "Opportunity realism",
    score: "74/100",
    insight:
      "Compensation ties earnings to real consumption with advisor licensing requirements, but ongoing education is needed for sustainable margins.",
    methodology: "Assessed via compensation documentation, training rigor, and advisor income disclosures."
  }
];

const CRITIQUES: Critique[] = [
  {
    title: "Wholesale price volatility",
    description:
      "Winter storms or supply shocks can spike wholesale costs, leading to unexpected customer bills and potential reputational damage.",
    mitigation:
      "Alert advisors with hedging updates, automate rate-change approvals, and deploy rapid retention outreach scripts.",
    source: "PUC post-event reviews and winter storm investigations",
    icon: Lightning
  },
  {
    title: "Regulatory enforcement",
    description:
      "State commissions scrutinise telemarketing claims, door-to-door conduct, and contract disclosures for every energy campaign.",
    mitigation:
      "Centralise approved messaging, timestamp consent trails, and schedule quarterly compliance audits tied to payout eligibility.",
    source: "State commission enforcement dockets",
    icon: ShieldCheck
  },
  {
    title: "Advisor licensing fatigue",
    description:
      "Reps can struggle with recurring licensing fees, continuing education, and market-by-market onboarding timelines.",
    mitigation:
      "Offer reimbursement tiers, digital CE tracking, and leadership mentorship to maintain activation momentum.",
    source: "Advisor focus groups and onboarding surveys",
    icon: UsersThree
  }
];

const NEWS_HEADLINES: NewsItem[] = [
  {
    title: "Vistra to acquire Ambit Energy",
    source: "Vistra Corp. press release",
    date: "September 2019",
    summary:
      "The acquisition expands Vistra's retail footprint and injects capital, procurement leverage, and compliance resources into Ambit's network.",
    url: "https://investor.vistra.com/news/press-release-details/2019/Vistra-to-Acquire-Ambit-Energy/default.aspx"
  },
  {
    title: "Ambit Energy named Inc. 500 #1 fastest-growing company",
    source: "Inc. Magazine",
    date: "August 2010",
    summary:
      "Inc. recognises Ambit's consultant-led model and rapid customer acquisition, signaling strong momentum in deregulated energy markets.",
    url: "https://www.inc.com/inc5000/2010/company/ambit-energy"
  },
  {
    title: "Ambit launches community solar options for Northeast customers",
    source: "Globe Newswire",
    date: "August 2023",
    summary:
      "New community solar bundles provide renewable energy credits and loyalty incentives for Ambit households in Massachusetts and New York.",
    url: "https://www.globenewswire.com/news-release/2023/08/01/2716390/0/en/Vistra-s-Ambit-Energy-Launches-Community-Solar-for-Massachusetts-Customers.html"
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Energy-grade compensation modelling",
    description:
      "Simulate CAB tiers, residual payouts, and multi-market tax rules before launch with auditable digital twins.",
    icon: ChartLineUp
  },
  {
    title: "Regulatory intelligence hub",
    description:
      "Version-controlled scripts, disclosures, and e-sign journeys keep every energy advisor compliant in real time.",
    icon: ShieldCheck
  },
  {
    title: "Customer lifetime orchestration",
    description:
      "Blend smart-meter data, outage tickets, and loyalty triggers to boost retention without manual spreadsheet work.",
    icon: Sparkles
  },
  {
    title: "AI-assisted field enablement",
    description:
      "Deliver contextual prompts, pricing insights, and renewal playbooks to every consultant workspace.",
    icon: UsersThree
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Ambit Energy MLM Company Blueprint";
  const description =
    "Explore Ambit Energy's history, compensation plan, innovation signals, and trust posture-then learn how Cloud MLM Software powers compliant retail energy growth.";
  const keywords = [
    "Ambit Energy MLM analysis",
    "Ambit compensation plan breakdown",
    "Retail energy direct selling software",
    "Ambit Energy trust score",
    "Cloud MLM Software for energy companies"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/ambit-energy", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AmbitPageProps = {
  params: { lang: SupportedLocale };
};

export default function AmbitEnergyPage({ params }: AmbitPageProps) {
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
      <section className="relative overflow-hidden border-b border-primary/30 bg-gradient-to-br from-amber-50 via-white to-sky-50 py-20 dark:border-primary/20 dark:from-slate-950 dark:via-slate-950 dark:to-sky-950/40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(255,163,41,0.23),transparent_55%),radial-gradient(circle_at_82%_22%,rgba(14,165,233,0.28),transparent_60%),radial-gradient(circle_at_48%_82%,rgba(15,23,42,0.12),transparent_62%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-primary/30 dark:bg-primary/20 dark:text-foreground">
              Energy commerce thought leadership
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Ambit Energy MLM company blueprint for deregulated power and natural gas growth.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/80">
                Analyse Ambit Energy&apos;s journey from Texas startup to global retail energy contender. Review its vision pillars, consultant compensation, innovation moves, and critics-then translate the lessons into your next energy-focused MLM launch with Cloud MLM Software.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={trustInsightsHref}>
                  Review trust insights
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/25 dark:text-foreground">
                <Link href={timelineHref}>
                  Explore company timeline
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={trustScoreHref}>
                  View trust score snapshot
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="underline-offset-4">
                <Link href={contactHref}>
                  Talk to energy strategists
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-6 rounded-3xl border border-primary/30 bg-white/70 p-6 shadow-lg backdrop-blur dark:border-primary/20 dark:bg-slate-950/65">
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-border/60 bg-background/90 p-6 dark:border-border/40 dark:bg-slate-950/80">
              <div
                className="relative flex h-40 w-40 items-center justify-center rounded-full"
                style={gaugeStyle}
                aria-hidden
              >
                <div className="absolute inset-5 flex flex-col items-center justify-center rounded-full bg-white text-center shadow-inner dark:bg-slate-950">
                  <span className="text-4xl font-semibold text-foreground">{PRIMARY_TRUST_SCORE.score}</span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Trust score</span>
                </div>
              </div>
              <div className="space-y-1 text-center">
                <p className="text-sm font-semibold text-foreground">{PRIMARY_TRUST_SCORE.label}</p>
                <p className="text-xs text-muted-foreground">{PRIMARY_TRUST_SCORE.summary}</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {COMPANY_FACTS.slice(0, 4).map((fact) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={fact.label}
                    className="flex flex-col gap-2 rounded-2xl border border-border/60 bg-background/90 p-4 dark:border-border/40 dark:bg-slate-950/70"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{fact.label}</span>
                    </div>
                    <span className="text-xl font-semibold text-foreground">{fact.value}</span>
                    <p className="text-xs text-muted-foreground">{fact.description}</p>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ambit Energy at a glance</h2>
            <p className="text-sm text-muted-foreground">
              Anchor your energy MLM planning with the metrics and structural differentiators that make Ambit a repeat DSN Global 100 performer.
            </p>
          </div>
          <p className="rounded-3xl border border-primary/30 bg-primary/5 p-5 text-sm text-primary dark:border-primary/40 dark:bg-primary/15">
            Cloud MLM Software equips energy leaders with governance, analytics, and AI workflows so your consultants present compliant, data-backed offers in every deregulated territory.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {COMPANY_FACTS.map((fact) => {
            const Icon = fact.icon;
            return (
              <article
                key={fact.label}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{fact.label}</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{fact.value}</h3>
                <p className="text-sm text-muted-foreground">{fact.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Vision pillars powering Ambit&apos;s growth</h2>
          <p className="text-sm text-muted-foreground">
            Translate Ambit&apos;s guiding principles into your own energy venture, balancing revenue ambition with customer trust.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {VISION_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
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
      </section>

      <section id="timeline" className="container space-y-12 scroll-mt-32">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Company timeline</h2>
            <p className="text-sm text-muted-foreground">
              Map the milestones that shaped Ambit Energy-and use them to anticipate the governance, technology, and scaling turning points in your roadmap.
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            Each milestone redefined consultant enablement: from licensing foundations to loyalty upgrades and AI-assisted quoting. Align your launch plans with similar operational checkpoints.
          </p>
        </div>
        <ol className="relative space-y-10 border-l border-border/60 pl-6 dark:border-border/40">
          {TIMELINE_EVENTS.map((event) => (
            <li key={event.era} className="space-y-3">
              <span className="absolute -left-2 mt-1 inline-flex h-4 w-4 rounded-full border border-primary/40 bg-primary/80 shadow-sm" aria-hidden />
              <div className="space-y-2 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{event.headline}</h3>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    {event.era}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{event.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Compensation breakdown</h2>
          <p className="text-sm text-muted-foreground">
            See how Ambit&apos;s plan balances immediate customer acquisition rewards with residual income and leadership incentives.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {COMPENSATION_ELEMENTS.map((element) => {
            const Icon = element.icon;
            return (
              <article
                key={element.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-primary/15"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{element.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{element.description}</p>
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-3 text-xs text-primary dark:border-primary/40 dark:bg-primary/10">
                  Highlight: {element.highlight}
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
            Understand the customer, community, and field wins that keep Ambit&apos;s consultants energised and mission-aligned.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {SUCCESS_STORIES.map((story) => {
            const Icon = story.icon;
            return (
              <article
                key={story.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{story.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{story.description}</p>
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">Metric: {story.metric}</span>
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">Proof: {story.proof}</span>
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
            Track the product and technology investments that keep Ambit&apos;s field story compelling.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {INNOVATION_SIGNALS.map((signal) => {
            const Icon = signal.icon;
            return (
              <article
                key={signal.title}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
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
            Validate Ambit&apos;s standing with regulators, industry bodies, and consumer watchdogs before you mirror its playbook.
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
            Use these advisory scores to benchmark your compliance, sentiment, and opportunity readiness against Ambit&apos;s operating model.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {TRUST_SCORES.map((score) => (
            <article
              key={score.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-primary/15"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-foreground">{score.title}</h3>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary dark:border-primary/40 dark:bg-primary/20">
                  {score.score}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{score.insight}</p>
              <span className="text-xs uppercase tracking-wide text-muted-foreground">Methodology: {score.methodology}</span>
            </article>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Scores are directional inputs to risk and trust workshops. Validate them with current legal counsel guidance and market-specific regulatory reviews.
        </p>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Critiques, lessons, and mitigation</h2>
          <p className="text-sm text-muted-foreground">
            Anticipate the questions regulators, media, and customers ask Ambit-and design safeguards before your launch.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CRITIQUES.map((critique) => {
            const Icon = critique.icon;
            return (
              <article
                key={critique.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">
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
            Keep leadership, compliance, and marketing teams aligned with third-party coverage of Ambit&apos;s evolution.
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

      <section className="relative overflow-hidden border-y border-primary/30 bg-gradient-to-br from-primary/10 via-background to-amber-50 py-20 dark:border-primary/20 dark:from-primary/15 dark:via-slate-950 dark:to-amber-950/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_24%,rgba(54,179,95,0.25),transparent_60%),radial-gradient(circle_at_80%_26%,rgba(14,165,233,0.28),transparent_64%)]" aria-hidden />
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary dark:border-primary/40 dark:bg-primary/20 dark:text-foreground">
              How Cloud MLM Software helps
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Launch Ambit-level energy experiences with governance, analytics, and AI built in.
            </h2>
            <p className="text-sm text-muted-foreground">
              From compensation modelling to regulatory intelligence, we deliver the backbone Ambit uses-without importing its legacy complexity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={pricingHref}>
                  Explore pricing models
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/25 dark:text-foreground">
                <Link href={contactHref}>
                  Build your roadmap
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {CLOUD_PLAYS.map((play) => {
              const Icon = play.icon;
              return (
                <article
                  key={play.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
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
