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
  BarChart4,
  Cpu,
  Download,
  GaugeCircle,
  LineChart,
  NotepadText,
  PieChart
} from "lucide-react";
import {
  AppStoreLogo,
  ChartBar,
  Planet,
  TrendUp,
  UsersFour
} from "@phosphor-icons/react/dist/ssr";

export const dynamic = "force-static";

type IconType = ComponentType<{ className?: string }>;

type Feature = {
  title: string;
  description: string;
  icon: IconType;
};

type Step = {
  step: string;
  title: string;
  description: string;
  icon: IconType;
};

type Entry = {
  label: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    title: "Tailored scenarios",
    description:
      "Adjust contribution sizes, compounding intervals, sponsor overrides, and retention bonuses to reflect your investment structure.",
    icon: Cpu
  },
  {
    title: "Visual storytelling",
    description:
      "Present earnings trajectories through charts that highlight breakeven points, projected maturity values, and sponsor rewards.",
    icon: ChartBar
  },
  {
    title: "Income projections",
    description:
      "Forecast direct returns, override commissions, and reinvested dividends so stakeholders understand upside and risk.",
    icon: TrendUp
  },
  {
    title: "Guided experience",
    description:
      "Responsive layouts and inline prompts make it simple for teams to capture accurate assumptions without spreadsheets.",
    icon: UsersFour
  }
];

const STEPS: Step[] = [
  {
    step: "01",
    title: "Define the investment baseline",
    description:
      "Enter capital commitment, frequency, and compounding preferences. The calculator instantly plots the growth curve.",
    icon: NotepadText
  },
  {
    step: "02",
    title: "Layer sponsor economics",
    description:
      "Model sponsor commissions, performance bonuses, and holding periods to understand organisation-wide payouts.",
    icon: LineChart
  },
  {
    step: "03",
    title: "Share the insights",
    description:
      "Export personalised reports or embed charts into your proposal decks so investors visualise achievable returns.",
    icon: Download
  }
];

const INPUTS: Entry[] = [
  {
    label: "Initial contribution",
    description: "Set the capital amount or recurring investment that each participant contributes."
  },
  {
    label: "Compounding cadence",
    description: "Choose daily, weekly, monthly, or custom compounding to reflect plan promises."
  },
  {
    label: "Sponsor overrides",
    description: "Configure percentage-based or fixed bonuses for uplines across selected levels."
  },
  {
    label: "Retention bonuses",
    description: "Apply milestone or tenure rewards to keep investors engaged and on track."
  }
];

const OUTPUTS: Entry[] = [
  {
    label: "Growth chart",
    description: "Visualise how capital and earnings evolve over the chosen timeline."
  },
  {
    label: "Commission summary",
    description: "Break down payouts by role, level, and commission type to maintain transparency."
  },
  {
    label: "Breakeven insights",
    description: "Identify when investors recover initial commitments and when profit streams accelerate."
  },
  {
    label: "Export package",
    description: "Generate PDF or spreadsheet reports for investor pitches or internal approvals."
  }
];

export async function generateMetadata({ params }: { params: { lang: SupportedLocale } }): Promise<Metadata> {
  const locale = resolveLocale(params.lang);
  const title = "Investment Plan MLM Calculator";
  const description =
    "Use the Cloud MLM Software investment calculator to model returns, sponsor payouts, and retention incentives in seconds.";

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath("/investment-plan-mlm-calculator", locale)
    },
    openGraph: {
      title,
      description
    }
  };
}

type InvestmentCalculatorPageProps = {
  params: { lang: SupportedLocale };
};

export default function InvestmentCalculatorPage({ params }: InvestmentCalculatorPageProps) {
  const locale = resolveLocale(params.lang);
  const demoHref = buildLocalizedPath("/investment-mlm-plan-software-demo", locale);
  const contactHref = buildLocalizedPath("/contact", locale);
  const mobileAppHref = "https://demo.cloudmlmsoftware.com";

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-cyan-950">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_12%,rgba(45,212,191,0.22),transparent_45%),radial-gradient(circle_at_86%_16%,rgba(14,165,233,0.22),transparent_52%)]" />
        <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              <GaugeCircle className="h-4 w-4" aria-hidden />
              Interactive return modeller
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Project investment plan earnings with precision and clarity.
            </h1>
            <p className="text-base text-muted-foreground">
              The investment MLM calculator helps leaders, sponsors, and investors understand how contributions, compounding, and overrides translate into sustainable income. Ditch static spreadsheets—model scenarios in seconds and turn insights into action.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={demoHref}>
                  Watch the live demo
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href={contactHref}>
                  Talk to our specialists
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 rounded-3xl border border-border/60 bg-background/80 p-6 shadow-sm backdrop-blur">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-muted/30 p-4">
                  <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <h2 className="text-sm font-semibold text-foreground">{feature.title}</h2>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </article>
              );
            })}
          </aside>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How the calculator works</h2>
          <p className="text-sm text-muted-foreground">
            Present investment opportunities with transparency. Each step helps your audience visualise growth, understand risk, and gain confidence in your plan design.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">{step.step}</p>
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20 dark:bg-slate-900/40">
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Inputs and outputs that matter</h2>
            <p className="text-sm text-muted-foreground">
              Mix and match plan variables, then export reports for investors, compliance teams, or executive sponsors.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-base font-semibold text-foreground">Key inputs</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {INPUTS.map((entry) => (
                  <li key={entry.label} className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    <span>
                      <span className="font-semibold text-foreground">{entry.label}:</span> {entry.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-base font-semibold text-foreground">What you get back</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {OUTPUTS.map((entry) => (
                  <li key={entry.label} className="flex items-start gap-2">
                    <ArrowRight className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
                    <span>
                      <span className="font-semibold text-foreground">{entry.label}:</span> {entry.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Carry the calculator everywhere</h2>
          <p className="text-sm text-muted-foreground">
            Launch the investment modeller inside our AI-powered mobile experience so field leaders can demo opportunity scenarios during events or on the road.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link href={mobileAppHref} target="_blank" rel="noopener noreferrer">
                <AppStoreLogo className="mr-2 h-4 w-4" aria-hidden />
                Preview the mobile app
              </Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-4 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <PieChart className="h-5 w-5" aria-hidden />
            </span>
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-foreground">Data stays synchronised</h3>
              <p className="text-sm text-muted-foreground">
                Calculations, saved scenarios, and investor notes stay in sync across web and mobile so teams always work from the latest insights.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <BarChart4 className="h-5 w-5" aria-hidden />
            </span>
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-foreground">Offline-ready demonstrations</h3>
              <p className="text-sm text-muted-foreground">
                Host calculators offline and sync when you reconnect, perfect for investor events or locations with limited connectivity.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Planet className="h-5 w-5" aria-hidden />
            </span>
            <div className="space-y-1">
              <h3 className="text-base font-semibold text-foreground">Multi-language experiences</h3>
              <p className="text-sm text-muted-foreground">
                Localise calculator inputs, labels, and disclosures to support cross-border investment launches.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-gradient-to-br from-cyan-50 via-white to-emerald-50 py-20 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-900">
        <div className="container space-y-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Deploy the investment calculator with your branding</h2>
            <p className="text-sm text-muted-foreground">
              We tailor the experience to your product catalogue, terminology, and compliance expectations, then embed it within the Cloud MLM Software platform.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-base font-semibold text-foreground">White-label design</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Match brand colours, typography, and messaging so investors feel confident from their first interaction.
              </p>
            </article>
            <article className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-base font-semibold text-foreground">Data integrations</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Sync with CRM, finance, and analytics systems to keep opportunity data and outcomes aligned.
              </p>
            </article>
            <article className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
              <h3 className="text-base font-semibold text-foreground">Training resources</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Provide enablement guides and quick-start videos that help sponsors and investors master the tool quickly.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background p-10 shadow-sm">
          <div className="absolute -left-20 -top-14 h-48 w-48 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 right-0 h-64 w-64 translate-y-1/3 rounded-full bg-sky-200/20 blur-3xl dark:bg-sky-900/30" aria-hidden />
          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Need a custom calculator?</h2>
              <p className="text-sm text-muted-foreground">
                Share your product categories, incentive rules, and investor personas. We’ll tailor the calculator and deploy it within your Cloud MLM Software environment.
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/40 bg-primary/5 p-6 text-primary shadow-sm dark:border-primary/50 dark:bg-primary/10">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Get started now</h3>
                <p className="text-sm text-primary/80 dark:text-primary/70">
                  Our specialists respond within one business day with a scoping questionnaire and next steps.
                </p>
              </div>
              <Button asChild>
                <Link href={contactHref}>
                  Request a consultation
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
