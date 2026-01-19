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
  Award,
  Factory,
  FileText,
  Globe2,
  LifeBuoy,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Gavel
} from "lucide-react";
import {
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
  score: 54,
  label: "Overall trust score",
  summary:
    "Court-supervised liquidation, asset divestitures, and continuing partner rebuilds balance structure with execution risk for ARIIX."
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
    label: "Founded",
    value: "2011",
    detail:
      "Inc. 5000 profile (Aug 2020) records ARIIX's launch in 2011 under co-founder Fred Cooper."
  },
  {
    label: "Employees",
    value: "201–500",
    detail:
      "Inc. 5000 listing places the workforce in the 201–500 range with headquarters in Bountiful, Utah."
  },
  {
    label: "Global footprint",
    value: "20+ markets",
    detail:
      "Inc. 5000 notes distribution across Australia, Greater China, Japan, Mexico, Europe, Israel, Singapore, South Korea, and the United States."
  },
  {
    label: "Plan effective date",
    value: "May 4, 2023",
    detail:
      "Stretto's case tracker confirms the joint liquidation plan became effective on 4 May 2023 for NewAge, ARIIX LLC, and Morinda affiliates."
  }
];

const VISION_PILLARS: VisionPillar[] = [
  {
    title: "Health-first formulations",
    description:
      "ARIIX built its proposition on efficacious, toxin-free products created with world-renowned experts and delivered via field advocates.",
    proof: "Inc. 5000 — ARIIX company profile, Aug 11 2020.",
    icon: Sparkles
  },
  {
    title: "Global partner network",
    description:
      "Operations span Asia, Europe, and the Americas, requiring multilingual playbooks and country-specific nutritional compliance.",
    proof: "Inc. 5000 — ARIIX company profile lists active markets across APAC, Europe, and North America.",
    icon: Globe2
  },
  {
    title: "Court-supervised governance",
    description:
      "The confirmed liquidation plan installed a dedicated trustee and CRO-backed oversight to steward assets and claims.",
    proof: "U.S. Bankruptcy Court (D. Del.) — Confirmation Order, Docket 527, designating Steven Balasiano as Liquidation Trustee.",
    icon: ShieldCheck
  },
  {
    title: "Lean distribution shift",
    description:
      "Divesting the Legacy Distribution direct-store network signalled a tighter focus on asset-light, field-led commercial models.",
    proof: "SEC Form 8-K filed Sep 15 2022 details the Legacy Distribution asset purchase agreement.",
    icon: RefreshCcw
  }
];

const STORY_ARC: TimelineEvent[] = [
  {
    era: "2011",
    headline: "Launch of ARIIX wellness brand",
    detail:
      "Founders framed the business around toxin-free wellness solutions built with expert formulators, per Inc. 5000 disclosures."
  },
  {
    era: "2016–2020",
    headline: "Five consecutive Inc. 5000 rankings",
    detail:
      "ARIIX earned placements from No. 1546 in 2016 through No. 4667 in 2020, reflecting sustained revenue expansion."
  },
  {
    era: "Aug 30, 2022",
    headline: "Voluntary Chapter 11 filing",
    detail:
      "NewAge, ARIIX LLC, and Morinda entities entered Chapter 11 in Delaware to pursue a court-managed sale and DIP financing."
  },
  {
    era: "May 4, 2023",
    headline: "Plan effective with liquidation trust",
    detail:
      "The confirmed plan became effective, appointing Steven Balasiano as Liquidation Trustee to manage wind-down and recoveries."
  }
];

const COMPENSATION_ELEMENTS: CompensationElement[] = [
  {
    title: "Independent retail advocates",
    description:
      "Independent representatives curate and sell ARIIX wellness programs, anchoring revenue in relationship-driven retailing.",
    highlight: "Inc. 5000 outlines that ARIIX markets its products through independent representatives rather than corporate storefronts.",
    icon: ChartLineUp
  },
  {
    title: "Multi-market volume strategy",
    description:
      "Field leaders balance packs, pricing, and compliance across North America, Europe, and Asia to keep cross-border enrolments sustainable.",
    highlight: "Inc. 5000 documents active distribution in Australia, Greater China, Europe, Israel, Singapore, South Korea, and the US.",
    icon: GlobeHemisphereWest
  },
  {
    title: "Asset-light fulfilment realignment",
    description:
      "The 2022 Legacy Distribution sale transitioned direct-store logistics to a specialist buyer, freeing capital for field enablement.",
    highlight: "SEC Form 8-K (Sep 15 2022) details the $4.5M cash sale of the DSD business to Legacy Distribution Group.",
    icon: Factory
  },
  {
    title: "Trust-monitored payout priorities",
    description:
      "Commission sequencing now follows liquidation trust governance that prioritises allowed claims and compliant programme spend.",
    highlight: "Delaware plan confirmation order and supplement describe the Liquidation Trust Agreement and trustee compensation oversight.",
    icon: ShieldCheck
  }
];

const SUCCESS_STORIES: SuccessStory[] = [
  {
    title: "Inc. 5000 momentum",
    description:
      "ARIIX sustained five straight appearances on the Inc. 5000 list, validating multi-year revenue growth.",
    metric: "Inc. 5000 ranks: No. 1546 (2016) to No. 4667 (2020)",
    proof: "Inc. 5000 — ARIIX company profile, Aug 11 2020.",
    icon: TrendingUp
  },
  {
    title: "Global wellness footprint",
    description:
      "Distribution persisted across 20+ countries, supporting multilingual customer journeys even amid restructuring.",
    metric: "Markets include Australia, Greater China, Japan, Mexico, Europe, Israel, Singapore, South Korea, and the US.",
    proof: "Inc. 5000 — ARIIX company profile lists the multinational footprint.",
    icon: Globe2
  },
  {
    title: "Plan confirmation achieved",
    description:
      "Court approval of the third amended plan delivered a structured path for asset stewardship and stakeholder recoveries.",
    metric: "Confirmation Order entered March 1 2023 with Liquidation Trustee appointment.",
    proof: "U.S. Bankruptcy Court (D. Del.) — Docket 527, Confirmation Order.",
    icon: ShieldCheck
  }
];

const INNOVATION_SIGNALS: Innovation[] = [
  {
    title: "Distribution network divestiture",
    description:
      "Selling the DSD unit to Legacy Distribution unlocked capital and shifts fulfilment risk to a specialist logistics partner.",
    proof: "SEC Form 8-K filed Sep 15 2022 describes the asset purchase agreement and consideration structure.",
    icon: RefreshCcw
  },
  {
    title: "Transparent case data hub",
    description:
      "Stretto's portal centralises petitions, plan materials, and contact points so consultants and creditors can self-serve updates.",
    proof: "Stretto — NewAge, Inc., et al. case information site publishes docket links and status milestones.",
    icon: FileText
  },
  {
    title: "Leadership rebuild under Partner.Co",
    description:
      "Partner.Co's org chart showcases a 51–200 person leadership bench guiding post-bankruptcy operations and digital programmes.",
    proof: "The Org — Partner.Co profile highlights executive roles and headcount range.",
    icon: UsersThree
  }
];

const REPUTATION_SIGNALS: ReputationSignal[] = [
  {
    title: "Liquidation Trustee accountability",
    detail:
      "Steven Balasiano of MHR Advisory Group now oversees trust governance, adding fiduciary rigour to payout decisions.",
    evidence: "Confirmation Order (Docket 527) and Plan Supplement designate the Liquidation Trustee and agreement terms.",
    icon: ShieldCheck
  },
  {
    title: "Public docket transparency",
    detail:
      "The Stretto case portal provides real-time filings, timelines, and notice lists for stakeholders worldwide.",
    evidence: "Stretto — NewAge, Inc., et al. case hub with key dates and downloadable pleadings.",
    icon: FileText
  },
  {
    title: "Recognised growth track record",
    detail:
      "Repeated Inc. 5000 placements demonstrate external validation of ARIIX's revenue trajectory pre-restructuring.",
    evidence: "Inc. 5000 — ARIIX profile summarising five consecutive rankings.",
    icon: Award
  }
];

const CRITICAL_WATCHPOINTS: Critique[] = [
  {
    title: "Chapter 11 legacy",
    description:
      "The August 2022 petitions cite liquidity stress and triggered defaults, signalling creditors expect disciplined cash governance.",
    mitigation: "Run monthly stress tests, align launch cadence with DIP and trust covenants, and codify cash escalation protocols.",
    source: "SEC Form 8-K — Voluntary Chapter 11 filing, Aug 30 2022.",
    icon: AlertTriangle
  },
  {
    title: "Channel transition risk",
    description:
      "Divesting direct-store distribution hands fulfilment to Legacy Distribution, increasing reliance on third-party SLAs and inventory accuracy.",
    mitigation: "Deploy SLA dashboards, dual-source critical SKUs, and negotiate clawback triggers for service lapses.",
    source: "SEC Form 8-K — Legacy Distribution asset sale, Sep 15 2022.",
    icon: Gavel
  },
  {
    title: "Liquidation trust sequencing",
    description:
      "Plan documents prioritise trust-managed recoveries, which can slow discretionary spend on field incentives until claims clear.",
    mitigation: "Engage early with the trustee, document compliance, and forecast commission availability under the trust waterfall.",
    source: "U.S. Bankruptcy Court, Delaware — Confirmation order and Liquidation Trust Agreement, Mar 1 2023.",
    icon: LifeBuoy
  }
];

const TRUST_SCORES: TrustScore[] = [
  {
    title: "Governance stability",
    score: "55/100",
    insight:
      "Court supervision, a named Liquidation Trustee, and CRO support provide structure but require vigilant execution against plan milestones.",
    methodology: "Weighted on plan governance terms, trustee controls, and transparency available via the public docket."
  },
  {
    title: "Field opportunity realism",
    score: "50/100",
    insight:
      "Independent reps remain core, yet DSD divestiture and trust-managed cash mean growth narratives must lean on field efficiency over hype.",
    methodology: "Assesses sales model dependency, asset sale disclosures, and commission prioritisation within liquidation protocols."
  },
  {
    title: "Market sentiment",
    score: "48/100",
    insight:
      "Inc. 5000 history shows momentum, but Chapter 11 headlines temper investor confidence until a new capital structure proves resilient.",
    methodology: "Blends historical growth recognition with bankruptcy filings and current stakeholder communications."
  }
];

const NEWS_HEADLINES: NewsItem[] = [
  {
    title: "NewAge and affiliates commence Chapter 11 cases",
    source: "SEC Form 8-K",
    date: "Aug 30, 2022",
    summary:
      "Filing outlines voluntary petitions for NewAge, ARIIX LLC, and Morinda entities alongside DIP-backed stalking horse sale plans.",
    url: "https://www.sec.gov/Archives/edgar/data/1579823/000149315222024420/form8-k.htm"
  },
  {
    title: "Legacy Distribution to acquire DSD assets",
    source: "SEC Form 8-K",
    date: "Sep 15, 2022",
    summary:
      "Subsidiaries NABC, Inc. and NABC Properties agreed to sell direct-store distribution assets for $4.5M cash, subject to court approval.",
    url: "https://www.sec.gov/Archives/edgar/data/1579823/000149315222025994/form8-k.htm"
  },
  {
    title: "Court confirms joint liquidation plan",
    source: "U.S. Bankruptcy Court (D. Del.)",
    date: "Mar 1, 2023",
    summary:
      "Confirmation order approves the third amended combined disclosure statement and plan, installing a liquidation trust for stakeholders.",
    url: "https://cases.stretto.com/public/X198/11937/PLEADINGS/1193703012380000000134.pdf"
  }
];

const CLOUD_ROADMAP: CloudPlay[] = [
  {
    title: "Trust analytics workspace",
    description:
      "Aggregate plan covenants, trustee notices, and cash triggers so leadership can forecast commission releases with confidence.",
    icon: ChartLineUp
  },
  {
    title: "Global product compliance hub",
    description:
      "Track registration, ingredient, and labelling requirements across the 20+ markets ARIIX serves to avoid relaunch delays.",
    icon: GlobeHemisphereWest
  },
  {
    title: "Partner lifecycle governance",
    description:
      "Digitise SLA monitoring after the Legacy Distribution divestiture, tying alerts to procurement playbooks and escalation paths.",
    icon: Handshake
  },
  {
    title: "Claims & communication console",
    description:
      "Coordinate FAQs, timelines, and documentation for consultants and creditors engaging with the liquidation trust process.",
    icon: Factory
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "ARIIX Trust & Compensation Insights";
  const description =
    "Review ARIIX's wellness heritage, restructuring milestones, compensation levers, and trust signals to inform your next direct selling build.";
  const keywords = [
    "ARIIX trust insights",
    "ARIIX MLM analysis",
    "ARIIX compensation plan review",
    "Cloud MLM Software trust advisory",
    "ARIIX liquidation update"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/arix", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ArixPageProps = {
  params: { lang: SupportedLocale };
};

export default function ArixPage({ params }: ArixPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const trustScoreHref = "#trust-score";
  const timelineHref = "#timeline";
  const trustSnapshotHref = "#trust-insights";
  const trustFill = `${PRIMARY_TRUST_SCORE.score}%`;

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-primary/40 bg-gradient-to-br from-[#11284d]/18 via-white to-[#49a4c2]/14 py-20 dark:border-primary/30 dark:from-slate-950 dark:via-slate-950 dark:to-sky-900/35">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(17,40,77,0.42),transparent_55%),radial-gradient(circle_at_78%_26%,rgba(73,164,194,0.32),transparent_60%),radial-gradient(circle_at_46%_84%,rgba(29,78,137,0.26),transparent_55%)]"
          aria-hidden
        />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.75fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-1 text-sm font-semibold text-slate-900 backdrop-blur dark:border-white/20 dark:bg-white/10 dark:text-white">
              Mission: Rebuilding wellness equity after Chapter 11
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Inside ARIIX — Trust & Compensation Insights
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/80">
                Evaluate how ARIIX&apos;s health-first heritage, restructuring milestones, global field reach, and trust controls shape the path forward.
                Navigate company facts, timeline, compensation mechanics, innovations, critiques, and live headlines to guide your due diligence.
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
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:text-foreground"
              >
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
            <div className="grid gap-4">
              {COMPANY_FACTS.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-slate-200/60 bg-white/80 p-4 dark:border-slate-700/60 dark:bg-slate-950/70">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">{fact.label}</p>
                  <p className="text-xl font-semibold text-foreground">{fact.value}</p>
                  <p className="text-xs text-muted-foreground">{fact.detail}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Vision & brand pillars</h2>
          <p className="text-sm text-muted-foreground">
            Map the strategic pillars steering ARIIX through liquidation-era governance while preserving its wellness-led identity.
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
            Follow the key milestones from launch through restructuring to understand momentum, pressure points, and recovery signals.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {STORY_ARC.map((event) => (
            <article
              key={event.headline}
              className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
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
            Stress-test how ARIIX compensates its field today, accounting for asset divestitures, global reach, and trust-governed payouts.
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
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{element.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{element.description}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">Evidence: {element.highlight}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Success stories</h2>
          <p className="text-sm text-muted-foreground">
            Highlight the achievements that demonstrate ARIIX&apos;s ability to scale, adapt, and secure formal restructuring outcomes.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {SUCCESS_STORIES.map((story) => {
            const Icon = story.icon;
            return (
              <article
                key={story.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{story.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{story.description}</p>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">{story.metric}</p>
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
            Capture how ARIIX and its parent are modernising operations, transparency, and leadership post-petition.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {INNOVATION_SIGNALS.map((signal) => {
            const Icon = signal.icon;
            return (
              <article
                key={signal.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
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
            Combine third-party recognitions and court governance markers to shape your trust narrative.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {REPUTATION_SIGNALS.map((signal) => {
            const Icon = signal.icon;
            return (
              <article
                key={signal.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
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
            Translate qualitative findings into advisory scores to prioritise due diligence workflows.
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Critiques & lessons</h2>
          <p className="text-sm text-muted-foreground">
            Flag material risks so you can engineer mitigation strategies ahead of your next launch or partnership discussion.
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
                <p className="text-sm font-semibold text-foreground">Mitigation:</p>
                <p className="text-sm text-muted-foreground">{critique.mitigation}</p>
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
            Monitor the latest filings and announcements shaping ARIIX&apos;s restructuring trajectory.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {NEWS_HEADLINES.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:border-primary/60 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/70"
            >
              <div className="space-y-2">
                <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {item.source}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.date}</p>
              </div>
              <p className="text-sm text-muted-foreground">{item.summary}</p>
              <Link
                href={item.url}
                className="text-sm font-semibold text-primary hover:underline"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Read the document
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How Cloud MLM Software helps</h2>
          <p className="text-sm text-muted-foreground">
            Turn restructuring insights into launch-ready infrastructure with our advisory and platform accelerators.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
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
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={contactHref}>
              Schedule a strategy session
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={pricingHref}>
              Explore pricing options
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
