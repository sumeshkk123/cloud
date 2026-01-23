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
  Brush,
  Building2,
  Crown,
  Droplet,
  FlaskConical,
  HandshakeIcon,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  Users
} from "lucide-react";
import { GlobeHemisphereWest, Leaf, Palette, ShoppingBag } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Stat = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Highlight = {
  title: string;
  description: string;
  signal: string;
  icon: IconType;
};

type Experience = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type PlatformPlay = {
  title: string;
  description: string;
  payoff: string;
  icon: IconType;
};

const COMPANY_STATS: Stat[] = [
  {
    label: "Revenue",
    value: "$1.23B",
    detail: "Brazil’s beauty powerhouse ranked #17 on the DSN Global 100 list.",
    icon: Crown
  },
  {
    label: "Founded",
    value: "1977",
    detail: "Decades blending Brazilian creativity with global fragrance expertise.",
    icon: Building2
  },
  {
    label: "Headquarters",
    value: "São José dos Pinhais, Paraná",
    detail: "Operational base orchestrating product innovation and Field experience.",
    icon: MapPin
  },
  {
    label: "Primary market",
    value: "Brazil",
    detail: "A loyal consumer base that loves storytelling, premium sensoriality, and sustainability.",
    icon: GlobeHemisphereWest
  },
  {
    label: "Compensation",
    value: "Multi-level structure",
    detail: "Rewards boutique-style service, customer acquisition, and leadership mentoring.",
    icon: ShieldCheck
  },
  {
    label: "Consultant community",
    value: "Extensive network",
    detail: "Beauty specialists delivering personalised rituals in neighbourhoods nationwide.",
    icon: Users
  },
  {
    label: "Product focus",
    value: "Fragrance · Makeup · Haircare",
    detail: "Meticulously crafted collections inspired by Brazilian biodiversity.",
    icon: Palette
  },
  {
    label: "Sales method",
    value: "Person-to-person retailing",
    detail: "Consultants curate looks, host experience labs, and drive omnichannel loyalty.",
    icon: HandshakeIcon
  }
];

const FRAGRANCE_FOUNDATIONS: Highlight[] = [
  {
    title: "Perfumer’s craftsmanship",
    description: "Iconic scents developed with master perfumers capture Brazil’s landscapes and energy.",
    signal: "Limited editions and customizable layering keep the portfolio fresh and collectable.",
    icon: Sparkles
  },
  {
    title: "Makeup artistry",
    description: "Inclusive shade ranges and skincare-infused formulas enhance natural radiance.",
    signal: "Consultants host workshops and tutorials that celebrate individuality.",
    icon: Brush
  },
  {
    title: "Haircare rituals",
    description: "Shampoos, masks, and styling lines nourish textured, treated, and everyday hair.",
    signal: "Ingredient stories—from Amazonian oils to plant proteins—drive authentic engagement.",
    icon: Droplet
  }
];

const CUSTOMER_EXPERIENCES: Experience[] = [
  {
    title: "Boutique storytelling",
    description: "Pop-up ateliers and beauty bars immerse clients in fragrance journeys and product trials.",
    proof: "Experiential retail generates strong referral loops and social buzz.",
    icon: ShoppingBag
  },
  {
    title: "Sustainable commitments",
    description: "Eco-refill stations, recycled packaging, and cruelty-free formulas build trust.",
    proof: "Corporate ESG reporting and Boticário Foundation projects reinforce environmental leadership.",
    icon: Leaf
  },
  {
    title: "Community empowerment",
    description: "Training tracks and entrepreneurship programs help consultants scale responsibly.",
    proof: "Microcredit and digital enablement initiatives expand access across Brazil’s regions.",
    icon: Users
  }
];

const CLOUD_ENABLEMENT: PlatformPlay[] = [
  {
    title: "Personalised fragrance curation",
    description: "Digitise scent profiling, sampling journeys, and lookbooks for every consultant.",
    payoff: "Deliver luxury-grade recommendations online with AI-backed precision.",
    icon: Sparkles
  },
  {
    title: "Sustainability dashboards",
    description: "Track refill adoption, carbon offsets, and community initiatives in real time.",
    payoff: "Celebrate eco milestones and keep ESG commitments transparent.",
    icon: Leaf
  },
  {
    title: "Omnichannel order orchestration",
    description: "Unify mobile orders, WhatsApp commerce, and pop-up events inside one platform.",
    payoff: "Give consultants the tools to serve customers seamlessly across touchpoints.",
    icon: GlobeHemisphereWest
  },
  {
    title: "Compliance-ready compensation",
    description: "Model tiered commissions, leadership pools, and promo campaigns without manual stress.",
    payoff: "Maintain trust with accurate payouts and proactive compliance alerts.",
    icon: ShieldCheck
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "O Boticário MLM Company Overview";
  const description =
    "Discover how O Boticário’s $1.23B beauty empire blends fragrance artistry, sustainability, and people-first retailing—and see how Cloud MLM Software scales similar premium experiences.";
  const keywords = [
    "O Boticario MLM review",
    "O Boticario compensation plan",
    "Brazilian cosmetics direct selling",
    "Cloud MLM Software for beauty brands",
    "AI-enabled fragrance MLM platform"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/o-boticario", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type OBoticarioPageProps = {
  params: { lang: SupportedLocale };
};

export default function OBoticarioPage({ params }: OBoticarioPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-[#140704] via-[#2b0f0c] to-[#401b0e] py-20 text-white dark:border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(234,179,8,0.35),transparent_55%),radial-gradient(circle_at_78%_24%,rgba(249,115,22,0.28),transparent_60%),radial-gradient(circle_at_46%_88%,rgba(59,130,246,0.2),transparent_65%)]" aria-hidden />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.55fr)]">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1">Rank #17 · Global 100</span>
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1">Brazilian beauty heritage</span>
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                O Boticário: fragrance storytelling, sustainable luxuries, and empowered consultants.
              </h1>
              <p className="text-base text-slate-200/80">
                Founded in Curitiba in 1977, O Boticário transforms Brazilian biodiversity into beloved perfumes, makeup, and haircare rituals.
                Consultants curate tactile, personalised experiences that keep customers returning season after season.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Build your beauty platform
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <Link href={pricingHref}>
                  Explore pricing
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-amber-200 hover:bg-amber-400/15">
                <Link href={demoHref}>
                  Request an AI demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 -z-10 rounded-[36px] border border-white/20 bg-white/10 shadow-[0_40px_80px_-50px_rgba(251,191,36,0.55)] backdrop-blur" aria-hidden />
            <div className="relative grid gap-6 rounded-[32px] border border-white/20 bg-white/10 p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-100">Company snapshot</span>
              <div className="grid gap-4 sm:grid-cols-2">
                {COMPANY_STATS.slice(0, 4).map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <article key={stat.label} className="flex flex-col gap-3 rounded-3xl border border-white/15 bg-black/25 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wide text-amber-100/80">{stat.label}</span>
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-400/15 text-amber-100">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                      </div>
                      <p className="text-2xl font-semibold text-white">{stat.value}</p>
                      <p className="text-xs text-slate-200/70">{stat.detail}</p>
                    </article>
                  );
                })}
              </div>
              <div className="rounded-3xl border border-white/15 bg-black/20 p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-white/80">Experience drivers</h2>
                <div className="mt-4 grid gap-4">
                  {COMPANY_STATS.slice(4).map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                        <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400/15 text-amber-100">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white">{stat.value}</p>
                          <p className="text-xs text-slate-200/70">{stat.detail}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">What makes O Boticário irresistible</h2>
          <p className="text-sm text-muted-foreground">
            The brand is rooted in sensorial storytelling. Consultants translate product artistry into rituals that delight, educate, and retain
            customers across Brazil.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FRAGRANCE_FOUNDATIONS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md dark:border-border/40 dark:bg-slate-950/80"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/15 dark:text-primary-foreground">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <p className="text-xs font-medium text-primary/80 dark:text-primary/70">{item.signal}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-primary/5 via-background to-amber-50 py-20 dark:border-border/40 dark:from-primary/10 dark:via-slate-950 dark:to-amber-950/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(244,172,54,0.18),transparent_55%),radial-gradient(circle_at_72%_72%,rgba(59,130,246,0.18),transparent_55%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.8fr)]">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary dark:border-primary/40 dark:bg-primary/15">
              Customer experiences
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Moments that keep beauty lovers loyal</h2>
            <p className="text-sm text-muted-foreground">
              O Boticário’s difference lies in high-touch experiences that honour culture, sustainability, and entrepreneurship. These moments
              form the heart of every growth story.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {CUSTOMER_EXPERIENCES.map((experience) => {
              const Icon = experience.icon;
              return (
                <article
                  key={experience.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-primary/20 bg-background/95 p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md dark:border-primary/30 dark:bg-slate-950/80"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{experience.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{experience.description}</p>
                  <p className="rounded-2xl border border-primary/20 bg-primary/10 p-4 text-xs text-primary dark:border-primary/30 dark:bg-primary/15 dark:text-primary-foreground">
                    {experience.proof}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Scale O Boticário-style excellence with Cloud MLM Software</h2>
          <p className="text-sm text-muted-foreground">
            Our platform helps beauty innovators digitise bespoke retail experiences, sustain eco initiatives, and manage growth with accuracy
            and confidence.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CLOUD_ENABLEMENT.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/50 bg-background/95 p-6 shadow-sm transition hover:border-primary/50 hover:shadow-md dark:border-border/40 dark:bg-slate-950/80"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{play.description}</p>
                <p className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-xs text-primary dark:border-primary/30 dark:bg-primary/10">
                  {play.payoff}
                </p>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={modulesHref}>
              Explore experiential modules
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={contactHref}>
              Partner with our specialists
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

