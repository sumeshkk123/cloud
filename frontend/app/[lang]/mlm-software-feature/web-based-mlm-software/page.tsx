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
  CheckCircle2,
  Code2,
  Gauge,
  LayoutDashboard,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import {
  ArrowsClockwise,
  Devices,
  Globe,
  RocketLaunch,
  Stack,
  WifiHigh
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroFact = {
  title: string;
  description: string;
  icon: IconType;
};

type AccessPillar = {
  title: string;
  description: string;
  proofPoint: string;
  icon: IconType;
};

type EngineeringFoundation = {
  title: string;
  detail: string;
  icon: IconType;
};

type ExperienceStep = {
  title: string;
  description: string;
};

type CapabilityGroup = {
  title: string;
  description: string;
  items: string[];
  icon: IconType;
};

const HERO_FACTS: HeroFact[] = [
  {
    title: "Responsive without plugins",
    description: "Runs flawlessly on mobiles, laptops, tablets, and desktops through the browser-based interface.",
    icon: Devices
  },
  {
    title: "Optimised asset pipeline",
    description: "Combined scripts, minified style sheets, and compressed resources keep load times consistently low.",
    icon: Gauge
  },
  {
    title: "Concurrent-ready platform",
    description: "Multiple teams can work simultaneously without session drops or memory concerns.",
    icon: WifiHigh
  }
];

const ACCESS_PILLARS: AccessPillar[] = [
  {
    title: "Use from any connected device",
    description: "Log in from browsers you trust—Chrome, Safari, Firefox, or Edge—and keep workflows intact on every screen size.",
    proofPoint: "Ideal for field leaders who switch between phones during events and desktop dashboards in the office.",
    icon: Globe
  },
  {
    title: "Adaptive layouts for clarity",
    description: "Interface elements realign based on device proportions so reports, wallets, and enrolment tools stay legible.",
    proofPoint: "Tailored alignments mean the same dashboard is reliable whether you hold a tablet vertically or project it in a boardroom.",
    icon: LayoutDashboard
  },
  {
    title: "Always-on collaboration",
    description: "Distributors, finance teams, and support agents can remain signed in concurrently with safeguarded sessions.",
    proofPoint: "Perfect for rapid campaign launches where operations, compliance, and marketing work together in real time.",
    icon: ArrowsClockwise
  }
];

const ENGINEERING_FOUNDATIONS: EngineeringFoundation[] = [
  {
    title: "Laravel, HTML5, and Bootstrap at the core",
    detail: "A modern stack makes the experience fast, maintainable, and secure across the admin and member journeys.",
    icon: Stack
  },
  {
    title: "Minified and modular resources",
    detail: "Script bundles and stylesheets are merged and compressed to deliver premium performance in low-bandwidth regions.",
    icon: Code2
  },
  {
    title: "Server response tuned for speed",
    detail: "Caching strategies and request handling keep dashboards fluid even when global teams join simultaneously.",
    icon: Gauge
  },
  {
    title: "Best-practice hardening",
    detail: "Web artisan principles and continual optimisation keep the platform stable for years with minimal updates.",
    icon: ShieldCheck
  }
];

const EXPERIENCE_STEPS: ExperienceStep[] = [
  {
    title: "Sign in from anywhere",
    description: "Admin and distributor accounts are available wherever there’s a browser, making remote operations effortless."
  },
  {
    title: "Align to each screen automatically",
    description: "Navigation, drawers, and reports reflow to match the device orientation so visibility never suffers."
  },
  {
    title: "Command the network in real time",
    description: "Dashboards, wallets, and reporting stay reachable, providing full control across teams and time zones."
  },
  {
    title: "Stay future-ready with proven foundations",
    description: "Modern frameworks and optimisation patterns reduce the need for disruptive rebuilds or urgent patching."
  }
];

const CAPABILITY_GROUPS: CapabilityGroup[] = [
  {
    title: "Experience modules",
    description: "Craft polished journeys for distributors and customers with tools that are intuitive from the first click.",
    items: [
      "Clean Interface & Easy to Use",
      "Support / Ticket System Module",
      "Powerful E-mail System",
      "Auto Responder System",
      "Replicating Website"
    ],
    icon: Sparkles
  },
  {
    title: "Global readiness",
    description: "Launch in any market with localisation, communications, and compliance baked into the platform.",
    items: [
      "Multilingual Translational System",
      "Multi Currency System",
      "SMS Integration (International/National)",
      "White Label MLM Software",
      "Advanced Reporting System"
    ],
    icon: Globe
  },
  {
    title: "Performance engineering",
    description: "Keep the platform quick, secure, and integration-friendly as your organisation scales.",
    items: [
      "Improved Page Speed",
      "Dynamic Compression System",
      "Minified Source, Minified Resources",
      "Backend Caching Technology",
      "Flexible to Integrate with Various Platforms"
    ],
    icon: ShieldCheck
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Web-Based MLM Software";
  const description =
    "Operate Cloud MLM Software from any browser with responsive layouts, optimised assets, and enterprise-grade stability for global direct selling brands.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/web-based-mlm-software", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type WebBasedMlmSoftwarePageProps = {
  params: { lang: SupportedLocale };
};

export default function WebBasedMlmSoftwarePage({ params }: WebBasedMlmSoftwarePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const featuresHref = buildLocalizedPath("/features", locale);

  return (
    <div className="space-y-24 pb-28">
      <section className="relative overflow-hidden border-b border-slate-900/20 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1f2937] py-24 text-slate-50 dark:border-slate-50/10">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(96,165,250,0.35),transparent_60%),radial-gradient(circle_at_85%_30%,rgba(165,180,252,0.28),transparent_65%),radial-gradient(circle_at_40%_85%,rgba(52,211,153,0.18),transparent_70%)]"
          aria-hidden
        />
        <div className="container relative grid gap-16 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,0.38fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-500/40 bg-slate-900/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em]">
              Web-Based Operations
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Web-based MLM software that performs anywhere your team logs in.
              </h1>
              <p className="text-base text-slate-200">
                Cloud MLM Software is fully browser-driven, so your organisation can enrol, coach, and analyse from any internet-connected device. No installs, no plugins—just secure access engineered for hybrid workforces.
              </p>
              <p className="text-sm text-slate-300">
                By merging and compressing core assets, optimising server responses, and applying proven web artisan practices, the experience stays fast and consistent even during global peak periods.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-slate-50 text-slate-900 hover:bg-slate-200">
                <Link href={contactHref}>
                  Discuss your access strategy
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-200/70 text-slate-100 hover:bg-slate-800/70">
                <Link href={demoHref}>
                  Explore the live demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-slate-500/40 bg-slate-900/60 p-6 shadow-xl backdrop-blur">
            {HERO_FACTS.map((fact) => {
              const Icon = fact.icon;
              return (
                <article key={fact.title} className="flex gap-4 rounded-2xl border border-slate-500/30 bg-slate-900/60 p-5">
                  <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100/10 text-slate-100">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1.5">
                    <h2 className="text-base font-semibold text-slate-50">{fact.title}</h2>
                    <p className="text-sm text-slate-200/80">{fact.description}</p>
                  </div>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Operate with confidence on every screen.
          </h2>
          <p className="text-sm text-muted-foreground">
            From enrolment drives to finance reconciliations, your teams stay productive thanks to adaptive layouts and resilient sessions that travel with them.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ACCESS_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
                <p className="text-xs text-muted-foreground">{pillar.proofPoint}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-background via-background to-primary/5 p-10 shadow-sm dark:from-slate-950 dark:via-slate-950 dark:to-primary/10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Engineering foundations that keep the platform fast and future-proof.
              </h2>
              <p className="text-sm text-muted-foreground">
                The Cloud MLM Software stack is tuned for speed and resilience. Modern frameworks combine with optimisation tactics so your infrastructure carries less technical debt and more opportunity for innovation.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-primary" aria-hidden />
                  <span>Compressed resources shorten page loads for field teams travelling on limited networks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-primary" aria-hidden />
                  <span>Proactive performance tuning reduces the need for emergency maintenance windows.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-primary" aria-hidden />
                  <span>Secure-by-design patterns keep sensitive payouts and enrolments protected end to end.</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              {ENGINEERING_FOUNDATIONS.map((foundation) => {
                const Icon = foundation.icon;
                return (
                  <article key={foundation.title} className="flex gap-4 rounded-3xl border border-border/60 bg-background/80 p-5 shadow-sm">
                    <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-base font-semibold text-foreground">{foundation.title}</h3>
                      <p className="text-sm text-muted-foreground">{foundation.detail}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A daily workflow that scales with your network.
          </h2>
          <p className="text-sm text-muted-foreground">
            Every touchpoint—from dashboard refreshes to commission reports—remains available anywhere so leaders and back-office teams never lose momentum.
          </p>
        </div>
        <ol className="relative space-y-6 border-l border-border/60 pl-6">
          {EXPERIENCE_STEPS.map((step, index) => (
            <li key={step.title} className="ml-4 space-y-2">
              <span className="absolute -left-[26px] flex h-6 w-6 items-center justify-center rounded-full border border-border/60 bg-background text-xs font-semibold text-foreground">
                {index + 1}
              </span>
              <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Built-in capabilities ready for rapid deployment.
          </h2>
          <p className="text-sm text-muted-foreground">
            Pair core modules with your growth strategy. Each capability is already tuned for a browser-first experience, so scaling into new markets feels effortless.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {CAPABILITY_GROUPS.map((group) => {
            const Icon = group.icon;
            return (
              <article key={group.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-background/80 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{group.title}</h3>
                    <p className="text-xs text-muted-foreground">{group.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-3.5 w-3.5 text-primary" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-background to-primary/10 p-10 shadow-sm dark:via-slate-950">
          <div className="absolute -left-24 top-12 h-40 w-40 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute -right-20 bottom-0 h-52 w-52 rounded-full bg-slate-200/40 blur-3xl dark:bg-slate-900/40" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)]">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Launch your browser-first MLM experience.
              </h2>
              <p className="text-sm text-muted-foreground">
                Share your current infrastructure or invite us to review device usage patterns. We will map a deployment plan that keeps performance high while respecting your security and compliance guardrails.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href={contactHref}>
                    Talk with our platform strategists
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                  <Link href={featuresHref}>
                    Browse more Cloud MLM capabilities
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-primary/30 bg-background/80 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/70">
                Readiness essentials
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <RocketLaunch className="mt-1 h-4 w-4 text-primary" aria-hidden />
                  <span>Document the workflows you expect to manage remotely—from enrolments to payouts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-4 w-4 text-primary" aria-hidden />
                  <span>Outline device and security policies so we align authentication controls from day one.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="mt-1 h-4 w-4 text-primary" aria-hidden />
                  <span>Identify the metrics that define success, such as load times, adoption rates, and support ticket volume.</span>
                </li>
              </ul>
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
