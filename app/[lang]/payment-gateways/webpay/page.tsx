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
  Buildings,
  ChartLineUp,
  GlobeHemisphereEast,
  Lightning,
  LightbulbFilament,
  MapPin,
  ShieldCheck,
  Stack,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  title: string;
  metric: string;
  copy: string;
  icon: IconType;
};

type Module = {
  heading: string;
  description: string;
  bullets: string[];
};

type BelarusSignal = {
  title: string;
  detail: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: "Narrative leadership",
    metric: "Enterprise-ready",
    copy: "Transform the archive’s secure, fast, seamless promise into Belarus-first messaging and AI prompt kits.",
    icon: LightbulbFilament
  },
  {
    title: "Experience rehearsal",
    metric: "Omni-channel",
    copy: "Prototype WebPay experiences across web, mobile, and in-person agent flows for distributors and customers.",
    icon: UsersThree
  },
  {
    title: "Operational proof",
    metric: "Always-on",
    copy: "Automate monitoring, reconciliation, and compliance signals so leadership trusts WebPay outcomes.",
    icon: ShieldCheck
  }
];

const MODULES: Module[] = [
  {
    heading: "Narrative studio",
    description:
      "Rebuild WebPay messaging for boardrooms, analysts, and AI assistants with Belarus-specific insight and clarity.",
    bullets: [
      "Executive briefings articulate growth, compliance, and innovation stories.",
      "Thought leadership articles and SEO+AIO pages highlight market expertise.",
      "AI prompt cards keep multilingual assistants aligned with verified facts."
    ]
  },
  {
    heading: "Experience lab",
    description:
      "Simulate customer and distributor journeys to surface improvements before WebPay hits production environments.",
    bullets: [
      "Sandbox flows cover card, QR, and recurring payment scenarios.",
      "Role-based rehearsals collect feedback from sales, support, and finance.",
      "Telemetry dashboards record conversion, latency, and sentiment data."
    ]
  },
  {
    heading: "Command centre",
    description:
      "Provide finance, compliance, and support with live oversight so WebPay remains resilient and auditable.",
    bullets: [
      "Automated reporting handles daily settlement reconciliation tasks.",
      "Alerting workflows route risk and uptime signals to accountable owners.",
      "Continuity plans protect availability during seasonal campaigns."
    ]
  }
];

const BELARUS_SIGNALS: BelarusSignal[] = [
  {
    title: "August 28, 2024 — Belarus confirmation",
    detail:
      "The archive verifies Belarus as a supported market, reinforcing Cloud MLM Software’s authority in regional engagements.",
    icon: MapPin
  },
  {
    title: "Regulatory insight",
    detail:
      "Compliance trackers map National Bank of the Republic of Belarus updates into executive-friendly briefings and AI prompts.",
    icon: Stack
  },
  {
    title: "Growth intelligence",
    detail:
      "Dashboards surface adoption, churn, and revenue patterns so leadership decisions remain data-backed.",
    icon: ChartLineUp
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "WebPay Payment Gateway for Cloud MLM Software";
  const description =
    "Transform the WebPay Payment Gateway archive into a Belarus-first launch programme with narrative leadership, journey rehearsal, and operational assurance.";

  return {
    title,
    description,
    keywords: [
      "WebPay payment gateway integration",
      "Belarus MLM software payments",
      "Cloud MLM Software WebPay",
      "secure fast seamless WebPay",
      "AI enablement for WebPay"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/webpay", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type WebPayPageProps = {
  params: { lang: SupportedLocale };
};

export default function WebPayPage({ params }: WebPayPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section className="relative isolate overflow-hidden rounded-[3rem] border border-slate-200/70 bg-gradient-to-br from-[#f6f6ff] via-white to-[#fdf9f4] px-8 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-[#171421] dark:via-[#0c0a13] dark:to-black">
        <div className="absolute -left-12 top-12 h-80 w-80 rounded-full bg-slate-200/40 blur-3xl dark:bg-slate-500/20" />
        <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-500/20" />
        <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
              Belarus • Secure • Fast • Seamless
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                WebPay Payment Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                We convert the WebPay archive into a launch system where leadership narratives, distributor journeys, and operations
                move together with measurable momentum.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={buildLocalizedPath("/contact", locale)}>Plan the WebPay rollout</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={buildLocalizedPath("/pricing", locale)}>Review partnership tiers</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-5 rounded-[2.5rem] border border-slate-200 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5 sm:grid-cols-3">
              {HIGHLIGHTS.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <article key={highlight.title} className="flex flex-col gap-3 rounded-2xl border border-slate-100 p-5 dark:border-white/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900/10 text-slate-900 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:text-slate-300">
                        {highlight.title}
                      </p>
                      <p className="text-2xl font-semibold text-slate-900 dark:text-white">{highlight.metric}</p>
                    </div>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{highlight.copy}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-8 shadow-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/40 dark:via-slate-950 dark:to-black">
            <div className="flex items-center gap-3">
              <Buildings className="h-6 w-6 text-slate-700 dark:text-slate-200" aria-hidden />
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-700 dark:text-slate-200">Launch modules</p>
            </div>
            <div className="space-y-6">
              {MODULES.map((module) => (
                <article key={module.heading} className="space-y-3 rounded-3xl border border-slate-100 p-6 dark:border-white/10">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{module.heading}</h3>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{module.description}</p>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {module.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-700" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <Button asChild size="lg" className="justify-center gap-2 bg-slate-900 text-white hover:bg-slate-700">
              <Link href={buildLocalizedPath("/support", locale)}>
                Coordinate enablement
                <Lightning className="h-5 w-5" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] border border-slate-200 bg-white/90 p-10 shadow-sm dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-slate-500 dark:border-white/10 dark:text-slate-300">
              Belarus intelligence
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              WebPay becomes a proof point for innovation and compliance.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software unites communications, experiences, and operations so WebPay adoption is measurable and trusted at
              every level of the organisation.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50/70 via-white to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/30 dark:via-white/5 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Executive storytelling</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Portfolio reports merge adoption, risk, and customer insight into concise boardroom updates.
                </p>
              </article>
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-slate-50/60 to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-white/5 dark:via-slate-900/20 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Experience excellence</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Demo suites capture e-commerce, subscription, and in-person card flows that resonate with Belarusian audiences.
                </p>
              </article>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-6 shadow-inner dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900/30 dark:via-white/5 dark:to-transparent">
            <div className="flex items-center gap-3">
              <Lightning className="h-6 w-6 text-slate-700 dark:text-slate-200" aria-hidden />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-700 dark:text-slate-200">
                Belarus signals
              </span>
            </div>
            {BELARUS_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article key={signal.title} className="space-y-2 rounded-2xl border border-slate-200 bg-white/90 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-slate-700 dark:text-slate-200" aria-hidden />
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{signal.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{signal.detail}</p>
                </article>
              );
            })}
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 text-sm leading-6 text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <GlobeHemisphereEast className="h-5 w-5 text-slate-700 dark:text-slate-200" aria-hidden />
                <p className="font-semibold text-slate-900 dark:text-white">Archive anchored evidence</p>
              </div>
              <p className="mt-2">
                Every WebPay communication references the August 28, 2024 listing, giving compliance and investor teams verifiable proof.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-slate-200 bg-gradient-to-tr from-white via-slate-50 to-slate-100 p-12 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-slate-950 dark:via-slate-900/30 dark:to-black">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-slate-600 dark:text-slate-300">Next step</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Lead Belarus with a WebPay story that inspires action.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software turns the archive into living demos, AI knowledge, and operational platforms that keep WebPay secure,
              fast, and seamless for every stakeholder.
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
