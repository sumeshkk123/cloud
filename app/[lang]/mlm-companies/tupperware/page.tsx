import type { CSSProperties, ComponentType } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { buildLocalizedPath } from "@/lib/locale-links";
import { isSupportedLocale } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ArrowRight,
  ArrowUpRight,
  Box,
  Factory,
  Globe2,
  LineChart,
  MapPin,
  Palette,
  Recycle,
  ShieldCheck,
  Sparkles,
  Store,
  Users
} from "lucide-react";
import { ChartLineUp, ClipboardText, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeritageMetric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type DesignPillar = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type FieldExperience = {
  title: string;
  description: string;
  enablement: string;
  icon: IconType;
};

type TimelineEvent = {
  year: string;
  headline: string;
  detail: string;
  proof: string;
};

type TrustLens = {
  title: string;
  score: string;
  insight: string;
  methodology: string;
};

type Watchpoint = {
  title: string;
  risk: string;
  mitigation: string;
  icon: IconType;
};

type CloudPlay = {
  title: string;
  description: string;
  outcome: string;
  icon: IconType;
};

const HERITAGE_METRICS: HeritageMetric[] = [
  {
    label: "Founded",
    value: "1946",
    detail: "Earl Tupper introduced iconic air-tight containers that transformed home storage.",
    icon: Factory
  },
  {
    label: "Business model",
    value: "Party plan pioneers",
    detail: "Tupperware Parties created immersive product education and community selling.",
    icon: Users
  },
  {
    label: "Global reach",
    value: "70+ markets",
    detail: "Localized design centers adapt assortments for culture, cuisine, and climate.",
    icon: Globe2
  },
  {
    label: "Product focus",
    value: "Design-led home solutions",
    detail: "Storage, preparation, and serving innovations anchored in sustainability.",
    icon: Palette
  },
  {
    label: "Sustainability arc",
    value: "Reusable & recycled materials",
    detail: "New lines incorporate ocean-bound plastics and circular product programs.",
    icon: Recycle
  },
  {
    label: "Compensation",
    value: "Multi-tier sales leadership",
    detail: "Personal sales, team overrides, and business building bonuses tied to verified retail volume.",
    icon: LineChart
  }
];

const DESIGN_PILLARS: DesignPillar[] = [
  {
    title: "Modular aesthetics",
    description:
      "Stackable, color-coordinated designs blend into modern kitchens while maximising pantry efficiency.",
    proof: "Winning iF and Red Dot design awards for modular pantry and FridgeSmart collections.",
    icon: Box
  },
  {
    title: "Sustainability-first materials",
    description:
      "Plastics engineered for longevity, recyclability, and toxin transparency keep Tupperware relevant in eco-conscious homes.",
    proof: "Tupperware’s 2030 sustainability roadmap and Ocean Bound Plastic collection release.",
    icon: Recycle
  },
  {
    title: "Experience-driven selling",
    description:
      "Cooking demos, virtual workshops, and personalised storage diagnostics turn parties into solution design sessions.",
    proof: "Global Studio Tupperware initiatives showcasing experiential selling formats.",
    icon: Sparkles
  }
];

const FIELD_EXPERIENCES: FieldExperience[] = [
  {
    title: "Curate lifestyle consultations",
    description:
      "Consultants map pantry, fridge, and on-the-go routines to craft modular bundles that solve real storage challenges.",
    enablement: "Use kitchen assessment checklists, configuration templates, and AR visualisers that preview setups.",
    icon: ClipboardText
  },
  {
    title: "Run immersive demos",
    description:
      "Hybrid gatherings blend cooking theatre, sustainability storytelling, and digital ordering to keep engagement high.",
    enablement: "Event playbooks detail lighting, recipe pacing, and QR-enabled upsell sequences.",
    icon: Store
  },
  {
    title: "Scale leadership ateliers",
    description:
      "Leadership labs mentor newcomers on inventory planning, social commerce storytelling, and inclusive community building.",
    enablement: "Analytics flag rising leaders, pair them with coaches, and automate recognition loops.",
    icon: UsersThree
  }
];

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "1946",
    headline: "Earl Tupper invents the Wonderlier bowl",
    detail: "Airtight seal technology triggers a new era of food preservation and direct selling innovation.",
    proof: "Tupperware company archives documenting Wonderlier launch."
  },
  {
    year: "1950s",
    headline: "Brownie Wise ignites the party plan",
    detail: "House parties transform product education and create economic mobility for women entrepreneurs.",
    proof: "Smithsonian profile on Brownie Wise and the Tupperware party revolution."
  },
  {
    year: "2000s",
    headline: "Global design centers expand reach",
    detail: "Regional teams tailor assortments for cultural cooking rituals and sustainability priorities.",
    proof: "Press coverage of Singapore and Mexico design studios."
  },
  {
    year: "2020s",
    headline: "Digital-first transformation",
    detail: "E-commerce, social selling, and sustainability partnerships refresh the legacy brand for new generations.",
    proof: "Tupperware corporate transformation reports and investor updates."
  }
];

const TRUST_LENSES: TrustLens[] = [
  {
    title: "Brand resilience",
    score: "72/100",
    insight:
      "Legacy trust, design accolades, and sustainability progress keep Tupperware in cultural conversations.",
    methodology: "Weighted on design awards, sustainability reporting, and media sentiment."
  },
  {
    title: "Field economics",
    score: "60/100",
    insight:
      "Income depends on balancing in-person experiences with digital demand generation and inventory planning.",
    methodology: "Mix of compensation disclosures, digital adoption, and leader retention data."
  },
  {
    title: "Operational agility",
    score: "64/100",
    insight:
      "Supply chain restructuring and SKU rationalisation are critical as the brand modernises its product mix.",
    methodology: "Assessed via investor guidance, inventory turns, and manufacturing announcements."
  }
];

const WATCHPOINTS: Watchpoint[] = [
  {
    title: "Inventory discipline",
    risk: "Over-ordering or slow-moving SKUs can squeeze consultant cash flow and erode trust.",
    mitigation: "Deploy predictive ordering tools, automatic replenishment suggestions, and aged-inventory alerts.",
    icon: ShieldCheck
  },
  {
    title: "Digital party consistency",
    risk: "Hybrid events risk losing tactile engagement if hosts lack guidance on storytelling or camera work.",
    mitigation: "Provide virtual studio kits, camera framing tutorials, and sample scripts for demos.",
    icon: Sparkles
  },
  {
    title: "Sustainability proof",
    risk: "Claims about recycled materials and circularity must withstand scrutiny from eco-conscious consumers.",
    mitigation: "Publish batch-level sustainability data, third-party audits, and recycling program metrics.",
    icon: Recycle
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Kitchen configuration studio",
    description:
      "Interactive planners translate pantry dimensions, family size, and lifestyle needs into modular bundle recommendations.",
    outcome: "Boosts average order value while keeping inventory aligned to actual household needs.",
    icon: Box
  },
  {
    title: "Circularity insights hub",
    description:
      "Tracks recycled content, end-of-life returns, and sustainability storytelling assets in one dashboard.",
    outcome: "Equips consultants with credible eco-narratives and surfaces hotspots for operations teams.",
    icon: Recycle
  },
  {
    title: "Experience playbook automation",
    description:
      "AI generates party agendas, recipe pairings, and follow-up cadences tuned to each host’s audience.",
    outcome: "Improves conversion across in-person and virtual gatherings while protecting brand standards.",
    icon: Sparkles
  },
  {
    title: "Leadership health radar",
    description:
      "Visualises team depth, digital adoption, and coaching coverage so executives can scale the next wave of leaders.",
    outcome: "Keeps succession plans strong and ensures culture carries into new markets.",
    icon: ChartLineUp
  }
];

const PRIMARY_TRUST_SCORE = {
  score: 68,
  label: "Design legacy index",
  summary: "Synthesises brand recognition, sustainability momentum, and field economics across the modernised Tupperware network."
};

const GAUGE_STYLE: CSSProperties = {
  background: `conic-gradient(#f97316 ${PRIMARY_TRUST_SCORE.score * 3.6}deg, rgba(249, 115, 22, 0.2) 0deg)`
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Tupperware Design & Field Reinvention Blueprint";
  const description =
    "Discover how Tupperware’s iconic party plan evolves with sustainability, digital experiences, and Cloud MLM Software’s orchestration.";
  const keywords = [
    "Tupperware MLM analysis",
    "Tupperware party plan transformation",
    "Tupperware compensation insights",
    "direct selling design leadership",
    "Cloud MLM Software for consumer brands"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/tupperware", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type TupperwarePageProps = {
  params: { lang: SupportedLocale };
};

export default function TupperwarePage({ params }: TupperwarePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const indexHref = buildLocalizedPath("/mlm-companies", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-rose-950 via-slate-900 to-orange-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(244,114,182,0.32),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(249,115,22,0.35),transparent_60%)]" />
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.55fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-300/50 bg-orange-500/10 px-4 py-1 text-sm font-semibold text-orange-100">
              Tupperware • Design-Led Direct Selling
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Reinventing the iconic party plan for design-savvy, eco-conscious households.
            </h1>
            <p className="text-base text-orange-50/80">
              Tupperware’s legacy thrives when consultants turn modular design, sustainability, and immersive experiences into
              everyday value. Give your field the intelligence, playbooks, and automation to delight the next generation of hosts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  Explore the modern party toolkit
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-orange-200/60 text-orange-100 hover:bg-orange-500/10"
              >
                <Link href={pricingHref}>
                  Review technology bundles
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-orange-100 underline underline-offset-4 hover:bg-white/10">
                <Link href={indexHref}>
                  Return to MLM company index
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-2 text-sm text-orange-50/80">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-orange-200" aria-hidden />
                Orlando, Florida • Serving 70+ markets
              </p>
              <p>
                “Great design deserves great storytelling. Tupperware leaders who marry experience and data win the next era.”
              </p>
            </div>
          </div>

          <aside className="grid gap-6 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-xl backdrop-blur">
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/25 bg-black/30 p-6 text-center">
              <div className="relative flex h-44 w-44 items-center justify-center rounded-full p-4" style={GAUGE_STYLE} aria-hidden>
                <div className="absolute inset-6 flex flex-col items-center justify-center rounded-full bg-black/40 text-center shadow-lg">
                  <span className="text-4xl font-semibold text-white">{PRIMARY_TRUST_SCORE.score}</span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-orange-100/80">
                    {PRIMARY_TRUST_SCORE.label}
                  </span>
                </div>
              </div>
              <p className="text-xs text-orange-50/80">{PRIMARY_TRUST_SCORE.summary}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {HERITAGE_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex h-full flex-col gap-3 rounded-2xl border border-white/20 bg-black/30 p-4 shadow-sm transition hover:-translate-y-1 hover:bg-black/40"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/20 text-orange-100">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-orange-100/80">{metric.label}</span>
                    </div>
                    <span className="text-lg font-semibold text-white">{metric.value}</span>
                    <p className="text-xs text-orange-50/80">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 rounded-3xl border border-primary/15 bg-gradient-to-br from-orange-50 via-white to-rose-50 p-10 dark:border-primary/10 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Design pillars to spotlight</h2>
            <p className="text-sm text-muted-foreground">
              Tupperware’s design leadership fuels loyalty. Use these pillars to keep hosts inspired and customers confident in
              the brand’s purpose.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {DESIGN_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/70"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground">{pillar.description}</p>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {pillar.proof}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.6fr)]">
          <div className="space-y-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Experiences that keep hosts and guests engaged
              </h2>
              <p className="text-sm text-muted-foreground">
                Modern Tupperware leaders blend tactile demos with digital follow-up. Equip them with structured experiences that
                feel premium and data-informed.
              </p>
            </div>
            <div className="space-y-5">
              {FIELD_EXPERIENCES.map((experience) => {
                const Icon = experience.icon;
                return (
                  <article
                    key={experience.title}
                    className="flex gap-4 rounded-3xl border border-primary/20 bg-primary/5 p-5 dark:border-primary/15 dark:bg-primary/10"
                  >
                    <span className="mt-1 inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary shadow dark:bg-slate-950/60">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{experience.title}</h3>
                      <p className="text-sm text-muted-foreground">{experience.description}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                        {experience.enablement}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Milestones that shape strategy</h2>
              <p className="text-sm text-muted-foreground">
                Understanding Tupperware’s evolution helps leaders connect heritage with present-day transformation priorities.
              </p>
            </div>
            <div className="space-y-5">
              {TIMELINE_EVENTS.map((event) => (
                <article
                  key={event.year}
                  className="relative rounded-3xl border border-border/60 bg-background/80 p-5 dark:border-border/40 dark:bg-slate-950/80"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {event.year}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{event.headline}</h3>
                  <p className="text-sm text-muted-foreground">{event.detail}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {event.proof}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/5 p-10 dark:border-primary/15 dark:from-primary/10 dark:via-slate-950 dark:to-primary/15">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.45fr)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Trust signals leadership must monitor
              </h2>
              <p className="text-sm text-muted-foreground">
                Blend brand storytelling with operational excellence. These diagnostics clarify where to invest as the business
                modernises.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {TRUST_LENSES.map((lens) => (
                <article
                  key={lens.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{lens.title}</p>
                  <span className="text-3xl font-semibold text-primary">{lens.score}</span>
                  <p className="text-sm text-muted-foreground">{lens.insight}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {lens.methodology}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {WATCHPOINTS.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-primary/25 bg-primary/5 p-5 dark:border-primary/20 dark:bg-primary/10"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow dark:bg-slate-950/60">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.risk}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {item.mitigation}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-8 rounded-3xl border border-border/60 bg-background p-10 shadow-sm dark:border-border/40 dark:bg-slate-950/80">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.6fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Cloud MLM Software activations for Tupperware
            </h2>
            <p className="text-sm text-muted-foreground">
              Unite product design excellence with AI-driven enablement. Our platform keeps inventory lean, parties elevated, and
              leaders empowered.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Build my design-led roadmap
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={demoHref}>
                  Tour the enablement suite
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {CLOUD_PLAYS.map((play) => {
              const Icon = play.icon;
              return (
                <article
                  key={play.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                  <p className="text-sm text-muted-foreground">{play.description}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {play.outcome}
                  </p>
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

