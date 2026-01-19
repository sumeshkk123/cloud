import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  Compass,
  GlobeHemisphereNorth,
  Lightning,
  MapPin,
  Mountains,
  SealCheck,
  Snowflake,
  Sparkle,
  Waves
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Pillar = {
  title: string;
  description: string;
  icon: IconType;
};

type SequenceStep = {
  label: string;
  heading: string;
  body: string;
};

type IcelandSignal = {
  title: string;
  detail: string;
  icon: IconType;
};

const PILLARS: Pillar[] = [
  {
    title: "Thought leadership",
    description:
      "Transform Valitor’s secure, fast, seamless promise into Iceland-focused keynotes, analyst briefings, and AI prompt books.",
    icon: Sparkle
  },
  {
    title: "Experience prototyping",
    description:
      "Simulate cross-border commerce, tourism packages, and subscription journeys tailored to Iceland’s digital economy.",
    icon: Mountains
  },
  {
    title: "Operational guardianship",
    description:
      "Automate monitoring, compliance, and recovery so Valitor remains trusted through seasonal travel surges and peak sales.",
    icon: SealCheck
  }
];

const SEQUENCE_STEPS: SequenceStep[] = [
  {
    label: "01",
    heading: "Narrative alignment",
    body:
      "Rebuild the archive into executive-ready storytelling, enabling leadership to position Valitor as the payments backbone for Icelandic innovators."
  },
  {
    label: "02",
    heading: "Journey rehearsal",
    body:
      "Prototype in-person, digital, and hybrid payment scenarios while gathering distributor and partner feedback for continuous improvement."
  },
  {
    label: "03",
    heading: "Command and assurance",
    body:
      "Instrument finance, support, and compliance with telemetry that tracks Valitor adoption, risk posture, and recovery readiness."
  }
];

const ICELAND_SIGNALS: IcelandSignal[] = [
  {
    title: "August 28, 2024 — Iceland highlighted",
    detail:
      "The archive confirms Iceland within the supported country list, empowering our go-to-market story with verifiable evidence.",
    icon: MapPin
  },
  {
    title: "Sustainable commerce lens",
    detail:
      "We pair Valitor messaging with Iceland’s sustainability commitments, equipping executives with narratives that resonate across public and private sectors.",
    icon: GlobeHemisphereNorth
  },
  {
    title: "Peak-season readiness",
    detail:
      "AI copilots and dashboards forecast travel and retail peaks, ensuring Valitor capacity planning remains ahead of demand.",
    icon: Snowflake
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Valitor Payment Gateway for Cloud MLM Software";
  const description =
    "Evolve the Valitor Payment Gateway archive into an Iceland-first launch system balancing narrative leadership, experience design, and operational assurance.";

  return {
    title,
    description,
    keywords: [
      "Valitor payment gateway integration",
      "Iceland MLM software payments",
      "Cloud MLM Software Valitor",
      "secure fast seamless Valitor",
      "AI enablement for Valitor"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/valitor", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type ValitorPageProps = {
  params: { lang: SupportedLocale };
};

export default function ValitorPage({ params }: ValitorPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section className="relative isolate overflow-hidden rounded-[3rem] border border-sky-100 bg-gradient-to-br from-[#eef8ff] via-white to-[#f4fcff] px-8 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-[#031426] dark:via-[#030b14] dark:to-black">
        <div className="absolute -left-10 top-12 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl dark:bg-sky-500/20" />
        <div className="absolute -right-14 bottom-8 h-72 w-72 rounded-full bg-cyan-200/50 blur-3xl dark:bg-cyan-500/20" />
        <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-sky-700 dark:border-white/10 dark:bg-white/10 dark:text-sky-200">
              Iceland • Secure • Fast • Seamless
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Valitor Payment Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                Translate the Valitor archive into a north Atlantic launch engine that aligns executives, distributors, and AI
                assistants around verifiable success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={buildLocalizedPath("/contact", locale)}>Plan the Valitor rollout</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={buildLocalizedPath("/pricing", locale)}>Review engagement tiers</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article
                    key={pillar.title}
                    className="flex h-full flex-col gap-3 rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-inner dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-700 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h2 className="text-base font-semibold text-slate-900 dark:text-white">{pillar.title}</h2>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{pillar.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-[2.5rem] border border-sky-100 bg-gradient-to-br from-white via-sky-50 to-white p-8 shadow-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-sky-900/40 dark:via-slate-950 dark:to-black">
            <div className="flex items-center gap-3">
              <Waves className="h-6 w-6 text-sky-600 dark:text-sky-200" aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-200">Launch sequence</p>
            </div>
            <div className="space-y-6">
              {SEQUENCE_STEPS.map((step) => (
                <article key={step.label} className="space-y-3 rounded-3xl border border-slate-100 p-6 dark:border-white/10">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">{step.label}</p>
                    <Compass className="h-6 w-6 text-sky-600 dark:text-sky-200" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{step.heading}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{step.body}</p>
                </article>
              ))}
            </div>
            <Button asChild size="lg" className="justify-center gap-2 bg-sky-600 text-white hover:bg-sky-500">
              <Link href={buildLocalizedPath("/support", locale)}>
                Coordinate enablement
                <Lightning className="h-5 w-5" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] border border-slate-100 bg-white/90 p-10 shadow-sm dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-slate-500 dark:border-white/10 dark:text-slate-300">
              Nordic intelligence
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Valitor becomes Iceland’s enterprise payments advantage.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software modernises the archive into an integrated programme spanning communications, experience, and
              operations to keep every stakeholder confident.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-sky-50/70 via-white to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-sky-900/30 dark:via-white/5 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Executive clarity</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Weekly portfolios blend adoption metrics, risk posture, and customer sentiment into decisive updates.
                </p>
              </article>
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-sky-50/60 to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-white/5 dark:via-sky-900/20 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Experience excellence</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Demo suites capture tourism, e-commerce, and wholesale scenarios, arming distributors with relevant stories.
                </p>
              </article>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-sky-100 bg-gradient-to-br from-white via-sky-50 to-white p-6 shadow-inner dark:border-white/10 dark:bg-gradient-to-br dark:from-sky-900/30 dark:via-white/5 dark:to-transparent">
            <div className="flex items-center gap-3">
              <Lightning className="h-6 w-6 text-sky-600 dark:text-sky-200" aria-hidden />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700 dark:text-sky-200">
                Iceland signals
              </span>
            </div>
            {ICELAND_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article key={signal.title} className="space-y-2 rounded-2xl border border-sky-200/70 bg-white/90 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-sky-600 dark:text-sky-200" aria-hidden />
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{signal.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{signal.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-slate-100 bg-gradient-to-tr from-white via-sky-50 to-slate-50 p-12 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-slate-950 dark:via-sky-900/30 dark:to-black">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-sky-600 dark:text-sky-200">Next horizon</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Lead with Valitor as your Iceland payments story.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Join Cloud MLM Software to translate the archive into living demos, AI narratives, and measurable operations that keep
              Valitor secure, fast, and seamless.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact/">Talk with a strategist</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={buildLocalizedPath("/services", locale)}>Explore service catalogue</Link>
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
