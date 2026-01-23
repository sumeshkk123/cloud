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
  Atom,
  BadgeCheck,
  BrainCircuit,
  Droplet,
  FlaskConical,
  Globe2,
  Handshake,
  Leaf,
  ShieldCheck,
  Users
} from "lucide-react";
import { ChartLineUp, Lightning, UsersThree, Waveform } from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Signal = {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
};

type Pillar = {
  title: string;
  description: string;
  evidence: string;
  icon: IconType;
};

type Experience = {
  phase: string;
  description: string;
  enablement: string;
  icon: IconType;
};

type CloudPlay = {
  title: string;
  description: string;
  payoff: string;
  icon: IconType;
};

const SIGNALS: Signal[] = [
  {
    label: "Revenue",
    value: "$100M",
    detail: "CBD and wellness innovation anchored in Las Vegas fuels consistent momentum.",
    icon: ChartLineUp
  },
  {
    label: "Founded",
    value: "2014",
    detail: "Entrepreneurs Josh and Jenna Zwagil built MDC to fuse wellness with next-gen marketing.",
    icon: Atom
  },
  {
    label: "Compensation",
    value: "Multilevel",
    detail: "Person-to-person mentorship plus digital funnels reward education-led selling.",
    icon: Handshake
  },
  {
    label: "Employees",
    value: "70 teammates",
    detail: "Lean corporate crew orchestrates product R&D, compliance, and affiliate marketing suites.",
    icon: UsersThree
  },
  {
    label: "Primary market",
    value: "United States",
    detail: "Expanding audiences in hemp-friendly regions across North America and global markets.",
    icon: Globe2
  },
  {
    label: "Hero portfolio",
    value: "CBD oils • topicals • nutritional sprays • essential wellness lines",
    detail: "Organically grown hemp, rigorous testing, and proprietary formulations differentiate MDC.",
    icon: Droplet
  }
];

const PILLARS: Pillar[] = [
  {
    title: "Seed-to-shelf transparency",
    description:
      "Organically grown hemp, CO2 extraction, and third-party lab validation keep potency and purity measurable.",
    evidence:
      "Certificates of analysis, QR-coded packaging, and blockchain-ready sourcing data build regulatory confidence.",
    icon: ShieldCheck
  },
  {
    title: "Education-powered advocacy",
    description:
      "Affiliates share personal wellness transformations backed by compliance-ready content and clinical explainers.",
    evidence:
      "Weekly masterclasses, marketing funnels, and AI-assisted content libraries keep stories fact-based and compelling.",
    icon: BrainCircuit
  },
  {
    title: "Lifestyle expansion studio",
    description:
      "Beyond HempWorx, MDC incubates brands spanning travel perks, essential nutrition, and smart home wellness.",
    evidence:
      "Bundles and subscription paths encourage families to experience the broader MDC ecosystem over time.",
    icon: FlaskConical
  }
];

const EXPERIENCES: Experience[] = [
  {
    phase: "Spark curiosity",
    description:
      "Leverage omni-channel storytelling—reels, webinars, pop-up lounges—to demystify CBD science and lifestyle benefits.",
    enablement:
      "Cloud MLM Software curates compliant talking points, CTA frameworks, and localized offers that convert intrigue into action.",
    icon: Lightning
  },
  {
    phase: "Personalize wellness stacks",
    description:
      "Walk customers through dosage coaching, topical layering, and supportive nutrition to craft tailored wellness rituals.",
    enablement:
      "AI playbooks surface dosing calculators, contraindication alerts, and reorder timing so consultants stay precise.",
    icon: Leaf
  },
  {
    phase: "Sustain prosperity",
    description:
      "Recognition events, gamified challenges, and affiliate marketing suites help builders scale teams responsibly.",
    enablement:
      "Dashboards track momentum, culture metrics, and compliance heatmaps so leaders can intervene before gaps arise.",
    icon: Users
  }
];

const CLOUD_PLAYS: CloudPlay[] = [
  {
    title: "Regulated market intelligence",
    description:
      "Monitors state-by-state CBD legislation, shipping constraints, and testing standards within one governance hub.",
    payoff: "Keeps the field informed, agile, and compliant as regulations evolve.",
    icon: Waveform
  },
  {
    title: "Hyper-personalized dosing engine",
    description:
      "Merges biometrics, lifestyle surveys, and product inventory to recommend refill cadence and complementary products.",
    payoff: "Boosts customer retention while respecting potency, safety, and personalization promises.",
    icon: BadgeCheck
  },
  {
    title: "Affiliate growth cockpit",
    description:
      "Unifies funnel analytics, influencer partnerships, and conversion campaigns so leaders can scale sustainably.",
    payoff: "Turns scattered digital efforts into orchestrated, data-backed growth loops.",
    icon: Users
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "MyDailyChoice & HempWorx MLM Strategy: CBD Wellness at Scale";
  const description =
    "Review how MyDailyChoice/HempWorx combines CBD transparency, digital funnels, and people-first communities with Cloud MLM Software orchestration.";
  const keywords = [
    "MyDailyChoice HempWorx MLM analysis",
    "CBD direct sales strategy",
    "wellness affiliate enablement",
    "hemp product MLM software",
    "Cloud MLM Software for MyDailyChoice"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: buildLocalizedPath("/mlm-companies/mydailychoicehempworx", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MyDailyChoicePageProps = {
  params: { lang: SupportedLocale };
};

export default function MyDailyChoicePage({ params }: MyDailyChoicePageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);

  return (
    <main className="space-y-24 pb-24">
      <section className="relative overflow-hidden rounded-[2.75rem] border border-lime-200 bg-gradient-to-br from-[#04120a] via-[#112e1a] to-[#111636] px-8 py-20 text-white shadow-lg dark:border-lime-400/40">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-80 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 18% 18%, rgba(132, 204, 22, 0.32), transparent 56%), radial-gradient(circle at 78% 16%, rgba(129, 140, 248, 0.25), transparent 60%), radial-gradient(circle at 45% 86%, rgba(134, 239, 172, 0.28), transparent 60%)"
          }}
          aria-hidden
        />
        <div className="container grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-lime-100">
              MyDailyChoice • HempWorx wellness leadership
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              MyDailyChoice/HempWorx empowers CBD advocates with compliant innovation and human storytelling.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/80">
              From seed-to-shelf transparency to digital funnels, MDC helps families embrace natural wellness. Cloud MLM Software ensures every
              advocate is data-informed, regulation-ready, and primed to flourish.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                <Link href={demoHref}>
                  Step inside the compliance-ready AI demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-lime-900 hover:bg-lime-50">
                <Link href={contactHref}>
                  Craft your CBD growth blueprint
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-white/60">
              Ranked #86 worldwide with 70 teammates empowering thousands of wellness entrepreneurs.
            </p>
          </div>
          <aside className="relative space-y-5 rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-md">
            <div className="absolute inset-y-0 right-[-28%] w-1/2 bg-gradient-to-b from-lime-300/35 via-transparent to-transparent blur-3xl" aria-hidden />
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">Wellness differentiators</h2>
            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Quality promise</p>
                <p className="text-base font-semibold text-white">Organically grown hemp, COAs on every bottle, full traceability.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Digital DNA</p>
                <p className="text-base font-semibold text-white">High-converting funnels, affiliate dashboards, and marketing tech suites.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase text-white/70">Culture of empowerment</p>
                <p className="text-base font-semibold text-white">Recognition, education, and purpose-driven philanthropy guide every launch.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Signals shaping our partnership</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            We monitor these realities to configure Cloud MLM Software precisely for MDC’s compliance-first, digital-native model.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SIGNALS.map((signal) => {
            const Icon = signal.icon;
            return (
              <article
                key={signal.label}
                className="relative overflow-hidden rounded-3xl border border-lime-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-lime-400/30 dark:bg-lime-950/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-lime-100/40 via-transparent to-transparent dark:from-lime-500/10" aria-hidden />
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-lime-500/10 text-lime-600 dark:bg-lime-500/20 dark:text-lime-200">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <div className="relative mt-4 space-y-1.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-lime-600 dark:text-lime-200">{signal.label}</p>
                  <p className="text-xl font-semibold text-slate-900 dark:text-white">{signal.value}</p>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{signal.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container overflow-hidden rounded-[2.5rem] border border-lime-100 bg-gradient-to-br from-white via-lime-50 to-slate-50 px-8 py-16 shadow-sm dark:border-lime-400/30 dark:from-[#05150d] dark:via-[#091b14] dark:to-[#121f2e]">
        <div className="grid gap-10 lg:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="flex h-full flex-col gap-4 rounded-2xl bg-white/85 p-6 dark:bg-white/10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-lime-500/10 text-lime-600 dark:text-lime-200">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">{pillar.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-lime-600 dark:text-lime-300">{pillar.evidence}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Field experience choreography</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            MDC advocates thrive when education, personalization, and recognition combine. We turn that recipe into actionable steps.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {EXPERIENCES.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <article
                key={experience.phase}
                className="relative flex h-full flex-col gap-4 rounded-3xl border border-lime-100 bg-white p-6 shadow-sm dark:border-lime-400/30 dark:bg-lime-950/40"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-lime-500/10 text-lime-600 dark:bg-lime-500/20 dark:text-lime-200">
                  {index + 1}
                </span>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-lime-500/10 text-lime-600 dark:bg-lime-500/20 dark:text-lime-200">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{experience.phase}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{experience.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-lime-600 dark:text-lime-300">{experience.enablement}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Cloud MLM Software plays for MDC</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Intelligent orchestration keeps CBD compliance tight, digital funnels sharp, and customer outcomes front and center.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {CLOUD_PLAYS.map((play) => {
            const Icon = play.icon;
            return (
              <article
                key={play.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-lime-100 bg-white p-6 shadow-sm dark:border-lime-400/30 dark:bg-lime-950/40"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-lime-500/10 text-lime-600 dark:bg-lime-500/20 dark:text-lime-200">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{play.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{play.description}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-lime-600 dark:text-lime-300">{play.payoff}</p>
              </article>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href={pricingHref}>
              Explore platform pricing
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-lime-900 hover:bg-lime-50 dark:bg-white/10 dark:text-lime-100"
          >
            <Link href={contactHref}>
              Plan a regulated growth workshop
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
