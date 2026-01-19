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
  HandHeart,
  HandshakeIcon,
  Heart,
  MapPin,
  Palette,
  ShieldCheck,
  Sparkles,
  Target,
  Users
} from "lucide-react";
import { Cpu, Gift, Leaf, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Snapshot = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Delight = {
  title: string;
  description: string;
  signal: string;
  icon: IconType;
};

type CommunityPlay = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type PlatformCapability = {
  title: string;
  description: string;
  payoff: string;
  icon: IconType;
};

const POSH_SNAPSHOT: Snapshot[] = [
  {
    label: "Revenue",
    value: "$100M+",
    detail: "Ranked #87 on the DSN Global 100 thanks to loyal pampering communities.",
    icon: Sparkles
  },
  {
    label: "Founded",
    value: "2011",
    detail: "Built around affordable indulgence and hand-crafted self-care rituals.",
    icon: Gift
  },
  {
    label: "Headquarters",
    value: "Salt Lake City, Utah",
    detail: "Creative studio where product innovation, distribution, and community collide.",
    icon: MapPin
  },
  {
    label: "Primary market",
    value: "United States",
    detail: "Consultants pamper neighbourhoods with spa experiences and self-care parties.",
    icon: Target
  },
  {
    label: "Consultant community",
    value: "Thousands of brand advocates",
    detail: "Enthusiasts who lead with authenticity and enthusiasm.",
    icon: Users
  },
  {
    label: "Product focus",
    value: "Skin & body care treats",
    detail: "Small-batch scrubs, masks, and body butters crafted with indulgent ingredients.",
    icon: Leaf
  },
  {
    label: "Compensation",
    value: "Multi-level with perks",
    detail: "Rewards personal volume, party experiences, and leadership mentoring.",
    icon: ShieldCheck
  },
  {
    label: "Sales method",
    value: "Person-to-person celebrations",
    detail: "Pop-up parties, sip-and-spa events, and social commerce experiences.",
    icon: HandshakeIcon
  }
];

const POSH_DELIGHTS: Delight[] = [
  {
    title: "Playful pampering",
    description: "Whipped body butters, fizzy bath bars, and quirky product names keep experiences joyful.",
    signal: "Consultants tailor pamper bundles for girls’ nights, gifting, and solo self-care.",
    icon: Brush
  },
  {
    title: "Clean, conscious ingredients",
    description: "Cruelty-free formulas, responsibly sourced botanicals, and transparently labelled goods.",
    signal: "Ingredient spotlights give consultants content for education and social storytelling.",
    icon: Leaf
  },
  {
    title: "Daily self-love rituals",
    description: "Products encourage mini breaks that restore energy and confidence.",
    signal: "Habit prompts and challenge calendars keep customers coming back every season.",
    icon: Heart
  }
];

const COMMUNITY_PLAYS: CommunityPlay[] = [
  {
    title: "Consultant camaraderie",
    description: "Training, virtual rallies, and recognition programs celebrate every milestone.",
    proof: "Leader-led masterminds and supportive groups keep momentum high.",
    icon: UsersThree
  },
  {
    title: "Event-first experiences",
    description: "Home spa parties and pop-up pampering bars drive trial and word-of-mouth.",
    proof: "Sampling rituals increase conversion and build memorable traditions.",
    icon: Palette
  },
  {
    title: "Kindness culture",
    description: "Brand messaging uplifts self-worth and fosters giving-back initiatives.",
    proof: "Charity collaborations and community drives reinforce purpose beyond product sales.",
    icon: HandHeart
  }
];

const CLOUD_POSH_CAPABILITIES: PlatformCapability[] = [
  {
    title: "Curated pamper journeys",
    description: "Design AI-assisted quiz flows that build personalised self-care bundles.",
    payoff: "Empower consultants to deliver boutique recommendations online or in-person.",
    icon: Sparkles
  },
  {
    title: "Party performance dashboards",
    description: "Track bookings, RSVPs, sales, and follow-ups for every event style.",
    payoff: "Give leaders visibility to coach for consistent, joyful party ROI.",
    icon: Palette
  },
  {
    title: "Kindness-driven rewards",
    description: "Align incentives with customer love—referrals, loyalty, and service moments.",
    payoff: "Celebrate behaviours that strengthen communities and client retention.",
    icon: HandHeart
  },
  {
    title: "Flexible social commerce ops",
    description: "Automate order flows, inventory drops, and subscription treats inside one hub.",
    payoff: "Let consultants focus on human connection while the platform handles logistics.",
    icon: Cpu
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Perfectly Posh MLM Company Spotlight";
  const description =
    "Dive into Perfectly Posh’s pampering movement—clean ingredient indulgence, event-first selling, and kindness culture—and explore how Cloud MLM Software supports joyful, data-smart growth.";
  const keywords = [
    "Perfectly Posh MLM review",
    "Perfectly Posh compensation plan",
    "Self-care direct selling",
    "Cloud MLM Software for beauty parties",
    "AI pampering journey platform"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/perfectly-posh", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PerfectlyPoshPageProps = {
  params: { lang: SupportedLocale };
};

export default function PerfectlyPoshPage({ params }: PerfectlyPoshPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-[#fff1f5] via-[#fdf5ff] to-[#eff6ff] py-20 dark:border-border/40 dark:from-slate-900 dark:via-slate-950 dark:to-blue-950/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(244,114,182,0.2),transparent_55%),radial-gradient(circle_at_70%_32%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(circle_at_42%_84%,rgba(249,168,212,0.18),transparent_65%)]" aria-hidden />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.55fr)]">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-rose-400">
              <span className="rounded-full border border-rose-200/60 bg-white/80 px-4 py-1 shadow-sm">Rank #87 · Global 100</span>
              <span className="rounded-full border border-rose-200/60 bg-white/80 px-4 py-1 shadow-sm">Pamper with purpose</span>
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Perfectly Posh: joyful self-care, clean ingredients, and consultant-first celebrations.
              </h1>
              <p className="text-base text-muted-foreground">
                Perfectly Posh delights customers with indulgent spa treats while empowering consultants to turn self-care rituals into thriving
                micro-businesses. The brand’s heart-led community transforms parties into unforgettable experiences.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Build your pampering platform
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={pricingHref}>
                  Compare plan options
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-rose-400 hover:bg-rose-200/30">
                <Link href={demoHref}>
                  Request an AI pamper demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 -z-10 rounded-[36px] border border-rose-200/60 bg-white/75 shadow-[0_40px_80px_-50px_rgba(244,114,182,0.35)] backdrop-blur dark:border-white/20 dark:bg-slate-950/80" aria-hidden />
            <div className="relative grid gap-6 rounded-[32px] p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-400">Company snapshot</span>
              <div className="grid gap-4 sm:grid-cols-2">
                {POSH_SNAPSHOT.slice(0, 4).map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.label} className="rounded-3xl border border-rose-100 bg-white/85 p-5 dark:border-white/15 dark:bg-slate-900/80">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wide text-rose-400/80">{item.label}</span>
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-200/40 text-rose-500">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                      </div>
                      <p className="mt-3 text-2xl font-semibold text-foreground">{item.value}</p>
                      <p className="mt-2 text-xs text-muted-foreground">{item.detail}</p>
                    </article>
                  );
                })}
              </div>
              <div className="rounded-3xl border border-rose-100 bg-gradient-to-br from-white via-rose-50 to-white p-6 dark:border-white/15 dark:from-slate-900 dark:via-rose-900/30 dark:to-slate-900">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground">Pamper essentials</h2>
                <div className="mt-4 grid gap-4">
                  {POSH_SNAPSHOT.slice(4).map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-3 rounded-2xl border border-rose-100 bg-white/85 p-4 dark:border-white/15 dark:bg-slate-900/70">
                        <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-200/40 text-rose-500">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{item.value}</p>
                          <p className="text-xs text-muted-foreground">{item.detail}</p>
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Signature delights that keep customers swooning</h2>
          <p className="text-sm text-muted-foreground">
            Perfectly Posh elevates everyday self-care with playful branding, transparent ingredients, and meaningful rituals that make pampering
            feel essential.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSH_DELIGHTS.map((delight) => {
            const Icon = delight.icon;
            return (
              <article
                key={delight.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md dark:border-border/40 dark:bg-slate-950/80"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/15 dark:text-primary-foreground">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{delight.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{delight.description}</p>
                <p className="text-xs font-medium text-primary/80 dark:text-primary/70">{delight.signal}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-primary/5 via-background to-rose-50 py-20 dark:border-border/40 dark:from-primary/10 dark:via-slate-950 dark:to-rose-950/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(244,114,182,0.18),transparent_55%),radial-gradient(circle_at_72%_72%,rgba(236,72,153,0.18),transparent_55%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.75fr)]">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary dark:border-primary/40 dark:bg-primary/15">
              Community energy
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Where kindness and celebration fuel retention</h2>
            <p className="text-sm text-muted-foreground">
              Perfectly Posh’s consultants thrive because the business feels like a friendship-first movement. Their gatherings and collaborations
              inspire repeat purchases and long-term loyalty.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {COMMUNITY_PLAYS.map((play) => {
              const Icon = play.icon;
              return (
                <article
                  key={play.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-primary/20 bg-background/95 p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md dark:border-primary/30 dark:bg-slate-950/80"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{play.description}</p>
                  <p className="rounded-2xl border border-primary/20 bg-primary/10 p-4 text-xs text-primary dark:border-primary/30 dark:bg-primary/15 dark:text-primary-foreground">
                    {play.proof}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How Cloud MLM Software amplifies pampering empires</h2>
          <p className="text-sm text-muted-foreground">
            Cloud MLM Software enables brands like Perfectly Posh to automate operations, personalise experiences, and scale compassionately—all
            while protecting the joy that sets them apart.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CLOUD_POSH_CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article
                key={capability.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/50 bg-background/95 p-6 shadow-sm transition hover:border-primary/50 hover:shadow-md dark:border-border/40 dark:bg-slate-950/80"
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
              Explore self-care modules
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={contactHref}>
              Plan your pamper roadmap
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

