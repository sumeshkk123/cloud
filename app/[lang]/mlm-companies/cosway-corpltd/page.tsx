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
  Building2,
  CheckCircle2,
  Coins,
  Factory,
  Globe2,
  GraduationCap,
  Handshake,
  Layers,
  Leaf,
  LineChart,
  MonitorSmartphone,
  Package,
  ShieldCheck,
  Sparkles,
  Store,
  Users
} from "lucide-react";

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
  score: 61,
  label: "Composite advisory score",
  summary: "Balances heritage compliance signals, digital e-centre governance, and recent store rationalisation disclosures from Berjaya group filings."
};

const COMPANY_FACTS: CompanyFact[] = [
  {
    label: "Founded",
    value: "1979",
    detail: "Berjaya’s retail portfolio positions Cosway (M) Sdn Bhd as Malaysia’s first home-grown MLM brand established in 1979."
  },
  {
    label: "Headquarters",
    value: "Kuala Lumpur",
    detail: "Direct Selling News profiles Cosway as the Kuala Lumpur-based direct seller spanning skin care, personal care, and apparel."
  },
  {
    label: "Digital e-centres",
    value: "Up to 15%",
    detail: "Executive chairman Tan Sri Vincent Tan told Direct Selling News that Cosway’s e-centre storefronts return up to 15% commissions without inventory handling."
  },
  {
    label: "Flagship investment",
    value: "RM1.5M+",
    detail: "Cosway’s Imbi experience centre required more than RM1.5M in build-out to deliver diagnostics-led consultations for younger shoppers."
  }
];

const VISION_PILLARS: VisionPillar[] = [
  {
    title: "Heritage-built trust",
    description:
      "A Malaysian-founded brand under Berjaya keeps governance close to home while scaling familiar product categories for daily life.",
    proof: "Berjaya — Retail segment Cosway profile.",
    icon: Building2
  },
  {
    title: "Personalised wellness journeys",
    description:
      "Experience centres employ nutritionists and diagnostics to tailor supplement and skincare bundles for each visitor.",
    proof: "Direct Selling News — Cosway’s New Store Targets Younger Crowd.",
    icon: Users
  },
  {
    title: "Digital-first entrepreneurship",
    description:
      "E-centre online stores let members earn commissions on curated carts without stock, aligning with mobile-first distributor expectations.",
    proof: "Direct Selling News — Cosway launches Diamond Royale and Dignita.",
    icon: MonitorSmartphone
  },
  {
    title: "Sustainable everyday impact",
    description:
      "Packaging integrates 30% recycled materials and eco products like biodegradable towels and compostable toothbrushes.",
    proof: "Berjaya — Sustainability Environment update.",
    icon: Leaf
  }
];

const STORY_ARC: TimelineEvent[] = [
  {
    era: "1979",
    headline: "First home-grown MLM brand in Malaysia",
    detail:
      "Cosway (M) Sdn Bhd debuts under Berjaya’s retail umbrella, pairing local entrepreneurship with consumer product breadth."
  },
  {
    era: "2017",
    headline: "Experience centre launches personalised retail",
    detail:
      "A RM1.5M Imbi flagship introduces diagnostics, nutrition consults, and lifestyle zones to attract younger consumers."
  },
  {
    era: "2018",
    headline: "Diamond Royale & Dignita support rebrand",
    detail:
      "New luxury skincare and hijab collections expand Cosway’s reach and energise Malay-market positioning."
  },
  {
    era: "2020",
    headline: "Global director of education joins Cosway Beauty Brands",
    detail:
      "Tim Abney brings two decades of salon education expertise to tighten professional training and brand storytelling."
  },
  {
    era: "2025",
    headline: "Circular packaging initiatives scale",
    detail:
      "Cosway integrates 30% recycled content across bottles, adds biodegradable face towels, and launches compostable toothbrushes."
  },
  {
    era: "FY2025",
    headline: "Retail portfolio rationalises underperforming stores",
    detail:
      "Berjaya’s results note Cosway revenue pressure from closing non-performing outlets even as margins improve via product mix management."
  }
];

const COMPENSATION_ELEMENTS: CompensationElement[] = [
  {
    title: "Consultative retail margin",
    description:
      "Nutritionists in experience centres map supplement regimes and skincare pairings that deepen basket value and repeat usage.",
    highlight: "Direct Selling News highlights one-on-one consultations with diagnostics to personalise every purchase journey.",
    icon: Handshake
  },
  {
    title: "E-centre commission streams",
    description:
      "Members spin up online storefronts and earn percentage-based payouts as customers shop curated product collections.",
    highlight: "Cosway’s e-centre model offers up to 15% commission on digital sales without stock handling (Direct Selling News).",
    icon: Globe2
  },
  {
    title: "Stockless fulfilment",
    description:
      "Centralised logistics removes inventory risk so distributors focus on acquisition, bundles, and customer education.",
    highlight: "Direct Selling News reports the e-centre handles fulfilment end-to-end while members drive demand.",
    icon: Package
  },
  {
    title: "Cross-category bundles",
    description:
      "A portfolio spanning wellness, beauty, fashion, and home care encourages subscription-style kits tuned to lifestyle needs.",
    highlight: "Berjaya’s Cosway profile lists multi-category offerings that enable curated membership packs.",
    icon: Layers
  }
];

const SUCCESS_STORIES: SuccessStory[] = [
  {
    title: "Imbi experience centre blueprint",
    description:
      "Cosway invested over RM1.5M in its Kuala Lumpur flagship, showcasing eight lifestyle zones with interactive diagnostics.",
    metric: "RM1.5M+ hub with expansion plans across Malaysia",
    proof: "Direct Selling News — Cosway’s New Store Targets Younger Crowd.",
    icon: Store
  },
  {
    title: "Premium rebrand momentum",
    description:
      "Diamond Royale skincare and Dignita hijab collections position the brand as both aspirational and culturally relevant.",
    metric: "Two hero lines powering the Malay market push",
    proof: "Direct Selling News — Cosway launches Diamond Royale and Dignita.",
    icon: Sparkles
  },
  {
    title: "Beauty education leadership",
    description:
      "Tim Abney’s appointment adds global salon training experience to Cosway Beauty Brands’ mentoring infrastructure.",
    metric: "20+ years of professional education expertise onboarded",
    proof: "Direct Selling News — Cosway Names Tim Abney Global Director of Education.",
    icon: GraduationCap
  }
];

const INNOVATION_SIGNALS: Innovation[] = [
  {
    title: "Experience tech enablement",
    description:
      "Interactive guides, demo units, and diagnostics inside the Imbi hub turn retail into a data-rich consultation journey.",
    proof: "Direct Selling News — Cosway’s New Store Targets Younger Crowd.",
    icon: MonitorSmartphone
  },
  {
    title: "E-centre marketplace",
    description:
      "Online experience centres function as stockless micro-franchises so members can scale geographically without overhead.",
    proof: "Direct Selling News — Cosway launches Diamond Royale and Dignita.",
    icon: LineChart
  },
  {
    title: "Eco product engineering",
    description:
      "Recycled PETG packaging, biodegradable towels, and compostable toothbrushes demonstrate continuous ESG iteration.",
    proof: "Berjaya — Sustainability Environment update.",
    icon: Leaf
  }
];

const REPUTATION_SIGNALS: ReputationSignal[] = [
  {
    title: "DSAM governance role",
    detail:
      "Cosway’s senior legal and corporate affairs manager sits on the Direct Selling Association of Malaysia board for 2025–2027.",
    evidence: "DSAM — Board Members 2025–2027.",
    icon: ShieldCheck
  },
  {
    title: "Berjaya group oversight",
    detail:
      "Being part of Berjaya’s retail portfolio anchors Cosway to a diversified conglomerate with corporate governance infrastructure.",
    evidence: "Berjaya — Retail segment overview.",
    icon: Building2
  },
  {
    title: "Circular packaging commitments",
    detail:
      "Recycled-content bottles, biodegradable textiles, and compostable accessories underpin transparent sustainability reporting.",
    evidence: "Berjaya — Sustainability Environment update.",
    icon: Leaf
  }
];

const CRITICAL_WATCHPOINTS: Critique[] = [
  {
    title: "Retail footprint rationalisation",
    description:
      "Berjaya’s FY2025 update flags lower Cosway revenue after closing non-performing stores, despite margin gains from mix optimisation.",
    mitigation: "Pair store analytics with e-centre adoption dashboards to redeploy capital toward data-backed, high-yield locations.",
    source: "Berjaya Corporation — FY2025 results release.",
    icon: AlertTriangle
  },
  {
    title: "Demographic refresh urgency",
    description:
      "Leadership acknowledged the brand historically skewed older and must resonate with youth-focused audiences.",
    mitigation: "Amplify digital onboarding, influencer-led sampling, and bilingual education to maintain the rebranding momentum.",
    source: "Direct Selling News — Cosway’s New Store Targets Younger Crowd.",
    icon: Users
  },
  {
    title: "Capital-heavy experience model",
    description:
      "Seven-figure investments in physical centres demand sustained footfall and premium conversions to justify the spend.",
    mitigation: "Stage new centre launches with predictive demand modelling and integrate e-centre data to de-risk payback periods.",
    source: "Direct Selling News — Cosway’s New Store Targets Younger Crowd.",
    icon: Coins
  }
];

const TRUST_SCORES: TrustScore[] = [
  {
    title: "Compliance posture",
    score: "61/100",
    insight:
      "DSAM board participation and Berjaya governance bolster oversight, yet legacy store closures show regulators still expect disciplined execution.",
    methodology: "Weighted on industry association roles, parent governance depth, and portfolio rationalisation disclosures."
  },
  {
    title: "Digital adoption",
    score: "58/100",
    insight:
      "E-centres remove inventory friction but require continued investment to convert older field teams into online-first operators.",
    methodology: "Assesses digital channel maturity, field enablement programmes, and demographic refresh goals."
  },
  {
    title: "Sustainability credibility",
    score: "65/100",
    insight:
      "Circular packaging rollouts and eco-product launches resonate with ESG-conscious stakeholders, pending third-party verification.",
    methodology: "Blend of public ESG initiatives, packaging transparency, and scope for external audits."
  }
];

const NEWS_HEADLINES: NewsItem[] = [
  {
    title: "Cosway launches Diamond Royale and Dignita",
    source: "Direct Selling News",
    date: "June 1, 2018",
    summary:
      "New premium skincare and fashion lines accompany the e-centre rollout, widening product appeal and digital income options.",
    url: "https://www.directsellingnews.com/2018/06/01/cosway-launches-new-product-lines-diamond-royale-and-dignita/"
  },
  {
    title: "Cosway’s new store targets younger crowd",
    source: "Direct Selling News",
    date: "September 21, 2017",
    summary:
      "RM1.5M Imbi experience centre debuts with eight lifestyle zones, diagnostics, and plans for expansion across Malaysian states.",
    url: "https://www.directsellingnews.com/2017/09/21/cosways-new-store-targets-younger-crowd/"
  },
  {
    title: "Berjaya trims non-performing Cosway stores",
    source: "Berjaya Corporation",
    date: "August 29, 2025",
    summary:
      "FY2025 results highlight revenue pressure from shuttering underperforming outlets even as product mix lifts gross margins.",
    url: "https://www.berjaya.com/2025/08/29/bcorp-registers-a-revenue-of-rm9-34-billion-for-financial-year-ended-30-june-2025/"
  }
];

const CLOUD_ROADMAP: CloudPlay[] = [
  {
    title: "Experience centre analytics",
    description:
      "Aggregate footfall, consultation outcomes, and SKU lift so you can stage Cosway-style hubs with predictable payback windows.",
    icon: LineChart
  },
  {
    title: "E-centre automation",
    description:
      "Deploy stockless storefronts, commission engines, and customer education flows that mirror Cosway’s digital-first pivot.",
    icon: MonitorSmartphone
  },
  {
    title: "ESG evidence layer",
    description:
      "Track packaging, recycled content, and eco product launches inside a dashboard ready for investors and regulators.",
    icon: CheckCircle2
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Cosway Trust & Compensation Insights";
  const description =
    "Review Cosway’s Malaysian heritage, experience-centre strategy, compensation levers, innovation signals, and critiques to inform your own direct selling launch.";
  const keywords = [
    "Cosway trust score",
    "Cosway MLM analysis",
    "Cosway compensation plan insights",
    "Cosway e-centre review",
    "Cloud MLM Software advisory"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/cosway-corpltd", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type CoswayPageProps = {
  params: { lang: SupportedLocale };
};

export default function CoswayPage({ params }: CoswayPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const trustScoreHref = "#trust-score";
  const timelineHref = "#timeline";
  const trustSnapshotHref = "#trust-insights";
  const trustFill = `${PRIMARY_TRUST_SCORE.score}%`;

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-primary/40 bg-gradient-to-br from-sky-100/70 via-white to-emerald-100/60 py-20 dark:border-primary/30 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950/35">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(37,114,171,0.3),transparent_55%),radial-gradient(circle_at_82%_28%,rgba(54,179,95,0.28),transparent_60%),radial-gradient(circle_at_50%_82%,rgba(15,118,110,0.2),transparent_60%)]"
          aria-hidden
        />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.75fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-1 text-sm font-semibold text-slate-900 backdrop-blur dark:border-white/20 dark:bg-white/10 dark:text-white">
              Malaysian-founded wellness retail
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Inside Cosway — trust signals, e-centre economics, and sustainability-led growth.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/80">
                Evaluate how Cosway’s heritage brand, diagnostics-driven experience centres, and stockless e-centres shape compensation, innovation, and risk. Use the insights below to architect a compliant, digital-first direct selling launch.
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
            <div className="absolute -right-10 top-14 h-28 w-28 rounded-full bg-sky-300/25 blur-3xl" aria-hidden />
            <div className="absolute bottom-0 left-8 h-20 w-20 translate-y-1/2 rounded-full bg-emerald-300/40 blur-3xl dark:bg-emerald-400/30" aria-hidden />
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col justify-between gap-5 rounded-3xl border border-primary/20 bg-gradient-to-br from-white via-emerald-50 to-white p-6 shadow-sm dark:border-primary/30 dark:from-slate-950 dark:via-primary/10 dark:to-slate-950">
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">Trust score outlook</h2>
                  <p className="text-sm text-muted-foreground">Composite view of governance anchors, digital adoption, and ESG execution.</p>
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
                  Key facts guiding diligence, demographic strategy, and capex planning.
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
              Cosway’s blend of heritage, diagnostics-driven retail, and sustainability initiatives offers a template for modernising legacy direct selling brands.
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Vision and brand pillars</h2>
          <p className="text-sm text-muted-foreground">
            Translate Cosway’s foundational pillars into your own governance, enablement, and product roadmaps.
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
              Anchor diligence on milestones that shaped Cosway’s compliance, digital, and ESG posture.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)]">
            <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 text-sm text-muted-foreground dark:border-primary/40 dark:bg-primary/10">
              Cosway’s journey moves from Malaysian heritage roots to immersive retail, digital e-centres, and sustainability initiatives backed by Berjaya governance.
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
            Map the earning levers behind Cosway’s hybrid retail and e-centre strategy.
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
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Success stories</h2>
          <p className="text-sm text-muted-foreground">
            Highlight execution wins that demonstrate Cosway’s evolution.
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
            Track how Cosway modernises its customer and distributor experience.
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
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{signal.title}</h3>
                <p className="text-sm text-muted-foreground">{signal.description}</p>
                <p className="text-xs uppercase tracking-wide text-primary/80 dark:text-primary/70">{signal.proof}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="trust-insights" className="container space-y-12 scroll-mt-32">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Trust & reputation signals</h2>
          <p className="text-sm text-muted-foreground">
            Validate the brand through governance involvement, parent oversight, and ESG action.
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
            Use advisory scores to frame diligence workshops and mitigation plans.
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
          Scores are advisory estimates to support trust and risk reviews; pair them with legal counsel and market-specific compliance audits.
        </p>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Critiques & lessons</h2>
          <p className="text-sm text-muted-foreground">
            Understand where Cosway faces pressure so you can build proactive guardrails.
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
            Keep marketing, compliance, and leadership teams aligned with the latest external coverage.
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
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(37,114,171,0.25),transparent_55%),radial-gradient(circle_at_78%_30%,rgba(54,179,95,0.28),transparent_60%)]" aria-hidden />
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              How Cloud MLM Software helps
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Build a Cosway-inspired brand—with modern data, automation, and ESG proof.
            </h2>
            <p className="text-sm text-muted-foreground">
              Launch experience-rich retail, stockless e-centres, and sustainability dashboards without inheriting legacy constraints.
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
