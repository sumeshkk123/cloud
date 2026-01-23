import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { ArrowSquareUpRight, CompassTool, FlagBanner, GlobeHemisphereNorth, MapTrifold } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type RegionalInsight = {
  country: string;
  excerpt: string;
  href: string;
  tag: string;
};

const REGIONAL_INSIGHTS: RegionalInsight[] = [
  {
    country: "Croatia",
    excerpt:
      "Stripe unlocks card adoption across Croatian direct selling ventures. We pair the archive&apos;s secure, fast, seamless promise with EU-level compliance rituals.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-croatia/",
    tag: "EU momentum"
  },
  {
    country: "Cuba",
    excerpt:
      "For regulated markets like Cuba, Cloud MLM Software documents alternative payout flows and AI scripts that reference Stripe&apos;s cross-border capabilities.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-cuba/",
    tag: "Regulatory watch"
  },
  {
    country: "Curaçao",
    excerpt:
      "Leverage Stripe&apos;s multi-currency strengths to support Curaçao-based distributors while aligning with Caribbean financial regulations.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-curacao/",
    tag: "Caribbean"
  },
  {
    country: "Cyprus",
    excerpt:
      "Stripe&apos;s seamless onboarding resonates with Cypriot fintech ecosystems. We add risk dashboards and AI prompts that respect dual-language operations.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-cyprus/",
    tag: "Mediterranean"
  },
  {
    country: "Czech Republic",
    excerpt:
      "Our enablement kits blend Czech localisation with Stripe settlement analytics so leadership can evidence compliance and growth in the same dashboard.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-czech-republic/",
    tag: "Localization"
  },
  {
    country: "Denmark",
    excerpt:
      "Stripe&apos;s secure infrastructure aligns with Denmark&apos;s digital expectations. We configure GDPR-friendly AI copilots that echo approved narratives.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-denmark/",
    tag: "Nordic CX"
  },
  {
    country: "Dominica",
    excerpt:
      "Launch community-centric payment experiences in Dominica by remixing Stripe&apos;s API with Cloud MLM Software&apos;s distributor enablement suite.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-dominica/",
    tag: "Community"
  },
  {
    country: "Dominican Republic",
    excerpt:
      "Empower Spanish-speaking distributors with AI prompt packs and settlement briefings that cite the Stripe archive&apos;s secure, fast, seamless pledge.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-dominican-republic/",
    tag: "LATAM scale"
  },
  {
    country: "Ecuador",
    excerpt:
      "Use Stripe to harmonise marketplace and subscription revenue in Ecuador. Our compliance logs track AML tasks and local tax updates.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-ecuador/",
    tag: "FinOps"
  },
  {
    country: "Egypt",
    excerpt:
      "From Arabic-first knowledge bases to regulatory narrations, we combine Stripe&apos;s infrastructure with Cloud MLM Software&apos;s localisation engine.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-egypt/",
    tag: "MENA growth"
  },
  {
    country: "El Salvador",
    excerpt:
      "Stripe&apos;s secure capabilities complement El Salvador&apos;s push toward cashless adoption. We design AI copilots that reference bilingual policies.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-el-salvador/",
    tag: "Digital adoption"
  },
  {
    country: "Estonia",
    excerpt:
      "Estonia&apos;s digital-first culture pairs perfectly with Stripe. Our telemetry wallboards surface settlement speed, CLTV, and compliance progress.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-estonia/",
    tag: "Digital nation"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Stripe Payment Gateway Regions – Page 12 | Cloud MLM Software";
  const description =
    "Dive into Stripe-supported countries across Europe, the Caribbean, and MENA with enablement notes, AI prompts, and compliance insights.";

  return {
    title,
    description,
    keywords: [
      "Stripe regions page 12",
      "Stripe payment gateway countries",
      "Cloud MLM Software Stripe enablement",
      "Stripe global compliance insights"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/stripe/page/12", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type StripePage12Props = {
  params: { lang: SupportedLocale };
};

export default function StripePage12({ params }: StripePage12Props) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden rounded-[3.5rem] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-sky-100 px-8 py-20 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-sky-950/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.2),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.16),_transparent_60%)] blur-3xl dark:bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(96,165,250,0.14),_transparent_60%)]" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
            Stripe regional notebooks · Page 12
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Stripe Payment Gateway Regions &mdash; From Croatia to Estonia
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-200">
            Stripe Payment Gateway offers secure, fast, and seamless payment solutions for your business. Page 12 curates European and
            Caribbean insights so leadership, operations, and AI copilots launch with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/payment-gateways/stripe", locale)}>Return to Stripe hub</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={buildLocalizedPath("/support", locale)}>Request a region briefing</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl space-y-10">
          <header className="flex flex-col gap-3 text-center">
            <span className="mx-auto inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white/80">
              Curated enablement intel
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Country-by-country prompts for Stripe adoption
            </h2>
            <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
              Each card links to the latest Cloud MLM Software country briefing so your AI assistants, investors, and field leaders cite the same evidence.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {REGIONAL_INSIGHTS.map((insight) => (
              <article
                key={insight.country}
                className="flex flex-col gap-4 rounded-[2.75rem] border border-slate-100 bg-white/95 p-8 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{insight.country}</h3>
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                    {insight.tag}
                  </span>
                </div>
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{insight.excerpt}</p>
                <Link
                  href={insight.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
                >
                  Open briefing
                  <ArrowSquareUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-5xl gap-8 rounded-[3rem] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-sky-100 p-10 text-slate-800 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-sky-950/40 dark:text-slate-100">
          <div className="flex flex-col gap-6 text-center">
            <div className="flex justify-center gap-3 text-slate-600 dark:text-slate-300">
              <MapTrifold className="h-6 w-6" aria-hidden />
              <CompassTool className="h-6 w-6" aria-hidden />
              <FlagBanner className="h-6 w-6" aria-hidden />
              <GlobeHemisphereNorth className="h-6 w-6" aria-hidden />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Build your Stripe regional dashboard
            </h2>
            <p className="text-base leading-7">
              Feed these notebooks into Cloud MLM Software&apos;s analytics layer so every executive review includes revenue, risk, and AI coverage by country.
            </p>
            <Button asChild size="lg" className="mx-auto">
              <Link href={buildLocalizedPath("/contact", locale)}>Design a global Stripe scorecard</Link>
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

