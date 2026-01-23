import type { ComponentType, CSSProperties } from "react";
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
  BadgeCheck,
  BookOpen,
  Calendar,
  Factory,
  Leaf,
  LineChart,
  ShieldCheck,
  Sparkles,
  Target
} from "lucide-react";
import {
  ArrowBendUpRight,
  ChartLineUp,
  Cpu,
  GlobeHemisphereEast,
  Handshake,
  MapTrifold,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type QuickFact = {
  label: string;
  value: string;
  context: string;
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

type CompensationLever = {
  title: string;
  description: string;
  highlight: string;
  icon: IconType;
};

type MomentumHighlight = {
  title: string;
  narrative: string;
  metric: string;
  source: string;
  icon: IconType;
};

type InnovationSignal = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type TrustSignal = {
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

type Headline = {
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
  score: 76,
  label: "Composite trust index",
  summary:
    "Weighted measure of sustainability governance, market sentiment, and opportunity transparency across Amorepacific’s global direct selling footprint."
};

const QUICK_FACTS: QuickFact[] = [
  {
    label: "Revenue scale",
    value: "KRW 3.89T (2024)",
    context: "Consolidated revenue reported in the 2024 Summary Financial Statements.",
    icon: LineChart
  },
  {
    label: "Founded",
    value: "1945",
    context: "Originated as Pacific Chemical; expanded door-to-door by 1964 according to corporate history.",
    icon: Calendar
  },
  {
    label: "Headquarters",
    value: "Yongsan-gu, Seoul",
    context: "Global HQ reopened in 2018 on the company’s original 1956 site to nurture creativity and collaboration.",
    icon: Factory
  },
  {
    label: "Global focus",
    value: "Pentagon Five",
    context: "Vision 2035 concentrates on Korea, North America, Europe, India/Middle East, China & Japan/APAC with a 70% overseas sales target.",
    icon: GlobeHemisphereEast
  },
  {
    label: "Product scope",
    value: "Premium skincare & wellness",
    context: "Portfolio spans Sulwhasoo, Laneige, Innisfree, derma, and beauty tech lines highlighted in the 80th anniversary announcement.",
    icon: Sparkles
  },
  {
    label: "Sustainability progress",
    value: "70% renewable energy",
    context: "2030 Promise update cites 70% renewable conversion and 93.3% RSPO palm oil usage in 2024.",
    icon: Leaf
  }
];

const VISION_PILLARS: VisionPillar[] = [
  {
    title: "Create New Beauty",
    description:
      "Anchor the mission around holistic wellness and ageless possibilities so every beauty entrepreneur can translate self-confidence into customer value.",
    proof: "Our Values page reiterates the mission ‘We Make A MORE Beautiful World’ and the vision to Create New Beauty.",
    icon: Sparkles
  },
  {
    title: "Everyone Global",
    description:
      "Align growth playbooks to the Pentagon Five markets with locally tuned education, content, and partner ecosystems.",
    proof: "Vision 2035 announcement (Sep 2025) sets the 70% overseas revenue target and market prioritisation roadmap.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Holistic bio-innovation",
    description:
      "Blend botanical science, derma expertise, and device innovation to solve skin, scalp, and wellness concerns end-to-end.",
    proof: "R&I briefing emphasises 70+ years of labs translating Asian botanicals into global product platforms.",
    icon: BookOpen
  },
  {
    title: "AI First & AMORE Spark",
    description:
      "Infuse AI-driven prediction, rapid prototyping, and a culture of experimentation into field support and consumer journeys.",
    proof: "IFSCC 2025 presentation unveiled generative AI virtual makeup and predictive skincare algorithms supporting the AMORE Spark ethos.",
    icon: Cpu
  }
];

const TIMELINE: TimelineEvent[] = [
  {
    era: "1932",
    headline: "Camellia oil craftsmanship begins",
    detail: "Dokjeong Yun hand-pressed camellia oil in Gaeseong, instilling the obsession with ingredient purity referenced in corporate history."
  },
  {
    era: "1954",
    headline: "First cosmetics research lab in Korea",
    detail: "A 7m² lab in Huam-dong signalled an enduring R&D commitment that still differentiates Amorepacific’s product pipeline."
  },
  {
    era: "1964",
    headline: "Door-to-door beauty advisors launched",
    detail: "The beauty counselling centre and mobile advisors cemented the relationship-selling DNA MLM leaders inherit today."
  },
  {
    era: "2010",
    headline: "Joins Dow Jones Sustainability Indices",
    detail: "First Korean cosmetics company recognised by DJSI, framing governance and sustainability benchmarks for the field."
  },
  {
    era: "2018",
    headline: "Global headquarters reopens in Seoul",
    detail: "The Yongsan HQ became a hub for creativity and global collaboration, underpinning modern omnichannel enablement."
  },
  {
    era: "2025",
    headline: "Vision 2035 stakes global leadership",
    detail: "80th anniversary ceremony introduced the KRW 15T sales ambition and five strategic pillars guiding New Beauty creators."
  }
];

const COMPENSATION_LEVERS: CompensationLever[] = [
  {
    title: "Relationship retail as a profit engine",
    description:
      "Door-to-door artistry dating back to 1964 now surfaces through AP Beauty pop-ups, travel retail tables, and experiential boutiques.",
    highlight:
      "Q2 2025 earnings credited AP Beauty’s first Amore Sale Festa activation with catalysing Daily Beauty profitability—proof that curated retail activations still pay leaders.",
    icon: Handshake
  },
  {
    title: "APEX Club loyalty economics",
    description:
      "Spend-based tiers award 1x–2x points per dollar, tier welcome bonuses, and up to 900 birthday points that can be recycled into customer incentives.",
    highlight:
      "Silver, Gold, and Diamond benefits posted on the US Rewards hub showcase how points power sampling, replenishment, and retention funnels for teams.",
    icon: UsersThree
  },
  {
    title: "Referral & automation perks",
    description:
      "Give $20 / Get $20 referrals plus Subscribe & Save 10% create predictable margin while digital events like Amore Sale Festa widen reach.",
    highlight:
      "Combining refer-a-friend credits with auto-replenishment keeps customer-to-consultant ratios healthy and cushions month-end compression.",
    icon: ArrowBendUpRight
  },
  {
    title: "Leadership incubators",
    description:
      "AMORE Spark programmes encourage experimentation, while AI First initiatives feed partners insight dashboards and diagnostics.",
    highlight:
      "Vision 2035 pillars and IFSCC AI research outline the workflow upgrades high-performing field leaders can plug into for coaching advantages.",
    icon: ChartLineUp
  }
];

const MOMENTUM_HIGHLIGHTS: MomentumHighlight[] = [
  {
    title: "Vision 2035 growth trajectory",
    narrative:
      "KRW 15 trillion sales ambition with 70% overseas mix reframes goals for leaders targeting global beauty & wellness demand.",
    metric: "Target set during 80th anniversary ceremony (Sep 2025).",
    source: "Amorepacific Group Marks 80th Anniversary news release, 2025-09-08.",
    icon: Target
  },
  {
    title: "Laneige & travel retail surge",
    narrative:
      "Top-three Sephora status in the US and triple-digit European growth demonstrate playbooks distributors can localise.",
    metric: "240 duty-free stores in 19 countries, meetings with all top-ten retailers at TFWA 2025.",
    source: "TFWA World Exhibition coverage, 2025-10-02.",
    icon: MapTrifold
  },
  {
    title: "Green cycle momentum",
    narrative:
      "TerraCycle MOU commits to recycling 100 tons annually while the GREENCYCLE campaign has already handled 1,736 tons of empties.",
    metric: "100 tons per year commitment for three years; 1,736 tons collected by 2018.",
    source: "Direct Selling News TerraCycle agreement, 2019-06-14.",
    icon: Leaf
  }
];

const INNOVATION_SIGNALS: InnovationSignal[] = [
  {
    title: "Generative AI virtual makeup",
    description:
      "IFSCC 2025 presentation detailed a KAIST co-developed pipeline that analyses facial geometry and renders personalised virtual looks.",
    proof: "Amorepacific Presents AI-based Skin Science Innovations, 2025-09-19.",
    icon: Cpu
  },
  {
    title: "Predictive skincare algorithms",
    description:
      "City Lab clinicals validated Future Skin Prediction models that tailor regimens and forecast outcomes using AI-trained datasets.",
    proof: "IFSCC 2025 City Lab study leveraging prediction algorithms and customer feedback loops.",
    icon: Sparkles
  },
  {
    title: "Design-led sustainability",
    description:
      "Red Dot 2025 wins spotlight metal-free pumps, recyclable plastics, and reimagined brand identities supporting premium storytelling.",
    proof: "Amorepacific honoured with three Red Dot Design Awards, 2025-08-21.",
    icon: BadgeCheck
  }
];

const TRUST_SIGNALS: TrustSignal[] = [
  {
    title: "2030 Promise scorecard",
    detail:
      "2030 A MORE Beautiful Promise tracks 91.8% eco/social product integration, 1,696 tons of packaging reduction, and KRW 8.8B in community investment (2024).",
    evidence: "Sustainability commitment update on apgroup.com.",
    icon: ShieldCheck
  },
  {
    title: "Respect for life platform",
    detail:
      "Internal animal testing bans dating back to 2008 were extended to partners in 2013, alongside continued investment in alternative methods.",
    evidence: "Our History timeline – 2013 declaration of prohibition.",
    icon: Leaf
  },
  {
    title: "Design & material transparency",
    detail:
      "Red Dot-awarded packaging emphasises recyclable resin and metal-free pumps, aligning customer experience with ESG expectations.",
    evidence: "Red Dot Design Award press release, 2025-08-21.",
    icon: BadgeCheck
  }
];

const TRUST_SCORES: TrustScore[] = [
  {
    title: "Sustainability & governance",
    score: "84/100",
    insight:
      "RE100 pathway, RSPO adoption, and DJSI track record raise confidence in ESG disclosures and third-party validation.",
    methodology: "Weighted on RE100 progress, DJSI inclusion history, and published 2030 Promise metrics."
  },
  {
    title: "Customer sentiment & loyalty",
    score: "68/100",
    insight:
      "APEX Club perks, refer-a-friend rewards, and global travel retail experiences enrich retention but rely on ongoing experiential investment.",
    methodology: "Evaluated via loyalty programme value stack, travel retail expansion, and community activation cadence."
  },
  {
    title: "Opportunity transparency",
    score: "60/100",
    insight:
      "Public-facing sites emphasise consumer rewards while Beauty Partner earnings details require gated access—leaders must prepare compliant disclosures.",
    methodology: "Assessed on availability of income disclosures, accessibility of plan documents, and clarity of enrolment prerequisites."
  }
];

const CRITIQUES: Critique[] = [
  {
    title: "Gated partner compensation materials",
    description:
      "The US AP BEAUTY hub highlights customer rewards but omits publicly accessible distributor income information, leaving prospects reliant on internal briefings.",
    mitigation:
      "Equip field leaders with compliant earnings summaries and onboarding decks, and publish region-specific income disclosures alongside loyalty messaging.",
    source: "APEX Club rewards page (us.amorepacific.com/pages/rewards).",
    icon: ArrowRight
  },
  {
    title: "Promotion-dependent recovery",
    description:
      "Q2 2025 Daily Beauty profitability hinged on the inaugural Amore Sale Festa, underscoring reliance on event spikes versus steady subscription KPIs.",
    mitigation:
      "Build dashboards that balance flash-sale momentum with auto-replenishment retention and preferred customer ratios.",
    source: "Amorepacific Q2 2025 earnings release.",
    icon: MapTrifold
  },
  {
    title: "China channel volatility",
    description:
      "Greater China growth stemmed from a low base after prior inventory downsizing—leaders must watch sell-out velocity to avoid future corrections.",
    mitigation:
      "Integrate demand sensing and retailer sell-through analytics into expansion playbooks before re-accelerating recruitment.",
    source: "Amorepacific Q2 2025 earnings release.",
    icon: Target
  }
];

const HEADLINES: Headline[] = [
  {
    title: "Amorepacific marks 12th TFWA appearance to scale travel retail",
    source: "apgroup.com",
    date: "02 Oct 2025",
    summary:
      "Flagship brands met with all top ten duty-free retailers, pursuing 240-store expansion across 19 countries and new European airport launches.",
    url: "https://www.apgroup.com/int/en/news/2025-10-02-1.html"
  },
  {
    title: "AI-led skin science showcased at IFSCC 2025",
    source: "apgroup.com",
    date: "19 Sep 2025",
    summary:
      "Research teams unveiled generative virtual makeup and predictive skincare algorithms built with KAIST and City Lab clinical data.",
    url: "https://www.apgroup.com/int/en/news/2025-09-19-1.html"
  },
  {
    title: "80th anniversary vision sets KRW 15T target",
    source: "apgroup.com",
    date: "08 Sep 2025",
    summary:
      "Five strategic pillars—Everyone Global, Holistic, Ageless, AMORE Spark, AI First—outline the roadmap to lead premium skincare worldwide.",
    url: "https://www.apgroup.com/int/en/news/2025-09-08-1.html"
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Model global rollouts",
    description:
      "Use Cloud MLM Software’s localisation engine to align Pentagon Five market requirements, tax logic, and language assets before launch.",
    icon: MapTrifold
  },
  {
    title: "Blend loyalty and field pay",
    description:
      "Sync APEX Club-style points, refer-a-friend credits, and binary/unilevel payouts into a single wallet with auditable rules.",
    icon: Handshake
  },
  {
    title: "Sustainability intelligence",
    description:
      "Integrate packaging, inventory, and RE100 metrics with predictive dashboards so leaders can report on ESG KPIs alongside sales.",
    icon: LineChart
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Amorepacific MLM Trust Insights";
  const description =
    "Review Amorepacific’s Create New Beauty vision, compensation levers, sustainability metrics, and innovation agenda—then map next steps with Cloud MLM Software.";
  const keywords = [
    "Amorepacific MLM analysis",
    "Amorepacific trust score",
    "Amorepacific compensation plan insights",
    "Cloud MLM Software for beauty brands",
    "K-beauty direct selling research"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/amore-pacific", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AmorePacificPageProps = {
  params: { lang: SupportedLocale };
};

export default function AmorePacificPage({ params }: AmorePacificPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const trustInsightsHref = "#trust-insights";
  const timelineHref = "#timeline";
  const trustScoreHref = "#trust-score";
  const trustFill = `${PRIMARY_TRUST_SCORE.score * 3.6}deg`;

  const gaugeStyle: CSSProperties = {
    background: `conic-gradient(var(--primary) 0deg ${trustFill}, rgba(15,23,42,0.12) ${trustFill} 360deg)`
  };

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-primary/20 bg-gradient-to-br from-slate-50 via-white to-emerald-50 py-20 dark:border-primary/30 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950/20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_80%_15%,rgba(59,130,246,0.2),transparent_60%),radial-gradient(circle_at_50%_80%,rgba(14,116,144,0.18),transparent_55%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white/70 px-4 py-1 text-sm font-semibold text-slate-900 backdrop-blur dark:border-primary/30 dark:bg-slate-900/70 dark:text-white">
              Top 100 MLM spotlight · Premium K-beauty innovators
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Amorepacific: Create New Beauty, translate AI-driven science into trust-first MLM playbooks.
            </h1>
            <p className="max-w-2xl text-base text-slate-700 dark:text-slate-200/80">
              Position your next-generation beauty platform with lessons from Amorepacific’s 80-year journey—holistic vision pillars, Pentagon Five expansion, AP Beauty loyalty economics, sustainability scorecards, and the critiques leaders must address.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={trustInsightsHref}>
                  Trust insights & news
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={timelineHref}>
                  Timeline & milestones
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:text-foreground">
                <Link href={trustScoreHref}>
                  Trust score methodology
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="underline-offset-4">
                <Link href={contactHref}>
                  Talk to strategy specialists
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative grid gap-6 rounded-3xl border border-white/50 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
            <div className="absolute -right-8 top-12 h-24 w-24 rounded-full bg-primary/20 blur-3xl" aria-hidden />
            <div className="absolute bottom-6 left-6 h-20 w-20 rounded-full bg-emerald-500/20 blur-3xl" aria-hidden />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col justify-between gap-5 rounded-2xl border border-primary/30 bg-gradient-to-br from-white via-sky-50 to-white p-6 shadow-sm dark:border-primary/40 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">{PRIMARY_TRUST_SCORE.label}</h2>
                  <p className="text-sm text-muted-foreground">{PRIMARY_TRUST_SCORE.summary}</p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="relative flex h-32 w-32 items-center justify-center">
                    <div className="absolute inset-0 rounded-full" style={gaugeStyle} aria-hidden />
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-inner dark:bg-slate-950">
                      <span className="text-3xl font-semibold text-primary">{PRIMARY_TRUST_SCORE.score}</span>
                    </div>
                  </div>
                  <Button asChild variant="link" className="text-sm font-semibold text-primary">
                    <Link href={trustScoreHref}>
                      View scoring model
                      <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-background/90 p-6 shadow-sm dark:border-border/40 dark:bg-slate-900/80">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Quick roadmap</h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Sparkles className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    Translate Create New Beauty pillars into your field messaging.
                  </li>
                  <li className="flex items-start gap-2">
                    <LineChart className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    Blend loyalty points, refer-a-friend credits, and compensation wallets.
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    Audit sustainability KPIs to match Amorepacific-grade trust expectations.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <Button asChild size="sm" variant="secondary">
                    <Link href={pricingHref}>
                      Explore platform modules
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-16" id="snapshot">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Company snapshot</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Anchor your due diligence in verifiable data: revenue scale, heritage milestones, global focus, and sustainability progress sourced from Amorepacific’s investor centre, history hub, and 2030 Promise disclosures.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {QUICK_FACTS.map(({ label, value, context, icon: Icon }) => (
            <article
              key={label}
              className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md dark:border-border/40 dark:bg-slate-900/80"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
                  <p className="text-lg font-semibold text-foreground">{value}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{context}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12" id="vision">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Vision pillars for New Beauty builders</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            These four pillars—from Create New Beauty to AI First—describe the cultural and operational expectations Amorepacific places on its field and partners. Align your launch narrative with them to earn trust faster.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {VISION_PILLARS.map(({ title, description, proof, icon: Icon }) => (
            <article
              key={title}
              className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm dark:border-border/40 dark:bg-slate-900/80"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-foreground">{title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{description}</p>
              <p className="text-xs text-muted-foreground">Source: {proof}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10" id="timeline">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Timeline: Eight decades of beauty entrepreneurship</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Track pivotal inflection points—from camellia oil crafting to Vision 2035—to understand how Amorepacific built a trust-first brand compatible with modern MLM expectations.
          </p>
        </div>
        <div className="relative space-y-6 border-l border-border/50 pl-6 dark:border-border/30">
          {TIMELINE.map(({ era, headline, detail }) => (
            <div key={era} className="relative flex flex-col gap-2 pl-6">
              <span className="absolute -left-[13px] top-1 h-6 w-6 rounded-full border border-primary bg-background text-primary">
                <span className="inline-flex h-full w-full items-center justify-center text-xs font-semibold">●</span>
              </span>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">{era}</p>
              <h3 className="text-lg font-semibold text-foreground">{headline}</h3>
              <p className="text-sm text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container space-y-12" id="compensation">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Compensation levers new MLM leaders should benchmark</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Amorepacific’s hybrid of experiential retail, loyalty-based incentives, referrals, and leadership incubators shows how legacy beauty brands evolve into modern MLM-ready models.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {COMPENSATION_LEVERS.map(({ title, description, highlight, icon: Icon }) => (
            <article
              key={title}
              className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-background/85 p-6 shadow-sm dark:border-border/40 dark:bg-slate-900/80"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{description}</p>
              <p className="text-sm font-medium text-foreground">{highlight}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12" id="success">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Momentum highlights for confidence-building narratives</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            These milestones combine revenue ambitions, global retail expansion, and sustainability wins to communicate brand durability to prospects and investors.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {MOMENTUM_HIGHLIGHTS.map(({ title, narrative, metric, source, icon: Icon }) => (
            <article
              key={title}
              className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/85 p-6 shadow-sm dark:border-border/40 dark:bg-slate-900/80"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{narrative}</p>
              <p className="text-sm font-medium text-foreground">{metric}</p>
              <p className="text-xs text-muted-foreground">Source: {source}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12" id="innovation">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Innovation signals to weave into product masterminds</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            AI pipelines, predictive skincare, and design-for-sustainability awards reinforce why Amorepacific remains a science-first beauty house.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {INNOVATION_SIGNALS.map(({ title, description, proof, icon: Icon }) => (
            <article
              key={title}
              className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm dark:border-border/40 dark:bg-slate-900/80"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{description}</p>
              <p className="text-xs text-muted-foreground">Source: {proof}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12" id="trust-insights">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Trust & reputation signals</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Sustain credibility with data-backed sustainability, ethical sourcing, and design accolades that resonate with regulators and discerning customers alike.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {TRUST_SIGNALS.map(({ title, detail, evidence, icon: Icon }) => (
            <article
              key={title}
              className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm dark:border-border/40 dark:bg-slate-900/80"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{detail}</p>
              <p className="text-xs text-muted-foreground">Source: {evidence}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12" id="trust-score">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Trust score snapshot</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Our trust model weighs governance, sentiment, and transparency to help you calibrate risk mitigation plans before scaling a comparable beauty venture.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {TRUST_SCORES.map(({ title, score, insight, methodology }) => (
            <article
              key={title}
              className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm dark:border-border/40 dark:bg-slate-900/80"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{title}</p>
                <p className="text-2xl font-semibold text-primary">{score}</p>
              </div>
              <p className="text-sm text-muted-foreground">{insight}</p>
              <p className="text-xs text-muted-foreground">Methodology: {methodology}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12" id="critiques">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Critiques & lessons</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Address these realities head-on—limited public compensation materials, promotion-heavy recoveries, and legacy channel volatility—to keep leaders and regulators aligned.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CRITIQUES.map(({ title, description, mitigation, source, icon: Icon }) => (
            <article
              key={title}
              className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm dark:border-border/40 dark:bg-slate-900/80"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{description}</p>
              <p className="text-sm font-medium text-foreground">Mitigation: {mitigation}</p>
              <p className="text-xs text-muted-foreground">Source: {source}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12" id="headlines">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Recent headlines</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Stay current on global expansion, innovation showcases, and strategy reveals to inform your weekly leadership dashboards.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {HEADLINES.map(({ title, source, date, summary, url }) => (
            <article
              key={title}
              className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm dark:border-border/40 dark:bg-slate-900/80"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{source}</p>
                <p className="text-sm font-medium text-muted-foreground">{date}</p>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">{summary}</p>
              <Button asChild variant="link" className="h-auto p-0 text-sm font-semibold text-primary">
                <Link href={url} rel="nofollow noopener noreferrer" target="_blank">
                  Read more
                  <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-10" id="cta">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">How Cloud MLM Software helps New Beauty founders</h2>
          <p className="max-w-3xl text-base text-muted-foreground">
            Transform Amorepacific’s playbook into your own scalable reality with modular software, predictive analytics, and global compliance support.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CLOUD_PLAYS.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm dark:border-border/40 dark:bg-slate-900/80"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={contactHref}>
              Schedule a platform walkthrough
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={pricingHref}>
              Review pricing options
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
