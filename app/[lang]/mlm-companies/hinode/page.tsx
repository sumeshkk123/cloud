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
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CalendarClock,
  Coins,
  Factory,
  FlaskConical,
  Globe2,
  MapPin,
  ShieldCheck as ShieldCheckIcon,
  Sparkles,
  Target,
  Users
} from "lucide-react";
import { GlobeHemisphereWest, Handshake, Leaf, Medal, TrendUp, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  label: string;
  detail: string;
};

type HeroFact = {
  title: string;
  metric: string;
  description: string;
};

type CompanyFact = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type BrandPillar = {
  title: string;
  insight: string;
  proof: string;
  icon: IconType;
};

type ExperiencePlay = {
  title: string;
  summary: string;
  highlight: string;
  icon: IconType;
};

type GrowthMoment = {
  era: string;
  headline: string;
  detail: string;
};

type TrustSignal = {
  title: string;
  detail: string;
  advisory: string;
  icon: IconType;
};

type CloudPlay = {
  title: string;
  description: string;
  icon: IconType;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    label: "#29 DSN Global 100 ranking",
    detail: "Recognised among the world’s top direct selling companies for fragrance-led experiences."
  },
  {
    label: "600+ curated SKUs",
    detail: "Signature perfumes, cosmetics, home care, and wellness essentials crafted for everyday luxury."
  },
  {
    label: "Community-first distribution",
    detail: "Independent consultants guide person-to-person journeys grounded in Brazilian culture."
  }
];

const HERO_FACTS: HeroFact[] = [
  {
    title: "Revenue momentum",
    metric: "$528M",
    description: "2024 DSN Global 100 estimate showcasing the strength of Hinode’s beauty and wellness demand."
  },
  {
    title: "Founded",
    metric: "1988",
    description: "Family-founded in São Paulo with a mission to elevate everyday experiences through premium products."
  },
  {
    title: "Sales methodology",
    metric: "Person-to-person",
    description: "Experiential demos, curated bundles, and loyalty programs keep consultants focused on customer value."
  }
];

const COMPANY_FACTS: CompanyFact[] = [
  {
    label: "Headquarters",
    value: "São Paulo, Brazil",
    description: "Regional experience centres and logistics hubs support nationwide fulfilment and training.",
    icon: MapPin
  },
  {
    label: "Revenue",
    value: "$528M",
    description: "Direct Selling News Global 100 ranking places Hinode 29th worldwide among MLM leaders.",
    icon: Coins
  },
  {
    label: "Founded",
    value: "1988",
    description: "Decades of fragrance craft expanded into cosmetics, wellness, and home comfort innovations.",
    icon: CalendarClock
  },
  {
    label: "Compensation",
    value: "Multilevel hybrid",
    description: "Retail rewards and layered team bonuses link earnings to verifiable consumption and retention.",
    icon: Target
  },
  {
    label: "Portfolio depth",
    value: "600+ products",
    description: "Perfumes, personal care, cosmetics, wellness, and home comfort lines engineered in-house.",
    icon: Factory
  },
  {
    label: "Distribution style",
    value: "Consultant-led",
    description: "Person-to-person rituals and social commerce keep the brand experiential and aspirational.",
    icon: Users
  }
];

const BRAND_PILLARS: BrandPillar[] = [
  {
    title: "Fragrance-first differentiation",
    insight: "Fine fragrances anchor Hinode’s identity, blending artisanal perfumery with daily wear versatility.",
    proof: "Flagship lines such as Empire and Grace elevate consultants’ storytelling with sensory discovery kits.",
    icon: Sparkles
  },
  {
    title: "Science-backed beauty labs",
    insight: "Cosmetics and skincare are developed with dermatological research and ingredient transparency.",
    proof: "Clinical testing and Brazilian ANVISA compliance underpin each formulation before field release.",
    icon: FlaskConical
  },
  {
    title: "Empowered consultant culture",
    insight: "Hinode Academy programmes build commercial confidence, financial literacy, and mentorship networks.",
    proof: "Hybrid workshops, regional conferences, and digital playbooks nurture long-term field leaders.",
    icon: Handshake
  }
];

const EXPERIENCE_PLAYS: ExperiencePlay[] = [
  {
    title: "Immersive customer journeys",
    summary: "Consultants curate at-home rituals, fragrance layering events, and wellness consultations.",
    highlight: "Sampling kits and experiential bundles improve product discovery and repurchase cycles.",
    icon: UsersThree
  },
  {
    title: "Localized premium positioning",
    summary: "Collections reflect Brazilian lifestyle insights, climate realities, and self-care routines.",
    highlight: "Limited editions and regional promotions keep storytelling timely across the national footprint.",
    icon: Globe2
  },
  {
    title: "Performance recognition",
    summary: "Gamified leaderboards, travel incentives, and tiered rewards celebrate sustainable growth.",
    highlight: "Recognition programs spotlight ethical selling, retention metrics, and philanthropy benchmarks.",
    icon: TrendUp
  }
];

const GROWTH_MOMENTS: GrowthMoment[] = [
  {
    era: "1988",
    headline: "Launch of the Hinode fragrance house",
    detail:
      "The Hinode family introduces a perfume-led catalogue, emphasising accessibility without compromising on sophistication."
  },
  {
    era: "2005",
    headline: "Expanded into cosmetics and personal care",
    detail:
      "Growth in skincare, makeup, and wellness solutions positions Hinode as a one-stop lifestyle brand for consultants and customers."
  },
  {
    era: "2015",
    headline: "Logistics and academy modernisation",
    detail:
      "Upgraded fulfilment centres, digital enrolment, and the Hinode Academy boost scalability for nationwide field teams."
  },
  {
    era: "2023–2024",
    headline: "Hybrid retail and AI-enhanced loyalty",
    detail:
      "Mobile-native ordering, data-informed promotions, and sustainability messaging keep consultants competitive in a digital-first Brazil."
  }
];

const TRUST_SIGNALS: TrustSignal[] = [
  {
    title: "Product craftsmanship",
    detail: "Hinode’s laboratories emphasise quality ingredients and testing regimes aligned with Brazilian regulations.",
    advisory: "Leverage certificates of analysis and customer education to reinforce quality claims in every market.",
    icon: Medal
  },
  {
    title: "Customer-first mentoring",
    detail: "Training stresses responsible storytelling, realistic earnings expectations, and mentorship accountability.",
    advisory: "Embed compliance prompts, disclosure reminders, and automated onboarding scorecards in your stack.",
    icon: ShieldCheckIcon
  },
  {
    title: "Purpose-driven community impact",
    detail: "Charitable campaigns and entrepreneurship programmes empower consultants to uplift local communities.",
    advisory: "Track impact metrics and incorporate ESG storytelling into customer and investor dashboards.",
    icon: Leaf
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Brazil-ready omnichannel stack",
    description: "Activate an e-commerce + person-to-person experience with localisation for Portuguese, tax, and logistics flows.",
    icon: GlobeHemisphereWest
  },
  {
    title: "Compensation plan digital twin",
    description: "Model multilevel hybrid bonuses, retail guardrails, and breakage scenarios before launching new phases.",
    icon: BarChart3
  },
  {
    title: "Consultant enablement workspace",
    description: "Deliver modular training, playbooks, and compliance nudges inspired by Hinode Academy best practices.",
    icon: UsersThree
  },
  {
    title: "AI-powered loyalty insights",
    description: "Predict replenishment windows, hero bundles, and recognition triggers with behavioural AI overlays.",
    icon: Sparkles
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Hinode MLM Company Growth Blueprint & Trust Insights";
  const description =
    "Analyse Hinode’s $528M Brazilian beauty powerhouse — revenue signals, consultant culture, product pillars, and how Cloud MLM Software helps you replicate the model responsibly.";
  const keywords = [
    "Hinode MLM company",
    "Hinode direct selling analysis",
    "Hinode compensation plan insights",
    "Brazil beauty MLM software",
    "Cloud MLM Software advisory"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/hinode", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type HinodePageProps = {
  params: { lang: SupportedLocale };
};

export default function HinodePage({ params }: HinodePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-primary/30 bg-gradient-to-br from-[#081226] via-[#0f2c40] to-[#123b2b] py-20 text-white dark:border-primary/25 dark:from-[#030712] dark:via-[#071523] dark:to-[#0a1b14]">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(104,217,255,0.28),transparent_45%),radial-gradient(circle_at_88%_22%,rgba(56,171,119,0.32),transparent_55%),radial-gradient(circle_at_48%_92%,rgba(0,167,255,0.18),transparent_60%)]"
          aria-hidden
        />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.78fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-emerald-100">
              Brazilian beauty powerhouse
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Hinode MLM Company: growth blueprint for a fragrance-led empire.
              </h1>
              <p className="text-base text-slate-200/90">
                Translate Hinode’s $528M momentum into your own launch strategy. Examine the company’s premium positioning, consultant enablement,
                and trust safeguards—then map how Cloud MLM Software orchestrates the same precision for your direct selling expansion.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Experience the AI-powered demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-white/15 text-emerald-100 hover:bg-white/25">
                <Link href={modulesHref}>
                  Explore automation modules
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <Link href={contactHref}>
                  Design your rollout
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {HERO_HIGHLIGHTS.map((highlight) => (
                <article
                  key={highlight.label}
                  className="flex h-full flex-col gap-2 rounded-2xl border border-white/20 bg-black/35 p-4 backdrop-blur"
                >
                  <span className="text-sm font-semibold text-emerald-100">{highlight.label}</span>
                  <p className="text-xs text-slate-200/80">{highlight.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="relative grid gap-5 rounded-3xl border border-white/30 bg-white/10 p-8 backdrop-blur">
            <div className="absolute -right-10 top-14 h-32 w-32 rounded-full bg-emerald-400/30 blur-3xl" aria-hidden />
            <div className="absolute -left-6 bottom-12 h-28 w-28 rounded-full bg-sky-400/20 blur-3xl" aria-hidden />
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/70">Snapshot</span>
              <p className="text-lg font-semibold text-white">Momentum signals that define Hinode’s market posture.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {HERO_FACTS.map((fact) => (
                <article key={fact.title} className="flex h-full flex-col gap-2 rounded-2xl border border-white/20 bg-black/40 p-4">
                  <span className="text-xs uppercase tracking-wide text-white/60">{fact.title}</span>
                  <span className="text-2xl font-semibold text-white">{fact.metric}</span>
                  <p className="text-xs text-slate-200/80">{fact.description}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ground truths & operating scale</h2>
          <p className="text-sm text-muted-foreground">
            Anchor your market entry with the data that fuels Hinode’s reputation across Brazil and the wider Latin American beauty economy.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {COMPANY_FACTS.map((fact) => {
            const Icon = fact.icon;
            return (
              <article
                key={fact.label}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-primary/10"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground">{fact.label}</h3>
                    <p className="text-lg font-semibold text-foreground">{fact.value}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{fact.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-muted/40 py-20 dark:bg-slate-900/60">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(24,127,190,0.18),transparent_55%),radial-gradient(circle_at_78%_24%,rgba(16,185,129,0.2),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Product & experience pillars
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              What makes the Hinode experience resonate with discerning consumers.
            </h2>
            <p className="text-sm text-muted-foreground">
              Hinode combines artisanal perfumery, science-backed beauty, and an empowered consultant network to deliver consistent customer
              delight. Use these principles as prompts while designing your own premium direct selling journeys.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {BRAND_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/50 bg-background/90 p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/80"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                  </div>
                  <p className="text-sm font-medium text-foreground">{pillar.insight}</p>
                  <p className="text-xs text-muted-foreground">{pillar.proof}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Consultant experience architecture</h2>
          <p className="text-sm text-muted-foreground">
            Reinforce opportunity realism with enablement flows that keep consultants focused on loyalty, compliance, and long-term growth.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {EXPERIENCE_PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-primary/10"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{play.summary}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">Highlight: {play.highlight}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Growth timeline & strategic momentum</h2>
          <p className="text-sm text-muted-foreground">
            Plot Hinode’s expansion inflection points to understand how product innovation, logistics, and digital experiences compound.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" aria-hidden />
          <div className="space-y-10">
            {GROWTH_MOMENTS.map((moment) => (
              <article key={moment.era} className="relative pl-12">
                <span className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                  {moment.era}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{moment.headline}</h3>
                <p className="text-sm text-muted-foreground">{moment.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Trust, compliance, and opportunity realism</h2>
          <p className="text-sm text-muted-foreground">
            Preserve Hinode-level confidence by pairing high-quality products with transparent earnings narratives and tracked community impact.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {TRUST_SIGNALS.map((signal) => {
            const Icon = signal.icon;
            return (
              <article
                key={signal.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/80"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{signal.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{signal.detail}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{signal.advisory}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border/60 bg-gradient-to-br from-primary/5 via-background to-background py-20 dark:border-border/40 dark:from-primary/15 dark:via-slate-950 dark:to-slate-950">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,0.6fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Cloud MLM Software advantage
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Bring Hinode-grade polish to your next generation MLM platform.
            </h2>
            <p className="text-sm text-muted-foreground">
              Purchase AI-powered Cloud MLM Software to orchestrate compensation, compliance, and consultant enablement workflows with the same finesse Hinode demonstrates in Brazil. We help you personalise every touchpoint while maintaining data integrity and regulatory confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={pricingHref}>
                  Review pricing tiers
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={contactHref}>
                  Book a strategy session
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {CLOUD_PLAYS.map((play) => {
              const Icon = play.icon;
              return (
                <article
                  key={play.title}
                  className="flex flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/80"
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
