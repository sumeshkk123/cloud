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
  ClipboardCheck,
  FileText,
  Layers,
  LineChart,
  Sparkles,
  Target
} from "lucide-react";
import {
  ChartLineUp,
  Faders,
  GlobeHemisphereEast,
  Notebook,
  RocketLaunch,
  ChatsTeardrop
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroHighlight = {
  label: string;
  detail: string;
  icon: IconType;
};

type GrowthPillar = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type FrameworkStep = {
  step: string;
  focus: string;
  outcome: string;
  icon: IconType;
};

type ResourceColumn = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Insight = {
  title: string;
  description: string;
  icon: IconType;
};

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    label: "Conversion-first storytelling",
    detail:
      "Each landing journey blends persuasive copy, social proof, and frictionless forms so prospects commit the moment they arrive.",
    icon: ChartLineUp
  },
  {
    label: "Campaign alignment",
    detail:
      "We translate paid, social, and referral promises into on-page value propositions that keep bounce rates low and trust visibly high.",
    icon: Faders
  },
  {
    label: "Data that fuels follow-ups",
    detail:
      "Lead submissions sync with Cloud MLM Software in real time, giving your teams a clean log for nurturing, compliance, and automation.",
    icon: GlobeHemisphereEast
  }
];

const GROWTH_PILLARS: GrowthPillar[] = [
  {
    title: "Capture intent in the first scroll",
    description:
      "Purpose-built lead capture pages carry a single storyline—invite, prove, and convert—so new visitors know exactly why they should join your network.",
    bullets: [
      "Focused hero narratives keep attention on your primary CTA.",
      "Mobile-optimised layouts reduce exit rates across campaigns.",
      "Micro interactions reassure visitors that their data is protected."
    ],
    icon: Target
  },
  {
    title: "Multiply distributor momentum",
    description:
      "When new leads register, the marketing automation inside Cloud MLM Software schedules alerts, tasks, and welcome journeys for every sponsor.",
    bullets: [
      "Instant notifications keep uplines involved in every conversion.",
      "Lead tags and sources are tracked for precise campaign ROI.",
      "Admin teams access lead notes, uploads, and history at once."
    ],
    icon: BarChart3
  },
  {
    title: "Match your brand and voice",
    description:
      "From typography to promos, we craft experiences that mirror your flagship brand while giving every region the flexibility it needs.",
    bullets: [
      "Library of modular sections tailored to MLM narratives.",
      "Support for multilingual copy and localised compliance text.",
      "A/B-ready templates for testing offers without redeploying code."
    ],
    icon: Layers
  }
];

const FRAMEWORK_STEPS: FrameworkStep[] = [
  {
    step: "01",
    focus: "Audience & promise mapping",
    outcome:
      "Workshop your value proposition, audience anxieties, and the exact proof points that will anchor the page.",
    icon: Target
  },
  {
    step: "02",
    focus: "Experience design sprint",
    outcome:
      "Wireframes evolve into polished responsive layouts with campaign-specific copy, visuals, and call-to-action sequencing.",
    icon: Sparkles
  },
  {
    step: "03",
    focus: "Form strategy & automation",
    outcome:
      "We configure custom fields, data validations, and routing rules so every submission lands in the right workflow instantly.",
    icon: ClipboardCheck
  },
  {
    step: "04",
    focus: "Launch, measure, iterate",
    outcome:
      "Analytics dashboards highlight conversion lift, enabling ongoing optimisation without interrupting live campaigns.",
    icon: LineChart
  }
];

const RESOURCE_COLUMNS: ResourceColumn[] = [
  {
    title: "Creative assets we orchestrate",
    description:
      "Bring us your promo videos, testimonials, or brand guidelines—we transform them into cohesive landing experiences designed for action.",
    bullets: [
      "Hero scripts and subheads tuned to campaign promises.",
      "Embedded video, quote, and product modules with fast loading.",
      "Trust badges, FAQs, and guarantee copy to remove hesitation."
    ],
    icon: FileText
  },
  {
    title: "Data & workflows we customise",
    description:
      "You decide the insights to capture. We configure fields, consent language, and distribution rules aligned with your compliance model.",
    bullets: [
      "Dynamic forms with conditional logic for specialised offers.",
      "Automated tagging and segmentation for nurture journeys.",
      "Exports and notifications tailored for sales, compliance, or finance teams."
    ],
    icon: Notebook
  }
];

const INSIGHTS: Insight[] = [
  {
    title: "Accelerate go-live",
    description:
      "Our launch kit covers design, copy, QA, and analytics so your teams activate campaigns in weeks—not quarters.",
    icon: RocketLaunch
  },
  {
    title: "Strengthen distributor collaboration",
    description:
      "Share real-time lead dashboards, assign follow-up tasks, and keep every sponsor aligned with your onboarding promise.",
    icon: ChatsTeardrop
  },
  {
    title: "Close the optimisation loop",
    description:
      "Conversion metrics, heatmaps, and drop-off points feed directly into experimentation cycles for constant improvement.",
    icon: LineChart
  }
];

function resolveLocale(lang: SupportedLocale): Locale {
  return isSupportedLocale(lang) ? lang : (i18n.defaultLocale as Locale);
}

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "LCP Pages Management | Cloud MLM Software";
  const description =
    "Design and launch high-performing lead capture pages with Cloud MLM Software. Deliver focused narratives, collect the right data, and push leads straight into automated MLM workflows.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/lcp-pages-management", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type LcpPagesManagementPageProps = {
  params: { lang: SupportedLocale };
};

export default function LcpPagesManagementPage({ params }: LcpPagesManagementPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const featuresHref = buildLocalizedPath("/features", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-24 text-slate-100">
        <div
          className="absolute inset-0 -z-10 opacity-60"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.45), transparent 55%), radial-gradient(circle at 80% 15%, rgba(14,165,233,0.35), transparent 60%), radial-gradient(circle at 40% 80%, rgba(129,140,248,0.35), transparent 55%)"
          }}
        />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-100/20 bg-slate-100/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-slate-100">
              Lead capture excellence
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                LCP Pages Management
              </h1>
              <p className="max-w-2xl text-lg text-slate-200">
                Convert campaign traffic into verified distributors with landing experiences engineered
                for speed, clarity, and measurable impact. We turn every promise you make in market
                into a confident onboarding journey inside Cloud MLM Software.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Book a strategy call
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-200/40 text-slate-100 hover:bg-slate-100/10">
                <Link href={contactHref}>Talk to an LCP specialist</Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {HERO_HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-100/10 bg-slate-900/50 p-5 shadow-[0_20px_35px_-25px_rgba(15,23,42,0.85)] backdrop-blur"
                  >
                    <Icon className="h-6 w-6 text-sky-300" aria-hidden />
                    <h2 className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-100">
                      {item.label}
                    </h2>
                    <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <div className="relative h-full rounded-3xl border border-slate-100/10 bg-slate-900/40 p-8 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.7)] backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium uppercase tracking-widest text-slate-200">
                  Launch kit overview
                </p>
                <Sparkles className="h-5 w-5 text-indigo-300" aria-hidden />
              </div>
              <p className="mt-4 text-base text-slate-200">
                We deliver the copy, layout, assets, and integrations required to launch a persuasive
                lead capture experience without diverting your internal teams.
              </p>
              <dl className="mt-8 grid gap-6">
                <div className="rounded-2xl border border-slate-100/10 bg-slate-900/60 px-5 py-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Included deliverables
                  </dt>
                  <dd className="mt-3 space-y-2 text-sm text-slate-200">
                    <p className="flex items-start gap-2">
                      <Layers className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-300" aria-hidden />
                      <span>Responsive page templates tuned for MLM conversion.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <ClipboardCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-300" aria-hidden />
                      <span>Custom form strategy with validations and consent language.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <BarChart3 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-300" aria-hidden />
                      <span>Analytics configuration for real-time lead attribution.</span>
                    </p>
                  </dd>
                </div>
                <div className="rounded-2xl border border-slate-100/10 bg-slate-900/60 px-5 py-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Collaboration cadence
                  </dt>
                  <dd className="mt-3 text-sm text-slate-200">
                    Weekly checkpoints keep stakeholders aligned while our team handles the
                    production workload.
                  </dd>
                </div>
              </dl>
              <div className="mt-8 rounded-2xl border border-slate-100/10 bg-slate-950/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Explore more features
                </p>
                <Link
                  href={featuresHref}
                  className="mt-3 inline-flex items-center text-sm font-medium text-sky-300 transition hover:text-sky-200"
                >
                  View the complete feature stack
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Why high-performance LCP pages transform campaign performance
          </h2>
          <p className="text-base text-muted-foreground">
            Cloud MLM Software pairs your marketing strategy with a disciplined landing framework.
            Every visitor receives a persuasive, trustworthy, and action-oriented experience that
            reflects your brand promise and captures the exact data your teams need.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {GROWTH_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="flex h-full flex-col rounded-3xl border border-border/60 bg-gradient-to-b from-background to-muted/50 p-8 shadow-[0_15px_35px_-25px_rgba(15,23,42,0.4)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{pillar.description}</p>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/40 py-20">
        <div className="container space-y-12">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Our landing page operating framework
            </h2>
            <p className="text-base text-muted-foreground">
              From promise mapping to post-launch optimisation, we run a structured delivery model
              that keeps your stakeholders informed while we build, automate, and measure.
            </p>
          </div>
          <ol className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {FRAMEWORK_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.step}
                  className="relative overflow-hidden rounded-3xl border border-border/60 bg-background p-8 shadow-[0_25px_45px_-30px_rgba(15,23,42,0.45)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-muted-foreground">{step.step}</span>
                    <Icon className="h-5 w-5 text-primary" aria-hidden />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{step.focus}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{step.outcome}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Everything you need for a persuasive, compliant LCP experience
            </h2>
            <p className="text-base text-muted-foreground">
              Your campaign assets and our landing expertise combine to deliver a focused journey.
              We design, build, and optimise while you steer the strategy and message.
            </p>
            <div className="grid gap-8">
              {RESOURCE_COLUMNS.map((column) => {
                const Icon = column.icon;
                return (
                  <div
                    key={column.title}
                    className="rounded-3xl border border-border/60 bg-muted/30 p-8"
                  >
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{column.title}</h3>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">{column.description}</p>
                    <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                      {column.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <Sparkles className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <aside className="flex h-full flex-col justify-between gap-10 rounded-3xl border border-border/60 bg-gradient-to-b from-background to-muted/40 p-10">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Collaboration snapshot
              </p>
              <p className="text-base text-muted-foreground">
                We meet you where you are. Bring your existing assets or lean on our team for copy,
                creative, and compliance-ready language. Every iteration is version-controlled so you
                have a clear audit trail.
              </p>
            </div>
            <div className="space-y-6">
              {INSIGHTS.map((insight) => {
                const Icon = insight.icon;
                return (
                  <div key={insight.title} className="rounded-2xl border border-border/50 bg-background p-6">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <h4 className="text-base font-semibold text-foreground">{insight.title}</h4>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{insight.description}</p>
                  </div>
                );
              })}
            </div>
            <div>
              <Button asChild className="w-full">
                <Link href={contactHref}>
                  Start your landing plan
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent px-8 py-12 sm:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                Ready to deploy a high-performing lead capture page?
              </h2>
              <p className="text-base text-muted-foreground">
                Cloud MLM Software transforms your marketing ideas into conversion engines with
                measurable ROI. Let’s plan a landing experience your distributors are proud to share.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild variant="outline">
                <Link href={featuresHref}>Explore more features</Link>
              </Button>
              <Button asChild>
                <Link href={demoHref}>
                  Schedule a walkthrough
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
