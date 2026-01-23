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
  Beaker,
  Building2,
  Droplet,
  Leaf,
  Palette,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wand
} from "lucide-react";
import { GlobeHemisphereEast, HandSwipeRight, Lighthouse } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Craft = {
  title: string;
  description: string;
  insight: string;
  icon: IconType;
};

type Innovation = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type PlatformEdge = {
  title: string;
  description: string;
  payoff: string;
  icon: IconType;
};

const BRAND_STATS: Stat[] = [
  {
    label: "Revenue",
    value: "$277M",
    detail: "Direct Selling News Global 100 places Noevir at #47 with strong skincare and wellness sales.",
    icon: Building2
  },
  {
    label: "Founded",
    value: "1964",
    detail: "Six decades blending Japanese botanical wisdom with advanced laboratory science.",
    icon: Lighthouse
  },
  {
    label: "Headquarters",
    value: "Tokyo, Japan",
    detail: "The epicentre for global R&D, product artistry, and customer service excellence.",
    icon: GlobeHemisphereEast
  },
  {
    label: "Primary market",
    value: "Japan",
    detail: "Beauty-forward consumers who value precision, ritual, and elevated experiences.",
    icon: Target
  },
  {
    label: "Team",
    value: "1,017 experts",
    detail: "Researchers, formulators, and consultants committed to natural elegance.",
    icon: Users
  },
  {
    label: "Compensation",
    value: "Single-level elegance",
    detail: "Rewards premium service, customer satisfaction, and artistry-led selling.",
    icon: ShieldCheck
  },
  {
    label: "Product focus",
    value: "Skin · Body · Nutritional care",
    detail: "Botanical ingredients paired with precise Japanese manufacturing standards.",
    icon: Leaf
  },
  {
    label: "Sales motion",
    value: "Consultative person-to-person",
    detail: "Beauty advisors translate research into personalised rituals for clients.",
    icon: HandSwipeRight
  }
];

const BEAUTY_CRAFTS: Craft[] = [
  {
    title: "Botanical artistry",
    description: "High-performance botanicals, rare extracts, and gentle actives work in harmony with the skin.",
    insight: "Consultants personalise regimens based on climate, sensitivity, and seasonal shifts.",
    icon: Leaf
  },
  {
    title: "Sensorial rituals",
    description: "Textures, fragrances, and layering techniques transform everyday routines into self-care ceremonies.",
    insight: "Experiential storytelling keeps loyal customers engaged and excited about launches.",
    icon: Palette
  },
  {
    title: "Precision assurance",
    description: "Transparent sourcing and meticulous testing reinforce trust in every collection.",
    insight: "Customers receive confident guidance backed by decades of lab documentation.",
    icon: ShieldCheck
  }
];

const INNOVATION_THEMES: Innovation[] = [
  {
    title: "Nature-meets-science breakthroughs",
    description: "Labs combine traditional botanicals with advanced delivery systems to unlock fast yet gentle results.",
    proof: "Serums and treatment oils leverage proprietary encapsulation to maximise active absorption.",
    icon: Beaker
  },
  {
    title: "Holistic product families",
    description: "Coordinated skin, body, and nutrition lines deliver 360° beauty—from glow to vitality.",
    proof: "Synergistic set design makes it simple for consultants to prescribe layered regimens.",
    icon: Droplet
  },
  {
    title: "Timeless Japanese elegance",
    description: "Minimalist packaging and elevated retail experiences position Noevir as a prestige authority.",
    proof: "Boutique studios double as education hubs, elevating the brand’s premium perception.",
    icon: Sparkles
  }
];

const PLATFORM_ENABLERS: PlatformEdge[] = [
  {
    title: "Design bespoke beauty journeys",
    description: "Digitise client consultations, ingredient education, and ritual reminders.",
    payoff: "Deliver the same premium concierge care online that fuels loyalty in-person.",
    icon: Wand
  },
  {
    title: "Masterclass-ready content",
    description: "Create learning paths for advisors covering new launches, ingredient science, and artistry.",
    payoff: "Keep field teams confident and compliant while amplifying brand storytelling.",
    icon: Palette
  },
  {
    title: "Transparent single-level rewards",
    description: "Surface KPIs for service excellence, customer retention, and curated upselling.",
    payoff: "Celebrate artistry and accountability without sacrificing governance.",
    icon: ShieldCheck
  },
  {
    title: "Premium experience analytics",
    description: "Monitor satisfaction, product feedback, and ritual adoption with AI insights.",
    payoff: "Use data to refine launches, inform R&D, and deepen customer devotion.",
    icon: Sparkles
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Noevir Co. Ltd. MLM Company Profile";
  const description =
    "Examine Noevir’s $277M beauty house—Tokyo craftsmanship, botanical innovation, and single-level elegance—and learn how Cloud MLM Software elevates prestige direct selling brands.";
  const keywords = [
    "Noevir MLM review",
    "Noevir compensation structure",
    "Noevir skincare innovation",
    "Cloud MLM Software for beauty brands",
    "AI enablement for Japanese cosmetic MLM"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/noevir-coltd", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type NoevirPageProps = {
  params: { lang: SupportedLocale };
};

export default function NoevirPage({ params }: NoevirPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-white py-20 dark:border-border/40 dark:bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(244,114,182,0.16),transparent_55%),radial-gradient(circle_at_60%_40%,rgba(59,130,246,0.16),transparent_60%),radial-gradient(circle_at_88%_70%,rgba(56,189,248,0.14),transparent_65%)]" aria-hidden />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.55fr)]">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/70">
              <span className="rounded-full border border-foreground/20 bg-white/80 px-4 py-1 shadow-sm dark:border-white/20 dark:bg-white/10">
                Rank #47 · Global 100
              </span>
              <span className="rounded-full border border-foreground/20 bg-white/80 px-4 py-1 shadow-sm dark:border-white/20 dark:bg-white/10">
                Tokyo Beauty Heritage
              </span>
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Noevir Co. Ltd: prestige botanical beauty crafted for modern direct selling.
              </h1>
              <p className="text-base text-muted-foreground">
                Since 1964, Noevir has transformed natural ingredients into innovative skincare, body care, and nutrition essentials.
                Their single-level model pairs concierge service with artful storytelling, making every consultant a beauty curator.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Co-create your prestige platform
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={pricingHref}>
                  Review tailored pricing
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-primary hover:bg-primary/10">
                <Link href={demoHref}>
                  Request an immersive demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 -z-10 rounded-[36px] border border-foreground/10 bg-white/70 shadow-[0_40px_80px_-50px_rgba(15,23,42,0.45)] backdrop-blur dark:border-white/10 dark:bg-slate-950/80" aria-hidden />
            <div className="relative grid gap-6 rounded-[32px] p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">Brand snapshot</span>
              <div className="grid gap-4">
                {BRAND_STATS.slice(0, 4).map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <article key={stat.label} className="rounded-3xl border border-foreground/10 bg-white/85 p-5 dark:border-white/15 dark:bg-slate-900/80">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{stat.label}</span>
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                      </div>
                      <p className="mt-3 text-2xl font-semibold text-foreground">{stat.value}</p>
                      <p className="mt-2 text-xs text-muted-foreground">{stat.detail}</p>
                    </article>
                  );
                })}
              </div>
              <div className="rounded-3xl border border-foreground/10 bg-gradient-to-br from-white via-primary/5 to-white p-6 dark:border-white/15 dark:from-slate-900 dark:via-primary/10 dark:to-slate-900">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">Signature product focus</h2>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {BRAND_STATS.slice(4).map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <li key={stat.label} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{stat.value}</p>
                          <p className="text-xs text-muted-foreground">{stat.detail}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Beauty craftsmanship that inspires loyalty</h2>
          <p className="text-sm text-muted-foreground">
            Noevir consultants curate experiences that celebrate natural beauty and meticulous care. These pillars keep customers engaged
            and elevate the brand’s reputation.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BEAUTY_CRAFTS.map((craft) => {
            const Icon = craft.icon;
            return (
              <article
                key={craft.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md dark:border-border/40 dark:bg-slate-950/80"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/15 dark:text-primary-foreground">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{craft.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{craft.description}</p>
                <p className="text-xs font-medium text-primary/80 dark:text-primary/70">{craft.insight}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-primary/5 via-background to-rose-50 py-20 dark:border-border/40 dark:from-primary/10 dark:via-slate-950 dark:to-rose-950/50">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/20 via-transparent to-transparent opacity-80 dark:from-primary/25" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,0.75fr)]">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary dark:border-primary/40 dark:bg-primary/15">
              Innovation motifs
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Where science elevates natural beauty</h2>
            <p className="text-sm text-muted-foreground">
              Noevir’s laboratories continually push the boundaries of clean, effective skincare—balancing botanical purity with cutting-edge
              technology and design.
            </p>
          </div>
          <div className="grid gap-6">
            {INNOVATION_THEMES.map((theme, index) => {
              const Icon = theme.icon;
              return (
                <article
                  key={theme.title}
                  className="relative rounded-3xl border border-primary/20 bg-background/95 p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md dark:border-primary/30 dark:bg-slate-950/80"
                >
                  <span className="absolute -left-9 top-6 text-4xl font-semibold text-primary/25">{String(index + 1).padStart(2, "0")}</span>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{theme.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{theme.description}</p>
                  <p className="mt-3 rounded-2xl border border-primary/20 bg-primary/10 p-4 text-xs text-primary dark:border-primary/30 dark:bg-primary/15 dark:text-primary-foreground">
                    {theme.proof}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Scaling the Noevir standard with Cloud MLM Software</h2>
          <p className="text-sm text-muted-foreground">
            Extend Noevir’s refined approach into digital channels. Our platform honours the artistry while equipping teams with intelligent,
            data-driven operations.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {PLATFORM_ENABLERS.map((edge) => {
            const Icon = edge.icon;
            return (
              <article
                key={edge.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/50 bg-background/95 p-6 shadow-sm transition hover:border-primary/50 hover:shadow-md dark:border-border/40 dark:bg-slate-950/80"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{edge.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{edge.description}</p>
                <p className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-xs text-primary dark:border-primary/30 dark:bg-primary/10">
                  {edge.payoff}
                </p>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={modulesHref}>
              Discover luxury-ready modules
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={contactHref}>
              Build your transformation roadmap
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

