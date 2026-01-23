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
  BookOpen,
  Gauge,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Workflow
} from "lucide-react";
import { Circuitry, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  title: string;
  description: string;
  icon: IconType;
};

type Track = {
  title: string;
  summary: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Launch-ready infrastructure",
    description:
      "Spin up compensation engines, onboarding journeys, and branded portals without hiring a full engineering squad.",
    icon: Rocket
  },
  {
    title: "Cost-conscious scaling",
    description:
      "Start with starter tier pricing, then flex into enterprise capabilities as product-market fit accelerates.",
    icon: Gauge
  },
  {
    title: "Guided by experts",
    description:
      "Our consultants co-create go-live plans so your startup avoids common pitfalls and regulatory headaches.",
    icon: ShieldCheck
  }
];

const TRACKS: Track[] = [
  {
    title: "Growth blueprint",
    summary: "Define compensation hypotheses, distributor personas, and compliance guardrails before you invest heavily.",
    icon: Lightbulb
  },
  {
    title: "Product enablement",
    summary: "Deploy automated onboarding, mobile apps, and content hubs that keep early distributors confident and active.",
    icon: Workflow
  },
  {
    title: "Data foundations",
    summary: "Integrate CRM, billing, and analytics so leadership can adjust strategy using real-time feedback.",
    icon: Circuitry
  },
  {
    title: "Investor readiness",
    summary: "Package performance dashboards and compliance evidence that instil confidence in backers and partners.",
    icon: BookOpen
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MLM Software for Startups";
  const description =
    "Launch your MLM startup with Cloud MLM Software—fast configuration, startup-friendly pricing, and expert guidance.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-for-startups", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type StartupsPageProps = {
  params: { lang: SupportedLocale };
};

export default function StartupsPage({ params }: StartupsPageProps) {
  const locale = resolveLocale(params.lang);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const consultingHref = buildLocalizedPath("/mlm-consulting", locale);
  const contactHref = buildLocalizedPath("/contact", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-indigo-950 via-slate-950 to-cyan-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(99,102,241,0.28),transparent_45%),radial-gradient(circle_at_84%_20%,rgba(56,189,248,0.22),transparent_55%)]" />
        <div className="container space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/60 bg-indigo-400/10 px-4 py-1 text-sm font-semibold text-indigo-100">
            Built for emerging MLM brands
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Launch your MLM startup with enterprise foundations—and startup speed.
          </h1>
          <p className="max-w-3xl text-base text-slate-200/85">
            Whether you’re validating your first compensation model or preparing for scale, Cloud MLM Software delivers the infrastructure, automation, and advisory support to move from idea to impact fast.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-white/90">
              <Link href={demoHref}>
                Watch the product demo
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-indigo-200/60 text-indigo-100 hover:bg-indigo-400/10">
              <Link href={consultingHref}>
                Meet our startup advisors
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Why founders choose Cloud MLM Software</h2>
          <p className="text-sm text-muted-foreground">Three pillars empower you to focus on market fit while we handle the foundation.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <article key={highlight.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Tracks designed for your first year</h2>
            <p className="text-sm text-muted-foreground">
              Mix and match acceleration tracks based on where you are in the journey—from concept to post-launch optimisation.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TRACKS.map((track) => {
              const Icon = track.icon;
              return (
                <article key={track.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{track.title}</h3>
                  <p className="text-sm text-muted-foreground">{track.summary}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/5 via-background to-indigo-50 p-10 shadow-sm dark:border-primary/60 dark:from-primary/10 dark:via-slate-950 dark:to-indigo-950/40">
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-60 w-60 translate-y-1/3 rounded-full bg-sky-200/25 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ready to launch faster?</h2>
              <p className="text-sm text-muted-foreground">
                Share your product vision, compensation draft, and launch timing. We’ll craft a tailored proposal outlining implementation sprints and investment levels aligned with startup realities.</p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-background/80 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-slate-950/60">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Request a launch plan</h3>
                <p className="text-sm text-muted-foreground">
                  Expect a follow-up within one business day with next steps and a discovery questionnaire.</p>
              </div>
              <Button asChild>
                <Link href={contactHref}>
                  Request now
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
