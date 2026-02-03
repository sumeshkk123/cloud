import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import {
  ArrowSquareUpRight,
  NavigationArrow,
  Rocket,
  Scroll,
  SealCheck,
  Binoculars
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type CountryLog = {
  name: string;
  focus: string;
  narrative: string;
  href: string;
};

const COUNTRY_LOGS: CountryLog[] = [
  {
    name: "Eswatini",
    focus: "Mobile-first payouts",
    narrative:
      "Stripe&apos;s secure, fast, seamless footprint pairs with Cloud MLM Software automations to modernise Eswatini&apos;s distributor experience in both English and siSwati.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-eswatini/"
  },
  {
    name: "Afghanistan",
    focus: "Resilient compliance",
    narrative:
      "We catalogue risk controls, KYC checkpoints, and contingency plans that keep Afghan operations aligned with international Stripe standards.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-afghanistan/"
  },
  {
    name: "Åland Islands",
    focus: "Nordic localisation",
    narrative:
      "Combine bilingual content, regional tax rules, and Stripe settlement data to satisfy Åland&apos;s local governance expectations.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-aland-islands/"
  },
  {
    name: "Albania",
    focus: "Trust building",
    narrative:
      "Our AI prompt kits, investor summaries, and compliance trackers ensure Albanian stakeholders hear one consistent Stripe story.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-albania/"
  },
  {
    name: "American Samoa",
    focus: "Territory readiness",
    narrative:
      "Stripe&apos;s infrastructure adapts to island network realities. We publish runbooks for payout routing, customer support, and AI-assisted translation.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-american-samoa/"
  },
  {
    name: "Anguilla",
    focus: "Boutique distributors",
    narrative:
      "Small but ambitious teams in Anguilla receive concierge-grade dashboards that visualise Stripe revenue, dispute queues, and compliance status.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-anguilla/"
  },
  {
    name: "Antarctica",
    focus: "Research expeditions",
    narrative:
      "For scientific programmes using Stripe for grants or memberships, we outline offline contingencies and AI-generated briefing packs.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-antarctica/"
  },
  {
    name: "Antigua and Barbuda",
    focus: "Hospitality alliances",
    narrative:
      "Stripe-backed loyalty campaigns thrive when paired with our content studio—highlighting tourism narratives coaches can share instantly.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-antigua-and-barbuda/"
  },
  {
    name: "Argentina",
    focus: "High-volume settlements",
    narrative:
      "We integrate currency controls, Stripe&apos;s LATAM capabilities, and Cloud MLM Software analytics so Argentinian operations stay predictable.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-argentina/"
  },
  {
    name: "Aruba",
    focus: "Seamless tourism funnels",
    narrative:
      "Stripe&apos;s fast checkout experience fuels travel-centric campaigns. Our AI packs provide multi-language support scripts for visitors and locals.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-aruba/"
  },
  {
    name: "Australia",
    focus: "Scale-up telemetry",
    narrative:
      "Executives receive dashboards linking Stripe settlement speed, field adoption, and AI coverage with the country&apos;s compliance obligations.",
    href: "/mlm-software-australia/"
  },
  {
    name: "Austria",
    focus: "Regulated precision",
    narrative:
      "Austrian leaders gain curated Stripe checklists, legal translations, and AI prompt packs that honour the archive&apos;s secure, fast, seamless pledge.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-austria/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Stripe Payment Gateway Expedition – Page 13 | Cloud MLM Software";
  const description =
    "Explore Stripe-supported territories from Eswatini to Austria with playbooks covering compliance, localisation, and AI enablement.";

  return {
    title,
    description,
    keywords: [
      "Stripe regions page 13",
      "Stripe global enablement",
      "Cloud MLM Software Stripe expedition",
      "Stripe localisation guides"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/stripe/page/13", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type StripePage13Props = {
  params: { lang: SupportedLocale };
};

export default function StripePage13({ params }: StripePage13Props) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden rounded-[3.75rem] border border-slate-100 bg-gradient-to-tr from-white via-slate-50 to-indigo-100 px-8 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_50%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_55%)] blur-3xl dark:bg-[radial-gradient(circle_at_top_left,_rgba(129,140,248,0.18),_transparent_50%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.18),_transparent_55%)]" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
            Stripe expedition log · Page 13
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
            From Eswatini to Austria &mdash; Stripe&apos;s frontier checklist
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-200">
            Stripe Payment Gateway offers secure, fast, and seamless payment solutions for your business. Page 13 follows emerging and established markets, providing compliance cues and AI prompts for every stop.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/payment-gateways/stripe/page/12", locale)}>View previous regions</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={buildLocalizedPath("/payment-gateways/stripe/page/14", locale)}>Preview upcoming intel</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[3rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3 text-center">
            <span className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white/80">
              Expedition briefings
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Touchpoints for leadership, compliance, and AI copilots
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Each log below distils the WordPress archive and our enablement vault into an actionable summary for your global Stripe programme.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {COUNTRY_LOGS.map((log) => (
              <article
                key={log.name}
                className="flex h-full flex-col gap-4 rounded-[2.75rem] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-black"
              >
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{log.name}</h3>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
                      {log.focus}
                    </p>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-700 dark:bg-white/10 dark:text-white">
                    <Binoculars className="h-5 w-5" aria-hidden />
                  </span>
                </div>
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{log.narrative}</p>
                <Link
                  href={log.href}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-900 dark:text-indigo-200 dark:hover:text-indigo-100"
                >
                  Open expedition note
                  <ArrowSquareUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-5xl space-y-8 rounded-[3rem] border border-indigo-200 bg-gradient-to-br from-indigo-900 via-slate-900 to-black p-10 text-white shadow-sm dark:border-white/10">
          <div className="flex justify-center gap-6 text-indigo-100">
            <NavigationArrow className="h-6 w-6" aria-hidden />
            <Scroll className="h-6 w-6" aria-hidden />
            <Rocket className="h-6 w-6" aria-hidden />
            <SealCheck className="h-6 w-6" aria-hidden />
          </div>
          <h2 className="text-center text-3xl font-semibold tracking-tight">Curate your Stripe expedition wall</h2>
          <p className="text-center text-base leading-7 text-indigo-100">
            Feed these logs into Cloud MLM Software dashboards so every strategy session highlights Stripe adoption, regulatory moves, and AI coverage per territory.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 hover:text-white">
              <Link href={buildLocalizedPath("/contact", locale)}>Plan a global Stripe review</Link>
            </Button>
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/support", locale)}>Sync your enablement vault</Link>
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

