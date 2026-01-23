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
  BadgeCheck,
  FlaskConical,
  Gavel,
  Globe2,
  Megaphone,
  ShoppingBag,
  Sparkles,
  Store
} from "lucide-react";
import {
  ChartLineUp,
  GlobeHemisphereWest,
  Handshake,
  MegaphoneSimple,
  Pulse,
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
  score: 61,
  label: "Overall trust signal",
  summary: "Balances Beautycounter’s policy leadership with the reality of a relaunching sales force still rebuilding consistency."
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
    value: "2013",
    detail: "Gregg Renfrew launched Beautycounter as a clean-beauty B Corporation anchored in safer formulations (Direct Selling News, Mar 13, 2019)."
  },
  {
    label: "Advocate network",
    value: "65k+",
    detail: "Independent distributors supported the brand at its peak prior to the Carlyle reorg (Direct Selling News, Sep 17, 2024)."
  },
  {
    label: "Omnichannel reach",
    value: "Ulta + direct",
    detail: "Ulta stores and Ulta.com remain purchase paths while the founder-led entity relaunches (Direct Selling News, May 9, 2024)."
  },
  {
    label: "Deal valuation",
    value: "$1B sale",
    detail: "Carlyle’s 2021 investment valued Counter Brands at $1B before Renfrew repurchased the assets in 2024 (Direct Selling News, Apr 19, 2024)."
  }
];

const VISION_PILLARS: VisionPillar[] = [
  {
    title: "Legislation-led mission",
    description:
      "Grassroots advocacy is the brand’s keystone—200k emails, 16k calls, and coalition lobbying keep policy reform tied to every product launch.",
    proof: "Direct Selling News — Beautycounter Leads Two-Day Virtual Lobbying Event for Cosmetic Reform (Jun 25, 2021).",
    icon: Megaphone
  },
  {
    title: "Science advisory guardrails",
    description:
      "A dedicated Science Advisory Council pressure-tests ingredient safety so field sellers have medical backing for every talking point.",
    proof: "Direct Selling News — Beautycounter Leads Two-Day Virtual Lobbying Event for Cosmetic Reform (Jun 25, 2021).",
    icon: FlaskConical
  },
  {
    title: "Community-first entrepreneurship",
    description:
      "With 65k+ advocates touched by the Carlyle era, the brand is recalibrating compensation to reward sustainable client-first growth.",
    proof: "Direct Selling News — Is Private Equity a Safe Bet? (Sep 17, 2024).",
    icon: UsersThree
  },
  {
    title: "Radical transparency",
    description:
      "Certified B Corp standards, Counteract Coalition commitments, and ingredient disclosures position Beautycounter as the compliance benchmark.",
    proof: "Direct Selling News — Personal Care Products Safety Act (Mar 13, 2019).",
    icon: Handshake
  }
];

const STORY_ARC: TimelineEvent[] = [
  {
    era: "2013",
    headline: "Beautycounter debuts as a B Corp",
    detail:
      "Renfrew launches the clean-beauty mission with B Corporation accountability and a consultant community committed to safer formulations."
  },
  {
    era: "2017",
    headline: "Counteract Coalition scales advocacy",
    detail:
      "Beautycounter unites nearly 20 clean brands to lobby for cosmetic reform, formalising its role as the industry’s policy quarterback."
  },
  {
    era: "2021",
    headline: "Carlyle era reshapes structure",
    detail:
      "A $1B valuation deal ushers in new leadership, omnichannel pushes, and compensation changes that top sellers say cut income by 60%."
  },
  {
    era: "Apr 2024",
    headline: "Founder repurchases the brand",
    detail:
      "Gregg Renfrew winds down Counter Brands LLC, reacquires Beautycounter IP, and promises a two-week reboot that grows into a deeper reset."
  },
  {
    era: "May–Jul 2024",
    headline: "Relaunch deferred to late 2024",
    detail:
      "Distribution continues through Ulta while the new entity rebuilds systems, messaging, and field confidence ahead of a staggered relaunch." 
  }
];

const COMPENSATION_ELEMENTS: CompensationElement[] = [
  {
    title: "Client-first retail earnings",
    description:
      "Curated skincare regimens and advocacy-led storytelling keep personal volume the anchor of consultant income expectations.",
    highlight: "Top advocates reported 60% month-over-month pay drops when overrides were trimmed—clear proof to double down on qualified client orders (Direct Selling News, Jul 12, 2024).",
    icon: ShoppingBag
  },
  {
    title: "Tiered leadership bonuses",
    description:
      "Rank advancements hinge on coaching teams toward compliant product movement, not recruitment-heavy hype.",
    highlight: "Carlyle’s short-lived plan reweighted team overrides and immediately triggered attrition, underscoring the need for transparent leadership pay (Direct Selling News, Jul 12, 2024).",
    icon: ChartLineUp
  },
  {
    title: "Advocacy and education stipends",
    description:
      "Policy trips, Science Advisory sessions, and Counteract Coalition activations create mission-based rewards beyond commission checks.",
    highlight: "The 2021 advocacy blitz documented 2,100 lawmaker meetings—activities consultants still cite as differentiating value (Direct Selling News, Jun 25, 2021).",
    icon: MegaphoneSimple
  },
  {
    title: "Omnichannel support buffers",
    description:
      "Ulta partnerships and corporate ecommerce fill inventory gaps so field leaders can focus on service while the new entity stabilises operations.",
    highlight: "Ulta’s shelf presence remains active through the relaunch pause, keeping product availability for client programmes (Direct Selling News, May 9, 2024).",
    icon: Store
  }
];

const SUCCESS_STORIES: SuccessStory[] = [
  {
    title: "Policy wins on repeat",
    description:
      "Beautycounter advocates helped pass 10+ health-protective laws and keep cosmetic reform on the federal agenda.",
    metric: "200k emails • 16k calls • 2.1k legislative meetings",
    proof: "Direct Selling News — Beautycounter Leads Two-Day Virtual Lobbying Event (Jun 25, 2021).",
    icon: Gavel
  },
  {
    title: "Clean fragrance disruption",
    description:
      "Five transparent eau de parfums launched with simultaneous lobbying to close the fragrance loophole in federal law.",
    metric: "5 ingredient-disclosed scents",
    proof: "Direct Selling News — Beautycounter Enters Fragrance Category (Mar 28, 2024).",
    icon: Sparkles
  },
  {
    title: "Coalition-powered community",
    description:
      "40k+ consultants rallied behind Counteract Coalition initiatives, embedding civic engagement into everyday field culture.",
    metric: "40k consultants mobilised",
    proof: "Direct Selling News — Personal Care Products Safety Act (Mar 13, 2019).",
    icon: UsersThree
  }
];

const INNOVATION_SIGNALS: Innovation[] = [
  {
    title: "Fragrance transparency playbook",
    description:
      "Ingredient disclosure for aromatic blends positions Beautycounter to influence how the FDA enforces future fragrance reporting.",
    proof: "Direct Selling News — Beautycounter Enters Fragrance Category (Mar 28, 2024).",
    icon: Sparkles
  },
  {
    title: "Founder-led rebuild",
    description:
      "Renfrew’s buyback consolidates brand IP, formulations, and field culture into a new entity designed for compliance-first scaling.",
    proof: "Direct Selling News — Beautycounter Founder Buys Back Company (Apr 19, 2024).",
    icon: Globe2
  },
  {
    title: "Science advisory cadence",
    description:
      "Regular consultation with endocrinology and policy experts keeps product claims aligned with emerging research.",
    proof: "Direct Selling News — Beautycounter Leads Two-Day Virtual Lobbying Event (Jun 25, 2021).",
    icon: Pulse
  }
];

const REPUTATION_SIGNALS: ReputationSignal[] = [
  {
    title: "Certified B Corporation",
    detail:
      "Third-party verification of governance, worker, community, and environmental standards underpins trust narratives.",
    evidence: "Direct Selling News — Personal Care Products Safety Act (Mar 13, 2019).",
    icon: BadgeCheck
  },
  {
    title: "Counteract Coalition leadership",
    detail:
      "Beautycounter convenes peer brands to lobby for safer ingredients, placing consultants alongside public health voices.",
    evidence: "Direct Selling News — Beautycounter Leads Two-Day Virtual Lobbying Event (Jun 25, 2021).",
    icon: Handshake
  },
  {
    title: "Mainstream retail validation",
    detail:
      "Ulta’s national distribution keeps product credibility high during the founder-led reset and reassures clients about supply continuity.",
    evidence: "Direct Selling News — Beautycounter Postpones Relaunch Until Late 2024 (May 9, 2024).",
    icon: GlobeHemisphereWest
  }
];

const CRITICAL_WATCHPOINTS: Critique[] = [
  {
    title: "Comp plan volatility",
    description:
      "Rapid overrides cuts under Carlyle devastated top field earners and eroded trust in headquarters decision-making.",
    mitigation: "Model new incentives against historical payout data, lock income disclosure automation, and beta test shifts with leader councils first.",
    source: "Direct Selling News — How a Private Equity Buyout Backfired for Beautycounter (Jul 12, 2024).",
    icon: AlertTriangle
  },
  {
    title: "Capital structure whiplash",
    description:
      "Foreclosure headlines and the abrupt handoff from Carlyle back to lenders rattled regulators and the field alike.",
    mitigation: "Publish a transparent capital roadmap, align lenders on compliance milestones, and communicate escrow safeguards to consultants.",
    source: "Direct Selling News — Is Private Equity a Safe Bet? (Sep 17, 2024).",
    icon: Gavel
  },
  {
    title: "Relaunch execution risk",
    description:
      "Promises of a two-week pause stretched into a year-long rebuild, stressing inventory, logistics, and loyalty loops.",
    mitigation: "Phase reopenings with war-room dashboards, publish SLA targets weekly, and reinforce Ulta fulfilment as the safety net.",
    source: "Direct Selling News — Beautycounter Postpones Relaunch Until Late 2024 (May 9, 2024).",
    icon: AlertTriangle
  }
];

const TRUST_SCORES: TrustScore[] = [
  {
    title: "Advocacy governance",
    score: "72/100",
    insight:
      "Documented legislative wins, B Corp accountability, and a coalition model show durable governance muscle even during transition.",
    methodology: "Weighted on third-party certifications, lobbying transparency, and coalition outcomes since 2013."
  },
  {
    title: "Field sentiment recovery",
    score: "54/100",
    insight:
      "Consultant morale is rebuilding after compensation shocks and leadership churn, demanding intentional trust repair.",
    methodology: "Analyzes pay plan revisions, attrition narratives, and consultant feedback loops post-Carlyle."
  },
  {
    title: "Operational readiness",
    score: "58/100",
    insight:
      "Ulta partnerships keep product on shelves, yet tech migrations and relaunch delays signal ongoing execution risk to monitor.",
    methodology: "Blends distribution continuity, relaunch milestones, and supply-chain transparency commitments."
  }
];

const NEWS_HEADLINES: NewsItem[] = [
  {
    title: "Beautycounter founder buys back company",
    source: "Direct Selling News",
    date: "Apr 19, 2024",
    summary:
      "Gregg Renfrew reacquired the Beautycounter brand, winding down Counter Brands LLC and setting the stage for a founder-led relaunch.",
    url: "https://www.directsellingnews.com/2024/04/19/beautycounter-founder-buys-back-company/"
  },
  {
    title: "Beautycounter postpones relaunch until late 2024",
    source: "Direct Selling News",
    date: "May 9, 2024",
    summary:
      "The newly formed entity extended its pause, keeping Ulta retail and ecommerce open while rebuilding operations and systems.",
    url: "https://www.directsellingnews.com/2024/05/09/beautycounter-postpones-relaunch-until-late-2024/"
  },
  {
    title: "How a private equity buyout backfired for Beautycounter",
    source: "Direct Selling News",
    date: "Jul 12, 2024",
    summary:
      "Post-mortem on Carlyle’s tenure details leadership swaps, comp plan disruption, and the path back to a mission-first organisation.",
    url: "https://www.directsellingnews.com/2024/07/12/how-a-private-equity-buyout-backfired-for-beautycounter/"
  },
  {
    title: "Beautycounter enters fragrance category",
    source: "Direct Selling News",
    date: "Mar 28, 2024",
    summary:
      "A five-scent clean fragrance collection launched alongside renewed lobbying to close the industry’s fragrance loophole.",
    url: "https://www.directsellingnews.com/2024/03/28/beautycounter-enters-fragrance-category/"
  }
];

const CLOUD_ROADMAP: CloudPlay[] = [
  {
    title: "Comp plan simulation lab",
    description:
      "Model legacy payouts versus new incentives so Beautycounter-style overrides never blindside your field leaders again.",
    icon: ChartLineUp
  },
  {
    title: "Advocacy operations cockpit",
    description:
      "Coordinate legislative emails, texting trees, and meeting logs with compliance-ready documentation for regulators and investors.",
    icon: MegaphoneSimple
  },
  {
    title: "Omnichannel order harmoniser",
    description:
      "Sync marketplace, retail, and direct orders to protect consultant retail margins while leveraging mainstream distribution partners.",
    icon: GlobeHemisphereWest
  },
  {
    title: "Trust score observatory",
    description:
      "Blend B Corp benchmarks, consultant sentiment, and fulfilment SLAs into one dashboard to spot risk before headlines do.",
    icon: Pulse
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Beautycounter Trust & Compensation Insights";
  const description =
    "Examine Beautycounter’s advocacy-first playbook, compensation reset, innovation agenda, and relaunch risks through a trust-scored lens.";
  const keywords = [
    "Beautycounter trust insights",
    "Beautycounter MLM analysis",
    "Beautycounter compensation review",
    "Cloud MLM Software trust advisory",
    "Beautycounter relaunch risk"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/beautycounter", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type BeautycounterPageProps = {
  params: { lang: SupportedLocale };
};

export default function BeautycounterPage({ params }: BeautycounterPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const trustScoreHref = "#trust-score";
  const timelineHref = "#timeline";
  const trustSnapshotHref = "#trust-insights";
  const trustFill = `${PRIMARY_TRUST_SCORE.score}%`;

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-primary/40 bg-gradient-to-br from-[#14213D]/15 via-white to-[#0EA5E9]/12 py-20 dark:border-primary/30 dark:from-slate-900 dark:via-slate-950 dark:to-sky-950/35">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(20,33,61,0.35),transparent_55%),radial-gradient(circle_at_78%_25%,rgba(14,165,233,0.28),transparent_60%),radial-gradient(circle_at_52%_84%,rgba(46,204,113,0.24),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.75fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-1 text-sm font-semibold text-slate-900 backdrop-blur dark:border-white/20 dark:bg-white/10 dark:text-white">
              Vision: Clean beauty activism, field stewardship, transparent growth
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Inside Beautycounter — trust, compensation resilience, and a founder-led relaunch.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/80">
                Review how Beautycounter’s advocacy engine, B Corp governance, and omnichannel pivots set expectations for consultants and investors. Analyse the compensation reset, policy wins, innovation roadmap, critiques, and current headlines before architecting your own compliance-first beauty venture.
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
            <div className="absolute -right-10 top-14 h-28 w-28 rounded-full bg-[#14213D]/20 blur-3xl" aria-hidden />
            <div className="absolute bottom-0 left-8 h-20 w-20 translate-y-1/2 rounded-full bg-[#0EA5E9]/30 blur-3xl dark:bg-[#0EA5E9]/40" aria-hidden />
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col justify-between gap-5 rounded-3xl border border-primary/20 bg-gradient-to-br from-white via-sky-50 to-white p-6 shadow-sm dark:border-primary/30 dark:from-slate-950 dark:via-primary/10 dark:to-slate-950">
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">Trust score outlook</h2>
                  <p className="text-sm text-muted-foreground">Composite view of governance strength, field sentiment, and operational readiness in the 2024 reset.</p>
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
                  Context for diligence, compensation modelling, and launch readiness conversations.
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
              Advocacy rigor and omnichannel bridges keep Beautycounter influential, even as the field rebuilds post-Carlyle.
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Pillars that sustain the mission</h2>
          <p className="text-sm text-muted-foreground">
            Translate Beautycounter’s activism, science cadence, and community playbook into your governance and enablement plans.
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

      <section id="timeline" className="relative scroll-mt-32 border-y border-border/60 bg-gradient-to-br from-primary/5 via-background to-sky-50 py-20 dark:border-border/40 dark:from-primary/10 dark:via-slate-950 dark:to-sky-950/40">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/20 via-transparent to-transparent opacity-70 dark:from-primary/25" aria-hidden />
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Timeline of resilience</h2>
            <p className="text-sm text-muted-foreground">
              Anchor your diligence on the milestones that shaped Beautycounter’s governance, and the inflection points now redefining its future.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)]">
            <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 text-sm text-muted-foreground dark:border-primary/40 dark:bg-primary/10">
              Clean-beauty activism and B Corp accountability forged a durable brand, but the Carlyle chapter proved compensation transparency is non-negotiable.
            </div>
            <div className="space-y-8">
              {STORY_ARC.map((event) => (
                <article
                  key={event.era}
                  className="relative rounded-3xl border border-border/60 bg-background/90 p-6 shadow-sm dark:border-border/40 dark:bg-slate-900/60"
                >
                  <div className="absolute -left-3 top-6 h-6 w-6 rounded-full border-2 border-primary bg-background dark:bg-slate-950" aria-hidden />
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-sm font-semibold uppercase tracking-wide text-primary">{event.era}</span>
                    <h3 className="text-lg font-semibold text-foreground">{event.headline}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{event.detail}</p>
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
            Use Beautycounter’s compensation lessons to fortify sustainable, client-led earnings in your own model.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {COMPENSATION_ELEMENTS.map((element) => {
            const Icon = element.icon;
            return (
              <article
                key={element.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm dark:border-border/40 dark:bg-slate-900/70"
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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Success stories</h2>
              <p className="text-sm text-muted-foreground">
                Mission-first wins that keep Beautycounter relevant to regulators, retailers, and clean-beauty advocates.
              </p>
            </div>
            <div className="space-y-6">
              {SUCCESS_STORIES.map((story) => {
                const Icon = story.icon;
                return (
                  <article
                    key={story.title}
                    className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm dark:border-border/40 dark:bg-slate-900/70"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="text-lg font-semibold text-foreground">{story.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{story.description}</p>
                    <p className="text-sm font-semibold text-primary">{story.metric}</p>
                    <p className="text-xs uppercase tracking-wide text-primary/80 dark:text-primary/70">{story.proof}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Innovation signals</h2>
              <p className="text-sm text-muted-foreground">
                How Beautycounter pairs product development with compliance and science to stay ahead of regulators.
              </p>
            </div>
            <div className="space-y-6">
              {INNOVATION_SIGNALS.map((innovation) => {
                const Icon = innovation.icon;
                return (
                  <article
                    key={innovation.title}
                    className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm dark:border-border/40 dark:bg-slate-900/70"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h3 className="text-lg font-semibold text-foreground">{innovation.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{innovation.description}</p>
                    <p className="text-xs uppercase tracking-wide text-primary/80 dark:text-primary/70">{innovation.proof}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="trust-insights" className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Trust & reputation signals</h2>
          <p className="text-sm text-muted-foreground">
            Validate how third-party standards, coalitions, and distribution partners underpin Beautycounter’s credibility.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {REPUTATION_SIGNALS.map((signal) => {
            const Icon = signal.icon;
            return (
              <article
                key={signal.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm dark:border-border/40 dark:bg-slate-900/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{signal.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{signal.detail}</p>
                <p className="text-xs uppercase tracking-wide text-primary/80 dark:text-primary/70">{signal.evidence}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="trust-score" className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Trust score snapshot</h2>
          <p className="text-sm text-muted-foreground">
            Advisory scoring combines governance, sentiment, and operational readiness to monitor Beautycounter’s relaunch arc.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {TRUST_SCORES.map((score) => (
            <article
              key={score.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 text-sm shadow-sm dark:border-border/40 dark:bg-slate-900/70"
            >
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">{score.title}</p>
                <p className="text-3xl font-semibold text-foreground">{score.score}</p>
              </div>
              <p className="text-muted-foreground">{score.insight}</p>
              <p className="text-xs uppercase tracking-wide text-primary/80 dark:text-primary/70">{score.methodology}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Critiques & lessons</h2>
          <p className="text-sm text-muted-foreground">
            Capture the cautionary tales before you blueprint your own compensation, capital, and relaunch strategies.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CRITICAL_WATCHPOINTS.map((critique) => {
            const Icon = critique.icon;
            return (
              <article
                key={critique.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm dark:border-border/40 dark:bg-slate-900/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{critique.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{critique.description}</p>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-primary">Mitigation</p>
                  <p className="text-muted-foreground">{critique.mitigation}</p>
                </div>
                <p className="text-xs uppercase tracking-wide text-primary/80 dark:text-primary/70">{critique.source}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Recent headlines</h2>
          <p className="text-sm text-muted-foreground">
            Track the developments shaping Beautycounter’s relaunch, policy agenda, and compensation reset.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {NEWS_HEADLINES.map((item) => (
            <article
              key={item.url}
              className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm transition hover:border-primary dark:border-border/40 dark:bg-slate-900/70"
            >
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">{item.source} • {item.date}</p>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.summary}</p>
              </div>
              <Link
                href={item.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-sm font-semibold text-primary hover:underline"
              >
                Read report
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How Cloud MLM Software helps</h2>
          <p className="text-sm text-muted-foreground">
            Deploy advisory accelerators that embed Beautycounter’s hard-won lessons into your launch or relaunch roadmap.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {CLOUD_ROADMAP.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm dark:border-border/40 dark:bg-slate-900/70"
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
            <Link href={pricingHref}>
              View platform packages
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={contactHref}>
              Schedule a trust consult
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
