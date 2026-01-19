import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, LifeBuoy, LineChart, MonitorSmartphone, Palette, RefreshCcw } from "lucide-react";
import {
  CirclesThreePlus,
  Notebook,
  ShoppingCartSimple,
  SquaresFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroInsight = {
  title: string;
  description: string;
  icon: IconType;
};

type ImportancePoint = {
  title: string;
  detail: string;
};

type ServiceOffering = {
  title: string;
  description: string;
  outcome: string;
  icon: IconType;
};

type BlueprintPhase = {
  label: string;
  headline: string;
  narrative: string;
};

type PartnershipPromise = {
  title: string;
  detail: string;
};

const HERO_INSIGHTS: HeroInsight[] = [
  {
    title: "MLM narrative translated into design",
    description:
      "We map compensation journeys, distributor personas, and recognition moments into layouts that feel intuitive from the first visit.",
    icon: Palette
  },
  {
    title: "Responsive across every device",
    description:
      "Flexible grids, adaptive assets, and accessibility-first patterns keep the experience sharp on desktops, tablets, and mobile screens.",
    icon: MonitorSmartphone
  },
  {
    title: "SEO and conversion tuned",
    description:
      "Schema-ready markup, performance layering, and purposeful CTAs make the site discoverable and ready to convert from day one.",
    icon: LineChart
  }
];

const IMPORTANCE_POINTS: ImportancePoint[] = [
  {
    title: "Global identity",
    detail:
      "Your website becomes the global face of the organisation, signalling credibility and intent to every visitor."
  },
  {
    title: "Always-on promotion",
    detail: "Prospects can explore products and services on their schedule without waiting for a call or webinar invite."
  },
  {
    title: "Competitive differentiation",
    detail: "A polished interface positions your network as a market leader and keeps attention on your offer."
  },
  {
    title: "Complete story in one place",
    detail:
      "Showcase compensation models, product lines, and community outcomes without fragmenting the experience across channels."
  },
  {
    title: "Rapid answers for the field",
    detail:
      "Centralise FAQs, compliance material, and onboarding resources so teams can self-serve instantly."
  }
];

const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    title: "Static Web Design",
    description:
      "Launch an immaculate corporate presence that tells your brand story with clarity—even when content updates are infrequent.",
    outcome: "Perfect for regulated markets where messaging needs consistency and fast approvals.",
    icon: SquaresFour
  },
  {
    title: "E-commerce Web Design",
    description:
      "Sell products, starter kits, and subscriptions globally with secure checkout flows and multi-region catalogues.",
    outcome: "Comes with training so your team can manage inventory and promotions confidently.",
    icon: ShoppingCartSimple
  },
  {
    title: "CMS Web Design",
    description:
      "Empower internal teams to update pages, media, and campaigns through intuitive content management interfaces.",
    outcome: "Maintain compliant messaging while staying agile with new launches and announcements.",
    icon: Notebook
  },
  {
    title: "Dynamic Web Design",
    description:
      "Bring calculators, enrolment flows, and multilingual storytelling to life with custom development across PHP, .NET, or headless stacks.",
    outcome: "Engineered for enterprises that need data-rich, personalised experiences across markets.",
    icon: CirclesThreePlus
  },
  {
    title: "Website Maintenance",
    description:
      "Keep content fresh, media optimised, and technical foundations healthy through proactive maintenance cycles.",
    outcome: "Sustain high search visibility while engaging visitors with up-to-date campaigns.",
    icon: LifeBuoy
  },
  {
    title: "Web Redesign",
    description:
      "Transform legacy sites into modern, conversion-ready experiences that reflect today’s expectations.",
    outcome: "Aligns visuals, SEO structure, and compliance for a confident relaunch.",
    icon: RefreshCcw
  }
];

const BLUEPRINT_PHASES: BlueprintPhase[] = [
  {
    label: "Phase 01",
    headline: "Discovery & experience mapping",
    narrative:
      "We run workshops around your compensation model, product priorities, and distributor personas to architect the perfect information hierarchy."
  },
  {
    label: "Phase 02",
    headline: "Designing responsive interfaces",
    narrative:
      "Prototypes pair compelling storytelling with adaptive grids, ensuring every device delivers the same clarity, speed, and polish."
  },
  {
    label: "Phase 03",
    headline: "Launch, training & optimisation",
    narrative:
      "Go-live includes enablement for your team, support playbooks, and continuous iteration so updates and campaigns roll out fast."
  }
];

const PLATFORM_CAPABILITIES: string[] = [
  "Highly extensible architecture ready for future modules",
  "In-built e-wallet and payment integrations",
  "Multilingual translational system for global teams",
  "Multi-currency presentation and pricing controls",
  "Great support through integrated ticketing",
  "Privileged user system with secure authentication",
  "Powerful email and auto-responder ecosystem",
  "Replicating website and landing page management"
];

const PARTNERSHIP_PROMISES: PartnershipPromise[] = [
  {
    title: "Change requests handled quickly",
    detail:
      "Design tweaks and layout updates are prioritised by a dedicated team so campaigns never miss their window."
  },
  {
    title: "Seasoned MLM designers",
    detail:
      "Our specialists have years of experience building for direct selling and understand the nuance of your business model."
  },
  {
    title: "SEO-friendly, responsive delivery",
    detail:
      "Every build adapts to screen size, platform, and orientation while staying search-optimised from the start."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Web Designing for MLM Software";
  const description =
    "Cloud MLM Software delivers SEO-ready, responsive web design tailored for MLM organisations. Launch static, CMS, or dynamic websites backed by enterprise support.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/web-designing", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type WebDesigningPageProps = {
  params: { lang: SupportedLocale };
};

export default function WebDesigningPage({ params }: WebDesigningPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-28 pb-28">
      <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-[#0b1120] via-[#121b36] to-[#0f172a] py-24 text-slate-100">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_12%,rgba(59,130,246,0.28),transparent_55%),radial-gradient(circle_at_88%_18%,rgba(165,180,252,0.35),transparent_58%),radial-gradient(circle_at_40%_82%,rgba(94,234,212,0.22),transparent_60%)] opacity-80"
          aria-hidden
        />
        <div className="container grid gap-14 lg:grid-cols-[minmax(0,0.63fr)_minmax(0,0.37fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/40 bg-sky-500/20 px-4 py-1 text-sm font-semibold text-sky-100">
              Web Designing Module
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Build a corporate-grade MLM website that converts, informs, and scales with your network.
              </h1>
              <p className="text-base text-slate-200/90">
                Cloud MLM Software extends your core platform with bespoke web design. From brochure sites to data-driven experiences, every interface is crafted to showcase your story, attract prospects, and support global distributor journeys.
              </p>
              <p className="text-sm text-slate-300/80">
                This add-on service is managed by the same team that engineers our software, ensuring brand consistency, fast iterations, and enterprise-ready compliance.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Request a design consultation
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-300/70 text-slate-100 hover:bg-white/10"
              >
                <Link href={demoHref}>
                  Explore the live demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-slate-200 hover:bg-white/10 hover:text-white"
              >
                <Link href={servicesHref}>
                  View related services
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.25rem] bg-gradient-to-b from-white/20 via-white/5 to-white/0 blur-2xl" aria-hidden />
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 backdrop-blur-lg">
              <div className="grid gap-5">
                {HERO_INSIGHTS.map((insight) => {
                  const Icon = insight.icon;
                  return (
                    <article
                      key={insight.title}
                      className="rounded-2xl border border-white/20 bg-white/10 p-5 text-slate-50"
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-500/25 text-sky-100">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <h2 className="text-base font-semibold">{insight.title}</h2>
                      </div>
                      <p className="mt-3 text-sm text-slate-200/85">{insight.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Why a modern MLM website matters
          </h2>
          <p className="text-sm text-muted-foreground">
            We design the digital front door that introduces your opportunity to the world. The outcome is a professional, focused presence that reinforces your credibility and equips field teams with the clarity they need to perform.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {IMPORTANCE_POINTS.map((point) => (
              <article
                key={point.title}
                className="rounded-2xl border border-border/70 bg-background/80 p-5 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-foreground">{point.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{point.detail}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="relative rounded-3xl border border-border/70 bg-gradient-to-br from-slate-100 via-white to-slate-100 p-8 shadow-xl dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
          <div className="space-y-4">
            <p className="text-base font-medium text-foreground">
              &quot;Cloud MLM Software delivers the best layout for your business, keeps responsive design at the core, and adapts instantly when you request changes.&quot;
            </p>
            <p className="text-sm text-muted-foreground">
              Responsive web design ensures the experience adjusts to resolution, orientation, and scripting capabilities—meaning no separate builds for every device. It is a single investment that keeps pace with distributors wherever they log in.
            </p>
            <p className="text-sm text-muted-foreground">
              Our consultants combine trend-aware design with direct selling expertise to keep your brand recognisable, compliant, and ready for international growth.
            </p>
          </div>
        </div>
      </section>

      <section className="relative border-y border-border/60 bg-muted/20 py-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" aria-hidden />
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              A service catalogue built for every stage of growth
            </h2>
            <p className="text-sm text-muted-foreground">
              Choose the delivery style that fits your campaign today while staying confident it will expand with future modules, markets, and product lines.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {SERVICE_OFFERINGS.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  <div className="mt-auto rounded-2xl border border-dashed border-border/70 bg-background/70 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                      Outcome
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{service.outcome}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Our blueprint for launch-ready experiences
          </h2>
          <p className="text-sm text-muted-foreground">
            From discovery to ongoing optimisation, every step is tuned to the realities of direct selling—rapid rollouts, multilingual teams, and tightly governed messaging.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-5 right-5 top-1/2 hidden h-px -translate-y-1/2 bg-border/60 md:block" aria-hidden />
          <div className="grid gap-8 md:grid-cols-3">
            {BLUEPRINT_PHASES.map((phase) => (
              <article
                key={phase.label}
                className="relative h-full rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm"
              >
                <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                  {phase.label}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{phase.headline}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{phase.narrative}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,0.48fr)]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Enterprise capabilities included in every deployment
          </h2>
          <p className="text-sm text-muted-foreground">
            Web design is delivered alongside the same platform strengths you rely on inside Cloud MLM Software.
          </p>
          <div className="flex flex-wrap gap-3">
            {PLATFORM_CAPABILITIES.map((capability) => (
              <span
                key={capability}
                className="inline-flex items-center rounded-full border border-border/60 bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-5 rounded-3xl border border-border/70 bg-muted/30 p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-foreground">Partnership promises</h3>
          <div className="space-y-4">
            {PARTNERSHIP_PROMISES.map((promise) => (
              <article key={promise.title} className="rounded-2xl border border-border/60 bg-background/80 p-4">
                <h4 className="text-sm font-semibold text-foreground">{promise.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{promise.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-r from-primary/15 via-background to-primary/15 p-10 shadow-lg">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to present your opportunity with confidence?
              </h2>
              <p className="text-sm text-muted-foreground">
                Partner with Cloud MLM Software to deploy a website that reflects your brand authority, drives conversions, and grows alongside your field teams.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-start gap-4 lg:justify-end">
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Schedule a strategy call
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border/70">
                <Link href={demoHref}>
                  Walk through the demo site
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
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
