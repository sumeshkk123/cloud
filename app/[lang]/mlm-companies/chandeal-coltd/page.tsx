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
  Award,
  BadgeCheck,
  Boxes,
  ClipboardCheck,
  Factory,
  Gavel,
  Globe2,
  HandCoins,
  HeartHandshake,
  Layers,
  LifeBuoy,
  RefreshCcw,
  Ruler,
  ShieldCheck,
  Sparkles,
  Timer,
  TrendingUp,
  Users,
  Search
} from "lucide-react";
import {
  ChartLineUp,
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
  summary: "Weighted across association membership, compliance gating, and field sentiment signals."
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
    value: "¥64B",
    detail: "FY2019 net sales reported in Network Business’s industry ranking (net-team.mlm.jp)."
  },
  {
    label: "Founded",
    value: "1985",
    detail: "Incorporated in Nara after scaling the integrated shapewear manufacturing model launched in 1982."
  },
  {
    label: "Markets",
    value: "Japan & Taiwan",
    detail: "Nationwide lounges plus Taipei and Kaohsiung salons support localized fittings and service (company history)."
  },
  {
    label: "Capital",
    value: "¥50M",
    detail: "Registered capital disclosed in the corporate profile alongside head office operations."
  }
];

const VISION_PILLARS: VisionPillar[] = [
  {
    title: "Body confidence craftsmanship",
    description:
      "Chandeal treats shapewear as daily foundations that restore natural lines through pattern engineering and fabric discipline.",
    proof: "Corporate greeting details the mission to help women maintain ideal silhouettes with precise construction.",
    icon: Sparkles
  },
  {
    title: "Made-in-Japan discipline",
    description:
      "Materials, dyeing, and sewing stay in domestic facilities so every visible and hidden component meets the same quality bar.",
    proof: "Company message reaffirms a 100% domestic supply chain for craft and traceability.",
    icon: Factory
  },
  {
    title: "Salon-based personalization",
    description:
      "Fitting lounges across Japan and Taiwan pair measurement, education, and custom set building before recommending enrollment.",
    proof: "NetworkBusiness analysis highlights nationwide salons and individualized consultation workflows.",
    icon: Users
  },
  {
    title: "Ethics backed by giving",
    description:
      "Distributor-led CMS Cosmo Club donations translate loyalty into wheelchairs, vehicles, and disaster relief grants.",
    proof: "Cosmo Club ledger reports ¥233M+ in aid and recognition from Red Cross and UNICEF partners.",
    icon: HeartHandshake
  }
];

const STORY_ARC: TimelineEvent[] = [
  {
    era: "1982",
    headline: "Integrated shapewear venture begins",
    detail:
      "Founder Yasuhisa Kawamura launches the predecessor business to align manufacturing with a nationwide sales vision."
  },
  {
    era: "1985",
    headline: "Chandeal Co., Ltd. incorporated in Nara",
    detail:
      "The business formalises as a corporation, adding in-house logistics to support rapid distributor growth."
  },
  {
    era: "1994",
    headline: "Headquarters and logistics campus completed",
    detail:
      "A purpose-built facility at Horen-cho centralises distribution and training, underpinning service consistency."
  },
  {
    era: "2001",
    headline: "Taiwan expansion with Taipei and Kaohsiung salons",
    detail:
      "International operations begin with local lounges and education hubs to support bilingual teams."
  },
  {
    era: "2019",
    headline: "Philanthropy surpasses ¥233M in aid",
    detail:
      "CMS Cosmo Club donations deliver mobility aids and disaster funding recognised by the Japan Red Cross."
  },
  {
    era: "2025",
    headline: "Compliance focus on consumer protections",
    detail:
      "Extended 30-day cooling-off and 90-day return policies stay front-and-centre as field training content."
  }
];

const COMPENSATION_ELEMENTS: CompensationElement[] = [
  {
    title: "Stair-step core earnings",
    description:
      "Wholesale-to-retail spreads anchor commissions, with distributors retaining margin on every shapewear set they move.",
    highlight: "NetworkBusiness coverage notes standard 10% earnings on personal sales before overrides are applied.",
    icon: TrendingUp
  },
  {
    title: "Salon leader overrides",
    description:
      "Lounge leaders mentor downline fitters and can access higher payout bands tied to verified customer volume.",
    highlight: "Field sources cite salon heads earning up to 50% when team sales and service benchmarks are met.",
    icon: HandCoins
  },
  {
    title: "Mandatory foundation training",
    description:
      "The business basics course covers company policy, product science, and legal obligations before registration is accepted.",
    highlight: "Chandeal’s QA system describes required lectures prior to issuing membership paperwork.",
    icon: ClipboardCheck
  },
  {
    title: "Consumer-first protections",
    description:
      "Cooling-off windows and return options are positioned as core to the sales experience, extending beyond Japan’s legal minimums.",
    highlight: "Public policy outlines a 30-day cooling-off period and 90-day unused product returns.",
    icon: RefreshCcw
  }
];

const SUCCESS_STORIES: SuccessStory[] = [
  {
    title: "CMS Cosmo Club philanthropy",
    description:
      "Distributor donations fund mobility aids, vehicles, and relief grants for communities across Japan.",
    metric: "¥233M+ donated and 1,000+ wheelchairs delivered",
    proof: "Cosmo Club activity report (2019 update)",
    icon: HeartHandshake
  },
  {
    title: "Japan Red Cross partnership",
    description:
      "Annual contributions fuel disaster response, medical deployments, and relief supplies beyond the brand’s core markets.",
    metric: "Ongoing support recognised in Nov 2019 ceremony",
    proof: "Japan Red Cross news release, 21 Nov 2019",
    icon: LifeBuoy
  },
  {
    title: "Cross-border salon success",
    description:
      "Taipei and Kaohsiung locations replicate the lounge model abroad with bilingual support for Taiwanese members.",
    metric: "International branches operating since 2001",
    proof: "Company history timeline",
    icon: Globe2
  }
];

const INNOVATION_SIGNALS: Innovation[] = [
  {
    title: "Power-net fabric engineering",
    description:
      "Lycra-based 280 denier power nets and tailored stitching maintain compression without sacrificing comfort.",
    proof: "NetworkBusiness 2024 breakdown of the Elegant and Belle series.",
    icon: Layers
  },
  {
    title: "Domestic quality loop",
    description:
      "Material sourcing, dyeing, and sewing stay inside Japan for traceable QA and faster iteration cycles.",
    proof: "Corporate greeting emphasises full Made-in-Japan production.",
    icon: BadgeCheck
  },
  {
    title: "Data-backed fitting lounges",
    description:
      "Salon workflows capture measurements, usage plans, and follow-up guidance to personalise each wardrobe.",
    proof: "NetworkBusiness article highlights salon consultations and aftercare.",
    icon: Ruler
  }
];

const REPUTATION_SIGNALS: ReputationSignal[] = [
  {
    title: "JDSA member in good standing",
    detail:
      "Membership in the Japan Direct Selling Association subjects the company to ongoing ethical reviews and consumer safeguards.",
    evidence: "Listed in the JDSA member directory.",
    icon: ShieldCheck
  },
  {
    title: "Extended cooling-off policy",
    detail:
      "Customers receive a 30-day cooling-off window—beyond Japan’s 20-day requirement—and structured 90-day returns for unused goods.",
    evidence: "Public QA disclosure of Chandeal’s sales system.",
    icon: Timer
  },
  {
    title: "Recognised CSR track record",
    detail:
      "Repeated commendations from the Japan Red Cross and UNICEF partners validate long-running philanthropic commitments.",
    evidence: "Cosmo Club impact history and 2019 Red Cross release.",
    icon: Award
  }
];

const CRITICAL_WATCHPOINTS: Critique[] = [
  {
    title: "Inventory overhang risk",
    description:
      "Starter sets begin at ¥50,000 and unsold stock can accumulate without disciplined customer acquisition.",
    mitigation: "Model sell-through with inventory dashboards and activate return policies early when stock stalls.",
    source: "OfficeJD exit guide (2025) on shelving and liquidation tactics.",
    icon: Boxes
  },
  {
    title: "High-ticket price pressure",
    description:
      "Field reviews cite premium pricing and the need to justify value with measurable body transformation results.",
    mitigation: "Use ROI calculators, before/after content, and structured follow-up programmes to validate spend.",
    source: "King-FXEA investigation (May 2024) into cost perceptions.",
    icon: AlertTriangle
  },
  {
    title: "Recruitment conduct scrutiny",
    description:
      "Consumer advisors flag aggressive or staged recruiting methods that can trigger legal complaints and reputational harm.",
    mitigation: "Enforce compliant scripts, document disclosures, and audit ABC meetings with compliance tooling.",
    source: "OfficeJD compliance analysis (Sept 2025) on Chandeal recruiting behaviours.",
    icon: Gavel
  }
];

const TRUST_SCORES: TrustScore[] = [
  {
    title: "Compliance posture",
    score: "72/100",
    insight:
      "JDSA membership, mandated training, and extended cooling-off rights demonstrate a proactive compliance baseline.",
    methodology: "Weighted on association oversight, published policies, and consumer protection mechanisms."
  },
  {
    title: "Field sentiment stability",
    score: "56/100",
    insight:
      "Positive product feedback is balanced by reports of inventory burdens and forceful recruiting, making support tooling critical.",
    methodology: "Evaluated via watchdog commentary, exit guides, and distributor support expectations."
  },
  {
    title: "Opportunity realism",
    score: "60/100",
    insight:
      "The stair-step plan ties advancement to verified sales, yet profitability hinges on salon productivity and disciplined follow-up.",
    methodology: "Assessed against plan structure, leadership overrides, and ability to sustain customer volume."
  }
];

const NEWS_HEADLINES: NewsItem[] = [
  {
    title: "Chandeal overview highlights stair-step model and salon strategy",
    source: "NetworkBusiness Pictralbook",
    date: "15 Sep 2024",
    summary:
      "Industry veterans outline Chandeal’s domestic production focus, salon network, and compensation mechanics.",
    url: "https://networkbusiness-pictralbook.moe/chandeal/"
  },
  {
    title: "Guidance for exiting Chandeal while resolving inventory issues",
    source: "OfficeJD",
    date: "22 Sep 2025",
    summary:
      "Consumer advocates provide step-by-step instructions for using cooling-off rights, inventory buy-backs, and legal support.",
    url: "https://officejd.xsrv.jp/chandelle-quit-guide/"
  },
  {
    title: "Japan Red Cross acknowledges Chandeal donations for relief work",
    source: "Japan Red Cross",
    date: "21 Nov 2019",
    summary:
      "CMS Cosmo Club’s contributions fund medical teams and supplies for domestic and international emergencies.",
    url: "https://www.jrc.or.jp/contribute/enterprise/news/191121_005960.html"
  }
];

const CLOUD_ROADMAP: CloudPlay[] = [
  {
    title: "Dynamic stair-step simulator",
    description:
      "Model wholesale-to-retail spreads, salon overrides, and retention triggers before committing payouts to production.",
    icon: ChartLineUp
  },
  {
    title: "Inventory risk radar",
    description:
      "Blend order cadence, fitting appointments, and AI signals to surface slow-moving SKUs before cash is trapped.",
    icon: Search
  },
  {
    title: "Compliance workflow automation",
    description:
      "Auto-deliver disclosures, cooling-off paperwork, and audit evidence for every enrolment across markets.",
    icon: ShieldCheck
  },
  {
    title: "Salon journey analytics",
    description:
      "Track consultations, follow-ups, and cross-border support inside a unified dashboard to keep teams productive.",
    icon: UsersThree
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Inside Chandeal Co. Ltd — Trust & Compensation Insights";
  const description =
    "Analyze Chandeal’s Made-in-Japan shapewear story, timeline, stair-step plan, and trust signals alongside Cloud MLM Software’s playbook.";
  const keywords = [
    "Chandeal trust insights",
    "Chandeal MLM analysis",
    "Chandeal compensation plan",
    "Chandeal stair-step review",
    "Cloud MLM Software shapewear insights"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/chandeal-coltd", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ChandealPageProps = {
  params: { lang: SupportedLocale };
};

export default function ChandealPage({ params }: ChandealPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const trustScoreHref = "#trust-score";
  const timelineHref = "#timeline";
  const trustSnapshotHref = "#trust-insights";
  const trustFill = `${PRIMARY_TRUST_SCORE.score}%`;

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-primary/40 bg-gradient-to-br from-[#007DE3]/15 via-white to-[#36B35F]/12 py-20 dark:border-primary/30 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950/35">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(0,125,227,0.35),transparent_55%),radial-gradient(circle_at_82%_28%,rgba(37,114,171,0.28),transparent_60%),radial-gradient(circle_at_52%_84%,rgba(54,179,95,0.24),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.75fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-1 text-sm font-semibold text-slate-900 backdrop-blur dark:border-white/20 dark:bg-white/10 dark:text-white">
              Shapewear built on craft & compliance
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Inside Chandeal Co. Ltd — trust-led shapewear insights and stair-step rewards in two markets.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/80">
                Explore how Chandeal pairs Made-in-Japan craftsmanship with salon mentorship, mapped compensation, and social impact. Walk through the company snapshot, history, stair-step plan, trust signals, and the cautionary lessons shaping modern shapewear ventures.
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
            <div className="absolute -right-10 top-14 h-28 w-28 rounded-full bg-[#007DE3]/20 blur-3xl" aria-hidden />
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
              Distributor-funded philanthropy and domestic craftsmanship keep the shapewear story credible across Japan and Taiwan.
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Vision translated into playbooks</h2>
          <p className="text-sm text-muted-foreground">
            Study how Chandeal’s craft principles, salon rituals, and philanthropic commitments shape every market decision.
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
              Anchor your market entry plans on the milestones that built Chandeal’s shapewear credibility.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)]">
            <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 text-sm text-muted-foreground dark:border-primary/40 dark:bg-primary/10">
              Hand-built supply chains, lounge-first onboarding, and sustained giving show how the shapewear pioneer stays relevant across decades.
            </div>
            <div className="relative pl-6">
              <div className="absolute left-[11px] top-0 h-full w-px bg-gradient-to-b from-primary/70 via-primary/30 to-transparent dark:from-primary/60 dark:via-primary/25" aria-hidden />
              <div className="space-y-8">
                {STORY_ARC.map((event, index) => (
                  <article
                    key={event.headline}
                    className="relative rounded-3xl border border-border/60 bg-background/85 p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md dark:border-border/40 dark:bg-slate-950/70"
                  >
                    <span
                      className="absolute -left-[17px] top-7 h-3 w-3 rounded-full border border-primary/40 bg-primary shadow-sm dark:border-primary/60"
                      aria-hidden
                    />
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary dark:border-primary/40 dark:bg-primary/15">
                        {event.era}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{event.headline}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{event.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="trust-snapshot" className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Dissect the stair-step compensation engine</h2>
          <p className="text-sm text-muted-foreground">
            Break down Chandeal’s stair-step mechanics to judge sustainability, compliance fit, and duplication potential.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {COMPENSATION_ELEMENTS.map((element) => {
            const Icon = element.icon;
            return (
              <article
                key={element.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{element.title}</h3>
                  <p className="text-sm text-muted-foreground">{element.description}</p>
                </div>
                <div className="flex items-center gap-2 rounded-2xl border border-primary/30 bg-primary/5 px-3 py-2 text-xs text-primary dark:border-primary/40 dark:bg-primary/10">
                  <ShieldCheck className="h-4 w-4" aria-hidden />
                  <span>{element.highlight}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-background via-primary/5 to-background py-20 dark:border-border/40 dark:from-slate-950 dark:via-primary/10 dark:to-slate-950">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Success stories & social proof</h2>
            <p className="text-sm text-muted-foreground">
              Highlight the outcomes stakeholders expect when craftsmanship, philanthropy, and operations stay in sync.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SUCCESS_STORIES.map((story) => {
              const Icon = story.icon;
              return (
                <article
                  key={story.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-foreground">{story.title}</h3>
                      <p className="text-xs uppercase tracking-wide text-primary/80 dark:text-primary/70">{story.metric}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{story.description}</p>
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">Proof: {story.proof}</span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Innovation signals</h2>
          <p className="text-sm text-muted-foreground">
            Track the product engineering, supply chain, and salon enhancements keeping Chandeal front of mind for shapewear buyers.
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
            Validate the brand with third-party accreditations, community sentiment, and compliance proof points.
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
            Translate due diligence findings into actionable scores so stakeholders can gauge confidence levels and mitigation priorities.
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
            Understand where Chandeal faces pressure so you can design proactive guardrails for your own launch.
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
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(0,125,227,0.25),transparent_55%),radial-gradient(circle_at_78%_30%,rgba(54,179,95,0.28),transparent_60%)]" aria-hidden />
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              How Cloud MLM Software helps
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Replicate Chandeal’s disciplined execution without inheriting legacy friction.
            </h2>
            <p className="text-sm text-muted-foreground">
              Deploy an end-to-end platform that mirrors Chandeal’s best practices—craft storytelling, responsible payouts, and philanthropy tracking—while staying adaptable to your brand.
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
