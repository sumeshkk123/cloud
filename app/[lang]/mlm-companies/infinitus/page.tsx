import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, CalendarClock, Factory, Globe2, Leaf, Lightbulb, ShieldCheck, Sparkles, TestTubeDiagonal, Users } from "lucide-react";
import { ChartLineUp, GlobeHemisphereEast, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  title: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Heritage = {
  title: string;
  description: string;
  evidence: string;
  icon: IconType;
};

type Program = {
  phase: string;
  focus: string;
};

type Initiative = {
  title: string;
  description: string;
  callout: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Revenue",
    value: "$4.5B",
    detail: "Lauded among the highest-grossing direct selling enterprises in Asia.",
    icon: ChartLineUp
  },
  {
    title: "Founded",
    value: "1992",
    detail: "Born in Hong Kong to modernise traditional Chinese herbal wisdom.",
    icon: CalendarClock
  },
  {
    title: "Employees",
    value: "3,000+",
    detail: "Scientists, herbalists, and experience architects supporting pan-China markets.",
    icon: Users
  }
];

const HERITAGE_PILLARS: Heritage[] = [
  {
    title: "Heritage meets biotechnology",
    description: "Infinitus fuses 5,000 years of Chinese herbology with modern extraction techniques for precision wellness.",
    evidence: "Proprietary polysaccharide and flavonoid complexes demonstrate quantifiable immunity benefits.",
    icon: TestTubeDiagonal
  },
  {
    title: "Whole-life wellness",
    description: "Portfolios span immune support, functional beverages, personal care, and beauty rituals.",
    evidence: "Skin care, cosmetics, and herbal nutrition lines share a unified philosophy of balance and resilience.",
    icon: Leaf
  },
  {
    title: "Culture of progress",
    description: "Consultants grow through the Infinitus Business School, wellness labs, and regional leadership forums.",
    evidence: "Blended learning keeps field leaders aligned on compliance, customer care, and brand storytelling.",
    icon: Lightbulb
  }
];

const PROGRAMS: Program[] = [
  {
    phase: "Awaken",
    focus: "Introduce heritage-backed wellness through immersive storytelling, sampling tea ceremonies, and diagnostic tools."
  },
  {
    phase: "Elevate",
    focus: "Package subscription regimens for immunity, energy, and beauty that synchronise with customer lifestyle data."
  },
  {
    phase: "Sustain",
    focus: "Layer loyalty experiences, ESG programmes, and recognition events that celebrate prosperity with purpose."
  }
];

const CLOUD_INITIATIVES: Initiative[] = [
  {
    title: "Traditional wisdom knowledge base",
    description: "Digitise herbal monographs, dosage guidance, and clinical findings for multilingual consultant access.",
    callout: "Cloud MLM Software enforces approval workflows so regional teams stay aligned on claims.",
    icon: GlobeHemisphereEast
  },
  {
    title: "AI-powered regimen designer",
    description: "Blend survey inputs, health goals, and purchase history to recommend balanced product stacks.",
    callout: "Predictive coaching boosts lifetime value while respecting compliance guardrails.",
    icon: Sparkles
  },
  {
    title: "Experience analytics hub",
    description: "Track event attendance, sensory kit conversions, and philanthropic impact by province.",
    callout: "Data-informed storytelling fuels both customer trust and investor confidence.",
    icon: Factory
  },
  {
    title: "Supply chain assurance",
    description: "Visualise sourcing, batch testing, and cold-chain logistics for premium herbal ingredients.",
    callout: "Transparency dashboards reassure regulators and sophisticated consumers.",
    icon: ShieldCheck
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Infinitus Herbal Wellness Expansion Playbook";
  const description =
    "Understand how Infinitus scales a $4.5B herbal wellness empire across China with heritage-driven innovation, and learn how Cloud MLM Software mirrors that sophistication.";
  const keywords = [
    "Infinitus herbal health",
    "Chinese herbal direct selling",
    "Infinitus compensation insight",
    "Wellness MLM Asia strategy",
    "Cloud MLM Software for herbal brands"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/infinitus", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type InfinitusPageProps = {
  params: { lang: SupportedLocale };
};

export default function InfinitusPage({ params }: InfinitusPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-amber-300/40 bg-gradient-to-br from-[#12080a] via-[#351009] to-[#0b2240] py-20 text-white dark:border-amber-300/30">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_22%,rgba(239,169,72,0.3),transparent_55%),radial-gradient(circle_at_78%_16%,rgba(56,178,172,0.28),transparent_60%),radial-gradient(circle_at_50%_88%,rgba(14,165,233,0.22),transparent_58%)]"
          aria-hidden
        />
        <div className="container grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/50 bg-amber-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-amber-200">
              #5 • Infinitus (Hong Kong · Mainland China)
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Heritage-driven herbal wellness with modern scalability.
              </h1>
              <p className="text-base text-white/80">
                Infinitus elevates traditional Chinese herbology into a $4.5B powerhouse by uniting science, culture, and human connection. See
                how to bring that elegance to your own wellness transformation.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Experience the AI herbal lab
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-white/15 text-amber-100 hover:bg-white/25">
                <Link href={pricingHref}>
                  Explore pricing
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <Link href={contactHref}>
                  Design your roadmap
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-5 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/70">Market momentum</span>
              <p className="text-lg font-semibold text-white">
                Signals that define Infinitus as a benchmark for Asian wellness enterprises.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {HIGHLIGHTS.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <article key={highlight.title} className="flex h-full flex-col gap-2 rounded-2xl border border-white/15 bg-black/40 p-4">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <p className="text-xs uppercase tracking-widest text-white/60">{highlight.title}</p>
                    <p className="text-2xl font-semibold text-white">{highlight.value}</p>
                    <p className="text-xs text-white/70">{highlight.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What powers Infinitus?</h2>
          <p className="text-sm text-muted-foreground">
            Modern lab infrastructure, community learning, and culturally rich storytelling deliver a defensible moat. Integrate these pillars
            into your own product and experience design.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {HERITAGE_PILLARS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-amber-50 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-amber-950/40"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{item.evidence}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-muted/40 py-20 dark:border-border/40 dark:bg-slate-900/60">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(234,179,8,0.18),transparent_55%),radial-gradient(circle_at_80%_26%,rgba(56,189,248,0.18),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.85fr)]">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-amber-700 dark:border-white/30 dark:bg-white/10 dark:text-white">
              Customer journey orchestration
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Ritual-led programmes that boost retention.
            </h2>
            <p className="text-sm text-muted-foreground">
              Infinitus designs each interaction like a wellness ritual. Use this three-stage programme as your blueprint.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PROGRAMS.map((program) => (
              <article
                key={program.phase}
                className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <h3 className="text-lg font-semibold text-foreground">{program.phase}</h3>
                <p className="text-sm text-muted-foreground">{program.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Cloud MLM Software for heritage-rich scale-ups
          </h2>
          <p className="text-sm text-muted-foreground">
            Recreate Infinitus-grade precision with automation, AI, and compliance orchestration tuned for multinational wellness teams.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CLOUD_INITIATIVES.map((initiative) => {
            const Icon = initiative.icon;
            return (
              <article
                key={initiative.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{initiative.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{initiative.description}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{initiative.callout}</span>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href={pricingHref}>
              Review pricing
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href={contactHref}>
              Book a heritage strategy call
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
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
