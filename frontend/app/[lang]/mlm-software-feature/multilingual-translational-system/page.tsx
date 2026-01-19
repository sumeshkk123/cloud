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
  Globe,
  Languages,
  MessageCircle,
  Radio,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import {
  ChatsCircle,
  GlobeStand,
  Handshake,
  ListChecks,
  Translate,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type HeroFeature = {
  title: string;
  description: string;
  icon: IconType;
};

type TranslationPillar = {
  title: string;
  detail: string;
  bullets: string[];
  icon: IconType;
};

type AdoptionStage = {
  phase: string;
  heading: string;
  summary: string;
  icon: IconType;
};

type EnablementCard = {
  title: string;
  description: string;
  icon: IconType;
};

const HERO_FEATURES: HeroFeature[] = [
  {
    title: "Native-localised journeys",
    description:
      "Deliver onboarding, genealogy, and payout experiences in the language each member trusts—no external plug-ins required.",
    icon: Translate
  },
  {
    title: "Content governance",
    description:
      "Built-in reviews, approval trails, and version history keep translated assets compliant with regional regulations.",
    icon: ShieldCheck
  },
  {
    title: "Live collaboration",
    description:
      "Field teams co-author copy with corporate while machine suggestions accelerate turnaround without sacrificing tone.",
    icon: MessageCircle
  }
];

const TRANSLATION_PILLARS: TranslationPillar[] = [
  {
    title: "Global reach inside one workspace",
    detail:
      "Activate new territories without building parallel portals. The multilingual layer harmonises navigation, compensation, and commerce in a single codebase.",
    bullets: [
      "Auto-detect user locale and surface the right language instantly.",
      "Provide language-specific product catalogues and compliance notices.",
      "Blend human translators with AI prompts to preserve brand voice."
    ],
    icon: Globe
  },
  {
    title: "Operational clarity for every team",
    detail:
      "Give support, finance, and leadership the context they need through mirrored dashboards, downloadable statements, and alerts in each preferred language.",
    bullets: [
      "Role-based glossaries remove ambiguity in legal and financial terms.",
      "Contextual tooltips ensure complex plan logic reads naturally.",
      "Knowledge bases, scripts, and notifications stay synchronised across locales."
    ],
    icon: Workflow
  },
  {
    title: "Launch-ready localisation services",
    detail:
      "Cloud MLM Software advisors help plan rollouts, coordinate translators, and configure automation so you can move from pilot to global scale with confidence.",
    bullets: [
      "Define translation sprints alongside product or promotion calendars.",
      "Integrate review gates for regulated markets and sensitive claims.",
      "Monitor success metrics with language-level analytics and feedback loops."
    ],
    icon: Sparkles
  }
];

const ADOPTION_STAGES: AdoptionStage[] = [
  {
    phase: "01",
    heading: "Discovery & prioritisation",
    summary:
      "Map audience segments, cross-border regulations, and existing collateral. We translate legacy assets while identifying net-new content requirements.",
    icon: BookOpen
  },
  {
    phase: "02",
    heading: "Translation factory setup",
    summary:
      "Configure CAT tool integrations, approval workflows, and linguistic guidelines so translators and reviewers work in a shared command centre.",
    icon: Languages
  },
  {
    phase: "03",
    heading: "Omnichannel deployment",
    summary:
      "Publish updates to web, mobile, email, and knowledge bases simultaneously. Machine learning suggestions keep cadence fast without losing nuance.",
    icon: Radio
  },
  {
    phase: "04",
    heading: "Continuous optimisation",
    summary:
      "Collect sentiment by market, surface improvement backlogs, and run A/B tests on translated headlines, CTAs, and scripts.",
    icon: Sparkles
  }
];

const ENABLEMENT_CARDS: EnablementCard[] = [
  {
    title: "Market-tuned storytelling",
    description:
      "Tailor compensation explainers, product education, and campaign copy so they resonate culturally while staying on-message.",
    icon: ChatsCircle
  },
  {
    title: "Regulatory alignment",
    description:
      "Track mandated disclosures, distributor agreements, and privacy statements across jurisdictions from one governance dashboard.",
    icon: ShieldCheck
  },
  {
    title: "Field enablement",
    description:
      "Arm leaders with multilingual playbooks, call scripts, and video captions to keep conversations consistent worldwide.",
    icon: UsersThree
  },
  {
    title: "Partner collaboration",
    description:
      "Co-create assets with regional agencies through shared glossaries, comment threads, and approval reminders.",
    icon: Handshake
  }
];

const LANGUAGE_BADGES = [
  "English",
  "Spanish",
  "French",
  "Portuguese",
  "Arabic",
  "Thai",
  "Vietnamese",
  "Malay",
  "Hindi",
  "Japanese",
  "Korean",
  "German"
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Multilingual Translational System | Cloud MLM Software";
  const description =
    "Scale your MLM brand globally with Cloud MLM Software’s multilingual translational system. Launch localised journeys, automate reviews, and keep every market on-message.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/mlm-software-feature/multilingual-translational-system", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MultilingualPageProps = {
  params: { lang: SupportedLocale };
};

export default function MultilingualTranslationalSystemPage({ params }: MultilingualPageProps) {
  const locale = resolveLocale(params.lang);
  const contactHref = buildLocalizedPath("/contact", locale);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const servicesHref = buildLocalizedPath("/services", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-24 text-slate-100">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(59,130,246,0.45),transparent_55%),radial-gradient(circle_at_80%_25%,rgba(192,132,252,0.35),transparent_60%),radial-gradient(circle_at_40%_90%,rgba(59,130,246,0.25),transparent_55%)]"
          aria-hidden
        />
        <div className="container grid gap-14 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,0.6fr)]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/60 bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-indigo-100">
              Multilingual system
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Multilingual Translational System built for global MLM expansion
            </h1>
            <p className="max-w-2xl text-base text-slate-200">
              Cloud MLM Software localises every module—from registration flows to support tickets—so your distributors, customers, and partners experience your brand in the language that feels native. Launch campaigns faster, stay compliant everywhere, and remove friction from international scale-ups.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-indigo-500 text-slate-950 hover:bg-indigo-400">
                <Link href={contactHref}>
                  Plan a localisation sprint
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-indigo-300/60 text-indigo-100 hover:bg-indigo-400/10">
                <Link href={demoHref}>
                  Explore the experience
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-5">
            {HERO_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="group relative overflow-hidden rounded-3xl border border-indigo-400/30 bg-slate-900/80 p-6 shadow-lg backdrop-blur transition hover:border-indigo-200/60 hover:bg-slate-900"
                >
                  <div className="absolute -right-20 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-indigo-400/20 blur-3xl transition group-hover:bg-indigo-300/30" aria-hidden />
                  <div className="relative flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-indigo-400/20 text-indigo-100">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h2 className="text-lg font-semibold text-white">{feature.title}</h2>
                      <p className="text-sm text-slate-200/90">{feature.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container space-y-16">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Localise every interaction with confidence</h2>
          <p className="text-sm text-muted-foreground">
            Move beyond simple text swaps. The multilingual translational system blends automation, editorial control, and analytics so each market receives experiences crafted for their culture and compliance environment.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {TRANSLATION_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="flex h-full flex-col rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-indigo-100/10 p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">{pillar.title}</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{pillar.detail}</p>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <ListChecks className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Launch roadmap
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A proven path to multilingual excellence</h2>
            <p className="text-sm text-muted-foreground">
              Partner with our localisation strategists to design a translation engine that keeps quality high while accelerating entry into new territories.
            </p>
          </div>
          <ol className="grid gap-6 lg:grid-cols-4">
            {ADOPTION_STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <li key={stage.phase} className="relative flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-semibold text-primary">{stage.phase}</span>
                    <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{stage.heading}</h3>
                  <p className="text-sm text-muted-foreground">{stage.summary}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="container grid gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.6fr)]">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Enable every market team</h2>
          <p className="text-sm text-muted-foreground">
            From marketing to compliance, each stakeholder gains a workspace tuned to their responsibilities. Surface insights, approvals, and playbooks where people already operate.
          </p>
          <div className="grid gap-4">
            {ENABLEMENT_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.title} className="relative overflow-hidden rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                  <div className="absolute -right-16 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-primary/15 blur-2xl" aria-hidden />
                  <div className="relative flex gap-4">
                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                      <p className="text-sm text-muted-foreground">{card.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="relative isolate overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-primary/5 p-8 shadow-sm">
          <div className="absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-indigo-200/25 blur-3xl dark:bg-indigo-900/30" aria-hidden />
          <div className="relative space-y-5">
            <h3 className="text-2xl font-semibold text-foreground">Translation operations dashboard</h3>
            <p className="text-sm text-muted-foreground">
              Keep localisation velocity high with actionable analytics. Track time-to-publish, reviewer feedback, and term consistency while collaborating with internal and external linguists.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <GlobeStand className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden />
                <span>Compare launch readiness across markets with health indicators per language.</span>
              </li>
              <li className="flex gap-3">
                <ChatsCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden />
                <span>Collaborate in real time using comment threads and suggested edits directly on-screen.</span>
              </li>
              <li className="flex gap-3">
                <Handshake className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden />
                <span>Assign vendor SLAs, cost codes, and quality scores without leaving the platform.</span>
              </li>
            </ul>
            <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
              <Link href={servicesHref}>
                Talk to localisation experts
                <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container space-y-10">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Languages ready out of the box</h2>
          <p className="text-sm text-muted-foreground">
            Start with your highest-priority markets and expand as you grow. The multilingual translational system adapts to any combination of languages, scripts, and localisation rules.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {LANGUAGE_BADGES.map((language) => (
            <span
              key={language}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-4 py-2 text-sm font-medium text-foreground"
            >
              <Globe className="h-4 w-4 text-primary" aria-hidden />
              {language}
            </span>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/15 via-background to-primary/10 p-12 shadow-sm">
          <div className="absolute -left-24 top-10 h-48 w-48 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-indigo-200/25 blur-3xl dark:bg-indigo-900/35" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,0.45fr)]">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Make every market feel like home
              </h2>
              <p className="text-sm text-muted-foreground">
                Invite our multilingual experts to design a launch roadmap, coordinate translators, and integrate AI assistance where it makes sense. You will deliver polished, compliant experiences from the moment a new region logs in.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href={contactHref}>
                    Book a localisation workshop
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/40 text-primary hover:bg-primary/10">
                  <Link href={demoHref}>
                    Preview translated modules
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-primary/40 bg-background/80 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">Multilingual quick facts</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <Translate className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden />
                  <span>Automated pre-translation with human-in-the-loop reviews speeds up content turnover.</span>
                </li>
                <li className="flex gap-3">
                  <Languages className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden />
                  <span>Maintain glossaries, tone guides, and terminology approvals per market.</span>
                </li>
                <li className="flex gap-3">
                  <UsersThree className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden />
                  <span>Empower distributors with knowledge bases, chatbot answers, and announcements in their preferred language.</span>
                </li>
              </ul>
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
