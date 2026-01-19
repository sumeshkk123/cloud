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
  ArrowUpRight,
  BarChart3,
  CreditCard,
  Globe,
  Languages,
  MapPinned,
  Radar,
  ShieldCheck,
  Workflow
} from "lucide-react";
import {
  ChatsCircle,
  CirclesFour,
  Translate,
  UsersThree
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Capability = {
  title: string;
  description: string;
  icon: IconType;
};

type Track = {
  label: string;
  title: string;
  summary: string;
};

type Insight = {
  title: string;
  description: string;
  metric: string;
};

const CAPABILITIES: Capability[] = [
  {
    title: "Adaptive localisation",
    description:
      "Mirror distributor journeys across 15+ languages with content governance, legal variations, and AI-assisted translations.",
    icon: Translate
  },
  {
    title: "Multi-currency commerce",
    description:
      "Deliver checkout, tax, and commission payments in local currencies with live FX safeguards and treasury oversight.",
    icon: CreditCard
  },
  {
    title: "Region-aware automation",
    description:
      "Trigger workflows, notifications, and rank evaluations using territory-specific compliance logic.",
    icon: Workflow
  },
  {
    title: "Unified analytics",
    description:
      "Roll up performance dashboards that translate KPIs while preserving native currency and context.",
    icon: BarChart3
  }
];

const TRACKS: Track[] = [
  {
    label: "Discovery",
    title: "Audience intelligence",
    summary:
      "Map regional personas, compensation nuances, and product priorities to inform localisation depth."
  },
  {
    label: "Launch",
    title: "Experience orchestration",
    summary:
      "Translate onboarding flows, compliance attestations, and marketing journeys with built-in QA cycles."
  },
  {
    label: "Scale",
    title: "Sustained optimisation",
    summary:
      "Monitor sentiment, engagement, and conversion to continuously fine-tune copy, imagery, and incentives."
  }
];

const INSIGHTS: Insight[] = [
  {
    title: "Global activation",
    description: "Distributors engage faster when they see products, promotions, and recognition in their native language.",
    metric: "38% faster enrolment completion"
  },
  {
    title: "Commerce agility",
    description: "Finance teams reconcile commissions confidently with controlled FX conversions and automated audits.",
    metric: "Zero manual currency adjustments"
  },
  {
    title: "Brand resonance",
    description: "Marketing and field teams deliver culturally aligned campaigns that reinforce your global narrative.",
    metric: "4.2x increase in campaign click-through"
  }
];

export async function generateMetadata({
  params
}: {
  params: { lang: SupportedLocale };
}): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Multi-Lingual System";
  const description =
    "Deliver multilingual, multi-currency MLM experiences that feel local everywhere with Cloud MLM Software.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/multi-lingual-system", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type MultiLingualPageProps = {
  params: { lang: SupportedLocale };
};

export default function MultiLingualPage({ params }: MultiLingualPageProps) {
  const locale = resolveLocale(params.lang);
  const demoHref = buildLocalizedPath("/free-mlm-software-demo", locale);
  const contactHref = buildLocalizedPath("/contact", locale);
  const consultingHref = buildLocalizedPath("/mlm-consulting", locale);

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_15%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(14,165,233,0.28),transparent_55%),radial-gradient(circle_at_60%_80%,rgba(129,140,248,0.35),transparent_60%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300/50 bg-sky-400/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-sky-100">
              Global-ready infrastructure
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              Speak to every market with a single multilingual, multi-currency MLM platform.
            </h1>
            <p className="max-w-2xl text-base text-slate-100/85">
              Cloud MLM Software localises distributor and customer experiences end-to-end—from enrolment and commissions to mobile apps and analytics—ensuring your brand feels native in every region.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-white/90">
                <Link href={demoHref}>
                  View the multilingual demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-sky-200/60 text-sky-100 hover:bg-sky-400/10"
              >
                <Link href={consultingHref}>
                  Plan a localisation roadmap
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative space-y-6 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-sky-400/40 blur-3xl" aria-hidden />
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/80">
              <span>Live language coverage</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold">
                <Globe className="h-3.5 w-3.5" aria-hidden />
                18 locales
              </span>
            </div>
            <div className="grid gap-4 rounded-2xl border border-white/20 bg-slate-950/40 p-4 text-sm text-slate-100/80">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-semibold text-white">
                  <Languages className="h-4 w-4" aria-hidden />
                  Smart translation memory
                </span>
                <span>98% reuse</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-semibold text-white">
                  <ShieldCheck className="h-4 w-4" aria-hidden />
                  Compliance workflows
                </span>
                <span>Region-aware</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-semibold text-white">
                  <Radar className="h-4 w-4" aria-hidden />
                  Sentiment tracking
                </span>
                <span>AI assisted</span>
              </div>
            </div>
            <p className="text-xs text-slate-100/75">
              Distributors access branded portals, academies, and compensation dashboards in their preferred language within seconds of sign-in.
            </p>
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Capabilities engineered for global scale
          </h2>
          <p className="text-sm text-muted-foreground">
            From translation workflows to fiscal controls, every module keeps your brand consistent while respecting local expectations.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <article
                key={capability.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{capability.title}</h3>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-20 dark:bg-slate-950/40">
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              A localisation practice trusted by enterprise MLM leaders
            </h2>
            <p className="text-sm text-muted-foreground">
              Our specialists operate as an extension of your marketing, product, and compliance teams to orchestrate multilingual journeys from launch to long-term optimisation.
            </p>
          </div>
          <div className="grid gap-6">
            {TRACKS.map((track) => (
              <article
                key={track.title}
                className="relative overflow-hidden rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
              >
                <div className="absolute -left-12 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden />
                <div className="relative space-y-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                    {track.label}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{track.title}</h3>
                  <p className="text-sm text-muted-foreground">{track.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Intelligence for every team
            </span>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Turn multilingual engagement into measurable business outcomes
            </h2>
            <p className="text-sm text-muted-foreground">
              Real-time dashboards connect language adoption, order flow, and rank progression so leaders can make informed decisions faster.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {INSIGHTS.map((insight) => (
                <article
                  key={insight.title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-border/60 bg-background p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-foreground">{insight.title}</h3>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{insight.metric}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="relative space-y-6 overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-background to-sky-50 p-8 shadow-sm dark:from-primary/15 dark:via-slate-950 dark:to-sky-900/30">
            <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-primary/20 blur-3xl" aria-hidden />
            <div className="absolute bottom-0 right-0 h-52 w-52 translate-y-1/3 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-900/30" aria-hidden />
            <div className="relative space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/40 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm dark:bg-slate-950/50">
                <ChatsCircle className="h-4 w-4" aria-hidden />
                Localisation command centre
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Co-create a multilingual centre of excellence with Cloud MLM advisors.
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CirclesFour className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  Governance playbooks and translation QA protocols.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <UsersThree className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  Regional advisory councils to adapt promotions and recognition.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPinned className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  Expansion roadmaps aligned to product launches and regulatory needs.
                </li>
              </ul>
              <Button asChild size="lg">
                <Link href={contactHref}>
                  Connect with localisation experts
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-background to-slate-100 p-10 shadow-sm dark:from-primary/15 dark:via-slate-950 dark:to-slate-900">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 translate-y-1/3 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Expand into new markets with confidence
              </h2>
              <p className="text-sm text-muted-foreground">
                Share your market priorities, current systems, and localisation goals. We will build a programme that integrates technology, content, and culture for your next wave of growth.
              </p>
            </div>
            <div className="grid gap-3 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur-sm dark:border-primary/30 dark:bg-slate-950/70">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Languages deployed</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-primary">
                  <Globe className="h-3.5 w-3.5" aria-hidden />
                  18
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Payment methods localised</span>
                <span className="font-semibold text-foreground">24</span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Support coverage</span>
                <span className="font-semibold text-foreground">24/5 multilingual helpdesk</span>
              </div>
              <Button asChild>
                <Link href={contactHref}>
                  Request a multilingual strategy session
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
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
