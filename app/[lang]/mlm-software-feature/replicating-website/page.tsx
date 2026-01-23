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
  ArrowUpRight,
  BarChart3,
  CopyCheck,
  Globe2,
  Rocket,
  Share2,
  Target
} from "lucide-react";
import {
  Cards,
  IdentificationBadge,
  Lightning,
  LinkSimple,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  title: string;
  description: string;
  icon: IconType;
};

type StrategyPillar = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type FlowStage = {
  step: string;
  title: string;
  summary: string;
  icon: IconType;
};

type RevenueDriver = {
  title: string;
  detail: string;
  proof: string;
  icon: IconType;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    title: "SEO-ready subdomains",
    description: "Deliver branded, search-friendly URLs for every distributor without manual configuration.",
    icon: LinkSimple
  },
  {
    title: "Affiliate-led commerce",
    description: "Empower field teams to showcase products and promotions through curated landing journeys.",
    icon: UsersThree
  },
  {
    title: "Self-service control",
    description: "Give members a secure dashboard to personalise copy, assets, and lead funnels in minutes.",
    icon: IdentificationBadge
  }
];

const STRATEGY_PILLARS: StrategyPillar[] = [
  {
    title: "Bespoke experiences for every market",
    description:
      "Launch replicating sites that mirror your brand, compensation plan, and promotional cadence without maintaining multiple CMS stacks.",
    bullets: [
      "Select Laravel, headless CMS, or hybrid delivery depending on compliance needs.",
      "Blend global brand assets with localised messaging and promo packs.",
      "Spin up campaign-specific templates the moment leadership defines a new offer."
    ],
    icon: Cards
  },
  {
    title: "Lead generation that compounds",
    description:
      "Transform every replicated website into a lead magnet engineered to grow enrolments and customer pipelines around the clock.",
    bullets: [
      "Pre-built lead capture sections tuned for referrals, ads, and organic discovery.",
      "Contextual placement for plan explainers, incentives, and testimonial reels.",
      "Optional ad placeholders that your corporate team can monetise or gift to top performers."
    ],
    icon: Target
  },
  {
    title: "Operational confidence at scale",
    description:
      "Security, automation, and analytics remain central so you can expand your network without sacrificing oversight.",
    bullets: [
      "Role-based access protects sensitive data while enabling rapid updates.",
      "Automated backups and monitoring keep thousands of sites healthy.",
      "Analytics dashboards surface which narratives and calls-to-action convert best."
    ],
    icon: Lightning
  }
];

const DISTRIBUTOR_FLOW: FlowStage[] = [
  {
    step: "01",
    title: "Unique link issued",
    summary:
      "Members receive a personalised URL or subdomain inside the Cloud MLM dashboard, complete with their credentials and branding presets.",
    icon: IdentificationBadge
  },
  {
    step: "02",
    title: "Personalise the story",
    summary:
      "Drag-and-drop controls let distributors tailor hero copy, incentives, and media while staying aligned with corporate guidelines.",
    icon: Share2
  },
  {
    step: "03",
    title: "Activate growth loops",
    summary:
      "Embedded tracking captures referrals, enrolments, and purchases so everyone sees performance in real time.",
    icon: BarChart3
  }
];

const REVENUE_DRIVERS: RevenueDriver[] = [
  {
    title: "Lead capture engineered for speed",
    detail:
      "Dedicated landing funnels, progressive forms, and mobile-first layouts convert curious visitors into warm prospects.",
    proof:
      "Built from our years of designing profitable online campaigns and duplication systems for high-volume MLM brands.",
    icon: Rocket
  },
  {
    title: "Storytelling that scales trust",
    detail:
      "Highlight your compensation plan, testimonials, and curated offers so every visit reinforces credibility.",
    proof:
      "We analyse psychological, demographic, and behavioural signals to help each page resonate with the right audience segments.",
    icon: Globe2
  },
  {
    title: "Network-wide visibility",
    detail:
      "Corporate and field leaders monitor performance, unlock campaigns, and coordinate follow-ups from a single workspace.",
    proof:
      "Replicated sites, marketing automations, and analytics live in one secure platform alongside your MLM software core.",
    icon: CopyCheck
  }
];

const RELATED_CAPABILITIES: string[] = [
  "White label MLM software options",
  "Theme changing controls for every launch",
  "Advanced reporting with AI-ready dashboards",
  "Powerful email and auto-responder system",
  "Ticketing, SMS, and support workflows",
  "Secure authentication with Laravel foundation",
  "Dynamic compression and caching for fast loads",
  "LCP page management for SEO momentum"
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Replicating Website MLM Software Feature";
  const description =
    "Launch branded, lead-generating replicating websites for every distributor with Cloud MLM Software. Drive enrolments, conversions, and global expansion with ease.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/replicating-website", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ReplicatingWebsitePageProps = {
  params: { lang: SupportedLocale };
};

export default function ReplicatingWebsitePage({ params }: ReplicatingWebsitePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const featuresHref = buildLocalizedPath("/features", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-24 text-slate-100">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.25),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(14,165,233,0.2),transparent_60%),radial-gradient(circle_at_20%_80%,rgba(148,163,184,0.15),transparent_55%)]" aria-hidden />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.5fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200/40 bg-sky-400/10 px-4 py-1 text-sm font-semibold text-sky-100">
              <Rocket className="h-4 w-4" aria-hidden />
              Replicating Website Feature
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Replicating Website MLM Software Feature for exponential field growth.
              </h1>
              <p className="text-base text-slate-200/85">
                Equip every distributor with a personalised, conversion-ready website that mirrors your brand standards while capturing the right leads. Cloud MLM Software orchestrates the technology, design, and data pipelines so your network can focus on meaningful conversations.
              </p>
              <p className="text-sm text-slate-200/70">
                From SEO-friendly subdomains to compliant storytelling, we architect replication experiences that feel premium, trustworthy, and effortless on any device.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Schedule a replication workshop
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-sky-200/50 text-sky-100 hover:bg-sky-400/10"
              >
                <Link href={demoHref}>
                  Explore the live demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 shadow-xl backdrop-blur">
            {HERO_HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="flex gap-4 rounded-2xl border border-white/10 bg-black/30 p-5">
                  <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-400/20 text-sky-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h2 className="text-base font-semibold text-slate-100">{item.title}</h2>
                    <p className="text-sm text-slate-200/80">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Boost your business growth with custom replication experiences.
          </h2>
          <p className="text-sm text-muted-foreground">
            Expansion-ready distributors need more than a generic landing page. Provide them with a curated digital storefront that carries your story, compensation plan, and promotional cadence to every prospect. Our team engineers the replication layer on top of your Cloud MLM core using Laravel or a CMS stack that matches your governance model.
          </p>
          <p className="text-sm text-muted-foreground">
            Whether leads arrive through ads, referrals, or organic discovery, replicated pages keep your brand narrative consistent while allowing each distributor to add personal context. The result is a growth loop that amplifies awareness, builds credibility, and unlocks downstream rewards for every member of your network.
          </p>
        </div>
        <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 shadow-sm dark:bg-primary/10">
          <h3 className="text-base font-semibold text-primary">Key distributor benefits</h3>
          <ul className="mt-4 space-y-4">
            {HERO_HIGHLIGHTS.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <item.icon className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Strategy and execution without compromise.
          </h2>
          <p className="text-sm text-muted-foreground">
            Every recommendation below reinterprets our legacy WordPress insights into a modern, product-led experience. Your replicating websites are not just copies—they are intelligent growth assets aligned with the goals of corporate leaders and field entrepreneurs alike.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {STRATEGY_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm transition hover:border-primary/60"
              >
                <div className="space-y-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground">{pillar.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/15">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How distributors experience their replication journey.
          </h2>
          <p className="text-sm text-muted-foreground">
            From dashboard to delivered story, every step is engineered to feel intuitive. Real-time analytics close the loop so leaders can repeat what works.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {DISTRIBUTOR_FLOW.map((stage) => {
            const Icon = stage.icon;
            return (
              <article key={stage.step} className="relative rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm">
                <div className="absolute -top-5 left-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {stage.step}
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{stage.title}</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{stage.summary}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Replicating websites that elevate earnings.
            </h2>
            <p className="text-sm text-muted-foreground">
              Duplicating your story is only powerful when the execution is thoughtful. Cloud MLM Software aligns design, content, and behavioural data so every replicated site nurtures trust and moves your prospects closer to enrolment.
            </p>
            <blockquote className="rounded-3xl border border-primary/30 bg-primary/5 p-6 text-sm text-muted-foreground dark:bg-primary/10">
              “When developing your online presence or helping you decide how to replicate your website, we study the psychological, demographic, and behavioural patterns of your target market. The goal is simple: deliver pre-qualified leads and a remarkable brand experience every time.”
            </blockquote>
            <p className="text-sm text-muted-foreground">
              Corporate teams maintain visibility across every replicated site and can roll out fresh content, assets, or campaigns instantly. Your distributors remain empowered while governance stays intact.
            </p>
          </div>
          <div className="grid gap-4">
            {REVENUE_DRIVERS.map((driver) => {
              const Icon = driver.icon;
              return (
                <article key={driver.title} className="rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold text-foreground">{driver.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{driver.detail}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{driver.proof}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Related Cloud MLM capabilities that amplify replication.
          </h2>
          <p className="text-sm text-muted-foreground">
            Replicated websites thrive alongside our broader platform—seamlessly integrating communications, analytics, and payment innovation.
          </p>
        </div>
        <ul className="flex flex-wrap gap-3">
          {RELATED_CAPABILITIES.map((capability) => (
            <li
              key={capability}
              className="rounded-full border border-border/60 bg-background/80 px-4 py-2 text-sm text-muted-foreground shadow-sm"
            >
              {capability}
            </li>
          ))}
        </ul>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/15 via-background to-primary/10 p-10 shadow-sm dark:via-slate-950">
          <div className="absolute -left-24 top-12 h-48 w-48 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute -right-16 bottom-0 h-40 w-40 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)]">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to launch replicating websites that convert?
              </h2>
              <p className="text-sm text-muted-foreground">
                Bring your current assets or let us craft them from scratch. We will orchestrate the design, copy, and technology so every distributor inherits a high-performing digital presence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href={contactHref}>
                    Connect with our product team
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                  <Link href={featuresHref}>
                    Discover more features
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-primary/30 bg-background/80 p-6 shadow-sm dark:border-primary/40 dark:bg-slate-950/70">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/70">
                Launch checklist
              </p>
              <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                <p>✓ Share current distributor personas and territories.</p>
                <p>✓ Provide sample promotions, testimonials, and brand assets.</p>
                <p>✓ Outline lead routing preferences and CRM integrations.</p>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                Once submitted, we prepare wireframes, content recommendations, and rollout cadence tailored to your global expansion plan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
