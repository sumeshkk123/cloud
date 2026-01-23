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
  Gavel,
  GraduationCap,
  HandHeart,
  Medal,
  ShieldCheck,
  Sparkles,
  TrendingUp
} from "lucide-react";
import {
  ChartLineUp,
  GlobeHemisphereEast,
  Handshake,
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
  score: 62,
  label: "Overall trust score",
  summary: "Mixes compliance governance refreshes, legacy legal lessons, and current financial health signals."
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
    value: "¥12.1B",
    detail: "Charle’s English corporate profile lists ¥12,083M in non-consolidated sales for FY ended Mar 31, 2024."
  },
  {
    label: "Founded",
    value: "1975",
    detail: "Established November 19, 1975 in Kobe, Hyogo to champion women’s wellness (Charle corporate outline)."
  },
  {
    label: "Field network",
    value: "161k sellers",
    detail: "FT49 data cites 1,291 agencies, 161,646 sales persons, and 2.91M members (Charle business overview)."
  },
  {
    label: "Employees",
    value: "204 staff",
    detail: "Non-consolidated headcount for FY ended Mar 31, 2024 per the Charle corporate profile."
  }
];

const VISION_PILLARS: VisionPillar[] = [
  {
    title: "Mutual prosperity promise",
    description:
      "The founding philosophy that “everyone must prosper” still guides Charle’s channel design and stakeholder expectations.",
    proof: "Charle English — Basic philosophy committed to shared prosperity.",
    icon: HandHeart
  },
  {
    title: "Comfort-engineered craft",
    description:
      "Foundation garments rely on proprietary body data, fresh patterns, and tight quality control so every launch feels bespoke.",
    proof: "Charle English — Foundation series tailored through custom patterning.",
    icon: Sparkles
  },
  {
    title: "Try-before-you-decide relationships",
    description:
      "Visiting sales associates prioritise fittings and feedback before purchase, reinforcing long-term trust loops.",
    proof: "Charle door-to-door sales overview emphasises hands-on trials.",
    icon: Handshake
  },
  {
    title: "Women-forward ecosystem",
    description:
      "Charle links its business to gender equity targets, flexible work models, and Mimosa certification for women’s advancement.",
    proof: "Charle sustainability — Mimosa company recognition and leadership goals.",
    icon: UsersThree
  }
];

const STORY_ARC: TimelineEvent[] = [
  {
    era: "1975",
    headline: "Charle launches in Kobe",
    detail:
      "Katsuya and Yoriko Hayashi found Charle to deliver innerwear that lets women feel prosperous inside and out."
  },
  {
    era: "1990–2013",
    headline: "Capital market milestones",
    detail:
      "Over-the-counter registration in 1990 led to Osaka SE listing in 1998 and Tokyo SE Second Section in 2013, formalising disclosure discipline."
  },
  {
    era: "2008–2015",
    headline: "MBO fallout shapes governance",
    detail:
      "A failed founder-led MBO triggered shareholder suits, court rulings, and stronger independence expectations (Kabunushinokenri MBO case)."
  },
  {
    era: "2024",
    headline: "Future2025 rebrand",
    detail:
      "Charle rearticulates six value pillars, modernises its logo, and launches the Itsumotto media hub to stay relevant to modern lifestyles."
  },
  {
    era: "2025",
    headline: "Onyo acquisition & forecast reset",
    detail:
      "Charle acquires sportswear maker Onyo, books ¥111M in negative goodwill, and trims FY2026 guidance while integrating new product synergies."
  }
];

const COMPENSATION_ELEMENTS: CompensationElement[] = [
  {
    title: "Mate starter margin",
    description:
      "New members become Mates after their first purchase, unlocking a 20% discount to retail the catalog directly to customers.",
    highlight: "Charle business guide — mates transition to Challenge Mate to monetise person-to-person sales.",
    icon: Handshake
  },
  {
    title: "Agency step-ups",
    description:
      "Challenge Mates can qualify as special stores or agencies, gaining access to wholesale inventory pipelines and wider support.",
    highlight: "Charle business guide outlines step-by-step promotion through special store and agency tiers.",
    icon: ChartLineUp
  },
  {
    title: "Performance & cumulative bonuses",
    description:
      "Monthly, annual, cumulative, and downline production bonuses reward consistent sales and mentorship impact.",
    highlight: "Charle business guide — bonus pool spans personal volume and trained agency output.",
    icon: Medal
  },
  {
    title: "Training-backed growth",
    description:
      "Structured workshops, compliance refreshers, and hotline access help new sellers scale responsibly and stay within Japan’s Act on Specified Commercial Transactions.",
    highlight: "Charle business & compliance pages describe tiered education and hotline safeguards.",
    icon: GraduationCap
  }
];

const SUCCESS_STORIES: SuccessStory[] = [
  {
    title: "Loved by 3M customers",
    description:
      "Charle’s 49-year journey now supports roughly 3 million domestic consumers with wellbeing and beauty staples.",
    metric: "3M+ Japanese customers",
    proof: "Charle English — Message cites 3M domestic fans.",
    icon: BadgeCheck
  },
  {
    title: "Mimosa workplace recognition",
    description:
      "Hyogo and Kobe authorities certified Charle as a Mimosa company for advancing women into leadership with flexible work models.",
    metric: "Target: ≥20% women managers",
    proof: "Charle sustainability — Mimosa certification announcement.",
    icon: HandHeart
  },
  {
    title: "Future2025 rebrand momentum",
    description:
      "A six-value narrative, refreshed logo, and Itsumotto media community reintroduce Charle to a new generation.",
    metric: "Six reframed value pillars",
    proof: "Charle Future2025 storytelling hub.",
    icon: Sparkles
  }
];

const INNOVATION_SIGNALS: Innovation[] = [
  {
    title: "Future2025 brand overhaul",
    description:
      "Charle modernised its logo, storytelling, and digital channels to align with contemporary wellness expectations.",
    proof: "Charle Future2025 — brand refresh narrative.",
    icon: Sparkles
  },
  {
    title: "Data-driven patterning",
    description:
      "Each foundation garment iteration uses new pattern development anchored on proprietary body data and wearer feedback.",
    proof: "Charle English — foundation series customisation detail.",
    icon: TrendingUp
  },
  {
    title: "ns nutrition expansion",
    description:
      "Since 2014 Charle’s ns line distills nutrient-dense foods for daily health, complementing innerwear and cosmetics.",
    proof: "Charle English — ns brand introduction.",
    icon: Pulse
  }
];

const REPUTATION_SIGNALS: ReputationSignal[] = [
  {
    title: "Compliance committee & hotline",
    detail:
      "An independent compliance committee, whistleblower hotline, and ongoing education reinforce ethical selling norms.",
    evidence: "Charle compliance page — committee charter and hotline overview.",
    icon: ShieldCheck
  },
  {
    title: "Governance refresh",
    detail:
      "The 2025 governance enhancement committee adds new independent directors to monitor transparency and fairness.",
    evidence: "Charle IR — June 18, 2025 governance notice.",
    icon: Gavel
  },
  {
    title: "Customer-first verification",
    detail:
      "Charle keeps hands-on product trials central so shoppers validate fit and function before purchasing.",
    evidence: "Charle door-to-door sales overview.",
    icon: CheckCircle2
  }
];

const CRITICAL_WATCHPOINTS: Critique[] = [
  {
    title: "MBO litigation legacy",
    description:
      "Founder-led MBO attempts in 2008 drew lawsuits over conflicts of interest and valuation tactics, highlighting governance risk.",
    mitigation: "Maintain independent valuation, disclose conflicts early, and empower outside directors to veto management buyouts.",
    source: "Kabunushinokenri — Charle MBO shareholder lawsuit overview.",
    icon: AlertTriangle
  },
  {
    title: "Subsidiary loan losses",
    description:
      "Shareholders sued over ¥15.2B in loans to NLC and Litec that went unrecovered, underscoring diligence gaps in diversification plays.",
    mitigation: "Tighten scenario analysis for new subsidiaries, track capital efficiency, and cap exposure without board sign-off.",
    source: "Kabunushinokenri — Charle subsidiary loan litigation summary.",
    icon: Factory
  },
  {
    title: "Margin pressure & inventory",
    description:
      "Q1 FY2026 results show ¥2.22B operating loss, rising inventories, and reliance on negative goodwill to support net results.",
    mitigation: "Map integration milestones for Onyo, monitor inventory turns, and align cost controls with refreshed demand forecasts.",
    source: "Charle 2026 Q1 consolidated financial results (August 8, 2025).",
    icon: TrendingUp
  }
];

const TRUST_SCORES: TrustScore[] = [
  {
    title: "Governance oversight",
    score: "64/100",
    insight:
      "Charle’s compliance committee, whistleblower hotline, and newly refreshed governance panel indicate maturing control systems.",
    methodology: "Weighted across committee independence, hotline coverage, and governance disclosures."
  },
  {
    title: "Financial resilience",
    score: "58/100",
    insight:
      "Revenue recovers post-pandemic, yet operating losses and integration risks require disciplined execution despite negative goodwill gains.",
    methodology: "Blends latest earnings, inventory movement, and acquisition integration signals."
  },
  {
    title: "Field opportunity clarity",
    score: "62/100",
    insight:
      "Clear progression from Mate to agency, structured bonuses, and training lend transparency, though historical litigation tempers optimism.",
    methodology: "Assesses compensation disclosures, training scaffolding, and member economic protections."
  }
];

const NEWS_HEADLINES: NewsItem[] = [
  {
    title: "Charle to acquire sportswear maker Onyo",
    source: "Charle IR",
    date: "April 25, 2025",
    summary:
      "Board approves acquiring Onyo Co., aiming to blend sportswear R&D with Charle’s wellness channel while keeping terms under NDA.",
    url: "https://www.charle.co.jp/news/images/20250425_01_kogaisya.pdf"
  },
  {
    title: "Forecast revised after negative goodwill gain",
    source: "Charle IR",
    date: "August 8, 2025",
    summary:
      "Integration of Onyo generates a ¥111M negative goodwill gain, but FY2026 revenue, operating, and ordinary income forecasts are trimmed.",
    url: "https://www.charle.co.jp/news/images/20250808_IR2025_tokubetsurieki.pdf"
  },
  {
    title: "Governance enhancement committee refreshed",
    source: "Charle IR",
    date: "June 18, 2025",
    summary:
      "Charle reappoints and adds independent directors to the governance enhancement committee to reinforce transparency.",
    url: "https://www.charle.co.jp/news/images/20250618_01_IR_governance.pdf"
  }
];

const CLOUD_ROADMAP: CloudPlay[] = [
  {
    title: "Regulatory readiness workspace",
    description:
      "Model Japan’s Specified Commercial Transactions Act and global direct-selling rules with auditable approval flows and alerts.",
    icon: Gavel
  },
  {
    title: "Comp plan digital twin",
    description:
      "Prototype Mate-to-agency progressions, margin scenarios, and breakage controls before rolling updates to the field.",
    icon: ChartLineUp
  },
  {
    title: "Field enablement & impact analytics",
    description:
      "Deliver multilingual playbooks, sentiment tracking, and ESG dashboards so Charle-style community programmes scale globally.",
    icon: GlobeHemisphereEast
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Charle Corporation Trust & Compensation Insights";
  const description =
    "Review Charle Corporation’s heritage, compensation levers, innovation signals, critiques, and trust score outlook to inform your own compliant expansion.";
  const keywords = [
    "Charle Corporation trust insights",
    "Charle MLM analysis",
    "Charle compensation plan",
    "Cloud MLM Software trust advisory",
    "Charle governance review"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/charle-corporation", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type CharlePageProps = {
  params: { lang: SupportedLocale };
};

export default function CharlePage({ params }: CharlePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const trustScoreHref = "#trust-score";
  const timelineHref = "#timeline";
  const trustSnapshotHref = "#trust-insights";
  const trustFill = `${PRIMARY_TRUST_SCORE.score}%`;

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-primary/40 bg-gradient-to-br from-[#5A1A5E]/15 via-white to-[#F27E96]/12 py-20 dark:border-primary/30 dark:from-slate-900 dark:via-slate-950 dark:to-rose-950/35">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(90,26,94,0.35),transparent_55%),radial-gradient(circle_at_82%_28%,rgba(242,126,150,0.28),transparent_60%),radial-gradient(circle_at_52%_84%,rgba(26,135,161,0.24),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.75fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-1 text-sm font-semibold text-slate-900 backdrop-blur dark:border-white/20 dark:bg-white/10 dark:text-white">
              Philosophy: Everyone must prosper
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Inside Charle Corporation — Trust & Compensation Insights.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/80">
                Charle Corporation isn’t your typical wellness seller; it pairs custom-crafted innerwear, cosmetics, and nutrition with a community-first business built in Kobe. Explore company facts, resilience milestones, the Mate-to-agency payout journey, success signals, critiques, and current governance moves so you can adapt the lessons to your own launch.
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
            <div className="absolute -right-10 top-14 h-28 w-28 rounded-full bg-[#5A1A5E]/20 blur-3xl" aria-hidden />
            <div className="space-y-6 rounded-3xl border border-primary/30 bg-gradient-to-br from-[#5A1A5E]/15 via-background to-[#F27E96]/10 p-6 dark:border-primary/40 dark:from-slate-900/80 dark:via-slate-950 dark:to-rose-900/40">
              <div className="flex items-center gap-5">
                <div className="relative grid h-24 w-24 place-items-center rounded-full border-8 border-primary/20 bg-white/80 text-3xl font-semibold text-primary shadow-inner dark:border-primary/30 dark:bg-slate-950/60">
                  <span>{PRIMARY_TRUST_SCORE.score}</span>
                  <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" role="presentation">
                    <circle className="stroke-primary/20" cx="50" cy="50" r="45" fill="transparent" strokeWidth="8" />
                    <circle
                      className="stroke-primary"
                      cx="50"
                      cy="50"
                      r="45"
                      fill="transparent"
                      strokeWidth="8"
                      strokeDasharray="282.6"
                      strokeDashoffset={282.6 - (PRIMARY_TRUST_SCORE.score / 100) * 282.6}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p>{PRIMARY_TRUST_SCORE.label}</p>
                  <p>{PRIMARY_TRUST_SCORE.summary}</p>
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-foreground">Strategic snapshot</h2>
                <p className="text-sm text-muted-foreground">
                  Signals that frame due diligence, compliance modelling, and commercial runway for Charle-inspired launches.
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
              Heritage-rich craftsmanship, governance lessons, and a women-first community make Charle a nuanced blueprint for modern direct selling.
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Brand pillars in practice</h2>
          <p className="text-sm text-muted-foreground">
            Translate Charle’s prosperity mindset into practical levers for governance, enablement, and customer experience.
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

      <section id="timeline" className="relative scroll-mt-32 border-y border-border/60 bg-gradient-to-br from-primary/5 via-background to-rose-50 py-20 dark:border-border/40 dark:from-primary/10 dark:via-slate-950 dark:to-rose-950/40">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/20 via-transparent to-transparent opacity-70 dark:from-primary/25" aria-hidden />
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Timeline of resilience</h2>
            <p className="text-sm text-muted-foreground">
              Anchor diligence on the milestones that shaped Charle’s compliance rhythm and strategic resets.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)]">
            <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 text-sm text-muted-foreground dark:border-primary/40 dark:bg-primary/10">
              From Kobe roots through public-market scrutiny and modern rebranding, Charle’s journey is a study in course-correcting governance and community trust.
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
            Map the Mate-to-agency progression, bonus mechanics, and enablement that define Charle’s earnings design.
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
            Spotlight the wins that sustain Charle’s brand reputation and community grid.
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
                <p className="text-xs uppercase tracking-wide text-primary/80 dark:text-primary/70">{story.metric}</p>
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
            Trace the product, brand, and health innovation cues informing Charle’s next chapter.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {INNOVATION_SIGNALS.map((innovation) => {
            const Icon = innovation.icon;
            return (
              <article
                key={innovation.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{innovation.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{innovation.description}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">Proof: {innovation.proof}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4" id="trust-insights">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Trust & reputation signals</h2>
          <p className="text-sm text-muted-foreground">
            Validate the brand through governance updates, compliance programmes, and customer protections.
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
            Translate diligence findings into advisory scores that guide stakeholder discussions.
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
          Scores are advisory signals to support trust and risk workshops; pair them with live legal counsel guidance and up-to-date financial analysis.
        </p>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Challenges, critics, and lessons</h2>
          <p className="text-sm text-muted-foreground">
            Assess legacy risks so you can design guardrails for your own programme.
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
            Keep leadership, compliance, and product teams aligned with the latest disclosures.
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

      <section className="relative overflow-hidden border-y border-primary/40 bg-gradient-to-br from-primary/10 via-background to-rose-50 py-20 dark:border-primary/30 dark:from-primary/15 dark:via-slate-950 dark:to-rose-950/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(90,26,94,0.25),transparent_55%),radial-gradient(circle_at_78%_30%,rgba(242,126,150,0.28),transparent_60%)]" aria-hidden />
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              How Cloud MLM Software helps
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Bring Charle-grade discipline to your own expansion blueprint.
            </h2>
            <p className="text-sm text-muted-foreground">
              Launch with regulatory readiness, compensation modelling, field enablement, and ESG analytics tuned for women-forward direct selling.
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
