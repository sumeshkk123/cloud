import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  Activity,
  ArrowSquareOut,
  ChatsCircle,
  CirclesFour,
  GlobeHemisphereEast,
  Waves
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type Signal = {
  country: string;
  focus: string;
  insight: string;
  href: string;
};

const SIGNALS: Signal[] = [
  {
    country: "Saint Pierre and Miquelon",
    focus: "Micro-market orchestration",
    insight:
      "Stripe enables small-but-global ventures. We package micro-market dashboards that track revenue, support, and AI coverage for French territories.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-saint-pierre-and-miquelon/"
  },
  {
    country: "Saint Vincent and the Grenadines",
    focus: "Tourism-backed storytelling",
    insight:
      "Cloud MLM Software&apos;s content studio equips leaders with Stripe-ready narratives for tourism-centric programmes with distributed teams.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-saint-vincent-and-the-grenadines/"
  },
  {
    country: "Saudi Arabia",
    focus: "Regulatory alignment",
    insight:
      "Arabic-first knowledge bases, VAT dashboards, and AI prompts ensure secure, fast, seamless experiences that respect Saudi Arabia&apos;s governance.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-saudi-arabia/"
  },
  {
    country: "Serbia",
    focus: "EU candidate readiness",
    insight:
      "Stripe data pairs with localisation kits so Serbian operations satisfy both domestic regulators and EU-aligned investors.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-serbia/"
  },
  {
    country: "Singapore",
    focus: "Hub acceleration",
    insight:
      "We design Stripe-fuelled command centres that visualise APAC launches, high-velocity settlements, and AI co-pilot coverage.",
    href: "/mlm-software-singapore/"
  },
  {
    country: "Sint Maarten (Dutch part)",
    focus: "Dual-jurisdiction clarity",
    insight:
      "Stripe and Cloud MLM Software unify compliance playbooks that satisfy both Dutch Kingdom policies and local distributor expectations.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-sint-maarten-dutch-part/"
  },
  {
    country: "Slovakia",
    focus: "Operational telemetry",
    insight:
      "Executives receive dashboards linking Stripe settlement speed, distributor satisfaction, and AI accuracy for Slovakia.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-slovakia/"
  },
  {
    country: "Slovenia",
    focus: "Sustainable growth",
    insight:
      "Stripe&apos;s seamless payments support Slovenia&apos;s highly educated workforce. We provide ESG-aligned storytelling and compliance guidance.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-slovenia/"
  },
  {
    country: "Macao",
    focus: "Experience-centric journeys",
    insight:
      "Our AI prompt packs and support scripts serve Cantonese- and Portuguese-speaking distributors while Stripe handles global visitors.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-macau/"
  },
  {
    country: "Maldives",
    focus: "Lifestyle programmes",
    insight:
      "Stripe manages cross-border bookings; we ensure luxury network operators have compliance checklists and AI-assisted concierge scripts.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-maldives/"
  },
  {
    country: "Malta",
    focus: "Financial services harmony",
    insight:
      "Malta&apos;s fintech ecosystem benefits from Stripe&apos;s API richness. We align legal, operations, and investor relations on one story.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-malta/"
  },
  {
    country: "Mayotte",
    focus: "Island resilience",
    insight:
      "Cloud-hosted incident playbooks and Stripe&apos;s secure rails support Mayotte&apos;s distributed operations with bilingual enablement.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-mayotte/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Stripe Payment Gateway Signal Board – Page 5 | Cloud MLM Software";
  const description =
    "Survey Stripe-supported regions from Singapore to Malta and access playbooks for compliance, storytelling, and AI enablement.";

  return {
    title,
    description,
    keywords: [
      "Stripe regions page 5",
      "Stripe payment gateway signals",
      "Cloud MLM Software Stripe enablement",
      "Stripe global rollout playbooks"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/stripe/page/5", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type StripePage5Props = {
  params: { lang: SupportedLocale };
};

export default function StripePage5({ params }: StripePage5Props) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden rounded-[3.5rem] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-cyan-100 px-8 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.2),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_55%)] blur-3xl dark:bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.16),_transparent_55%)]" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
            Stripe signal board · Page 5
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Stripe Payment Gateway Signals &mdash; Singapore to Malta
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-200">
            Stripe Payment Gateway offers secure, fast, and seamless payment solutions for your business. Page 5 tracks island markets, financial hubs, and hospitality programmes so your AI copilots and executives act on the same intelligence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/payment-gateways/stripe", locale)}>Return to Stripe hub</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={buildLocalizedPath("/support", locale)}>Schedule a signal sync</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl space-y-10 rounded-[3rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3 text-center">
            <span className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white/80">
              Global signal pulses
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Twelve regions, one unified Stripe narrative
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Each signal includes enablement insights so compliance teams, storytellers, and AI copilots deliver the same secure, fast, seamless experience.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {SIGNALS.map((signal) => (
              <article
                key={signal.country}
                className="flex h-full flex-col gap-4 rounded-[2.75rem] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-black"
              >
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{signal.country}</h3>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
                      {signal.focus}
                    </p>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-700 dark:bg-white/10 dark:text-white">
                    <Activity className="h-5 w-5" aria-hidden />
                  </span>
                </div>
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{signal.insight}</p>
                <Link
                  href={signal.href}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-900 dark:text-cyan-200 dark:hover:text-cyan-100"
                >
                  View signal briefing
                  <ArrowSquareOut className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-5xl space-y-8 rounded-[3rem] border border-cyan-200 bg-gradient-to-br from-cyan-900 via-slate-900 to-black p-10 text-white shadow-sm dark:border-white/10">
          <div className="flex justify-center gap-6 text-cyan-100">
            <GlobeHemisphereEast className="h-6 w-6" aria-hidden />
            <CirclesFour className="h-6 w-6" aria-hidden />
            <Waves className="h-6 w-6" aria-hidden />
            <ChatsCircle className="h-6 w-6" aria-hidden />
          </div>
          <h2 className="text-center text-3xl font-semibold tracking-tight">Sync Stripe signals with leadership cadences</h2>
          <p className="text-center text-base leading-7 text-cyan-100">
            Build a living Stripe dashboard that reflects regional priorities, regulatory updates, and AI coverage so every executive review stays aligned.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:text-white">
              <Link href={buildLocalizedPath("/contact", locale)}>Design your Stripe signal room</Link>
            </Button>
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/free-mlm-software-demo", locale)}>Preview Stripe inside the demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

