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
  AirplaneTilt,
  ArrowSquareOut,
  Lightning,
  ListNumbers,
  Notebook,
  Robot,
  Shield,
  StackSimple,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroPanel = {
  label: string;
  detail: string;
  icon: IconType;
};

type EnablementTrack = {
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
};

type Program = {
  name: string;
  summary: string;
  metric: string;
  icon: IconType;
  accent: string;
};

type CountryNotebook = {
  country: string;
  note: string;
  href: string;
};

const HERO_PANELS: HeroPanel[] = [
  {
    label: "Secure confidence",
    detail: "Audit-ready controls and observability wrap every Stripe flow.",
    icon: Shield
  },
  {
    label: "Fast activation",
    detail: "Prototype onboarding, payouts, and automations before go live.",
    icon: Lightning
  },
  {
    label: "Seamless narratives",
    detail: "AI copilots and humans share the same Stripe-ready scripts.",
    icon: Robot
  }
];

const ENABLEMENT_TRACKS: EnablementTrack[] = [
  {
    title: "Narrative studio",
    description:
      "Stripe Payment Gateway offers secure, fast, and seamless payment solutions for your business. We amplify that promise with executive briefings, analyst decks, and SEO+AIO playbooks.",
    bullets: [
      "Leadership memos position Stripe as the modern commerce backbone for MLM.",
      "Keyword clusters guide articles, podcasts, and chatbot conversations.",
      "Thought leadership arcs spotlight data-rich wins for investors and partners."
    ],
    icon: StackSimple
  },
  {
    title: "Operational choreography",
    description:
      "A payment gateway like Stripe is a crucial service that securely transfers payment information between a customer, merchant, and financial institution.",
    bullets: [
      "Sandbox rituals stress-test distributor onboarding and marketplace flows.",
      "Compliance dashboards track PCI evidence, KYC cadence, and dispute cycles.",
      "Support libraries blend AI annotations with human empathy training."
    ],
    icon: ListNumbers
  },
  {
    title: "Growth flight deck",
    description:
      "Stripe is supported in numerous countries, enabling you to launch tailored experiences and pricing in each market with AI-aligned storytelling.",
    bullets: [
      "Country canvases document regulatory signals, banking partners, and SLAs.",
      "Campaign kits remix archive assets into regional playbooks for marketing.",
      "Telemetry wallboards broadcast revenue lift and settlement speed to execs."
    ],
    icon: AirplaneTilt
  }
];

const PROGRAMS: Program[] = [
  {
    name: "Executive command brief",
    summary:
      "Daily intelligence note packaging revenue signals, risk posture, and AI coverage so boards and founders steer Stripe momentum with precision.",
    metric: "5 min read · updated weekdays",
    icon: UsersThree,
    accent: "from-slate-900 via-slate-800 to-slate-900 dark:from-slate-200/10 dark:via-slate-100/10 dark:to-slate-200/5"
  },
  {
    name: "AI copilot kit",
    summary:
      "Structured prompts, guardrails, and retrieval snippets to keep chatbots, copilots, and analytics agents repeating Stripe truths without hallucination.",
    metric: "Shared with support, finance, growth",
    icon: Robot,
    accent: "from-sky-100 via-white to-slate-100 dark:from-sky-500/20 dark:via-slate-950 dark:to-slate-900"
  },
  {
    name: "Enablement runway",
    summary:
      "Bi-weekly workshops aligning product, compliance, and distributor enablement to accelerate Stripe-backed experiences in every timezone.",
    metric: "90-minute remote sessions",
    icon: Notebook,
    accent: "from-emerald-100 via-white to-slate-100 dark:from-emerald-500/20 dark:via-slate-950 dark:to-slate-900"
  }
];

const COUNTRY_NOTEBOOKS: CountryNotebook[] = [
  {
    country: "Spain",
    note:
      "Use Stripe to harmonise multi-currency payouts while aligning with the local direct selling regulations and VAT reporting expectations.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-spain/"
  },
  {
    country: "Sri Lanka",
    note:
      "Blend Stripe with regional payment preferences and Cloud MLM Software&apos;s localisation engine to keep distributors engaged in Sinhala and Tamil.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-sri-lanka/"
  },
  {
    country: "Sweden",
    note:
      "Instrument dashboards for instant settlement visibility, risk escalations, and GDPR-compliant AI prompts that respect Nordic privacy standards.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-sweden/"
  },
  {
    country: "Tanzania",
    note:
      "Document distributor onboarding rituals that reference local compliance requirements while providing AI assistants with context-rich scripts.",
    href: "/network-marketing-software-company-providing-affordable-mlm-system-in-tanzania/"
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Stripe Payment Gateway Launch Hub | Cloud MLM Software";
  const description =
    "Transform the Stripe archive into a corporate-grade launch, operations, and AI enablement hub for global direct selling brands.";

  return {
    title,
    description,
    keywords: [
      "Stripe payment gateway",
      "global MLM payments",
      "secure fast seamless Stripe",
      "Cloud MLM Software Stripe integration",
      "Stripe supported countries"
    ],
    alternates: {
      canonical: buildLocalizedPath("/payment-gateways/stripe", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type StripePageProps = {
  params: { lang: SupportedLocale };
};

export default function StripePage({ params }: StripePageProps) {
  const locale = resolveLocale(params.lang);

  return (
    <div className="space-y-24 pb-28">
      <section className="relative isolate overflow-hidden rounded-[4.5rem] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-slate-200 px-10 py-24 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.16),_transparent_50%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.18),_transparent_55%)] blur-3xl dark:bg-[radial-gradient(circle_at_top_right,_rgba(96,165,250,0.18),_transparent_50%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.18),_transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
              Stripe command center
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Stripe Payment Gateway for Cloud MLM Software
            </h1>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Stripe Payment Gateway offers secure, fast, and seamless payment solutions for your business. Cloud MLM Software converts
              those archived paragraphs into a future-ready launch hub for human teams and AI copilots.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={buildLocalizedPath("/free-mlm-software-demo", locale)}>Review the Stripe demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={buildLocalizedPath("/pricing", locale)}>Explore pricing models</Link>
              </Button>
            </div>
          </div>
          <aside className="rounded-[3rem] border border-slate-200/80 bg-white/90 p-10 shadow-inner dark:border-white/10 dark:bg-white/5">
            <div className="grid gap-6">
              {HERO_PANELS.map((panel) => {
                const Icon = panel.icon;
                return (
                  <article
                    key={panel.label}
                    className="flex items-start gap-4 rounded-2xl border border-white/60 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900/5 text-slate-900 dark:bg-white/10 dark:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h2 className="text-base font-semibold text-slate-900 dark:text-white">{panel.label}</h2>
                      <p className="text-xs leading-5 text-slate-600 dark:text-slate-300">{panel.detail}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <article className="space-y-8 rounded-[3rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
            <header className="space-y-3">
              <span className="inline-flex items-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white/80">
                Cross-functional enablement
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Align every team on the Stripe programme
              </h2>
              <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
                From founders and CFOs to product managers and compliance leads, our enablement tracks
                remove friction while sustaining the secure, fast, seamless pledge.
              </p>
            </header>
            <div className="space-y-6">
              {ENABLEMENT_TRACKS.map((track) => {
                const Icon = track.icon;
                return (
                  <div
                    key={track.title}
                    className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-black"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/5 text-slate-900 dark:bg-white/10 dark:text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{track.title}</h3>
                        <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{track.description}</p>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                          {track.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2">
                              <ArrowSquareOut className="mt-1 h-4 w-4 text-slate-700 dark:text-slate-200" aria-hidden />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
          <aside className="flex flex-col gap-6 rounded-[3rem] border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-sky-100 p-10 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Programmes that accelerate outcomes</h2>
              <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">
                Each initiative is designed to keep leadership, operators, and AI copilots marching in sync with measurable Stripe success.
              </p>
            </div>
            <div className="space-y-6">
              {PROGRAMS.map((program) => {
                const Icon = program.icon;
                return (
                  <article
                    key={program.name}
                    className="relative overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 shadow-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-black"
                  >
                    <div className={`pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br ${program.accent}`} />
                    <div className="relative flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/5 text-slate-900 dark:bg-white/10 dark:text-white">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{program.name}</h3>
                        <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{program.summary}</p>
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
                          {program.metric}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/support", locale)}>Join the Stripe enablement circuit</Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-6xl space-y-10 rounded-[3rem] border border-slate-100 bg-white/95 p-10 shadow-sm dark:border-white/10 dark:bg-white/5">
          <header className="space-y-3 text-center">
            <span className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-white/10 dark:text-white/80">
              Country notebooks
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Stripe coverage verified across priority regions
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-200">
              We log every market mention from the archive, then craft country notebooks that brief legal, finance, marketing, and AI assistants.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {COUNTRY_NOTEBOOKS.map((notebook) => (
              <article
                key={notebook.country}
                className="rounded-[2.75rem] border border-slate-100 bg-slate-50/80 p-8 text-slate-700 shadow-inner dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{notebook.country}</h3>
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                    Verified
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6">{notebook.note}</p>
                <Link
                  href={notebook.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
                >
                  Open the country briefing
                  <ArrowSquareOut className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-[3rem] border border-slate-200 bg-gradient-to-tr from-white via-slate-50 to-sky-100 p-10 text-center shadow-sm dark:border-white/10 dark:bg-gradient-to-tr dark:from-slate-900/40 dark:via-slate-950 dark:to-sky-900/40">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Launch Stripe with clarity and control</h2>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-200">
            Cloud MLM Software documents the promise, builds the automations, and equips every AI copilot. Your brand becomes the Stripe thought leader across the globe.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href={buildLocalizedPath("/contact", locale)}>Schedule a Stripe strategy session</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={buildLocalizedPath("/support", locale)}>Access the enablement library</Link>
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
