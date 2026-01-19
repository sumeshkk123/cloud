import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { buildLocalizedPath } from "@/lib/locale-links";
import { isSupportedLocale } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ArrowRight,
  ArrowUpRight,
  Droplet,
  Flower2,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  SunMedium
} from "lucide-react";
import { ChartLineUp, ClipboardText, Handshake, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type OilPillar = {
  title: string;
  description: string;
  highlight: string;
  icon: IconType;
};

type JourneyStage = {
  stage: string;
  focus: string;
  enablement: string;
  icon: IconType;
};

type CloudPlay = {
  title: string;
  description: string;
  outcome: string;
  icon: IconType;
};

const CORE_METRICS: Metric[] = [
  {
    label: "Global revenue",
    value: "$1.9B",
    detail: "Essential oils, infused products, and wellness solutions spanning 30+ years.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "1993",
    detail: "Seed to Seal® pioneers headquartered in Lehi, Utah.",
    icon: Sparkles
  },
  {
    label: "Compensation",
    value: "Multi-level model",
    detail: "Rewards product evangelism, customer retention, and leadership cultivation.",
    icon: UsersThree
  },
  {
    label: "Team members",
    value: "2,200 employees",
    detail: "Global farmers, scientists, and experience teams ensuring purity from soil to bottle.",
    icon: Leaf
  },
  {
    label: "Primary market",
    value: "United States",
    detail: "Supported by international farms and partner co-ops across six continents.",
    icon: MapPin
  }
];

const OIL_PILLARS: OilPillar[] = [
  {
    title: "Seed to Seal® sourcing",
    description:
      "From proprietary farms to partner co-ops, every step is audited for soil health, harvesting, and ethical labour.",
    highlight: "Traceability data gives members confidence that every drop is pure and sustainably grown.",
    icon: Leaf
  },
  {
    title: "Single oils & blends",
    description:
      "Therapeutic-grade singles and signature blends address lifestyle goals from immunity to emotional balance.",
    highlight: "Education-packed profiles and diffusing rituals make everyday usage accessible.",
    icon: Droplet
  },
  {
    title: "Infused lifestyle products",
    description:
      "Supplements, personal care, and home solutions integrate essential oils into kitchens, gyms, and nurseries.",
    highlight: "Subscription bundles help families build toxin-free habits with convenience.",
    icon: Flower2
  },
  {
    title: "Sustainability guardianship",
    description:
      "20+ years of regenerative farming, reforestation, and community impact programmes.",
    highlight: "Transparency reports and farm experiences deepen trust and advocacy.",
    icon: SunMedium
  }
];

const JOURNEY_STAGES: JourneyStage[] = [
  {
    stage: "Welcome & education",
    focus:
      "Onboard every household with purity storytelling, product sampling, and lifestyle mapping.",
    enablement: "Interactive guides, QR-coded videos, and compliance-ready claims keep science approachable.",
    icon: ClipboardText
  },
  {
    stage: "Habit layering",
    focus:
      "Blend diffuser routines, wellness protocols, and shareable experiences that build daily loyalty.",
    enablement: "Automation tracks usage patterns and nudges mentors when support is needed.",
    icon: Leaf
  },
  {
    stage: "Leadership stewardship",
    focus:
      "Develop brand stewards who host gatherings, mentor teams, and champion sustainability missions.",
    enablement: "Impact dashboards, recognition pathways, and farm immersion programs forge belief.",
    icon: Handshake
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Seed to Seal® command centre",
    description:
      "Connects farm telemetry, lab results, and certification data into a member-friendly transparency hub.",
    outcome: "Builds unmatched trust and arms advocates with proof during every conversation.",
    icon: Leaf
  },
  {
    title: "Aroma journey designer",
    description:
      "Personalises diffuser routines, wellness stacks, and auto-ship bundles using behavioural insights.",
    outcome: "Increases retention while ensuring product education stays compliant and inspiring.",
    icon: Droplet
  },
  {
    title: "Community vitality radar",
    description:
      "Analyses event engagement, content performance, and mentorship health to guide leader support.",
    outcome: "Keeps communities energised and highlights where to invest coaching time.",
    icon: Sparkles
  },
  {
    title: "Sustainability impact vault",
    description:
      "Captures reforestation metrics, fair wage data, and farm stories for marketing and regulatory needs.",
    outcome: "Transforms stewardship into measurable brand equity that resonates with modern consumers.",
    icon: ShieldCheck
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Young Living Seed to Seal® Enablement";
  const description =
    "Explore how Young Living scales its Seed to Seal® promise with Cloud MLM Software—pairing pure products, transparency, and community-driven growth.";
  const keywords = [
    "Young Living essential oils strategy",
    "Seed to Seal digital enablement",
    "Young Living distributor tools",
    "Cloud MLM Software essential oil platform",
    "sustainable MLM operations"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/young-living", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type YoungLivingPageProps = {
  params: { lang: SupportedLocale };
};

export default function YoungLivingPage({ params }: YoungLivingPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const servicesHref = buildLocalizedPath("/services", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const indexHref = buildLocalizedPath("/mlm-companies", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-slate-950 via-emerald-900 to-teal-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(34,197,94,0.32),transparent_55%),radial-gradient(circle_at_82%_28%,rgba(20,184,166,0.28),transparent_58%),radial-gradient(circle_at_50%_85%,rgba(190,242,100,0.25),transparent_52%)]" />
        <div className="container grid gap-12 xl:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-500/10 px-4 py-1 text-sm font-semibold tracking-wide text-emerald-100">
              Young Living • Seed to Seal® heritage
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Steward pure essential oils with transparency, technology, and community-led care.
            </h1>
            <p className="text-base text-emerald-50/80">
              Young Living has spent more than two decades pairing regenerative farming with rigorous testing to deliver authentic
              essential oils. Cloud MLM Software ensures the story of purity, sustainability, and wellness is delivered consistently
              through every leader, member, and region.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  Explore the Seed to Seal® cockpit
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-emerald-200/60 text-emerald-100 hover:bg-emerald-500/10">
                <Link href={pricingHref}>
                  Architect my essential oil stack
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-emerald-100 underline underline-offset-4 hover:bg-white/10">
                <Link href={indexHref}>
                  Return to MLM company index
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-3 text-sm text-emerald-50/80">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-200" aria-hidden />
                Lehi, Utah • Partner farms across the United States, Ecuador, France, Oman, and beyond
              </p>
              <p>
                “Purity is proven when technology, stewardship, and community come together to tell the same story.”
              </p>
            </div>
          </div>
          <aside className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <div className="space-y-2 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">Vital metrics</p>
              <h2 className="text-2xl font-semibold text-white">Young Living pulse</h2>
            </div>
            <div className="grid gap-4">
              {CORE_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-black/25 p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-emerald-200/40 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-emerald-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-100/80">{metric.label}</p>
                        <p className="text-lg font-semibold text-white">{metric.value}</p>
                      </div>
                    </div>
                    <p className="text-sm text-emerald-50/80">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 rounded-3xl border border-border/60 bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-10 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Beacon of quality and integrity</h2>
            <p className="text-base text-muted-foreground">
              Young Living’s Seed to Seal® commitment safeguards purity through sustainable farming, ethical sourcing, and meticulous
              distillation. The result is essential oils with potency stakeholders can feel and share confidently.
            </p>
            <p className="text-base text-muted-foreground">
              Families integrate oils, blends, and infused products into daily routines for physical, emotional, and mental support.
              Cloud MLM Software keeps distributors aligned with compliant education, transparent data, and immersive experiences.
            </p>
          </div>
          <div className="grid gap-4 rounded-3xl border border-primary/10 bg-primary/5 p-6 dark:border-primary/10 dark:bg-primary/10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80 dark:text-primary/70">Purity lens</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Leaf className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Regenerative agriculture keeps oils potent while protecting the earth for future harvests.
              </li>
              <li className="flex items-start gap-2">
                <Droplet className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Lab testing and traceability records validate quality claims in real time.
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                Compliance guardrails ensure every testimonial and class honours regulatory standards.
              </li>
            </ul>
            <div>
              <Button asChild variant="secondary">
                <Link href={servicesHref}>
                  Explore purity enablement
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="space-y-4 text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-border/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Essential oil pillars
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Experiences that bring Seed to Seal® to every home
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-muted-foreground">
            Combine heritage farming, product innovation, and sustainability storytelling to deepen belief and loyalty.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {OIL_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/80"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                  {pillar.highlight}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
          <div className="space-y-4 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/80">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Member journey orchestration</h2>
            <p className="text-sm text-muted-foreground">
              Empower distributors to nurture loyalty from first drop to lifelong stewardship.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 hidden border-l border-primary/30 md:block" aria-hidden />
            <div className="space-y-6">
              {JOURNEY_STAGES.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <article
                    key={stage.stage}
                    className="relative grid gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75 md:grid-cols-[auto_1fr]"
                  >
                    <div className="flex items-center gap-4 md:flex-col md:items-start">
                      <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Stage {index + 1}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{stage.stage}</h3>
                      <p className="text-sm text-muted-foreground">{stage.focus}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                        {stage.enablement}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10 rounded-3xl border border-border/60 bg-background p-10 shadow-sm dark:border-border/40 dark:bg-slate-950/85">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Cloud MLM Software plays</h2>
            <p className="text-sm text-muted-foreground">
              Modernise essential oil operations without losing the heart of stewardship and community.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Build my Young Living plan
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={demoHref}>
                  Schedule a guided demo
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
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/80"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                    <p className="text-sm text-muted-foreground">{play.description}</p>
                  </div>
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

