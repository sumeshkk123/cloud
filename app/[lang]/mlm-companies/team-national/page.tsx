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
  BadgeCheck,
  Building,
  Coins,
  Handshake,
  Layers3,
  LineChart,
  MapPin,
  Medal,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  UsersRound
} from "lucide-react";
import {
  ChartLineUp,
  ChatsCircle,
  ClipboardText,
  CompassTool,
  Handshake as HandshakePhosphor,
  Lightning,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroMetric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type MembershipLayer = {
  title: string;
  description: string;
  takeaway: string;
  icon: IconType;
};

type FieldRhythm = {
  title: string;
  description: string;
  enablement: string;
  icon: IconType;
};

type Milestone = {
  era: string;
  headline: string;
  detail: string;
  proof: string;
};

type TrustSignal = {
  title: string;
  score: string;
  narrative: string;
};

type WatchItem = {
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

const HERO_METRICS: HeroMetric[] = [
  {
    label: "Founded",
    value: "1997",
    detail: "Created by Dick Loehr to help families stretch every dollar via membership savings.",
    icon: Building
  },
  {
    label: "Headquarters",
    value: "Davie, Florida",
    detail: "Serving U.S. households with a network of local business partners and wholesalers.",
    icon: MapPin
  },
  {
    label: "Model",
    value: "Membership buying community",
    detail: "Savings memberships combine national brands, local merchants, and business services.",
    icon: Layers3
  },
  {
    label: "Field footprint",
    value: "370K+ active members",
    detail: "Independent Marketing Directors share savings stories through community events and digital funnels.",
    icon: UsersRound
  },
  {
    label: "Compensation",
    value: "Two-level plan + leadership bonuses",
    detail: "Retail commissions, team overrides, and production bonuses tied to verified membership sales.",
    icon: LineChart
  },
  {
    label: "Core audience",
    value: "U.S. middle-income families",
    detail: "Households seeking discounted purchasing power without sacrificing quality or brand access.",
    icon: PiggyBank
  }
];

const MEMBERSHIP_LAYERS: MembershipLayer[] = [
  {
    title: "Factory Direct & Everyday Savings",
    description:
      "Members access negotiated pricing on automotive, jewelry, furniture, and everyday goods via the Factory Direct program and partner marketplaces.",
    takeaway: "Publish transparent savings examples so prospects understand concrete household impact.",
    icon: Sparkles
  },
  {
    title: "Business Exchange perks",
    description:
      "Entrepreneurs pull down discounts on shipping, office supplies, insurance, and marketing solutions designed for local businesses.",
    takeaway: "Align messaging to small-business pain points and highlight verified partner case studies.",
    icon: ClipboardText
  },
  {
    title: "Travel & lifestyle stack",
    description:
      "Hospitality, automotive, and entertainment perks add emotional value beyond essential cost savings.",
    takeaway: "Bundle travel offers with seasonal promotions to keep membership engagement high post-enrolment.",
    icon: CompassTool
  }
];

const FIELD_RHYTHMS: FieldRhythm[] = [
  {
    title: "Spark belief with personal stories",
    description:
      "Marketing Directors lead with their own savings wins—covering appliances, vehicles, or tuition—to make abstract discounts relatable.",
    enablement: "Provide compliance-ready storytelling frameworks and calculators that verify before/after pricing.",
    icon: ChatsCircle
  },
  {
    title: "Design household savings paths",
    description:
      "Walk prospects through membership tiers, highlight quick-win discounts, and map annual savings versus dues.",
    enablement: "Interactive planners model short- and long-term savings, including business tax advantages.",
    icon: Lightning
  },
  {
    title: "Strengthen renewals with community",
    description:
      "Regional masterminds, recognition calls, and local business spotlights keep members engaged beyond initial deals.",
    enablement: "Automate renewal reminders, celebrate milestones, and surface local partner perks monthly.",
    icon: UsersThree
  }
];

const MILESTONES: Milestone[] = [
  {
    era: "1997",
    headline: "Membership savings vision launches",
    detail: "Dick Loehr introduces Team National to help families reduce expenses through collective buying power.",
    proof: "Corporate history — Team National founder spotlight."
  },
  {
    era: "2000s",
    headline: "Ignite national and local partnerships",
    detail: "Factory direct relationships expand from home goods into automotive, jewelry, and building materials.",
    proof: "Member success stories across retail and construction verticals."
  },
  {
    era: "2017",
    headline: "Angela Loehr Chrysler leads modernization",
    detail: "Digital marketing assets, compliance tools, and virtual events refresh the member experience.",
    proof: "Direct Selling News coverage of leadership transition."
  },
  {
    era: "2020s",
    headline: "E-commerce and AI-fed portals",
    detail: "Self-service apps and curated offers make it easier to demonstrate savings during remote consultations.",
    proof: "Team National announcement of e-commerce portal upgrades."
  }
];

const TRUST_SIGNALS: TrustSignal[] = [
  {
    title: "Regulatory posture",
    score: "64/100",
    narrative:
      "BBB accreditation and consistent complaint resolution support legitimacy, though disclosures must stay accurate when citing savings."
  },
  {
    title: "Field economics",
    score: "60/100",
    narrative:
      "Earnings concentrate among leaders who balance retail savings, team development, and renewals; onboarding pacing is critical."
  },
  {
    title: "Member loyalty",
    score: "68/100",
    narrative:
      "Value persists when members activate multiple categories. Community touchpoints are essential to renew annual memberships."
  }
];

const WATCHLIST: WatchItem[] = [
  {
    title: "Savings claim substantiation",
    risk: "Overstating household savings or quoting unverifiable partner pricing creates compliance exposure.",
    mitigation: "Centralize approved testimonials, archive receipts, and require calculators before publishing examples.",
    icon: ShieldCheck
  },
  {
    title: "Leadership transition clarity",
    risk: "Family-led succession can confuse field messaging if not supported with updated governance structures.",
    mitigation: "Publish leadership roadmaps, refresh brand voice, and align recognition programs to current strategy.",
    icon: Medal
  },
  {
    title: "Local partner consistency",
    risk: "Small-business benefits depend on partner performance and regional coverage.",
    mitigation: "Automated partner scorecards and member feedback loops keep offers relevant and vetted.",
    icon: BadgeCheck
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Savings storytelling studio",
    description:
      "AI templates transform receipts, invoices, and testimonial recordings into compliant, share-ready narratives.",
    outcome: "Cuts compliance review cycles and equips new reps with believable, data-backed stories.",
    icon: Sparkles
  },
  {
    title: "Household savings simulator",
    description:
      "Members input household spend and instantly see category-by-category savings projections and break-even timelines.",
    outcome: "Boosts closing rates by quantifying membership ROI in under three minutes.",
    icon: Coins
  },
  {
    title: "Partner assurance dashboard",
    description:
      "Tracks negotiated discounts, service-level agreements, and customer satisfaction scores across national and local partners.",
    outcome: "Keeps the catalog fresh and flags underperforming offers before renewal season.",
    icon: HandshakePhosphor
  },
  {
    title: "Leadership pacing analytics",
    description:
      "Monitors onboarding cohorts, renewal volume, and leadership pool health to balance recruiting with customer value.",
    outcome: "Protects long-term culture while highlighting leaders who deserve advanced support.",
    icon: ChartLineUp
  }
];

const PRIMARY_TRUST_SCORE = {
  score: 64,
  label: "Community trust index",
  summary: "Blends regulatory records, savings transparency, and membership retention data across U.S. markets."
};

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Team National Membership & Savings Playbook";
  const description =
    "Discover how Team National’s membership community turns savings into opportunity, with enablement, compliance, and technology plays to scale responsibly.";
  const keywords = [
    "Team National MLM",
    "Team National membership savings",
    "Team National compensation plan",
    "Cloud MLM Software for savings clubs",
    "membership discount direct selling"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/team-national", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type TeamNationalPageProps = {
  params: { lang: SupportedLocale };
};

export default function TeamNationalPage({ params }: TeamNationalPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const indexHref = buildLocalizedPath("/mlm-companies", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.3),transparent_50%),radial-gradient(circle_at_80%_10%,rgba(96,165,250,0.25),transparent_56%)]" />
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.55fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/50 bg-blue-400/10 px-4 py-1 text-sm font-semibold text-blue-100">
              Team National • Membership savings
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Team National shows how membership savings fuel entrepreneurial confidence.
            </h1>
            <p className="text-base text-blue-50/80">
              Transform cost-conscious households into loyal advocates. Blend transparent savings calculators, community-led
              recognition, and compliance-first stories so every Independent Marketing Director feels trusted and empowered.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  Explore guided platform tour
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-200/60 text-blue-100 hover:bg-blue-500/10">
                <Link href={pricingHref}>
                  View pricing bundles
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-blue-100 underline underline-offset-4 hover:bg-white/10">
                <Link href={indexHref}>
                  Return to MLM company index
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <div className="space-y-2 text-sm text-blue-50/80">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-200" aria-hidden />
                Davie, Florida • Serving the United States
              </p>
              <p>
                “Every family deserves wholesale advantages. Team National thrives when membership savings are transparent,
                repeatable, and celebrated.”
              </p>
            </div>
          </div>

          <aside className="grid gap-6 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-xl backdrop-blur">
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/25 bg-black/20 p-6 text-center">
              <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-blue-300/40 p-4">
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_120deg,var(--tw-gradient-stops))] from-sky-400 via-blue-500 to-sky-400 opacity-30" />
                <div className="relative flex h-full w-full flex-col items-center justify-center rounded-full bg-black/40 text-center shadow-lg">
                  <span className="text-4xl font-semibold text-white">{PRIMARY_TRUST_SCORE.score}</span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-blue-100/80">
                    {PRIMARY_TRUST_SCORE.label}
                  </span>
                </div>
              </div>
              <p className="text-xs text-blue-50/80">{PRIMARY_TRUST_SCORE.summary}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {HERO_METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article
                    key={metric.label}
                    className="flex h-full flex-col gap-3 rounded-2xl border border-white/20 bg-black/30 p-4 shadow-sm transition hover:-translate-y-1 hover:bg-black/40"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-100">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-blue-100/80">{metric.label}</span>
                    </div>
                    <span className="text-lg font-semibold text-white">{metric.value}</span>
                    <p className="text-xs text-blue-50/80">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 rounded-3xl border border-primary/15 bg-gradient-to-br from-blue-50 via-white to-purple-50 p-10 dark:border-primary/10 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Membership layers that power retention
            </h2>
            <p className="text-sm text-muted-foreground">
              Team National’s savings engine spans household essentials, business operations, and lifestyle perks. Spotlight each
              layer so members find value immediately after they join.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {MEMBERSHIP_LAYERS.map((layer) => {
              const Icon = layer.icon;
              return (
                <article
                  key={layer.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/70"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{layer.title}</h3>
                    <p className="text-sm text-muted-foreground">{layer.description}</p>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {layer.takeaway}
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
                Rhythm for the field to follow
              </h2>
              <p className="text-sm text-muted-foreground">
                Sustainable growth blends storytelling, practical planning, and community-led renewals. Help Marketing Directors
                move families from curiosity to confidence.
              </p>
            </div>
            <div className="space-y-6">
              {FIELD_RHYTHMS.map((rhythm) => {
                const Icon = rhythm.icon;
                return (
                  <article
                    key={rhythm.title}
                    className="flex gap-4 rounded-3xl border border-primary/20 bg-primary/5 p-5 dark:border-primary/15 dark:bg-primary/10"
                  >
                    <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary shadow dark:bg-slate-950/60">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{rhythm.title}</h3>
                      <p className="text-sm text-muted-foreground">{rhythm.description}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                        {rhythm.enablement}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-border/60 bg-background p-8 shadow-sm dark:border-border/40 dark:bg-slate-950/70">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Signature milestones</h2>
              <p className="text-sm text-muted-foreground">
                Revisit the moments that shaped Team National’s savings coalition and the expectations those moments created.
              </p>
            </div>
            <div className="space-y-5">
              {MILESTONES.map((milestone) => (
                <article
                  key={milestone.era}
                  className="relative rounded-3xl border border-border/60 bg-background/80 p-5 dark:border-border/40 dark:bg-slate-950/80"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {milestone.era}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{milestone.headline}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.detail}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary/80 dark:text-primary/70">
                    {milestone.proof}
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
                Diagnose trust before you scale
              </h2>
              <p className="text-sm text-muted-foreground">
                Pair your compensation engine with transparent metrics. These lenses help executive teams balance recruiting with
                member value.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {TRUST_SIGNALS.map((signal) => (
                <article
                  key={signal.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/75"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{signal.title}</p>
                  <span className="text-3xl font-semibold text-primary">{signal.score}</span>
                  <p className="text-sm text-muted-foreground">{signal.narrative}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {WATCHLIST.map((item) => {
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

      <section className="container space-y-10 rounded-3xl border border-border/60 bg-background p-10 shadow-sm dark:border-border/40 dark:bg-slate-950/75">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.6fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Cloud MLM Software plays for Team National leaders
            </h2>
            <p className="text-sm text-muted-foreground">
              Turn your membership savings vision into a data-rich, compliance-ready growth engine. Our technology keeps field
              teams aligned while delivering the transparency households demand.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Design my savings blueprint
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={demoHref}>
                  Schedule a leadership demo
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
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-border/40 dark:bg-slate-950/80"
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
