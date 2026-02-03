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
  Handshake as HandshakeIcon,
  HeartHandshake,
  ShieldCheck,
  Lightbulb,
  Sparkles,
  Target,
  Trophy
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
  score: 72,
  label: "Overall trust score",
  summary: "Aggregated score combining compliance posture, consumer sentiment, and opportunity realism."
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
    value: "$324.9M",
    detail: "Reported global wellness revenue in DSN’s 2025 Global 100."
  },
  {
    label: "Founded",
    value: "1998",
    detail: "Launch of Transfer Factor® and the Together, Building People vision."
  },
  {
    label: "Employees",
    value: "950+",
    detail: "Corporate staff supporting distributors across 50+ markets."
  },
  {
    label: "Manufacturing",
    value: "GMP-certified",
    detail: "4Life Manufacturing in Utah maintains FDA registration and in-house labs."
  }
];

const VISION_PILLARS: VisionPillar[] = [
  {
    title: "Together, Building People",
    description:
      "4Life’s mantra pairs entrepreneurial mentorship with humanitarian service to position consultants as community builders, not just sellers.",
    proof: "Vision statement repeated across corporate literature and leadership events.",
    icon: HandshakeIcon
  },
  {
    title: "Science-led differentiation",
    description:
      "Transfer Factor® research, a staffed Health Sciences Advisory Board, and peer-reviewed studies drive product credibility.",
    proof: "Corporate R&D releases and health science briefings.",
    icon: FlaskConical
  },
  {
    title: "Opportunity with safeguards",
    description:
      "Life Rewards Plan™ balances depth bonuses with customer incentives to align earnings with real consumption.",
    proof: "Publicly available Life Rewards Plan documentation and compliance webinars.",
    icon: ShieldCheck
  },
  {
    title: "Global, multilingual reach",
    description:
      "Operations in 50+ countries deliver localized education, halal certifications, and region-specific marketing assets.",
    proof: "DSN Global 100 company profile and market launch announcements.",
    icon: Globe2
  }
];

const STORY_ARC: TimelineEvent[] = [
  {
    era: "1998",
    headline: "Company launch in Sandy, Utah",
    detail:
      "Founders David and Bianca Lisonbee introduce 4Life Research with a mission to democratize immune system science via Transfer Factor®."
  },
  {
    era: "2004-2010",
    headline: "Foundation 4Life and global expansion",
    detail:
      "Distributor-funded humanitarian initiatives and new markets across Latin America and Asia establish the brand’s service narrative."
  },
  {
    era: "2014-2018",
    headline: "Manufacturing and leadership investments",
    detail:
      "4Life Manufacturing brings GMP-certified production in-house while executive hires oversee Southeast Asia compliance and growth."
  },
  {
    era: "2020-2023",
    headline: "Digital field enablement",
    detail:
      "Mobile-first dashboards, loyalty programs, and global e-commerce upgrades support hybrid selling models in 50+ countries."
  },
  {
    era: "2024-2025",
    headline: "Innovation accolades",
    detail:
      "Industry outlets spotlight plant-based transfer factor discoveries and protein innovation awards, reinforcing the science-first position."
  }
];

const COMPENSATION_ELEMENTS: CompensationElement[] = [
  {
    title: "Life Rewards Plan™ core",
    description:
      "Hybrid unilevel structure with dynamic compression rewards depth while preserving breakage controls for corporate predictability.",
    highlight: "Ranks from Builder to Presidential Diamond maintain balanced leg qualifications and monthly autoship volume.",
    icon: ChartLineUp
  },
  {
    title: "Rapid Rewards & loyalty credits",
    description:
      "Fast-start bonuses and loyalty store credits convert new customer volume into tangible rewards within weeks of enrolment.",
    highlight: "25% Rapid Rewards on first distributor orders feed early cash flow for field leaders.",
    icon: ArrowBendUpRight
  },
  {
    title: "Builder & Elite bonuses",
    description:
      "Structured pools recognise leaders who mentor three-leg growth and maintain sustainable customer ratios across markets.",
    highlight: "Builder Bonus encourages balanced frontline development instead of single-leg over-reliance.",
    icon: Target
  },
  {
    title: "Worldwide Power Pool",
    description:
      "Quarterly revenue share invites qualified ranks to participate in global growth, reinforcing cross-border collaboration and compliance.",
    highlight: "Pool payouts are tied to documented customer volume and rank maintenance in every participating region.",
    icon: GlobeHemisphereWest
  }
];

const SUCCESS_STORIES: SuccessStory[] = [
  {
    title: "Foundation 4Life® & Fortify™",
    description:
      "Distributor donations fuel nutrition, education, and disaster relief programmes in 20+ countries, reinforcing the service narrative.",
    metric: "Millions of fortified meals delivered annually",
    proof: "Foundation 4Life impact reports and press releases",
    icon: HeartHandshake
  },
  {
    title: "4Life Manufacturing achievements",
    description:
      "FDA-registered, GMP-certified facilities in Utah safeguard quality, shorten lead times, and reassured the field during post-pandemic supply disruptions.",
    metric: "GMP certification & in-house quality labs",
    proof: "4Life Manufacturing corporate statements",
    icon: Factory
  },
  {
    title: "Industry recognition",
    description:
      "4Life regularly features on the Direct Selling News Global 100 and secured the 2025 \"Most Innovative Company\" honour for ongoing R&D investment.",
    metric: "DSN awards & $324.9M reported revenue",
    proof: "Direct Selling News articles, June 2025",
    icon: Trophy
  }
];

const INNOVATION_SIGNALS: Innovation[] = [
  {
    title: "Plant-based transfer factor discovery",
    description:
      "Regional media highlighted new research extracting transfer factors from plant sources, expanding future product applications.",
    proof: "KUTV coverage, June 2025",
    icon: Sparkles
  },
  {
    title: "Protein innovation award",
    description:
      "Pro-TF® and performance formulas earned recognition for bridging sports nutrition with immune support.",
    proof: "Direct Selling News, December 2024",
    icon: GraduationCap
  },
  {
    title: "Leadership bench strength",
    description:
      "Executive appointments across operations and Southeast Asia signal long-term investment in supply chain and market compliance.",
    proof: "Direct Selling News, July 2018",
    icon: Lightbulb
  }
];

const REPUTATION_SIGNALS: ReputationSignal[] = [
  {
    title: "DSA member in good standing",
    detail:
      "Active membership in the U.S. Direct Selling Association adds credibility and ongoing ethics oversight.",
    evidence: "DSA member directory listing",
    icon: BadgeCheck
  },
  {
    title: "BBB accreditation",
    detail:
      "4Life maintains Better Business Bureau accreditation with top-tier ratings and published responsiveness metrics.",
    evidence: "BBB.org company profile",
    icon: ShieldCheck
  },
  {
    title: "Field sentiment",
    detail:
      "Distributor forums frequently cite leadership accessibility, global events, and loyalty perks as retention catalysts.",
    evidence: "Field testimonials & community webinars",
    icon: Handshake
  }
];

const CRITICAL_WATCHPOINTS: Critique[] = [
  {
    title: "Regulatory scrutiny on supplement claims",
    description:
      "Utah media and consumer watchdogs—such as The Salt Lake Tribune’s \"State of supplements\" feature—regularly question health claims made by wellness MLMs.",
    mitigation: "Maintain rigorous product training, approved talking points, and automated claim monitoring for distributors.",
    source: "The Salt Lake Tribune, industry roundup",
    icon: Gavel
  },
  {
    title: "Distributor earnings sustainability",
    description:
      "Independent reviews highlight churn when teams rely on recruitment over customer retention or mishandle autoship expectations.",
    mitigation: "Use analytics to monitor customer-to-distributor ratios, loyalty redemption, and cohort health.",
    source: "Community reviews & compensation analysis blogs",
    icon: AlertTriangle
  },
  {
    title: "Market entry complexity",
    description:
      "Licensing requirements in regions like Southeast Asia can delay launches or require structural adjustments.",
    mitigation: "Stage market readiness assessments and engage local compliance counsel before replicating the Life Rewards Plan™ abroad.",
    source: "Direct Selling News executive appointment coverage",
    icon: ShieldCheck
  }
];

const TRUST_SCORES: TrustScore[] = [
  {
    title: "Compliance posture",
    score: "82/100",
    insight:
      "DSA membership, BBB accreditation, and absence of recent FTC actions point to a mature compliance framework, though continued monitoring of product claims is essential.",
    methodology: "Weighted on industry association status, documented enforcement actions, and transparency of compensation materials."
  },
  {
    title: "Consumer sentiment stability",
    score: "64/100",
    insight:
      "Positive testimonials highlight mentorship and loyalty rewards, but independent reviews note pricing concerns and the need for consistent customer onboarding.",
    methodology: "Blend of BBB feedback trends, community forums, and third-party review volatility."
  },
  {
    title: "Opportunity realism",
    score: "70/100",
    insight:
      "Life Rewards Plan™ ties rank advancement to verified customer volume, yet like all MLMs, long-term earnings depend on disciplined field execution.",
    methodology: "Assessed via compensation plan structure, customer-to-distributor ratio guidance, and disclosed income disclaimers."
  }
];

const NEWS_HEADLINES: NewsItem[] = [
  {
    title: "4Life named Most Innovative Company of the Year",
    source: "Direct Selling News",
    date: "June 2025",
    summary:
      "Industry analysts credited continuous product development and digital field tools for keeping 4Life on the global innovation radar.",
    url: "https://news.google.com/articles/CBMimAFBVV95cUxPQ2Y3ckJMYVc3OUlnNEJiWW8yMGNncWxxS0lWcWduSTB4WTZ1NUZoY0VxN0dpRGZTeHg3VFRoYTBpdS12SElmSmpBWVRzeGN5STNISHREN2hzYl9FOVo3UUZQMW9qYjVoOW1BMWZUSXdXeXJtWGpJQVN1WGdVSGJlRUxRdUhvMk1ST3U1c0l2enJGOEVUZlB4SQ"
  },
  {
    title: "Plant-based transfer factor discovery unveiled",
    source: "KUTV",
    date: "June 2025",
    summary:
      "Broadcast coverage showcased how 4Life scientists are widening immune support science beyond animal-derived ingredients.",
    url: "https://news.google.com/articles/CBMiqgFBVV95cUxQUTRaai1oUHRnUVVadEhVNTV5U1M1Vm1kUzVJMV9NZ1pXX01vQjM4WW1XX2hVM0JjcmJoYXliTXBQd0lOLTdKQ2czbm1zRkdrTVdkUkd6ZWpscE94SXdiSDVEUlBrb0piWmJvTjZSNjMteWtqeVhkeXlVYkhzVnBxVFFuaTF0Q0tqQzBVMnBUVkdkbGgwS0QxQ01zR2JOekkyOUtwUEJ3Qm5jdw"
  },
  {
    title: "4Life wins Protein Innovation Award",
    source: "Direct Selling News",
    date: "December 2024",
    summary:
      "Recognition of Pro-TF® evolution and product diversification aimed at performance-driven consumers.",
    url: "https://news.google.com/articles/CBMiiAFBVV95cUxQa19pSDNQa0FZbEw0YjhlcjNPLXNFMjVWRy11UlBIel9TY01hNnVORFVVV3Z5Q19IVy14cnE3YUJKQzNFNmRsdjJyeUJrTERmWTkzZUlHV3NjS2tkampVVlVnNmRCRXFZVmJMY2RkaFk0T1ZNN0VuN1V4NXdsZ2F4N0tsdkVDbG5h"
  }
];

const CLOUD_ROADMAP: CloudPlay[] = [
  {
    title: "Compensation digital twin",
    description:
      "Model Life Rewards Plan tiers, compression, and cross-border tax rules with auditable simulations before launch.",
    icon: ChartLineUp
  },
  {
    title: "Evidence-backed storytelling",
    description:
      "Centralise research abstracts, disclaimers, and translator-ready collateral so every consultant shares compliant science narratives.",
    icon: Sparkles
  },
  {
    title: "Impact governance",
    description:
      "Track philanthropic projects, loyalty redemption, and sentiment in a single dashboard to satisfy regulators and media alike.",
    icon: ShieldCheck
  },
  {
    title: "AI-assisted enablement",
    description:
      "Blend guided onboarding, predictive coaching, and localisation to replicate the best of 4Life’s field operations in new ventures.",
    icon: UsersThree
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "4Life Research MLM Software";
  const description =
    "Dive into 4Life Research’s vision, Life Rewards Plan, successes, critics, and industry news—then discover how Cloud MLM Software powers similar wellness ventures.";
  const keywords = [
    "4Life Research trust score",
    "4Life MLM review",
    "4Life Life Rewards Plan analysis",
    "Cloud MLM Software trust insights",
    "4Life Research compliance and trust"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/4life-research", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type FourLifePageProps = {
  params: { lang: SupportedLocale };
};

export default function FourLifePage({ params }: FourLifePageProps) {
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
              Vision: Together, Building People
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                4Life Research: immune system innovation, mission-first culture, and disciplined compensation design.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/80">
                Explore how 4Life blends science, philanthropy, and field enablement. Review the company snapshot, history, Life Rewards Plan, success stories, and the critics they manage—then take away a blueprint for your own wellness-focused MLM.
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
              Distributor-funded philanthropy and GMP-certified production underpin the brand’s promise across 50+ markets.
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Vision translated into playbooks</h2>
          <p className="text-sm text-muted-foreground">
            Study how 4Life’s mission, science, and governance guide every market, compensation tweak, and brand story.
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
              Anchor your market entry plans on the milestones that shaped 4Life’s global credibility.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)]">
            <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 text-sm text-muted-foreground dark:border-primary/40 dark:bg-primary/10">
              Transfer Factor® discovery, philanthropic expansion, and digital transformation created a repeatable blueprint for scaling immune-focused MLM brands across continents.
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Inside the Life Rewards Plan™</h2>
          <p className="text-sm text-muted-foreground">
            Deconstruct compensation mechanics to evaluate sustainability, compliance, and duplication potential.
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
                  <CheckCircle2 className="h-4 w-4" aria-hidden />
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
              Highlight the outcomes stakeholders expect when science, philanthropy, and operations stay in sync.
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
            Track the R&D and leadership moves that keep 4Life in the wellness spotlight.
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
            Understand where 4Life faced pressure so you can design proactive guardrails for your own launch.
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
              Replicate 4Life’s disciplined execution without inheriting its complexity.
            </h2>
            <p className="text-sm text-muted-foreground">
              Deploy an end-to-end platform that mirrors 4Life’s best practices—science-backed content, responsible payouts, and philanthropy tracking—while staying adaptable to your brand.
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
