import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { buildLocalizedPath } from "@/lib/locale-links";
import { isSupportedLocale } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { ArrowUpRight, MonitorSmartphone, Radar, Sparkle } from "lucide-react";
import {
  Devices,
  Gauge,
  GlobeHemisphereWest,
  RocketLaunch,
  TrafficCone,
  WifiHigh
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Metric = {
  label: string;
  value: string;
  description: string;
  icon: IconType;
};

type ExperiencePillar = {
  title: string;
  summary: string;
  highlights: string[];
  icon: IconType;
};

type OptimizationMethod = {
  title: string;
  detail: string;
  outcome: string;
};

type ReadinessItem = {
  title: string;
  description: string;
};

const HERO_METRICS: Metric[] = [
  {
    label: "Experience grade",
    value: "Responsive 360°",
    description: "Layouts recalibrate across desktops, tablets, and smartphones so journeys stay consistent.",
    icon: Devices
  },
  {
    label: "Median load time",
    value: "Under 2s",
    description: "Compression, caching, and asset orchestration keep sessions fast even on slower networks.",
    icon: Gauge
  },
  {
    label: "Rollout coverage",
    value: "Global-ready",
    description: "Multi-currency and localisation hooks maintain governance in every market.",
    icon: GlobeHemisphereWest
  }
];

const EXPERIENCE_PILLARS: ExperiencePillar[] = [
  {
    title: "Operational clarity",
    summary: "Optimisation removes friction, letting teams focus on distributor success instead of troubleshooting UI quirks.",
    highlights: [
      "Streamline operations by removing duplicate workflows and wasted taps.",
      "Optimise resource consumption across assets, field teams, and infrastructure.",
      "Deliver the best outcome with balanced spend on time, effort, and manpower."
    ],
    icon: Radar
  },
  {
    title: "Brand reach amplified",
    summary: "Consistent multi-device access builds trust and extends visibility for every campaign.",
    highlights: [
      "Increase online coverage and protect brand integrity across every storefront.",
      "Drive long-term awareness with experiences tuned for each screen size.",
      "Stay ahead of competitors by owning the omnichannel conversation."
    ],
    icon: RocketLaunch
  },
  {
    title: "Performance and scale",
    summary: "The platform inherits the legacy site insights and adds enterprise-grade control for today's growth.",
    highlights: [
      "Boost critical traffic with smart routing and lightweight components.",
      "Simplify global application delivery without compromising security.",
      "Maintain uptime while analytics and commerce data synchronise in real time."
    ],
    icon: TrafficCone
  }
];

const OPTIMIZATION_METHODS: OptimizationMethod[] = [
  {
    title: "Dynamic compression system",
    detail: "Adaptive media delivery keeps payouts, dashboards, and learning modules fast across bandwidth profiles.",
    outcome: "Distributors transact confidently without waiting for essential screens."
  },
  {
    title: "Intelligent multi-currency flows",
    detail: "Localised price books and exchange logic ensure buying power mirrors each market's reality.",
    outcome: "Finance teams govern settlements while distributors see accurate totals in their preferred currency."
  },
  {
    title: "Screen-aware experience",
    detail: "Responsive breakpoints, accessible typography, and intuitive gestures maintain clarity on any device.",
    outcome: "Members enjoy the same simplicity whether they operate in the field or from HQ."
  }
];

const READINESS_ITEMS: ReadinessItem[] = [
  {
    title: "Map your device mix",
    description: "Share adoption data for desktop, tablet, and mobile so we can allocate optimisation investments deliberately."
  },
  {
    title: "Prioritise critical journeys",
    description: "Flag enrolments, payouts, support, and analytics workflows that must remain flawless at every breakpoint."
  },
  {
    title: "Align brand expression",
    description: "Provide typography, colour, and motion guidelines so your identity remains intact across modes."
  },
  {
    title: "Plan observability",
    description: "Define the KPIs—page speed, conversion, retention—that our dashboards should track post-launch."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Optimized to Use in All Devices MLM Software";
  const description =
    "Deliver a responsive, multi-device MLM experience with Cloud MLM Software. Optimise performance, governance, and brand engagement across desktop, tablet, and mobile.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/optimized-to-use-in-all-devices", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type OptimizedToUseInAllDevicesPageProps = {
  params: { lang: SupportedLocale };
};

export default function OptimizedToUseInAllDevicesPage({ params }: OptimizedToUseInAllDevicesPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const featuresHref = buildLocalizedPath("/features", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 text-slate-100">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(96,165,250,0.22),transparent_55%),radial-gradient(circle_at_85%_10%,rgba(56,189,248,0.35),transparent_60%),linear-gradient(140deg,rgba(37,99,235,0.25),rgba(15,118,110,0.15))]"
          aria-hidden
        />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.5fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-100">
              Multi-device feature
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Optimized to use in all devices without compromising speed or governance.
              </h1>
              <p className="text-base text-slate-200/85">
                Inspired by the original WordPress experience, this page evolves the promise into a modern, multi-device architecture. Cloud MLM Software keeps every interaction responsive while respecting compliance and data integrity across your global network.
              </p>
              <p className="text-sm text-slate-200/75">
                Whether members join from mobile data or leadership reviews analytics on a wide display, the workspace adapts instantly—protecting conversion paths and customer trust.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={contactHref}>
                  Design my responsive rollout
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-cyan-200/60 text-cyan-100 hover:bg-cyan-400/10">
                <Link href={demoHref}>
                  Join the live device tour
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
            {HERO_METRICS.map(({ label, value, description, icon: Icon }) => (
              <article key={label} className="rounded-2xl border border-white/15 bg-black/30 p-5 shadow-sm">
                <div className="flex items-center justify-between text-slate-100">
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-widest text-slate-200/60">{label}</p>
                    <p className="text-3xl font-bold">{value}</p>
                  </div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-100">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-200/80">{description}</p>
              </article>
            ))}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Why multi-device optimisation powers MLM growth
          </h2>
          <p className="text-sm text-muted-foreground">
            The legacy content highlighted operational efficiency, visibility, and scalability. We translated those ideas into Cloud MLM optimisation pillars that create measurable impact today.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {EXPERIENCE_PILLARS.map(({ title, summary, highlights, icon: Icon }) => (
            <article
              key={title}
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 p-8 shadow-sm"
            >
              <div className="absolute inset-x-0 -top-1 h-1 bg-gradient-to-r from-cyan-400 via-primary to-emerald-400" aria-hidden />
              <div className="space-y-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{summary}</p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/15 via-background to-background" aria-hidden />
        <div className="container space-y-10 py-20">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Methods behind our optimisation framework
            </h2>
            <p className="text-sm text-muted-foreground">
              The original page listed key techniques—dynamic compression, multi-currency support, and screen optimisation. We refined them into a delivery-ready programme.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {OPTIMIZATION_METHODS.map(({ title, detail, outcome }) => (
              <article key={title} className="flex h-full flex-col justify-between rounded-3xl border border-border/70 bg-background/90 p-8 shadow-sm dark:bg-slate-950/70">
                <div className="space-y-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MonitorSmartphone className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground">{detail}</p>
                </div>
                <div className="mt-6 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4 text-xs uppercase tracking-[0.3em] text-primary/70">
                  {outcome}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Readiness checklist for your rollout
            </h2>
            <p className="text-sm text-muted-foreground">
              Bring your data and ambitions—we will orchestrate the optimisation plan, observability, and enablement playbooks.
            </p>
            <div className="rounded-3xl border border-primary/30 bg-primary/5 p-6 text-sm text-primary dark:bg-slate-950/70">
              <p className="font-semibold uppercase tracking-[0.4em]">Enablement add-ons</p>
              <ul className="mt-3 space-y-2 text-primary/80">
                <li className="flex gap-2">
                  <Sparkle className="h-4 w-4" aria-hidden />
                  <span>Content governance that protects tone, imagery, and localisation.</span>
                </li>
                <li className="flex gap-2">
                  <WifiHigh className="h-4 w-4" aria-hidden />
                  <span>Network-aware delivery rules to maintain uptime during traffic spikes.</span>
                </li>
                <li className="flex gap-2">
                  <MonitorSmartphone className="h-4 w-4" aria-hidden />
                  <span>Cross-device QA scripts covering the journeys you care about most.</span>
                </li>
              </ul>
            </div>
            <Button asChild size="lg" variant="outline" className="w-full border-primary/40 text-primary hover:bg-primary/10">
              <Link href={featuresHref}>
                Explore additional optimisation features
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
          <div className="rounded-3xl border border-border/70 bg-background/90 p-8 shadow-sm dark:bg-slate-950/70">
            <ol className="space-y-6">
              {READINESS_ITEMS.map(({ title, description }, index) => (
                <li key={title} className="flex gap-4">
                  <span className="mt-1 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-sm font-semibold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-foreground">{title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-background to-primary/5 p-10 shadow-lg">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.35fr)]">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Ready to lead with multi-device excellence?
              </h2>
              <p className="text-sm text-muted-foreground">
                Cloud MLM Software delivers the responsive foundation your members expect—documented, measurable, and ready for continuous improvement.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                  <Link href={contactHref}>
                    Build my optimisation roadmap
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                  <Link href={demoHref}>
                    See the multi-device demo
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-3 text-sm text-muted-foreground">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-slate-100">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-200/70">Governance snapshot</p>
                <p className="mt-3 text-base font-semibold text-white">
                  Regular audits measure load times, accessibility scores, and adoption metrics across every form factor.
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-slate-100">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-200/70">Support promise</p>
                <p className="mt-3 text-base font-semibold text-white">
                  24/7 monitoring with escalation runbooks keeps your commerce flows running without interruption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: SupportedLocale): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
