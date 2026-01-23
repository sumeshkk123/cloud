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
  Handshake as HandshakeIcon,
  Leaf,
  LifeBuoy,
  Recycle,
  ShieldCheck,
  Sparkles,
  Sunrise
} from "lucide-react";
import {
  ChartLineUp,
  GlobeHemisphereEast,
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
  score: 56,
  label: "Overall trust score",
  summary:
    "Legacy salon networks, sustainability credentials, and offline compliance controls build confidence while digital and disclosure gaps keep caution signs up." 
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
    value: "$90M (2024 est.)",
    detail:
      "Business for Home’s 2024 Global 500 ranking listed Arsoa Honsha with roughly $90M in annual sales and a 0% growth delta year-on-year."
  },
  {
    label: "Founded",
    value: "1972",
    detail:
      "Arsoa’s official 50th anniversary history traces the launch of the brand and its Queen Silver soap to July 1972."
  },
  {
    label: "Employees",
    value: "280",
    detail:
      "The corporate profile for Arsoa Keio Group lists 280 employees supporting cosmetics, health food, water purifier, hospitality, and farm businesses."
  },
  {
    label: "Renewable energy",
    value: "98% in 2023",
    detail:
      "RE Action’s 2025 participant CSV shows Arsoa Keio Group joined in May 2023 with a 98% renewable electricity mix and a 2027 100% target."
  }
];

const VISION_PILLARS: VisionPillar[] = [
  {
    title: "Harmony-led beauty",
    description:
      "The brand mantra “create true health and happiness in harmony with nature” guides product design, farmer partnerships, and the move to Kobuchizawa’s forests.",
    proof: "Arsoa brand story and 50th history articulate the harmony ethos and 1998 relocation to Yamanashi’s natural environment.",
    icon: Leaf
  },
  {
    title: "Counseling-first distribution",
    description:
      "Products are sold through Nemu-no-ki salons and trained beauty counselors with mandatory consultations—no authorised e-commerce channel exists.",
    proof: "Official purchase guide states Arsoa products must be bought via salons or counselors and warns against unauthorised online sellers.",
    icon: HandshakeIcon
  },
  {
    title: "Integrated R&D campus",
    description:
      "Proprietary ingredients such as Arsoa Water, Mosiri Clay, and Hakkaku Reishi are developed in company labs, factories, and organic farms across Nagano and Yamanashi.",
    proof: "Arsoa history chronicles the launch of in-house research centres, the Rainbow Farm, and ingredient discoveries across the 1990s–2010s.",
    icon: Factory
  },
  {
    title: "Sustainability commitments",
    description:
      "Arsoa is registered as a Yamanashi SDGs Promotion Company and is shifting all facilities to 100% renewable energy through the RE Action initiative.",
    proof: "Arsoa SDGs page and Yamanashi prefecture listings document the registration and renewable energy pledges."
    ,
    icon: Recycle
  }
];

const STORY_ARC: TimelineEvent[] = [
  {
    era: "1972",
    headline: "Queen Silver soap launch",
    detail:
      "Arsoa’s black soap debuted alongside the company’s founding, introducing the ‘Three Healths’ philosophy around skin, body, and mind."
  },
  {
    era: "1974–1979",
    headline: "Agency & salon network",
    detail:
      "Visiting sales and Nemu-no-ki salons were established, setting the blueprint for counselor-led, relationship-driven distribution."
  },
  {
    era: "1998",
    headline: "HQ relocates to Kobuchizawa",
    detail:
      "The group moved headquarters from Tokyo’s Shibuya to forested Yamanashi to embed its harmony-with-nature mission."
  },
  {
    era: "2003",
    headline: "Rainbow Farm opens",
    detail:
      "An in-house organic farm began supplying raw botanicals for health products, reinforcing traceability and sustainability."
  },
  {
    era: "2023",
    headline: "RE Action commitment",
    detail:
      "Arsoa Keio Group joined Japan’s RE Action programme, reporting a 98% renewable electricity mix and pledging 100% usage by 2027."
  }
];

const COMPENSATION_ELEMENTS: CompensationElement[] = [
  {
    title: "Salon-based retailing",
    description:
      "Counselors host consultations in Nemu-no-ki salons, tailoring routines and keeping product usage compliant with brand protocols.",
    highlight: "Official purchase guidance underscores the counseling model and bans online storefronts to protect product integrity.",
    icon: UsersThree
  },
  {
    title: "Visiting counselor system",
    description:
      "The 1970s agency system still underpins compensation, rewarding personalized home visits and community education events.",
    highlight: "Arsoa’s 50th history documents the launch of visiting sales and agency programmes in 1974 as core to growth.",
    icon: ChartLineUp
  },
  {
    title: "Lifelong education tracks",
    description:
      "LS Academy, wellness concierges, and product labs train field leaders to deliver nutrition, skin health, and lifestyle coaching.",
    highlight: "The 50th anniversary archive highlights LS Academy and wellness concierge programmes created to advance consultant expertise.",
    icon: Sparkles
  },
  {
    title: "Sustainability-linked storytelling",
    description:
      "Renewable energy conversion and organic farming give counselors measurable ESG stories to support client retention and brand trust.",
    highlight: "Arsoa’s SDGs page outlines RE Action participation and circular agriculture practices that reps can relay to customers.",
    icon: GlobeHemisphereEast
  }
];

const SUCCESS_STORIES: SuccessStory[] = [
  {
    title: "Global 500 staying power",
    description:
      "Arsoa Honsha retained a position in Business for Home’s 2024 direct selling revenue ranking at No. 172 with steady $90M sales.",
    metric: "BFH Global 500 (Apr 2024): Rank 172, est. $90M revenue",
    proof: "Business for Home — The 500 Largest Direct Sales Companies in the World 2024.",
    icon: Award
  },
  {
    title: "Renewable energy conversion",
    description:
      "Participation in the RE Action programme shows the group already operating at 98% renewable electricity while targeting 100% by 2027.",
    metric: "RE Action member list (Sep 2025): 98% renewable mix",
    proof: "RE Action memberlist.csv — Arsoa Keio Group entry (May 2023 join).",
    icon: ShieldCheck
  },
  {
    title: "50 years of counselor culture",
    description:
      "The 2022 anniversary campaign celebrated five decades of salon-led wellbeing, reaffirming the ‘Three Healths’ ethos for new generations.",
    metric: "Arsoa 50th anniversary site — history timeline",
    proof: "Arsoa 50th anniversary history microsite."
    ,
    icon: Sunrise
  }
];

const INNOVATION_SIGNALS: Innovation[] = [
  {
    title: "Proprietary mineral science",
    description:
      "Arsoa Water, Mosiri Clay, and botanical ferments such as Hakkaku Reishi give the lineup differentiated raw materials.",
    proof: "50th history and brand story detail ongoing R&D around water structuring, clays, and adaptogenic botanicals.",
    icon: Sparkles
  },
  {
    title: "Integrated agri-beauty model",
    description:
      "The Rainbow Farm enables closed-loop sourcing, composting, and ingredient testing for health supplements.",
    proof: "Arsoa history notes the opening of the Rainbow Farm to grow pesticide-free produce for formulations.",
    icon: Leaf
  },
  {
    title: "Cultural wellness hubs",
    description:
      "Facilities like Megami-no-Mori Central Garden blend events, education, and organic dining to anchor regional brand experiences.",
    proof: "50th anniversary timeline highlights the 2016 opening of Megami-no-Mori as a lifestyle showcase.",
    icon: Globe2
  }
];

const REPUTATION_SIGNALS: ReputationSignal[] = [
  {
    title: "Yamanashi SDGs promotion company",
    detail:
      "Prefectural records list Arsoa Keio Group in cohort two of Yamanashi’s SDGs Promotion Companies, recognising local sustainability leadership.",
    evidence: "Yamanashi Prefecture — SDGs Promotion Company list (Sept 26, 2025).",
    icon: ShieldCheck
  },
  {
    title: "RE Action transparency",
    detail:
      "Reporting renewable energy metrics through RE Action makes progress and targets visible to stakeholders and customers alike.",
    evidence: "RE Action participant CSV (Sept 30, 2025) — Arsoa Keio Group entry.",
    icon: FileText
  },
  {
    title: "Counselor quality controls",
    detail:
      "An official ban on third-party e-commerce reinforces traceability and keeps coaching central to the customer journey.",
    evidence: "Arsoa purchase guide emphasises salon-only sales and warns against unauthorised online sellers.",
    icon: HandshakeIcon
  }
];

const CRITICAL_WATCHPOINTS: Critique[] = [
  {
    title: "Offline-heavy reach",
    description:
      "Reliance on face-to-face counseling and salons limits scalability and leaves gaps in digital client acquisition and support.",
    mitigation: "Pair salon experiences with guided digital journeys, deploy compliant e-consultation tools, and measure hybrid conversion.",
    source: "Arsoa purchase guide — counseling required, online sales prohibited.",
    icon: AlertTriangle
  },
  {
    title: "Ingredient supply concentration",
    description:
      "Hero ingredients like Hakkaku Reishi, Mosiri Clay, and Rainbow Farm produce depend on specific geographies and yields.",
    mitigation: "Diversify cultivation partnerships, invest in adaptive agriculture analytics, and build safety stock around flagship inputs.",
    source: "Arsoa brand story and history describing proprietary botanical and mineral sourcing."
    ,
    icon: LifeBuoy
  },
  {
    title: "Limited income transparency",
    description:
      "External analysts rate the business grade as A+ yet note modest confidence in distributor profit potential due to scarce earnings disclosures.",
    mitigation: "Publish income summaries, align incentives with counseling metrics, and share KPIs on client retention and average order value.",
    source: "Business for Home — Arsoa Honsha company profile (business grade commentary).",
    icon: AlertTriangle
  }
];

const TRUST_SCORES: TrustScore[] = [
  {
    title: "Governance & sustainability",
    score: "58/100",
    insight:
      "Third-party SDG recognition and renewable reporting add governance strength, though 100% energy conversion and full ESG disclosure remain in flight.",
    methodology: "Weighted on prefectural SDG certification, RE Action reporting, and public sustainability roadmaps."
  },
  {
    title: "Field enablement",
    score: "55/100",
    insight:
      "Half-century of counselor training and LS Academy infrastructure support advisors, yet offline bias demands modernised digital support."
    ,
    methodology: "Evaluated via historical training programmes, salon infrastructure, and gaps in e-commerce readiness."
  },
  {
    title: "Opportunity realism",
    score: "54/100",
    insight:
      "Stable revenue rankings and an A+ business grade are positives, but limited income disclosures and niche ingredient sourcing temper upside assumptions.",
    methodology: "Combined Business for Home grading, revenue stability, and transparency of compensation communications."
  }
];

const NEWS_HEADLINES: NewsItem[] = [
  {
    title: "Arsoa Honsha holds #172 spot in 2024 Global 500 ranking",
    source: "Business for Home",
    date: "Apr 2024",
    summary:
      "The 2024 listing of the world’s largest direct sales companies estimates Arsoa Honsha at $90M in revenue with flat year-on-year growth.",
    url: "https://www.businessforhome.org/2024/04/the-500-largest-direct-sales-companies-in-the-world-2024/"
  },
  {
    title: "RE Action roster confirms Arsoa’s 98% renewable mix",
    source: "RE Action",
    date: "Sept 30, 2025",
    summary:
      "The programme’s latest participant CSV shows Arsoa Keio Group joining in 2023 and tracking a 98% renewable electricity rate en route to 100% by 2027.",
    url: "https://saiene.jp/wp-content/themes/saiene2019/common/files/memberlist.zip"
  },
  {
    title: "Yamanashi updates SDGs Promotion Company registry",
    source: "Yamanashi Prefecture",
    date: "Sept 26, 2025",
    summary:
      "Prefectural records again list Arsoa Keio Group among companies advancing regional SDGs priorities across energy, agriculture, and community support.",
    url: "https://www.pref.yamanashi.jp/seisaku/sdgs/suisinkigyo.html"
  }
];

const CLOUD_ROADMAP: CloudPlay[] = [
  {
    title: "Hybrid counseling journeys",
    description:
      "Blend salon experiences with secure digital consultations, capturing signatures, regimens, and follow-up tasks in one platform.",
    icon: UsersThree
  },
  {
    title: "Ingredient provenance ledger",
    description:
      "Track Rainbow Farm harvests, mineral sourcing, and compliance docs so counselors can evidence sustainability claims on demand.",
    icon: Leaf
  },
  {
    title: "Renewable progress dashboard",
    description:
      "Visualise RE Action KPIs, facility energy data, and carbon offsets to keep the 2027 100% renewable target on course.",
    icon: Globe2
  },
  {
    title: "Income transparency suite",
    description:
      "Automate earnings statements, anonymised income disclosures, and profitability coaching to strengthen distributor trust.",
    icon: ChartLineUp
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Arsoa Honsha Trust & Compensation Insights";
  const description =
    "Explore Arsoa Honsha’s counselor-first distribution, proprietary skincare science, sustainability milestones, and trust signals before your next wellness launch.";
  const keywords = [
    "Arsoa Honsha trust insights",
    "Arsoa MLM analysis",
    "Arsoa compensation overview",
    "Cloud MLM Software trust advisory",
    "Arsoa Keio Group sustainability"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/arsoa-honsha", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ArsoaHonshaPageProps = {
  params: { lang: SupportedLocale };
};

export default function ArsoaHonshaPage({ params }: ArsoaHonshaPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const trustScoreHref = "#trust-score";
  const timelineHref = "#timeline";
  const trustSnapshotHref = "#trust-insights";
  const trustFill = `${PRIMARY_TRUST_SCORE.score}%`;

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-primary/40 bg-gradient-to-br from-[#0f1c2e]/20 via-white to-[#5fc0c8]/16 py-20 dark:border-primary/30 dark:from-slate-950 dark:via-slate-950 dark:to-sky-900/40">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(15,28,46,0.45),transparent_55%),radial-gradient(circle_at_78%_28%,rgba(95,192,200,0.32),transparent_60%),radial-gradient(circle_at_52%_82%,rgba(32,102,131,0.28),transparent_60%)]"
          aria-hidden
        />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.75fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-1 text-sm font-semibold text-slate-900 backdrop-blur dark:border-white/20 dark:bg-white/10 dark:text-white">
              Mission: Radiant skin rooted in nature & trust
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Inside Arsoa Honsha — Trust & Compensation Insights
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/80">
                Trace how Arsoa Honsha’s counselor-first business model, proprietary mineral science, and sustainability programmes shape opportunity and risk. Review company facts, milestones, compensation levers, innovation signals, and live headlines to steer your next wellness initiative.
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
            Understand the core principles motivating Arsoa Honsha’s product, distribution, and sustainability decisions.
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
            Follow the milestones that shaped Arsoa Honsha’s counselor culture, R&D capability, and sustainability commitments.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-5">
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
            Examine how Arsoa Honsha activates its field—through salons, agency models, education, and ESG storytelling.
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
            Celebrate the momentum markers proving Arsoa’s staying power and evolving ESG commitments.
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
            Track the product, facility, and experience innovations differentiating Arsoa’s wellness offer.
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
            Showcase the third-party validations and internal controls underpinning the brand’s reputation.
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
            Convert qualitative findings into advisory scores to frame risk and enablement priorities.
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
            Surface the pressure points to address before scaling partnerships or relaunching in new channels.
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
            Monitor the latest data drops that influence Arsoa Honsha’s trajectory and stakeholder expectations.
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
                View source
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How Cloud MLM Software helps</h2>
          <p className="text-sm text-muted-foreground">
            Transform Arsoa insights into scalable infrastructure with our advisory and platform accelerators.
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
