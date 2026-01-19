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
  FlaskConical,
  Gavel,
  Globe2,
  HeartHandshake,
  Laptop,
  Share2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet
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
  score: 59,
  label: "Overall trust score",
  summary: "Balances Natura &Co governance gains, philanthropic reach, and active legal restructuring around talc liabilities."
};

const COMPANY_FACTS: CompanyFact[] = [
  {
    label: "Revenue",
    value: "$9.1B (2020)",
    detail: "Wikipedia’s 2025 update records US$9.1B in 2020 global sales as Avon advanced its omni-channel model."
  },
  {
    label: "Founded",
    value: "1886",
    detail: "Born as the California Perfume Company to give women flexible earnings, a purpose still championed in Avon’s “Embrace Your Power” story."
  },
  {
    label: "Representatives",
    value: "5–6M+ worldwide",
    detail: "U.S. government data cited by Wikipedia notes 5–6 million reps in 100+ countries; Progress for Women adds that 90% identify as women."
  },
  {
    label: "Parent focus",
    value: "Natura &Co (LatAm)",
    detail: "Natura’s 2025 releases report Wave 2 integration, BRL 445M Q2 profit, and the group retaining Avon brand rights across Latin America."
  }
];

const VISION_PILLARS: VisionPillar[] = [
  {
    title: "Beauty democracy",
    description: "Innovation centres from Poland to Brazil keep inclusive, trend-led products accessible at mass price points.",
    proof: "Avon — Beauty & Innovation overview.",
    icon: Sparkles
  },
  {
    title: "Economic freedom for women",
    description: "135+ years of listening to women and offering flexible earning paths remain the company’s core differentiator.",
    proof: "Avon — About Us (Embrace Your Power).",
    icon: HeartHandshake
  },
  {
    title: "Digital social commerce",
    description: "The brand calls itself the original social network and now equips reps with digital brochures, apps, and social tools.",
    proof: "Avon — Our Representatives (Selling Digitally).",
    icon: Share2
  },
  {
    title: "Impact-led responsibility",
    description: "US$1.1B donated to NGOs and policies like menopause support align brand purpose with stakeholder wellbeing.",
    proof: "Avon — Progress for Women impact pledge.",
    icon: ShieldCheck
  }
];

const STORY_ARC: TimelineEvent[] = [
  {
    era: "1886",
    headline: "California Perfume roots",
    detail:
      "David H. McConnell launches the California Perfume Company so women can earn independently through relationship selling."
  },
  {
    era: "1939",
    headline: "Rebrand to Avon",
    detail: "The company adopts the Avon name, expands labs, and amplifies its representative network across global markets."
  },
  {
    era: "2019",
    headline: "Natura &Co acquisition",
    detail: "Brazil’s Natura agrees to a share-swap deal, forming a US$10B beauty group and embedding ESG-led governance."
  },
  {
    era: "Aug 2024",
    headline: "Chapter 11 to handle talc claims",
    detail: "Avon files for U.S. Chapter 11 protection to consolidate litigation and fund settlements around talc-related lawsuits."
  },
  {
    era: "Sep 2025",
    headline: "International divestiture & Latin focus",
    detail:
      "Natura announces the sale of Avon International to Regent and a separate CARD divestiture while retaining Latin America IP control."
  }
];

const COMPENSATION_ELEMENTS: CompensationElement[] = [
  {
    title: "Retail margin foundations",
    description: "Representatives buy at wholesale and sell at recommended retail, keeping flexible profit on curated assortments.",
    highlight: "Progress for Women discloses a minimum 20% discount that can rise to 40% for top seller segments.",
    icon: Wallet
  },
  {
    title: "Leadership & team bonuses",
    description: "Full-time beauty entrepreneurs recruit, coach, and support downlines to unlock tiered bonuses.",
    highlight: "Avon’s representative hub explains pathways for building and training teams while remaining a self-directed business owner.",
    icon: UsersThree
  },
  {
    title: "Digital storefront accelerators",
    description: "Digital brochures, social commerce features, and the Avon On toolkit keep customer acquisition always-on.",
    highlight: "The Selling Digitally guidance frames Avon as the original social network upgraded with modern technology.",
    icon: Laptop
  },
  {
    title: "Purpose-driven rewards",
    description: "Cause marketing campaigns and global incentives tie recognition to community impact as well as volume.",
    highlight: "Progress for Women reports over US$100M invested in incentives, prizes, and training across 2022.",
    icon: GlobeHemisphereWest
  }
];

const SUCCESS_STORIES: SuccessStory[] = [
  {
    title: "US$1.1B impact fund",
    description: "Decades of breast cancer and anti-violence partnerships illustrate the scale of Avon’s social investment.",
    metric: "US$1.1B donated to women-focused NGOs",
    proof: "Avon — Progress for Women impact pledge.",
    icon: HeartHandshake
  },
  {
    title: "Latin America profit rebound",
    description:
      "Natura reported Wave 2 integration delivering BRL 445M net income and 14.7% recurring EBITDA margin in Q2-25.",
    metric: "BRL 445M Q2-25 net income; 14.7% LATAM EBITDA margin",
    proof: "Natura RI — Natura reports net income of BRL 445 million in the second quarter.",
    icon: TrendingUp
  },
  {
    title: "Cruelty-free milestone",
    description:
      "In 2019 Avon became the first global beauty player selling in China to end regulatory-required animal testing.",
    metric: "PETA lists Avon among companies working for regulatory change (2019)",
    proof: "Wikipedia — Avon Products (animal testing section).",
    icon: BadgeCheck
  }
];

const INNOVATION_SIGNALS: Innovation[] = [
  {
    title: "Global innovation centres",
    description:
      "Scientists and engineers collaborate across labs from Poland to Brazil to test durability, travel tolerance, and efficacy.",
    proof: "Avon — Beauty & Innovation laboratories overview.",
    icon: FlaskConical
  },
  {
    title: "Future of Beauty intelligence",
    description: "Annual research distils macro trends and consumer insights to steer pipeline prioritisation.",
    proof: "Avon — Future of Beauty report.",
    icon: LightbulbFilament
  },
  {
    title: "Always-on social selling",
    description: "Digital tools augment one-to-one relationships with instant sharing, e-commerce, and automated follow-ups.",
    proof: "Avon — Our Representatives (Selling Digitally).",
    icon: Laptop
  }
];

const REPUTATION_SIGNALS: ReputationSignal[] = [
  {
    title: "Parent earns CDP double-A",
    detail:
      "Natura received “A” ratings for Climate and Supplier Engagement, reinforcing governance oversight for Avon operations.",
    evidence: "Natura RI — Natura reports net income of BRL 445 million in the second quarter.",
    icon: ShieldCheck
  },
  {
    title: "US$1.1B NGO support",
    detail: "Long-term donations to breast health and anti-violence partners demonstrate consistent social proof points.",
    evidence: "Avon — Progress for Women impact pledge.",
    icon: Globe2
  },
  {
    title: "Cruelty-free regulatory change",
    detail: "2019 policy shift eliminated animal testing requirements across markets including China, recognised by PETA.",
    evidence: "Wikipedia — Avon Products (animal testing section).",
    icon: BadgeCheck
  }
];

const CRITICAL_WATCHPOINTS: Critique[] = [
  {
    title: "Talc litigation runway",
    description: "Chapter 11 protection addresses pending talc lawsuits but signals prolonged legal scrutiny.",
    mitigation: "Implement granular batch traceability, claims analytics, and transparent customer communications ahead of relaunches.",
    source: "Wikipedia — Avon Products (Aug 2024 Chapter 11 filing).",
    icon: AlertTriangle
  },
  {
    title: "Anti-bribery controls",
    description:
      "Legacy FCPA violations in China highlight the need for relentless distributor and executive compliance oversight.",
    mitigation: "Automate third-party due diligence, refresh code-of-conduct attestations, and log all incentive spending centrally.",
    source: "Wikipedia — Avon Products (Foreign Corrupt Practices Act section).",
    icon: Gavel
  },
  {
    title: "Divestment execution risk",
    description:
      "Selling Avon International and Avon CARD introduces licensed operations that could dilute brand experience.",
    mitigation: "Deploy licensing scorecards, content governance, and shared service APIs to enforce consistent rep tooling.",
    source: "Natura RI — Avon International and CARD sale announcements (Sep 2025).",
    icon: Factory
  }
];

const TRUST_SCORES: TrustScore[] = [
  {
    title: "Compliance posture",
    score: "58/100",
    insight:
      "Active Chapter 11 proceedings and past FCPA settlements require rigorous audit trails despite Natura’s governance support.",
    methodology: "Weighted across litigation disclosures, historical enforcement actions, and parent-company oversight."
  },
  {
    title: "Stakeholder sentiment",
    score: "64/100",
    insight:
      "US$1.1B donations and cruelty-free commitments strengthen goodwill even as restructuring fuels uncertainty.",
    methodology: "Evaluates philanthropic scale, sustainability recognitions, and public advocacy indices."
  },
  {
    title: "Opportunity realism",
    score: "55/100",
    insight:
      "20–40% retail margins and digital enablement attract entrepreneurs, yet performance gaps in Brazil show execution risk.",
    methodology: "Blend of compensation levers, field tooling maturity, and recent market performance signals."
  }
];

const NEWS_HEADLINES: NewsItem[] = [
  {
    title: "Natura announces agreement to sell Avon International and reinforces focus on Latin America",
    source: "Natura RI",
    date: "September 18, 2025",
    summary:
      "Deal transfers Europe, Africa, and Asia operations to Regent while Natura retains Latin American intellectual property and integration oversight.",
    url: "https://ri.natura.com.br/en/noticias/natura-announces-agreement-to-sell-avon-international-and-reinforces-focus-on-latin-america/"
  },
  {
    title: "Natura announces the sale of Avon's operations in Central America and the Dominican Republic",
    source: "Natura RI",
    date: "September 15, 2025",
    summary:
      "Grupo PDC will license the brand for Avon CARD markets, with Natura supplying product and monitoring execution.",
    url: "https://ri.natura.com.br/en/noticias/natura-announces-the-sale-of-avons-operations-in-central-america-and-the-dominican-republic/"
  },
  {
    title: "Natura reports net income of BRL 445 million in the second quarter",
    source: "Natura RI",
    date: "August 11, 2025",
    summary:
      "Wave 2 integration delivered BRL 445M LATAM profit, 14.7% recurring EBITDA, and 408M cash generation despite Avon Brazil softness.",
    url: "https://ri.natura.com.br/en/noticias/natura-reports-net-income-of-brl-445-million-in-the-second-quarter/"
  }
];

const CLOUD_ROADMAP: CloudPlay[] = [
  {
    title: "Product liability intelligence",
    description:
      "Map ingredients to batches, automate incident intake, and surface talc risk dashboards before expansion.",
    icon: ShieldCheck
  },
  {
    title: "License governance cockpit",
    description:
      "Provide Regent and Grupo PDC with compliant content, API access, and SLAs while keeping data ownership in-house.",
    icon: Factory
  },
  {
    title: "Digital rep enablement",
    description:
      "Model Avon-style digital brochures, AI coaching, and compensation transparency to keep field productivity resilient.",
    icon: ChartLineUp
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Avon Products Inc. Trust & Compensation Insights";
  const description =
    "Explore Avon’s brand story, compensation levers, restructuring timeline, trust signals, and advisory scores with Cloud MLM Software’s analysis.";
  const keywords = [
    "Avon trust insights",
    "Avon MLM analysis",
    "Avon compensation plan",
    "Cloud MLM Software advisory",
    "Natura Avon restructuring"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/avon-products-inc", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type AvonPageProps = {
  params: { lang: SupportedLocale };
};

export default function AvonPage({ params }: AvonPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const trustScoreHref = "#trust-score";
  const timelineHref = "#timeline";
  const trustSnapshotHref = "#trust-insights";
  const trustFill = `${PRIMARY_TRUST_SCORE.score}%`;

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-[#D946EF]/30 bg-gradient-to-br from-[#6E0DAD]/20 via-white to-[#FCE7F3]/25 py-20 dark:border-[#D946EF]/25 dark:from-slate-950 dark:via-slate-950 dark:to-fuchsia-950/30">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(216,70,239,0.25),transparent_55%),radial-gradient(circle_at_82%_26%,rgba(110,13,173,0.25),transparent_60%),radial-gradient(circle_at_54%_82%,rgba(252,231,243,0.35),transparent_60%)]"
          aria-hidden
        />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.75fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-1 text-sm font-semibold text-slate-900 backdrop-blur dark:border-white/20 dark:bg-white/10 dark:text-white">
              Mission: Beauty democracy empowering entrepreneurs
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Inside Avon Products Inc. — trust, compensation, and rebuild outlook.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/80">
                Analyse how Avon’s 139-year heritage, Natura &Co integration, talc liability restructuring, and philanthropic commitments shape risk and opportunity. Use the company snapshot, resilience timeline, compensation mechanics, and trust analytics to inform your next cosmetics expansion.
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

          <aside className="relative grid gap-6 rounded-3xl border border-white/30 bg-white/85 p-8 shadow-xl backdrop-blur dark:border-white/15 dark:bg-slate-950/70">
            <div className="absolute -right-12 top-10 h-28 w-28 rounded-full bg-[#D946EF]/30 blur-3xl" aria-hidden />
            <div className="absolute bottom-0 left-6 h-20 w-20 translate-y-1/2 rounded-full bg-[#FCE7F3]/50 blur-3xl dark:bg-[#FCE7F3]/30" aria-hidden />
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col justify-between gap-5 rounded-3xl border border-[#D946EF]/30 bg-gradient-to-br from-white via-fuchsia-50 to-white p-6 shadow-sm dark:border-[#D946EF]/40 dark:from-slate-950 dark:via-purple-900/30 dark:to-slate-950">
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">Trust score outlook</h2>
                  <p className="text-sm text-muted-foreground">Aggregate view of compliance guardrails, stakeholder sentiment, and opportunity realism.</p>
                </div>
                <div className="relative mx-auto flex h-32 w-32 items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `conic-gradient(#D946EF ${trustFill}, rgba(148,163,184,0.2) ${trustFill})`
                    }}
                    aria-hidden
                  />
                  <div className="absolute inset-[10px] rounded-full bg-white shadow-[inset_0_10px_25px_-20px_rgba(15,23,42,0.45)] dark:bg-slate-950" aria-hidden />
                  <div className="absolute inset-0 rounded-full blur-xl bg-fuchsia-200/40 dark:bg-fuchsia-900/30" aria-hidden />
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
                  Financial scale, founding story, and field reach to benchmark diligence conversations.
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
            <div className="rounded-3xl border border-white/20 bg-white/60 p-5 backdrop-blur dark:border-white/10 dark:bg-white/5">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-200">
                Internal actions
              </h2>
              <p className="pt-2 text-sm text-muted-foreground">
                Pair these insights with risk committees, regulated income disclosures, and liability response plans before launching lookalike offers.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Vision & brand pillars</h2>
          <p className="text-sm text-muted-foreground">
            Map Avon’s pillars so product, community, and digital experience strategies reinforce the brand you benchmark against.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {VISION_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
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
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Timeline of resilience</h2>
          <p className="text-sm text-muted-foreground">
            Track how Avon adapts—from door-to-door origins to modern restructuring—to anticipate your own inflection points.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-border/60 dark:bg-border/40" aria-hidden />
          <div className="space-y-8">
            {STORY_ARC.map((event) => (
              <article key={event.era} className="relative grid gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70 md:grid-cols-[auto_1fr] md:items-start">
                <div className="relative flex items-center md:flex-col md:items-start">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-sm font-semibold text-primary">
                    {event.era}
                  </span>
                  <span className="absolute left-4 top-8 h-full w-px bg-border/60 md:left-1/2 md:translate-x-[-0.5px]" aria-hidden />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{event.headline}</h3>
                  <p className="text-sm text-muted-foreground">{event.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Compensation breakdown</h2>
          <p className="text-sm text-muted-foreground">
            Understand the mechanics powering Avon’s field economics before modelling your own commission engine.
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
            Evaluate the proof points Avon shares with regulators, investors, and the field to gauge credibility.
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
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">{story.title}</h3>
                    <p className="text-xs text-primary/80 dark:text-primary/70">{story.metric}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{story.description}</p>
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
            Translate Avon’s product and digital innovation cadence into your own R&D and enablement roadmap.
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
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">{signal.title}</h3>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Proof: {signal.proof}</p>
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

      <section className="relative overflow-hidden border-y border-[#D946EF]/30 bg-gradient-to-br from-[#6E0DAD]/10 via-background to-[#FCE7F3]/20 py-20 dark:border-[#D946EF]/30 dark:from-[#6E0DAD]/15 dark:via-slate-950 dark:to-fuchsia-950/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(110,13,173,0.22),transparent_55%),radial-gradient(circle_at_78%_32%,rgba(216,70,239,0.25),transparent_60%)]" aria-hidden />
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D946EF]/40 bg-[#D946EF]/10 px-4 py-1 text-sm font-semibold text-[#6E0DAD] dark:text-fuchsia-100">
              How Cloud MLM Software helps
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Build a resilient beauty platform with compliance, licensing, and digital selling baked in.
            </h2>
            <p className="text-sm text-muted-foreground">
              Launch your own cosmetics network with tooling that mirrors Avon’s scale—quality intelligence, partner governance, and field enablement delivered from a single stack.
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
