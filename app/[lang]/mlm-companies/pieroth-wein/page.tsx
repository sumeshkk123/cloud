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
  Award,
  Building2,
  CalendarClock,
  HandshakeIcon,
  Leaf,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  Users
} from "lucide-react";
import { GlobeHemisphereEast, UsersThree, Wine } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Snapshot = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Vintage = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type CommunityMoment = {
  title: string;
  description: string;
  signal: string;
  icon: IconType;
};

type PlatformCapability = {
  title: string;
  description: string;
  payoff: string;
  icon: IconType;
};

const PIEROTH_SNAPSHOT: Snapshot[] = [
  {
    label: "Revenue",
    value: "$60M",
    detail: "DSN Global 100 rank #100 highlights a resilient wine-tasting community.",
    icon: Building2
  },
  {
    label: "Founded",
    value: "1675",
    detail: "Generations of winemaking excellence rooted in Burg Layen, Germany.",
    icon: CalendarClock
  },
  {
    label: "Headquarters",
    value: "Burg Layen, Germany",
    detail: "Historic estate where vineyards, cellars, and hospitality converge.",
    icon: MapPin
  },
  {
    label: "Primary market",
    value: "Germany & Europe",
    detail: "Premium tastings and cellar-door experiences cultivated across the region.",
    icon: GlobeHemisphereEast
  },
  {
    label: "Team",
    value: "2,500 wine advisors",
    detail: "Ambassadors who pair storytelling with curated tasting experiences.",
    icon: Users
  },
  {
    label: "Compensation",
    value: "Single-level elegance",
    detail: "Rewards personalised service, cellar knowledge, and customer retention.",
    icon: ShieldCheck
  },
  {
    label: "Portfolio",
    value: "Estate & partner wines",
    detail: "Old- and new-world selections that celebrate terroir and craftsmanship.",
    icon: Wine
  },
  {
    label: "Sales motion",
    value: "Person-to-person tastings",
    detail: "Intimate gatherings transform clients into lifelong collectors.",
    icon: HandshakeIcon
  }
];

const VINTAGE_PILLARS: Vintage[] = [
  {
    title: "Family heritage",
    description: "Centuries of know-how refine every harvest, blend, and cellar decision.",
    proof: "Estate vineyards in Nahe and partnerships across renowned appellations.",
    icon: Award
  },
  {
    title: "Experiential selling",
    description: "Advisors host curated tastings that educate, delight, and foster loyalty.",
    proof: "In-home salons, cellar events, and digital tastings create multi-sensory journeys.",
    icon: Wine
  },
  {
    title: "Sustainable viticulture",
    description: "Soil health, responsible sourcing, and minimal intervention guide production.",
    proof: "Organic practices and traceable supply chains balance tradition with stewardship.",
    icon: Leaf
  }
];

const COMMUNITY_MOMENTS: CommunityMoment[] = [
  {
    title: "Story-driven education",
    description: "Advisors blend winemaking lore with tasting notes to unlock deeper appreciation.",
    signal: "Guides, tasting cards, and cellar diaries keep customers engaged season after season.",
    icon: Sparkles
  },
  {
    title: "Collector relationships",
    description: "Personalised curation and cellar planning transform buyers into long-term patrons.",
    signal: "Anniversary vintages, limited releases, and estate visits reward loyalty.",
    icon: Target
  },
  {
    title: "Hospitality culture",
    description: "Warm, community-centric experiences nurture trust and repeat gatherings.",
    signal: "Events feel like family celebrations, not transactions, strengthening referrals.",
    icon: UsersThree
  }
];

const CLOUD_WINE_CAPABILITIES: PlatformCapability[] = [
  {
    title: "Sommelier-grade CRM",
    description: "Capture tasting notes, preferences, and cellar goals with AI assistance.",
    payoff: "Empower advisors to recommend the perfect bottle at the perfect moment.",
    icon: Wine
  },
  {
    title: "Curated event orchestration",
    description: "Plan tastings, manage RSVPs, and automate follow-ups across in-person and virtual salons.",
    payoff: "Deliver seamless hospitality while preserving the artisanal touch.",
    icon: Wine
  },
  {
    title: "Single-level compensation clarity",
    description: "Visualise commissions, client stewardship metrics, and compliance in one dashboard.",
    payoff: "Protect Pieroth’s legacy while modernising advisor operations.",
    icon: ShieldCheck
  },
  {
    title: "Global supply coordination",
    description: "Sync inventory, allocations, and shipping windows across vineyards and markets.",
    payoff: "Ensure every collector receives their bottles on time with minimal friction.",
    icon: GlobeHemisphereEast
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Pieroth Wein MLM Company Analysis";
  const description =
    "Explore Pieroth Wein’s 1675 heritage—premium tastings, advisor-led storytelling, and sustainable viticulture—and learn how Cloud MLM Software modernises legacy wine MLM operations.";
  const keywords = [
    "Pieroth Wein MLM review",
    "Pieroth Wein compensation model",
    "Wine direct selling company",
    "Cloud MLM Software for wine businesses",
    "AI CRM for wine advisors"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/pieroth-wein", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type PierothPageProps = {
  params: { lang: SupportedLocale };
};

export default function PierothPage({ params }: PierothPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const modulesHref = buildLocalizedPath("/mlm-software-modules", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-border/60 bg-gradient-to-br from-[#1f0a0a] via-[#301312] to-[#48201b] py-20 text-white dark:border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(244,165,96,0.28),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(226,161,112,0.25),transparent_60%),radial-gradient(circle_at_48%_84%,rgba(147,197,253,0.2),transparent_65%)]" aria-hidden />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.55fr)]">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1">Rank #100 · Global 100</span>
              <span className="rounded-full border border-white/25 bg-white/10 px-4 py-1">1675 family heritage</span>
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Pieroth Wein: legacy vineyards, storyteller advisors, and unforgettable tastings.
              </h1>
              <p className="text-base text-slate-200/80">
                From Nahe vineyards to living rooms across Europe, Pieroth Wein elevates wine appreciation through curated experiences and
                relationships that feel like family.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Discuss your digital cellar
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
                  Request an AI tasting demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute inset-0 -z-10 rounded-[36px] border border-white/20 bg-white/10 shadow-[0_40px_80px_-50px_rgba(249,115,22,0.55)] backdrop-blur" aria-hidden />
            <div className="relative grid gap-6 rounded-[32px] border border-white/20 bg-white/10 p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">Estate snapshot</span>
              <div className="grid gap-4 sm:grid-cols-2">
                {PIEROTH_SNAPSHOT.slice(0, 4).map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.label} className="flex flex-col gap-3 rounded-3xl border border-white/15 bg-black/25 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wide text-amber-100/80">{item.label}</span>
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-400/15 text-amber-100">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                      </div>
                      <p className="text-2xl font-semibold text-white">{item.value}</p>
                      <p className="text-xs text-slate-200/70">{item.detail}</p>
                    </article>
                  );
                })}
              </div>
              <div className="rounded-3xl border border-white/15 bg-black/20 p-6">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-white/80">Advisor foundations</h2>
                <div className="mt-4 grid gap-4">
                  {PIEROTH_SNAPSHOT.slice(4).map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                        <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400/15 text-amber-100">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white">{item.value}</p>
                          <p className="text-xs text-slate-200/70">{item.detail}</p>
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
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Pillars that keep Pieroth’s cellars thriving</h2>
          <p className="text-sm text-muted-foreground">
            Pieroth’s advisors embody centuries of craftsmanship. From sustainable vineyards to immersive tastings, every detail reinforces the
            brand’s premium positioning.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {VINTAGE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md dark:border-border/40 dark:bg-slate-950/80"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/15 dark:text-primary-foreground">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <p className="rounded-2xl border border-primary/20 bg-primary/10 p-4 text-xs text-primary dark:border-primary/30 dark:bg-primary/15 dark:text-primary-foreground">
                  {pillar.proof}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-gradient-to-br from-primary/5 via-background to-amber-50 py-20 dark:border-border/40 dark:from-primary/10 dark:via-slate-950 dark:to-amber-950/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(249,168,38,0.18),transparent_55%),radial-gradient(circle_at_72%_72%,rgba(59,130,246,0.18),transparent_55%)]" aria-hidden />
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Moments that turn tastings into lasting memberships</h2>
            <p className="text-sm text-muted-foreground">
              Pieroth advisors orchestrate hospitality that feels bespoke. These community dynamics create repeat business and word-of-mouth reverence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COMMUNITY_MOMENTS.map((moment) => {
              const Icon = moment.icon;
              return (
                <article
                  key={moment.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background/95 p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md dark:border-border/40 dark:bg-slate-950/80"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/15 dark:text-primary-foreground">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{moment.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{moment.description}</p>
                  <p className="text-xs font-medium text-primary/80 dark:text-primary/70">{moment.signal}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Bring Pieroth’s heritage into the AI era with Cloud MLM Software</h2>
          <p className="text-sm text-muted-foreground">
            We modernise legacy wine programs without losing the romance. Cloud MLM Software keeps advisors focused on storytelling while the platform
            manages operations, compliance, and insights.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CLOUD_WINE_CAPABILITIES.map((capability) => {
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
              Review cellar-ready modules
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href={contactHref}>
              Craft your digital tasting room
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

