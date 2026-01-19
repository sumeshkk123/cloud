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
  Home,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  UtensilsCrossed,
  Users2,
  Warehouse
} from "lucide-react";
import { ChartLineUp, HandHeart, Notebook, UsersThree, UsersFour } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Highlight = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type ConsultantMoment = {
  title: string;
  summary: string;
  takeaway: string;
  icon: IconType;
};

type PlatformCapability = {
  title: string;
  description: string;
  payoff: string;
  icon: IconType;
};

const PRINCESS_HOUSE_METRICS: Metric[] = [
  {
    label: "Revenue",
    value: "$161M+",
    detail: "Heritage cookware and home décor brand celebrating 60+ years of entertaining.",
    icon: BarChart3
  },
  {
    label: "Founded",
    value: "1963 · Charlie Collis",
    detail: "Built around uplifting hosts with elegant, durable kitchen experiences.",
    icon: Home
  },
  {
    label: "Community",
    value: "186+ employees & nationwide consultants",
    detail: "Home-enthusiast leaders who host gatherings and share culinary creativity.",
    icon: Users2
  },
  {
    label: "Primary market",
    value: "United States",
    detail: "Thriving in multicultural households with bilingual support and tailored programs.",
    icon: Warehouse
  },
  {
    label: "Product focus",
    value: "Cookware · Glassware · Wellness",
    detail: "From stainless classics to mindful nutrition systems that elevate daily routines.",
    icon: UtensilsCrossed
  },
  {
    label: "Sales motion",
    value: "In-home & virtual parties",
    detail: "Consultants co-create memorable experiences that convert guests into lifelong fans.",
    icon: PartyPopper
  }
];

const PRINCESS_HOUSE_HIGHLIGHTS: Highlight[] = [
  {
    title: "Crafted for modern hosts",
    description:
      "Princess House blends timeless design with contemporary performance, giving families cookware and décor that stands up to everyday celebrations.",
    proof: "Customers cite heirloom quality as a top reason for repeat purchases and referrals.",
    icon: Sparkles
  },
  {
    title: "Community-first selling",
    description:
      "Gatherings revolve around recipes, organization tips, and wellness rituals—transforming sales into friendship-fuelled experiences.",
    proof: "Event follow-up data shows higher conversion when consultants personalise menus and gifting.",
    icon: HandHeart
  },
  {
    title: "Learning that unlocks confidence",
    description:
      "Training programmes cover culinary storytelling, merchandising, and digital party production so every representative feels stage-ready.",
    proof: "Rising stars progress faster when content is on-demand, bilingual, and analytics-informed.",
    icon: Notebook
  }
];

const HOST_MOMENTS: ConsultantMoment[] = [
  {
    title: "Immersive tasting journeys",
    summary:
      "Invite guests into interactive kitchens with step-by-step guides, smart timers, and ingredient swaps tailored to dietary needs.",
    takeaway: "AI-curated menus reduce prep time and drive product bundling during checkout.",
    icon: UtensilsCrossed
  },
  {
    title: "Lifestyle storytelling",
    summary:
      "Consultants capture social-ready content—pantry makeovers, tablescape inspiration, and home wellness tips—that keep engagement high between shows.",
    takeaway: "Editable templates and scheduling tools boost consistency across local teams.",
    icon: UsersThree
  },
  {
    title: "Recognition with heart",
    summary:
      "Monthly showcases spotlight hosts, top sellers, and community impact, reinforcing Princess House’s culture of generosity.",
    takeaway: "Automated badges and celebration kits sustain momentum long after the event.",
    icon: UsersFour
  }
];

const CLOUD_PRINCESS_CAPABILITIES: PlatformCapability[] = [
  {
    title: "AI party producers",
    description:
      "Design agendas, shopping lists, and bilingual scripts in minutes—grounded in guest preferences, inventory, and seasonal campaigns.",
    payoff: "Make every gathering feel bespoke while keeping consultants focused on hospitality.",
    icon: ChartLineUp
  },
  {
    title: "Smart inventory orchestration",
    description:
      "Synchronise warehouse data with consultant carts, pop-up shops, and subscription clubs for zero-surprise fulfilment.",
    payoff: "Delight hosts with right-time shipping updates and curated post-party offers.",
    icon: ShieldCheck
  },
  {
    title: "365-day relationship engine",
    description:
      "Automate thank-you journeys, recipe drops, and milestone gifting across email, SMS, and community hubs.",
    payoff: "Extend party-day joy into year-round loyalty with consistent, human storytelling.",
    icon: HandHeart
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Princess House MLM Company Overview & Entertaining Enablement";
  const description =
    "See how Princess House elevates home entertaining through community-driven selling—and how Cloud MLM Software automates party planning, consultant growth, and guest loyalty.";
  const keywords = [
    "Princess House MLM review",
    "Princess House consultant tools",
    "Home party direct sales software",
    "Cloud MLM Software for cookware brands",
    "AI party planning platform"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/princess-house", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PrincessHousePageProps = {
  params: { lang: SupportedLocale };
};

export default function PrincessHousePage({ params }: PrincessHousePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-[#fffdf6] via-[#fff7f0] to-[#f6fbff] py-20 dark:border-border/40 dark:from-slate-950/70 dark:via-slate-950 dark:to-amber-950/40">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,186,8,0.18),transparent_55%),radial-gradient(circle_at_82%_30%,rgba(16,185,129,0.16),transparent_60%),radial-gradient(circle_at_48%_85%,rgba(37,99,235,0.15),transparent_65%)]"
          aria-hidden
        />
        <div className="container relative z-10 grid gap-16 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.6fr)]">
          <div className="space-y-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-600 dark:text-amber-200">
              <span className="rounded-full border border-amber-200/60 bg-white/80 px-4 py-1 shadow-sm backdrop-blur dark:border-white/20 dark:bg-slate-950/60">
                Home entertaining icon
              </span>
              <span className="rounded-full border border-emerald-200/60 bg-emerald-50/80 px-4 py-1 text-emerald-600 shadow-sm backdrop-blur dark:border-emerald-400/40 dark:bg-emerald-900/40 dark:text-emerald-200">
                People-first culture
              </span>
              <span className="rounded-full border border-blue-200/60 bg-blue-50/80 px-4 py-1 text-blue-600 shadow-sm backdrop-blur dark:border-blue-400/40 dark:bg-blue-900/40 dark:text-blue-200">
                Elevated party experiences
              </span>
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Princess House: joyful kitchens, purpose-driven consultants, and unforgettable gatherings.
              </h1>
              <p className="text-base text-muted-foreground">
                Princess House empowers hosts to turn everyday meals into cherished moments. Its consultants curate cookware, décor, and wellness
                essentials with warmth and expertise—and Cloud MLM Software keeps each celebration organised, insightful, and ready to scale.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Build your entertaining HQ
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={pricingHref}>
                  Compare platform tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="hover:bg-amber-100/60 dark:hover:bg-amber-500/20">
                <Link href={demoHref}>
                  Watch an AI party demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 -z-10 rounded-[3rem] border border-amber-200/70 bg-white/85 shadow-[0_48px_120px_-70px_rgba(245,158,11,0.4)] backdrop-blur dark:border-white/15 dark:bg-slate-950/80" aria-hidden />
            <div className="relative grid gap-5 rounded-[2.6rem] p-8">
              {PRINCESS_HOUSE_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex flex-col gap-3 rounded-3xl border border-transparent bg-gradient-to-r from-white/95 via-white/80 to-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:border-amber-300/70 hover:shadow-lg dark:from-slate-900/85 dark:via-slate-900/60 dark:to-slate-900/30"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-200">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">{metric.label}</h2>
                    </div>
                    <p className="text-xl font-semibold text-foreground">{metric.value}</p>
                    <p className="text-sm text-muted-foreground">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-10 rounded-[3rem] border border-border/60 bg-gradient-to-br from-background to-amber-50/60 p-10 shadow-lg shadow-amber-100/40 dark:border-border/40 dark:from-slate-950 dark:to-slate-950/70">
        <div className="space-y-4 md:max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/60 bg-amber-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-600 dark:border-amber-400/40 dark:bg-amber-900/40 dark:text-amber-200">
            House highlights
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Elegant products, heartfelt service, and a community that feels like family.
          </h2>
          <p className="text-sm text-muted-foreground">
            Princess House celebrates culinary creativity and home wellness. Our platform amplifies that celebration with data-backed insights,
            streamlined planning, and AI-powered storytelling for every consultant.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PRINCESS_HOUSE_HIGHLIGHTS.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <article
                key={highlight.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-amber-200/40 bg-background/95 p-6 transition hover:-translate-y-1 hover:border-amber-400/70 hover:shadow-xl dark:border-amber-400/30 dark:bg-slate-950/85"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{highlight.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
                <p className="text-xs font-medium text-amber-600 dark:text-amber-200">{highlight.proof}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-background via-background to-emerald-50 py-20 dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-900/40">
        <div
          className="absolute inset-x-0 top-16 h-60 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_65%)] blur-3xl dark:opacity-70"
          aria-hidden
        />
        <div className="container relative z-10 space-y-12">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600 dark:border-emerald-400/40 dark:bg-emerald-900/40 dark:text-emerald-200">
              Consultant and host moments
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Capture the heart of every party with moments that matter.
            </h2>
            <p className="text-sm text-muted-foreground">
              Princess House leaders combine culinary passion with thoughtful follow-through. Cloud MLM Software equips them with the planning,
              automation, and recognition tools that keep celebrations thriving.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {HOST_MOMENTS.map((moment) => {
              const Icon = moment.icon;
              return (
                <article
                  key={moment.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-emerald-200/40 bg-white/85 p-6 shadow-lg shadow-emerald-200/40 backdrop-blur dark:border-emerald-400/30 dark:bg-slate-950/85 dark:shadow-emerald-900/40"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-200">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{moment.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{moment.summary}</p>
                  <p className="rounded-2xl border border-emerald-200/60 bg-emerald-50/70 p-4 text-xs text-emerald-600 dark:border-emerald-400/30 dark:bg-emerald-900/40 dark:text-emerald-200">
                    {moment.takeaway}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary dark:border-primary/40 dark:bg-primary/15">
            Cloud MLM Software advantage
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Make Princess House the world’s most effortless entertaining brand.
          </h2>
          <p className="text-sm text-muted-foreground">
            From prospecting to post-party loyalty, Cloud MLM Software keeps every consultant organised, compliant, and ready to delight hosts with
            richer experiences.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CLOUD_PRINCESS_CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article
                key={capability.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/50 bg-background/95 p-6 shadow-md transition hover:border-primary/50 hover:shadow-xl dark:border-border/40 dark:bg-slate-950/85"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
                <p className="rounded-2xl border border-primary/20 bg-primary/5 p-4 text-xs text-primary dark:border-primary/30 dark:bg-primary/10">
                  {capability.payoff}
                </p>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={modulesHref}>
              Browse event-ready modules
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={contactHref}>
              Tailor your Princess House roadmap
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

