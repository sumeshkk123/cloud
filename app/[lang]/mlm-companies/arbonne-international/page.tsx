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
  Gavel,
  Factory,
  Globe2,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import {
  ChartLineUp,
  GlobeHemisphereWest,
  LightbulbFilament,
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
  score: 65,
  label: "Overall trust score",
  summary: "Balances B Corp governance, wellbeing accolades, and legacy quality recalls requiring ongoing vigilance."
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
    value: "$553M (est.)",
    detail:
      "Happi’s 2025 Top Company profile recorded roughly $553M in sales when Groupe Rocher integrated Arbonne into the portfolio."
  },
  {
    label: "Founded",
    value: "1980",
    detail:
      "Petter Mørck launched Arbonne in Orem, Utah before relocating to California to build a plant-based beauty and wellness brand."
  },
  {
    label: "Employees",
    value: "800+",
    detail:
      "Happi reported approximately 800 corporate team members supporting global manufacturing and distribution."
  },
  {
    label: "Consultants",
    value: "250k+",
    detail:
      "The same report cited more than 250,000 active independent consultants across the US, Canada, UK, Australia, New Zealand, Poland, Taiwan and beyond."
  }
];

const VISION_PILLARS: VisionPillar[] = [
  {
    title: "Plant-powered wellbeing",
    description:
      "Public Benefit Corporation status keeps Arbonne’s purpose anchored in vegan, clean-label formulary that nourishes beauty and wellness from the inside out.",
    proof: "Groupe Rocher brand overview detailing Arbonne’s mission and plant-based innovation roadmap.",
    icon: Leaf
  },
  {
    title: "Certified impact leadership",
    description:
      "Certified B Corporation standards guide operational decisions so profit, people, and planet remain in balance across every market launch.",
    proof: "Groupe Rocher brand page noting 2019 B Corp certification and mission-driven governance.",
    icon: ShieldCheck
  },
  {
    title: "Flourish Foundation legacy",
    description:
      "$26M+ in donations and 2.3M lives touched show how philanthropy and Habitat partnerships reinforce a resilient community narrative.",
    proof: "Flourish Arbonne Foundation impact statistics published by Groupe Rocher.",
    icon: HeartHandshake
  },
  {
    title: "Digital-first field culture",
    description:
      "CEO Jen Orlando is recognised for championing digital tools that blend relationship building, analytics, and global sales execution.",
    proof: "Direct Selling News coverage of the 2025 LA Times Studios OC Executive Awards.",
    icon: UsersThree
  }
];

const STORY_ARC: TimelineEvent[] = [
  {
    era: "1980",
    headline: "Vegan skincare debut",
    detail:
      "Petter Mørck launches Arbonne in Utah, drawing on Swiss formulation expertise to create cruelty-free skincare backed by independent consultants."
  },
  {
    era: "2010",
    headline: "Chapter 11 restructuring",
    detail:
      "Natural Products Group, Arbonne’s parent, enters bankruptcy protection to deleverage and modernise operations ahead of renewed growth."
  },
  {
    era: "2018",
    headline: "Groupe Rocher acquisition",
    detail:
      "The French mission-driven group acquires Arbonne, adding global infrastructure, nature-led R&D, and synergies with fellow purpose-led brands."
  },
  {
    era: "2019",
    headline: "Certified B Corporation",
    detail:
      "Arbonne becomes a B Corp, formalising social and environmental accountability alongside Public Benefit Corporation status."
  },
  {
    era: "2024–2025",
    headline: "Workplace wellbeing accolades",
    detail:
      "Cigna awards Gold-level Healthy Workforce designation and Jen Orlando earns OC Executive Award honours for digital-first leadership."
  }
];

const COMPENSATION_ELEMENTS: CompensationElement[] = [
  {
    title: "Client-centered retailing",
    description:
      "Consultants purchase at wholesale and retail to customers, translating Arbonne’s plant-based portfolio into curated wellness routines.",
    highlight: "Happi notes 250k+ consultants orchestrating face-to-face and digital retail experiences worldwide.",
    icon: GlobeHemisphereWest
  },
  {
    title: "Leadership development bonuses",
    description:
      "As a multi-level marketing model, uplines participate in volume-based bonuses when teams maintain compliant customer sales.",
    highlight: "Arbonne International’s MLM structure relies on documented product movement rather than enrolment fees for advancement.",
    icon: ChartLineUp
  },
  {
    title: "Healthy Living bundles",
    description:
      "Programs like 30 Days to Healthy Living bundle nutrition, education, and habit coaching, creating subscription-style revenue for consultants.",
    highlight: "Groupe Rocher showcases the set as a reset toolkit that helps consultants drive repeatable, wellness-focused outcomes.",
    icon: Sparkles
  },
  {
    title: "Purpose-aligned recognition",
    description:
      "Philanthropic service hours and community partnerships feed into recognition stories that differentiate the brand’s incentive trips and awards.",
    highlight: "Flourish Arbonne Foundation impact figures underpin storytelling for rank celebrations and CSR-linked bonuses.",
    icon: HeartHandshake
  }
];

const SUCCESS_STORIES: SuccessStory[] = [
  {
    title: "Healthy workforce leadership",
    description:
      "Cigna Healthcare awarded Arbonne Gold-level Healthy Workforce Designation for an inclusive, stigma-free wellbeing culture.",
    metric: "2024 Cigna Healthcare Gold-level Healthy Workforce Designation",
    proof: "Direct Selling News — Arbonne Honored for Commitment to Employee Well-Being",
    icon: BadgeCheck
  },
  {
    title: "Flourish impact milestone",
    description:
      "Foundation programmes surpassed the goal of empowering one million youth seven years early while donating $26M+ globally.",
    metric: "$26M+ donated; 2.3M lives impacted",
    proof: "Groupe Rocher — Flourish Arbonne Foundation summary",
    icon: HeartHandshake
  },
  {
    title: "Leadership excellence",
    description:
      "CEO Jen Orlando earned the 2025 OC Executive Awards (Midsize) honour for pairing digital innovation with relationship-first growth.",
    metric: "2025 LA Times Studios OC Executive Awards, CEO/President Midsize",
    proof: "Direct Selling News — Jen Orlando Honored at OC Executive Awards",
    icon: Sparkles
  }
];

const INNOVATION_SIGNALS: Innovation[] = [
  {
    title: "30 Days to Healthy Living reset",
    description:
      "A guided programme that blends vegan nutrition, habit coaching, and weight management support to refresh customer routines.",
    proof: "Groupe Rocher — Product spotlight on the 30 Days to Healthy Living Set",
    icon: LightbulbFilament
  },
  {
    title: "EnergyFizz functional beverages",
    description:
      "Low-calorie, plant-powered EnergyFizz sticks target cognition and fatigue relief with ginseng, CoQ10, and green tea caffeine.",
    proof: "Groupe Rocher — EnergyFizz Ginseng Fizz Sticks overview",
    icon: Globe2
  },
  {
    title: "Digital-first field enablement",
    description:
      "Award citations highlight how leadership is scaling innovative platforms to keep consultants connected and data-informed.",
    proof: "Direct Selling News — Jen Orlando Honored at OC Executive Awards",
    icon: UsersThree
  }
];

const REPUTATION_SIGNALS: ReputationSignal[] = [
  {
    title: "Certified B Corporation",
    detail:
      "Less than 1% of global businesses meet B Corp standards; Arbonne’s certification codifies transparency, environmental, and social benchmarks.",
    evidence: "Groupe Rocher — Arbonne purpose and B Corp narrative",
    icon: ShieldCheck
  },
  {
    title: "Healthy workplace designation",
    detail:
      "Gold-level recognition from Cigna affirms how employee wellbeing, mental health resources, and inclusive policies are embedded.",
    evidence: "Direct Selling News — Arbonne Honored for Commitment to Employee Well-Being",
    icon: BadgeCheck
  },
  {
    title: "DSEF circle of distinction",
    detail:
      "Arbonne Canada’s Housni Ammor earned the DSEF Circle of Distinction for advancing consultant education across the market.",
    evidence: "Direct Selling News — DSA Canada Connect 2025",
    icon: HeartHandshake
  }
];

const CRITICAL_WATCHPOINTS: Critique[] = [
  {
    title: "Post-bankruptcy governance",
    description:
      "Arbonne’s parent sought Chapter 11 protection in 2010 to restructure debt, underlining the need for disciplined financial modelling.",
    mitigation: "Stress-test cash flow, automate forecast reviews, and ensure geographic expansion is financed with conservative leverage assumptions.",
    source: "Arbonne International — Wikipedia",
    icon: Gavel
  },
  {
    title: "Product quality vigilance",
    description:
      "Regulators coordinated recalls between 2013 and 2017 after bacterial contamination surfaced in select skincare and colour lines.",
    mitigation: "Embed real-time batch analytics, supplier audits, and automated recall playbooks across every contract manufacturer.",
    source: "Arbonne International — Wikipedia product recall section",
    icon: AlertTriangle
  },
  {
    title: "Field digital readiness",
    description:
      "Award citations emphasise heavy investment in digital tools—lagging adoption could erode consultant productivity and compliance visibility.",
    mitigation: "Maintain a digital centre of excellence, pair launches with certification paths, and tie incentives to verified platform utilisation.",
    source: "Direct Selling News — Jen Orlando Honored at OC Executive Awards",
    icon: Factory
  }
];

const TRUST_SCORES: TrustScore[] = [
  {
    title: "Compliance posture",
    score: "67/100",
    insight:
      "B Corp governance, wellbeing audits, and Groupe Rocher oversight anchor compliance, yet past restructurings reinforce the need for disciplined controls.",
    methodology: "Weighted on certifications, parent-company governance, historic legal actions, and quality management maturity."
  },
  {
    title: "Consumer sentiment",
    score: "62/100",
    insight:
      "Mission-led philanthropy and vegan positioning resonate, though premium pricing and prior recalls require transparent QA storytelling.",
    methodology: "Blend of third-party accolades, philanthropic reach, and historical product sentiment volatility."
  },
  {
    title: "Opportunity realism",
    score: "63/100",
    insight:
      "Consultant success hinges on retail execution and digital enablement; leadership awards signal progress, but MLM economics still demand grounded earnings narratives.",
    methodology: "Assessed via business model structure, leadership enablement signals, and public income communications."
  }
];

const NEWS_HEADLINES: NewsItem[] = [
  {
    title: "Arbonne Honored for Commitment to Employee Well-Being",
    source: "Direct Selling News",
    date: "May 29, 2025",
    summary:
      "Cigna Healthcare selected Arbonne for Gold-level Healthy Workforce status after reviewing inclusive mental health and wellbeing programmes.",
    url: "https://www.directsellingnews.com/2025/05/29/arbonne-honored-for-commitment-to-employee-well-being/"
  },
  {
    title: "Jen Orlando Honored at OC Executive Awards",
    source: "Direct Selling News",
    date: "August 25, 2025",
    summary:
      "Arbonne’s CEO earned the LA Times Studios accolade for driving digital transformation while sustaining relationship-first sales cultures.",
    url: "https://www.directsellingnews.com/2025/08/25/jen-orlando-honored-at-oc-executive-awards/"
  },
  {
    title: "DSA Canada Connect 2025",
    source: "Direct Selling News",
    date: "July 2, 2025",
    summary:
      "Canadian industry awards spotlighted Housni Ammor of Arbonne for education leadership amid AI, compliance, and social commerce discussions.",
    url: "https://www.directsellingnews.com/2025/07/02/dsa-canada-connect-2025/"
  }
];

const CLOUD_ROADMAP: CloudPlay[] = [
  {
    title: "Quality intelligence mesh",
    description:
      "Deploy end-to-end traceability and lab analytics so contamination risks trigger proactive holds instead of public recalls.",
    icon: Factory
  },
  {
    title: "Income disclosure engine",
    description:
      "Automate earnings dashboards, compliant claim libraries, and jurisdictional disclosures for every consultant touchpoint.",
    icon: ChartLineUp
  },
  {
    title: "Programmatic wellness playbooks",
    description:
      "Model 30-day resets, habit journeys, and replenishment cadence to help teams launch wellness bundles with measurable retention.",
    icon: Sparkles
  },
  {
    title: "Digital adoption sprints",
    description:
      "Guide LMS certification, AI assistant rollouts, and social selling analytics so every market mirrors the award-winning enablement approach.",
    icon: UsersThree
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Arbonne International Trust & Compensation Insights";
  const description =
    "Review Arbonne International’s plant-based mission, compensation levers, innovation signals, critiques, and trust score snapshot to inform your next wellness build.";
  const keywords = [
    "Arbonne trust score",
    "Arbonne MLM analysis",
    "Arbonne compensation overview",
    "Cloud MLM Software trust advisory",
    "Arbonne International due diligence"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/arbonne-international", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ArbonnePageProps = {
  params: { lang: SupportedLocale };
};

export default function ArbonnePage({ params }: ArbonnePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const trustScoreHref = "#trust-score";
  const timelineHref = "#timeline";
  const trustSnapshotHref = "#trust-insights";
  const trustFill = `${PRIMARY_TRUST_SCORE.score}%`;

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-primary/40 bg-gradient-to-br from-[#0B6A4B]/18 via-white to-[#7AC19C]/12 py-20 dark:border-primary/30 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950/35">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(11,106,75,0.35),transparent_55%),radial-gradient(circle_at_82%_28%,rgba(40,146,112,0.28),transparent_60%),radial-gradient(circle_at_52%_84%,rgba(122,193,156,0.24),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.75fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-1 text-sm font-semibold text-slate-900 backdrop-blur dark:border-white/20 dark:bg-white/10 dark:text-white">
              Mission: Sustainable healthy living for all
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Inside Arbonne — plant-first wellbeing, purpose-led governance, and modern field enablement.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/80">
                Evaluate how Arbonne’s B Corp mission, philanthropic reach, revenue footprint, and field innovations shape trust expectations. Navigate the company snapshot, history, compensation levers, successes, critiques, and live headlines to architect your own resilient wellness venture.
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
            <div className="absolute -right-10 top-14 h-28 w-28 rounded-full bg-[#0B6A4B]/20 blur-3xl" aria-hidden />
            <div className="absolute bottom-0 left-8 h-20 w-20 translate-y-1/2 rounded-full bg-[#7AC19C]/30 blur-3xl dark:bg-[#7AC19C]/40" aria-hidden />
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col justify-between gap-5 rounded-3xl border border-primary/20 bg-gradient-to-br from-white via-emerald-50 to-white p-6 shadow-sm dark:border-primary/30 dark:from-slate-950 dark:via-primary/10 dark:to-slate-950">
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">Trust score outlook</h2>
                  <p className="text-sm text-muted-foreground">Aggregate view of compliance guardrails, stakeholder sentiment, and opportunity realism.</p>
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
                  <div className="absolute inset-0 rounded-full blur-xl bg-emerald-200/30 dark:bg-emerald-900/30" aria-hidden />
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
                  Financial scale, founding context, and field reach for diligence and benchmarking.
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
              B Corp governance, philanthropic depth, and a global consultant network define Arbonne’s modern wellness positioning.
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Vision & brand pillars</h2>
          <p className="text-sm text-muted-foreground">
            Translate Arbonne’s purpose-driven blueprint into actionable pillars for your own trust and growth narrative.
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
              Anchor market expansion and risk planning on the milestones that shaped Arbonne’s governance and growth story.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)]">
            <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 text-sm text-muted-foreground dark:border-primary/40 dark:bg-primary/10">
              Historic restructuring, mission certification, and wellbeing accolades reveal a brand balancing innovation with disciplined oversight.
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
            Understand the opportunity levers and the proof points that validate Arbonne’s field earnings narrative.
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
            Surface the proof points that reassure stakeholders about execution, culture, and impact.
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
            Track the product, programme, and platform innovations informing Arbonne’s next chapter.
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
            Combine third-party validations and stakeholder recognition to inform due diligence conversations.
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
            Flag the pressure points so your own launch can build safeguards from day one.
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
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(11,106,75,0.25),transparent_55%),radial-gradient(circle_at_78%_30%,rgba(122,193,156,0.28),transparent_60%)]" aria-hidden />
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              How Cloud MLM Software helps
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Build a mission-led wellness brand with compliance, quality, and digital enablement baked in.
            </h2>
            <p className="text-sm text-muted-foreground">
              Launch your own sustainable healthy living venture with toolkits that model B Corp governance, automate quality oversight, and orchestrate consultant enablement.
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
