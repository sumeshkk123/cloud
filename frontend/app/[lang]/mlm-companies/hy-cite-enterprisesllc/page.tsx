import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, CalendarClock, Factory, Handshake, ShieldCheck, Sparkles, UtensilsCrossed, Users, Wrench } from "lucide-react";
import { ChartLineUp, GlobeHemisphereWest, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Spotlight = {
  title: string;
  metric: string;
  description: string;
  icon: IconType;
};

type BrandPromise = {
  title: string;
  detail: string;
  proof: string;
  icon: IconType;
};

type Play = {
  title: string;
  description: string;
  action: string;
  icon: IconType;
};

type TimelineEvent = {
  year: string;
  headline: string;
  detail: string;
};

const SPOTLIGHTS: Spotlight[] = [
  {
    title: "Revenue",
    metric: "$275M",
    description: "Direct Selling News places Hy Cite in the global Top 100 for premium cookware-led growth.",
    icon: ChartLineUp
  },
  {
    title: "Founded",
    metric: "1959",
    description: "Family-built in Madison, Wisconsin with a mission to modernise daily cooking rituals.",
    icon: CalendarClock
  },
  {
    title: "Employees",
    metric: "1,038",
    description: "Corporate experts supporting field leaders, culinary studios, and customer care.",
    icon: Users
  }
];

const BRAND_PROMISES: BrandPromise[] = [
  {
    title: "Culinary engineering",
    detail: "Royal Prestige cookware, juicers, and kitchen tech are engineered for healthy cooking precision.",
    proof: "Five- and seven-ply stainless-steel systems, vapour-seal lids, and lifetime warranties anchor credibility.",
    icon: UtensilsCrossed
  },
  {
    title: "Kitchen as a business",
    detail: "Consultants host immersive dinners, nutrition workshops, and financing guidance to build recurring customers.",
    proof: "In-home experiences translate premium price points into tangible lifestyle upgrades and loyalty.",
    icon: Handshake
  },
  {
    title: "Service-first culture",
    detail: "From bilingual support to reconditioning programmes, Hy Cite emphasises end-to-end satisfaction.",
    proof: "Dedicated service centres handle maintenance, parts, and reorders without disrupting consultant focus.",
    icon: ShieldCheck
  }
];

const FIELD_ENABLEMENT: Play[] = [
  {
    title: "Savour the experience",
    description:
      "Turn product demos into shared meals. Guided tasting menus prove the health and efficiency gains of Royal Prestige systems.",
    action: "Curate event kits with menu cards, nutrition insights, and after-care checklists.",
    icon: Sparkles
  },
  {
    title: "Coach for ownership",
    description:
      "Use financing calculators and satisfaction guarantees to make premium cookware accessible without compromising margin.",
    action: "Embed credit workflows and warranty activations inside your Cloud MLM workspace.",
    icon: Wrench
  },
  {
    title: "Scale with referrals",
    description:
      "Happy kitchens become your ambassadors. Automate post-event follow-ups, cross-sell bundles, and loyalty rewards.",
    action: "Trigger workflows that thank hosts, share recipes, and capture testimonials.",
    icon: UsersThree
  }
];

const TIMELINE: TimelineEvent[] = [
  {
    year: "1959",
    headline: "Hy Cite launches in Madison",
    detail:
      "The Ramos family introduces Royal Prestige, blending craftsmanship with direct-to-home consultation."
  },
  {
    year: "1990s",
    headline: "North American expansion",
    detail:
      "Bilingual field training, distribution centres, and payment plans position the brand for Hispanic market leadership."
  },
  {
    year: "2010s",
    headline: "Digital service evolution",
    detail:
      "Connected service hubs, customer portals, and e-learning drive retention while protecting premium margins."
  },
  {
    year: "2024",
    headline: "Top-50 DSN ranking",
    detail:
      "Hy Cite secures a Top 50 seat in the DSN Global 100, validating decades of consistent person-to-person growth."
  }
];

const CLOUD_PLAYS: Play[] = [
  {
    title: "Kitchen commerce cockpit",
    description:
      "Unify quotes, financing, warranties, and service tickets inside one workspace so consultants stay focused on hospitality.",
    action: "Automate order follow-ups, recipe libraries, and referral rewards with Cloud MLM Software.",
    icon: GlobeHemisphereWest
  },
  {
    title: "Premium product telemetry",
    description:
      "Track demo-to-sale conversion rates, product bundle performance, and event ROI to protect profitability.",
    action: "Deploy dashboards that combine POS, CRM, and Net Promoter Scores in real time.",
    icon: Factory
  },
  {
    title: "Compliance guardrails",
    description:
      "Embed responsible claims, product specs, and warranty disclosures inside every consultant interaction.",
    action: "Use AI-assisted reviews to approve marketing assets before they reach the field.",
    icon: ShieldCheck
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Hy Cite Enterprises Success Profile";
  const description =
    "Explore how Hy Cite Enterprises and Royal Prestige scale premium cookware through immersive experiences, then replicate their hospitality-led model with Cloud MLM Software.";
  const keywords = [
    "Hy Cite Enterprises",
    "Royal Prestige cookware MLM",
    "Hy Cite compensation insights",
    "Kitchenware direct selling strategy",
    "Cloud MLM Software for cookware brands"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/hy-cite-enterprisesllc", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type HyCitePageProps = {
  params: { lang: SupportedLocale };
};

export default function HyCitePage({ params }: HyCitePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border border-primary/30 bg-gradient-to-br from-[#0B1F2A] via-[#0F2F2D] to-[#1F3A1E] py-20 text-white dark:border-primary/25">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(12,112,214,0.32),transparent_45%),radial-gradient(circle_at_78%_16%,rgba(29,185,84,0.28),transparent_60%),radial-gradient(circle_at_48%_88%,rgba(12,161,221,0.22),transparent_58%)]"
          aria-hidden
        />
        <div className="container grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-sky-100">
              #48 • Hy Cite Enterprises, LLC
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Hospitality-powered growth for Royal Prestige and modern kitchens.
              </h1>
              <p className="text-base text-slate-200/80">
                Hy Cite Enterprises turned cookware into a lifestyle platform—pairing premium engineering with heartfelt customer care. Learn how
                their consultant experiences, warranties, and analytics-driven service programs keep $275M in revenue simmering.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  See the AI demo kitchen
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-white/15 text-emerald-100 hover:bg-white/25">
                <Link href={pricingHref}>
                  Compare solution tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <Link href={contactHref}>
                  Architect your rollout
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-white/25 bg-white/10 p-8 backdrop-blur">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/70">Momentum snapshot</span>
              <p className="text-lg font-semibold text-white">
                Metrics that keep Hy Cite at the top of the direct selling cookware category.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {SPOTLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="flex h-full flex-col gap-2 rounded-2xl border border-white/20 bg-black/40 p-4">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <p className="text-xs uppercase tracking-widest text-white/60">{item.title}</p>
                    <p className="text-2xl font-semibold text-white">{item.metric}</p>
                    <p className="text-xs text-slate-200/80">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Kitchenware mastery & customer trust</h2>
          <p className="text-sm text-muted-foreground">
            Hy Cite’s consultants don’t just sell cookware—they deliver culinary confidence, long-term service, and measured outcomes. Build your
            own premium brand with the same disciplined rhythm.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {BRAND_PROMISES.map((promise) => {
            const Icon = promise.icon;
            return (
              <article
                key={promise.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-primary/10"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{promise.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{promise.detail}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{promise.proof}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-muted/50 py-20 dark:border-border/40 dark:bg-slate-900/60">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(32,127,203,0.2),transparent_55%),radial-gradient(circle_at_82%_28%,rgba(34,197,94,0.18),transparent_60%)]" aria-hidden />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.85fr)]">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Consultant enablement
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Build field playbooks that feel like gourmet hospitality.
            </h2>
            <p className="text-sm text-muted-foreground">
              The Hy Cite field experience emphasises warmth, coaching, and lifetime stewardship. Use these plays to upgrade your onboarding and
              retention sprints.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {FIELD_ENABLEMENT.map((play) => {
              const Icon = play.icon;
              return (
                <article
                  key={play.title}
                  className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{play.description}</p>
                  <span className="text-xs uppercase tracking-wide text-muted-foreground">{play.action}</span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Growth timeline</h2>
          <p className="text-sm text-muted-foreground">
            Moments that transformed Hy Cite from a Madison cookware startup into a modern hospitality brand.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" aria-hidden />
          <div className="space-y-10">
            {TIMELINE.map((event) => (
              <article key={event.year} className="relative pl-12">
                <span className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                  {event.year}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{event.headline}</h3>
                <p className="text-sm text-muted-foreground">{event.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Cloud MLM Software advantage for premium kitchen brands
          </h2>
          <p className="text-sm text-muted-foreground">
            Translate Hy Cite’s hospitality blueprint into data-backed automation, AI insights, and compliance guardrails.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CLOUD_PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.title}
                className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{play.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{play.description}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{play.action}</span>
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
              Talk to our architects
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
