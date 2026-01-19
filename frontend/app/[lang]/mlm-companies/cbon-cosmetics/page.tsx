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
  Factory,
  FlaskConical,
  Gauge,
  Gavel,
  Globe2,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Store,
  Users
} from "lucide-react";
import {
  ArrowBendUpRight,
  ChartLineUp,
  GlobeHemisphereEast,
  Handshake,
  Lighthouse,
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
  score: 63,
  label: "Overall trust score",
  summary:
    "Weighted on TSE governance disclosures, salon programme transparency, and sentiment around research-led product storytelling."
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
    value: "$110M (2018)",
    detail: "Direct Selling News — 2019 Global 100 lists C'BON at rank 81 with $110M in 2018 sales."
  },
  {
    label: "Founded",
    value: "1966",
    detail: "Company outline notes incorporation on 24 January 1966 in Minato-ku, Tokyo."
  },
  {
    label: "Employees",
    value: "716",
    detail: "Company outline — consolidated headcount excluding part-time staff as of 31 March 2025."
  },
  {
    label: "Direct salons",
    value: "94",
    detail: "Company outline — 94 Facialist salons plus concept shop footprint reported for FY2025."
  }
];

const VISION_PILLARS: VisionPillar[] = [
  {
    title: "Orchestrated beauty",
    description:
      "Leadership reframed the mission as “Orchestrate the Beauty,” expecting every team to perform like an ensemble delivering one experience.",
    proof: "C'BON Top Message (Japanese) — CEO Sakiyama outlines the new vision “Orchestrate the Beauty” and Above & Beyond ambition.",
    icon: Lighthouse
  },
  {
    title: "Accountability to skin",
    description:
      "The president reiterates the founder’s rule: stay responsible for customer skin ‘to the very end,’ blending product creation with after-service guardianship.",
    proof: "C'BON Top Message — corporate philosophy commits to being accountable for each customer outcome.",
    icon: Handshake
  },
  {
    title: "Home + salon cadence",
    description:
      "C'BON’s proprietary Home Care + Salon Care program keeps consultants close to clients through data-led skin checks, facials, and targeted retail kits.",
    proof: "Business overview — cosmetics business integrates R&D, direct salons, e-commerce, agencies, and OEM production.",
    icon: UsersThree
  },
  {
    title: "Future-facing craftsmanship",
    description:
      "The Above & Beyond rallying cry demands constant innovation, from hormone-linked dermal science to curated product drops that refresh the brand story.",
    proof: "Top Message & July 2025 Japan Cosmetic Science presentation on oxytocin/cortisol and dermal hyaluronic acid.",
    icon: GlobeHemisphereEast
  }
];

const STORY_ARC: TimelineEvent[] = [
  {
    era: "1966",
    headline: "Seeding a salon-backed cosmetics house",
    detail:
      "C'BON Cosmetics Co., Ltd. is established in Minato-ku, Tokyo, setting the foundation for a vertically integrated beauty model."
  },
  {
    era: "1968",
    headline: "Manufacturing base in Tochigi",
    detail:
      "A dedicated production centre opens in Kamimikawa, Tochigi, securing in-house control over skincare formulation and logistics."
  },
  {
    era: "1974",
    headline: "Environmental compliance as a differentiator",
    detail:
      "The Tochigi plant installs wastewater purification systems under prefectural guidance, becoming a pollution-prevention model factory."
  },
  {
    era: "1994",
    headline: "Facialist salons and data-led aftercare",
    detail:
      "The facialist brand relaunch introduces the Facial Computer system, marrying skin diagnostics with membership-based salon care."
  },
  {
    era: "2025",
    headline: "60th anniversary campaign cues",
    detail:
      "The 2026 diamond jubilee announcement spotlights new narratives and assets to thank communities while preparing for the next era."
  }
];

const COMPENSATION_ELEMENTS: CompensationElement[] = [
  {
    title: "Salon-first retail margins",
    description:
      "Consultants guide clients through personalised facials and product bundles inside 94 direct Facialist salons, earning on curated retail plus service packages.",
    highlight: "Business overview — nationwide Facialist salons anchor sales with hands-on treatments and retail follow-through.",
    icon: Store
  },
  {
    title: "Facialist agency partnerships",
    description:
      "Domestic agencies and Facialist distributors complement corporate stores, expanding reach while retaining programme standards and wholesale pricing tiers.",
    highlight: "Business overview lists domestic agencies/Facialist販社 channels alongside corporate salons and e-commerce.",
    icon: Handshake
  },
  {
    title: "Home + salon regimen subscriptions",
    description:
      "Members cycle through home-care kits and salon boosters such as the limited Melty Body Essence launch, deepening lifetime value and repeat commissions.",
    highlight: "September 2025 release — Melty Body Essence supports the “Home Care + Salon Care” regimen for age-prone areas.",
    icon: Sparkles
  },
  {
    title: "Culture & family recognition",
    description:
      "Long-running C'BON Family Day immerses relatives in showroom tours, reinforcing retention and recognition beyond cash payouts.",
    highlight: "August 2025 Family Day news — programme operating since 2015 to deepen family understanding of the workplace.",
    icon: HeartHandshake
  }
];

const SUCCESS_STORIES: SuccessStory[] = [
  {
    title: "Approaching 60 years of beauty mentorship",
    description:
      "The 2026 anniversary playbook reaffirms gratitude for six decades of salon mentorship while charting innovation goals for the centennial horizon.",
    metric: "60-year milestone in January 2026",
    proof: "October 2025 corporate release — “Beauty together” 60th anniversary announcement.",
    icon: BadgeCheck
  },
  {
    title: "Family Day loyalty flywheel",
    description:
      "Since 2015, Family Day has welcomed relatives into the Roppongi HQ, shaping advocacy for consultants’ work-life balance and retention.",
    metric: "Family Day relaunched 24 July 2025",
    proof: "August 2025 Family Day release — event nurtures gratitude between staff and families.",
    icon: Users
  },
  {
    title: "Dermal science showcased",
    description:
      "Research linking oxytocin and cortisol to dermal hyaluronic acid reached the 50th Japan Cosmetic Science Society, signalling scientific ambition.",
    metric: "Presented 4–5 July 2025",
    proof: "July 2025 research news — oxytocin/cortisol findings shared at the Japan Cosmetic Science Society meeting.",
    icon: Factory
  }
];

const INNOVATION_SIGNALS: Innovation[] = [
  {
    title: "Neuro-hormonal skincare research",
    description:
      "C'BON scientists are mapping how oxytocin and cortisol modulate dermal hyaluronic acid, strengthening claims with emerging biology.",
    proof: "July 2025 research release — oxytocin & cortisol influence dermal HA, presented at Japan Cosmetic Science Society.",
    icon: FlaskConical
  },
  {
    title: "Programmatic product drops",
    description:
      "The limited Melty Body Essence strengthens the Home + Salon Care system with targeted firming textures for age-prone zones.",
    proof: "September 2025 product launch release — Melty Body Essence debuts for neck, décolleté, and arm care.",
    icon: Sparkles
  },
  {
    title: "Integrated R&D and production",
    description:
      "In-house research and manufacturing campuses in Tochigi keep formulation, quality, and logistics aligned for fast iteration.",
    proof: "Business overview — research development centre and production centre manage nearly all skincare creation internally.",
    icon: Globe2
  }
];

const REPUTATION_SIGNALS: ReputationSignal[] = [
  {
    title: "TSE governance cadence",
    detail:
      "Listed under stock code 4926, C'BON releases governance reports like the June 2025 update alongside quarterly earnings disclosures.",
    evidence: "Corporate governance report (27 June 2025) & IR Q1 FY2026 filing.",
    icon: ShieldCheck
  },
  {
    title: "Customer skin stewardship",
    detail:
      "Leadership reiterates accountability for customers’ skin outcomes, keeping aftercare embedded in every compensation lever.",
    evidence: "Top Message — commitment to stay responsible for customer skin “to the very end.”",
    icon: HeartHandshake
  },
  {
    title: "Family transparency loop",
    detail:
      "Family Day workplace tours help external stakeholders understand operations and compliance expectations firsthand.",
    evidence: "August 2025 Family Day release — initiative has run since 2015 to connect families with the salons and HQ.",
    icon: Users
  }
];

const CRITICAL_WATCHPOINTS: Critique[] = [
  {
    title: "Domestic concentration risk",
    description:
      "The footprint still centres on 94 domestic salons with only modest Asian expansion, leaving growth tied to Japan’s demographics and regulations.",
    mitigation: "Lean on multilingual digital funnels and cross-border fulfilment to diversify beyond home-market salons while respecting local compliance.",
    source: "Company outline & business overview — domestic salon counts and overseas note.",
    icon: AlertTriangle
  },
  {
    title: "Experience-heavy operating costs",
    description:
      "Home + Salon Care demands consultant facials, diagnostics, and facility upkeep, challenging margins if traffic dips.",
    mitigation: "Add teleconsultations, smart booking, and AI-guided skin logs so hybrid experiences scale without sacrificing intimacy.",
    source: "Business overview — programme hinges on in-person Facialist salons and after-service.",
    icon: Gavel
  },
  {
    title: "Science-to-market compliance gap",
    description:
      "Hormone-linked skin discoveries are early-stage; over-claiming before peer-reviewed validation risks regulator pushback.",
    mitigation: "Translate lab findings into guidance with clinical disclaimers, regulatory counsel, and staged rollout milestones.",
    source: "July 2025 oxytocin/cortisol research release — preliminary results shared at academic meeting.",
    icon: AlertTriangle
  }
];

const TRUST_SCORES: TrustScore[] = [
  {
    title: "Governance discipline",
    score: "66/100",
    insight:
      "Tokyo Stock Exchange reporting and governance updates signal mature oversight, yet transparency remains mostly Japanese-language.",
    methodology: "Mix of listing status, cadence of governance reports, and accessibility of disclosures for non-Japanese stakeholders."
  },
  {
    title: "Customer experience",
    score: "62/100",
    insight:
      "High-touch salons and family engagement build loyalty, but scaling service consistency beyond Japan needs tech augmentation.",
    methodology: "Evaluated on service design, stakeholder programmes, and reliance on physical touchpoints."
  },
  {
    title: "Innovation credibility",
    score: "61/100",
    insight:
      "Research momentum is strong, though results must graduate from conference papers to regulated product narratives.",
    methodology: "Balances scientific announcements, product cadence, and regulatory-readiness proof points."
  }
];

const NEWS_HEADLINES: NewsItem[] = [
  {
    title: "C'BON sets “Beauty Together” 60th anniversary vision",
    source: "C'BON corporate news",
    date: "1 Oct 2025",
    summary:
      "Launches a gratitude-driven campaign ahead of the 24 January 2026 anniversary, aligning staff and partners around new storytelling.",
    url: "https://www.cbon.co.jp/company/news/companyinfo/detail/338"
  },
  {
    title: "Limited Melty Body Essence expands Home + Salon Care",
    source: "C'BON corporate news",
    date: "25 Sep 2025",
    summary:
      "Introduces a targeted body essence for neck and arm zones to reinforce the home-and-salon dual regimen.",
    url: "https://www.cbon.co.jp/company/news/companyinfo/detail/337"
  },
  {
    title: "Hormone research reaches Japan Cosmetic Science Society",
    source: "C'BON corporate news",
    date: "17 Jul 2025",
    summary:
      "Reports oxytocin and cortisol effects on dermal hyaluronic acid to the 50th academic meeting, highlighting R&D focus.",
    url: "https://www.cbon.co.jp/company/news/companyinfo/detail/335"
  }
];

const CLOUD_ROADMAP: CloudPlay[] = [
  {
    title: "Salon operations digital twin",
    description:
      "Model the Facialist customer journey with scheduling, treatment logging, and product bundling so every region can replicate the flagship experience.",
    icon: Gauge
  },
  {
    title: "Multilingual compliance library",
    description:
      "Convert governance filings, Family Day playbooks, and consultant SOPs into guided checklists with real-time alerts per market.",
    icon: ChartLineUp
  },
  {
    title: "Science storytelling engine",
    description:
      "Turn lab findings into regulator-ready claim hierarchies, nurturing campaigns that educate without over-promising.",
    icon: ArrowBendUpRight
  }
];

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang as Locale) ? (lang as Locale) : i18n.defaultLocale) as Locale;
}

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Inside C'BON — Trust & Compensation Insights";
  const description =
    "Review C'BON Cosmetics’ salon-first model, compensation levers, innovation signals, critiques, and trust outlook to inform your own compliant launch.";
  const keywords = [
    "C'BON trust insights",
    "C'BON MLM analysis",
    "C'BON compensation review",
    "Cloud MLM Software research",
    "Japanese salon direct selling"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/cbon-cosmetics", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PageProps = {
  params: { lang: SupportedLocale };
};

export default function CbonCosmeticsPage({ params }: PageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const trustScoreHref = "#trust-score";
  const timelineHref = "#timeline";
  const trustSnapshotHref = "#trust-insights";
  const trustFill = `${PRIMARY_TRUST_SCORE.score}%`;

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-primary/40 bg-gradient-to-br from-[#4B0082]/15 via-white to-[#0AA1DD]/12 py-20 dark:border-primary/30 dark:from-slate-900 dark:via-slate-950 dark:to-blue-900/25">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(75,0,130,0.35),transparent_55%),radial-gradient(circle_at_80%_26%,rgba(10,161,221,0.28),transparent_58%),radial-gradient(circle_at_52%_82%,rgba(111,78,255,0.2),transparent_65%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.75fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-1 text-sm font-semibold text-slate-900 backdrop-blur dark:border-white/20 dark:bg-white/10 dark:text-white">
              Salon-first Japanese beauty intelligence
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Inside C&apos;BON — trust, salon orchestration, and research-led growth signals.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/80">
                Examine how C&apos;BON’s Facialist salons, integrated manufacturing, and anniversary roadmap steward stakeholders. Parse company facts, history, payout levers, wins, risk points, and current headlines—then adapt the lessons for your own compliant expansion.
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
            <div className="absolute -right-10 top-14 h-28 w-28 rounded-full bg-[#4B0082]/25 blur-3xl" aria-hidden />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Trust gauge</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Advisory</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="relative h-20 w-20">
                  <svg className="h-20 w-20 -rotate-90" viewBox="0 0 100 100" aria-hidden>
                    <circle className="stroke-slate-200/70" strokeWidth="12" cx="50" cy="50" r="40" fill="transparent" />
                    <circle
                      className="stroke-primary"
                      strokeDasharray="251.2"
                      strokeDashoffset={` ${251.2 - (251.2 * PRIMARY_TRUST_SCORE.score) / 100}`}
                      strokeLinecap="round"
                      strokeWidth="12"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-semibold text-slate-900 dark:text-white">{PRIMARY_TRUST_SCORE.score}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{PRIMARY_TRUST_SCORE.label}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{PRIMARY_TRUST_SCORE.summary}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
                    <span>{trustFill} fill</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {COMPANY_FACTS.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-white/60 bg-white/70 p-4 dark:border-white/15 dark:bg-slate-900/80">
                  <span className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{fact.label}</span>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">{fact.value}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-300">{fact.detail}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="sm" variant="secondary">
                <Link href={pricingHref}>
                  Explore pricing
                  <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link href={contactHref}>
                  Book a workshop
                  <ArrowUpRight className="ml-1 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {VISION_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:shadow-lg dark:border-border/40 dark:bg-slate-950/70"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">Source: {pillar.proof}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section id="timeline" className="container space-y-12 scroll-mt-32">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Timeline of resilience</h2>
          <p className="text-sm text-muted-foreground">
            Track how a salon-led cosmetics house invested in manufacturing controls, sustainability, and customer programs long before today’s compliance era.
          </p>
        </div>
        <div className="relative pl-6">
          <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" aria-hidden />
          <div className="space-y-8">
            {STORY_ARC.map((event, index) => (
              <article key={`${event.era}-${index}`} className="relative ml-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
                <span className="absolute -left-6 top-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                  <span className="text-sm font-semibold">{index + 1}</span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-primary dark:text-primary/80">{event.era}</span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{event.headline}</h3>
                <p className="text-sm text-muted-foreground">{event.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Compensation breakdown</h2>
          <p className="text-sm text-muted-foreground">
            See how C&apos;BON monetises home-and-salon touchpoints while keeping consultant culture anchored in skin stewardship.
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
                <span className="text-xs uppercase tracking-wide text-muted-foreground">Proof point: {element.highlight}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
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
                <span className="text-xs uppercase tracking-wide text-muted-foreground">Source: {story.proof}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-6 md:grid-cols-3">
          {INNOVATION_SIGNALS.map((signal) => {
            const Icon = signal.icon;
            return (
              <article
                key={signal.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-primary/10"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{signal.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{signal.description}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">Evidence: {signal.proof}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section id="trust-insights" className="container space-y-12 scroll-mt-32">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Trust & reputation signals</h2>
          <p className="text-sm text-muted-foreground">
            Map the credibility levers—governance cadence, customer stewardship, and stakeholder transparency.
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
            Translate diligence signals into advisory scores you can workshop with legal, compliance, and commercial teams.
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
          Scores are directional estimates; combine them with jurisdiction-specific legal opinions and the latest disclosures before making investment decisions.
        </p>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Challenges, critiques, lessons</h2>
          <p className="text-sm text-muted-foreground">
            Use C&apos;BON’s pressure points to design stronger guardrails for your own go-to-market strategy.
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
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">Mitigation: {critique.mitigation}</span>
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">Source: {critique.source}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Recent headlines</h2>
          <p className="text-sm text-muted-foreground">
            Keep the latest releases on your radar before you engage consultants or stakeholders.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {NEWS_HEADLINES.map((item) => (
            <article
              key={item.url}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
            >
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wide text-primary dark:text-primary/80">{item.date}</span>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground">Source: {item.source}</p>
              </div>
              <p className="text-sm text-muted-foreground">{item.summary}</p>
              <Button asChild variant="ghost" className="mt-auto justify-start px-0 text-primary">
                <Link href={item.url} rel="nofollow noopener noreferrer" target="_blank">
                  Read release
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How Cloud MLM Software helps</h2>
          <p className="text-sm text-muted-foreground">
            Build a compliant, data-rich playbook that mirrors C&apos;BON’s orchestration while scaling beyond Japan.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CLOUD_ROADMAP.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-primary/10"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
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
              Review platform pricing
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
