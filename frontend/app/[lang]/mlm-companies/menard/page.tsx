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
  Beaker,
  Candle,
  Droplets,
  Gem,
  Globe2,
  HeartHandshake,
  Palette,
  Sparkles,
  Users
} from "lucide-react";
import { ChartLineUp, FlowerLotus, HandHeart, UsersThree } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Signal = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Heritage = {
  title: string;
  description: string;
  proof: string;
  icon: IconType;
};

type Ritual = {
  step: string;
  narrative: string;
  insight: string;
  icon: IconType;
};

type CloudMove = {
  title: string;
  description: string;
  payoff: string;
  icon: IconType;
};

const SIGNALS: Signal[] = [
  {
    label: "Annual revenue",
    value: "$226.5M",
    detail: "Luxury skincare and cosmetics trusted across Japan’s high-touch beauty circles.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "1959",
    detail: "Nagoya-based family legacy anchored in meticulous R&D and artisanal formulation.",
    icon: Gem
  },
  {
    label: "Compensation",
    value: "Multilevel",
    detail: "Relationship-driven tiers that reward bespoke service and mentoring depth.",
    icon: HeartHandshake
  },
  {
    label: "Headquarters",
    value: "Nagoya, Japan",
    detail: "Innovation campus designing next-gen skin diagnostics and couture beauty.",
    icon: Globe2
  },
  {
    label: "Core portfolio",
    value: "Skincare • Body care • Fragrance • Cosmetics",
    detail: "Signature lines harmonize science, sensorial design, and wellbeing rituals.",
    icon: Palette
  },
  {
    label: "Field focus",
    value: "Person-to-person artistry",
    detail: "Beauty consultants orchestrate intimate consultations and lasting care.",
    icon: HandHeart
  }
];

const HERITAGE: Heritage[] = [
  {
    title: "Science-woven artistry",
    description:
      "Menard formulates with premium botanicals, patented actives, and omotenashi-inspired presentation that turns skincare into theater.",
    proof:
      "From the Embellir collection to salon-grade facial elixirs, every launch is tested for luminous results and ritual enjoyment.",
    icon: Sparkles
  },
  {
    title: "Holistic beauty philosophy",
    description:
      "Luxury should restore balance. Full-body care, fragrance layering, and self-care coaching create harmony inside every household.",
    proof:
      "Consultants tailor regimens across skin, body, and mindfulness so clients experience beauty as daily emotional nourishment.",
    icon: FlowerLotus
  },
  {
    title: "People-first community",
    description:
      "Mentors share their own transformations, co-host masterclasses, and welcome customers into a support network that feels familial.",
    proof:
      "Events are collective celebrations that blend education, gratitude, and gratitude diaries to sustain long-term relationships.",
    icon: HeartHandshake
  }
];

const RITUALS: Ritual[] = [
  {
    step: "Atmosphere of calm",
    narrative:
      "Create lounge-like venues with fragrance zoning, textured lighting, and tactile displays to set an elegant tone before consultations begin.",
    insight:
      "Cloud MLM Software models scent combinations, lighting cues, and guest arrival sequencing to keep experiences cinematic yet repeatable.",
    icon: Candle
  },
  {
    step: "Precision skin readings",
    narrative:
      "Blend diagnostics, sensory testing, and storytelling around ingredient provenance to curate a couture regimen for every guest.",
    insight:
      "AI copilots surface product pairings, contraindication alerts, and approved narratives so consultants stay confident and compliant.",
    icon: Beaker
  },
  {
    step: "Afterglow stewardship",
    narrative:
      "Follow with personalized journaling prompts, mini-experiences, and seasonal masterclasses that deepen community ties.",
    insight:
      "Automations nudge reorders, milestone gifting, and loyalty upgrades while preserving the human warmth Menard is known for.",
    icon: Users
  }
];

const CLOUD_MOVES: CloudMove[] = [
  {
    title: "Luminosity intelligence engine",
    description:
      "Maps diagnostic data, product potency, and lifestyle context to recommend the next luminous ritual for every household.",
    payoff: "Increases regimen adherence while safeguarding inventory and compliance across multilevel networks.",
    icon: Droplets
  },
  {
    title: "Consultant immersion studio",
    description:
      "Packages ingredient research, masterclass footage, and gratitude scripts into adaptive learning tracks for the field.",
    payoff: "Keeps artistry consistent across Japan and global diaspora communities without diluting Menard’s signature voice.",
    icon: UsersThree
  },
  {
    title: "Sentiment and loyalty radar",
    description:
      "Watches post-event feedback, reorder cadence, and referral momentum to unlock timely coaching interventions.",
    payoff: "Signals when to double down on service moments so every relationship continues to glow.",
    icon: Candle
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Menard MLM Experience Blueprint & Luxury Beauty Enablement";
  const description =
    "See how Menard’s Japanese skincare heritage, multilevel artistry, and people-first community soar with Cloud MLM Software precision.";
  const keywords = [
    "Menard MLM analysis",
    "Menard Japan direct selling",
    "luxury skincare MLM software",
    "beauty consultant enablement",
    "Cloud MLM Software for Menard"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/menard", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MenardPageProps = {
  params: { lang: SupportedLocale };
};

export default function MenardPage({ params }: MenardPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-purple-200/50 bg-gradient-to-br from-[#2f0f36] via-[#4f1a58] to-[#0f172a] px-8 py-20 text-white shadow-lg dark:border-purple-400/40">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-90 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(236, 72, 153, 0.35), transparent 55%), radial-gradient(circle at 75% 15%, rgba(147, 197, 253, 0.25), transparent 60%), radial-gradient(circle at 50% 85%, rgba(244, 114, 182, 0.28), transparent 65%)"
          }}
          aria-hidden
        />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-fuchsia-100">
              Menard • Nagoya luxury beauty
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Menard elevates beauty and wellbeing with precision science, artistry, and heartfelt mentorship.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/80">
              Born in 1959, the Menard brand treats skincare as a celebration of elegance. Cloud MLM Software equips consultants with AI co-creators
              that preserve the brand’s couture rituals while scaling multilevel growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                <Link href={demoHref}>
                  Experience the luxury AI studio
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
                <Link href={contactHref}>
                  Craft your consultant enablement path
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-white/60">
              Ranked #55 globally with immersive salons that turn product education into confidence-building ceremonies.
            </p>
          </div>
          <aside className="relative space-y-5 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
            <div className="absolute inset-y-0 right-[-28%] w-1/2 bg-gradient-to-b from-fuchsia-300/40 via-transparent to-transparent blur-3xl" aria-hidden />
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">Signature moments</h2>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Masterclass focus</p>
                <p className="text-base font-semibold text-white">Skin diagnostics, sensorial storytelling, gratitude rituals.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Community promise</p>
                <p className="text-base font-semibold text-white">Every guest leaves feeling seen, soothed, and inspired.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Growth mindset</p>
                <p className="text-base font-semibold text-white">Multilevel support built on service excellence and cultural empathy.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Strategic signals we monitor</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Data depth protects Menard’s prestige while guiding scalable, human-first experiences across your network.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SIGNALS.map((signal) => {
            const Icon = signal.icon;
            return (
              <article
                key={signal.label}
                className="relative overflow-hidden rounded-3xl border border-purple-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-purple-400/30 dark:bg-purple-950/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-100/40 via-transparent to-transparent dark:from-fuchsia-500/10" aria-hidden />
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-fuchsia-500/10 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-200">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="relative mt-4 space-y-1.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-fuchsia-600 dark:text-fuchsia-200">{signal.label}</p>
                  <p className="text-xl font-semibold text-slate-900 dark:text-white">{signal.value}</p>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{signal.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container overflow-hidden rounded-[2.5rem] border border-purple-100 bg-gradient-to-br from-white via-purple-50 to-sky-50 px-8 py-16 shadow-sm dark:border-purple-400/30 dark:from-[#0d0719] dark:via-[#120b25] dark:to-[#0f172a]">
        <div className="grid gap-10 lg:grid-cols-3">
          {HERITAGE.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="flex h-full flex-col gap-4 rounded-2xl bg-white/85 p-6 dark:bg-white/10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-200">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">{pillar.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-fuchsia-600 dark:text-fuchsia-300">{pillar.proof}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Designing Menard’s luxury ritual journey</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Every interaction is choreographed to honor the guest. We translate the brand’s elegance into actionable playbooks for every consultant.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {RITUALS.map((ritual, index) => {
            const Icon = ritual.icon;
            return (
              <article
                key={ritual.step}
                className="relative flex h-full flex-col gap-4 rounded-3xl border border-purple-100 bg-white p-6 shadow-sm dark:border-purple-400/30 dark:bg-purple-950/40"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-fuchsia-500/10 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-200">
                  {index + 1}
                </span>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-fuchsia-500/10 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{ritual.step}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{ritual.narrative}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-fuchsia-600 dark:text-fuchsia-300">{ritual.insight}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Cloud MLM Software accelerator plays</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            We combine AI, data orchestration, and compliance guardrails so Menard can scale multilevel artistry without diluting soul or service.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CLOUD_MOVES.map((move) => {
            const Icon = move.icon;
            return (
              <article
                key={move.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-purple-100 bg-white p-6 shadow-sm dark:border-purple-400/30 dark:bg-purple-950/40"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-fuchsia-500/10 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{move.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{move.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-fuchsia-600 dark:text-fuchsia-300">{move.payoff}</p>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={pricingHref}>
              Explore pricing options
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="bg-white text-purple-900 hover:bg-purple-50 dark:bg-white/10 dark:text-fuchsia-100">
            <Link href={contactHref}>
              Host a luxury enablement workshop
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}
