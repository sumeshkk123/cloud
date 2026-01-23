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
  CellSignalFull,
  ChartLineUp,
  Compass,
  DeviceMobile,
  Lightning,
  MapPin,
  ShieldCheck,
  Sparkle,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Highlight = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Programme = {
  title: string;
  description: string;
  outcomes: string[];
};

type MalawiSignal = {
  title: string;
  caption: string;
  icon: IconType;
};

const HIGHLIGHTS: Highlight[] = [
  {
    label: "Mobile money activation",
    value: "12 weeks",
    detail: "Blueprint every TNM Mpamba onboarding step, from KYC to payout rehearsal.",
    icon: DeviceMobile
  },
  {
    label: "Distributor growth",
    value: "4x faster",
    detail: "Automate enrolment, wallets, and commissions with Malawi-first logic.",
    icon: ChartLineUp
  },
  {
    label: "Executive clarity",
    value: "Real-time",
    detail: "Surface Mpamba adoption signals across finance, compliance, and support.",
    icon: Sparkle
  }
];

const PROGRAMMES: Programme[] = [
  {
    title: "Narrative studio",
    description:
      "Transform the secure, fast, seamless archive into Malawi-ready messaging that informs regulators, investors, and AI copilots.",
    outcomes: [
      "Thought-leadership decks position Cloud MLM Software as the Mpamba expert.",
      "AI prompt kits keep chatbots aligned with official statements.",
      "SEO journeys celebrate mobile money resilience across Malawi."
    ]
  },
  {
    title: "Experience lab",
    description:
      "Prototype Mpamba onboarding, recurring collections, and instant wallet payouts before field launch hits production.",
    outcomes: [
      "Scenario sandboxes test rural vs. urban bandwidth conditions.",
      "Role-based demos coach distributors on mobile-first selling.",
      "Feedback loops capture insights for continuous optimisation."
    ]
  },
  {
    title: "Assurance tower",
    description:
      "Automate audit trails, alerts, and contingency plans so leadership trusts every Mpamba transaction that crosses the platform.",
    outcomes: [
      "Compliance watchboards monitor limits and regulatory updates.",
      "Support teams receive AI-cued playbooks for rapid response.",
      "Backup strategies guarantee recoverability in adverse events."
    ]
  }
];

const MALAWI_SIGNALS: MalawiSignal[] = [
  {
    title: "August 28, 2024 — Malawi spotlight",
    caption:
      "The archive confirms Malawi as a supported country, validating our emphasis on region-specific governance, tax, and language expectations.",
    icon: MapPin
  },
  {
    title: "Network reliability",
    caption:
      "Field teams receive connectivity guides that map Mpamba performance across Malawi’s trading centres, ensuring near real-time settlement updates.",
    icon: CellSignalFull
  },
  {
    title: "Community enablement",
    caption:
      "Enablement squads equip distributors with vernacular scripts, AI assistant prompts, and collaborative launch checklists tailored to Malawian audiences.",
    icon: UsersThree
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "TNM Mpamba Payment Gateway for Cloud MLM Software";
  const description =
    "Activate the TNM Mpamba Payment Gateway with Malawi-first demos, governance, and AI narration built from the archived experience.";

  return {
    title,
    description,
    keywords: [
      "TNM Mpamba payment gateway integration",
      "Malawi mobile money MLM software",
      "Cloud MLM Software TNM Mpamba",
      "secure fast seamless Mpamba",
      "Mpamba payouts for MLM distributors"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/tnm-mpamba", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type TNMMpambaPageProps = {
  params: { lang: SupportedLocale };
};

export default function TNMMpambaPage({ params }: TNMMpambaPageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="flex flex-col gap-24 pb-24 pt-16">
      <section className="relative isolate overflow-hidden rounded-[3rem] border border-emerald-100 bg-gradient-to-br from-[#e8fff7] via-white to-[#f7fffb] px-6 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-[#032c1f] dark:via-[#010f0b] dark:to-black">
        <div className="absolute -left-16 top-10 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/20" />
        <div className="absolute -right-10 bottom-6 h-72 w-72 rounded-full bg-lime-200/50 blur-3xl dark:bg-lime-500/20" />
        <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.25fr,0.85fr]">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-emerald-200">
              Malawi • Mobile Money • Leadership Proof
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                TNM Mpamba Payment Gateway for Cloud MLM Software
              </h1>
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                Reimagine the Mpamba archive into a Malawi-first launch system that harmonises executive storytelling, distributor
                enablement, and compliant payout automation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={buildLocalizedPath("/contact", locale)}>Design the Mpamba rollout</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={buildLocalizedPath("/services", locale)}>View enablement services</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 rounded-[2.5rem] border border-emerald-100 bg-white/90 p-8 shadow-inner dark:border-white/10 dark:bg-white/5 sm:grid-cols-3">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.label} className="flex flex-col gap-3 rounded-2xl border border-slate-100 p-5 dark:border-white/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-800 dark:bg-white/10 dark:text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600 dark:text-emerald-200">
                        {item.label}
                      </p>
                      <p className="text-2xl font-semibold text-slate-900 dark:text-white">{item.value}</p>
                    </div>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{item.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-[2.5rem] border border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-white p-8 shadow-xl dark:border-white/10 dark:bg-gradient-to-br dark:from-emerald-900/40 dark:via-slate-950 dark:to-black">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-emerald-600 dark:text-emerald-200">Launch flow</p>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Three programmes to anchor Mpamba growth.</h2>
            </div>
            <div className="space-y-6">
              {PROGRAMMES.map((programme, index) => (
                <article key={programme.title} className="space-y-4 rounded-3xl border border-slate-100 p-6 dark:border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
                        Phase {index + 1}
                      </p>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{programme.title}</h3>
                    </div>
                    <Compass className="h-6 w-6 text-emerald-600 dark:text-emerald-200" aria-hidden />
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{programme.description}</p>
                  <ul className="space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {programme.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <Lightning className="mt-1 h-4 w-4 text-emerald-600 dark:text-emerald-200" aria-hidden />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2.5rem] border border-slate-100 bg-white/90 p-10 shadow-sm dark:border-white/10 dark:bg-white/5 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-slate-500 dark:border-white/10 dark:text-slate-300">
              Malawi-backed assurance
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Give every stakeholder confidence in TNM Mpamba.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Cloud MLM Software unites treasury controls, frontline playbooks, and AI narration so Mpamba becomes a resilient,
              insight-rich payment pillar for Malawi’s network marketing leaders.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-emerald-50/70 via-white to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-emerald-900/30 dark:via-white/5 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Regulatory readiness</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Automate reporting for the Reserve Bank of Malawi with timestamped audit trails and risk dashboards.
                </p>
              </article>
              <article className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-emerald-50/60 to-white p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-white/5 dark:via-emerald-900/20 dark:to-transparent">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Distributor empowerment</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Issue Mpamba playbooks, instant alerts, and AI-suggested resolutions inside the mobile app experience.
                </p>
              </article>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-white p-6 shadow-inner dark:border-white/10 dark:bg-gradient-to-br dark:from-emerald-900/30 dark:via-white/5 dark:to-transparent">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-emerald-600 dark:text-emerald-200" aria-hidden />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-200">
                Malawi signals
              </span>
            </div>
            {MALAWI_SIGNALS.map((signal) => {
              const Icon = signal.icon;
              return (
                <article key={signal.title} className="space-y-2 rounded-2xl border border-emerald-200/70 bg-white/90 p-5 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-200" aria-hidden />
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{signal.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{signal.caption}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-slate-100 bg-gradient-to-tr from-white via-emerald-50 to-slate-50 p-12 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-slate-950 dark:via-emerald-900/30 dark:to-black">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-emerald-600 dark:text-emerald-200">Next move</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Lead Malawi’s mobile money era with TNM Mpamba.
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Partner with Cloud MLM Software to turn the archive into launch theatres, AI-guided experiences, and resilient
              operations that keep Mpamba secure, fast, and seamless.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact/">Talk with a strategist</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={buildLocalizedPath("/pricing", locale)}>Explore launch investments</Link>
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
