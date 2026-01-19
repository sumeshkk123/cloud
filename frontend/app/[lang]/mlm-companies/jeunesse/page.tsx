import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, CalendarClock, Camera, Droplet, Globe2, HeartPulse, Rocket, ShieldCheck, Sparkles, Users } from "lucide-react";
import { ChartLineUp, GlobeHemisphereEast, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Experience = {
  title: string;
  summary: string;
  outcome: string;
  icon: IconType;
};

type LaunchStep = {
  stage: string;
  description: string;
};

type CloudMove = {
  title: string;
  description: string;
  highlight: string;
  icon: IconType;
};

const METRICS: Metric[] = [
  {
    label: "Revenue",
    value: "$1.46B",
    detail: "Jeunesse remains one of the world’s fastest-scaling youth enhancement brands.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "2009",
    detail: "Launched in Lake Mary, Florida with an Asia-first expansion roadmap.",
    icon: CalendarClock
  },
  {
    label: "Employees",
    value: "924",
    detail: "Global experts in product innovation, compliance, and experiential marketing.",
    icon: Users
  }
];

const EXPERIENCES: Experience[] = [
  {
    title: "Youth enhancement system",
    summary: "Skincare, nutrition, and digital wellbeing experiences unite under the Jeunesse Y.E.S. philosophy.",
    outcome: "Customers join tailored programs that emphasise beauty, vitality, and community support.",
    icon: Droplet
  },
  {
    title: "Lead with lifestyle media",
    summary: "Events, social commerce, and documentary storytelling showcase real transformations.",
    outcome: "Consultants operate like content creators backed by brand cinematography and live-stream training.",
    icon: Camera
  },
  {
    title: "Inspire through global giving",
    summary: "Jeunesse Kids and philanthropic missions demonstrate purpose-driven leadership.",
    outcome: "Human impact narratives bolster trust across Asia, Europe, and the Americas.",
    icon: HeartPulse
  }
];

const LAUNCH_STEPS: LaunchStep[] = [
  {
    stage: "01. Build the aura",
    description: "Deploy cinematic content, influencer collaborations, and AI-personalised web experiences."
  },
  {
    stage: "02. Activate field labs",
    description: "Provide experiential starter kits, beauty tech diagnostics, and compliance microlearning."
  },
  {
    stage: "03. Sustain communities",
    description: "Reward participation, share success dashboards, and host hybrid recognition festivals."
  }
];

const CLOUD_MOVES: CloudMove[] = [
  {
    title: "Creator commerce studio",
    description: "Centralise video assets, scripts, and social kits with localisation workflows for 30+ markets.",
    highlight: "Version control, approval flows, and AI captioning keep content on-brand and compliant.",
    icon: Rocket
  },
  {
    title: "Beauty telemetry engine",
    description: "Track regimen outcomes, subscription renewal, and cross-border logistics in one view.",
    highlight: "Predictive alerts help consultants rescue churn before it happens.",
    icon: GlobeHemisphereEast
  },
  {
    title: "Purpose analytics dashboard",
    description: "Visualise Jeunesse Kids impact, ESG investments, and volunteer hours alongside revenue.",
    highlight: "Investor-ready storytelling that speaks to regulators, consumers, and philanthropists.",
    icon: ShieldCheck
  },
  {
    title: "AI retention concierge",
    description: "Guide consultants with smart prompts for check-ins, sampling, and event invites.",
    highlight: "Chat-led workflows accelerate onboarding and elevate customer satisfaction.",
    icon: Sparkles
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Jeunesse Global Opportunity Breakdown";
  const description =
    "Analyse how Jeunesse Global accelerates youth-enhancing products across Asia and beyond, and see how Cloud MLM Software delivers the same experiential excellence.";
  const keywords = [
    "Jeunesse Global analysis",
    "Youth enhancement MLM strategy",
    "Jeunesse compensation insights",
    "Beauty direct selling software",
    "Cloud MLM Software for cosmetics"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/jeunesse", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type JeunessePageProps = {
  params: { lang: SupportedLocale };
};

export default function JeunessePage({ params }: JeunessePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-white via-[#eef4ff] to-[#f9f0ff] py-20 dark:border-border/40 dark:from-slate-950 dark:via-purple-950 dark:to-blue-950">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(79,70,229,0.18),transparent_55%),radial-gradient(circle_at_82%_26%,rgba(236,72,153,0.22),transparent_60%),radial-gradient(circle_at_48%_90%,rgba(14,165,233,0.2),transparent_60%)]"
          aria-hidden
        />
        <div className="container grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,0.65fr)]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-700 dark:border-white/25 dark:bg-white/10 dark:text-white">
              #14 • Jeunesse Global (Lake Mary • Asia-first)
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Youth enhancement that blends beauty, wellness, and cinematic storytelling.
              </h1>
              <p className="text-base text-slate-700 dark:text-slate-200/80">
                Jeunesse inspires people to look and feel younger while building a purpose-led community. Decode the $1.46B blueprint that unites
                lifestyle media, philanthropic missions, and AI-enabled field coaching.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Tour the AI experience studio
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-indigo-500/10 text-indigo-700 hover:bg-indigo-500/20 dark:bg-white/10 dark:text-white">
                <Link href={pricingHref}>
                  Review investment tiers
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-indigo-200 text-indigo-700 hover:bg-indigo-500/10 dark:border-white/40 dark:text-white">
                <Link href={contactHref}>
                  Partner with us
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-indigo-200/70 bg-white/70 p-8 shadow-lg backdrop-blur dark:border-white/20 dark:bg-slate-950/70">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-200">Growth signals</span>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                Stats that reflect Jeunesse’s youth-focused leadership.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {METRICS.map((metric) => {
                const Icon = metric.icon;
                return (
                  <article key={metric.label} className="flex h-full flex-col gap-2 rounded-2xl border border-indigo-100 bg-white/90 p-4 dark:border-white/10 dark:bg-slate-900/70">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600 dark:bg-white/10 dark:text-white">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <p className="text-xs uppercase tracking-widest text-indigo-700/80 dark:text-indigo-100/80">{metric.label}</p>
                    <p className="text-2xl font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-200/80">{metric.detail}</p>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Experience pillars</h2>
          <p className="text-sm text-muted-foreground">
            Jeunesse fuses premium skincare, nutritional science, and human stories. Use these pillars to own the youth enhancement category.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {EXPERIENCES.map((experience) => {
            const Icon = experience.icon;
            return (
              <article
                key={experience.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-purple-50 p-6 shadow-sm dark:border-border/40 dark:from-slate-950 dark:via-slate-950 dark:to-purple-950/40"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{experience.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{experience.summary}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{experience.outcome}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border/60 bg-white py-20 dark:border-border/40 dark:bg-slate-950/75">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(79,70,229,0.16),transparent_55%),radial-gradient(circle_at_78%_26%,rgba(236,72,153,0.16),transparent_60%)]" aria-hidden />
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-700 dark:border-white/30 dark:bg-white/10 dark:text-white">
              Launch choreography
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Roll out like Jeunesse.</h2>
            <p className="text-sm text-muted-foreground">
              Stage your expansion through immersive storytelling, field enablement, and participation-led retention.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {LAUNCH_STEPS.map((step) => (
              <article
                key={step.stage}
                className="flex h-full flex-col gap-3 rounded-3xl border border-indigo-100 bg-indigo-50/90 p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/70"
              >
                <h3 className="text-lg font-semibold text-foreground">{step.stage}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Cloud MLM Software for youth-centric empires
          </h2>
          <p className="text-sm text-muted-foreground">
            Equip your field with creator workflows, retention AI, and impact analytics that mirror Jeunesse’s polish.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CLOUD_MOVES.map((move) => {
            const Icon = move.icon;
            return (
              <article
                key={move.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm dark:border-border/40 dark:bg-slate-950/70"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{move.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{move.description}</p>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{move.highlight}</span>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href={pricingHref}>
              Explore pricing
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href={contactHref}>
              Book an innovation consult
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
